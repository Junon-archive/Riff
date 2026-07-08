---
title: "싱글 노트 리프 완성 — 베이스와 맞물리다"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — 단음 라인이 베이스와 한 몸이 되다

## ① 이론/설명

이번 주 결승선이에요. 오늘은 한두 줄 싱글 노트 리프를 백킹 트랙 위에서 완성해, **베이스와 맞물리는 라인**을 만들어요.

싱글 노트 펑크의 진짜 힘은 베이스와의 관계에서 나와요. 방법은 크게 둘이에요. 하나는 **유니즌** — 베이스와 똑같은 라인을 겹쳐 쳐서 그 라인을 두 배로 두껍고 단단하게 만드는 거예요. 또 하나는 **콜앤리스폰스** — 베이스가 한 마디 치면 내 기타가 그 사이나 뒤를 채우며 대화하듯 주고받는 거죠. 오늘은 백킹의 베이스를 잘 들으며, 내 라인이 그 위에 딱 얹히는 자리를 찾아요.

여기에 어제 배운 고스트를 섞으면, 몇 개 안 되는 음으로도 꽉 찬 리프가 돼요. 라인의 또렷한 음 + 사이를 메우는 고스트 + 베이스와의 맞물림 — 이 셋이 겹치면, 기타 한 대가 리듬 섹션의 한 축을 당당히 맡게 돼요.

이번 주를 돌아보면, 여러분은 코드 없이도 그루브를 만드는 법을 배웠어요. 코드가 색이라면, 싱글 노트는 선이에요. 이제 색과 선을 다 쓸 수 있게 된 거죠. 다음 주엔 여기에 **음의 길이(스타카토)와 셔플**을 더해 표현을 한층 넓혀요. 오늘 만든 리프가 백킹의 베이스와 '착' 맞물린다면, 이번 주는 대성공이에요. 그 라인, 꼭 녹음해 두세요. 코드 없이 라인 하나로 곡을 끌 수 있게 된 여러분, 정말 멀리 왔어요. 이제 남은 건 그 라인에 표정을 입히는 일뿐이에요.

## ② 시각 자료

한두 줄 싱글 노트 리프에 고스트를 섞은 완성형이에요. 백킹 베이스와 맞물리는 자리를 찾아보세요.

**E 노트 박스(복습).** 이 음들로 리프를 짜요. 베이스와 유니즌하거나, 사이를 채워 콜앤리스폰스.

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

**예제 1 — 싱글 노트 리프 A(2마디).** E-G-A-B를 오르내리는 라인에 고스트를 섞은 기본 리프. 베이스라인처럼 또렷해요.

```json
{
  "id": "m2.w6.d4.riff_a",
  "type": "tab",
  "meta": { "title": "Single-note funk riff A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
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
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
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
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 76.** 백킹 위에서 4번 이상. 내 라인이 베이스와 겹치거나 대화하는지 느껴보세요.

**예제 2 — 싱글 노트 리프 B(2마디).** 음 배치를 달리한 응용형. 익으면 음을 바꿔 나만의 리프로.

```json
{
  "id": "m2.w6.d4.riff_b",
  "type": "tab",
  "meta": { "title": "Single-note funk riff B (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 76.** 베이스를 잘 듣고 그 위·사이를 채워 나만의 라인을 완성해 녹음하세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 이번 주 라인(5·4번 줄)과 고스트를 가볍게 복습. 뮤트가 유지되는지 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 베이스와 맞물림)**
백킹의 베이스 라인을 먼저 잘 들어요. 내 리프를 베이스와 겹칠지(유니즌), 사이를 채울지(콜앤리스폰스) 정합니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 76)**
**예제 1·2**를 백킹 위에서 친 뒤, 음을 바꿔 나만의 리프로 응용. 베이스와 맞물리는 자리를 찾는 게 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
나만의 리프를 녹음 후 체크: 한 줄만 또렷한가 / 고스트가 사이를 메우는가 / 베이스와 맞물리는가 / 잡음이 없는가.

**오늘의 완료 기준:** 한두 줄 싱글 노트 리프에 고스트를 섞어, 백킹의 베이스와 맞물리는 나만의 라인을 완성해 녹음할 수 있다. (6주차 완성!)

## ④ 팁 / 흔한 실수

- **베이스와 따로 놀기.** 베이스를 안 들으면 라인이 겉돌아요. 먼저 베이스를 듣고 그 위에 얹어요.
- **음이 너무 많음.** 싱글 노트도 아껴 쓸수록 세련돼요. 베이스와 겹치거나 대화하듯 여백을.
- **줄 잡음.** 리프가 빨라질수록 뮤트가 풀려요. 안 쓰는 줄을 끝까지 덮어요.
- **녹음 생략.** 베이스와 맞물리는지는 녹음이 제일 정직해요. 꼭 들어보세요.
