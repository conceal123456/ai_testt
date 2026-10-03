(function() {
  'use strict';

  const THREE = window.THREE;
  if (!THREE) {
    console.error('Three.js 未正确加载！');
    return;
  }
  const OrbitControls = THREE.OrbitControls;

  // 1. 材质与调色板定义
  const VoxelType = {
    AIR: 0,
    ROOF_GOLD: 1,      // 琉璃金瓦（主殿歇山/庑殿顶）
    ROOF_RIDGE: 2,     // 正脊/垂脊暗赭瓦与脊兽
    ROOF_CYAN: 3,      // 青黛瓦（配殿与古塔飞檐）
    ROOF_CYAN_DARK: 4, // 宝塔脊线
    WALL_RED: 5,       // 朱红宫墙
    WALL_WOOD: 6,      // 廊柱与门窗格木质
    PILLAR_RED: 7,     // 朱漆立柱大柱
    DOUGONG_GREEN: 8,  // 斗拱青绿彩画
    DOUGONG_GOLD: 9,   // 斗拱出跳木构与鎏金
    STONE_WHITE: 10,   // 汉白玉台基、望柱、月台
    STONE_ROAD: 11,    // 庭院御道铺地
    STONE_BRICK: 12,   // 青灰地砖
    GOLD_FINIAL: 13,   // 鎏金宝顶、宝刹、风铃
    LANTERN_RED: 14,   // 大红灯笼（发光）
    PINE_LEAF: 15,     // 苍翠松柏松针
    PINE_TRUNK: 16,    // 老松苍劲树干
    WATER: 17,         // 金水河碧波
    RAILING_GOLD: 18,  // 鎏金雕花与匾额
    LION_STONE: 19,    // 守门石狮与香炉石材
  };

  const MATERIAL_CONFIGS = {
    [VoxelType.ROOF_GOLD]: { color: 0xdf9322, roughness: 0.35, metalness: 0.15 },
    [VoxelType.ROOF_RIDGE]: { color: 0x8a4b12, roughness: 0.5, metalness: 0.1 },
    [VoxelType.ROOF_CYAN]: { color: 0x2b464a, roughness: 0.4, metalness: 0.1 },
    [VoxelType.ROOF_CYAN_DARK]: { color: 0x1b2d30, roughness: 0.5, metalness: 0.05 },
    [VoxelType.WALL_RED]: { color: 0x9e2420, roughness: 0.7, metalness: 0.02 },
    [VoxelType.WALL_WOOD]: { color: 0x4a1814, roughness: 0.65, metalness: 0.05 },
    [VoxelType.PILLAR_RED]: { color: 0x821c17, roughness: 0.45, metalness: 0.05 },
    [VoxelType.DOUGONG_GREEN]: { color: 0x1f5c43, roughness: 0.55, metalness: 0.08 },
    [VoxelType.DOUGONG_GOLD]: { color: 0xb58032, roughness: 0.35, metalness: 0.25 },
    [VoxelType.STONE_WHITE]: { color: 0xe6e7e8, roughness: 0.6, metalness: 0.05 },
    [VoxelType.STONE_ROAD]: { color: 0xb8babb, roughness: 0.8, metalness: 0.02 },
    [VoxelType.STONE_BRICK]: { color: 0x5a6366, roughness: 0.85, metalness: 0.02 },
    [VoxelType.GOLD_FINIAL]: { color: 0xf5bf38, roughness: 0.25, metalness: 0.7 },
    [VoxelType.LANTERN_RED]: { color: 0xff2211, roughness: 0.3, metalness: 0.1, emissive: 0xcc1100, emissiveIntensity: 0.8 },
    [VoxelType.PINE_LEAF]: { color: 0x224a2c, roughness: 0.75, metalness: 0.0 },
    [VoxelType.PINE_TRUNK]: { color: 0x422d1b, roughness: 0.9, metalness: 0.0 },
    [VoxelType.WATER]: { color: 0x367588, roughness: 0.15, metalness: 0.3, opacity: 0.92, transparent: true },
    [VoxelType.RAILING_GOLD]: { color: 0xd4a034, roughness: 0.3, metalness: 0.4 },
    [VoxelType.LION_STONE]: { color: 0x82888a, roughness: 0.7, metalness: 0.05 }
  };

  function createVoxelMaterials() {
    const materials = {};
    for (const [typeId, cfg] of Object.entries(MATERIAL_CONFIGS)) {
      materials[typeId] = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: cfg.roughness ?? 0.5,
        metalness: cfg.metalness ?? 0.1,
        emissive: cfg.emissive ?? 0x000000,
        emissiveIntensity: cfg.emissiveIntensity ?? 0,
        transparent: !!cfg.transparent,
        opacity: cfg.opacity ?? 1.0,
      });
    }
    return materials;
  }

  // 2. 体素世界管理器（带面遮挡剔除与InstancedMesh生成）
  class VoxelWorld {
    constructor(voxelSize = 1.0) {
      this.voxelSize = voxelSize;
      this.voxels = new Map();
    }

    key(x, y, z) {
      return `${Math.round(x)},${Math.round(y)},${Math.round(z)}`;
    }

    setVoxel(x, y, z, type) {
      const k = this.key(x, y, z);
      if (type === VoxelType.AIR || type === 0) {
        this.voxels.delete(k);
      } else {
        this.voxels.set(k, type);
      }
    }

    getVoxel(x, y, z) {
      return this.voxels.get(this.key(x, y, z)) || VoxelType.AIR;
    }

    fillBox(minX, minY, minZ, maxX, maxY, maxZ, type) {
      const x0 = Math.min(minX, maxX), x1 = Math.max(minX, maxX);
      const y0 = Math.min(minY, maxY), y1 = Math.max(minY, maxY);
      const z0 = Math.min(minZ, maxZ), z1 = Math.max(minZ, maxZ);
      for (let x = x0; x <= x1; x++) {
        for (let y = y0; y <= y1; y++) {
          for (let z = z0; z <= z1; z++) {
            this.setVoxel(x, y, z, type);
          }
        }
      }
    }

    fillPillar(centerX, startY, centerZ, height, radius = 1, type = VoxelType.PILLAR_RED) {
      for (let y = startY; y < startY + height; y++) {
        for (let dx = -radius + 1; dx <= radius - 1; dx++) {
          for (let dz = -radius + 1; dz <= radius - 1; dz++) {
            this.setVoxel(centerX + dx, y, centerZ + dz, type);
          }
        }
      }
    }

    fillOctagon(centerX, y, centerZ, radius, type) {
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (Math.abs(dx) + Math.abs(dz) <= radius * 1.5) {
            this.setVoxel(centerX + dx, y, centerZ + dz, type);
          }
        }
      }
    }

    isOccluded(x, y, z) {
      const neighbors = [
        [1, 0, 0], [-1, 0, 0],
        [0, 1, 0], [0, -1, 0],
        [0, 0, 1], [0, 0, -1]
      ];
      for (const [dx, dy, dz] of neighbors) {
        const neighborType = this.getVoxel(x + dx, y + dy, z + dz);
        if (neighborType === VoxelType.AIR || neighborType === VoxelType.WATER) {
          return false;
        }
      }
      return true;
    }

    buildMeshGroup(optimizeOcclusion = true) {
      const group = new THREE.Group();
      group.name = 'VoxelArchitectureScene';

      const voxelsByType = new Map();
      let totalVoxels = 0;
      let renderedVoxels = 0;

      for (const [k, type] of this.voxels.entries()) {
        totalVoxels++;
        const [x, y, z] = k.split(',').map(Number);

        if (optimizeOcclusion && this.isOccluded(x, y, z)) {
          continue;
        }

        renderedVoxels++;
        if (!voxelsByType.has(type)) {
          voxelsByType.set(type, []);
        }
        voxelsByType.get(type).push({ x, y, z });
      }

      console.log(`[VoxelWorld] 总计体素: ${totalVoxels}, 渲染体素: ${renderedVoxels}`);

      const boxGeometry = new THREE.BoxGeometry(this.voxelSize, this.voxelSize, this.voxelSize);
      const materials = createVoxelMaterials();
      const dummy = new THREE.Object3D();

      for (const [type, positions] of voxelsByType.entries()) {
        const material = materials[type] || new THREE.MeshStandardMaterial({ color: 0x888888 });
        const instancedMesh = new THREE.InstancedMesh(boxGeometry, material, positions.length);
        instancedMesh.castShadow = true;
        instancedMesh.receiveShadow = true;

        for (let i = 0; i < positions.length; i++) {
          const { x, y, z } = positions[i];
          dummy.position.set(x * this.voxelSize, y * this.voxelSize, z * this.voxelSize);
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

  // 3. 中国古典建筑群生成算法
  class ChineseArchitectureBuilder {
    constructor(world) {
      this.world = world;
    }

    buildEntireComplex() {
      this.buildGroundAndRiver();
      this.buildGateHouse(0, 0, 32);
      this.buildCourtyardAndPathways();
      this.buildMainHall(0, 0, -6);
      this.buildSideHall(26, 0, -6, true);   // 东配殿
      this.buildSideHall(-26, 0, -6, false); // 西配殿
      this.buildPagoda(0, 0, -36);          // 七级宝塔
      this.buildEnclosureWalls();
    }

    buildGroundAndRiver() {
      const w = this.world;
      const minX = -46, maxX = 46;
      const minZ = -52, maxZ = 50;

      for (let x = minX; x <= maxX; x++) {
        for (let z = minZ; z <= maxZ; z++) {
          const isBorder = (Math.abs(x) > 38 || z > 44 || z < -46);
          w.setVoxel(x, 0, z, isBorder ? VoxelType.PINE_LEAF : VoxelType.STONE_BRICK);
        }
      }

      // 金水河
      for (let x = minX; x <= maxX; x++) {
        for (let z = 42; z <= 45; z++) {
          w.setVoxel(x, -1, z, VoxelType.STONE_BRICK);
          w.setVoxel(x, 0, z, VoxelType.WATER);
        }
      }

      // 汉白玉石桥三座
      [-12, 0, 12].forEach((bx, idx) => {
        const isCenter = (idx === 1);
        const bridgeHalfW = isCenter ? 3 : 2;
        for (let x = bx - bridgeHalfW; x <= bx + bridgeHalfW; x++) {
          for (let z = 41; z <= 46; z++) {
            const archH = (z === 43 || z === 44) ? 2 : 1;
            w.setVoxel(x, archH, z, VoxelType.STONE_WHITE);
          }
          w.setVoxel(bx - bridgeHalfW, 2, 42, VoxelType.STONE_WHITE);
          w.setVoxel(bx - bridgeHalfW, 3, 43, VoxelType.GOLD_FINIAL);
          w.setVoxel(bx - bridgeHalfW, 3, 44, VoxelType.GOLD_FINIAL);
          w.setVoxel(bx - bridgeHalfW, 2, 45, VoxelType.STONE_WHITE);

          w.setVoxel(bx + bridgeHalfW, 2, 42, VoxelType.STONE_WHITE);
          w.setVoxel(bx + bridgeHalfW, 3, 43, VoxelType.GOLD_FINIAL);
          w.setVoxel(bx + bridgeHalfW, 3, 44, VoxelType.GOLD_FINIAL);
          w.setVoxel(bx + bridgeHalfW, 2, 45, VoxelType.STONE_WHITE);
        }
      });
    }

    buildGateHouse(cx, cy, cz) {
      const w = this.world;
      const width = 18, depth = 10, height = 7;

      w.fillBox(cx - 10, cy, cz - 6, cx + 10, cy + 1, cz + 6, VoxelType.STONE_WHITE);
      w.fillBox(cx - 3, cy, cz + 7, cx + 3, cy, cz + 7, VoxelType.STONE_WHITE);
      w.fillBox(cx - 3, cy, cz - 7, cx + 3, cy, cz - 7, VoxelType.STONE_WHITE);

      const by = cy + 2;
      const pillarPositions = [
        [cx - 8, cz - 4], [cx - 3, cz - 4], [cx + 3, cz - 4], [cx + 8, cz - 4],
        [cx - 8, cz + 4], [cx - 3, cz + 4], [cx + 3, cz + 4], [cx + 8, cz + 4]
      ];
      for (const [px, pz] of pillarPositions) {
        w.fillPillar(px, by, pz, height - 1, 1, VoxelType.PILLAR_RED);
      }

      w.fillBox(cx - 7, by, cz - 3, cx + 7, by + height - 2, cz + 3, VoxelType.WALL_RED);
      w.fillBox(cx - 2, by, cz - 4, cx + 2, by + 4, cz + 4, VoxelType.AIR);
      w.fillBox(cx - 6, by, cz - 4, cx - 5, by + 3, cz + 4, VoxelType.AIR);
      w.fillBox(cx + 5, by, cz - 4, cx + 6, by + 3, cz + 4, VoxelType.AIR);

      const dougongY = by + height - 1;
      w.fillBox(cx - 9, dougongY, cz - 5, cx + 9, dougongY, cz + 5, VoxelType.DOUGONG_GREEN);
      for (let x = cx - 9; x <= cx + 9; x += 2) {
        w.setVoxel(x, dougongY, cz - 5, VoxelType.DOUGONG_GOLD);
        w.setVoxel(x, dougongY, cz + 5, VoxelType.DOUGONG_GOLD);
      }

      w.setVoxel(cx - 4, dougongY - 1, cz + 5, VoxelType.LANTERN_RED);
      w.setVoxel(cx + 4, dougongY - 1, cz + 5, VoxelType.LANTERN_RED);

      this.buildCurvedRoof(cx, dougongY + 1, cz, width + 4, depth + 4, 5, VoxelType.ROOF_CYAN, VoxelType.ROOF_CYAN_DARK);
    }

    buildCourtyardAndPathways() {
      const w = this.world;

      // 中轴御道
      for (let z = 7; z <= 26; z++) {
        for (let x = -3; x <= 3; x++) {
          const isCenterStone = (Math.abs(x) <= 1);
          w.setVoxel(x, 1, z, isCenterStone ? VoxelType.STONE_ROAD : VoxelType.STONE_WHITE);
        }
      }

      for (let z = 9; z <= 24; z += 3) {
        w.fillBox(-10, 1, z, -4, 1, z + 1, VoxelType.STONE_BRICK);
        w.fillBox(4, 1, z, 10, 1, z + 1, VoxelType.STONE_BRICK);
      }

      this.buildStoneLion(-6, 1, 14);
      this.buildStoneLion(6, 1, 14);
      this.buildIncenseBurner(0, 1, 10);

      const pinePositions = [
        [-14, 1, 18], [-16, 1, 10], [-13, 1, 3],
        [14, 1, 18], [16, 1, 10], [13, 1, 3],
        [-18, 1, -20], [18, 1, -20]
      ];
      for (const [px, py, pz] of pinePositions) {
        this.buildPineTree(px, py, pz);
      }

      const lanternPillars = [
        [-4, 1, 22], [4, 1, 22],
        [-4, 1, 16], [4, 1, 16],
        [-4, 1, 8], [4, 1, 8]
      ];
      for (const [lx, ly, lz] of lanternPillars) {
        w.setVoxel(lx, ly, lz, VoxelType.STONE_WHITE);
        w.setVoxel(lx, ly + 1, lz, VoxelType.LANTERN_RED);
        w.setVoxel(lx, ly + 2, lz, VoxelType.ROOF_CYAN);
      }
    }

    buildMainHall(cx, cy, cz) {
      const w = this.world;

      // 汉白玉大月台
      w.fillBox(cx - 18, cy, cz - 12, cx + 18, cy + 1, cz + 12, VoxelType.STONE_WHITE);
      w.fillBox(cx - 16, cy + 2, cz - 10, cx + 16, cy + 2, cz + 10, VoxelType.STONE_WHITE);

      for (let x = cx - 18; x <= cx + 18; x++) {
        if (Math.abs(x) > 4) {
          w.setVoxel(x, cy + 2, cz + 12, VoxelType.STONE_WHITE);
          if (x % 2 === 0) w.setVoxel(x, cy + 3, cz + 12, VoxelType.GOLD_FINIAL);
        }
        w.setVoxel(x, cy + 2, cz - 12, VoxelType.STONE_WHITE);
        if (x % 2 === 0) w.setVoxel(x, cy + 3, cz - 12, VoxelType.GOLD_FINIAL);
      }

      // 台阶与丹陛
      for (let dy = 0; dy <= 2; dy++) {
        const stepZ = cz + 13 + (2 - dy);
        w.fillBox(cx - 6, cy + dy, stepZ, cx - 3, cy + dy, stepZ, VoxelType.STONE_WHITE);
        w.fillBox(cx + 3, cy + dy, stepZ, cx + 6, cy + dy, stepZ, VoxelType.STONE_WHITE);
        w.fillBox(cx - 2, cy + dy, stepZ, cx + 2, cy + dy, stepZ, VoxelType.RAILING_GOLD);
      }

      const hallWidth = 28, hallDepth = 16, baseH = cy + 3, wallH = 7;
      w.fillBox(cx - 13, baseH, cz - 7, cx + 13, baseH + wallH - 1, cz + 7, VoxelType.WALL_RED);

      const pillarXs = [-13, -9, -5, -2, 2, 5, 9, 13];
      for (const px of pillarXs) {
        w.fillPillar(cx + px, baseH, cz + 8, wallH, 1, VoxelType.PILLAR_RED);
        w.fillPillar(cx + px, baseH, cz - 8, wallH, 1, VoxelType.PILLAR_RED);
      }

      w.fillBox(cx - 4, baseH, cz + 7, cx + 4, baseH + 4, cz + 7, VoxelType.WALL_WOOD);
      w.fillBox(cx - 1, baseH, cz + 7, cx + 1, baseH + 3, cz + 7, VoxelType.AIR);
      w.fillBox(cx - 2, baseH + wallH - 2, cz + 8, cx + 2, baseH + wallH - 2, cz + 8, VoxelType.RAILING_GOLD);

      const dougongY = baseH + wallH;
      w.fillBox(cx - 15, dougongY, cz - 9, cx + 15, dougongY, cz + 9, VoxelType.DOUGONG_GREEN);
      for (let x = cx - 15; x <= cx + 15; x += 2) {
        w.setVoxel(x, dougongY, cz + 9, VoxelType.DOUGONG_GOLD);
        w.setVoxel(x, dougongY, cz - 9, VoxelType.DOUGONG_GOLD);
      }

      [-9, -5, 5, 9].forEach(dx => {
        w.setVoxel(cx + dx, dougongY - 1, cz + 9, VoxelType.LANTERN_RED);
        w.setVoxel(cx + dx, dougongY - 2, cz + 9, VoxelType.LANTERN_RED);
        w.setVoxel(cx + dx, dougongY, cz + 10, VoxelType.GOLD_FINIAL);
      });

      // 重檐
      const lowerRoofY = dougongY + 1;
      this.buildCurvedRoof(cx, lowerRoofY, cz, hallWidth + 6, hallDepth + 6, 3, VoxelType.ROOF_GOLD, VoxelType.ROOF_RIDGE, 2);

      const upperBaseY = lowerRoofY + 3;
      w.fillBox(cx - 10, upperBaseY, cz - 5, cx + 10, upperBaseY + 2, cz + 5, VoxelType.WALL_RED);
      w.fillBox(cx - 11, upperBaseY + 2, cz - 6, cx + 11, upperBaseY + 2, cz + 6, VoxelType.DOUGONG_GREEN);

      const upperRoofY = upperBaseY + 3;
      this.buildCurvedRoof(cx, upperRoofY, cz, hallWidth + 4, hallDepth + 4, 6, VoxelType.ROOF_GOLD, VoxelType.ROOF_RIDGE, 3, true);
    }

    buildSideHall(cx, cy, cz, isEast) {
      const w = this.world;
      const width = 14, depth = 22, wallH = 6;

      w.fillBox(cx - 8, cy, cz - 12, cx + 8, cy + 1, cz + 12, VoxelType.STONE_WHITE);
      const facingStepX = isEast ? (cx - 9) : (cx + 9);
      w.fillBox(facingStepX, cy, cz - 3, facingStepX, cy, cz + 3, VoxelType.STONE_WHITE);

      const baseH = cy + 2;
      w.fillBox(cx - 6, baseH, cz - 10, cx + 6, baseH + wallH - 1, cz + 10, VoxelType.WALL_RED);

      const frontColX = isEast ? (cx - 7) : (cx + 7);
      for (let z = cz - 9; z <= cz + 9; z += 4) {
        w.fillPillar(frontColX, baseH, z, wallH, 1, VoxelType.PILLAR_RED);
      }

      w.fillBox(isEast ? cx - 6 : cx + 6, baseH, cz - 1, isEast ? cx - 6 : cx + 6, baseH + 3, cz + 1, VoxelType.AIR);

      const dougongY = baseH + wallH;
      w.fillBox(cx - 8, dougongY, cz - 12, cx + 8, dougongY, cz + 12, VoxelType.DOUGONG_GREEN);

      w.setVoxel(frontColX, dougongY - 1, cz - 4, VoxelType.LANTERN_RED);
      w.setVoxel(frontColX, dougongY - 1, cz + 4, VoxelType.LANTERN_RED);

      this.buildCurvedRoof(cx, dougongY + 1, cz, width + 4, depth + 4, 5, VoxelType.ROOF_CYAN, VoxelType.ROOF_CYAN_DARK);
    }

    buildPagoda(cx, cy, cz) {
      const w = this.world;

      for (let y = cy; y <= cy + 2; y++) {
        w.fillOctagon(cx, y, cz, 11 - (y - cy), VoxelType.STONE_WHITE);
      }
      w.fillBox(cx - 2, cy, cz + 10, cx + 2, cy + 2, cz + 12, VoxelType.STONE_WHITE);

      let curY = cy + 3;
      let radius = 8;
      const levels = 7;

      for (let lvl = 1; lvl <= levels; lvl++) {
        const levelH = Math.max(3, 5 - Math.floor(lvl / 2));

        for (let y = curY; y < curY + levelH; y++) {
          w.fillOctagon(cx, y, cz, radius, VoxelType.WALL_RED);
          if (y >= curY + 1 && y <= curY + levelH - 1) {
            w.setVoxel(cx, y, cz + radius, VoxelType.WALL_WOOD);
            w.setVoxel(cx, y, cz - radius, VoxelType.WALL_WOOD);
            w.setVoxel(cx + radius, y, cz, VoxelType.WALL_WOOD);
            w.setVoxel(cx - radius, y, cz, VoxelType.WALL_WOOD);
          }
        }

        const eaveY = curY + levelH;
        w.fillOctagon(cx, eaveY, cz, radius + 1, VoxelType.DOUGONG_GREEN);

        for (let dx = -(radius + 2); dx <= radius + 2; dx++) {
          for (let dz = -(radius + 2); dz <= radius + 2; dz++) {
            if (Math.abs(dx) <= radius + 2 && Math.abs(dz) <= radius + 2) {
              const isCorner = (Math.abs(dx) >= radius + 1 && Math.abs(dz) >= radius + 1);
              const tileY = isCorner ? eaveY + 2 : eaveY + 1;
              w.setVoxel(cx + dx, tileY, cz + dz, VoxelType.ROOF_CYAN);
              if (isCorner) {
                w.setVoxel(cx + dx, tileY - 1, cz + dz, VoxelType.GOLD_FINIAL);
              }
            }
          }
        }

        curY = eaveY + 2;
        if (radius > 3) radius -= 1;
      }

      w.fillPillar(cx, curY, cz, 2, 2, VoxelType.GOLD_FINIAL);
      w.fillPillar(cx, curY + 2, cz, 4, 1, VoxelType.GOLD_FINIAL);
      w.setVoxel(cx, curY + 6, cz, VoxelType.GOLD_FINIAL);
      w.setVoxel(cx, curY + 7, cz, VoxelType.GOLD_FINIAL);
    }

    buildCurvedRoof(cx, startY, cz, spanX, spanZ, height, tileType, ridgeType, upturn = 2, isHallMajor = false) {
      const w = this.world;
      const halfX = Math.floor(spanX / 2);
      const halfZ = Math.floor(spanZ / 2);

      for (let h = 0; h < height; h++) {
        const curY = startY + h;
        const curHalfX = halfX - h;
        const curHalfZ = halfZ - h;

        if (curHalfX <= 0 || curHalfZ <= 0) break;

        for (let x = cx - curHalfX; x <= cx + curHalfX; x++) {
          for (let z = cz - curHalfZ; z <= cz + curHalfZ; z++) {
            const dx = Math.abs(x - cx);
            const dz = Math.abs(z - cz);

            const isEdgeX = (dx >= curHalfX - 1);
            const isEdgeZ = (dz >= curHalfZ - 1);

            if (isEdgeX || isEdgeZ) {
              let cornerLift = 0;
              if (h <= 2) {
                const cornerProximity = Math.min(curHalfX - dx, curHalfZ - dz);
                if (cornerProximity <= 1) {
                  cornerLift = upturn - cornerProximity;
                }
              }

              const isRidge = Math.abs((dx / curHalfX) - (dz / curHalfZ)) < 0.15;
              const finalType = isRidge ? ridgeType : tileType;

              w.setVoxel(x, curY + cornerLift, z, finalType);

              if (dx === curHalfX && dz === curHalfZ && cornerLift > 0) {
                w.setVoxel(x, curY + cornerLift + 1, z, VoxelType.GOLD_FINIAL);
              }
            }
          }
        }
      }

      const ridgeY = startY + height - 1;
      const ridgeHalfX = Math.max(2, halfX - height + 1);
      for (let x = cx - ridgeHalfX; x <= cx + ridgeHalfX; x++) {
        w.setVoxel(x, ridgeY, cz, ridgeType);
        w.setVoxel(x, ridgeY + 1, cz, ridgeType);
      }

      if (isHallMajor) {
        [-ridgeHalfX, ridgeHalfX].forEach(rx => {
          w.setVoxel(cx + rx, ridgeY + 2, cz, VoxelType.GOLD_FINIAL);
          w.setVoxel(cx + rx, ridgeY + 3, cz, VoxelType.GOLD_FINIAL);
        });
        w.setVoxel(cx, ridgeY + 2, cz, VoxelType.GOLD_FINIAL);
        w.setVoxel(cx, ridgeY + 3, cz, VoxelType.GOLD_FINIAL);
      }
    }

    buildEnclosureWalls() {
      const w = this.world;
      const wallH = 4;

      [-38, 38].forEach(wx => {
        for (let z = -44; z <= 30; z++) {
          for (let y = 1; y <= wallH; y++) {
            const isWindow = (y === 2 && z % 4 === 0);
            w.setVoxel(wx, y, z, isWindow ? VoxelType.AIR : VoxelType.WALL_RED);
          }
          w.setVoxel(wx - 1, wallH + 1, z, VoxelType.ROOF_CYAN);
          w.setVoxel(wx, wallH + 1, z, VoxelType.ROOF_CYAN_DARK);
          w.setVoxel(wx + 1, wallH + 1, z, VoxelType.ROOF_CYAN);
        }
      });

      for (let x = -38; x <= 38; x++) {
        for (let y = 1; y <= wallH; y++) {
          w.setVoxel(x, y, -45, VoxelType.WALL_RED);
        }
        w.setVoxel(x, wallH + 1, -45, VoxelType.ROOF_CYAN_DARK);
      }
    }

    buildStoneLion(cx, cy, cz) {
      const w = this.world;
      w.fillBox(cx - 1, cy, cz - 1, cx + 1, cy, cz + 1, VoxelType.STONE_WHITE);
      w.fillBox(cx - 1, cy + 1, cz - 1, cx + 1, cy + 2, cz + 1, VoxelType.LION_STONE);
      w.setVoxel(cx, cy + 3, cz, VoxelType.LION_STONE);
      w.setVoxel(cx, cy + 3, cz + 1, VoxelType.LION_STONE);
      w.setVoxel(cx - 1, cy + 3, cz, VoxelType.LION_STONE);
      w.setVoxel(cx + 1, cy + 3, cz, VoxelType.LION_STONE);
    }

    buildIncenseBurner(cx, cy, cz) {
      const w = this.world;
      w.setVoxel(cx - 1, cy, cz, VoxelType.LION_STONE);
      w.setVoxel(cx + 1, cy, cz, VoxelType.LION_STONE);
      w.setVoxel(cx, cy, cz - 1, VoxelType.LION_STONE);
      w.fillBox(cx - 1, cy + 1, cz - 1, cx + 1, cy + 2, cz + 1, VoxelType.LION_STONE);
      w.setVoxel(cx - 2, cy + 2, cz, VoxelType.GOLD_FINIAL);
      w.setVoxel(cx + 2, cy + 2, cz, VoxelType.GOLD_FINIAL);
      w.setVoxel(cx, cy + 3, cz, VoxelType.LANTERN_RED);
    }

    buildPineTree(cx, cy, cz) {
      const w = this.world;
      const trunkH = 5 + Math.floor(Math.random() * 2);

      let tx = cx, tz = cz;
      for (let y = cy; y <= cy + trunkH; y++) {
        w.setVoxel(tx, y, tz, VoxelType.PINE_TRUNK);
        if (y === cy + 2) tx += 1;
        if (y === cy + 4) tz -= 1;
      }

      const canopyLevels = [
        { y: cy + trunkH - 1, r: 3 },
        { y: cy + trunkH + 1, r: 2 },
        { y: cy + trunkH + 2, r: 1 }
      ];

      for (const lvl of canopyLevels) {
        for (let dx = -lvl.r; dx <= lvl.r; dx++) {
          for (let dz = -lvl.r; dz <= lvl.r; dz++) {
            if (Math.abs(dx) + Math.abs(dz) <= lvl.r * 1.5) {
              w.setVoxel(tx + dx, lvl.y, tz + dz, VoxelType.PINE_LEAF);
            }
          }
        }
      }
    }
  }

  // 4. 应用程序主控类
  class ArchitectureApp {
    constructor(container) {
      this.container = container;
      this.isAutoRotating = true;
      this.currentAtmosphere = 'sunset';

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
      this.scene.background = new THREE.Color(0xd98b58);

      this.camera = new THREE.PerspectiveCamera(
        42,
        window.innerWidth / window.innerHeight,
        0.5,
        600
      );
      this.camera.position.set(78, 48, 68);

      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true
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

      this.hemiLight = new THREE.HemisphereLight(0xffeedd, 0x554433, 0.6);
      this.lightsGroup.add(this.hemiLight);

      this.ambientLight = new THREE.AmbientLight(0xffd5b3, 0.5);
      this.lightsGroup.add(this.ambientLight);

      this.sunLight = new THREE.DirectionalLight(0xffa852, 1.8);
      this.sunLight.position.set(65, 75, 55);
      this.sunLight.castShadow = true;

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

      this.backLight = new THREE.DirectionalLight(0x7ea4c2, 0.4);
      this.backLight.position.set(-60, 40, -50);
      this.lightsGroup.add(this.backLight);

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
      this.scene.fog = new THREE.FogExp2(0xd98b58, 0.0065);
    }

    buildWorld() {
      this.world = new VoxelWorld(1.0);
      const builder = new ChineseArchitectureBuilder(this.world);
      builder.buildEntireComplex();

      const result = this.world.buildMeshGroup(true);
      this.scene.add(result.group);
      this.voxelMeshGroup = result.group;

      this.stats = {
        totalVoxels: result.totalVoxels,
        renderedVoxels: result.renderedVoxels,
        drawCalls: result.drawCalls
      };
    }

    initControls() {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.06;
      this.controls.maxPolarAngle = Math.PI / 2 - 0.04;
      this.controls.minDistance = 12;
      this.controls.maxDistance = 220;
      this.controls.target.set(0, 7, -4);
    }

    switchView(viewName) {
      const views = {
        overview: { pos: [78, 48, 68], target: [0, 7, -4] },
        mainHall: { pos: [0, 16, 26], target: [0, 14, -6] },
        pagoda: { pos: [-25, 32, -12], target: [0, 22, -36] },
        gate: { pos: [0, 9, 58], target: [0, 6, 30] },
        topdown: { pos: [0, 120, -5], target: [0, 0, -5] }
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

    setAtmosphere(mode) {
      this.currentAtmosphere = mode;
      const atmospheres = {
        sunset: {
          bg: 0xd98b58, fog: 0xd98b58, fogDensity: 0.0065,
          sunColor: 0xff9944, sunIntensity: 1.8, sunPos: [65, 70, 55],
          hemiSky: 0xffeedd, hemiGround: 0x554433,
          ambient: 0xffd5b3, ambientIntensity: 0.5,
          exposure: 1.05, lanternIntensity: 0.8
        },
        morning: {
          bg: 0xa9c2cc, fog: 0xa9c2cc, fogDensity: 0.007,
          sunColor: 0xffecb3, sunIntensity: 1.5, sunPos: [-70, 55, 60],
          hemiSky: 0xd6e8f2, hemiGround: 0x4d5b4a,
          ambient: 0xd1e0e8, ambientIntensity: 0.6,
          exposure: 1.0, lanternIntensity: 0.4
        },
        midday: {
          bg: 0x88b5dc, fog: 0x88b5dc, fogDensity: 0.0045,
          sunColor: 0xfffaea, sunIntensity: 2.0, sunPos: [20, 95, 20],
          hemiSky: 0xffffff, hemiGround: 0x777777,
          ambient: 0xffffff, ambientIntensity: 0.55,
          exposure: 1.0, lanternIntensity: 0.1
        },
        night: {
          bg: 0x0c1524, fog: 0x0c1524, fogDensity: 0.008,
          sunColor: 0x3d5f8a, sunIntensity: 0.6, sunPos: [-40, 80, -40],
          hemiSky: 0x1b283d, hemiGround: 0x080f1a,
          ambient: 0x182436, ambientIntensity: 0.35,
          exposure: 1.15, lanternIntensity: 2.2
        }
      };

      const cfg = atmospheres[mode] || atmospheres.sunset;
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

      if (this.isAutoRotating) {
        const angle = 0.0018;
        const x = this.camera.position.x - this.controls.target.x;
        const z = this.camera.position.z - this.controls.target.z;
        this.camera.position.x = this.controls.target.x + x * Math.cos(angle) - z * Math.sin(angle);
        this.camera.position.z = this.controls.target.z + x * Math.sin(angle) + z * Math.cos(angle);
      }

      this.controls.update();
      this.renderer.render(this.scene, this.camera);

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

  // 挂载到全局
  window.ArchitectureApp = ArchitectureApp;

})();
