# 커리큘럼 콘텐츠 다국어화 (KR/EN/JP) — 아키텍처 & 파이프라인

> 상위: `../00_master_prd.md` · 관련: `translation_map.md`(UI 마이크로카피)
> 범위: **레슨 본문(day 파일) 및 개요(overview) 산문**의 3개국어화. UI 문자열은 `translation_map.md` 담당.

## 1. 결정 (Decision)
- 커리큘럼 **콘텐츠 자체를 KR/EN/JP** 세 언어로 제공한다.
- **EN/JP도 '토스체'** — 친절·유쾌·격려·대화체를 그대로 유지한다. 단순 직역 금지, 문화권에 맞는 자연스러운 토스 톤 재현.
- **KO가 원본(source of truth).** EN/JP는 KO에서 파생 번역.

## 2. 파일 네이밍 규약
```
day_N.ko.md   ← 원본(한국어). 세션 A가 생성.
day_N.en.md   ← 영어 번역(토스체 유지)
day_N.ja.md   ← 일본어 번역(토스체 유지)
```
- 개요도 동일 규약 적용 예정: `week_N_overview.{ko,en,ja}.md`, `month_N_overview.{ko,en,ja}.md`.
- web_app 로더: `lang` 값에 따라 `day_N.{lang}.md`를 로드, 없으면 `ko`로 폴백.

## 3. 언어 중립 자산 계약 (중요 — JSON 악보)
- day 파일 ②시각 자료의 **악보 JSON 블록은 언어 독립**이다. 음이름·도수·프렛은 음악 표기라 번역하지 않는다.
- 번역가(에이전트)는 **JSON 코드 블록을 바이트 단위로 그대로 복사**한다. 필드·값·id를 절대 변경/번역하지 않는다.
  - 예외: JSON 밖의 산문(블록 앞뒤 설명)은 번역 대상.
  - `meta.title`은 영어권 음악 표기라 그대로 둔다(번역하지 않음).
- 결과: 같은 day의 ko/en/ja 3파일은 **동일한 JSON 블록**을 가진다 → `design-sync-reviewer`가 3파일 간 JSON 블록 일치를 검증.

## 4. 프론트매터 규약 (번역본)
- `dayKey`, `estMinutes`, `i18nKey`는 **3개 언어 동일**(언어 독립 식별자).
- `title`만 해당 언어로 번역(토스체 후킹 유지).
- 예:
  ```yaml
  title: "…(해당 언어)"
  dayKey: m1.w1.d1        # 동일
  estMinutes: 50          # 동일
  i18nKey: lesson.m1.w1.d1 # 동일
  lang: en                # 언어 표기 추가
  ```

## 5. 번역 톤 가이드 (언어별)
- **EN:** friendly, encouraging, conversational — Toss-like warmth. 미국식 자연스러운 구어, 과한 격식 배제. 비유는 영어권에 통하는 것으로 로컬라이즈(직역된 한국식 비유 지양).
- **JP:** ですます체 기반의 다정하고 부드러운 톤. 과한 경어 지양, 친근하게. 음악 용어는 통용 표기(예: ペンタトニック, ヴィブラート).
- 공통: 한국어 원본의 "오늘 왜 이걸 하냐면요…" 같은 도입 후킹, 격려, 위트를 **기능적으로 등가 재현**(문장 그대로가 아니라 느낌을 옮김).

## 6. 파이프라인 (단계·담당)
```
[세션 A] day_N.ko.md 생성 (curriculum-architect)
   → [번역] day_N.en.md / day_N.ja.md 생성 (localization-writer)
        · KO 산문을 토스체로 번역, JSON 블록 verbatim 복사, 프론트매터 규약 적용
   → [검증] design-sync-reviewer
        · ko/en/ja 3파일의 JSON 블록 일치, dayKey/estMinutes/i18nKey 동일, 섹션 구조(①②③④) 동일, 토스 톤 스팟체크
```
- 배치: **주차 단위**로 번역(주당 4일 × 2언어). 월별 게이트로 진행.

## 7. 검증 체크리스트 (번역본)
- [ ] JSON 블록이 ko와 **완전 동일**(개수·id·필드·값).
- [ ] dayKey/estMinutes/i18nKey가 ko와 동일.
- [ ] ①②③④ 4단 구조·50분 루틴 4구간 유지.
- [ ] 특정 도구(GarageBand 등) 미언급(도구중립 표현 유지).
- [ ] 토스 톤 유지(직역투·기계번역투 아님).

## 8. 진행 상태 (Tracking)
| 스코프 | ko | en | ja |
|---|---|---|---|
| day 파일(52) | ✅ | ✅ | ✅ |
| week/month 개요(16) | ✅ | ✅ | ✅ |
| UI 마이크로카피 | ✅(translation_map) | ✅ | ✅ |

- day 파일 156개(52×3) 최종 검증 통과: JSON 블록 3언어 완전 일치(0 불일치), 프론트매터(dayKey/estMinutes/i18nKey) 일치, `lang` 태그 정상.
- 개요 48개(16×3) 완료: month/week 개요를 **웹 노출용 토스체·상세 버전으로 재작성(ko)** 후 EN/JP 재번역. 구조·표 파리티 유지, 도발 어투 detox(3언어 잔재 0).
- **언어중립 라벨 정리:** Week 6 악보 JSON `label`에 한국어 서술이 섞였던 18곳을 음이름·도수 기호(예: `C = b3(Am)/R(C)`)로 정규화하고 3언어에 동일 반영(밝은/어두운/착지 뉘앙스는 언어별 산문이 담당). → 이후 세션 A 생성 시 **label은 음악 기호만**(한국어 서술 금지) 규약을 [[curriculum_i18n]] 및 프롬프트에 반영 권장.

> 커리큘럼 콘텐츠 i18n 100% 마감: day 156 + 개요 48 + UI 카피 3언어 완료.
