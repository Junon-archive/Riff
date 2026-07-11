---
title: "표현 릭 통합 — 벤딩·비브라토·슬라이드로 한 마디를 노래한다"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — 세 표현 도구를 온음 벤딩 릭으로 합친다

## ① 이론/설명

6주차의 마지막 날이에요. 이번 주 동안 음을 밀어 올리는 **벤딩**, 음을 떨어 노래하게 하는 **비브라토**, 음 사이를 잇는 **슬라이드**를 하나씩 익혔어요. 오늘은 이 셋을 한 프레이즈 안에 합쳐요. <mark>세 도구가 모이면, 같은 박스1 음들도 완전히 다른 '목소리'로 말하기 시작해요.</mark> 기법을 따로따로 쓸 때와, 한 흐름 안에서 자연스럽게 이어 쓸 때는 소리의 밀도가 달라요. 오늘은 그 '이어 쓰기'를 연습해요.

오늘 완성할 릭은 박스1 안의 **온음 벤딩 릭**이에요. 3번 줄 7프렛의 **4도(D)**를 온음 밀어 올려 5도(E) 소리를 내고, 5도-b3로 내려와 근음 A에 **비브라토**로 착지해요. <mark>벤딩으로 '묻고', 하행으로 '풀고', 비브라토로 '맺는' — 딱 한 마디짜리 이야기예요.</mark> 짧지만 이 안에 이번 주의 표현이 다 담겨 있어요. 음 하나하나를 정확히 치는 것보다, 벤딩이 목표음까지 가고 비브라토가 안정되는 그 '표정'이 이 릭의 전부예요.

이 릭이 왜 특별하냐면, 지난 4주 동안 리듬으로 '질문'을 배우고 5주차에 스케일이라는 '어휘'를 얻은 뒤, 드디어 그 어휘를 '내 목소리로' 말하는 **첫 문장**이기 때문이에요. <mark>정확한 음보다 표정이 먼저다 — 이게 블루스 리드의 핵심이에요.</mark> 완벽하지 않아도 괜찮아요. 벤딩이 5도까지 닿고, 마지막 근음이 비브라토로 살아 있으면 그걸로 **충분해요**. 자, 이번 주를 마무리하는 한 마디를 손에 넣어 볼게요.

```json
{
  "id": "m2.w6.d4.three_voices",
  "type": "tab",
  "meta": { "title": "Three expressive tools in two beats", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **세 도구를 두 박에.** b3에서 4도로 미끄러져 들어가, 그 4도를 온음 밀어 5도를 내고, 근음에 비브라토로 착지해요. 슬라이드·벤딩·비브라토가 한 흐름으로 이어져요.

## ② 시각 자료

먼저 오늘의 릭이 지판 어디를 지나는지 **큰 그림**으로 볼게요. 초록으로 표시된 **3번 줄 7프렛의 4도**가 온음 벤딩의 출발점이에요.

```json
{
  "id": "m2.w6.d4.lick_map",
  "type": "scale_shape",
  "meta": { "title": "The bend lick on the Box 1 map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **벤딩 출발점이 초록.** 4도에서 온음 밀어 5도를 내고, 5도-b3를 지나 근음으로 내려와요.

<mark>이 네 음이 오늘 릭의 뼈대예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. 오늘 릭의 두 주인공, **온음 벤딩과 비브라토**를 따로 데워요.

```json
{
  "id": "m2.w6.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the bend and vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** 4도를 온음 밀어 5도를 내고, 근음을 비브라토로 떨어요. 릭의 재료 두 개예요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 벤딩 음정 다시 맞추기)**
릭에 들어가기 전에, 온음 벤딩이 5도까지 정확히 가는지 다시 확인해요. **2번 줄 5프렛 5도**를 먼저 쳐서 귀에 담고 비교해요. <mark>벤딩이 목표음에 닿아야 릭 전체가 산다는 걸 기억해요.</mark>

**20~40분 · 실전: 온음 벤딩 릭 (BPM 70)**
이번 주의 완성물이에요. 벤딩으로 열고, 하행으로 풀고, 비브라토로 맺어요.

```json
{
  "id": "m2.w6.d4.bend_lick",
  "type": "tab",
  "meta": { "title": "Whole-step bend lick (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** 3번줄 7프렛(4도 D)을 **온음 밀어 올려** 5도(E) 소리를 내요 — 목표음까지 정확히. 그다음 5도-b3로 내려와 근음 A에 **비브라토**로 착지. 이게 블루스의 '한 마디 이야기'예요.

<mark>벤딩이 5도까지 가고 마지막 근음이 비브라토로 노래하면, 이번 주의 목소리가 완성돼요.</mark>

**40~50분 · 녹음 (6주차 졸업 미션!)**
온음 벤딩 릭을 처음부터 끝까지 녹음해요. 벤딩이 목표음까지 가는지, 비브라토가 안정적인지 — 이 두 가지만 들어 봐요.

**오늘의 완료 기준:** 온음 벤딩이 5도 목표음까지 정확히 도달했고, 근음 A에 비브라토로 착지해 릭을 한 흐름으로 완성했다. — 이번 주 결과물: 온음 벤딩 릭(벤딩·비브라토 통합) 완성 (6주차 완성!)

## ④ 팁 / 흔한 실수

통합 릭에서 흔한 실수들이에요. 기법을 다 넣으려다 오히려 흐름이 끊기기 쉬워요.

```json
{
  "id": "m2.w6.d4.aim_and_land",
  "type": "scale_shape",
  "meta": { "title": "Bend to the 5th, land home on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **5도로 밀고, 근음으로 집에.** 벤딩은 초록 5도까지, 마지막은 근음에 비브라토로 착지해요.

- **벤딩이 5도에 못 미쳐요.** 릭의 첫 음이 흐려지면 전체가 흐려져요. 목표음까지 끝까지 밀어요.
- **착지 근음을 그냥 놔둬요.** 마지막 음에 비브라토가 없으면 이야기가 갑자기 끊긴 느낌이에요. 꼭 떨어서 맺어요.
- **너무 빨리 치려 해요.** BPM 70이면 충분해요. 속도보다 벤딩 음정과 비브라토가 먼저예요.
- **한 번 틀렸다고 멈춰요.** 표현은 반복에서 자라요. 벤딩이 조금 빗나가도 끝까지 이어서 한 마디를 완성해요.
