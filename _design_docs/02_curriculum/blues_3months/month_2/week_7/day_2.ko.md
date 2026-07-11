---
title: "콜앤리스폰스 — 질문 프레이즈와 대답 프레이즈를 주고받는다"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 묻고 답하는 두 프레이즈

## ① 이론/설명

어제 짧은 프레이즈로 한마디 "말"을 던져 봤어요. 오늘은 그 말에 **대답**을 붙여요. 블루스에서 이걸 **콜앤리스폰스**라고 불러요 — 하나가 묻고, 다른 하나가 답하는 구조예요. <mark>솔로 안에서 내가 질문하고 내가 대답하는, 혼자 하는 대화라고 생각하면 쉬워요.</mark> 교회 성가대에서 리더가 한 소절을 부르면 사람들이 받아 부르던 데서 온 오래된 방식이고, 블루스의 뼈대이기도 해요. 오늘은 그 방식 그대로 **두 프레이즈**를 짝지어 만들어요.

핵심은 **질문과 대답의 대비**예요. 질문 프레이즈는 어제처럼 **4도(D)**에서 멈춰 열어 둬요 — "아직 안 끝났다"는 신호죠. 그리고 대답 프레이즈는 근음 **A**로 내려와 착지해요. <mark>질문이 문을 열면, 대답이 그 문을 닫아 주는 거예요.</mark> 두 프레이즈는 서로 닮아도 좋고 달라도 좋아요. 중요한 건 하나는 열려 있고 하나는 닫힌다는 흐름이에요. 이 대비가 분명할수록 듣는 사람은 "아, 저건 질문이었고 이건 대답이구나" 하고 자연스럽게 느껴요.

처음엔 두 마디를 딱딱 맞추기보다, 질문을 던지고 잠깐 숨을 고른 뒤 대답한다는 **호흡**에 집중해요. <mark>대답은 질문을 들은 다음에 나오는 거예요 — 서두르지 않아도 돼요.</mark> 질문과 대답 사이의 아주 짧은 틈이 오히려 대화를 살아 있게 만들어요. 오늘은 완벽한 두 마디보다, 묻고-답하는 그 **주고받는 느낌**을 손에 익히는 게 목표예요. 자, 나 자신과 대화를 시작해 볼게요.

```json
{
  "id": "m2.w7.d2.call_and_answer",
  "type": "tab",
  "meta": { "title": "Call opens on the 4th, answer lands on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디는 4도에서 멈춰 질문을 열어요. 2마디는 5도-b3를 지나 근음 A로 내려와 대답을 닫아요.

## ② 시각 자료

질문 음과 대답 음이 지판 어디에 있는지 **큰 그림**으로 봐요. 초록으로 표시된 **4도(D)**가 질문이 멈추는 자리, 파랑 **근음 A**가 대답이 착지하는 자리예요.

```json
{
  "id": "m2.w7.d2.qa_map",
  "type": "scale_shape",
  "meta": { "title": "The question note and the answer note (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **질문은 초록, 대답은 근음.** 4도(초록)에서 열고, 근음 A로 내려와 닫아요.

<mark>4도에서 열고 근음에서 닫는 이 두 자리가 오늘 대화의 양 끝이에요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. 오늘 대화의 두 끝, **열린 4도와 착지 근음**을 번갈아 쳐서 손에 익혀요.

```json
{
  "id": "m2.w7.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the open 4th and the landing root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70.** 4도를 반박, 근음을 반박. 여는 음과 닫는 음의 느낌을 미리 새겨요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 질문과 대답 구분하기)**
실전에 들어가기 전에, 같은 박스1 음들이라도 **어디서 멈추느냐**에 따라 질문이 되고 대답이 된다는 걸 귀로 확인해요. <mark>끝음 하나만 바꿔도 프레이즈의 뜻이 완전히 달라져요.</mark>

**20~40분 · 실전: 콜앤리스폰스 (BPM 70)**
오늘의 완성물이에요. 1마디로 **묻고**, 2마디로 **답해요**.

```json
{
  "id": "m2.w7.d2.call_response_practice",
  "type": "tab",
  "meta": { "title": "Ask and answer across two bars (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디는 4도에서 멈춰 질문을 열고, 2마디는 5도-b3를 지나 근음 A에 비브라토로 착지해 대답을 닫아요.

<mark>질문이 열리고 대답이 근음에서 닫히면, 혼자 하는 대화가 완성돼요.</mark>

**40~50분 · 녹음 (오늘의 미션)**
묻고-답하기를 세 번 녹음해요. 질문이 정말 열려 있는지, 대답이 근음에서 확실히 닫히는지 들어 봐요.

**오늘의 완료 기준:** 1마디 질문(4도에서 열림)과 2마디 대답(근음에서 닫힘)을 이어서 연주했고, 두 프레이즈가 묻고-답하는 대화처럼 들렸다.

## ④ 팁 / 흔한 실수

콜앤리스폰스에서 흔한 실수들이에요. 대부분 질문과 대답이 구분되지 않아서 생겨요.

```json
{
  "id": "m2.w7.d2.open_vs_close",
  "type": "scale_shape",
  "meta": { "title": "4th leaves it open, root closes it", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **열고, 닫고.** 4도(초록)에서 열고 근음으로 닫아요. 두 자리의 역할이 반대예요.

- **질문도 근음에서 끝내요.** 둘 다 근음으로 닫으면 대답만 두 번 한 셈이에요. 질문은 꼭 4도에서 열어 둬요.
- **질문과 대답을 붙여서 쳐요.** 사이에 아주 짧은 틈을 둬야 대화처럼 들려요. 급하게 넘어가지 않아요.
- **대답이 너무 길어요.** 대답도 짧게 근음에 착지하면 충분해요. 음을 늘어놓지 않아요.
- **한 번 틀렸다고 멈춰요.** 대화는 이어질 때 자라요. 조금 어긋나도 끝까지 묻고 답해요.
</content>
