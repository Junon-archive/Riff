---
title: "요소 종합 — 옥타브·고스트·팝을 한 마디에"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 요소 종합, 옥타브·고스트·팝을 한 마디에

## ① 이론/설명

드디어 **8주차**, 마지막 주예요! 8주 전엔 슬랩 소리 하나 내기도 힘들었는데, 이제 <mark>옥타브·고스트·팝</mark>을 한 손에 쥐고 있어요. 이번 주는 그동안 배운 조각들을 **하나의 그루브**로 녹여, 클래식 펑크 냄새가 나는 졸업곡을 완성해요. 오늘 Day 1은 그 첫 단추 — **옥타브+고스트 그루브**에 **팝 필**을 얹어 딱 한 마디를 만들어요.

그루브의 뼈대는 이미 익숙해요. 4번현 개방 **E**를 엄지로 치고(**R**), 사이를 **고스트**로 채운 뒤, 2번현 2프렛의 옥타브 **E**를 손가락으로 튕겨요(**8**). 이 <mark>썸-고스트-팝</mark>이 드럼의 킥-스네어처럼 굴러가요. 오늘은 이 그루브 뒤에, 1번현에서 **b3-4-5** 팝 필을 살짝 얹어 한 마디를 채워요.

팝 필은 화려할 필요 없어요. **G현**에서 b3(개방)·4(2프렛)·5(4프렛)를 <mark>또박또박</mark> 걸어 튕기면, 그루브가 노래처럼 살짝 고개를 들어요. **BPM 85**가 목표지만, 오늘은 느리게 시작해 그루브와 필의 **연결**부터 매끄럽게 만들어요. 필로 넘어갈 때 서두르면 박자가 밀리니, **한 박씩** 또렷하게 짚어요.

**5현**이라도 손 모양은 똑같아요. 저음 **B**는 엄지 옆면으로 덮어 재워 두고, 그루브와 팝 필에만 집중해요. 5현이라면 저음 B 루트로 <mark>더 묵직한</mark> 버전도 가능하지만, 오늘은 같은 E 자리로 감을 잡아요. 먼저 그루브와 필이 지나는 자리를 지판으로 찍어요 — 오늘 한 마디는 전부 여기서 나와요.

```json
{
  "id": "m2.w8.d1.groove_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave groove + pop fill map — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 4번현 **R**(E)과 2번현 옥타브 **8**(E)이 그루브, G현의 **b3·4·5**가 팝 필이에요.

```json
{
  "id": "m2.w8.d1.groove_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave groove + pop fill map — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두세요.

## ② 시각 자료

오늘은 **한 마디**를 완성해요! 먼저 **옥타브+고스트 그루브**로 손을 데운 뒤, 거기에 <mark>b3-4-5 팝 필</mark>을 얹어요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **옥타브+고스트 그루브**. 4번현 **E**를 엄지로 치고, 사이를 고스트로 채우고, 2번현 옥타브 **E**를 팝해요.

```json
{
  "id": "m2.w8.d1.octave_groove_4",
  "type": "tab",
  "meta": { "title": "Octave + ghost groove — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75, 4현.** 썸-고스트-팝이 굴러가는 그루브의 뼈대예요.

```json
{
  "id": "m2.w8.d1.octave_groove_5",
  "type": "tab",
  "meta": { "title": "Octave + ghost groove — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

이제 그루브 뒤에 **팝 필**을 얹어요. 앞 반은 옥타브 그루브, 뒤 반은 **b3-4-5** 팝으로 <mark>노래하듯</mark> 마무리해요.

```json
{
  "id": "m2.w8.d1.groove_fill_4",
  "type": "tab",
  "meta": { "title": "Groove + pop fill (one measure) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 85, 4현.** 앞은 옥타브 그루브, 뒤는 b3-4-5 팝 필. 오늘의 완성 한 마디예요.

```json
{
  "id": "m2.w8.d1.groove_fill_5",
  "type": "tab",
  "meta": { "title": "Groove + pop fill (one measure) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
7주차 팝 아치를 **BPM 50**으로 가볍게 흔들어 손을 깨워요. 오늘은 <mark>그루브와 팝</mark>을 한 마디에 이어 볼 거예요.

**10~20분 · 두뇌 훈련**
완성 한 마디를 아래처럼 **아주 느리게** 돌리며, 그루브에서 팝 필로 넘어가는 **연결**을 손에 새겨요.

```json
{
  "id": "m2.w8.d1.combo_slow_4",
  "type": "tab",
  "meta": { "title": "Groove + fill, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 아주 느리게. 옥타브 그루브 뒤 b3-4-5 필이 제자리에 오는지 확인해요.

```json
{
  "id": "m2.w8.d1.combo_slow_5",
  "type": "tab",
  "meta": { "title": "Groove + fill, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 저음 B는 엄지 옆면으로 덮어 두세요.

**20~40분 · 실전**
완성 한 마디를 **BPM 85**에서 반복해요. 필이 <mark>뭉개지면</mark> 속도를 낮춰 그루브와 팝을 따로 살려요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>그루브와 필이 매끄럽게 이어지는지</mark> 들어봐요. 오늘 편했던 BPM도 적어 둬요.

**오늘의 완료 기준:** 옥타브+고스트 그루브에 b3-4-5 팝 필을 얹은 완성 한 마디를 BPM 85에서 매끄럽게 연주할 수 있다.

## ④ 팁 / 흔한 실수

완성 한 마디를 **BPM 90**으로 살짝 밀어, 빨라져도 그루브와 필이 살아 있는지 확인해요.

```json
{
  "id": "m2.w8.d1.groove_fill_check_4",
  "type": "tab",
  "meta": { "title": "Groove + fill check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 90, 4현.** 조금 빨라져도 **옥타브 그루브와 팝 필**이 또렷하게 살아 있는지 확인해요.

```json
{
  "id": "m2.w8.d1.groove_fill_check_5",
  "type": "tab",
  "meta": { "title": "Groove + fill check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 저음 B는 늘 엄지로 덮어 두세요.

- **필이 밀려요.** 그루브에서 필로 넘어갈 때 서두르면 밀려요. **한 박씩** 또렷하게 짚어요.
- **옥타브가 약해요.** 2번현 옥타브 팝이 여려지기 쉬워요. 썸과 **같은 크기**로 튕겨요.
- **고스트가 울려요.** 사이를 채우는 고스트에 음이 남으면 지저분해요. **음 없이** 탁 소리만 내요.
- **저음 B 방심(5현).** 그루브에 몰두하다 B가 울리기 쉬워요. 엄지 옆면으로 늘 B를 덮어 두세요.
</content>
</invoke>
