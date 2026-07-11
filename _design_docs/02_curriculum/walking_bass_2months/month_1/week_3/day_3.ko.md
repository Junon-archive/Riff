---
title: "4박에 접근음 넣기 — 접근음이 살아 있는 워킹 라인"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 4박에 접근음을 넣어, 워킹 라인을 완성하기

## ① 이론/설명

이틀 동안 접근음의 세 종류를 배웠어요 — 크로매틱, 스케일, 도미넌트. 오늘은 드디어 그 접근음을 <mark>진짜 워킹 라인 속에 넣어</mark> 봐요. 지금까지는 접근음 하나만 떼어 연습했지만, 오늘부터는 코드톤으로 걷다가 **4박에서 접근음으로 다리를 놓아요**.

규칙은 간단해요. 한 마디를 이렇게 채워요 — **1박 루트, 2·3박 코드톤, 4박 접근음**. 앞의 세 박은 지금 코드에 단단히 서 있고, 마지막 한 박이 다음 코드로 손을 뻗어요. 그러면 다음 마디 1박이 <mark>기다렸다는 듯 착지</mark>해요. 이게 워킹 한 마디의 완성형이에요.

오늘 라인은 F7→Bb7 두 마디예요. 1마디는 F7의 R-3-5를 밟고 4박에 **A**(Bb의 반음 아래)로 다리를 놓아요. 2마디는 Bb7의 R-3-5를 밟고 4박에 **E**(F의 반음 아래)로 다리를 놓아 처음 F로 돌아가요. 접근음이 두 코드를 <mark>끊김 없이 이어 주는</mark> 고리가 돼요.

접근음을 고를 땐 딱 하나만 생각해요 — **다음 코드 루트**. 그 루트의 반음 위·아래, 온음 위, 혹은 5도 위 중 하나를 4박에 놓으면 돼요. 오늘은 손에 익은 **크로매틱**으로 시작해요. 익숙해지면 스케일·도미넌트로 바꿔 껴도 라인은 살아 있어요.

먼저 오늘 라인의 지도를 봐요 — 두 착지점 **F·Bb**와, 그 앞의 두 접근음 B·E예요.

```json
{
  "id": "m1.w3.d3.approach_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Walk targets & bridges (F, Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4현.** 두 착지점 F(4번현 1프렛)·Bb(3번현 1프렛)와, 접근음 B(3번현 2프렛)·E(2번현 2프렛)예요.

```json
{
  "id": "m1.w3.d3.approach_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Walk targets & bridges (F, Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 오늘의 워킹 라인이에요. 매 마디 **1박 루트 → 2·3박 코드톤 → 4박 접근음** 순서로 걸어요. <mark>4박 접근음이 다음 마디 1박을 부르는지</mark> 느끼며 밟아요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w3.d3.approach_line_4",
  "type": "tab",
  "meta": { "title": "Walking line with approaches (F7-Bb7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 76, 4현.** 1마디 4박 A가 Bb를, 2마디 4박 E가 F를 반음 아래에서 겨냥해요. 매 1박은 루트에 착지.

```json
{
  "id": "m1.w3.d3.approach_line_5",
  "type": "tab",
  "meta": { "title": "Walking line with approaches (F7-Bb7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 76, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 스케일·도미넌트 접근을 BPM 72로 한 번씩 걸어요. 세 접근음의 감각을 손끝에 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 **루트 → 접근음**만 반복해요. 각 마디에서 4박 접근음이 다음 루트를 부르는 그 한 걸음을 <mark>아주 느리게</mark> 익혀요.

```json
{
  "id": "m1.w3.d3.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Root to approach drill, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 66, 4현.** 각 마디 루트에서 접근음(A·E)으로 한 걸음. 접근음이 다음 마디 루트를 부르는 당김을 느껴요.

```json
{
  "id": "m1.w3.d3.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Root to approach drill, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 66, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 워킹 라인을 **BPM 76**에서 두 마디 순환으로 걸어요. <mark>4박마다 다음 코드로 다리가 놓이나</mark> 확인해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 1박 착지와 4박 접근음이 또렷하게 구분되는지 들어봐요. 접근음을 A 대신 B(반음 위)로 바꿔 껴 보고 느낌 차이도 메모해 둬요.

**오늘의 완료 기준:** 매 마디 1박 루트·2·3박 코드톤·4박 접근음 순서로 F7→Bb7 두 마디를 순환하며, 접근음이 다음 코드를 부르는 감각을 4현·5현 둘 다에서 낼 수 있다.

## ④ 팁 / 흔한 실수

- **4박에서 손이 멈춰요.** 접근음을 놓은 뒤 다음 루트로 넘어갈 때 끊기기 쉬워요. 4박을 울리는 동안 왼손을 미리 다음 루트로 옮겨 둬요.
- **접근음을 길게 끌어요.** 4박 접근음도 다른 박과 같은 4분음이에요. 혼자 길어지면 박자가 흔들려요.

라인의 뼈대는 두 착지점이에요. 아래 지판의 **F**와 **Bb**만 확실하면 나머지는 따라와요.

```json
{
  "id": "m1.w3.d3.roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 두 마디의 착지점 — F(4번현 1프렛)와 Bb(3번현 1프렛)이에요.

```json
{
  "id": "m1.w3.d3.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 루트도 잡아볼 수 있어요.

- **접근음을 바꿔 껴 봐요.** 오늘 라인은 크로매틱(반음 아래)이지만, 같은 4박에 스케일이나 도미넌트를 넣어도 돼요. 접근음은 갈아 끼우는 부품이에요. 내일은 이 라인을 이번 주 완성물로 다듬어요.
