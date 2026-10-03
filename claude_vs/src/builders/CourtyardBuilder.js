import { PALETTE } from '../voxel/Palette.js';
import { VoxelShapes } from '../voxel/VoxelShapes.js';

/**
 * Courtyard, Pathways, Landscape & Enclosure Walls Builder
 * Builds the central spirit way (山门 → 庭院 → 主殿 → 宝塔),
 * courtyard paving, stone bridges, lotus pond, ancient pines,
 * perimeter vermilion walls with tile copings, and stone lanterns.
 */
export class CourtyardBuilder {
  static build(world, { groundY = 0 }) {
    const minX = -56;
    const maxX = 56;
    const minZ = -84;
    const maxZ = 68;

    // 1. GROUND BASE & PAVING SYSTEM (大地面铺装与庭院基底)
    for (let x = minX; x <= maxX; x++) {
      for (let z = minZ; z <= maxZ; z++) {
        const absX = Math.abs(x);

        // A. Central Sacred Spirit Way (中央御道 / 参道): Width 10 along X
        if (absX <= 4) {
          // Central paved flagstones
          const isBorder = (absX === 4);
          const paverColor = isBorder ? PALETTE.ROAD_BORDER :
            ((x + z) % 3 === 0 ? PALETTE.ROAD_PAVER_LIGHT : PALETTE.ROAD_PAVER);
          world.set(x, groundY, z, paverColor);
        }
        // B. Transverse connecting paths (横向道途连接配殿与钟鼓楼)
        // Path to Bell/Drum Towers (z ~ 24)
        else if (z >= 21 && z <= 27 && absX <= 32) {
          const isBorder = (z === 21 || z === 27);
          world.set(x, groundY, z, isBorder ? PALETTE.ROAD_BORDER : PALETTE.ROAD_PAVER);
        }
        // Path to Side Halls (z ~ -15)
        else if (z >= -18 && z <= -12 && absX <= 45) {
          const isBorder = (z === -18 || z === -12);
          world.set(x, groundY, z, isBorder ? PALETTE.ROAD_BORDER : PALETTE.ROAD_PAVER);
        }
        // Plaza around Main Hall steps (z between 0 and 15, absX <= 22)
        else if (z >= 0 && z <= 15 && absX <= 24) {
          world.set(x, groundY, z, (x + z) % 2 === 0 ? PALETTE.COURTYARD_GROUND : PALETTE.ROAD_PAVER);
        }
        // Courtyard plazas around Bell/Drum towers
        else if (z >= 16 && z <= 32 && absX >= 18 && absX <= 34) {
          world.set(x, groundY, z, PALETTE.COURTYARD_GROUND);
        }
        // Courtyard gravel & grass zones
        else {
          // Organic mix of lush grass and fine courtyard gravel
          const noise = Math.sin(x * 0.25) * Math.cos(z * 0.25);
          if (noise > 0.1) {
            world.set(x, groundY, z, (x + z) % 2 === 0 ? PALETTE.GRASS_BASE : PALETTE.GRASS_LIGHT);
          } else {
            world.set(x, groundY, z, PALETTE.COURTYARD_GRAVEL);
          }
        }
      }
    }

    // 2. SERENE LOTUS POND (放生池与荷花水景) - Located in Front East Courtyard
    const pondMinX = -26;
    const pondMaxX = -10;
    const pondMinZ = 36;
    const pondMaxZ = 46;

    // Carve pond basin into the ground
    for (let x = pondMinX; x <= pondMaxX; x++) {
      for (let z = pondMinZ; z <= pondMaxZ; z++) {
        const isBorder = (x === pondMinX || x === pondMaxX || z === pondMinZ || z === pondMaxZ);
        if (isBorder) {
          // Stone curb around pond
          world.set(x, groundY, z, PALETTE.MARBLE_SHADOW);
          world.set(x, groundY + 1, z, PALETTE.MARBLE_WHITE);
        } else {
          // Pond bottom
          world.set(x, groundY - 1, z, PALETTE.STONE_GREY);
          // Translucent water surface
          world.set(x, groundY, z, PALETTE.WATER_SURFACE, 'water');

          // Floating lotus pads & flowers
          if ((x * 7 + z * 13) % 9 === 0) {
            world.set(x, groundY + 1, z, PALETTE.LOTUS_LEAF);
          }
          if ((x * 11 + z * 5) % 17 === 0) {
            world.set(x, groundY + 1, z, PALETTE.LOTUS_FLOWER);
          }
        }
      }
    }

    // Small Arched Stone Bridge across the Lotus Pond (小石拱桥)
    const bridgeZ = Math.round((pondMinZ + pondMaxZ) / 2);
    for (let x = pondMinX; x <= pondMaxX; x++) {
      const distFromCenter = Math.abs(x - (pondMinX + pondMaxX) / 2);
      const bridgeY = groundY + Math.round(Math.max(1, 3 - distFromCenter * 0.3));

      world.set(x, bridgeY, bridgeZ - 1, PALETTE.MARBLE_WHITE); // Balustrade left
      world.set(x, bridgeY, bridgeZ, PALETTE.ROAD_PAVER_LIGHT); // Walkway
      world.set(x, bridgeY, bridgeZ + 1, PALETTE.MARBLE_WHITE); // Balustrade right

      // Under bridge support
      for (let y = groundY; y < bridgeY; y++) {
        if (distFromCenter >= 3) {
          world.set(x, y, bridgeZ, PALETTE.MARBLE_SHADOW);
        }
      }
    }

    // 3. GREAT BRONZE INCENSE BURNER (九龙青铜大香炉)
    // Standing proudly in the central spirit way before the Main Hall
    VoxelShapes.buildIncenseBurner(world, {
      cx: 0,
      cz: 8,
      y: groundY + 1
    });

    // 4. ANCIENT CHINESE PINES (苍松翠柏与古树)
    const pineLocations = [
      // Flanking Mountain Gate entrance
      { x: -16, z: 60, h: 10, s: 2 },
      { x: 16, z: 60, h: 11, s: 3 },
      // Front courtyard pines
      { x: -38, z: 38, h: 12, s: 5 },
      { x: 38, z: 38, h: 12, s: 7 },
      // Beside Bell & Drum towers
      { x: -36, z: 16, h: 13, s: 11 },
      { x: 36, z: 16, h: 13, s: 13 },
      // In Side Hall courtyards
      { x: -26, z: -2, h: 11, s: 17 },
      { x: 26, z: -2, h: 10, s: 19 },
      { x: -26, z: -28, h: 12, s: 23 },
      { x: 26, z: -28, h: 11, s: 29 },
      // Behind Main Hall around the Pagoda
      { x: -18, z: -55, h: 13, s: 31 },
      { x: 18, z: -55, h: 14, s: 37 },
      { x: -18, z: -78, h: 12, s: 41 },
      { x: 18, z: -78, h: 12, s: 43 }
    ];

    for (const p of pineLocations) {
      VoxelShapes.buildPineTree(world, {
        cx: p.x,
        cz: p.z,
        groundY: groundY + 1,
        height: p.h,
        seed: p.s
      });
    }

    // 5. STONE LANTERNS (庭院石灯笼) Lining the Central Axis & Courtyards
    const lanternPositions = [
      // Spirit way lanterns
      { x: -6, z: 48 }, { x: 6, z: 48 },
      { x: -6, z: 34 }, { x: 6, z: 34 },
      { x: -6, z: 18 }, { x: 6, z: 18 },
      { x: -6, z: 2 },  { x: 6, z: 2 },
      // Pathway to Pagoda
      { x: -6, z: -38 }, { x: 6, z: -38 },
      { x: -6, z: -50 }, { x: 6, z: -50 },
      // Flanking the Pagoda entrance
      { x: -8, z: -60 }, { x: 8, z: -60 },
      // Tower courtyard corners
      { x: -18, z: 24 }, { x: 18, z: 24 }
    ];

    for (const lp of lanternPositions) {
      VoxelShapes.buildStoneLantern(world, {
        x: lp.x,
        y: groundY + 1,
        z: lp.z
      });
    }

    // 6. PERIMETER ENCLOSURE WALLS WITH COPING TILES (红墙黛瓦围墙与月亮门)
    const wallH = 5;

    // West Perimeter Wall
    this.buildPerimeterWallSegment(world, minX, minX, minZ, maxZ, groundY, wallH);
    // East Perimeter Wall
    this.buildPerimeterWallSegment(world, maxX, maxX, minZ, maxZ, groundY, wallH);
    // North Back Wall
    this.buildPerimeterWallSegment(world, minX, maxX, minZ, minZ, groundY, wallH);
    // South Front Wall (left and right of mountain gate)
    this.buildPerimeterWallSegment(world, minX, -16, maxZ, maxZ, groundY, wallH);
    this.buildPerimeterWallSegment(world, 16, maxX, maxZ, maxZ, groundY, wallH);
  }

  /**
   * Helper to build a perimeter vermilion wall with dark grey coping tiles
   */
  static buildPerimeterWallSegment(world, x1, x2, z1, z2, groundY, height) {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minZ = Math.min(z1, z2);
    const maxZ = Math.max(z1, z2);

    for (let x = minX; x <= maxX; x++) {
      for (let z = minZ; z <= maxZ; z++) {
        // Foundation stone
        world.set(x, groundY + 1, z, PALETTE.MARBLE_SHADOW);

        // Vermilion wall body
        for (let y = groundY + 2; y <= groundY + height; y++) {
          world.set(x, y, z, PALETTE.WALL_RED);
        }

        // Dark grey coping tiles (青瓦压顶与滴水)
        world.set(x, groundY + height + 1, z, PALETTE.ROOF_GREY_LIGHT);
        world.set(x, groundY + height + 2, z, PALETTE.ROOF_GREY_DARK);
      }
    }
  }
}
