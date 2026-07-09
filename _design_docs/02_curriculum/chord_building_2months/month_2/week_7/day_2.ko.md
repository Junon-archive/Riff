---
title: "탑노트 최소 이동 — C-Am-F-G를 노래로"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 공통음은 그대로, 탑노트는 한 음씩

## ① 이론/설명

오늘은 실제 진행 **C - Am - F - G**(팝에서 제일 흔한 진행 중 하나)를 보이스 리딩으로 엮어요. 목표는 탑노트가 **계단처럼 매끄럽게** 움직이는 거예요.

탑노트 멜로디를 이렇게 골라요: **G → A → A → G.** (1번 줄 3프렛 → 5프렛 → 5프렛 → 3프렛.) 한 음(장2도) 올라갔다가 그대로, 다시 내려와요. 큰 점프가 없죠.

```json
{
  "id": "m2.w7.d2.top_line_camfg",
  "type": "tab",
  "meta": { "title": "Top-note line (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

비밀은 **공통음**이에요. C와 Am을 이 자리로 잡으면 아래 두 음(C·E)이 **똑같아요.** 그래서 C→Am은 1번 줄 하나만 G→A로 움직이면 끝(나머진 붙여 둠). Am→F도 탑은 A 그대로. 프로는 이렇게 "가장 안 움직이는 길"을 찾아 코드를 잇고, 그 결과 맨 위 음이 노래해요. 신기하지 않아요? 코드는 바뀌는데 손은 거의 안 움직이고, 그런데도 맨 위에서는 멜로디가 흘러요. 여러분이 좋아하던 그 세련된 반주의 정체가 바로 이거예요 — 마법이 아니라, 공통음을 붙여 둔 결과일 뿐이죠.

## ② 시각 자료

**C — 탑 = 5(G).** 아래 두 음은 C(R)·E(3). 초록이 탑노트.

```json
{
  "id": "m2.w7.d2.c_top_g",
  "type": "fretboard_diagram",
  "meta": { "title": "C triad — top note G (5)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "5", "role": "target", "highlight": true }
  ]}
}
```

**Am — 탑 = R(A).** 아래 두 음 C·E는 C코드와 **똑같아요**(공통음). 탑만 G→A로.

```json
{
  "id": "m2.w7.d2.am_top_a",
  "type": "fretboard_diagram",
  "meta": { "title": "Am triad — top note A (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Am" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 2, "label": "b3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**예제 1 — 탑노트 멜로디(G-A-A-G).** 진행 속 네 탑노트만 1번 줄에서 이어 쳐요. 이게 코드 위에서 노래하는 선율이에요.

```json
{
  "id": "m2.w7.d2.top_line_camfg",
  "type": "tab",
  "meta": { "title": "Top-note line (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 1번 줄 3 → 5 → 5 → 3. G-A-A-G. 코드는 C-Am-F-G로 바뀌는데, 탑노트는 딱 한 음만 움직여요. 이 매끄러움이 보이스 리딩이에요. 4번 반복.

**예제 2 — C-Am-F-G 컴핑(탑노트 유지).** 각 코드를 낮은 음 + 탑노트로. 맨 위 선율(G-A-A-G)이 이어지게.

```json
{
  "id": "m2.w7.d2.camfg_comp",
  "type": "tab",
  "meta": { "title": "C-Am-F-G comp (top line) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 6, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** C-Am-F-G를 순환하며 맨 위 G-A-A-G가 노래하게. 손이 넥을 크게 뛰지 않고 한 구역(3~6프렛)에 머무는지 확인.

**예제 3 — 코드 전체 컴핑.** 낮은 음 + 탑노트로만 짚던 C - Am - F - G를, 이번엔 트라이어드 전체로 울려요. 탑노트 멜로디(G-A-A-G)는 화음 맨 위에서 그대로 이어져요.

```json
{
  "id": "m2.w7.d2.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78.** 예제 2와 같은 리듬, 이번엔 코드 전체로. 진행이 훨씬 두툼하게 들릴 거예요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
C-Am-F-G 네 자리를 순서대로. 특히 C↔Am에서 아래 두 음(C·E)이 그대로 붙어 있는지, 탑만 G↔A로 움직이는지 확인.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 탑노트 연결)**
**예제 1** 탑노트 멜로디(G-A-A-G)를 1번 줄에서 눈 감고. 각 코드에서 탑이 R·3·5 중 뭔지도 함께 확인.

**20~40분 · 실전 반주 (예제 2 컴핑 / 74~84 BPM)**
**예제 2 C-Am-F-G를 BPM 78에서 4번 반복.** 탑노트가 G-A-A-G로 노래하는 데 집중. 익으면 백킹 위에 얹어 실제 곡처럼.

**40~50분 · 녹음/셀프 피드백 (권장)**
진행 두 바퀴 녹음. 체크: 탑노트 멜로디가 매끄럽게 이어졌는가 / 전환 시 손이 크게 점프하지 않았는가.

**오늘의 완료 기준:** C-Am-F-G를 탑노트 G-A-A-G가 노래하도록, 공통음을 붙인 채 최소 이동으로 순환한다.

## ④ 팁 / 흔한 실수

- **공통음을 매번 다시 잡기.** C→Am은 아래 두 음이 그대로예요. 떼지 말고 탑만 옮기세요.
- **탑노트가 튀는 큰 점프.** 탑이 계단(한 음)으로 움직이는 자리를 고르세요. 크게 뛰면 멜로디가 안 들려요.
- **탑노트가 묻힘.** 맨 위 음을 살짝 더 세게. 아래는 받쳐주는 역할.
- **진행을 덩어리로 바꾸기.** "이 코드의 탑을 어디에 둘까"를 매 코드 물어보세요.
