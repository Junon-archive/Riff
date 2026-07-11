---
title: "ii-V-I 워킹 완성 — Gm7-C7-Fmaj7, 집으로 가는 길"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — ii-V-I 워킹 완성, Gm7-C7-Fmaj7 집으로 가는 길

## ① 이론/설명

드디어 5주차 마지막 날, ii-V-I을 하나로 완성하는 날이에요. 지난 사흘 동안 준비한 세 조각 — 세 코드의 코드톤(D1), ii→V 이음새(D2), V→I 해결(D3)을 <mark>세 마디 워킹 하나로 이어</mark> 붙여요. **Gm7 → C7 → Fmaj7**, 재즈의 집으로 가는 길을 처음부터 끝까지 걸어요.

완성물의 구조는 단순해요. **한 마디에 한 코드**, 1·2·3박은 그 코드의 코드톤으로 걷고, 4박은 다음 코드로 가는 다리예요. 1마디 Gm7의 4박은 C를 겨냥하는 **Db**, 2마디 C7의 4박은 F를 겨냥하는 **E**예요. 그리고 3마디에서 <mark>집 Fmaj7에 도착</mark>해 편히 쉬어요. 두 다리가 세 코드를 하나의 걸음으로 꿰어요.

BPM 85, **스윙 4분음**으로 걸어요. 매 마디 1박은 루트에 또박또박 착지하고, 4박은 다음 코드로 부드럽게 넘어가요. <mark>1박은 착지, 4박은 다리</mark> — 지난 한 달 반 내내 익힌 이 원리가, 오늘 ii-V-I이라는 재즈의 핵심 진행 위에서 완성돼요. 천천히 시작해 몸에 익으면 조금씩 속도를 올려요.

먼저 세 마디 걸음의 이정표 — 세 루트(**G·C·F**)와 두 다리(**Db·E**)를 지판에서 봐요.

```json
{
  "id": "m2.w5.d4.ii_v_i_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I walk landmarks (roots and bridges) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 세 루트 G(4번현 3프렛)·C(3번현 3프렛)·F(4번현 1프렛)와, 두 다리 Db(3번현 4프렛)·E(3번현 7프렛)예요.

```json
{
  "id": "m2.w5.d4.ii_v_i_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I walk landmarks (roots and bridges) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 루트도 가늠해 볼 수 있어요.

## ② 시각 자료

드디어 이번 주의 완성물, 세 마디 **ii-V-I 워킹**이에요. Gm7-C7-Fmaj7을 **두 다리**로 이어 <mark>집으로 가듯 한 번에</mark> 걸어요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_4",
  "type": "tab",
  "meta": { "title": "ii-V-I walk Gm7-C7-Fmaj7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
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

▶ **BPM 85, 4현.** Gm7(1마디)→C7(2마디)→Fmaj7(3마디)이에요. 1마디 4박 Db는 C 접근, 2마디 4박 E는 F 접근이에요. V→I에서 집에 도착해요.

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_5",
  "type": "tab",
  "meta": { "title": "ii-V-I walk Gm7-C7-Fmaj7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
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

▶ **BPM 85, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 더 묵직한 저역도 얹어 볼 수 있어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 C7→Fmaj7 해결을 BPM 72로 한 번 걸어, 두 다리(Db·E)의 감각을 손끝에 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 세 마디 워킹을 **BPM 65**의 느린 스윙 4분음으로 짚어, 코드 전환을 천천히 맞춰요. <mark>두 다리가 다음 마디 루트로 자연스럽게 이어지는지</mark> 확인해요.

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_slow_4",
  "type": "tab",
  "meta": { "title": "ii-V-I walk, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
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

▶ **BPM 65, 4현.** 세 마디를 느리게. 1마디 4박 Db→2마디 C, 2마디 4박 E→3마디 F의 두 이음새를 또박또박 맞춰요.

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_slow_5",
  "type": "tab",
  "meta": { "title": "ii-V-I walk, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
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

▶ **BPM 65, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **ii-V-I 워킹**을 BPM 85에서 세 마디 순환으로 반복해요. <mark>세 코드가 두 다리로 끊김 없이 이어지는지</mark> 살펴요. 4현으로 익힌 뒤 5현으로도 같은 흐름을 확인해요.

**40~50분 · 녹음/졸업**
드디어 녹음이에요. 편한 속도에서 ii-V-I 세 마디를 두세 바퀴 멈추지 말고 녹음해, 그중 제일 좋은 한 판을 나의 첫 ii-V-I 워킹으로 남겨요. 4현·5현 둘 다 남기면 5주차 완성이에요.

**오늘의 완료 기준:** Gm7-C7-Fmaj7 ii-V-I 워킹 세 마디를 두 접근음(Db·E)으로 이어, 스윙 4분음으로 4현·5현 둘 다 집으로 가듯 완주·녹음할 수 있다. — 주간 결과물: 나의 첫 ii-V-I 워킹 베이스 녹음. (5주차 완성!)

## ④ 팁 / 흔한 실수

- **2마디 C7에서 손이 꼬여요.** C7의 5도 G(4번현 3프렛)로 잠깐 낮은 현으로 내려갔다가, b7 Bb(3번현 1프렛)로 돌아와요. 이 손 이동을 느린 속도에서 미리 익혀 두면 실전이 편해져요.
- **다리 다음 착지가 급해져요.** 4박 다리(Db·E)에서 신나서 다음 1박을 당겨 짚기 쉬워요. 두 다리 모두 반음 한 칸이니, 서두르지 말고 박에 정확히 맞춰 착지해요.

이번 주 걸음의 주인공, 두 다리 Db와 E를 한눈에 봐 둬요. 이 두 접근음이 세 코드를 하나로 이은 열쇠예요.

```json
{
  "id": "m2.w5.d4.two_bridges_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The two bridges (Db, E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4현.** 1마디 Gm7의 다리 Db(3번현 4프렛)와 2마디 C7의 다리 E(3번현 7프렛), 두 접근음이에요.

```json
{
  "id": "m2.w5.d4.two_bridges_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The two bridges (Db, E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

- **5주차를 스스로 크게 칭찬해요.** 세 코드의 코드톤에서 시작해, 접근음으로 잇고, 이제 ii-V-I이라는 재즈의 핵심 진행을 스윙 4분음으로 완주해 녹음까지 남겼어요. 정말 큰 걸음이에요. 다음 주부터는 이 ii-V-I을 더 여러 조성과 긴 진행 위에서 걸어, 진짜 재즈 워킹으로 넓혀 가요.
