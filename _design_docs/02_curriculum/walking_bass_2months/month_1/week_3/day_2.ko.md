---
title: "스케일 접근·도미넌트 접근 — 접근음의 세 가지 얼굴"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 스케일 접근과 도미넌트 접근, 다리 놓는 방법을 넓히기

## ① 이론/설명

어제는 반음으로 다음 루트를 겨냥하는 **크로매틱 접근**을 익혔어요. 오늘은 접근음의 종류를 둘 더 늘려요. <mark>접근음은 크로매틱만 있는 게 아니에요.</mark> 스케일에서 한 걸음, 그리고 코드에서 크게 한 번 — 두 가지 새로운 다리를 배워요.

첫째는 **스케일 접근**이에요. 다음 루트로 향하는 스케일의 바로 옆 음(온음)을 4박에 놓아요. 다음 코드가 Bb라면, F 스케일 안의 **C**(Bb의 온음 위)에서 한 걸음 내려와 Bb로 들어가요. 크로매틱보다 넉넉하고, 조성 안에 있어서 <mark>귀에 아주 자연스럽게 들려요</mark>.

둘째는 **도미넌트 접근**이에요. 다음 루트의 5도 위 음, 즉 그 코드의 도미넌트를 4박에 놓고 4도 위(또는 5도 아래)로 훌쩍 건너뛰어요. Bb의 도미넌트는 **F**예요. 4박에 F를 놓으면 Bb로 강하게 해결되는 느낌이 생겨요. 반음처럼 살금살금 붙는 게 아니라 <mark>도약으로 다음 코드를 선언</mark>하는 방식이에요.

정리하면 접근음은 세 종류예요 — **크로매틱**(반음), **스케일**(온음), **도미넌트**(5도 도약). 오늘은 뒤의 두 가지를 손에 익혀요. 셋 다 규칙은 똑같아요 — <mark>접근음은 4박, 착지는 다음 1박</mark>.

먼저 다음 코드 **Bb**를 향하는 두 접근음, 스케일 C와 도미넌트 F를 지판에서 봐요.

```json
{
  "id": "m1.w3.d2.approach_types_bb_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to Bb — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" },
    { "string": 2, "fret": 3, "label": "F", "role": "passing" }
  ]}
}
```

▶ **4현.** 루트 Bb(3번현 1프렛)와, 스케일 접근 C(3번현 3프렛)·도미넌트 접근 F(2번현 3프렛)예요.

```json
{
  "id": "m1.w3.d2.approach_types_bb_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to Bb — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" },
    { "string": 2, "fret": 3, "label": "F", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 두 접근음을 라인에 넣어요. 첫 예제는 **스케일 접근**(C→Bb), 둘째는 **도미넌트 접근**(F→Bb)이에요. <mark>둘 다 4박에 접근음, 다음 1박에 Bb 착지예요.</mark> 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w3.d2.approach_scale_4",
  "type": "tab",
  "meta": { "title": "Scale approach (C to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4현.** 4박 C(3번현 3프렛)가 Bb의 온음 위에서 한 걸음 내려와요. 다음 1박에 Bb로 착지.

```json
{
  "id": "m1.w3.d2.approach_scale_5",
  "type": "tab",
  "meta": { "title": "Scale approach (C to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "C", "role": "passing" }
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

이번엔 **도미넌트 접근**이에요. 4박 F에서 Bb로 5도를 훌쩍 건너뛰어요.

```json
{
  "id": "m1.w3.d2.approach_dom_4",
  "type": "tab",
  "meta": { "title": "Dominant approach (F to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "F", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4현.** 4박 F(2번현 3프렛)는 Bb의 도미넌트예요. 5도 위에서 Bb로 강하게 해결돼요.

```json
{
  "id": "m1.w3.d2.approach_dom_5",
  "type": "tab",
  "meta": { "title": "Dominant approach (F to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "F", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 5현.** 음과 위치는 4현과 똑같아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 크로매틱 접근(반음 위·아래)을 BPM 72로 한 번 걸어요. 세 번째 접근음을 배우기 전에 손을 풀어요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 **스케일 접근** 하나를 떼어 느리게 익혀요. 4박 C에서 온음 Bb로 <mark>부드럽게 내려앉는</mark> 느낌이에요.

```json
{
  "id": "m1.w3.d2.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Scale approach and land, slow (C to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66, 4현.** 4박 없이도 좋아요 — F 루트에서 C를 거쳐 온음 Bb로 아주 느리게 내려앉아요.

```json
{
  "id": "m1.w3.d2.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Scale approach and land, slow (C to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 두 예제(스케일·도미넌트)를 **BPM 76**에서 번갈아 걸어요. <mark>어느 접근이 더 강하게 다음 코드를 부르나</mark> 비교해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 세 접근음(크로매틱·스케일·도미넌트)을 나란히 들어봐요. 곡의 분위기에 따라 어떤 접근이 어울릴지 상상해 두면 좋아요.

**오늘의 완료 기준:** 스케일 접근(온음)과 도미넌트 접근(5도 도약)을 4박에 놓고 다음 마디 1박에 착지하며, 크로매틱까지 세 접근음의 차이를 4현·5현 둘 다에서 설명할 수 있다.

## ④ 팁 / 흔한 실수

- **스케일 접근이 밋밋해요.** 온음 접근은 부드러운 게 장점이지만, 착지음을 또렷하게 울려야 방향이 살아요. 접근음보다 다음 1박이 커야 해요.
- **도미넌트 도약이 어긋나요.** F에서 Bb로 뛸 때 손이 급하면 음이 흐려져요. 도약 전에 착지 위치를 미리 눈으로 찍어 둬요.

F로 돌아갈 때도 같아요. 아래는 F를 향하는 스케일 접근 **G**·도미넌트 접근 **C**예요.

```json
{
  "id": "m1.w3.d2.approach_types_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "G", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" }
  ]}
}
```

▶ **4현.** 루트 F(4번현 1프렛)와, 스케일 접근 G(2번현 5프렛)·도미넌트 접근 C(3번현 3프렛)예요.

```json
{
  "id": "m1.w3.d2.approach_types_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "G", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

- **세 접근을 골라 써요.** 크로매틱은 살금살금, 스케일은 부드럽게, 도미넌트는 힘 있게 — 같은 착지라도 색이 달라요. 오늘은 세 얼굴을 구분해 두는 것만으로 충분해요. 내일은 이 접근음을 실제 워킹 라인에 넣어요.
