import * as THREE from 'three';
import { PALETTE } from './Palette.js';

/**
 * Procedural building components for Classical Chinese Voxel Architecture.
 */
export class VoxelShapes {

  /**
   * Build a Classical Chinese Roof with authentic flying eaves (飞檐翘角).
   * Supports:
   *  - 'wudian' (庑殿顶 - Four-sloped grand hip roof, highest rank)
   *  - 'xieshan' (歇山顶 - Half-hip, half-gable roof with gable pediments)
   *  - 'zanjian' (攒尖顶 - Pyramidal tapering roof with central finial)
   */
  static buildCurvedRoof(world, {
    cx,
    cz,
    halfW,
    halfD,
    baseY,
    height,
    roofColor = PALETTE.ROOF_GOLD,
    ridgeColor = PALETTE.ROOF_GOLD_RIDGE,
    ridgeBeastColor = PALETTE.RIDGE_BEAST,
    eaveOverhang = 2,
    upturn = 2,
    roofType = 'wudian'
  }) {
    const totalW = halfW + eaveOverhang;
    const totalD = halfD + eaveOverhang;

    // Scan through all (x, z) points on the roof footprint
    for (let x = cx - totalW; x <= cx + totalW; x++) {
      for (let z = cz - totalD; z <= cz + totalD; z++) {
        const dx = Math.abs(x - cx);
        const dz = Math.abs(z - cz);

        // Normalized distance to outer eave boundary [0, 1]
        const u = dx / totalW;
        const v = dz / totalD;
        const maxNorm = Math.max(u, v);

        if (maxNorm > 1.0) continue;

        let yBase = 0;
        let isRidge = false;
        let isHipRidge = false;

        if (roofType === 'zanjian') {
          // Four-sided or polygonal pyramidal slope meeting at single center
          const dist = Math.max(dx, dz);
          const slope = 1.0 - (dist / Math.max(totalW, totalD));
          // Chinese "Ju-zhe" (举折) subtle concave curve
          yBase = baseY + Math.round(Math.pow(slope, 1.2) * height);

          // Diagonal hip ridges (垂脊)
          if (Math.abs(dx - dz) <= 1 && dist > 1) {
            isHipRidge = true;
          }
          if (dx === 0 && dz === 0) {
            isRidge = true;
          }
        } else if (roofType === 'xieshan') {
          // Half hip, half gable roof
          // Central main ridge along X
          const ridgeHalfLen = Math.max(1, halfW - halfD + 1);
          if (dz === 0 && dx <= ridgeHalfLen) {
            isRidge = true;
          }

          // Gable cut-out on the East/West sides
          const gableThreshold = halfW - 2;
          if (dx > gableThreshold && dz > halfD * 0.7) {
            // Slope continues down to eave
          }

          // Calculate height with concave curve
          const slopeX = dx <= ridgeHalfLen ? 0 : (dx - ridgeHalfLen) / (totalW - ridgeHalfLen);
          const slopeZ = dz / totalD;
          const slopeMax = Math.max(slopeX, slopeZ);
          yBase = baseY + Math.round(Math.pow(1.0 - Math.min(1.0, slopeMax), 1.25) * height);

          // Diagonal hip ridge
          if (Math.abs((dx - ridgeHalfLen) - dz) <= 1 && dx >= ridgeHalfLen) {
            isHipRidge = true;
          }
        } else {
          // 'wudian' - Four slopes
          const ridgeHalfLen = Math.max(1, halfW - halfD);
          if (dz === 0 && dx <= ridgeHalfLen) {
            isRidge = true;
          }

          const slopeX = dx <= ridgeHalfLen ? 0 : (dx - ridgeHalfLen) / (totalW - ridgeHalfLen);
          const slopeZ = dz / totalD;
          const slopeMax = Math.max(slopeX, slopeZ);
          yBase = baseY + Math.round(Math.pow(1.0 - Math.min(1.0, slopeMax), 1.25) * height);

          if (Math.abs((dx - ridgeHalfLen) - dz) <= 1 && dx >= ridgeHalfLen) {
            isHipRidge = true;
          }
        }

        // Flying eaves corner upturn (翼角起翘)
        // Only applies near the outer edge and corners
        let cornerLift = 0;
        if (u > 0.65 && v > 0.65) {
          const cornerFactor = Math.pow(((u - 0.65) / 0.35) * ((v - 0.65) / 0.35), 1.6);
          cornerLift = Math.round(cornerFactor * upturn);
        }

        const finalY = yBase + cornerLift;

        // Determine voxel color
        let color = roofColor;
        if (isRidge) {
          color = ridgeColor;
          // Main ridge decoration
          world.set(x, finalY + 1, z, ridgeColor);
        } else if (isHipRidge) {
          color = ridgeColor;
        }

        // Place main tile block
        world.set(x, finalY, z, color);

        // Fill solid underneath eave to avoid paper-thin gaps
        if (finalY > baseY) {
          world.set(x, finalY - 1, z, PALETTE.WOOD_DARK);
        }

        // Corner tip ornamental beast (飞檐垂脊翘角走兽)
        if (dx === totalW && dz === totalD) {
          world.set(x, finalY + 1, z, ridgeBeastColor);
          world.set(x, finalY + 2, z, ridgeBeastColor);
          // Hanging bell / small lantern under the upturned corner
          world.set(x, finalY - 1, z, PALETTE.LANTERN_GOLD);
          world.set(x, finalY - 2, z, PALETTE.LANTERN_RED, 'emissive');
        }
      }
    }

    // Top finial for Zanjian pyramidal roofs
    if (roofType === 'zanjian') {
      const topY = baseY + height + 1;
      world.set(cx, topY, cz, PALETTE.LANTERN_GOLD);
      world.set(cx, topY + 1, cz, PALETTE.LANTERN_GOLD);
      world.set(cx, topY + 2, cz, PALETTE.RIDGE_BEAST, 'emissive');
    }
  }

  /**
   * Build authentic Dou-Gong (斗拱) bracket layer.
   * Alternating blocks, cantilevers, and transverse arms.
   */
  static buildDougongLayer(world, { minX, maxX, minZ, maxZ, y, step = 3 }) {
    for (let x = minX; x <= maxX; x++) {
      for (let z = minZ; z <= maxZ; z++) {
        const onNorthSouthEdge = (z === minZ || z === maxZ) && (x >= minX && x <= maxX);
        const onEastWestEdge = (x === minX || x === maxX) && (z >= minZ && z <= maxZ);

        if (onNorthSouthEdge || onEastWestEdge) {
          // Regular bracket spacing along the peristyle
          const isBracketCenter = (x % step === 0) || (z % step === 0);

          if (isBracketCenter) {
            // Bracket base block (栌斗)
            world.set(x, y, z, PALETTE.DOUGONG_RED);
            // Cantilever arm (华拱) extending 1 voxel outward
            let outX = x;
            let outZ = z;
            if (x === minX) outX = x - 1;
            if (x === maxX) outX = x + 1;
            if (z === minZ) outZ = z - 1;
            if (z === maxZ) outZ = z + 1;

            world.set(outX, y + 1, outZ, PALETTE.DOUGONG_CYAN);
            world.set(outX, y + 1, z, PALETTE.DOUGONG_GOLD);
            world.set(x, y + 1, outZ, PALETTE.DOUGONG_GOLD);

            // Upper bracket plate
            world.set(x, y + 1, z, PALETTE.WOOD_DARK);
          } else {
            // Lintel beam (额枋 / 平板枋)
            world.set(x, y, z, PALETTE.WOOD_MED);
            world.set(x, y + 1, z, PALETTE.WOOD_DARK);
          }
        }
      }
    }
  }

  /**
   * Build cylindrical/square columns with stone plinths (柱础与立柱)
   */
  static buildPillars(world, { positions, minY, maxY, pillarColor = PALETTE.PILLAR_RED, baseColor = PALETTE.PILLAR_BASE }) {
    for (const [x, z] of positions) {
      // Plinth (柱础)
      world.set(x, minY, z, baseColor);
      // Pillar shaft
      for (let y = minY + 1; y < maxY; y++) {
        world.set(x, y, z, pillarColor);
      }
      // Capital block
      world.set(x, maxY, z, PALETTE.WOOD_DARK);
    }
  }

  /**
   * Build Han White Marble Balustrade with Lotus Finials (汉白玉栏板与望柱)
   */
  static buildBalustrade(world, { x1, z1, x2, z2, y, postInterval = 3 }) {
    const isX = (z1 === z2);
    if (isX) {
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const z = z1;
      for (let x = minX; x <= maxX; x++) {
        // Base rail (地栿)
        world.set(x, y, z, PALETTE.MARBLE_SHADOW);
        // Screen panel (栏板)
        world.set(x, y + 1, z, PALETTE.MARBLE_WHITE);

        // Posts (望柱)
        if ((x - minX) % postInterval === 0 || x === minX || x === maxX) {
          world.set(x, y + 2, z, PALETTE.MARBLE_WHITE); // Post neck
          world.set(x, y + 3, z, PALETTE.MARBLE_WHITE); // Lotus finial bud
        }
      }
    } else {
      const minZ = Math.min(z1, z2);
      const maxZ = Math.max(z1, z2);
      const x = x1;
      for (let z = minZ; z <= maxZ; z++) {
        world.set(x, y, z, PALETTE.MARBLE_SHADOW);
        world.set(x, y + 1, z, PALETTE.MARBLE_WHITE);

        if ((z - minZ) % postInterval === 0 || z === minZ || z === maxZ) {
          world.set(x, y + 2, z, PALETTE.MARBLE_WHITE);
          world.set(x, y + 3, z, PALETTE.MARBLE_WHITE);
        }
      }
    }
  }

  /**
   * Build Imperial Staircase with Central Dragon Carving (丹墀御路与石阶)
   */
  static buildStaircaseWithCarvedRamp(world, {
    cx,
    startZ,
    endZ,
    minY,
    maxY,
    totalWidth = 14,
    rampWidth = 4
  }) {
    const steps = Math.abs(endZ - startZ) + 1;
    const dy = (maxY - minY) / steps;
    const halfW = Math.floor(totalWidth / 2);
    const halfRamp = Math.floor(rampWidth / 2);

    for (let i = 0; i < steps; i++) {
      const z = startZ + (startZ < endZ ? i : -i);
      const curY = Math.round(minY + i * dy);

      for (let x = cx - halfW; x <= cx + halfW; x++) {
        // Fill solid underneath step
        for (let y = minY; y <= curY; y++) {
          if (Math.abs(x - cx) <= halfRamp) {
            // Central imperial carved ramp (御路丹墀)
            world.set(x, y, z, y === curY ? PALETTE.DRAGON_STONE : PALETTE.MARBLE_SHADOW);
          } else {
            // Side walking stairs
            world.set(x, y, z, y === curY ? PALETTE.MARBLE_WHITE : PALETTE.MARBLE_SHADOW);
          }
        }
      }
    }
  }

  /**
   * Build Lattice Window or Screen Door (隔扇门与直棂窗)
   */
  static buildLatticeFacade(world, { minX, maxX, y, height, z, doorInterval = 4 }) {
    for (let x = minX; x <= maxX; x++) {
      for (let h = 0; h < height; h++) {
        const curY = y + h;
        const isDoorPost = ((x - minX) % doorInterval === 0);

        if (isDoorPost) {
          world.set(x, curY, z, PALETTE.PILLAR_RED);
        } else if (h === 0) {
          // Door sill
          world.set(x, curY, z, PALETTE.WOOD_DARK);
        } else if (h === 1 || h === 2) {
          // Lower door skirt panel (裙板)
          world.set(x, curY, z, PALETTE.WALL_RED);
        } else {
          // Lattice window paper with warm interior illumination
          const isLatticeFrame = (curY % 2 === 0 || x % 2 === 0);
          if (isLatticeFrame) {
            world.set(x, curY, z, PALETTE.WINDOW_FRAME);
          } else {
            world.set(x, curY, z, PALETTE.WINDOW_GLOW, 'emissive');
          }
        }
      }
    }
  }

  /**
   * Build Traditional Inscribed Plaque (匾额)
   */
  static buildPlaque(world, { cx, y, z, width = 6, height = 3 }) {
    const halfW = Math.floor(width / 2);
    for (let x = cx - halfW; x <= cx + halfW; x++) {
      for (let h = 0; h < height; h++) {
        const curY = y + h;
        const isBorder = (x === cx - halfW || x === cx + halfW || h === 0 || h === height - 1);
        if (isBorder) {
          world.set(x, curY, z, PALETTE.PLAQUE_BORDER);
        } else {
          world.set(x, curY, z, PALETTE.PLAQUE_BG);
        }
      }
    }
    // Golden lettering dots in center
    world.set(cx, y + 1, z, PALETTE.PLAQUE_TEXT, 'emissive');
  }

  /**
   * Build Red Palace Lantern (大红灯笼)
   */
  static buildLantern(world, { x, y, z }) {
    // Hanging cord
    world.set(x, y + 2, z, PALETTE.LANTERN_GOLD);
    // Brass top cap
    world.set(x, y + 1, z, PALETTE.LANTERN_GOLD);
    // Lantern body (Glowing emissive)
    world.set(x, y, z, PALETTE.LANTERN_RED, 'emissive');
    world.set(x + 1, y, z, PALETTE.LANTERN_RED, 'emissive');
    world.set(x - 1, y, z, PALETTE.LANTERN_RED, 'emissive');
    world.set(x, y, z + 1, PALETTE.LANTERN_RED, 'emissive');
    world.set(x, y, z - 1, PALETTE.LANTERN_RED, 'emissive');
    world.set(x, y - 1, z, PALETTE.LANTERN_RED, 'emissive');
    // Golden bottom ring and tassel
    world.set(x, y - 2, z, PALETTE.LANTERN_GOLD);
    world.set(x, y - 3, z, PALETTE.LANTERN_RED);
  }

  /**
   * Build Guardian Stone Lion (汉白玉石狮)
   */
  static buildStoneLion(world, { x, y, z, facing = 'north' }) {
    // Carved pedestal
    world.fillBox(x - 1, y, z - 1, x + 1, y + 1, z + 1, PALETTE.MARBLE_SHADOW);
    // Lion body
    world.fillBox(x - 1, y + 2, z, x + 1, y + 3, z + 1, PALETTE.STONE_LION);
    // Head with mane
    world.fillBox(x - 1, y + 4, z - 1, x + 1, y + 5, z, PALETTE.STONE_LION);
    // Snout
    world.set(x, y + 4, z - 1, PALETTE.MARBLE_WHITE);
    // Eyes
    world.set(x - 1, y + 5, z - 1, PALETTE.BRONZE_DARK);
    world.set(x + 1, y + 5, z - 1, PALETTE.BRONZE_DARK);
  }

  /**
   * Build Grand Bronze Incense Burner / Tripod Ding (九龙宝鼎/青铜大香炉)
   */
  static buildIncenseBurner(world, { cx, cz, y }) {
    // Stone base
    world.fillBox(cx - 2, y, cz - 2, cx + 2, y, cz + 2, PALETTE.MARBLE_SHADOW);
    // Three/four bronze legs
    world.set(cx - 2, y + 1, cz - 2, PALETTE.BRONZE_DARK);
    world.set(cx + 2, y + 1, cz - 2, PALETTE.BRONZE_DARK);
    world.set(cx - 2, y + 1, cz + 2, PALETTE.BRONZE_DARK);
    world.set(cx + 2, y + 1, cz + 2, PALETTE.BRONZE_DARK);

    // Burner bowl
    world.fillBox(cx - 3, y + 2, cz - 3, cx + 3, y + 4, cz + 3, PALETTE.BRONZE_PATINA);
    // Hollow interior with glowing red-orange embers
    world.fillBox(cx - 2, y + 3, cz - 2, cx + 2, y + 4, cz + 2, PALETTE.INCENSE_EMBER, 'emissive');

    // Dual handles (鼎耳)
    world.set(cx - 4, y + 4, cz, PALETTE.BRONZE_GOLD);
    world.set(cx - 4, y + 5, cz, PALETTE.BRONZE_GOLD);
    world.set(cx + 4, y + 4, cz, PALETTE.BRONZE_GOLD);
    world.set(cx + 4, y + 5, cz, PALETTE.BRONZE_GOLD);

    // Smoke embers rising
    world.set(cx, y + 6, cz, PALETTE.INCENSE_EMBER, 'emissive');
    world.set(cx, y + 8, cz + 1, PALETTE.ROAD_PAVER_LIGHT);
  }

  /**
   * Build Classical Ancient Pine / Cypress Tree (苍松翠柏)
   * Voxelized gnarled bark trunk with layered cloud foliage pads.
   */
  static buildPineTree(world, { cx, cz, groundY, height = 12, seed = 1 }) {
    // Gnarled leaning trunk
    let curX = cx;
    let curZ = cz;
    for (let y = groundY; y <= groundY + height; y++) {
      world.fillBox(curX, y, curZ, curX + 1, y, curZ + 1, PALETTE.PINE_TRUNK);

      // Subtle lean based on height
      if (y === groundY + 3) curX += (seed % 2 === 0 ? 1 : -1);
      if (y === groundY + 7) curZ += (seed % 3 === 0 ? 1 : -1);

      // Branching horizontal limbs
      if (y === groundY + 5 || y === groundY + 8 || y === groundY + 11) {
        const branchLen = 3;
        const dirX = (y % 2 === 0 ? 1 : -1);
        const dirZ = (y % 3 === 0 ? 1 : -1);

        for (let b = 1; b <= branchLen; b++) {
          world.set(curX + b * dirX, y, curZ + b * dirZ, PALETTE.PINE_TRUNK);
        }

        // Cloud-like foliage pad at branch end (云片松)
        const fx = curX + branchLen * dirX;
        const fz = curZ + branchLen * dirZ;
        const radius = (y === groundY + 11 ? 4 : 3);

        for (let ox = -radius; ox <= radius; ox++) {
          for (let oz = -radius; oz <= radius; oz++) {
            if (ox * ox + oz * oz <= radius * radius) {
              const color = (ox + oz) % 2 === 0 ? PALETTE.PINE_NEEDLE : PALETTE.PINE_NEEDLE_LIGHT;
              world.set(fx + ox, y + 1, fz + oz, color);
              if (Math.abs(ox) < radius - 1 && Math.abs(oz) < radius - 1) {
                world.set(fx + ox, y + 2, fz + oz, color);
              }
            }
          }
        }
      }
    }

    // Top crown canopy
    const topY = groundY + height;
    for (let ox = -3; ox <= 3; ox++) {
      for (let oz = -3; oz <= 3; oz++) {
        if (ox * ox + oz * oz <= 9) {
          world.set(curX + ox, topY + 1, curZ + oz, PALETTE.PINE_NEEDLE);
          if (ox * ox + oz * oz <= 4) {
            world.set(curX + ox, topY + 2, curZ + oz, PALETTE.PINE_NEEDLE_LIGHT);
          }
        }
      }
    }
  }

  /**
   * Build Stone Pagoda Lantern (庭院石灯笼)
   */
  static buildStoneLantern(world, { x, y, z }) {
    // Pedestal
    world.set(x, y, z, PALETTE.STONE_LANTERN);
    world.set(x, y + 1, z, PALETTE.STONE_LANTERN);
    // Light chamber (fire glow)
    world.set(x, y + 2, z, PALETTE.LANTERN_GLOW, 'emissive');
    // Mini hip roof
    world.fillBox(x - 1, y + 3, z - 1, x + 1, y + 3, z + 1, PALETTE.STONE_LANTERN);
    world.set(x, y + 4, z, PALETTE.STONE_LANTERN);
  }
}
