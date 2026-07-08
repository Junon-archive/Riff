---
title: "고음역 자리바꿈 — 탑에 R·3·5 중 뭘 둘까"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — 같은 코드, 다른 탑노트 = 다른 색

## ① 이론/설명

같은 G 코드라도 **가장 높은 음(탑노트)에 R·3·5 중 뭘 두느냐**에 따라 인상이 완전히 달라져요. 이걸 '자리바꿈(인버전)'이라고 해요. 오늘은 1·2·3번 얇은 줄에 얹은 G 트라이어드를 넥 위로 올라가며 세 자리로 봅니다:

- **탑 = R(G)** — 안정적, 딱 끝난 느낌. (3프렛 근처)
- **탑 = 3(B)** — 밝고 노래하는 느낌. (7프렛 근처)
- **탑 = 5(D)** — 열려 있고 붕 뜬 느낌. (10프렛 근처)

세 개 다 똑같은 G(도·미·솔)인데, 맨 위 음 하나로 색이 달라져요. 프로는 진행 속에서 **탑노트를 골라** 코드를 배치해요(7주차에서 이걸 멜로디로 잇습니다). 오늘은 "탑노트를 바꾸면 색이 바뀐다"는 감각만 확실히 챙기면 돼요. 세 자리를 지금 다 외울 필요는 전혀 없어요. 같은 코드가 자리 하나로 이렇게 달리 들린다는 게 신기하지 않아요? 이 감각이 7주차에서 탑노트를 이어 붙이는 순간, 여러분의 반주 위로 멜로디가 흐르기 시작해요.

## ② 시각 자료

**자리 ① 탑 = R(G).** 초록이 탑노트(근음).

```json
{
  "id": "m2.w5.d3.g_top_root",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note R", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 2, "label": "R", "role": "target", "highlight": true }
  ]}
}
```

**자리 ② 탑 = 3(B).** 밝고 노래하는 자리.

```json
{
  "id": "m2.w5.d3.g_top_third",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 3", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**자리 ③ 탑 = 5(D).** 열려 있고 붕 뜬 자리.

```json
{
  "id": "m2.w5.d3.g_top_fifth",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 5", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 9, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 12, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 12, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 10, "finger": 1, "label": "5", "role": "target", "highlight": true }
  ]}
}
```

**예제 1 — 탑노트 멜로디(R → 3 → 5).** 1번 줄에서 세 자리의 탑노트만 이어 쳐요: 3프렛(R,G) → 7프렛(3,B) → 10프렛(5,D). 탑노트가 곧 멜로디가 되는 걸 미리 맛봅니다.

```json
{
  "id": "m2.w5.d3.top_note_melody",
  "type": "tab",
  "meta": { "title": "Top-note melody (R-3-5) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70.** 1번 줄 3 → 7 → 10프렛. G의 세 음(R·3·5)이 탑노트 멜로디로 올라가요. 각 음의 색(안정·밝음·붕뜸)을 느끼세요. 4번 반복.

**예제 2 — 세 자리 컴핑.** 각 자리를 낮은 음 → 탑노트로 짚어 색을 비교해요.

```json
{
  "id": "m2.w5.d3.inversion_comp",
  "type": "tab",
  "meta": { "title": "Three inversions comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 12, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 10, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 12, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** 세 자리(탑 R → 3 → 5)를 차례로. 낮은 음을 짚고 탑노트를 얹어, 같은 G가 자리마다 얼마나 다르게 들리는지 비교하세요. 4번 반복.

**예제 3 — 코드 전체 컴핑.** 예제 2에서 낮은 음 + 탑노트로만 짚던 세 자리(탑 R → 3 → 5)를, 이번엔 트라이어드 전체로 울려요. 탑노트는 여전히 화음 맨 위에서 그대로 노래해요.

```json
{
  "id": "m2.w5.d3.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (3 inversions) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 12, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 12, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 10, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 12, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 12, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 10, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 12, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** 예제 2와 같은 리듬, 이번엔 세 자리 모두 화음 전체로. 소리가 한층 꽉 차는 걸 느껴보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
세 자리(탑 R·3·5)를 각각 잡아 1·2·3번 줄만 깨끗이 울리는지 체크. 넥을 오르내리는 손 이동에 적응.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 탑노트 정체)**
각 자리에서 **지금 탑노트가 R·3·5 중 뭔지** 소리 내어 부르며 짚어요. 눈 감고 "탑=3!" 하면 7프렛 자리를 바로 잡으면 통과.

**20~40분 · 실전 반주 (예제 1·2 / 70~80 BPM)**
**예제 2 세 자리 컴핑을 BPM 76에서** 반복하며 색을 비교. 이어서 **예제 1 탑노트 멜로디**로 세 음을 이어 쳐요. 익으면 다른 코드(C·D)로도 세 자리를 찾아보세요.

**40~50분 · 녹음/셀프 피드백 (권장)**
세 자리 30초 녹음. 체크: 자리마다 탑노트가 또렷이 다른지, 손 이동이 흐려지지 않는지.

**오늘의 완료 기준:** 같은 G를 탑노트 R·3·5 세 자리로 잡고, 각 자리의 색 차이를 귀로 구분한다.

## ④ 팁 / 흔한 실수

- **자리바꿈을 '다른 코드'로 오해.** 셋 다 똑같은 G예요. 음의 순서(누가 탑이냐)만 다를 뿐.
- **넥 위 자리를 못 찾음.** 탑노트를 기준으로 찾으세요. "5를 탑에 두고 싶다 → 1번 줄에서 D를 찾는다."
- **높은 프렛 뮤트/음정.** 10~12프렛은 프렛 간격이 좁아요. 손끝을 세워 세 줄만 또렷이.
- **탑노트를 안 듣기.** 오늘 핵심은 귀예요. 같은 코드가 자리마다 다르게 들리는 걸 꼭 느끼세요.
