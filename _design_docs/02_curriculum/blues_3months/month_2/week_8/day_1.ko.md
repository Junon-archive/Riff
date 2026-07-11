---
title: "박스1 대표 릭 1 — 온음 벤딩으로 첫 문장을 연다"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 벤딩으로 여는 대표 릭

## ① 이론/설명

드디어 8주차예요. 2개월차의 마지막 주, 그리고 첫 솔로를 완성하는 주간이에요. 몇 주 전만 해도 **펜타토닉 스케일**의 음 위치를 겨우 외우던 손이었는데, 이제 그 손이 12마디 위에서 노래할 준비를 마쳤어요. <mark>펜타만 알던 손이 이제 12마디 위에서 노래해요 — 이번 주가 바로 그 순간이에요.</mark> 이번 주의 목표는 딱 하나예요. 지금까지 배운 스케일과 벤딩과 프레이징을 하나의 **블루스 릭**으로 엮어, 12마디 위에 얹어 첫 솔로를 완성하는 거예요. 그 첫걸음이 바로 오늘의 **대표 릭 1**이에요.

오늘의 릭은 **온음 벤딩**으로 문을 여는 릭이에요. 박스1의 3번 줄 7번 프렛, 즉 **4도(D)**를 짚고 한 음 통째로 밀어 올리면 **5도(E)** 소리가 나요. <mark>4도를 온음만큼 밀어 올리는 순간, 손가락 하나로 블루스 특유의 '우는' 소리가 태어나요.</mark> 벤딩으로 문을 열고 나면 b3(C)를 지나 근음 A로 부드럽게 내려와요. 밀어 올리는 긴장과, 근음으로 풀리는 이완 — 이 둘의 대비가 짧은 릭 하나에 표정을 만들어 줘요.

벤딩이 처음엔 음정이 조금 안 맞아도 괜찮아요. **온음(두 프렛)**만큼 정확히 올라갔는지 귀로 확인하는 게 전부예요. <mark>정확한 음까지 밀어 올렸다가 근음으로 착지하면, 릭 하나가 온전히 완성돼요.</mark> 속도는 **BPM 75**, 편안한 셔플 느낌이면 충분해요. 오늘 이 릭 하나를 손에 넣으면, 내일 배울 **하행 릭**과 합쳐 이번 주 첫 솔로의 절반이 채워져요. 자, 벤딩으로 첫 문장을 열어 볼게요.

```json
{
  "id": "m2.w8.d1.bend_lick",
  "type": "tab",
  "meta": { "title": "Box 1 lick 1: the whole-step bend", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75, 셔플 느낌.** 1마디는 4도(D)를 온음 벤딩으로 5도까지 밀어 올려 열고 b3로 숨을 골라요. 2마디는 다시 벤딩한 뒤 근음 A에 비브라토로 착지해요.

## ② 시각 자료

이 릭이 지판의 어디를 지나는지 **박스1 지도** 위에서 봐요. 초록으로 표시된 **4도(D)**가 벤딩으로 밀어 올리는 자리, 파랑 근음 A가 착지하는 집이에요.

```json
{
  "id": "m2.w8.d1.bend_map",
  "type": "scale_shape",
  "meta": { "title": "The bend note on the Box 1 map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **벤딩은 초록에서.** 4도(초록)를 밀어 올려 5도 소리를 만들고, b3를 지나 근음으로 내려와요.

<mark>이 지도 위에서 벤딩으로 열고 근음으로 닫는 흐름이 오늘 릭의 전부예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 75. 오늘 릭의 심장인 **온음 벤딩**만 따로 데워요. 4도를 5도까지 정확히 밀어 올리는 감각을 손에 새겨요.

```json
{
  "id": "m2.w8.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the whole-step bend", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 75.** 4도를 반박 동안 온음 벤딩하고, 5도를 반박 눌러 확인해요. 밀어 올린 끝 음이 5도와 같은 높이인지 귀로 맞춰요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 벤딩 음정)**
실전에 들어가기 전에, 벤딩한 4도가 **5도(E)**와 똑같은 높이에 닿았는지 머릿속으로 그려요. 밀기 전에 도착할 소리를 먼저 상상하면 음정이 훨씬 정확해져요. <mark>도착할 음을 미리 들어 두면, 손이 그 소리를 찾아 밀어 올려요.</mark>

**20~40분 · 실전: 대표 릭 1 (BPM 75)**
오늘의 완성물이에요. 벤딩으로 열고, b3를 지나 근음으로 착지하는 두 마디를 통째로 연주해요.

```json
{
  "id": "m2.w8.d1.lick1_take",
  "type": "tab",
  "meta": { "title": "Box 1 lick 1, full take", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** 1마디는 벤딩으로 열고 b3로 숨을 골라요. 2마디는 다시 벤딩한 뒤 근음 A에 비브라토로 맺어요. 서두르지 말고 벤딩 음정에 집중해요.

<mark>벤딩이 정확한 음까지 닿고 근음에서 떨리며 맺히면, 오늘의 릭이 완성돼요.</mark>

**40~50분 · 녹음**
대표 릭 1을 처음부터 끝까지 녹음해요. 벤딩이 5도까지 정확히 닿았는지, 근음의 비브라토가 살아 있는지 들어 봐요.

**오늘의 완료 기준:** 벤딩으로 4도를 5도까지 밀어 올려 열고, b3를 지나 근음 A에 비브라토로 착지하는 대표 릭 1을 두 마디로 연주해 녹음했다. — 오늘의 결과물: 대표 릭 1(벤딩) 완성

## ④ 팁 / 흔한 실수

벤딩 릭에서 자주 나오는 실수들이에요. 대부분 음정과 힘 조절 문제예요.

```json
{
  "id": "m2.w8.d1.bend_target",
  "type": "scale_shape",
  "meta": { "title": "Bend the 4th up to the 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **밀어서 5도, 풀어서 근음.** 4도(초록)를 밀어 5도 소리를 만들고, 근음 A로 내려와 비브라토로 맺어요.

- **덜 밀거나 너무 밀어요.** 온음은 정확히 두 프렛 높이예요. 밀어 올린 끝 음이 5도와 같은지 귀로 확인해요.
- **손가락 하나로만 밀어요.** 벤딩은 두세 손가락을 모아 밀어야 힘이 나요. 약지와 중지를 함께 써요.
- **벤딩 뒤 근음을 놓쳐요.** 릭은 근음에 착지해야 문장이 닫혀요. 마지막 A를 비브라토로 꼭 맺어요.
- **너무 빨리 치려 해요.** BPM 75면 충분해요. 속도보다 벤딩 음정이 먼저예요.
