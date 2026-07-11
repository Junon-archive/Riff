---
title: "코드에 맞춰 3도 선택 — A7 위에서 C#는 코드톤"
dayKey: "m3.w10.d3"
estMinutes: 50
i18nKey: "lesson.m3.w10.d3"
---

# Day 3 — A7 위에서 메이저 3도(C#)를 골라 코드톤으로 착지하다

## ① 이론/설명

어제 그 **메이저 3도 C#**가 왜 그렇게 잘 어울렸는지, 오늘 그 이유를 알아봐요. 우리가 연주하는 **A7 코드**는 A·C#·E·G 네 음으로 이뤄져 있어요. 그 안에 **C#**가 떡하니 들어 있죠 — 바로 A7의 3도예요. <mark>C#에 착지하면, 사실은 코드 그 자체 위에 앉는 거예요.</mark> 그래서 어제 그렇게 편안하고 '맞는' 소리가 났던 거예요. 코드 안에 이미 살고 있던 음이었으니까요.

여기서 두 음의 성격이 갈려요. **b3(C)**는 코드 밖의 색채음, 살짝 긴장을 주는 '우는' 음이에요. 반대로 **3(C#)**는 코드 안의 코드톤, 편히 '앉는' 음이에요. <mark>A7 위에서 3을 고르면 해결되고, b3를 고르면 애절해져요 — 둘 다 훌륭한 도구예요.</mark> 오늘은 그중 **3을 일부러 골라** A7에 딱 맞는 코드톤 색을 손에 익혀요. 어느 쪽도 틀린 게 아니라, 원할 때 골라 쓰는 게 목표예요. 귀가 두 색을 모두 알면 표현의 폭이 훨씬 넓어져요.

지금까지는 근음 A를 집으로 삼아 착지했어요. 오늘은 A7 위에서 **두 번째 집**을 하나 더 얻어요 — 바로 메이저 3도 **C#**예요. C#에 비브라토로 내려앉으면, 근음에 앉을 때와는 또 다른 <mark>더 성숙하고 안정된 소리</mark>가 나요. 근음만 겨냥하던 귀가 이제 3도까지 겨냥할 수 있게 되는 거예요. 코드를 알고 그 안의 음을 골라 앉는 것, 그게 오늘의 한 걸음이에요. 이 감각이 앞으로 만날 코드 진행의 문을 열어줘요.

```json
{
  "id": "m3.w10.d3.a7_chord_tones",
  "type": "scale_shape",
  "meta": { "title": "A7 chord tones and C# as the major 3rd", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **A7 = A·C#·E·G.** 그중 **초록 C#가 3도**, 코드 안에 원래 들어 있는 음이에요.

## ② 시각 자료

지판 위에서 **A7의 코드톤**을 함께 봐요. 파란 근음 A, 그리고 **초록 3도 C#**를 중심으로 5도 E와 b7 G가 함께 코드를 이뤄요.

```json
{
  "id": "m3.w10.d3.cs_over_a7",
  "type": "fretboard_diagram",
  "meta": { "title": "C# is the 3rd of A7 — a chord tone", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ 근음(파랑)·5도·b7은 코드톤, 그리고 **초록 C#가 오늘 겨냥할 3도**예요.

<mark>C#는 A7 밖의 손님이 아니라, 코드 안에 원래 살던 식구예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. **A7의 코드톤**을 근음 A → 3도 C# → 5도 E → b7 G 순서로 하나씩 짚어봐요.

```json
{
  "id": "m3.w10.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: A7 chord tones with C#", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 60.** 네 코드톤을 천천히 짚으며, **C#가 그 안에 자연스럽게 섞여** 있다는 걸 느껴요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = A7 위 C# 코드톤)**
실전 전에, A7이 울릴 때 **C#가 코드 안의 음**이라는 걸 떠올려요. <mark>착지음을 미리 C#로 정해두면, 손이 훨씬 편하게 그 자리를 찾아가요.</mark>

**20~40분 · 실전: A7 위에서 C#에 착지 (BPM 65)**
오늘의 완성이에요. 근음 A에서 출발해 **b3를 스치고**, **메이저 3도 C#에 비브라토로 착지**해요. A7이 울리는 동안 C#에 앉으면, 코드에 딱 맞는 성숙한 색이 나요.

```json
{
  "id": "m3.w10.d3.land_on_cs",
  "type": "tab",
  "meta": { "title": "Over A7, land on C# (the major 3rd)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 65.** 근음 A → b3(3번 줄 5프렛) → **메이저 3도 C#(3번 줄 6프렛) 비브라토**. A7 위에서 3도에 앉는 코드톤 색이에요.

<mark>근음이 아니라 3도에 앉아도 편안하다 — A7이 그 소리를 받쳐주니까요.</mark>

**40~50분 · 녹음**
A7 백킹 위에서 C#에 착지하는 걸 녹음해요. 3도에 앉는 그 코드톤 색이 편안하게 들리는지 하나의 파일로 확인해요.

**오늘의 완료 기준:** A7이 울리는 동안 메이저 3도 C#(3번 줄 6프렛)를 골라 비브라토로 착지해, 코드에 딱 맞는 코드톤 색을 내고 녹음했다.

## ④ 팁 / 흔한 실수

코드에 맞춰 3도를 고를 때 흔한 실수예요. 대부분 **코드와 음을 따로** 생각하는 데서 와요.

```json
{
  "id": "m3.w10.d3.choose_the_3rd",
  "type": "scale_shape",
  "meta": { "title": "On A7, choose the major 3rd C#", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **A7이면 C#가 코드톤.** 3도에 앉는 걸 두려워하지 마세요.

- **늘 근음에만 착지해요.** 근음도 좋지만, A7 위에선 3도 C#도 똑같이 편한 집이에요.
- **C#를 긴장음으로 오해해요.** A7 안엔 C#가 원래 들어 있어요. 긴장이 아니라 해결이에요.
- **약박에 C#를 놓아요.** 강박에 앉아야 '코드에 맞췄다'는 느낌이 또렷해져요.
- **모든 코드에서 C#를 써요.** 오늘은 A7일 때예요. 코드가 바뀌면 3도도 달라진다는 건 다음 여정의 몫이에요.
