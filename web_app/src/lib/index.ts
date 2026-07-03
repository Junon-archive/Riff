/**
 * lib/ — DOM 비의존 우선 순수 로직 배럴 (technical_spec §3·§6·§7·§8·§13.2).
 * localStorage 직접 접근 금지 — 반드시 storage.ts 경유(state_storage §1).
 */
export * from './storage';
export * from './progress';
export * from './nudges';
export * from './i18n';
export * from './router';
export * from './content';
