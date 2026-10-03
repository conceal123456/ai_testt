import { VoxelType } from './palette.js';

/**
 * 中国古典建筑群生成器
 * 涵盖：重檐歇山顶主殿、对称配殿、山门殿、七级浮屠古塔、汉白玉台基、丹陛、斗拱、石狮、古松与回廊
 */
export class ChineseArchitectureBuilder {
  constructor(world) {
    this.world = world;
  }

  /**
   * 生成完整的古典建筑群宏大场景
   */
  buildEntireComplex() {
    console.log('[Architecture] 开始生成中国古典建筑群场景...');

    // 1. 地面铺装、金水河与院落基底
    this.buildGroundAndRiver();

    // 2. 山门殿（前门入口）
    this.buildGateHouse(0, 0, 32);

    // 3. 前庭院动线：御道、丹陛、石狮、香炉、古松
    this.buildCourtyardAndPathways();

    // 4. 主殿（重檐大殿，中轴核心）
    this.buildMainHall(0, 0, -6);

    // 5. 东西对称配殿（文殊殿 / 普贤殿）
    this.buildSideHall(26, 0, -6, true);   // 东配殿
    this.buildSideHall(-26, 0, -6, false); // 西配殿

    // 6. 中轴后院：七级浮屠古塔
    this.buildPagoda(0, 0, -36);

    // 7. 外围宫墙与长廊
    this.buildEnclosureWalls();

    console.log('[Architecture] 建筑群生成完毕！');
  }

  /**
   * 1. 地面铺装、草地与金水河
   */
  buildGroundAndRiver() {
    const w = this.world;
    // 宽广基底：X: -46 到 46, Z: -52 到 50
    const minX = -46, maxX = 46;
    const minZ = -52, maxZ = 50;

    // 大地砖铺装与草地
    for (let x = minX; x <= maxX; x++) {
      for (let z = minZ; z <= maxZ; z++) {
        // 边缘为草地绿化
        const isBorder = (Math.abs(x) > 38 || z > 44 || z < -46);
        w.setVoxel(x, 0, z, isBorder ? VoxelType.PINE_LEAF : VoxelType.STONE_BRICK);
      }
    }

    // 金水河（Z: 42 到 46 之间）
    for (let x = minX; x <= maxX; x++) {
      for (let z = 42; z <= 45; z++) {
        w.setVoxel(x, -1, z, VoxelType.STONE_BRICK); // 河底
        w.setVoxel(x, 0, z, VoxelType.WATER);        // 碧水
      }
    }

    // 金水河汉白玉拱桥（三座：中轴御桥与左右各一桥）
    [-12, 0, 12].forEach((bx, idx) => {
      const isCenter = (idx === 1);
      const bridgeHalfW = isCenter ? 3 : 2;
      // 桥面微隆起
      for (let x = bx - bridgeHalfW; x <= bx + bridgeHalfW; x++) {
        for (let z = 41; z <= 46; z++) {
          const archH = (z === 43 || z === 44) ? 2 : 1;
          w.setVoxel(x, archH, z, VoxelType.STONE_WHITE);
        }
        // 栏杆与望柱
        w.setVoxel(bx - bridgeHalfW, 2, 42, VoxelType.STONE_WHITE);
        w.setVoxel(bx - bridgeHalfW, 3, 43, VoxelType.GOLD_FINIAL); // 柱头雕饰
        w.setVoxel(bx - bridgeHalfW, 3, 44, VoxelType.GOLD_FINIAL);
        w.setVoxel(bx - bridgeHalfW, 2, 45, VoxelType.STONE_WHITE);

        w.setVoxel(bx + bridgeHalfW, 2, 42, VoxelType.STONE_WHITE);
        w.setVoxel(bx + bridgeHalfW, 3, 43, VoxelType.GOLD_FINIAL);
        w.setVoxel(bx + bridgeHalfW, 3, 44, VoxelType.GOLD_FINIAL);
        w.setVoxel(bx + bridgeHalfW, 2, 45, VoxelType.STONE_WHITE);
      }
    });
  }

  /**
   * 2. 山门殿（前门入口）
   */
  buildGateHouse(cx, cy, cz) {
    const w = this.world;
    const width = 18;  // 东西向
    const depth = 10;  // 南北向
    const height = 7;

    // 白玉台基（高 1）
    w.fillBox(cx - 10, cy, cz - 6, cx + 10, cy + 1, cz + 6, VoxelType.STONE_WHITE);
    // 台阶（前后）
    w.fillBox(cx - 3, cy, cz + 7, cx + 3, cy, cz + 7, VoxelType.STONE_WHITE);
    w.fillBox(cx - 3, cy, cz - 7, cx + 3, cy, cz - 7, VoxelType.STONE_WHITE);

    // 殿身墙体与廊柱
    const by = cy + 2;
    // 四角与门侧立柱
    const pillarPositions = [
      [cx - 8, cz - 4], [cx - 3, cz - 4], [cx + 3, cz - 4], [cx + 8, cz - 4],
      [cx - 8, cz + 4], [cx - 3, cz + 4], [cx + 3, cz + 4], [cx + 8, cz + 4]
    ];
    for (const [px, pz] of pillarPositions) {
      w.fillPillar(px, by, pz, height - 1, 1, VoxelType.PILLAR_RED);
    }

    // 朱红墙面（开三拱券门）
    w.fillBox(cx - 7, by, cz - 3, cx + 7, by + height - 2, cz + 3, VoxelType.WALL_RED);
    // 挖空中堂大门洞
    w.fillBox(cx - 2, by, cz - 4, cx + 2, by + 4, cz + 4, VoxelType.AIR);
    // 左右次间侧门
    w.fillBox(cx - 6, by, cz - 4, cx - 5, by + 3, cz + 4, VoxelType.AIR);
    w.fillBox(cx + 5, by, cz - 4, cx + 6, by + 3, cz + 4, VoxelType.AIR);

    // 额枋彩画与斗拱层
    const dougongY = by + height - 1;
    w.fillBox(cx - 9, dougongY, cz - 5, cx + 9, dougongY, cz + 5, VoxelType.DOUGONG_GREEN);
    for (let x = cx - 9; x <= cx + 9; x += 2) {
      w.setVoxel(x, dougongY, cz - 5, VoxelType.DOUGONG_GOLD);
      w.setVoxel(x, dougongY, cz + 5, VoxelType.DOUGONG_GOLD);
    }

    // 悬挂红灯笼两对
    w.setVoxel(cx - 4, dougongY - 1, cz + 5, VoxelType.LANTERN_RED);
    w.setVoxel(cx + 4, dougongY - 1, cz + 5, VoxelType.LANTERN_RED);
    w.setVoxel(cx - 4, dougongY - 1, cz - 5, VoxelType.LANTERN_RED);
    w.setVoxel(cx + 4, dougongY - 1, cz - 5, VoxelType.LANTERN_RED);

    // 单檐歇山顶与飞檐翘角
    this.buildCurvedRoof(cx, dougongY + 1, cz, width + 4, depth + 4, 5, VoxelType.ROOF_CYAN, VoxelType.ROOF_CYAN_DARK);
  }

  /**
   * 3. 前庭院：御道动线、石狮、香炉、古松
   */
  buildCourtyardAndPathways() {
    const w = this.world;

    // 中轴御道（宽 6，由山门 Z:26 一直贯通至主殿 Z:7）
    for (let z = 7; z <= 26; z++) {
      for (let x = -3; x <= 3; x++) {
        // 中央两格为汉白玉丹陛/御道石雕
        const isCenterStone = (Math.abs(x) <= 1);
        w.setVoxel(x, 1, z, isCenterStone ? VoxelType.STONE_ROAD : VoxelType.STONE_WHITE);
      }
    }

    // 御道两侧青石方砖漫地
    for (let z = 9; z <= 24; z += 3) {
      w.fillBox(-10, 1, z, -4, 1, z + 1, VoxelType.STONE_BRICK);
      w.fillBox(4, 1, z, 10, 1, z + 1, VoxelType.STONE_BRICK);
    }

    // 一对守卫石狮（Z: 14，分立御道两侧）
    this.buildStoneLion(-6, 1, 14, true);
    this.buildStoneLion(6, 1, 14, false);

    // 青铜/青石大香炉（Z: 10，主殿正前方）
    this.buildIncenseBurner(0, 1, 10);

    // 庭院古柏松树（错落分布于两侧庭院，富有生机）
    const pinePositions = [
      [-14, 1, 18], [-16, 1, 10], [-13, 1, 3],
      [14, 1, 18], [16, 1, 10], [13, 1, 3],
      [-18, 1, -20], [18, 1, -20]
    ];
    for (const [px, py, pz] of pinePositions) {
      this.buildPineTree(px, py, pz);
    }

    // 庭院石灯幢（石灯笼）
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

  /**
   * 4. 核心主殿（太和殿/大雄宝殿形制：重檐歇山/庑殿顶、三层汉白玉月台、丹陛阶梯）
   */
  buildMainHall(cx, cy, cz) {
    const w = this.world;

    // --- A. 汉白玉大月台（宽 36，深 24，高 3） ---
    // 底层月台
    w.fillBox(cx - 18, cy, cz - 12, cx + 18, cy + 1, cz + 12, VoxelType.STONE_WHITE);
    // 上层月台
    w.fillBox(cx - 16, cy + 2, cz - 10, cx + 16, cy + 2, cz + 10, VoxelType.STONE_WHITE);

    // 汉白玉护栏与望柱
    for (let x = cx - 18; x <= cx + 18; x++) {
      if (Math.abs(x) > 4 || cz - 12 > 0) { // 避开正前方台阶
        w.setVoxel(x, cy + 2, cz + 12, VoxelType.STONE_WHITE);
        if (x % 2 === 0) w.setVoxel(x, cy + 3, cz + 12, VoxelType.GOLD_FINIAL); // 望柱鎏金头
      }
      w.setVoxel(x, cy + 2, cz - 12, VoxelType.STONE_WHITE);
      if (x % 2 === 0) w.setVoxel(x, cy + 3, cz - 12, VoxelType.GOLD_FINIAL);
    }
    for (let z = cz - 12; z <= cz + 12; z++) {
      w.setVoxel(cx - 18, cy + 2, z, VoxelType.STONE_WHITE);
      w.setVoxel(cx + 18, cy + 2, z, VoxelType.STONE_WHITE);
      if (z % 2 === 0) {
        w.setVoxel(cx - 18, cy + 3, z, VoxelType.GOLD_FINIAL);
        w.setVoxel(cx + 18, cy + 3, z, VoxelType.GOLD_FINIAL);
      }
    }

    // 正面主台阶与斜坡丹陛（双龙戏珠浮雕）
    for (let dy = 0; dy <= 2; dy++) {
      const stepZ = cz + 13 + (2 - dy);
      // 左右阶梯（供文武群臣/僧俗）
      w.fillBox(cx - 6, cy + dy, stepZ, cx - 3, cy + dy, stepZ, VoxelType.STONE_WHITE);
      w.fillBox(cx + 3, cy + dy, stepZ, cx + 6, cy + dy, stepZ, VoxelType.STONE_WHITE);
      // 中央丹陛石雕斜坡
      w.fillBox(cx - 2, cy + dy, stepZ, cx + 2, cy + dy, stepZ, VoxelType.RAILING_GOLD);
    }

    // --- B. 殿身主体（面阔七间，进深五间） ---
    const hallWidth = 28;
    const hallDepth = 16;
    const baseH = cy + 3;
    const wallH = 7;

    // 殿身红墙基底
    w.fillBox(cx - 13, baseH, cz - 7, cx + 13, baseH + wallH - 1, cz + 7, VoxelType.WALL_RED);

    // 正面朱门、棂条隔扇花窗与八根朱漆明柱
    const pillarXs = [-13, -9, -5, -2, 2, 5, 9, 13];
    for (const px of pillarXs) {
      // 檐柱与金柱
      w.fillPillar(cx + px, baseH, cz + 8, wallH, 1, VoxelType.PILLAR_RED);
      w.fillPillar(cx + px, baseH, cz - 8, wallH, 1, VoxelType.PILLAR_RED);
    }

    // 正中开三间朱红大门
    w.fillBox(cx - 4, baseH, cz + 7, cx + 4, baseH + 4, cz + 7, VoxelType.WALL_WOOD);
    w.fillBox(cx - 1, baseH, cz + 7, cx + 1, baseH + 3, cz + 7, VoxelType.AIR); // 殿门敞开，深邃神秘

    // 牌匾（大雄宝殿 / 太和殿金字匾额）
    w.fillBox(cx - 2, baseH + wallH - 2, cz + 8, cx + 2, baseH + wallH - 2, cz + 8, VoxelType.RAILING_GOLD);

    // --- C. 斗拱层（青绿和玺彩画与出跳斗拱） ---
    const dougongY = baseH + wallH;
    w.fillBox(cx - 15, dougongY, cz - 9, cx + 15, dougongY, cz + 9, VoxelType.DOUGONG_GREEN);
    for (let x = cx - 15; x <= cx + 15; x += 2) {
      w.setVoxel(x, dougongY, cz + 9, VoxelType.DOUGONG_GOLD);
      w.setVoxel(x, dougongY, cz - 9, VoxelType.DOUGONG_GOLD);
    }

    // 殿前悬挂四盏华美大红宫灯
    [-9, -5, 5, 9].forEach(dx => {
      w.setVoxel(cx + dx, dougongY - 1, cz + 9, VoxelType.LANTERN_RED);
      w.setVoxel(cx + dx, dougongY - 2, cz + 9, VoxelType.LANTERN_RED);
      w.setVoxel(cx + dx, dougongY, cz + 10, VoxelType.GOLD_FINIAL); // 挑角吊坠
    });

    // --- D. 重檐大屋顶（下檐 + 平座 + 上檐） ---
    // 下檐（四面出挑大飞檐）
    const lowerRoofY = dougongY + 1;
    this.buildCurvedRoof(cx, lowerRoofY, cz, hallWidth + 6, hallDepth + 6, 3, VoxelType.ROOF_GOLD, VoxelType.ROOF_RIDGE, 2);

    // 上层重檐暗层与平座立柱
    const upperBaseY = lowerRoofY + 3;
    w.fillBox(cx - 10, upperBaseY, cz - 5, cx + 10, upperBaseY + 2, cz + 5, VoxelType.WALL_RED);
    w.fillBox(cx - 11, upperBaseY + 2, cz - 6, cx + 11, upperBaseY + 2, cz + 6, VoxelType.DOUGONG_GREEN);

    // 上檐（庑殿歇山大顶，金琉璃瓦，威震八方）
    const upperRoofY = upperBaseY + 3;
    this.buildCurvedRoof(cx, upperRoofY, cz, hallWidth + 4, hallDepth + 4, 6, VoxelType.ROOF_GOLD, VoxelType.ROOF_RIDGE, 3, true);
  }

  /**
   * 5. 东西对称配殿（文殊殿 / 普贤殿）
   */
  buildSideHall(cx, cy, cz, isEast) {
    const w = this.world;
    const width = 14;  // 东西进深
    const depth = 22;  // 南北开间
    const wallH = 6;

    // 白石台基
    w.fillBox(cx - 8, cy, cz - 12, cx + 8, cy + 1, cz + 12, VoxelType.STONE_WHITE);

    // 正面（面向中轴庭院）台阶
    const facingStepX = isEast ? (cx - 9) : (cx + 9);
    w.fillBox(facingStepX, cy, cz - 3, facingStepX, cy, cz + 3, VoxelType.STONE_WHITE);

    // 殿身红墙
    const baseH = cy + 2;
    w.fillBox(cx - 6, baseH, cz - 10, cx + 6, baseH + wallH - 1, cz + 10, VoxelType.WALL_RED);

    // 外檐廊柱（面向中庭一侧）
    const frontColX = isEast ? (cx - 7) : (cx + 7);
    for (let z = cz - 9; z <= cz + 9; z += 4) {
      w.fillPillar(frontColX, baseH, z, wallH, 1, VoxelType.PILLAR_RED);
    }

    // 侧门开窗
    w.fillBox(isEast ? cx - 6 : cx + 6, baseH, cz - 1, isEast ? cx - 6 : cx + 6, baseH + 3, cz + 1, VoxelType.AIR);

    // 斗拱层
    const dougongY = baseH + wallH;
    w.fillBox(cx - 8, dougongY, cz - 12, cx + 8, dougongY, cz + 12, VoxelType.DOUGONG_GREEN);

    // 挂灯笼两盏
    w.setVoxel(frontColX, dougongY - 1, cz - 4, VoxelType.LANTERN_RED);
    w.setVoxel(frontColX, dougongY - 1, cz + 4, VoxelType.LANTERN_RED);

    // 单檐歇山顶（青瓦或琉璃金瓦）
    this.buildCurvedRoof(cx, dougongY + 1, cz, width + 4, depth + 4, 5, VoxelType.ROOF_CYAN, VoxelType.ROOF_CYAN_DARK);
  }

  /**
   * 6. 中轴后院：七级浮屠古塔（八角密檐攒尖顶，高大壮丽）
   */
  buildPagoda(cx, cy, cz) {
    const w = this.world;

    // 八角形须弥座大台基（高 3）
    for (let y = cy; y <= cy + 2; y++) {
      w.fillOctagon(cx, y, cz, 11 - (y - cy), VoxelType.STONE_WHITE);
    }
    // 台阶迎向主殿（朝南）
    w.fillBox(cx - 2, cy, cz + 10, cx + 2, cy + 2, cz + 12, VoxelType.STONE_WHITE);

    let curY = cy + 3;
    let radius = 8;
    const levels = 7; // 七级浮屠

    for (let lvl = 1; lvl <= levels; lvl++) {
      const levelH = Math.max(3, 5 - Math.floor(lvl / 2));

      // 塔身红墙（八角体素）
      for (let y = curY; y < curY + levelH; y++) {
        w.fillOctagon(cx, y, cz, radius, VoxelType.WALL_RED);
        // 门窗空隙（四正方开体素佛龛或门窗）
        if (y >= curY + 1 && y <= curY + levelH - 1) {
          w.setVoxel(cx, y, cz + radius, VoxelType.WALL_WOOD);
          w.setVoxel(cx, y, cz - radius, VoxelType.WALL_WOOD);
          w.setVoxel(cx + radius, y, cz, VoxelType.WALL_WOOD);
          w.setVoxel(cx - radius, y, cz, VoxelType.WALL_WOOD);
        }
      }

      // 塔身斗拱挑檐
      const eaveY = curY + levelH;
      w.fillOctagon(cx, eaveY, cz, radius + 1, VoxelType.DOUGONG_GREEN);

      // 密檐青瓦出挑与角飞檐
      for (let dx = -(radius + 2); dx <= radius + 2; dx++) {
        for (let dz = -(radius + 2); dz <= radius + 2; dz++) {
          const dist = Math.abs(dx) + Math.abs(dz);
          if (dist === (radius + 2) * 1.4 || (Math.abs(dx) <= radius + 2 && Math.abs(dz) <= radius + 2)) {
            const isCorner = (Math.abs(dx) >= radius + 1 && Math.abs(dz) >= radius + 1);
            const tileY = isCorner ? eaveY + 2 : eaveY + 1; // 翘角向上提 1 格
            w.setVoxel(cx + dx, tileY, cz + dz, VoxelType.ROOF_CYAN);
            if (isCorner) {
              // 翼角挂风铃
              w.setVoxel(cx + dx, tileY - 1, cz + dz, VoxelType.GOLD_FINIAL);
            }
          }
        }
      }

      curY = eaveY + 2;
      // 逐层叠涩收进（每两层半径缩 1）
      if (lvl % 1 === 0 && radius > 3) {
        radius -= 1;
      }
    }

    // 塔顶鎏金宝刹（刹座、覆钵、相轮、宝珠）
    w.fillPillar(cx, curY, cz, 2, 2, VoxelType.GOLD_FINIAL);
    w.fillPillar(cx, curY + 2, cz, 4, 1, VoxelType.GOLD_FINIAL);
    w.setVoxel(cx, curY + 6, cz, VoxelType.GOLD_FINIAL);
    w.setVoxel(cx, curY + 7, cz, VoxelType.GOLD_FINIAL); // 高耸宝珠刺破青天
  }

  /**
   * 7. 飞檐翘角屋顶生成算法（中式古建精髓）
   * @param {number} cx 中心X
   * @param {number} startY 起始高度
   * @param {number} cz 中心Z
   * @param {number} spanX 檐口X跨度
   * @param {number} spanZ 檐口Z跨度
   * @param {number} height 屋顶高度
   * @param {number} tileType 瓦片颜色
   * @param {number} ridgeType 正脊与垂脊颜色
   * @param {number} upturn 飞檐挑角弧度
   * @param {boolean} isHallMajor 是否为顶层大屋顶带高耸正脊和鸱吻
   */
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

          // 判断是否在当层的外檐边缘
          const isEdgeX = (dx >= curHalfX - 1);
          const isEdgeZ = (dz >= curHalfZ - 1);

          if (isEdgeX || isEdgeZ) {
            // 计算飞檐角部翘起 lift
            let cornerLift = 0;
            if (h <= 2) {
              const cornerProximity = Math.min(curHalfX - dx, curHalfZ - dz);
              if (cornerProximity <= 1) {
                cornerLift = upturn - cornerProximity;
              }
            }

            // 垂脊判定（对角线位置）
            const isRidge = Math.abs((dx / curHalfX) - (dz / curHalfZ)) < 0.15;
            const finalType = isRidge ? ridgeType : tileType;

            w.setVoxel(x, curY + cornerLift, z, finalType);

            // 翼角最尖端飞翘
            if (dx === curHalfX && dz === curHalfZ && cornerLift > 0) {
              w.setVoxel(x, curY + cornerLift + 1, z, VoxelType.GOLD_FINIAL); // 金色挑角
            }
          }
        }
      }
    }

    // 正脊（平直正脊与两端翘立的鸱吻兽）
    const ridgeY = startY + height - 1;
    const ridgeHalfX = Math.max(2, halfX - height + 1);
    for (let x = cx - ridgeHalfX; x <= cx + ridgeHalfX; x++) {
      w.setVoxel(x, ridgeY, cz, ridgeType);
      w.setVoxel(x, ridgeY + 1, cz, ridgeType);
    }

    // 正脊两端高高翘起的龙形鸱吻兽
    if (isHallMajor) {
      [-ridgeHalfX, ridgeHalfX].forEach(rx => {
        w.setVoxel(cx + rx, ridgeY + 2, cz, VoxelType.GOLD_FINIAL);
        w.setVoxel(cx + rx, ridgeY + 3, cz, VoxelType.GOLD_FINIAL);
        w.setVoxel(cx + rx + (rx > 0 ? -1 : 1), ridgeY + 3, cz, VoxelType.GOLD_FINIAL);
      });
      // 正脊中央宝顶
      w.setVoxel(cx, ridgeY + 2, cz, VoxelType.GOLD_FINIAL);
      w.setVoxel(cx, ridgeY + 3, cz, VoxelType.GOLD_FINIAL);
    }
  }

  /**
   * 8. 院落围墙与长廊（将中轴各组建筑规整围合）
   */
  buildEnclosureWalls() {
    const w = this.world;
    const wallH = 4;

    // 东西两侧外墙（红墙灰瓦带漏窗）
    [-38, 38].forEach(wx => {
      for (let z = -44; z <= 30; z++) {
        for (let y = 1; y <= wallH; y++) {
          const isWindow = (y === 2 && z % 4 === 0);
          w.setVoxel(wx, y, z, isWindow ? VoxelType.AIR : VoxelType.WALL_RED);
        }
        // 墙顶青瓦挑檐
        w.setVoxel(wx - 1, wallH + 1, z, VoxelType.ROOF_CYAN);
        w.setVoxel(wx, wallH + 1, z, VoxelType.ROOF_CYAN_DARK);
        w.setVoxel(wx + 1, wallH + 1, z, VoxelType.ROOF_CYAN);
      }
    });

    // 北面后罩墙
    for (let x = -38; x <= 38; x++) {
      for (let y = 1; y <= wallH; y++) {
        w.setVoxel(x, y, -45, VoxelType.WALL_RED);
      }
      w.setVoxel(x, wallH + 1, -45, VoxelType.ROOF_CYAN_DARK);
    }
  }

  /**
   * 细部小品：守门石狮（威严蹲踞）
   */
  buildStoneLion(cx, cy, cz, facingLeft) {
    const w = this.world;
    // 须弥基座
    w.fillBox(cx - 1, cy, cz - 1, cx + 1, cy, cz + 1, VoxelType.STONE_WHITE);
    // 狮身与胸脯
    w.fillBox(cx - 1, cy + 1, cz - 1, cx + 1, cy + 2, cz + 1, VoxelType.LION_STONE);
    // 狮头与发髻卷毛
    w.setVoxel(cx, cy + 3, cz, VoxelType.LION_STONE);
    w.setVoxel(cx, cy + 3, cz + 1, VoxelType.LION_STONE); // 怒视前方
    w.setVoxel(cx - 1, cy + 3, cz, VoxelType.LION_STONE);
    w.setVoxel(cx + 1, cy + 3, cz, VoxelType.LION_STONE);
  }

  /**
   * 细部小品：青铜大香炉
   */
  buildIncenseBurner(cx, cy, cz) {
    const w = this.world;
    // 三足底座
    w.setVoxel(cx - 1, cy, cz, VoxelType.LION_STONE);
    w.setVoxel(cx + 1, cy, cz, VoxelType.LION_STONE);
    w.setVoxel(cx, cy, cz - 1, VoxelType.LION_STONE);
    // 炉身
    w.fillBox(cx - 1, cy + 1, cz - 1, cx + 1, cy + 2, cz + 1, VoxelType.LION_STONE);
    // 炉耳与香灰
    w.setVoxel(cx - 2, cy + 2, cz, VoxelType.GOLD_FINIAL);
    w.setVoxel(cx + 2, cy + 2, cz, VoxelType.GOLD_FINIAL);
    w.setVoxel(cx, cy + 3, cz, VoxelType.LANTERN_RED); // 香火微光
  }

  /**
   * 庭院苍劲古松（曲干虬枝）
   */
  buildPineTree(cx, cy, cz) {
    const w = this.world;
    const trunkH = 5 + Math.floor(Math.random() * 2);

    // 树干（微弯曲）
    let tx = cx, tz = cz;
    for (let y = cy; y <= cy + trunkH; y++) {
      w.setVoxel(tx, y, tz, VoxelType.PINE_TRUNK);
      if (y === cy + 2) tx += 1;
      if (y === cy + 4) tz -= 1;
    }

    // 几层水平舒展的层云状松针树冠
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
