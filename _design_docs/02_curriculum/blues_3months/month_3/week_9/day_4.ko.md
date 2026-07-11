---
title: "코드 따라가기 완성 — A7→D7, 집을 옮기며 노래하다 (9주차 완성)"
dayKey: "m3.w9.d4"
estMinutes: 50
i18nKey: "lesson.m3.w9.d4"
---

# Day 4 — 코드를 따라 집을 옮기며 착지를 완성하다

## ① 이론/설명

9주차의 마지막 날이에요. 사흘 동안 우리는 A7의 집 **A**, D7의 집 **D**, 그리고 둘을 오가는 법까지 익혔어요. 오늘은 이 모두를 하나로 합쳐, <mark>코드가 바뀔 때마다 집을 옮기며 착지하는 '코드 따라가기'를 완성해요.</mark> 화려한 속주도, 어려운 스케일도 필요 없어요. 코드가 바뀔 때 착지음 하나만 옮겨도, 솔로는 이미 코드를 따라 노래하고 있어요.

오늘의 완성물은 **두 마디**예요. 1마디는 **A7** 위에서 근음 A에 착지하고, 2마디는 **D7** 위에서 근음 D에 착지해요. 두 마디의 앞부분(리드인)은 똑같아요 — 같은 b3, 같은 5도를 지나요. <mark>바뀌는 건 오직 마지막 착지음 하나뿐인데, 코드가 바뀐 게 선명하게 들려요.</mark> 이게 '코드 따라가기'의 핵심이에요. 손은 거의 제자리, 겨냥하는 집만 바뀌는 거예요.

이 두 마디가 오늘의, 그리고 이번 주의 결승선이에요. BPM 75로 천천히, 1마디 끝에서 **A**에 앉고, 2마디 끝에서 **D**에 앉아요. <mark>코드가 바뀌면 집도 바뀐다 — 이 한 문장이 손에 새겨지면 9주차는 완성이에요.</mark> 전 지판을 도는 다섯 박스나 모드 같은 '시스템'은 지금 배우지 않아요. 그건 다음 여정인 solo_scale에서 만나요. 지금은 딱 두 코드, 딱 두 집이면 충분해요. 이 작은 완성이 앞으로 만날 모든 코드 진행의 든든한 출발점이 돼요. 오늘 우리는 박스1 안에서, 코드에 반응하는 귀와 손을 완성하는 거예요.

```json
{
  "id": "m3.w9.d4.two_homes_recap",
  "type": "tab",
  "meta": { "title": "Recap: A over A7, D over D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 75.** 1마디는 5도 E를 지나 근음 A에, 2마디는 5도 E를 지나 근음 D에 착지해요. 리드인은 같고 착지음만 A→D로 바뀌어요.

## ② 시각 자료

코드를 따라 옮겨가는 **두 집**을 함께 봐요. 초록 A(4번 줄 7프렛)와 초록 D(3번 줄 7프렛)가 옆줄에 나란히 있어요.

```json
{
  "id": "m3.w9.d4.follow_map",
  "type": "scale_shape",
  "meta": { "title": "Following the chords: A then D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **A7이면 A, D7이면 D.** 리드인(b3·5도)은 두 마디 공통이고, 끝에서 겨냥하는 초록 집만 갈아타요.

<mark>이 두 초록 자리를 코드에 맞춰 오가는 것, 그게 9주차에 완성한 '코드 따라가기'예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 75. A에서 D로, 두 집을 옆줄 같은 프렛으로 갈아타는 이동을 반복해요.

```json
{
  "id": "m3.w9.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: move home from A to D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 75.** A(4번 줄 7프렛)를 반박, D(3번 줄 7프렛)를 반박 — 코드가 바뀔 때 집을 옮기는 감각을 데워요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 코드 따라 집 옮기기)**
실전 전에, A7→D7 순서로 착지음이 A에서 D로 이사하는 그림을 머릿속에 그려요. <mark>코드가 바뀌기 전에 다음 집을 미리 부르면, 착지가 자연스럽게 이어져요.</mark>

**20~40분 · 실전: 코드 따라 착지 (A7→D7, BPM 75)**
드디어 9주차의 완성물이에요. 1마디 A7에선 근음 A에, 2마디 D7에선 근음 D에 착지해요. 같은 박스 안에서 착지음만 바꿔도 '코드를 따라가는' 소리가 나요.

```json
{
  "id": "m3.w9.d4.chord_targeting",
  "type": "tab",
  "meta": { "title": "Targeting chord roots (A7 to D7)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 75.** 1마디 끝을 **A(4번줄 7프렛)**에 착지 — A7의 집. 2마디는 **D(3번줄 7프렛)**에 착지 — D7의 집. 같은 박스 안에서 착지음만 바꿔도 '코드를 따라가는' 소리가 나요.

<mark>코드가 바뀌면 집도 바뀐다 — 두 마디 안에서 이 감각이 완성되면, 이제 어떤 블루스 위에서도 코드를 따라갈 수 있어요.</mark>

**40~50분 · 녹음 (9주차 졸업 미션!)**
A7→D7 백킹 위에서 코드 따라 착지를 녹음해요. 코드가 바뀔 때 착지음이 A에서 D로 정확히 이사하는지 하나의 파일에 담아요.

**오늘의 완료 기준:** A7→D7이 바뀌는 두 마디에서, 1마디는 근음 A에 2마디는 근음 D에 착지해 코드 따라가기를 완성하고 녹음했다. — 이번 주 결과물: A7→D7 코드 따라 착지 완주·녹음 (9주차 완성!)

## ④ 팁 / 흔한 실수

코드 따라가기를 완성할 때 자주 나오는 실수들이에요. 대부분 '집을 옮기는 순간'에서 와요.

```json
{
  "id": "m3.w9.d4.home_moves",
  "type": "scale_shape",
  "meta": { "title": "When the chord changes, home moves", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```
▶ **코드가 바뀌면 집이 옮겨간다.** A7의 초록 A에서 D7의 초록 D로, 착지집이 코드를 따라 이사해요.

- **두 마디 다 A에 착지해요.** 2마디는 D7이에요. 끝음을 D로 옮겨야 코드가 바뀐 게 들려요.
- **리드인까지 바꾸려 애써요.** 앞부분은 두 마디가 똑같아요. 바뀌는 건 마지막 착지음 하나뿐이에요.
- **착지를 약박에 놓아요.** 강박에 A와 D가 앉아야 두 코드가 또렷하게 구분돼요.
- **시스템을 지금 욕심내요.** 전 지판 5박스·모드는 다음 여정 solo_scale의 몫이에요. 오늘은 박스1 착지로 충분해요.
