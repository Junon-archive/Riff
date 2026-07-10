---
title: "16 싱코 그루브 — 앞으로 굴러가는 펑크"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — 16 싱코 그루브, 앞으로 굴러가는 펑크

## ① 이론/설명

5주차의 마지막 날이에요! 이번 주에 배운 걸 **하나로 엮는** 날이죠. **16 격자**(D1) 위에 **T·P·고스트를 배치**(D2)하고, 거기에 **당김음**(D3)까지 얹으면 — 오늘의 완성물, <mark>16비트 싱코 슬랩 그루브</mark>가 돼요. M1의 8분 그루브가 이제 **펑크로 진화**했어요.

오늘 그루브의 맛은 **3박 근처의 16분 푸시**예요. 팝(딱) 뒤에 **16분 하나가 살짝 당겨** 들어오는데, 이 작은 밀림 하나가 그루브를 <mark>앞으로 굴려요</mark>. 나머지는 익숙한 **썸(둥)-고스트(칙)-팝(딱)** 조합이에요. **BPM 80**으로 느리게 시작해, 그 **푸시 한 칸**이 살아 있는지에 집중해요.

방법은 늘 같아요. 먼저 **8분 준비 그루브**로 손을 데우고, 완성 그루브를 **아주 느리게** 돌려 **푸시 자리**를 확인한 뒤, **BPM 80**에서 매끄럽게 이어요. 오늘은 여기에 **녹음**까지 더해요 — 이번 주의 결과물을 남기는 거예요. 완벽하지 않아도 괜찮아요. 고스트로 사이를 채워 <mark>멈추지 않고</mark> 두세 바퀴 돌리면, 그게 좋은 녹음이에요.

**5현**이라면 음도 이동도 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두거나, 익숙하면 저음 B의 묵직함으로도 녹음해 봐요. 오늘 이 그루브를 남기면 **5주차 완성**이에요. 다음 주엔 이 싱코 감각을 **더 긴 그루브**로 키워요. 자, 손모양부터 지판으로 짚어요 — **루트 E와 옥타브 E**예요.

```json
{
  "id": "m2.w5.d4.octave_box_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box (E) — thumb root + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래 **루트 E**(썸), 위 **옥타브 E**(팝). 오늘 완성 그루브가 오가는 두 자리예요.

```json
{
  "id": "m2.w5.d4.octave_box_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box (E) — thumb root + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두세요.

## ② 시각 자료

오늘은 **이번 주의 완성물**을 녹음해요. 먼저 **8분 준비 그루브**로 손을 데우고, <mark>16 싱코 그루브</mark>를 돌려 남겨요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **8분 준비 그루브**(썸-칙-팝-칙). 완성 그루브에 앞서 손과 뮤팅을 데워요.

```json
{
  "id": "m2.w5.d4.prep_groove_4",
  "type": "tab",
  "meta": { "title": "Eighth-note prep groove (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 썸-칙-팝-칙. 완성 그루브의 손 자리를 미리 데워요.

```json
{
  "id": "m2.w5.d4.prep_groove_5",
  "type": "tab",
  "meta": { "title": "Eighth-note prep groove (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

**이번 주 완성물 — 16 싱코 슬랩 그루브.** E 옥타브에 <mark>16분 푸시</mark>를 얹은, 이번 주의 결과물이에요.

```json
{
  "id": "m2.w5.d4.sixteenth_synco_4",
  "type": "tab",
  "meta": { "title": "16th syncopated slap groove — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80(느리게 시작).** 3박 근처의 **16분 푸시**(썸이 살짝 당겨 들어옴)가 싱코페이션의 맛. 고스트로 사이를 채워 계속 굴러가게 해요.

```json
{
  "id": "m2.w5.d4.sixteenth_synco_5",
  "type": "tab",
  "meta": { "title": "16th syncopated slap groove — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 저음 B의 묵직함으로 한 버전 더 녹음해 봐도 좋아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
8분 준비 그루브를 **BPM 60**으로 가볍게 흘려 손을 깨워요. 오늘은 이 흐름을 <mark>그대로 녹음에 담을</mark> 거예요.

**10~20분 · 두뇌 훈련**
완성 그루브를 아래처럼 **아주 느리게** 돌리며, **16분 푸시** 한 칸의 자리를 손에 새겨요.

```json
{
  "id": "m2.w5.d4.synco_slow_4",
  "type": "tab",
  "meta": { "title": "16th syncopated groove, slow (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 아주 느리게. **팝 뒤 16분 푸시**가 다음 썸을 당기는 자리를 또렷이 짚어요.

```json
{
  "id": "m2.w5.d4.synco_slow_5",
  "type": "tab",
  "meta": { "title": "16th syncopated groove, slow (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 저음 B는 엄지 옆면으로 덮어 두세요.

**20~40분 · 실전**
완성 그루브를 **BPM 80**에서 반복해요. **16분 푸시**가 뭉개지면 속도를 낮춰 그 한 칸부터 또렷하게 살려요. 4현으로 익힌 뒤 5현으로도 같은 그루브를 확인해요.

**40~50분 · 녹음/피드백**
드디어 녹음이에요. **BPM 80**에서 두세 바퀴를 멈추지 말고 녹음해, 그중 제일 좋은 한 판을 <mark>이번 주 그루브로 남겨요</mark>. 4현·5현 둘 다 남기면 5주차 완성이에요.

**오늘의 완료 기준:** 16비트 싱코 슬랩 그루브(팝 뒤 16분 푸시)를 BPM 80에서 4현·5현으로 멈추지 않고 녹음할 수 있다. — 주간 결과물: 나의 첫 16 싱코 슬랩 그루브 녹음. (5주차 완성!)

## ④ 팁 / 흔한 실수

완성 그루브를 **BPM 90**으로 살짝 밀어, 빨라져도 푸시가 살아 있는지 확인해요.

```json
{
  "id": "m2.w5.d4.synco_check_4",
  "type": "tab",
  "meta": { "title": "16th syncopated groove check (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 90, 4현.** 조금 빨라져도 **팝 뒤 16분 푸시**가 뭉개지지 않는지 확인해요.

```json
{
  "id": "m2.w5.d4.synco_check_5",
  "type": "tab",
  "meta": { "title": "16th syncopated groove check (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 저음 B는 늘 엄지로 덮어 두세요.

- **녹음만 켜면 긴장해요.** 마이크 앞에서 손이 굳어요. 녹음 중이란 걸 잊고, 연습하듯 편하게 여러 번 돌려요.
- **푸시를 급하게 당겨요.** 16분 푸시를 서두르면 박이 무너져요. 당기는 건 **그 한 칸**뿐, 나머지는 그대로예요.
- **고스트가 사라져요.** 녹음에 집중하다 사이 칸이 흐려져요. **음정 없는 '칙'**으로 계속 굴러가게 해요.
- **저음 B 방심(5현).** 녹음에 집중하다 B가 새기 쉬워요. 엄지 옆면으로 늘 B를 덮어 두세요.
