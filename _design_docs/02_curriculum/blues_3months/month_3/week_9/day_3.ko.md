---
title: "두 집을 오가며 착지 — A7과 D7을 오가며 코드 따라 걷기"
dayKey: "m3.w9.d3"
estMinutes: 50
i18nKey: "lesson.m3.w9.d3"
---

# Day 3 — A7과 D7을 오가며 착지하기

## ① 이론/설명

이틀에 걸쳐 두 개의 집을 지었어요. A7의 집 **A**, 그리고 D7의 집 **D**. 오늘은 이 둘을 **오가며** 착지해요. <mark>코드가 A7에서 D7로 바뀔 때마다, 착지하는 집도 A에서 D로 이사하는 거예요.</mark> 한 코드 위에서는 어떤 음을 짚어도 그럭저럭 어울리지만, 코드가 바뀌는 순간에는 '맞는 집'과 '틀린 집'이 또렷하게 갈려요. 이게 바로 '코드 따라 걷기'예요. 한 코드에만 머물 땐 몰랐던 감각이, 두 코드를 오갈 때 비로소 살아나요.

두 집이 얼마나 가까운지 다시 봐요. A는 **4번 줄 7프렛**, D는 **3번 줄 7프렛** — 바로 옆 줄, 같은 프렛이에요. <mark>손을 옮길 필요 없이, 한 줄만 건너뛰면 A에서 D로 집이 바뀌어요.</mark> 그래서 코드가 바뀌어도 당황할 필요가 없어요. 겨냥하는 줄 하나만 바꾸면 되니까요. A7 마디에선 4번 줄 A로, D7 마디에선 3번 줄 D로 — 이 '한 줄 이동'이 오늘의 열쇠예요.

처음엔 코드가 바뀌기 직전에 미리 다음 집을 떠올려요. A7이 끝나갈 때쯤 '다음은 D' 하고 마음의 준비를 하는 거예요. <mark>코드가 바뀌는 소리를 듣고 반응하는 게 아니라, 미리 알고 마중 나가는 거예요.</mark> 처음엔 반 박 늦어도 괜찮아요. 늦게라도 집에 닿기만 하면, 반복하면서 타이밍은 저절로 앞당겨져요. 익숙해지면 **A→D→A**를 오가는 게 숨 쉬듯 자연스러워져요. 오늘은 두 코드를 오가며, 코드가 바뀔 때마다 착지음이 함께 이사하는 감각을 손에 새겨요.

```json
{
  "id": "m3.w9.d3.switch_landing",
  "type": "tab",
  "meta": { "title": "Switching landings: A7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1마디 A7에선 근음 A(4번 줄 7프렛)에, 2마디 D7에선 근음 D(3번 줄 7프렛)에 착지해요. 초록 두 음이 오가는 두 집이에요.

## ② 시각 자료

한 박스 안에 있는 **두 집**을 함께 봐요. 초록 A(4번 줄)와 초록 D(3번 줄)가 바로 옆에 나란히 있어요.

```json
{
  "id": "m3.w9.d3.two_homes",
  "type": "scale_shape",
  "meta": { "title": "Two homes in one box: A and D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **초록 A는 A7의 집, 초록 D는 D7의 집.** 한 줄만 건너면 집이 바뀌어요. 파란 5도 E는 두 집 모두로 가는 징검다리예요.

<mark>두 집이 옆줄에 나란히 있으니, 코드가 바뀌어도 손은 거의 제자리에서 집만 갈아타요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 72. 근음 A에서 근음 D로, 두 집 사이를 한 줄씩 오가는 가장 짧은 이동을 반복해요.

```json
{
  "id": "m3.w9.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: land on A, then on D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** A(4번 줄 7프렛)를 반박, D(3번 줄 7프렛)를 반박 — 옆줄 같은 프렛으로 집을 갈아타는 감각을 익혀요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 코드 따라 A↔D 이동)**
실전 전에, A7→D7→A7 순서로 다음 집을 미리 부르는 연습을 해요. <mark>코드가 바뀌기 한 박 전에 다음 집을 떠올리면, 착지가 늦지 않아요.</mark>

**20~40분 · 실전: 네 마디 A7·D7 오가기 (BPM 72)**
네 마디 동안 A7·D7·A7·D7이 번갈아 울려요. 각 마디의 끝을 그 코드의 집에 착지해요 — A, D, A, D.

```json
{
  "id": "m3.w9.d3.switch_four_bars",
  "type": "tab",
  "meta": { "title": "Four bars: A7 D7 A7 D7 landings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 홀수 마디는 근음 A, 짝수 마디는 근음 D에 착지해요. 리드인 음은 같아도 끝음만 바꾸면 코드가 또렷하게 따라와요.

<mark>같은 리드인, 다른 착지 — 끝음 하나만 갈아타도 두 코드가 선명하게 구분돼 들려요.</mark>

**40~50분 · 녹음**
A7·D7 백킹 위에서 네 마디 오가기를 녹음해요. 코드가 바뀔 때마다 착지음이 함께 이사하는지 귀로 확인해요.

**오늘의 완료 기준:** A7·D7이 번갈아 울리는 네 마디에서, 코드가 바뀔 때마다 착지음을 A와 D로 정확히 옮겼다.

## ④ 팁 / 흔한 실수

두 집을 오갈 때 자주 나오는 실수들이에요. 대부분 '집을 갈아타는 타이밍'에서 와요.

```json
{
  "id": "m3.w9.d3.aim_two_homes",
  "type": "scale_shape",
  "meta": { "title": "Aim: A for A7, D for D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "role": "target", "highlight": true }
  ]}
}
```
▶ **A7엔 A, D7엔 D.** 두 초록 집을 코드에 맞춰 갈아타요. 옆줄 같은 프렛이라 손은 거의 그대로예요.

- **코드가 바뀌었는데 앞 집에 그대로 착지해요.** D7이 울리는데 A에 앉으면 코드 따라 걷기가 멈춰요. 바뀌면 D로 이사해요.
- **집을 갈아타느라 손 전체를 옮겨요.** 옆 줄, 같은 프렛이에요. 겨냥하는 줄만 바꾸면 돼요.
- **착지가 한 박씩 늦어요.** 코드가 바뀌기 전에 미리 다음 집을 떠올리면 늦지 않아요.
- **속도부터 올려요.** BPM 72에서 두 집을 정확히 오갈 때까지, 빨라지는 건 나중이에요.
