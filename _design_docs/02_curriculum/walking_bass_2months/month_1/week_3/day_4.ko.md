---
title: "접근음 워킹 F7↔Bb7 — 3주차 완성물"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 접근음 워킹 F7↔Bb7, 이번 주를 완성하기

## ① 이론/설명

3주차 마지막 날이에요. 이번 주 우리는 접근음 하나로 워킹을 완전히 바꿨어요 — 크로매틱, 스케일, 도미넌트 세 다리를 배우고, 어제는 그걸 라인에 넣었죠. 오늘은 그 모든 걸 모아 <mark>이번 주의 완성물</mark>을 만들어요. 바로 **접근음 워킹 F7↔Bb7**이에요.

완성 라인은 두 마디예요. 두 마디 모두 규칙이 똑같아요 — **1박 루트, 2·3박 코드톤, 4박 크로매틱 접근음**. 1마디는 F7을 밟다가 4박에 **B**(Bb의 반음 위)로 다리를 놓고, 2마디는 Bb7을 밟다가 4박에 **E**(F의 반음 아래)로 다리를 놓아 다시 F로 돌아가요.

재미있는 건 방향이 달라요. 1마디는 반음 **위**에서 내려와 Bb에 앉고, 2마디는 반음 **아래**에서 올라와 F에 앉아요. 위든 아래든 <mark>다음 코드 루트를 반음 거리에서 겨냥</mark>한다는 원리는 똑같아요. 이 두 마디가 계속 순환하면, 접근음이 두 코드를 끝없이 이어 주는 워킹이 돼요.

이 라인은 이번 주 내내 쌓은 것의 결정체예요. 코드톤으로 걷는 힘(2주차), 그리고 다음 코드로 다리를 놓는 감각(3주차)이 한 라인에 담겨 있어요. <mark>BPM 80에서 두 마디가 끊김 없이 돌아가면</mark>, 여러분은 이미 **진짜 워킹**을 걷고 있는 거예요.

먼저 1마디 F7의 음들을 봐요 — R-3-5와 4박 접근음 **B**예요.

```json
{
  "id": "m1.w3.d4.bar1_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 1 — F7 with approach B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4현.** 1마디 F7의 R-3-5(4번현 1·5프렛, 3번현 3프렛)와, 4박 접근음 B(3번현 2프렛)예요.

```json
{
  "id": "m1.w3.d4.bar1_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 1 — F7 with approach B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 이번 주의 완성물이에요. 먼저 2마디 Bb7의 음들 — R-3-5와 4박 접근음 **E** — 을 보고, 그다음 <mark>두 마디를 잇는 접근음 워킹</mark>을 완성 라인으로 돌려요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w3.d4.bar2_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 2 — Bb7 with approach E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4현.** 2마디 Bb7의 R-3-5(3번현 1프렛, 2번현 개방·3프렛)와, 4박 접근음 E(2번현 2프렛)예요.

```json
{
  "id": "m1.w3.d4.bar2_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 2 — Bb7 with approach E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

이제 이번 주 완성물, **접근음 워킹 F7↔Bb7**이에요. 두 마디를 **BPM 80** 스윙 4분음으로 걸어요. <mark>각 마디 4박이 다음 코드로 다리를 놓아요.</mark>

```json
{
  "id": "m1.w3.d4.approach_walk_4",
  "type": "tab",
  "meta": { "title": "Approach-note walk F7-Bb7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1마디 4박 B(3번현 2프렛)는 Bb 반음 위 접근음 → 2마디 Bb로 착지. 2마디 4박 E(2번현 2프렛)는 F 반음 아래 접근음 → F로.

```json
{
  "id": "m1.w3.d4.approach_walk_5",
  "type": "tab",
  "meta": { "title": "Approach-note walk F7-Bb7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 내려가 같은 워킹을 더 묵직하게 시험해 봐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 워킹 라인을 BPM 76으로 한 번 걸어요. 두 마디 순환 감각을 손끝에 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 **두 접근음**(B·E)만 떼어 느리게 이어요. 각 마디 4박이 다음 루트를 부르는 걸 <mark>천천히</mark> 느껴요.

```json
{
  "id": "m1.w3.d4.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Two bridges drill, slow (B, E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "half", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 72, 4현.** 1마디 F에서 B로, 2마디 Bb에서 E로. 두 접근음이 다음 루트를 부르는 당김을 여유 있게 익혀요.

```json
{
  "id": "m1.w3.d4.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Two bridges drill, slow (B, E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "half", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 72, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전 (이번 주 완성물)**
위 **접근음 워킹**을 **BPM 80**에서 두 마디 순환으로 반복해요. <mark>매 4박이 다음 1박으로 미끄러지나</mark> 확인해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 두 다리(B→Bb, E→F)가 자연스럽게 이어지는지 들어봐요. 이번 주 도달한 BPM을 적어두면 다음 주 출발점이 돼요.

**오늘의 완료 기준:** 접근음 워킹 F7↔Bb7을 BPM 80 스윙 4분음으로, 매 1박 루트 착지·매 4박 크로매틱 접근음으로 두 마디를 끊김 없이 순환하며 4현·5현 둘 다 걸을 수 있다. (3주차 완성!)

## ④ 팁 / 흔한 실수

- **위·아래 방향이 헷갈려요.** 1마디는 위에서(B) 내려오고, 2마디는 아래에서(E) 올라와요. 방향이 반대라는 것만 기억하면 손이 길을 잃지 않아요.
- **4박이 서둘러져요.** 완성이라 신나서 4박에서 급해지기 쉬워요. 네 박이 자로 잰 듯 고른 게 접근음보다 먼저예요.

두 착지점 **F·Bb**만 확실하면 라인 전체가 흔들리지 않아요.

```json
{
  "id": "m1.w3.d4.roots_4",
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
  "id": "m1.w3.d4.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 루트도 잡아볼 수 있어요.

- **한 달을 스스로 칭찬해요.** 루트만 밟던 데서 시작해, 코드톤으로 걷고, 이제 접근음으로 다음 코드까지 겨냥하게 됐어요. 큰 걸음이에요. 다음 주부터는 이 워킹에 더 긴 코드 진행과 다양한 접근을 얹어 진짜 재즈 라인으로 넓혀 가요.
