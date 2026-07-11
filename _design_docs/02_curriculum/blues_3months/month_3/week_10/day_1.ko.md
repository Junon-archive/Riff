---
title: "메이저 3도(C#)를 찾다 — b3 옆에 숨은 밝은 색"
dayKey: "m3.w10.d1"
estMinutes: 50
i18nKey: "lesson.m3.w10.d1"
---

# Day 1 — b3 바로 옆에서 메이저 3도(C#)를 찾다

## ① 이론/설명

10주차가 시작됐어요. 지난 아홉 주 동안 우리가 기대온 블루스의 색은 <mark>마이너 3도(b3=C)</mark>였어요. 살짝 흐리고 슬픈 듯 멋진 그 음이죠. 그런데 오늘부터는 그 바로 옆에 숨어 있던 **밝은 이웃**을 새로 만나요. 바로 **메이저 3도(3=C#)**예요. 같은 3도인데 반음 차이로 색이 완전히 달라져요 — 하나는 흐리고, 하나는 맑아요. 지난 아홉 주가 마이너의 세계였다면, 오늘부터 두 주는 그 위에 밝은 한 겹을 더 얹는 시간이에요.

이 메이저 3도 C#는 어디 있을까요? 박스1에서 **b3(C)**는 **3번 줄 5프렛**에 있어요. 거기서 딱 한 프렛만 위로, 그러니까 **3번 줄 6프렛**을 짚으면 그게 바로 C#, 메이저 3도예요. <mark>b3와 3은 이렇게 반음, 한 칸 차이로 나란히 붙어 있어요.</mark> 손가락을 한 칸 옆으로 옮기는 것만으로 흐린 색에서 맑은 색으로 살짝 넘어가는 거예요. 위치만 알면 나머지는 손이 알아서 기억해요. 5프렛과 6프렛, 딱 이 두 칸만 오늘 눈에 넣어두면 충분해요.

왜 이걸 배울까요? **B.B. King** 같은 대가들은 이 두 색을 자유롭게 섞어요. 마이너의 b3로 애절하게 울다가, 슬쩍 3도로 올려 밝게 웃죠. 그 섞임이 바로 이번 주에 우리가 만들 <mark>성숙한 'BB' 색</mark>이에요. 오늘은 아직 섞지 않아요. 딱 두 가지만 해요 — **b3**와 **3**이 어디 있는지 눈으로 익히고, 두 음을 나란히 짚어보는 거예요. 이 작은 발견 하나가 이번 주 전체의 씨앗이 돼요. 조급해할 필요는 전혀 없어요. 오늘의 이 한 걸음이 이번 주 끝의 성숙한 소리로 그대로 이어져요.

```json
{
  "id": "m3.w10.d1.b3_and_3",
  "type": "scale_shape",
  "meta": { "title": "b3 and major 3rd side by side", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **b3(C)는 3번 줄 5프렛**, 바로 옆 **초록 6프렛이 메이저 3도 C#**예요. 한 칸 차이로 나란히 붙어 있죠.

## ② 시각 자료

이제 **박스1** 전체 그림 위에 오늘의 새 음을 얹어볼게요. 익숙한 A 블루스 박스 안에, **초록으로 빛나는 메이저 3도 C#** 두 개가 새로 들어왔어요 — 3번 줄 6프렛과 1번 줄 9프렛이에요.

```json
{
  "id": "m3.w10.d1.box1_with_major3",
  "type": "scale_shape",
  "meta": { "title": "A blues box 1 with the major 3rd added", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "label": "4", "role": "scale" },
    { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 9, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 파란 음은 근음, 색 없는 음은 스케일음, **초록 두 개가 오늘 새로 익힐 메이저 3도**예요. 위치만 눈에 담아요.

<mark>b3 바로 한 칸 위, 그 자리가 메이저 3도예요 — 오늘은 이 위치만 확실히 익혀두면 충분해요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. **b3(3번 줄 5프렛)**에서 **3(3번 줄 6프렛)**으로, 손가락 하나만 옆으로 옮기며 두 음을 번갈아 짚어요.

```json
{
  "id": "m3.w10.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: press b3 then the major 3rd", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 60.** b3를 반박, 메이저 3도를 반박 — 두 음이 한 칸 차이라는 걸 손끝으로 익혀요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = b3·3 위치 익히기)**
실전 전에, 박스1 안에서 **b3**와 **메이저 3도**가 어디 붙어 있는지 눈을 감고 떠올려요. <mark>두 음이 한 칸 차이로 나란히 있다는 그림이 손에 새겨지면, 나머지는 저절로 따라와요.</mark>

**20~40분 · 실전: b3·3 나란히 짚기 (BPM 60)**
오늘의 완성이에요. 근음 A에서 출발해 **b3**, **메이저 3도**를 차례로 나란히 짚고 다시 근음으로 돌아와요. 아직 빠르게 섞지 않아요 — 두 음의 자리를 정확히 짚는 게 목표예요.

```json
{
  "id": "m3.w10.d1.b3_3_sidebyside",
  "type": "tab",
  "meta": { "title": "b3 and 3 side by side", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60.** 근음 A → b3(3번 줄 5프렛) → **메이저 3도 C#(3번 줄 6프렛)** → 근음 A. 한 칸 차이를 또박또박 짚어요.

<mark>흐린 b3 옆에 맑은 3도가 나란히 있다 — 이 한 칸을 오늘 손에 익히면 10주차의 문이 열려요.</mark>

**40~50분 · 녹음**
b3와 메이저 3도를 나란히 짚는 걸 천천히 녹음해요. 두 음의 자리를 정확히 짚었는지 하나의 파일로 남겨요.

**오늘의 완료 기준:** 박스1 안에서 b3(3번 줄 5프렛)와 메이저 3도 C#(3번 줄 6프렛)의 위치를 찾아, 두 음을 나란히 또박또박 짚어보고 녹음했다.

## ④ 팁 / 흔한 실수

위치를 익힐 때 자주 나오는 실수들이에요. 대부분 **한 칸 차이**를 놓치는 데서 와요.

```json
{
  "id": "m3.w10.d1.one_fret_apart",
  "type": "scale_shape",
  "meta": { "title": "b3 and 3 are one fret apart", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **b3와 3은 딱 한 칸(반음) 차이.** 5프렛 옆 6프렛, 그게 메이저 3도예요.

- **메이저 3도를 온음 위로 착각해요.** b3에서 한 칸(반음)만 위예요. 두 칸(온음)을 가면 4도가 돼버려요.
- **b3와 3을 같은 손가락으로 눌러요.** 1번 손가락으로 b3, 2번 손가락으로 3을 나누면 다음 이동이 편해요.
- **아직 빠르게 섞으려 해요.** 오늘은 위치만 익혀요. 섞는 건 내일부터 천천히 해도 돼요.
- **메이저 3도만 계속 눌러요.** b3도 여전히 블루스의 중심이에요. 오늘은 둘의 자리를 나란히 익히는 날이에요.
