# 세션 A/B/C 산출물 인제스천 프롬프트

> 사용법: **새 Claude Code 세션**을 열고, 아래 해당 프롬프트를 붙여넣은 뒤 그 아래에 세션 A/B/C의 원문 답변을 그대로 이어 붙인다.
> 프로젝트 루트(`/home/junon/guitar_hero`)에서 실행하면 서브에이전트가 자동으로 수합·검증·정합화한다.

---

## ⚙️ 실제 실행 방식 (2026-07 업데이트 — 문서 정합)

`solo_scale_3months`는 아래 **붙여넣기 인제스천이 아니라 내부 에이전트 실행**으로 완성됐다. 두 방식이 공존한다:

- **(현행) 세션 A = 내부 실행:** 주차별 지시서를 파일로 박제(`month_N/week_N/week_N_prompt.md`)하고, `curriculum-architect` 에이전트가 그 파일을 읽어 **직접 `day_K.ko.md`를 생성**한다. 외부 GPT 붙여넣기 불필요. 이어서 `notation-validator` 검증 → `localization-writer`가 `day_K.en.md`/`day_K.ja.md` 번역. 전체 표준 절차는 `00_curriculum_authoring_playbook.md` 참조.
- **(대안) 붙여넣기 인제스천:** 아래 🅐/🅑/🅒 프롬프트는 여전히 유효하다 — 외부 세션에서 뽑은 콘텐츠를 **애드혹으로 수합**하거나, 신규 커리큘럼 초안을 외부에서 받아올 때 사용.
- **파일 네이밍:** day 파일은 언어 접미사를 쓴다(`day_N.ko.md`=원본, `.en.md`/`.ja.md`=번역). 🅐 프롬프트로 수합 시에도 원본은 `.ko.md`로 저장할 것.
- **세션 B/C 현황:** B(3개국어 UI 카피)·C(세무 리포트)는 실제로 이 붙여넣기 방식으로 수합 완료(`translation_map.md`, `tax_legal_report.md`).

---

## 🅐 세션 A 수합 — 커리큘럼 콘텐츠 + 악보 JSON

```text
아래 --- 구분선 밑에 붙여넣은 것은 외부 AI(GPT-4o)가 생성한 기타 커리큘럼 레슨 콘텐츠야.
이걸 우리 프로젝트에 수합해줘. 다음 순서로 진행해:

1) curriculum-architect 에이전트를 실행해서 붙여넣은 콘텐츠를 인제스천해.
   - ⚠️ 이 콘텐츠는 주차·일별로 아주 상세하고, overview.md의 Day 템플릿과 구조/분량/순서가
     다를 수 있어. 절대 반려하지 말고 지능적으로 우리 구조(month/week/day, ①이론 ②시각자료
     ③오늘의연습 ④팁)에 재매핑해서 저장해.
   - 초기 스텁(day_1~2)을 넘는 분량이면 week_N / day_K.md 디렉터리·파일을 새로 만들어.
   - 임베드된 지판/타브 데이터는 03_data_schema/fretboard_score_schema.json 필드에 맞게 정규화해.
2) 저장이 끝나면 notation-validator 에이전트를 실행해서, 방금 저장된 day_*.md 안의 모든 악보
   JSON을 스키마에 대조 검증해. 6현 초과·불가능한 프렛·필드 누락을 잡고, 안전한 오타는 고치고,
   음악적 판단이 필요한 문제는 지적만 해줘.
3) 마지막에 저장된 파일 경로 목록, 생성/갱신된 주차·일 범위, 검증 결과(PASS/경고/오류)를 요약해줘.

---
[여기에 세션 A 답변 전체를 붙여넣기]
```

---

## 🅑 세션 B 수합 — 토스체 3개국어 마이크로카피

```text
아래 --- 구분선 밑에 붙여넣은 것은 세션 B가 생성한 토스 스타일 3개국어(KR/EN/JP) 마이크로카피야.
localization-writer 에이전트를 실행해서 수합해줘:

- 형식(JSON/표 등)이 달라도 지능적으로 파싱해서 네임스페이스 키(common/landing/lesson/progress/
  nudge/storage/donation/lang/error)로 정규화해.
- web_app/src/i18n/ko.json, en.json, ja.json 세 파일로 저장하되 세 언어의 키셋을 완전히 동일하게
  맞추고, 누락 키는 채우거나 표시해줘.
- 토스 톤 가이드(translation_map.md)에 안 맞는 문구는 다듬고, 플레이스홀더({amount},{nickname},
  {week})는 3개 언어에서 일관되게 유지해.
- 04_localization/translation_map.md의 샘플 매핑 표도 최신화해.
- 끝나면 저장 경로, 총 키 개수, 세 언어 키셋 일치 여부, 톤 교정 항목을 요약해줘.

---
[여기에 세션 B 답변 전체를 붙여넣기]
```

---

## 🅒 세션 C 수합 — 세무/법률 리스크 리포트

```text
아래 --- 구분선 밑에 붙여넣은 것은 세션 C(Gemini)가 작성한 국내외 후원금 세무/법률 리스크 리포트야.
design-sync-reviewer 에이전트를 실행해서 수합해줘:

- 형식이 달라도 정규화해서 _design_docs/tax_legal_report.md로 저장해.
- 00_master_prd.md §7(수익·세무 로드맵)에서 이 리포트를 참조하도록 링크를 갱신해.
- "방향성 자료이며 실제 신고 전 세무사 확인 필요"라는 고지는 유지해.
- 끝나면 저장 경로와 PRD 반영 내용을 요약해줘.

---
[여기에 세션 C 답변 전체를 붙여넣기]
```

---

## 라우팅 요약
| 세션 | 담당 에이전트 | 저장 위치 |
|---|---|---|
| A (커리큘럼+악보) | curriculum-architect → notation-validator | `02_curriculum/solo_scale_3months/**/day_*.md` |
| B (3개국어 카피) | localization-writer | `web_app/src/i18n/{ko,en,ja}.json` + `04_localization/translation_map.md` |
| C (세무/법률) | design-sync-reviewer | `_design_docs/tax_legal_report.md` + PRD §7 |
