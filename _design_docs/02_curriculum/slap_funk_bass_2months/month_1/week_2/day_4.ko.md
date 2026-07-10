---
title: "첫 슬랩 그루브 — 옥타브 초안 완성"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 첫 슬랩 그루브, 옥타브 초안

## ① 이론/설명

2주차의 마지막 날이에요! 어제까지 옥타브 T-P를 익히고 거기에 리듬을 입혔어요. 오늘은 그 조각들을 하나로 이어 **첫 슬랩 그루브**를 완성합니다. 이름은 거창하지만, 실은 <mark>썸(루트)-쉼-팝(옥타브)-쉼</mark>이 반복되는 아주 단순한 **8분 그루브**예요.

왜 사이사이 **쉼(빈 자리)**을 둘까요? 지금은 비워 두지만, **3주차에 이 자리를 고스트(뮤트)로 채워** 넣을 거예요. 그 틈을 미리 마련해 두는 셈이에요. 그래서 오늘은 <mark>빈 쉼표를 정확히 지키며</mark> 썸과 팝만 또렷이 찍는 게 핵심이에요. 손모양은 그대로 **옥타브**예요.

속도는 **BPM 70**. 지난 며칠보다 살짝 빨라졌지만, 서두르지 말고 <mark>둥-딱이 균일하고 그루브가 흔들리지 않는 선</mark>에서만 돌려요. 먼저 4분음표 준비로 손을 데운 뒤, 8분 그루브로 넘어가요. 두 마디가 매끄럽게 반복되면, 그게 바로 이번 주의 완성물이에요. 사실 오늘 치는 이 여덟 음이, 이번 달 내내 다듬어 갈 **첫 번째 진짜 그루브의 뼈대**예요. 화려하진 않아도, 여기에 3주차 고스트와 다음 변주가 얹히면 어엿한 펑크 라인이 돼요. 그러니 지금은 뼈대를 튼튼하고 반듯하게 세우는 데에만 집중해요.

**5현**이라면 음은 4현과 완전히 똑같아요 — 저음 B를 엄지로 덮어 두거나, 익숙해지면 같은 그루브를 B현 루트로 옮겨 더 묵직하게 시험해 봐요. 자, 이번 주에 쌓은 걸 하나의 그루브로 완성해요.

## ② 시각 자료

오늘은 **이번 주의 완성물**을 만들어요. 옥타브 손모양을 한 번 짚고, 4분음표 준비로 손을 데운 뒤, <mark>핀 고정 옥타브 그루브</mark>를 돌려요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **옥타브 손모양**. 아래 파랑이 썸으로 칠 루트 E(4번현), 위 파랑이 팝으로 튕길 옥타브 E(2번현 2프렛)예요.

```json
{
  "id": "m1.w2.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래 루트 E(썸), 위 옥타브 E(팝). 이번 주 내내 다진 그 손모양이에요.

```json
{
  "id": "m1.w2.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

**준비 — 4분음표 옥타브 T-P.** 그루브 전에 루트(썸)-옥타브(팝)를 한 박씩 천천히 데워요.

```json
{
  "id": "m1.w2.d4.groove_prep_4",
  "type": "tab",
  "meta": { "title": "Octave groove prep (quarters) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 서두르지 말고 옥타브 점프를 다시 깨끗이 맞춰 둬요.

```json
{
  "id": "m1.w2.d4.groove_prep_5",
  "type": "tab",
  "meta": { "title": "Octave groove prep (quarters) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

**이번 주 완성물 — 러프 옥타브 슬랩 그루브.** 이제 8분음표로. <mark>썸(루트)-쉼-팝(옥타브)-쉼</mark>을 두 마디 반복해요. 빈 자리는 3주차에 고스트로 채울 거예요.

```json
{
  "id": "m1.w2.d4.octave_groove_rough_4",
  "type": "tab",
  "meta": { "title": "Octave slap groove (rough) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 썸(루트)-쉼-팝(옥타브)-쉼 반복. 빈 자리는 3주차에 고스트로 채울 거예요.

```json
{
  "id": "m1.w2.d4.octave_groove_rough_5",
  "type": "tab",
  "meta": { "title": "Octave slap groove (rough) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 더 묵직하게 시험해 봐도 좋아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 두 리듬(16분 더블·엇박)을 BPM 60으로 가볍게 풀어 손을 깨워요.

**10~20분 · 두뇌 훈련**
옥타브 손모양으로 준비 예제(4분음표)를 아주 느리게. <mark>점프가 깨끗하고 쉼이 정확한지</mark> 확인해요.

**20~40분 · 실전 (이번 주 완성물)**
핀 고정 그루브를 **BPM 70**에서 반복해요. 두 마디가 매끄럽게 이어지는 게 목표 — 흔들리면 준비 예제로 돌아가요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>둥-딱이 균일하고 쉼이 또렷한지</mark> 들어봐요. 이번 주 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 러프 옥타브 슬랩 그루브(썸 루트+팝 옥타브, 8분)를 BPM 70에서 쉼까지 지켜 두 마디 매끄럽게, 4현·5현 둘 다 칠 수 있다. (2주차 완성!)

## ④ 팁 / 흔한 실수

- **쉼을 못 참아요.** 빈 자리를 자꾸 음으로 채우면 3주차 고스트가 들어갈 틈이 없어요. 지금은 침묵을 정확히 지켜요.
- **70에서 급해져요.** 살짝 빨라진 속도에 둥-딱이 밀려요. 흔들리면 준비 예제(4분음표)로 내려가 다시 균일부터.
- **팝만 커요.** 팝이 튀어 크게 들리기 쉬워요. 썸을 조금 더 힘 있게 쳐 두 소리 크기를 맞춰요.
- **저음 B 방심(5현).** 그루브가 반복될수록 B가 새기 쉬워요. 엄지로 늘 B를 덮어 두세요.
