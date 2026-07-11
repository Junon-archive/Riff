---
title: "ii-V-I 코드톤 — Gm7·C7·Fmaj7, 세 코드의 뼈대"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — ii-V-I 코드톤, Gm7·C7·Fmaj7 세 코드의 뼈대

## ① 이론/설명

드디어 2개월차, 체인지 항해의 첫 주예요. 지난달엔 한 코드 안에서 걷는 법을 익혔다면, 이번 주는 코드가 바뀌는 길 위를 걸어요. 그 길의 이름이 **ii-V-I**, 재즈에서 가장 흔하고 가장 중요한 진행이에요. F조에서는 <mark>Gm7 → C7 → Fmaj7</mark>이 그 길이에요. ii(Gm7)에서 출발해 V(C7)를 지나, I(Fmaj7)라는 집으로 돌아오는 여정이죠.

오늘은 이 세 코드의 **코드톤**부터 손에 익혀요. 코드톤은 그 코드를 이루는 뼈대 음이에요. Gm7은 R·b3·5·b7(G·Bb·D·F), C7은 R·3·5·b7(C·E·G·Bb), Fmaj7은 R·3·5·7(F·A·C·E)예요. 하나만 기억해요 — <mark>매 코드의 첫 음은 루트(R)에 착지</mark>한다는 것. **루트**가 걸음의 출발점이자 각 코드의 집 주소예요.

세 코드를 구별하는 열쇠는 **3도와 7도**예요. Gm7은 단3도(b3)라 어둡고, C7은 장3도(3)에 단7도(b7)라 긴장을 품고, Fmaj7은 장3도에 장7도(7)라 환하게 풀려요. 이 <mark>b3에서 3, 그리고 7로 번지는 색</mark>이 집으로 향하는 ii-V-I의 지도예요. 오늘은 세 코드의 코드톤을 하나씩 짚어, 각 코드의 소리와 위치를 귀와 손에 새겨요.

먼저 이번 주 세 코드의 출발점, Gm7의 코드톤을 지판에서 봐요 — **R·b3·5·b7**이에요.

```json
{
  "id": "m2.w5.d1.gm7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** Gm7의 R(4번현 3프렛)·b3(3번현 1프렛)·5(3번현 5프렛)·b7(2번현 3프렛)이에요.

```json
{
  "id": "m2.w5.d1.gm7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

Gm7의 소리를 손에 담았으면, 이제 **C7**과 **Fmaj7**의 코드톤도 나란히 봐요. 그다음 세 코드의 코드톤을 <mark>낮은 음에서 높은 음으로 하나씩 올라가며</mark> 이어 걸어요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w5.d1.c7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** C7의 R(3번현 3프렛)·3(2번현 2프렛)·5(2번현 5프렛)·b7(1번현 3프렛)이에요.

```json
{
  "id": "m2.w5.d1.c7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

```json
{
  "id": "m2.w5.d1.fmaj7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** Fmaj7의 R(4번현 1프렛)·3(4번현 5프렛)·5(3번현 3프렛)·7(3번현 7프렛)이에요.

```json
{
  "id": "m2.w5.d1.fmaj7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

이제 세 코드의 코드톤을 한 마디씩 이어 올라가는 아르페지오예요. 각 마디의 첫 박은 그 코드의 루트예요.

```json
{
  "id": "m2.w5.d1.three_chord_arp_4",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1마디 Gm7(G-Bb-D-F), 2마디 C7(C-E-G-Bb), 3마디 Fmaj7(F-A-C-E)이에요. 매 마디 1박은 루트로 착지해요.

```json
{
  "id": "m2.w5.d1.three_chord_arp_5",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
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
지난주 F 블루스 워킹을 BPM 72로 한 번 걸어, 손끝에 스윙 4분음 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 세 코드의 코드톤을 **BPM 60**의 느린 스윙 4분음으로 또박또박 짚어요. <mark>각 마디의 첫 박이 루트인지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w5.d1.three_chord_arp_slow_4",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 arpeggio, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 세 코드의 코드톤을 한 박씩 느리게. 코드가 바뀔 때 루트부터 다시 잡아요.

```json
{
  "id": "m2.w5.d1.three_chord_arp_slow_5",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 arpeggio, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
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
위 **아르페지오**를 BPM 80에서 세 마디 순환으로 반복해요. <mark>Gm7·C7·Fmaj7의 소리 차이</mark>가 귀에 들리는지 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 세 코드의 루트가 또렷이 착지하는지 들어봐요. 어느 코드가 가장 낯선지 적어 두면 내일 이음새 연습의 출발점이 돼요.

**오늘의 완료 기준:** Gm7·C7·Fmaj7 세 코드의 코드톤을 각 마디 첫 박 루트에 착지하며, 스윙 4분음으로 4현·5현 둘 다 짚을 수 있다.

## ④ 팁 / 흔한 실수

- **코드가 바뀌는 순간을 놓쳐요.** 마디가 넘어갈 때 루트를 먼저 확보하지 않으면 걸음이 흐트러져요. 새 마디의 1박은 무조건 루트로 착지한다고 정해 둬요.
- **b3와 3을 헷갈려요.** Gm7의 b3(Bb)와 C7·Fmaj7의 장3도는 소리 색이 완전히 달라요. 느리게 짚으며 어두운 3도와 환한 3도를 귀로 구분해요.

세 코드의 집 주소, 즉 루트 세 개를 한눈에 봐 둬요. 이 세 착지점이 이번 주 걸음의 기둥이에요.

```json
{
  "id": "m2.w5.d1.three_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7-C7-Fmaj7 three roots — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** Gm7의 G(4번현 3프렛)·C7의 C(3번현 3프렛)·Fmaj7의 F(4번현 1프렛)이에요.

```json
{
  "id": "m2.w5.d1.three_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7-C7-Fmaj7 three roots — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 루트도 가늠해 볼 수 있어요.

- **첫날을 스스로 격려해요.** 세 코드의 코드톤을 손에 담은 것만으로 ii-V-I 항해의 절반은 시작된 거예요. 내일은 이 코드들을 접근음으로 이어, 진짜 '걷는' 느낌을 만들어요.
