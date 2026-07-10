---
title: "슬랩 + 레가토 — E 마이너 펜타에서"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 슬랩 + 레가토, E 마이너 펜타에서

## ① 이론/설명

이틀 동안 **해머온**(올라가기)과 **풀오프**(내려가기)를 따로 익혔어요. 오늘은 둘을 **하나로 엮어**, 슬랩에 <mark>멜로디</mark>를 붙여요. 무대는 **E 마이너 펜타토닉** — 펑크 릭이 사는 다섯 음이에요.

E 마이너 펜타는 **E · G · A · B · D** 다섯 음이에요. 도수로는 **R · b3 · 4 · 5 · b7**이죠. 베이스에서는 **개방 E**(4번현), **G**(4번현 3프렛), **개방 A**(3번현), **B**(3번현 2프렛), **개방 D**(2번현)에 나란히 놓여요. <mark>개방현과 3·2프렛</mark>만 오가는, 슬랩에 딱 좋은 자리예요.

오늘의 짧은 릭은 이 다섯 음 위에서 **썸으로 치고, 해머온으로 올라갔다, 팝으로 색을 더하고, 풀오프로 내려와요**. 한 마디 안에 <mark>해머온과 풀오프가 한 번씩</mark> 들어가요. **BPM 75**로 느리게, 붙인 음(해머·풀오프)이 친 음만큼 또렷한지에 집중해요. 펜타토닉은 릭의 **지도**예요. 이 다섯 음 안에서만 놀아도 <mark>펑크다운 소리</mark>가 저절로 나요. 벗어날 걱정 없이 마음껏 **해머·풀오프**를 얹어 자유롭게 노래해 봐요.

**5현**이라면 음도 손모양도 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두고, 익숙하면 저음 B에서 시작하는 확장도 상상해 봐요. 오늘 이 **짧은 릭**이 매끄러워지면, 내일은 이걸 다듬어 <mark>펜타토닉 슬랩 릭</mark>을 완성해요. 오늘은 완성으로 가는 마지막 준비운동인 셈이에요. 어렵지 않으니 편하게 즐기며 손에 익혀요. 먼저 다섯 음 자리를 지판으로 도장 찍어요.

```json
{
  "id": "m2.w6.d3.penta_form_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor pentatonic slap form — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 0, "label": "4", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4현.** 개방현(E·A·D)과 3·2프렛(G·B)에 다섯 음이 나란히 놓여요. 오늘 릭은 전부 이 폼 안이에요.

```json
{
  "id": "m2.w6.d3.penta_form_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor pentatonic slap form — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 0, "label": "4", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두세요.

## ② 시각 자료

오늘은 어제까지의 **해머온·풀오프**를 **E 마이너 펜타토닉** 위에 올려요. 먼저 다섯 음을 **훑어** 손에 익힌 뒤, <mark>짧은 릭</mark>을 반복해요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **펜타 훑기**. 다섯 음을 **썸**으로 오르내리며(D만 **팝**), 손이 다음 음의 자리를 미리 알게 해요.

```json
{
  "id": "m2.w6.d3.penta_walk_4",
  "type": "tab",
  "meta": { "title": "E minor pentatonic walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** R-b3-4-5-b7로 올라갔다 되짚어 내려와요. 손이 다섯 음의 자리를 외우게 해요.

```json
{
  "id": "m2.w6.d3.penta_walk_5",
  "type": "tab",
  "meta": { "title": "E minor pentatonic walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

이제 **짧은 릭**이에요. 썸으로 친 뒤 **해머온**으로 올라가고, **팝**으로 색을 더한 뒤 **풀오프**로 루트에 <mark>내려앉아요</mark>. 한 마디에 배운 걸 다 담았어요.

```json
{
  "id": "m2.w6.d3.penta_lick_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** E→G 해머온, A→B 해머온, D 팝, 고스트로 사이를 채운 뒤 G→E 풀오프로 착지해요.

```json
{
  "id": "m2.w6.d3.penta_lick_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 익숙하면 저음 B에서 시작하는 확장도 상상해 봐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 배운 풀오프를 **BPM 60**으로 가볍게 흘려 손을 깨워요. 오늘은 귀를 <mark>펜타토닉 다섯 음</mark>에 맞춰 둬요.

**10~20분 · 두뇌 훈련**
아래처럼 **아주 느리게** 짧은 릭을 돌리며, 해머온 두 곳과 풀오프 한 곳의 자리를 손에 새겨요.

```json
{
  "id": "m2.w6.d3.penta_lick_slow_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 아주 느리게. 해머온(E→G, A→B)과 풀오프(G→E)가 친 음만큼 또렷한지 확인해요.

```json
{
  "id": "m2.w6.d3.penta_lick_slow_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 저음 B는 엄지 옆면으로 덮어 두세요.

**20~40분 · 실전**
**짧은 릭**을 **BPM 75**에서 반복해요. 붙인 음이 <mark>뭉개지면</mark> 속도를 낮춰 해머·풀오프부터 또렷하게 살려요. 4현으로 익힌 뒤 5현으로도 같은 릭을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>해머와 풀오프가 친 음만큼 또렷한지</mark> 들어봐요. 오늘 안정된 BPM도 적어 둬요.

**오늘의 완료 기준:** E 마이너 펜타 위에서 해머온·팝·풀오프를 엮은 짧은 릭을 BPM 75에서 매끄럽게 낼 수 있다.

## ④ 팁 / 흔한 실수

오늘 배운 짧은 릭을 **BPM 85**로 살짝 밀어, 빨라져도 붙인 음이 살아 있는지 확인해요.

```json
{
  "id": "m2.w6.d3.penta_lick_check_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 85, 4현.** 조금 빨라져도 **해머·풀오프**가 또렷하게 살아 있는지 확인해요.

```json
{
  "id": "m2.w6.d3.penta_lick_check_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5현.** 음과 이동은 4현과 똑같아요. 저음 B는 늘 엄지로 덮어 두세요.

- **음 사이가 끊겨요.** 슬랩과 레가토가 따로 놀면 릭이 뚝뚝 끊겨요. **한 흐름**으로 이어 부드럽게 굴려요.
- **해머·풀오프만 작아져요.** 친 음(썸·팝)에 힘이 몰리기 쉬워요. **붙인 음도 나란한 크기**로 내요.
- **팝이 튀어요.** D의 팝만 너무 세면 릭이 울퉁불퉁해져요. **팝을 다른 음과 같은 크기**로 다듬어요.
- **저음 B 방심(5현).** 릭에 몰두하다 B가 울리기 쉬워요. 엄지 옆면으로 늘 B를 덮어 두세요.
