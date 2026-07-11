---
title: "루트-5도 라인 — 2분음으로 한 단계"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 루트에 5도를 더해, 2분음으로 걷기

## ① 이론/설명

어제는 루트 하나만 온음표로 진행을 걸었어요. 오늘은 밀도 램프의 두 번째 계단을 올라요 — 루트에 **5도**를 더해서 **2분음(half)**으로 걷습니다. 한 마디를 루트 절반, 5도 절반으로 나눠 밟는 거예요. <mark>음 하나만 늘었을 뿐인데 라인이 훨씬 걷는 느낌</mark>이 나요.

왜 하필 5도일까요? **5도는 루트와 가장 잘 어울리는 든든한 짝**이거든요. 루트가 집이라면 5도는 바로 옆집 같아서, 어떤 코드에 얹어도 흔들림 없이 안정적이에요. 그래서 워킹에서 **루트-5도(R-5)**는 가장 먼저 익히는 뼈대 중의 뼈대예요. 오늘도 규칙은 어제와 같아요 — <mark>매 마디 1박은 반드시 루트에 착지</mark>하고, 3박에서 5도로 다리를 놓아요.

지판에는 아주 편한 규칙이 하나 있어요. **5도는 루트에서 한 현 위, 두 프렛 위**에 있어요. F7이면 루트 F(4번현 1프렛)에서 **5도 C는 3번현 3프렛**, Bb7이면 루트 Bb(3번현 1프렛)에서 **5도 F는 2번현 3프렛**, C7이면 루트 C(3번현 3프렛)에서 **5도 G는 2번현 5프렛**이에요. 세 코드 모두 손모양이 똑같죠?

먼저 F7의 **루트와 5도**부터 잡아둬요.

```json
{
  "id": "m1.w2.d2.f_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 루트 F(4번현 1프렛)와 5도 C(3번현 3프렛). 한 현 위, 두 프렛 위 자리예요.

```json
{
  "id": "m1.w2.d2.f_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

**5현**을 써도 R-5 손모양은 4현과 똑같아요. 다만 저음 B현 덕분에 나중에 5도를 더 낮은 옥타브에서도 짚을 수 있어요. 오늘은 우선 **한 현 위, 두 프렛 위** 규칙을 손에 각인하는 데 집중해요.

## ② 시각 자료

이제 세 코드의 **루트-5도**를 눈에 담고, 진행을 2분음으로 걸어봐요. 먼저 Bb7의 R-5 손모양을 확인해요. <mark>F7 모양을 그대로 한 현씩 옮긴 자리</mark>라 새로 외울 게 없어요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w2.d2.bb_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 루트 Bb(3번현 1프렛)와 5도 F(2번현 3프렛). F7 모양을 한 현 위로 옮긴 자리예요.

```json
{
  "id": "m1.w2.d2.bb_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

이제 진행을 **2분음 R-5 라인**으로 걸어요. 한 마디에 루트(1·2박)와 5도(3·4박)를 반씩 나눠 밟아요. <mark>1박은 언제나 루트</mark>라는 것만 지켜요.

```json
{
  "id": "m1.w2.d2.r5_walk_4",
  "type": "tab",
  "meta": { "title": "Root-5th line — half notes over F7-Bb7-F7-C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4현.** 각 마디 R(1·2박)→5(3·4박)로 반씩 걸어요. F7-Bb7-F7-C7의 R-5 라인이에요.

```json
{
  "id": "m1.w2.d2.r5_walk_5",
  "type": "tab",
  "meta": { "title": "Root-5th line — half notes over F7-Bb7-F7-C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 루트 라인을 BPM 70으로 한 번 걸어요. **루트 착지 감각**을 손끝에 되살립니다.

**10~20분 · 두뇌 훈련**
세 코드의 R-5 손모양을 지판에서 손끝으로 확인해요. **한 현 위, 두 프렛 위** 규칙을 눈 감고도 떠올릴 수 있게요. 아래 준비 예제로 F7 R-5만 느리게 걸어봐요.

```json
{
  "id": "m1.w2.d2.r5_prep_4",
  "type": "tab",
  "meta": { "title": "Root-5th prep — F7 half notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 66, 4현.** F7의 R-5만 두 마디 반복. 반 마디씩 여유롭게 두 음을 오가요.

```json
{
  "id": "m1.w2.d2.r5_prep_5",
  "type": "tab",
  "meta": { "title": "Root-5th prep — F7 half notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 66, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

**20~40분 · 실전 (오늘의 완성물)**
위 **R-5 라인**을 **BPM 72**에서 반복해요. 한 마디에 루트 절반, 5도 절반. <mark>1박 루트와 3박 5도가 같은 크기로 고르게</mark> 울리게 해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **5도가 루트만큼 또렷한지** 들어봐요. 5도가 작게 묻히면 3박이 흐려지니, 두 음을 같은 힘으로 뜯어요.

**오늘의 완료 기준:** F7-Bb7-F7-C7 진행을 R-5 2분음 라인으로, BPM 72에서 1박 루트·3박 5도에 정확히 착지하며 4현·5현 둘 다 걸을 수 있다.

## ④ 팁 / 흔한 실수

- **5도가 작아요.** 익숙한 루트만 세게 뜯고 5도를 살살 짚기 쉬워요. 두 음이 같은 크기로 울려야 라인이 균형 잡혀요.

```json
{
  "id": "m1.w2.d2.c_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** C7의 루트 C(3번현 3프렛)와 5도 G(2번현 5프렛). 여기서도 한 현 위, 두 프렛 위예요.

```json
{
  "id": "m1.w2.d2.c_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 내려가 더 낮은 5도도 찾아볼 수 있어요.

- **2박에서 서둘러 옮겨요.** 루트는 3박까지 충분히 울려야 해요. 5도로 너무 빨리 넘어가면 마디가 흔들려요.
- **손모양을 매번 새로 찾아요.** R-5는 세 코드 모두 같은 모양이에요. 한 번 잡은 모양을 통째로 옮기세요.
- **5현 저음 B 방심.** 5도에 집중하다 B를 건드리면 저음이 새요. 안 쓰는 B는 늘 덮어 두세요.
</content>
