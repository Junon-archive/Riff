/**
 * 메트로놈 패널 컨트롤러 — 마크업(MetronomePanel.astro) ↔ 오디오 엔진 배선.
 * SSOT: 20_metronome.md PART B.
 *
 * ⚠️ 지연 로드 전용 모듈 — app.ts 가 `import('./metronome/panel')` 로만 불러온다(V2 게이트).
 *
 * 셸 중립: 레슨 오버레이의 패널이든 전용 페이지의 패널이든 `mountMetronome(root)` 하나로 붙는다.
 * 엔진은 모듈 싱글턴이라 오버레이를 닫아도(=DOM 은 그대로, .show 만 제거) 소리는 계속 난다(A0).
 * 레슨 이동 시 정지는 app.ts 의 `astro:before-swap` 이 stopMetronome() 을 부르는 것으로 처리한다.
 */
import { EMPTY_SAMPLES, METER_SPECS, MetronomeEngine } from './engine';
import type { SampleUrls } from './engine';
import {
  BPM_MAX,
  BPM_MIN,
  clampBpm,
  getMetronomeSettings,
  setMetronomeSettings,
} from '../../lib/storage';
import { t } from '../../lib/i18n';
import type { Meter, MetronomeSettings, Subdivision, Timbre } from '../../types/metronome';

/** 탭 사이 이 시간(ms)을 넘기면 새로 세기 시작한다. */
const TAP_RESET_MS = 2000;
/** 평균에 쓰는 최근 간격 개수(많을수록 안정적·둔감). */
const TAP_WINDOW = 4;
/** 설정 저장 디바운스(ms) — 슬라이더 드래그마다 쓰지 않도록. */
const PERSIST_DEBOUNCE_MS = 300;

let engine: MetronomeEngine | null = null;
let boundRoot: HTMLElement | null = null;
let rafId = 0;
let persistTimer = 0;
let taps: number[] = [];

/* ------------------------------------------------------------------
 * 공개 API
 * ---------------------------------------------------------------- */

/**
 * 패널 DOM 에 컨트롤러를 붙인다(멱등 — 같은 root 를 다시 넘기면 UI 동기화만).
 * View Transitions 로 DOM 이 교체되면 새 root 로 다시 호출된다(리스너는 옛 노드와 함께 사라진다).
 */
export function mountMetronome(root: HTMLElement): void {
  const samples = readSamples(root);
  if (!engine) {
    engine = new MetronomeEngine(getMetronomeSettings(), samples);
    engine.onPlayingChange = (playing) => {
      syncFab(playing);
      if (boundRoot) syncToggle(boundRoot, playing);
      if (playing) {
        startRaf();
        return;
      }
      stopRaf();
      // 정지하면 점등을 반드시 지운다 — 남아 있으면 멈췄는데도 울리는 중처럼 보인다.
      // (정지 버튼·레슨 이동 등 어디서 멈추든 이 콜백을 지나므로 한 곳에서 처리된다.)
      if (boundRoot) clearBeatHighlight(boundRoot);
    };
  }

  boundRoot = root;
  // 저장된 음색이 샘플 기반(드럼·목소리)이면 지금 바이트를 미리 받아 둔다 — 재생 버튼을 누른
  // 뒤에야 받기 시작하면 첫 한두 박이 합성 클릭으로 새어 나온다.
  engine.prefetch();
  if (root.dataset.metroBound !== '1') {
    root.dataset.metroBound = '1';
    bind(root);
  }

  const s = engine.getSettings();
  renderBeats(root, s.meter, s.subdivision);
  syncUi(root);
  syncFab(engine.playing);
  if (engine.playing) startRaf();
}

/** 소리 정지 + 시각 리셋. 레슨 이동(astro:before-swap)·FAB 리셋에서 호출된다. */
export function stopMetronome(): void {
  engine?.stop();
  stopRaf();
  if (boundRoot) clearBeatHighlight(boundRoot);
  syncFab(false);
}

export function isMetronomePlaying(): boolean {
  return engine?.playing ?? false;
}

/* ------------------------------------------------------------------
 * 바인딩
 * ---------------------------------------------------------------- */

function readSamples(root: HTMLElement): SampleUrls {
  const raw = root.dataset.samples;
  if (!raw) return EMPTY_SAMPLES;
  try {
    const parsed = JSON.parse(raw) as Partial<SampleUrls>;
    return { drum: parsed.drum ?? null, voice: parsed.voice ?? null };
  } catch {
    return EMPTY_SAMPLES;
  }
}

function bind(root: HTMLElement): void {
  root.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    if (target.closest('[data-metro-toggle]')) {
      engine?.toggle();
      return;
    }
    if (target.closest('[data-metro-tap]')) {
      onTap(root);
      return;
    }

    const step = target.closest<HTMLElement>('[data-metro-bpm-step]');
    if (step) {
      const delta = Number(step.dataset.metroBpmStep ?? '0');
      apply(root, { bpm: clampBpm(current().bpm + delta) });
      return;
    }

    const segBtn = target.closest<HTMLButtonElement>('.metro-seg button');
    if (segBtn && !segBtn.disabled) {
      const seg = segBtn.closest<HTMLElement>('.metro-seg');
      const value = segBtn.dataset.value;
      if (!seg || !value) return;
      if (seg.hasAttribute('data-metro-meter')) apply(root, { meter: value as Meter });
      else if (seg.hasAttribute('data-metro-subdivision')) {
        apply(root, { subdivision: Number(value) as Subdivision });
      } else if (seg.hasAttribute('data-metro-timbre')) apply(root, { timbre: value as Timbre });
    }
  });

  root.addEventListener('input', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.hasAttribute('data-metro-bpm-range')) {
      apply(root, { bpm: clampBpm(Number(target.value)) }, { skipRange: true });
    } else if (target.hasAttribute('data-metro-volume')) {
      apply(root, { volume: Math.min(1, Math.max(0, Number(target.value) / 100)) });
    }
  });
}

function current(): MetronomeSettings {
  return engine?.getSettings() ?? getMetronomeSettings();
}

/** 설정 변경 → 엔진 반영 + UI 동기화 + (디바운스) 저장. */
function apply(
  root: HTMLElement,
  patch: Partial<MetronomeSettings>,
  opts: { skipRange?: boolean } = {},
): void {
  if (!engine) return;
  const before = engine.getSettings();
  engine.update(patch);
  const after = engine.getSettings();

  // 박자(동그라미 수)나 세분(점 수)이 바뀌면 표시를 다시 그린다.
  if (patch.meter !== undefined || patch.subdivision !== undefined) {
    if (after.meter !== before.meter || after.subdivision !== before.subdivision) {
      renderBeats(root, after.meter, after.subdivision);
    }
  }
  syncUi(root, opts);

  window.clearTimeout(persistTimer);
  persistTimer = window.setTimeout(() => setMetronomeSettings(engine!.getSettings()), PERSIST_DEBOUNCE_MS);
}

/* ------------------------------------------------------------------
 * 탭 템포
 * ---------------------------------------------------------------- */
function onTap(root: HTMLElement): void {
  const now = performance.now();
  const last = taps[taps.length - 1];
  if (last !== undefined && now - last > TAP_RESET_MS) taps = [];
  taps.push(now);
  if (taps.length > TAP_WINDOW + 1) taps.shift();
  if (taps.length < 2) return;

  let sum = 0;
  for (let i = 1; i < taps.length; i++) sum += taps[i]! - taps[i - 1]!;
  const avg = sum / (taps.length - 1);
  if (avg <= 0) return;
  apply(root, { bpm: clampBpm(60000 / avg) });
}

/* ------------------------------------------------------------------
 * UI 동기화
 * ---------------------------------------------------------------- */

/**
 * 박 동그라미 + 그 아래 세분 점을 다시 그린다.
 * 점 개수 = 세분 수(♩ 1개 · 8분 2개 · 셋잇단 3개 · 16분 4개) → 재생 중 지금 울리는 세분이 점등된다.
 */
function renderBeats(root: HTMLElement, meter: Meter, subdivision: Subdivision): void {
  const wrap = root.querySelector<HTMLElement>('[data-metro-beats]');
  if (!wrap) return;
  const { roles } = METER_SPECS[meter];
  const dots = `<span class="metro-dots" data-count="${subdivision}">${'<i></i>'.repeat(subdivision)}</span>`;
  wrap.innerHTML = roles
    .map(
      (role, i) =>
        `<span class="metro-beat${role === 'strong' ? ' is-strong' : ''}"><b>${i + 1}</b>${dots}</span>`,
    )
    .join('');
}

function syncUi(root: HTMLElement, opts: { skipRange?: boolean } = {}): void {
  if (!engine) return;
  const s = engine.getSettings();

  const bpmText = root.querySelector<HTMLElement>('[data-metro-bpm-text]');
  if (bpmText) bpmText.textContent = String(s.bpm);

  const range = root.querySelector<HTMLInputElement>('[data-metro-bpm-range]');
  // 드래그 중인 슬라이더 자신에게 값을 되쓰면 커서가 튄다 → 그 경우만 건너뛴다.
  if (range && !opts.skipRange) {
    range.min = String(BPM_MIN);
    range.max = String(BPM_MAX);
    range.value = String(s.bpm);
  }

  const volume = root.querySelector<HTMLInputElement>('[data-metro-volume]');
  if (volume && document.activeElement !== volume) volume.value = String(Math.round(s.volume * 100));

  syncSeg(root, '[data-metro-meter]', s.meter);
  syncSeg(root, '[data-metro-subdivision]', String(s.subdivision));
  syncSeg(root, '[data-metro-timbre]', s.timbre);

  const note = root.querySelector<HTMLElement>('[data-metro-note]');
  if (note) note.hidden = !engine.voiceThrottled();

  syncToggle(root, engine.playing);
}

function syncSeg(root: HTMLElement, selector: string, value: string): void {
  const seg = root.querySelector<HTMLElement>(selector);
  if (!seg) return;
  seg.querySelectorAll<HTMLButtonElement>('button').forEach((btn) => {
    const active = btn.dataset.value === value;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

function syncToggle(root: HTMLElement, playing: boolean): void {
  const btn = root.querySelector<HTMLElement>('[data-metro-toggle]');
  if (!btn) return;
  btn.classList.toggle('is-playing', playing);
  btn.setAttribute('aria-pressed', String(playing));
  const label = btn.querySelector<HTMLElement>('[data-metro-toggle-text]');
  if (label) label.textContent = t(playing ? 'metro.stop' : 'metro.start');
}

/** 재생 중 FAB = 이퀄라이저 바 애니메이션(A2). FAB 는 페이지마다 새 노드라 매번 조회한다. */
function syncFab(playing: boolean): void {
  const fab = document.getElementById('fnFab');
  if (!fab) return;
  fab.classList.toggle('playing', playing);
}

/* ------------------------------------------------------------------
 * 시각 동기 (rAF ← 오디오 스케줄러 큐)
 * ---------------------------------------------------------------- */

function startRaf(): void {
  if (rafId) return;
  const loop = (): void => {
    rafId = requestAnimationFrame(loop);
    if (!engine || !boundRoot) return;
    const due = engine.drainDueBeats();
    if (due.length === 0) return;
    // 프레임 사이에 여러 발음이 지났다면 가장 최근 것만 그린다(정확한 "지금"의 위치).
    const last = due[due.length - 1]!;
    paintBeat(boundRoot, last.pulse, last.sub, last.role === 'strong');
  };
  rafId = requestAnimationFrame(loop);
}

function stopRaf(): void {
  if (!rafId) return;
  cancelAnimationFrame(rafId);
  rafId = 0;
}

/**
 * 지금 울린 위치를 칠한다 — 숫자 동그라미는 그 박 내내 켜져 있고(세분이 지나가도 유지),
 * 아래 점은 현재 세분 하나만 켜진다. 파동은 강박의 박 머리(sub 0)에서만 퍼진다.
 */
function paintBeat(root: HTMLElement, pulse: number, sub: number, strong: boolean): void {
  const beats = root.querySelectorAll<HTMLElement>('.metro-beat');
  beats.forEach((el, i) => {
    const on = i === pulse;
    el.classList.toggle('on', on);

    const dots = el.querySelectorAll<HTMLElement>('.metro-dots i');
    dots.forEach((dot, j) => dot.classList.toggle('on', on && j === sub));

    if (!on) {
      el.classList.remove('ripple'); // 지난 박의 파동 클래스가 남지 않게 정리.
      return;
    }
    if (!strong || sub !== 0) return;
    // 같은 클래스를 다시 붙이는 것만으로는 애니메이션이 재시작되지 않는다 → 리플로우로 강제.
    el.classList.remove('ripple');
    void el.offsetWidth;
    el.classList.add('ripple');
  });
}

function clearBeatHighlight(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('.metro-beat').forEach((el) => {
    el.classList.remove('on', 'ripple');
  });
  root.querySelectorAll<HTMLElement>('.metro-dots i').forEach((dot) => dot.classList.remove('on'));
}
