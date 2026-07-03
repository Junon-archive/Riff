# i18n Key Map — 목업 `data-i` ↔ 사전 키 정합 (technical_spec OPEN-4)

> 상위 문서: `../00_master_prd.md`, `../../web_app/docs/technical_spec.md` §7(OPEN-4), `./translation_map.md`
> 대상: `web_app/src/i18n/{ko,en,ja}.json`
> 정합 원칙(본 세션 확정): **런타임 조회 키 = 목업 `data-i`/`data-i-html`/`data-i-ph` 키를 정본(canonical)으로 삼는다.**
> `web_app/docs/design_reference.html`은 레퍼런스이며 **수정하지 않았다.** 사전 JSON만 정본 키로 맞췄다.
>
> ⚠️ 주의: 이 원칙은 `technical_spec.md` §7.4가 서술한 방향("세션 B 네임스페이스 JSON이 캐논, `data-i` 값을 캐논 dot-path로 교체")과 **반대 방향**이다. 이번 작업 지시(OPEN-4 완결 태스크)가 명시적으로 "목업 `data-i` 키를 정본으로 삼는다"고 지정했으므로 그 지시를 따랐다. §7.4의 매핑 테이블(대표)은 **개념 대응표로는 그대로 활용**했고, 어느 쪽 키 이름이 살아남는지만 뒤집었다. `technical_spec.md` §7.4 본문과 실제 산출물의 키 이름 방향이 다르다는 점을 frontend-engineer/아키텍트가 인지해야 한다(§7.4 텍스트 자체는 수정하지 않음 — 별도 승인 필요).

---

## 0. 요약 수치

| 항목 | 값 |
|---|---|
| 목업 `data-i`/`data-i-html`/`data-i-ph` 속성 키 | **38개** |
| 목업 JS `t()` 호출로만 조회되는 추가 키(속성 없음, 런타임 실사용) | **4개** (`curr.week`, `curr.month.days`, `months.done`, `months.soon`) |
| 목업이 실제로 참조하는 총 키 | **42개** |
| 사전에 신규로 추가한 키(목업엔 있었지만 세션 B 사전엔 없던 것) | **19개** (닉네임 시트 5, 섹션 라벨 8, storage 시트 라벨 4, home.teaser 2 — 상세는 §2) |
| 이름 정합(rename/merge)된 키 | **13쌍** (§3) |
| 세션 B 전용으로 유지된 키(목업 미참조) | **35개** |
| 최종 언어당 총 키 수 | **91개** (ko/en/ja 동일) |
| 3언어 키셋 diff | **0건** (flatten dot-path 비교, `node`로 검증) |
| 플레이스홀더(`{amount}/{nickname}/{week}/{count}`) 3언어 일치 | **0건 불일치** |
| 목업 `data-lang` 코드 | `kr` / `en` / `jp` (§4 정규화 노트) |

검증 명령(재현 가능):
```bash
node -e "function flat(o,p=''){let k=[];for(const x in o){const q=p?p+'.'+x:x;typeof o[x]==='object'&&o[x]!==null?k=k.concat(flat(o[x],q)):k.push(q)}return k}
const ko=flat(require('./web_app/src/i18n/ko.json')).sort(),en=flat(require('./web_app/src/i18n/en.json')).sort(),ja=flat(require('./web_app/src/i18n/ja.json')).sort();
console.log(ko.length,en.length,ja.length, JSON.stringify(ko)===JSON.stringify(en), JSON.stringify(ko)===JSON.stringify(ja));"
```

---

## 1. 목업 `data-i` 키 → 사전 키(정본) 전체 매핑

`(속성)` = HTML `data-i`/`data-i-html`/`data-i-ph`로 바인딩. `(t())` = HTML 속성 없이 JS `t("...")` 호출로만 조회(정적 accordion/label 렌더 시 사용). 목업 키가 그대로 정본이 된 경우 "변경 없음", 콜론 충돌 회피로 세그먼트를 합친 경우 "평탄화", 세션 B 기존 키와 개념이 겹쳐 세션 B 쪽을 흡수한 경우 "병합"으로 표기.

| # | 목업 키 | 바인딩 | 최종 사전 키(정본) | 처리 |
|---|---|---|---|---|
| 1 | `free.badge` | 속성 | `free.badge` | 병합 (← `landing.no_signup`, §3 근접매핑) |
| 2 | `home.title` | 속성(html) | `home.title` | 병합 (← `landing.hero_title`) |
| 3 | `home.lead` | 속성 | `home.lead` | 병합 (← `landing.hero_subtitle`) |
| 4 | `home.teaser.title` | 속성 | `home.teaser.title` | 신규 |
| 5 | `home.teaser.desc` | 속성 | `home.teaser.desc` | 신규 |
| 6 | `home.storage` | 속성 | `home.storage` | 병합 (← `storage.local_only`, 문구는 목업 채택) |
| 7 | `home.storage.cta` | 속성 | `home.storage_cta` | 신규 + **평탄화**(`home.storage`가 leaf 문자열이라 `home.storage.cta`를 중첩시키면 dot-path 충돌 → `_cta`로 flatten) |
| 8 | `home.philosophy` | 속성(html) | `home.philosophy` | 병합 (← `landing.slogan`) |
| 9 | `curr.eyebrow` | 속성 | `curr.eyebrow` | 신규 |
| 10 | `curr.progress.label` | 속성 | `curr.progress.label` | 신규 |
| 11 | `curr.days` | 속성 | `curr.days` | 신규 |
| 12 | `curr.week` | (t()) | `curr.week` | 신규 |
| 13 | `curr.month.days` | (t()) | `curr.month.days` | 신규 |
| 14 | `months.done` | (t()) | `months.done` | 신규 |
| 15 | `months.soon` | (t()) | `months.soon` | 신규 |
| 16 | `lesson.theory` | 속성 | `lesson.theory` | 신규 |
| 17 | `lesson.visual` | 속성 | `lesson.visual` | 신규 |
| 18 | `lesson.action` | 속성 | `lesson.action` | 신규 |
| 19 | `lesson.chord` | 속성 | `lesson.chord` | 신규 |
| 20 | `lesson.chord.note` | 속성 | `lesson.chord_note` | 신규 + **평탄화**(`lesson.chord`와 leaf/parent 충돌 회피) |
| 21 | `lesson.tab` | 속성 | `lesson.tab` | 신규 |
| 22 | `lesson.tab.note` | 속성 | `lesson.tab_note` | 신규 + **평탄화**(`lesson.tab`과 충돌 회피) |
| 23 | `lesson.tip` | 속성 | `lesson.tip` | 신규 |
| 24 | `lesson.complete` | 속성 | `lesson.complete` | 병합 (← `lesson.complete_button`) |
| 25 | `lesson.done` | 속성 | `lesson.done` | 신규 (세션 B `lesson.complete_toast`와 **의도적으로 병합하지 않음** — §3 비고) |
| 26 | `lesson.prev` | 속성 | `lesson.prev` | 병합 (← `lesson.prev_lesson`) |
| 27 | `lesson.next` | 속성 | `lesson.next` | 병합 (← `lesson.next_lesson`) |
| 43 | `lesson.undo` | 속성 | `lesson.undo` | 신규 (2단계 구현 — "완료" 실행취소 버튼 라벨, `doneState` 내부 보조 액션) |
| 28 | `donate.footer` | 속성 | `donate.footer` | 신규 |
| 29 | `donate.title` | 속성 | `donate.title` | 신규 |
| 30 | `donate.sub` | 속성 | `donate.sub` | 병합 (← `donation.coffee`) |
| 31 | `donate.close` | 속성 | `donate.close` | 병합 (← `donation.maybe_later`) |
| 32 | `nick.title` | 속성 | `nick.title` | 신규(네임스페이스 전체 신규) |
| 33 | `nick.sub` | 속성 | `nick.sub` | 신규 |
| 34 | `nick.placeholder` | 속성(ph) | `nick.placeholder` | 신규 |
| 35 | `nick.save` | 속성 | `nick.save` | 신규 |
| 36 | `nick.later` | 속성 | `nick.later` | 신규 |
| 37 | `storage.title` | 속성 | `storage.title` | 신규 |
| 38 | `storage.sub` | 속성 | `storage.sub` | 신규 |
| 39 | `storage.export` | 속성 | `storage.export` | 병합(키 이름 이미 동일, 문구는 목업 채택) |
| 40 | `storage.import` | 속성 | `storage.import` | 병합(키 이름 이미 동일, 문구는 목업 채택) |
| 41 | `storage.io.placeholder` | 속성(ph) | `storage.io_placeholder` | 신규 + **평탄화** |
| 42 | `storage.close` | 속성 | `storage.close` | 신규 |

**평탄화(flatten) 노트 — 반드시 확인:** 중첩 JSON에서 `t('a.b')`(문자열 leaf)와 `t('a.b.c')`(그 아래 자식)는 동시에 성립할 수 없다(`a.b`가 문자열이면서 동시에 객체일 수 없음). 목업의 플랫 키 설계상 `home.storage`/`home.storage.cta`, `lesson.chord`/`lesson.chord.note`, `lesson.tab`/`lesson.tab.note`, `storage.export`~`storage.io.placeholder`(`storage.io`는 부모로만 쓰여 실제 충돌은 아니지만 통일성 위해 평탄화)에서 이 충돌이 발생한다. 3건은 `_` 언더스코어로 평탄화했다(`home.storage_cta`, `lesson.chord_note`, `lesson.tab_note`, `storage.io_placeholder`). **frontend-engineer는 `i18n.ts`의 dot-path resolver 구현 시 이 4개 키를 목업 원문 그대로(`home.storage.cta` 등) 쓰지 않도록 주의.**

---

## 2. 신규 추가 키 (목업엔 있었지만 세션 B 사전엔 없던 것) — 19개, ko/en/ja 3벌 작성 완료

| 네임스페이스 | 신규 키 | 사유 |
|---|---|---|
| `home` | `teaser.title`, `teaser.desc` | 티저 카드(다음 커리큘럼 예고) — 세션 B에 없음 |
| `curr` | `eyebrow`, `progress.label`, `days`, `week`, `month.days` | 커리큘럼 계층 뷰 라벨/단위어 — 세션 B에 없음 |
| `months` | `done`, `soon` | 월 아코디언 상태 라벨 |
| `lesson` | `theory`, `visual`, `action`, `chord`, `chord_note`, `tab`, `tab_note`, `tip`, `done` | 레슨 상세 섹션 라벨/캡션/완료-상태 라벨 |
| `donate` | `footer`, `title` | 도네이션 시트 헤더/하단 CTA |
| `nick` | `title`, `sub`, `placeholder`, `save`, `later` | 닉네임 시트 — **네임스페이스 자체가 신규**(세션 B 9네임스페이스엔 없었음) |
| `storage` | `title`, `sub`, `io_placeholder`, `close` | 저장 시트 헤더/텍스트에어리어 placeholder/닫기 |

문구는 모두 목업 `design_reference.html`의 인라인 `I18N` 딕셔너리 원문(ko/en/jp)을 그대로 채택했다(목업 자체가 이미 토스체·톤가이드에 부합하는 3개국어 카피를 갖추고 있었음, `translation_map.md` §1 톤·"긁지 않기" 기준 재검토 결과 수정 불필요).

---

## 3. 이름 정합(rename/merge) 목록 — 13쌍

세션 B 키를 폐기하고 목업 키로 흡수(콘텐츠는 원칙적으로 목업 문구를 채택, 근거는 각 행에 표기).

| 세션 B 원래 키(폐기) | → 최종 키(정본) | 문구 채택 | 비고 |
|---|---|---|---|
| `landing.no_signup` | `free.badge` | 목업 | `technical_spec.md` §7.4 표의 대표 매핑 채택 |
| `landing.hero_title` | `home.title` | 목업 | HTML 포함 문구, 이미 3언어 존재 |
| `landing.hero_subtitle` | `home.lead` | 목업 | 상동 |
| `landing.slogan` | `home.philosophy` | 목업 | 상동 |
| `storage.local_only` | `home.storage` | 목업 | 랜딩 저장 안내 배너 위치 일치 |
| `lesson.complete_button` | `lesson.complete` | 목업 | 완료 버튼 라벨, 이모지 포함 |
| `lesson.prev_lesson` | `lesson.prev` | 목업 | 이전/다음 Day 네비게이션 |
| `lesson.next_lesson` | `lesson.next` | 목업 | 상동 |
| `donation.coffee` | `donate.sub` | 목업 | 도네이션 시트 서브텍스트 위치 일치 |
| `donation.maybe_later` | `donate.close` | 목업 | 닫기 버튼 라벨 |
| `donation.toss` | `donate.toss` | 세션 B(값 유지) | 네임스페이스만 `donation`→`donate` 통일(목업이 이 하위 4개는 data-i로 안 걸어뒀지만 — §4 참고 — 일관성 위해 네임스페이스 통일) |
| `donation.kakaopay` | `donate.kakaopay` | 세션 B(값 유지) | 상동 |
| `donation.paypal` / `donation.bmc` / `donation.thanks` | `donate.paypal` / `donate.bmc` / `donate.thanks` | 세션 B(값 유지) | 상동 |

**의도적으로 병합하지 않은 근접 개념(주의):**
- `lesson.done`(목업, 완료 후 상태 박스 라벨) ↔ `lesson.complete_toast`(세션 B, 완료 순간 토스트 메시지) — `technical_spec.md` §7.4 표는 이 둘을 "매핑"으로 묶었지만, UI 역할이 다르다(하나는 상시 노출되는 완료 상태 라벨, 하나는 일회성 토스트). **둘 다 유지**했다. 실제 구현 시 둘 다 필요(완료 즉시 토스트 + 완료 후 상태 라벨).
- `curr.week`(목업, 단어 "주차") ↔ `lesson.week_label`(세션 B, 템플릿 "{week}주차") — 쓰임이 다르다(전자는 숫자와 별도 조합, 후자는 완결 문자열). **둘 다 유지.**
- `landing.coming_soon` ↔ `months.soon` — 의미가 근접하지만 전자는 커리큘럼 카드용, 후자는 월 아코디언 상태용으로 자리가 다르다. **둘 다 유지**(후속 리뷰 시 통합 검토 여지, `translation_map.md` OPEN 후보로 등록 권장).
- 목업 `I18N.kr["donate.saved"]`(정적 캡션, "지금까지 무료로 절약한 금액이에요")는 **어떤 `data-i`/`t()` 호출로도 참조되지 않는 죽은 키**다(실제 절약 금액 문자열은 `updateSaveAmount()`가 언어별로 직접 조립). `technical_spec.md` §6.2가 이미 이 하드코딩을 폐기하고 `progress.saved_money`(세션 B, `{amount}` 플레이스홀더)로 단일화하라고 명시하므로 **추가하지 않았다.**

---

## 4. 언어코드 매핑 노트 (목업 미수정)

- 목업 `data-lang` 값: `kr` / `en` / `jp`. 사전 파일명·`gh_state.lang`·`document.documentElement.lang`은 **`ko` / `en` / `ja`**로 유지(`technical_spec.md` D8, §7.3).
- 정규화 규칙: **`kr → ko`, `jp → ja`, `en → en`**(변경 없음).
- 목업 HTML은 레퍼런스이므로 `data-lang="kr"`/`"jp"` 속성 자체는 그대로 둔다. 실제 구현(`langSwitcher.ts`)에서 버튼 렌더 시 `SUPPORTED_LANGS = ['ko','en','ja']`(config)를 기준으로 새로 만들고, 목업의 `kr`/`jp` 리터럴은 참고만 한다.
- 목업 언어 세그먼트 버튼 라벨("한글"/"EN"/"日本")은 `data-i`가 걸려 있지 않다(언어명은 항상 자기 언어로 고정 표시하는 게 의도적 설계로 보임) — `lang.ko`/`lang.en`/`lang.ja`(세션 B 기존 키, 각 언어명을 자국어로 표기)가 이미 이 용도로 존재하므로 재사용 가능.

---

## 5. 세션 B 전용 유지 키 (목업 미참조, 삭제하지 않음) — 35개

목업 정적 데모에는 없지만 실제 앱(진도·넛지·에러·공통 버튼)에 필요한 키. `technical_spec.md` §6.2·§6.3·6.4가 이 키들의 실사용처를 명시한다.

- `common.*` (9): app_name, next, back, close, confirm, cancel, retry, loading, ok
- `landing.*` (3, 병합 후 잔존): free_banner, start_button, coming_soon
- `progress.*` (7): title, saved_money, lessons_done, streak, completion, keep_going, empty
- `nudge.*` (5 트리거 / 실키 10개): enter_week_2, finish_week_1..6(2단계: `finish_week` 단일 키 → 문구 로테이션 6종으로 분화, `translation_map.md` §4 참조), finish_month, welcome_back, almost_there — `state_storage.md` §5 트리거 표와 1:1(트리거·dedup은 불변, 문구 선택만 `web_app/src/lib/nudges.ts`가 주차 번호로 로테이션)
- `storage.*` (3, 병합 후 잔존): export_done, import_done, cleared_warning
- `donate.*` (3, 병합 후 잔존): toss, kakaopay, paypal, bmc, thanks *(5개 — 목업이 결제 버튼 라벨을 `data-i` 없이 하드코딩해서 벌어진 공백. §6 참고)*
- `lesson.*` (7, 병합 후 잔존): title, play, pause, replay, week_label, day_label, complete_toast, locked
- `lang.*` (4): switch, ko, en, ja
- `error.*` (5): generic, not_found, load_failed, save_failed, offline

---

## 6. 발견된 목업 구현 공백 (참고, 목업 미수정)

- 도네이션 바텀시트의 결제 채널 버튼(`Toss`/`카카오페이`/`PayPal`/`Buy me a coffee`)은 `data-i` 없이 **하드코딩**돼 있다(`<button class="pay-btn pay-toss"><span class="ico">T</span>Toss</button>` 등). 언어를 바꿔도 이 라벨은 바뀌지 않는 목업 상태다. 실제 구현에서는 `donate.toss/kakaopay/paypal/bmc`(§5)로 반드시 바인딩해야 한다.
- 넛지 토스트(`NUDGE` 객체, 2주차 진입 알림)는 `I18N`/`data-i`를 거치지 않고 `state.lang`으로 직접 인덱싱하는 별도 객체다. 개념적으로 `nudge.enter_week_2`와 동일하지만 목업 구현 경로가 다르므로 이번 "목업 키 정본화" 대상에서 **제외**했고(§0 "42개"에 미포함), `nudge.enter_week_2`는 세션 B 문구를 그대로 유지했다.
- Export/Import 성공·실패 토스트("진도를 불러왔어요!" 등)도 목업 JS에서 3중 삼항연산자로 하드코딩돼 있다(`data-i` 미사용). 개념적으로 `storage.import_done`/`error.*`와 겹친다 — 실제 구현 시 해당 세션 B 키로 대체 권장.

---

## 7. 산출물

- `web_app/src/i18n/ko.json`, `en.json`, `ja.json` — 언어당 **91개 키**, 14 최상위 네임스페이스(`common, free, home, curr, months, lesson, donate, nick, storage, landing, progress, nudge, lang, error`), 3언어 키셋 diff **0건**, 플레이스홀더 불일치 **0건**.

## 8. 추가 — "드림 기타" 후원 연출 (`dream.*`, 프론트 2단계 구현, 2026-07-03)

월/커리큘럼 완료(마일스톤) 시 도네이션 시트를 바로 열지 않고 먼저 노출하는 "드림 기타" 리빌 시트(`#dreamScrim`, `web_app/src/layouts/Base.astro` + `web_app/src/scripts/app.ts`)용 신규 네임스페이스. 목업(`design_reference.html`)에는 없는 완전 신규 기능이라 목업 대조 대상이 아니다(§1 42개 목업 참조 키에 미포함, 세션 B/OPEN-4 범위 밖 신규 추가).

| 키 | 바인딩 | 용도 |
|---|---|---|
| `dream.tada` | 속성(`data-i`) | 이미지 위에 겹치는 "쨘!" 액센트 텍스트 |
| `dream.guitar` | JS(`t()`, `{instrument}` 보간 인자) | 악기 타입이 guitar인 아이템의 명사 |
| `dream.bass` | JS(`t()`, `{instrument}` 보간 인자) | 악기 타입이 bass인 아이템의 명사 |
| `dream.line` | JS(`t()` → `innerHTML` 주입, `{instrument}` 플레이스홀더) | 랜덤 노출된 드림 아이템 멘트 |
| `dream.cta` | 속성(`data-i`) | 후원 시트로 넘어가는 버튼 라벨 |
| `dream.later` | 속성(`data-i`) | 강매 없이 닫는 보조 버튼 라벨 |

- 3언어 키셋 diff 재검증: `dream.*` 6키 추가 후 언어당 **103개 키**, diff **0건**(§0 검증 명령으로 재현 가능).
- `DREAM_ITEMS`(`web_app/src/config.ts`)의 `name`(악기 고유명사, 예: "PRS SilverSky")은 3언어 공통 영어 원문 그대로 표시 — 번역 대상 아님(고유명사 규약, `translation_map.md` 없음 별도 언급 불요).

## 9. 추가 — 커리큘럼 분류 스킴 신규 키 (프론트 구현, 2026-07-03)

등급 라벨("입문/중급/고급") 대신 "이런 분께" + 기간 배지 + 악기 필터 칩 인프라를 도입하며 신설한 키. 상세 배경·구현 위치는 `translation_map.md` §8 참조.

| 키 | 바인딩 | 용도 |
|---|---|---|
| `curr.months_unit` | JS(`t()`, `{n}` 보간) | 랜딩/커리큘럼 카드의 기간 메타 배지("3개월" 등) |
| `filter.all` | 속성(`data-i` 미사용, Astro SSR `translate()`) | 악기 필터 칩 "전체" |
| `instrument.guitar` | 상동 | 악기 필터 칩 "기타" 라벨 |
| `instrument.bass` | 상동 | 악기 필터 칩 "베이스" 라벨(현재 데이터엔 기타뿐이라 미노출, 인프라 대비) |

- `curriculum.forWho`(커리큘럼 카드의 "이런 분께" 한 줄)는 사전 키가 아니라 `_design_docs/02_curriculum/{id}/meta.json`의 `forWho` 필드(3언어)를 `build-content.mjs`가 manifest로 그대로 통과시킨 **콘텐츠 데이터**다 — i18n 사전에 새 키를 추가하지 않았다.
- 3언어 키셋 diff 재검증: 위 4키 추가 후 언어당 **107개 키**, diff **0건**(§0 검증 명령으로 재현 가능).

## 10. 추가 — 도네이션 QR 뷰 신규 키 (프론트 구현, 2026-07-03)

도네이션 시트를 "링크 + QR 이미지" 플러그앤플레이로 확장(`web_app/src/config.ts` `DONATION_CHANNELS`, `web_app/src/scripts/app.ts` `showDonateQr`, `web_app/src/layouts/Base.astro` `#donateQrView`)하며 신설한 키. 목업에는 QR 뷰 개념이 없어 목업 대조 대상이 아니다.

| 키 | 바인딩 | 용도 |
|---|---|---|
| `donate.scan_qr` | Astro SSR(`translate()`) | QR 뷰 안내 문구("카메라로 스캔하세요") |
| `donate.preparing` | Astro SSR(`translate()`) | url/qr 둘 다 비어있는(플레이스홀더) 채널 버튼의 "준비 중" 배지 |

- QR 뷰의 뒤로가기 버튼 라벨은 신규 키를 만들지 않고 기존 `common.back`("이전")을 재사용했다.
- 3언어 키셋 diff 재검증: 위 2키 추가 후 언어당 **109개 키**, diff **0건**(§0 검증 명령으로 재현 가능).
