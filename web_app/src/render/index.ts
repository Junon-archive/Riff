/**
 * render/ — 지판·타브 SVG 렌더러 (notation-renderer 위임 경계, technical_spec §5·§13.1).
 *
 * 계약: 입력=Score(스키마 타입), 출력=SVG 문자열. 앱 상태·DOM·i18n 비의존.
 * SVG 루트 클래스는 각각 `fretboard` / `tabsvg`, currentColor + CSS 변수(다크모드 자동 대응),
 * 반응형 viewBox, role="img"+aria-label 필수(design_spec §4.11).
 *
 * 구현:
 *   - fretboard.ts: export function renderFretboard(score: Score): string
 *   - tab.ts:       export function renderTab(score: Score): string
 */
export type { Score } from '../types/score';
export { renderFretboard } from './fretboard';
export { renderTab } from './tab';
