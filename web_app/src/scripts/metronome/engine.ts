/**
 * 메트로놈 오디오 엔진 — Web Audio 룩어헤드 스케줄러.
 * SSOT: _design_docs/05_update_backlog/05-1_add_new_function/20_metronome.md PART B(B2·B3).
 *
 * ⚠️ 이 모듈은 지연 로드 전용이다(app.ts 가 FAB 최초 클릭/전용 페이지에서 `import()`).
 *    정적 import 로 끌어오면 메트로놈을 안 쓰는 페이지에도 오디오 코드가 실려 V2 게이트가 깨진다.
 *
 * 타이밍 원리(Chris Wilson, "A Tale of Two Clocks"):
 *   느슨한 setInterval(25ms)이 "앞으로 SCHEDULE_AHEAD 초 안에 울릴 소리"를 미리 훑어
 *   AudioContext.currentTime(하드웨어 샘플 클록) 위에 예약한다. JS 타이머가 흔들려도 발음 시각은
 *   오디오 스레드가 지키므로 드리프트가 누적되지 않는다. setInterval 로 직접 발음하는 방식은 금지.
 *
 * 시각 동기: 예약과 동시에 `visualQueue` 에 {pulse, role, time} 을 넣고, 패널의 requestAnimationFrame
 *   루프가 `drainDueBeats()` 로 "이미 지난" 이벤트만 꺼내 쓴다 → 눈과 귀가 같은 큐를 본다.
 */
import type { Meter, MetronomeSettings, PulseRole, Subdivision, Timbre } from '../../types/metronome';

/* ------------------------------------------------------------------
 * 상수 (튜닝 포인트)
 * ---------------------------------------------------------------- */

/** 이 BPM 이상에서는 목소리 카운트를 자동 비활성하고 합성 클릭으로 폴백한다(B5 확정, 변경 가능). */
export const VOICE_MAX_BPM = 180;

/** 스케줄러 폴링 주기(ms). 짧을수록 설정 변경 반영이 빠르고, CPU 는 미미하게 더 쓴다. */
const LOOKAHEAD_MS = 25;

/** 한 번의 폴링에서 미리 예약해 둘 시간(초) — 탭이 보일 때. */
const SCHEDULE_AHEAD_S = 0.1;

/**
 * 탭이 숨겨졌을 때의 예약 창(초). 백그라운드에서 setInterval 은 1초 이상으로 throttle 되므로,
 * 0.1초 창으로는 소리에 구멍이 난다. 창을 넉넉히 열어 두면 throttle 되어도 예약이 끊기지 않는다.
 * 대가: 숨겨진 동안의 설정 변경 반영이 최대 이 시간만큼 늦다(사용자가 보고 있지 않은 구간이라 무해).
 */
const SCHEDULE_AHEAD_HIDDEN_S = 1.5;

/** 박자별 펄스 수 + 각 펄스의 역할(강박/백비트/약박). 6/8 은 8분음표 6펄스(B4 확정). */
export const METER_SPECS: Record<Meter, { pulses: number; roles: PulseRole[] }> = {
  '2/4': { pulses: 2, roles: ['strong', 'backbeat'] },
  '3/4': { pulses: 3, roles: ['strong', 'weak', 'weak'] },
  '4/4': { pulses: 4, roles: ['strong', 'backbeat', 'weak', 'backbeat'] },
  // 6/8 = 두 개의 3연 그룹. 4번째 8분(두 번째 그룹 머리)이 부(副)강박 → 드럼 키트에선 스네어.
  '6/8': { pulses: 6, roles: ['strong', 'weak', 'weak', 'backbeat', 'weak', 'weak'] },
};

/** 합성 클릭 음색표 — 역할별 주파수(Hz)/피크 게인. 세분음은 더 높고 훨씬 여리게. */
const CLICK_VOICES: Record<PulseRole | 'sub', { freq: number; gain: number }> = {
  strong: { freq: 1320, gain: 1 },
  backbeat: { freq: 990, gain: 0.62 },
  weak: { freq: 880, gain: 0.48 },
  sub: { freq: 1760, gain: 0.16 },
};

/** 드럼 키트 매핑 — 킥=강박 · 스네어=백비트 · 하이햇=약박/세분(여리게). */
const DRUM_MAP: Record<PulseRole, 'kick' | 'snare' | 'hihat'> = {
  strong: 'kick',
  backbeat: 'snare',
  weak: 'hihat',
};
const DRUM_GAIN: Record<PulseRole | 'sub', number> = {
  strong: 1,
  backbeat: 0.85,
  weak: 0.6,
  sub: 0.22,
};

/* ------------------------------------------------------------------
 * 샘플 슬롯 계약 (파일은 후속 — 없으면 합성 클릭으로 자동 폴백)
 * ---------------------------------------------------------------- */

/** 빌드 타임(lib/samples.server.ts)이 탐지한 실제 파일 URL. null = 해당 음색 미확보. */
export interface SampleUrls {
  drum: Record<'kick' | 'snare' | 'hihat', string> | null;
  voice: Record<string, string> | null;
}

export const EMPTY_SAMPLES: SampleUrls = { drum: null, voice: null };

/** 시각 표시용 박 이벤트(예약 시각 기준). */
export interface BeatEvent {
  /** 0-based 펄스 인덱스. */
  pulse: number;
  role: PulseRole;
  /** AudioContext.currentTime 축의 발음 예정 시각(초). */
  time: number;
}

type AudioContextCtor = typeof AudioContext;

function resolveAudioContext(): AudioContextCtor | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as { AudioContext?: AudioContextCtor; webkitAudioContext?: AudioContextCtor };
  return w.AudioContext ?? w.webkitAudioContext ?? null;
}

/* ------------------------------------------------------------------
 * 엔진
 * ---------------------------------------------------------------- */
export class MetronomeEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private timer: number | null = null;

  /** 다음 발음(세분 포함)의 예약 시각. */
  private nextNoteTime = 0;
  private pulseIndex = 0;
  private subIndex = 0;

  private visualQueue: BeatEvent[] = [];
  private buffers = new Map<string, AudioBuffer>();
  private pending = new Map<string, Promise<void>>();
  /** 디코드 전 원본 바이트 — AudioContext 없이도 미리 받아 둘 수 있어 첫 박 폴백을 막는다. */
  private encoded = new Map<string, ArrayBuffer>();
  private prefetching = new Map<string, Promise<void>>();

  /**
   * 이미 예약했지만 아직 울리지 않은 소스 노드(시각 큐와 같은 이유로 시간순). stop() 이
   * 이들을 취소하지 않으면 예약 창(숨김 탭에서는 최대 1.5초)만큼 소리가 더 새어 나온다.
   */
  private scheduled: { node: AudioScheduledSourceNode; time: number }[] = [];

  private settings: MetronomeSettings;
  private samples: SampleUrls;

  playing = false;

  /** 재생 상태가 바뀔 때마다 호출(FAB 아이콘·버튼 라벨 갱신용). */
  onPlayingChange: ((playing: boolean) => void) | null = null;

  constructor(settings: MetronomeSettings, samples: SampleUrls = EMPTY_SAMPLES) {
    this.settings = { ...settings };
    this.samples = samples;
  }

  /* ---- 설정 ---- */

  getSettings(): MetronomeSettings {
    return { ...this.settings };
  }

  /**
   * 재생 중에도 즉시 반영된다(다음 예약분부터). 박자가 바뀌면 펄스 인덱스를 새 길이에 맞춰
   * 접어 두어 "존재하지 않는 박"을 가리키지 않게 한다.
   */
  update(patch: Partial<MetronomeSettings>): void {
    this.settings = { ...this.settings, ...patch };
    if (patch.meter) {
      this.pulseIndex = this.pulseIndex % METER_SPECS[this.settings.meter].pulses;
    }
    if (patch.volume !== undefined && this.master && this.ctx) {
      // 급격한 게인 점프는 틱 잡음을 만든다 → 아주 짧은 램프로 부드럽게.
      this.master.gain.setTargetAtTime(this.settings.volume, this.ctx.currentTime, 0.01);
    }
    if (patch.timbre || patch.bpm) {
      // 음색을 바꾼 순간부터 미리 받아 둔다 → 재생 버튼을 눌렀을 때 첫 박부터 제 소리가 난다.
      this.prefetch();
      void this.preloadSamples();
    }
  }

  /** 현재 실제로 울릴 음색 — 목소리는 VOICE_MAX_BPM 이상에서 자동으로 클릭이 된다. */
  effectiveTimbre(): Timbre {
    const { timbre, bpm } = this.settings;
    if (timbre === 'voice' && bpm >= VOICE_MAX_BPM) return 'click';
    if (timbre === 'drum' && !this.samples.drum) return 'click';
    if (timbre === 'voice' && !this.samples.voice) return 'click';
    return timbre;
  }

  /** 목소리를 골랐지만 BPM 때문에 지금은 못 쓰는 상태인지(안내 문구 노출 조건). */
  voiceThrottled(): boolean {
    return this.settings.timbre === 'voice' && this.settings.bpm >= VOICE_MAX_BPM;
  }

  /* ---- 재생 ---- */

  async start(): Promise<void> {
    if (this.playing) return;
    const Ctor = resolveAudioContext();
    if (!Ctor) return;

    if (!this.ctx) {
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.settings.volume;
      this.master.connect(this.ctx.destination);
    }
    // 모바일/자동재생 정책: 사용자 제스처 안에서 resume 해야 소리가 난다.
    if (this.ctx.state === 'suspended') await this.ctx.resume();

    // 버튼·FAB 는 먼저 반응시킨다(체감 지연 0). 실제 발음은 아래 준비가 끝난 뒤 시작.
    this.playing = true;
    this.onPlayingChange?.(true);

    // 샘플 음색인데 아직 디코드 전이면 여기서 기다린다. 기다리지 않으면 첫 한두 박이
    // 합성 클릭으로 새어 나온다(드럼을 골랐는데 "틱" 하고 시작하는 문제).
    // mount 시 prefetch() 로 바이트를 미리 받아 두므로 보통 이 await 는 즉시 끝난다.
    if (!this.samplesReady()) await this.preloadSamples();
    if (!this.playing) return; // 기다리는 사이 사용자가 정지했으면 취소.

    this.pulseIndex = 0;
    this.subIndex = 0;
    this.visualQueue = [];
    this.scheduled = [];
    // 첫 발음까지 약간의 여유 — 예약 창보다 앞서면 스케줄러가 즉시 과거를 예약하게 된다.
    this.nextNoteTime = this.ctx.currentTime + 0.08;

    this.timer = window.setInterval(() => this.tick(), LOOKAHEAD_MS);
    this.tick();
  }

  /**
   * 패널이 붙는 시점에 호출 — 현재 음색의 샘플 바이트를 미리 받아 둔다.
   * AudioContext 를 만들지 않으므로 사용자 제스처 없이 불러도 자동재생 정책 경고가 없다.
   */
  prefetch(): void {
    for (const url of this.timbreUrls()) {
      if (this.buffers.has(url) || this.encoded.has(url) || this.prefetching.has(url)) continue;
      const task = fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`sample ${res.status}`);
          return res.arrayBuffer();
        })
        .then((data) => {
          this.encoded.set(url, data);
        })
        .catch(() => {
          // 파일 미확보 — 합성 클릭 폴백으로 계속 동작한다.
        })
        .finally(() => {
          this.prefetching.delete(url);
        });
      this.prefetching.set(url, task);
    }
  }

  stop(): void {
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    this.visualQueue = [];
    this.cancelScheduled();
    if (!this.playing) return;
    this.playing = false;
    this.onPlayingChange?.(false);
    // AudioContext 는 닫지 않는다(재시작 지연·모바일 재개 제약 회피). 재생 재개가 즉각적이다.
  }

  /** 아직 울리지 않은 예약을 취소한다 — 시작 전 노드에 stop() 을 걸면 그 노드는 소리를 내지 않는다. */
  private cancelScheduled(): void {
    const now = this.now();
    for (const item of this.scheduled) {
      if (item.time <= now) continue;
      try {
        item.node.stop(now);
      } catch {
        // 이미 stop 된 노드 — 무시.
      }
    }
    this.scheduled = [];
  }

  toggle(): void {
    if (this.playing) this.stop();
    else void this.start();
  }

  /** AudioContext 시계(초). 컨텍스트가 아직 없으면 0. */
  now(): number {
    return this.ctx?.currentTime ?? 0;
  }

  /**
   * 이미 발음 시각이 지난 박 이벤트를 큐에서 꺼낸다(패널의 rAF 루프가 호출).
   * 탭이 숨겨져 rAF 가 멈춘 동안 쌓인 과거 이벤트도 여기서 함께 비워진다.
   */
  drainDueBeats(): BeatEvent[] {
    const now = this.now();
    const due: BeatEvent[] = [];
    while (this.visualQueue.length > 0 && this.visualQueue[0]!.time <= now) {
      due.push(this.visualQueue.shift()!);
    }
    return due;
  }

  /* ---- 스케줄러 ---- */

  private scheduleAhead(): number {
    return typeof document !== 'undefined' && document.hidden
      ? SCHEDULE_AHEAD_HIDDEN_S
      : SCHEDULE_AHEAD_S;
  }

  private tick(): void {
    const ctx = this.ctx;
    if (!ctx || !this.playing) return;

    const horizon = ctx.currentTime + this.scheduleAhead();
    while (this.nextNoteTime < horizon) {
      this.scheduleHit(this.pulseIndex, this.subIndex, this.nextNoteTime);
      this.advance();
    }

    // rAF 가 멈춘(숨겨진) 탭에서 큐가 무한히 자라지 않게, 충분히 지난 이벤트는 버린다.
    // 두 배열 모두 시간 오름차순으로만 쌓이므로 앞에서 shift 하면 된다(매 틱 filter 할당 회피).
    const stale = ctx.currentTime - 0.5;
    while (this.visualQueue.length > 0 && this.visualQueue[0]!.time < stale) {
      this.visualQueue.shift();
    }
    while (this.scheduled.length > 0 && this.scheduled[0]!.time < stale) {
      this.scheduled.shift();
    }
  }

  private advance(): void {
    const { bpm, meter, subdivision } = this.settings;
    const spec = METER_SPECS[meter];
    // 매 스텝 현재 설정으로 다시 계산 → 재생 중 BPM/세분 변경이 다음 발음부터 즉시 반영된다.
    this.nextNoteTime += 60 / bpm / subdivision;
    this.subIndex += 1;
    if (this.subIndex >= subdivision) {
      this.subIndex = 0;
      this.pulseIndex = (this.pulseIndex + 1) % spec.pulses;
    }
  }

  private scheduleHit(pulse: number, sub: number, time: number): void {
    const spec = METER_SPECS[this.settings.meter];
    const role = spec.roles[pulse] ?? 'weak';
    const isSub = sub > 0;

    if (!isSub) this.visualQueue.push({ pulse, role, time });

    const timbre = this.effectiveTimbre();
    if (timbre === 'drum') {
      const slot = isSub ? 'hihat' : DRUM_MAP[role];
      const url = this.samples.drum?.[slot];
      const gain = isSub ? DRUM_GAIN.sub : DRUM_GAIN[role];
      if (url && this.playSample(url, time, gain)) return;
    } else if (timbre === 'voice') {
      if (isSub) {
        // 세분은 목소리로 세지 않는다(겹침·혼란) — 아주 여린 클릭으로만 채운다.
        this.playClick(time, CLICK_VOICES.sub.freq, CLICK_VOICES.sub.gain);
        return;
      }
      const url = this.samples.voice?.[String(pulse + 1)];
      if (url && this.playSample(url, time, role === 'strong' ? 1 : 0.85)) return;
    }

    const voice = isSub ? CLICK_VOICES.sub : CLICK_VOICES[role];
    this.playClick(time, voice.freq, voice.gain);
  }

  /* ---- 발음 ---- */

  /**
   * 합성 클릭 — OscillatorNode + GainNode 엔벨로프(자산 0KB).
   * 삼각파 + 빠른 어택/지수 감쇠 = 날카롭지 않지만 또렷한 클릭(Toss 톤: 불쾌하지 않게).
   */
  private playClick(time: number, freq: number, peak: number): void {
    const ctx = this.ctx;
    const master = this.master;
    if (!ctx || !master) return;

    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    env.gain.setValueAtTime(0.0001, time);
    env.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), time + 0.002);
    env.gain.exponentialRampToValueAtTime(0.0001, time + 0.055);

    osc.connect(env);
    env.connect(master);
    osc.start(time);
    osc.stop(time + 0.07);
    this.scheduled.push({ node: osc, time });
  }

  /**
   * 샘플 발음 — 매 발음마다 새 AudioBufferSourceNode(1회용 노드).
   * 샘플 길이가 박 간격보다 길어도 자연스럽게 겹쳐 울린다(단일 <audio> 방식의 끊김 문제 없음).
   * 아직 디코드되지 않았으면 false 를 돌려 호출부가 합성 클릭으로 폴백하게 한다.
   */
  private playSample(url: string, time: number, gain: number): boolean {
    const ctx = this.ctx;
    const master = this.master;
    const buffer = this.buffers.get(url);
    if (!ctx || !master || !buffer) return false;

    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const g = ctx.createGain();
    g.gain.value = gain;
    src.connect(g);
    g.connect(master);
    src.start(time);
    this.scheduled.push({ node: src, time });
    return true;
  }

  /* ---- 샘플 로드 ---- */

  /** 현재 음색이 실제로 쓰는 샘플 URL 목록(안 쓰는 음색은 네트워크 0). */
  private timbreUrls(): string[] {
    const { timbre, bpm } = this.settings;
    if (timbre === 'drum' && this.samples.drum) return Object.values(this.samples.drum);
    if (timbre === 'voice' && this.samples.voice && bpm < VOICE_MAX_BPM) {
      return Object.values(this.samples.voice);
    }
    return [];
  }

  /** 현재 음색에 필요한 버퍼가 모두 디코드돼 있는지(= 폴백 없이 바로 시작할 수 있는지). */
  private samplesReady(): boolean {
    return this.timbreUrls().every((url) => this.buffers.has(url));
  }

  /** 현재 음색에 필요한 샘플만 받아 디코드한다. */
  private async preloadSamples(): Promise<void> {
    await Promise.all(this.timbreUrls().map((u) => this.loadBuffer(u)));
  }

  private loadBuffer(url: string): Promise<void> {
    if (this.buffers.has(url)) return Promise.resolve();
    const inFlight = this.pending.get(url);
    if (inFlight) return inFlight;

    const ctx = this.ctx;
    if (!ctx) return Promise.resolve();

    // prefetch() 가 미리 받아 둔 바이트가 있으면 네트워크를 건너뛴다.
    const cached = this.encoded.get(url);
    const bytes = cached
      ? Promise.resolve(cached)
      : (this.prefetching.get(url) ?? Promise.resolve()).then(() => {
          const late = this.encoded.get(url);
          if (late) return late;
          return fetch(url).then((res) => {
            if (!res.ok) throw new Error(`sample ${res.status}`);
            return res.arrayBuffer();
          });
        });

    const task = bytes
      .then((data) => {
        // decodeAudioData 는 전달한 ArrayBuffer 를 detach 한다 → 재사용 불가라 캐시에서 뺀다.
        this.encoded.delete(url);
        return ctx.decodeAudioData(data);
      })
      .then((buf) => {
        this.buffers.set(url, buf);
      })
      .catch(() => {
        // 파일 미확보/디코드 실패 — 조용히 합성 클릭 폴백(사용자에겐 소리가 계속 난다).
      })
      .finally(() => {
        this.pending.delete(url);
      });

    this.pending.set(url, task);
    return task;
  }
}

/** 박자별 펄스 수(시각 동그라미 개수) — 패널이 SSR 마크업 없이 그릴 때 쓴다. */
export function pulseCount(meter: Meter): number {
  return METER_SPECS[meter].pulses;
}

/** 세분 옵션 목록(UI 세그먼트 순서 SSOT). */
export const SUBDIVISION_OPTIONS: Subdivision[] = [1, 2, 3, 4];
