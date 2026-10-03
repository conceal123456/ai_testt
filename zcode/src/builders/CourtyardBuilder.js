import { PALETTE } from '../engine/Palette.js';

/**
 * 庭院生态与道路动线生成器
 * 包含：中轴青石御道、十字漫步道、金水河与汉白玉金水桥、
 * 镇门石狮、青铜鼎炉、古松与千年金秋银杏、太湖石假山、石灯笼
 */
export class CourtyardBuilder {
  /**
   * 建造主地面与中轴道路动线
   */
  static buildGroundAndPathways(world) {
    const minX = -45;
    const maxX = 45;
    const minZ = -43;
    const maxZ = 45;

    // 1. 铺设基础庭院地面（夯土铺地 + 草坪点缀）
    for (let x = minX; x <= maxX; x++) {
      for (let z = minZ; z <= maxZ; z++) {
        // 如果该位置没有被建筑基座占用
        if (!world.hasVoxel(x, 0, z)) {
          // 棋盘式与自然相间的石阶庭院与草坪
          const isLawn = (Math.abs(x) > 10 && Math.abs(x) < 22 && z > -2 && z < 14) ||
                        (Math.abs(x) > 34 && z > 5 && z < 35);
          if (isLawn) {
            const grassColor = ((x + z) % 3 === 0) ? PALETTE.GRASS_LIGHT : PALETTE.GRASS_BASE;
            world.setVoxel(x, 0, z, grassColor, 'foliage');
          } else {
            world.setVoxel(x, 0, z, PALETTE.COURTYARD_GROUND, 'solid');
          }
        }
      }
    }

    // 2. 中轴线中央御道（山门 → 金水桥 → 庭院广场 → 主殿）
    for (let z = -5; z <= 44; z++) {
      for (let x = -3; x <= 3; x++) {
        const isBorder = (x === -3 || x === 3);
        world.setVoxel(x, 0, z, isBorder ? PALETTE.PAVEMENT_BORDER : PALETTE.PAVEMENT_STONE, 'solid');
      }
    }

    // 3. 横向支道（连接东西配殿、钟楼、鼓楼、宝塔）
    // 庭院横轴道 (Z = 18 连接钟鼓楼)
    for (let x = -26; x <= 26; x++) {
      world.setVoxel(x, 0, 18, PALETTE.PAVEMENT_STONE, 'solid');
      world.setVoxel(x, 0, 17, PALETTE.PAVEMENT_BORDER, 'solid');
      world.setVoxel(x, 0, 19, PALETTE.PAVEMENT_BORDER, 'solid');
    }

    // 配殿横轴道 (Z = -10 连接东西配殿)
    for (let x = -28; x <= 28; x++) {
      world.setVoxel(x, 0, -10, PALETTE.PAVEMENT_STONE, 'solid');
      world.setVoxel(x, 0, -11, PALETTE.PAVEMENT_BORDER, 'solid');
      world.setVoxel(x, 0, -9, PALETTE.PAVEMENT_BORDER, 'solid');
    }

    // 宝塔甬道 (通往千佛宝塔)
    for (let z = -10; z >= -32; z--) {
      world.setVoxel(-34, 0, z, PALETTE.PAVEMENT_STONE, 'solid');
      world.setVoxel(-33, 0, z, PALETTE.PAVEMENT_BORDER, 'solid');
      world.setVoxel(-35, 0, z, PALETTE.PAVEMENT_BORDER, 'solid');
    }
  }

  /**
   * 建造金水河与汉白玉金水桥
   */
  static buildWaterAndBridge(world) {
    const riverZ1 = 28;
    const riverZ2 = 32;

    // 1. 金水河道（横穿院落东西）
    for (let x = -44; x <= 44; x++) {
      for (let z = riverZ1; z <= riverZ2; z++) {
        // 河岸石条
        if (z === riverZ1 || z === riverZ2) {
          world.setVoxel(x, 0, z, PALETTE.MARBLE_BASE, 'solid');
        } else {
          // 河水
          world.setVoxel(x, -1, z, PALETTE.WATER_DEEP, 'solid');
          world.setVoxel(x, 0, z, PALETTE.WATER_SURFACE, 'water');
        }
      }
    }

    // 池中浮萍与荷花点缀
    const lotusSpots = [
      [-15, 30], [-18, 29], [16, 30], [20, 31], [-28, 30], [30, 29]
    ];
    lotusSpots.forEach(([lx, lz], idx) => {
      world.setVoxel(lx, 0, lz, PALETTE.LOTUS_LEAF, 'foliage');
      if (idx % 2 === 0) {
        world.setVoxel(lx, 1, lz, PALETTE.LOTUS_FLOWER, 'solid');
      }
    });

    // 2. 汉白玉单孔拱桥（金水桥）
    const bridgeW = 7; // X: -3 to +3
    for (let x = -3; x <= 3; x++) {
      // 桥面拱起微凸起（中间高，两端顺接）
      world.setVoxel(x, 1, 28, PALETTE.MARBLE_WHITE, 'solid');
      world.setVoxel(x, 1, 32, PALETTE.MARBLE_WHITE, 'solid');
      world.setVoxel(x, 2, 29, PALETTE.MARBLE_WHITE, 'solid');
      world.setVoxel(x, 2, 30, PALETTE.MARBLE_WHITE, 'solid');
      world.setVoxel(x, 2, 31, PALETTE.MARBLE_WHITE, 'solid');
    }

    // 桥两侧汉白玉望柱栏杆
    [-4, 4].forEach(bx => {
      for (let z = 28; z <= 32; z++) {
        const by = (z === 28 || z === 32) ? 2 : 3;
        world.setVoxel(bx, by, z, PALETTE.MARBLE_WHITE, 'solid');
        world.setVoxel(bx, by + 1, z, PALETTE.MARBLE_SHADOW, 'solid');
      }
    });
  }

  /**
   * 建造青铜大香炉（中轴线上，主殿前庭）
   */
  static buildIncenseBurner(world, cx = 0, cz = 6) {
    const y = 1;
    // 须弥汉白玉台座
    world.fillBox(cx - 2, 0, cz - 2, cx + 2, 0, cz + 2, PALETTE.MARBLE_WHITE);

    // 三足青铜底座
    world.setVoxel(cx - 1, y, cz - 1, PALETTE.BRONZE_DARK, 'gold');
    world.setVoxel(cx + 1, y, cz - 1, PALETTE.BRONZE_DARK, 'gold');
    world.setVoxel(cx, y, cz + 1, PALETTE.BRONZE_DARK, 'gold');

    // 炉体肚身
    world.fillBox(cx - 2, y + 1, cz - 1, cx + 2, y + 2, cz + 1, PALETTE.BRONZE_DARK, 'gold');
    world.fillBox(cx - 1, y + 1, cz - 2, cx + 1, y + 2, cz + 2, PALETTE.BRONZE_DARK, 'gold');

    // 炉膛内燃烧的朱红与金色香火
    world.setVoxel(cx, y + 2, cz, PALETTE.LANTERN_GLOW, 'lantern');
    world.setVoxel(cx - 1, y + 2, cz, PALETTE.LANTERN_RED, 'solid');
    world.setVoxel(cx + 1, y + 2, cz, PALETTE.LANTERN_RED, 'solid');

    // 双耳冲天
    world.setVoxel(cx - 3, y + 2, cz, PALETTE.BRONZE_GOLD, 'gold');
    world.setVoxel(cx - 3, y + 3, cz, PALETTE.BRONZE_GOLD, 'gold');
    world.setVoxel(cx + 3, y + 2, cz, PALETTE.BRONZE_GOLD, 'gold');
    world.setVoxel(cx + 3, y + 3, cz, PALETTE.BRONZE_GOLD, 'gold');
  }

  /**
   * 建造镇门石狮
   */
  static buildStoneLions(world, cx, cz, dir = 'south') {
    const y = 1;
    // 汉白玉须弥座
    world.fillBox(cx - 1, 0, cz - 1, cx + 1, 0, cz + 1, PALETTE.MARBLE_BASE);
    world.setVoxel(cx, 1, cz, PALETTE.MARBLE_WHITE);

    // 狮身与胸毛
    world.fillBox(cx - 1, y + 1, cz - 1, cx + 1, y + 2, cz + 1, PALETTE.LION_STONE);
    // 狮首高昂
    world.setVoxel(cx, y + 3, cz, PALETTE.LION_STONE);
    world.setVoxel(cx, y + 3, cz + (dir === 'south' ? 1 : -1), PALETTE.LION_STONE);
    // 卷毛鬃发
    world.setVoxel(cx - 1, y + 3, cz, PALETTE.MARBLE_SHADOW);
    world.setVoxel(cx + 1, y + 3, cz, PALETTE.MARBLE_SHADOW);
  }

  /**
   * 建造古典苍松古柏（枝虬盘曲，层叠如盖）
   */
  static buildPineTree(world, cx, cz, height = 9) {
    // 树干（微弯曲）
    let curX = cx;
    let curZ = cz;
    for (let y = 1; y <= height; y++) {
      world.fillBox(curX, y, curZ, curX + 1, y, curZ, PALETTE.PINE_BARK);
      if (y === 3) curX += 1;
      if (y === 5) curZ -= 1;
    }

    // 松树分层云盖
    const branches = [
      { y: 5, r: 2, ox: 2, oz: 1 },
      { y: 7, r: 3, ox: -2, oz: -1 },
      { y: 9, r: 3, ox: 1, oz: -1 },
      { y: 10, r: 2, ox: 0, oz: 0 },
      { y: 11, r: 1, ox: 0, oz: 0 }
    ];

    branches.forEach(b => {
      const bx = curX + b.ox;
      const bz = curZ + b.oz;
      for (let dx = -b.r; dx <= b.r; dx++) {
        for (let dz = -b.r; dz <= b.r; dz++) {
          if (dx * dx + dz * dz <= b.r * b.r + 0.5) {
            const color = ((dx + dz) % 2 === 0) ? PALETTE.PINE_LEAF_DARK : PALETTE.PINE_LEAF_LIGHT;
            world.setVoxel(bx + dx, b.y, bz + dz, color, 'foliage');
            // 上方微拱
            if (Math.abs(dx) <= 1 && Math.abs(dz) <= 1) {
              world.setVoxel(bx + dx, b.y + 1, bz + dz, PALETTE.PINE_LEAF_LIGHT, 'foliage');
            }
          }
        }
      }
    });
  }

  /**
   * 建造千年金秋银杏（满树金箔，落英缤纷）
   */
  static buildGinkgoTree(world, cx, cz, height = 11) {
    // 粗壮树干
    for (let y = 1; y <= height; y++) {
      world.fillBox(cx, y, cz, cx + 1, y, cz + 1, PALETTE.GINKGO_TRUNK);
    }

    // 茂盛金冠
    const crownLayers = [
      { y: 6, r: 4 },
      { y: 8, r: 5 },
      { y: 10, r: 4 },
      { y: 12, r: 3 },
      { y: 13, r: 1 }
    ];

    crownLayers.forEach(l => {
      for (let dx = -l.r; dx <= l.r; dx++) {
        for (let dz = -l.r; dz <= l.r; dz++) {
          if (dx * dx + dz * dz <= l.r * l.r + 0.8) {
            const color = ((dx + dz) % 3 === 0) ? PALETTE.GINKGO_ORANGE : PALETTE.GINKGO_GOLD;
            world.setVoxel(cx + dx, l.y, cz + dz, color, 'foliage');
          }
        }
      }
    });

    // 地面散落的金色落叶
    const leaves = [
      [cx - 3, cz + 2], [cx + 3, cz - 1], [cx - 2, cz - 3], [cx + 4, cz + 3], [cx + 2, cz + 4]
    ];
    leaves.forEach(([lx, lz]) => {
      world.setVoxel(lx, 1, lz, PALETTE.GINKGO_GOLD, 'foliage');
    });
  }

  /**
   * 建造石灯笼（庭院与道路两旁长明宫灯）
   */
  static buildStoneLantern(world, cx, cz) {
    // 石基
    world.setVoxel(cx, 0, cz, PALETTE.MARBLE_SHADOW);
    world.setVoxel(cx, 1, cz, PALETTE.MARBLE_BASE);
    world.setVoxel(cx, 2, cz, PALETTE.MARBLE_WHITE);
    // 暖光灯芯
    world.setVoxel(cx, 3, cz, PALETTE.LANTERN_GLOW, 'lantern');
    // 攒尖小石顶
    world.setVoxel(cx, 4, cz, PALETTE.ROOF_GREY);
    world.setVoxel(cx - 1, 4, cz, PALETTE.ROOF_GREY);
    world.setVoxel(cx + 1, 4, cz, PALETTE.ROOF_GREY);
    world.setVoxel(cx, 4, cz - 1, PALETTE.ROOF_GREY);
    world.setVoxel(cx, 4, cz + 1, PALETTE.ROOF_GREY);
    world.setVoxel(cx, 5, cz, PALETTE.DOOR_GOLD_STUD, 'gold');
  }

  /**
   * 整体庭院植被与道具全域组装
   */
  static populateCourtyard(world) {
    // 1. 地面与动线
    this.buildGroundAndPathways(world);

    // 2. 金水河与金水桥
    this.buildWaterAndBridge(world);

    // 3. 青铜大香炉
    this.buildIncenseBurner(world, 0, 4);

    // 4. 镇门与大殿石狮
    // 山门前石狮
    this.buildStoneLions(world, -7, 44, 'south');
    this.buildStoneLions(world, 7, 44, 'south');
    // 大殿台阶前石狮
    this.buildStoneLions(world, -9, 0, 'south');
    this.buildStoneLions(world, 9, 0, 'south');

    // 5. 庭院古松群（迎客松）
    const pinePositions = [
      [-16, 8, 9],
      [16, 8, 10],
      [-16, 24, 8],
      [16, 24, 9],
      [-36, 12, 10],
      [36, 12, 9]
    ];
    pinePositions.forEach(([x, z, h]) => {
      this.buildPineTree(world, x, z, h);
    });

    // 6. 千年金秋银杏（庭院重要视觉记忆点）
    this.buildGinkgoTree(world, -18, -4, 12);
    this.buildGinkgoTree(world, 18, -4, 11);

    // 7. 沿中轴御道与庭院排列的石灯笼
    const lanternZ = [10, 16, 22, 26, 34];
    lanternZ.forEach(z => {
      this.buildStoneLantern(world, -5, z);
      this.buildStoneLantern(world, 5, z);
    });
  }
}
