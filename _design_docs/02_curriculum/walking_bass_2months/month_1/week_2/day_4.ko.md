---
title: "F7→Bb7 아르페지오 워킹 — 2주차 완성물"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — F7→Bb7 아르페지오 워킹, 이번 주를 완성하기

## ① 이론/설명

2주차 마지막 날이에요. 이번 주 내내 밀도를 한 단계씩 올려 왔죠 — 루트만(온음) → 루트-5도(2분음) → 코드톤 4분음. 오늘은 그 마지막 계단을 올라, **두 코드에 걸쳐** 아르페지오를 이어 걷는 **F7→Bb7 아르페지오 워킹**을 이번 주의 완성물로 만들어요. <mark>한 코드에서 끝나던 아르페지오를 이제 다음 코드로 넘겨</mark> 진짜 워킹처럼 걸어가는 거예요.

완성 라인은 두 마디예요. **1마디 F7의 R-3-5-b7**, 그리고 **2마디 Bb7의 R-3-5-b7**을 4분음으로 밟아요. 규칙은 이번 주 내내 지켜온 그대로 — <mark>각 마디 1박은 반드시 루트에 착지</mark>해요. 재미있는 건 1마디의 마지막 b7(Eb)에서 2마디 첫 박 Bb로 넘어가는 순간이에요. 마지막 음이 다음 코드로 놓는 **다리** 역할을 해요. 이게 워킹의 핵심 감각이에요.

두 코드의 손모양은 지난주에 다 익힌 것이지만, 오늘 Bb7은 **3도 D를 2번현 개방(0프렛)**으로 잡아요. 개방현이라 왼손이 편하고 소리도 잘 울려요. F7은 4번현에서 출발하고 Bb7은 3번현에서 출발하니, **출발 현이 바뀌는 지점**만 미리 손에 익혀두면 돼요.

먼저 1마디의 주인공, **F7 코드톤**을 다시 잡아둬요.

```json
{
  "id": "m1.w2.d4.f_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 1마디 F7의 R-3-5-b7. 루트 F(4번현 1프렛)에서 출발해요.

```json
{
  "id": "m1.w2.d4.f_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

**5현**을 써도 두 코드 모두 음과 위치가 4현과 똑같아요. 저음 B는 오늘도 덮어 두고, **두 코드를 매끄럽게 잇는 것**에만 집중해요. 이 두 마디를 또박또박 완성하면 2주차가 마무리돼요.

## ② 시각 자료

이제 이번 주의 완성물을 만들어요. 먼저 2마디의 주인공 **Bb7 코드톤**을 확인하고, 그다음 <mark>두 코드를 잇는 아르페지오 워킹</mark>을 완성 라인으로 돌려요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w2.d4.bb_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 2마디 Bb7의 R-3-5-b7. 3도 D는 2번현 개방(0프렛)으로 잡아요.

```json
{
  "id": "m1.w2.d4.bb_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

이제 이번 주 완성물, **F7→Bb7 아르페지오 워킹**이에요. 두 마디에 걸쳐 R-3-5-b7을 **BPM 80** 스윙 4분음으로 밟아요. <mark>각 마디 1박은 반드시 루트에 착지</mark>해요.

```json
{
  "id": "m1.w2.d4.arp_walk_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1마디 F7, 2마디 Bb7의 코드톤을 R-3-5-b7 순서로 밟아요. 각 마디 1박은 반드시 루트에 착지.

```json
{
  "id": "m1.w2.d4.arp_walk_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 내려가 같은 워킹을 더 묵직한 저음역에서도 시험해 봐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 F7·Bb7 아르페지오를 BPM 76으로 한 번씩 걸어요. **두 코드의 감각**을 손끝에 되살립니다.

**10~20분 · 두뇌 훈련**
F7·Bb7 지판을 보며 각 코드의 R부터 b7까지 손끝으로 확인해요. 그다음 아래 준비 예제로, **반 마디씩 길게** 두 코드를 느리게 이어봐요.

```json
{
  "id": "m1.w2.d4.arp_prep_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 walk prep (long notes) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4현.** 두 코드의 R-3-5-b7을 반 마디씩 길게 이어요. F7에서 Bb7로 넘어가는 다리를 여유롭게 익혀요.

```json
{
  "id": "m1.w2.d4.arp_prep_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 walk prep (long notes) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

**20~40분 · 실전 (이번 주 완성물)**
위 **F7→Bb7 아르페지오 워킹**을 **BPM 80**에서 반복해요. 두 마디가 <mark>한 호흡으로 끊김 없이</mark> 이어지고, 각 마디 1박이 정확한 루트에 떨어지는 게 목표예요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 F7에서 Bb7로 넘어가는 **다리(1마디 b7→2마디 루트)**가 자연스러운지 들어봐요. 이번 주 도달한 BPM도 적어두면 다음 주 출발점이 돼요.

**오늘의 완료 기준:** F7→Bb7 아르페지오 워킹(R-3-5-b7)을 BPM 80 스윙 4분음으로, 각 마디 1박에 루트를 착지하며 4현·5현 둘 다 끊김 없이 걸을 수 있다. (2주차 완성!)

## ④ 팁 / 흔한 실수

- **코드가 바뀔 때 끊겨요.** 1마디 b7에서 2마디 루트로 넘어갈 때 손이 멈추기 쉬워요. 마지막 b7을 울리는 동안 왼손을 미리 Bb 루트로 옮겨 두세요.

```json
{
  "id": "m1.w2.d4.roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 두 마디의 착지점 — F(4번현 1프렛)와 Bb(3번현 1프렛)이에요. 이 두 집만 확실하면 나머지는 따라와요.

```json
{
  "id": "m1.w2.d4.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 내려가 더 낮은 루트도 잡아볼 수 있어요.

- **Bb7 개방 3도를 놓쳐요.** 2번현 개방 D는 왼손을 안 짚으니 오히려 잊기 쉬워요. 오른손 타이밍으로 또렷하게 울려요.
- **뒤로 갈수록 빨라져요.** 완성이라 신나서 2마디에서 서두르기 쉬워요. 여덟 박이 자로 잰 듯 고른 게 먼저예요.
- **한 주를 스스로 칭찬하기.** 온음에서 4분음까지 밀도를 차근차근 올린 건 큰 진전이에요. 다음 주엔 이 아르페지오에 경과음을 더해 진짜 워킹 라인으로 나아가요.
</content>
