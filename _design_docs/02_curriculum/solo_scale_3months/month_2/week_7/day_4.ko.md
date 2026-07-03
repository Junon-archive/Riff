---
title: "코드톤 전용 백킹 잼 + 녹음 분석 — 3도 착지 정확도 점검"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — 이번 주의 결산: 코드톤만으로 노래하고, 녹음으로 채점하기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 이번 주 내내 지도(Day 1~2)를 그리고 연결(Day 3)까지 배웠으니, 이제 그걸 **실제 연주로 증명**할 차례예요. 오늘은 새 개념을 거의 안 배워요. 대신 Am–C 백킹 위에서 **코드톤만으로** 진짜 솔로 비슷한 걸 만들고, 그걸 녹음해서 **스스로 채점**합니다. 유료 레슨에서 강사가 옆에 못 붙어 있으니, 오늘은 녹음이 당신의 강사예요.

채점 기준은 딱 하나. **코드가 바뀔 때마다 그 코드의 3도에 제대로 착지했는가.** Am 구간에선 C, C 구간에선 E. 이번 주의 모든 게 이 한 줄로 수렴해요. 화려함, 속도, 음 개수 — 다 필요 없어요. 코드톤 세 음(그리고 3도 착지)만으로도 놀랄 만큼 "음악처럼" 들린다는 걸 오늘 귀로 확인하게 될 거예요.

한 가지 팁을 미리 줄게요. 좋은 솔로는 음을 많이 치는 게 아니라 **잘 앉는** 거예요. 코드 하나에 음 두세 개, 마지막은 3도에서 비브라토로 살짝 울려주기. 이 절제가 오히려 프로처럼 들려요. 다음 달(모드·프레이징)로 가는 다리이기도 하고요.

## ② 시각 자료

오늘의 "잼 홈베이스" — 5~8프렛 한 박스 안에 Am과 C의 코드톤이 다 모여 있어요. 빨간 강조는 두 코드의 3도 착지 타겟(**C**와 **E**). 이 좁은 구역만으로 곡 전체를 소화할 수 있어요.

```json
{
  "id": "m2.w7.d4.jam_home_base_box",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am/C jam home base (5th-position box), 3rd targets C & E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 72
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "C:5(G)", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "label": "C:5(G)", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true }
    ]
  }
}
```

이번 주 총정리 샘플 리프예요. Am | C | Am | C 4마디, 각 코드마다 그 코드의 3도(C 또는 E)에 착지해요. 홈베이스 박스 안에서만 움직이니 손이 편해요.

```json
{
  "id": "m2.w7.d4.chord_tone_jam_lick",
  "type": "tab",
  "meta": {
    "title": "Am|C|Am|C chord-tone jam - land the 3rd every change",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 72
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 3, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 72)**
메트로놈 72에 위 4마디 샘플 리프를 반복. 각 마디 마지막 음(3도)을 살짝 더 길게, 더 또렷하게. 코드 바뀌는 마디 1→2, 3→4에서 3도로 갈아타는 타이밍을 다시 한 번 몸에 붙여요.

**10~20분 · 두뇌 훈련 (홈베이스 박스에서 3도 즉시 짚기)**
메트로놈 끄고, 홈베이스 박스(5~8프렛) 안에서 "Am의 3도!" 하면 C(3번5·6번8·1번8), "C의 3도!" 하면 E(5번7·2번5)를 즉시 짚어요. 눈 감고 랜덤으로 번갈아 부르며 테스트. 3초 안에 맞는 3도로 손이 가면 통과.

**20~40분 · 실전 즉흥 (Am–C 백킹 / 72 BPM)**
"Am C vamp backing track"을 틀고, **코드톤(A·C·E / C·E·G)만** 써서 자유 솔로. 스케일 경과음은 최소화. 규칙: 코드 하나당 음 2~4개, 마지막은 **반드시 그 코드의 3도.** 홈베이스 박스에서 시작해, 여유되면 Day 3에서 찾은 다른 포지션 3도로도 착지해보세요.

**40~50분 · 녹음/자가 채점 (오늘은 강력 권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 잼을 1~2분 녹음하고, 아래 3항목으로 스스로 채점해요.
1. **3도 착지율** — 코드 바뀔 때마다 3도(C/E)에 앉았나? 몇 번 중 몇 번 성공?
2. **타이밍** — 갈아타기가 코드 변화에 딱 맞았나, 늦었나?
3. **끝음 처리** — 3도 착지음을 비브라토로 살려 울렸나, 뚝 끊었나?
헷갈리면 재생 속도를 늦춰 착지음을 지판에서 다시 짚어 확인해요. 못한 항목 하나를 다음 주 메모로.

**오늘의 완료 기준:** Am–C 백킹에서 코드톤만으로 1분 이상 끊김 없이 솔로, 녹음 재생 시 코드 변화의 대부분에서 3도 착지가 귀로 확인됨.

## ④ 팁 / 흔한 실수

- **음을 너무 많이 치기.** 오늘의 미덕은 절제예요. 코드마다 두세 음, 마지막은 3도. 빈칸을 두려워 말아요. 다음 달 프레이징의 씨앗이에요.
- **녹음 안 듣고 넘기기.** 연주할 땐 다 잘한 것 같아도 녹음은 정직해요. 어긋난 착지, 늦은 갈아타기가 다 들려요. 듣는 게 오늘 연습의 절반이에요.
- **3도를 밋밋하게 끊기.** 착지음(C/E)은 이번 주의 결승선이에요. 비브라토로 살짝 흔들어 울려주면 같은 음도 훨씬 "노래"처럼 들려요.
- **박스 밖으로 나갔다 길 잃기.** 홈베이스(5~8프렛)를 기지로 삼되, 벗어날 땐 반드시 다음 3도를 미리 눈으로 찍어두고 움직여요. 지도 없이 넥을 헤매면 착지가 흐트러져요.
