---
title: "믹솔리디안 4연음 시퀀스 + 장3도 타겟팅을 손버릇으로"
dayKey: "m3.w10.d2"
estMinutes: 50
i18nKey: "lesson.m3.w10.d2"
---

# Day 2 — Position 1을 '노래'로: 4연음 시퀀스와 C# 착지 반사신경

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 A 믹솔리디안 Position 1을 손에 얹고, C#(장3도)·G(♭7)의 위치를 찾았죠. 근데 위치만 아는 거랑, **연주 중에 자동으로 C#에 손이 가는 것**은 완전히 다른 얘기예요. 그 간극을 메우는 게 오늘이에요.

방법은 두 가지예요. 첫째, **4연음 시퀀스**. 스케일을 위아래로 긁는 대신 "네 음씩 묶어서 한 칸씩 밀며 올라가는" 패턴이에요. A-B-C#-D → B-C#-D-E → C#-D-E-F# … 이렇게요. 이게 왜 중요하냐면, 블록을 통째로 외우면 즉흥할 때 "음 하나"가 아니라 "덩어리"로만 나와서 뻣뻣해요. 4연음으로 쪼개 놓으면 스케일이 손가락 안에서 **작은 문장 단위**로 살아 움직여요. 그리고 이 시퀀스를 돌리다 보면 C#(장3도)이 계속 손가락 밑을 스치니까, 자연스럽게 "C#은 늘 여기 있다"가 몸에 새겨져요.

둘째, **장3도 타겟팅을 손버릇으로 만들기**. 어제는 "프레이즈 끝에 C#" 하고 의식적으로 했지만, 오늘은 그걸 반사신경으로 굳혀요. 지판에서 C#(3)과 G(♭7)이 어디 있는지 "생각 안 하고" 짚을 수 있어야 즉흥이 편해져요. 그래서 오늘 두뇌 훈련은 C#·G만 콕콕 찍는 지도 게임이에요.

블루노트 복습도 한 스푼. 어제는 C(♭3)를 **벤딩**으로 C#에 붙였는데, 오늘은 **해머온**으로도 해볼 거예요. C(3번 줄 5프렛)을 치고 곧바로 C#(3번 줄 6프렛)으로 해머 — 손가락으로 "톡" 두드려서 반음 위로 미끄러지듯 붙이는 거죠. 벤딩은 찐득하고, 해머는 매끈해요. 두 질감을 다 가지고 있으면 같은 블루노트도 표정이 달라져요.

오늘 목표: 4연음 시퀀스를 90 BPM에서 매끄럽게 돌리고, C#·G를 눈 감고 즉시 짚기. 그리고 블루노트를 벤딩·해머 두 방식으로 장3도에 붙이기.

## ② 시각 자료

첫째, 오늘의 워밍업, **A 믹솔리디안 4연음 시퀀스**예요. Position 1 안에서 네 음씩 묶어 한 칸씩 밀며 상행해요. C#(장3도)과 G(♭7)에 강조가 켜져 있으니, 지날 때마다 색깔을 의식하세요. 한 마디 = 16분음표 16개.

```json
{
  "id": "m3.w10.d2.four_note_sequence_pos1",
  "type": "tab",
  "meta": {
    "title": "A Mixolydian 4-note sequence (Position 1, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 4, "duration": "sixteenth", "label": "6", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 4, "duration": "sixteenth", "label": "6", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

둘째, **C#·G 타겟 지도**예요. Position 1 안에서 장3도 C#(초록, 해결)과 ♭7 G(노랑, 긴장)가 각각 두 자리씩. 근음 A와 블루노트 C도 흐리게 얹었어요. 이 그림이 눈 감고도 떠오를 때까지가 오늘의 두뇌 훈련이에요.

```json
{
  "id": "m3.w10.d2.third_and_b7_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Position 1 target map: major 3rd(C#) & b7(G) locations",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "label": "b7", "role": "color", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "blue_note", "highlight": true }
    ]
  }
}
```

셋째, 오늘의 블루지 릭이에요. **해머온**으로 C→C#을 붙이고(1마디), **벤딩**으로 다시 C→C#을 붙여 비브라토로 마무리해요(2마디). 같은 블루노트를 두 질감으로 만져보세요.

```json
{
  "id": "m3.w10.d2.blue_note_hammer_vs_bend",
  "type": "tab",
  "meta": {
    "title": "Blue note to major 3rd: hammer-on vs bend (b3 C -> 3 C#)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_line",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "hammer_on", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "2", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "color", "highlight": true },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 90) — 4연음 시퀀스**
위 4연음 시퀀스를 90에서 상행. 처음엔 80으로 시작해도 좋아요. 포인트는 **정확한 타이밍과 균등한 음량.** 16분음표 하나하나가 같은 크기로 또박또박 나와야 해요. C#·G를 지날 때 살짝 강조하며 "여기!" 하고 색을 의식하세요. 매끄러워지면 하행 버전도 즉흥으로 만들어 내려와 보세요.

**10~20분 · 두뇌 훈련 (C#·G 지도 게임)**
두 번째 지도를 보고, 메트로놈 없이 **C#만** 두 자리(5번 4프렛, 3번 6프렛) → **G만** 두 자리(4번 5프렛, 2번 8프렛)를 번갈아 짚어요. 각 음마다 이름을 소리 내서. 그다음 눈 감고 "C#!" 하면 3초 안에 한 자리 짚기, "G!" 하면 3초 안에 짚기. 5회 연속 성공하면 통과.

**20~40분 · 실전 즉흥 (A7 vamp / 85~90 BPM) — ♭7 강조 미션**
"A7 vamp backing track"을 틀고, 오늘의 미션 두 개: (1) 문장은 여전히 C#으로 착지, (2) 문장 **중간에 ♭7 G를 최소 한 번씩 강조로 넣기.** G로 긴장을 걸고 → C#으로 풀기, 이 왕복을 계속 만들어요. 블루노트 릭(해머·벤딩)도 자유롭게 섞으세요. "긴장(G) → 해결(C#)"이 귀에 들리면 성공.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 잼 30초 녹음. 체크 포인트 두 개: (1) 4연음 워밍업의 타이밍이 고른지, (2) G를 넣고 정말 C#으로 풀었는지, 아니면 G에서 붕 뜬 채 끝나버렸는지. 필요하면 재생 속도를 늦춰 G→C# 전환 순간을 확대해서 들어보세요.

**오늘의 완료 기준:** 4연음 시퀀스 90 BPM 무정지 통과. C#·G 눈 감고 즉시 짚기 5연속. 블루노트를 해머·벤딩 두 방식으로 각각 장3도에 붙이기.

## ④ 팁 / 흔한 실수

- **4연음을 '빨리'만 하려는 것.** 속도보다 **균등함**이 먼저예요. 네 음 중 첫 음만 크고 나머지가 뭉개지면 시퀀스가 아니라 그냥 긁는 소리예요. 느려도 네 음 다 또렷하게.
- **해머온이 안 울림.** C#(6프렛)을 두드리는 손가락에 힘과 속도가 부족하면 소리가 죽어요. 손끝으로 프렛 바로 뒤를 "탁" 정확히 때리세요. 살짝 세게, 그리고 빠르게.
- **G에서 끝나버리기.** 미션에 취해 G를 자꾸 넣다 보면 문장을 G에서 끝내는 실수를 해요. G는 늘 '가는 중'인 음이에요. 반드시 C#(또는 5도 E, 근음 A)로 풀고 끝내세요.
- **워밍업과 즉흥을 따로 노는 것.** 4연음에서 익힌 손 모양이 즉흥에서 그대로 나와야 의미가 있어요. 잼 중에도 가끔 4연음 조각을 일부러 끼워 넣어 보세요. "연습이 곧 어휘"가 됩니다.
