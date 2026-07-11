---
title: "크로매틱 접근 — 반음 위·아래에서 다음 루트로"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — 크로매틱 접근, 다음 코드로 다리 놓기

## ① 이론/설명

3주차가 시작됐어요. 지난 2주 동안 우리는 코드톤으로 워킹을 걷는 법을 익혔죠 — 매 1박마다 코드에 착지하는 감각이요. 이번 주엔 워킹의 진짜 비밀 하나를 배워요. 바로 <mark>마지막 박(4박)에 놓는 접근음</mark>이에요. **접근음**은 다음 코드로 건너가기 직전, 징검다리처럼 살짝 놓아 두는 한 음이에요.

오늘의 주제는 가장 강력한 접근음, **크로매틱 접근**이에요. 방법은 아주 단순해요. **다음 코드 루트의 반음 위나 반음 아래** 음을 4박에 놓는 거예요. 예를 들어 다음 코드가 Bb라면, 반음 위인 B(3번현 2프렛)나 반음 아래인 A(3번현 개방)를 4박에 놓아요. 그러면 그 음이 다음 마디 1박의 Bb로 <mark>미끄러지듯 빨려 들어가요</mark>.

왜 이게 통할까요? 반음은 우리 귀에 가장 가까운 거리예요. 반음 옆의 음이 울리면 귀는 그다음에 올 목표 음을 미리 기대하게 돼요. 그래서 접근음은 다음 코드를 **미리 겨냥하는 화살표** 같은 역할을 해요. 코드톤이 아니어도 괜찮아요 — 4박의 접근음은 지나가는 음이라서, 다음 1박에 제대로 착지하기만 하면 오히려 라인을 더 매끄럽게 만들어요.

한 가지만 기억해요. <mark>접근음은 4박에, 착지는 다음 1박에</mark>. 이 두 박의 관계가 이번 주 내내 이어질 **핵심**이에요. 오늘은 **반음 위**와 **반음 아래**, 두 방향을 손에 익혀 봐요.

다음 코드 **Bb**를 겨냥하는 세 음을 지판에서 먼저 봐요 — 루트와 그 양옆 반음이에요.

```json
{
  "id": "m1.w3.d1.approach_bb_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to Bb — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" }
  ]}
}
```

▶ **4현.** 다음 루트 Bb(3번현 1프렛)와, 반음 위 B(2프렛)·반음 아래 A(개방)예요.

```json
{
  "id": "m1.w3.d1.approach_bb_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to Bb — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 접근음을 실제 라인에 넣어 봐요. 첫 예제는 **반음 위**에서, 둘째 예제는 **반음 아래**에서 다음 루트 Bb로 들어가요. <mark>둘 다 4박에 접근음, 다음 1박에 착지예요.</mark> 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w3.d1.approach_above_4",
  "type": "tab",
  "meta": { "title": "Chromatic approach from above (B to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4현.** 1~3박은 F7 코드톤, 4박 B(3번현 2프렛)가 Bb를 반음 위에서 겨냥해요. 다음 1박에 Bb로 착지.

```json
{
  "id": "m1.w3.d1.approach_above_5",
  "type": "tab",
  "meta": { "title": "Chromatic approach from above (B to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

이번엔 반대로, **반음 아래** A에서 올라와 Bb로 들어가요.

```json
{
  "id": "m1.w3.d1.approach_below_4",
  "type": "tab",
  "meta": { "title": "Chromatic approach from below (A to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4현.** 4박 A(3번현 개방)가 Bb를 반음 아래에서 겨냥해요. 아래에서 위로 반음 밀어 올려 착지.

```json
{
  "id": "m1.w3.d1.approach_below_5",
  "type": "tab",
  "meta": { "title": "Chromatic approach from below (A to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 5현.** 음과 위치는 4현과 똑같아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
2주차의 F7→Bb7 아르페지오 워킹을 BPM 72로 한 번 걸어요. 손끝에 워킹 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 접근음 하나만 떼어 연습해요. 1마디 4박 **B**에서 2마디 온음 Bb로 <mark>천천히 미끄러져 착지</mark>하는 감각을 느껴요.

```json
{
  "id": "m1.w3.d1.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Approach and land, slow (B to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66, 4현.** 4박 B가 다음 마디 온음 Bb로 빨려 들어가요. 아주 느리게 그 당김을 느껴요.

```json
{
  "id": "m1.w3.d1.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Approach and land, slow (B to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 두 예제(반음 위·반음 아래)를 **BPM 76**에서 번갈아 걸어요. <mark>4박의 접근음이 다음 1박으로 미끄러지나</mark> 귀로 확인해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 접근음이 다음 코드를 자연스럽게 부르는지 들어봐요. 반음 위와 반음 아래 중 어느 쪽이 더 마음에 드는지 메모해 둬요.

**오늘의 완료 기준:** 다음 코드 루트의 반음 위·반음 아래 크로매틱 접근음을 4박에 놓고, 다음 마디 1박에 정확히 착지하며 4현·5현 둘 다 걸을 수 있다.

## ④ 팁 / 흔한 실수

- **접근음이 코드톤처럼 커요.** 4박 접근음은 짧고 가볍게, 다음 1박 착지음을 더 또렷하게 울려요. 접근음이 주인공이 되면 안 돼요.
- **접근을 너무 일찍 놓아요.** 접근음은 반드시 4박이에요. 2~3박에 놓으면 코드톤이 흐려지고 착지가 약해져요.

F로 돌아갈 때의 접근음도 미리 봐 둬요. 아래는 F를 겨냥하는 반음 아래 **E**·반음 위 **F#**이에요.

```json
{
  "id": "m1.w3.d1.approach_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4현.** F(4번현 1프렛)와, 반음 위 F#(2프렛)·반음 아래 E(2번현 2프렛)예요.

```json
{
  "id": "m1.w3.d1.approach_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

- **다음 코드를 미리 겨냥해요.** 접근음의 목적지는 언제나 다음 코드의 루트예요. 워킹이 순환할 때, F로 돌아가는 마디에서도 같은 원리를 써요. 오늘은 반음 위·아래 두 방향만 손에 익혀도 큰 걸음이에요.
