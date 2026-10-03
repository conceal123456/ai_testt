import * as THREE from 'three';

/**
 * High-performance Voxel Storage and InstancedMesh Builder.
 * Stores integer coordinates (x, y, z) and outputs optimized InstancedMeshes
 * with occlusion culling to ensure rock-solid 60 FPS performance.
 */
export class VoxelWorld {
  constructor(voxelSize = 0.8) {
    this.voxelSize = voxelSize;
    // Map with key `${x},${y},${z}` storing { x, y, z, color, type }
    this.voxels = new Map();
    // Keep track of world bounds for auto-centering/camera framing
    this.min = { x: Infinity, y: Infinity, z: Infinity };
    this.max = { x: -Infinity, y: -Infinity, z: -Infinity };
  }

  static key(x, y, z) {
    return `${x},${y},${z}`;
  }

  /**
   * Set a single voxel at integer coordinates.
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {THREE.Color} color
   * @param {'opaque'|'emissive'|'water'} type
   */
  set(x, y, z, color, type = 'opaque') {
    if (!color || typeof color.toArray !== 'function') {
      color = new THREE.Color(0xd89e28);
    }
    x = Math.round(x);
    y = Math.round(y);
    z = Math.round(z);

    const k = VoxelWorld.key(x, y, z);
    this.voxels.set(k, { x, y, z, color, type });

    if (x < this.min.x) this.min.x = x;
    if (y < this.min.y) this.min.y = y;
    if (z < this.min.z) this.min.z = z;
    if (x > this.max.x) this.max.x = x;
    if (y > this.max.y) this.max.y = y;
    if (z > this.max.z) this.max.z = z;
  }

  get(x, y, z) {
    return this.voxels.get(VoxelWorld.key(x, y, z));
  }

  has(x, y, z) {
    return this.voxels.has(VoxelWorld.key(x, y, z));
  }

  delete(x, y, z) {
    this.voxels.delete(VoxelWorld.key(x, y, z));
  }

  get count() {
    return this.voxels.size;
  }

  /**
   * Fill a solid 3D box of voxels
   */
  fillBox(x1, y1, z1, x2, y2, z2, color, type = 'opaque') {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    const minZ = Math.min(z1, z2);
    const maxZ = Math.max(z1, z2);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        for (let z = minZ; z <= maxZ; z++) {
          this.set(x, y, z, color, type);
        }
      }
    }
  }

  /**
   * Fill a hollow 3D box of voxels (perimeter walls)
   */
  fillHollowBox(x1, y1, z1, x2, y2, z2, color, wallThickness = 1, type = 'opaque') {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    const minZ = Math.min(z1, z2);
    const maxZ = Math.max(z1, z2);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        for (let z = minZ; z <= maxZ; z++) {
          const isOuter =
            x < minX + wallThickness || x > maxX - wallThickness ||
            y < minY + wallThickness || y > maxY - wallThickness ||
            z < minZ + wallThickness || z > maxZ - wallThickness;
          if (isOuter) {
            this.set(x, y, z, color, type);
          }
        }
      }
    }
  }

  /**
   * Build optimized Three.js meshes using InstancedMesh with occlusion culling.
   * Internal fully-surrounded cubes are excluded, reducing instance count dramatically.
   * @returns {THREE.Group} Group containing opaque, emissive, and water instanced meshes
   */
  buildMeshGroup() {
    const group = new THREE.Group();
    group.name = 'VoxelTempleComplex';

    // Separate lists for opaque, emissive, and water voxels
    const opaqueList = [];
    const emissiveList = [];
    const waterList = [];

    // Neighbor offsets for 6-direction occlusion culling
    const neighbors = [
      [1, 0, 0], [-1, 0, 0],
      [0, 1, 0], [0, -1, 0],
      [0, 0, 1], [0, 0, -1]
    ];

    for (const v of this.voxels.values()) {
      if (v.type === 'emissive') {
        emissiveList.push(v);
        continue;
      }
      if (v.type === 'water') {
        waterList.push(v);
        continue;
      }

      // Check if completely hidden by 6 opaque neighbors
      let occluded = true;
      for (let i = 0; i < 6; i++) {
        const nx = v.x + neighbors[i][0];
        const ny = v.y + neighbors[i][1];
        const nz = v.z + neighbors[i][2];
        const nb = this.get(nx, ny, nz);
        if (!nb || nb.type !== 'opaque') {
          occluded = false;
          break;
        }
      }

      if (!occluded) {
        opaqueList.push(v);
      }
    }

    const s = this.voxelSize;
    // Shared geometry with slightly beveled or crisp edges for clear voxel definition
    const geom = new THREE.BoxGeometry(s, s, s);

    // 1. OPAQUE MESH (Roofs, walls, pillars, stones, trees)
    if (opaqueList.length > 0) {
      const matOpaque = new THREE.MeshStandardMaterial({
        roughness: 0.82,
        metalness: 0.08,
        flatShading: true
      });
      const meshOpaque = new THREE.InstancedMesh(geom, matOpaque, opaqueList.length);
      meshOpaque.castShadow = true;
      meshOpaque.receiveShadow = true;
      meshOpaque.name = 'VoxelOpaque';

      const defaultColor = new THREE.Color(0xd89e28);
      const dummy = new THREE.Object3D();
      for (let i = 0; i < opaqueList.length; i++) {
        const v = opaqueList[i];
        dummy.position.set(v.x * s, v.y * s, v.z * s);
        dummy.updateMatrix();
        meshOpaque.setMatrixAt(i, dummy.matrix);
        meshOpaque.setColorAt(i, (v.color && typeof v.color.toArray === 'function') ? v.color : defaultColor);
      }
      meshOpaque.instanceMatrix.needsUpdate = true;
      if (meshOpaque.instanceColor) meshOpaque.instanceColor.needsUpdate = true;
      group.add(meshOpaque);
    }

    // 2. EMISSIVE MESH (Lanterns, window glowing light, pagoda spire jewel)
    if (emissiveList.length > 0) {
      const matEmissive = new THREE.MeshStandardMaterial({
        roughness: 0.2,
        metalness: 0.1,
        emissive: new THREE.Color(0xff8833),
        emissiveIntensity: 0.85,
        flatShading: true
      });
      const meshEmissive = new THREE.InstancedMesh(geom, matEmissive, emissiveList.length);
      meshEmissive.castShadow = false;
      meshEmissive.receiveShadow = false;
      meshEmissive.name = 'VoxelEmissive';

      const defaultEmissive = new THREE.Color(0xff8833);
      const dummy = new THREE.Object3D();
      for (let i = 0; i < emissiveList.length; i++) {
        const v = emissiveList[i];
        dummy.position.set(v.x * s, v.y * s, v.z * s);
        dummy.updateMatrix();
        meshEmissive.setMatrixAt(i, dummy.matrix);
        meshEmissive.setColorAt(i, (v.color && typeof v.color.toArray === 'function') ? v.color : defaultEmissive);
      }
      meshEmissive.instanceMatrix.needsUpdate = true;
      if (meshEmissive.instanceColor) meshEmissive.instanceColor.needsUpdate = true;
      group.add(meshEmissive);
    }

    // 3. WATER MESH (Lotus pond translucent surface)
    if (waterList.length > 0) {
      const matWater = new THREE.MeshStandardMaterial({
        roughness: 0.15,
        metalness: 0.2,
        transparent: true,
        opacity: 0.8,
        flatShading: true
      });
      const meshWater = new THREE.InstancedMesh(geom, matWater, waterList.length);
      meshWater.receiveShadow = true;
      meshWater.name = 'VoxelWater';

      const defaultWater = new THREE.Color(0x31697a);
      const dummy = new THREE.Object3D();
      for (let i = 0; i < waterList.length; i++) {
        const v = waterList[i];
        dummy.position.set(v.x * s, v.y * s, v.z * s);
        dummy.updateMatrix();
        meshWater.setMatrixAt(i, dummy.matrix);
        meshWater.setColorAt(i, (v.color && typeof v.color.toArray === 'function') ? v.color : defaultWater);
      }
      meshWater.instanceMatrix.needsUpdate = true;
      if (meshWater.instanceColor) meshWater.instanceColor.needsUpdate = true;
      group.add(meshWater);
    }

    // Attach statistics for HUD
    group.userData = {
      totalVoxels: this.voxels.size,
      renderedInstances: opaqueList.length + emissiveList.length + waterList.length,
      bounds: {
        min: { x: this.min.x * s, y: this.min.y * s, z: this.min.z * s },
        max: { x: this.max.x * s, y: this.max.y * s, z: this.max.z * s }
      }
    };

    return group;
  }
}
