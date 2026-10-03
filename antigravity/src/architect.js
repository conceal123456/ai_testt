import { PALETTE } from './palette.js';

/**
 * 中国古典建筑群生成器 (Chinese Classical Architectural Complex Generator)
 * 严格按照中国传统中轴对称多进院落制式生成：
 * 1. 山门 (Mountain Gate) - 前端入口，三门并立，石狮护卫
 * 2. 钟鼓二楼 (Bell & Drum Towers) - 前庭东西对称耸立，重檐四角攒尖顶
 * 3. 前进庭院与御道 (Outer Courtyard & Spirit Way) - 汉白玉御路，长青古松，青铜宝鼎香炉
 * 4. 大雄宝殿/太和主殿 (Grand Main Hall) - 核心建筑，双层汉白玉月台，九龙雕石阶梯，重檐庑殿顶，飞檐翘角，九间开阔
 * 5. 东西配殿 (East & West Side Halls) - 对称翼辅，单檐歇山顶，雕花格栅
 * 6. 抄手游廊与围墙 (Covered Walkways & Palace Walls) - 环抱院落，月亮门，漏窗
 * 7. 后苑七级琉璃宝塔 (7-Tiered Glazed Pagoda) - 巍峨后峰，层层挑檐，金刹相轮
 * 8. 莲池水景与拱桥 (Lotus Pond & Stone Bridge) - 园林点缀，意境深远
 */
export class ImperialArchitect {
  constructor(engine) {
    this.engine = engine;
  }

  buildComplex() {
    console.log('🏛️ 开始构建体素中国古典建筑群...');
    const t0 = performance.now();

    // 1. 地基与铺装 (Courtyard Foundations & Paving)
    this.buildGroundAndPlaza();

    // 2. 围墙与月亮门 (Perimeter Walls & Moon Gates)
    this.buildPerimeterWalls();

    // 3. 山门 (Front Mountain Gate)
    this.buildShanmen(0, 58);

    // 4. 钟鼓楼 (Bell & Drum Towers)
    this.buildBellDrumTower(34, 22, 'bell');
    this.buildBellDrumTower(-34, 22, 'drum');

    // 5. 东西配殿 (East & West Side Halls)
    this.buildSideHall(40, -32, 'east');
    this.buildSideHall(-40, -32, 'west');

    // 6. 抄手游廊 (Covered Walkways connecting courtyards)
    this.buildVerandas();

    // 7. 大雄主殿 (Grand Imperial Main Hall)
    this.buildMainHall(0, -32);

    // 8. 后苑七级琉璃宝塔 (7-Tiered Pagoda)
    this.buildPagoda(0, -82, 7);

    // 9. 园林景观：古松、石狮、香炉、荷塘、拱桥、红灯笼 (Landscape & Details)
    this.buildGardenAndDetails();

    const t1 = performance.now();
    console.log(`✅ 建筑群生成完毕，耗时 ${(t1 - t0).toFixed(1)}ms，共生成体素 ${this.engine.voxels.size} 个`);
  }

  /**
   * 1. 场地基底与道路铺装
   */
  buildGroundAndPlaza() {
    const e = this.engine;

    // 总体地坪草基 (Ground Grass Plane: X: -75..75, Z: -105..75, Y = 0)
    for (let x = -75; x <= 75; x++) {
      for (let z = -105; z <= 75; z++) {
        // 微妙的地表杂色纹理
        const noise = (x * 7 + z * 13) % 5;
        let grassColor = PALETTE.GRASS_BASE;
        if (noise === 0) grassColor = PALETTE.GRASS_LIGHT;
        else if (noise === 1) grassColor = PALETTE.GRASS_DARK;
        e.set(x, 0, z, grassColor);
      }
    }

    // 中轴神道/御路主干道 (Paved Central Axis: 山门 -> 庭院 -> 主殿)
    // 宽 9 格的青石地砖与边框
    for (let z = -65; z <= 72; z++) {
      for (let x = -4; x <= 4; x++) {
        const isBorder = Math.abs(x) === 4;
        const color = isBorder ? PALETTE.PAVING_BORDER : PALETTE.PAVING_GREY;
        e.set(x, 1, z, color);
      }
    }

    // 前庭广场大铺装 (Z: 8..42, X: -26..26)
    for (let x = -26; x <= 26; x++) {
      for (let z = 8; z <= 42; z++) {
        const isOuter = Math.abs(x) === 26 || z === 8 || z === 42;
        const color = isOuter ? PALETTE.PAVING_BORDER : PALETTE.PAVING_GREY;
        e.set(x, 1, z, color);
      }
    }

    // 主殿前庭丹墀广场 (Z: -18..-2, X: -32..32)
    for (let x = -32; x <= 32; x++) {
      for (let z = -18; z <= -2; z++) {
        const color = (x + z) % 2 === 0 ? PALETTE.PAVING_GREY : PALETTE.PAVING_LIGHT;
        e.set(x, 1, z, color);
      }
    }

    // 后苑塔前小广场 (Z: -68..-96, X: -16..16)
    for (let x = -16; x <= 16; x++) {
      for (let z = -96; z <= -68; z++) {
        e.set(x, 1, z, PALETTE.PAVING_GREY);
      }
    }
  }

  /**
   * 2. 围墙与月亮门
   */
  buildPerimeterWalls() {
    const e = this.engine;
    const wallH = 6;
    const yBase = 1;

    // 外围主墙 (X = -58, X = 58; Z = -100 到 65)
    const zMin = -100;
    const zMax = 65;

    // 东西侧墙
    for (const wx of [-58, 58]) {
      for (let z = zMin; z <= zMax; z++) {
        // 月亮门镂空位置 (在庭院两侧开设拱门)
        const isMoonGate = (z >= 20 && z <= 24) || (z >= -35 && z <= -31);
        if (isMoonGate) {
          // 门洞上方加过梁
          e.box(wx, yBase + 4, z, wx, yBase + wallH, z, PALETTE.RED_WALL);
          // 门洞边框汉白玉装饰
          if (z === 20 || z === 24 || z === -35 || z === -31) {
            e.box(wx, yBase, z, wx, yBase + 3, z, PALETTE.MARBLE_LIGHT);
          }
          continue;
        }

        // 墙基 (白石/灰砖)
        e.set(wx, yBase, z, PALETTE.MARBLE_DARK);
        // 朱红宫墙
        for (let y = yBase + 1; y <= yBase + wallH - 1; y++) {
          e.set(wx, y, z, PALETTE.RED_WALL);
        }
        // 墙顶瓦当青瓦与挑檐 (Grey roof coping)
        e.set(wx - 1, yBase + wallH, z, PALETTE.ROOF_GREY_MAIN);
        e.set(wx, yBase + wallH + 1, z, PALETTE.ROOF_GREY_LIGHT);
        e.set(wx + 1, yBase + wallH, z, PALETTE.ROOF_GREY_MAIN);
      }
    }

    // 南侧正立面山门两侧短墙 (从 +/-58 延伸到 +/-12)
    for (let x = -58; x <= -12; x++) {
      this._buildWallSegment(x, yBase, zMax, wallH);
    }
    for (let x = 12; x <= 58; x++) {
      this._buildWallSegment(x, yBase, zMax, wallH);
    }

    // 北侧后苑围墙
    for (let x = -58; x <= 58; x++) {
      this._buildWallSegment(x, yBase, zMin, wallH);
    }
  }

  _buildWallSegment(x, yBase, z, wallH) {
    const e = this.engine;
    e.set(x, yBase, z, PALETTE.MARBLE_DARK);
    for (let y = yBase + 1; y <= yBase + wallH - 1; y++) {
      e.set(x, y, z, PALETTE.RED_WALL);
    }
    e.set(x, yBase + wallH, z - 1, PALETTE.ROOF_GREY_MAIN);
    e.set(x, yBase + wallH + 1, z, PALETTE.ROOF_GREY_LIGHT);
    e.set(x, yBase + wallH, z + 1, PALETTE.ROOF_GREY_MAIN);
  }

  /**
   * 3. 山门 (Mountain Gate)
   * 前端入口建筑，三门并立，重檐或单檐歇山顶
   */
  buildShanmen(cx, cz) {
    const e = this.engine;
    const yBase = 1;
    const width = 20; // X半宽 10
    const depth = 10; // Z半深 5
    const hallH = 10;

    // 汉白玉台基
    e.box(cx - 11, yBase, cz - 6, cx + 11, yBase + 1, cz + 6, PALETTE.MARBLE_WHITE);

    // 正门门前阶梯 (前出三出三陛)
    e.stairway(cx, yBase, cz + 6, 7, 1, 3, 1, PALETTE.MARBLE_LIGHT);
    e.stairway(cx - 8, yBase, cz + 6, 3, 1, 3, 1, PALETTE.MARBLE_LIGHT);
    e.stairway(cx + 8, yBase, cz + 6, 3, 1, 3, 1, PALETTE.MARBLE_LIGHT);
    // 后出阶梯
    e.stairway(cx, yBase, cz - 6, 7, 1, 3, -1, PALETTE.MARBLE_LIGHT);

    // 朱红山门柱列 (4根主承重立柱)
    const pillarX = [-8, -3, 3, 8];
    const pillarZ = [-4, 4];
    for (const px of pillarX) {
      for (const pz of pillarZ) {
        e.pillar(cx + px, cz + pz, yBase + 2, hallH, PALETTE.RED_PILLAR);
      }
    }

    // 墙体与三道拱门洞
    // 外立面实心红墙，开正门洞 (宽4格) 与左右侧门 (宽2格)
    for (let x = cx - 10; x <= cx + 10; x++) {
      const isCenterDoor = Math.abs(x - cx) <= 2;
      const isLeftDoor = x >= cx - 8 && x <= cx - 6;
      const isRightDoor = x >= cx + 6 && x <= cx + 8;
      const isDoor = isCenterDoor || isLeftDoor || isRightDoor;

      for (let y = yBase + 2; y <= yBase + hallH; y++) {
        // 门头额梁保留，下方留空
        if (isDoor && y <= yBase + (isCenterDoor ? 6 : 5)) {
          // 门框包边
          if (Math.abs(x - cx) === 2 || x === cx - 8 || x === cx - 6 || x === cx + 6 || x === cx + 8) {
            e.set(x, y, cz - 1, PALETTE.WOOD_DARK);
            e.set(x, y, cz + 1, PALETTE.WOOD_DARK);
          }
          continue;
        }
        e.set(x, y, cz - 1, PALETTE.RED_WALL);
        e.set(x, y, cz, PALETTE.RED_WALL);
        e.set(x, y, cz + 1, PALETTE.RED_WALL);
      }
    }

    // 正门门扉 (暗红厚木大门与金黄色铜门钉)
    for (let y = yBase + 2; y <= yBase + 5; y++) {
      for (const dx of [-1, 1]) {
        e.set(cx + dx, y, cz, PALETTE.RED_WALL_DARK);
        // 金门钉
        if (y === yBase + 3 || y === yBase + 5) {
          e.set(cx + dx, y, cz + 1, PALETTE.GOLD_TRIM);
        }
      }
    }

    // 山门门额牌匾: 悬挂 "紫禁仙境" 蓝底金边牌匾
    e.box(cx - 3, yBase + 7, cz + 2, cx + 3, yBase + 8, cz + 2, PALETTE.PLAQUE_NAVY);
    e.box(cx - 3, yBase + 7, cz + 2, cx + 3, yBase + 7, cz + 2, PALETTE.GOLD_TRIM);
    e.box(cx - 3, yBase + 8, cz + 2, cx + 3, yBase + 8, cz + 2, PALETTE.GOLD_TRIM);
    e.set(cx - 2, yBase + 7, cz + 3, PALETTE.PLAQUE_GOLD_TEXT);
    e.set(cx, yBase + 7, cz + 3, PALETTE.PLAQUE_GOLD_TEXT);
    e.set(cx + 2, yBase + 7, cz + 3, PALETTE.PLAQUE_GOLD_TEXT);

    // 斗拱层 (Dougong Brackets)
    const eaveBaseY = yBase + hallH + 1;
    for (let x = cx - 11; x <= cx + 11; x += 2) {
      e.dougongCluster(x, eaveBaseY - 1, cz + 5, 'z');
      e.dougongCluster(x, eaveBaseY - 1, cz - 5, '-z');
    }

    // 歇山顶 (单檐灰瓦/青瓦，飞檐翘角)
    e.roofXieshan({
      cx,
      cz,
      baseY: eaveBaseY,
      halfWidth: 13,
      halfDepth: 7,
      height: 7,
      tileColor: PALETTE.ROOF_GREY_MAIN,
      ridgeColor: PALETTE.ROOF_RIDGE_GOLD,
    });

    // 檐下大红灯笼
    e.lantern(cx - 7, eaveBaseY - 2, cz + 6);
    e.lantern(cx + 7, eaveBaseY - 2, cz + 6);

    // 山门前石狮守护 (左右各一座)
    e.buildStoneLion(cx - 7, yBase, cz + 10);
    e.buildStoneLion(cx + 7, yBase, cz + 10);
  }

  /**
   * 4. 钟楼与鼓楼 (Bell & Drum Towers)
   * 东西对称屹立在前院，二层重檐阁楼式，四角攒尖顶
   */
  buildBellDrumTower(cx, cz, type = 'bell') {
    const e = this.engine;
    const yBase = 1;
    const halfW = 6;
    const halfD = 6;

    // 一层高台基 (汉白玉须弥座)
    e.box(cx - halfW - 1, yBase, cz - halfD - 1, cx + halfW + 1, yBase + 2, cz + halfD + 1, PALETTE.MARBLE_WHITE);
    // 台阶
    e.stairway(cx, yBase, cz + halfD + 1, 3, 1, 2, 1, PALETTE.MARBLE_LIGHT);

    // 一层殿身 (红墙闭合，开四方门窗)
    const f1Height = 8;
    for (let x = cx - halfW; x <= cx + halfW; x++) {
      for (let z = cz - halfD; z <= cz + halfD; z++) {
        const isWall = Math.abs(x - cx) === halfW || Math.abs(z - cz) === halfD;
        if (isWall) {
          // 门洞开在南面
          const isDoor = z === cz + halfD && Math.abs(x - cx) <= 1;
          for (let y = yBase + 3; y <= yBase + f1Height + 2; y++) {
            if (isDoor && y <= yBase + 6) continue;
            e.set(x, y, z, PALETTE.RED_WALL);
          }
        }
      }
    }

    // 四角立柱
    e.pillar(cx - halfW, cz - halfD, yBase + 3, f1Height, PALETTE.RED_PILLAR);
    e.pillar(cx + halfW, cz - halfD, yBase + 3, f1Height, PALETTE.RED_PILLAR);
    e.pillar(cx - halfW, cz + halfD, yBase + 3, f1Height, PALETTE.RED_PILLAR);
    e.pillar(cx + halfW, cz + halfD, yBase + 3, f1Height, PALETTE.RED_PILLAR);

    // 一层腰檐 (Lower Eave)
    const eave1Y = yBase + f1Height + 3;
    e.roofHip({
      cx,
      cz,
      baseY: eave1Y,
      halfWidth: halfW + 3,
      halfDepth: halfD + 3,
      height: 3,
      tileColor: PALETTE.ROOF_GREY_MAIN,
      ridgeColor: PALETTE.ROOF_RIDGE_GOLD,
      flyingEaves: true,
    });

    // 二层平座 (Balcony with Balustrades)
    const f2BaseY = eave1Y + 3;
    e.box(cx - halfW + 1, f2BaseY, cz - halfD + 1, cx + halfW - 1, f2BaseY, cz + halfD - 1, PALETTE.WOOD_MID);
    // 二层木栏杆
    for (let x = cx - halfW + 1; x <= cx + halfW - 1; x++) {
      for (let z = cz - halfD + 1; z <= cz + halfD - 1; z++) {
        if (Math.abs(x - cx) === halfW - 1 || Math.abs(z - cz) === halfD - 1) {
          e.set(x, f2BaseY + 1, z, PALETTE.WOOD_BEAM);
        }
      }
    }

    // 二层敞阁 (立柱支撑，中置巨钟或大鼓)
    const f2Height = 7;
    const f2HalfW = halfW - 2;
    e.pillar(cx - f2HalfW, cz - f2HalfW, f2BaseY + 1, f2Height, PALETTE.RED_PILLAR);
    e.pillar(cx + f2HalfW, cz - f2HalfW, f2BaseY + 1, f2Height, PALETTE.RED_PILLAR);
    e.pillar(cx - f2HalfW, cz + f2HalfW, f2BaseY + 1, f2Height, PALETTE.RED_PILLAR);
    e.pillar(cx + f2HalfW, cz + f2HalfW, f2BaseY + 1, f2Height, PALETTE.RED_PILLAR);

    // 二层核心构件：钟或鼓
    if (type === 'bell') {
      // 悬挂铜钟 (Bronze Bell)
      const bellY = f2BaseY + 3;
      e.box(cx - 1, bellY, cz - 1, cx + 1, bellY + 2, cz + 1, PALETTE.BRONZE_DARK);
      e.set(cx, bellY - 1, cz, PALETTE.BRONZE_LIGHT);
      e.set(cx, bellY + 3, cz, PALETTE.WOOD_DARK); // 挂梁
    } else {
      // 巨型朱漆大鼓 (Red War Drum on Stand)
      const drumY = f2BaseY + 3;
      e.box(cx - 1, drumY, cz - 1, cx + 1, drumY + 2, cz + 1, PALETTE.RED_WALL_DARK);
      e.set(cx, drumY + 1, cz + 2, PALETTE.WINDOW_PAPER); // 鼓面
      e.set(cx, drumY + 1, cz - 2, PALETTE.WINDOW_PAPER);
    }

    // 二层上覆四角攒尖顶 (Upper Pyramidal Roof with Flying Eaves)
    const roof2Y = f2BaseY + f2Height + 1;
    const topY = e.roofZanjian({
      cx,
      cz,
      baseY: roof2Y,
      radius: halfW + 1,
      height: 6,
      tileColor: PALETTE.ROOF_GREY_MAIN,
      ridgeColor: PALETTE.ROOF_RIDGE_GOLD,
    });

    // 塔刹宝顶 (Golden Finial)
    e.cylinder(cx, topY, cz, 1, 3, PALETTE.GOLD_ACCENT);
    e.set(cx, topY + 3, cz, PALETTE.GOLD_ACCENT);

    // 四角挑檐悬挂红灯笼
    e.lantern(cx - halfW - 2, roof2Y - 1, cz - halfW - 2);
    e.lantern(cx + halfW + 2, roof2Y - 1, cz - halfW - 2);
    e.lantern(cx - halfW - 2, roof2Y - 1, cz + halfW + 2);
    e.lantern(cx + halfW + 2, roof2Y - 1, cz + halfW + 2);
  }

  /**
   * 5. 东西配殿 (East & West Side Halls)
   * 歇山顶中式配殿，五开间，单檐出挑，配以游廊
   */
  buildSideHall(cx, cz, side = 'east') {
    const e = this.engine;
    const yBase = 1;
    const halfW = 9; // X半宽
    const halfD = 14; // Z半深 (南北向长进深)
    const hallH = 11;

    // 汉白玉台基
    e.box(cx - halfW - 1, yBase, cz - halfD - 1, cx + halfW + 1, yBase + 2, cz + halfD + 1, PALETTE.MARBLE_WHITE);

    // 朝向主院内侧的登堂台阶
    const stairDirX = side === 'east' ? -1 : 1;
    e.stairway(cx + stairDirX * (halfW + 1), yBase, cz, 5, 1, 2, stairDirX, PALETTE.MARBLE_LIGHT);

    // 外围檐柱列 (朱红大柱)
    for (let z = cz - halfD + 2; z <= cz + halfD - 2; z += 4) {
      e.pillar(cx - halfW + 1, z, yBase + 3, hallH, PALETTE.RED_PILLAR);
      e.pillar(cx + halfW - 1, z, yBase + 3, hallH, PALETTE.RED_PILLAR);
    }

    // 殿身墙体 (红墙与木格扇门窗)
    for (let x = cx - halfW + 2; x <= cx + halfW - 2; x++) {
      for (let z = cz - halfD + 1; z <= cz + halfD - 1; z++) {
        const isWallX = x === cx - halfW + 2 || x === cx + halfW - 2;
        const isWallZ = z === cz - halfD + 1 || z === cz + halfD - 1;
        if (isWallX || isWallZ) {
          const isFacingCourtyard = side === 'east' ? (x === cx - halfW + 2) : (x === cx + halfW - 2);
          for (let y = yBase + 3; y <= yBase + hallH + 2; y++) {
            if (isFacingCourtyard) {
              // 朝内庭为格扇门窗 (金色木格)
              const isWindow = (y >= yBase + 5 && y <= yBase + 8) && (z % 2 === 0);
              e.set(x, y, z, isWindow ? PALETTE.WINDOW_LATTICE : PALETTE.RED_WALL);
              if (isWindow) e.set(x + (side === 'east' ? 1 : -1), y, z, PALETTE.WINDOW_PAPER);
            } else {
              e.set(x, y, z, PALETTE.RED_WALL);
            }
          }
        }
      }
    }

    // 斗拱层
    const eaveY = yBase + hallH + 3;
    for (let z = cz - halfD; z <= cz + halfD; z += 3) {
      e.dougongCluster(cx - halfW, eaveY - 1, z, '-x');
      e.dougongCluster(cx + halfW, eaveY - 1, z, 'x');
    }

    // 歇山顶 (青碧色琉璃瓦，金色屋脊，极富层次的飞檐翘角)
    e.roofXieshan({
      cx,
      cz,
      baseY: eaveY,
      halfWidth: halfW + 3,
      halfDepth: halfD + 3,
      height: 8,
      tileColor: PALETTE.ROOF_GREEN_MAIN,
      ridgeColor: PALETTE.ROOF_RIDGE_GOLD,
    });

    // 悬挂殿前宫灯
    e.lantern(cx + (side === 'east' ? -halfW - 2 : halfW + 2), eaveY - 2, cz - 6);
    e.lantern(cx + (side === 'east' ? -halfW - 2 : halfW + 2), eaveY - 2, cz + 6);
  }

  /**
   * 6. 抄手游廊 (Covered Walkways / Verandas)
   * 连接配殿与主殿后侧，提供通透回廊空间
   */
  buildVerandas() {
    const e = this.engine;
    const yBase = 1;
    const corridorH = 6;

    // 左右各一条南北向长廊 (X = +/-50, Z: -55..-10)
    for (const cx of [-50, 50]) {
      for (let z = -55; z <= -10; z++) {
        // 廊道青石铺地
        e.set(cx - 1, yBase + 1, z, PALETTE.PAVING_LIGHT);
        e.set(cx, yBase + 1, z, PALETTE.PAVING_GREY);
        e.set(cx + 1, yBase + 1, z, PALETTE.PAVING_LIGHT);

        // 立柱 (每隔 4 格立一对柱子)
        if (z % 4 === 0) {
          e.pillar(cx - 2, z, yBase + 2, corridorH, PALETTE.RED_PILLAR);
          e.pillar(cx + 2, z, yBase + 2, corridorH, PALETTE.RED_PILLAR);
        }

        // 廊顶卷棚顶/两坡瓦顶
        const roofY = yBase + corridorH + 2;
        e.set(cx - 3, roofY, z, PALETTE.ROOF_GREEN_MAIN);
        e.set(cx - 2, roofY + 1, z, PALETTE.ROOF_GREEN_MAIN);
        e.set(cx - 1, roofY + 1, z, PALETTE.ROOF_GREEN_MAIN);
        e.set(cx, roofY + 2, z, PALETTE.ROOF_RIDGE_GOLD);
        e.set(cx + 1, roofY + 1, z, PALETTE.ROOF_GREEN_MAIN);
        e.set(cx + 2, roofY + 1, z, PALETTE.ROOF_GREEN_MAIN);
        e.set(cx + 3, roofY, z, PALETTE.ROOF_GREEN_MAIN);
      }
    }
  }

  /**
   * 7. 大雄主殿 / 太和殿 (Grand Imperial Main Hall)
   * 建筑群核心：体量最宏大，九开间，双层重檐庑殿顶，三出三陛汉白玉须弥双层月台，九龙御道
   */
  buildMainHall(cx, cz) {
    const e = this.engine;
    const yBase = 1;

    const hallHalfW = 20; // 宽40体素
    const hallHalfD = 14; // 深28体素

    // ========= A. 双层汉白玉月台与须弥座 (Double-Tier Marble Terrace) =========
    // 1. 下层大月台 (Grand Terrace Plinth)
    const t1HalfW = hallHalfW + 6;
    const t1HalfD = hallHalfD + 8;
    const t1H = 3;
    e.box(cx - t1HalfW, yBase, cz - t1HalfD, cx + t1HalfW, yBase + t1H, cz + t1HalfD, PALETTE.MARBLE_WHITE);

    // 下层月台石雕白石栏杆 (Balustrades & Newel Posts 望柱)
    for (let x = cx - t1HalfW; x <= cx + t1HalfW; x++) {
      for (let z = cz - t1HalfD; z <= cz + t1HalfD; z++) {
        const isEdge = Math.abs(x - cx) === t1HalfW || Math.abs(z - cz) === t1HalfD;
        // 避开南向阶梯口
        const isStairGap = z === cz + t1HalfD && Math.abs(x - cx) <= 7;
        if (isEdge && !isStairGap) {
          e.set(x, yBase + t1H + 1, z, PALETTE.MARBLE_LIGHT);
          // 望柱 (莲花石柱头)
          if ((x + z) % 3 === 0) {
            e.set(x, yBase + t1H + 2, z, PALETTE.MARBLE_WHITE);
          }
        }
      }
    }

    // 2. 上层月台 (Upper Terrace)
    const t2HalfW = hallHalfW + 2;
    const t2HalfD = hallHalfD + 2;
    const t2BaseY = yBase + t1H + 1;
    const t2H = 2;
    e.box(cx - t2HalfW, t2BaseY, cz - t2HalfD, cx + t2HalfW, t2BaseY + t2H, cz + t2HalfD, PALETTE.MARBLE_WHITE);

    // 上层栏杆
    for (let x = cx - t2HalfW; x <= cx + t2HalfW; x++) {
      for (let z = cz - t2HalfD; z <= cz + t2HalfD; z++) {
        const isEdge = Math.abs(x - cx) === t2HalfW || Math.abs(z - cz) === t2HalfD;
        const isStairGap = z === cz + t2HalfD && Math.abs(x - cx) <= 5;
        if (isEdge && !isStairGap) {
          e.set(x, t2BaseY + t2H + 1, z, PALETTE.MARBLE_LIGHT);
          if ((x + z) % 3 === 0) {
            e.set(x, t2BaseY + t2H + 2, z, PALETTE.MARBLE_WHITE);
          }
        }
      }
    }

    // 3. 南面三出陛阶梯与中央九龙御路石雕 (Imperial Ramp & Triple Staircases)
    // 中央九龙雕石 (斜度滑道雕石)
    for (let step = 0; step <= 5; step++) {
      const sy = yBase + 1 + Math.floor(step * 0.9);
      const sz = cz + t1HalfD + 4 - step;
      // 御路雕石 (宽 3 格，青白斑驳雕刻感)
      e.box(cx - 1, sy, sz, cx + 1, sy, sz, PALETTE.SPIRIT_ROAD);
      // 左右台阶 (左陛、右陛)
      e.box(cx - 5, sy, sz, cx - 2, sy, sz, PALETTE.MARBLE_LIGHT);
      e.box(cx + 2, sy, sz, cx + 5, sy, sz, PALETTE.MARBLE_LIGHT);
    }

    // 上层小阶梯
    e.stairway(cx - 3, t2BaseY, cz + t2HalfD + 1, 3, 1, 3, 1, PALETTE.MARBLE_LIGHT);
    e.stairway(cx + 3, t2BaseY, cz + t2HalfD + 1, 3, 1, 3, 1, PALETTE.MARBLE_LIGHT);
    e.box(cx - 1, t2BaseY, cz + t2HalfD, cx + 1, t2BaseY + 2, cz + t2HalfD + 2, PALETTE.SPIRIT_ROAD);

    // ========= B. 大殿木作柱网与门窗金壁 (Pillar Grid, Walls & Windows) =========
    const hallFloorY = t2BaseY + t2H + 1;
    const hallBodyH = 14;

    // 金砖殿内地坪 (Jinzhuan Paving)
    e.box(cx - hallHalfW, hallFloorY, cz - hallHalfD, cx + hallHalfW, hallFloorY, cz + hallHalfD, PALETTE.WOOD_MID);

    // 巨大朱红檐柱外围网 (12根大柱环立南立面)
    const pillarStepX = 4;
    for (let px = cx - hallHalfW + 2; px <= cx + hallHalfW - 2; px += pillarStepX) {
      e.pillar(px, cz + hallHalfD - 2, hallFloorY, hallBodyH, PALETTE.RED_PILLAR);
      e.pillar(px, cz - hallHalfD + 2, hallFloorY, hallBodyH, PALETTE.RED_PILLAR);
    }
    for (let pz = cz - hallHalfD + 2; pz <= cz + hallHalfD - 2; pz += 4) {
      e.pillar(cx - hallHalfW + 2, pz, hallFloorY, hallBodyH, PALETTE.RED_PILLAR);
      e.pillar(cx + hallHalfW - 2, pz, hallFloorY, hallBodyH, PALETTE.RED_PILLAR);
    }

    // 内收大红厚墙 (Vermilion Walls with Gold Borders)
    const wallHalfW = hallHalfW - 3;
    const wallHalfD = hallHalfD - 3;
    for (let x = cx - wallHalfW; x <= cx + wallHalfW; x++) {
      for (let z = cz - wallHalfD; z <= cz + wallHalfD; z++) {
        const isWallX = x === cx - wallHalfW || x === cx + wallHalfW;
        const isWallZ = z === cz - wallHalfD || z === cz + wallHalfD;

        if (isWallX || isWallZ) {
          const isFront = z === cz + wallHalfD;
          for (let y = hallFloorY + 1; y <= hallFloorY + hallBodyH; y++) {
            if (isFront) {
              // 南面：七间通透六抹金漆隔扇门窗 (Golden Lattice Doors)
              const isDoorOpening = Math.abs(x - cx) <= 12;
              if (isDoorOpening) {
                // 门框与窗棂
                const isWindowY = y >= hallFloorY + 4 && y <= hallFloorY + 10;
                if (isWindowY && (x + y) % 2 === 0) {
                  e.set(x, y, z, PALETTE.WINDOW_LATTICE);
                  e.set(x, y, z - 1, PALETTE.WINDOW_PAPER);
                } else {
                  e.set(x, y, z, PALETTE.GOLD_TRIM);
                }
                continue;
              }
            }
            // 实体朱红宫墙
            e.set(x, y, z, PALETTE.RED_WALL);
          }
        }
      }
    }

    // 大殿正中金字巨匾: "大 雄 宝 殿" (Imperial Plaque)
    const plaqueY = hallFloorY + 10;
    e.box(cx - 5, plaqueY, cz + wallHalfD + 1, cx + 5, plaqueY + 3, cz + wallHalfD + 1, PALETTE.PLAQUE_NAVY);
    e.box(cx - 5, plaqueY, cz + wallHalfD + 1, cx + 5, plaqueY, cz + wallHalfD + 1, PALETTE.GOLD_ACCENT);
    e.box(cx - 5, plaqueY + 3, cz + wallHalfD + 1, cx + 5, plaqueY + 3, cz + wallHalfD + 1, PALETTE.GOLD_ACCENT);
    e.box(cx - 5, plaqueY, cz + wallHalfD + 1, cx - 5, plaqueY + 3, cz + wallHalfD + 1, PALETTE.GOLD_ACCENT);
    e.box(cx + 5, plaqueY, cz + wallHalfD + 1, cx + 5, plaqueY + 3, cz + wallHalfD + 1, PALETTE.GOLD_ACCENT);
    // 匾文金字点缀
    e.set(cx - 3, plaqueY + 1, cz + wallHalfD + 2, PALETTE.PLAQUE_GOLD_TEXT);
    e.set(cx - 1, plaqueY + 1, cz + wallHalfD + 2, PALETTE.PLAQUE_GOLD_TEXT);
    e.set(cx + 1, plaqueY + 1, cz + wallHalfD + 2, PALETTE.PLAQUE_GOLD_TEXT);
    e.set(cx + 3, plaqueY + 1, cz + wallHalfD + 2, PALETTE.PLAQUE_GOLD_TEXT);

    // ========= C. 雄伟重檐庑殿顶 (Double-Eave Hip Roof) =========
    // 1. 下层重檐 (Lower Eave)
    const lowerEaveY = hallFloorY + hallBodyH - 2;
    // 斗拱层
    for (let x = cx - hallHalfW; x <= cx + hallHalfW; x += 3) {
      e.dougongCluster(x, lowerEaveY - 1, cz + hallHalfD, 'z');
      e.dougongCluster(x, lowerEaveY - 1, cz - hallHalfD, '-z');
    }
    // 下层金顶飞檐
    e.roofHip({
      cx,
      cz,
      baseY: lowerEaveY,
      halfWidth: hallHalfW + 3,
      halfDepth: hallHalfD + 3,
      height: 4,
      tileColor: PALETTE.ROOF_GOLD_MAIN,
      ridgeColor: PALETTE.ROOF_RIDGE_GOLD,
      flyingEaves: true,
    });

    // 2. 暗层过渡柱颈 (Attic Wall)
    const upperBaseY = lowerEaveY + 4;
    for (let x = cx - wallHalfW + 2; x <= cx + wallHalfW - 2; x++) {
      for (let z = cz - wallHalfD + 2; z <= cz + wallHalfD - 2; z++) {
        if (Math.abs(x - cx) === wallHalfW - 2 || Math.abs(z - cz) === wallHalfD - 2) {
          for (let y = upperBaseY; y <= upperBaseY + 3; y++) {
            e.set(x, y, z, PALETTE.RED_WALL);
          }
        }
      }
    }

    // 上层斗拱
    const upperEaveY = upperBaseY + 4;
    for (let x = cx - wallHalfW + 2; x <= cx + wallHalfW - 2; x += 3) {
      e.dougongCluster(x, upperEaveY - 1, cz + wallHalfD - 2, 'z');
      e.dougongCluster(x, upperEaveY - 1, cz - wallHalfD + 2, '-z');
    }

    // 3. 上层大金顶 (Upper Grand Hip Roof)
    e.roofHip({
      cx,
      cz,
      baseY: upperEaveY,
      halfWidth: hallHalfW - 1,
      halfDepth: hallHalfD - 1,
      height: 9,
      tileColor: PALETTE.ROOF_GOLD_MAIN,
      ridgeColor: PALETTE.ROOF_RIDGE_GOLD,
      flyingEaves: true,
    });

    // 殿前宫灯点缀 (红金长明灯)
    e.lantern(cx - 10, lowerEaveY - 3, cz + hallHalfD + 2);
    e.lantern(cx + 10, lowerEaveY - 3, cz + hallHalfD + 2);
    e.lantern(cx - 18, lowerEaveY - 3, cz + hallHalfD + 2);
    e.lantern(cx + 18, lowerEaveY - 3, cz + hallHalfD + 2);
  }

  /**
   * 8. 后苑七级琉璃宝塔 (7-Tiered Glazed Pagoda)
   * 屹立于后苑高台，七级浮屠，层层飞檐，金刹耸天
   */
  buildPagoda(cx, cz, tiers = 7) {
    const e = this.engine;
    const yBase = 1;

    // 塔基：三层汉白玉八角须弥高台 (Raised Pagoda Octagonal Terrace)
    e.box(cx - 15, yBase, cz - 15, cx + 15, yBase + 2, cz + 15, PALETTE.MARBLE_WHITE);
    e.box(cx - 13, yBase + 3, cz - 13, cx + 13, yBase + 4, cz + 13, PALETTE.MARBLE_LIGHT);
    e.stairway(cx, yBase, cz + 15, 5, 1, 4, 1, PALETTE.MARBLE_LIGHT);

    let currentY = yBase + 5;
    let currentR = 10; // 底层半宽

    for (let t = 1; t <= tiers; t++) {
      const tierH = Math.max(5, 8 - t); // 逐层高度微收
      const wallR = currentR - 1;

      // 塔身红墙与拱门 (Voxel Pagoda Chamber)
      for (let x = cx - wallR; x <= cx + wallR; x++) {
        for (let z = cz - wallR; z <= cz + wallR; z++) {
          const dist = Math.max(Math.abs(x - cx), Math.abs(z - cz));
          if (dist === wallR) {
            // 每层南向开小佛龛/拱券门
            const isSouthDoor = z === cz + wallR && Math.abs(x - cx) <= 1;
            for (let y = currentY; y < currentY + tierH; y++) {
              if (isSouthDoor && y <= currentY + 3) continue;
              e.set(x, y, z, PALETTE.RED_WALL);
            }
          }
        }
      }

      // 塔角立柱
      e.pillar(cx - wallR, cz - wallR, currentY, tierH, PALETTE.RED_PILLAR);
      e.pillar(cx + wallR, cz - wallR, currentY, tierH, PALETTE.RED_PILLAR);
      e.pillar(cx - wallR, cz + wallR, currentY, tierH, PALETTE.RED_PILLAR);
      e.pillar(cx + wallR, cz + wallR, currentY, tierH, PALETTE.RED_PILLAR);

      // 每层挑出琉璃飞檐 (Glazed Projecting Eave)
      const eaveY = currentY + tierH;
      // 顶层用金瓦，其他层金翠相间
      const tileColor = (t === tiers || t % 2 === 1) ? PALETTE.ROOF_GOLD_MAIN : PALETTE.ROOF_GREEN_MAIN;

      e.roofZanjian({
        cx,
        cz,
        baseY: eaveY,
        radius: currentR + 2,
        height: 3,
        tileColor,
        ridgeColor: PALETTE.ROOF_RIDGE_GOLD,
        flyingEaves: true,
      });

      // 四角檐下悬挂小风铃 / 佛灯
      if (t % 2 === 1) {
        e.lantern(cx - currentR - 2, eaveY - 1, cz - currentR - 2);
        e.lantern(cx + currentR + 2, eaveY - 1, cz + currentR + 2);
      }

      currentY = eaveY + 3;
      // 下一层收缩半宽
      currentR = Math.max(3, currentR - 1);
    }

    // 塔刹相轮宝顶 (Golden Buddhist Pagoda Finial / Stupa Spire)
    // 覆钵、仰莲、七重相轮、华盖、宝珠
    e.cylinder(cx, currentY, cz, 2, 2, PALETTE.GOLD_ACCENT);
    currentY += 2;
    // 相轮 (逐级小圆盘)
    for (let ring = 0; ring < 5; ring++) {
      e.cylinder(cx, currentY, cz, 2 - (ring % 2), 1, PALETTE.GOLD_ACCENT);
      currentY++;
    }
    // 华盖与摩尼宝珠
    e.box(cx - 2, currentY, cz - 2, cx + 2, currentY, cz + 2, PALETTE.GOLD_TRIM);
    e.set(cx, currentY + 1, cz, PALETTE.ROOF_RIDGE_GOLD);
    e.set(cx, currentY + 2, cz, PALETTE.GOLD_ACCENT, 'glow'); // 宝刹发光摩尼珠
  }

  /**
   * 9. 园林景观与文化意象 (Garden, Pines, Incense, Pond & Bridge)
   */
  buildGardenAndDetails() {
    const e = this.engine;
    const yBase = 1;

    // A. 庭院正中青铜宝鼎大香炉 (Grand Bronze Incense Burner in Center Court)
    e.buildIncenseBurner(0, yBase + 1, 10);

    // B. 古松柏群 (Ancient Chinese Pine Trees)
    // 庭院迎客松 (左右对称排布于前庭与后苑)
    const pineCoords = [
      // 前庭神道两侧松柏
      { x: -14, z: 45, h: 13 },
      { x: 14, z: 45, h: 13 },
      { x: -18, z: 28, h: 15 },
      { x: 18, z: 28, h: 15 },
      { x: -14, z: 12, h: 14 },
      { x: 14, z: 12, h: 14 },
      // 配殿旁侧松林
      { x: -48, z: -15, h: 12 },
      { x: 48, z: -15, h: 12 },
      { x: -48, z: -48, h: 14 },
      { x: 48, z: -48, h: 14 },
      // 后苑塔前古柏
      { x: -22, z: -75, h: 16 },
      { x: 22, z: -75, h: 16 },
      { x: -25, z: -92, h: 14 },
      { x: 25, z: -92, h: 14 },
    ];
    for (const p of pineCoords) {
      e.buildPineTree(p.x, yBase + 1, p.z, p.h);
    }

    // C. 碧波莲花池与汉白玉石拱桥 (Tranquil Lotus Pond & Arch Bridge in East Court)
    const pondMinX = 35;
    const pondMaxX = 52;
    const pondMinZ = 42;
    const pondMaxZ = 60;

    // 开挖池底与护岸
    for (let x = pondMinX - 1; x <= pondMaxX + 1; x++) {
      for (let z = pondMinZ - 1; z <= pondMaxZ + 1; z++) {
        const isBank = x === pondMinX - 1 || x === pondMaxX + 1 || z === pondMinZ - 1 || z === pondMaxZ + 1;
        if (isBank) {
          e.set(x, yBase, z, PALETTE.MARBLE_DARK);
          e.set(x, yBase + 1, z, PALETTE.MARBLE_MID);
        } else {
          // 池水体素 (半透明清幽水质)
          e.set(x, yBase, z, PALETTE.WATER_SURFACE, 'water');
          // 荷叶与睡莲点缀
          if ((x * 3 + z * 7) % 7 === 0) {
            e.set(x, yBase + 1, z, PALETTE.LOTUS_LEAF);
          } else if ((x * 5 + z * 11) % 19 === 0) {
            e.set(x, yBase + 1, z, PALETTE.LOTUS_FLOWER);
          }
        }
      }
    }

    // 跨池汉白玉拱桥 (Marble Arch Bridge across pond)
    const bridgeZ = Math.floor((pondMinZ + pondMaxZ) / 2);
    for (let x = pondMinX - 2; x <= pondMaxX + 2; x++) {
      const midDist = Math.abs(x - (pondMinX + pondMaxX) / 2);
      const bridgeH = Math.max(1, 3 - Math.floor(midDist * 0.35));
      // 桥面
      e.box(x, yBase + bridgeH, bridgeZ - 1, x, yBase + bridgeH, bridgeZ + 1, PALETTE.MARBLE_WHITE);
      // 桥栏杆
      e.set(x, yBase + bridgeH + 1, bridgeZ - 1, PALETTE.MARBLE_LIGHT);
      e.set(x, yBase + bridgeH + 1, bridgeZ + 1, PALETTE.MARBLE_LIGHT);
    }

    // D. 庭院青石小水盘与盆景
    e.box(-38, yBase + 1, 46, -34, yBase + 1, 50, PALETTE.MARBLE_DARK);
    e.box(-37, yBase + 1, 47, -35, yBase + 1, 49, PALETTE.WATER_SURFACE, 'water');
    e.set(-36, yBase + 2, 48, PALETTE.LOTUS_FLOWER);
  }
}
