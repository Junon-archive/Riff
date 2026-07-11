---
title: "C7 → Fmaj7 잇기 — V에서 I로, 집에 도착하는 해결"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — C7 → Fmaj7 잇기, V에서 I로 집에 도착하는 해결

## ① 이론/설명

어제는 Gm7에서 C7으로 건너갔어요. 오늘은 마지막 다리, <mark>C7에서 집 Fmaj7으로 돌아오는 V→I 해결</mark>이에요. ii-V-I에서 가장 극적인 순간이 바로 이 V→I예요. 긴장을 잔뜩 머금은 **C7**이 환하게 열린 **Fmaj7**으로 풀리는, 음악에서 가장 강력한 '집에 도착' 감각이죠.

C7 마디의 4박에는 F의 반음 아래 **E**를 놓아요. E는 F로 올라가고 싶어 안달하는 음, 이른바 **이끔음**이에요. 4박 E가 다음 1박 F로 <mark>반음 위로 빨려 올라가면</mark>, 귀는 '드디어 도착했다'고 느껴요. 지난 이틀의 접근음이 반음 위(Db→C)였다면, 오늘은 반음 아래(E→F)에서 끌어올리는 다리예요.

집에 도착하면 **Fmaj7의 코드톤**(R·3·5·7)으로 편히 걸어요. 특히 장7도 **E**(7)는 Fmaj7을 가장 환하게 물들이는 색이에요. <mark>같은 E가 C7에선 다음 코드를 겨냥하는 다리였다가, Fmaj7에선 집을 밝히는 색</mark>으로 바뀌는 게 재밌죠. 오늘은 이 C7→Fmaj7 해결 하나에 집중해, V에서 I로 도착하는 감각을 손에 새겨요.

먼저 F를 향한 이끔음, 반음 아래 **E**와 반음 위 **Gb**를 지판에서 봐요.

```json
{
  "id": "m2.w5.d3.approach_to_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to F (E below, Gb above) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **4현.** 가운데가 Fmaj7의 착지점 F(4번현 1프렛), 반음 아래 이끔음 E(4번현 개방)와 반음 위 Gb(4번현 2프렛)가 양쪽 다리예요.

```json
{
  "id": "m2.w5.d3.approach_to_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to F (E below, Gb above) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 C7 한 마디를 걷고, 4박의 이끔음 **E**로 다음 마디 **Fmaj7**의 집에 도착해요. 4박 E가 <mark>F로 반음 위로 해결되는지</mark> 귀로 확인해요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_4",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7 resolution — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1마디 C7(C-G-Bb)을 걷고 4박 이끔음 E(3번현 7프렛)로, 2마디 Fmaj7의 F에 반음 위로 해결해요.

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_5",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7 resolution — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 Gm7→C7 이음새를 BPM 72로 한 번 걸어, 접근음 감각을 손끝에 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 C7→Fmaj7 해결을 **BPM 60**의 느린 스윙 4분음으로 짚어요. <mark>4박 E가 다음 1박 F로 반음 올라가 풀리는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_slow_4",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 4박 E에서 다음 1박 F까지, 반음 위로 끌어올리는 해결을 손과 귀로 맞춰요.

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_slow_5",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **해결**을 BPM 80에서 두 마디 순환으로 반복해요. <mark>C7의 긴장이 4박 E를 거쳐 Fmaj7으로 편히 풀리는지</mark> 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 V에서 I로 '집에 도착'하는 느낌이 들리는지 들어봐요. 마지막 F가 안정적으로 내려앉으면 성공이에요.

**오늘의 완료 기준:** C7 한 마디를 코드톤으로 걷고, 4박 이끔음 E로 Fmaj7의 루트에 반음 위로 해결하는 V→I 이음새를, 스윙 4분음으로 4현·5현 둘 다 이을 수 있다.

## ④ 팁 / 흔한 실수

- **집에 도착해도 긴장이 안 풀려요.** Fmaj7 1박 F를 짚을 때 힘을 살짝 빼고 편히 내려앉아요. 도착 코드는 쉬어 가는 지점이니, 세게 튕기기보다 부드럽게 안착시켜요.
- **이끔음 E를 코드톤과 헷갈려요.** E는 C7에선 다리(접근음), Fmaj7에선 장7도(코드톤)로 역할이 달라요. 같은 자리라도 어느 코드 위인지에 따라 마음속 이름을 바꿔 불러요.

도착한 집, Fmaj7의 코드톤을 한눈에 봐 둬요. 이 네 음이 ii-V-I 여정이 편히 쉬는 자리예요.

```json
{
  "id": "m2.w5.d3.fmaj7_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 home — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** Fmaj7의 R(4번현 1프렛)·3(4번현 5프렛)·5(3번현 3프렛)·7(3번현 7프렛), 도착의 집이에요.

```json
{
  "id": "m2.w5.d3.fmaj7_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 home — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 F도 가늠해 볼 수 있어요.

- **또 한 걸음 나아간 나를 칭찬해요.** 오늘 V에서 I로 도착하는 가장 강력한 해결을 손에 담았어요. 이제 세 조각(코드톤·ii→V·V→I)이 다 준비됐어요. 내일은 이것을 하나로 이어, ii-V-I 워킹을 완성해요.
