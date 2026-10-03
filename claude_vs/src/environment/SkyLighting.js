import * as THREE from 'three';

/**
 * Atmospheric Sky, Directional Sunlight and Lighting Presets
 * Calibrated for classical Chinese aesthetic moods:
 *  - 'sunset': Golden Hour / Twilight (金辉落日) - Default
 *  - 'dawn': Morning Mist (晨曦初照)
 *  - 'night': Moonlit Lantern Night (清幽皓月)
 *  - 'day': Bright Sunlight (晴空金阳)
 */
export class SkyLighting {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    // Enable soft shadows
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    // Directional Sunlight / Moonlight
    this.dirLight = new THREE.DirectionalLight(0xfff, 1.8);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 10;
    this.dirLight.shadow.camera.far = 350;
    this.dirLight.shadow.camera.left = -95;
    this.dirLight.shadow.camera.right = 95;
    this.dirLight.shadow.camera.top = 95;
    this.dirLight.shadow.camera.bottom = -95;
    this.dirLight.shadow.bias = -0.0004;
    this.dirLight.shadow.normalBias = 0.03;
    this.scene.add(this.dirLight);

    // Hemisphere Ambient Light
    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.7);
    this.scene.add(this.hemiLight);

    // Ambient Light fill
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    this.scene.add(this.ambientLight);

    // Atmospheric Exponential Fog
    this.fog = new THREE.FogExp2(0x000000, 0.0042);
    this.scene.fog = this.fog;

    // Background Sky Dome Canvas
    this.skyMesh = this.createSkyDome();
    this.scene.add(this.skyMesh);

    // Dynamic accent point lights (Lantern warm radiance around courtyard & incense)
    this.incenseLight = new THREE.PointLight(0xff6611, 2.5, 25);
    this.incenseLight.position.set(0, 5, 8);
    this.scene.add(this.incenseLight);

    this.mainHallLight = new THREE.PointLight(0xffaa44, 3.0, 35);
    this.mainHallLight.position.set(0, 10, -5);
    this.scene.add(this.mainHallLight);

    this.currentPreset = 'sunset';
    this.applyPreset('sunset');
  }

  createSkyDome() {
    const geo = new THREE.SphereGeometry(260, 32, 24);
    // Invert geometry faces so we view it from inside
    geo.scale(-1, 1, 1);

    this.skyCanvas = document.createElement('canvas');
    this.skyCanvas.width = 16;
    this.skyCanvas.height = 256;
    this.skyCtx = this.skyCanvas.getContext('2d');
    this.skyTexture = new THREE.CanvasTexture(this.skyCanvas);

    const mat = new THREE.MeshBasicMaterial({
      map: this.skyTexture,
      depthWrite: false,
      side: THREE.BackSide
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = 'SkyDome';
    return mesh;
  }

  updateSkyGradient(topColor, midColor, botColor) {
    const grad = this.skyCtx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0.0, topColor);
    grad.addColorStop(0.65, midColor);
    grad.addColorStop(1.0, botColor);
    this.skyCtx.fillStyle = grad;
    this.skyCtx.fillRect(0, 0, 16, 256);
    this.skyTexture.needsUpdate = true;
  }

  applyPreset(presetName) {
    this.currentPreset = presetName;

    switch (presetName) {
      case 'sunset': // 金辉落日 (Default - Grand Golden Hour)
        this.dirLight.color.setHex(0xffaa44);
        this.dirLight.intensity = 2.4;
        this.dirLight.position.set(80, 55, 60);

        this.hemiLight.color.setHex(0xffcb9a);
        this.hemiLight.groundColor.setHex(0x56384a);
        this.hemiLight.intensity = 0.85;

        this.ambientLight.color.setHex(0x845550);
        this.ambientLight.intensity = 0.45;

        this.fog.color.setHex(0xd08d6c);
        this.fog.density = 0.0038;
        this.scene.background = new THREE.Color(0xd08d6c);

        this.updateSkyGradient('#2c2847', '#be5846', '#e89e60');
        this.renderer.toneMappingExposure = 1.08;
        this.incenseLight.intensity = 3.2;
        this.mainHallLight.intensity = 3.8;
        break;

      case 'dawn': // 晨曦初照 (Morning Dawn Mist)
        this.dirLight.color.setHex(0xffe2aa);
        this.dirLight.intensity = 2.0;
        this.dirLight.position.set(-75, 45, 65);

        this.hemiLight.color.setHex(0xd3e5f2);
        this.hemiLight.groundColor.setHex(0x495b4e);
        this.hemiLight.intensity = 0.9;

        this.ambientLight.color.setHex(0x5c7987);
        this.ambientLight.intensity = 0.4;

        this.fog.color.setHex(0xacc7d4);
        this.fog.density = 0.0045;
        this.scene.background = new THREE.Color(0xacc7d4);

        this.updateSkyGradient('#385674', '#9bbecf', '#eed7be');
        this.renderer.toneMappingExposure = 1.02;
        this.incenseLight.intensity = 2.5;
        this.mainHallLight.intensity = 3.0;
        break;

      case 'night': // 清幽皓月 (Moonlit Lantern Night)
        this.dirLight.color.setHex(0x6e8fb5);
        this.dirLight.intensity = 0.9;
        this.dirLight.position.set(-60, 80, -40);

        this.hemiLight.color.setHex(0x283852);
        this.hemiLight.groundColor.setHex(0x111622);
        this.hemiLight.intensity = 0.55;

        this.ambientLight.color.setHex(0x19273c);
        this.ambientLight.intensity = 0.3;

        this.fog.color.setHex(0x0a101b);
        this.fog.density = 0.0048;
        this.scene.background = new THREE.Color(0x0a101b);

        this.updateSkyGradient('#030710', '#0d182b', '#182740');
        this.renderer.toneMappingExposure = 1.15;
        this.incenseLight.intensity = 5.0;
        this.mainHallLight.intensity = 5.5;
        break;

      case 'day': // 晴昼暖阳 (Clear Midday Sun)
        this.dirLight.color.setHex(0xfff7ea);
        this.dirLight.intensity = 2.2;
        this.dirLight.position.set(50, 95, 45);

        this.hemiLight.color.setHex(0xddeeff);
        this.hemiLight.groundColor.setHex(0x585848);
        this.hemiLight.intensity = 0.8;

        this.ambientLight.color.setHex(0x666b73);
        this.ambientLight.intensity = 0.35;

        this.fog.color.setHex(0xcbe0f2);
        this.fog.density = 0.0032;
        this.scene.background = new THREE.Color(0xcbe0f2);

        this.updateSkyGradient('#245585', '#6fa9d8', '#bcdbee');
        this.renderer.toneMappingExposure = 1.0;
        this.incenseLight.intensity = 1.8;
        this.mainHallLight.intensity = 2.0;
        break;
    }
  }

  update(time) {
    // Subtle breathing flicker for the incense burner ember light
    const flicker = Math.sin(time * 6.0) * 0.3 + Math.cos(time * 11.0) * 0.2;
    this.incenseLight.intensity = Math.max(0.5, (this.currentPreset === 'night' ? 5.0 : 2.5) + flicker);
  }
}
