import { PALETTE } from '../engine/Palette.js';
import { RoofBuilder } from './RoofBuilder.js';

/**
 * 完整古典建筑群生成器 (主殿、配殿、山门、宝塔、钟楼、鼓楼、宫墙)
 */
export class ArchitectureBuilder {
  /**
   * 1. 建造主殿（太和宝殿，全场景最高等级核心建筑）
   */
  static buildMainHall(world, cx = 0, cz = -18) {
    const plinthW = 34; // X轴半宽 17
    const plinthL = 26; // Z轴半深 13
    const plinthH = 3;  // 台基高度

    // --- A. 汉白玉须弥座三重台基 ---
    world.fillBox(cx - 17, 0, cz - 13, cx + 17, plinthH, cz + 13, PALETTE.MARBLE_WHITE);
    // 台基边缘挑出牙脚
    world.fillBox(cx - 18, 0, cz - 14, cx + 18, 0, cz + 14, PALETTE.MARBLE_BASE);
    world.fillBox(cx - 18, plinthH, cz - 14, cx + 18, plinthH, cz + 14, PALETTE.MARBLE_SHADOW);

    // 汉白玉望柱栏杆 (四周环绕)
    for (let x = cx - 17; x <= cx + 17; x += 2) {
      world.setVoxel(x, plinthH + 1, cz - 13, PALETTE.MARBLE_WHITE);
      world.setVoxel(x, plinthH + 1, cz + 13, PALETTE.MARBLE_WHITE);
      // 望柱头云龙纹/莲瓣头
      world.setVoxel(x, plinthH + 2, cz - 13, PALETTE.MARBLE_SHADOW);
      world.setVoxel(x, plinthH + 2, cz + 13, PALETTE.MARBLE_SHADOW);
    }
    for (let z = cz - 13; z <= cz + 13; z += 2) {
      world.setVoxel(cx - 17, plinthH + 1, z, PALETTE.MARBLE_WHITE);
      world.setVoxel(cx + 17, plinthH + 1, z, PALETTE.MARBLE_WHITE);
      world.setVoxel(cx - 17, plinthH + 2, z, PALETTE.MARBLE_SHADOW);
      world.setVoxel(cx + 17, plinthH + 2, z, PALETTE.MARBLE_SHADOW);
    }
    // 栏板寻杖（横向连接）
    world.fillBox(cx - 17, plinthH + 1, cz - 13, cx + 17, plinthH + 1, cz - 13, PALETTE.MARBLE_WHITE);
    world.fillBox(cx - 17, plinthH + 1, cz + 13, cx + 17, plinthH + 1, cz + 13, PALETTE.MARBLE_WHITE);

    // --- B. 正面中央御道丹陛石与踏跺阶梯 ---
    // 破除正面中央栏杆留出通道
    world.fillBox(cx - 5, plinthH + 1, cz + 13, cx + 5, plinthH + 2, cz + 13, null); // 清除占位
    for (let step = 0; step < plinthH; step++) {
      const stepZ = cz + 14 + step;
      const stepY = plinthH - 1 - step;
      // 左右台阶（文武百官上朝道）
      world.fillBox(cx - 5, stepY, stepZ, cx - 3, stepY, stepZ, PALETTE.STAIR_STONE);
      world.fillBox(cx + 3, stepY, stepZ, cx + 5, stepY, stepZ, PALETTE.STAIR_STONE);
      // 中央御道九龙浮雕丹陛石
      world.fillBox(cx - 2, stepY, stepZ, cx + 2, stepY, stepZ, PALETTE.DRAGON_STONE_BLUE);
      world.setVoxel(cx, stepY, stepZ, PALETTE.DRAGON_STONE_GOLD, 'gold');
    }

    // --- C. 大殿墙体与金柱群 (面阔七间，进深五间) ---
    const hallY = plinthH + 1;
    const hallH = 6;
    const bodyW = 28; // X: -14 to +14
    const bodyL = 20; // Z: -10 to +10

    // 四周朱红厚墙
    world.fillBox(cx - 14, hallY, cz - 10, cx + 14, hallY + hallH, cz + 10, PALETTE.WALL_RED_MAIN, 'solid', true);

    // 前檐金柱与回廊
    for (let x = cx - 12; x <= cx + 12; x += 4) {
      // 前排立柱
      world.fillBox(x, hallY, cz + 9, x, hallY + hallH, cz + 9, PALETTE.PILLAR_RED);
      // 后排立柱
      world.fillBox(x, hallY, cz - 9, x, hallY + hallH, cz - 9, PALETTE.PILLAR_RED);
    }
    for (let z = cz - 9; z <= cz + 9; z += 4) {
      world.fillBox(cx - 13, hallY, z, cx - 13, hallY + hallH, z, PALETTE.PILLAR_RED);
      world.fillBox(cx + 13, hallY, z, cx + 13, hallY + hallH, z, PALETTE.PILLAR_RED);
    }

    // 隔扇门与棂花窗（前立面）
    for (let x = cx - 10; x <= cx + 10; x += 4) {
      if (Math.abs(x - cx) <= 2) {
        // 中央大门
        world.fillBox(cx - 1, hallY, cz + 10, cx + 1, hallY + 4, cz + 10, PALETTE.DOOR_WOOD);
        // 金门钉
        world.setVoxel(cx - 1, hallY + 2, cz + 10, PALETTE.DOOR_GOLD_STUD, 'gold');
        world.setVoxel(cx + 1, hallY + 2, cz + 10, PALETTE.DOOR_GOLD_STUD, 'gold');
        world.setVoxel(cx - 1, hallY + 3, cz + 10, PALETTE.DOOR_GOLD_STUD, 'gold');
        world.setVoxel(cx + 1, hallY + 3, cz + 10, PALETTE.DOOR_GOLD_STUD, 'gold');
      } else {
        // 棂花窗
        world.fillBox(x - 1, hallY + 2, cz + 10, x + 1, hallY + 4, cz + 10, PALETTE.WINDOW_LATTICE);
        world.fillBox(x - 1, hallY + 1, cz + 10, x + 1, hallY + 1, cz + 10, PALETTE.WALL_RED_DARK);
      }
    }

    // 悬挂殿额金匾 "太和殿"
    world.fillBox(cx - 2, hallY + hallH - 1, cz + 10, cx + 2, hallY + hallH, cz + 10, PALETTE.PLAQUE_BLACK);
    world.setVoxel(cx, hallY + hallH - 1, cz + 11, PALETTE.PLAQUE_GOLD, 'gold');
    world.setVoxel(cx - 1, hallY + hallH - 1, cz + 11, PALETTE.PLAQUE_GOLD, 'gold');
    world.setVoxel(cx + 1, hallY + hallH - 1, cz + 11, PALETTE.PLAQUE_GOLD, 'gold');

    // 宫灯（大殿前柱悬挂）
    [cx - 8, cx - 4, cx + 4, cx + 8].forEach(lx => {
      world.setVoxel(lx, hallY + hallH - 1, cz + 11, PALETTE.LANTERN_RED, 'solid');
      world.setVoxel(lx, hallY + hallH - 2, cz + 11, PALETTE.LANTERN_GLOW, 'lantern');
    });

    // --- D. 下檐斗拱与腰檐（歇山/腰檐起翘） ---
    const lowerDougongY = hallY + hallH;
    RoofBuilder.buildDougongLayer(world, cx - 15, cx + 15, lowerDougongY, cz - 11, cz + 11, 2);

    const lowerRoofY = lowerDougongY + 2;
    RoofBuilder.buildHipRoof(world, cx, lowerRoofY, cz, 34, 26, 4, PALETTE.ROOF_GOLD, PALETTE.ROOF_GOLD_RIDGE);

    // --- E. 上层殿身（重檐重楼柱网） ---
    const upperY = lowerRoofY + 3;
    const upperH = 4;
    world.fillBox(cx - 10, upperY, cz - 7, cx + 10, upperY + upperH, cz + 7, PALETTE.WALL_RED_MAIN, 'solid', true);

    // 上层透光窗棂
    for (let x = cx - 8; x <= cx + 8; x += 4) {
      world.setVoxel(x, upperY + 2, cz + 7, PALETTE.WINDOW_LATTICE);
      world.setVoxel(x, upperY + 2, cz - 7, PALETTE.WINDOW_LATTICE);
    }

    // 上层斗拱
    const upperDougongY = upperY + upperH;
    RoofBuilder.buildDougongLayer(world, cx - 11, cx + 11, upperDougongY, cz - 8, cz + 8, 2);

    // --- F. 上檐大顶：重檐庑殿金顶（皇家五脊四坡大顶，配飞檐翘角、鸱吻、走兽） ---
    const upperRoofY = upperDougongY + 2;
    RoofBuilder.buildHipRoof(world, cx, upperRoofY, cz, 28, 20, 6, PALETTE.ROOF_GOLD, PALETTE.ROOF_GOLD_RIDGE);
  }

  /**
   * 2. 建造配殿（东配殿 / 西配殿，单檐歇山顶）
   * @param {string} side 'east' | 'west'
   */
  static buildSideHall(world, side = 'east', cx = 28, cz = -12) {
    const plinthH = 2;
    const widthX = 14;
    const lengthZ = 22;

    // 石台基
    world.fillBox(cx - 7, 0, cz - 11, cx + 7, plinthH, cz + 11, PALETTE.MARBLE_WHITE);

    // 台阶面向中央庭院
    const stepDir = side === 'east' ? -1 : 1;
    const stepX = side === 'east' ? (cx - 8) : (cx + 8);
    world.fillBox(stepX, 0, cz - 2, stepX, 1, cz + 2, PALETTE.STAIR_STONE);

    // 殿身朱红墙
    const wallY = plinthH + 1;
    const wallH = 5;
    world.fillBox(cx - 6, wallY, cz - 10, cx + 6, wallY + wallH, cz + 10, PALETTE.WALL_RED_MAIN, 'solid', true);

    // 朝向庭院一侧的回廊立柱与门窗
    const facingX = side === 'east' ? (cx - 6) : (cx + 6);
    for (let z = cz - 8; z <= cz + 8; z += 4) {
      world.fillBox(facingX, wallY, z, facingX, wallY + wallH, z, PALETTE.PILLAR_RED);
      // 窗户
      if (z !== cz) {
        world.setVoxel(facingX, wallY + 2, z + (z < cz ? 2 : -2), PALETTE.WINDOW_LATTICE);
      }
    }
    // 中央门
    world.fillBox(facingX, wallY, cz - 1, facingX, wallY + 3, cz + 1, PALETTE.DOOR_WOOD);

    // 斗拱层
    const dougongY = wallY + wallH;
    RoofBuilder.buildDougongLayer(world, cx - 6, cx + 6, dougongY, cz - 10, cz + 10, 1);

    // 歇山顶屋面（采用翠绿瓦/黛绿瓦，与主殿金瓦形成尊卑次序与色调呼应）
    const roofY = dougongY + 2;
    RoofBuilder.buildGableHipRoof(world, cx, roofY, cz, 16, 24, 5, PALETTE.ROOF_CYAN, PALETTE.ROOF_CYAN_RIDGE);

    // 门前宫灯
    world.setVoxel(facingX + stepDir, wallY + 4, cz - 2, PALETTE.LANTERN_RED);
    world.setVoxel(facingX + stepDir, wallY + 3, cz - 2, PALETTE.LANTERN_GLOW, 'lantern');
    world.setVoxel(facingX + stepDir, wallY + 4, cz + 2, PALETTE.LANTERN_RED);
    world.setVoxel(facingX + stepDir, wallY + 3, cz + 2, PALETTE.LANTERN_GLOW, 'lantern');
  }

  /**
   * 3. 建造山门（三券拱前门，歇山顶，石狮护卫）
   */
  static buildMountainGate(world, cx = 0, cz = 40) {
    const plinthH = 2;
    const gateW = 24; // X: -12 to +12
    const gateL = 10; // Z: -5 to +5

    // 石台基
    world.fillBox(cx - 12, 0, cz - 5, cx + 12, plinthH, cz + 5, PALETTE.MARBLE_WHITE);

    // 门前石阶（全宽缓坡步阶）
    world.fillBox(cx - 8, 0, cz + 6, cx + 8, 1, cz + 6, PALETTE.STAIR_STONE);
    world.fillBox(cx - 7, 0, cz + 7, cx + 7, 0, cz + 7, PALETTE.STAIR_STONE);

    // 门身朱红高墙
    const gateY = plinthH + 1;
    const gateH = 6;
    world.fillBox(cx - 12, gateY, cz - 4, cx + 12, gateY + gateH, cz + 4, PALETTE.WALL_RED_MAIN);

    // 三座拱券通道（中央御门高大，两侧偏门稍小）
    // 1. 中央大门洞
    world.fillBox(cx - 2, gateY, cz - 4, cx + 2, gateY + 4, cz + 4, null); // 挖出门洞
    // 门框石拱
    world.fillBox(cx - 2, gateY, cz + 4, cx + 2, gateY + 4, cz + 4, PALETTE.GATE_ARCH_STONE);
    world.fillBox(cx - 1, gateY, cz + 4, cx + 1, gateY + 3, cz + 4, null);
    // 朱红金钉对开实木大门
    world.fillBox(cx - 1, gateY, cz, cx + 1, gateY + 3, cz, PALETTE.DOOR_WOOD);
    world.setVoxel(cx - 1, gateY + 2, cz, PALETTE.DOOR_GOLD_STUD, 'gold');
    world.setVoxel(cx + 1, gateY + 2, cz, PALETTE.DOOR_GOLD_STUD, 'gold');

    // 2. 左偏门洞
    world.fillBox(cx - 8, gateY, cz - 4, cx - 6, gateY + 3, cz + 4, null);
    world.fillBox(cx - 8, gateY, cz + 4, cx - 6, gateY + 3, cz + 4, PALETTE.GATE_ARCH_STONE);
    world.fillBox(cx - 7, gateY, cz + 4, cx - 7, gateY + 2, cz + 4, null);
    world.fillBox(cx - 7, gateY, cz, cx - 7, gateY + 2, cz, PALETTE.DOOR_WOOD);

    // 3. 右偏门洞
    world.fillBox(cx + 6, gateY, cz - 4, cx + 8, gateY + 3, cz + 4, null);
    world.fillBox(cx + 6, gateY, cz + 4, cx + 8, gateY + 3, cz + 4, PALETTE.GATE_ARCH_STONE);
    world.fillBox(cx + 7, gateY, cz + 4, cx + 7, gateY + 2, cz + 4, null);
    world.fillBox(cx + 7, gateY, cz, cx + 7, gateY + 2, cz, PALETTE.DOOR_WOOD);

    // 山门门额牌匾 "福佑山门"
    world.fillBox(cx - 3, gateY + gateH - 1, cz + 5, cx + 3, gateY + gateH, cz + 5, PALETTE.PLAQUE_BLACK);
    world.setVoxel(cx - 2, gateY + gateH - 1, cz + 5, PALETTE.PLAQUE_GOLD, 'gold');
    world.setVoxel(cx, gateY + gateH - 1, cz + 5, PALETTE.PLAQUE_GOLD, 'gold');
    world.setVoxel(cx + 2, gateY + gateH - 1, cz + 5, PALETTE.PLAQUE_GOLD, 'gold');

    // 斗拱层
    const dougongY = gateY + gateH;
    RoofBuilder.buildDougongLayer(world, cx - 12, cx + 12, dougongY, cz - 5, cz + 5, 2);

    // 山门歇山顶
    const roofY = dougongY + 2;
    RoofBuilder.buildGableHipRoof(world, cx, roofY, cz, 28, 14, 5, PALETTE.ROOF_CYAN, PALETTE.ROOF_CYAN_RIDGE);

    // 门前宫灯
    world.setVoxel(cx - 4, gateY + 4, cz + 6, PALETTE.LANTERN_RED);
    world.setVoxel(cx - 4, gateY + 3, cz + 6, PALETTE.LANTERN_GLOW, 'lantern');
    world.setVoxel(cx + 4, gateY + 4, cz + 6, PALETTE.LANTERN_RED);
    world.setVoxel(cx + 4, gateY + 3, cz + 6, PALETTE.LANTERN_GLOW, 'lantern');
  }

  /**
   * 4. 建造五级千佛体素宝塔（四方/八角高耸古塔，金刹相轮）
   */
  static buildPagoda(world, cx = -34, cz = -32) {
    const plinthH = 3;

    // 塔基汉白玉高台
    world.fillBox(cx - 7, 0, cz - 7, cx + 7, plinthH, cz + 7, PALETTE.MARBLE_WHITE);
    // 栏杆
    for (let x = cx - 7; x <= cx + 7; x += 2) {
      world.setVoxel(x, plinthH + 1, cz - 7, PALETTE.MARBLE_SHADOW);
      world.setVoxel(x, plinthH + 1, cz + 7, PALETTE.MARBLE_SHADOW);
    }
    for (let z = cz - 7; z <= cz + 7; z += 2) {
      world.setVoxel(cx - 7, plinthH + 1, z, PALETTE.MARBLE_SHADOW);
      world.setVoxel(cx + 7, plinthH + 1, z, PALETTE.MARBLE_SHADOW);
    }
    // 塔前石阶
    world.fillBox(cx - 2, 0, cz + 8, cx + 2, 1, cz + 8, PALETTE.STAIR_STONE);

    let curY = plinthH + 1;
    // 5层宝塔递减
    const tiers = [
      { r: 5, h: 6, roofSpread: 7, roofH: 3 },
      { r: 4, h: 5, roofSpread: 6, roofH: 3 },
      { r: 3, h: 4, roofSpread: 5, roofH: 2 },
      { r: 3, h: 4, roofSpread: 4, roofH: 2 },
      { r: 2, h: 3, roofSpread: 3, roofH: 2 }
    ];

    tiers.forEach((tier, idx) => {
      // 塔身红墙
      world.fillBox(cx - tier.r, curY, cz - tier.r, cx + tier.r, curY + tier.h, cz + tier.r, PALETTE.WALL_RED_MAIN, 'solid', true);

      // 四面佛龛/拱券窗
      if (tier.r >= 3) {
        world.setVoxel(cx, curY + 2, cz + tier.r, PALETTE.WINDOW_LATTICE);
        world.setVoxel(cx, curY + 2, cz - tier.r, PALETTE.WINDOW_LATTICE);
        world.setVoxel(cx + tier.r, curY + 2, cz, PALETTE.WINDOW_LATTICE);
        world.setVoxel(cx - tier.r, curY + 2, cz, PALETTE.WINDOW_LATTICE);
      }

      // 塔檐斗拱
      const dougongY = curY + tier.h;
      RoofBuilder.buildDougongLayer(world, cx - tier.r, cx + tier.r, dougongY, cz - tier.r, cz + tier.r, 1);

      // 塔檐（攒尖翘角屋顶）
      const roofY = dougongY + 1;
      RoofBuilder.buildPyramidRoof(world, cx, roofY, cz, tier.roofSpread, tier.roofH, PALETTE.ROOF_CYAN, PALETTE.ROOF_CYAN_RIDGE);

      // 塔檐四角风铃
      const corners = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
      corners.forEach(([dx, dz]) => {
        world.setVoxel(cx + tier.roofSpread * dx, roofY - 1, cz + tier.roofSpread * dz, PALETTE.LANTERN_GLOW, 'lantern');
      });

      curY = roofY + tier.roofH + 1;
    });

    // 塔顶鎏金相轮宝刹
    for (let sy = 0; sy < 4; sy++) {
      world.setVoxel(cx, curY + sy, cz, PALETTE.BRONZE_GOLD, 'gold');
      if (sy === 1 || sy === 3) {
        world.setVoxel(cx + 1, curY + sy, cz, PALETTE.BRONZE_GOLD, 'gold');
        world.setVoxel(cx - 1, curY + sy, cz, PALETTE.BRONZE_GOLD, 'gold');
        world.setVoxel(cx, curY + sy, cz + 1, PALETTE.BRONZE_GOLD, 'gold');
        world.setVoxel(cx, curY + sy, cz - 1, PALETTE.BRONZE_GOLD, 'gold');
      }
    }
    // 顶端摩尼宝珠
    world.setVoxel(cx, curY + 4, cz, PALETTE.DOOR_GOLD_STUD, 'gold');
    world.setVoxel(cx, curY + 5, cz, PALETTE.LANTERN_GLOW, 'lantern');
  }

  /**
   * 5. 建造钟楼与鼓楼（两座对称攒尖高阁）
   * @param {string} type 'bell' (东钟楼) | 'drum' (西鼓楼)
   */
  static buildBellDrumTower(world, type = 'bell', cx = 26, cz = 18) {
    const plinthH = 2;
    const baseR = 5;

    // 石台基
    world.fillBox(cx - baseR, 0, cz - baseR, cx + baseR, plinthH, cz + baseR, PALETTE.MARBLE_WHITE);

    // 下层：青砖高台券门式建筑
    const lowerY = plinthH + 1;
    const lowerH = 5;
    world.fillBox(cx - 4, lowerY, cz - 4, cx + 4, lowerY + lowerH, cz + 4, PALETTE.WALL_RED_MAIN, 'solid', true);

    // 券门通道
    world.fillBox(cx - 1, lowerY, cz - 4, cx + 1, lowerY + 3, cz + 4, null);
    world.fillBox(cx - 1, lowerY, cz + 4, cx + 1, lowerY + 3, cz + 4, PALETTE.GATE_ARCH_STONE);
    world.fillBox(cx, lowerY, cz + 4, cx, lowerY + 2, cz + 4, null);

    // 下檐腰檐平座（外圈走廊与栏杆）
    const midY = lowerY + lowerH;
    RoofBuilder.buildPyramidRoof(world, cx, midY, cz, 6, 2, PALETTE.ROOF_CYAN, PALETTE.ROOF_CYAN_RIDGE);

    // 上层：敞轩木构阁楼（透空可见内悬古钟或大鼓）
    const upperY = midY + 3;
    const upperH = 4;
    // 四角立柱
    [[-3, -3], [3, -3], [-3, 3], [3, 3]].forEach(([dx, dz]) => {
      world.fillBox(cx + dx, upperY, cz + dz, cx + dx, upperY + upperH, cz + dz, PALETTE.PILLAR_RED);
    });
    // 栏杆
    world.fillBox(cx - 3, upperY, cz - 3, cx + 3, upperY, cz - 3, PALETTE.WOOD_BEAM);
    world.fillBox(cx - 3, upperY, cz + 3, cx + 3, upperY, cz + 3, PALETTE.WOOD_BEAM);
    world.fillBox(cx - 3, upperY, cz - 3, cx - 3, upperY, cz + 3, PALETTE.WOOD_BEAM);
    world.fillBox(cx + 3, upperY, cz - 3, cx + 3, upperY, cz + 3, PALETTE.WOOD_BEAM);

    // 阁内法器：钟楼挂青铜古钟，鼓楼设牛皮神鼓
    if (type === 'bell') {
      // 体素青铜大钟
      world.fillBox(cx - 1, upperY + 1, cz - 1, cx + 1, upperY + 3, cz + 1, PALETTE.BRONZE_DARK, 'gold');
      world.setVoxel(cx, upperY + 4, cz, PALETTE.BRONZE_PATINA, 'gold');
      world.setVoxel(cx, upperY, cz, PALETTE.BRONZE_GOLD, 'gold');
    } else {
      // 体素朱红牛皮大鼓
      world.fillBox(cx - 1, upperY + 1, cz - 1, cx + 1, upperY + 3, cz + 1, PALETTE.WALL_RED_LIGHT, 'solid');
      world.fillBox(cx, upperY + 1, cz - 1, cx, upperY + 3, cz + 1, PALETTE.WINDOW_LATTICE, 'solid');
      world.fillBox(cx - 1, upperY, cz - 1, cx + 1, upperY, cz + 1, PALETTE.WOOD_BEAM, 'solid');
    }

    // 上层斗拱
    const upperDougongY = upperY + upperH;
    RoofBuilder.buildDougongLayer(world, cx - 3, cx + 3, upperDougongY, cz - 3, cz + 3, 1);

    // 重檐四角攒尖宝顶屋顶
    const roofY = upperDougongY + 1;
    RoofBuilder.buildPyramidRoof(world, cx, roofY, cz, 5, 3, PALETTE.ROOF_CYAN, PALETTE.ROOF_CYAN_RIDGE);
  }

  /**
   * 6. 建造四周院墙与围廊（朱红宫墙，青灰筒瓦压顶，中式漏窗）
   */
  static buildPerimeterWalls(world) {
    const wallH = 4;
    const minX = -46;
    const maxX = 46;
    const minZ = -44;
    const maxZ = 46;

    // 建造四周围墙
    const walls = [
      // 北墙（后墙）
      { x1: minX, z1: minZ, x2: maxX, z2: minZ },
      // 南墙（山门两侧）
      { x1: minX, z1: maxZ, x2: -14, z2: maxZ },
      { x1: 14, z1: maxZ, x2: maxX, z2: maxZ },
      // 西墙
      { x1: minX, z1: minZ, x2: minX, z2: maxZ },
      // 东墙
      { x1: maxX, z1: minZ, x2: maxX, z2: maxZ }
    ];

    walls.forEach(w => {
      // 墙身朱红
      world.fillBox(w.x1, 0, w.z1, w.x2, wallH, w.z2, PALETTE.WALL_RED_MAIN);
      // 墙顶灰瓦滴水与小脊
      world.fillBox(w.x1 - 1, wallH + 1, w.z1 - 1, w.x2 + 1, wallH + 1, w.z2 + 1, PALETTE.ROOF_GREY);
      world.fillBox(w.x1, wallH + 2, w.z1, w.x2, wallH + 2, w.z2, PALETTE.ROOF_GREY_LIGHT);
    });

    // 墙上间隔设置古典体素漏窗（花窗/菱花窗）
    for (let x = minX + 8; x <= maxX - 8; x += 10) {
      if (Math.abs(x) > 6) {
        world.setVoxel(x, 2, minZ, PALETTE.PLAQUE_BLACK);
        world.setVoxel(x, 2, minZ + 1, PALETTE.WINDOW_LATTICE);
      }
    }
    for (let z = minZ + 10; z <= maxZ - 10; z += 10) {
      world.setVoxel(minX, 2, z, PALETTE.PLAQUE_BLACK);
      world.setVoxel(maxX, 2, z, PALETTE.PLAQUE_BLACK);
    }
  }
}
