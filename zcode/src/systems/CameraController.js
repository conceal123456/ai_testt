import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * 镜头运镜与导览巡礼系统
 */
export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.controls = new OrbitControls(camera, domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.04; // 防止穿透地面
    this.controls.minDistance = 15;
    this.controls.maxDistance = 190;

    // 默认开场全景视角：完美鸟瞰中轴建筑群
    this.camera.position.set(65, 55, 75);
    this.controls.target.set(0, 6, 0);

    // 自动巡礼/环绕旋转
    this.autoRotate = true;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.65;

    // 平滑视角过渡状态机
    this.isTransitioning = false;
    this.transitionProgress = 0;
    this.startPos = new THREE.Vector3();
    this.targetPos = new THREE.Vector3();
    this.startLookAt = new THREE.Vector3();
    this.targetLookAt = new THREE.Vector3();

    // 视角预设表（经过精确几何碰撞规避与黄金视线调校）
    this.viewPresets = {
      panorama: {
        name: '全景俯瞰',
        subtitle: '中轴对称·紫禁气象',
        pos: [65, 52, 72],
        target: [0, 8, 4],
        desc: '全览中轴七座殿阁与四合院落布局，飞檐流金，红墙碧瓦交相辉映。严格遵照中国古代建筑礼制，呈现主次分明的宫廷规制。'
      },
      gate: {
        name: '山门入口',
        subtitle: '敕建福佑·三门并峙',
        pos: [0, 14, 76],
        target: [0, 6, 40],
        desc: '山门三券拱门洞耸立，汉白玉步阶与镇门石狮威严庄重，飞檐碧瓦耸拔秀美。'
      },
      courtyard: {
        name: '金水庭院',
        subtitle: '金水通津·鼎炉袅袅',
        pos: [0, 9, 36],
        target: [0, 6, 10],
        desc: '凭栏望向汉白玉金水桥，青石御道贯穿庭院，青铜巨炉轻烟缕缕，苍松银杏掩映。'
      },
      mainhall: {
        name: '太和主殿',
        subtitle: '重檐庑殿·九龙丹陛',
        pos: [18, 16, 26],
        target: [0, 10, -18],
        desc: '全境最高等级核心大殿，须弥三重台基承载重檐五脊大顶，飞檐翼角高高起翘。'
      },
      pagoda: {
        name: '千佛宝塔',
        subtitle: '五级浮屠·宝刹鎏金',
        pos: [-10, 26, 8],
        target: [-34, 18, -32],
        desc: '高耸入云的五层八角古塔，每层层檐飞翘悬铃，塔尖相轮摩尼宝珠流光溢彩。'
      },
      belltower: {
        name: '钟鼓耸秀',
        subtitle: '晨钟暮鼓·重檐积翠',
        pos: [10, 10, 28],
        target: [26, 8, 18],
        desc: '重檐攒尖钟楼与鼓楼东西对峙，内悬千斤青铜古钟与仪仗神鼓。'
      }
    };

    // 用户手动交互时暂停自动巡礼，松手一段时间后可继续或保持
    this.controls.addEventListener('start', () => {
      if (this.autoRotate) {
        this.controls.autoRotate = false;
      }
    });
  }

  moveToPreset(key, duration = 1.2) {
    const p = this.viewPresets[key];
    if (!p) return;

    // 暂停自动旋转
    this.autoRotate = false;
    this.controls.autoRotate = false;

    // 获取起点与终点
    const startPos = this.camera.position.clone();
    const endPos = new THREE.Vector3(...p.pos);
    const startTarget = this.controls.target.clone();
    const endTarget = new THREE.Vector3(...p.target);

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / durationMs, 1);
      // Smoothstep 缓动
      const ease = t * t * (3 - 2 * t);

      this.camera.position.lerpVectors(startPos, endPos, ease);
      this.controls.target.lerpVectors(startTarget, endTarget, ease);
      this.controls.update();

      if (t < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    this.controls.autoRotate = this.autoRotate;
    return this.autoRotate;
  }

  update() {
    this.controls.update();
  }
}
