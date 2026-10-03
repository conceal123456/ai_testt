import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { VoxelWorld } from './voxel/VoxelWorld.js';
import { SkyLighting } from './environment/SkyLighting.js';
import { CourtyardBuilder } from './builders/CourtyardBuilder.js';
import { MountainGateBuilder } from './builders/MountainGateBuilder.js';
import { BellDrumTowerBuilder } from './builders/BellDrumTowerBuilder.js';
import { MainHallBuilder } from './builders/MainHallBuilder.js';
import { SideHallBuilder } from './builders/SideHallBuilder.js';
import { PagodaBuilder } from './builders/PagodaBuilder.js';
import { TempleBell } from './audio/TempleBell.js';

/**
 * Main Application Entrance
 * Constructs the Voxel Chinese Classical Complex, sets up WebGL,
 * lighting, camera transitions, and GUI interactions.
 */
class App {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // 1. Three.js Core
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.5, 600);

    // Initial Overview Camera Position
    this.camera.position.set(68, 52, 112);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // 2. OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.03; // Never dip below ground
    this.controls.minDistance = 12;
    this.controls.maxDistance = 240;
    this.controls.target.set(0, 10, -5);
    this.controls.update();

    // 3. Audio & Lighting
    this.bell = new TempleBell();
    this.skyLighting = new SkyLighting(this.scene, this.renderer);

    // 4. Procedural Voxel Generation with error boundary
    try {
      this.generateComplex();
    } catch (err) {
      console.error('Failed to generate voxel complex:', err);
    } finally {
      // Dismiss Loading Overlay
      setTimeout(() => {
        const loader = document.getElementById('loading-overlay');
        if (loader) loader.classList.add('hidden');
      }, 300);
    }

    // 5. Camera Interpolation State
    this.isTransitioning = false;
    this.camStartPos = new THREE.Vector3();
    this.camEndPos = new THREE.Vector3();
    this.targetStartPos = new THREE.Vector3();
    this.targetEndPos = new THREE.Vector3();
    this.transitionProgress = 1.0;
    this.autoRotate = false;

    // 6. Camera View Presets
    this.viewPresets = {
      overview: { pos: new THREE.Vector3(68, 52, 112), target: new THREE.Vector3(0, 10, -5) },
      gate: { pos: new THREE.Vector3(0, 15, 88), target: new THREE.Vector3(0, 7, 56) },
      bell_drum: { pos: new THREE.Vector3(-42, 22, 46), target: new THREE.Vector3(-28, 12, 24) },
      courtyard: { pos: new THREE.Vector3(-14, 10, 32), target: new THREE.Vector3(0, 6, 8) },
      main_hall: { pos: new THREE.Vector3(26, 25, 22), target: new THREE.Vector3(0, 16, -15) },
      side_halls: { pos: new THREE.Vector3(0, 18, -15), target: new THREE.Vector3(-38, 10, -15) },
      pagoda: { pos: new THREE.Vector3(22, 18, -38), target: new THREE.Vector3(0, 35, -68) }
    };

    // 7. FPS Measurement
    this.clock = new THREE.Clock();
    this.frameCount = 0;
    this.fpsTimer = 0;

    // 8. Event Listeners
    this.initUIEvents();
    window.addEventListener('resize', () => this.onResize());

    // 9. Start Render Loop
    this.animate();
  }

  generateComplex() {
    console.time('VoxelGeneration');
    // Voxel size = 0.8 world units
    const world = new VoxelWorld(0.8);

    // Ground plane, pathways, lotus pond, ancient pines, perimeter walls
    CourtyardBuilder.build(world, { groundY: 0 });

    // 1. Mountain Gate (山门殿)
    MountainGateBuilder.build(world, { cx: 0, cz: 56, groundY: 0 });

    // 2. Bell & Drum Towers (钟楼与鼓楼)
    BellDrumTowerBuilder.build(world, { cx: -28, cz: 24, type: 'bell', groundY: 0 });
    BellDrumTowerBuilder.build(world, { cx: 28, cz: 24, type: 'drum', groundY: 0 });

    // 3. Symmetrical East & West Side Halls (东配殿与西配殿)
    SideHallBuilder.build(world, { cx: -38, cz: -15, side: 'east', groundY: 0 });
    SideHallBuilder.build(world, { cx: 38, cz: -15, side: 'west', groundY: 0 });

    // 4. Main Grand Hall (大雄宝殿)
    MainHallBuilder.build(world, { cx: 0, cz: -15, groundY: 0 });

    // 5. Seven-Tier Sacred Pagoda (七层玲珑宝塔)
    PagodaBuilder.build(world, { cx: 0, cz: -68, groundY: 0 });

    console.timeEnd('VoxelGeneration');

    // Build optimized InstancedMeshes with culling
    console.time('MeshBuild');
    const complexGroup = world.buildMeshGroup();
    this.scene.add(complexGroup);
    console.timeEnd('MeshBuild');

    // Update stats in UI
    const totalVoxelsEl = document.getElementById('stat-voxels');
    const instancesEl = document.getElementById('stat-instances');
    if (totalVoxelsEl) totalVoxelsEl.textContent = complexGroup.userData.totalVoxels.toLocaleString();
    if (instancesEl) instancesEl.textContent = complexGroup.userData.renderedInstances.toLocaleString();
  }

  initUIEvents() {
    // Building navigator buttons
    const buildingBtns = document.querySelectorAll('.building-btn');
    buildingBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        buildingBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetKey = btn.getAttribute('data-target');
        if (targetKey && this.viewPresets[targetKey]) {
          this.flyTo(this.viewPresets[targetKey].pos, this.viewPresets[targetKey].target);
        }
      });
    });

    // Time-of-day buttons
    const timeBtns = document.querySelectorAll('[data-time]');
    timeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const timeKey = btn.getAttribute('data-time');
        this.skyLighting.applyPreset(timeKey);
      });
    });

    // Auto rotate toggle
    const btnAutoRotate = document.getElementById('btn-auto-rotate');
    if (btnAutoRotate) {
      btnAutoRotate.addEventListener('click', () => {
        this.autoRotate = !this.autoRotate;
        btnAutoRotate.classList.toggle('active', this.autoRotate);
      });
    }

    // Reset Camera button
    const btnResetCam = document.getElementById('btn-reset-cam');
    if (btnResetCam) {
      btnResetCam.addEventListener('click', () => {
        const overviewBtn = document.querySelector('[data-target="overview"]');
        if (overviewBtn) overviewBtn.click();
      });
    }

    // Strike Temple Bell button
    const btnStrikeBell = document.getElementById('btn-strike-bell');
    if (btnStrikeBell) {
      btnStrikeBell.addEventListener('click', () => {
        this.bell.strike();
      });
    }
  }

  flyTo(targetPos, targetLookAt, duration = 1.2) {
    this.camStartPos.copy(this.camera.position);
    this.camEndPos.copy(targetPos);
    this.targetStartPos.copy(this.controls.target);
    this.targetEndPos.copy(targetLookAt);

    this.transitionDuration = duration;
    this.transitionProgress = 0.0;
    this.isTransitioning = true;
    this.autoRotate = false;

    const btnAutoRotate = document.getElementById('btn-auto-rotate');
    if (btnAutoRotate) btnAutoRotate.classList.remove('active');
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Camera Fly Transition (Cubic smoothstep)
    if (this.isTransitioning) {
      this.transitionProgress += delta / this.transitionDuration;
      if (this.transitionProgress >= 1.0) {
        this.transitionProgress = 1.0;
        this.isTransitioning = false;
      }
      // Ease in-out cubic
      const t = this.transitionProgress;
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      this.camera.position.lerpVectors(this.camStartPos, this.camEndPos, ease);
      this.controls.target.lerpVectors(this.targetStartPos, this.targetEndPos, ease);
    } else if (this.autoRotate) {
      // Gentle orbit rotation around target
      const rotSpeed = 0.25 * delta;
      const offset = new THREE.Vector3().subVectors(this.camera.position, this.controls.target);
      offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotSpeed);
      this.camera.position.addVectors(this.controls.target, offset);
    }

    this.controls.update();

    // 2. Update Atmospheric Lighting
    this.skyLighting.update(elapsedTime);

    // 3. Render
    this.renderer.render(this.scene, this.camera);

    // 4. Measure FPS
    this.frameCount++;
    this.fpsTimer += delta;
    if (this.fpsTimer >= 0.5) {
      const currentFps = Math.round(this.frameCount / this.fpsTimer);
      const fpsEl = document.getElementById('stat-fps');
      if (fpsEl) fpsEl.textContent = currentFps;
      this.frameCount = 0;
      this.fpsTimer = 0;
    }
  }
}

// Instantiate when DOM is ready
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    new App();
  });
} else {
  new App();
}
