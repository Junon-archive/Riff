---
title: "5현 근음에서 마이너 + 도미넌트7 — 같은 원리, 새 배치"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 2번 줄로 마이너, 3번 줄로 7

## ① 이론/설명

지난주 6현 근음에서 배운 두 원리를 5현 근음에서 그대로 씁니다. 딱 하나, **어느 줄에서 스위치하는지**만 새로 외우면 돼요.

- **마이너 스위치 = 2번 줄.** 3도(2번 줄 5프렛, E)를 반음 내려 b3(4프렛, E♭). → **Cm**
- **도미넌트7 스위치 = 3번 줄.** 옥타브 근음(3번 줄 5프렛, C)을 두 칸 내려 b7(3프렛, B♭). → **C7**

6현 폼에서는 3도가 3번 줄, 7도가 4번 줄이었죠. 5현 폼(A 폼)에서는 **3도가 2번 줄, 7도가 3번 줄**로 이사했어요. 근음이 바뀌면 스위치 위치도 바뀐다 — 이걸 몸으로 확인하는 게 오늘의 핵심이에요. 원리(3도 내리면 마이너, b7 더하면 7)는 지난주와 100% 똑같아요.

## ② 시각 자료

먼저 **C 마이너(A 폼)** — 2번 줄 3도만 5→4프렛으로 내렸어요(초록 = b3).

```json
{
  "id": "m1.w2.d2.cm_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

이번엔 **C7(A 폼)** — 3번 줄 옥타브 근음을 5→3프렛으로 내려 b7을 얻었어요(초록 = b7).

```json
{
  "id": "m1.w2.d2.c7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**예제 1 — 3 → b3 마이너 스위치 라인(2번 줄).** 2번 줄에서 5프렛(3)과 4프렛(b3)을 나란히.

```json
{
  "id": "m1.w2.d2.minor_switch_line",
  "type": "tab",
  "meta": { "title": "3 to b3 on 2nd string — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72.** "루트 → 3도 → 단3도 → 루트." 2번 줄 한 칸이 밝음을 슬픔으로. 4번 반복.

**예제 2 — 메이저 → 7 스위치 컴핑(3번 줄).** 1마디 C, 2마디 C7. 코드 전체를 스트로크하되 움직이는 건 **3번 줄(5→3프렛)뿐**.

```json
{
  "id": "m1.w2.d2.dom7_switch_comp",
  "type": "tab",
  "meta": { "title": "C to C7 switch comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 3, "fret": 3, "duration": "eighth", "label": "b7", "technique": "palm_mute", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 78, 4번 반복.** 1마디 안정된 C → 2마디 근질거리는 C7. 3번 줄 손가락만 5→3프렛으로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
C → Cm(2번 줄 5↔4), C → C7(3번 줄 5↔3)을 각각 4박씩 번갈아. 6번 줄 뮤트 유지.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 2번 줄 b3 · 3번 줄 b7)**
**예제 1·2**로 두 스위치의 위치를 확인. "마이너는 2번 줄, 7은 3번 줄." 눈 감고 각각 짚으면 통과.

**20~40분 · 실전 반주 (예제 2 컴핑 / 75~85 BPM)**
**예제 2를 BPM 78에서 4번 반복**(C↔C7). 이어서 Cm 스위치(예제 1)도 백킹 위에 얹어 C↔Cm↔C7을 자유롭게. 근음만 5번 줄에서 옮겨 다른 키로도.

**40~50분 · 녹음/셀프 피드백 (권장)**
C↔Cm↔C7 30초 녹음. 체크: 스위치 순간 다른 줄이 죽지 않는지, 6번 줄이 새지 않는지.

**오늘의 완료 기준:** 5현 근음 위에서 2번 줄로 마이너, 3번 줄로 7을 눈 감고 스위치한다.

## ④ 팁 / 흔한 실수

- **6현 폼의 스위치 위치를 그대로 쓰기.** 5현에서는 3도가 2번 줄, 7도가 3번 줄이에요. 근음 줄이 바뀌면 지도가 바뀝니다.
- **b7 짚을 때 3도까지 건드리기.** C7은 3번 줄만 내려요. 2번 줄 3도는 그대로.
- **b3가 안 울림.** 2번 줄 4프렛이 죽으면 옆 손가락이 덮은 거예요. 손끝 세우기.
- **A 폼 피로.** 손가락이 아프면 4줄(5·4·3·2)만 확실히. 무리하지 마세요.
