---
title: "가이드톤 라인 연결 — F→B→E 최소 이동 시퀀스"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 세 음을 '선'으로 잇기: F→B→E 가이드톤 라인

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 F·B·E 세 음의 위치는 손에 익었죠. 근데 세 음을 따로따로 '점'으로만 짚으면, 백킹 위에서 음악이 아니라 "짚기 테스트"처럼 들려요. 툭… 툭… 툭… 하고요. 오늘은 이 세 점을 하나의 **선(line)** 으로 잇습니다. 이게 진짜 가이드톤 라인이에요.

비결은 어제 '집' 자리를 왜 그렇게 짜뒀는지에 있어요. 다시 볼게요.

- **F = 4번 줄 3프렛**
- **B = 3번 줄 4프렛**
- **E = 4번 줄 2프렛**

여기서 마법이 보이세요? **F(4번 3프렛) → E(4번 2프렛)** 는 같은 줄에서 딱 **한 프렛** 차이예요. 반음! 그래서 G7에서 Cmaj7으로 넘어갈 때, 우리는 F를 살짝 미끄러뜨리듯 E로 내리기만 하면 돼요. 이게 그 유명한 **F→E 해결** — G7의 7도(F)가 Cmaj7의 3도(E)로 반음 떨어지는, 재즈에서 가장 예쁜 목소리 이동이에요.

그리고 어제 말한 심장, **B→E 리딩**. G7에서 3도 B를 짚으면 귀가 벌써 "다음은 E겠지?" 하고 기대해요. 그 기대를 정확히 E로 채워주면, 듣는 사람 몸에 소름이 돋아요. 오늘 라인은 이 두 흐름(F→E 반음 해결, B→E 리딩)을 손과 귀에 동시에 새기는 게 목표예요.

접근 방식은 우리 커리큘럼 철학 그대로예요. **상하행 단순 암기 금지.** 대신 3도 인터벌과 짧은 연결음으로 라인을 만들되, **각 코드 마디의 착지음은 반드시 그 코드의 3도**로 끝냅니다. 특히 마디가 바뀌는 순간(코드 체인지)에 3도가 울리도록 타이밍을 설계했어요.

## ② 시각 자료

먼저 워밍업용 **다이어토닉 3도 시퀀스**예요. C 메이저를 3도씩 묶어 올라가는데, 그 안에 가이드톤 B·E·F가 자연스럽게 튀어나와요. 초록 강조된 음이 우리 타겟이에요.

```json
{
  "id": "m2.w8.d2.third_interval_warmup",
  "type": "tab",
  "meta": {
    "title": "Diatonic 3rds warmup surfacing guide tones (C major)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 0, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 0, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "scale" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 1, "fret": 1, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A", "role": "scale" }
      ]}
    ]
  }
}
```

이제 오늘의 본론, **가이드톤 라인**이에요. 세 마디 = 세 코드. 각 마디의 **첫 박(코드 체인지 순간)에 그 코드의 3도가 착지**하고, 짧은 연결음으로 다음 3도까지 이어져요. 특히 2마디 마지막 F(4번 3프렛)가 3마디 첫 박 E(4번 2프렛)로 **반음 해결**되는 걸 느껴보세요.

```json
{
  "id": "m2.w8.d2.guide_tone_line",
  "type": "tab",
  "meta": {
    "title": "ii-V-I guide tone line (Dm7 F -> G7 B -> Cmaj7 E)",
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
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 0, "duration": "quarter", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 76) — 3도 시퀀스**
위 `3rd_interval` 워밍업을 메트로놈 76에 8분음표로. 3도 간격의 손 모양(아래 줄–위 줄 왔다 갔다)을 몸에 익히면서, 초록 음(B·E·F)이 나올 때만 살짝 강조해서 짚어요. "3도로 움직이는데 그 안에 가이드톤이 숨어 있다"를 귀로 확인하는 시간.

```json
{
  "id": "m2.w8.d2.third_interval_warmup",
  "type": "tab",
  "meta": {
    "title": "Diatonic 3rds warmup surfacing guide tones (C major)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 0, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 0, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "scale" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 1, "fret": 1, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A", "role": "scale" }
      ]}
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (F→B→E 최소 이동 경로 찾기)**
메트로놈 끄고, 본론 라인의 **착지음 세 개만** 연결해 봐요. F(4번 3프렛) → B(3번 4프렛) → E(4번 2프렛). 손이 거의 안 움직이죠? 세 음이 한 줌 안에 있어요. 특히 **F→E는 같은 줄 한 프렛**이라는 걸 손끝으로 확인. 눈 감고 이 세 음만 순서대로 뚝딱 짚으면 통과.

**20~40분 · 실전 즉흥 (Dm7-G7-Cmaj7 백킹 / 72~76 BPM)**
백킹을 틀고, 본론 라인을 그대로 몇 번 연주해 몸에 붙여요. 익숙해지면 **연결음(중간 음)만 조금씩 바꾸되 착지음 F·B·E는 절대 안 바꾸기.** 예를 들어 1마디 중간을 다른 Dm7 음으로 채워도, 마디 끝→다음 마디 첫 박은 무조건 3도 착지. "골격은 F·B·E, 살은 자유"가 오늘의 즉흥 규칙이에요.

```json
{
  "id": "m2.w8.d2.guide_tone_line",
  "type": "tab",
  "meta": {
    "title": "ii-V-I guide tone line (Dm7 F -> G7 B -> Cmaj7 E)",
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
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 0, "duration": "quarter", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장)**
30초 녹음 후 재생. 체크 둘: ① 코드 바뀌는 순간에 3도가 **정확히 울렸나**, 반 박 늦지 않았나. ② 2마디 F가 3마디 E로 넘어갈 때 **반음이 부드럽게 미끄러졌나**, 아니면 뚝 끊겼나. 필요하면 재생 속도를 늦춰 그 이음매를 귀로 확대해 보세요.

**오늘의 완료 기준:** 본론 가이드톤 라인을 BPM 76에서 끊김 없이 3마디 완주. F→B→E 세 착지음을 눈 감고 연결. 백킹 위에서 "연결음은 바꾸되 착지 3도는 고정" 즉흥 4회 이상.

## ④ 팁 / 흔한 실수

- **착지음까지 바꿔버리기.** 즉흥이랍시고 F·B·E를 흔들면 라인이 무너져요. 오늘의 계약은 "살은 자유, 뼈(3도)는 고정"이에요. 뼈가 흔들리면 음악이 서질 못해요.
- **F→E 반음을 그냥 '뚝' 끊기.** 같은 줄 한 프렛이니 살짝 이어지듯, 손가락을 완전히 떼지 말고 무게만 옮겨 보세요. 반음 해결이 미끄러지듯 들리면 그게 프로 사운드예요.
- **B에서 손이 멈칫.** 3번 줄 4프렛 B는 약지로 미리 준비해 두세요. G7로 바뀌기 직전에 손가락을 그 위에 '얹어 두면' 코드 체인지 순간에 늦지 않아요.
- **워밍업을 대충 건너뛰기.** 3도 시퀀스는 그냥 예열이 아니라, 오늘 라인의 손 모양을 미리 깔아두는 밑작업이에요. 3도 간격이 손에 익어야 가이드톤 사이 연결음이 자연스러워져요.
