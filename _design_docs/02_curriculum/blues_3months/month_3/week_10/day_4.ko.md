---
title: "BB 색 통합 — 마이너와 메이저를 한 릭에 (10주차 완성)"
dayKey: "m3.w10.d4"
estMinutes: 50
i18nKey: "lesson.m3.w10.d4"
---

# Day 4 — b3와 3을 한 릭에 담아 'BB의 색'을 완성하다

## ① 이론/설명

드디어 10주차의 마지막 날이에요. 첫날엔 **메이저 3도 C#**를 찾았고, 둘째 날엔 **b3에서 3으로** 반음을 올렸고, 셋째 날엔 A7 위에서 3을 골랐어요. 오늘은 이 모두를 하나로 합쳐요 — <mark>마이너 3도와 메이저 3도를 한 릭 안에 나란히 담아, 성숙한 'BB의 색'을 완성해요.</mark> 흐림과 맑음이 한 문장 안에서 함께 숨 쉬는 소리예요. 지난 사흘 동안 하나씩 모은 조각들이 오늘 비로소 한 문장으로 이어지는 거예요.

오늘의 완성 릭은 이래요. 근음 A에서 출발해 **b3(C)**를 거쳐, 반음 위 **메이저 3도(C#)**로 밝게 올라간 뒤, 다시 근음 A에 비브라토로 내려앉아요. <mark>이 릭의 심장은 b3→3, 그 하나의 반음이에요.</mark> A7 위에서 울리면, 흐린 b3가 맑은 C#로 열리며 코드에 딱 맞게 해결돼요. 짧지만 이번 주가 배운 모든 것이 이 네 음에 담겨 있어요. 겨우 한 마디, 딱 네 음이지만 그 안에는 블루스의 이야기가 가득해요.

이 작은 릭 하나가 10주차 전체의 결승선이에요. 화려한 시스템도, 어려운 스케일도 아니에요. 그저 **흐림과 맑음이 한 릭 안에 함께 사는** 것 — 그게 B.B. King이 평생 노래한 어른의 블루스 목소리예요. <mark>오늘 이 릭을 손에 담으면, 여러분의 블루스엔 이제 두 개의 색이 함께 살아요.</mark> 천천히, BPM 70으로 이 색을 충분히 음미하며 완성해봐요. 이게 바로 10주차의 졸업이에요.

```json
{
  "id": "m3.w10.d4.bb_recap_map",
  "type": "scale_shape",
  "meta": { "title": "BB color recap: b3 and 3 together", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 파란 근음 A와 색 없는 b3, 그리고 **초록 메이저 3도 C#**. 이 세 음이 오늘 릭의 재료예요.

## ② 시각 자료

오늘 릭에 쓰이는 **두 개의 색**을 함께 봐요. 색 없는 **b3(마이너)**와 초록 **3(메이저)**가 한 칸 차이로 나란히, 근음 A·5도 E와 함께 있어요.

```json
{
  "id": "m3.w10.d4.two_colors",
  "type": "scale_shape",
  "meta": { "title": "Two colors: minor b3 and major 3 together", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ 마이너 b3와 메이저 3, **두 색이 한 지판 안에 함께** 있어요 — 오늘은 둘을 오가며 섞어요.

<mark>흐림과 맑음, 두 색이 한 칸 차이로 이웃해 사는 이 그림이 10주차의 핵심이에요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. **b3 → 3 → 근음 A** 순서로 천천히, 오늘 릭의 뼈대를 손에 익혀요.

```json
{
  "id": "m3.w10.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: b3 to 3 to root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60.** b3에서 3으로 반음 올리고 근음으로 내려앉는, 릭의 뼈대를 데워요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = BB 색 통합)**
실전 전에, b3에서 3으로 열리고 근음으로 앉는 그 흐름을 머릿속으로 노래해요. <mark>귀가 먼저 '흐림→맑음→집'의 이야기를 그리면, 손은 그 그림을 따라가기만 하면 돼요.</mark>

**20~40분 · 실전: 메이저/마이너 BB 릭 (BPM 70)**
드디어 10주차의 완성물, **BB 릭**이에요. 근음 A → b3 → **메이저 3도 C#** → 근음 A 비브라토. b3에서 3으로 넘어가는 그 반음이 바로 'BB의 색'이에요.

```json
{
  "id": "m3.w10.d4.bb_lick",
  "type": "tab",
  "meta": { "title": "Major/minor BB color lick", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** 근음 A → **b3(C, 3번줄 5프렛) → 메이저 3도(C#, 3번줄 6프렛)**로 반음 올려 → 근음 A 비브라토. b3에서 3으로 넘어가는 그 반음이 'BB의 색'이에요.

<mark>흐린 b3와 맑은 3이 한 릭 안에서 손을 잡아요 — 이 소리가 여러분이 완성한 어른의 블루스예요.</mark>

**40~50분 · 녹음 (10주차 졸업 미션!)**
A7 백킹 위에서 BB 릭을 녹음해요. 마이너 b3와 메이저 3이 한 릭 안에서 어떻게 섞이는지, 그 성숙한 색을 하나의 파일에 담아요.

**오늘의 완료 기준:** A7 위에서 근음 A → b3 → 메이저 3도 C# → 근음 A로 이어지는 BB 릭을 완성해, 마이너와 메이저 3도가 섞인 성숙한 색을 내고 녹음했다. — 이번 주 결과물: 메이저/마이너 BB 색 릭 완주·녹음 (10주차 완성!)

## ④ 팁 / 흔한 실수

BB 색을 완성할 때 흔한 실수예요. 대부분 **한 색만 붙잡는** 데서 와요.

```json
{
  "id": "m3.w10.d4.mix_dont_avoid",
  "type": "scale_shape",
  "meta": { "title": "Mix both colors, don't avoid one", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **두 색을 다 쓰세요.** b3만도, 3만도 아닌, 둘을 오가는 게 BB의 색이에요.

- **b3를 빼고 3만 써요.** 그러면 밝기만 하고 블루스 맛이 빠져요. b3에서 '출발'해야 색이 살아요.
- **3을 안 쓰고 b3에만 머물러요.** 그건 지난주까지의 소리예요. 오늘은 3으로 열어줘야 완성돼요.
- **두 음을 뚝뚝 끊어 짚어요.** b3에서 3으로 부드럽게 이어야 '건너가는' 색이 나요.
- **속도부터 올려요.** BPM 70에서 두 색이 선명하게 들리는 게 먼저예요. 빠르기는 나중 일이에요.
