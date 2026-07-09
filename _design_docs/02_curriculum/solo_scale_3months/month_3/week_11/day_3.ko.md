---
title: "락 백킹 위에서 믹솔리디안 스위칭 + 파워풀 롱톤·과감한 벤딩"
dayKey: "m3.w11.d3"
estMinutes: 50
i18nKey: "lesson.m3.w11.d3"
---

# Day 3 — 락: 3도를 크게 벤딩해 밀어 올리고, 길게 우려내기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 블루스는 늘어졌고, 펑크는 쪼갰죠. 오늘 **락**은 또 달라요. 락의 무기는 **<mark>직진성</mark>** — 파워풀한 롱톤, 과감한 벤딩, 큼직한 비브라토예요. 잔재주보다 **<mark>한 음을 크게 밀어 올려 길게 우려내는</mark>** 배포가 락의 매력이에요. 백킹이 바뀌었으니 오늘도 프레이징 무드를 통째로 갈아 끼웁니다.

오늘의 락 백킹은 파워코드 리프예요. **<mark>A5 → G5 → D5</mark>** (I-♭VII-IV), 클래식 락의 그 골격이죠. 파워코드는 3도가 없어서 메이저/마이너가 열려 있는데, 이 ♭VII(G) 진행은 **믹솔리디안** 색이 딱이에요. 그래서 베이스캠프는 **<mark>A 믹솔리디안(A B C# D E F# G)</mark>**. 여기 담긴 ♭7(G)이 락 특유의 시원한 색을 줘요.

코드별 3도 스위칭은 이렇게.

- **A5(A)일 때 → C#(장3도)** 를 노려요. 아래 B(3번 4프렛)에서 **<mark>온음 벤딩으로 C#까지 과감하게 밀어 올리면</mark>** 락 솔로의 그 시원한 진입이 나와요.
- **G5(G)로 바뀌면 → B(장3도)** 로 착지. (B는 A 믹솔리디안 안에 그대로 있어요.)
- **D5(D)면 → F#(장3도)** 로 착지.
- 색채음은 ♭7(G, 2번 8프렛) — 롱톤으로 길게 깔면 믹솔리디안 정체성이 확 살아요.

### 🎙️ 여백·프레이징 미니레슨 — 락 편: 파워풀 롱톤 & 과감한 벤딩

락에도 여백이 있어요. 다만 그 여백은 **"다음 대포를 쏘기 전의 정적"** 이에요. 오늘 챙길 4가지.

- **<mark>드라마틱한 쉼표:</mark>** 큰 벤딩을 쏘기 직전에 **한 박 통째로 비우세요.** 그 침묵이 이어질 롱톤을 무대의 주인공으로 만들어요. 어제처럼 잘게 쪼갠 쉼이 아니라, **큼직하게 비운 한 칸**이에요.
- **파워풀 롱톤:** 3도에 착지하면 **온음표·반음표로 길게** 밀고 나가요. 짧게 끊지 말고 앰프가 울 때까지 우려내세요.
- **<mark>과감한 벤딩:</mark>** 살살 밀지 마세요. **B를 온음 벤딩해 C#(3도)로** 확실히 밀어 올리고, 도착한 뒤 크게 비브라토를 걸어요. 도착 음정은 정확하게(귀로 목표음 대조), 표현은 대담하게.
- **모티프 & 다이내믹:** "크게 벤딩한 롱톤" 한 방을 던진 뒤, 뒤이어 여리게 되받아 대비를 만들면 같은 라인도 훨씬 극적으로 들려요.

정리하면 오늘은 **A5·G5·D5의 3도(C#·B·F#)에 착지하되, <mark>과감한 벤딩과 긴 롱톤, 큰 비브라토로 파워풀하게 노래하는</mark>** 날이에요.

## ② 시각 자료

첫 번째, 락 리프용 **<mark>타겟 노트 지도</mark>**예요. A5·G5·D5의 3도가 5프렛 근처에 모여 있고, ♭7(G) 색채음도 표시했어요. **3번 줄 4프렛 B → 온음 벤딩 → 6프렛 C#(A5의 3도)** 가 오늘의 시그니처 무브예요.

```json
{
  "id": "m3.w11.d3.rock_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Rock target map A5 -> G5 -> D5 (A Mixolydian, 3rds + b7 color)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (rock I-bVII-IV)",
    "scale": "A Mixolydian",
    "tempoBpm": 120
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A5 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "A5-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "finger": 1, "label": "G5-3(B) / bend to C#", "highlight": true, "role": "target" },
      { "string": 5, "fret": 10, "finger": 4, "label": "G5 R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D5 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D5-3(F#)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7(G color)", "highlight": true, "role": "color" }
    ]
  }
}
```

두 번째, 오늘의 **<mark>락 롱톤·벤딩 프레이즈</mark>**예요. 1마디는 A5 위에서 **한 박 비우고 → B를 온음 벤딩해 C#로 크게 밀어 올려 반음표로 우려낸 뒤 → C#에 비브라토로 마무리.** 2마디는 D5로 스위칭 — **F#에 비브라토 롱톤으로 길게 착지**해요. 쉼표는 적지만 하나하나가 '무대 암전'처럼 크게 비어 있어요.

```json
{
  "id": "m3.w11.d3.rock_longtone_bend_phrase",
  "type": "tab",
  "meta": {
    "title": "Rock long-tone bend phrase (A5 B>C# / D5 F#) with dramatic space",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (rock)",
    "tempoBpm": 120
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true, "label": "breath" },
        { "string": 3, "fret": 4, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "B>C#(A5-3)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A5-3(C#)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "eighth", "rest": true, "label": "breath" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "D5-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "D5-3(F#)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 120) — 4연음 시퀀스 + 벤딩 예열**
락 템포 120에 맞춰 A 믹솔리디안을 4연음 시퀀스로 한 바퀴 돌린 뒤, **<mark>3번 줄 4프렛 B를 온음 벤딩해 6프렛 C# 실음과 겹쳐 맞추는</mark>** 벤딩 튜닝을 10번. 먼저 C#(3번 6프렛)을 띵 쳐서 귀에 목표를 심고, 그 높이에 벤딩을 정확히 겹치세요. 표현은 대담하게, 음정은 칼같이.

**10~20분 · 두뇌 훈련 — A5/G5/D5 3도 매핑**
메트로놈 끄고, 타겟 지도에서 **A5→C#(3번 6프렛), G5→B(3번 4프렛), D5→F#(2번 7프렛)** 세 음을 눈으로 찍고 손으로 짚어요. ♭7(G, 2번 8프렛)도 한 번씩 눌러 색을 확인. "이 코드엔 이 음"을 소리 내 부르며.

```json
{
  "id": "m3.w11.d3.rock_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Rock target map A5 -> G5 -> D5 (A Mixolydian, 3rds + b7 color)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (rock I-bVII-IV)",
    "scale": "A Mixolydian",
    "tempoBpm": 120
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A5 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "A5-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "finger": 1, "label": "G5-3(B) / bend to C#", "highlight": true, "role": "target" },
      { "string": 5, "fret": 10, "finger": 4, "label": "G5 R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D5 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D5-3(F#)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7(G color)", "highlight": true, "role": "color" }
    ]
  }
}
```

**20~40분 · 실전 즉흥 (A5–G5–D5 락 백킹 / 116~120 BPM) — 롱톤·벤딩 미션**
"rock backing track A5 G5 D5" 또는 "A Mixolydian rock jam" 하나 틀어요. 미션 둘. ① 코드 바뀔 때 C#→B→F#로 3도 스위칭. ② **음을 많이 치지 말고, <mark>한 음을 과감히 벤딩해 롱톤으로 길게 우려내기</mark>.** 큰 벤딩 전엔 한 박 통째로 비워 드라마를 만드세요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 잼 30초 녹음. 다시 들으며 딱 두 가지 — ① 벤딩이 목표 음정(C#)에 정확히 닿았나(못 미치면 힘 부족, 지나치면 과함). ② **<mark>롱톤이 끝까지 안 흔들리고 큰 비브라토로 살아있나.</mark>** 필요하면 재생 속도를 늦춰 벤딩 도착 순간과 롱톤의 끝음 처리를 확대해 확인하세요.

**오늘의 완료 기준:** A5·G5·D5의 3도를 눈 감고 짚기. B→C# 온음 벤딩을 실음과 겹쳐 정확히 맞추기 5회 이상 + 백킹 위에서 **롱톤 착지 4회 이상(짧게 끊지 않기)**.

## ④ 팁 / 흔한 실수

- **벤딩을 살살 밀기.** 락은 대담함이 생명이에요. 어중간하게 밀면 음정도 안 맞고 힘도 없어요. **약지 뒤에 중지·검지를 받쳐 셋이서** 손목·팔뚝 회전으로 확실히 온음까지 밀어 올리세요.
- **음을 너무 많이 치기.** 락 솔로는 "적게, 크게"예요. 잔음 열 개보다 크게 벤딩한 롱톤 하나가 더 세게 꽂혀요. 손이 근질거려도 참고 한 음을 우려내세요.
- **롱톤을 밋밋하게 방치.** 길게 끄는 동안 **큰 비브라토**로 계속 살려주세요. 가만히 두면 죽은 음이에요. 끝음 처리가 락의 자존심이에요.
- **벤딩 목표를 안 정하고 밀기.** 도착점(C#)을 먼저 귀에 심고 미세요. 표현은 과감해도 **도착 음정은 정확해야** 락이 지저분해지지 않아요.
