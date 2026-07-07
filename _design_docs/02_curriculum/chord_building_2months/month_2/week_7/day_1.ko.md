---
title: "보이스 리딩이란 — 탑노트를 내가 고른다"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 같은 코드, 어떤 탑노트를 얹을까

## ① 이론/설명

5주차에서 같은 코드도 탑노트(맨 위 음)를 무엇으로 두느냐에 따라 여러 자리가 있다는 걸 봤죠. 이번 주의 핵심은 그걸 **의도적으로 고르는** 거예요. 왜냐하면 **탑노트를 나열하면 하나의 멜로디**가 되거든요.

아마추어는 코드를 그냥 '덩어리'로 바꿔요 — 손 가는 대로. 프로는 "이 진행에서 맨 위 음이 어떻게 노래하면 좋을까?"를 먼저 정하고, 그 탑노트를 만들어 주는 보이싱을 골라요. 그러면 코드 반주가 곧 멜로디가 있는 '노래'가 돼요.

오늘은 준비 운동. 같은 **G 코드**를 탑노트만 바꿔(R 또는 3) 두 자리로 잡아보고, 탑노트가 곧 멜로디의 재료임을 감으로 익힙니다. 오늘은 딱 두 자리만 오가면 돼요 — 아직 멜로디를 만들려고 애쓸 필요 없어요. "맨 위 음이 곧 멜로디가 된다"는 한 문장만 몸에 새기면, 내일부터 여러분 반주 위에서 진짜 노래가 시작돼요.

## ② 시각 자료

**G — 탑노트 = R(G).** 초록이 탑노트예요.

```json
{
  "id": "m2.w7.d1.g_top_root",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note R", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 2, "label": "R", "role": "target", "highlight": true }
  ]}
}
```

**G — 탑노트 = 3(B).** 같은 G인데 맨 위가 3도로 바뀌었어요.

```json
{
  "id": "m2.w7.d1.g_top_third",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 3", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**예제 1 — 탑노트로 만든 짧은 멜로디.** 1번 줄에서 G의 세 음(R·3·5)을 골라 작은 선율을 만들어요: G → B → D → B. 코드가 아니라 **탑노트가 노래**한다는 감각을 미리.

```json
{
  "id": "m2.w7.d1.top_melody_intro",
  "type": "tab",
  "meta": { "title": "Top-note mini melody — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 1번 줄 3 → 7 → 10 → 7프렛. 이 네 음이 G의 R·3·5로 만든 짧은 멜로디예요. 탑노트가 노래가 될 수 있음을 귀로. 4번 반복.

**예제 2 — 같은 G, 탑노트만 바꿔 컴핑.** 1마디는 탑=R, 2마디는 탑=3. 코드는 그대로 G인데 맨 위 소리가 달라지는 걸 비교.

```json
{
  "id": "m2.w7.d1.same_chord_top_comp",
  "type": "tab",
  "meta": { "title": "Same G, different top — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 76.** 둘 다 G인데 탑노트가 R(1:3)에서 3(1:7)로 옮겨가요. "코드는 같아도 탑을 고르면 멜로디가 시작된다"를 손으로. 4번 반복.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
G의 두 자리(탑=R, 탑=3)를 각각 잡아 1·2·3번 줄만 깨끗이. 넥 위 두 자리를 오가는 손 이동에 적응.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 탑노트 선택)**
각 자리에서 **맨 위 음이 지금 뭔지** 소리 내어 불러요. 눈 감고 "탑=3!" 하면 7프렛 자리를 바로. **예제 1**로 탑노트가 멜로디가 됨을 확인.

**20~40분 · 실전 반주 (예제 2 컴핑 / 72~82 BPM)**
**예제 2를 BPM 76에서 4번 반복.** 같은 G에서 탑을 R↔3로 바꿔 색을 비교. 익으면 탑=5(1:10)까지 넣어 세 자리를 오가며 탑노트 멜로디를 만들어 보세요.

**40~50분 · 녹음/셀프 피드백 (권장)**
탑노트 바꾸기 30초 녹음. 체크: 탑노트가 또렷이 들리는가 / 자리 이동이 매끄러운가.

**오늘의 완료 기준:** 같은 G를 탑노트 R·3(·5) 여러 자리로 잡고, 탑노트를 골라 짧은 멜로디를 만들 수 있다.

## ④ 팁 / 흔한 실수

- **탑노트를 우연에 맡기기.** 프로는 탑을 '고릅니다'. 어떤 음이 맨 위에 오면 좋을지 먼저 생각하세요.
- **탑노트가 안 울림.** 1번 줄 맨 위 음이 죽으면 멜로디가 안 들려요. 손끝 세워 또렷이.
- **자리 이동이 큰 점프.** 오늘은 개념 잡기. 내일부터 최소 이동으로 잇습니다.
- **탑만 보고 코드 소홀.** 아래 두 음이 코드를 만들어요. 탑은 그 위의 멜로디.
