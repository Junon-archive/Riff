---
title: "결합 8마디 즉흥: 장6도 색채 + 코드 3도 착지"
dayKey: "m3.w9.d4"
estMinutes: 50
i18nKey: "lesson.m3.w9.d4"
---

# Day 4 — 다 합치기: Am7–D7 위에서 F# 색채와 3도 착지를 엮은 8마디 솔로

## ① 이론/설명

오늘 왜 이걸 하냐면요. 3일 동안 부품을 다 만들었잖아요. F#(장6도) 색채(Day 1), 3도 인터벌·색채 라인(Day 2), 4연음·코드별 3도 착지(Day 3). 오늘은 이 부품들을 **<mark>하나의 솔로</mark>**로 조립해요. 이번 주의 졸업 작품이에요.

무대는 **<mark>Am7–D7 vamp</mark>**, 두 마디씩 총 8마디예요.

- 1~2마디: Am7 → 3~4마디: D7 → 5~6마디: Am7 → 7~8마디: D7

오늘 솔로가 지켜야 할 문법은 딱 두 줄이에요.

- **<mark>Am7 구간은 C(b3)에 착지.</mark>** 마이너의 3도, 이 진행의 '집'이에요.
- **<mark>D7 구간은 F#(6)에 착지.</mark>** D7의 3도이면서 동시에 도리안의 색채음. 여기서 소리가 밝게 터져요.

그리고 오늘 새로 얹는 감각 하나. **<mark>여백과 비브라토.</mark>** 여덟 마디를 음으로 꽉 채우려 하지 마세요. 착지음에 도착하면 **잠깐 쉬고(rest)**, 착지음은 **비브라토로 노래**시키세요. 스케일을 쉬지 않고 나열하면 그건 '연습'이지 '솔로'가 아니에요. 착지 → 여백 → 다음 프레이즈, 이 호흡이 있어야 음악이 돼요. (여백·프레이징은 다음 W11에서 본격적으로 파지만, 오늘 미리 한 스푼 얹어요.)

아래 8마디는 '정답'이 아니라 **<mark>본보기</mark>**예요. 통째로 외워 치면서 "아, F# 착지가 이렇게 밝구나, 여백이 이렇게 숨통을 트는구나"를 몸으로 느낀 뒤, 여러분만의 라인으로 바꿔 가세요. 그게 이번 주의 진짜 목표예요.

## ② 시각 자료

첫 번째, **<mark>착지 지도</mark>**예요. 이 8마디에서 여러분이 조준할 두 목표만 강조했어요. **C(Am7의 3도)** 와 **F#(D7의 3도 = 도리안 색채)**. 근음 A는 방향 잡이로 표시. 딱 이 두 색만 머리에 넣고 시작하세요.

```json
{
  "id": "m3.w9.d4.landing_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Landing map - C for Am7, F#(color) for D7",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

두 번째, **<mark>8마디 즉흥 본보기</mark>**예요. Am7 구간은 C에, D7 구간은 F#에 착지하고, 착지음엔 비브라토, 3마디·7마디 머리엔 여백(쉼표)을 뒀어요. 8마디 끝은 도리안의 정체성 음 **F#** 에 길게 내려앉으며 마무리해요.

```json
{
  "id": "m3.w9.d4.eight_bar_dorian_solo",
  "type": "tab",
  "meta": {
    "title": "8-bar A Dorian solo over Am7-D7 (F# color + 3rd targeting)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 5, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 6, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 85) — 착지음 두 개 예열**
메트로놈 85에 맞춰 착지 지도의 두 목표만 번갈아 짚어요. C(3번 5프렛) ↔ F#(2번 7프렛), 각 음에 비브라토 얹어 4분음표로. 입으로 "Am7 C, D7 F샵" 부르면서. 오늘 손이 기억할 건 <mark>결국 이 두 음</mark>이에요.

```json
{
  "id": "m3.w9.d4.landing_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Landing map - C for Am7, F#(color) for D7",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (8마디 본보기 손에 얹기)**
아직 백킹 없이, 8마디 본보기를 마디별로 천천히. 막히는 마디만 5번씩 반복. 특히 2·4·6·8마디의 **착지음(비브라토)** 과 3·7마디 머리의 **여백(쉼표)** 을 정확히. 여백은 '실수로 멈춘 것'처럼 어색하면 안 되고, **<mark>의도된 숨</mark>**처럼 당당하게 비우세요.

```json
{
  "id": "m3.w9.d4.eight_bar_dorian_solo",
  "type": "tab",
  "meta": {
    "title": "8-bar A Dorian solo over Am7-D7 (F# color + 3rd targeting)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 5, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 6, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

**20~40분 · 실전 즉흥 (Am7-D7 vamp / 80~85 BPM)**
"Am7 D7 vamp backing track" 을 틀어요. 먼저 8마디 본보기를 백킹 위에 **두 바퀴** 그대로. 그다음이 진짜예요: 본보기를 버리고 **직접 8마디를 즉흥**하되, 규칙 두 개만 지켜요 — **<mark>① Am7 끝엔 C, D7 끝엔 F# 착지</mark> / ② 각 프레이즈 끝에 한 박 이상 여백.** 사이는 3도든 4연음이든 자유. 매 바퀴 조금씩 다르게 시도해 보세요.

**40~50분 · 녹음/피드백 (권장)**
직접 즉흥한 8마디 중 가장 잘 나온 걸 녹음. 다시 들으며 셋 체크: **① 코드별 착지(C/F#)가 맞았나 / <mark>② D7의 F#에서 소리가 밝게 터졌나</mark> / ③ 여백이 숨통을 트였나(아니면 쉼 없이 꽉 찼나).** 재생 속도를 0.75배로 늦춰 착지 타이밍과 비브라토 주기를 점검하세요. 여기서 찾은 개선점 하나가, 다음 주(W10 믹솔리디안)로 가기 전 여러분의 숙제예요.

**오늘의 완료 기준:** 8마디 본보기를 백킹 위에서 완주. 이어서 **스스로 즉흥한 8마디**에서 코드별 3도 착지(C/F#)를 지키고, 프레이즈마다 최소 한 번 여백을 넣어 녹음까지 완료.

## ④ 팁 / 흔한 실수

- **D7 착지를 놓치고 계속 마이너로.** 8마디를 통으로 Am7처럼 쳐버리면 도리안의 하이라이트인 D7 구간이 죽어요. D7이 오면 **의식적으로 F#** 으로 방향을 트세요. 이 색 전환이 오늘 솔로의 심장이에요.
- **여백이 무서워서 꽉 채우기.** 초보 티가 제일 나는 게 '쉬지 못하는 솔로'예요. 3·7마디의 쉼표를 지우지 마세요. 비어 있어야 다음 프레이즈가 살아나요. 여백은 실력이지 게으름이 아니에요.
- **착지음을 뚝 끊기.** C와 F# 착지에 비브라토가 없으면 '도착'이 아니라 '멈춤'처럼 들려요. 손목으로 일정하게, 넓게 흔들어 착지음을 노래시키세요. 이 한 음이 노래하면 8마디 전체가 살아요.
- **본보기를 '정답'으로 붙잡기.** 본보기는 발판이에요. 통째로만 반복하면 즉흥 실력이 안 늘어요. 절반은 본보기, 절반은 여러분 라인으로 — 그 비율을 매 바퀴 여러분 쪽으로 옮겨 가세요. 그게 이번 3개월의 방향이에요.
- **템포 과욕.** 85가 벅차면 78로 낮추세요. 착지 정확도와 여백의 여유가 속도보다 먼저예요. 느려도 코드마다 정확히 착지하는 솔로가, 빠르게 뭉갠 나열보다 백 배 음악적이에요.
