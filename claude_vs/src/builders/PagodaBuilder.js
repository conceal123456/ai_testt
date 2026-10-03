import { PALETTE } from '../voxel/Palette.js';
import { VoxelShapes } from '../voxel/VoxelShapes.js';

/**
 * Seven-Tier Classical Pagoda Builder (七层玲珑宝塔)
 * Anchors the rear northern skyline of the central axis:
 * 7 tapering tiers, Han marble base, flying eaves on all levels,
 * arched portal windows, golden spire (相轮宝顶), wind bells.
 */
export class PagodaBuilder {
  static build(world, { cx = 0, cz = -68, groundY = 0 }) {
    // 1. Elevated Octagonal/Square Marble Podium Base
    const baseW = 11;
    const baseD = 11;
    const baseH = 3;

    world.fillBox(cx - baseW, groundY, cz - baseD, cx + baseW, groundY + baseH - 1, cz + baseD, PALETTE.MARBLE_SHADOW);
    world.fillBox(cx - baseW, groundY + baseH, cz - baseD, cx + baseW, groundY + baseH, cz + baseD, PALETTE.MARBLE_WHITE);

    const podiumY = groundY + baseH;

    // Balustrades around the pagoda podium
    VoxelShapes.buildBalustrade(world, {
      x1: cx - baseW + 1, z1: cz - baseD + 1,
      x2: cx + baseW - 1, z2: cz - baseD + 1,
      y: podiumY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx - baseW + 1, z1: cz + baseD - 1,
      x2: cx - 4, z2: cz + baseD - 1,
      y: podiumY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx + 4, z1: cz + baseD - 1,
      x2: cx + baseW - 1, z2: cz + baseD - 1,
      y: podiumY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx - baseW + 1, z1: cz - baseD + 1,
      x2: cx - baseW + 1, z2: cz + baseD - 1,
      y: podiumY + 1
    });
    VoxelShapes.buildBalustrade(world, {
      x1: cx + baseW - 1, z1: cz - baseD + 1,
      x2: cx + baseW - 1, z2: cz + baseD - 1,
      y: podiumY + 1
    });

    // Front stone steps leading to pagoda base
    VoxelShapes.buildStaircaseWithCarvedRamp(world, {
      cx,
      startZ: cz + baseD,
      endZ: cz + baseD + 4,
      minY: groundY,
      maxY: podiumY,
      totalWidth: 8,
      rampWidth: 2
    });

    // 2. Build 7 Tiers of the Pagoda
    // Configuration per tier: [halfRadius, height, eaveOverhang, upturn]
    const tiers = [
      { r: 8, h: 6, overhang: 2, upturn: 2 }, // Tier 1
      { r: 7, h: 5, overhang: 2, upturn: 2 }, // Tier 2
      { r: 6, h: 5, overhang: 2, upturn: 2 }, // Tier 3
      { r: 5, h: 4, overhang: 2, upturn: 2 }, // Tier 4
      { r: 4, h: 4, overhang: 1, upturn: 1 }, // Tier 5
      { r: 3, h: 3, overhang: 1, upturn: 1 }, // Tier 6
      { r: 2, h: 3, overhang: 1, upturn: 1 }, // Tier 7
    ];

    let currentY = podiumY + 1;

    for (let t = 0; t < tiers.length; t++) {
      const { r, h, overhang, upturn } = tiers[t];
      const tierCeilY = currentY + h;

      // Tier walls (Vermilion with stone foundation strip)
      world.fillHollowBox(
        cx - r, currentY, cz - r,
        cx + r, tierCeilY, cz + r,
        PALETTE.WALL_RED,
        1
      );

      // Balcony ledge (平座) on tiers > 0
      if (t > 0) {
        for (let x = cx - r - 1; x <= cx + r + 1; x++) {
          for (let z = cz - r - 1; z <= cz + r + 1; z++) {
            const isEdge = (x === cx - r - 1 || x === cx + r + 1 || z === cz - r - 1 || z === cz + r + 1);
            if (isEdge) {
              world.set(x, currentY, z, PALETTE.MARBLE_WHITE);
            }
          }
        }
      }

      // Arched doorways & illuminated windows on 4 faces
      // South face portal
      for (let y = currentY; y <= currentY + Math.min(3, h - 1); y++) {
        world.set(cx, y, cz + r, PALETTE.WINDOW_GLOW, 'emissive');
        if (r > 3) {
          world.set(cx - 1, y, cz + r, PALETTE.WINDOW_FRAME);
          world.set(cx + 1, y, cz + r, PALETTE.WINDOW_FRAME);
        }
      }
      // North face window
      world.set(cx, currentY + 1, cz - r, PALETTE.WINDOW_GLOW, 'emissive');
      // East & West face windows
      world.set(cx + r, currentY + 1, cz, PALETTE.WINDOW_GLOW, 'emissive');
      world.set(cx - r, currentY + 1, cz, PALETTE.WINDOW_GLOW, 'emissive');

      // Dougong brackets under each tier eave
      VoxelShapes.buildDougongLayer(world, {
        minX: cx - r,
        maxX: cx + r,
        minZ: cz - r,
        maxZ: cz + r,
        y: tierCeilY,
        step: 2
      });

      // Flying eave for this tier (攒尖/四角攒尖翘角)
      VoxelShapes.buildCurvedRoof(world, {
        cx,
        cz,
        halfW: r,
        halfD: r,
        baseY: tierCeilY + 1,
        height: 2,
        roofColor: (t % 2 === 0) ? PALETTE.ROOF_GOLD : PALETTE.ROOF_CYAN,
        ridgeColor: PALETTE.ROOF_GOLD_RIDGE,
        ridgeBeastColor: PALETTE.RIDGE_BEAST,
        eaveOverhang: overhang,
        upturn: upturn,
        roofType: 'zanjian'
      });

      // Wind bells & glowing lanterns hanging from the 4 corners of each tier
      const eaveR = r + overhang;
      const cornerY = tierCeilY;
      world.set(cx - eaveR, cornerY - 1, cz - eaveR, PALETTE.LANTERN_GOLD);
      world.set(cx - eaveR, cornerY - 2, cz - eaveR, PALETTE.LANTERN_RED, 'emissive');

      world.set(cx + eaveR, cornerY - 1, cz - eaveR, PALETTE.LANTERN_GOLD);
      world.set(cx + eaveR, cornerY - 2, cz - eaveR, PALETTE.LANTERN_RED, 'emissive');

      world.set(cx - eaveR, cornerY - 1, cz + eaveR, PALETTE.LANTERN_GOLD);
      world.set(cx - eaveR, cornerY - 2, cz + eaveR, PALETTE.LANTERN_RED, 'emissive');

      world.set(cx + eaveR, cornerY - 1, cz + eaveR, PALETTE.LANTERN_GOLD);
      world.set(cx + eaveR, cornerY - 2, cz + eaveR, PALETTE.LANTERN_RED, 'emissive');

      // Next tier starts on top of the eave
      currentY = tierCeilY + 3;
    }

    // 3. Elaborate Golden Bronze Spire (七级浮屠塔刹 - 覆钵、相轮、宝珠)
    let spireY = currentY;

    // Lotus bowl base (覆钵)
    world.fillBox(cx - 1, spireY, cz - 1, cx + 1, spireY, cz + 1, PALETTE.BRONZE_GOLD);
    spireY += 1;

    // 5 Sacred Golden Rings (五重相轮)
    for (let ring = 0; ring < 5; ring++) {
      world.set(cx, spireY, cz, PALETTE.LANTERN_GOLD);
      world.set(cx - 1, spireY, cz, PALETTE.LANTERN_GOLD);
      world.set(cx + 1, spireY, cz, PALETTE.LANTERN_GOLD);
      world.set(cx, spireY, cz - 1, PALETTE.LANTERN_GOLD);
      world.set(cx, spireY, cz + 1, PALETTE.LANTERN_GOLD);
      spireY += 1;
      world.set(cx, spireY, cz, PALETTE.BRONZE_DARK);
      spireY += 1;
    }

    // Sun & Moon Crescent Dish (圆光)
    world.fillBox(cx - 1, spireY, cz, cx + 1, spireY, cz, PALETTE.LANTERN_GOLD);
    spireY += 1;

    // Flaming Treasure Pearl Finial (火焰摩尼宝珠 - Glowing)
    world.fillBox(cx - 1, spireY, cz - 1, cx + 1, spireY + 1, cz + 1, PALETTE.LANTERN_GLOW, 'emissive');
    world.set(cx, spireY + 2, cz, PALETTE.FIRE_GLOW, 'emissive');
  }
}
