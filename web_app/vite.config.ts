import { defineConfig } from 'vite';

// Riff — 정적 SPA 빌드 설정.
// - 런타임 프레임워크 없음(바닐라 + TS). 플러그인 0.
// - base '/' : Cloudflare Pages(*.pages.dev) 루트 배포 기준. GH Pages 서브패스 배포 시에만 변경.
// - 콘텐츠(src/content/*)는 build:content 스크립트가 선(先)생성한다(package.json scripts).
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    target: 'es2022',
    sourcemap: false,
    // 해시 파일명 → immutable 캐싱(§9.2). index.html/JSON은 no-cache(_headers에서 규칙화 예정).
    assetsInlineLimit: 4096,
  },
  server: {
    port: 5173,
    open: false,
  },
  preview: {
    port: 4173,
  },
});
