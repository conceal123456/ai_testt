import * as THREE from 'three';

/**
 * Classical Chinese Architectural Palette
 * Authentically calibrated to Ming/Qing imperial & Buddhist temple aesthetics.
 */
export const PALETTE = {
  // Roof Glazed Golden Tiles (主殿/宝塔金黄色琉璃瓦)
  ROOF_GOLD: new THREE.Color('#d89e28'),
  ROOF_GOLD_DARK: new THREE.Color('#b37a18'),
  ROOF_GOLD_LIGHT: new THREE.Color('#ecc048'),
  ROOF_GOLD_RIDGE: new THREE.Color('#f0a51e'),
  RIDGE_BEAST: new THREE.Color('#f5b025'),

  // Roof Cyan / Jade Tiles (配殿青绿色琉璃瓦)
  ROOF_CYAN: new THREE.Color('#286055'),
  ROOF_CYAN_DARK: new THREE.Color('#1b463e'),
  ROOF_CYAN_LIGHT: new THREE.Color('#387a6d'),
  ROOF_CYAN_RIDGE: new THREE.Color('#1e4f45'),

  // Dark Grey Roof Tiles (山门与院墙灰瓦)
  ROOF_GREY: new THREE.Color('#464c53'),
  ROOF_GREY_DARK: new THREE.Color('#363b40'),
  ROOF_GREY_LIGHT: new THREE.Color('#585f67'),

  // Vermilion Walls & Columns (朱砂红墙与立柱)
  WALL_RED: new THREE.Color('#a82d2a'),
  WALL_RED_DARK: new THREE.Color('#861f1c'),
  WALL_RED_LIGHT: new THREE.Color('#be3834'),
  PILLAR_RED: new THREE.Color('#942522'),
  PILLAR_BASE: new THREE.Color('#5e636b'),

  // Timber Framing & Dougong Brackets (斗拱、梁枋、暗木构)
  WOOD_DARK: new THREE.Color('#3e2415'),
  WOOD_MED: new THREE.Color('#583420'),
  WOOD_LIGHT: new THREE.Color('#7a4b31'),
  DOUGONG_GOLD: new THREE.Color('#d4af37'),
  DOUGONG_RED: new THREE.Color('#a02826'),
  DOUGONG_CYAN: new THREE.Color('#255850'),

  // Windows & Doors (隔扇门、直棂窗)
  WINDOW_FRAME: new THREE.Color('#64271e'),
  WINDOW_PAPER: new THREE.Color('#fff2d4'),
  WINDOW_GLOW: new THREE.Color('#ffe299'), // Emissive warm glow
  DOOR_RED: new THREE.Color('#8b2220'),
  DOOR_NAILS: new THREE.Color('#e0a838'), // Golden door studs

  // Plaques (匾额)
  PLAQUE_BG: new THREE.Color('#162d47'), // Deep royal blue lacquer
  PLAQUE_BORDER: new THREE.Color('#d4af37'), // Gold leaf frame
  PLAQUE_TEXT: new THREE.Color('#f9d76c'),

  // White Marble Terrace & Steps (汉白玉须弥座、栏杆、御路)
  MARBLE_WHITE: new THREE.Color('#eee9e0'),
  MARBLE_SHADOW: new THREE.Color('#d7d1c6'),
  MARBLE_DARK: new THREE.Color('#c2bcb0'),
  DRAGON_STONE: new THREE.Color('#a8a49c'), // Imperial dragon carved ramp

  // Courtyard & Roads (铺装、青石板御道、庭院碎石)
  ROAD_PAVER: new THREE.Color('#6e737c'),
  ROAD_PAVER_LIGHT: new THREE.Color('#858c96'),
  ROAD_BORDER: new THREE.Color('#9ca3ae'),
  COURTYARD_GROUND: new THREE.Color('#7a7e85'),
  COURTYARD_GRAVEL: new THREE.Color('#b5b0a6'),

  // Nature (古松苍柏、草坪、翠竹)
  GRASS_BASE: new THREE.Color('#547837'),
  GRASS_LIGHT: new THREE.Color('#689045'),
  PINE_NEEDLE: new THREE.Color('#193d25'),
  PINE_NEEDLE_LIGHT: new THREE.Color('#265737'),
  PINE_TRUNK: new THREE.Color('#432b1d'),
  BAMBOO_STALK: new THREE.Color('#4e8036'),
  BAMBOO_LEAF: new THREE.Color('#6ba347'),

  // Water & Lotus (水系与睡莲)
  WATER_SURFACE: new THREE.Color('#31697a'),
  LOTUS_LEAF: new THREE.Color('#2b5d38'),
  LOTUS_FLOWER: new THREE.Color('#e56f94'),

  // Bronze & Stoneware Details (青铜大香炉、石狮、石灯)
  BRONZE_DARK: new THREE.Color('#38453d'),
  BRONZE_PATINA: new THREE.Color('#466355'),
  BRONZE_GOLD: new THREE.Color('#8a763d'),
  STONE_LION: new THREE.Color('#bbb6ab'),
  STONE_LANTERN: new THREE.Color('#b0aba0'),

  // Festive Lanterns & Flame Emissives (大红灯笼与暖光)
  LANTERN_RED: new THREE.Color('#e62626'),
  LANTERN_GLOW: new THREE.Color('#ff8c2b'),
  LANTERN_GOLD: new THREE.Color('#f0c436'),
  INCENSE_EMBER: new THREE.Color('#ff4d12'),
  FIRE_GLOW: new THREE.Color('#ffaa33')
};
