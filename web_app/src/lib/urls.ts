/**
 * URL 스킴 헬퍼 (빌드 타임·순수).
 * SSOT: technical_spec.md §8-Astro(라우팅 모델).
 *
 * 캐논(ko) 경로:
 *   home        /
 *   curriculum  /c/{curriculumId}/
 *   lesson      /c/{curriculumId}/m{M}/w{W}/d{D}/
 *   tool        /tools/{toolId}/            (Functions 전용 페이지 — 20_metronome.md PART A)
 *
 * 언어 접두:
 *   ko  → 접두 없음(기본)          /c/x/
 *   en  → /en 접두                 /en/c/x/
 *   ja  → /ja 접두                 /ja/c/x/
 *
 * 모든 경로는 `trailingSlash: 'always'` 정책에 맞춰 슬래시로 끝난다.
 */
import { SUPPORTED_LANGS, DEFAULT_LANG } from '../config';
import type { Lang } from '../config';

/** 기본(ko) 언어를 제외한 접두 언어 목록 — [lang] 라우트의 getStaticPaths 소스. */
export const PREFIXED_LANGS: Lang[] = SUPPORTED_LANGS.filter((l) => l !== DEFAULT_LANG);

/** 캐논(ko) 홈 경로. */
export function homePath(): string {
  return '/';
}

/** 캐논(ko) 커리큘럼 경로. */
export function curriculumPath(curriculumId: string): string {
  return `/c/${curriculumId}/`;
}

/** 캐논(ko) 레슨 경로. month/week/day 는 숫자. */
export function lessonPath(curriculumId: string, month: number, week: number, day: number): string {
  return `/c/${curriculumId}/m${month}/w${week}/d${day}/`;
}

/** 캐논(ko) Functions 도구 전용 페이지 경로. */
export function toolPath(toolId: string): string {
  return `/tools/${toolId}/`;
}

/** 캐논(ko) 경로 → 특정 언어의 실제 URL. */
export function localize(lang: Lang, canonicalPath: string): string {
  if (lang === DEFAULT_LANG) return canonicalPath;
  return canonicalPath === '/' ? `/${lang}/` : `/${lang}${canonicalPath}`;
}

/** 캐논(ko) 경로 → 3언어 URL 맵(hreflang · 언어 스위처 링크용). */
export function altUrls(canonicalPath: string): Record<Lang, string> {
  return {
    ko: localize('ko', canonicalPath),
    en: localize('en', canonicalPath),
    ja: localize('ja', canonicalPath),
  };
}
