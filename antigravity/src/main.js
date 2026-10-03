import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VoxelEngine } from './voxelEngine.js';
import { ImperialArchitect } from './architect.js';
import { ZenAudio } from './audio.js';

/**
 * 3D 体素中国古典建筑群主程序 (Main Application)
 */
class VoxelTempleApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.audio = new ZenAudio();

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    // 灯光与环境引用
    this.dirLight = null;
    this.hemiLight = null;
    this.ambientLight = null;
    this.lanternPointLights = [];
    this.fog = null;

    // 状态控制
    this.isAutoRotate = true;
    this.currentPreset = 'day';
    this.cameraTransition = null;

    // 性能监控
    this.fps = 60;
    this.frameCount = 0;
    this.lastTime = performance.now();

    this.init();
  }

  init() {
    this.initScene();
    this.initLights();
    this.buildWorld();
    this.initControls();
    this.initUI();
    this.setAtmosphere('sunset'); // 默认展示落日熔金的诗意晨昏色调

    window.addEventListener('resize', () => this.onWindowResize());
    this.animate();

    // 隐藏加载动画
    const loader = document.getElementById('loading-screen');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 600);
      }, 400);
    }
  }

  initScene() {
    this.scene = new THREE.Scene();

    // 雾气烘托空间景深感
    this.fog = new THREE.FogExp2(0xd6a47a, 0.0035);
    this.scene.fog = this.fog;

    // 相机初始机位：以45度经典鸟瞰俯视整个中轴线建筑群
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(42, aspect, 1, 1000);
    this.camera.position.set(115, 95, 135);

    // 渲染器配置 (启用物理软阴影与电影级色调映射)
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.container.appendChild(this.renderer.domElement);
  }

  initLights() {
    // 半球光 (模拟天空与大地的环境反光)
    this.hemiLight = new THREE.HemisphereLight(0xfff1dc, 0x54473b, 0.7);
    this.scene.add(this.hemiLight);

    // 基础环境光
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    this.scene.add(this.ambientLight);

    // 主平行日光 (投射锐利阴影)
    this.dirLight = new THREE.DirectionalLight(0xffecd2, 2.0);
    this.dirLight.position.set(90, 130, 80);
    this.dirLight.castShadow = true;

    // 高精度阴影相机视锥范围
    const d = 140;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.dirLight.shadow.camera.near = 10;
    this.dirLight.shadow.camera.far = 400;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.bias = -0.0004;

    this.scene.add(this.dirLight);

    // 庭院与主殿点光源 (烘托夜晚与黄昏灯火)
    const keyLightPositions = [
      { x: 0, y: 15, z: -15, color: 0xff8833, dist: 35, int: 1.5 }, // 主殿前月台
      { x: 0, y: 10, z: 58, color: 0xff6622, dist: 25, int: 1.2 },  // 山门正门
      { x: 34, y: 14, z: 22, color: 0xff7733, dist: 25, int: 1.0 }, // 钟楼
      { x: -34, y: 14, z: 22, color: 0xff7733, dist: 25, int: 1.0 },// 鼓楼
      { x: 0, y: 18, z: -82, color: 0xffaa44, dist: 40, int: 1.5 }, // 宝塔底座
    ];

    for (const pos of keyLightPositions) {
      const pl = new THREE.PointLight(pos.color, pos.int, pos.dist, 1.2);
      pl.position.set(pos.x, pos.y, pos.z);
      this.scene.add(pl);
      this.lanternPointLights.push(pl);
    }
  }

  buildWorld() {
    this.engine = new VoxelEngine();
    this.architect = new ImperialArchitect(this.engine);
    this.architect.buildComplex();

    // 一键批量生成 InstancedMesh 极致性能网格
    const { group, totalCount } = this.engine.generateSceneGroup();
    this.scene.add(group);
    this.voxelGroup = group;

    // 更新界面体素总数显示
    const countEl = document.getElementById('stat-voxels');
    if (countEl) {
      countEl.innerText = totalCount.toLocaleString();
    }
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.target.set(0, 12, -15); // 默认注视主殿与中庭之间
    this.controls.maxPolarAngle = Math.PI / 2 - 0.02; // 防止穿透地面
    this.controls.minDistance = 15;
    this.controls.maxDistance = 450;

    // 默认开启缓慢自动巡航
    this.controls.autoRotate = this.isAutoRotate;
    this.controls.autoRotateSpeed = 0.65;

    // 用户手动拖拽时暂停自动巡航
    this.controls.addEventListener('start', () => {
      this.controls.autoRotate = false;
      const rotateBtn = document.getElementById('btn-autorotate');
      if (rotateBtn) rotateBtn.classList.remove('active');
    });
  }

  /**
   * 晨昏四季色调切换 (Atmosphere Time Presets)
   */
  setAtmosphere(presetKey) {
    this.currentPreset = presetKey;

    const presets = {
      // 1. 晨曦微露 (Morning Dawn Mist)
      dawn: {
        skyColor: 0xdb8e75,
        fogColor: 0xe5a38a,
        fogDensity: 0.0038,
        dirColor: 0xffb380,
        dirIntensity: 1.8,
        dirPos: [110, 50, 90],
        hemiSky: 0xffd9c2,
        hemiGround: 0x5a4538,
        ambient: 0.45,
        exposure: 1.1,
        lanternIntensity: 0.7,
      },
      // 2. 晴昼初霁 (Midday Golden Sun)
      day: {
        skyColor: 0x82b6df,
        fogColor: 0xb5d6f2,
        fogDensity: 0.0022,
        dirColor: 0xfffaea,
        dirIntensity: 2.3,
        dirPos: [70, 150, 60],
        hemiSky: 0xffffff,
        hemiGround: 0x6e685f,
        ambient: 0.55,
        exposure: 1.15,
        lanternIntensity: 0.2,
      },
      // 3. 落日熔金 (Sunset Glow / Golden Hour)
      sunset: {
        skyColor: 0xa43d22,
        fogColor: 0xc45832,
        fogDensity: 0.0035,
        dirColor: 0xff7b2e,
        dirIntensity: 2.4,
        dirPos: [130, 45, 40],
        hemiSky: 0xffa470,
        hemiGround: 0x482d24,
        ambient: 0.4,
        exposure: 1.25,
        lanternIntensity: 1.2,
      },
      // 4. 月夜华灯 (Moonlit Night & Glowing Lanterns)
      night: {
        skyColor: 0x090f1d,
        fogColor: 0x0e172a,
        fogDensity: 0.0042,
        dirColor: 0x6e88b5,
        dirIntensity: 0.6,
        dirPos: [-60, 110, -50],
        hemiSky: 0x223554,
        hemiGround: 0x111622,
        ambient: 0.25,
        exposure: 1.4,
        lanternIntensity: 2.5,
      },
    };

    const cfg = presets[presetKey] || presets.day;

    this.scene.background = new THREE.Color(cfg.skyColor);
    this.fog.color.setHex(cfg.fogColor);
    this.fog.density = cfg.fogDensity;

    this.dirLight.color.setHex(cfg.dirColor);
    this.dirLight.intensity = cfg.dirIntensity;
    this.dirLight.position.set(...cfg.dirPos);

    this.hemiLight.color.setHex(cfg.hemiSky);
    this.hemiLight.groundColor.setHex(cfg.hemiGround);
    this.ambientLight.intensity = cfg.ambient;
    this.renderer.toneMappingExposure = cfg.exposure;

    // 灯笼点光源强度同步
    for (const pl of this.lanternPointLights) {
      pl.intensity = cfg.lanternIntensity;
    }

    // 更新 UI 按钮激活状态
    document.querySelectorAll('.btn-time').forEach(b => {
      if (b.dataset.time === presetKey) b.classList.add('active');
      else b.classList.remove('active');
    });
  }

  /**
   * 平滑运镜机位过渡 (Smooth Camera Transition)
   */
  flyToView(viewKey) {
    const viewPresets = {
      // 全景俯瞰：饱览山门、庭院、主殿、配殿、宝塔全貌
      overview: {
        position: new THREE.Vector3(115, 95, 135),
        target: new THREE.Vector3(0, 12, -15),
      },
      // 山门迎宾：近距离仰望巍峨山门与石狮
      gate: {
        position: new THREE.Vector3(0, 10, 95),
        target: new THREE.Vector3(0, 8, 48),
      },
      // 庭院大殿：立于御道旁青铜宝鼎前，瞻仰重檐大殿与御路雕石
      main: {
        position: new THREE.Vector3(0, 14, 25),
        target: new THREE.Vector3(0, 16, -32),
      },
      // 配殿游廊：漫步东西配殿与雕花游廊
      side: {
        position: new THREE.Vector3(62, 18, -12),
        target: new THREE.Vector3(25, 12, -32),
      },
      // 宝塔耸翠：仰望七级琉璃宝塔金刹飞檐
      pagoda: {
        position: new THREE.Vector3(-42, 38, -48),
        target: new THREE.Vector3(0, 32, -82),
      },
    };

    const targetView = viewPresets[viewKey];
    if (!targetView) return;

    this.controls.autoRotate = false;
    const rotateBtn = document.getElementById('btn-autorotate');
    if (rotateBtn) rotateBtn.classList.remove('active');

    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();
    const startTime = performance.now();
    const duration = 1500; // 1.5 秒优雅运镜

    this.cameraTransition = {
      startPos,
      targetPos: targetView.position,
      startTarget,
      targetTarget: targetView.target,
      startTime,
      duration,
    };

    // 更新 UI 按钮激活状态
    document.querySelectorAll('.btn-view').forEach(b => {
      if (b.dataset.view === viewKey) b.classList.add('active');
      else b.classList.remove('active');
    });
  }

  initUI() {
    // 1. 视角预设按钮
    document.querySelectorAll('.btn-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = e.currentTarget.dataset.view;
        this.flyToView(view);
      });
    });

    // 2. 晨昏光影按钮
    document.querySelectorAll('.btn-time').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const time = e.currentTarget.dataset.time;
        this.setAtmosphere(time);
      });
    });

    // 3. 自动旋转巡航开关
    const rotateBtn = document.getElementById('btn-autorotate');
    if (rotateBtn) {
      rotateBtn.addEventListener('click', () => {
        this.isAutoRotate = !this.isAutoRotate;
        this.controls.autoRotate = this.isAutoRotate;
        if (this.isAutoRotate) rotateBtn.classList.add('active');
        else rotateBtn.classList.remove('active');
      });
    }

    // 4. 禅意古风背景乐开关
    const musicBtn = document.getElementById('btn-music');
    if (musicBtn) {
      musicBtn.addEventListener('click', () => {
        const playing = this.audio.toggle();
        if (playing) {
          musicBtn.classList.add('active');
          musicBtn.innerHTML = '🎵 梵音清幽 (开)';
        } else {
          musicBtn.classList.remove('active');
          musicBtn.innerHTML = '🔇 禅乐微吟 (关)';
        }
      });
    }

    // 5. 线框/实色切换
    const wireBtn = document.getElementById('btn-wireframe');
    if (wireBtn) {
      let isWireframe = false;
      wireBtn.addEventListener('click', () => {
        isWireframe = !isWireframe;
        this.voxelGroup.traverse(child => {
          if (child.isMesh && child.material) {
            child.material.wireframe = isWireframe;
          }
        });
        if (isWireframe) wireBtn.classList.add('active');
        else wireBtn.classList.remove('active');
      });
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const now = performance.now();

    // 平滑运镜插值 (Smooth Easing Transition)
    if (this.cameraTransition) {
      const { startPos, targetPos, startTarget, targetTarget, startTime, duration } = this.cameraTransition;
      const progress = Math.min((now - startTime) / duration, 1.0);
      // EaseInOutCubic
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      this.camera.position.lerpVectors(startPos, targetPos, ease);
      this.controls.target.lerpVectors(startTarget, targetTarget, ease);

      if (progress >= 1.0) {
        this.cameraTransition = null;
      }
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);

    // FPS 统计
    this.frameCount++;
    if (now - this.lastTime >= 500) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
      this.frameCount = 0;
      this.lastTime = now;

      const fpsEl = document.getElementById('stat-fps');
      if (fpsEl) fpsEl.innerText = this.fps;

      const callsEl = document.getElementById('stat-calls');
      if (callsEl) callsEl.innerText = this.renderer.info.render.calls;
    }
  }
}

// 页面加载完成后自启动
window.addEventListener('DOMContentLoaded', () => {
  new VoxelTempleApp();
});
