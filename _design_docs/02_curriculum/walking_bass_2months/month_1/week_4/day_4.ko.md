---
title: "F 블루스 12마디 완주·녹음 — 1개월차 졸업"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — F 블루스 12마디 완주·녹음, 1개월차 졸업

## ① 이론/설명

드디어 4주차의 마지막 날, **1개월차 졸업식**이에요! 오늘 할 일은 딱 하나 — 지난 나흘 동안 이어 걸어 온 **F 블루스 12마디**를 처음부터 끝까지 완주하고 <mark>녹음으로 남기는</mark> 거예요. 한 달 전 첫날을 떠올려 봐요. 그땐 루트 한 음을 짚는 것도 신경 써야 했는데, 오늘은 세 코드를 스윙 4분음으로 걸어 열두 마디를 완주하는 나예요. 이게 바로 **성장**이에요.

오늘의 완성물은 두 부분이에요. 먼저 <mark>[핀 고정] 첫 4마디</mark>(F7-Bb7-F7-F7)를 정확히 짚어요 — 매 1박 루트 착지, 4박은 다음 코드로 다리(**B·E·b7·B**)예요. 그다음 이 방식을 폼 전체에 이어 붙인 **12마디 완주** 버전을 돌려요. 걸음의 원리는 나흘 내내 똑같았어요. **1박은 착지, 4박은 다리.** 이 두 박의 관계가 12마디를 하나로 꿰어요.

녹음은 어렵지 않아요. 휴대폰 하나면 충분해요. 중요한 건 완벽이 아니라 **남기는 것**이에요. 어제 익힌 풀 런스루 그대로, 메트로놈을 편한 속도로 켜고 두세 바퀴 돌려요. 한 음쯤 틀려도 걸음이 살아 있으면 그게 좋은 녹음이에요. <mark>완벽한 한 판을 기다리기보다 여러 번 녹음해 그중 제일 좋은 걸</mark> 고르면 돼요. 다음 달엔 이 12마디에 더 다양한 접근과 리듬을 얹어 넓혀 가요. 오늘의 녹음이 그 출발선이에요.

먼저 12마디 전체의 지도, 세 착지점 **F·Bb·C**를 한눈에 봐 둬요.

```json
{
  "id": "m1.w4.d4.blues_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F blues — three landings map — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 12마디의 세 착지점 — F(4번현 1프렛)·Bb(3번현 1프렛)·C(3번현 3프렛)예요.

```json
{
  "id": "m1.w4.d4.blues_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F blues — three landings map — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 루트도 잡아볼 수 있어요.

## ② 시각 자료

이제 **이번 달의 완성물**을 녹음해요. 먼저 <mark>[핀 고정] 첫 4마디</mark>를 짚고, 그다음 이를 이어 붙인 **12마디 완주**를 돌려요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w4.d4.f_blues_walk_4",
  "type": "tab",
  "meta": { "title": "F blues walking (bars 1-4) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 4현.** 1마디 F7, 2마디 Bb7, 3·4마디 F7이에요. 매 1박 루트 착지, 4박은 다리(B·E·b7·B). 전체 12마디는 이 방식을 폼 전체에 이어 붙여요.

```json
{
  "id": "m1.w4.d4.f_blues_walk_5",
  "type": "tab",
  "meta": { "title": "F blues walking (bars 1-4) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

이제 폼을 따라 이어 붙인 **12마디 완주** 버전이에요. 오늘의 녹음 대상이 바로 이 열두 마디예요.

```json
{
  "id": "m1.w4.d4.full_12_4",
  "type": "tab",
  "meta": { "title": "F blues full 12-bar walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 6, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 7, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "Gb", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 4현.** 폼(F7·Bb7·F7·F7·Bb7·Bb7·F7·F7·C7·Bb7·F7·C7)을 따라 매 1박 루트, 4박 다리로 열두 마디를 이어요. 12마디 4박 Gb가 다시 1마디 F로 돌아가요.

```json
{
  "id": "m1.w4.d4.full_12_5",
  "type": "tab",
  "meta": { "title": "F blues full 12-bar walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 6, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 7, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "Gb", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 5현.** 음과 위치는 4현과 똑같아요. 저음 B의 묵직한 저음으로 한 버전 더 녹음해 봐도 좋아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 풀 런스루를 BPM 70으로 가볍게 흘려 손을 깨워요. 오늘은 그 흐름을 <mark>그대로 녹음에 담을</mark> 거예요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 첫 4마디를 **BPM 70**의 느린 속도로 짚어, 다리(B·E·b7·B)와 코드 이동을 다시 맞춰 둬요. <mark>이음새가 흔들리지 않는지</mark> 확인해요.

```json
{
  "id": "m1.w4.d4.record_prep_4",
  "type": "tab",
  "meta": { "title": "Recording prep, first 4 bars, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 첫 4마디만 느리게. 4박의 다리가 다음 1박으로 미끄러지는지 다시 맞춰요.

```json
{
  "id": "m1.w4.d4.record_prep_5",
  "type": "tab",
  "meta": { "title": "Recording prep, first 4 bars, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **12마디 완주**를 편한 속도(BPM 70~85)에서 반복해요. 열두 마디가 멈추지 않고 이어지면 녹음할 준비가 된 거예요. 4현으로 익힌 뒤 5현으로도 같은 흐름을 확인해요.

**40~50분 · 녹음/졸업**
드디어 녹음이에요. 편한 속도에서 12마디를 두세 바퀴 멈추지 말고 녹음해, 그중 제일 좋은 한 판을 <mark>나의 첫 워킹 베이스로 남겨요</mark>. 4현·5현 둘 다 남기면 1개월차 완성이에요.

**오늘의 완료 기준:** F 블루스 12마디 워킹을 편한 속도의 스윙 4분음으로 4현·5현 둘 다 멈추지 않고 완주·녹음할 수 있다. — 월간 결과물: 나의 첫 F 블루스 12마디 워킹 베이스 녹음. (M1 졸업!)

## ④ 팁 / 흔한 실수

- **녹음만 켜면 긴장해요.** 마이크 앞에서 손이 굳어요. 녹음 중이란 걸 잊고, 연습하듯 편하게 여러 번 돌려요.
- **한 번에 완벽하려 해요.** 첫 테이크에 목매지 마세요. 여러 판 녹음해 그중 제일 나은 걸 고르면 돼요.
- **턴어라운드에서 급해져요.** 12마디 끝(11·12마디)에서 신나서 빨라지기 쉬워요. 준비 예제로 이음새부터 다시 데운 뒤 녹음해요.

12마디에서 쓴 네 개의 다리(B·E·A·Gb)를 한눈에 봐 둬요. 이 접근음들이 코드를 이어 준 주인공이에요.

```json
{
  "id": "m1.w4.d4.bridges_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The four bridges (B, E, A, Gb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" },
    { "string": 2, "fret": 4, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **4현.** B(3번현 2프렛)·E(2번현 2프렛)·A(3번현 개방)·Gb(2번현 4프렛), 네 다리예요.

```json
{
  "id": "m1.w4.d4.bridges_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The four bridges (B, E, A, Gb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" },
    { "string": 2, "fret": 4, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

- **한 달을 스스로 크게 칭찬해요.** 루트 한 음에서 시작해, 코드톤으로 걷고, 접근음으로 다음 코드를 겨냥하고, 이제 F 블루스 열두 마디를 스윙 4분음으로 완주해 녹음까지 남겼어요. 정말 큰 걸음이에요. 다음 달부터는 이 워킹에 더 다양한 코드 진행과 리듬을 얹어 진짜 재즈·블루스 라인으로 넓혀 가요.
