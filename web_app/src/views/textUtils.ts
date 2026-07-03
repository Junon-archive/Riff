/**
 * views/ 내부 공용 텍스트 가공 유틸(순수 함수, DOM 비의존).
 * 콘텐츠 파이프라인 산출물(월/커리큘럼 개요 제목)의 기계적 표기 정리용.
 */

/** "… — Overview" 접미사 등을 카드/헤더용으로 다듬는다(내용 창작 아님, 표기 정리만). */
export function cleanTitle(title: string): string {
  return title.replace(/\s*[—-]\s*Overview\s*$/i, '').trim();
}

/** HTML → 태그 제거 + 공백 정리 + 길이 제한(카드 요약용, OPEN-2 미해결 임시 절충). */
export function stripAndTruncate(html: string, maxLen = 120): string {
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen).trimEnd()}…`;
}
