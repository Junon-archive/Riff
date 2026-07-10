---
title: "양손 뮤팅 — 잡음 없는 고스트"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 양손 뮤팅, 잡음 없는 고스트

## ① 이론/설명

어제 **썸-칙-팝**을 하나로 이었어요. 오늘은 그 흐름을 <mark>깨끗하게</mark> 닦아요. 목표는 **양손 뮤팅** — **안 친 줄을 침묵시키고, 고스트("칙")는 정확히** 내는 거예요. 슬랩이 지저분하게 들리는 대부분의 이유는 틀린 음이 아니라, **울리면 안 될 줄이 새는 잡음**이거든요.

뮤팅은 **두 손이 함께** 해요. **왼손**은 고스트를 낼 때 여러 줄에 넓게 얹혀 <mark>안 치는 줄까지 덮어</mark> 재워요. **오른손**은 엄지 옆면이나 손바닥으로 저음 줄에 기대어, 팝을 튕기는 순간에도 아래 줄이 딸려 울지 않게 눌러 둬요. 이렇게 두 손이 **필요 없는 소리를 미리 꺼 두면**, 남는 건 의도한 둥·칙·딱뿐이에요.

오늘은 어제의 흐름에 뒤쪽 고스트를 하나 더 붙여 **썸-칙-팝-칙**을 완성해요. 빈 두 자리를 "칙"으로 모두 채운 꽉 찬 8분 흐름이에요. 다만 오늘의 관건은 속도가 아니라 <mark>깨끗함</mark>이에요. **BPM 60**에서 4분음표로 뮤팅을 점검한 뒤, **BPM 70**에서 8분음표로 이어요. 뮤팅은 눈이 아니라 **귀로 점검**해요 — 한 소절 친 뒤 손을 멈추면 아무 소리도 남지 않아야 정상이에요. 만약 잔향이 웅웅 남는다면, 그건 어딘가 줄이 덜 덮였다는 신호예요. 속도를 올리기 전에 그 줄부터 찾아 재워요.

**5현**이라면 뮤팅이 더 중요해요. 저음 B가 하나 더 있으니, 엄지로 늘 덮어 두지 않으면 쉽게 웅웅거려요. 오늘은 소리를 늘리기보다 **새는 소리를 끄는** 데 집중해요.

## ② 시각 자료

먼저 **옥타브 손모양**을 확인해요 — 아래 파랑이 썸(루트 E), 위 파랑이 팝(옥타브 E)이에요. 오늘은 여기에 뒤 고스트를 더해 <mark>썸-칙-팝-칙</mark>을 완성하되, 안 친 줄이 조용한지에 집중해요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w3.d3.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래 루트 E(썸), 위 옥타브 E(팝). "칙"은 3번현, 나머지 줄은 손으로 덮어 재워요.

```json
{
  "id": "m1.w3.d3.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 B는 엄지로 꼭 덮어 두세요.

**예제 1 — 썸-칙-팝-칙 4분음표.** 네 타격을 한 박씩 크게 벌려 뮤팅을 점검해요. 매 타격 사이, 안 친 줄이 조용한지 봐요.

```json
{
  "id": "m1.w3.d3.tgpg_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 둥-칙-딱-칙을 한 박씩 크게. 팝을 튕길 때 저음 줄이 딸려 울지 않는지 확인해요.

```json
{
  "id": "m1.w3.d3.tgpg_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 손모양은 4현과 똑같아요. 저음 B가 새지 않게 엄지로 덮어 두세요.

**예제 2 — 썸-칙-팝-칙 8분음표.** 빈 자리를 모두 "칙"으로 채운 꽉 찬 흐름이에요. 빨라져도 <mark>잡음이 새지 않게</mark> 뮤팅을 유지해요.

```json
{
  "id": "m1.w3.d3.tgpg_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 둥-칙-딱-칙이 꽉 차게 이어져요. 한 소절 뒤 안 친 줄에서 웅웅거림이 없는지 들어봐요.

```json
{
  "id": "m1.w3.d3.tgpg_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 4현과 음이 똑같아요. 저음 B가 하나 더 있으니 엄지 뮤팅을 더 신경 써요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 썸-칙-팝을 BPM 60으로 몇 번 흘려 손을 깨워요. 오늘은 여기에 뒤 "칙"이 하나 더 붙어요.

**10~20분 · 두뇌 훈련**
예제 1(4분음표)을 아주 느리게, 매 타격 사이 <mark>안 친 줄이 완전히 조용한지</mark>만 집중해 확인해요.

**20~40분 · 실전**
예제 1(4분음표)을 **BPM 60**에서 다진 뒤 예제 2(8분음표)로 넘어가 **BPM 70**. 잡음이 새면 속도를 올리지 말고 뮤팅부터 손봐요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>의도한 소리 외에 잡음이 없는지</mark> 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 썸-칙-팝-칙을 BPM 60~70에서 안 친 줄 잡음 없이, 고스트를 정확히 넣어 4현·5현 둘 다 깨끗하게 칠 수 있다.

## ④ 팁 / 흔한 실수

- **팝 뒤 저음이 웅웅.** 팝을 튕길 때 아래 줄이 딸려 울어요. 오른손 엄지 옆면을 저음 줄에 살짝 기대 눌러요.
- **고스트가 너무 커요.** 뮤팅에 신경 쓰다 "칙"을 세게 쳐요. 고스트는 둥·딱보다 살짝 작게, 잔가락처럼 가볍게.
- **왼손이 좁아요.** 고스트 손이 한 줄만 덮으면 옆 줄이 새요. 손가락을 여러 줄에 넓게 걸쳐요.
- **저음 B 방심(5현).** 줄이 하나 더 많으니 B가 제일 잘 새요. 엄지로 늘 B를 덮어 두세요.
