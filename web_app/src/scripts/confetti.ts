/**
 * 컨페티(캔버스) — 완료 액션 축하 애니메이션. 외부 의존 없음(목업 `burstConfetti` 이식,
 * technical_spec §2/§13.2, design_spec §4.17).
 *
 * `#confetti`는 View Transitions 스왑으로 매 페이지마다 새 DOM 노드일 수 있으므로
 * 캔버스 참조를 모듈 상태로 캐시하지 않고 매 호출마다 새로 조회한다.
 */
interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  g: number;
  s: number;
  rot: number;
  vr: number;
  c: string;
  life: number;
}

let particles: ConfettiParticle[] = [];
let raf: number | null = null;

function getCanvas(): HTMLCanvasElement | null {
  return document.getElementById('confetti') as HTMLCanvasElement | null;
}

function fit(canvas: HTMLCanvasElement): void {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function tick(): void {
  const canvas = getCanvas();
  const ctx = canvas?.getContext('2d') ?? null;
  if (!canvas || !ctx) {
    particles = [];
    raf = null;
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.vy += p.g;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life -= 0.008;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = Math.max(p.life, 0);
    ctx.fillStyle = p.c;
    ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
    ctx.restore();
  });
  particles = particles.filter((p) => p.life > 0 && p.y < canvas.height + 40);
  if (particles.length) {
    raf = requestAnimationFrame(tick);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    raf = null;
  }
}

/** 리사이즈 · 페이지 전환 시 현재 캔버스를 뷰포트 크기로 맞춘다. */
export function fitConfettiCanvas(): void {
  const canvas = getCanvas();
  if (canvas) fit(canvas);
}

/** 완료 액션 컨페티 폭죽. `prefers-reduced-motion` 존중(design_spec §10). */
export function burstConfetti(): void {
  const canvas = getCanvas();
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  fit(canvas);
  const colors = ['#3182F6', '#4593FC', '#12B886', '#FFC043', '#FF6B6B', '#C9E2FF'];
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight * 0.42;
  for (let i = 0; i < 120; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 6 + Math.random() * 9;
    particles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      g: 0.22 + Math.random() * 0.12,
      s: 6 + Math.random() * 6,
      rot: Math.random() * 6,
      vr: (Math.random() - 0.5) * 0.4,
      c: colors[i % colors.length]!,
      life: 1,
    });
  }
  if (raf == null) raf = requestAnimationFrame(tick);
}
