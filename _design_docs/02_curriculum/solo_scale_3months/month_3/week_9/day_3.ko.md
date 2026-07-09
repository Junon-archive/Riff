---
title: "4연음 시퀀스 + 코드 3도 착지: Am7의 C, D7의 F#"
dayKey: "m3.w9.d3"
estMinutes: 50
i18nKey: "lesson.m3.w9.d3"
---

# Day 3 — 도리안의 마법: D7의 3도(F#)가 곧 도리안의 색채음이다

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지금까지 Am7 한 코드 위에서만 놀았잖아요. 근데 도리안이 진짜 빛나는 순간은 코드가 **Am7 → D7 → Am7** 로 움직일 때예요. 오늘 이 진행을 소개하면서, 여러분 소름 돋을 사실 하나를 알려드릴게요.

먼저 4연음 시퀀스부터. 어제 3도로 훑었으니 오늘은 **4연음(4-note)** 이에요. 스케일을 네 음씩 묶어 한 칸씩 밀어요.

- A-B-C-D / B-C-D-E / **C-D-E-F#** / **D-E-F#-G** …

3도가 '출렁이는 도약'이면, 4연음은 '굴러가는 물결'이에요. 손가락이 촘촘하게 구르면서 스케일 전체를 훑는데, 세 번째·네 번째 묶음부터 **F#(장6도)** 이 자연스럽게 물결 위로 올라와요. 오늘 워밍업은 이걸로 손을 굴려요.

이제 진짜 오늘의 핵심. 백킹이 **Am7 → D7** 로 바뀔 때 각 코드의 3도를 볼까요?

- **Am7의 3도 = C** (A-C-E-G 중에 C = b3, 마이너의 3도)
- **D7의 3도 = F#** (D-F#-A-C 중에 F#)

보이세요? **D7의 3도가 바로 F#** 이에요. 그리고 F#은 우리가 이번 주 내내 애지중지한 **A 도리안의 장6도(색채음)** 잖아요. 즉, 코드가 D7로 바뀌는 순간 여러분이 그냥 **F#에 착지**하기만 하면 — 그게 D7의 3도 타겟팅이면서 **동시에** 도리안의 색채가 폭발하는 순간이에요. 두 마리 토끼가 한 음에서 만나요. 이게 도리안이 마이너 진행에서 그렇게 '세련되게' 들리는 비밀이에요.

정리하면 오늘의 문법은 이거예요. **Am7 구간에선 C(b3)에 착지, D7 구간에선 F#(6=D7의 3도)에 착지.** 코드가 바뀌면 착지음도 바뀐다 — 지난주 가이드톤에서 배운 그 감각을, 이번엔 모드 색채랑 결합하는 거예요.

## ② 시각 자료

첫 번째, **A 도리안 4연음 시퀀스**(2마디, 8분음표)예요. 6번 줄부터 굴러 올라가요. 세 번째·네 번째 묶음에서 **F#(6, 색채)** 이 물결 위로 떠올라요(강조).

```json
{
  "id": "m3.w9.d3.four_note_sequence_dorian",
  "type": "tab",
  "meta": {
    "title": "A Dorian 4-note sequence (F# rises in groups 3-4)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
      ]}
    ]
  }
}
```

두 번째, **Am7 vs D7 착지 3도 지도**예요. 강조 두 종류: **C(Am7의 3도)** 는 초록, **F#(D7의 3도 = 도리안 색채)** 는 노랑. F#이 어떻게 두 역할을 겸하는지 눈으로 확인하세요. 근음 A와 D도 참고로 표시했어요.

```json
{
  "id": "m3.w9.d3.am7_d7_target_thirds",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Target 3rds: Am7-b3(C) and D7-3(F#) which is the Dorian color",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 5, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 6, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

세 번째, **코드 바뀜 = 착지 바뀜**을 몸에 새기는 4마디 라인이에요. Am7 두 마디는 **C(b3)** 에, D7 두 마디는 **F#(6)** 에 착지해요. 착지음마다 비브라토로 노래시키세요.

```json
{
  "id": "m3.w9.d3.chord_change_targeting",
  "type": "tab",
  "meta": {
    "title": "Am7 lands on C(b3), D7 lands on F#(6) - target the changes",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 80) — 4연음 시퀀스**
메트로놈 80에 맞춰 첫 번째 4연음 시퀀스를 굴려요. 손가락이 촘촘하게 구르는 느낌을 유지하면서, F#(5번 9프렛)이 물결 위로 떠오를 때 살짝 또렷하게. 왕복(올라갔다 같은 패턴으로 내려오기)까지 하면 손이 확 풀려요.

```json
{
  "id": "m3.w9.d3.four_note_sequence_dorian",
  "type": "tab",
  "meta": {
    "title": "A Dorian 4-note sequence (F# rises in groups 3-4)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
      ]}
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (착지 3도 매핑)**
두 번째 지도를 보며 **Am7의 C** 세 자리와 **D7의 F#** 두 자리를 번갈아 짚어요. 입으로 "Am7이면 C, D7이면 F#" 하고 부르면서. 마지막엔 눈 감고 "지금 D7! → 가장 가까운 F#" 을 3초 안에 짚으면 통과. **코드 이름 → 착지음**이 반사가 되게 만드는 거예요.

```json
{
  "id": "m3.w9.d3.am7_d7_target_thirds",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Target 3rds: Am7-b3(C) and D7-3(F#) which is the Dorian color",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 5, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 6, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

**20~40분 · 실전 즉흥 (Am7-D7 vamp / 76~80 BPM)**
"Am7 D7 vamp backing track" 을 틀어요(두 마디씩 왕복). 미션 딱 하나: **코드가 바뀔 때마다 그 코드의 3도에 착지.** Am7 구간 끝엔 C, D7 구간 끝엔 F#. 세 번째 4마디 라인을 그대로 얹어 시작해도 좋아요. 사이는 자유롭게 채우되, **착지음만은 반드시** 코드에 맞추기.

```json
{
  "id": "m3.w9.d3.chord_change_targeting",
  "type": "tab",
  "meta": {
    "title": "Am7 lands on C(b3), D7 lands on F#(6) - target the changes",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장)**
마지막 잼 30초를 녹음. 다시 들으며 둘 체크: **① D7로 바뀌는 순간 F#에 착지했나 / ② 그때 소리가 '반짝' 밝아졌나.** 재생 속도를 0.75배로 늦춰, 코드 체인지와 착지 타이밍이 겹치는지 점검하세요.

**오늘의 완료 기준:** 4연음 시퀀스를 80에서 왕복. "코드 이름 → 착지음(C/F#)"을 3초 안에 짚기. Am7-D7 백킹에서 코드별 3도 착지 6회 이상 성공.

## ④ 팁 / 흔한 실수

- **코드가 바뀌어도 착지음을 안 바꾸기.** 제일 흔해요. Am7이든 D7이든 계속 C에만 내려앉으면, D7 구간이 밋밋해져요. **D7 = F#** 을 꼭 기억하세요. 이 전환이 오늘의 전부예요.
- **F#을 '무섭게' 느끼기.** F#은 Am7 위에선 색채음(장6도), D7 위에선 아예 코드톤(3도)이에요. 즉 D7 구간에선 F#이 **가장 안전한 음**이에요. 겁내지 말고 D7 오면 F#에 푹 기대세요.
- **4연음을 너무 빠르게.** 4연음은 촘촘해서 80만 돼도 손이 엉켜요. 엉키면 70으로 낮춰 **한 음도 안 뭉개고** 굴리는 게 먼저. 뭉갠 4연음은 아무 소용 없어요.
- **착지만 신경 쓰다 사이가 뚝뚝.** 착지음은 목적지고, 가는 길(사이 음들)도 매끄러워야 해요. 착지 직전 한두 음은 착지음 바로 옆(순차)으로 이어 자연스럽게 미끄러져 들어가세요.
