---
id: 05-tag-filter
status: TODO
priority: low
risk: low
depends_on: []
owner: null
---

# 05 · 태그·필터 브라우징

## 목적 (왜)

커리큘럼이 많아지면 홈에서 **주구장창 나열**만 된다. 난이도별·장르별·악기별 **필터 버튼**으로 골라 볼 수 있게. 동시에 "새 커리큘럼=데이터만 추가" 원칙의 실제 간극(하드코딩 순서 목록)도 해소.

## 현재 강제 지점 (검증된 코드 위치)

| 무엇 | 위치 | 현재 동작 |
|---|---|---|
| 커리큘럼 노출 순서 하드코딩 | `web_app/scripts/build-content.mjs:33` `CURRICULUM_ORDER = ['solo_scale_3months','chord_building_2months']` | **funk 누락** — 자동발견돼 이름순 뒤에 붙지만 의도한 순서 아님 |
| 기본 커리큘럼 상수 | `web_app/src/config.ts:23` `DEFAULT_CURRICULUM_ID = 'solo_scale_3months'` | 운영 기본값 |
| 컬렉션 등록 미갱신 | `web_app/src/content.config.ts:14-18` | 신규 id 추가돼도 미갱신(현재 무해, 경고 억제용) |
| 악기 필터 칩(참고·이미 데이터 주도) | `HomeView.astro` (instrument 종류 수로 자동 판정) | 이 방식을 태그로 확장 가능 |
| 커리큘럼 메타 | `meta.json` (level/tags/instrument 등) | 태그/장르 필드 확장 대상 |

## 수정 상세 (실행 지침)

### 단계 1 — 위생(먼저, 저비용): 순서를 데이터로

1. `CURRICULUM_ORDER` 하드코딩 제거 → 각 커리큘럼 `meta.json` 의 `order`(또는 `level`) 로 정렬.
2. `content.config.ts` 신규 id 자동 반영(또는 이 파일이 런타임 무관임을 감안해 정리).
3. **효과:** 새 커리큘럼 추가가 진짜 "데이터만"으로 성립.

### 단계 2 — 태그/필터 UI (본 기능)

1. **데이터 모델:** 각 커리큘럼 `meta.json` 에 `tags[]`·`genre`·`level`(있으면 재사용) 부여. 저작 규약(playbook 메타)에 문서화.
2. **필터 자동 생성:** HomeView 가 **모든 커리큘럼의 태그 합집합**으로 필터 버튼을 자동 생성(현재 악기 필터 칩이 쓰는 방식 그대로 확장). → 새 커리큘럼이 늘어도 필터에 자동 등장.
3. **필터 로직:** 클라이언트에서 선택 태그로 카드 show/hide(정적 사이트라 URL 쿼리 or 클라 스크립트 `src/scripts/`). SEO 위해 기본은 전체 노출.
4. **i18n:** 필터 라벨(난이도/장르 이름) 3언어 사전 추가.

## 기존 커리큘럼 불변 보장

- 순수 데이터·UI 추가. 콘텐츠(레슨/악보)는 무관 → `check-invariants.mjs` 지문 영향 없음.
- 태그 없는 커리큘럼은 "미분류"로 노출(누락 안 됨).

## 검증 방법

- V1 build 0. V3 회귀 0(콘텐츠 불변). 
- 수동: 3커리큘럼에 태그 부여 후 필터 버튼 자동 생성·show/hide 동작, 태그 없는 커리큘럼도 노출 확인.

## 주의 / 정지조건

- 클라이언트 JS 최소 원칙 — 필터는 가벼운 스크립트로, 앱 로직과 분리.
- 필터해도 기본(무필터) 상태에서 전체가 SEO 인덱싱되게 유지.

## 체크리스트

- [ ] 단계1: CURRICULUM_ORDER 제거 → meta.json order/level 정렬
- [ ] 단계1: content.config.ts 정합 정리
- [ ] 단계2: meta.json tags/genre/level 필드 + playbook 문서화
- [ ] 단계2: HomeView 필터 버튼 자동 생성(악기 칩 방식 확장)
- [ ] 단계2: 필터 show/hide 스크립트 + i18n 라벨
- [ ] V1~V3 통과 + Roadmap·이 문서 갱신

## 미해결 질문 (사람 결정)

- 필터 축: 난이도/장르/악기 중 무엇을 1급으로? 다중 선택 허용?
- 커리큘럼이 몇 개 넘어가면 착수할지(현재 3개라 우선도 낮음).
- URL 쿼리 반영(공유 가능 필터 링크) vs 순수 클라 토글.
