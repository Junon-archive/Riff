---
title: "장식 워킹 — 고스트와 8분 필로 F7에 숨을 넣어 (7주차 완성)"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — 장식 워킹(F7, 고스트+8분 필)

## ① 이론/설명

7주차의 마지막 날이에요. 이번 주에 익힌 세 장식 — **고스트**, **8분음 필**, 해머온 — 의 감각을 모아, 오늘은 **장식 워킹** 한 마디로 엮어요. F7 4분음 뼈대 위에 고스트("칙")와 8분 필을 얹은, 이번 주의 완성물이에요. 한 마디 안에 뼈대와 장식이 어떻게 어우러지는지, 고스트와 필, 접근음까지 이번 주에 배운 것들이 이 한 마디에 고스란히 모여요. <mark>곧은 걸음이 장식 하나하나로 숨을 쉬어요.</mark>

마디의 흐름은 이래요. 1박 **F**(루트) → 2박 앞 A(3도)에 이어 뒤 '앤'에 **고스트("칙")** → 3박 C(5도) → 4박 **B**(다음 코드로 넘어가는 접근음)이에요. 2박의 8분음 두 음(A+고스트)이 필처럼 걸음에 숨을 넣고, 4박의 B가 다음 마디로 다리를 놓아요. <mark>4분음 뼈대는 그대로, 장식만 그 사이에 스며요.</mark>

이 마디는 F7 한 코드 위에서 도는 연습이라, 반복하면 저절로 루프가 돼요. 중요한 건 여전히 순서예요. **뼈대가 먼저**, 고스트와 필은 그 위에 살짝. 오늘은 이 한 마디를 손에 완전히 익혀, 녹음으로 7주차를 마무리해요. <mark>두 달 여정의 워킹이 이제 숨을 쉬기 시작해요.</mark>

먼저 오늘 걸을 뼈대 음과 고스트 자리를 **지판**에서 봐요.

```json
{
  "id": "m2.w7.d4.ornament_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornamented walk map (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4현.** 뼈대 — 루트 **F**·3도 **A**·5도 **C** — 에, 고스트 자리(3번현 개방, x)와 접근음 **B**(3번현 2프렛)를 더한 오늘의 지도예요.

```json
{
  "id": "m2.w7.d4.ornament_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornamented walk map (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

## ② 시각 자료

이제 이번 주의 완성물, **장식 워킹** 한 마디예요. F7 4분음 위에 2박의 고스트와 8분 필, 4박의 접근음을 얹었어요. <mark>세 걸음이 또박또박, 그 사이로 잔발이 숨을 쉬어요.</mark> 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w7.d4.ornament_walk_4",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현, 스윙 4분음.** 1박 **F**(루트) → 2박 **A**(3도)+**고스트("칙")** → 3박 **C**(5도) → 4박 **B**(접근음)이에요. 2박 뒤에 고스트를 살짝 넣어 잔발을 만들고, 4분음 뼈대는 그대로 유지해요.

```json
{
  "id": "m2.w7.d4.ornament_walk_5",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 해머온 워킹을 BPM 72로 한 번 걸어, 4분음 뼈대 위에 장식을 얹는 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 장식 워킹을 **BPM 60**의 느린 스윙으로 짚어요. <mark>2박의 고스트가 정박을 밀어내지 않고, 4박 B가 또렷이 접근하는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w7.d4.ornament_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 장식 워킹을 느리게. 4분음 뼈대를 지키며 2박 뒤에 "칙"을 넣고 4박 B로 다리를 놓아요.

```json
{
  "id": "m2.w7.d4.ornament_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **장식 워킹**을 BPM 80에서 반복해요. <mark>4분음 뼈대는 흔들림 없이, 고스트만 잔발처럼</mark> 숨을 넣는지 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/졸업**
드디어 녹음이에요. 장식 워킹 한 마디를 두세 바퀴 멈추지 말고 녹음해, 그중 제일 좋은 한 판을 나의 첫 장식 워킹으로 남겨요. 4현·5현 둘 다 남기면 7주차 완성이에요.

**오늘의 완료 기준:** F7 4분음 워킹에 고스트("칙")와 8분 필을 얹은 장식 워킹을, 4분음 뼈대를 흔들지 않고 4현·5현으로 녹음할 수 있다. — 주간 결과물: 나의 첫 장식 워킹 베이스 녹음. (7주차 완성!)

## ④ 팁 / 흔한 실수

- **장식을 한꺼번에 다 넣으려 해요.** 오늘 한 마디엔 2박의 고스트 하나와 8분 필이면 충분해요. 세 장식을 매 박에 다 욱여넣으면 걸음이 수다스러워져요. 4분음 뼈대가 먼저, 장식은 딱 필요한 만큼만.
- **4박 B를 성급히 당겨요.** 4박 B는 다음 코드로 넘어가는 접근음이라, 제 박에 또박또박 딛어야 다음 마디로 자연스럽게 이어져요. 신나서 B를 당기지 말고, 마디 끝을 차분히 마무리해요.

오늘의 장식 워킹, 그 한 마디의 지도를 눈에 새겨 둬요. 뼈대 F·A·C 위로 고스트와 접근음이 스며, 곧은 걸음이 숨을 쉬는 그림이에요.

```json
{
  "id": "m2.w7.d4.ornament_summary_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Week 7 ornamented walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4현.** 7주차의 완성 지도예요. 뼈대 음 **F·A·C**에 고스트("칙")와 접근음 **B**가 어우러져 라인이 숨을 쉬어요.

```json
{
  "id": "m2.w7.d4.ornament_summary_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Week 7 ornamented walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

- **7주차를 스스로 크게 칭찬해요.** 곧기만 하던 4분음 워킹에 고스트("칙")·8분 필·해머온을 더해, 라인이 숨을 쉬게 만들었어요. 이제 여러분의 워킹은 걸음마다 잔발이 살아 있는, 노래하는 베이스가 됐어요. 두 달의 여정, 정말 멋지게 걸어왔어요.
