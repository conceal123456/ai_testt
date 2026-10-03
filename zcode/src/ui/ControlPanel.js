/**
 * 获奖级新中式国潮玻璃拟态交互面板
 * 集成：视角切换、四时天象、建筑规制典籍卡片、性能监视器、禅意音频
 */
export class ControlPanel {
  constructor({ cameraController, lightingSystem, zenAudio, totalVoxels }) {
    this.camCtrl = cameraController;
    this.lighting = lightingSystem;
    this.zenAudio = zenAudio;
    this.totalVoxels = totalVoxels || 52000;

    this.fps = 60;
    this.frameCount = 0;
    this.lastTime = performance.now();

    this.createDom();
    this.bindEvents();
  }

  createDom() {
    const root = document.createElement('div');
    root.id = 'voxel-palace-ui';
    root.innerHTML = `
      <!-- 顶部 Hero 标牌 -->
      <header class="palace-header">
        <div class="seal-badge">天工</div>
        <div class="header-titles">
          <h1>天工营造 · 体素紫宸</h1>
          <p class="subtitle">3D VOXEL PALACE & TEMPLE ENSEMBLE · THREE.JS</p>
        </div>
        <div class="status-tags">
          <span class="tag-pill" id="fps-display">60 FPS</span>
          <span class="tag-pill gold" id="voxel-count-display">5万+ 体素</span>
          <span class="tag-pill cyan">DrawCalls ≤ 8</span>
        </div>
      </header>

      <!-- 左侧：建筑规制研析与信息卡片 -->
      <aside class="building-card glass-panel" id="building-card">
        <div class="card-ornament"></div>
        <div class="card-header">
          <span class="card-chapter">【中轴形制】</span>
          <h2 id="card-title">全景俯瞰</h2>
        </div>
        <div class="card-subtitle" id="card-subtitle">中轴对称 · 紫禁气象</div>
        <div class="card-divider"></div>
        <p class="card-desc" id="card-desc">
          全览中轴七座殿阁与四合院落布局，飞檐流金，红墙碧瓦交相辉映。严格遵照中国古代建筑礼制，呈现主次分明的宫廷规制。
        </p>
        <div class="card-meta">
          <div class="meta-item">
            <span class="meta-label">屋顶形制</span>
            <span class="meta-val" id="card-roof">庑殿 / 歇山 / 攒尖</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">木构法式</span>
            <span class="meta-val" id="card-structure">重檐出挑 · 斗拱彩画</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">体素用色</span>
            <span class="meta-val">朱红 · 琉璃金 · 汉白玉</span>
          </div>
        </div>
      </aside>

      <!-- 底部主控台：视角与四时 -->
      <footer class="control-dock glass-panel">
        <!-- 视角切换 -->
        <div class="dock-section">
          <div class="section-title">
            <span class="icon">🧭</span>
            <span>名胜巡礼</span>
          </div>
          <div class="btn-group" id="views-group">
            <button class="pill-btn active" data-view="panorama">全景俯瞰</button>
            <button class="pill-btn" data-view="gate">山门入口</button>
            <button class="pill-btn" data-view="courtyard">金水庭院</button>
            <button class="pill-btn" data-view="mainhall">太和主殿</button>
            <button class="pill-btn" data-view="pagoda">千佛宝塔</button>
            <button class="pill-btn" data-view="belltower">钟鼓耸秀</button>
          </div>
        </div>

        <div class="dock-divider"></div>

        <!-- 四时天象 -->
        <div class="dock-section">
          <div class="section-title">
            <span class="icon">🌅</span>
            <span>四时天象</span>
          </div>
          <div class="btn-group" id="time-group">
            <button class="pill-btn" data-time="noon">☀️ 晌午晴日</button>
            <button class="pill-btn active" data-time="sunset">🌇 落霞孤鹜</button>
            <button class="pill-btn" data-time="night">🌙 月夜华灯</button>
            <button class="pill-btn" data-time="dawn">🌄 晨曦紫气</button>
          </div>
        </div>

        <div class="dock-divider"></div>

        <!-- 辅助开关 -->
        <div class="dock-actions">
          <button class="action-btn active" id="btn-autorotate" title="自动环绕导览">
            <span class="btn-icon">🔄</span>
            <span class="btn-text">环绕巡游</span>
          </button>
          <button class="action-btn" id="btn-audio" title="开启古刹禅意磬音">
            <span class="btn-icon">🔔</span>
            <span class="btn-text">禅意韶乐</span>
          </button>
        </div>
      </footer>

      <!-- 右上角操作提示 -->
      <div class="help-badge glass-panel">
        <span>🖱️ 旋转: 左键 / 漫游: 右键 / 缩放: 滚轮</span>
      </div>
    `;

    document.body.appendChild(root);
    this.injectStyles();
  }

  injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --c-cinnabar: #c0392b;
        --c-gold: #f39c12;
        --c-amber: #e67e22;
        --c-jade: #0d9488;
        --c-paper: #fcf9f2;
        --c-dark-paper: rgba(18, 22, 33, 0.78);
        --c-border: rgba(243, 156, 18, 0.35);
        --font-serif: "Noto Serif SC", "STSong", "Songti SC", "SimSun", serif;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        overflow: hidden;
        user-select: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      .glass-panel {
        background: var(--c-dark-paper);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid var(--c-border);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), inset 0 0 16px rgba(243, 156, 18, 0.08);
        color: #f0f3f8;
      }

      /* 顶部标牌 */
      .palace-header {
        position: absolute;
        top: 20px;
        left: 24px;
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 100;
        pointer-events: none;
        background: rgba(18, 22, 33, 0.75);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        padding: 8px 18px 8px 10px;
        border-radius: 40px;
        border: 1px solid rgba(243, 156, 18, 0.35);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
      }

      .seal-badge {
        width: 44px;
        height: 44px;
        background: var(--c-cinnabar);
        color: #fff;
        border: 2px solid #ff7979;
        box-shadow: 0 4px 12px rgba(192, 57, 43, 0.45);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-serif);
        font-weight: 900;
        font-size: 20px;
        letter-spacing: 2px;
      }

      .header-titles h1 {
        font-family: var(--font-serif);
        font-size: 24px;
        font-weight: 800;
        color: #fff;
        letter-spacing: 3px;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.65), 0 0 16px rgba(243, 156, 18, 0.4);
      }

      .header-titles .subtitle {
        font-size: 11px;
        color: #f39c12;
        letter-spacing: 2px;
        font-weight: 600;
        margin-top: 2px;
      }

      .status-tags {
        display: flex;
        gap: 8px;
        margin-left: 12px;
      }

      .tag-pill {
        padding: 4px 10px;
        font-size: 11px;
        font-weight: 600;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(8px);
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .tag-pill.gold {
        background: rgba(243, 156, 18, 0.18);
        color: #f1c40f;
        border-color: rgba(243, 156, 18, 0.5);
      }
      .tag-pill.cyan {
        background: rgba(13, 148, 136, 0.2);
        color: #5eead4;
        border-color: rgba(13, 148, 136, 0.5);
      }

      /* 建筑研析卡片 */
      .building-card {
        position: absolute;
        top: 86px;
        left: 24px;
        width: 320px;
        border-radius: 12px;
        padding: 20px 22px;
        z-index: 90;
        pointer-events: auto;
        transition: all 0.35s cubic-bezier(0.2, 0.9, 0.3, 1);
      }

      .card-header {
        display: flex;
        align-items: baseline;
        gap: 8px;
      }

      .card-chapter {
        font-size: 12px;
        color: var(--c-gold);
        letter-spacing: 1px;
      }

      .card-header h2 {
        font-family: var(--font-serif);
        font-size: 20px;
        color: #ffffff;
        letter-spacing: 1.5px;
      }

      .card-subtitle {
        font-size: 13px;
        color: #94a3b8;
        margin-top: 4px;
        font-family: var(--font-serif);
        letter-spacing: 1px;
      }

      .card-divider {
        height: 1px;
        background: linear-gradient(90deg, rgba(243, 156, 18, 0.6), transparent);
        margin: 12px 0 14px 0;
      }

      .card-desc {
        font-size: 13px;
        line-height: 1.7;
        color: #cbd5e1;
      }

      .card-meta {
        margin-top: 16px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 10px 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .meta-item {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }

      .meta-label {
        color: #94a3b8;
      }

      .meta-val {
        color: #f1c40f;
        font-weight: 500;
      }

      /* 底部主控制台 */
      .control-dock {
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px 20px;
        border-radius: 40px;
        z-index: 100;
        pointer-events: auto;
      }

      .dock-section {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        font-weight: 600;
        color: #e2e8f0;
        white-space: nowrap;
        font-family: var(--font-serif);
      }

      .btn-group {
        display: flex;
        gap: 6px;
      }

      .pill-btn {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #cbd5e1;
        padding: 7px 13px;
        border-radius: 20px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.25s ease;
        white-space: nowrap;
      }

      .pill-btn:hover {
        background: rgba(243, 156, 18, 0.2);
        border-color: rgba(243, 156, 18, 0.5);
        color: #fff;
        transform: translateY(-1px);
      }

      .pill-btn.active {
        background: linear-gradient(135deg, #c0392b, #d35400);
        border-color: #f39c12;
        color: #fff;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(192, 57, 43, 0.4);
      }

      .dock-divider {
        width: 1px;
        height: 28px;
        background: rgba(255, 255, 255, 0.15);
      }

      .dock-actions {
        display: flex;
        gap: 8px;
      }

      .action-btn {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #cbd5e1;
        padding: 7px 12px;
        border-radius: 20px;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.25s ease;
      }

      .action-btn:hover {
        background: rgba(255, 255, 255, 0.18);
        color: #fff;
      }

      .action-btn.active {
        background: rgba(13, 148, 136, 0.3);
        border-color: #14b8a6;
        color: #5eead4;
      }

      /* 提示栏 */
      .help-badge {
        position: absolute;
        top: 24px;
        right: 24px;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        color: #94a3b8;
        pointer-events: none;
      }

      @media (max-width: 1024px) {
        .control-dock {
          flex-direction: column;
          border-radius: 20px;
          bottom: 12px;
          width: 90%;
        }
        .dock-divider { display: none; }
        .building-card {
          width: 260px;
          padding: 14px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  bindEvents() {
    // 视角按钮
    const viewsGroup = document.getElementById('views-group');
    viewsGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (!btn) return;
      viewsGroup.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const viewKey = btn.dataset.view;
      this.camCtrl.moveToPreset(viewKey);
      this.updateCard(viewKey);

      const btnAuto = document.getElementById('btn-autorotate');
      if (btnAuto) btnAuto.classList.remove('active');
    });

    // 四时天象
    const timeGroup = document.getElementById('time-group');
    timeGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (!btn) return;
      timeGroup.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const timeKey = btn.dataset.time;
      this.lighting.applyPreset(timeKey);
    });

    // 自动环绕
    const btnAuto = document.getElementById('btn-autorotate');
    btnAuto.addEventListener('click', () => {
      const active = this.camCtrl.toggleAutoRotate();
      btnAuto.classList.toggle('active', active);
    });

    // 禅意音乐
    const btnAudio = document.getElementById('btn-audio');
    btnAudio.addEventListener('click', () => {
      const active = this.zenAudio.toggle();
      btnAudio.classList.toggle('active', active);
      btnAudio.querySelector('.btn-text').textContent = active ? '韶乐悠扬' : '禅意韶乐';
    });
  }

  updateCard(viewKey) {
    const p = this.camCtrl.viewPresets[viewKey];
    if (!p) return;

    document.getElementById('card-title').textContent = p.name;
    document.getElementById('card-subtitle').textContent = p.subtitle;
    document.getElementById('card-desc').textContent = p.desc;

    const roofMap = {
      panorama: '庑殿 / 歇山 / 攒尖',
      gate: '单檐歇山顶（绿琉璃瓦）',
      courtyard: '重檐垂脊勾边',
      mainhall: '重檐庑殿金顶（尊贵之极）',
      pagoda: '五层四角八方攒尖宝刹',
      belltower: '重檐四角攒尖宝顶'
    };

    const structMap = {
      panorama: '中轴礼制 · 庭院回廊',
      gate: '三门并峙 · 券拱门石',
      courtyard: '汉白玉金水桥 · 宝鼎焚香',
      mainhall: '三层汉白玉基 · 斗拱出跳',
      pagoda: '五级浮屠 · 飞檐铜铃',
      belltower: '敞轩木构 · 晨钟暮鼓'
    };

    document.getElementById('card-roof').textContent = roofMap[viewKey] || '中式传统规制';
    document.getElementById('card-structure').textContent = structMap[viewKey] || '木构榫卯斗拱';
  }

  updateFps() {
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
      this.frameCount = 0;
      this.lastTime = now;
      const el = document.getElementById('fps-display');
      if (el) {
        el.textContent = `${this.fps} FPS`;
        el.style.color = this.fps >= 45 ? '#4ade80' : (this.fps >= 30 ? '#facc15' : '#f87171');
      }
    }
  }
}
