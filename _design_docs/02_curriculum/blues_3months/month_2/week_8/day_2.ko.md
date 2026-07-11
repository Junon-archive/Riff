---
title: "박스1 대표 릭 2 — 하행으로 근음에 답하는 문장"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 하행으로 답하는 대표 릭

## ① 이론/설명

어제는 **벤딩**으로 문을 여는 대표 릭 1을 손에 넣었어요. 오늘은 그 문장을 닫는 **대표 릭 2**예요. 릭 1이 '묻는' 쪽이라면, 릭 2는 근음으로 내려와 '답하는' 쪽이에요. <mark>블루스 솔로는 결국 열고 닫는 두 문장의 대화예요 — 오늘 그 답하는 문장을 만들어요.</mark> 이 하행 릭까지 익히면, 이번 주 첫 솔로에 필요한 **재료 두 개**가 모두 준비돼요. 이 답하는 릭 하나면, 어제의 질문에 확실한 마침표를 찍을 수 있어요.

오늘의 릭은 높은 자리에서 시작해 계단을 내려오듯 근음으로 착지하는 **하행 릭**이에요. 2번 줄의 **b7(G)**에서 출발해 5도(E), 4도(D), b3(C)를 차례로 지나요. <mark>높은 음에서 근음까지 한 계단씩 내려오면, 듣는 사람의 귀가 '집에 도착했다'고 느껴요.</mark> 마지막은 4번 줄 근음 A에 **비브라토**로 착지해요. 내려오는 방향 자체가 '이제 답을 마친다'는 신호예요. 짧은 하행 하나지만, 이것만으로 솔로에 또렷한 마침표를 찍을 수 있어요.

하행 릭의 핵심은 **속도**가 아니라 방향이에요. 음을 또박또박 짚으며 한 계단씩 정확히 내려오는 게 중요해요. <mark>서두르지 않고 한 음씩 내려오면, 근음 착지가 훨씬 또렷해져요.</mark> 릭 1과 릭 2를 나란히 두면, 하나는 벤딩으로 열고 하나는 하행으로 닫아요. 이 **두 릭**이 내일 12마디 위에 얹을 재료가 돼요. 속도는 **BPM 75** 그대로예요. 특히 마지막 근음에서 손을 잠깐 멈추는 그 한 박이, 답을 완성하는 가장 중요한 순간이에요. 자, 근음으로 답하는 문장을 만들어 볼게요.

```json
{
  "id": "m2.w8.d2.descend_lick",
  "type": "tab",
  "meta": { "title": "Box 1 lick 2: descending landing", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75, 셔플 느낌.** 1마디는 b7(G)에서 5도·4도·b3로 한 계단씩 내려와요. 2마디는 b3에서 b7을 지나 근음 A에 비브라토로 착지해요.

## ② 시각 자료

**하행 릭**이 지판을 어떻게 타고 내려오는지 **박스1 지도**로 봐요. 초록 근음 A가 마지막에 도착하는 집이에요.

```json
{
  "id": "m2.w8.d2.descend_map",
  "type": "scale_shape",
  "meta": { "title": "The descending path home on the Box 1 map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" }
  ]}
}
```
▶ **내려와서 근음으로.** b7에서 출발해 한 음씩 내려와 초록 근음 A에 착지해요.

<mark>높은 음에서 시작해 근음에서 닫는 이 하행이 오늘 릭의 전부예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 75. 하행 릭의 착지 지점인 **근음 A**로 내려오는 마지막 세 음만 따로 데워요.

```json
{
  "id": "m2.w8.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the descent to the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** b3에서 b7을 지나 근음 A로 내려와 비브라토로 맺어요. 착지 순간을 손에 익혀요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 착지 방향)**
실전에 들어가기 전에, 높은 b7에서 근음까지 내려오는 **방향**을 머릿속으로 그려요. 어느 음에서 다음 음으로 내려가는지 순서를 정리해요. <mark>내려올 길을 미리 그려 두면, 손이 근음까지 헤매지 않아요.</mark>

**20~40분 · 실전: 대표 릭 2 (BPM 75)**
오늘의 완성물이에요. 높은 자리에서 한 계단씩 내려와 근음으로 답하는 두 마디를 연주해요.

```json
{
  "id": "m2.w8.d2.lick2_take",
  "type": "tab",
  "meta": { "title": "Box 1 lick 2, full take", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** 1마디는 b7에서 b3까지 또박또박 내려와요. 2마디는 b3·b7을 지나 근음 A에 비브라토로 착지해요. 방향을 또렷하게 유지해요.

<mark>내려오는 길이 또렷하고 근음에서 떨리며 맺히면, 오늘의 답이 완성돼요.</mark>

**40~50분 · 녹음**
대표 릭 2를 처음부터 끝까지 녹음해요. 내려오는 음들이 또박또박 들리는지, 근음 비브라토가 살아 있는지 들어 봐요.

**오늘의 완료 기준:** 높은 b7에서 한 계단씩 내려와 근음 A에 비브라토로 착지하는 대표 릭 2를 두 마디로 연주해 녹음했다. — 오늘의 결과물: 대표 릭 2(하행/착지) 완성

## ④ 팁 / 흔한 실수

하행 릭에서 자주 나오는 실수들이에요. 대부분 방향과 착지 문제예요.

```json
{
  "id": "m2.w8.d2.land_home",
  "type": "scale_shape",
  "meta": { "title": "Land home on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" }
  ]}
}
```
▶ **내려와서 근음에 착지.** b3에서 b7을 지나 초록 근음 A로 내려와 비브라토로 맺어요.

- **중간에 멈칫해요.** 하행은 한 계단씩 끊김 없이 내려와야 해요. 음 사이 간격을 고르게 유지해요.
- **근음을 지나쳐 버려요.** 답은 근음에서 멈춰야 해요. 마지막 A에서 손을 멈추고 비브라토로 맺어요.
- **비브라토를 빼먹어요.** 착지에 떨림이 없으면 문장이 흐려져요. 근음 A를 꼭 떨어서 맺어요.
- **너무 빨리 내려와요.** BPM 75면 충분해요. 속도보다 착지 방향이 먼저예요.
