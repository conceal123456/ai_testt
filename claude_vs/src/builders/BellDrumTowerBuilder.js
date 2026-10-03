import { PALETTE } from '../voxel/Palette.js';
import { VoxelShapes } from '../voxel/VoxelShapes.js';

/**
 * Bell and Drum Tower Builder (晨钟暮鼓 - 钟楼与鼓楼)
 * Symmetrically placed in the front courtyard ("东钟西鼓"):
 * Two-tier pavilion structure, open upper chamber housing the
 * Great Bronze Bell (钟楼) or Great Drum (鼓楼), double flying eaves.
 */
export class BellDrumTowerBuilder {
  static build(world, { cx, cz = 24, type = 'bell', groundY = 0 }) {
    const towerW = 7;
    const towerD = 7;
    const podiumH = 2;

    // 1. Raised Stone Base
    world.fillBox(cx - towerW, groundY, cz - towerD, cx + towerW, groundY + podiumH - 1, cz + towerD, PALETTE.MARBLE_SHADOW);
    world.fillBox(cx - towerW, groundY + podiumH, cz - towerD, cx + towerW, groundY + podiumH, cz + towerD, PALETTE.ROAD_PAVER);

    const baseTerraceY = groundY + podiumH;

    // Base balustrades
    VoxelShapes.buildBalustrade(world, {
      x1: cx - towerW + 1, z1: cz - towerD + 1,
      x2: cx + towerW - 1, z2: cz - towerD + 1,
      y: baseTerraceY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx - towerW + 1, z1: cz + towerD - 1,
      x2: cx - 2, z2: cz + towerD - 1,
      y: baseTerraceY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx + 2, z1: cz + towerD - 1,
      x2: cx + towerW - 1, z2: cz + towerD - 1,
      y: baseTerraceY + 1
    });

    // Front stone steps
    VoxelShapes.buildStaircaseWithCarvedRamp(world, {
      cx,
      startZ: cz + towerD,
      endZ: cz + towerD + 3,
      minY: groundY,
      maxY: baseTerraceY,
      totalWidth: 6,
      rampWidth: 0
    });

    // 2. Level 1 - Enclosed Vermilion Lower Chamber
    const lvl1BaseY = baseTerraceY + 1;
    const lvl1H = 6;
    const lvl1CeilY = lvl1BaseY + lvl1H;

    world.fillHollowBox(
      cx - towerW + 1, lvl1BaseY, cz - towerD + 1,
      cx + towerW - 1, lvl1CeilY, cz + towerD - 1,
      PALETTE.WALL_RED,
      1
    );

    // Arched portal doorway facing central courtyard
    const doorFacingZ = cz - towerD + 1;
    for (let x = cx - 1; x <= cx + 1; x++) {
      for (let y = lvl1BaseY; y <= lvl1BaseY + 4; y++) {
        world.delete(x, y, cz + towerD - 1);
        world.delete(x, y, cz - towerD + 1);
      }
    }

    // Lower Eave (下层飞檐)
    VoxelShapes.buildDougongLayer(world, {
      minX: cx - towerW,
      maxX: cx + towerW,
      minZ: cz - towerD,
      maxZ: cz + towerD,
      y: lvl1CeilY,
      step: 2
    });

    VoxelShapes.buildCurvedRoof(world, {
      cx,
      cz,
      halfW: towerW + 1,
      halfD: towerD + 1,
      baseY: lvl1CeilY + 1,
      height: 2,
      roofColor: PALETTE.ROOF_GREY,
      ridgeColor: PALETTE.ROOF_GREY_LIGHT,
      ridgeBeastColor: PALETTE.RIDGE_BEAST,
      eaveOverhang: 1,
      upturn: 1,
      roofType: 'zanjian'
    });

    // 3. Level 2 - Open Pavilion Chamber (平座与上层敞阁)
    const lvl2BaseY = lvl1CeilY + 3;
    const lvl2W = 5;
    const lvl2D = 5;
    const lvl2H = 6;
    const lvl2CeilY = lvl2BaseY + lvl2H;

    // Balcony railing around level 2
    VoxelShapes.buildBalustrade(world, {
      x1: cx - lvl2W - 1, z1: cz - lvl2D - 1,
      x2: cx + lvl2W + 1, z2: cz - lvl2D - 1,
      y: lvl2BaseY
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx - lvl2W - 1, z1: cz + lvl2D + 1,
      x2: cx + lvl2W + 1, z2: cz + lvl2D + 1,
      y: lvl2BaseY
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx - lvl2W - 1, z1: cz - lvl2D - 1,
      x2: cx - lvl2W - 1, z2: cz + lvl2D + 1,
      y: lvl2BaseY
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx + lvl2W + 1, z1: cz - lvl2D - 1,
      x2: cx + lvl2W + 1, z2: cz + lvl2D + 1,
      y: lvl2BaseY
    });

    // 4 Corner Pillars
    const colCoords = [
      [cx - lvl2W, cz - lvl2D],
      [cx + lvl2W, cz - lvl2D],
      [cx - lvl2W, cz + lvl2D],
      [cx + lvl2W, cz + lvl2D]
    ];
    for (const [px, pz] of colCoords) {
      for (let y = lvl2BaseY; y < lvl2CeilY; y++) {
        world.set(px, y, pz, PALETTE.PILLAR_RED);
      }
      world.set(px, lvl2CeilY, pz, PALETTE.WOOD_DARK);
    }

    // 4. Inside the Chamber: Great Bell or Great Drum
    if (type === 'bell') {
      // Great Antique Bronze Bell (大铜钟)
      // Hanging beam
      world.fillBox(cx - 2, lvl2CeilY - 1, cz, cx + 2, lvl2CeilY - 1, cz, PALETTE.WOOD_DARK);
      // Bell crown and body
      world.set(cx, lvl2CeilY - 2, cz, PALETTE.BRONZE_GOLD);
      world.fillBox(cx - 1, lvl2CeilY - 4, cz - 1, cx + 1, lvl2CeilY - 3, cz + 1, PALETTE.BRONZE_PATINA);
      world.fillBox(cx - 2, lvl2CeilY - 5, cz - 2, cx + 2, lvl2CeilY - 5, cz + 2, PALETTE.BRONZE_PATINA);
      // Bell clapper
      world.set(cx, lvl2CeilY - 6, cz, PALETTE.BRONZE_DARK);
    } else {
      // Great Red Ceremony Drum (大红面皮鼓)
      // Drum stand
      world.set(cx - 2, lvl2BaseY + 1, cz - 1, PALETTE.WOOD_DARK);
      world.set(cx + 2, lvl2BaseY + 1, cz - 1, PALETTE.WOOD_DARK);
      world.set(cx - 2, lvl2BaseY + 1, cz + 1, PALETTE.WOOD_DARK);
      world.set(cx + 2, lvl2BaseY + 1, cz + 1, PALETTE.WOOD_DARK);
      // Drum cylinder
      world.fillBox(cx - 2, lvl2BaseY + 2, cz - 2, cx + 2, lvl2BaseY + 5, cz + 2, PALETTE.WALL_RED);
      // Drum white rawhide skins on front and back
      world.fillBox(cx - 1, lvl2BaseY + 3, cz - 2, cx + 1, lvl2BaseY + 4, cz - 2, PALETTE.WINDOW_PAPER);
      world.fillBox(cx - 1, lvl2BaseY + 3, cz + 2, cx + 1, lvl2BaseY + 4, cz + 2, PALETTE.WINDOW_PAPER);
    }

    // 5. Upper Dougong & Zanjian Pyramidal Roof
    VoxelShapes.buildDougongLayer(world, {
      minX: cx - lvl2W,
      maxX: cx + lvl2W,
      minZ: cz - lvl2D,
      maxZ: cz + lvl2D,
      y: lvl2CeilY,
      step: 2
    });

    VoxelShapes.buildCurvedRoof(world, {
      cx,
      cz,
      halfW: lvl2W + 2,
      halfD: lvl2D + 2,
      baseY: lvl2CeilY + 1,
      height: 4,
      roofColor: (type === 'bell' ? PALETTE.ROOF_GREY : PALETTE.ROOF_CYAN),
      ridgeColor: PALETTE.ROOF_GREY_LIGHT,
      ridgeBeastColor: PALETTE.RIDGE_BEAST,
      eaveOverhang: 2,
      upturn: 2,
      roofType: 'zanjian'
    });

    // Hanging lanterns at 4 corners
    const upperEaveR = lvl2W + 3;
    world.set(cx - upperEaveR, lvl2CeilY, cz - upperEaveR, PALETTE.LANTERN_GOLD);
    world.set(cx - upperEaveR, lvl2CeilY - 1, cz - upperEaveR, PALETTE.LANTERN_RED, 'emissive');
    world.set(cx + upperEaveR, lvl2CeilY, cz + upperEaveR, PALETTE.LANTERN_GOLD);
    world.set(cx + upperEaveR, lvl2CeilY - 1, cz + upperEaveR, PALETTE.LANTERN_RED, 'emissive');
  }
}
