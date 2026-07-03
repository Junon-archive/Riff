/**
 * robots.txt — 정적 빌드 타임 생성. `astro.config` 의 `site` 를 그대로 사용해 sitemap 절대 URL을 낸다.
 * technical_spec §8-A.5 STUB 6(선택 항목).
 */
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site, url }) => {
  const base = site ?? url;
  const sitemapUrl = new URL('/sitemap.xml', base).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
