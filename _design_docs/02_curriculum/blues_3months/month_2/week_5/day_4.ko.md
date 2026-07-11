---
title: "블루스 스케일 완성 — 리드의 지도를 손에 넣는다"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — 박스1 + 블루노트 = A 블루스 스케일을 통합한다

## ① 이론/설명

드디어 5주차의 마지막 날이에요. 지난 사흘 동안 **박스1**을 외우고, **블루노트(b5)**를 더하고, 짧은 프레이즈까지 만들어 봤어요. 오늘은 이 조각들을 하나로 합쳐요. <mark>박스1에 블루노트 한 음을 더하면, 마이너 펜타토닉이 '블루스 스케일'로 완성돼요.</mark> 이 스케일이 앞으로 여러분의 모든 블루스 솔로가 출발하는 지도가 돼요. 리듬으로 반주를 쌓던 지난 한 달을 지나, 이제 스스로 목소리를 내는 리드로 넘어가는 문턱이에요.

블루스 스케일은 딱 여섯 음이에요 — **R·b3·4·b5·5·b7**. 마이너 펜타 다섯 음에 <mark>b5 하나만 슬쩍 끼워 넣은 것</mark>뿐인데, 소리는 완전히 블루스가 돼요. 그래서 외울 게 늘어난 게 아니에요. 이미 아는 박스1에 **눈물 한 방울**을 떨어뜨린 것뿐이에요. 손 모양도 어제 그대로, 5프렛 자리 그대로라 부담 가질 필요가 전혀 없어요.

이 지도 하나면 A 블루스 위에서 무엇을 쳐도 어울려요. <mark>어떤 음을 골라도 블루스에 맞고, 길을 잃으면 근음으로 돌아오면 돼요.</mark> 오늘은 이 여섯 음을 한 몸처럼 오르내리고, 블루노트를 지나 근음에 착지하는 것까지 해 봐요. 완벽하지 않아도 괜찮아요. 지난 4주가 리듬으로 '질문'을 배운 시간이었다면, 이번 주는 '답'을 여는 첫 열쇠를 손에 쥔 셈이에요. 이 상자 하나를 손에 넣은 것만으로 **리드의 첫 단추**는 이미 끼운 거예요. 자, 블루노트가 살아 있는 짧은 릭부터 들어 볼게요.

```json
{
  "id": "m2.w5.d4.blues_lick",
  "type": "tab",
  "meta": { "title": "A blues lick with the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **블루노트가 살아 있는 릭이에요.** 5도에서 b5를 스쳐 4로, 그리고 낮은 근음 A로 뚝 떨어져요. 이 한 음의 긴장이 릭 전체를 블루스로 물들여요.

## ② 시각 자료

이게 이번 주의 완성물, **A 블루스 박스1**이에요. <mark>파란 근음, 보라 블루노트, 나머지 스케일 음 — 여섯 음이 한 지도 위에 다 모였어요.</mark>

```json
{
  "id": "m2.w5.d4.a_blues_box1",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1 + blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **BPM 70, 셔플 느낌으로.** 6번줄 근음 A(5프렛)부터 오르내려요. **5번줄 6프렛 블루노트(b5)**를 지나갈 때 살짝 걸치듯 — 이 음이 블루스의 눈물이에요.

이 상자를 눈 감고도 그릴 수 있으면, 여러분은 이제 <mark>리드의 지도를 손에 넣은 거예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. **박스1**을 한 번 오르내리며 손을 깨워요. <mark>손이 5프렛 자리에 편안한지</mark> 확인해요.

```json
{
  "id": "m2.w5.d4.warmup",
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
▶ **BPM 70, 셔플 느낌.** 6번 줄 근음부터 5번 줄 5도까지. 어제처럼 가볍게.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 블루노트 넣어 오르내리기)**
박스1 오르내림 사이 어디에 b5가 끼는지 <mark>머릿속으로 짚어</mark> 봐요. 5번 줄 5→6→7프렛, 그 6프렛이 블루노트예요.

**20~40분 · 실전 블루스 스케일 오르내리기 (BPM 70)**
이제 블루노트까지 넣어 여섯 음을 오르내려요.

```json
{
  "id": "m2.w5.d4.blues_scale_ascend",
  "type": "tab",
  "meta": { "title": "A blues scale — ascending with the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70, 셔플 느낌.** 6번 줄 근음부터, 5번 줄에서 4→b5→5로 블루노트를 스치며 올라가요.

<mark>블루노트를 지날 때 살짝 걸치듯</mark>, 멈추지 말고 끝까지 오르내려요.

**40~50분 · 녹음 (5주차 졸업 미션!)**
블루스 스케일을 한 번 오르내리고, 블루노트를 지나 근음에 착지하는 걸 녹음해요: <mark>그 한 음이 눈물처럼 살아 있는지</mark> 들어 봐요.

**오늘의 완료 기준:** 블루스 스케일(박스1 + 블루노트)을 멈추지 않고 오르내렸고, 블루노트를 지나 근음 A에 착지했다. — 이번 주 결과물: A 블루스 박스1 + 블루노트 스케일 완성 (5주차 완성!)

## ④ 팁 / 흔한 실수

블루스 스케일을 쓸 때 흔한 실수예요. 여섯 음을 다 넣는다고 좋은 솔로가 되진 않아요.

```json
{
  "id": "m2.w5.d4.spice_tip",
  "type": "scale_shape",
  "meta": { "title": "Blue note is spice, root is home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **블루노트는 양념, 근음은 집.** b5로 긴장을 주고, 4·5·근음 같은 안정된 음으로 풀어 줘요.

- **블루노트를 남발해요.** 한 프레이즈에 한 번이면 충분해요. 아껴 쓸수록 그 눈물이 진해져요.
- **스케일을 기계처럼 훑기만 해요.** 지도는 외웠으니, 이제 멈추고 쉬며 노래하듯 골라 써요.
- **블루노트에 멈춰 서요.** 스치듯 지나 안정된 음으로 풀어야 블루스다워요.
- **다음 주가 걱정돼요.** 지도는 이미 손에 있어요. 6주차엔 이 상자로 진짜 솔로를 지어요.
