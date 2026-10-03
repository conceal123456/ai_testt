import * as THREE from 'three';

/**
 * 高性能体素世界构建与批渲染引擎 (VoxelWorld)
 * 采用 InstancedMesh 分类批处理技术，支持全场景阴影投射与接收
 * 内置内部遮挡剔除 (Occlusion Culling)，确保百万级体素逻辑下的 60FPS 极速渲染
 */
export class VoxelWorld {
  constructor() {
    // 存储所有体素数据: key -> { x, y, z, color: THREE.Color, type: 'solid' | 'lantern' | 'gold' | 'water' | 'foliage' }
    this.voxels = new Map();
    this.colorCache = new Map();
  }

  _getKey(x, y, z) {
    return `${x},${y},${z}`;
  }

  getColor(hex) {
    if (typeof hex === 'number') {
      hex = '#' + hex.toString(16).padStart(6, '0');
    }
    if (!this.colorCache.has(hex)) {
      this.colorCache.set(hex, new THREE.Color(hex));
    }
    return this.colorCache.get(hex);
  }

  /**
   * 设置单个体素
   */
  setVoxel(x, y, z, colorHex, type = 'solid') {
    const rx = Math.round(x);
    const ry = Math.round(y);
    const rz = Math.round(z);
    const key = this._getKey(rx, ry, rz);
    this.voxels.set(key, {
      x: rx,
      y: ry,
      z: rz,
      color: this.getColor(colorHex),
      type
    });
  }

  /**
   * 检查体素是否存在
   */
  hasVoxel(x, y, z) {
    return this.voxels.has(this._getKey(Math.round(x), Math.round(y), Math.round(z)));
  }

  getVoxel(x, y, z) {
    return this.voxels.get(this._getKey(Math.round(x), Math.round(y), Math.round(z)));
  }

  /**
   * 填充实体长方体体素块
   */
  fillBox(x1, y1, z1, x2, y2, z2, colorHex, type = 'solid', hollow = false) {
    const minX = Math.min(Math.round(x1), Math.round(x2));
    const maxX = Math.max(Math.round(x1), Math.round(x2));
    const minY = Math.min(Math.round(y1), Math.round(y2));
    const maxY = Math.max(Math.round(y1), Math.round(y2));
    const minZ = Math.min(Math.round(z1), Math.round(z2));
    const maxZ = Math.max(Math.round(z1), Math.round(z2));

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        for (let z = minZ; z <= maxZ; z++) {
          if (hollow) {
            const isEdge = (x === minX || x === maxX || y === minY || y === maxY || z === minZ || z === maxZ);
            if (!isEdge) continue;
          }
          this.setVoxel(x, y, z, colorHex, type);
        }
      }
    }
  }

  /**
   * 沿圆柱形/立柱填充
   */
  fillCylinder(cx, cy, cz, radius, height, colorHex, type = 'solid') {
    const r2 = radius * radius;
    const r = Math.ceil(radius);
    for (let y = cy; y < cy + height; y++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          if (dx * dx + dz * dz <= r2 + 0.1) {
            this.setVoxel(cx + dx, y, cz + dz, colorHex, type);
          }
        }
      }
    }
  }

  /**
   * 构建并生成 InstancedMesh 批次加入场景
   */
  buildSceneMeshes(scene) {
    // 1. 过滤被完全封闭包围的内部不可见体素（内部剔除，大幅提升渲染性能与降低显存）
    const visibleVoxelsByType = {
      solid: [],
      lantern: [],
      gold: [],
      water: [],
      foliage: []
    };

    const offsets = [
      [1, 0, 0], [-1, 0, 0],
      [0, 1, 0], [0, -1, 0],
      [0, 0, 1], [0, 0, -1]
    ];

    let totalOriginal = 0;
    let totalVisible = 0;

    for (const [key, v] of this.voxels.entries()) {
      totalOriginal++;

      // 透明或自发光体素不进行常规剔除
      if (v.type === 'water' || v.type === 'lantern') {
        visibleVoxelsByType[v.type].push(v);
        totalVisible++;
        continue;
      }

      // 检查6个邻域是否全部存在不透明体素
      let occluded = true;
      for (let i = 0; i < 6; i++) {
        const nx = v.x + offsets[i][0];
        const ny = v.y + offsets[i][1];
        const nz = v.z + offsets[i][2];
        const neighbor = this.getVoxel(nx, ny, nz);
        if (!neighbor || neighbor.type === 'water') {
          occluded = false;
          break;
        }
      }

      if (!occluded) {
        if (visibleVoxelsByType[v.type]) {
          visibleVoxelsByType[v.type].push(v);
        } else {
          visibleVoxelsByType.solid.push(v);
        }
        totalVisible++;
      }
    }

    console.log(`[VoxelWorld] 体素统计: 原始体素 ${totalOriginal} 个, 可见体素 ${totalVisible} 个 (剔除率: ${((1 - totalVisible / totalOriginal) * 100).toFixed(1)}%)`);

    // 2. 准备基础几何体与各批次材质
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);

    const materials = {
      solid: new THREE.MeshStandardMaterial({
        roughness: 0.72,
        metalness: 0.12,
        vertexColors: false
      }),
      lantern: new THREE.MeshStandardMaterial({
        roughness: 0.25,
        metalness: 0.05,
        emissive: new THREE.Color(0xff6a00),
        emissiveIntensity: 0.95
      }),
      gold: new THREE.MeshStandardMaterial({
        roughness: 0.28,
        metalness: 0.85
      }),
      water: new THREE.MeshStandardMaterial({
        roughness: 0.08,
        metalness: 0.35,
        color: new THREE.Color(0x20769b),
        transparent: true,
        opacity: 0.82
      }),
      foliage: new THREE.MeshStandardMaterial({
        roughness: 0.88,
        metalness: 0.05
      })
    };

    const dummy = new THREE.Object3D();
    const createdMeshes = {};

    for (const [type, voxels] of Object.entries(visibleVoxelsByType)) {
      if (voxels.length === 0) continue;

      const instancedMesh = new THREE.InstancedMesh(boxGeo, materials[type], voxels.length);
      instancedMesh.name = `voxel_${type}`;
      instancedMesh.castShadow = (type !== 'water');
      instancedMesh.receiveShadow = true;

      for (let i = 0; i < voxels.length; i++) {
        const v = voxels[i];
        dummy.position.set(v.x, v.y, v.z);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
        instancedMesh.setColorAt(i, v.color);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      if (instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true;
      }

      scene.add(instancedMesh);
      createdMeshes[type] = instancedMesh;
    }

    return {
      meshes: createdMeshes,
      materials,
      totalVoxels: totalVisible
    };
  }
}
