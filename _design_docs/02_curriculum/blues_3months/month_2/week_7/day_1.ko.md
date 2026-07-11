---
title: "짧은 프레이즈 만들기 — 2~4음으로 한 마디를 말한다"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 2~4음으로 여는 짧은 프레이즈

## ① 이론/설명

7주차가 시작됐어요. 지난주까지 벤딩·비브라토·슬라이드로 음 하나하나를 노래하게 만드는 법을 익혔다면, 이번 주는 그 음들을 모아 **말**을 만들어요. <mark>좋은 솔로는 음의 나열이 아니라 짧은 문장의 연속이에요.</mark> 우리가 말할 때 한 호흡에 몇 단어만 내뱉고 잠깐 쉬듯이, 솔로도 **짧은 프레이즈** 하나가 기본 단위예요. 음이 많다고 좋은 솔로가 되는 게 아니에요. 오히려 적은 음으로 분명하게 말하는 게 훨씬 어렵고, 훨씬 멋져요. 오늘은 그 첫걸음으로 **2~4음**짜리 아주 짧은 한 마디를 만들어 볼게요.

오늘의 프레이즈는 박스1 안에서 근음 A로 시작해 **4도(D)**에서 멈춰요. <mark>4도는 근음도 아니고 완전히 안정된 음도 아니어서, 거기서 멈추면 아직 안 끝났다는 느낌이 남아요.</mark> 이게 바로 **질문처럼 열린 프레이즈**예요. 말끝을 살짝 올려 "그래서?" 하고 묻는 것 같은 느낌이죠. 반대로 근음에서 끝내면 마침표가 찍혀 대화가 닫혀요. 질문이 잘 열리면 듣는 사람은 저절로 다음을 기다리게 돼요. 오늘은 일부러 **열린 끝맺음**을 연습해서, 다음 날 배울 대답 프레이즈와 짝이 되도록 준비해요.

짧은 프레이즈의 힘은 **비움**에 있어요. 음을 많이 넣으려는 욕심을 내려놓고 딱 필요한 두세 음만 남겨요. <mark>음이 적을수록 하나하나가 또렷하게 들려요.</mark> 처음엔 "이게 너무 단순한가?" 싶을 수 있는데, 블루스의 목소리는 대부분 아주 **적은 음**으로 말해요. 한 프레이즈를 치고 나면 잠깐 손을 멈추고, 방금 한 말이 어떻게 들렸는지 스스로 들어봐요. 정확한 음보다 무슨 말을 하고 싶은지가 먼저예요. 자, 오늘은 짧지만 분명한 한 마디를 손에 넣어 볼게요.

```json
{
  "id": "m2.w7.d1.short_phrase",
  "type": "tab",
  "meta": { "title": "A short phrase that opens on the 4th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70.** 근음 A에서 출발해 b3를 지나 4도(D)에서 멈춰요. 마지막 4도를 길게 끌어 "아직 안 끝난" 여운을 남겨요.

## ② 시각 자료

오늘 만들 프레이즈가 지판 어디에 있는지 **큰 그림**으로 볼게요. 초록으로 표시된 **4도(D)**가 프레이즈를 열어두는 자리예요. 근음 **A**에서 출발해 이 4도에서 멈춘다는 걸 눈으로 익혀 둬요.

```json
{
  "id": "m2.w7.d1.box1_map",
  "type": "scale_shape",
  "meta": { "title": "Where the short phrase lives (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **근음에서 4도로.** 근음 A에서 출발해 3번 줄 7프렛의 4도(초록)에서 멈춰요 — 여기가 질문을 열어두는 자리예요.

<mark>이 두 음, 근음과 4도가 오늘 프레이즈의 처음과 끝이에요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. 오늘 프레이즈의 두 기둥인 **근음 A와 4도(D)**를 번갈아 쳐서 손과 귀를 데워요. 4도가 근음과 어떻게 다른 느낌인지 미리 들어 둬요.

```json
{
  "id": "m2.w7.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the root and the open 4th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70.** 근음을 반박, 4도를 반박. 두 음의 색이 어떻게 다른지 귀에 담아요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 열린 끝 느끼기)**
프레이즈에 들어가기 전에, 4도에서 멈췄을 때 생기는 그 **어중간한 긴장**을 귀로 확인해요. 근음에서 멈출 때와 번갈아 비교하면 차이가 또렷해져요. <mark>4도에서 멈추면 아직 대답이 남았다는 신호가 들려요.</mark>

**20~40분 · 실전: 2~4음 짧은 프레이즈 (BPM 70)**
오늘의 완성물이에요. **네 음**으로 짧게 말하고, 마지막 4도에서 열어 둬요.

```json
{
  "id": "m2.w7.d1.phrase_practice",
  "type": "tab",
  "meta": { "title": "A four-note phrase ending open (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70.** b3-근음-5도를 지나 마지막 4도에서 멈춰요. 음을 서두르지 말고, 4도에서 손을 멈춰 여운을 남겨요.

<mark>네 음이 또렷하게 들리고 마지막 4도에서 열린 느낌이 나면, 오늘의 프레이즈가 완성돼요.</mark>

**40~50분 · 녹음 (오늘의 미션)**
짧은 프레이즈를 세 번 녹음해요. 음이 또렷한지, 마지막 4도에서 정말 열린 느낌이 나는지 — 이 두 가지만 들어 봐요.

**오늘의 완료 기준:** 네 음짜리 짧은 프레이즈를 또렷하게 연주했고, 마지막 4도에서 멈춰 아직 안 끝난 열린 느낌을 만들었다.

## ④ 팁 / 흔한 실수

짧은 프레이즈에서 흔한 실수들이에요. 대부분 음을 너무 많이 넣거나, 끝을 흐지부지 닫아서 생겨요.

```json
{
  "id": "m2.w7.d1.open_end",
  "type": "scale_shape",
  "meta": { "title": "Root opens, 4th leaves it open", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" }
  ]}
}
```
▶ **열고, 열어 둔 채로.** 근음에서 출발해 초록 4도에서 멈춰요. 여기서는 근음으로 닫지 않아요.

- **음을 너무 많이 넣어요.** 두세 음이면 충분해요. 음이 많아지면 무슨 말인지 흐려져요.
- **4도에서 안 멈추고 근음으로 내려가요.** 그러면 질문이 아니라 대답이 돼 버려요. 오늘은 일부러 열어 둬요.
- **너무 빨리 쳐요.** BPM 70이면 충분해요. 속도보다 음의 또렷함이 먼저예요.
- **한 번 틀렸다고 멈춰요.** 짧은 말은 반복에서 익어요. 조금 빗나가도 끝까지 한 마디를 완성해요.
</content>
</invoke>
