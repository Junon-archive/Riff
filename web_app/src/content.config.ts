/**
 * Astro Content Collections 설정.
 *
 * Riff 는 런타임에 Content Collections API 를 사용하지 않는다 — `src/content/` 하위 JSON 은
 * 콘텐츠 파이프라인(`scripts/build-content.mjs`) 산출물이며, `lib/content.ts` 가
 * `import.meta.glob` + `manifest.json` import 로 직접 로드한다(SSOT=_design_docs).
 *
 * 아래 컬렉션 정의는 순전히 Astro 5 의 "src/content 하위 폴더 자동 컬렉션 생성"(deprecated) 경고를
 * 끄기 위한 것이다. 이 컬렉션 엔트리를 조회하는 코드는 없다(중립).
 *
 * ⚠ 커리큘럼별로 이 파일에 항목을 추가할 필요는 없다(실측 확인됨, 2026-07-10): `src/content.config.ts`
 * 가 존재하고 최소 1개의 컬렉션을 정의하는 것만으로 Astro 의 "미정의 폴더 자동 컬렉션화" 경고가 전체
 * `src/content/*` 폴더에 대해 꺼진다 — 여기 이름 붙지 않은 `chord_building_2months`·`funk_rhythm_2months`
 * 등도 경고 없이 빌드된다(build-content.mjs 가 discoverCurricula() 로 발견하는 실제 커리큘럼 id 는
 * `_design_docs/02_curriculum` 하위 각 폴더의 meta.json 이 SSOT이며 이 파일과 무관). 새 커리큘럼(베이스
 * 포함)을 추가해도 이 파일은 그대로 두면 된다 — `solo_scale_3months` 는 대표 예시로만 남겨둔 것.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const solo_scale_3months = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/solo_scale_3months' }),
});

export const collections = { solo_scale_3months };
