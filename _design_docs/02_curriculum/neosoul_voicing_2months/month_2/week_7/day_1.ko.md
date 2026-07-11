---
title: "16비트 컴핑 그리드 + 뮤트 커팅"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 16비트 컴핑 그리드 + 뮤트 커팅

## ① 이론/설명

7주차 첫날이에요. 이번 주 내내 만들 건 **뒤로 눕는 16비트 컴핑**이에요. 오늘은 그 바탕이 되는 **16비트 그리드**와 **뮤트 커팅("칙")**을 익혀요. <mark>코드를 '치고-쉬고'가 아니라, 스탭 사이를 **음정 없는 커팅**으로 촘촘히 채우는 게 핵심이에요.</mark>

시그니처는 **Dm9** 한 코드예요. 5번 줄 **5프렛(R=D)** 을 뿌리로 **b3(F)·b7(C)·9(E)** 를 얹어요. <mark>이 네 음이 **Dm9** 의 물든 색이에요.</mark> 스탭은 짧게 끊고, 그 사이 빈칸엔 왼손 힘을 살짝 풀어 **뮤트 커팅**으로 "칙" 소리를 넣어요.

**뮤트 커팅**은 음정이 없어요. 줄을 누르지 않고 **살짝 덮기만** 해서 피크가 스치면 "칙" 하는 **고스트**성 타격이 나요. <mark>스탭(코드)과 커팅(칙)이 번갈아 나오면 16비트 그리드가 꽉 차 그루브가 생겨요.</mark> 먼저 **Dm9** 손 모양부터 눈에 익혀요.

```json
{
  "id": "m2.w7.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 comping grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ 5번 줄 5프렛(R)에 b3·b7·9를 얹은 Dm9 컴핑 그립이에요.

## ② 시각 자료

이제 **16비트 컴핑 그리드**를 봐요. **Dm9 스탭**과 **뮤트 커팅("칙")** 이 촘촘히 엇갈려요. <mark>스탭은 또렷하게, 커팅은 "칙" 하고 짧게 — 이 대비가 그루브의 심장이에요.</mark>

```json
{
  "id": "m2.w7.d1.cutting_grid",
  "type": "tab",
  "meta": { "title": "16th comping grid with muted cutting", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** Dm9 스탭과 뮤트 커팅("칙")이 16비트로 촘촘히 엇갈려요. 스탭은 짧게 끊고, 커팅은 힘을 풀어 스쳐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 **Dm9** 스탭만 또박또박 쳐요. 아직 커팅은 넣지 말고 코드 소리부터 깨끗하게 확인해요. <mark>네 음이 한 번에 울리는지 먼저 귀로 들어요.</mark>

**10~20분 · 두뇌 훈련 (커팅 느리게)**
이제 스탭 사이에 **뮤트 커팅**을 하나씩 끼워요. 왼손 힘을 살짝만 풀어 "칙" 소리를 만들어요. 아래 느린 그리드로 손을 익혀요.

```json
{
  "id": "m2.w7.d1.cutting_slow",
  "type": "tab",
  "meta": { "title": "Slow cutting grid", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** 스탭 → 커팅 → 커팅 → 스탭 순서로 천천히. 커팅에서 왼손 힘을 푸는 감각을 익혀요.

**20~40분 · 실전 커팅 그리드 (BPM 72)**
위 16비트 그리드를 반복해요. <mark>스탭과 커팅이 끊김 없이 굴러가면 커팅 그루브가 살아나요.</mark> 급하지 않게, 손목으로 16비트를 계속 저어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음해 들어요. 커팅이 "칙" 하고 살아 있는지, 스탭이 뭉개지지 않는지 체크해요.

**오늘의 완료 기준:** BPM 72에서 Dm9 스탭과 뮤트 커팅을 16비트로 엇갈려 커팅 그루브를 끊김 없이 굴릴 수 있다.

## ④ 팁 / 흔한 실수

커팅 그리드에서 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w7.d1.cut_check",
  "type": "tab",
  "meta": { "title": "Stab and cut check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```
▶ 스탭(코드)과 커팅(칙)을 한 박씩 번갈아 크게 느껴봐요.

- **커팅이 안 들려요.** 왼손을 완전히 떼지 말고 줄에 살짝 얹은 채로 피크를 스쳐요.
- **스탭이 뭉개져요.** 네 음을 동시에 짧게 끊고, 바로 힘을 풀어 다음 커팅을 준비해요.
- **16비트가 밀려요.** 손목 젓기를 멈추지 말고 커팅 자리에서도 계속 스트로크를 저어요.
- **속도부터 올려요.** BPM 60으로 낮춰 스탭·커팅 대비부터 또렷하게 만들어요.
