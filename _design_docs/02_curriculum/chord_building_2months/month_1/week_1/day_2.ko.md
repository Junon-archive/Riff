---
title: "메이저 → 마이너 — 3도를 반음 내리면 표정이 바뀐다"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — 손가락 하나로 밝음을 슬픔으로

## ① 이론/설명

오늘 왜 이걸 하냐면요 — 코드 하나만 제대로 파 두면, 마이너 코드 수십 개가 공짜로 딸려오거든요. 어제 G 메이저 안에서 **3도(B)**에 눈도장 찍어뒀죠? 오늘은 그 3도 하나만 건드립니다. <mark>딱 한 손가락, 딱 한 프렛</mark>이요.

규칙은 이 한 줄이 전부예요.

> **<mark>3도를 반음 내리면</mark>(3 → b3) 메이저가 마이너가 된다.**

지판에서는 3번 줄의 **4프렛(B, 3도)** 을 한 칸 아래 **3프렛(B♭, b3)** 으로 내리기만 하면 돼요. 손가락 하나, 한 프렛. 그게 전부인데 코드의 표정이 <mark>'밝음'에서 '슬픔'으로</mark> 확 바뀝니다. 나머지 R·5는 하나도 안 건드려요.

```json
{
  "id": "m1.w1.d2.gm_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm — 6th-string root (E-form minor)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

처음엔 "이게 진짜 다야?" 싶을 만큼 허무할 수도 있는데, **<mark>그 허무함이 정상이에요</mark>.** 원래 좋은 원리는 이렇게 단순하거든요. 밝음과 슬픔을 가르는 건 언제나 3도 하나 — 오늘은 그 사실을 손으로 딱 한 번 느껴두는 날이에요.

왜 이게 중요하냐면, 앞으로 어떤 코드를 만나도 "이 코드의 3도가 어디지? 그게 장3도야 단3도야?"만 물으면 밝은지 어두운지 바로 알 수 있거든요. 모양 60개를 외우는 대신 **<mark>3도 한 자리</mark>**만 추적하면 돼요. Am이든 Cm이든 Fm이든, "아, 3도만 반음 내리면 되지" 하고 스스로 만들어내게 됩니다.

## ② 시각 자료

먼저 어제의 G 메이저에서 3도만 반음 내린 **G 마이너(E 폼)**. 3번 줄이 4프렛 → 3프렛으로 내려온 게 보이시죠. 초록이 바로 그 **b3(B♭)**, <mark>오늘의 주인공</mark>이에요.

```json
{
  "id": "m1.w1.d2.gm_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm — 6th-string root (E-form minor)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**예제 1 — 3 → b3 대조 라인.** 같은 3번 줄에서 4프렛(장3도 B)과 3프렛(단3도 B♭)을 나란히 쳐서 그 반음 차이가 만드는 감정 차이를 귀로 붙잡아요.

```json
{
  "id": "m1.w1.d2.third_compare_line",
  "type": "tab",
  "meta": {
    "title": "3 vs b3 compare — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 70.** "루트 → 장3도 → 단3도 → 루트." 3도에서 b3로 내려가는 순간 표정이 확 어두워지는 걸 느끼세요. 4번 반복.

**예제 2 — 메이저 ↔ 마이너 스위치 컴핑.** 같은 리듬으로 1마디는 G, 2마디는 Gm을 쳐요. 표시된 음마다 **코드 전체를 스트로크**하되, 실제로 움직이는 건 **3번 줄 한 손가락(4↔3프렛)뿐**임을 확인하세요.

```json
{
  "id": "m1.w1.d2.maj_min_comp",
  "type": "tab",
  "meta": {
    "title": "G to Gm switch comp — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 75, 4번 반복.** 1마디는 밝은 G, 2마디는 어두운 Gm. 리듬은 똑같고 오직 3번 줄 손가락만 한 칸 내려가요. 그 한 칸이 곡의 분위기를 바꾼다는 걸 손으로 기억하세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
G ↔ Gm 을 4박마다 번갈아 잡아요. 3번 줄 손가락만 4프렛 ↔ 3프렛으로 움직이고, 나머지 손가락은 최대한 안 떼는 게 포인트. <mark>전환이 뚝뚝 끊기지 않게</mark>.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = b3)**
**예제 1**을 짚으며 "삼도 / 단삼도"를 소리 내어 불러요. 눈 감고 3번 줄 4프렛과 3프렛을 번갈아 정확히 짚을 수 있으면 통과. 이 한 칸이 이번 주 내내 쓸 <mark>'마이너 스위치'</mark>예요.

**20~40분 · 실전 반주 (예제 2 컴핑 / 70~80 BPM)**
백킹 없이도 좋아요. **예제 2를 BPM 75에서 4번 반복** — 1마디 G, 2마디 Gm. 익으면 근음만 5번 줄로 옮겨(예: C ↔ Cm) 같은 스위치를 응용해 보세요. 손이 아니라 "<mark>3도를 내렸다</mark>"는 생각으로 전환하는 게 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
G ↔ Gm 전환을 30초 녹음. 체크: 전환 순간 **<mark>다른 줄이 딸려 죽지 않는지</mark>**, b3가 또렷이 우는지. 뭉치면 3번 줄 손가락 끝만 세워 보세요.

**오늘의 완료 기준:** 3번 줄 4↔3프렛만으로 G ↔ Gm 을 <mark>끊김 없이 전환하고</mark>, 눈 감고 b3를 짚을 수 있다.

## ④ 팁 / 흔한 실수

- **손 전체를 다시 잡기.** 마이너로 갈 때 손 모양을 통째로 바꾸려 하면 느려요. <mark>오직 3번 줄 손가락 하나만 한 칸</mark>. 나머지는 그대로 붙여 두세요.
- **b3가 안 울림.** 3번 줄 3프렛이 죽으면 옆 줄 손가락이 살짝 덮은 거예요. <mark>손끝을 세워 3번 줄만 깨끗이</mark>.
- **"슬픈 코드 모양"으로 외우기.** Gm을 모양으로 외우지 마세요. "<mark>G에서 3도를 반음 내린 것</mark>"으로 기억해야 A, C, D 어디서든 똑같이 통해요.
- **5도까지 건드리기.** <mark>5도(D)는 오늘 안 움직여요</mark>. 손가락이 5도까지 따라 움직이면 코드가 흔들려요.
