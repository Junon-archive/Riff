---
title: "뮤팅으로 공간 만들기 — 여백이 있는 그루브"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — 뮤팅으로 공간 만들기, 여백이 있는 그루브

## ① 이론/설명

어제까지 둥과 칙을 빈틈없이 채웠어요. 오늘은 반대예요 — **일부러 소리를 비워** 그루브에 공간을 만들어요. <mark>모든 자리를 다 채우면 오히려 답답하고, 쉼표 하나가 들어가면 그루브가 숨을 쉬어요.</mark> 그 여백을 만드는 기술이 **뮤팅**이에요.

여백에는 두 종류가 있어요. 하나는 왼손을 얹어 내는 **고스트("칙")**, 다른 하나는 아예 소리를 내지 않는 **쉼표**예요. 고스트는 '칙' 하고 리듬을 채우지만, 쉼표는 완전한 정적이에요. <mark>이 둘을 섞으면 채움과 비움이 번갈아</mark> 나며 그루브가 훨씬 살아나요.

관건은 **깨끗한 쉼표**예요. 쉼표 자리에서 줄이 계속 울리면 여백이 지저분해져요. 앞 음을 낸 뒤 <mark>오른손이나 왼손으로 재빨리 줄을 눌러 소리를 끊는</mark> 게 핵심이에요. 이걸 잘하면 정적이 오히려 또렷한 박자가 돼요.

오늘은 **BPM 75**에서 여백을 느끼며 굴려요. 채운 자리보다 비운 자리에 더 귀를 기울여요. <mark>쉼표 자리가 조용하고 또렷하면 오늘은 성공이에요.</mark> 4현이든 5현이든 뮤팅 방법은 똑같아요.

## ② 시각 자료

오늘의 시각 자료는 두 가지예요. 짧은 여백이 들어간 그루브와, 한 박을 통째로 비운 넓은 여백을 느껴 봐요. <mark>비운 자리</mark>가 곧 그루브의 숨이에요. 각 예제는 4현·5현 두 버전이에요.

먼저 **짧은 여백**이에요. 둥-칙 사이에 8분쉼표 하나를 넣어, 칙이 나올 자리 하나를 조용히 비워요.

```json
{
  "id": "m2.w5.d3.space_groove_4",
  "type": "tab",
  "meta": { "title": "Groove with space — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75.** 세 번째 자리(쉼표)에서 줄을 재빨리 눌러 소리를 끊어요. 그 짧은 정적이 여백이에요.

```json
{
  "id": "m2.w5.d3.space_groove_5",
  "type": "tab",
  "meta": { "title": "Groove with space — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 자리와 방법은 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

이번엔 **넓은 여백**이에요. 둥을 한 번 울린 뒤 한 박을 통째로 비우고, 다음 박에 칙-칙으로 다시 채워요. <mark>큰 여백 뒤의 칙</mark>이 더 튀어 보여요.

```json
{
  "id": "m2.w5.d3.wider_space_4",
  "type": "tab",
  "meta": { "title": "Wider space — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75.** 2박째를 통째로 쉬어요. 이 넓은 정적이 그루브에 긴장을 만들어요.

```json
{
  "id": "m2.w5.d3.wider_space_5",
  "type": "tab",
  "meta": { "title": "Wider space — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 둥-칙 그루브를 BPM 70에 복습하며 손을 풀어요. 둥과 칙의 균형을 다시 잡아요.

**10~20분 · 두뇌 훈련**
쉼표 자리에서 줄을 끊는 연습만 따로 해요. <mark>소리를 낸 직후 손이 줄을 덮는 타이밍</mark>을 손에 익혀요.

**20~40분 · 실전**
**짧은 여백**과 **넓은 여백** 두 예제를 BPM 75에서 굴려요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음**
여백 있는 그루브 한 마디를 녹음해요. 다시 들으며 쉼표 자리가 조용하고 또렷한지 점검해요.

**오늘의 완료 기준:** 쉼표 자리를 깨끗이 뮤팅해 여백 있는 그루브를 BPM 75에서 굴리고, 4현·5현 둘 다에서 확인할 수 있다.

## ④ 팁 / 흔한 실수

- **쉼표가 안 조용해요.** 앞 음의 여운이 남으면 여백이 지저분해져요. 손으로 재빨리 줄을 덮어 끊어요.
- **여백에서 서둘러요.** 비운 자리를 못 참고 빨리 채우면 박자가 앞당겨져요. 정적도 한 박이라 여기고 기다려요.
- **뮤팅에 힘이 들어가요.** 줄을 세게 칠 필요 없어요. 살짝 얹어 소리만 죽이면 돼요.
- **저음 B 방심(5현).** 5현에선 여백 중에도 저음 B가 새기 쉬워요. 엄지로 덮어 둬요.
