---
title: "m7 그리고 Maj7 등장 — 3번 줄에서 b7과 7의 반음 대결"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 딱 반음, 7과 Maj7이 갈린다

## ① 이론/설명

어제 두 스위치(2번 줄 3도, 3번 줄 7도)를 배웠죠. 오늘은 먼저 둘 다 내려 **Cm7**(b3 + b7)을 완성하고, 이번 주의 새 손님 **<mark>Maj7</mark>**을 초대합니다. 이름이 비슷해서 헷갈릴 것 같죠? 놀랍게도 자리는 딱 한 칸 차이예요.

핵심은 전부 **<mark>3번 줄</mark>**에 있어요. 이 줄이 7도의 '삼거리'거든요:

- **<mark>3번 줄 5프렛 = R</mark>**(옥타브 근음) → 그냥 메이저/마이너
- **<mark>3번 줄 4프렛 = 7</mark>**(장7도) → **Maj7**
- **<mark>3번 줄 3프렛 = b7</mark>**(단7도) → **도미넌트 7**

```json
{
  "id": "m1.w2.d3.cmaj7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

즉 **b7(3프렛)과 Maj7의 7(4프렛)은 딱 한 프렛, 반음 차이**예요. 그런데 이 반 칸이 완전히 다른 감정을 만들어요. b7(도미넌트)은 "빨리 해결되고 싶어" 하는 <mark>안달난 긴장</mark>이고, Maj7의 7은 "떠 있는, <mark>몽환적이고 세련된</mark>" 미완이에요. 시티팝의 아련함, 재즈 발라드의 그 아른한 색 — 전부 이 Maj7 하나에서 나와요. 반음 차이가 처음엔 미묘하게 들려도 괜찮아요. 오늘은 이 둘을 3번 줄에서 나란히 짚어 보며, 그 반음이 만드는 감정 차이를 귀로 확실히 구분해 둡니다.

## ② 시각 자료

먼저 두 스위치를 다 내린 **Cm7(A 폼)** — <mark>초록이 b3와 b7이에요</mark>.

```json
{
  "id": "m1.w2.d3.cm7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

오늘의 새 코드 **Cmaj7(A 폼)** — 3번 줄이 b7(3프렛)이 아니라 **<mark>7(4프렛)</mark>**. 딱 한 칸 위예요(초록 = 7).

```json
{
  "id": "m1.w2.d3.cmaj7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**예제 1 — b7 vs 7 반음 대조 라인(3번 줄).** 3번 줄에서 3프렛(b7)과 4프렛(7)을 나란히. 이 한 칸이 만드는 색 차이를 귀에 새기세요.

```json
{
  "id": "m1.w2.d3.b7_vs_7_line",
  "type": "tab",
  "meta": { "title": "b7 vs 7 on 3rd string — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72.** "루트 → b7(긴장) → 7(몽환) → 루트." 3프렛에서 4프렛으로 한 칸 올라갈 때 소리가 '해결 욕구'에서 '떠 있는 세련됨'으로 바뀌는 걸 잡으세요. 4번 반복.

**예제 2 — C7 → Cmaj7 스위치 컴핑(3번 줄).** 1마디 C7, 2마디 Cmaj7. 코드 전체를 스트로크하되 움직이는 건 **3번 줄 한 손가락(3↔4프렛)뿐**.

```json
{
  "id": "m1.w2.d3.dom7_maj7_comp",
  "type": "tab",
  "meta": { "title": "C7 to Cmaj7 switch comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80, 4번 반복.** 1마디 근질거리는 C7 → 2마디 몽환적인 Cmaj7. 3번 줄 한 손가락만 3↔4프렛. 이 한 칸이 블루스와 시티팝을 가릅니다.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
3번 줄만 5(R)→4(Maj7)→3(b7)으로 오르내리며 <mark>세 갈래를 손에 익혀요</mark>. 나머지 손가락은 고정.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = b7 vs 7)**
**예제 1**로 b7(3프렛)과 7(4프렛)을 번갈아 짚으며 소리를 비교. 눈 감고 "7! b7!" 지시대로 <mark>3번 줄에서 바로 짚으면 통과</mark>.

**20~40분 · 실전 반주 (예제 2 컴핑 / 75~85 BPM)**
**예제 2를 BPM 80에서 4번 반복**(C7↔Cmaj7). 이어서 Cm7까지 넣어 <mark>Cm7 → C7 → Cmaj7을 순환해 보세요</mark>. 근음만 5번 줄에서 옮겨 다른 키로도.

**40~50분 · 녹음/셀프 피드백 (권장)**
b7 ↔ 7 전환 30초 녹음. 체크: 두 코드가 **<mark>감정적으로 다르게</mark>** 들리는지, 3번 줄 음이 또렷한지.

**오늘의 완료 기준:** 3번 줄에서 R·7·b7 세 갈래를 눈 감고 짚고, 7과 Maj7의 색 차이를 귀로 구분한다.

## ④ 팁 / 흔한 실수

- **b7과 7을 같은 소리로 듣기.** 반음이지만 기능이 정반대예요. b7=해결 욕구, 7=떠 있는 안정. 여러 번 번갈아 들어 귀를 트세요.
- **Maj7을 그냥 메이저로 착각.** Maj7의 7(4프렛)은 근음(5프렛) 바로 한 칸 아래예요. 근음과 반음으로 부딪히며 그 '아련함'이 나와요.
- **손 전체를 바꾸기.** C7↔Cmaj7은 3번 줄 한 칸뿐. 나머지 붙여 두세요.
- **6번 줄 뮤트 방심.** A 폼은 언제나 6번 줄 죽이기.
