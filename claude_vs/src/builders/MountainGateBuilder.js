import { PALETTE } from '../voxel/Palette.js';
import { VoxelShapes } from '../voxel/VoxelShapes.js';

/**
 * Mountain Gate Builder (山门殿 / 前殿三门)
 * The grand front gateway: three arched portals, raised podium,
 * xieshan roof with flying eaves, guardian stone lions, and hanging lanterns.
 */
export class MountainGateBuilder {
  static build(world, { cx = 0, cz = 56, groundY = 0 }) {
    const gateW = 14;
    const gateD = 8;
    const podiumH = 2;

    // 1. Raised Stone Foundation (台基与阶梯)
    world.fillBox(cx - gateW, groundY, cz - gateD, cx + gateW, groundY + podiumH - 1, cz + gateD, PALETTE.MARBLE_SHADOW);
    world.fillBox(cx - gateW, groundY + podiumH, cz - gateD, cx + gateW, groundY + podiumH, cz + gateD, PALETTE.ROAD_PAVER);

    const terraceY = groundY + podiumH;

    // Front stone steps leading up
    VoxelShapes.buildStaircaseWithCarvedRamp(world, {
      cx,
      startZ: cz + gateD,
      endZ: cz + gateD + 4,
      minY: groundY,
      maxY: terraceY,
      totalWidth: 10,
      rampWidth: 2
    });

    // 2. Triple Arch Wall Structure (三门券门洞)
    const wallBaseY = terraceY + 1;
    const wallH = 7;
    const ceilY = wallBaseY + wallH;

    // Solid base wall blocks
    for (let x = cx - gateW + 1; x <= cx + gateW - 1; x++) {
      for (let y = wallBaseY; y <= ceilY; y++) {
        for (let z = cz - gateD + 1; z <= cz + gateD - 1; z++) {
          const isPerimeter = (z === cz - gateD + 1 || z === cz + gateD - 1);
          if (isPerimeter) {
            world.set(x, y, z, PALETTE.WALL_RED);
          }
        }
      }
    }

    // Carve Three Arched Portals through front & back walls
    // Center Grand Portal: width 4, height 5
    for (let x = cx - 2; x <= cx + 2; x++) {
      for (let y = wallBaseY; y <= wallBaseY + 4; y++) {
        for (let z = cz - gateD + 1; z <= cz + gateD - 1; z++) {
          world.delete(x, y, z);
        }
      }
    }
    // Center arch portal decorative stone surround
    for (let y = wallBaseY; y <= wallBaseY + 4; y++) {
      world.set(cx - 3, y, cz + gateD - 1, PALETTE.MARBLE_WHITE);
      world.set(cx + 3, y, cz + gateD - 1, PALETTE.MARBLE_WHITE);
      world.set(cx - 3, y, cz - gateD + 1, PALETTE.MARBLE_WHITE);
      world.set(cx + 3, y, cz - gateD + 1, PALETTE.MARBLE_WHITE);
    }
    for (let x = cx - 3; x <= cx + 3; x++) {
      world.set(x, wallBaseY + 5, cz + gateD - 1, PALETTE.MARBLE_WHITE);
      world.set(x, wallBaseY + 5, cz - gateD + 1, PALETTE.MARBLE_WHITE);
    }

    // Left Portal (East): width 2, height 4 at x = cx - 8
    for (let x = cx - 9; x <= cx - 7; x++) {
      for (let y = wallBaseY; y <= wallBaseY + 3; y++) {
        for (let z = cz - gateD + 1; z <= cz + gateD - 1; z++) {
          world.delete(x, y, z);
        }
      }
    }
    // Right Portal (West): width 2, height 4 at x = cx + 8
    for (let x = cx + 7; x <= cx + 9; x++) {
      for (let y = wallBaseY; y <= wallBaseY + 3; y++) {
        for (let z = cz - gateD + 1; z <= cz + gateD - 1; z++) {
          world.delete(x, y, z);
        }
      }
    }

    // Plaque above central arch
    VoxelShapes.buildPlaque(world, {
      cx,
      y: wallBaseY + 5,
      z: cz + gateD,
      width: 5,
      height: 2
    });

    // 3. Dougong Brackets
    VoxelShapes.buildDougongLayer(world, {
      minX: cx - gateW,
      maxX: cx + gateW,
      minZ: cz - gateD,
      maxZ: cz + gateD,
      y: ceilY,
      step: 3
    });

    // 4. Sweeping Xieshan Roof with Flying Eaves (歇山顶)
    VoxelShapes.buildCurvedRoof(world, {
      cx,
      cz,
      halfW: gateW + 2,
      halfD: gateD + 2,
      baseY: ceilY + 2,
      height: 5,
      roofColor: PALETTE.ROOF_GREY,
      ridgeColor: PALETTE.ROOF_GREY_LIGHT,
      ridgeBeastColor: PALETTE.RIDGE_BEAST,
      eaveOverhang: 2,
      upturn: 2,
      roofType: 'xieshan'
    });

    // 5. Guardian Stone Lions (左雄右雌汉白玉石狮)
    VoxelShapes.buildStoneLion(world, {
      x: cx - 7,
      y: groundY,
      z: cz + gateD + 5,
      facing: 'south'
    });
    VoxelShapes.buildStoneLion(world, {
      x: cx + 7,
      y: groundY,
      z: cz + gateD + 5,
      facing: 'south'
    });

    // 6. Hanging Lanterns at Entrance
    VoxelShapes.buildLantern(world, { x: cx - 4, y: ceilY - 1, z: cz + gateD + 1 });
    VoxelShapes.buildLantern(world, { x: cx + 4, y: ceilY - 1, z: cz + gateD + 1 });
    VoxelShapes.buildLantern(world, { x: cx - gateW - 1, y: ceilY, z: cz + gateD + 2 });
    VoxelShapes.buildLantern(world, { x: cx + gateW + 1, y: ceilY, z: cz + gateD + 2 });
  }
}
