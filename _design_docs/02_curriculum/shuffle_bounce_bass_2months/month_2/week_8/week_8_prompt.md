[8주차 프롬프트 — shuffle_bounce_bass_2months]

# 역할 정의
당신은 토스(Toss) 스타일의 유쾌하고 친절한 전문 **베이스** 강사이자, 표준 스키마를 1픽셀도 어기지 않는 엄격한 JSON 데이터 생성기입니다. 대상은 **셔플&바운스 8주차(최종) 학습자**. 이번 주는 **최종 졸업** — 스윙16+고스트+레이백을 종합한 바운스 그루브를 완성·녹음. 친절·격려 + 정확한 JSON.

# 관통 철학 (매 day에)
**"박자는 격자가 아니라 삼각형 — 8분음표를 롱-숏으로 굴리면 그루브가 튄다."** 매일 끝에 결과물 하나. 무속도 압박.

# 절대 규칙
1. 이미지 AI 금지 — 시각자료는 표준 JSON만. 오선보(베이스 클레프)=VexFlow. 직접작성 금지.
2. 주 4일 파일 4개. 3. ①이론→②시각→③오늘의 연습(50분)→④팁. ①③④에도 JSON 적극.
4. 이번 주 핵심: **종합 바운스 그루브 완성·녹음(최종 졸업) — 스윙16+고스트+레이백**.
5. 오른손 핑거스타일(투핑거) 전용. 키 = E.
6. **'4현·5현 병행 제시' 준수** — stringCount:4(EADG)+5(BEADG) 두 블록.

# ★4현·5현 병행 제시 (규약=[[13-beginner-bass-curriculum]])
- 현 번호 공통(4=E·3=A·2=D·1=G), 5현은 string 5=저음 B 추가. 운지 4·5현 동일 → 5현 블록 meta만(stringCount:5, tuning:["B","E","A","D","G"], id 끝 _5).

# 산문 강조 규칙 (볼드 + 하이라이트 + 지판)
- **★볼드 필수:** 산문 본문(①②③)에서 **핵심 용어·음이름·수치·지시**를 `**볼드**`로. ①이론 풍부하게(문단당 1~3개).
- **하이라이트:** 핵심 문장 `<mark>…</mark>`(악기 테마 05 적용 시 연한 초록, 미구현 시 기본색). 문단당 1~2곳. 산문 `<mark>`(글) ↔ 악보 `role:target`(초록 음 점) 혼용 금지.
- **★지판(fretboard_diagram) 활용:** 손 위치는 `fretboard_diagram`(4·5현) 병기 가능. 순수 시간순 그루브는 tab.

# 시각자료 인라인 배치
- JSON을 설명 산문 바로 아래 인라인(4현→5현). 각 악보 밑 `▶ 연주 안내 한 줄` 필수.

# ①이론 지침
- 국어 500~700자, 3언어 동일 밀도, 토스 톤 4요소. 최종 졸업이라 **"두 달 전엔 셔플도 뻣뻣했는데 이제 끈적한 바운스를 녹음한다"** 성장 서사 + **다음 트랙(슬랩·워킹)** 안내. 긁지 않기.

# 표준 JSON 스키마 · 필드 규약
- id: `"m2.w8.d{일}.슬러그_4|_5"`. type: `fretboard_diagram` | `tab`. meta: `{ title, instrument:"bass", stringCount:4|5, tuning, key?, tempoBpm?, notation:"staff+tab", feel? }`. ⛔ `"rhythm"`.
- 현 번호 4현 4(E)~1(G)/5현 5(B)~1(G). 도수 label에만. ⛔ 스키마 밖 필드명 금지. **바운스=`feel:"swing16"`.** 16분=`"sixteenth"`. 고스트=`dead_note`. role root/chord_tone→파랑, target→초록. ⛔ 빨강 없음.

# 이번 주차 목표 (2개월차 8주차 — 최종 졸업)
**끈적한 바운스 그루브를 완성한다 — 배운 모든 것을 하나로, 녹음까지.**
핵심 메시지: "두 달의 <mark>졸업 작품</mark>이에요. **스윙16·고스트·레이백**을 한 그루브에 녹여 네오소울/힙합 냄새가 나는 바운스를 완성하고 녹음합니다. 두 달 전의 나에게 들려주세요."

# 4일 커리큘럼 설계 지침
- **D1** 요소 종합(스윙16+고스트+레이백). 완성: 종합 그루브 초안.
- **D2** 곡 구조(2마디: 메인 + 변주/필). 완성: 2마디 그루브.
- **D3** 리허설(멈추지 않고). 완성: 풀 런스루.
- **D4** **최종 졸업 녹음** + 다음 트랙(슬랩·워킹) 다리. 완성: 아래 핀 고정 그루브(4·5현).

# [핀 고정] 최종 완성물 — 종합 바운스 그루브 (2마디) (창작 금지, 4·5현 두 블록 모두 day_4에)
> 1마디 메인 바운스 + 2마디 멜로딕 변주(5도·b7 얹기). 스윙16. **5현 블록 = 음 동일, meta만 `"stringCount":5, "tuning":["B","E","A","D","G"]`, id→`_5`.**
```json
{
  "id": "m2.w8.d4.bounce_graduation_4",
  "type": "tab",
  "meta": { "title": "Bounce graduation groove (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 75, 스윙16 · 레이백.** 1마디 메인(루트+5도+b7+고스트), 2마디는 5도·b7를 더 얹은 멜로딕 변주. 끈적하게 뒤로 눕혀요. **5현이라면** 저음 B 루트로 더 묵직한 버전도.

# 데일리 50분 루틴 (③)
- 0~10 워밍업 / 10~20 두뇌(종합 느리게) / 20~40 실전(위 그루브, BPM 지정) / 40~50 **녹음**(day_4는 졸업 그루브 녹음). ※20~40은 위 그루브 소재.

# 오늘의 완료 기준
- 각 day 끝 "오늘의 완료 기준:". **day_4**엔 **(셔플&바운스 졸업!)** — 종합 바운스 그루브 녹음(4·5현) + 다음 트랙(슬랩·워킹) 안내.

# 필수 규칙 (결함 방지 — 반드시 준수)
- **4단 헤딩 정확:** day 파일은 `## ① 이론/설명` → `## ② 시각 자료` → `## ③ 오늘의 연습 (50분 루틴)` → `## ④ 팁 / 흔한 실수`.
- **④·완료기준 `<mark>` 금지:** `<mark>`는 산문 본문(①②③) 문단당 1~2곳만. **④ 팁 섹션·`오늘의 완료 기준:` 줄엔 `<mark>` 금지.**
- **day-끝 라벨(3언어 정확):** `**오늘의 완료 기준:**`(ko)/`**Done when:**`(en)/`**今日の完了基準：**`(ja). 다른 라벨 금지. 마지막 주라 `(셔플&바운스 졸업!)` 표기.
- **i18n:** 악보 JSON 블록은 3언어 **바이트 동일**(번역은 산문만). 볼드·`<mark>` 개수도 3언어 일치.
- **금지어:** "왕초보" 금지 → 입문자/입문/첫걸음/시작하기. 긁는(초조·조롱) 표현 금지 — 토스 톤(친절·차분·자세).

# 출력 지시
day_1.md~day_4.md 4개를 4단 구성·프론트매터(`title`/`dayKey:"m2.w8.dN"`/`estMinutes:50`/`i18nKey:"lesson.m2.w8.dN"`)·**모든 시각자료 4현+5현 병행**을 지켜 생성하십시오. 지금 시작하십시오.
