---
title: "비브라토 — 음을 떨어 노래하게 한다"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 손목 비브라토로 음을 노래하게 한다

## ① 이론/설명

어제는 음을 밀어 올렸다면, 오늘은 음을 '떨어' 봐요. **비브라토(vibrato)**는 짚은 음을 아주 작게 올렸다 내렸다 반복해서, **하나의 음**을 흔들리게 만드는 기법이에요. <mark>비브라토는 성악가가 긴 음을 뻗을 때 목소리를 떨어 노래에 생기를 불어넣는 것과 똑같아요.</mark> 그냥 짚어 놓은 음은 금세 죽지만, 살짝 떨어 주면 그 음이 계속 살아 숨 쉬어요. 블루스에서 프레이즈의 마지막 음을 오래 끌 때, 이 비브라토가 있느냐 없느냐로 표정이 완전히 달라져요.

비브라토의 핵심은 '어디서 나오느냐'예요. 손끝만 까딱거리면 소리가 얕고 불안하지만, **손목**에서 나오면 깊고 안정적이에요. <mark>문고리를 살짝 돌리듯, 손목을 천천히 회전시켜 음을 밀었다 놓았다 해요.</mark> 처음엔 빠르게 떨려는 욕심을 버리고, **느리고 넓게** 딱 하나만 만들어요. 넓게 한 번, 다시 넓게 한 번 — 이 규칙적인 떨림이 안정된 비브라토의 시작이에요.

비브라토는 아무 음에나 걸지 않아요. 프레이즈가 **안정된 음에 착지했을 때**, 그 음을 오래 끌면서 걸어요. 박스1에서는 **근음(A)**과 b3가 특히 잘 어울려요 — 집처럼 편안한 음이라 오래 떨어도 듣기 좋아요. <mark>짧게 스치는 음에는 비브라토를 걸 틈도, 이유도 없어요.</mark> 그러니 오늘은 긴 음 하나를 골라 그 위에 비브라토를 얹는 연습만 해요. 음 하나를 노래하게 만드는 것, 그게 오늘의 목표예요.

```json
{
  "id": "m2.w6.d2.vibrato_intro",
  "type": "tab",
  "meta": { "title": "Vibrato on the root (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60.** 4번 줄 7프렛 근음(A)을 온음표로 길게 끌면서, 손목으로 천천히 넓게 떨어요. 음이 죽지 않고 노래하는지 들어 보세요.

## ② 시각 자료

비브라토를 걸기 좋은 '든든한 음'을 지판에서 볼게요. **4번 줄 7프렛의 근음(A)**이 가장 편하고, 초록으로 표시된 **3번 줄 5프렛의 b3**도 아주 잘 울어요.

```json
{
  "id": "m2.w6.d2.vibrato_spots",
  "type": "scale_shape",
  "meta": { "title": "Strong notes to sing with vibrato (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **긴 음 위에 비브라토.** 근음이나 b3(초록)를 길게 끌면서 손목으로 천천히 떨어요.

<mark>흔들 음을 하나만 정하고, 그 음이 죽기 전에 떨기 시작해요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 비브라토 없이 근음과 b3를 길게 뻗어 소리를 들어 봐요. **떨기 전의 '민 음'**을 먼저 알아 두는 거예요.

```json
{
  "id": "m2.w6.d2.warmup",
  "type": "tab",
  "meta": { "title": "Long tones on Box 1 anchors", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 60.** 근음과 b3를 반음표로 길게, 아직 떨지 말고 소리만 뻗어요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 손목으로 천천히 넓게)**
손끝이 아니라 손목이 움직이는지 확인해요. 문고리 돌리듯 **손목만 천천히** 회전시켜요. <mark>빠르게 떨려 하지 말고, 넓고 규칙적인 떨림 하나부터 만들어요.</mark>

**20~40분 · 실전 비브라토 (BPM 60)**
이제 긴 음에 비브라토를 얹어요. 근음과 b3를 길게 끌면서 손목으로 떨어요.

```json
{
  "id": "m2.w6.d2.vibrato_practice",
  "type": "tab",
  "meta": { "title": "Add vibrato to the long tones", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **근음·b3에 비브라토.** 각 음을 반음표로 끌면서, 손목으로 넓고 느리게 떨어요.

떨림이 안정되면, 짧은 프레이즈 끝의 근음에 비브라토로 착지해 봐요.

```json
{
  "id": "m2.w6.d2.vibrato_lick",
  "type": "tab",
  "meta": { "title": "Land a phrase and sing it with vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **끝 음에 착지.** b7-5-4를 지나 근음에 도착하면, 그 음을 끌며 비브라토로 노래해요.

<mark>마지막 근음이 죽지 않고 계속 노래하면 성공이에요.</mark>

**40~50분 · 녹음**
근음에 비브라토로 착지하는 프레이즈를 녹음해요. 떨림이 규칙적인지, 음정이 흔들려 무너지진 않는지 들어 봐요.

**오늘의 완료 기준:** 긴 음 위에서 손목으로 넓고 규칙적인 비브라토를 만들었고, 프레이즈 끝 근음을 비브라토로 노래하듯 끌었다.

## ④ 팁 / 흔한 실수

비브라토에서 흔한 실수들이에요. 빠르게 떠는 게 잘하는 게 아니에요 — 안정된 하나가 훨씬 멋져요.

```json
{
  "id": "m2.w6.d2.wrist_not_finger",
  "type": "scale_shape",
  "meta": { "title": "Vibrato comes from the wrist, on a strong note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target" }
  ]}
}
```
▶ **손목에서, 든든한 음 위에서.** 근음이나 b3(초록) 같은 안정된 음을 골라 천천히 떨어요.

- **손끝으로만 파르르 떨어요.** 소리가 얕고 불안해져요. 손목에서 크게 움직여 깊은 떨림을 만들어요.
- **너무 빠르게 떨어요.** 급하면 음정이 흔들려 불안하게 들려요. 느리고 넓게, 규칙적으로가 먼저예요.
- **아무 음에나 걸어요.** 스치는 짧은 음 말고, 오래 끄는 안정된 음에만 얹어요.
- **음정이 위로만 올라가요.** 비브라토는 짚은 음을 중심으로 위아래로 오가야 해요. 원래 음으로 꼭 돌아와요.
