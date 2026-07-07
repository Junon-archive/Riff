---
title: "보이스 리딩 통합 — 탑노트를 노래시키며 프로처럼"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — 멜로디를 유지하며 진행을 노래로

## ① 이론/설명

이번 주 결승선. C-Am-F-G 진행을 **탑노트 멜로디(G-A-A-G)를 유지한 채** 세 음 보이싱으로 프로처럼 컴핑합니다. 여기에 5주차(탑노트)+6주차(텐션)의 감각을 얹어요.

- **탑은 노래.** 진행 내내 맨 위 음이 G-A-A-G로 이어져요.
- **아래는 받침.** 공통음은 붙여 두고 최소 이동.
- **원하면 색(9도).** 예를 들어 C에 9도(D)를 살짝 더하면 화사해져요. 뼈대(멜로디+코드)는 그대로, 색만 추가 — 6주차 그대로예요.

한 달 정리: 근음을 4번 줄로 올려 고음역을 열고(5주), 9도로 색을 더하고(6주), 이제 탑노트를 멜로디로 이었어요(7주). 다음 주(8주차)엔 이 모든 걸 섞어 **나만의 컴핑을 녹음**합니다. 여기까지 왔다는 건, 이제 코드를 '외운 모양'이 아니라 '멜로디를 받치는 도구'로 쓴다는 뜻이에요. 두 달 전, 코드 하나 바꾸는 데도 손이 넥을 뛰어다니던 나와 비교하면 — 완전히 다른 연주자가 된 거예요.

## ② 시각 자료

**F — 탑 = 3(A).** Am과 탑(A)이 같아 이어지기 쉬워요. 초록이 탑.

```json
{
  "id": "m2.w7.d4.f_top_a",
  "type": "fretboard_diagram",
  "meta": { "title": "F triad — top note A (3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "F" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 5, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**G — 탑 = R(G).** 탑이 A에서 G로 한 음 내려와 진행을 닫아요.

```json
{
  "id": "m2.w7.d4.g_top_r",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note G (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**예제 1 — 탑노트 멜로디(G-A-A-G).** 진행의 노래 라인만. 이게 오늘 유지할 선율이에요.

```json
{
  "id": "m2.w7.d4.top_line",
  "type": "tab",
  "meta": { "title": "Top-note line (G-A-A-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
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

▶ **BPM 72.** 1번 줄 3-5-5-3. 이 멜로디를 먼저 손과 귀에. 4번 반복.

**예제 2 — C-Am-F-G 세 음 컴핑(탑 유지).** 각 코드를 낮은음→가운데→탑으로 굴려 치고, 맨 위 G-A-A-G가 노래하게.

```json
{
  "id": "m2.w7.d4.full_triad_comp",
  "type": "tab",
  "meta": { "title": "C-Am-F-G triad comp (top line) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80, 4번 반복.** 세 음을 낮은음부터 굴려 치되 탑(G-A-A-G)이 끝까지 노래하게. 손은 프렛 3~6 한 구역. 익으면 C에 9도(D)를 살짝 더해 색을 입혀 보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**예제 1** 탑 멜로디(G-A-A-G)를 1번 줄에서. 그다음 C-Am-F-G 네 자리를 순서대로, 탑이 그 멜로디로 이어지는지.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 멜로디 유지)**
각 코드에서 탑이 G·A·A·G임을 확인하고, 공통음이 어디서 그대로 붙는지 매핑. 눈 감고 진행을 돌며 탑을 노래시켜요.

**20~40분 · 실전 반주 (예제 2 컴핑 / 76~86 BPM)**
**예제 2를 BPM 80에서 4번 반복.** 백킹 위에 얹어 실제 곡처럼. 탑노트 멜로디가 또렷이 노래하는 데 집중. 여유되면 한 코드에 9도를 더해 색을 입혀요.

**40~50분 · 녹음/셀프 피드백 + 한 주 회고 (권장)**
진행 두 바퀴 녹음. 체크: 탑 멜로디가 매끄럽게 이어졌는가 / 전환 시 탑이 툭 끊기지 않았는가 / 손이 한 구역에 머물렀는가.

**오늘의 완료 기준:** C-Am-F-G를 탑노트 멜로디(G-A-A-G)를 유지하며 세 음 보이싱으로 프로처럼 컴핑한다. (7주차 완성!)

## ④ 팁 / 흔한 실수

- **탑이 중간에 끊김.** 코드가 바뀔 때 탑노트를 놓치면 멜로디가 사라져요. 탑은 최대한 이어지게.
- **덩어리로 바꾸기.** 여전히 아마추어의 함정. 탑을 '골라' 잇는 감각을 유지하세요.
- **색만 좇다 멜로디 놓침.** 9도는 옵션이에요. 오늘의 주인공은 탑노트 멜로디.
- **회고 건너뛰기.** 5·6·7주차가 어떻게 하나로 합쳐졌는지 10분 정리. 다음 주 녹음 챌린지의 재료예요.
