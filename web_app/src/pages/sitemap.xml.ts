/**
 * sitemap.xml — 정적 빌드 타임 생성(Astro Endpoints API). 외부 @astrojs/sitemap 의존 없이
 * 이미 존재하는 lib/paths(getStaticPaths 소스)·lib/urls(URL 스킴)를 그대로 재사용한다.
 * technical_spec §8-A.5 STUB 6(선택 항목).
 */
import type { APIRoute } from 'astro';
import { SUPPORTED_LANGS } from '../config';
import { curriculumRoutes, lessonRoutes } from '../lib/paths';
import { readyFunctionTools } from '../lib/functions';
import { altUrls, curriculumPath, homePath, lessonPath, toolPath } from '../lib/urls';

export const prerender = true;

function urlEntry(site: string | URL, canonicalPath: string): string {
  const alts = altUrls(canonicalPath);
  const links = SUPPORTED_LANGS.map(
    (l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${new URL(alts[l], site).href}" />`,
  ).join('');
  return `  <url><loc>${new URL(alts.ko, site).href}</loc>${links}</url>`;
}

export const GET: APIRoute = ({ site, url }) => {
  const base = site ?? url;
  const paths: string[] = [homePath()];
  // Functions 도구 전용 페이지(/tools/{tool}/) — 검색 유입이 큰 유틸(메트로놈 등)이라 색인 대상.
  for (const tool of readyFunctionTools()) paths.push(toolPath(tool.id));
  for (const c of curriculumRoutes()) paths.push(curriculumPath(c.curriculum));
  for (const r of lessonRoutes()) {
    paths.push(lessonPath(r.params.curriculum, r.monthNum, r.weekNum, r.dayNum));
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    `${paths.map((p) => urlEntry(base, p)).join('\n')}\n` +
    `</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
