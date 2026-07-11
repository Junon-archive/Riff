---
title: "슬라이드 — 음에 미끄러져 들어가고 나온다"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 슬라이드로 음에 표정을 입힌다

## ① 이론/설명

벤딩으로 밀고 비브라토로 떨었으니, 오늘은 음과 음 사이를 '미끄러져' 이어 봐요. **슬라이드(slide)**는 한 프렛을 짚은 채 손을 떼지 않고 다른 프렛으로 밀어, 두 음을 **하나의 선**으로 잇는 기법이에요. <mark>슬라이드는 말할 때 두 단어를 뚝 끊지 않고 부드럽게 이어 붙이는 것과 같아요.</mark> 음을 그냥 콕콕 짚으면 딱딱하지만, 미끄러져 들어가면 음에 '표정'이 붙어요. 블루스가 유난히 말하듯 들리는 이유의 절반은 이 슬라이드에 있어요.

슬라이드는 방향에 따라 둘로 나뉘어요. 낮은 프렛에서 목표음으로 밀어 올리며 **미끄러져 들어가기**, 그리고 목표음에서 손을 떼지 않고 아래로 흘려보내는 **미끄러져 나오기**예요. <mark>들어갈 땐 목표음에 정확히 멈추고, 나올 땐 힘을 스르륵 풀어요.</mark> 핵심은 미끄러지는 내내 손가락을 줄에서 떼지 않는 거예요. 떼면 소리가 끊겨서 슬라이드가 아니라 그냥 두 음이 돼요.

오늘의 무대는 박스1의 **3번 줄**이에요. b3(5프렛)에서 4도(7프렛)로 미끄러져 올라가고, 다시 내려와요. 슬라이드로 도착하는 음은 초록으로 표시해 뒀어요 — <mark>그 음에 정확히 멈추는 게 슬라이드의 전부예요.</mark> 또 하나, 슬라이드는 벤딩·비브라토와 자연스럽게 이어져요. 미끄러져 들어간 음을 그대로 밀어 벤딩하거나, 착지한 음을 비브라토로 떨 수도 있어요. 내일 이 세 도구를 하나로 합칠 거니까, 오늘 슬라이드를 **깨끗하게** 다듬어 둬요.

```json
{
  "id": "m2.w6.d3.slide_intro",
  "type": "tab",
  "meta": { "title": "Slide into and out of a note (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "slide", "slideToFret": 5 }
    ]}
  ]}
}
```
▶ **BPM 60.** 3번 줄 b3(5프렛)에서 4도(7프렛)로 미끄러져 올라갔다가, 다시 4도에서 b3로 미끄러져 내려와요. 두 음이 하나의 선으로 이어지는지 들어 보세요.

## ② 시각 자료

오늘 미끄러질 길을 지판에서 볼게요. **3번 줄 5프렛의 b3**에서 시작해 **7프렛의 4도**까지 미끄러져 올라가요. 도착점인 4도를 초록으로 표시해 뒀어요.

```json
{
  "id": "m2.w6.d3.slide_route",
  "type": "scale_shape",
  "meta": { "title": "Slide route on the G string (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" }
  ]}
}
```
▶ **같은 손가락으로 미끄러지기.** 1번 손가락으로 5프렛을 짚고, 떼지 않은 채 7프렛까지 밀어 올려요.

<mark>도착 프렛에 정확히 멈춰야 음정이 맞아요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 슬라이드 없이 **3번 줄 5프렛과 7프렛**을 번갈아 짚으며 두 음의 거리를 손에 익혀요.

```json
{
  "id": "m2.w6.d3.warmup",
  "type": "tab",
  "meta": { "title": "G string b3-4 warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60.** b3와 4도를 또박또박 짚어, 미끄러질 두 지점을 먼저 알아 둬요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 도착 프렛에 정확히 멈추기)**
미끄러지기 전에, 도착할 프렛을 눈과 귀로 정해요. **7프렛에서 딱 멈춘다**고 미리 정하는 거예요. <mark>도착점을 정하지 않으면 슬라이드가 목표를 지나치거나 못 미쳐요.</mark>

**20~40분 · 실전 슬라이드 (BPM 60)**
먼저 근음으로 미끄러져 들어가요. b7(5프렛)에서 근음(7프렛)까지 밀어 올린 뒤 비브라토로 살려요.

```json
{
  "id": "m2.w6.d3.slide_into_root",
  "type": "tab",
  "meta": { "title": "Slide into the root from below", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **근음으로 미끄러져 들어가기.** 5프렛에서 7프렛 근음까지 밀고, 그대로 손목으로 떨어요.

이번엔 들어가고 나오기를 한 프레이즈로. 미끄러져 들어간 뒤, 마지막엔 미끄러져 빠져나와요.

```json
{
  "id": "m2.w6.d3.slide_lick",
  "type": "tab",
  "meta": { "title": "Slide in, slide out — a talking phrase", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "slide", "slideToFret": 5 }
    ]}
  ]}
}
```
▶ **들어가고 나오기.** b3에서 4도로 미끄러져 들어가 5도를 치고, 끝음은 아래로 흘려보내요.

<mark>미끄러지는 내내 손가락을 떼지 않아야 소리가 하나로 이어져요.</mark>

**40~50분 · 녹음**
슬라이드로 들어가고 나오는 프레이즈를 녹음해요. 미끄러지는 소리가 끊기지 않고 하나로 이어지는지 들어 봐요.

**오늘의 완료 기준:** 낮은 프렛에서 목표음까지 미끄러져 들어가 정확히 멈췄고, 손가락을 떼지 않고 슬라이드로 빠져나올 수 있다.

## ④ 팁 / 흔한 실수

슬라이드에서 흔한 실수들이에요. 미끄러지는 '과정'보다 도착하는 '지점'이 더 중요해요.

```json
{
  "id": "m2.w6.d3.dont_lift",
  "type": "scale_shape",
  "meta": { "title": "Keep the finger pressed through the slide", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "target" }
  ]}
}
```
▶ **같은 손가락, 끝까지 눌러서.** 5프렛에서 7프렛(초록)까지 힘을 유지한 채 미끄러져요.

- **중간에 손가락을 떼요.** 소리가 끊겨 슬라이드가 사라져요. 도착할 때까지 줄을 꾹 눌러요.
- **도착 프렛을 지나쳐요.** 손이 미끄러지는 데 취해 목표를 넘어가면 음정이 틀려요. 목표에서 딱 멈춰요.
- **너무 세게 눌러 미끄러져요.** 줄이 긁히는 잡음이 커져요. 미끄러질 만큼만, 힘을 살짝 빼요.
- **들어가기만 연습해요.** 나오는 슬라이드도 표정이에요. 프레이즈 끝을 아래로 흘려보내는 것도 함께 익혀요.
