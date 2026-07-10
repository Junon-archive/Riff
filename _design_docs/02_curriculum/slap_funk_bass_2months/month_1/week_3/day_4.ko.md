---
title: "고스트 그루브 — 튀는 옥타브 완성"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 고스트 그루브, 튀는 옥타브 완성

## ① 이론/설명

3주차의 마지막 날이에요! 이번 주에 익힌 **데드노트("칙")**, **T-고스트-P**, **양손 뮤팅**을 하나로 모아 <mark>고스트 그루브</mark>를 완성해요. 2주차에 만든 러프 옥타브 그루브 기억나죠? 그때 비워 뒀던 두 자리를 이제 **고스트로 모두 채운 버전**이 오늘의 결과물이에요.

패턴은 **썸-칙-팝-칙**의 반복이에요. 엄지로 루트 E를 '둥', 3번현에 "칙", 옥타브를 '딱', 다시 "칙" — 이 네 타격이 8분음표로 쉼 없이 굴러가요. 지난주엔 둥과 딱 사이가 텅 비어 뚝뚝 끊겼는데, 그 자리를 "칙"이 메우니 그루브가 갑자기 <mark>펑키하게 튀기</mark> 시작해요. 이 잔가락이 바로 슬랩의 바운스 엔진이에요.

속도는 **BPM 75**. 이번 주 중 가장 빨라요. 서두르지 말고, 먼저 4분음표 준비로 손을 데운 뒤 8분 그루브로 넘어가요. **고스트는 둥·딱보다 살짝 작게** 쳐서 잔가락처럼 가볍게, 안 친 줄은 양손으로 재워 잡음을 꺼요. 두 마디가 매끄럽게 반복되면, 그게 이번 주의 완성물이에요. 오늘 완성하는 이 그루브가, 지난 3주 동안 쌓은 **썸·팝·고스트가 하나로 맞물린** 첫 결실이에요. 그러니 속도를 자랑하기보다, 네 타격이 고르게 굴러가는 감각을 몸에 새기는 데 집중해요.

**5현**이라면 음은 4현과 똑같아요. 저음 B를 엄지로 덮어 뮤팅을 유지하거나, 익숙해지면 같은 그루브를 더 묵직한 저음으로 시험해요. 자, 이번 주에 쌓은 "칙"을 하나의 <mark>튀는 그루브</mark>로 완성해요.

## ② 시각 자료

오늘은 **이번 주의 완성물**을 만들어요. 옥타브 손모양을 한 번 짚고, 4분음표 준비로 손을 데운 뒤, <mark>핀 고정 고스트 그루브</mark>를 돌려요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **옥타브 손모양**. 아래 파랑이 썸으로 칠 루트 E, 위 파랑이 팝으로 튕길 옥타브 E예요. 둘 사이 "칙"은 3번현에서 내요.

```json
{
  "id": "m1.w3.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래 루트 E(썸), 위 옥타브 E(팝). "칙"은 3번현에서 내요.

```json
{
  "id": "m1.w3.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

**준비 — 썸-칙-팝-칙 4분음표.** 그루브 전에 네 타격을 한 박씩 천천히 데워요.

```json
{
  "id": "m1.w3.d4.ghost_groove_prep_4",
  "type": "tab",
  "meta": { "title": "Ghost groove prep (quarters) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **BPM 60, 4현.** 서두르지 말고 둥-칙-딱-칙의 순서와 뮤팅을 다시 맞춰 둬요.

```json
{
  "id": "m1.w3.d4.ghost_groove_prep_5",
  "type": "tab",
  "meta": { "title": "Ghost groove prep (quarters) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

**이번 주 완성물 — 고스트가 튀는 옥타브 그루브.** 이제 8분음표로. <mark>썸-칙-팝-칙</mark>을 두 마디 반복해요. 2주차의 빈 자리를 고스트로 채운 버전이에요.

```json
{
  "id": "m1.w3.d4.ghost_octave_groove_4",
  "type": "tab",
  "meta": { "title": "Octave slap groove with ghosts — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75, 4현.** 썸-칙-팝-칙 반복. 고스트("칙")는 왼손을 살짝 얹어 음정 없이. 이 잔가락이 그루브를 살려요.

```json
{
  "id": "m1.w3.d4.ghost_octave_groove_5",
  "type": "tab",
  "meta": { "title": "Octave slap groove with ghosts — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75, 5현.** 음과 위치는 4현과 똑같아요. 저음 B 뮤팅을 유지하며 더 묵직하게 시험해 봐도 좋아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 썸-칙-팝-칙을 BPM 60으로 가볍게 흘려 손을 깨워요. 고스트가 둥·딱보다 살짝 작은지 확인해요.

**10~20분 · 두뇌 훈련**
준비 예제(4분음표)를 아주 느리게. <mark>네 타격의 순서와 뮤팅이 흐트러지지 않는지</mark> 확인해요.

**20~40분 · 실전 (이번 주 완성물)**
핀 고정 고스트 그루브를 **BPM 75**에서 반복해요. 두 마디가 매끄럽게 이어지는 게 목표 — 흔들리면 준비 예제로 돌아가요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>고스트가 살아 그루브가 튀는지, 안 친 줄이 조용한지</mark> 들어봐요. 이번 주 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 고스트가 튀는 옥타브 그루브(썸-칙-팝-칙, 8분)를 BPM 75에서 잡음 없이 두 마디 매끄럽게, 4현·5현 둘 다 칠 수 있다. — 주간 결과물: 튀는 고스트 옥타브 그루브 완주. (3주차 완성!)

## ④ 팁 / 흔한 실수

- **고스트가 너무 커요.** "칙"이 둥·딱만큼 크면 그루브가 둔해져요. 고스트는 살짝 작게, 잔가락처럼 가볍게 쳐요.
- **75에서 급해져요.** 빨라진 속도에 네 타격이 밀려 붙어요. 흔들리면 준비 예제(4분음표)로 내려가 순서부터.
- **팝 뒤 저음이 웅웅.** 팝을 튕길 때 아래 줄이 딸려 울어요. 오른손 엄지 옆면으로 저음 줄을 눌러 재워요.
- **저음 B 방심(5현).** 그루브가 반복될수록 B가 새기 쉬워요. 엄지로 늘 B를 덮어 두세요.
