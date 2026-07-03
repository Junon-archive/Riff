/**
 * 넛지 토스트 — 목업 `toast()` 이식(technical_spec §8-A.5 STUB 4, design_spec §7 모션 톤).
 * `#toastWrap`은 View Transitions 스왑으로 매 페이지마다 새 DOM 노드일 수 있으므로 매 호출마다 새로 조회한다.
 */
export function showToast(emoji: string, html: string, ms = 4200): void {
  const wrap = document.getElementById('toastWrap');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="emoji">${emoji}</span><span class="txt">${html}</span>`;
  wrap.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  window.setTimeout(() => {
    el.classList.remove('show');
    window.setTimeout(() => el.remove(), 400);
  }, ms);
}
