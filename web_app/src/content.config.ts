/**
 * Astro Content Collections 설정.
 *
 * Riff 는 런타임에 Content Collections API 를 사용하지 않는다 — `src/content/` 하위 JSON 은
 * 콘텐츠 파이프라인(`scripts/build-content.mjs`) 산출물이며, `lib/content.ts` 가
 * `import.meta.glob` + `manifest.json` import 로 직접 로드한다(SSOT=_design_docs).
 *
 * 아래 컬렉션 정의는 순전히 Astro 5 의 "src/content 하위 폴더 자동 컬렉션 생성"(deprecated) 경고를
 * 끄기 위한 것이다. 이 컬렉션 엔트리를 조회하는 코드는 없다(중립).
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const solo_scale_3months = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/solo_scale_3months' }),
});

export const collections = { solo_scale_3months };
