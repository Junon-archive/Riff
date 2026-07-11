---
title: "여백 두기 — 쉬는 자리가 다음 말을 들리게 한다"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 소리 사이에 숨을 넣는 프레이징

## ① 이론/설명

지금까지 묻고 답하는 두 프레이즈를 만들어 봤어요. 그런데 좋은 대화에는 하나가 더 필요해요 — 바로 **여백**이에요. 말과 말 사이의 잠깐 쉬는 순간이요. <mark>블루스에서 쉼표는 아무것도 안 하는 게 아니라, 다음 말을 들리게 하는 준비예요.</mark> 음을 쉬지 않고 계속 쏟아내면, 아무리 좋은 프레이즈라도 뭉개져서 들려요. 오늘은 일부러 손을 멈추는 **쉼**을 프레이즈 안에 넣어 봐요. 악보에서는 이 쉼을 **rest**로 표시해요.

쉼을 넣는 자리는 정해져 있어요. 가장 중요한 자리는 **질문과 대답 사이**예요. 질문을 던지고 바로 대답하지 말고, 한 박이든 반 박이든 손을 멈춰요. <mark>이 짧은 정적이 "지금 질문을 들었어"라는 신호이자, 대답을 준비하는 숨이에요.</mark> 또 하나는 프레이즈가 끝난 뒤예요. 한마디 하고 나면 잠깐 비워서 방금 한 말이 공기 중에 남게 둬요. 쉼은 음이 아니지만, 음만큼이나 **연주의 일부**예요. 오히려 입문자와 능숙한 연주자를 가르는 게 이 쉼을 다루는 법이에요.

처음엔 쉬는 게 어색할 거예요. 손이 자꾸 다음 음으로 가려고 하거든요. 그럴 땐 쉼을 "비어 있는 시간"이 아니라 **숨 쉬는 시간**이라고 생각해요. <mark>노래하듯 연주하려면, 노래처럼 숨 쉴 자리가 있어야 해요.</mark> 메트로놈을 켜 두면 쉬는 동안에도 박이 흘러가니까, 쉼의 길이를 정확히 지키기 쉬워요. 오늘은 화려한 프레이즈보다, 잘 쉬는 한 마디를 만드는 게 목표예요. 자, 소리 사이에 숨을 넣어 볼게요.

```json
{
  "id": "m2.w7.d3.breath_phrase",
  "type": "tab",
  "meta": { "title": "A phrase that breathes (rests as space)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 근음과 b3를 짧게 치고, 나머지 반 마디는 통째로 쉬어요. 이 정적이 방금 한 말을 공기 중에 남겨 둬요.

## ② 시각 자료

오늘 프레이즈가 지판 어디를 지나는지 **큰 그림**으로 봐요. 음은 어제와 비슷하지만, 오늘의 주인공은 음이 아니라 음과 음 **사이의 침묵**이에요. 초록 **4도**에서 질문을 열고, 잠깐 쉰 뒤 근음으로 답한다는 흐름을 떠올려요.

```json
{
  "id": "m2.w7.d3.space_map",
  "type": "scale_shape",
  "meta": { "title": "The notes around the silence (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" }
  ]}
}
```
▶ **음은 적게, 사이는 넓게.** 4도(초록)에서 열고, 쉼을 지나 근음으로 내려와요. 지판 위 자리는 익숙한 박스1이에요.

<mark>지판에는 안 보이지만, 이 음들 사이의 여백이 오늘의 진짜 주인공이에요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. 오늘은 치고-쉬고-치는 **기본 호흡**부터 데워요. 쉬는 동안에도 박을 속으로 세어요.

```json
{
  "id": "m2.w7.d3.warmup",
  "type": "tab",
  "meta": { "title": "Play, rest, play — feel the silence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 0, "duration": "half", "rest": true },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70.** 근음을 한 번 치고, 반 마디를 통째로 쉬고, 다시 근음을 쳐요. 쉼 동안 박이 흘러가는 걸 느껴요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 쉼의 길이 지키기)**
쉴 때 가장 흔한 실수는 너무 빨리 다음 음으로 가는 거예요. 쉼표도 **정확한 길이**가 있다는 걸 몸에 새겨요. <mark>쉬는 박을 속으로 또렷하게 세면, 여백이 흔들리지 않아요.</mark>

**20~40분 · 실전: 여백 있는 프레이징 (BPM 70)**
오늘의 완성물이에요. 질문을 던지고 **쉬고**, 그다음 대답해요.

```json
{
  "id": "m2.w7.d3.space_phrase",
  "type": "tab",
  "meta": { "title": "Question, breath, answer (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디는 4도까지 묻고 한 박 쉬어요. 2마디는 한 박 쉰 뒤 5도-b3를 지나 근음으로 답해요. 쉼이 질문과 대답을 갈라 줘요.

<mark>쉼 덕분에 질문과 대답이 또렷하게 갈라지면, 숨 있는 프레이징이 완성돼요.</mark>

**40~50분 · 녹음 (오늘의 미션)**
여백 있는 프레이징을 세 번 녹음해요. 쉼이 정확한 길이만큼 유지되는지, 그 정적이 답답하지 않고 자연스러운지 들어 봐요.

**오늘의 완료 기준:** 질문과 대답 사이에 정확한 길이의 쉼을 넣었고, 그 여백 덕분에 두 프레이즈가 또렷하게 나뉘어 숨 있는 프레이징을 만들었다.

## ④ 팁 / 흔한 실수

여백을 다룰 때 흔한 실수들이에요. 대부분 쉬는 걸 견디지 못해서 생겨요.

```json
{
  "id": "m2.w7.d3.where_to_breathe",
  "type": "scale_shape",
  "meta": { "title": "Breathe after the question, before the answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **여기서 숨을 쉬어요.** 4도(초록)로 질문한 뒤, 근음으로 답하기 전에 잠깐 비워요.

- **쉼을 못 참고 음을 채워요.** 빈 자리가 불안해서 음을 넣으면 여백이 사라져요. 손을 멈추는 것도 연주예요.
- **쉼을 너무 짧게 지나가요.** 한 박이면 한 박을 다 쉬어요. 대충 스치면 대화가 급해 보여요.
- **메트로놈 없이 쉬어요.** 기준 박이 없으면 쉼의 길이가 매번 달라져요. BPM 70에 맞춰 세어요.
- **한 번 어긋났다고 멈춰요.** 여백은 연습에서 편해져요. 쉼이 조금 흔들려도 끝까지 한 마디를 완성해요.
</content>
