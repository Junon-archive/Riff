/**
 * render/tab.ts — 타브 보표 SVG 렌더러 (notation-renderer, technical_spec §5.3).
 *
 * 계약:
 *  - 입력: Score (type=tab, score.tab 有). 출력: SVG 문자열.
 *  - 루트 <svg class="tabsvg" viewBox=... role="img" aria-label=...>.
 *  - 방향(목업 renderTab 승계): 6줄 타브, 위=1번 고음e … 아래=6번 저음E. 시간순 좌→우 배치.
 *  - duration → 가로 폭, dotted → 1.5배. rest=true → string/fret 무시, duration 만큼 공백.
 *  - technique: hammer_on/pull_off(슬러+H/P), slide(사선+sl), bend(화살표+목표),
 *    vibrato(물결), palm_mute(P.M.), harmonic(⟨⟩).
 *  - 색: currentColor + CSS 변수(다크모드 자동), 좌표는 수학적으로 계산.
 */
import type { Score, TabNote, Measure, NoteRole } from '../types/score';

/* ---- 기하 상수 -------------------------------------------------------- */
const N_STR = 6;
const LABEL_W = 22; // 현 이름 거터
const PAD_L = 14;
const PAD_R = 20;
const HEAD_T = 34; // 상단 여백(슬러/P.M./bend 표기 공간 + 캡션)
const FOOT_B = 26; // 하단 여백(slide 라벨 등)
const ROW_H = 22; // 현 간격
const BASE_W = 24; // 8분음표 기준 폭
const NOTE_R = 10; // 프렛 숫자 배경 반경

/** duration → 상대 폭(8분음표=1 기준) */
const DUR_UNIT: Record<string, number> = {
  whole: 8,
  half: 4,
  quarter: 2,
  eighth: 1,
  sixteenth: 0.5,
};

interface Placed {
  note: TabNote;
  x: number; // 노트 중심 x
  y: number; // 노트 중심 y
  i: number; // 줄 index(0=고e)
  w: number; // 이 노트가 차지하는 폭
  measureIdx: number;
}

/* ---- 유틸 ------------------------------------------------------------- */
function esc(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function warn(msg: string): void {
  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn(`[renderTab] ${msg}`);
  }
}

function noteWidth(note: TabNote): number {
  const unit = DUR_UNIT[note.duration] ?? 1;
  const dotMul = note.dotted ? 1.5 : 1;
  // 최소 폭 보장(짧은 음도 프렛 숫자가 겹치지 않게)
  return Math.max(BASE_W * unit * dotMul, BASE_W);
}

/** 강조색(fretboard 와 동일 팔레트) */
function accentColor(note: TabNote): string {
  const role: NoteRole | undefined = note.role;
  if (role === 'root') return 'var(--primary, #3182F6)';
  if (role === 'target' || note.target) return 'var(--green-500, #12B886)';
  if (role === 'color') return 'var(--yellow-500, #FFC043)';
  if (role === 'blue_note') return 'var(--rn-blue-note, #7048E8)';
  if (role === 'chord_tone') return 'var(--primary, #3182F6)';
  if (note.highlight) return 'var(--green-500, #12B886)';
  return 'currentColor';
}

export function renderTab(score: Score): string {
  const tab = score.tab;
  const title = score.meta?.title ?? 'tab notation';

  if (!tab || !Array.isArray(tab.measures)) {
    warn(`score ${score.id}: tab 데이터 없음`);
    return `<svg class="tabsvg" viewBox="0 0 480 60" role="img" aria-label="${esc(title)}"></svg>`;
  }

  const lineY = (i: number): number => HEAD_T + i * ROW_H; // i:0(top e) .. 5(E)
  const startX = PAD_L + LABEL_W;

  /* ---- 1) 시간순 배치 계산 ---- */
  const placed: Placed[] = [];
  const barX: number[] = []; // 마디선 x 좌표
  let cursor = startX;

  tab.measures.forEach((m: Measure, mi: number) => {
    if (mi > 0) {
      barX.push(cursor);
      cursor += 8; // 마디선 뒤 간격
    }
    const notes: TabNote[] = Array.isArray(m.notes) ? m.notes : [];
    for (const note of notes) {
      const w = noteWidth(note);
      const cx = cursor + w / 2;
      if (note.rest) {
        // 쉼표: 공백만 소비(string/fret 무시)
        cursor += w;
        continue;
      }
      const s = note.string;
      if (typeof s !== 'number' || s < 1 || s > 6) {
        warn(`score ${score.id}: tab note string ${s} 범위 밖(1~6) — 스킵(폭은 유지)`);
        cursor += w;
        continue;
      }
      const i = s - 1;
      placed.push({ note, x: cx, y: lineY(i), i, w, measureIdx: mi });
      cursor += w;
    }
  });

  const W = cursor + PAD_R;
  const H = HEAD_T + ROW_H * (N_STR - 1) + FOOT_B;

  const parts: string[] = [];
  parts.push(
    `<svg class="tabsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}" xmlns="http://www.w3.org/2000/svg">`,
  );

  /* ---- 2) 캡션(박자/패턴) ---- */
  const capBits: string[] = [];
  if (tab.timeSignature) capBits.push(tab.timeSignature);
  if (tab.pattern) capBits.push(tab.pattern);
  if (capBits.length) {
    parts.push(
      `<text x="${startX}" y="16" font-size="11" font-weight="700" fill="currentColor" opacity="0.5">${esc(capBits.join(' · '))}</text>`,
    );
  }

  /* ---- 3) 6줄 + 현 이름 ---- */
  const names = ['e', 'B', 'G', 'D', 'A', 'E']; // i0..5
  for (let i = 0; i < N_STR; i++) {
    const y = lineY(i);
    parts.push(
      `<line x1="${startX}" y1="${y}" x2="${W - PAD_R}" y2="${y}" stroke="currentColor" stroke-width="1.2" opacity="0.3"/>`,
    );
    parts.push(
      `<text x="${PAD_L}" y="${y + 4}" font-size="12" font-weight="700" fill="currentColor" opacity="0.5">${names[i]}</text>`,
    );
  }
  // 좌측 세로 마감선
  parts.push(
    `<line x1="${startX}" y1="${lineY(0)}" x2="${startX}" y2="${lineY(5)}" stroke="currentColor" stroke-width="1.6" opacity="0.4"/>`,
  );
  // 마디선
  for (const bx of barX) {
    parts.push(
      `<line x1="${bx}" y1="${lineY(0)}" x2="${bx}" y2="${lineY(5)}" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>`,
    );
  }

  /* ---- 4) technique 오버레이(노트보다 먼저 그려 배경으로) ---- */
  for (let k = 0; k < placed.length; k++) {
    const p = placed[k];
    if (!p) continue;
    const t = p.note.technique;
    if (!t || t === 'none') continue;
    const next = placed[k + 1];
    const col = accentColor(p.note);

    switch (t) {
      case 'hammer_on':
      case 'pull_off': {
        if (next) {
          const mx = (p.x + next.x) / 2;
          const arcY = Math.min(p.y, next.y) - NOTE_R - 4;
          parts.push(
            `<path d="M ${p.x} ${p.y - NOTE_R - 2} Q ${mx} ${arcY - 6} ${next.x} ${next.y - NOTE_R - 2}" fill="none" stroke="currentColor" stroke-width="1.3" opacity="0.7"/>`,
          );
          parts.push(
            `<text x="${mx}" y="${arcY - 6}" text-anchor="middle" font-size="9.5" font-weight="800" fill="currentColor" opacity="0.75">${t === 'hammer_on' ? 'H' : 'P'}</text>`,
          );
        }
        break;
      }
      case 'slide': {
        const toX = next ? next.x : p.x + p.w;
        const toY = next ? next.y : p.y;
        parts.push(
          `<line x1="${p.x + NOTE_R * 0.7}" y1="${p.y + 2}" x2="${toX - NOTE_R * 0.7}" y2="${toY + 2}" stroke="currentColor" stroke-width="1.4" opacity="0.7"/>`,
        );
        parts.push(
          `<text x="${(p.x + toX) / 2}" y="${Math.min(p.y, toY) - NOTE_R - 2}" text-anchor="middle" font-size="9.5" font-weight="800" fill="currentColor" opacity="0.75">sl${p.note.slideToFret != null ? ' ' + p.note.slideToFret : ''}</text>`,
        );
        break;
      }
      case 'bend': {
        const ax = p.x + NOTE_R + 2;
        const topY = p.y - ROW_H * 0.9;
        parts.push(
          `<path d="M ${ax} ${p.y} Q ${ax + 10} ${p.y} ${ax + 12} ${topY}" fill="none" stroke="${col}" stroke-width="1.4"/>`,
        );
        parts.push(
          `<path d="M ${ax + 12} ${topY} l -3.5 5 l 7 0 z" fill="${col}"/>`,
        );
        parts.push(
          `<text x="${ax + 16}" y="${topY + 4}" font-size="9.5" font-weight="800" fill="${col}">${esc(p.note.bendTarget ?? 'full')}</text>`,
        );
        break;
      }
      case 'vibrato': {
        const vy = p.y - NOTE_R - 5;
        const x0 = p.x - 9;
        parts.push(
          `<path d="M ${x0} ${vy} q 3 -4 6 0 q 3 4 6 0 q 3 -4 6 0" fill="none" stroke="currentColor" stroke-width="1.3" opacity="0.7"/>`,
        );
        break;
      }
      case 'palm_mute': {
        parts.push(
          `<text x="${p.x}" y="${lineY(0) - 12}" text-anchor="middle" font-size="9.5" font-weight="800" fill="currentColor" opacity="0.7">P.M.</text>`,
        );
        break;
      }
      case 'harmonic':
        // 프렛 숫자를 ⟨⟩ 로 감싼다 — 노트 렌더 단계에서 처리(marker 로 표시).
        break;
      default:
        break;
    }
  }

  /* ---- 5) 노트(프렛 숫자) ---- */
  for (const p of placed) {
    const n = p.note;
    const col = accentColor(n);
    const emphasized = col !== 'currentColor';
    const fretText =
      n.technique === 'harmonic' ? `⟨${n.fret}⟩` : String(n.fret);
    // 배경(현 라인 가림)
    parts.push(
      `<rect x="${p.x - NOTE_R}" y="${p.y - NOTE_R + 2}" width="${NOTE_R * 2}" height="${NOTE_R * 2 - 4}" rx="4" fill="var(--card, #fff)"/>`,
    );
    parts.push(
      `<text x="${p.x}" y="${p.y + 4.5}" text-anchor="middle" font-size="13" font-weight="800" fill="${emphasized ? col : 'currentColor'}">${esc(fretText)}</text>`,
    );
    // 강조 노트: 하단에 label(도수/음이름)
    if (n.label && emphasized) {
      parts.push(
        `<text x="${p.x}" y="${lineY(5) + 15}" text-anchor="middle" font-size="9" font-weight="700" fill="${col}">${esc(n.label)}</text>`,
      );
    }
    // dotted 점 표기
    if (n.dotted) {
      parts.push(
        `<circle cx="${p.x + NOTE_R + 2}" cy="${p.y + 4}" r="1.6" fill="${emphasized ? col : 'currentColor'}"/>`,
      );
    }
  }

  parts.push('</svg>');
  return parts.join('');
}
