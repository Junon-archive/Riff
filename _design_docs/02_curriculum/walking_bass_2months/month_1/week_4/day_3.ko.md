---
title: "12마디 후반부 — C7 턴어라운드와 풀 런스루"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 12마디 후반부, C7 턴어라운드와 풀 런스루

## ① 이론/설명

어제 전반부 여덟 마디를 걸었어요. 오늘은 나머지 넉 마디, **후반부 9~12마디**를 걸어 12마디를 완성해요 — **| C7 | Bb7 | F7 | C7 |**이에요. 여기서 새 얼굴 하나가 등장해요. 바로 **C7**이에요. 한 달 전엔 코드 하나도 벅찼는데, 이제 세 번째 코드까지 걷게 됐어요.

C7은 블루스에서 **가장 긴장이 큰 코드**예요. F를 향해 돌아가고 싶어 안달이 난 소리죠. 그래서 후반부엔 특별한 역할이 하나 더 있어요. 11~12마디의 **F7→C7**이 바로 <mark>턴어라운드</mark>예요. 곡의 끝에서 다시 처음(1마디 F7)으로 되돌려 보내는 회전문 같은 자리죠. 이 네 마디가 매끄러우면 12마디가 끝없이 순환해요.

걷는 규칙은 여전히 똑같아요. **1박 착지, 4박 다리.** 9마디 C7은 4박 **B**로 다음 Bb를 겨냥하고, 10마디 Bb7은 4박 **E**로 F를 겨냥해요. 11마디 F7은 4박 **B**로 다음 C를 겨냥하고, 마지막 12마디 C7은 4박 **Gb**로 <mark>맨 처음 F로 다리를 놓아</mark> 곡을 다시 시작해요. 오늘은 이 후반부를 익힌 뒤, 어제의 전반부와 이어 **12마디 풀 런스루**까지 도전해요.

먼저 오늘의 새 코드 **C7**의 코드톤을 지판에서 봐요.

```json
{
  "id": "m1.w4.d3.c7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** C7의 R(3번현 3프렛)·3(2번현 2프렛)·5(2번현 5프렛)·b7(1번현 3프렛)이에요.

```json
{
  "id": "m1.w4.d3.c7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 **후반부 9~12마디**를 걸어요. C7-Bb7-F7-C7이에요. 매 마디 R-3-5로 걷다가 4박에 다리를 놓고, 마지막 마디는 다시 F로 돌아갈 준비를 해요. <mark>턴어라운드가 처음으로 이어지는지</mark> 귀로 확인해요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w4.d3.turnaround_4",
  "type": "tab",
  "meta": { "title": "F blues second half (bars 9-12) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
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

▶ **BPM 80, 4현.** 9마디 4박 B는 Bb로, 10마디 4박 E는 F로, 11마디 4박 B는 C로 다리를 놓아요. 12마디 4박 Gb(2번현 4프렛)는 맨 처음 F로 돌아가는 다리예요.

```json
{
  "id": "m1.w4.d3.turnaround_5",
  "type": "tab",
  "meta": { "title": "F blues second half (bars 9-12) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
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

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 전반부 8마디를 BPM 72로 한 번 걸어요. 손끝에 12마디 흐름을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 **후반부 9~12마디**만 **BPM 70**의 느린 속도로 떼어 연습해요. <mark>C7 자리와 턴어라운드</mark>가 매끄러운지 확인해요.

```json
{
  "id": "m1.w4.d3.turnaround_prep_4",
  "type": "tab",
  "meta": { "title": "Second half chunk (bars 9-12), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
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

▶ **BPM 70, 4현.** 9~12마디만 느리게. 11→12마디(F7→C7) 턴어라운드가 다시 1마디로 돌아가는 당김을 느껴요.

```json
{
  "id": "m1.w4.d3.turnaround_prep_5",
  "type": "tab",
  "meta": { "title": "Second half chunk (bars 9-12), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
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

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전 (풀 런스루)**
이제 어제의 전반부(1~8마디)와 오늘의 후반부(9~12마디)를 이어 **12마디를 처음부터 끝까지** BPM 80으로 걸어요. <mark>턴어라운드가 다시 1마디로 자연스럽게 돌아가는지</mark> 확인해요. 막히는 마디만 따로 느리게 고친 뒤 다시 이어요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
12마디 풀 런스루를 한 바퀴 녹음해, 후반부 C7 자리와 턴어라운드가 자연스러운지 들어봐요. 내일은 이 12마디를 완주·녹음해요. 오늘 도달한 BPM을 적어둬요.

**오늘의 완료 기준:** F 블루스 12마디를 전반부와 후반부를 이어 처음부터 끝까지, C7 턴어라운드를 포함해 BPM 80 스윙 4분음으로, 4현·5현 둘 다 한 바퀴 걸을 수 있다.

## ④ 팁 / 흔한 실수

- **C7 자리를 못 찾아요.** C7 루트는 Bb 루트(3번현 1프렛) 바로 두 칸 위(3번현 3프렛)예요. Bb 옆에 붙어 있다고 생각하면 손이 헤매지 않아요.
- **턴어라운드에서 서둘러요.** 12마디 끝이 보이면 신나서 급해지기 쉬워요. 마지막 두 마디(11·12)일수록 네 박을 더 고르게, 다리(B·Gb)를 또박또박 놓아요.

세 코드의 착지점 F·Bb·C만 확실하면 12마디 전체가 흔들리지 않아요. 세 루트를 한눈에 봐 둬요.

```json
{
  "id": "m1.w4.d3.three_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F, Bb, C — the three landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
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
  "id": "m1.w4.d3.three_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F, Bb, C — the three landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 루트도 잡아볼 수 있어요.

- **이제 12마디가 다 이어졌어요.** 어제까지 절반이던 길이 오늘 한 곡으로 완성됐어요. 남은 건 내일, 이 12마디를 편한 속도로 완주해 녹음으로 남기는 일뿐이에요. 한 달의 걸음이 곧 결실을 맺어요.
