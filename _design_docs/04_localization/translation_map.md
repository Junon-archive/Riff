# 04. Localization Map — 토스 스타일 3개국어 마이크로카피

> 상위 문서: `../00_master_prd.md` · 언어: `ko` / `en` / `ja` · 폴백: `ko`
> 규약: 모든 UI 문자열은 이 키를 통해 `ko.json/en.json/ja.json`에 매핑. **하드코딩 금지.**

## 1. 톤 가이드 (3개국 공통 원칙)
- **한국어(ko):** 토스체. 친근한 반말 아님, 정중하되 대화하듯. 격려·위트. 예) "~해봐요", "~예요".
- **영어(en):** Friendly, encouraging, concise. Toss-like warmth. 예) "You've got this.", "Nice — one step closer."
- **일본어(ja):** ですます체 기반의 부드럽고 다정한 톤. 과한 경어체 지양. 예) "その調子です！", "一緒にがんばりましょう。"
- 공통: 느낌표/이모지 절제해서 사용, 매뉴얼조·명령조 금지.
- **긁지 않기 (No needling) — 매우 중요:** 토스는 **무조건 친절·차분·자세한 설명**이 특징이다. 독자를 도발하거나 몰아세우지 않는다.
  - 금지: "솔직히 말할게요"류 도발적 도입 / "그거 외운 거 맞아요?"式 몰아세우는 반문 / "90%는 함정에 빠져요"처럼 깎아내리기 / 비꼬는 투.
  - 대안: 같은 사실을 부드럽게 설명한다. 예) "솔직히 말할게요, 그거 외운 거 맞아요?" → "여기서 한 가지만 짚고 갈게요. 그동안 많이 쳐보셨을 텐데, 사실 손에 익은 것과 자유롭게 고르는 건 조금 달라요."
  - EN: "Let's be honest / be honest / let me be honest" 같은 도발/챌린지 도입 금지 → "One thing worth noticing…", "Here's the thing…" 처럼 차분하게.
  - JA: "正直に言いますね / ぶっちゃけ" 같은 도발 도입 금지 → "ひとつだけお伝えすると…", "実はここがポイントで…" 처럼 부드럽게.

## 2. 키 네임스페이스 구조
> OPEN-4 정합(목업 `data-i` 키 정본화, `./i18n_key_map.md`) 이후 **14개 최상위 네임스페이스**로 확장됐다. 최초 9개(세션 B) + 목업 정합으로 추가된 5개(`free/home/curr/months/nick`, `donation`→`donate` 개명 포함).
```
common.*      버튼/공통 라벨 (다음, 이전, 닫기 등)
free.*        랜딩 상단 배지 (목업 정합 신규)
home.*        랜딩 페이지 본문(구 landing.hero_*/slogan 병합, 목업 정합)
landing.*     랜딩 페이지 잔존 카피(free_banner/start_button/coming_soon)
curr.*        커리큘럼 계층 뷰 라벨 (목업 정합 신규)
months.*      월 아코디언 상태 라벨 (목업 정합 신규)
lesson.*      레슨 상세(이론/시각자료/완료 버튼)
progress.*    진도·완주 관련
nudge.*       유동 알림(이탈 방지) 문구
storage.*     localStorage 한계 고지 · 백업 시트
donate.*      도네이션 카드/문구 (구 donation.*, 목업 정합 개명)
nick.*        닉네임 입력 시트 (목업 정합 신규)
lang.*        언어 스위처
error.*       예외 안내
dream.*       "드림 기타" 후원 연출 시트 (프론트 2단계 신규, 목업 미참조)
```
> 전체 키 목록·목업 대조·rename/merge 근거는 `./i18n_key_map.md` 참조.

## 3. 핵심 카피 매핑 테이블 (세션 B 산출물 — `web_app/src/i18n/*.json`과 1:1 동기화)

> ⚠️ **키 이름 갱신 안내 (OPEN-4 정합 완료, `./i18n_key_map.md` 참조):** 목업 `design_reference.html`의 `data-i` 키를 정본으로 삼는 정합 작업 결과, 아래 일부 키는 **이름이 바뀌었다**(`landing.free_banner`→`free.badge`, `lesson.complete_button`→`lesson.complete`, `storage.local_only`→`home.storage`, `donation.coffee`→`donate.sub` 등). 이 표는 **현재 값**을 최신 키 이름으로 갱신했다. 전체 rename/merge 목록·목업 대조표는 `./i18n_key_map.md`를 SSOT로 참조할 것.

| key | ko | en | ja |
|---|---|---|---|
| `free.badge` (구 `landing.free_banner`, 목업 문구로 병합) | 로그인도, 결제도 없어요 | No login, no payment | ログインも決済もありません |
| `lesson.complete` (구 `lesson.complete_button`) | 오늘의 연습 완료 🎸 | Mark today complete 🎸 | 今日の練習を完了 🎸 |
| `lesson.complete_toast` (변경 없음 — `lesson.done`과는 별개 유지, `i18n_key_map.md` §3 비고) | 🎉 방금 한 걸음 더 나아갔어요! | 🎉 You just got a little better! | 🎉 いま、一歩前に進みましたね！ |
| `progress.saved_money` (변경 없음) | 지금까지 약 {amount} 레슨비를 아꼈어요 | You've saved about {amount} in lesson fees so far | これまでで約 {amount} のレッスン代を節約できました |
| `nudge.enter_week_2` (변경 없음) | 10명 중 8명은 1주차에서 기타를 내려놔요. 그런데 {nickname}님은 여기까지 왔으니, 이미 상위 20%예요. 다음도 같이 달려봐요 👀 | 8 in 10 people put the guitar down in week 1. But you made it here, {nickname} — you're already in the top 20%. Let's keep going 👀 | 10人に8人は、1週目でギターを置いてしまいます。でも{nickname}さんはここまで来たので、もう上位20%です。次も一緒にいきましょう 👀 |
| `nudge.finish_week_1..6` (2단계: 단일 키 → 6개 로테이션 키로 분화, 아래 §4 참조) | 예) 약 35%는 {week}주차에서 기타를 내려놨대요. 그런데 {nickname}님은 여기까지 왔으니, 이미 상위 20%예요. (외 5종 — `web_app/src/i18n/ko.json` `nudge.finish_week_1..6` 참조) | e.g. About 35% put the guitar down by week {week}. But you've made it this far, {nickname} — you're already in the top 20%. (+5 more variants — see `web_app/src/i18n/en.json` `nudge.finish_week_1..6`) | 例）だいたい35%の人が{week}週目でギターを置いてしまうそうです。でも{nickname}さんはここまで来たので、もう上位20%です。（他5種 — `web_app/src/i18n/ja.json` `nudge.finish_week_1..6` 参照） |
| `nudge.finish_month` (변경 없음) | 한 달을 채웠어요. 이건 진짜 아무나 못 해요 👏 | A whole month. Seriously, not many people get here 👏 | 1か月やり切りました。これ、なかなかできることじゃないんです 👏 |
| `home.storage` (구 `storage.local_only`, 목업 문구로 병합) | 회원가입은 없어요. 진도는 이 브라우저에 저장돼요. 캐시를 지우면 기억도 같이 사라질 수 있어서, 가끔 백업해두면 마음이 편해요. | No sign-up here. Progress lives in this browser, and clearing the cache can erase it — backing it up now and then keeps it safe. | 会員登録はありません。進捗はこのブラウザに保存され、キャッシュを消すと消えることも。たまにバックアップしておくと安心です。 |
| `storage.export` (키 이름 동일, 문구는 목업 채택) | 내 진도 내보내기 | Export my progress | 進み具合を書き出す |
| `donate.sub` (구 `donation.coffee`, 목업 문구로 병합) | 이후 내용도 모두 무료예요! 여기까지 따라왔다면 이미 레슨 몇 회차 분량을 아낀 셈이에요. 도움이 됐다면, 커피 한 잔으로 다음 커리큘럼을 응원해주세요. | Everything ahead is free too! Following along this far already saved you several lesson fees. If it helped, a coffee-sized cheer supports the next curriculum. | この先の内容もすべて無料です！ここまで進めたなら、すでにレッスン数回分を節約しています。役に立ったら、コーヒー1杯で次のカリキュラムを応援してください。 |
| `lang.switch` (변경 없음) | 언어 바꾸기 | Change language | 言語を変える |
| `lesson.undo` (신규, 2단계 구현 — 완료 실행취소 버튼) | 취소 | Undo | 取り消す |

## 4. 유동 알림(Nudge) 카피 규약
- 각 nudge는 `nudge.{id}` 키 하나. `01_architecture/state_storage.md` §5 트리거 표와 1:1 매핑됨.
- `nudge.welcome_back`(재접속 3일 경과 기준), `nudge.almost_there`(잔여 Day 1개 기준)는 §5에 편입 완료 — nudge 네임스페이스 5개 키(`enter_week_2`/`finish_week`/`finish_month`/`welcome_back`/`almost_there`) 전체가 §5 표와 어긋남 없이 매핑됨.
- 변수 보간: `{amount}`, `{nickname}`, `{week}`, `{count}` 플레이스홀더를 3개 언어에서 이름 그대로 유지(어순은 언어별 자유). 실제 산출물에서 검증 완료(불일치 0건).
- 1회성 노출(중복 방지)은 저장 계층(`nudges.shown`)이 담당(1회성은 id, 반복형은 `id:주차`/`id:날짜` dedup 키), 카피는 순수 문구만.
- **`nudge.finish_week` 문구 로테이션(프론트 2단계 구현):** 트리거 조건·dedup 키(`finish_week:{m.w}`)는 불변. 다만 같은 문구 반복을 피하기 위해 `nudge.finish_week_1`~`nudge.finish_week_6` 6종을 두고, `web_app/src/lib/nudges.ts`가 **전역 주차 인덱스(`week % 6`)로 결정적 로테이션**해 하나를 고른다(랜덤 아님 — 같은 주차는 항상 같은 문구, 재현 가능). 결: `_1`=통계+칭찬(긁지 않기 톤, {week}/{nickname} 사용), `_2`=순수 격려, `_3`=연습(메트로놈) 리마인더, `_4`/`_6`=누적·꾸준함 칭찬({week} 사용), `_5`=완주 축하. `{week}`/`{nickname}` 플레이스홀더는 3언어 동일 이름 유지.

## 5. 도네이션 채널 라벨
> 네임스페이스가 `donation.*` → **`donate.*`**로 통일됐다(목업 `donate.title/sub/close/footer`와 정합, `./i18n_key_map.md` §3). 값은 변경 없음.

| key | ko | en | ja |
|---|---|---|---|
| `donate.toss` (구 `donation.toss`) | 토스로 보내기 | Send via Toss | Tossで送る |
| `donate.kakaopay` (구 `donation.kakaopay`) | 카카오페이 | KakaoPay | KakaoPay |
| `donate.paypal` (구 `donation.paypal`) | PayPal | PayPal | PayPal |
| `donate.bmc` (구 `donation.bmc`) | Buy Me a Coffee | Buy Me a Coffee | Buy Me a Coffee |
- 노출 우선순위: ko → Toss/KakaoPay 우선, en·ja → PayPal/BMC 우선.
- ⚠️ 목업 도네이션 시트의 실제 결제 버튼은 현재 `data-i` 없이 하드코딩돼 있다(언어 전환에 반응하지 않음). 실제 구현 시 반드시 위 4개 키로 바인딩할 것(`./i18n_key_map.md` §6).

## 6. 완성 산출물 (OPEN-4 정합 반영 · 2026-07-03)
- 최종 결과물: `web_app/src/i18n/ko.json`, `en.json`, `ja.json` — 언어당 **91개 키**, 14개 최상위 네임스페이스(`common, free, home, curr, months, lesson, donate, nick, storage, landing, progress, nudge, lang, error`), 3개 언어 키셋 diff **0건**, 플레이스홀더(`{amount}/{nickname}/{week}/{count}`) 불일치 **0건**.
- 목업 `design_reference.html`이 실제로 참조하는 42개 키(`data-i`/`data-i-html`/`data-i-ph` 속성 38개 + JS `t()` 직접 호출 4개)를 전량 커버한다. 키 이름은 **목업 쪽을 정본**으로 삼아 세션 B의 동일 개념 키 13쌍을 병합/개명했다(`common`(9)·`progress`(7)·`nudge`(5)·`lang`(4)·`error`(5) 등 목업 미참조 네임스페이스는 그대로 보존).
- 이 md는 톤·키 규약의 SSOT. 위 §3·§5 표는 실제 JSON 값과 항상 1:1로 유지한다(값 변경 시 이 표도 함께 갱신). **키 이름·매핑 상세는 `./i18n_key_map.md`가 담당**(신설, OPEN-4 완결 산출물).

## 7. 추가 — "드림 기타" 후원 연출 `dream.*` (2026-07-03)
마일스톤(월/커리큘럼 완료) 달성 시 도네이션 시트 전에 먼저 노출하는 리빌 시트용 신규 네임스페이스(6키). 상세 매핑·바인딩은 `./i18n_key_map.md` §8 참조. 추가 후 언어당 **103개 키**, 3언어 diff **0건**.

| key | ko | en | ja |
|---|---|---|---|
| `dream.tada` | 쨘! | Ta-da! | じゃーん！ |
| `dream.guitar` | 기타 | guitar | ギター |
| `dream.bass` | 베이스 | bass | ベース |
| `dream.line` (`{instrument}` 보간) | 주인장의 드림 {instrument}예요. 그냥 그렇다구요 ㅎㅎ 아래 버튼을 살짝 눌러보면, 주인장에게 큰 힘이 될지도 몰라요! | This is the dev's dream {instrument}. Just putting that out there 😄 Tapping the button below might help me more than you'd think! | これ、作った人の夢の{instrument}なんです。まあ、それだけの話なんですけどね 笑 下のボタンをそっと押すと、私にとって大きな力になるかもしれません！ |
| `dream.cta` | 후원하러 가기 | Support the dev | 応援する |
| `dream.later` | 다음에요 | Maybe later | また今度 |

## 8. 추가 — 커리큘럼 분류 스킴 `filter.*`/`instrument.*`/`curr.months_unit` (2026-07-03)
"입문/중급/고급" 등급 라벨을 화면에 쓰지 않기로 확정(내부 `level`은 정렬 전용, 절대 노출 안 함). 대신:
- 카드 제목 아래 **"이런 분께" 한 줄**은 `meta.json`의 `forWho`(3언어)를 콘텐츠 파이프라인이 그대로 통과시켜 노출한다(별도 i18n 키 없음 — 커리큘럼 콘텐츠 자체이므로 사전이 아니라 `meta.json`이 SSOT).
- **기간 배지**: `curr.months_unit`(`{n}` 보간, 예: ko "{n}개월"/en "{n} months"/ja "{n}か月")를 신설해 `meta.json`의 `durationMonths`와 조합.
- **악기 필터 칩**: `filter.all`(전체/All/すべて), `instrument.guitar`(기타/Guitar/ギター), `instrument.bass`(베이스/Bass/ベース) 신설. 서로 다른 `instrument`가 2종 이상일 때만 랜딩에 칩 행이 노출(현재 기타 1종뿐이라 자동 숨김 — 인프라만 존재, 하드코딩 분기 없음).
- 신규 키 5개(`curr.months_unit`, `filter.all`, `instrument.guitar`, `instrument.bass`) 반영 후 언어당 **107개 키**, 3언어 diff **0건**(검증 명령은 §0 재사용).
- 구현: `web_app/src/components/HomeView.astro`(필터 칩 SSR 판정 + forWho·배지 렌더), `web_app/src/components/CurriculumView.astro`(forWho 한 줄), `web_app/src/scripts/app.ts`(칩 클릭 시 `data-instrument` 기반 in-place 필터), `web_app/scripts/build-content.mjs`(`forWho`/`durationMonths` manifest 통과).

## 9. 버그 수정 — `progress.saved_money` "약 약" 중복 (2026-07-03)
`lib/progress.ts`의 `formatSavedMoney()`가 ko(`약`)/ja(`約`) 접두어를 자체적으로 붙이는데, `progress.saved_money` 템플릿(§3)에도 같은 접두어가 있어 렌더 결과가 "약 약 40만 원"처럼 중복 노출됐다. i18n 값은 그대로 두고(§3 표 불변) `formatSavedMoney()`가 **금액만** 반환하도록 수정 — 접두어는 항상 i18n 템플릿 쪽만 책임진다.
