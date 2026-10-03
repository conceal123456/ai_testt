import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VoxelWorld } from './voxelWorld.js';
import { ChineseArchitectureBuilder } from './architecture.js';
import { VoxelType } from './palette.js';

/**
 * 3D 体素中国古典建筑群主控应用
 */
export class ArchitectureApp {
  constructor(container) {
    this.container = container;
    this.isAutoRotating = true;
    this.currentAtmosphere = 'sunset'; // 默认：紫禁落日（金辉斜阳）

    this.initScene();
    this.initLights();
    this.buildWorld();
    this.initControls();
    this.initPostProcessingAndFog();
    this.bindEvents();

    this.animate = this.animate.bind(this);
    this.lastTime = performance.now();
    this.frameCount = 0;
    this.fps = 60;

    requestAnimationFrame(this.animate);
  }

  initScene() {
    this.scene = new THREE.Scene();

    // 默认背景色与初始落日氛围
    this.scene.background = new THREE.Color(0xd98b58);

    // 相机：默认斜上方宏大俯瞰视角
    this.camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.5,
      600
    );
    this.camera.position.set(78, 48, 68);

    // WebGL 渲染器（开启抗锯齿、阴影与电影级色调映射）
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.container.appendChild(this.renderer.domElement);
  }

  initLights() {
    this.lightsGroup = new THREE.Group();
    this.scene.add(this.lightsGroup);

    // 半球光（冷暖天光与地光平衡）
    this.hemiLight = new THREE.HemisphereLight(0xffeedd, 0x554433, 0.6);
    this.lightsGroup.add(this.hemiLight);

    // 环境泛光
    this.ambientLight = new THREE.AmbientLight(0xffd5b3, 0.5);
    this.lightsGroup.add(this.ambientLight);

    // 主太阳光（斜射强阴影，勾勒飞檐斗拱层次）
    this.sunLight = new THREE.DirectionalLight(0xffa852, 1.8);
    this.sunLight.position.set(65, 75, 55);
    this.sunLight.castShadow = true;

    // 阴影参数精细调优（覆盖全场建筑群）
    this.sunLight.shadow.mapSize.width = 4096;
    this.sunLight.shadow.mapSize.height = 4096;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 280;
    const d = 75;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0004;

    this.lightsGroup.add(this.sunLight);

    // 补光（弱化背阴处死黑）
    this.backLight = new THREE.DirectionalLight(0x7ea4c2, 0.4);
    this.backLight.position.set(-60, 40, -50);
    this.lightsGroup.add(this.backLight);

    // 主殿前宫灯点光源组
    this.lanternLights = [];
    const lanternPositions = [
      [0, 10, -6], [-9, 9, 3], [9, 9, 3], [0, 4, 32]
    ];
    for (const [lx, ly, lz] of lanternPositions) {
      const pl = new THREE.PointLight(0xff3b14, 0.8, 22, 1.5);
      pl.position.set(lx, ly, lz);
      this.lightsGroup.add(pl);
      this.lanternLights.push(pl);
    }
  }

  initPostProcessingAndFog() {
    // 东方山水意境氛围雾
    this.scene.fog = new THREE.FogExp2(0xd98b58, 0.0065);
  }

  buildWorld() {
    this.world = new VoxelWorld(1.0);
    const builder = new ChineseArchitectureBuilder(this.world);
    builder.buildEntireComplex();

    // 编译为高性能 InstancedMesh
    const result = this.world.buildMeshGroup(true);
    this.scene.add(result.group);
    this.voxelMeshGroup = result.group;

    this.stats = {
      totalVoxels: result.totalVoxels,
      renderedVoxels: result.renderedVoxels,
      drawCalls: result.drawCalls
    };

    console.log('[ArchitectureApp] 场景加载完成，Draw Calls:', result.drawCalls);
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.04; // 防止相机钻到地平线以下
    this.controls.minDistance = 12;
    this.controls.maxDistance = 220;
    this.controls.target.set(0, 7, -4); // 聚焦主殿与庭院核心

    // 当用户手动交互时，可临时停用或保留自转
    this.controls.addEventListener('start', () => {
      // 用户开始手动操控
    });
  }

  /**
   * 视角平滑过渡
   */
  switchView(viewName) {
    const views = {
      overview: { pos: [78, 48, 68], target: [0, 7, -4] },     // 宏伟全览
      mainHall: { pos: [0, 16, 26], target: [0, 14, -6] },     // 主殿特写
      pagoda: { pos: [-25, 32, -12], target: [0, 22, -36] },   // 浮屠宝塔
      gate: { pos: [0, 9, 58], target: [0, 6, 30] },           // 山门迎客
      topdown: { pos: [0, 120, -5], target: [0, 0, -5] }       // 严整鸟瞰
    };

    const targetView = views[viewName] || views.overview;
    this.animateCameraTo(targetView.pos, targetView.target);
  }

  animateCameraTo(endPos, endTarget, duration = 1200) {
    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();
    const targetEnd = new THREE.Vector3(...endTarget);
    const posEnd = new THREE.Vector3(...endPos);
    const startTime = performance.now();

    const updateTransition = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      // EaseInOutCubic 缓动函数
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      this.camera.position.lerpVectors(startPos, posEnd, ease);
      this.controls.target.lerpVectors(startTarget, targetEnd, ease);

      if (progress < 1.0) {
        requestAnimationFrame(updateTransition);
      }
    };
    updateTransition();
  }

  /**
   * 晨昏光影氛围切换
   */
  setAtmosphere(mode) {
    this.currentAtmosphere = mode;
    const atmospheres = {
      // 1. 紫禁斜阳（落日金辉）
      sunset: {
        bg: 0xd98b58,
        fog: 0xd98b58,
        fogDensity: 0.0065,
        sunColor: 0xff9944,
        sunIntensity: 1.8,
        sunPos: [65, 70, 55],
        hemiSky: 0xffeedd,
        hemiGround: 0x554433,
        ambient: 0xffd5b3,
        ambientIntensity: 0.5,
        exposure: 1.05,
        lanternIntensity: 0.8
      },
      // 2. 晨曦破晓（清晨初照）
      morning: {
        bg: 0xa9c2cc,
        fog: 0xa9c2cc,
        fogDensity: 0.007,
        sunColor: 0xffecb3,
        sunIntensity: 1.5,
        sunPos: [-70, 55, 60],
        hemiSky: 0xd6e8f2,
        hemiGround: 0x4d5b4a,
        ambient: 0xd1e0e8,
        ambientIntensity: 0.6,
        exposure: 1.0,
        lanternIntensity: 0.4
      },
      // 3. 晴空万里（正午晴岚）
      midday: {
        bg: 0x88b5dc,
        fog: 0x88b5dc,
        fogDensity: 0.0045,
        sunColor: 0xfffaea,
        sunIntensity: 2.0,
        sunPos: [20, 95, 20],
        hemiSky: 0xffffff,
        hemiGround: 0x777777,
        ambient: 0xffffff,
        ambientIntensity: 0.55,
        exposure: 1.0,
        lanternIntensity: 0.1
      },
      // 4. 华灯初上（静谧禅月）
      night: {
        bg: 0x0c1524,
        fog: 0x0c1524,
        fogDensity: 0.008,
        sunColor: 0x3d5f8a, // 冷蓝月光
        sunIntensity: 0.6,
        sunPos: [-40, 80, -40],
        hemiSky: 0x1b283d,
        hemiGround: 0x080f1a,
        ambient: 0x182436,
        ambientIntensity: 0.35,
        exposure: 1.15,
        lanternIntensity: 2.2 // 灯笼光辉显耀
      }
    };

    const cfg = atmospheres[mode] || atmospheres.sunset;

    // 渐变更新色彩
    this.scene.background.setHex(cfg.bg);
    this.scene.fog.color.setHex(cfg.fog);
    this.scene.fog.density = cfg.fogDensity;

    this.sunLight.color.setHex(cfg.sunColor);
    this.sunLight.intensity = cfg.sunIntensity;
    this.sunLight.position.set(...cfg.sunPos);

    this.hemiLight.color.setHex(cfg.hemiSky);
    this.hemiLight.groundColor.setHex(cfg.hemiGround);

    this.ambientLight.color.setHex(cfg.ambient);
    this.ambientLight.intensity = cfg.ambientIntensity;

    this.renderer.toneMappingExposure = cfg.exposure;

    for (const pl of this.lanternLights) {
      pl.intensity = cfg.lanternIntensity;
    }
  }

  toggleAutoRotate() {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    // 自动环绕运镜（平缓优雅地自转）
    if (this.isAutoRotating) {
      const angle = 0.0018;
      const x = this.camera.position.x - this.controls.target.x;
      const z = this.camera.position.z - this.controls.target.z;
      this.camera.position.x = this.controls.target.x + x * Math.cos(angle) - z * Math.sin(angle);
      this.camera.position.z = this.controls.target.z + x * Math.sin(angle) + z * Math.cos(angle);
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    // 计算 FPS
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
      this.frameCount = 0;
      this.lastTime = now;
      if (this.onFpsUpdate) {
        this.onFpsUpdate(this.fps);
      }
    }
  }
}
