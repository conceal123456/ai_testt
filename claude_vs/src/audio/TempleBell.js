/**
 * Procedural Temple Bronze Bell Chime Synthesizer
 * Uses native Web Audio API - zero external sound files required.
 * Generates rich, resonant metallic overtones of an ancient temple bell.
 */
export class TempleBell {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  strike() {
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const baseFreq = 216; // Deep soothing fundamental (Hz)

    // Overtone partials of an ancient bronze bell
    const partials = [
      { ratio: 0.5, gain: 0.4, decay: 4.5 },  // Sub-harmonic "hum"
      { ratio: 1.0, gain: 0.6, decay: 4.0 },  // Prime fundamental
      { ratio: 1.2, gain: 0.5, decay: 3.2 },  // Tierce (minor third)
      { ratio: 1.5, gain: 0.4, decay: 2.8 },  // Quint (fifth)
      { ratio: 2.0, gain: 0.35, decay: 2.2 }, // Nominal (octave)
      { ratio: 2.7, gain: 0.25, decay: 1.6 }, // Super-quint
      { ratio: 3.8, gain: 0.15, decay: 1.0 }  // High metallic shimmer
    ];

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.35, now);
    masterGain.connect(this.ctx.destination);

    for (const p of partials) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      // Slight detune for warm acoustic chorus beating
      osc.frequency.setValueAtTime(baseFreq * p.ratio + (Math.random() * 0.8 - 0.4), now);

      gain.gain.setValueAtTime(0, now);
      // Instant strike attack
      gain.gain.linearRampToValueAtTime(p.gain, now + 0.008);
      // Exponential bronze decay
      gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + p.decay + 0.1);
    }
  }
}
