---
title: "믹솔리디안 입문 + 정체성 두 음: ♭7(G)의 긴장과 장3도(C#)의 해결"
dayKey: "m3.w10.d1"
estMinutes: 50
i18nKey: "lesson.m3.w10.d1"
---

# Day 1 — 도미넌트를 '노래'하게 만드는 두 음: ♭7 G와 장3도 C#

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지난주 도리안(♮6)으로 마이너 코드에 색을 입혔잖아요. 이번 주는 반대편, **<mark>도미넌트 7th 코드</mark>** 차례예요. A7 백킹을 틀어놓고 그냥 A 마이너 펜타토닉만 긁으면… 안 틀리긴 하는데 심심하죠? "블루스답긴 한데 뭔가 밋밋한" 그 느낌. 그걸 확 바꿔주는 게 오늘의 스케일, **<mark>A 믹솔리디안</mark>**이에요.

A 믹솔리디안 = **<mark>A B C# D E F# G</mark>**. 메이저 스케일에서 딱 한 음, 7도만 반음 내린 거예요(장7도 G# → 단7도 G). 그래서 이 스케일의 정체성은 딱 두 음이 만들어요.

- **<mark>장3도 = C#</mark>** — "이건 메이저다"라고 선언하는 음. 밝고, 도착하면 귀가 "아 됐다" 하고 안심하는 **해결음**이에요.
- **<mark>단7도(♭7) = G</mark>** — 믹솔리디안의 서명이에요. 이 음이 코드에 "그냥 메이저가 아니라 **도미넌트**야, 어디론가 가고 싶어" 하는 근질근질한 **긴장**을 줘요.

핵심은 이 둘의 **관계**예요. G(♭7)로 긴장을 걸어두고, C#(장3도)로 풀어주는 거죠. 마이너 펜타에만 살던 사람은 이 **C#(장3도)를 아예 안 짚어요.** 그래서 소리가 마이너처럼 어둡게만 나요. 오늘부터 규칙 하나. **<mark>A7 위에서는 C#을 반드시 착지음으로 쓴다.</mark>** C#에 도착하는 순간 여러분 솔로가 "블루스 흉내"에서 "진짜 도미넌트"로 바뀝니다.

그리고 블루스 양념 한 스푼. 마이너 3도인 **C(♭3)** 를 **블루노트**로 살짝 끼워 넣을 거예요. C는 스케일 정식 멤버가 아니에요. C#(장3도) 바로 반음 아래에 있는 삐딱한 음이죠. 이걸 잠깐 스치거나 반음 밀어 올려서 **C → C#** 로 해결하면, 그 유명한 "찐한" 블루지 믹솔리디안 소리가 나요. 규칙은 W4 때랑 같아요. **<mark>블루노트는 목적지가 아니라 장3도로 가는 길목.</mark>** 눌러앉으면 틀린 음, 스쳐 지나가면 명곡.

오늘은 **Position 1(1번 폼)** 을 손에 익히고, 그 안에서 G(♭7)와 C#(장3도)가 어디 있는지 눈 감고도 찾는 게 목표예요.

## ② 시각 자료

첫째, A 믹솔리디안 **Position 1**이에요. 근음 A는 6번 줄 5프렛. 강조 두 종류를 잘 보세요 — **<mark>장3도 C#(해결, 초록)</mark>** 과 **♭7 G(긴장, 노랑)**. 이 두 색이 오늘의 주인공이에요.

```json
{
  "id": "m3.w10.d1.a_mixolydian_pos1",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 1 (major 3rd C# & b7 G)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 4, "label": "2", "role": "scale" },
      { "string": 5, "fret": 4, "finger": 1, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 2, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 4, "finger": 1, "label": "6", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 1, "label": "2", "role": "scale" },
      { "string": 3, "fret": 6, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 4, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 4, "label": "2", "role": "scale" }
    ]
  }
}
```

둘째, 정체성 두 음의 **<mark>긴장-해결 지도</mark>**예요. G(♭7, 긴장)와 C#(장3도, 해결)를 한 손 자리에 나란히 놓고, 그 사이에 블루노트 C(♭3)까지 얹었어요. C(3번 줄 5프렛) → C#(3번 줄 6프렛), 딱 한 프렛 위로 해결되는 거 보이죠? 이게 오늘 귀에 새길 그림이에요.

```json
{
  "id": "m3.w10.d1.identity_tension_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Identity notes: b7(G) tension -> major 3rd(C#) resolution, with b3(C) blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

셋째, 오늘의 블루지 릭이에요. 1마디는 근음에서 출발해 **<mark>블루노트 C를 반음 벤딩해 C#(장3도)로 해결</mark>**하고, 2마디는 **♭7 G의 긴장을 걸었다가 C#으로 내려앉아** 비브라토로 마무리해요. 이 릭 하나가 오늘 배운 이론의 요약본이에요.

```json
{
  "id": "m3.w10.d1.bluesy_mixolydian_lick",
  "type": "tab",
  "meta": {
    "title": "Bluesy Mixolydian lick (b3 blue note -> major 3rd, b7 tension -> 3rd)",
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
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 90) — 4연음 시퀀스로 폼 깨우기**
메트로놈 90에 맞춰 Position 1을 4연음(16분)으로 상행 한 바퀴. 블록 위아래로 그냥 긁는 거 금지예요. "네 음씩 묶어서" A-B-C#-D / B-C#-D-E … 이렇게 밀고 올라가요. C#(장3도)을 지날 때마다 마음속으로 <mark>"여기가 밝은 음!" 하고 도장 찍기</mark>. 손이 뭉치면 BPM 80으로.

```json
{
  "id": "m3.w10.d1.a_mixolydian_pos1",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 1 (major 3rd C# & b7 G)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 4, "label": "2", "role": "scale" },
      { "string": 5, "fret": 4, "finger": 1, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 2, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 4, "finger": 1, "label": "6", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 1, "label": "2", "role": "scale" },
      { "string": 3, "fret": 6, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 4, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 4, "label": "2", "role": "scale" }
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (타겟 = G와 C#)**
메트로놈 끄고, Position 1에서 **♭7 G만** 두 자리(4번 줄 5프렛, 2번 줄 8프렛) 찾아 짚기. 짚을 때마다 "이건 긴장" 하고 소리 내요. 다음엔 **<mark>장3도 C#만</mark>** 두 자리(5번 줄 4프렛, 3번 줄 6프렛) 짚으며 "이건 해결". 마지막엔 G 하나 짚고 → 가장 가까운 C#으로 손을 옮기는 동작을 5번. 눈 감고 G·C#을 3초 안에 짚으면 통과.

```json
{
  "id": "m3.w10.d1.identity_tension_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Identity notes: b7(G) tension -> major 3rd(C#) resolution, with b3(C) blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

**20~40분 · 실전 즉흥 (A7 원코드 백킹 / 80~90 BPM)**
"A7 vamp backing track" 또는 "A7 groove jam" 하나 틀어요. 미션 딱 하나: **<mark>프레이즈를 끝낼 때 무조건 C#(장3도)에 착지하기.</mark>** 중간은 자유롭게 펜타처럼 놀아도 돼요. 대신 문장의 마침표는 항상 C#. 여유 있으면 오늘의 블루지 릭(C→C# 반음 벤딩)을 두세 번 섞어 넣으세요. C#에 도착하는 순간 백킹과 "찰칵" 맞물리는 느낌이 오면 성공.

```json
{
  "id": "m3.w10.d1.bluesy_mixolydian_lick",
  "type": "tab",
  "meta": {
    "title": "Bluesy Mixolydian lick (b3 blue note -> major 3rd, b7 tension -> 3rd)",
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
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 마지막 잼 30초 녹음. 다시 들으며 딱 하나 체크: **<mark>내 프레이즈 끝이 정말 C#에서 멈췄는지</mark>, 아니면 습관적으로 근음 A나 ♭3 C로 흘러버렸는지.** C#에서 안 멈췄으면 내일 그 습관부터 잡아요.

**오늘의 완료 기준:** Position 1에서 G·C#을 눈 감고 각각 짚기. A7 백킹 위에서 프레이즈를 C#으로 착지시키기 8회 이상. 블루노트 C→C# 반음 벤딩 성공.

## ④ 팁 / 흔한 실수

- **C#(장3도)를 빼먹는 병.** 제일 흔해요. 마이너 펜타 손버릇 때문에 나도 모르게 C#을 건너뛰고 C(♭3)에만 머물러요. 그럼 도미넌트가 아니라 그냥 마이너로 들려요. 오늘은 의식적으로 C#을 문장 끝에 박으세요.
- **블루노트 C에 눌러앉기.** C는 장3도로 가는 길목이지 종착역이 아니에요. 반음 밀어 올려 C#으로 풀거나 스쳐 지나가세요. 오래 머무는 순간 "틀린 음"이 됩니다.
- **♭7 G를 아무 데나 뿌리기.** G는 강력한 긴장음이라, 착지음으로 오래 끌면 붕 뜬 채 안 풀린 느낌이 나요. G는 살짝 긴장을 걸어주는 양념으로 쓰고 곧 C#이나 5도 E로 풀어주세요.
- **템포 욕심.** 90이 답답해도 오늘은 위치·색깔 각인이 전부예요. 빠르게 대충 긁는 것보다 느리게 C#·G 이름 부르며 짚는 게 이번 주 전체를 살립니다.
