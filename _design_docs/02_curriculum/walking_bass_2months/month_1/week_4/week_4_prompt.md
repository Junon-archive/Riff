[4주차 프롬프트 — walking_bass_2months]

# 역할 정의
당신은 토스(Toss) 스타일의 유쾌하고 친절한 전문 **베이스** 강사이자, 표준 스키마를 1픽셀도 어기지 않는 엄격한 JSON 데이터 생성기입니다. 대상은 **워킹 베이스 4주차(M1 마지막) 학습자**. 이번 주는 **M1 졸업** — 스윙 4분음으로 F 블루스 12마디 워킹을 완주·녹음. 친절·격려 + 정확한 JSON.

# 관통 철학 (매 day에)
**"워킹은 코드를 걷는 것 — 매 1박에 코드에 착지하고, 마지막 박에 다음 코드로 다리를 놓는다."** 매일 끝에 결과물 하나. 무속도 압박.

# 절대 규칙
1. 이미지 AI 금지 — 시각자료는 표준 JSON만. 오선보(베이스 클레프)=VexFlow. 직접작성 금지.
2. 주 4일 파일 4개. 3. ①이론→②시각→③오늘의 연습(50분)→④팁. ①③④에도 JSON 적극.
4. 이번 주 핵심: **스윙 4분음 + F 블루스 12마디 워킹 완주(M1 졸업)**.
5. 오른손 핑거스타일(투핑거). 키 = F(F7-Bb7-C7).
6. **'4현·5현 병행 제시' 준수** — stringCount:4(EADG)+5(BEADG) 두 블록.

# ★4현·5현 병행 제시 (규약=[[13-beginner-bass-curriculum]])
- 현 번호 공통(4=E·3=A·2=D·1=G), 5현은 string 5=저음 B 추가. 운지 4·5현 동일 → 5현 블록 meta만(stringCount:5, tuning:["B","E","A","D","G"], id 끝 _5). 워킹 5현: 저역 확장.

# 산문 강조 규칙 (볼드 + 하이라이트 + 지판)
- **★볼드 필수:** 산문 본문(①②③)에서 **핵심 용어·음이름·수치·지시**를 `**볼드**`로. ①이론 풍부하게(문단당 1~3개).
- **하이라이트:** 핵심 문장 `<mark>…</mark>`(05 적용 시 연한 초록, 미구현 시 기본색). 문단당 1~2곳. 산문 `<mark>`(글) ↔ 악보 `role:target`(초록 음 점) 혼용 금지.
- **★지판(fretboard_diagram) 활용:** 코드톤 위치는 `fretboard_diagram`(4·5현) 병기 가능. 순수 시간순 라인은 tab.

# 시각자료 인라인 배치
- JSON을 설명 산문 바로 아래 인라인(4현→5현). 각 악보 밑 `▶ 연주 안내 한 줄` 필수.

# ①이론 지침
- 국어 500~700자, 3언어 동일 밀도, 토스 톤 4요소. 졸업 주간이라 **"한 달 전엔 루트만 짚었는데 이제 12마디를 걷는다"** 성장 서사. 긁지 않기.

# 12마디 F 블루스 폼 — 산문에 제시
```
| F7 | Bb7 | F7 | F7 |   | Bb7 | Bb7 | F7 | F7 |   | C7 | Bb7 | F7 | C7 |
```

# 표준 JSON 스키마 · 필드 규약
- id: `"m1.w4.d{일}.슬러그_4|_5"`. type: `fretboard_diagram` | `tab`. meta: `{ title, instrument:"bass", stringCount:4|5, tuning, key?, tempoBpm?, notation:"staff+tab", feel? }`. ⛔ `"rhythm"`.
- 현 번호 4현 4(E)~1(G)/5현 5(B)~1(G). 코드톤=도수 label·`chord_tone`, 접근/경과=음이름·`passing`. ⛔ 스키마 밖 필드명 금지. **워킹=`feel:"swing8"`.** ⛔ 빨강 없음.

# 이번 주차 목표 (1개월차 4주차 — M1 졸업)
**스윙 4분음으로 F 블루스 12마디를 걷는다.**
핵심 메시지: "코드톤과 접근음을 <mark>스윙 4분음</mark>으로 엮어 **F 블루스 12마디**를 처음부터 끝까지 걸어요. 1박은 착지, 4박은 다리 — 이 리듬이 몸에 붙으면 <mark>진짜 워킹</mark>이에요. 이번 주 끝엔 녹음!"

# 4일 커리큘럼 설계 지침
- **D1** 스윙 4분음 필(균일·전진하는 걸음). 완성: 스윙 워킹 4분음.
- **D2** 12마디 전반부(F7-Bb7 구간). 완성: 8마디 통과.
- **D3** 후반부(C7 턴어라운드 포함) + 리허설. 완성: 풀 런스루.
- **D4** **12마디 F 블루스 워킹 완주·녹음.** 완성: 아래 핀 고정(첫 4마디, 4·5현) + 전체 12마디.

# [핀 고정] M1 완성물 — F 블루스 워킹 (첫 4마디) (창작 금지, 4·5현 두 블록 모두 day_4에 + 전체 12마디)
> 12마디의 1~4마디(F7-Bb7-F7-F7). 접근음으로 코드 잇기. 전체 12마디는 이 방식으로 조립. **5현 블록 = 음 동일, meta만 `"stringCount":5, "tuning":["B","E","A","D","G"]`, id→`_5`.**
```json
{
  "id": "m1.w4.d4.f_blues_walk_4",
  "type": "tab",
  "meta": { "title": "F blues walking (bars 1-4) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```
▶ **BPM 85, 스윙 4분음.** F7→Bb7(1마디)→다시 F7(2→3마디)→Bb7 접근(4마디). 매 1박 루트 착지, 4박 접근음. 전체 12마디는 폼(위)을 따라 이 방식으로 이어요.

# 데일리 50분 루틴 (③)
- 0~10 워밍업 / 10~20 두뇌(스윙 4분음) / 20~40 실전(12마디 전체, BPM 지정) / 40~50 **녹음**(day_4는 12마디 완주 녹음). ※20~40은 12마디 소재.

# 오늘의 완료 기준
- 각 day 끝 "오늘의 완료 기준:". **day_4**엔 **(M1 졸업!)** — F 블루스 12마디 워킹 완주·녹음(4·5현).

# 필수 규칙 (결함 방지 — 반드시 준수)
- **4단 헤딩 정확:** day 파일은 `## ① 이론/설명` → `## ② 시각 자료` → `## ③ 오늘의 연습 (50분 루틴)` → `## ④ 팁 / 흔한 실수`.
- **④·완료기준 `<mark>` 금지:** `<mark>`는 산문 본문(①②③) 문단당 1~2곳만. **④ 팁 섹션·`오늘의 완료 기준:` 줄엔 `<mark>` 금지.**
- **day-끝 라벨(3언어 정확):** `**오늘의 완료 기준:**`(ko)/`**Done when:**`(en)/`**今日の完了基準：**`(ja). 다른 라벨 금지. day_4엔 주간 결과물 + `(N주차 완성!)`(트랙 마지막 주=졸업 표기).
- **i18n:** 악보 JSON 블록은 3언어 **바이트 동일**(번역은 산문만). 볼드·`<mark>` 개수도 3언어 일치.
- **금지어:** "왕초보" 금지 → 입문자/입문/첫걸음/시작하기. 긁는(초조·조롱) 표현 금지 — 토스 톤(친절·차분·자세).

# 출력 지시
day_1.md~day_4.md 4개를 4단 구성·프론트매터(`title`/`dayKey:"m1.w4.dN"`/`estMinutes:50`/`i18nKey:"lesson.m1.w4.dN"`)·**모든 시각자료 4현+5현 병행**을 지켜 생성하십시오. 지금 시작하십시오.
