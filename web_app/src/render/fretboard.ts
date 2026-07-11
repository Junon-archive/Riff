/**
 * render/fretboard.ts — 지판 다이어그램 SVG 렌더러 (notation-renderer, technical_spec §5.2).
 *
 * 계약:
 *  - 입력: Score (type=fretboard_diagram | scale_shape, score.fretboard 有).
 *  - 출력: SVG 문자열. 루트 <svg class="fretboard" viewBox=... role="img" aria-label=...>.
 *  - 방향(목업 renderChord 승계): 헤드(너트)=왼쪽. 가로선=현(위=1번 고음e, 아래=6번 저음E),
 *    세로선=프렛, startFret===0 이면 왼쪽 굵은선=너트.
 *  - 색: currentColor + CSS 변수(var(--primary) 등) → 다크모드 자동 대응.
 *  - 좌표는 (string,fret)에서 수학적으로 계산. 범위 밖은 그리지 않고 console.warn.
 */
import type { Score, Dot, Barre, NoteRole, ScoreMeta } from '../types/score';

/* ---- 기하 상수 -------------------------------------------------------- */
const PAD_L = 48; // 왼쪽 여백(현 이름 + 개방/뮤트 표기)
const PAD_R = 22;
// 개방(o)·뮤트(x) 마크의 가로 위치. 현 이름(stringName, x≈14)과 넛(fx(0)=PAD_L) 사이의
// 시각적 중앙에 둔다 — 계이름과 겹치지 않으면서(왼쪽) 넛과의 빈 공간도 줄여 균형을 맞춘다.
// (개방 label 도 여기에 정렬. label 이 가장 긴 "Am:R" 이 넛을 넘지 않는 선.)
const OPEN_MUTE_X = PAD_L - 14;
const PAD_T = 26;
const PAD_B = 30; // 프렛 번호 라벨
const ROW_H = 36; // 현 간격(세로) — 점 위 도수 라벨이 위 현의 점에 가리지 않도록 넉넉히
const COL_W = 48; // 프렛 간격(가로)
const DOT_R = 10; // 점 반경(작게) — 위/아래 현 라벨과 겹침 방지

/* ---- 유틸 ------------------------------------------------------------- */
function esc(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function warn(msg: string): void {
  // 개발 경고: 검증(notation-validator) 통과 데이터를 가정하되 방어적으로 남긴다.
  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn(`[renderFretboard] ${msg}`);
  }
}

/** 현 번호(1=최고음 … n=최저음) → 표시 이름. tuning 은 최저현→최고현(index0=최저) 순서. */
function stringName(stringNum: number, meta: ScoreMeta): string {
  const n = meta.stringCount ?? 6;
  const fallback = ['e', 'B', 'G', 'D', 'A', 'E']; // 6현 표준(index0=string1 고e)
  const tuning = meta.tuning;
  if (Array.isArray(tuning) && tuning.length === n) {
    // tuning[0]=최저현(n번) … 현 번호 s 의 이름 = tuning[n-s]
    const raw = tuning[n - stringNum];
    if (typeof raw === 'string' && raw.length > 0) {
      // 6현 기타 관례: 1번 현(고음 e)만 소문자. 베이스(4·5현)는 대문자 그대로.
      return n === 6 && stringNum === 1 ? raw.toLowerCase() : raw;
    }
  }
  return fallback[stringNum - 1] ?? '?';
}

/** dot 의 역할/강조 → 채움색·글자색(다크모드 자동: 강조는 CSS 변수, 중립은 currentColor). */
function dotStyle(dot: Dot): { fill: string; text: string; outlined: boolean } {
  const role: NoteRole | undefined = dot.role;
  if (dot.isRoot || role === 'root') {
    return { fill: 'var(--primary, #3182F6)', text: '#fff', outlined: false };
  }
  switch (role) {
    case 'target':
      return { fill: 'var(--green-500, #12B886)', text: '#fff', outlined: false };
    case 'color':
      return { fill: 'var(--yellow-500, #FFC043)', text: '#191F28', outlined: false };
    case 'blue_note':
      return { fill: 'var(--rn-blue-note, #7048E8)', text: '#fff', outlined: false };
    case 'chord_tone':
      return { fill: 'var(--primary, #3182F6)', text: '#fff', outlined: false };
    default:
      break;
  }
  if (dot.highlight) {
    return { fill: 'var(--green-500, #12B886)', text: '#fff', outlined: false };
  }
  // scale/passing/미지정: 외곽선형(currentColor) → 라이트/다크 모두 대비 확보
  return { fill: 'var(--card, transparent)', text: 'currentColor', outlined: true };
}

export function renderFretboard(score: Score): string {
  const fb = score.fretboard;
  const title = score.meta?.title ?? 'fretboard diagram';
  const n = score.meta?.stringCount ?? 6; // 현 수(6=기존 불변, 4·5=베이스)

  if (!fb) {
    warn(`score ${score.id}: fretboard 데이터 없음`);
    return `<svg class="fretboard" viewBox="0 0 380 60" role="img" aria-label="${esc(title)}"></svg>`;
  }

  const startFret = Number.isFinite(fb.startFret) ? Math.max(0, Math.trunc(fb.startFret)) : 0;
  const fretSpan =
    Number.isFinite(fb.fretSpan) && fb.fretSpan >= 1 ? Math.min(24, Math.trunc(fb.fretSpan)) : 4;
  // 표시 창(inclusive): 프렛 startFret..startFret+fretSpan.
  //  - 너트(startFret=0): 개방(프렛0)은 칸이 아니라 O 표기 → 칸은 프렛 1..fretSpan (fretSpan칸).
  //  - 포지션(startFret>0): 프렛 startFret..startFret+fretSpan (fretSpan+1칸).
  // 근거: 콘텐츠 데이터가 fret_range=[startFret, startFret+fretSpan] inclusive 로 정규화됨
  //       (48개 지판 score 전수 검증 시 이 모델에서만 out-of-range dot 0건).
  const hasNut = startFret === 0;
  const firstFret = hasNut ? 1 : startFret;
  const nCells = hasNut ? fretSpan : fretSpan + 1;
  const lastFret = firstFret + nCells - 1;

  const W = PAD_L + COL_W * nCells + PAD_R;
  const H = PAD_T + ROW_H * (n - 1) + PAD_B;

  // 좌표 계산기
  const sy = (stringNum: number): number => PAD_T + (stringNum - 1) * ROW_H; // 1=top
  const fx = (local: number): number => PAD_L + local * COL_W; // local 0..nCells (프렛 라인)
  const cellX = (fret: number): number => fx(fret - firstFret + 0.5); // 프렛 칸 중앙

  const parts: string[] = [];
  parts.push(
    `<svg class="fretboard" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}" xmlns="http://www.w3.org/2000/svg">`,
  );

  /* ---- 프렛 라인(세로) + 프렛 번호 ---- */
  const topY = sy(1);
  const botY = sy(n);
  for (let c = 0; c <= nCells; c++) {
    const x = fx(c);
    if (c === 0 && hasNut) {
      // 너트(굵은 세로선)
      parts.push(
        `<line x1="${x}" y1="${topY}" x2="${x}" y2="${botY}" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>`,
      );
    } else {
      parts.push(
        `<line x1="${x}" y1="${topY}" x2="${x}" y2="${botY}" stroke="currentColor" stroke-width="1.4" opacity="0.28"/>`,
      );
    }
    // 프렛 번호(칸 중앙 하단) — 각 칸이 나타내는 실제 프렛 번호
    if (c < nCells) {
      const fretNum = firstFret + c;
      parts.push(
        `<text x="${fx(c) + COL_W / 2}" y="${H - 9}" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" opacity="0.45">${fretNum}</text>`,
      );
    }
  }

  /* ---- 현(가로선) + 현 이름 ---- */
  for (let s = 1; s <= n; s++) {
    const y = sy(s);
    // 저음현(번호 큰 현)일수록 두껍게
    const sw = (1.0 + (s - 1) * 0.18).toFixed(2);
    parts.push(
      `<line x1="${fx(0)}" y1="${y}" x2="${W - PAD_R}" y2="${y}" stroke="currentColor" stroke-width="${sw}" opacity="0.3"/>`,
    );
    parts.push(
      `<text x="14" y="${y + 4}" font-size="12" font-weight="700" fill="currentColor" opacity="0.5">${esc(stringName(s, score.meta))}</text>`,
    );
  }

  /* ---- 바레 ---- */
  const barres: Barre[] = Array.isArray(fb.barre) ? fb.barre : [];
  for (const b of barres) {
    if (b.fret < firstFret || b.fret > lastFret) {
      warn(`score ${score.id}: barre fret ${b.fret} 가 표시 범위(${firstFret}~${lastFret}) 밖`);
      continue;
    }
    if (b.fromString < 1 || b.fromString > n || b.toString < 1 || b.toString > n) {
      warn(`score ${score.id}: barre string 범위 밖 (${b.fromString}~${b.toString})`);
      continue;
    }
    const x = cellX(b.fret);
    const y1 = sy(Math.min(b.fromString, b.toString));
    const y2 = sy(Math.max(b.fromString, b.toString));
    parts.push(
      `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="var(--primary, #3182F6)" stroke-width="${DOT_R * 2}" stroke-linecap="round" opacity="0.85"/>`,
    );
    if (b.finger) {
      parts.push(
        `<text x="${x}" y="${y1 - DOT_R - 3}" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary, #3182F6)">${b.finger}</text>`,
      );
    }
  }

  /* ---- dots ---- */
  const dots: Dot[] = Array.isArray(fb.dots) ? fb.dots : [];
  for (const dot of dots) {
    const s = dot.string;
    const f = dot.fret;
    if (typeof s !== 'number' || s < 1 || s > n) {
      warn(`score ${score.id}: dot string ${s} 범위 밖(1~${n}) — 스킵`);
      continue;
    }
    const y = sy(s);

    // 뮤트(x) — 왼쪽 거터
    if (dot.muted) {
      parts.push(
        `<text x="${OPEN_MUTE_X}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor" opacity="0.5">✕</text>`,
      );
      continue;
    }
    // 개방현(o) — 왼쪽 거터
    if (f === 0) {
      parts.push(
        `<circle cx="${OPEN_MUTE_X}" cy="${y}" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.55"/>`,
      );
      if (dot.label) {
        parts.push(
          `<text x="${OPEN_MUTE_X}" y="${y - 11}" text-anchor="middle" font-size="9.5" font-weight="700" fill="currentColor" opacity="0.6">${esc(dot.label)}</text>`,
        );
      }
      continue;
    }
    // 범위 밖 프렛은 그리지 않고 경고
    if (f < firstFret || f > lastFret) {
      warn(
        `score ${score.id}: dot (string ${s}, fret ${f}) 가 표시 범위(${firstFret}~${lastFret}) 밖 — 스킵`,
      );
      continue;
    }

    const cx = cellX(f);
    const style = dotStyle(dot);

    // 근음 강조: 외곽 링 추가
    if (dot.isRoot || dot.role === 'root') {
      parts.push(
        `<circle cx="${cx}" cy="${y}" r="${DOT_R + 2}" fill="none" stroke="var(--primary, #3182F6)" stroke-width="1.5" opacity="0.5"/>`,
      );
    }

    parts.push(
      `<circle cx="${cx}" cy="${y}" r="${DOT_R}" fill="${style.fill}"${style.outlined ? ` stroke="currentColor" stroke-width="1.6"` : ''}/>`,
    );

    // dot 안: finger 우선, 없으면 짧은 label
    const inside =
      dot.finger != null && dot.finger > 0
        ? String(dot.finger)
        : dot.label && dot.label.length <= 2
          ? dot.label
          : '';
    if (inside) {
      parts.push(
        `<text x="${cx}" y="${y + 4.5}" text-anchor="middle" font-size="12.5" font-weight="800" fill="${style.text}">${esc(inside)}</text>`,
      );
    }
    // dot 위: label(도수/음이름) — finger 를 안에 넣었거나 label 이 길 때만 외부 표기
    const showLabelOutside = dot.label && (inside !== dot.label);
    if (showLabelOutside) {
      parts.push(
        `<text x="${cx}" y="${y - DOT_R - 4}" text-anchor="middle" font-size="9.5" font-weight="700" fill="${style.outlined ? 'currentColor' : style.fill}">${esc(dot.label as string)}</text>`,
      );
    }
  }

  parts.push('</svg>');
  return parts.join('');
}
