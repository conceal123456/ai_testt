import * as THREE from 'three';

/**
 * 禅意动态粒子系统
 * 1. 香炉缕缕青烟 (Rising Incense Smoke)
 * 2. 金秋银杏落叶 (Falling Ginkgo Leaves)
 * 3. 殿宇夜色流萤 (Floating Fireflies)
 */
export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;

    this.initSmoke();
    this.initLeaves();
    this.initFireflies();
  }

  /**
   * 1. 香炉体素烟气
   */
  initSmoke() {
    const smokeCount = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(smokeCount * 3);
    this.smokeVelocities = [];

    for (let i = 0; i < smokeCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 1.2;
      positions[idx + 1] = 4 + Math.random() * 14;
      positions[idx + 2] = 4 + (Math.random() - 0.5) * 1.2;

      this.smokeVelocities.push({
        vx: (Math.random() - 0.5) * 0.04,
        vy: 0.05 + Math.random() * 0.05,
        vz: (Math.random() - 0.5) * 0.04,
        life: Math.random()
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xe0e6ed,
      size: 1.2,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending
    });

    this.smokePoints = new THREE.Points(geometry, material);
    this.scene.add(this.smokePoints);
  }

  /**
   * 2. 金秋银杏飘零落叶
   */
  initLeaves() {
    const leafCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(leafCount * 3);
    this.leafVelocities = [];

    for (let i = 0; i < leafCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 80;
      positions[idx + 1] = 3 + Math.random() * 25;
      positions[idx + 2] = (Math.random() - 0.5) * 80;

      this.leafVelocities.push({
        vx: (Math.random() - 0.5) * 0.08 + 0.05,
        vy: -0.04 - Math.random() * 0.04,
        vz: (Math.random() - 0.5) * 0.06,
        swaySpeed: 1 + Math.random() * 3,
        swayAmp: 0.03 + Math.random() * 0.03
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xf39c12,
      size: 0.9,
      transparent: true,
      opacity: 0.85
    });

    this.leafPoints = new THREE.Points(geometry, material);
    this.scene.add(this.leafPoints);
  }

  /**
   * 3. 庭院流萤
   */
  initFireflies() {
    const count = 90;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    this.fireflyOrigins = [];

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const x = (Math.random() - 0.5) * 70;
      const y = 1.5 + Math.random() * 6;
      const z = (Math.random() - 0.5) * 70;
      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;

      this.fireflyOrigins.push({
        ox: x, oy: y, oz: z,
        speed: 0.8 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x76ff03,
      size: 1.1,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    this.fireflyPoints = new THREE.Points(geometry, material);
    this.scene.add(this.fireflyPoints);
  }

  update(time) {
    // 1. 更新香烟上升
    const smokePos = this.smokePoints.geometry.attributes.position.array;
    for (let i = 0; i < this.smokeVelocities.length; i++) {
      const idx = i * 3;
      const v = this.smokeVelocities[i];
      smokePos[idx] += v.vx + Math.sin(time * 2 + i) * 0.02;
      smokePos[idx + 1] += v.vy;
      smokePos[idx + 2] += v.vz + Math.cos(time * 2 + i) * 0.02;

      // 超出高度重置
      if (smokePos[idx + 1] > 20) {
        smokePos[idx] = (Math.random() - 0.5) * 1.0;
        smokePos[idx + 1] = 4;
        smokePos[idx + 2] = 4 + (Math.random() - 0.5) * 1.0;
      }
    }
    this.smokePoints.geometry.attributes.position.needsUpdate = true;

    // 2. 更新落叶飘舞
    const leafPos = this.leafPoints.geometry.attributes.position.array;
    for (let i = 0; i < this.leafVelocities.length; i++) {
      const idx = i * 3;
      const v = this.leafVelocities[i];
      leafPos[idx] += v.vx + Math.sin(time * v.swaySpeed) * v.swayAmp;
      leafPos[idx + 1] += v.vy;
      leafPos[idx + 2] += v.vz + Math.cos(time * v.swaySpeed) * v.swayAmp;

      if (leafPos[idx + 1] < 0.2) {
        leafPos[idx + 1] = 22 + Math.random() * 5;
        leafPos[idx] = (Math.random() - 0.5) * 80;
        leafPos[idx + 2] = (Math.random() - 0.5) * 80;
      }
    }
    this.leafPoints.geometry.attributes.position.needsUpdate = true;

    // 3. 更新流萤穿梭
    const fireflyPos = this.fireflyPoints.geometry.attributes.position.array;
    for (let i = 0; i < this.fireflyOrigins.length; i++) {
      const idx = i * 3;
      const o = this.fireflyOrigins[i];
      fireflyPos[idx] = o.ox + Math.sin(time * o.speed + o.phase) * 2.5;
      fireflyPos[idx + 1] = o.oy + Math.cos(time * o.speed * 1.2 + o.phase) * 1.2;
      fireflyPos[idx + 2] = o.oz + Math.sin(time * o.speed * 0.8 + o.phase) * 2.5;
    }
    this.fireflyPoints.geometry.attributes.position.needsUpdate = true;
  }
}
