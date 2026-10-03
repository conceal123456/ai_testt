import * as THREE from 'three';
import { VoxelType, createVoxelMaterials } from './palette.js';

/**
 * 体素世界管理器
 * 负责体素数据的空间索引、绘制辅助函数、面遮挡剔除优化以及 InstancedMesh 批次生成
 */
export class VoxelWorld {
  constructor(voxelSize = 1.0) {
    this.voxelSize = voxelSize;
    // 使用 Map 存储空间体素：key 为 "x,y,z"
    this.voxels = new Map();
    this.bounds = {
      minX: Infinity, maxX: -Infinity,
      minY: Infinity, maxY: -Infinity,
      minZ: Infinity, maxZ: -Infinity
    };
  }

  key(x, y, z) {
    return `${x},${y},${z}`;
  }

  setVoxel(x, y, z, type) {
    x = Math.round(x);
    y = Math.round(y);
    z = Math.round(z);
    const k = this.key(x, y, z);
    if (type === VoxelType.AIR || type === 0) {
      this.voxels.delete(k);
    } else {
      this.voxels.set(k, type);
      if (x < this.bounds.minX) this.bounds.minX = x;
      if (x > this.bounds.maxX) this.bounds.maxX = x;
      if (y < this.bounds.minY) this.bounds.minY = y;
      if (y > this.bounds.maxY) this.bounds.maxY = y;
      if (z < this.bounds.minZ) this.bounds.minZ = z;
      if (z > this.bounds.maxZ) this.bounds.maxZ = z;
    }
  }

  getVoxel(x, y, z) {
    return this.voxels.get(this.key(Math.round(x), Math.round(y), Math.round(z))) || VoxelType.AIR;
  }

  hasVoxel(x, y, z) {
    return this.voxels.has(this.key(Math.round(x), Math.round(y), Math.round(z)));
  }

  // --- 基础图元绘制辅助函数 ---

  /** 填充实体长方体 */
  fillBox(minX, minY, minZ, maxX, maxY, maxZ, type) {
    const x0 = Math.min(minX, maxX);
    const x1 = Math.max(minX, maxX);
    const y0 = Math.min(minY, maxY);
    const y1 = Math.max(minY, maxY);
    const z0 = Math.min(minZ, maxZ);
    const z1 = Math.max(minZ, maxZ);

    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        for (let z = z0; z <= z1; z++) {
          this.setVoxel(x, y, z, type);
        }
      }
    }
  }

  /** 填充空心长方体框体 */
  hollowBox(minX, minY, minZ, maxX, maxY, maxZ, type, thickness = 1) {
    const x0 = Math.min(minX, maxX);
    const x1 = Math.max(minX, maxX);
    const y0 = Math.min(minY, maxY);
    const y1 = Math.max(minY, maxY);
    const z0 = Math.min(minZ, maxZ);
    const z1 = Math.max(minZ, maxZ);

    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        for (let z = z0; z <= z1; z++) {
          const isOuter = (
            x < x0 + thickness || x > x1 - thickness ||
            y < y0 + thickness || y > y1 - thickness ||
            z < z0 + thickness || z > z1 - thickness
          );
          if (isOuter) {
            this.setVoxel(x, y, z, type);
          }
        }
      }
    }
  }

  /** 绘制体素立柱 */
  fillPillar(centerX, startY, centerZ, height, radius = 1, type = VoxelType.PILLAR_RED) {
    for (let y = startY; y < startY + height; y++) {
      for (let dx = -radius + 1; dx <= radius - 1; dx++) {
        for (let dz = -radius + 1; dz <= radius - 1; dz++) {
          this.setVoxel(centerX + dx, y, centerZ + dz, type);
        }
      }
    }
  }

  /** 绘制八角形或圆台截面体素 */
  fillOctagon(centerX, y, centerZ, radius, type) {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dz = -radius; dz <= radius; dz++) {
        if (Math.abs(dx) + Math.abs(dz) <= radius * 1.5) {
          this.setVoxel(centerX + dx, y, centerZ + dz, type);
        }
      }
    }
  }

  /**
   * 判断一个体素是否被 6 个方向完全遮挡（内部体素）
   */
  isOccluded(x, y, z) {
    const neighbors = [
      [1, 0, 0], [-1, 0, 0],
      [0, 1, 0], [0, -1, 0],
      [0, 0, 1], [0, 0, -1]
    ];
    for (const [dx, dy, dz] of neighbors) {
      const neighborType = this.getVoxel(x + dx, y + dy, z + dz);
      // 如果任何一边是空气或者透明材质（如水），则不可被剔除
      if (neighborType === VoxelType.AIR || neighborType === VoxelType.WATER) {
        return false;
      }
    }
    return true;
  }

  /**
   * 将体素世界编译为 THREE.InstancedMesh 集合
   * @param {boolean} optimizeOcclusion 是否开启内部体素剔除
   */
  buildMeshGroup(optimizeOcclusion = true) {
    const group = new THREE.Group();
    group.name = "VoxelArchitectureScene";

    // 1. 按材质分类收集可见体素位置
    const voxelsByType = new Map();
    let totalVoxels = 0;
    let renderedVoxels = 0;

    for (const [k, type] of this.voxels.entries()) {
      totalVoxels++;
      const [x, y, z] = k.split(',').map(Number);

      // 遮挡剔除（内部不可见体素跳过）
      if (optimizeOcclusion && this.isOccluded(x, y, z)) {
        continue;
      }

      renderedVoxels++;
      if (!voxelsByType.has(type)) {
        voxelsByType.set(type, []);
      }
      voxelsByType.get(type).push({ x, y, z });
    }

    console.log(`[VoxelWorld] 总计体素: ${totalVoxels}, 优化渲染体素: ${renderedVoxels} (剔除率: ${((1 - renderedVoxels / totalVoxels) * 100).toFixed(1)}%)`);

    // 2. 共享立方体几何体（略微圆角或标准单位体素，尺寸 1x1x1）
    const boxGeometry = new THREE.BoxGeometry(this.voxelSize, this.voxelSize, this.voxelSize);
    const materials = createVoxelMaterials();
    const dummy = new THREE.Object3D();

    // 3. 为每种材质创建对应 InstancedMesh
    for (const [type, positions] of voxelsByType.entries()) {
      const material = materials[type] || new THREE.MeshStandardMaterial({ color: 0x888888 });
      const instancedMesh = new THREE.InstancedMesh(boxGeometry, material, positions.length);
      instancedMesh.name = `VoxelType_${type}`;
      instancedMesh.castShadow = true;
      instancedMesh.receiveShadow = true;

      for (let i = 0; i < positions.length; i++) {
        const { x, y, z } = positions[i];
        dummy.position.set(
          x * this.voxelSize,
          y * this.voxelSize,
          z * this.voxelSize
        );
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      group.add(instancedMesh);
    }

    return {
      group,
      totalVoxels,
      renderedVoxels,
      drawCalls: voxelsByType.size
    };
  }
}
