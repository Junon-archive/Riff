---
title: "코드톤 오르내리기 — 아르페지오 워킹"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — 코드톤 오르내리기, 세 코드를 이어 걷기

## ① 이론/설명

지금까지 코드톤을 아래에서 위로만 밟아 올라갔죠. 오늘은 **오르내리기** — 올라간 길을 그대로 **되짚어 내려오는** 연습을 더해요. 워킹은 한 방향으로만 걷지 않아요. 위로 올라갔다가 <mark>다시 내려오며 다음 코드로 다리를 놓는</mark> 게 진짜 걸음이에요. 올라갈 줄만 알면 반쪽이고, 내려올 줄까지 알아야 어디로든 이어갈 수 있어요.

방법은 간단해요. F7이라면 **R-3-5-b7**로 올라간 뒤, 맨 위 **b7**을 꼭짓점으로 삼아 **b7-5-3-R** 순서로 내려와요. 올라갈 때 짚던 자리를 거꾸로 되짚기만 하면 되니까 새로 외울 건 없어요. 이때 <mark>꼭짓점 b7에서 방향을 부드럽게 트는 것</mark>이 핵심이에요. 내려올 때 음이 흐려지기 쉬우니, 올라갈 때만큼 또렷하게 밟아요.

여기서 한 걸음 더 나아가요. **아르페지오 워킹** — 한 코드의 코드톤을 4분음으로 훑은 뒤, 다음 코드의 코드톤으로 자연스럽게 넘어가는 거예요. 오늘은 **F7 → Bb7 → C7** 순서로, 한 마디에 한 코드씩 아르페지오를 이어 걸어요. 코드가 바뀌면 <mark>그 코드의 루트부터 다시 밟기 시작</mark>하면 돼요. 이게 바로 워킹 베이스의 가장 기본 뼈대예요.

아래 지도로 **F7의 오르내리는 길**을 눈에 그려봐요.

```json
{
  "id": "m1.w1.d3.f7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (up and down path) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 루트 F에서 올라가 b7 Eb에서 방향을 틀어 다시 R로 내려와요. 같은 네 자리를 왕복하는 거예요.

```json
{
  "id": "m1.w1.d3.f7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (up and down path) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 손으로 덮어 둬요.

**5현**이라면 이 오르내림도 4현과 똑같아요. 익숙해지면 저음 B현을 이용해 더 낮은 루트에서 출발하는 대안 라인도 시험해 볼 수 있어요. 오늘은 우선 **또박또박한 왕복**과 코드 사이 연결에 집중해요.

## ② 시각 자료

이제 소리로 익혀요. 먼저 **F7 오르내리기**를 치고, 이어서 **F7에서 Bb7로** 넘어가는 두 코드 워킹을 연습해요. <mark>코드가 바뀌는 순간</mark>이 워킹에서 가장 짜릿한 지점이에요. 모든 예제는 **4현·5현 두 버전**이에요.

먼저 **F7 오르내리기**예요. R-3-5-b7로 올라갔다가 b7-5-3-R로 내려와요.

```json
{
  "id": "m1.w1.d3.f7_updown_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72, 4현.** 첫 마디는 올라가고 둘째 마디는 내려와요. 꼭짓점 b7에서 방향을 부드럽게 틀어요.

```json
{
  "id": "m1.w1.d3.f7_updown_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 두고, 익숙해지면 더 낮게 확장해 봐요.

다음은 **F7 → Bb7 두 코드 워킹**이에요. 각 코드를 한 마디씩 아르페지오로 걸어요.

```json
{
  "id": "m1.w1.d3.f7_bb7_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4현.** 첫 마디 F7, 둘째 마디 Bb7. 코드가 바뀌면 그 코드의 루트부터 다시 시작해요.

```json
{
  "id": "m1.w1.d3.f7_bb7_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 세 코드 아르페지오를 BPM 70으로 올라가며 한 번씩 풀어요. **세 집의 위치**를 손끝에 되살립니다.

**10~20분 · 두뇌 훈련**
F7 오르내리기를 아주 느리게 반복하며, **꼭짓점 b7에서 방향 트는 지점**을 손에 익혀요. <mark>내려올 때도 올라갈 때만큼 또렷하게</mark>가 목표예요.

**20~40분 · 실전 (오늘의 완성물)**
아래 F7 → Bb7 → C7 아르페지오 워킹을 **BPM 72**에서 반복해요. 한 마디에 한 코드씩, 코드가 바뀔 때 루트부터 다시 밟아 자연스럽게 이어가요.

```json
{
  "id": "m1.w1.d3.three_chord_walk_4",
  "type": "tab",
  "meta": { "title": "F7-Bb7-C7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4현.** 세 코드를 한 마디씩 아르페지오로 이어 걸어요. 코드 경계에서 끊기지 않게 흐르듯이.

```json
{
  "id": "m1.w1.d3.three_chord_walk_5",
  "type": "tab",
  "meta": { "title": "F7-Bb7-C7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 두고, 익숙해지면 더 낮게 확장해 봐요.

**40~50분 · 녹음/피드백**
30초 녹음해 코드가 바뀌는 **이음새가 매끄러운지** 들어봐요. 끊기거나 박이 밀리는 곳이 있으면 그 부분만 느리게 다시 걸어요.

**오늘의 완료 기준:** F7·Bb7·C7의 코드톤을 4분음으로 오르내리고, 세 코드를 한 마디씩 이은 아르페지오 워킹을 BPM 72에서 끊김 없이 걸을 수 있다.

## ④ 팁 / 흔한 실수

- **내려올 때 흐려져요.** 올라갈 땐 또렷한데 내려올 때 음이 뭉개지기 쉬워요. 내리막만 따로 떼어 느리게 연습해요.

```json
{
  "id": "m1.w1.d3.f7_down_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio descending only — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **4현.** b7-5-3-R 순서로 내려오는 길이에요. 각 음을 올라갈 때만큼 또렷하게 밟아요.

```json
{
  "id": "m1.w1.d3.f7_down_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio descending only — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

- **코드 경계에서 박이 밀려요.** 코드가 바뀌는 순간 손이 늦으면 그루브가 무너져요. 바뀌기 한 박 전에 다음 루트를 미리 겨눠요.
- **속도를 서둘러요.** 72에서 이음새가 매끄럽지 않은데 올리면 다 흔들려요. 매끄러움이 먼저예요.
- **저음 B 방심(5현).** 위치를 오르내리다 B를 건드리면 저음이 새요. 안 쓰는 B는 늘 덮어 두세요.
