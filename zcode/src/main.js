import * as THREE from 'three';
import { VoxelWorld } from './engine/VoxelWorld.js';
import { ArchitectureBuilder } from './builders/ArchitectureBuilder.js';
import { CourtyardBuilder } from './builders/CourtyardBuilder.js';
import { LightingSystem } from './systems/LightingSystem.js';
import { ParticleSystem } from './systems/ParticleSystem.js';
import { CameraController } from './systems/CameraController.js';
import { ZenAudio } from './audio/ZenAudio.js';
import { ControlPanel } from './ui/ControlPanel.js';

class App {
  constructor() {
    window.__app = this;
    this.container = document.getElementById('canvas-container');
    this.clock = new THREE.Clock();

    this.initThree();
    this.buildWorld();
    this.initSystems();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initThree() {
    // 渲染器：开启高动态色彩映射与高品质抗锯齿
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.container.appendChild(this.renderer.domElement);

    // 场景与相机
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      1,
      600
    );

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  buildWorld() {
    console.log('[PalaceApp] 正在构建中式古典体素建筑群...');
    const world = new VoxelWorld();

    // 1. 中轴核心主殿（太和宝殿，全场景体量最大）
    ArchitectureBuilder.buildMainHall(world, 0, -18);

    // 2. 对称东配殿与西配殿
    ArchitectureBuilder.buildSideHall(world, 'east', 28, -10);
    ArchitectureBuilder.buildSideHall(world, 'west', -28, -10);

    // 3. 前端山门（三券拱大门楼）
    ArchitectureBuilder.buildMountainGate(world, 0, 40);

    // 4. 千佛体素宝塔（五级浮屠）
    ArchitectureBuilder.buildPagoda(world, -34, -32);

    // 5. 东西对峙钟鼓楼（重檐攒尖阁楼）
    ArchitectureBuilder.buildBellDrumTower(world, 'bell', 26, 18);
    ArchitectureBuilder.buildBellDrumTower(world, 'drum', -26, 18);

    // 6. 周围朱红宫墙与古典漏窗
    ArchitectureBuilder.buildPerimeterWalls(world);

    // 7. 庭院中轴御道、金水河、金水桥、青铜香炉、石狮、古松、银杏与石灯
    CourtyardBuilder.populateCourtyard(world);

    // 8. 编译并批次生成 InstancedMesh 加入场景
    this.meshResult = world.buildSceneMeshes(this.scene);
  }

  initSystems() {
    // 光影与四时氛围系统
    this.lighting = new LightingSystem(this.scene, this.renderer);
    this.lighting.setLanternMaterials(this.meshResult.materials.lantern);

    // 动态粒子系统（青烟、落叶、流萤）
    this.particles = new ParticleSystem(this.scene);

    // 镜头导览与控制器
    this.cameraCtrl = new CameraController(this.camera, this.renderer.domElement);

    // 纯合成禅意古韵音频
    this.zenAudio = new ZenAudio();

    // 获奖级国风玻璃拟态 UI
    this.panel = new ControlPanel({
      cameraController: this.cameraCtrl,
      lightingSystem: this.lighting,
      zenAudio: this.zenAudio,
      totalVoxels: this.meshResult.totalVoxels
    });

    const voxelBadge = document.getElementById('voxel-count-display');
    if (voxelBadge) {
      voxelBadge.textContent = `${this.meshResult.totalVoxels.toLocaleString()} 体素`;
    }
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    this.cameraCtrl.update(delta);
    this.particles.update(elapsed);
    this.lighting.update(elapsed);
    this.panel.updateFps();

    this.renderer.render(this.scene, this.camera);
  }
}

// 页面加载即进入场景
window.addEventListener('DOMContentLoaded', () => {
  new App();
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 800);
  }
});
