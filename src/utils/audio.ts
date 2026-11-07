// Web Audio API synth for romantic ambient soundscapes and celebration chimes
// Zero external assets or network dependencies, 100% reliable

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientInterval: number | null = null;
  private isPlayingAmbient: boolean = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTone(freq: number, duration: number = 0.5, type: OscillatorType = 'sine', gainLevel: number = 0.15) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(gainLevel, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy or device fallback
    }
  }

  // Playful dodge blip sound when she tries to tap "No"
  public playDodgeSound() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.15);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch {}
  }

  // Sweet chime for interactive taps (letter unfold, coupons, etc.)
  public playChime() {
    if (this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 0.8, 'sine', 0.08);
      }, idx * 90);
    });
  }

  // Tactile wax stamp seal sound: authentic warm press followed by harmonic chime
  public playSealSound() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Stamp press thump
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.2);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);

      // Warm harmonic chime shimmer
      const chord = [440, 554.37, 659.25, 880];
      chord.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 1.2, 'triangle', 0.06);
        }, 150 + idx * 80);
      });
    } catch {}
  }

  // Celestial celebration melody when she clicks "I Forgive You"
  public playCelebrationFanfare() {
    if (this.isMuted) return;
    const melody = [
      { f: 523.25, d: 0.3 }, // C5
      { f: 659.25, d: 0.3 }, // E5
      { f: 783.99, d: 0.3 }, // G5
      { f: 1046.5, d: 0.6 }, // C6
      { f: 880.00, d: 0.3 }, // A5
      { f: 1046.5, d: 0.8 }, // C6
    ];
    let time = 0;
    melody.forEach((note) => {
      setTimeout(() => {
        this.playTone(note.f, note.d, 'sine', 0.12);
      }, time * 1000);
      time += note.d * 0.75;
    });
  }

  // Toggle ambient gentle lofi harmonic harp arpeggios
  public toggleAmbientMusic(onStateChange?: (playing: boolean) => void): boolean {
    if (this.isPlayingAmbient) {
      this.stopAmbientMusic();
      onStateChange?.(false);
      return false;
    } else {
      this.startAmbientMusic();
      onStateChange?.(true);
      return true;
    }
  }

  public startAmbientMusic() {
    this.initCtx();
    this.isPlayingAmbient = true;
    
    // Romantic pentatonic chords: F major 7 / C major 9 feel
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // C, E, G, B
      [220.00, 261.63, 329.63, 392.00], // A, C, E, G
      [174.61, 220.00, 261.63, 329.63], // F, A, C, E
      [196.00, 246.94, 293.66, 392.00], // G, B, D, G
    ];

    let chordIdx = 0;
    const playNextChord = () => {
      if (!this.isPlayingAmbient || this.isMuted) return;
      const currentChord = chords[chordIdx % chords.length];
      chordIdx++;

      currentChord.forEach((note, nIdx) => {
        setTimeout(() => {
          if (this.isPlayingAmbient && !this.isMuted) {
            this.playTone(note, 2.4, 'sine', 0.04);
          }
        }, nIdx * 350);
      });
    };

    playNextChord();
    this.ambientInterval = window.setInterval(playNextChord, 3200);
  }

  public stopAmbientMusic() {
    this.isPlayingAmbient = false;
    if (this.ambientInterval !== null) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isPlayingAmbient) {
      this.stopAmbientMusic();
    }
    return this.isMuted;
  }

  public getMuted() {
    return this.isMuted;
  }

  public getIsPlayingAmbient() {
    return this.isPlayingAmbient;
  }
}

export const sound = new SoundEngine();
