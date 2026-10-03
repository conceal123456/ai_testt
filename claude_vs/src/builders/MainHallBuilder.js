import { PALETTE } from '../voxel/Palette.js';
import { VoxelShapes } from '../voxel/VoxelShapes.js';

/**
 * Main Grand Hall Builder (大雄宝殿 / 太和殿)
 * The focal centerpiece of the complex: double eaves, imperial gold tiles,
 * three-tier marble podium, dougong brackets, vermilion columns.
 */
export class MainHallBuilder {
  static build(world, { cx = 0, cz = -15, groundY = 0 }) {
    // 1. THREE-TIER MARBLE PODIUM (三层须弥座汉白玉台基)
    const podiumW = 20; // total width = 41
    const podiumD = 16; // total depth = 33
    const podiumH = 4;

    // Base podium stone
    world.fillBox(cx - podiumW, groundY, cz - podiumD, cx + podiumW, groundY + podiumH - 1, cz + podiumD, PALETTE.MARBLE_SHADOW);
    // Top surface marble
    world.fillBox(cx - podiumW, groundY + podiumH, cz - podiumD, cx + podiumW, groundY + podiumH, cz + podiumD, PALETTE.MARBLE_WHITE);

    const terraceY = groundY + podiumH;

    // Balustrades around the podium perimeter
    VoxelShapes.buildBalustrade(world, {
      x1: cx - podiumW + 1, z1: cz - podiumD + 1,
      x2: cx + podiumW - 1, z2: cz - podiumD + 1,
      y: terraceY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx - podiumW + 1, z1: cz + podiumD - 1,
      x2: cx - 8, z2: cz + podiumD - 1,
      y: terraceY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx + 8, z1: cz + podiumD - 1,
      x2: cx + podiumW - 1, z2: cz + podiumD - 1,
      y: terraceY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx - podiumW + 1, z1: cz - podiumD + 1,
      x2: cx - podiumW + 1, z2: cz + podiumD - 1,
      y: terraceY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx + podiumW - 1, z1: cz - podiumD + 1,
      x2: cx + podiumW - 1, z2: cz + podiumD - 1,
      y: terraceY + 1
    });

    // Grand front staircase with central dragon carving (丹墀御路)
    VoxelShapes.buildStaircaseWithCarvedRamp(world, {
      cx,
      startZ: cz + podiumD,
      endZ: cz + podiumD + 6,
      minY: groundY,
      maxY: terraceY,
      totalWidth: 16,
      rampWidth: 4
    });

    // 2. MAIN HALL BODY WALLS & VERANDA (柱网与围护墙体)
    const hallW = 15;
    const hallD = 11;
    const wallBaseY = terraceY + 1;
    const lowerWallH = 8;
    const lowerCeilY = wallBaseY + lowerWallH;

    // Outer vermilion walls (side & back)
    // North wall (Back)
    world.fillBox(cx - hallW, wallBaseY, cz - hallD, cx + hallW, lowerCeilY, cz - hallD, PALETTE.WALL_RED);
    // East wall (Left)
    world.fillBox(cx - hallW, wallBaseY, cz - hallD, cx - hallW, lowerCeilY, cz + hallD, PALETTE.WALL_RED);
    // West wall (Right)
    world.fillBox(cx + hallW, wallBaseY, cz - hallD, cx + hallW, lowerCeilY, cz + hallD, PALETTE.WALL_RED);

    // Front facade with lattice screen doors (隔扇门与直棂窗)
    VoxelShapes.buildLatticeFacade(world, {
      minX: cx - hallW + 2,
      maxX: cx + hallW - 2,
      y: wallBaseY,
      height: lowerWallH,
      z: cz + hallD,
      doorInterval: 4
    });

    // Peristyle Vermilion Columns (四周檐柱与金柱)
    const columnPositions = [];
    // Front colonnade
    for (let x = cx - hallW; x <= cx + hallW; x += 5) {
      columnPositions.push([x, cz + hallD + 1]);
      columnPositions.push([x, cz - hallD - 1]);
    }
    // Side colonnade
    for (let z = cz - hallD; z <= cz + hallD; z += 5) {
      columnPositions.push([cx - hallW - 1, z]);
      columnPositions.push([cx + hallW + 1, z]);
    }

    VoxelShapes.buildPillars(world, {
      positions: columnPositions,
      minY: wallBaseY,
      maxY: lowerCeilY,
      pillarColor: PALETTE.PILLAR_RED,
      baseColor: PALETTE.PILLAR_BASE
    });

    // 3. LOWER EAVE & DOUGONG (下檐与下层斗拱)
    VoxelShapes.buildDougongLayer(world, {
      minX: cx - hallW - 2,
      maxX: cx + hallW + 2,
      minZ: cz - hallD - 2,
      maxZ: cz + hallD + 2,
      y: lowerCeilY,
      step: 3
    });

    // Lower flying eave (下檐飞檐翘角)
    VoxelShapes.buildCurvedRoof(world, {
      cx,
      cz,
      halfW: hallW + 3,
      halfD: hallD + 3,
      baseY: lowerCeilY + 2,
      height: 3,
      roofColor: PALETTE.ROOF_GOLD,
      ridgeColor: PALETTE.ROOF_GOLD_RIDGE,
      ridgeBeastColor: PALETTE.RIDGE_BEAST,
      eaveOverhang: 2,
      upturn: 2,
      roofType: 'wudian'
    });

    // 4. UPPER MEZZANINE & UPPER DOUGONG (重檐平座与上层柱枋)
    const upperW = 11;
    const upperD = 8;
    const upperBaseY = lowerCeilY + 4;
    const upperWallH = 6;
    const upperCeilY = upperBaseY + upperWallH;

    // Upper walls
    world.fillBox(cx - upperW, upperBaseY, cz - upperD, cx + upperW, upperCeilY, cz + upperD, PALETTE.WALL_RED);

    // Upper front lattice windows
    VoxelShapes.buildLatticeFacade(world, {
      minX: cx - upperW + 2,
      maxX: cx + upperW - 2,
      y: upperBaseY,
      height: upperWallH,
      z: cz + upperD,
      doorInterval: 4
    });

    // Inscribed Grand Plaque (大雄宝殿 / 乾清殿 匾额)
    VoxelShapes.buildPlaque(world, {
      cx,
      y: upperBaseY + 2,
      z: cz + upperD + 1,
      width: 7,
      height: 4
    });

    // Upper Dougong Bracket Layer
    VoxelShapes.buildDougongLayer(world, {
      minX: cx - upperW - 1,
      maxX: cx + upperW + 1,
      minZ: cz - upperD - 1,
      maxZ: cz + upperD + 1,
      y: upperCeilY,
      step: 3
    });

    // 5. UPPER GRAND HIP ROOF (上檐重檐庑殿顶 - 飞檐反宇)
    VoxelShapes.buildCurvedRoof(world, {
      cx,
      cz,
      halfW: upperW + 3,
      halfD: upperD + 3,
      baseY: upperCeilY + 2,
      height: 6,
      roofColor: PALETTE.ROOF_GOLD,
      ridgeColor: PALETTE.ROOF_GOLD_RIDGE,
      ridgeBeastColor: PALETTE.RIDGE_BEAST,
      eaveOverhang: 3,
      upturn: 3,
      roofType: 'wudian'
    });

    // Hanging Palace Lanterns under upper & lower eaves
    const lanternPositions = [
      [cx - hallW - 3, lowerCeilY + 1, cz + hallD + 3],
      [cx + hallW + 3, lowerCeilY + 1, cz + hallD + 3],
      [cx - hallW - 3, lowerCeilY + 1, cz - hallD - 3],
      [cx + hallW + 3, lowerCeilY + 1, cz - hallD - 3],
      // Front veranda entrance lanterns
      [cx - 5, lowerCeilY, cz + hallD + 1],
      [cx + 5, lowerCeilY, cz + hallD + 1],
      // Upper eave corners
      [cx - upperW - 3, upperCeilY + 1, cz + upperD + 3],
      [cx + upperW + 3, upperCeilY + 1, cz + upperD + 3]
    ];

    for (const [lx, ly, lz] of lanternPositions) {
      VoxelShapes.buildLantern(world, { x: lx, y: ly, z: lz });
    }
  }
}
