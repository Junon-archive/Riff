---
title: "역방향 — 멜로디를 먼저, 코드를 아래에"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 부르고 싶은 선율에 코드를 입히기

## ① 이론/설명

어제는 진행이 주어지고 탑노트를 최소 이동으로 이었죠. 오늘은 **거꾸로** 갑니다. **탑노트 멜로디를 먼저 정하고**, 그 멜로디를 지탱할 코드를 아래에 붙여요. 작곡·편곡의 실제 순서예요 — 노래(선율)가 먼저, 코드는 옷.

오늘의 멜로디는 하행 **C → B → A → G**(1번 줄 8 → 7 → 5 → 3프렛). 한 음씩 내려오는 아주 자연스러운 선율이죠. 이 네 음을 탑에 두면서 아래에 코드를 붙이면:

- **C(탑) ← C 코드** (C는 C의 R)
- **B(탑) ← G 코드** (B는 G의 3도)
- **A(탑) ← F 코드** (A는 F의 3도)
- **G(탑) ← C 코드** (G는 C의 5도)

즉 진행은 **C - G - F - C**. 같은 멜로디도 아래에 어떤 코드를 까느냐로 색이 달라져요. 오늘은 "멜로디가 먼저, 코드는 그걸 받쳐준다"는 감각을 익힙니다. 어제와 방향만 반대일 뿐, 쓰는 재료는 똑같으니 부담 갖지 마세요. 오늘 이걸 한번 해보면, 좋아하는 노래의 코드가 왜 그렇게 붙어 있었는지 귀가 먼저 알아채기 시작해요. 작곡가의 시점으로 곡을 듣게 되는 첫걸음이에요.

## ② 시각 자료

**C — 탑 = R(C).** 멜로디 첫 음 C를 탑에 두고 아래에 3(E)·5(G)를 깔았어요. 초록이 탑(멜로디).

```json
{
  "id": "m2.w7.d3.c_top_c",
  "type": "fretboard_diagram",
  "meta": { "title": "C triad — top note C (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 7, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 8, "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**G — 탑 = 3(B).** 멜로디 둘째 음 B를 탑에 두니 아래는 G 코드가 자연스러워요.

```json
{
  "id": "m2.w7.d3.g_top_b",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note B (3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**예제 1 — 먼저 정한 탑노트 멜로디(C-B-A-G).** 1번 줄에서 하행 선율만 먼저 불러봐요. 이게 오늘 코드를 입힐 '노래'예요.

```json
{
  "id": "m2.w7.d3.melody_first",
  "type": "tab",
  "meta": { "title": "Top melody first (C-B-A-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 8, "duration": "quarter", "label": "R(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3(B)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70.** 1번 줄 8 → 7 → 5 → 3. C-B-A-G 하행. 먼저 이 선율을 노래하듯 익히세요(괄호는 이 음이 각 코드에서 갖는 도수). 4번 반복.

**예제 2 — 멜로디에 코드 입히기(C-G-F-C).** 이제 각 탑노트 아래에 코드를 깔아요. 위는 선율, 아래는 받침.

```json
{
  "id": "m2.w7.d3.harmonize_comp",
  "type": "tab",
  "meta": { "title": "Harmonize the melody (C-G-F-C) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 8, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 6, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76, 4번 반복.** 탑의 C-B-A-G는 그대로 노래하고, 아래 C-G-F-C가 받쳐줘요. 멜로디를 먼저 부르고 코드를 얹는 순서를 몸으로.

**예제 3 — 코드 전체 컴핑.** 멜로디에 입혔던 C - G - F - C를, 이번엔 트라이어드 전체로 울려요. 탑노트 멜로디(C-B-A-G)는 화음 맨 위에서 그대로 노래해요.

```json
{
  "id": "m2.w7.d3.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (harmonize C-G-F-C) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 8, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 8, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 9, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 8, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 8, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 9, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 2, "fret": 8, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** 예제 2와 같은 리듬, 이번엔 코드 전체로. 멜로디를 받치는 화음이 한층 풍성해져요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**예제 1** 멜로디(C-B-A-G)를 1번 줄에서 여러 번. 하행 선율을 손과 귀에 각인.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 멜로디→코드)**
각 탑노트가 어느 코드의 몇 도인지 확인(C=C의 R, B=G의 3, A=F의 3, G=C의 5). "이 음을 탑에 두려면 어떤 코드가 어울릴까?"를 스스로 물어요.

**20~40분 · 실전 반주 (예제 2 컴핑 / 72~82 BPM)**
**예제 2를 BPM 76에서 4번 반복.** 위 멜로디는 유지, 아래 코드로 받침. 익으면 멜로디를 살짝 바꿔(예: C-B-A-A) 그에 맞는 코드를 스스로 골라보세요.

**40~50분 · 녹음/셀프 피드백 (권장)**
멜로디+코드 30초 녹음. 체크: 탑 멜로디가 또렷이 노래하는가 / 아래 코드가 멜로디를 잘 받치는가.

**오늘의 완료 기준:** 탑노트 멜로디(C-B-A-G)를 먼저 정하고, 그 아래에 코드(C-G-F-C)를 붙여 컴핑한다.

## ④ 팁 / 흔한 실수

- **코드부터 생각하기.** 오늘은 멜로디가 먼저예요. 부르고 싶은 선율을 정하고 코드는 나중에.
- **탑 멜로디가 묻힘.** 위 음을 살짝 더 세게, 아래는 부드럽게. 멜로디가 들려야 의미가 있어요.
- **한 멜로디음에 코드가 하나뿐이라 생각.** C(탑)엔 C 말고도 Am·F 등 여러 코드가 어울려요. 오늘은 한 예시일 뿐.
- **넥 위 이동 급함.** 8프렛(C)에서 3프렛(G)까지 내려와요. 미리 다음 자리를 보며 부드럽게.
