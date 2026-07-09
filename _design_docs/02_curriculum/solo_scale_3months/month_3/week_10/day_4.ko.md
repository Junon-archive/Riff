---
title: "종합: A7–D7 블루스에서 코드마다 3도 타겟팅 + 3도 인터벌로 넥 잇기"
dayKey: "m3.w10.d4"
estMinutes: 50
i18nKey: "lesson.m3.w10.d4"
---

# Day 4 — 코드가 바뀌면 3도도 바뀐다: A7의 C#, D7의 F#

## ① 이론/설명

오늘 왜 이걸 하냐면요. 이번 주 내내 A7 한 코드 위에서 C#(장3도)에 착지하는 걸 연습했죠. 근데 진짜 블루스는 코드가 **움직여요.** 가장 기본이 **<mark>A7 → D7</mark>** 왕복이에요. 여기서 정체기 플레이어가 딱 막혀요. 코드가 D7으로 바뀌었는데도 계속 A 믹솔리디안 손버릇으로 C#만 노리는 거죠. 근데 C#은 D7 위에서는 **장7도**라 붕 떠요. M2에서 배운 그 원리 기억나죠? **<mark>코드가 바뀌면 타겟(3도)도 바뀐다.</mark>**

계산해 볼게요.
- **<mark>A7의 장3도 = C#</mark>** (A·**C#**·E·G)
- **<mark>D7의 장3도 = F#</mark>** (D·**F#**·A·C)

그러니까 A7 구간에선 C#으로, D7 구간으로 넘어가는 순간 **F#으로** 착지 지점을 바꿔야 해요. 이거 하나만 해도 "코드 따라 노래하는" 솔로가 됩니다. 좋은 소식: **A 믹솔리디안 스케일 안에 C#도 F#도 이미 다 들어 있어요**(A B C# D E F# G). 스케일을 바꿀 필요 없이, **<mark>착지음만</mark>** 코드 따라 바꾸면 돼요. A7이면 C#, D7이면 F#. 손은 그대로, 겨냥만 옮기는 거예요.

여기 숨은 보너스도 있어요. 우리 블루노트 **C(♭3)** 는 A7 위에선 삐딱한 블루노트지만, **<mark>D7 위에선 D7의 ♭7(C)</mark>** 이 돼요. 즉 A7 구간에서 "블루노트로 스치던 그 C"가, D7으로 넘어가면 갑자기 **정식 색채음(♭7)** 으로 신분이 바뀌어요. 같은 음, 다른 역할. 이런 걸 알고 치면 솔로가 훨씬 영리하게 들려요.

마지막으로 **3도 인터벌** 훈련도 넣어요. 4연음이 "네 음 덩어리"였다면, 3도 인터벌은 "한 음 건너뛰며 짝지어 올라가는" 패턴이에요(A-C#, B-D, C#-E …). 이게 손에 붙으면 스케일이 밋밋한 계단이 아니라 **하모니(화음) 느낌**으로 들려서, 즉흥이 단번에 세련돼져요. 오늘은 이 3도 인터벌로 넥을 훑으며 두 폼을 잇습니다.

오늘 목표: A7↔D7 백킹 위에서 코드마다 3도(C#/F#)에 착지하고, 3도 인터벌 패턴으로 스케일을 화음처럼 노래하기. 이번 주 총정리예요.

## ② 시각 자료

첫째, **<mark>도미넌트 3도 타겟 지도</mark>**예요. A7의 3도 C#(초록)과 D7의 3도 F#(초록)을 두 폼에 걸쳐 뿌렸어요. 코드가 바뀔 때 "가장 가까운 C# 또는 F#"이 어디 있는지 눈으로 미리 찍어두세요.

```json
{
  "id": "m3.w10.d4.dominant_thirds_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Dominant 3rd targets: A7-3(C#) & D7-3(F#) across positions",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 4, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 3, "fret": 11, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true }
    ]
  }
}
```

둘째, 오늘의 메인, **<mark>A7 → D7 타겟 릭</mark>**이에요. 1마디는 A7 위에서 ♭7 G의 긴장 → 블루노트 C 반음 벤딩 → **C#(A7의 3도)** 착지. 2마디는 D7으로 넘어가며, 그 **C가 이제 D7의 ♭7**로 색을 내다가 → **F#(D7의 3도)** 로 착지해요. 같은 스케일, 착지만 C#에서 F#으로 옮기는 게 핵심이에요.

```json
{
  "id": "m3.w10.d4.a7_d7_target_lick",
  "type": "tab",
  "meta": {
    "title": "A7->D7 change: target A7-3(C#) then D7-3(F#), b7 & blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "role": "target", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D7-R(D)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "D7-b7(C)", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "9(E)", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true },
        { "string": 4, "fret": 4, "duration": "half", "technique": "vibrato", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

셋째, **<mark>3도 인터벌 런</mark>**이에요. A 믹솔리디안을 3도씩 짝지어 상행하며 Position 1을 훑고, 마지막은 장3도 C#에 착지해요. 스케일이 화음처럼 들리는 게 3도 인터벌의 맛이에요. 두 마디, 전부 8분음표.

```json
{
  "id": "m3.w10.d4.thirds_interval_run",
  "type": "tab",
  "meta": {
    "title": "A Mixolydian diatonic 3rds (ascending, land on major 3rd C#)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 90) — 3도 인터벌 런**
위 3도 인터벌 런을 90에서 상행. 처음엔 80으로. <mark>두 음씩 짝지어 "묶음"으로 들리게 하는 게</mark> 포인트예요. 익으면 Position 2(7~11프렛)에서도 같은 3도 패턴을 즉흥으로 만들어 보세요. C#·G 지날 때 색 의식은 계속.

```json
{
  "id": "m3.w10.d4.thirds_interval_run",
  "type": "tab",
  "meta": {
    "title": "A Mixolydian diatonic 3rds (ascending, land on major 3rd C#)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (C#↔F# 스위칭)**
메트로놈 끄고, 첫 번째 지도로 게임. "A7!" 하면 가장 가까운 **C#**(3번 6프렛 또는 1번 9프렛) 짚기, "D7!" 하면 가장 가까운 **F#**(4번 4프렛, 2번 7프렛, 3번 11프렛) 짚기. 스스로 "A7-D7-A7-D7" 외치며 손을 번갈아 옮겨요. 2초 안에 <mark>올바른 3도로 손이 가면</mark> 통과. 코드 전환 반사신경을 만드는 시간이에요.

```json
{
  "id": "m3.w10.d4.dominant_thirds_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Dominant 3rd targets: A7-3(C#) & D7-3(F#) across positions",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 4, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 3, "fret": 11, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true }
    ]
  }
}
```

**20~40분 · 실전 즉흥 (A7–D7 블루스 백킹 / 80~90 BPM)**
"A7 D7 blues backing track slow" 하나 틀어요(느린 12마디 블루스도 좋아요). 미션: **<mark>코드가 바뀔 때마다 그 코드의 3도에 착지</mark> — A7이면 C#, D7이면 F#.** 나머지는 A 믹솔리디안으로 자유롭게. 여유 있으면 오늘의 A7→D7 릭을 통째로 넣어 보고, 두 폼을 슬라이드로 오가며 위·아래를 다 쓰세요. 블루노트 C가 D7에서 ♭7로 변신하는 것도 귀로 즐겨요.

```json
{
  "id": "m3.w10.d4.a7_d7_target_lick",
  "type": "tab",
  "meta": {
    "title": "A7->D7 change: target A7-3(C#) then D7-3(F#), b7 & blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "role": "target", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D7-R(D)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "D7-b7(C)", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "9(E)", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true },
        { "string": 4, "fret": 4, "duration": "half", "technique": "vibrato", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장·이번 주 총정리)**
아무 녹음 앱으로 한 코러스(12마디 또는 30~40초) 녹음. 체크 세 가지: (1) <mark>코드 바뀔 때 3도(C#→F#)를 제때 짚었는지</mark>, (2) 두 폼을 다 썼는지 아니면 한 상자에 갇혔는지, (3) 문장 끝이 어정쩡하게 붕 뜨지 않고 타겟음에 잘 앉았는지. 이번 주 첫날 녹음과 비교해 보면 성장이 들릴 거예요.

**오늘의 완료 기준:** 3도 인터벌 런 90 BPM 통과. C#↔F# 스위칭 2초 내 반응. A7–D7 백킹에서 코드마다 3도 착지 8회 이상, 두 폼 모두 사용.

## ④ 팁 / 흔한 실수

- **D7에서도 C#만 노리기.** 이번 주 최대 함정이에요. 코드가 D7으로 바뀌면 C#은 긴장이 안 풀린 장7도예요. 반드시 **F#으로** 겨냥을 옮기세요. "코드 바뀜 = 3도도 바뀜"을 몸에 새겨요.
- **착지 타이밍이 늦음.** 코드가 이미 D7으로 바뀌었는데 한 박 뒤에야 F#을 짚으면 살짝 어긋나 들려요. 코드 전환 지점을 미리 예상하고, 바뀌는 **그 박에** 3도가 울리게. 어려우면 BPM 70으로 낮춰 타이밍부터.
- **한 폼에 갇히기.** 긴장하면 편한 Position 1로만 도망가요. 오늘은 총정리니까 일부러 두 폼을 다 쓰세요. 위에서 시작해 슬라이드로 내려오는 프레이즈를 한 번 이상 만드세요.
- **음을 다 채우려는 욕심.** 3도 착지가 살려면 그 앞에 **약간의 여백**이 필요해요. 쉬지 않고 계속 채우면 3도가 묻혀요. 다음 주(W11)에 배울 '여백·프레이징'의 예고편이라 생각하고, 오늘도 타겟음 앞에서 살짝 숨을 주세요.
