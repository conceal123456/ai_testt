/**
 * 纯 Web Audio API 合成的古风禅意磬音与古琴五音 (无需任何外置音频文件)
 */
export class ZenAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startAmbient();
    } else {
      this.stop();
    }
    return this.isPlaying;
  }

  startAmbient() {
    // 宫商角徵羽五声音阶 (Pentatonic Scales)
    const scale = [220, 247.5, 277.18, 329.63, 370.0, 440, 495, 554.37, 659.25];

    const playTone = () => {
      if (!this.isPlaying || !this.ctx) return;

      const freq = scale[Math.floor(Math.random() * scale.length)];
      this.playBell(freq, 2.8 + Math.random() * 2.0);

      // 下一次发音随机间隔 2.5 ~ 5.5 秒
      const nextDelay = 2500 + Math.random() * 3000;
      this.timer = setTimeout(playTone, nextDelay);
    };

    playTone();
  }

  playBell(freq, duration = 3.5) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // 正弦波与金属微泛音
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // 泛音乘子
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.76, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.2, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.exponentialRampToValueAtTime(0.06, now + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.7);

    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(this.ctx.destination);
    gain2.connect(this.ctx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration);
    osc2.stop(now + duration);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
