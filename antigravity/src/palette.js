/**
 * 中国古典建筑体素色彩库 (Voxel Classical Chinese Architecture Palette)
 * 严格遵照中国传统官式与寺观建筑色彩规制：
 * - 皇城金华 / 琉璃黄：主殿屋面
 * - 青碧黛绿 / 琉璃绿：配殿、游廊屋顶
 * - 苍灰墨陶 / 青瓦：山门、院墙瓦当
 * - 朱砂赤红 / 宫墙红：主柱、山墙、门扉
 * - 汉白玉石 / 须弥座：台基、栏板、望柱
 * - 墨漆暗木 / 枋木斗拱：额枋、斗拱构件
 * - 泥金赤金 / 额匾金雕：匾额、宝刹、脊兽
 * - 苍翠松柏 / 碧水荷花：庭院园林
 */

export const PALETTE = {
  // 琉璃金顶 (Main Hall Gold Tiles)
  ROOF_GOLD_MAIN: 0xdf9b1c,
  ROOF_GOLD_LIGHT: 0xf3b638,
  ROOF_GOLD_DARK: 0xb5740d,
  ROOF_RIDGE_GOLD: 0xffcc33,

  // 翡翠碧瓦 (Side Hall / Pavilion Emerald Tiles)
  ROOF_GREEN_MAIN: 0x246b43,
  ROOF_GREEN_LIGHT: 0x328f5b,
  ROOF_GREEN_DARK: 0x184d2f,

  // 黛黑灰瓦 (Gate / Wall Grey Clay Tiles)
  ROOF_GREY_MAIN: 0x485156,
  ROOF_GREY_LIGHT: 0x5d686f,
  ROOF_GREY_DARK: 0x333b40,

  // 宫墙朱红 (Imperial Vermilion & Red Columns)
  RED_WALL: 0xad2b26,
  RED_WALL_DARK: 0x8a1e1b,
  RED_WALL_LIGHT: 0xc43d38,
  RED_PILLAR: 0x93201d,
  RED_PILLAR_BASE: 0x5a1412,

  // 汉白玉台基与石栏 (White Marble Plinths & Balustrades)
  MARBLE_WHITE: 0xf5f3ee,
  MARBLE_LIGHT: 0xe8e5dc,
  MARBLE_MID: 0xd4cfc2,
  MARBLE_DARK: 0xbab3a3,

  // 额枋、斗拱与大木作 (Dark Timber & Dougong Brackets)
  WOOD_DARK: 0x3a2318,
  WOOD_MID: 0x4f3322,
  WOOD_BEAM: 0x2c180e,
  DOUGONG_CYAN: 0x2d6872,
  DOUGONG_GOLD: 0xd1a13d,

  // 门窗与金饰 (Doors, Windows & Gold Accents)
  GOLD_TRIM: 0xf5c242,
  GOLD_ACCENT: 0xffd700,
  PLAQUE_NAVY: 0x1a2e4c,
  PLAQUE_GOLD_TEXT: 0xffea78,
  WINDOW_LATTICE: 0x381e13,
  WINDOW_PAPER: 0xfbf8e6,

  // 铺地石砖与石板阶梯 (Courtyard Jinzhuan & Paving Bricks)
  PAVING_GREY: 0x848a90,
  PAVING_LIGHT: 0x9fa6ac,
  PAVING_DARK: 0x697075,
  PAVING_BORDER: 0x52595e,
  SPIRIT_ROAD: 0xb5b9be, // 御路雕石

  // 园林植物与草坪 (Garden Pines & Grass)
  GRASS_BASE: 0x437338,
  GRASS_LIGHT: 0x538d45,
  GRASS_DARK: 0x32592a,
  PINE_NEEDLE: 0x1d472c,
  PINE_NEEDLE_LIGHT: 0x275e3b,
  PINE_TRUNK: 0x3b271d,

  // 水体与荷塘 (Lotus Pond & Water)
  WATER_SURFACE: 0x306982,
  WATER_DEEP: 0x1d4b60,
  LOTUS_LEAF: 0x2e7d32,
  LOTUS_FLOWER: 0xeb4d4b,

  // 铜鼎香炉与石狮 (Bronze Incense Burner & Stone Lion)
  BRONZE_DARK: 0x38413b,
  BRONZE_LIGHT: 0x526058,
  STONE_LION: 0x9e998e,
  INCENSE_ASH: 0xd5d0c7,

  // 发光构件：红灯笼与烛光 (Lantern Glow & Emissive Materials)
  LANTERN_RED: 0xff3b30,
  LANTERN_GLOW: 0xff7b25,
  LANTERN_TASSEL: 0xffcc00,
};
