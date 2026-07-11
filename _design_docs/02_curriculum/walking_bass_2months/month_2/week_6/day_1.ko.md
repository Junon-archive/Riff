---
title: "크로매틱 감싸기 — 목표음을 위·아래로 좁혀 착지"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — 크로매틱 감싸기, 목표음을 위·아래로 좁혀 착지

## ① 이론/설명

드디어 6주차, 워킹 베이스의 마지막 주예요. 지난주 ii-V-I까지 걸었다면, 이번 주는 목표음에 **더 강하게 빨려들듯** 다가가는 법을 배워요. 그 기술의 이름이 **크로매틱 감싸기(enclosure)**예요. <mark>목표음을 반음 위와 반음 아래에서 좁혀 착지</mark>하는, 재즈 워킹의 고급 다가가기예요.

원리는 단순해요. 목표음이 **F**라면, 먼저 반음 위 **Gb**를 짚고, 이어 반음 아래 **E**를 짚은 뒤, 마지막에 **F에 착지**해요. 위에서 한 번, 아래에서 한 번 — 두 이웃음이 목표를 양쪽에서 감싸며 좁혀 오죠. <mark>좁혀 오는 긴장이 착지를 더 강하게</mark> 만들어요.

순서를 몸에 새겨요 — **위 → 아래 → 착지**. 감싸기는 목표음이 무엇이든(루트든 3도든) 똑같이 쓸 수 있는 만능 도구예요. 오늘은 그 첫걸음으로, 목표 **F**를 감싸 한 번 착지해 봐요. 위 Gb와 아래 E가 F라는 집으로 <mark>양쪽에서 문을 닫듯</mark> 데려다줘요.

먼저 목표 **F**를 감싸는 세 음 — 위 **Gb**, 아래 **E**, 그리고 착지점 **F**를 지판에서 봐요.

```json
{
  "id": "m2.w6.d1.enclosure_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" },
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 위 **Gb**(4번현 2프렛), 아래 **E**(4번현 개방), 착지 **F**(4번현 1프렛)예요. 초록 점이 착지 목표예요.

```json
{
  "id": "m2.w6.d1.enclosure_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" },
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 이 감싸기를 **시간 위에** 얹어 걸어 봐요. 위 Gb → 아래 E → 착지 F를 한 박씩 걷고, 마지막 4박은 F의 **3도 A**로 이어요. <mark>세 음이 목표를 좁혀 가는 흐름</mark>을 귀로 느껴 봐요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w6.d1.enclosure_land_4",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1박 **Gb** → 2박 **E** → 3박 **F 착지** → 4박 **A(3도)**예요. 감싸 좁힌 뒤 F에 또박또박 내려앉아요.

```json
{
  "id": "m2.w6.d1.enclosure_land_5",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 더 묵직하게 얹어 볼 수 있어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
지난주 ii-V-I 워킹을 BPM 72로 한 번 걸어, 손끝에 스윙 4분음 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 감싸기를 **BPM 60**의 느린 스윙 4분음으로 또박또박 짚어요. <mark>위·아래 두 이웃음이 F로 정확히 좁혀지는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w6.d1.enclosure_land_slow_4",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 감싸기를 느리게. 위 Gb·아래 E를 지나 F에 정확히 착지해요.

```json
{
  "id": "m2.w6.d1.enclosure_land_slow_5",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **감싸 착지**를 BPM 80에서 반복해요. <mark>착지 F가 앞의 두 음보다 또렷하고 강하게</mark> 들리는지 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해, 감싸 좁힌 뒤 F에 내려앉는 순간이 또렷한지 들어봐요. 착지가 약하면 위·아래 두 음을 조금 더 짧게 끊어 봐요.

**오늘의 완료 기준:** 목표 F를 반음 위 Gb·반음 아래 E로 감싼 뒤, 스윙 4분음으로 4현·5현 둘 다 F에 또박또박 착지할 수 있다.

## ④ 팁 / 흔한 실수

- **착지를 서둘러요.** 위·아래를 감다 신나서 3박 F를 당겨 짚기 쉬워요. 두 이웃음은 각각 정확히 한 박씩, F는 제 박에 내려앉혀요.
- **아래 이웃음을 빠뜨려요.** 위 Gb만 짚고 바로 F로 가면 감싸기가 아니에요. 위·아래를 모두 지나야 좁혀 오는 긴장이 생겨요.

오늘 감싼 목표, F 한 점을 눈에 새겨 둬요. 감싸기는 결국 이 한 점으로 데려가는 기술이에요.

```json
{
  "id": "m2.w6.d1.target_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 오늘의 착지점 F(4번현 1프렛)예요. 초록 점 하나로 모든 감싸기가 모여요.

```json
{
  "id": "m2.w6.d1.target_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 F도 가늠해 볼 수 있어요.

- **첫날을 스스로 칭찬해요.** 감싸기라는 고급 다가가기의 문을 연 것만으로 큰 걸음이에요. 내일은 이 감싸기로 코드의 **루트**를 겨냥해, 워킹의 출발점을 더 단단히 만들어요.
