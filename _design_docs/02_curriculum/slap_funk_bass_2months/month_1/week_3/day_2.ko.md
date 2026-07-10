---
title: "T-고스트-P — 썸·칙·팝을 하나로"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — T-고스트-P, 썸·칙·팝을 하나로

## ① 이론/설명

어제 만든 **깨끗한 고스트("칙")**를 오늘은 그루브의 재료로 써요. 오늘의 목표는 **T-고스트-P** — 즉 **썸(둥)-칙-팝(딱)** 세 타격을 하나의 흐름으로 잇는 거예요. 이 세 박자가 이번 주 그루브의 <mark>심장</mark>이에요.

순서를 소리로 그려 봐요. 엄지로 **루트 E(4번현)**를 '둥', 곧바로 왼손 고스트로 **3번현에 "칙"**, 이어서 검지로 **옥타브(2번현 2프렛)**를 '딱'. 드럼으로 치면 <mark>킥-하이햇-스네어</mark>가 순서대로 지나가는 셈이에요. "칙" 하나가 둥과 딱 사이를 메워, 밋밋하던 두 음이 갑자기 굴러가기 시작해요.

오늘은 욕심내지 말고 **T-고스트-P를 또박또박 흐르게** 하는 데만 집중해요. 세 타격 뒤에는 **쉼**을 하나 둬서, 손이 다음 묶음을 준비할 여유를 줘요. **BPM 60**에서 4분음표로 세 타격을 크게 벌려 익힌 뒤, **BPM 65**에서 8분음표로 촘촘히 이어요. 셋의 <mark>간격이 고른지</mark>가 관건이에요. 처음엔 팝이 급하게 따라붙기 쉬우니, **"칙"을 하나의 독립된 타격으로** 또렷이 세어 가며 벌려요. 세 소리가 각자 자리를 지키면 그다음 속도는 저절로 붙어요.

**5현**이라면 음도 손모양도 4현과 똑같아요. 저음 B는 엄지로 덮어 두고, 익숙해지면 같은 T-고스트-P를 더 묵직한 저음으로도 시험해요. 오늘은 세 타격이 매끄럽게 이어지는 감각 하나만 손에 새겨요. 오늘 이 셋이 하나로 붙으면, 이번 주 그루브가 눈앞에 거의 다 완성돼요.

## ② 시각 자료

먼저 **옥타브 손모양**을 다시 짚어요 — 아래 파랑이 썸으로 칠 루트 E, 위 파랑이 팝으로 튕길 옥타브 E예요. 그 사이 "칙"은 3번현에 왼손을 얹어 내요. 손모양을 확인한 뒤 <mark>썸-칙-팝</mark>을 4분음표로 크게, 8분음표로 촘촘히 이어요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w3.d2.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래 루트 E(썸), 위 옥타브 E(팝). 둘 사이 "칙"은 3번현에서 내요.

```json
{
  "id": "m1.w3.d2.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

**예제 1 — T-고스트-P 4분음표.** 세 타격을 한 박씩 크게 벌려요. 썸(둥)-칙-팝(딱) 뒤에 쉼 하나예요.

```json
{
  "id": "m1.w3.d2.tgp_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 둥(T)-칙-딱(P)-쉼. 셋 사이 간격이 고른지 천천히 확인해요.

```json
{
  "id": "m1.w3.d2.tgp_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 손모양은 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

**예제 2 — T-고스트-P 8분음표.** 이제 촘촘히. 한 마디에 <mark>썸-칙-팝-쉼</mark>을 두 번 넣어요.

```json
{
  "id": "m1.w3.d2.tgp_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 한 박 안에 둥-칙-딱이 흐르게. 빨라져도 "칙"이 뭉개지지 않게.

```json
{
  "id": "m1.w3.d2.tgp_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 4현과 음이 똑같아요. 여기서도 저음 B는 엄지로 재워 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 "칙"을 BPM 60으로 몇 번 내 손을 깨워요. 음정이 없는지 다시 귀로 확인해요.

**10~20분 · 두뇌 훈련**
썸-칙-팝을 아주 느리게 한 타격씩 끊어 짚어요. <mark>세 소리의 성격이 또렷이 다른지</mark>(둥·칙·딱) 하나씩 확인해요.

**20~40분 · 실전**
예제 1(4분음표)을 **BPM 60**에서 반복 → 세 타격이 고르면 예제 2(8분음표)로 넘어가 **BPM 65**. 흐름이 엉키면 다시 4분음표로 내려와요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>둥-칙-딱이 순서대로 또렷이 들리는지</mark> 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 썸(루트)-고스트("칙")-팝(옥타브)을 BPM 60~65에서 세 타격이 고르게 이어지도록, 4현·5현 둘 다 흐르게 칠 수 있다.

## ④ 팁 / 흔한 실수

- **"칙"이 사라져요.** 둥과 딱만 신경 쓰다 보면 중간 고스트가 묻혀요. "칙"도 하나의 타격으로 또렷이 찍어요.
- **팝이 급해요.** "칙" 뒤에 팝이 밀려 붙으면 흐름이 엉켜요. 4분음표로 내려가 셋의 간격부터 벌려요.
- **손모양이 흔들려요.** 고스트를 내다 옥타브 폼이 풀리면 팝이 빗나가요. 손모양은 유지한 채 왼손만 살짝 얹었다 떼요.
- **저음 B 방심(5현).** 손이 바빠지면 B가 새기 쉬워요. 엄지로 늘 B를 덮어 두세요.
