---
title: "두 줄을 넘나드는 라인 — 뮤트는 그대로"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 줄을 바꿔도 침묵은 유지된다

## ① 이론/설명

어제 한 줄로 라인을 그렸죠. 오늘은 **5번과 4번, 두 줄을 오가는** 라인이에요. 두 줄이 열리면 라인이 훨씬 넓게 노래해요.

핵심 난관은 이거예요. 라인이 5번 줄에서 4번 줄로 넘어갈 때, **방금 친 5번 줄은 재빨리 죽이고 4번 줄만 울려야** 해요. 안 그러면 두 음이 겹쳐 지저분해지죠. 손가락이 새 줄로 옮겨가면서 동시에 방금 친 줄을 정리하는 감각 — 이게 싱글 노트 라인의 진짜 기술이에요. 왼손은 늘 '지금 울릴 한 줄'만 열어두고 나머진 다 덮는 거죠.

오늘의 재료는 E 펜타토닉 박스의 5·4번 줄 음들이에요(어제 노트 맵). 5번 줄의 R·b3에 4번 줄의 4도·5도가 더해지면, E-G-A-B처럼 오르내리는 라인을 만들 수 있어요. 베이스라인이나 리프처럼 들리는, 딱 펑크스러운 라인이죠.

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

줄을 넘나들며 뮤트까지 챙기려니 처음엔 손이 바빠요. 특히 줄을 바꾼 직후에 이전 줄이 '웅' 하고 남아 울리기 쉬워요. 당연해요. 오늘은 라인이 느려도 좋으니, 줄을 바꿀 때마다 뒤가 깔끔이 정리되는지에 집중하세요. 이 감각이 붙으면 여러분의 라인은 두 줄, 세 줄로 자유롭게 넓어져요. 한 줄에 갇혀 있던 라인이 넥 위를 넘나들며 노래하기 시작하는 거죠. 오늘 두 줄만 열려도, 표현할 수 있는 멜로디가 훨씬 많아져요. 두 줄이 곧 세 줄, 네 줄로 이어질 든든한 발판이에요.

## ② 시각 자료

5·4번 두 줄을 오가는 라인이에요. 줄을 바꿀 때 이전 줄을 죽이는 게 핵심. 노트 맵으로 음 위치를 다시 확인해요.

**E 노트 박스(복습).** 오늘은 5번 줄(R·b3)에 4번 줄(4도·5도)을 더해요. 줄을 바꿔도 뮤트는 유지.

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**예제 1 — 두 줄 라인(1마디).** E(5번)→G(5번)→A(4번)→B(4번)로 올라갔다 내려와요. 줄이 바뀌는 순간 뒤를 정리.

```json
{
  "id": "m2.w6.d2.cross_1bar",
  "type": "tab",
  "meta": { "title": "Two-string line, 5th<->4th (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** 줄을 바꿀 때 이전 줄이 안 남는지 확인하며 4번. 라인이 또렷이 이어지게.

**예제 2 — 크로스 리프(2마디).** 두 줄을 넘나드는 리프. 베이스라인처럼 들리는 펑크 라인이에요.

```json
{
  "id": "m2.w6.d2.cross_2bar",
  "type": "tab",
  "meta": { "title": "Crossing-string riff (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** 익으면 음을 바꿔 나만의 두 줄 리프로. 뮤트 유지가 관건.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 5번↔4번을 번갈아 튕기며, 줄을 바꿀 때 이전 줄이 죽는지 점검. 나머지 줄 뮤트도 유지.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 줄 전환 + 뮤트)**
노트 맵으로 5·4번 음을 각인. 손가락이 새 줄로 옮겨가며 이전 줄을 덮는 동작을 천천히 반복.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 72)**
**예제 1**(두 줄 라인)을 BPM 72에서 4번 → **예제 2**(크로스 리프)로. 줄 바꿈에서 뒤가 깔끔한 게 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 줄 바꿀 때 이전 음이 안 남는가 / 라인이 또렷이 이어지는가 / 나머지 줄 잡음이 없는가.

**오늘의 완료 기준:** 5번↔4번 두 줄을 오가는 라인을, 줄을 바꿔도 뮤트를 유지하며 또렷이 연주할 수 있다.

## ④ 팁 / 흔한 실수

- **이전 줄이 남아 울림.** 줄을 바꿀 때 이전 줄을 손가락으로 재빨리 덮으세요. 겹치면 지저분.
- **라인이 끊김.** 줄 바꿈에서 오른손이 멈칫해요. 흔들림은 계속, 조준만 옮겨요.
- **음이 안 또렷함.** 새 줄을 정확히 못 조준했어요. 한 줄씩 또렷이.
- **너무 빠르게.** 줄 전환이 정확해야 라인이 살아요. 느리게, 뒤 정리 확실히.
