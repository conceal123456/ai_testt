import { PALETTE } from '../engine/Palette.js';

/**
 * 中式古典建筑屋顶体素生成器
 * 精确实现：飞檐翘角、五脊六兽、庑殿顶、重檐歇山顶、攒尖顶
 */
export class RoofBuilder {
  /**
   * 建造重檐/单檐庑殿顶（四坡五脊，等级最高的殿顶）
   */
  static buildHipRoof(world, cx, startY, cz, widthX, lengthZ, heightY, tileColor = PALETTE.ROOF_GOLD, ridgeColor = PALETTE.ROOF_GOLD_RIDGE) {
    const halfX = Math.floor(widthX / 2);
    const halfZ = Math.floor(lengthZ / 2);

    for (let step = 0; step <= heightY; step++) {
      const curY = startY + step;
      // 随着高度上升，坡面向内收缩；低层平缓，高层微收（折举起翘）
      const shrinkFactor = step;
      const curHalfX = halfX - shrinkFactor;
      const curHalfZ = halfZ - shrinkFactor;

      if (curHalfX < 0 || curHalfZ < 0) break;

      const minX = cx - curHalfX;
      const maxX = cx + curHalfX;
      const minZ = cz - curHalfZ;
      const maxZ = cz + curHalfZ;

      // 铺设该层屋檐瓦面
      for (let x = minX; x <= maxX; x++) {
        for (let z = minZ; z <= maxZ; z++) {
          // 只铺设边缘与坡面表面
          const isEdge = (x === minX || x === maxX || z === minZ || z === maxZ);
          const isInnerEdge = (x === minX + 1 || x === maxX - 1 || z === minZ + 1 || z === maxZ - 1);

          if (isEdge || isInnerEdge || step === heightY) {
            world.setVoxel(x, curY, z, tileColor, 'solid');
          }
        }
      }

      // 垂脊（四个斜脊走兽）
      world.setVoxel(minX, curY + 1, minZ, ridgeColor, 'solid');
      world.setVoxel(maxX, curY + 1, minZ, ridgeColor, 'solid');
      world.setVoxel(minX, curY + 1, maxZ, ridgeColor, 'solid');
      world.setVoxel(maxX, curY + 1, maxZ, ridgeColor, 'solid');
    }

    // 飞檐翘角：最下层四角向外向上起翘
    const eaveY = startY;
    const corners = [
      [cx - halfX, cz - halfZ, -1, -1],
      [cx + halfX, cz - halfZ, 1, -1],
      [cx - halfX, cz + halfZ, -1, 1],
      [cx + halfX, cz + halfZ, 1, 1]
    ];

    for (const [x, z, dx, dz] of corners) {
      // 翼角第一节伸展
      world.setVoxel(x + dx, eaveY + 1, z + dz, ridgeColor, 'solid');
      // 翼角第二节翘起
      world.setVoxel(x + dx * 2, eaveY + 2, z + dz * 2, ridgeColor, 'solid');
      // 檐角下悬挂金色风铃/小红灯笼
      world.setVoxel(x + dx, eaveY - 1, z + dz, PALETTE.BRONZE_GOLD, 'gold');
    }

    // 正脊与大吻（鸱吻）
    const topY = startY + heightY;
    const topHalfX = halfX - heightY;
    if (topHalfX >= 0) {
      for (let x = cx - topHalfX; x <= cx + topHalfX; x++) {
        world.setVoxel(x, topY + 1, cz, ridgeColor, 'solid');
        world.setVoxel(x, topY + 2, cz, tileColor, 'solid');
      }

      // 两端鸱吻吞脊兽
      const leftChiwenX = cx - topHalfX;
      const rightChiwenX = cx + topHalfX;

      [leftChiwenX, rightChiwenX].forEach((chiX, idx) => {
        const dir = idx === 0 ? -1 : 1;
        world.setVoxel(chiX + dir, topY + 2, cz, PALETTE.ROOF_GOLD_BEAST, 'solid');
        world.setVoxel(chiX + dir, topY + 3, cz, PALETTE.ROOF_GOLD_BEAST, 'solid');
        world.setVoxel(chiX + dir * 2, topY + 4, cz, PALETTE.BRONZE_GOLD, 'gold');
      });
    }
  }

  /**
   * 建造歇山顶（九脊殿，两侧有山花博风板）
   */
  static buildGableHipRoof(world, cx, startY, cz, widthX, lengthZ, heightY, tileColor = PALETTE.ROOF_CYAN, ridgeColor = PALETTE.ROOF_CYAN_RIDGE) {
    const halfX = Math.floor(widthX / 2);
    const halfZ = Math.floor(lengthZ / 2);

    for (let step = 0; step <= heightY; step++) {
      const curY = startY + step;
      const curHalfZ = halfZ - step;
      // 歇山顶在半腰出现歇山面
      const curHalfX = (step < Math.floor(heightY * 0.4)) ? (halfX - step) : (halfX - Math.floor(heightY * 0.4));

      if (curHalfX < 0 || curHalfZ < 0) break;

      const minX = cx - curHalfX;
      const maxX = cx + curHalfX;
      const minZ = cz - curHalfZ;
      const maxZ = cz + curHalfZ;

      for (let x = minX; x <= maxX; x++) {
        for (let z = minZ; z <= maxZ; z++) {
          const isEdge = (x === minX || x === maxX || z === minZ || z === maxZ);
          if (isEdge || step === heightY) {
            world.setVoxel(x, curY, z, tileColor, 'solid');
          }
        }
      }

      // 脊线
      world.setVoxel(minX, curY + 1, minZ, ridgeColor, 'solid');
      world.setVoxel(maxX, curY + 1, minZ, ridgeColor, 'solid');
      world.setVoxel(minX, curY + 1, maxZ, ridgeColor, 'solid');
      world.setVoxel(maxX, curY + 1, maxZ, ridgeColor, 'solid');
    }

    // 歇山顶山花三角山墙填补木格
    const gableYStart = startY + Math.floor(heightY * 0.4);
    const gableHalfX = halfX - Math.floor(heightY * 0.4);
    for (let step = 0; step < heightY - Math.floor(heightY * 0.4); step++) {
      const y = gableYStart + step;
      const curZSpan = halfZ - (Math.floor(heightY * 0.4) + step);
      if (curZSpan >= 0) {
        for (let z = cz - curZSpan + 1; z <= cz + curZSpan - 1; z++) {
          world.setVoxel(cx - gableHalfX, y, z, PALETTE.WOOD_BEAM, 'solid');
          world.setVoxel(cx + gableHalfX, y, z, PALETTE.WOOD_BEAM, 'solid');
        }
      }
    }

    // 飞檐翘角
    const eaveY = startY;
    const corners = [
      [cx - halfX, cz - halfZ, -1, -1],
      [cx + halfX, cz - halfZ, 1, -1],
      [cx - halfX, cz + halfZ, -1, 1],
      [cx + halfX, cz + halfZ, 1, 1]
    ];

    for (const [x, z, dx, dz] of corners) {
      world.setVoxel(x + dx, eaveY + 1, z + dz, ridgeColor, 'solid');
      world.setVoxel(x + dx * 2, eaveY + 2, z + dz * 2, ridgeColor, 'solid');
      world.setVoxel(x + dx, eaveY - 1, z + dz, PALETTE.LANTERN_RED, 'solid');
      world.setVoxel(x + dx, eaveY - 2, z + dz, PALETTE.LANTERN_GLOW, 'lantern');
    }

    // 正脊与脊兽
    const topY = startY + heightY;
    const topHalfX = gableHalfX;
    for (let x = cx - topHalfX; x <= cx + topHalfX; x++) {
      world.setVoxel(x, topY + 1, cz, ridgeColor, 'solid');
      world.setVoxel(x, topY + 2, cz, tileColor, 'solid');
    }
    world.setVoxel(cx - topHalfX - 1, topY + 2, cz, ridgeColor, 'solid');
    world.setVoxel(cx - topHalfX - 1, topY + 3, cz, PALETTE.BRONZE_GOLD, 'gold');
    world.setVoxel(cx + topHalfX + 1, topY + 2, cz, ridgeColor, 'solid');
    world.setVoxel(cx + topHalfX + 1, topY + 3, cz, PALETTE.BRONZE_GOLD, 'gold');
  }

  /**
   * 建造攒尖顶（四角或八角攒尖亭塔屋顶）
   */
  static buildPyramidRoof(world, cx, startY, cz, halfRadius, heightY, tileColor = PALETTE.ROOF_CYAN, ridgeColor = PALETTE.ROOF_CYAN_RIDGE) {
    for (let step = 0; step <= heightY; step++) {
      const curY = startY + step;
      const curR = Math.max(0, halfRadius - step);
      if (curR === 0) {
        world.setVoxel(cx, curY, cz, ridgeColor, 'solid');
        break;
      }

      for (let dx = -curR; dx <= curR; dx++) {
        for (let dz = -curR; dz <= curR; dz++) {
          const isEdge = (Math.abs(dx) === curR || Math.abs(dz) === curR);
          if (isEdge) {
            world.setVoxel(cx + dx, curY, cz + dz, tileColor, 'solid');
          }
        }
      }

      // 四条角脊
      world.setVoxel(cx - curR, curY + 1, cz - curR, ridgeColor, 'solid');
      world.setVoxel(cx + curR, curY + 1, cz - curR, ridgeColor, 'solid');
      world.setVoxel(cx - curR, curY + 1, cz + curR, ridgeColor, 'solid');
      world.setVoxel(cx + curR, curY + 1, cz + curR, ridgeColor, 'solid');
    }

    // 翼角起翘
    const corners = [
      [-1, -1], [1, -1], [-1, 1], [1, 1]
    ];
    for (const [dx, dz] of corners) {
      world.setVoxel(cx + (halfRadius + 1) * dx, startY + 1, cz + (halfRadius + 1) * dz, ridgeColor, 'solid');
      world.setVoxel(cx + (halfRadius + 2) * dx, startY + 2, cz + (halfRadius + 2) * dz, ridgeColor, 'solid');
      // 风铃
      world.setVoxel(cx + (halfRadius + 1) * dx, startY - 1, cz + (halfRadius + 1) * dz, PALETTE.BRONZE_GOLD, 'gold');
    }

    // 塔顶鎏金宝顶/相轮
    const topY = startY + heightY + 1;
    world.setVoxel(cx, topY, cz, PALETTE.BRONZE_GOLD, 'gold');
    world.setVoxel(cx, topY + 1, cz, PALETTE.BRONZE_GOLD, 'gold');
    world.setVoxel(cx, topY + 2, cz, PALETTE.DOOR_GOLD_STUD, 'gold');
  }

  /**
   * 建造斗拱层（木结构精华，出跳挑檐）
   */
  static buildDougongLayer(world, minX, maxX, y, minZ, maxZ, stepOut = 1) {
    // 额枋横梁
    world.fillBox(minX, y, minZ, maxX, y, minZ, PALETTE.WOOD_BEAM);
    world.fillBox(minX, y, maxZ, maxX, y, maxZ, PALETTE.WOOD_BEAM);
    world.fillBox(minX, y, minZ, minX, y, maxZ, PALETTE.WOOD_BEAM);
    world.fillBox(maxX, y, minZ, maxX, y, maxZ, PALETTE.WOOD_BEAM);

    // 斗拱出踩（挑出一格并带有青绿旋子彩画与朱红斗栱）
    const dougongY = y + 1;
    for (let x = minX; x <= maxX; x += 2) {
      world.setVoxel(x, dougongY, minZ - stepOut, PALETTE.DOUGONG_CYAN, 'solid');
      world.setVoxel(x, dougongY, minZ, PALETTE.DOUGONG_RED, 'solid');
      world.setVoxel(x, dougongY + 1, minZ - stepOut, PALETTE.DOUGONG_GOLD, 'solid');

      world.setVoxel(x, dougongY, maxZ + stepOut, PALETTE.DOUGONG_CYAN, 'solid');
      world.setVoxel(x, dougongY, maxZ, PALETTE.DOUGONG_RED, 'solid');
      world.setVoxel(x, dougongY + 1, maxZ + stepOut, PALETTE.DOUGONG_GOLD, 'solid');
    }

    for (let z = minZ; z <= maxZ; z += 2) {
      world.setVoxel(minX - stepOut, dougongY, z, PALETTE.DOUGONG_CYAN, 'solid');
      world.setVoxel(minX, dougongY, z, PALETTE.DOUGONG_RED, 'solid');
      world.setVoxel(minX - stepOut, dougongY + 1, z, PALETTE.DOUGONG_GOLD, 'solid');

      world.setVoxel(maxX + stepOut, dougongY, z, PALETTE.DOUGONG_CYAN, 'solid');
      world.setVoxel(maxX, dougongY, z, PALETTE.DOUGONG_RED, 'solid');
      world.setVoxel(maxX + stepOut, dougongY + 1, z, PALETTE.DOUGONG_GOLD, 'solid');
    }
  }
}
