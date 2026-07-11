---
title: "진행 위 워킹 라인 — 코드톤에 착지하고 접근음으로 다리를 놓기"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 진행 위 워킹 라인 (코드톤 + 접근)

## ① 이론/설명

어제 진행의 루트를 손에 넣었으니, 오늘은 그 위를 진짜로 걸어요. 워킹의 철학은 늘 한 문장이에요 — <mark>매 1박에 코드에 착지하고, 마지막 박에 다음 코드로 다리를 놓는다</mark>. 1박엔 **루트**로 코드를 또렷이 세우고, 2·3박엔 **코드톤**(3도·5도·7도)으로 코드의 색을 채우고, 4박엔 **접근음**으로 다음 마디의 루트로 반음 다가가요. 이 네 박의 역할이 워킹 한 마디의 문법이에요.

진행에 맞춰 볼게요. 1마디 **Gm7**은 루트 G에서 b3(Bb)·5도(D)를 딛고, 4박에 B로 C7의 루트 C에 다가가요. 2마디 **C7**은 루트 C에서 3도(E)·5도(G)를 지나, 4박 F#으로 Fmaj7의 루트 F에 반음 접근해요. 3마디 **Fmaj7**은 루트 F에서 3도(A)·5도(C)를 딛고 다시 B로 4마디 C7에 다가가요. 그리고 4마디 C7 턴어라운드는 b7(Bb)·A를 지나 F#으로 첫 마디 Gm7의 루트 G에 되돌아와요. <mark>코드톤은 착지, 접근음은 다리</mark> — 이 둘이 번갈아 걸음을 만들어요.

오늘 가장 중요한 건 **순서**예요. 먼저 각 마디 1박의 **코드톤 착지**를 흔들림 없이 세우고, 그다음에 4박 접근음으로 다음 마디를 향해 다리를 놓아요. 접근음이 화려해 보여도, 코드톤 뼈대가 또렷하지 않으면 걸음이 길을 잃어요. 오늘은 4마디 워킹 라인을 손에 완전히 넣어, <mark>진행 위를 매끄럽게 걷는 감각</mark>을 만들어요.

먼저 각 코드의 착지 음 — 루트와 3도 — 이 지판 어디에 있는지 봐요.

```json
{
  "id": "m2.w8.d2.landing_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I landing tones — root & 3rd (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** ii-V-I의 착지 음이에요. Gm7은 **G·b3**, C7은 **C·3**, Fmaj7은 **F·3** — 1박 루트와 그 색을 정하는 3도예요.

```json
{
  "id": "m2.w8.d2.landing_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I landing tones — root & 3rd (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B현으로 착지를 더 묵직하게 받쳐요.

## ② 시각 자료

이제 그 착지 음에 접근음을 이어, **4마디 워킹 라인**을 걸어요. 1박 코드톤 → 4박 접근음의 흐름이 네 마디를 관통해요. <mark>코드가 바뀌어도 걸음은 끊기지 않고 이어져요.</mark> 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w8.d2.changes_walk_4",
  "type": "tab",
  "meta": { "title": "Walking the changes (Gm7-C7-Fmaj7-C7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 4현, 스윙 4분음.** 1마디 Gm7(**R-b3-5-B**) → 2마디 C7(**R-3-5-F#**) → 3마디 Fmaj7(**R-3-5-B**) → 4마디 C7(**R-b7-A-F#**)이에요. 매 1박 코드톤에 착지하고 4박 접근음으로 다리를 놓아요.

```json
{
  "id": "m2.w8.d2.changes_walk_5",
  "type": "tab",
  "meta": { "title": "Walking the changes (Gm7-C7-Fmaj7-C7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 온음표 진행을 BPM 72로 한 번 걸어, 진행의 순환을 손에 되살려요.

**10~20분 · 두뇌 훈련**
아래 예제로 4마디 워킹을 **BPM 60**의 느린 스윙으로 짚어요. <mark>1박 코드톤이 또렷하고, 4박 접근음이 다음 루트에 정확히 닿는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w8.d2.changes_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Walking the changes, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 4마디 워킹을 느리게. 코드톤 착지와 접근음의 자리를 하나씩 손에 새겨요.

```json
{
  "id": "m2.w8.d2.changes_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Walking the changes, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 자리는 4현과 똑같아요.

**20~40분 · 실전**
위 **4마디 워킹**을 BPM 85에서 순환으로 반복해요. <mark>코드톤 뼈대가 흔들리지 않는지</mark> 살피며, 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 정리/녹음**
오늘의 4마디 워킹을 두세 바퀴 멈추지 말고 녹음해, 제일 매끄러운 한 판을 남겨요. 4현·5현 둘 다 남기면 오늘 완성이에요.

**오늘의 완료 기준:** Gm7-C7-Fmaj7-C7 진행 위를 코드톤 착지와 접근음으로 4마디 워킹하며, 4현·5현으로 순환할 수 있다. — 오늘의 결과물: 나의 첫 진행 워킹 라인 녹음.

## ④ 팁 / 흔한 실수

오늘 걸은 라인에서 다음 코드로 넘어가는 **접근음** 자리를 따로 눈에 담아 둬요. B·F#·B·F# — 이 네 접근음이 마디와 마디 사이에 다리를 놓아요.

```json
{
  "id": "m2.w8.d2.approach_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approach notes into each chord (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 4, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "A", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" }
  ]}
}
```

▶ **4현.** 마디를 잇는 접근음들이에요. B(→C), F#(→F), A·F#(→G)이 각 마디 끝에서 다음 루트로 다리를 놓아요.

```json
{
  "id": "m2.w8.d2.approach_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approach notes into each chord (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 4, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "A", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

- **접근음을 코드톤처럼 오래 눌러요.** 접근음은 스쳐 지나 다음 루트로 넘기는 음이라, 4박에 잠깐 딛고 곧장 다음 마디 1박으로 넘어가야 해요. 너무 붙들면 코드의 색이 흐려져요.
- **코드톤 없이 접근음부터 넣어요.** 순서를 지켜요 — 1박 코드톤이 먼저 서야 4박 접근음이 다리 노릇을 해요. 착지가 흔들리면 접근음도 갈 곳을 잃어요.

두 달 전엔 코드가 바뀌면 루트 하나로 버텼는데, 이제 그 사이를 코드톤과 접근음으로 걸어요. 내일은 이 워킹 위에 고스트와 8분 필로 숨을 넣어, 라인을 노래하게 만들어요.
