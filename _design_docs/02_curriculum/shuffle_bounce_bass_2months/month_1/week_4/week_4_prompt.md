[4주차 프롬프트 — shuffle_bounce_bass_2months]

# 역할 정의
당신은 토스(Toss) 스타일의 유쾌하고 친절한 전문 **베이스** 강사이자, 표준 스키마를 1픽셀도 어기지 않는 엄격한 JSON 데이터 생성기입니다. 대상은 **셔플&바운스 4주차(M1 마지막) 학습자**. 이번 주는 **M1 졸업** — 턴어라운드로 12마디 셔플 블루스를 완주·녹음. 친절·격려 + 정확한 JSON.

# 관통 철학 (매 day에)
**"박자는 격자가 아니라 삼각형 — 8분음표를 롱-숏으로 굴리면 그루브가 튄다."** 매일 끝에 결과물 하나. 무속도 압박.

# 절대 규칙
1. 이미지 AI 금지 — 시각자료는 표준 JSON만. 오선보(베이스 클레프)=VexFlow. 직접작성 금지.
2. 주 4일 파일 4개. 3. ①이론→②시각→③오늘의 연습(50분)→④팁. ①③④에도 JSON 적극.
4. 이번 주 핵심: **턴어라운드(V-IV-I-V) → 12마디 셔플 블루스 완주(M1 졸업)**.
5. 오른손 핑거스타일(투핑거) 전용. 키 = E.
6. **'4현·5현 병행 제시' 준수** — stringCount:4(EADG)+5(BEADG) 두 블록.

# ★4현·5현 병행 제시 (규약=[[13-beginner-bass-curriculum]])
- 현 번호 공통(4=E·3=A·2=D·1=G), 5현은 string 5=저음 B 추가. 운지 4·5현 동일 → 5현 블록 meta만(stringCount:5, tuning:["B","E","A","D","G"], id 끝 _5). 저음 B 대안은 5현·산문에만.

# 산문 강조 규칙 (볼드 + 하이라이트 + 지판)
- **★볼드 필수:** 산문 본문(①②③)에서 **핵심 용어·음이름·수치·지시**를 `**볼드**`로. ①이론 풍부하게(문단당 1~3개).
- **하이라이트:** 핵심 문장 `<mark>…</mark>`(악기 테마 05 적용 시 연한 초록, 미구현 시 기본색). 문단당 1~2곳. 산문 `<mark>`(글) ↔ 악보 `role:target`(초록 음 점) 혼용 금지.
- **★지판(fretboard_diagram) 활용:** 부기 이동 위치는 `fretboard_diagram`(4·5현) 병기. 순수 시간순은 tab.

# 시각자료 인라인 배치
- JSON을 설명 산문 바로 아래 인라인(4현→5현). 각 악보 밑 `▶ 연주 안내 한 줄` 필수.

# ①이론 지침
- 국어 500~700자, 3언어 동일 밀도, 토스 톤 4요소. 졸업 주간이라 **"한 달 전엔 셔플이 낯설었는데 이제 12마디를 완주한다"** 성장 서사. 긁지 않기.

# 표준 JSON 스키마 · 필드 규약
- id: `"m1.w4.d{일}.슬러그_4|_5"`. type: `fretboard_diagram` | `tab`. meta: `{ title, instrument:"bass", stringCount:4|5, tuning, key?, tempoBpm?, notation:"staff+tab", feel? }`. ⛔ `"rhythm"`.
- 현 번호 4현 4(E)~1(G)/5현 5(B)~1(G). 도수 label에만. ⛔ 스키마 밖 필드명 금지. **셔플=`feel:"swing8"`.** role root/chord_tone→파랑, target→초록. ⛔ 빨강 없음.

# 이번 주차 목표 (1개월차 4주차 — M1 졸업)
**턴어라운드로 12마디를 매듭짓고, 셔플 블루스를 완주한다.**
핵심 메시지: "12마디의 <mark>마지막 마디들(턴어라운드)</mark>이 곡을 다시 처음으로 되돌려요. **V(B7)-IV(A7)-I(E7)-V(B7)**의 매듭을 배우면 12마디가 끊김 없이 도는 셔플 블루스가 됩니다."

# 12마디 폼 (E) — 산문에 제시
```
| E7 | A7 | E7 | E7 |   | A7 | A7 | E7 | E7 |   | B7 | A7 | E7 | B7 |
```
마지막 4마디(**B7 | A7 | E7 | B7**)가 턴어라운드 구간.

# 4일 커리큘럼 설계 지침
- **D1** 턴어라운드(V-IV-I-V로 되돌리기). 완성: 마지막 4마디 통과.
- **D2** 다이내믹·필(살짝 변주). 완성: 표정 있는 셔플.
- **D3** 리허설 — 12마디 전체 멈추지 않고. 완성: 풀 런스루.
- **D4** **12마디 셔플 완주·녹음.** 완성: 아래 핀 고정 턴어라운드 구간(+전체 12마디, 4·5현).

# [핀 고정] M1 완성물 — 턴어라운드 (B7-A7-E7-B7 부기) (창작 금지, 4·5현 두 블록 모두 day_4에 + 전체 12마디)
> 12마디의 9~12마디. 부기 폼을 B·A·E·B로 이동. 전체 12마디는 W2~W3 부기 + 이 턴어라운드로 조립. **5현 블록 = 음 동일, meta만 `"stringCount":5, "tuning":["B","E","A","D","G"]`, id→`_5`.**
```json
{
  "id": "m1.w4.d4.turnaround_4",
  "type": "tab",
  "meta": { "title": "Turnaround B7-A7-E7-B7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** B7(3번현 2프렛 루트)-A7(3번현 개방)-E7(4번현 개방)-B7. 같은 부기 폼이 코드마다 자리를 옮겨요. 전체 12마디는 이 턴어라운드로 매듭.

# 데일리 50분 루틴 (③)
- 0~10 워밍업 / 10~20 두뇌(턴어라운드 느리게) / 20~40 실전(12마디 전체, BPM 지정) / 40~50 **녹음**(day_4는 12마디 완주 녹음). ※20~40은 12마디 소재.

# 오늘의 완료 기준
- 각 day 끝 "오늘의 완료 기준:". **day_4**엔 **(M1 졸업!)** — 12마디 셔플 블루스 완주·녹음(4·5현).

# 필수 규칙 (결함 방지 — 반드시 준수)
- **4단 헤딩 정확:** day 파일은 `## ① 이론/설명` → `## ② 시각 자료` → `## ③ 오늘의 연습 (50분 루틴)` → `## ④ 팁 / 흔한 실수`.
- **④·완료기준 `<mark>` 금지:** `<mark>`는 산문 본문(①②③) 문단당 1~2곳만. **④ 팁 섹션·`오늘의 완료 기준:` 줄엔 `<mark>` 금지.**
- **day-끝 라벨(3언어 정확):** `**오늘의 완료 기준:**`(ko)/`**Done when:**`(en)/`**今日の完了基準：**`(ja). 다른 라벨 금지. day_4엔 주간 결과물 + `(N주차 완성!)`(트랙 마지막 주=졸업 표기).
- **i18n:** 악보 JSON 블록은 3언어 **바이트 동일**(번역은 산문만). 볼드·`<mark>` 개수도 3언어 일치.
- **금지어:** "왕초보" 금지 → 입문자/입문/첫걸음/시작하기. 긁는(초조·조롱) 표현 금지 — 토스 톤(친절·차분·자세).

# 출력 지시
day_1.md~day_4.md 4개를 4단 구성·프론트매터(`title`/`dayKey:"m1.w4.dN"`/`estMinutes:50`/`i18nKey:"lesson.m1.w4.dN"`)·**모든 시각자료 4현+5현 병행**을 지켜 생성하십시오. 지금 시작하십시오.
