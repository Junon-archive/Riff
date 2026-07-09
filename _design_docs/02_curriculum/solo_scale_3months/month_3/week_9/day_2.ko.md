---
title: "3도 인터벌로 도리안 훑기 + F# 색채 라인"
dayKey: "m3.w9.d2"
estMinutes: 50
i18nKey: "lesson.m3.w9.d2"
---

# Day 2 — 스케일을 '음악'처럼: 3도 인터벌로 A Dorian 훑고 F#으로 색칠하기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 A 도리안 한 포지션이랑 F#(장6도)을 손에 얹었잖아요. 근데 스케일을 A-B-C-D-E-F#-G 순서로 위아래로만 치면요, 아무리 F#이 있어도 그냥 '연습곡'처럼 들려요. 음악이 안 돼요. 그래서 오늘부터 **<mark>3도 인터벌</mark>**로 훑어요.

3도 인터벌이 뭐냐면요. 스케일을 한 음씩 오르는 대신 **<mark>한 음 건너뛰며</mark>** 짝을 짓는 거예요. A에서 하나 건너 C, B에서 하나 건너 D, C에서 하나 건너 E… 이렇게요.

- A–C, B–D, C–E, **D–F#**, E–G, **F#–A**, G–B …

이렇게 치면 두 가지가 한 번에 좋아져요. 첫째, 소리가 밋밋한 '도레미'가 아니라 **<mark>선율처럼</mark>** 들려요. 둘째, 지판 위에서 음들이 어떻게 짝지어 있는지 손이 저절로 외워져서, 나중에 즉흥할 때 "다음 음 어디지"를 안 헤매요. 실제로 잘 치는 사람들 솔로 뜯어보면 3도 도약이 진짜 많아요. 계단(순차)만 오르면 지루하니까요.

그리고 오늘의 포인트. 위 목록에서 **D–F#** 과 **F#–A** 를 보세요. F#이 두 번이나 짝의 주인공으로 나와요. 3도로 훑으면 F#이 자연스럽게, 근데 도드라지게 지나가요. 어제는 F#을 '멈춰서' 들려줬다면, 오늘은 F#을 **<mark>흐름 속에서</mark>** 색칠하는 연습이에요.

마지막으로, 3도로 쭉 훑다가 어디서 멈추느냐도 중요해요. 오늘 시퀀스는 **<mark>C(b3)</mark>** 에서 착지하게 짜뒀어요. C는 Am7의 3도거든요. 화려하게 F#으로 색칠하며 흐르다가, 마지막엔 코드의 3도에 딱 내려앉기 — 이게 이번 주 내내 반복할 문법이에요.

## ② 시각 자료

첫 번째, **<mark>A 도리안 3도 인터벌 시퀀스</mark>**(2마디, 8분음표)예요. 3·4번 줄에서 시작해 1번 줄까지 3도씩 짝지어 올라가요. 중간에 **F#(6, 색채)** 이 두 번 지나가고(강조), 마지막은 **C(b3, Am7의 3도)** 에 착지해요(강조).

```json
{
  "id": "m3.w9.d2.third_interval_dorian",
  "type": "tab",
  "meta": {
    "title": "3rd-interval sequence in A Dorian (F# color, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 78
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

두 번째, **<mark>F# 색채 라인</mark>**이에요. Am7 위에서 위쪽부터 흘러내려요. R(A) → b7(G) → **F#(6, 색채)** 을 비브라토로 길게 노래시킨 뒤 → 5(E) → 4(D) → 마지막 **C(b3, Am7의 3도)** 에 착지. F#을 '멈춰서 자랑'하고, 3도로 '해결'하는 오늘의 요약이에요.

```json
{
  "id": "m3.w9.d2.f_sharp_color_line",
  "type": "tab",
  "meta": {
    "title": "A Dorian color line - sing the natural 6th (F#), resolve to b3",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 78
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 78) — 3도 인터벌 시퀀스**
메트로놈 78에 맞춰 첫 번째 3도 시퀀스를 8분음표로 왕복해요. 올라갔으면 같은 방식으로 내려오기(3도 짝을 유지한 채 역방향). F#(2번 7프렛)이 나올 때마다 살짝 힘줘서 또렷하게. 손가락이 아니라 **귀**로 <mark>"3도 도약의 출렁임"을 느끼는 게</mark> 목표예요.

**10~20분 · 두뇌 훈련 (F# 짝 매핑)**
메트로놈 끄고, 포지션 안에서 **<mark>F#으로 끝나는 3도 짝</mark>**만 골라 짚어요. D–F#(3번 7프렛 → 2번 7프렛), 그리고 **F#–A**(2번 7프렛 → 2번 10프렛). 이 두 짝을 눈 감고도 잡히게 반복. F#이 앞뒤 어떤 음과 짝지어 다니는지 손이 외우면, 즉흥에서 F#을 '조준'할 수 있어요.

**20~40분 · 실전 즉흥 (Am7 vamp / 74~78 BPM)**
Am7 vamp 백킹을 틀어요. 미션: **<mark>3도 도약을 최소 한 번 넣은 짧은 프레이즈</mark>**를 만들고, 그 프레이즈 안에 **F#을 반드시 한 번** 통과시킨 뒤 **<mark>C(b3)에 착지</mark>**하기. 두 번째 색채 라인을 그대로 얹어 시작해도 좋아요. 순차(도레미)로만 흐르지 않기, 이게 오늘의 규칙이에요.

**40~50분 · 녹음/피드백 (권장)**
마지막 잼 30초를 아무 녹음 앱으로 녹음. 다시 들으며 둘만 체크: **① 3도 도약이 들리나(밋밋한 계단이 아니라 출렁이나) / <mark>② F#이 흐름 속에서 '반짝'하고 지나갔나</mark>.** 필요하면 재생 속도를 0.75배로 늦춰 F# 타이밍을 점검하세요.

**오늘의 완료 기준:** 3도 시퀀스를 78에서 왕복. F#으로 끝나는 3도 짝 두 개를 눈 감고 짚기. Am7 위에서 "3도 도약 + F# 통과 + C 착지" 프레이즈 3회 이상 성공.

## ④ 팁 / 흔한 실수

- **3도 시퀀스를 손가락 운동으로만 하기.** 3도는 '음악적 도약'이라 귀로 들려야 의미가 있어요. 기계처럼 프렛만 밟으면 내일 즉흥에서 못 써먹어요. 매 짝마다 "출렁" 하고 도약이 들리는지 귀를 열어두세요.
- **F#을 스치듯 지나가기.** 3도로 흐르다 보면 F#이 너무 빨리 지나가 버려요. 오늘 색채 라인처럼 가끔은 F#에서 **멈춰 비브라토**를 얹어 '나 여기 있다'를 들려주세요.
- **착지음을 아무 데나.** 3도로 화려하게 흐르다가 끝음을 애매한 음(4도 D나 b7 G)에 두면 붕 떠요. 이번 주는 끝음을 **C(b3, Am7의 3도)** 또는 **A(루트)** 로. 착지가 정확해야 앞의 화려함이 살아요.
- **양손 싱크 흐트러짐.** 3도 도약은 줄을 건너뛰니까 피킹이 헛나가기 쉬워요. 78이 벅차면 70으로 낮춰서 **정확히** 먼저. 속도는 정확도가 잡힌 다음이에요.
