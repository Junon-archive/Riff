/**
 * render/ — 지판·타브·오선보 렌더러 (notation-renderer 위임 경계, technical_spec §5·§13.1).
 *
 * 계약: 입력=Score(스키마 타입), 출력=SVG 문자열. 앱 상태·i18n 비의존.
 * SVG 루트 클래스는 `fretboard` / `tabsvg` / `staffsvg`, currentColor + CSS 변수(다크모드 자동 대응),
 * 반응형 viewBox, role="img"+aria-label 필수(design_spec §4.11).
 *
 * 구현:
 *   - fretboard.ts: export function renderFretboard(score: Score): string   (자체 SVG)
 *   - staff.ts:     export function renderStaff(score, mode): string        (VexFlow, 오선보+타브 박자 공유)
 *
 * 라우팅(renderScore): type=fretboard_diagram|scale_shape → 지판. type=tab → meta.notation 으로 분기
 *   ("staff"|"rhythm" → 해당 모드, "staff+tab"/미지정 → 오선보+타브 결합). 모든 tab 블록은 VexFlow
 *   오선보 렌더러(staff.ts)로 그린다(구 자체 타브 SVG tab.ts 는 백로그 18 에서 제거 — 전 커리큘럼
 *   staff+tab 이식 완료).
 */
import type { Score } from '../types/score';
import { renderFretboard } from './fretboard';
import { renderStaff } from './staff';

export type { Score } from '../types/score';
export { renderFretboard } from './fretboard';
export { renderStaff } from './staff';

/** Score → SVG 문자열. meta.notation 을 반영해 오선보/타브/지판을 선택한다. */
export function renderScore(score: Score): string {
  if (score.type === 'tab') {
    const n = score.meta?.notation;
    if (n === 'staff') return renderStaff(score, 'staff');
    if (n === 'rhythm') return renderStaff(score, 'rhythm');
    return renderStaff(score, 'staff+tab'); // "staff+tab" 및 미지정 폴백
  }
  return renderFretboard(score);
}
