---
title: "두 음에 스미어 — 3도·6도 더블스탑을 번지게 하기"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 두 음에 스미어 (더블스탑)

## ① 이론/설명

어제는 한 음으로 스미어를 냈어요. 오늘은 두 음을 함께 잡는 **더블스탑(double-stop)** 에 스미어를 얹어요. <mark>한 음은 가만히 눌러 두고, 다른 한 음만 **b3→3**으로 밀어 올리면 두 음이 함께 번져요.</mark>

먼저 **3도 더블스탑**이에요. **4번 줄**의 **b3(F)** 와 **3번 줄**의 **5도(A)** 를 함께 잡아요. 두 음은 **3도** 사이예요. **5도**는 그대로 두고 **4번 줄**만 **해머온**으로 F#으로 올려요. <mark>낮은 음이 번지는 동안 위 음은 닻처럼 자리를 지켜요.</mark>

오늘 목표는 **더블스탑 스미어** 하나예요. **BPM 72**로 천천히, 두 음이 동시에 울리다가 한 음만 반음 올라가는 소리를 들어요. <mark>두 음의 균형이 살면 네오소울 특유의 두툼한 색이 나요.</mark> 손 모양부터 눈에 익혀요.

```json
{
  "id": "m2.w5.d2.third_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "3rd double-stop with smear", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **3도 더블스탑.** 4번 줄 3프렛(b3)과 3번 줄 2프렛(5)을 함께, 4번 줄만 초록 4프렛(3도)으로 해머온해요.

## ② 시각 자료

이번엔 **6도 더블스탑**이에요. **4번 줄**의 **b3(F)** 와 **2번 줄**의 **루트(D)** 를 함께 잡고, 가운데 **3번 줄**은 건너뛰어요. <mark>줄을 하나 건너뛴 6도는 소리가 확 넓어져 네오소울에서 특히 사랑받아요.</mark>

```json
{
  "id": "m2.w5.d2.sixth_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "6th double-stop with smear", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 3, "label": "R", "role": "chord_tone" }
  ]}
}
```
▶ **6도 더블스탑.** 4번 줄 3프렛(b3)과 2번 줄 3프렛(루트)을 함께, 3번 줄은 뮤트, 4번 줄만 초록 4프렛(3도)으로 해머온해요.

이제 두 손 모양을 소리로 이어봐요. **3도**로 한 번, **6도**로 한 번 스미어해요. <mark>두 마디 모두 아래 두 음은 함께 울리고, 한 음만 초록 3도로 번져요.</mark>

```json
{
  "id": "m2.w5.d2.doublestop_smear",
  "type": "tab",
  "meta": { "title": "Double-stop smear (3rd & 6th)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 2, "fret": 3, "duration": "half", "label": "R", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 72.** 1마디는 **3도** 더블스탑, 2마디는 **6도** 더블스탑. 위 음은 두고 아래 음만 반음 번지게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 두 손 모양을 소리 없이 잡아요. **3도**는 4·3번 줄, **6도**는 4·2번 줄(3번 줄 뮤트)이에요. <mark>먼저 두 음이 깨끗하게 동시에 울리는지부터 확인해요.</mark>

**10~20분 · 두뇌 훈련 (해머 스미어 느리게)**
아래 음은 누른 채 두고, **한 손가락**만 **해머온**으로 반음 올려요. 위 음이 딸려 흔들리면 힘이 새는 거예요. 각 손가락 힘을 따로 느껴봐요.

**20~40분 · 실전 더블스탑 스미어 (BPM 72)**
아래 두 마디를 반복해요. **3도**와 **6도**를 번갈아 스미어해요. <mark>매 마디 위 음이 흔들리지 않는지만 지켜봐요.</mark>

```json
{
  "id": "m2.w5.d2.doublestop_loop",
  "type": "tab",
  "meta": { "title": "Double-stop smear loop x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 2, "fret": 3, "duration": "half", "label": "R", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 72.** 3도 → 6도 더블스탑 스미어를 두 바퀴 돌아요. 위 음은 닻, 아래 음만 번지게 해요.

**40~50분 · 녹음/셀프 피드백 (권장)**
두 더블스탑 스미어를 녹음해 들어요. 두 음이 함께 울리는지, 위 음이 흔들리지 않는지 확인해요.

**오늘의 완료 기준:** BPM 72에서 3도·6도 더블스탑 스미어를 각각 한 번, 위 음이 흔들리지 않게 낼 수 있다.

## ④ 팁 / 흔한 실수

더블스탑 스미어에서 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w5.d2.doublestop_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Double-stop landing map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "R", "role": "chord_tone" }
  ]}
}
```
▶ 초록 점(4번 줄 3도)이 두 더블스탑이 함께 착지하는 자리예요. 3번 줄 5도와 2번 줄 루트가 함께 울리는 닻이에요.

- **위 음이 딸려 올라가요.** 아래 음을 누른 손가락은 자리를 지키고, 해머온 손가락만 움직여요.
- **6도에서 3번 줄이 울려요.** 건너뛰는 3번 줄은 살짝 닿아 뮤트해요.
- **두 음이 따로 울려요.** 두 음을 정확히 같은 순간에 피킹해야 더블스탑이 하나로 들려요.
- **속도부터 올려요.** BPM 60으로 낮춰 두 음의 균형부터 만들어요.
