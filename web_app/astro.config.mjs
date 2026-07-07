// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Riff — Astro 정적 사이트 설정.
 *
 * 마이그레이션 근거(technical_spec §8-Astro): 해시 SPA → 파일 기반 정적 라우팅.
 * 레슨마다 실제 정적 HTML 을 생성해 검색 유입(SEO) + View Transitions 를 얻는다.
 *
 * - output: 'static'  — 어댑터 없음. 순수 정적 빌드(dist/). Zero-Cost·CF Pages 불변.
 * - i18n              — locales [ko,en,ja], defaultLocale 'ko', prefixDefaultLocale:false.
 *                       ko 는 prefix 없음(/), en/ja 는 /en·/ja prefix. 언어별 실제 페이지 생성.
 * - trailingSlash     — 'always': /c/x/ 처럼 디렉터리+index.html 로 출력(정적 호스트 친화).
 * - build.format      — 'directory': 각 라우트를 <route>/index.html 로.
 */
export default defineConfig({
  // 절대 URL(canonical·hreflang·사이트맵)용 배포 도메인 (Cloudflare Pages 실도메인).
  site: 'https://guitar-riff.pages.dev',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    locales: ['ko', 'en', 'ja'],
    defaultLocale: 'ko',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    // 오선보 렌더러(render/staff.ts)는 빌드타임에만 jsdom 을 쓴다(서버 전용).
    // Vite SSR 번들링 대신 Node 로 외부화해 빌드 안정성 확보(클라이언트로는 나가지 않음).
    ssr: { external: ['jsdom'] },
  },
});
