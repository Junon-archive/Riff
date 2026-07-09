---
title: "3도 착지 즉흥 — 코드 체인지 박자에 정확히 도착하기"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — '언제' 착지하느냐: 코드 체인지 박자에 3도 도착시키기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 F→B→E 라인은 손에 붙었죠. 여기서 한 가지만 짚고 갈게요. 많은 사람이 **맞는 음을 짚는데도 틀린 소리가 나요.** 왜냐? **타이밍**이 어긋나서예요. Cmaj7으로 이미 바뀌었는데 반 박 늦게 E를 짚으면, 그 반 박 동안은 여전히 G7 위에서 놀던 음이 울려서 귀에 "삐끗"으로 들려요. 반대로 너무 일찍 짚어도 어색하고요.

그래서 오늘의 주제는 음이 아니라 **'언제'** 예요. 목표는 딱 하나. **코드가 바뀌는 바로 그 박자(다운비트)에 3도가 울리게 하는 것.** Dm7 되는 순간 F, G7 되는 순간 B, Cmaj7 되는 순간 E. 이게 되면 여러분 솔로가 갑자기 "코드를 알고 대화하는" 소리로 바뀌어요. 백킹 트랙이랑 손발이 척척 맞는 느낌.

이걸 몸에 새기는 비결은 두 가지예요.

- **미리 준비:** 코드가 바뀌기 한두 박 전에 이미 손가락을 다음 3도 위에 '얹어' 둬요. 눈으로 보고 옮기면 항상 늦어요. 손이 먼저 가 있어야 해요.
- **여백을 두려워하지 않기:** 3도를 딱 짚고 나서 **잠깐 쉬어도 돼요.** 오히려 착지 후 여백이 있으면 그 3도가 또렷하게 들리고, 다음 코드 3도를 준비할 시간도 벌어요. 음을 꽉 채우려다 타이밍을 다 놓치는 것보다, 세 번의 정확한 착지가 백배 나아요.

오늘은 빠른 ii-V(한 마디에 Dm7·G7이 두 박씩)도 다뤄요. 코드가 두 배로 빨리 바뀌니까 타이밍 감각이 더 날카로워져요. 겁먹지 마세요. 어차피 짚을 음은 F·B·E 셋뿐이에요.

## ② 시각 자료

첫 번째, **빠른 ii-V-I 착지 타이밍 훈련**이에요. 1마디 안에서 Dm7(1·2박)·G7(3·4박)이 두 박씩 지나가요. 각 코드의 **첫 박에 3도가 정확히 도착**해요. F(1박) → B(3박) → 2마디 첫 박 E. 8분음표 사이사이는 연결음이지만, 초록 착지음은 반드시 제 박에.

```json
{
  "id": "m2.w8.d3.landing_timing",
  "type": "tab",
  "meta": {
    "title": "Fast ii-V-I landing on the beat (Dm7/G7 two beats each)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "eighth", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 3, "duration": "eighth", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 2, "duration": "quarter", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "quarter", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

두 번째, **여백을 활용한 착지 드릴**이에요. 이번엔 반대로 음을 꽉 채우지 않아요. 각 코드의 3도를 첫 박에 딱 짚고, 짧은 연결 뒤에 **쉼표로 여백**을 둬요. 이 여백이 다음 3도를 준비할 시간을 벌어주고, 착지음을 또렷하게 들려줘요.

```json
{
  "id": "m2.w8.d3.arrival_with_space",
  "type": "tab",
  "meta": {
    "title": "Land the 3rd, then leave space (arrival drill with rests)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "quarter", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "chord_tone" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 2, "duration": "half", "rest": true, "label": "rest" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 76) — 3도 인터벌 + 미리 준비 감각**
어제 3도 시퀀스로 손을 풀되, 오늘은 규칙 하나 추가. 한 프레이즈를 짚는 동안 **반대편 눈은 다음 착지음을 미리 쳐다보기.** 손이 아직 여기 있어도 시선은 다음 F(또는 B, E)에 가 있는 습관을 들여요. 이 '미리 보기'가 타이밍의 8할이에요.

**10~20분 · 두뇌 훈련 (다운비트 착지 소리 내며 짚기)**
메트로놈 76, 4분음표. 클릭에 맞춰 F(1박) … B(1박) … E(1박)를 짚되, **짚는 순간 발로 바닥을 '탁' 밟아요.** 손·클릭·발이 한 점에 모이게. 처음엔 4분음표로, 익숙하면 두 박마다 코드 바꾸듯 빠르게. 착지가 클릭과 정확히 겹치면 통과.

**20~40분 · 실전 즉흥 (Dm7-G7-Cmaj7 백킹 / 70~76 BPM)**
백킹 위에서 위 **여백 드릴**부터 시작해요. "3도 짚고 → 쉬고 → 다음 3도 준비." 여백이 무섭겠지만 그 침묵이 여러분 편이에요. 익숙해지면 **빠른 착지 라인(첫 번째 JSON)** 으로 넘어가 음을 채워요. 규칙은 변함없어요. **연결음은 자유, 코드 바뀌는 첫 박엔 무조건 3도.** 늦었다 싶으면 다음 코드는 여백을 더 두고 준비.

```json
{
  "id": "m2.w8.d3.arrival_with_space",
  "type": "tab",
  "meta": {
    "title": "Land the 3rd, then leave space (arrival drill with rests)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "quarter", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "chord_tone" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 2, "duration": "half", "rest": true, "label": "rest" }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장)**
30초 녹음. 재생하며 딱 하나 귀로 좇아요: **코드가 바뀌는 순간과 내 3도가 겹치는가.** 어긋난 지점을 찾으면, 그 코드만 재생 속도를 늦춰 "얼마나 늦었는지/빨랐는지"를 확인. 늦는 버릇이 있으면 그 코드 한 박 전에 손을 미리 얹는 연습으로 교정.

**오늘의 완료 기준:** 메트로놈 76에서 F·B·E 착지가 클릭과 정확히 겹침. 백킹 위에서 세 코드 연속 '다운비트 3도 착지' 6회 이상. 여백 드릴을 흔들림 없이 완주.

## ④ 팁 / 흔한 실수

- **반 박 늦는 착지.** 제일 흔한 병이에요. 원인은 "코드 바뀐 걸 듣고 나서 움직여서". 해결은 오직 **미리 준비** — 바뀌기 전에 손가락이 이미 그 3도 위에 있어야 해요. 귀로 반응하면 무조건 늦어요.
- **여백을 못 참고 꽉 채우기.** 침묵이 어색해서 아무 음이나 욱여넣으면 타이밍이 다 무너져요. 여백은 실력이에요. 세 번의 정확한 착지 > 서른 개의 어긋난 음.
- **빨라지면 다 놓기.** 빠른 ii-V에서 당황하면 3도까지 포기하게 돼요. 이럴 땐 연결음을 다 버리고 **3도 세 개만** 제 박에 짚으세요. 뼈만 남겨도 음악은 서요.
- **발/클릭 안 쓰고 손만.** 몸의 큰 근육(발)로 박을 느끼면 착지 정확도가 확 올라가요. 손끝만으로 박을 잡으려 하지 마세요.
