import { PALETTE } from '../voxel/Palette.js';
import { VoxelShapes } from '../voxel/VoxelShapes.js';

/**
 * Side Hall Builder (东配殿与西配殿 - 文殊殿/普贤殿)
 * Symmetrically flanking the Main Hall courtyard, facing inward
 * with green/cyan glazed tiles, vermilion columns, and lattice screens.
 */
export class SideHallBuilder {
  static build(world, { cx, cz = -15, side = 'east', groundY = 0 }) {
    const hallW = 9;   // along X
    const hallD = 16;  // along Z
    const podiumH = 2;

    // 1. Raised Stone Base
    world.fillBox(cx - hallW, groundY, cz - hallD, cx + hallW, groundY + podiumH - 1, cz + hallD, PALETTE.MARBLE_SHADOW);
    world.fillBox(cx - hallW, groundY + podiumH, cz - hallD, cx + hallW, groundY + podiumH, cz + hallD, PALETTE.ROAD_PAVER);

    const terraceY = groundY + podiumH;

    // Steps leading down towards central courtyard
    const stepDir = (side === 'east') ? 1 : -1;
    const stepStartX = cx + (hallW * stepDir);
    const stepEndX = stepStartX + (3 * stepDir);

    for (let i = 0; i <= 3; i++) {
      const curX = stepStartX + (i * stepDir);
      const curY = Math.round(terraceY - (i * (terraceY - groundY) / 3));
      for (let z = cz - 4; z <= cz + 4; z++) {
        for (let y = groundY; y <= curY; y++) {
          world.set(curX, y, z, y === curY ? PALETTE.ROAD_BORDER : PALETTE.MARBLE_SHADOW);
        }
      }
    }

    // 2. Hall Body Walls
    const wallBaseY = terraceY + 1;
    const wallH = 7;
    const ceilY = wallBaseY + wallH;

    // Enclosing walls (North, South, and outer wall facing away from center)
    // North wall
    world.fillBox(cx - hallW + 1, wallBaseY, cz - hallD + 1, cx + hallW - 1, ceilY, cz - hallD + 1, PALETTE.WALL_RED);
    // South wall
    world.fillBox(cx - hallW + 1, wallBaseY, cz + hallD - 1, cx + hallW - 1, ceilY, cz + hallD - 1, PALETTE.WALL_RED);

    // Outer back wall
    const outerX = (side === 'east') ? (cx - hallW + 1) : (cx + hallW - 1);
    world.fillBox(outerX, wallBaseY, cz - hallD + 1, outerX, ceilY, cz + hallD - 1, PALETTE.WALL_RED);

    // Front facade facing central courtyard
    const innerX = (side === 'east') ? (cx + hallW - 3) : (cx - hallW + 3);
    for (let z = cz - hallD + 2; z <= cz + hallD - 2; z++) {
      for (let h = 0; h < wallH; h++) {
        const y = wallBaseY + h;
        const isDoorZone = Math.abs(z - cz) <= 2;
        const isColumn = (z % 4 === 0);

        if (isColumn) {
          world.set(innerX, y, z, PALETTE.PILLAR_RED);
        } else if (isDoorZone) {
          if (h <= 1) {
            world.set(innerX, y, z, PALETTE.DOOR_RED);
          } else {
            world.set(innerX, y, z, (h % 2 === 0 ? PALETTE.WINDOW_FRAME : PALETTE.WINDOW_GLOW), 'emissive');
          }
        } else {
          // Lattice window
          if (h === 0 || h === 1) {
            world.set(innerX, y, z, PALETTE.WALL_RED);
          } else {
            const lattice = (h % 2 === 0 || z % 2 === 0);
            world.set(innerX, y, z, lattice ? PALETTE.WINDOW_FRAME : PALETTE.WINDOW_GLOW, 'emissive');
          }
        }
      }
    }

    // Front veranda columns
    const frontColX = (side === 'east') ? (cx + hallW - 1) : (cx - hallW + 1);
    for (let z = cz - hallD + 2; z <= cz + hallD - 2; z += 4) {
      for (let y = wallBaseY; y < ceilY; y++) {
        world.set(frontColX, y, z, PALETTE.PILLAR_RED);
      }
      world.set(frontColX, wallBaseY - 1, z, PALETTE.PILLAR_BASE);
      world.set(frontColX, ceilY, z, PALETTE.WOOD_DARK);
    }

    // Hall Inscribed Plaque
    VoxelShapes.buildPlaque(world, {
      cx: innerX + (side === 'east' ? 1 : -1),
      y: wallBaseY + 4,
      z: cz,
      width: 4,
      height: 2
    });

    // 3. Dougong Brackets
    VoxelShapes.buildDougongLayer(world, {
      minX: cx - hallW - 1,
      maxX: cx + hallW + 1,
      minZ: cz - hallD - 1,
      maxZ: cz + hallD + 1,
      y: ceilY,
      step: 3
    });

    // 4. Cyan Glazed Xieshan Roof with Flying Eaves
    VoxelShapes.buildCurvedRoof(world, {
      cx,
      cz,
      halfW: hallW + 2,
      halfD: hallD + 2,
      baseY: ceilY + 2,
      height: 5,
      roofColor: PALETTE.ROOF_CYAN,
      ridgeColor: PALETTE.ROOF_CYAN_LIGHT,
      ridgeBeastColor: PALETTE.RIDGE_BEAST,
      eaveOverhang: 2,
      upturn: 2,
      roofType: 'xieshan'
    });

    // 5. Hanging Veranda Lanterns
    const lanternX = (side === 'east') ? (cx + hallW) : (cx - hallW);
    VoxelShapes.buildLantern(world, { x: lanternX, y: ceilY - 1, z: cz - 6 });
    VoxelShapes.buildLantern(world, { x: lanternX, y: ceilY - 1, z: cz + 6 });
  }
}
