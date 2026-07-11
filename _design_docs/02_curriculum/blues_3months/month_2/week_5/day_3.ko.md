---
title: "박스1 안에서 짧은 프레이즈를 만든다"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — 박스1 안에서 3~4음 프레이즈를 만든다

## ① 이론/설명

박스1도 외웠고 블루노트도 손에 넣었어요. 그런데 스케일을 위아래로 훑기만 하면 그건 아직 '연습'이지 '음악'은 아니에요. 오늘부터는 <mark>박스1 안에서 짧은 프레이즈를 만들어</mark> 봐요. 프레이즈란 **3~4개의 음을 골라 하나의 짧은 말처럼 엮은 것**이에요. 한 문장을 말하듯, 음 몇 개로 작은 이야기를 만드는 거예요. 스케일이 재료라면, 프레이즈는 그 재료로 지은 한 끼 요리인 셈이에요.

블루스는 대화라고 했죠? 프레이즈에도 **질문과 대답**이 있어요. 음이 위로 올라가면 <mark>어딘가 '떠 있는' 느낌, 즉 질문이 돼요.</mark> 반대로 음이 아래로 내려와 **근음이나 5도** 같은 안정된 음에 도착하면, 그건 '대답'이 되어 마음이 놓여요. 그래서 좋은 프레이즈는 대부분 **안정된 음에서 끝나요**. 끝음 하나만 잘 골라도 프레이즈가 완성된 느낌이 나요. 질문만 계속 던지면 듣는 사람이 답답하고, 대답만 이어지면 심심해요. 이 둘을 번갈아 주는 게 바로 블루스의 밀고 당기기예요.

많은 음이 필요하지 않아요. <mark>음 세 개면 충분히 멋진 프레이즈가 돼요.</mark> 오히려 음을 아낄수록 하나하나가 또렷하게 들려요. 오늘은 박스1의 가운데 자리 — **4번 줄 근음 A(7프렛)** 근처 — 에서 작은 프레이즈를 만들어 볼 거예요. 틀려도 괜찮아요. 음을 몇 개 골라 근음으로 돌아오는 것, 그게 오늘의 전부예요. 자, 먼저 아주 짧은 세 음짜리 프레이즈부터 들어 볼게요.

```json
{
  "id": "m2.w5.d3.phrase_seed",
  "type": "tab",
  "meta": { "title": "A tiny 3-note phrase — 4 b3 R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **짧지만 이건 이미 프레이즈예요.** 4(D)에서 b3(C)로 내려와 근음 A로 착지해요. 세 음이 하나의 짧은 문장처럼 들려요.

## ② 시각 자료

조금 더 또렷한 프레이즈를 볼게요. 이번엔 근음에서 위로 올라가는 '질문'이에요. <mark>R→b3→4→5, 네 음이 차곡차곡 올라가며 긴장을 쌓아요.</mark>

```json
{
  "id": "m2.w5.d3.call",
  "type": "tab",
  "meta": { "title": "The call — ascending R b3 4 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **올라가는 질문 프레이즈.** 4번 줄 근음에서 시작해 2번 줄 5도까지 올라가요. 끝이 '떠 있는' 느낌이 들면 성공이에요.

이 질문은 아직 답이 없어요. <mark>다음엔 이 프레이즈를 되받아 근음으로 내려오며 답을 만들 거예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. **박스1** 낮은 줄을 한 마디 오르내리며 손을 깨워요. <mark>손이 5프렛 자리에 편히 자리 잡았는지</mark> 느껴요.

```json
{
  "id": "m2.w5.d3.warmup",
  "type": "tab",
  "meta": { "title": "Box 1 low string warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 70, 셔플 느낌.** 6번 줄 근음부터 5번 줄 5도까지. 가볍게 손만 풀어요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 근음으로 착지)**
어떤 음으로 프레이즈를 끝낼지 미리 정해요. <mark>끝음은 근음 A나 5도로</mark> 잡으면 실패가 없어요.

**20~40분 · 실전 질문과 대답 만들기 (BPM 70)**
올라가는 질문, 내려오는 대답. 두 마디를 이어서 쳐 봐요.

```json
{
  "id": "m2.w5.d3.call_answer",
  "type": "tab",
  "meta": { "title": "Call and answer — up then home to R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70, 셔플 느낌.** 첫 마디는 올라가는 질문, 둘째 마디는 내려오는 대답. 마지막 근음에서 딱 멈춰요.

<mark>질문과 대답이 한 쌍으로 들리는지</mark> 확인하며 여러 번 반복해요.

**40~50분 · 녹음 (오늘의 미션)**
질문-대답 두 마디를 녹음해요: <mark>마지막 근음에서 마음이 놓이는 착지가 들리는지</mark> 들어 봐요.

**오늘의 완료 기준:** 박스1 안에서 올라가는 질문과 내려오는 대답을 두 마디로 이었고, 마지막을 근음 A로 안정되게 착지시켰다.

## ④ 팁 / 흔한 실수

프레이즈를 만들 때 흔한 실수예요. 음을 많이 넣는다고 좋은 게 아니에요.

```json
{
  "id": "m2.w5.d3.land_tip",
  "type": "scale_shape",
  "meta": { "title": "The phrase pocket — land on R or 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **끝은 근음이나 5도로.** 이 자리들이 프레이즈가 편히 쉬는 집이에요. 어디서 시작하든 여기로 돌아오면 돼요.

- **음을 너무 많이 욱여넣어요.** 세 음이면 충분해요. 여백이 있어야 각 음이 살아나요.
- **아무 음에서나 끝내요.** 끝음을 근음이나 5도로 정하면 프레이즈가 완성돼 들려요.
- **쉬지 않고 계속 쳐요.** 음 사이의 짧은 침묵도 프레이즈의 일부예요. 숨 쉴 틈을 줘요.
- **틀릴까 봐 같은 것만 쳐요.** 음 순서를 조금씩 바꿔 봐요. 그게 나만의 프레이즈가 돼요.
