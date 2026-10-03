import * as THREE from 'three';

/**
 * 中国古典建筑体素调色板与材质定义
 */
export const VoxelType = {
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

// 预定义各体素类型的物理与视觉属性
export const MATERIAL_CONFIGS = {
  [VoxelType.ROOF_GOLD]: {
    color: 0xdf9322,
    roughness: 0.35,
    metalness: 0.15,
  },
  [VoxelType.ROOF_RIDGE]: {
    color: 0x8a4b12,
    roughness: 0.5,
    metalness: 0.1,
  },
  [VoxelType.ROOF_CYAN]: {
    color: 0x2b464a,
    roughness: 0.4,
    metalness: 0.1,
  },
  [VoxelType.ROOF_CYAN_DARK]: {
    color: 0x1b2d30,
    roughness: 0.5,
    metalness: 0.05,
  },
  [VoxelType.WALL_RED]: {
    color: 0x9e2420,
    roughness: 0.7,
    metalness: 0.02,
  },
  [VoxelType.WALL_WOOD]: {
    color: 0x4a1814,
    roughness: 0.65,
    metalness: 0.05,
  },
  [VoxelType.PILLAR_RED]: {
    color: 0x821c17,
    roughness: 0.45,
    metalness: 0.05,
  },
  [VoxelType.DOUGONG_GREEN]: {
    color: 0x1f5c43,
    roughness: 0.55,
    metalness: 0.08,
  },
  [VoxelType.DOUGONG_GOLD]: {
    color: 0xb58032,
    roughness: 0.35,
    metalness: 0.25,
  },
  [VoxelType.STONE_WHITE]: {
    color: 0xe6e7e8,
    roughness: 0.6,
    metalness: 0.05,
  },
  [VoxelType.STONE_ROAD]: {
    color: 0xb8babb,
    roughness: 0.8,
    metalness: 0.02,
  },
  [VoxelType.STONE_BRICK]: {
    color: 0x5a6366,
    roughness: 0.85,
    metalness: 0.02,
  },
  [VoxelType.GOLD_FINIAL]: {
    color: 0xf5bf38,
    roughness: 0.25,
    metalness: 0.7,
  },
  [VoxelType.LANTERN_RED]: {
    color: 0xff2211,
    roughness: 0.3,
    metalness: 0.1,
    emissive: 0xcc1100,
    emissiveIntensity: 0.8,
  },
  [VoxelType.PINE_LEAF]: {
    color: 0x224a2c,
    roughness: 0.75,
    metalness: 0.0,
  },
  [VoxelType.PINE_TRUNK]: {
    color: 0x422d1b,
    roughness: 0.9,
    metalness: 0.0,
  },
  [VoxelType.WATER]: {
    color: 0x367588,
    roughness: 0.15,
    metalness: 0.3,
    opacity: 0.92,
    transparent: true,
  },
  [VoxelType.RAILING_GOLD]: {
    color: 0xd4a034,
    roughness: 0.3,
    metalness: 0.4,
  },
  [VoxelType.LION_STONE]: {
    color: 0x82888a,
    roughness: 0.7,
    metalness: 0.05,
  }
};

/**
 * 创建调色板材质映射表
 */
export function createVoxelMaterials() {
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
