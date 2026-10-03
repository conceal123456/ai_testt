import * as THREE from 'three';

/**
 * 殿堂四时光影与气象系统 (Lighting & Atmosphere)
 * 支持：正午晴空、落霞斜阳、月夜华灯、晨曦紫气
 */
export class LightingSystem {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    // 启用阴影系统
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 主平行光（太阳/月亮）
    this.dirLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 5;
    this.dirLight.shadow.camera.far = 280;

    // 阴影视锥体覆盖全建筑群
    const d = 65;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.dirLight.shadow.bias = -0.0006;
    this.dirLight.shadow.normalBias = 0.02;

    this.scene.add(this.dirLight);
    this.scene.add(this.dirLight.target);

    // 环境光与半球光
    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x444455, 0.7);
    this.scene.add(this.hemiLight);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(this.ambientLight);

    // 点光源（香炉内炭火微光）
    this.burnerLight = new THREE.PointLight(0xff7700, 2.0, 15);
    this.burnerLight.position.set(0, 4, 4);
    this.scene.add(this.burnerLight);

    // 雾气
    this.scene.fog = new THREE.Fog(0xd8ecf8, 110, 240);

    // 预设光影配置表
    this.presets = {
      noon: {
        name: '晌午·紫禁晴日',
        skyColor: 0x8ec5fc,
        fogColor: 0xc9e4fc,
        fogNear: 130,
        fogFar: 260,
        dirColor: 0xfffaed,
        dirIntensity: 2.3,
        dirPos: [50, 85, 45],
        hemiSky: 0xffffff,
        hemiGround: 0x8899aa,
        hemiIntensity: 0.9,
        ambientColor: 0xf5f8ff,
        ambientIntensity: 0.55,
        lanternIntensity: 0.4,
        burnerIntensity: 1.5
      },
      sunset: {
        name: '落霞·孤鹜秋水',
        skyColor: 0xfb9050,
        fogColor: 0xe87a40,
        fogNear: 100,
        fogFar: 230,
        dirColor: 0xff8c3b,
        dirIntensity: 2.9,
        dirPos: [65, 38, -40],
        hemiSky: 0xffb74d,
        hemiGround: 0x4a148c,
        hemiIntensity: 0.85,
        ambientColor: 0xffb088,
        ambientIntensity: 0.5,
        lanternIntensity: 1.5,
        burnerIntensity: 2.5
      },
      night: {
        name: '月夜·华灯初上',
        skyColor: 0x0c1427,
        fogColor: 0x0f1830,
        fogNear: 90,
        fogFar: 220,
        dirColor: 0x9bc5ff,
        dirIntensity: 1.6,
        dirPos: [-45, 65, -35],
        hemiSky: 0x2b3d63,
        hemiGround: 0x111625,
        hemiIntensity: 0.85,
        ambientColor: 0x243354,
        ambientIntensity: 0.65,
        lanternIntensity: 3.8,
        burnerIntensity: 4.0
      },
      dawn: {
        name: '晨曦·紫气东来',
        skyColor: 0xf6d59e,
        fogColor: 0xf7dcab,
        fogNear: 85,
        fogFar: 210,
        dirColor: 0xffe29a,
        dirIntensity: 2.0,
        dirPos: [-55, 40, 50],
        hemiSky: 0xffd3b6,
        hemiGround: 0x5a4a42,
        hemiIntensity: 0.8,
        ambientColor: 0xfff3d1,
        ambientIntensity: 0.55,
        lanternIntensity: 0.8,
        burnerIntensity: 1.8
      }
    };

    this.currentPreset = 'sunset'; // 默认开场选用极具国风意境的落霞/黄昏
    this.applyPreset('sunset', false);
  }

  setLanternMaterials(lanternMaterial) {
    this.lanternMaterial = lanternMaterial;
    if (this.lanternMaterial) {
      this.lanternMaterial.emissiveIntensity = this.presets[this.currentPreset].lanternIntensity;
    }
  }

  applyPreset(key, animate = true) {
    const p = this.presets[key];
    if (!p) return;
    this.currentPreset = key;

    // 天空背景与雾色
    this.scene.background = new THREE.Color(p.skyColor);
    this.scene.fog.color.setHex(p.fogColor);
    this.scene.fog.near = p.fogNear;
    this.scene.fog.far = p.fogFar;

    // 主平行光
    this.dirLight.color.setHex(p.dirColor);
    this.dirLight.intensity = p.dirIntensity;
    this.dirLight.position.set(...p.dirPos);
    this.dirLight.target.position.set(0, 5, 0);
    this.dirLight.target.updateMatrixWorld();

    // 环境光与半球光
    this.hemiLight.color.setHex(p.hemiSky);
    this.hemiLight.groundColor.setHex(p.hemiGround);
    this.hemiLight.intensity = p.hemiIntensity;

    this.ambientLight.color.setHex(p.ambientColor);
    this.ambientLight.intensity = p.ambientIntensity;

    // 烛火
    this.burnerLight.intensity = p.burnerIntensity;

    // 灯笼发光强度
    if (this.lanternMaterial) {
      this.lanternMaterial.emissiveIntensity = p.lanternIntensity;
    }
  }

  update(time) {
    // 香炉内炭火微弱呼吸引导
    if (this.burnerLight) {
      this.burnerLight.intensity = this.presets[this.currentPreset].burnerIntensity + Math.sin(time * 4) * 0.4;
    }
  }
}
