---
title: "프레이징 통합 — 묻고, 쉬고, 답하는 콜앤리스폰스를 완성한다"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — 질문·여백·대답을 하나의 문장으로

## ① 이론/설명

7주차 마지막 날이에요. 이번 주 동안 짧은 프레이즈로 한마디 말하는 법, 질문과 대답을 주고받는 **콜앤리스폰스**, 그리고 소리 사이에 **여백**을 두는 법을 하나씩 익혔어요. 오늘은 이 셋을 한 흐름으로 합쳐요. <mark>짧게 묻고, 잠깐 쉬고, 근음으로 답하는 — 이 세 가지가 모이면 비로소 "말하듯" 연주하게 돼요.</mark> 오늘 완성할 건 1마디 질문과 2마디 대답이 이어지는 **콜앤리스폰스 프레이즈**예요. 이번 주 배운 걸 전부 담은 결승선이에요.

완성 프레이즈를 뜯어볼게요. **1마디는 질문**이에요. 근음에서 출발해 b3를 지나 4도(D)에서 멈춰요 — 끝을 열어 둬서 "아직 안 끝났다"는 느낌을 남기죠. <mark>4도에서 멈추는 순간, 듣는 사람의 귀는 저절로 대답을 기다려요.</mark> **2마디는 대답**이에요. 5도에서 4도-b3로 차분히 내려와 근음 A에 **비브라토**로 착지해요. 마지막 근음의 떨림이 문장의 마침표예요. 두 마디 사이의 짧은 여백까지 느끼면, 이게 완전한 한 문장이 돼요.

이 프레이즈가 특별한 이유는, 지난 6주 동안 리듬·스케일·표현을 하나씩 쌓아 온 게 드디어 **하나의 완성된 문장**으로 모이기 때문이에요. <mark>음을 많이 아는 것보다, 짧은 한 문장을 제대로 말하는 게 진짜 블루스예요.</mark> 완벽하지 않아도 괜찮아요. 질문이 열리고, 여백이 있고, 대답이 근음에서 닫히면 그걸로 **충분해요**. 자, 이번 주를 마무리하는 콜앤리스폰스를 손에 넣어 볼게요.

```json
{
  "id": "m2.w7.d4.two_sentences",
  "type": "tab",
  "meta": { "title": "Two sentences: question then answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디는 질문 — 4도에서 열어 두고, 2마디는 대답 — 5도에서 근음으로 내려와 비브라토로 맺어요.

## ② 시각 자료

완성 프레이즈가 지판 어디를 지나는지 **큰 그림**으로 봐요. 초록 **4도(D)**가 질문이 열리는 자리, 파랑 **근음 A**가 대답이 착지하는 자리예요.

```json
{
  "id": "m2.w7.d4.qa_map",
  "type": "scale_shape",
  "meta": { "title": "Question note and answer note on the map (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **질문은 초록, 대답은 근음.** 4도(초록)에서 열고, 5도를 지나 근음 A로 내려와 닫아요.

<mark>열고-쉬고-닫는 이 흐름이 오늘 프레이즈의 전부예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. 오늘 프레이즈의 양 끝인 **열린 4도와 비브라토 근음**을 따로 데워요.

```json
{
  "id": "m2.w7.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the open 4th and the vibrato root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** 4도를 반박 열고, 근음을 반박 떨어요. 여는 음과 맺는 음을 미리 손에 익혀요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 두 마디 이어 느끼기)**
실전에 들어가기 전에, 질문 1마디와 대답 2마디를 머릿속에서 하나의 문장으로 이어 그려요. 어디서 열고, 어디서 쉬고, 어디서 닫는지 **순서**를 정리해요. <mark>손보다 머리가 먼저 흐름을 알면, 프레이즈가 훨씬 안정돼요.</mark>

**20~40분 · 실전: 콜앤리스폰스 (BPM 70)**
이번 주의 완성물이에요. 1마디로 **묻고**, 여백을 지나 2마디로 **답해요**.

```json
{
  "id": "m2.w7.d4.call_response",
  "type": "tab",
  "meta": { "title": "Call and response (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디는 질문 — 4도(D)에서 멈춰 "끝나지 않은" 느낌. 2마디는 대답 — 5도에서 내려와 근음 A에 비브라토로 착지해 "마침표". 두 마디 사이 잠깐의 여백을 느껴요.

<mark>질문이 열리고, 여백이 숨을 만들고, 대답이 근음에서 닫히면, 이번 주의 목소리가 완성돼요.</mark>

**40~50분 · 녹음 (7주차 졸업 미션!)**
콜앤리스폰스를 처음부터 끝까지 녹음해요. 질문이 열려 있는지, 여백이 느껴지는지, 대답이 근음에서 닫히는지 — 이 세 가지를 들어 봐요.

**오늘의 완료 기준:** 1마디 질문과 2마디 대답을 여백까지 살려 하나의 문장으로 연주했고, 대답이 근음 A에 비브라토로 착지해 마침표를 찍었다. — 이번 주 결과물: 콜앤리스폰스 프레이즈(질문-여백-대답 통합) 완성 (7주차 완성!)

## ④ 팁 / 흔한 실수

콜앤리스폰스를 합칠 때 흔한 실수들이에요. 세 요소를 다 담으려다 흐름이 끊기기 쉬워요.

```json
{
  "id": "m2.w7.d4.open_and_land",
  "type": "scale_shape",
  "meta": { "title": "Open on the 4th, land home on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **열고, 쉬고, 근음으로.** 4도(초록)에서 열고, 5도를 지나 근음에 비브라토로 착지해요.

- **질문을 근음에서 닫아 버려요.** 그러면 대답이 두 번 나온 셈이에요. 1마디는 꼭 4도에서 열어 둬요.
- **여백을 빼먹어요.** 질문과 대답을 붙이면 문장이 급해져요. 두 마디 사이의 숨을 꼭 남겨요.
- **대답 근음을 그냥 놔둬요.** 마지막에 비브라토가 없으면 마침표가 안 찍혀요. 꼭 떨어서 맺어요.
- **너무 빨리 치려 해요.** BPM 70이면 충분해요. 속도보다 질문-여백-대답의 흐름이 먼저예요.
</content>
