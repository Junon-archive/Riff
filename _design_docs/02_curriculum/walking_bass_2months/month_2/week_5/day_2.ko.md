---
title: "Gm7 → C7 잇기 — 접근음으로 ii에서 V로"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — Gm7 → C7 잇기, 접근음으로 ii에서 V로

## ① 이론/설명

어제는 세 코드의 코드톤을 손에 담았어요. 오늘은 그중 <mark>첫 두 코드, Gm7과 C7을 하나로 이어요</mark>. 코드톤만 나열하면 음이 뚝뚝 끊겨 들려요. 코드와 코드 사이에 **다리**를 놓아야 걸음이 자연스럽게 이어지는데, 그 다리가 바로 **접근음**이에요.

접근음은 다음 코드의 **루트 바로 옆 음**이에요. C7으로 넘어가려면, Gm7 마디의 마지막 4박에 C의 반음 위 **Db**(또는 반음 아래 B)를 놓아요. 그러면 4박의 Db가 다음 마디 1박 C로 <mark>반음 미끄러지듯</mark> 빨려 들어가요. 이 반음의 당김이 'V로 건너가는 다리'예요.

규칙은 지난달과 똑같아요 — **1박은 착지, 4박은 다리.** Gm7 마디의 1·2·3박은 코드톤(R·b3·5)으로 채우고, 마지막 4박에만 접근음을 놓아 C를 겨냥해요. 접근음은 코드톤이 아니어도 괜찮아요. <mark>단 한 박, 다음 코드로 가는 발판</mark>이니까요. 오늘은 이 Gm7→C7 이음새 하나에 집중해, ii에서 V로 건너가는 감각을 손에 붙여요.

먼저 C를 향한 두 개의 다리, 반음 위 **Db**와 반음 아래 **B**를 지판에서 봐요.

```json
{
  "id": "m2.w5.d2.approach_to_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to C (B below, Db above) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" }
  ]}
}
```

▶ **4현.** 가운데가 C7의 착지점 C(3번현 3프렛), 반음 아래 B(3번현 2프렛)와 반음 위 Db(3번현 4프렛)가 양쪽 다리예요.

```json
{
  "id": "m2.w5.d2.approach_to_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to C (B below, Db above) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 Gm7 한 마디를 걷고, 4박의 접근음 **Db**로 다음 마디 **C7**에 건너가요. 4박 Db가 <mark>C로 반음 미끄러져 들어가는지</mark> 귀로 확인해요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w5.d2.gm7_to_c7_4",
  "type": "tab",
  "meta": { "title": "Gm7 to C7 with approach — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1마디 Gm7(G-Bb-D)을 걷고 4박 Db(3번현 4프렛)로 다리를 놓아, 2마디 C7의 C에 반음으로 착지해요.

```json
{
  "id": "m2.w5.d2.gm7_to_c7_5",
  "type": "tab",
  "meta": { "title": "Gm7 to C7 with approach — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 Gm7·C7 아르페지오를 BPM 72로 한 번 걸어, 두 코드의 코드톤을 손끝에 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 Gm7→C7 이음새를 **BPM 60**의 느린 스윙 4분음으로 짚어요. <mark>4박 Db가 다음 1박 C로 반음 붙는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w5.d2.gm7_to_c7_slow_4",
  "type": "tab",
  "meta": { "title": "Gm7 to C7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 4박 Db에서 다음 1박 C까지, 반음 한 칸이 이어지는지 손과 귀로 맞춰요.

```json
{
  "id": "m2.w5.d2.gm7_to_c7_slow_5",
  "type": "tab",
  "meta": { "title": "Gm7 to C7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **이음새**를 BPM 80에서 두 마디 순환으로 반복해요. <mark>Gm7의 걸음이 4박 Db에서 자연스럽게 C로 넘어가는지</mark> 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 두 마디의 이음새가 매끄러운지 들어봐요. 4박 접근음이 다음 코드를 예고하는 느낌이 들면 성공이에요.

**오늘의 완료 기준:** Gm7 한 마디를 코드톤으로 걷고, 4박 접근음 Db로 C7의 루트에 반음으로 착지하는 ii→V 이음새를, 스윙 4분음으로 4현·5현 둘 다 이을 수 있다.

## ④ 팁 / 흔한 실수

- **접근음을 너무 일찍 놓아요.** 접근음은 오직 4박, 마지막 한 박이에요. 2·3박까지 접근음을 쓰면 코드 소리가 흐려져요. 1·2·3박은 코드톤, 4박만 다리로 지켜요.
- **다리에서 착지가 늦어요.** 4박 Db를 짚고 다음 C로 넘어갈 때 손이 머뭇거리면 박이 밀려요. 반음 한 칸이니, 미리 다음 C 자리를 눈으로 잡아 둬요.

Gm7의 5도 D에서 접근음 Db를 거쳐 C로 내려오는 마지막 세 걸음을 한눈에 봐 둬요. 반음씩 미끄러지는 길이에요.

```json
{
  "id": "m2.w5.d2.bridge_d_db_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "D to Db to C, the last three steps — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 5, "label": "D", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** Gm7의 5도 D(3번현 5프렛)→접근음 Db(3번현 4프렛)→C7의 C(3번현 3프렛), 반음씩 내려오는 다리예요.

```json
{
  "id": "m2.w5.d2.bridge_d_db_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "D to Db to C, the last three steps — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 5, "label": "D", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

- **한 걸음 나아간 나를 칭찬해요.** 오늘 두 코드를 하나로 이었어요. 이제 남은 건 C7에서 집 Fmaj7으로 가는 마지막 다리예요. 내일 그 V→I 해결을 이어, ii-V-I을 완성으로 데려가요.
