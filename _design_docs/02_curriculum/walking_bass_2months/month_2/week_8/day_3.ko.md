---
title: "장식 얹기 + 리허설 — 고스트와 8분 필로 워킹에 숨을, 멈추지 않고 순환"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — 장식 얹기 + 리허설 (풀 런스루)

## ① 이론/설명

어제 진행 위를 코드톤과 접근음으로 걸었어요. 오늘은 그 4마디 워킹에 7주차의 어휘 — **고스트**("칙")와 **8분 필** — 을 살짝 얹어, 곧은 걸음에 숨을 넣어요. 그리고 오늘의 진짜 목표는 **리허설**이에요 — 네 마디를 끝에서 멈추지 않고 <mark>몇 바퀴든 순환</mark>하며 도는 거예요. 장식은 라인을 노래하게 하고, 순환은 라인을 살아 있게 해요.

장식은 딱 필요한 곳에만 얹어요. 1마디 Gm7의 2박(b3, Bb) 뒤에 **고스트**를 살짝 넣어 잔발을 만들고, 3마디 Fmaj7의 2박(3도, A) 뒤에도 같은 **고스트**로 숨을 넣어요. 나머지 박은 어제의 코드톤·접근음 뼈대 그대로예요. <mark>4분음 뼈대는 흔들림 없이, 고스트만 잔발처럼</mark> 그 사이에 스며요. 두 마디에 하나씩이면 충분해요 — 장식을 매 박에 욱여넣으면 걸음이 수다스러워져요.

오늘 연습의 핵심은 **완주**예요. 4마디째 C7 턴어라운드가 끝나면 멈추지 말고, 곧장 1마디 Gm7으로 이어 <mark>한 바퀴가 다음 바퀴로 흐르게</mark> 해요. 중간에 삐끗해도 멈추지 않고 다음 마디로 넘어가는 게 리허설의 목적이에요. 내일 졸업 녹음을 앞두고, 오늘은 <mark>멈추지 않는 풀 런스루</mark>를 손에 익혀요.

먼저 오늘 고스트를 넣을 자리를, Gm7 마디를 예로 지판에서 봐요.

```json
{
  "id": "m2.w8.d3.ornament_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament spot over Gm7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4현.** 1마디 Gm7의 지도예요. 뼈대 **R(G)·b3(Bb)·5(D)**에, 2박 뒤 고스트 자리(3번현 개방, x)와 접근음 **B**를 더했어요.

```json
{
  "id": "m2.w8.d3.ornament_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament spot over Gm7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

## ② 시각 자료

이제 4마디 워킹에 고스트를 얹은 **장식 워킹**을 걸어요. 1·3마디 2박 뒤에만 고스트가 잔발로 들어가고, 나머지는 어제 그대로예요. <mark>뼈대는 또박또박, 그 사이로 잔발이 숨을 쉬어요.</mark> 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w8.d3.ornamented_walk_4",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
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
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
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

▶ **BPM 85, 4현, 스윙 4분음.** 1마디·3마디 2박 뒤에 **고스트("칙")**가 8분음으로 들어가요. 4분음 뼈대는 그대로, 고스트만 잔발처럼 숨을 넣어요.

```json
{
  "id": "m2.w8.d3.ornamented_walk_5",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
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
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
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
어제의 4마디 워킹을 BPM 72로 한 번 걸어, 코드톤 뼈대를 손에 되살려요.

**10~20분 · 두뇌 훈련**
장식 워킹을 **BPM 60**의 느린 스윙으로 짚으며, <mark>고스트가 2박의 정박을 밀어내지 않는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w8.d3.ornamented_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
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
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
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

▶ **BPM 60, 4현.** 장식 워킹을 느리게. 뼈대를 지키며 1·3마디 2박 뒤에 "칙"을 넣는 감각을 손에 새겨요.

```json
{
  "id": "m2.w8.d3.ornamented_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
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
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
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

**20~40분 · 실전(리허설)**
장식 워킹을 BPM 85에서 **멈추지 말고** 순환으로 돌려요. <mark>4마디째가 끝나면 곧장 1마디로 이어</mark> 두세 바퀴를 한 흐름으로 걸어요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 정리/녹음**
오늘은 풀 런스루를 두세 바퀴 멈추지 말고 녹음해, 순환이 매끄러운 한 판을 남겨요. 4현·5현 둘 다 남기면 오늘 완성이에요.

**오늘의 완료 기준:** 장식(고스트·8분 필)을 얹은 4마디 워킹을, 4마디째에서 멈추지 않고 1마디로 이어 4현·5현으로 순환하며 풀 런스루할 수 있다. — 오늘의 결과물: 나의 첫 장식 워킹 풀 런스루 녹음.

## ④ 팁 / 흔한 실수

오늘의 순환 리허설, 그 뼈대가 되는 세 루트를 눈에 새겨 둬요. **G·C·F** 세 자리를 한 바퀴로 도는 그림이 손에 익으면, 내일 졸업 녹음이 한결 편해요.

```json
{
  "id": "m2.w8.d3.loop_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Rehearsal loop anchors — roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 리허설 순환의 세 앵커예요. Gm7(G)·C7(C)·Fmaj7(F)을 지나 4마디째 C7이 다시 첫 마디로 돌려요.

```json
{
  "id": "m2.w8.d3.loop_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Rehearsal loop anchors — roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

- **장식을 너무 많이 넣어요.** 리허설은 라인을 화려하게 만드는 시간이 아니라 순환을 매끄럽게 만드는 시간이에요. 고스트는 두 마디에 하나씩, 뼈대가 먼저예요.
- **삐끗하면 멈춰서 다시 시작해요.** 리허설의 목적은 완벽이 아니라 완주예요. 한 음 놓쳐도 멈추지 말고 다음 마디로 넘어가, 순환을 끊지 않는 습관을 들여요.

두 달 전엔 한 마디를 겨우 짚었는데, 이제 네 마디를 멈추지 않고 돌려요. 내일은 이 순환을 졸업 작품으로 녹음해요. 딱 하루 남았어요.
