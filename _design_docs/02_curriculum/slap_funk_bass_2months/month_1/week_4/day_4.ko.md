---
title: "졸업 녹음 — 나의 첫 슬랩 그루브"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 졸업 녹음, 나의 첫 슬랩 그루브

## ① 이론/설명

드디어 4주차의 마지막 날, **1개월차 졸업식**이에요! 오늘 할 일은 딱 하나 — 지난 3주 동안 다듬어 온 그루브를 <mark>완성곡으로 녹음</mark>하는 거예요. 3주 전 첫날을 떠올려 봐요. 엄지로 줄 한 번 때리는 것도 어색했는데, 오늘은 **E→G 옥타브 그루브**를 녹음하는 나예요. 이게 바로 **성장**이에요.

녹음은 어렵지 않아요. 휴대폰 하나면 충분해요. 중요한 건 완벽이 아니라 **남기는 것**이에요. 어제 익힌 <mark>멈추지 않는 감각</mark> 그대로, 메트로놈 **BPM 80**을 켜고 두세 바퀴 돌려요. 한 음쯤 틀려도 흐름이 살아 있으면 그게 좋은 녹음이에요. 완벽한 한 판을 기다리기보다, **여러 번 녹음해 그중 제일 좋은 걸** 고르면 돼요.

오늘의 완성물은 **E→G 옥타브+고스트 그루브**예요. **1마디는 E**(썸 4번현 개방·팝 2번현 2프렛), **2마디는 G**(썸 4번현 3프렛·팝 2번현 5프렛), 그 사이를 **고스트("칙")**가 메워요. 썸-칙-팝-칙이 8분음표로 굴러가는, 지난 3주가 통째로 담긴 두 마디예요. 먼저 4분음표 준비로 손을 데우고, **BPM 80**에서 두 마디를 매끄럽게 이은 뒤 녹음 버튼을 눌러요.

**5현**이라면 음도 이동도 4현과 똑같아요. 저음 B를 엄지로 덮어 두거나, 익숙해지면 저음 B의 묵직한 저음으로도 녹음해 봐요. 다음 달엔 이 그루브를 발판으로 **펑크 응용**(싱코페이션·레가토·팝핑)으로 나아가요. 오늘의 녹음이 그 출발선이에요 — 자, <mark>나의 첫 슬랩 그루브</mark>를 남겨요.

## ② 시각 자료

오늘은 **이번 달의 완성물**을 녹음해요. **이동 맵**으로 손길을 한 번 짚고, 4분음표 준비로 손을 데운 뒤, <mark>핀 고정 그루브</mark>를 돌려 녹음해요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **이동 맵**. 아래가 **E 자리**, 위가 **G 자리**예요. 두 옥타브 폼 사이를 세 칸 오가요.

```json
{
  "id": "m1.w4.d4.move_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E→G move map — thumb roots + pop octaves — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래가 E 자리, 위가 G 자리. 두 옥타브 폼 사이를 세 칸 미끄러져 오가요.

```json
{
  "id": "m1.w4.d4.move_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E→G move map — thumb roots + pop octaves — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 자리와 이동은 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

**준비 — 썸-칙-팝-칙 4분음표.** 녹음 전에 E와 G를 한 박씩 천천히 데워요.

```json
{
  "id": "m1.w4.d4.octave_ghost_prep_4",
  "type": "tab",
  "meta": { "title": "Octave+ghost groove prep (quarters, E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 1마디 E, 2마디 G. 서두르지 말고 이동과 뮤팅을 다시 맞춰 둬요.

```json
{
  "id": "m1.w4.d4.octave_ghost_prep_5",
  "type": "tab",
  "meta": { "title": "Octave+ghost groove prep (quarters, E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 이동은 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

**이번 달 완성물 — 옥타브+고스트 그루브(E→G).** 이제 8분음표로. <mark>썸-칙-팝-칙</mark>을 E 한 마디, G 한 마디 반복해 녹음해요.

```json
{
  "id": "m1.w4.d4.octave_ghost_song_4",
  "type": "tab",
  "meta": { "title": "Octave+ghost slap groove (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
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
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80.** 1마디 E, 2마디 G(썸 루트 4번현 3프렛, 팝 옥타브 2번현 5프렛). 썸-칙-팝-칙 유지. 이 두 마디가 오늘의 녹음 대상이에요.

```json
{
  "id": "m1.w4.d4.octave_ghost_song_5",
  "type": "tab",
  "meta": { "title": "Octave+ghost slap groove (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
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
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 이동은 4현과 똑같아요. 저음 B의 묵직한 저음으로 한 버전 더 녹음해 봐도 좋아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 풀 런스루를 BPM 60으로 가볍게 흘려 손을 깨워요. 오늘은 그 흐름을 <mark>그대로 녹음에 담을</mark> 거예요.

**10~20분 · 두뇌 훈련**
준비 예제(4분음표)로 E와 G의 이동과 뮤팅을 점검해요. <mark>이음새가 흔들리지 않는지</mark> 확인해요.

**20~40분 · 실전**
핀 고정 그루브를 **BPM 80**에서 반복해요. 두 마디가 매끄럽게 이어지면 녹음할 준비가 된 거예요. 4현으로 익힌 뒤 5현으로도 같은 흐름을 확인해요.

**40~50분 · 녹음/졸업**
드디어 녹음이에요. **BPM 80**에서 두세 바퀴를 멈추지 말고 녹음해, 그중 제일 좋은 한 판을 <mark>내 첫 그루브로 남겨요</mark>. 4현·5현 둘 다 남기면 1개월차 완성이에요.

**오늘의 완료 기준:** 옥타브+고스트 슬랩 그루브(E→G)를 BPM 80에서 4현·5현으로 멈추지 않고 녹음할 수 있다. — 월간 결과물: 나의 첫 옥타브 슬랩 그루브 녹음. (1개월차 졸업!)

## ④ 팁 / 흔한 실수

- **녹음만 켜면 긴장해요.** 마이크 앞에서 손이 굳어요. 녹음 중이란 걸 잊고, 연습하듯 편하게 여러 번 돌려요.
- **한 번에 완벽하려 해요.** 첫 테이크에 목매지 마세요. 여러 판 녹음해 그중 제일 나은 걸 고르면 돼요.
- **이동에서 속도가 흔들려요.** E→G에서 급해지기 쉬워요. 준비 예제로 이음새부터 다시 데운 뒤 녹음해요.
- **저음 B 방심(5현).** 녹음에 집중하다 B가 새기 쉬워요. 엄지로 늘 B를 덮어 두세요.
