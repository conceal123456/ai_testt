import * as THREE from 'three';
import { PALETTE } from './palette.js';

/**
 * 高性能体素构建引擎 (High-Performance Voxel Engine)
 * 使用 THREE.InstancedMesh 批量实例化渲染，即使数万体素也能维持 60 FPS
 */
export class VoxelEngine {
  constructor() {
    // 存储格式: key => { x, y, z, color, type }
    this.voxels = new Map();
    this.lanternPoints = []; // 记录灯笼位置以生成柔和点光源
  }

  // 坐标键
  _key(x, y, z) {
    return `${x},${y},${z}`;
  }

  // 单个体素设置
  set(x, y, z, color, type = 'solid') {
    x = Math.round(x);
    y = Math.round(y);
    z = Math.round(z);
    const key = this._key(x, y, z);
    this.voxels.set(key, { x, y, z, color, type });
  }

  // 移除体素
  remove(x, y, z) {
    const key = this._key(Math.round(x), Math.round(y), Math.round(z));
    this.voxels.delete(key);
  }

  // 是否存在体素
  has(x, y, z) {
    return this.voxels.has(this._key(Math.round(x), Math.round(y), Math.round(z)));
  }

  // 实体长方体填充
  box(x1, y1, z1, x2, y2, z2, color, type = 'solid') {
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

  // 空心矩形外壳
  hollowBox(x1, y1, z1, x2, y2, z2, color, type = 'solid') {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    const minZ = Math.min(z1, z2);
    const maxZ = Math.max(z1, z2);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        for (let z = minZ; z <= maxZ; z++) {
          const isEdge =
            x === minX || x === maxX ||
            y === minY || y === maxY ||
            z === minZ || z === maxZ;
          if (isEdge) {
            this.set(x, y, z, color, type);
          }
        }
      }
    }
  }

  // 圆柱体结构 (柱子、宝顶)
  cylinder(cx, y1, cz, radius, height, color, type = 'solid') {
    const r2 = radius * radius;
    const ir = Math.ceil(radius);
    for (let y = y1; y < y1 + height; y++) {
      for (let dx = -ir; dx <= ir; dx++) {
        for (let dz = -ir; dz <= ir; dz++) {
          if (dx * dx + dz * dz <= r2) {
            this.set(cx + dx, y, cz + dz, color, type);
          }
        }
      }
    }
  }

  // 汉白玉/石质阶梯
  stairway(startX, startY, startZ, width, depth, stepCount, dirZ = 1, color = PALETTE.MARBLE_LIGHT) {
    for (let s = 0; s < stepCount; s++) {
      const y = startY + s;
      const z = startZ + s * dirZ;
      const nextZ = z + dirZ;
      const minZ = Math.min(z, nextZ);
      const maxZ = Math.max(z, nextZ);
      const halfW = Math.floor(width / 2);
      this.box(startX - halfW, y, minZ, startX + halfW, y, maxZ, color);
    }
  }

  // 中式朱红立柱 (带石鼓形柱础与额枋榫接柱头)
  pillar(cx, cz, yBase, height, color = PALETTE.RED_PILLAR, plinthColor = PALETTE.MARBLE_DARK) {
    // 柱础 (石鼓座)
    this.box(cx - 1, yBase, cz - 1, cx + 1, yBase, cz + 1, plinthColor);
    // 主干立柱
    this.box(cx, yBase + 1, cz, cx, yBase + height - 1, cz, color);
    // 柱头收分斗栱座
    this.box(cx - 1, yBase + height, cz - 1, cx + 1, yBase + height, cz + 1, PALETTE.WOOD_DARK);
  }

  // 斗栱组 (Dougong Brackets)
  dougongCluster(x, y, z, facing = 'z') {
    // 栌斗 (Base bracket block)
    this.set(x, y, z, PALETTE.WOOD_DARK);
    // 华栱出跳 (Bracket extending outward)
    if (facing === 'z' || facing === '-z') {
      const dz = facing === 'z' ? 1 : -1;
      this.set(x, y + 1, z, PALETTE.DOUGONG_CYAN);
      this.set(x, y + 1, z + dz, PALETTE.DOUGONG_GOLD);
      this.set(x - 1, y + 1, z, PALETTE.WOOD_MID);
      this.set(x + 1, y + 1, z, PALETTE.WOOD_MID);
    } else {
      const dx = facing === 'x' ? 1 : -1;
      this.set(x, y + 1, z, PALETTE.DOUGONG_CYAN);
      this.set(x + dx, y + 1, z, PALETTE.DOUGONG_GOLD);
      this.set(x, y + 1, z - 1, PALETTE.WOOD_MID);
      this.set(x, y + 1, z + 1, PALETTE.WOOD_MID);
    }
  }

  // 中式灯笼 (带流苏与发光体素)
  lantern(x, y, z) {
    // 悬挂吊钩
    this.set(x, y + 2, z, PALETTE.WOOD_DARK);
    // 灯笼顶盖
    this.box(x - 1, y + 1, z - 1, x + 1, y + 1, z + 1, PALETTE.WOOD_DARK);
    // 灯笼发光主体 (朱红琉璃纱绢)
    this.box(x - 1, y - 1, z - 1, x + 1, y, z + 1, PALETTE.LANTERN_RED, 'glow');
    this.set(x, y, z, PALETTE.LANTERN_GLOW, 'glow');
    // 灯笼底座与穗子
    this.set(x, y - 2, z, PALETTE.WOOD_DARK);
    this.set(x, y - 3, z, PALETTE.LANTERN_TASSEL);
    this.set(x, y - 4, z, PALETTE.LANTERN_TASSEL);

    this.lanternPoints.push({ x, y, z });
  }

  // 庑殿顶/重檐屋顶 (Hip Roof with Sweeping Flying Eaves 飞檐翘角)
  roofHip({
    cx,
    cz,
    baseY,
    halfWidth, // X轴半宽
    halfDepth, // Z轴半深
    height,
    tileColor = PALETTE.ROOF_GOLD_MAIN,
    ridgeColor = PALETTE.ROOF_RIDGE_GOLD,
    eaveDrop = 1,
    flyingEaves = true,
  }) {
    // 1. 铺设下垂飞檐 (Eave Overhang & Upward Wing Flairs)
    const eaveY = baseY;
    const w = halfWidth;
    const d = halfDepth;

    // 基础屋檐外挑板
    for (let dx = -w; dx <= w; dx++) {
      for (let dz = -d; dz <= d; dz++) {
        // 仅在屋檐边缘边缘层
        const isRim = Math.abs(dx) >= w - 1 || Math.abs(dz) >= d - 1;
        if (isRim) {
          this.set(cx + dx, eaveY, cz + dz, tileColor);
        }
      }
    }

    // 飞檐翘角 (4个拐角的优美曲面起翘)
    if (flyingEaves) {
      const cornerLength = Math.min(5, Math.floor(Math.min(w, d) / 3));
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          const cornerX = cx + sx * w;
          const cornerZ = cz + sz * d;
          // 角尖向外向上延伸
          this.set(cornerX + sx * 1, eaveY + 1, cornerZ + sz * 1, ridgeColor);
          this.set(cornerX + sx * 2, eaveY + 2, cornerZ + sz * 2, ridgeColor);
          // 悬挂风铃/小灯笼
          this.set(cornerX + sx * 2, eaveY + 1, cornerZ + sz * 2, PALETTE.GOLD_ACCENT);

          // 渐变抬升两翼
          for (let step = 1; step <= cornerLength; step++) {
            const lift = Math.floor((cornerLength - step + 1) * 0.4);
            if (lift > 0) {
              this.set(cornerX - sx * step, eaveY + lift, cornerZ, tileColor);
              this.set(cornerX, eaveY + lift, cornerZ - sz * step, tileColor);
            }
          }
        }
      }
    }

    // 2. 四坡屋面梯次向上递缩
    let curW = w - 1;
    let curD = d - 1;
    let y = eaveY + 1;

    while (curW > 2 && curD > 1 && y <= eaveY + height) {
      for (let dx = -curW; dx <= curW; dx++) {
        for (let dz = -curD; dz <= curD; dz++) {
          const isOuterEdge = Math.abs(dx) === curW || Math.abs(dz) === curD;
          // 戗脊与垂脊 (Ridge lines)
          const isHipRidge =
            Math.abs(Math.abs(dx) / curW - Math.abs(dz) / curD) < 0.15 &&
            (Math.abs(dx) === curW || Math.abs(dz) === curD);

          if (isOuterEdge) {
            this.set(
              cx + dx,
              y,
              cz + dz,
              isHipRidge ? ridgeColor : tileColor
            );
          }
        }
      }
      curW -= 1;
      curD -= 1;
      y += 1;
    }

    // 3. 正脊 (Main Horizontal Ridge at Peak) & 脊兽 (Chiwen / Ridge Beasts)
    const ridgeY = y;
    for (let dx = -curW; dx <= curW; dx++) {
      for (let dz = -curD; dz <= curD; dz++) {
        this.set(cx + dx, ridgeY, cz + dz, ridgeColor);
        // 增厚正脊两层
        this.set(cx + dx, ridgeY + 1, cz + dz, ridgeColor);
      }
    }

    // 正脊两端鸱吻 (Majestic Dragon Ridge Beasts)
    if (curW > 0) {
      this.box(cx - curW - 1, ridgeY + 1, cz - 1, cx - curW, ridgeY + 3, cz + 1, ridgeColor);
      this.box(cx + curW, ridgeY + 1, cz - 1, cx + curW + 1, ridgeY + 3, cz + 1, ridgeColor);
    }
  }

  // 歇山顶 (Hip-and-Gable Roof with Mountain Flower Gables 歇山与山花)
  roofXieshan({
    cx,
    cz,
    baseY,
    halfWidth,
    halfDepth,
    height,
    tileColor = PALETTE.ROOF_GREEN_MAIN,
    ridgeColor = PALETTE.ROOF_RIDGE_GOLD,
    gableInset = 3,
  }) {
    const w = halfWidth;
    const d = halfDepth;
    const eaveY = baseY;

    // 1. 下层飞檐出挑
    for (let dx = -w; dx <= w; dx++) {
      for (let dz = -d; dz <= d; dz++) {
        if (Math.abs(dx) >= w - 1 || Math.abs(dz) >= d - 1) {
          this.set(cx + dx, eaveY, cz + dz, tileColor);
        }
      }
    }

    // 四角翘起
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const cornerX = cx + sx * w;
        const cornerZ = cz + sz * d;
        this.set(cornerX + sx, eaveY + 1, cornerZ + sz, ridgeColor);
        this.set(cornerX + sx * 2, eaveY + 2, cornerZ + sz * 2, ridgeColor);
      }
    }

    // 2. 歇山坡面过渡
    let y = eaveY + 1;
    let curW = w - 1;
    let curD = d - 1;
    const gableY = eaveY + Math.floor(height * 0.45);

    while (curD > 1 && y <= eaveY + height) {
      const isAboveGable = y >= gableY;

      for (let dx = -curW; dx <= curW; dx++) {
        for (let dz = -curD; dz <= curD; dz++) {
          if (isAboveGable) {
            // 歇山的山墙面 (南北为坡，东西为垂直歇山山花)
            const isSlopeZ = Math.abs(dz) === curD;
            const isGableWall = Math.abs(dx) === curW;

            if (isSlopeZ) {
              this.set(cx + dx, y, cz + dz, tileColor);
            } else if (isGableWall) {
              // 山花博风板与透空木格
              this.set(cx + dx, y, cz + dz, PALETTE.WOOD_DARK);
            }
          } else {
            // 下方为四坡围拢
            if (Math.abs(dx) === curW || Math.abs(dz) === curD) {
              this.set(cx + dx, y, cz + dz, tileColor);
            }
          }
        }
      }

      curD -= 1;
      if (!isAboveGable) {
        curW -= 1;
      }
      y++;
    }

    // 3. 歇山正脊
    const topY = y;
    for (let dx = -curW; dx <= curW; dx++) {
      this.set(cx + dx, topY, cz, ridgeColor);
      this.set(cx + dx, topY + 1, cz, ridgeColor);
    }
    // 垂脊饰兽
    this.set(cx - curW, topY + 2, cz, ridgeColor);
    this.set(cx + curW, topY + 2, cz, ridgeColor);
  }

  // 攒尖顶 / 宝塔多边形屋顶 (Pyramidal / Pagoda Roof)
  roofZanjian({
    cx,
    cz,
    baseY,
    radius,
    height,
    tileColor = PALETTE.ROOF_GOLD_MAIN,
    ridgeColor = PALETTE.ROOF_RIDGE_GOLD,
    flyingEaves = true,
  }) {
    const eaveY = baseY;
    const r = radius;

    // 出檐
    for (let dx = -r; dx <= r; dx++) {
      for (let dz = -r; dz <= r; dz++) {
        const dist = Math.max(Math.abs(dx), Math.abs(dz));
        if (dist === r) {
          this.set(cx + dx, eaveY, cz + dz, tileColor);
        }
      }
    }

    // 四角翘角
    if (flyingEaves) {
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          this.set(cx + sx * (r + 1), eaveY + 1, cz + sz * (r + 1), ridgeColor);
          this.set(cx + sx * (r + 2), eaveY + 2, cz + sz * (r + 2), ridgeColor);
        }
      }
    }

    // 逐级收束至塔心
    let curR = r - 1;
    let y = eaveY + 1;
    while (curR >= 1 && y <= eaveY + height) {
      for (let dx = -curR; dx <= curR; dx++) {
        for (let dz = -curR; dz <= curR; dz++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dz));
          const isCorner = Math.abs(dx) === curR && Math.abs(dz) === curR;
          if (dist === curR) {
            this.set(cx + dx, y, cz + dz, isCorner ? ridgeColor : tileColor);
          }
        }
      }
      curR--;
      y++;
    }

    return y; // 返回顶端高度用于安装宝顶
  }

  // 构建古松柏 (Ancient Chinese Pines)
  buildPineTree(cx, baseY, cz, height = 12) {
    // 苍劲弯曲树干 (Dark pine trunk with organic bends)
    let curX = cx;
    let curZ = cz;
    for (let y = baseY; y < baseY + height; y++) {
      this.box(curX, y, curZ, curX + 1, y, curZ + 1, PALETTE.PINE_TRUNK);
      if (y === baseY + 4) curX += 1;
      if (y === baseY + 8) curZ += 1;
    }

    // 层次分明的松针层 (Tiered flat foliage pads)
    const foliageTiers = [
      { yOffset: Math.floor(height * 0.5), r: 4, ox: 2, oz: 1 },
      { yOffset: Math.floor(height * 0.75), r: 5, ox: -1, oz: 2 },
      { yOffset: height, r: 4, ox: 1, oz: 1 },
      { yOffset: height + 2, r: 2, ox: 0, oz: 1 },
    ];

    for (const tier of foliageTiers) {
      const ty = baseY + tier.yOffset;
      const tx = curX + tier.ox;
      const tz = curZ + tier.oz;
      const r = tier.r;

      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          const d2 = dx * dx + dz * dz;
          if (d2 <= r * r) {
            const isLight = (dx + dz + ty) % 3 === 0;
            this.set(
              tx + dx,
              ty,
              tz + dz,
              isLight ? PALETTE.PINE_NEEDLE_LIGHT : PALETTE.PINE_NEEDLE
            );
            if (d2 <= (r - 1) * (r - 1)) {
              this.set(tx + dx, ty + 1, tz + dz, PALETTE.PINE_NEEDLE);
            }
          }
        }
      }
    }
  }

  // 构建石狮 (Stone Guardian Lion on Plinth)
  buildStoneLion(cx, baseY, cz) {
    // 须弥底座
    this.box(cx - 1, baseY, cz - 1, cx + 1, baseY, cz + 1, PALETTE.MARBLE_DARK);
    // 狮身躯干
    this.box(cx - 1, baseY + 1, cz - 1, cx + 1, baseY + 3, cz, PALETTE.STONE_LION);
    // 狮头与鬃毛
    this.box(cx - 1, baseY + 4, cz - 1, cx + 1, baseY + 5, cz + 1, PALETTE.STONE_LION);
    // 威武前爪
    this.set(cx - 1, baseY + 1, cz + 1, PALETTE.STONE_LION);
    this.set(cx + 1, baseY + 1, cz + 1, PALETTE.STONE_LION);
  }

  // 构建青铜大香炉 (Bronze Incense Burner)
  buildIncenseBurner(cx, baseY, cz) {
    // 石质须弥基座
    this.box(cx - 3, baseY, cz - 3, cx + 3, baseY, cz + 3, PALETTE.MARBLE_WHITE);
    this.box(cx - 2, baseY + 1, cz - 2, cx + 2, baseY + 1, cz + 2, PALETTE.MARBLE_LIGHT);
    // 鼎足三足
    this.box(cx - 2, baseY + 2, cz - 2, cx - 1, baseY + 3, cz - 2, PALETTE.BRONZE_DARK);
    this.box(cx + 1, baseY + 2, cz - 2, cx + 2, baseY + 3, cz - 2, PALETTE.BRONZE_DARK);
    this.box(cx, baseY + 2, cz + 2, cx, baseY + 3, cz + 2, PALETTE.BRONZE_DARK);
    // 鼎身 (四方或圆形大鼎)
    this.box(cx - 2, baseY + 4, cz - 2, cx + 2, baseY + 6, cz + 2, PALETTE.BRONZE_DARK);
    this.box(cx - 1, baseY + 6, cz - 1, cx + 1, baseY + 6, cz + 1, PALETTE.INCENSE_ASH);
    // 鼎耳 (两双直耳)
    this.box(cx - 3, baseY + 6, cz, cx - 3, baseY + 8, cz, PALETTE.BRONZE_LIGHT);
    this.box(cx + 3, baseY + 6, cz, cx + 3, baseY + 8, cz, PALETTE.BRONZE_LIGHT);
    // 缕缕青烟 (透光体素)
    this.set(cx, baseY + 7, cz, PALETTE.MARBLE_WHITE, 'glow');
    this.set(cx, baseY + 8, cz, PALETTE.MARBLE_WHITE, 'glow');
    this.set(cx + 1, baseY + 9, cz, PALETTE.MARBLE_WHITE, 'glow');
    this.set(cx + 1, baseY + 10, cz + 1, PALETTE.MARBLE_WHITE, 'glow');
  }

  /**
   * 将所有记录的体素生成极高渲染效率的 InstancedMesh
   */
  generateSceneGroup() {
    const group = new THREE.Group();
    group.name = 'VoxelWorld';

    const solidList = [];
    const glowList = [];
    const waterList = [];

    for (const v of this.voxels.values()) {
      if (v.type === 'glow') {
        glowList.push(v);
      } else if (v.type === 'water') {
        waterList.push(v);
      } else {
        solidList.push(v);
      }
    }

    const boxGeo = new THREE.BoxGeometry(1, 1, 1);

    // 1. 实心标准几何体素 (接受与投射阴影，低粗糙度呈现体素方块清脆质感)
    if (solidList.length > 0) {
      const solidMat = new THREE.MeshStandardMaterial({
        roughness: 0.75,
        metalness: 0.15,
        flatShading: true,
      });

      const solidMesh = new THREE.InstancedMesh(boxGeo, solidMat, solidList.length);
      solidMesh.castShadow = true;
      solidMesh.receiveShadow = true;
      solidMesh.name = 'SolidVoxels';

      const dummy = new THREE.Object3D();
      const color = new THREE.Color();

      for (let i = 0; i < solidList.length; i++) {
        const v = solidList[i];
        dummy.position.set(v.x, v.y, v.z);
        dummy.updateMatrix();
        solidMesh.setMatrixAt(i, dummy.matrix);
        color.setHex(v.color);
        solidMesh.setColorAt(i, color);
      }

      solidMesh.instanceMatrix.needsUpdate = true;
      if (solidMesh.instanceColor) solidMesh.instanceColor.needsUpdate = true;
      group.add(solidMesh);
    }

    // 2. 发光体素 (灯笼、烛火、神道长明灯)
    if (glowList.length > 0) {
      const glowMat = new THREE.MeshStandardMaterial({
        roughness: 0.3,
        metalness: 0.1,
        emissive: new THREE.Color(0xffaa33),
        emissiveIntensity: 0.85,
        flatShading: true,
      });

      const glowMesh = new THREE.InstancedMesh(boxGeo, glowMat, glowList.length);
      glowMesh.name = 'GlowVoxels';

      const dummy = new THREE.Object3D();
      const color = new THREE.Color();

      for (let i = 0; i < glowList.length; i++) {
        const v = glowList[i];
        dummy.position.set(v.x, v.y, v.z);
        dummy.updateMatrix();
        glowMesh.setMatrixAt(i, dummy.matrix);
        color.setHex(v.color);
        glowMesh.setColorAt(i, color);
      }

      glowMesh.instanceMatrix.needsUpdate = true;
      if (glowMesh.instanceColor) glowMesh.instanceColor.needsUpdate = true;
      group.add(glowMesh);
    }

    // 3. 水体体素 (碧水、莲池，带微透明度)
    if (waterList.length > 0) {
      const waterMat = new THREE.MeshStandardMaterial({
        roughness: 0.1,
        metalness: 0.2,
        color: PALETTE.WATER_SURFACE,
        transparent: true,
        opacity: 0.85,
        flatShading: true,
      });

      const waterMesh = new THREE.InstancedMesh(boxGeo, waterMat, waterList.length);
      waterMesh.receiveShadow = true;
      waterMesh.name = 'WaterVoxels';

      const dummy = new THREE.Object3D();
      const color = new THREE.Color();

      for (let i = 0; i < waterList.length; i++) {
        const v = waterList[i];
        dummy.position.set(v.x, v.y, v.z);
        dummy.updateMatrix();
        waterMesh.setMatrixAt(i, dummy.matrix);
        color.setHex(v.color);
        waterMesh.setColorAt(i, color);
      }

      waterMesh.instanceMatrix.needsUpdate = true;
      if (waterMesh.instanceColor) waterMesh.instanceColor.needsUpdate = true;
      group.add(waterMesh);
    }

    return {
      group,
      totalCount: this.voxels.size,
      lanternPoints: this.lanternPoints,
    };
  }
}
