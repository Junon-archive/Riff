---
title: "릭을 12마디 위에 배치한다 — 첫 솔로 스케치"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — 12마디 위에 릭을 놓는 날

## ① 이론/설명

이틀 동안 **릭 두 개**를 손에 넣었어요. 벤딩으로 여는 릭 1, 하행으로 답하는 릭 2. 오늘은 이 둘을 드디어 **12마디** 위에 얹어요. <mark>재료가 준비됐으니, 이제 12마디라는 무대 위에 릭을 배치할 차례예요.</mark> 오늘 만드는 건 완성된 솔로가 아니라 **솔로 스케치**예요 — 어디에 릭을 놓고 어디를 비워 둘지, 큰 그림을 먼저 그리는 날이에요. 지금까지 따로따로 배운 릭과 여백이 오늘 처음으로 하나의 흐름 안에서 만나요.

블루스 **12마디**는 코드가 A7에서 D7, E7로 바뀌지만, 아주 좋은 소식이 있어요. **박스1** 하나면 12마디 내내 그 위에서 놀 수 있어요. <mark>코드가 바뀌어도 박스1은 계속 집이에요 — 그래서 릭을 어디에 놓아도 어울려요.</mark> 핵심은 마디마다 음을 꽉 채우지 않는 거예요. 한 마디는 릭으로 묻고, 다음 마디는 근음을 길게 끌며 **여백**을 줘요. 이 채움과 비움의 균형이 솔로를 숨 쉬게 만들어요. 음을 덜 치는 용기가 오히려 솔로를 더 근사하게 들리게 해 준다는 걸, 오늘 직접 느끼게 돼요.

오늘의 스케치는 네 마디예요. **1마디**는 벤딩 릭으로 열고(질문), **2마디**는 근음을 길게 끌며 숨을 줘요(여백). **3마디**는 하행 릭으로 답하고, 4마디는 근음에 착지해요. <mark>릭-여백-릭-착지, 이 네 칸의 흐름이 12마디 솔로의 축소판이에요.</mark> 완벽하지 않아도 괜찮아요. 오늘은 릭을 어디에 놓을지 손이 기억하게 만드는 게 목표예요. 자, 무대 위에 첫 스케치를 그려 볼게요.

```json
{
  "id": "m2.w8.d3.solo_sketch",
  "type": "tab",
  "meta": { "title": "Placing the licks over the 12-bar form (sketch)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75, 셔플 느낌.** 1마디는 벤딩 릭으로 열고, 2마디는 근음을 온음표로 길게 끌어 여백을 줘요. 3마디는 하행 릭으로 답하고, 4마디는 근음 A에 비브라토로 착지해요.

## ② 시각 자료

네 마디 스케치가 지판 위에서 어떻게 도는지 **박스1 지도**로 봐요. 초록 4도가 릭이 밀어 올리거나 지나는 자리, 파랑 **근음 A**가 릭이 매번 돌아오는 집이에요.

```json
{
  "id": "m2.w8.d3.form_map",
  "type": "scale_shape",
  "meta": { "title": "Box 1 is home over all 12 bars", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **박스1이 곧 집.** 코드가 바뀌어도 이 한 자리에서 릭을 열고 근음으로 돌아와요.

<mark>코드가 어떻게 바뀌든 박스1 안에서 열고 닫으면, 그게 12마디 솔로예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 75. 스케치의 두 축인 **벤딩과 착지 근음**만 이어서 데워요.

```json
{
  "id": "m2.w8.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up both anchors: the bend and the landing root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** 4도를 반박 벤딩해 열고, 근음 A를 반박 떨어 닫아요. 여는 음과 맺는 음을 나란히 익혀요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 릭 배치)**
실전에 들어가기 전에, 네 마디 중 어디서 릭을 치고 어디를 비울지 **순서**를 머릿속으로 그려요. 열고-여백-답하고-착지, 이 네 칸을 손보다 머리로 먼저 정리해요. <mark>칸의 순서를 먼저 알면, 12마디가 훨씬 덜 막막해져요.</mark>

**20~40분 · 실전: 12마디 위 솔로 스케치 (BPM 75)**
오늘의 완성물이에요. 네 마디 스케치를 백킹에 맞춰 처음부터 끝까지 이어서 연주해요.

```json
{
  "id": "m2.w8.d3.sketch_take",
  "type": "tab",
  "meta": { "title": "12-bar sketch, full take", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** 1마디 벤딩 릭으로 열고, 2마디는 근음을 길게 끌어 여백을 줘요. 3마디 하행 릭으로 답하고, 4마디 근음 A에 비브라토로 착지해요. 릭 사이의 여백을 꼭 느껴요.

<mark>릭이 열리고, 여백이 숨을 만들고, 하행이 근음에서 닫히면, 12마디 솔로의 뼈대가 완성돼요.</mark>

**40~50분 · 녹음**
네 마디 스케치를 백킹 위에서 녹음해요. 릭이 코드와 어울리는지, 여백이 답답하지 않게 살아 있는지 들어 봐요.

**오늘의 완료 기준:** 벤딩 릭·여백·하행 릭·근음 착지의 네 마디 스케치를 12마디 백킹에 맞춰 처음부터 끝까지 연주해 녹음했다. — 오늘의 결과물: 12마디 위 솔로 스케치 완성

## ④ 팁 / 흔한 실수

릭을 12마디 위에 얹을 때 자주 하는 실수들이에요. 대부분 '너무 꽉 채우는' 문제예요.

```json
{
  "id": "m2.w8.d3.place_map",
  "type": "scale_shape",
  "meta": { "title": "Call in the bars, leave space, answer home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **열고, 비우고, 답하고.** 초록 4도에서 릭을 열고, 근음 A로 돌아와 답을 맺어요.

- **모든 마디를 음으로 꽉 채워요.** 그러면 숨 쉴 틈이 없어요. 한두 마디는 근음을 길게 끌며 비워 둬요.
- **릭을 코드 변화와 상관없이 아무 데나 놔요.** 릭은 마디의 첫 박에 맞춰 시작해야 자연스러워요. 백킹의 한 박에 맞춰 열어요.
- **여백을 못 견뎌요.** 소리가 비는 순간이 어색해도, 그 여백이 다음 릭을 살려요. 비운 마디를 서두르지 마요.
- **네 마디를 한 번에 다 하려 해요.** 열기 두 마디, 답하기 두 마디로 나눠 연습하면 훨씬 쉬워요.
