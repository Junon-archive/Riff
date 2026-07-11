---
title: "졸업 진행 파악 — ii-V-I + 턴어라운드로 도는 오리지널 진행"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 졸업 진행 파악 (ii-V-I + 턴어라운드)

## ① 이론/설명

드디어 8주차, 워킹 베이스의 마지막 주예요. 두 달 전을 떠올려 봐요 — 그때는 코드가 바뀌어도 **루트** 하나를 겨우 짚으며 박자를 지키는 게 전부였죠. 그런데 지금은 코드가 바뀔 때마다 코드톤을 딛고 접근음으로 다리를 놓으며 <mark>체인지를 걸어요</mark>. 이번 트랙은 여러분의 **베이스 재즈·하모니 캡스톤**이에요. 이번 주는 그동안 모은 어휘를 한자리에 모아, 오리지널 진행 위를 워킹으로 완성하고 마지막 날 녹음하는 **졸업**이에요.

이번 주의 진행은 이래요. **Gm7 → C7 → Fmaj7**, 키 F의 **ii-V-I**예요. Gm7(ii도)이 이야기를 열고, C7(V도)이 긴장을 만들고, Fmaj7(I도)에서 스르르 풀려요. 재즈에서 가장 많이 쓰이는 흐름이라, 이 한 사이클을 손에 넣으면 수많은 곡의 뼈대를 걷는 셈이에요. 그리고 4마디째 **C7**이 한 번 더 울리며 첫 마디 Gm7으로 되돌리는 <mark>턴어라운드</mark>가 붙어요. 덕분에 네 마디는 끝이 처음으로 이어져 <mark>멈추지 않고 순환</mark>해요.

오늘은 라인을 화려하게 걷기 전에, 먼저 **진행 자체**를 손과 귀에 익혀요. 각 코드의 **루트**가 지판 어디에 있는지, 네 마디가 어떻게 한 바퀴로 도는지를 느끼는 게 오늘의 전부예요. 코드톤과 장식은 내일부터 차근차근 얹을 거예요. 오늘은 <mark>루트만 또박또박</mark> 짚으며 진행의 지도를 머릿속에 그려요. 이 지도가 또렷하면, 그 위에 코드톤과 접근음을 올리는 일은 자연스럽게 따라와요.

먼저 네 코드의 루트가 지판 어디에 있는지 봐요.

```json
{
  "id": "m2.w8.d1.progression_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** Gm7의 루트 **G**(4번현 3프렛), C7의 루트 **C**(3번현 3프렛), Fmaj7의 루트 **F**(4번현 1프렛)이에요. 진행은 이 세 자리를 오가며 돌아요.

```json
{
  "id": "m2.w8.d1.progression_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B현으로 진행의 뿌리를 더 묵직하게 받쳐요.

## ② 시각 자료

이제 그 루트를 한 마디에 하나씩, **온음표**로 놓아 진행 한 바퀴를 눈으로 봐요. **네 마디**가 곧 ii-V-I + 턴어라운드 한 사이클이에요. <mark>끝 마디가 첫 마디로 이어져 돌아요.</mark> 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w8.d1.progression_walk_4",
  "type": "tab",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]}
  ]}
}
```

▶ **BPM 90, 4현, 스윙 4분음.** 1마디 **Gm7(G)** → 2마디 **C7(C)** → 3마디 **Fmaj7(F)** → 4마디 **C7(C)** 턴어라운드예요. 마디마다 루트 하나로 진행의 뼈대를 느껴요.

```json
{
  "id": "m2.w8.d1.progression_walk_5",
  "type": "tab",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
7주차의 장식 워킹을 BPM 72로 한 번 걸어, 손과 귀를 깨워요.

**10~20분 · 두뇌 훈련**
아래 예제로 각 코드의 루트를 **4분음**으로 또박또박 짚으며 진행을 외워요. <mark>코드가 바뀌는 순간 손이 미리 다음 루트를 찾는지</mark> 확인해요.

```json
{
  "id": "m2.w8.d1.progression_pulse_4",
  "type": "tab",
  "meta": { "title": "ii-V-I roots, quarter pulse (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 각 마디의 루트를 4박으로 나눠 짚어요. 진행이 바뀌는 자리를 몸으로 외우는 연습이에요.

```json
{
  "id": "m2.w8.d1.progression_pulse_5",
  "type": "tab",
  "meta": { "title": "ii-V-I roots, quarter pulse (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 자리는 4현과 똑같아요.

**20~40분 · 실전**
위 **온음표 진행**을 BPM 90에서 반복하며, 마디가 바뀔 때 <mark>루트가 흔들리지 않는지</mark> 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 정리/녹음**
오늘은 진행을 외우는 날이라, 루트만으로 네 마디를 두세 바퀴 멈추지 말고 녹음해요. 순환이 자연스러운지 귀로 확인하면 오늘 완성이에요.

**오늘의 완료 기준:** Gm7-C7-Fmaj7-C7 진행의 루트를 4현·5현으로 막힘없이 순환하며 짚을 수 있고, 네 마디가 한 바퀴로 도는 걸 귀로 안다. — 오늘의 결과물: 나의 첫 진행 순환 루트 녹음.

## ④ 팁 / 흔한 실수

오늘의 진행 지도를 눈에 새겨 둬요. 세 루트 **G·C·F**가 어디에 있는지 한눈에 들어오면, 내일 그 위에 코드톤을 얹기가 훨씬 수월해요.

```json
{
  "id": "m2.w8.d1.progression_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround loop map (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** ii-V-I + 턴어라운드의 세 루트예요. Gm7(G)·C7(C)·Fmaj7(F), 그리고 4마디째 C7이 다시 Gm7으로 돌려요.

```json
{
  "id": "m2.w8.d1.progression_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround loop map (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

- **루트를 급하게 바꿔요.** 코드가 바뀌기 직전에 서두르면 박이 밀려요. 마디의 4박을 끝까지 딛고, 다음 마디 1박에 새 루트로 또박또박 착지해요.
- **순환을 잊고 멈춰요.** 4마디째 C7은 끝이 아니라 첫 마디로 돌아가는 다리예요. 마지막 마디에서 멈추지 말고, 곧장 1마디 Gm7으로 이어 한 바퀴를 완성해요.

두 달 전엔 코드가 바뀌면 어디를 짚을지 막막했는데, 이제 진행 한 바퀴가 눈에 훤히 보여요. 내일은 이 위에 코드톤과 접근음을 얹어, 진짜 워킹으로 걸어요.
