---
title: "첫 솔로 완주·녹음 — 시그니처 릭으로 12마디를 노래한다 (M2 졸업)"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — 12마디 위 첫 솔로를 완성하다

## ① 이론/설명

드디어 오늘이에요. 2개월차의 마지막 날, 그리고 **첫 솔로**를 완주하고 녹음하는 날이에요. 두 달 전, **12마디**는커녕 펜타토닉 스케일의 음 위치조차 낯설던 손이었어요. 그런데 오늘 그 손이 12마디 위에서 자기만의 이야기를 들려줘요. <mark>펜타만 알던 손이 이제 12마디 위에서 노래해요 — 오늘이 바로 그 졸업의 순간이에요.</mark> 지금까지 쌓은 스케일, 벤딩, 프레이징, 릭이 오늘 하나의 **솔로**로 완성돼요. 화려한 속주가 아니라, 마음이 담긴 몇 마디만으로도 충분히 멋진 솔로가 돼요.

오늘의 주인공은 **시그니처 릭**이에요. 이번 주 배운 벤딩과 하행을 한 몸으로 합친, 블루스의 '머니 릭'이에요. 1마디는 **온음 벤딩(4→5)**으로 문을 열고, 2마디는 하행으로 내려와 근음 A에 **비브라토**로 착지해요. <mark>열고 닫는 두 마디 안에, 이번 주 배운 모든 게 담겨 있어요.</mark> 이 짧은 릭 하나가 12마디의 여기저기에 놓이면, 그게 바로 완성된 첫 솔로예요. 같은 릭을 여러 번 반복해도 괜찮아요 — 오히려 반복이 솔로에 '나다움'을 만들어 줘요.

오늘은 두 단계로 완성해요. 먼저 **시그니처 릭**을 손에 완전히 익히고, 그다음 이 릭을 축으로 **12마디 솔로**를 처음부터 끝까지 이어 쳐요. <mark>완벽할 필요 없어요 — 벤딩이 열리고, 여백이 숨 쉬고, 근음에서 닫히면 그걸로 충분해요.</mark> 그리고 마지막, 그 솔로를 **녹음**해요. 두 달의 여정이 하나의 파일로 남는 순간이에요. 자, 첫 솔로를 완성하러 가요.

```json
{
  "id": "m2.w8.d4.signature_lick",
  "type": "tab",
  "meta": { "title": "Signature blues lick (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75, 셔플 느낌.** 1마디 온음 벤딩(4→5)으로 열고, 2마디 하행으로 근음 A에 비브라토로 착지해요. 이 2마디 릭을 12마디의 여기저기에 배치하면 첫 솔로가 완성돼요.

## ② 시각 자료

이 시그니처 릭이 12마디 솔로 전체에서 어디를 도는지 **박스1 지도**로 봐요. 초록 근음 A가 모든 프레이즈가 결국 돌아오는 **집**이에요.

```json
{
  "id": "m2.w8.d4.solo_map",
  "type": "scale_shape",
  "meta": { "title": "The whole solo lives in Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **솔로 전체가 박스1 안에.** 12마디를 도는 동안, 모든 릭이 이 한 자리에서 열리고 근음으로 돌아와요.

<mark>온 솔로가 이 작은 상자 하나 안에서 태어나요 — 그게 박스1의 힘이에요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 75. 시그니처 릭의 두 축인 **벤딩과 착지 근음**을 이어서 데워요.

```json
{
  "id": "m2.w8.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the signature: bend then land", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** 4도를 반박 벤딩해 열고, 근음 A를 반박 떨어 닫아요. 시그니처 릭의 시작과 끝을 손에 익혀요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 시그니처 릭을 12마디에 배치)**
실전에 들어가기 전에, 시그니처 릭을 12마디 중 어디에 놓을지 머릿속으로 그려요. 시작에서 열고, 중간은 비우고, **9~10마디**에서 시그니처 릭으로 절정을 만들어요. <mark>릭을 놓을 자리를 미리 정하면, 12마디가 든든한 지도가 돼요.</mark>

**20~40분 · 실전: 12마디 첫 솔로 (BPM 75)**
드디어 첫 솔로예요. 시그니처 릭을 축으로, 열고-여백-답하고-절정-착지까지 12마디를 통째로 이어서 연주해요.

```json
{
  "id": "m2.w8.d4.first_solo",
  "type": "tab",
  "meta": { "title": "First 12-bar solo over A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 6, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 7, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 10, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 12, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** 1~4마디로 열고, 5~8마디로 이어가고, 9~10마디에서 시그니처 릭으로 절정을 만든 뒤, 11~12마디에서 근음 A에 비브라토로 마무리해요. 서두르지 말고 릭 사이 여백을 느껴요.

<mark>12마디를 한 흐름으로 이어 근음에서 닫는 순간, 태어나 처음으로 '내 솔로'가 완성돼요.</mark>

**40~50분 · 녹음 (M2 졸업 미션!)**
첫 솔로를 처음부터 끝까지 녹음해요. 벤딩이 열리는지, 여백이 살아 있는지, 근음에서 닫히는지 — 두 달의 성장을 하나의 파일에 담아요.

**오늘의 완료 기준:** 시그니처 릭을 축으로 12마디 첫 솔로를 처음부터 끝까지 이어 연주하고, 근음 A에 비브라토로 마무리해 녹음했다. — 이번 주 결과물: 시그니처 릭 + 12마디 첫 솔로 완주·녹음 (M2 졸업!)

## ④ 팁 / 흔한 실수

첫 솔로를 완주할 때 자주 하는 실수들이에요. 대부분 '멈추지 못하는' 마음의 문제예요.

```json
{
  "id": "m2.w8.d4.close_map",
  "type": "scale_shape",
  "meta": { "title": "Every phrase comes home to the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" }
  ]}
}
```
▶ **모든 프레이즈는 근음으로.** 초록 근음 A가 12마디 어디서든 돌아올 집이에요. 릭을 열었으면 꼭 근음으로 닫아요.

- **틀렸다고 멈춰요.** 솔로는 흐름이에요. 한 음 틀려도 멈추지 말고 다음 근음으로 이어 가요.
- **쉬는 마디를 못 견뎌 음을 채워요.** 여백도 솔로의 일부예요. 비운 마디에서 오히려 다음 릭이 살아나요.
- **끝을 근음에서 닫지 않아요.** 마지막은 꼭 근음 A에 비브라토로 맺어야 솔로가 완성돼요.
- **한 번에 완벽하게 녹음하려 해요.** 여러 번 편하게 녹음하고, 가장 마음에 드는 한 테이크를 남겨요.
