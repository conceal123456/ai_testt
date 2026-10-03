/**
 * 古风纯电声物理建模音频合成器 (Traditional Chinese Ambient Sound Synthesizer)
 * 基于 Web Audio API，无需加载任何外部音频文件，离线即刻可用
 * 包含：古筝/古琴泛音五声音阶 (宫商角徵羽) 与 檐角铜铃微风声
 */

export class ZenAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    // 中国传统五声音阶 (G4, A4, C5, D5, E5, G5, A5)
    this.pentatonicFrequencies = [
      392.00, // 徵 (Sol)
      440.00, // 羽 (La)
      523.25, // 宫 (Do)
      587.33, // 商 (Re)
      659.25, // 角 (Mi)
      783.99, // 徵 (Sol high)
      880.00, // 羽 (La high)
      1046.50 // 宫 (Do high)
    ];
  }

  _initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // 模拟古琴/古筝拨弦音色 (Plucked String Synthesizer)
  playPluck(freq = 523.25) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 2, now); // 高频泛音

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + 1.8);

    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(0.12, now + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.6);
    osc2.stop(now + 2.6);
  }

  // 模拟微风拂过檐角铜铃 (Wind Chime Bell Sound)
  playChime() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const chimeFreqs = [1567.98, 1760.00, 2093.00, 2349.32];
    const freq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 3.1);
  }

  toggle() {
    this._initContext();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    this._initContext();
    this.isPlaying = true;
    this._scheduleNextNote();
  }

  _scheduleNextNote() {
    if (!this.isPlaying) return;

    // 随机演奏五声调式音符
    const randFreq = this.pentatonicFrequencies[
      Math.floor(Math.random() * this.pentatonicFrequencies.length)
    ];
    this.playPluck(randFreq);

    // 偶尔伴随风铃声
    if (Math.random() < 0.4) {
      setTimeout(() => this.playChime(), 400 + Math.random() * 800);
    }

    const nextDelay = 1800 + Math.random() * 2600;
    this.timer = setTimeout(() => this._scheduleNextNote(), nextDelay);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
