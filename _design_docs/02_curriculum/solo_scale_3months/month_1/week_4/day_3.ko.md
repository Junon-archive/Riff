---
title: "블루스 프레이징 — 3도 인터벌 + ♭5 경과음 + 벤딩/비브라토"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 스케일을 '프레이즈'로: ♭5를 녹여 넣기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지난 이틀 동안 재료를 다 모았어요. ♭5 위치(day1), 벤딩(day1), 비브라토(day2). 근데 재료가 아무리 좋아도 요리를 안 하면 냉장고 속 식재료일 뿐이에요. 오늘은 이 재료들을 하나의 **프레이즈(음악적 한 문장)** 로 요리해요. 이게 즉흥의 진짜 시작이에요.

블루스 프레이징의 뼈대는 지난 3주 내내 훈련한 **3도 인터벌**이에요. 옆 음으로 밋밋하게 붙어 가지 말고 폴짝폴짝 뛰라고 했죠? 거기에 오늘 ♭5를 **경과음으로** 끼워 넣어요. 대표 공식이 있어요. 하행할 때 **5도(E) → ♭5(E♭) → 4도(D)** 로 반음씩 미끄러져 내려오는 거예요. 이 세 음이 붙어 내려오면 그 순간 소리가 확 눅진해져요. 블루스 리크의 8할이 이 조각에서 나와요. 핵심은 역시 ♭5에 **머물지 않는 것.** 스쳐 지나가야 경과음이에요.

그리고 프레이즈엔 **문장부호**가 있어야 해요. 벤딩은 문장 중간의 **느낌표(!)**, 비브라토는 문장 끝의 **마침표(.)** 라고 생각하세요. 3도로 이야기를 전개하다가, 중간에 벤딩으로 한 번 감정을 확 밀어 올리고(!), ♭3이나 근음에 착지해 비브라토로 문장을 닫아요(.). 이 "전개 → 느낌표 → 마침표" 흐름이 있으면 똑같은 5~6음이라도 그게 **음악**이 돼요.

오늘 목표는 딱 하나예요. 아래 3마디 프레이즈를 **입으로 흥얼거릴 수 있을 만큼** 몸에 새기는 것. 손가락 운동이 아니라 "노래"로 외우는 게 핵심이에요. 손이 외운 건 즉흥에서 안 나오고, 귀가 외운 것만 나와요.

## ② 시각 자료

프레이즈의 재료 지도예요. 3도로 뛸 발판(스케일 음)과 경과음 ♭5(빨강), 착지점 ♭3(빨강)을 한 판에.

```json
{
  "id": "m1.w4.d3.blues_phrasing_map",
  "type": "scale_shape",
  "meta": {
    "title": "A blues Box 1 — phrasing material (3rds + b5 passing)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

오늘의 본체, 블루스 프레이즈 3마디예요. 1마디 = **5→♭5→4 반음 하행 경과음** + ♭3 착지. 2마디 = **3도 인터벌 상행**으로 전개. 3마디 = **반음 벤딩으로 ♭5 느낌표** 찍고 ♭3에 착지, 비브라토 마침표.

```json
{
  "id": "m1.w4.d3.blues_phrase_full",
  "type": "tab",
  "meta": {
    "title": "Blues phrase — 3rd intervals + b5 passing + bend/vibrato punctuation",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "highlight": true, "role": "target" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 80)**
A 블루스 스케일 1번 블록을 3도 인터벌 상·하행으로 한 바퀴씩. 지난주보다 한 단계 빠른 80이에요. ♭5는 3도 점프 사이사이 경과음으로만 살짝. 뭉치면 75로.

**10~20분 · 두뇌 훈련 (프레이즈를 '노래'로 외우기)**
메트로놈 끄고, 위 3마디 프레이즈를 **아주 천천히** 손에 익혀요. 특히 1마디 "5-♭5-4" 반음 하행이 매끄러운지, 3마디 반음 벤딩(4→♭5)이 정확한 높이인지 집중. 그다음이 진짜 중요한데 — 기타를 내려놓고 **입으로 그 프레이즈를 흥얼거려 보세요.** 흥얼거려지면 귀가 외운 거예요. 그게 오늘의 통과 기준이에요.

**20~40분 · 실전 즉흥 (Am7 원코드 백킹 / 75~80 BPM)**
백킹을 틀고, 처음엔 위 프레이즈를 그대로 반복. 익숙해지면 **3마디 중 한 마디씩만 바꿔** 보세요. 1마디의 하행 경과음은 유지하되 2마디 3도 전개를 다른 줄에서, 또는 3마디 착지를 ♭3 대신 근음으로. 규칙은 딱 둘: **① ♭5는 경과음(스쳐 지나감) ② 프레이즈 끝은 벤딩 느낌표 또는 비브라토 마침표로 닫기.**

**40~50분 · 녹음/피드백 (권장)**
프레이즈를 백킹 위에서 30초 녹음. 체크: ① "5-♭5-4" 하행이 뭉치지 않고 세 알갱이로 들리나. ② 반음 벤딩이 ♭5 높이에 정확히 닿나(어제 배운 귀 대조). ③ 프레이즈가 "문장"처럼 시작-전개-마침이 있나, 아니면 그냥 음 나열인가. 하나라도 걸리면 그 부분만 따로 10번.

**오늘의 완료 기준:** 3마디 프레이즈를 BPM 80에서 끊김 없이. 그 프레이즈를 입으로 흥얼거리기. 백킹 위에서 한 마디 이상 변형해 프레이즈 만들기.

## ④ 팁 / 흔한 실수

- **♭5에서 멈칫.** "5-♭5-4" 하행에서 ♭5를 무의식적으로 조금 더 오래 짚으면 경과음이 아니라 착지음처럼 들려서 어색해져요. 세 음은 **똑같은 길이로 또르르** 흘러야 해요.
- **손으로만 외우고 귀로 안 외움.** 손가락 근육으로만 외운 프레이즈는 즉흥에서 절대 안 튀어나와요. 반드시 흥얼거릴 수 있을 때까지. 못 흥얼거리면 아직 내 것이 아니에요.
- **느낌표·마침표 없이 밋밋하게 나열.** 벤딩(!)도 비브라토(.)도 없이 그냥 음을 쭉 늘어놓으면 3주 전이랑 똑같아요. 프레이즈마다 최소 하나의 표현(벤딩 또는 비브라토)을 반드시 넣으세요.
- **변형 욕심.** 20~40분에 처음부터 다 바꾸려다 프레이즈가 무너져요. 한 번에 한 마디씩만. 뼈대는 두고 살만 바꾸는 게 프레이징 훈련의 정석이에요.
