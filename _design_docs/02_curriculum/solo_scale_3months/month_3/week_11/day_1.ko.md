---
title: "블루스 백킹 위에서 믹솔리디안 스위칭 + 끈적한 레이백 프레이징"
dayKey: "m3.w11.d1"
estMinutes: 50
i18nKey: "lesson.m3.w11.d1"
---

# Day 1 — 블루스: 3도에 착지하되, 끈적하게 '늘어지며' 노래하기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지난 두 주(W9 도리안, W10 믹솔리디안) 동안 "모드로 색을 칠하는 법"은 배웠잖아요. 근데 진짜 실전은 백킹이 **장르마다 다르게** 굴러온다는 거예요. 이번 주는 하루에 한 장르씩 백킹을 갈아 끼우면서, 코드가 바뀌는 순간 **실시간으로 스케일을 갈아타는(모드 스위칭)** 근육을 만듭니다. 첫날은 우리 홈그라운드, **블루스**예요.

블루스 진행은 A 도미넌트 계열이에요. **A7 → D7 → E7** (I-IV-V). 도미넌트/블루스 백킹을 만나면 판단은 거의 자동이에요 — **믹솔리디안 + 블루노트**. 그래서 오늘의 베이스캠프는 **A 믹솔리디안(A B C# D E F# G)**, 여기에 블루노트 C(♭3)를 살짝 얹어요.

핵심은 코드가 바뀔 때 그 코드의 **3도에 착지**하는 거예요. 블루스에선 이렇게 갈아탑니다.

- **A7일 때 → C#(장3도)** 를 노려요. 여기에 블루노트 C(♭3)를 반음 아래에서 슬쩍 밀어 붙이면 그 유명한 "찐한" 블루스 색이 나와요.
- **D7으로 바뀌면 → F#(장3도)** 로 착지. A7의 C#에서 D7의 F#로 넘어가는 순간이 오늘의 스위칭 포인트예요.
- **E7이면 → G#(장3도)**.

그런데 오늘의 진짜 주제는 "맞는 음"이 아니라 **"그 음을 어떻게 노래하냐"** 예요. 블루스의 정체성은 **끈적함(layback)** 이거든요.

### 🎙️ 여백·프레이징 미니레슨 — 블루스 편: 레이백 & 긴 여운

모드 스위칭이 "맞는 음 고르기"라면, 이번 주엔 그 위에 **"음 나열을 음악으로 바꾸는"** 표현 레이어를 얹어요. 오늘 블루스에서 챙길 4가지.

- **쉼표(여백):** 블루스는 쉬지 않고 치면 죽어요. 3도를 딱 하나 던지고 **한 박 쉬세요.** 그 침묵이 다음 음의 무게를 만들어요. 오늘 타브엔 `rest`가 일부러 많아요.
- **레이백(늦게 들어가기):** 박자 머리에 칼같이 붙이지 말고, 살짝 **뒤로 늘어지게** 들어가요. 클릭보다 반 박 늦게 착지하면 그 순간 "블루스맨" 소리가 나요.
- **긴 여운:** 3도에 착지하면 짧게 끊지 말고 **비브라토로 길게 흔들며** 늘어뜨려요. 음 하나를 노래처럼 끝까지 살려주세요.
- **모티프 & 콜앤리스폰스:** "C→C#(♭3→3)" 이 두 음짜리 짧은 동기를 하나 던지고, 한 박 쉰 뒤 살짝 변형해서 되받아요. 혼자서 묻고 답하는 '대화'를 만드는 거예요.

정리하면 오늘은 **A7·D7의 3도(C#·F#)에 착지하되, 여백과 레이백과 긴 비브라토로 끈적하게 노래하는** 날이에요.

## ② 시각 자료

첫 번째, 블루스 백킹용 **타겟 노트 지도**예요. 5프렛 근처 한 자리에서 A7·D7·E7의 3도가 다 손에 잡혀요. 빨간 강조가 착지할 3도, 그 옆 C는 블루노트(♭3)예요. **3번 줄 5·6프렛(C→C#)** 이 오늘의 핵심 두 음이에요.

```json
{
  "id": "m3.w11.d1.blues_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Blues target map A7 -> D7 -> E7 (A Mixolydian, 3rds + blue note)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (blues I-IV-V)",
    "scale": "A Mixolydian + b3 blue note",
    "tempoBpm": 63
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "A7-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3(C blue)", "highlight": true, "role": "blue_note" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D7-3(F#)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 6, "finger": 2, "label": "E7-3(G#)", "highlight": true, "role": "target" }
    ]
  }
}
```

두 번째, 오늘의 **레이백 블루스 프레이즈**예요. 여백(`rest`)이 잔뜩 들어가 있죠? 1마디는 A7 위에서 **한 박 쉬고 → 블루노트 C를 반음 밀어 C#에 붙였다가 → C#에 비브라토로 길게 늘어뜨려요.** 2마디는 D7으로 스위칭 — **F#에 반음표로 길게 착지**했다가 한 박 통째로 비우고 근음 D로 마무리해요. 쉼표가 음악의 절반이라는 걸 데이터로 보여드릴게요.

```json
{
  "id": "m3.w11.d1.blues_layback_phrase",
  "type": "tab",
  "meta": {
    "title": "Blues layback phrase (A7 C# / D7 F#) with breathing space",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (blues)",
    "tempoBpm": 63
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3>3(C>C#)", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "eighth", "rest": true, "label": "breath" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "A7 R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "D7-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "D7 R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 63) — 4연음 시퀀스로 손 풀기**
느린 블루스 템포 63에 맞춰 A 믹솔리디안을 **4연음 시퀀스**(A-B-C#-D / B-C#-D-E …)로 한 바퀴. 상하행 통암기 말고, 네 음 묶음으로 굴려요. 단, 오늘 워밍업의 규칙 하나 — **각 묶음 끝에서 반 박씩 쉬며 레이백 감각을 미리 심기.** 손보다 귀가 여유로워야 블루스가 나와요.

**10~20분 · 두뇌 훈련 — 코드별 3도·블루노트 매핑**
메트로놈 끄고, 타겟 지도에서 **A7→C#(3번 6프렛), D7→F#(2번 7프렛), E7→G#(4번 6프렛)** 세 개만 눈으로 찍고 손으로 짚어요. 그다음 블루노트 C(3번 5프렛)에서 C#로 반음 밀어 붙이는 동작을 10번. "이 코드엔 이 음"을 입으로 부르면서 하면 각인 속도가 2배예요.

**20~40분 · 실전 즉흥 (A 블루스 백킹 / 60~63 BPM) — 레이백 미션**
아무 앱·영상에서 "slow blues in A backing track" 하나 틀어요. 미션은 딱 둘. ① 코드가 A7→D7→E7으로 바뀔 때마다 그 3도(C#→F#→G#)에 착지. ② **모든 착지 음을 클릭보다 살짝 늦게(레이백) 들어가서 비브라토로 길게 늘어뜨리기.** 음을 많이 치려 하지 마세요. 한 프레이즈 던지고 **한 박 쉬는** 여백을 반드시 넣어요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 잼 30초만 녹음. 다시 들으며 딱 두 가지 — ① 코드 바뀔 때 3도에 실제로 착지했나. ② **쉼표가 들리나?** 쉼 없이 꽉 채웠다면 그게 오늘 고칠 점이에요. 필요하면 재생 속도를 늦춰 레이백 타이밍과 여백 배치를 확대해서 확인하세요.

**오늘의 완료 기준:** A7·D7·E7의 3도를 눈 감고 짚기. 백킹 위에서 3도 착지 6회 이상 + 각 프레이즈 사이에 **의도적 쉼표 최소 4번** 넣기.

## ④ 팁 / 흔한 실수

- **쉬지 않고 꽉 채우기.** 오늘 1등 실수예요. 블루스는 여백이 절반이에요. 3도 하나 던지고 **손을 멈추는 용기**를 연습하세요. 침묵이 다음 음을 살려요.
- **블루노트 C에 눌러앉기.** C(♭3)는 목적지가 아니라 C#(3)로 가는 **경과·꾸밈음**이에요. 반음 밀어서 곧장 C#에 붙이세요. 거기 머물면 그냥 틀린 음처럼 들려요.
- **박자 머리에 칼같이 붙이기.** 블루스는 살짝 늦게(레이백) 들어갈 때 끈적해져요. 정확히 맞추려는 강박을 잠깐 내려놓고 반 박 늘어져 보세요.
- **착지 음을 짧게 끊기.** 3도에 닿았으면 비브라토로 **끝까지 노래**하세요. 끝음 처리가 블루스의 얼굴이에요.
