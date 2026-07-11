---
title: "12마디 전반부 — F7·Bb7 여덟 마디를 걷다"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 12마디 전반부, F7·Bb7 여덟 마디를 걷다

## ① 이론/설명

어제 스윙 4분음 필을 손에 붙였죠. 오늘부턴 진짜 **12마디 F 블루스**를 걸어요. 한 달 전엔 코드 하나에 루트만 겨우 짚었는데, 이제는 열두 마디짜리 곡의 절반을 걷는 거예요. 먼저 전체 지도를 펼쳐 볼게요 — **| F7 | Bb7 | F7 | F7 |**(1~4마디), **| Bb7 | Bb7 | F7 | F7 |**(5~8마디), **| C7 | Bb7 | F7 | C7 |**(9~12마디)예요.

열두 칸이 블루스의 길이예요. 그런데 겁먹지 않아도 돼요 — 자세히 보면 코드는 딱 셋(F7·Bb7·C7)뿐이고, 오늘 걸을 **전반부 8마디**엔 C7이 아예 없어요. <mark>F7과 Bb7, 두 집만 오가면 돼요</mark>. 지난 3주 내내 이 두 코드로 걸어 왔으니, 사실 오늘 걷는 길은 이미 다 아는 길이에요.

걸음의 규칙은 그대로예요. **1박은 코드에 착지, 4박은 다음 코드로 다리**. 각 마디 4박에 접근음을 놓아 다음 마디 1박으로 미끄러져요. 오늘 쓰는 다리는 셋이에요 — Bb로 가는 **B**(반음 위), F로 가는 **E**(반음 아래), 그리고 같은 코드가 이어질 땐 코드톤 **b7**이나 아래 접근음 **A**로 자연스럽게 이어요. <mark>매 4박이 다음 1박을 부르는지</mark>만 확인하면 여덟 마디가 하나로 이어져요.

먼저 오늘의 두 집, **F와 Bb 루트**를 지판에서 나란히 봐요.

```json
{
  "id": "m1.w4.d2.two_homes_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F and Bb — the two homes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 전반부의 두 착지점 — F(4번현 1프렛)와 Bb(3번현 1프렛)이에요.

```json
{
  "id": "m1.w4.d2.two_homes_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F and Bb — the two homes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 루트도 잡아볼 수 있어요.

## ② 시각 자료

이제 **전반부 8마디**를 통째로 걸어요. 1~4마디는 F7-Bb7-F7-F7, 5~8마디는 Bb7-Bb7-F7-F7이에요. 매 마디 R-3-5로 걷다가 4박에 다리를 놓아요. <mark>여덟 마디가 끊기지 않고 한 흐름으로</mark> 이어지는지 들어봐요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w4.d2.first_half_4",
  "type": "tab",
  "meta": { "title": "F blues first half (bars 1-8) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1·4마디 4박 B, 2·6마디 4박 E, 5마디 4박 A가 다리예요. 3·7마디는 같은 F7이 이어져 코드톤 b7로 걸어요.

```json
{
  "id": "m1.w4.d2.first_half_5",
  "type": "tab",
  "meta": { "title": "F blues first half (bars 1-8) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 F7 스윙 워킹을 BPM 72로 한 번 걸어요. 손끝에 스윙 4분음 감각을 되살려요.

**10~20분 · 두뇌 훈련**
전반부를 한 번에 다 걷기 전에, 아래 준비 예제로 **1~4마디**만 **BPM 70**의 느린 속도로 떼어 연습해요. <mark>마디와 마디의 이음새</mark>가 매끄러운지 확인해요.

```json
{
  "id": "m1.w4.d2.first_half_prep_4",
  "type": "tab",
  "meta": { "title": "First half chunk (bars 1-4), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 70, 4현.** 1~4마디만 느리게. 4박의 다리(B·E·B)가 다음 1박으로 미끄러지는지 확인해요.

```json
{
  "id": "m1.w4.d2.first_half_prep_5",
  "type": "tab",
  "meta": { "title": "First half chunk (bars 1-4), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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
위 **전반부 8마디**를 **BPM 80**에서 처음부터 끝까지 이어 걸어요. 중간에 멈추지 말고, 막히면 그 마디만 따로 느리게 고친 뒤 다시 이어요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
전반부 8마디를 30초 녹음해, 코드가 바뀌는 자리(1→2마디, 4→5마디)가 자연스러운지 들어봐요. 오늘 도달한 BPM을 적어두면 내일 후반부 출발점이 돼요.

**오늘의 완료 기준:** F 블루스 전반부 8마디(F7·Bb7)를 BPM 80 스윙 4분음으로, 매 1박 착지·매 4박 다리로 끊김 없이, 4현·5현 둘 다 걸을 수 있다.

## ④ 팁 / 흔한 실수

- **F7이 연달아 나오면 지루해져요.** 3·7마디처럼 같은 코드가 이어질 땐 코드톤 b7(3번현 6프렛)로 살짝 색을 줘요. 매번 똑같이 걷지 않아도 돼요.
- **코드 바뀔 때 손이 늦어요.** 4→5마디, 8마디처럼 자리가 바뀔 땐 4박 다리를 놓는 순간 이미 다음 손 모양을 준비해요. 다리는 손을 미리 옮기라는 신호예요.

Bb7의 코드톤도 정리해 둬요. Bb 루트에서 R-3-5-b7이 어디 있는지 봐 두면 5~6마디가 편해져요.

```json
{
  "id": "m1.w4.d2.bb7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** Bb7의 R(3번현 1프렛)·3(2번현 개방)·5(2번현 3프렛)·b7(1번현 1프렛)이에요.

```json
{
  "id": "m1.w4.d2.bb7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

- **절반을 걸었다는 건 큰 거예요.** 여덟 마디를 이어 걸을 수 있으면, 남은 넉 마디는 같은 원리에 코드 하나(C7)만 더 얹으면 돼요. 오늘 여기까지 온 것만으로 12마디의 대부분을 손에 넣은 거예요.
