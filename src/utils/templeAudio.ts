/**
 * Web Audio API based harmonic brass temple bell chime & sacred resonance.
 * Completely self-contained, no external MP3 dependencies.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a resonant, rich brass temple bell (ghanti) chime with realistic harmonics
 */
export function playTempleBell(): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Harmonic frequencies typical of a sanctum brass ghanti (fundamental ~ 740Hz + overtone ratios)
    const baseFreq = 740;
    const harmonics = [
      { ratio: 1.0, gain: 0.5, decay: 3.5 },
      { ratio: 1.62, gain: 0.35, decay: 2.8 },
      { ratio: 2.24, gain: 0.25, decay: 2.2 },
      { ratio: 3.16, gain: 0.15, decay: 1.8 },
      { ratio: 4.88, gain: 0.08, decay: 1.2 },
    ];

    harmonics.forEach(({ ratio, gain: maxGain, decay }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * ratio, now);

      // Strike attack & slow resonant ring decay
      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(maxGain * 0.4, now + 0.015);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay);
    });
  } catch {
    // Audio context may fail if user hasn't interacted yet, silently ignore
  }
}

/**
 * Plays a gentle, warm sacred chime for offering flowers or lighting a diya
 */
export function playChimeHarmonic(): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    [528, 660, 792, 1056].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gainNode.gain.setValueAtTime(0.0001, now + idx * 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.8);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 1.9);
    });
  } catch {
    // Silently ignore
  }
}
