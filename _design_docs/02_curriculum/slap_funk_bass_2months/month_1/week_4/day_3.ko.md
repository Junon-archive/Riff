---
title: "리허설 — 멈추지 않는 풀 런스루"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 리허설, 멈추지 않는 풀 런스루

## ① 이론/설명

어제 **E→G 2마디 그루브**로 내 그루브가 곡의 꼴을 갖췄어요. 오늘은 그 곡을 <mark>멈추지 않고 반복</mark>하는 **리허설**이에요. 내일 녹음을 위한 마지막 담금질 — 목표는 새 기술이 아니라 **끊김 없는 흐름**이에요. 완벽한 연주보다, 처음부터 끝까지 멈춤 없이 이어지는 한 판을 만드는 게 오늘의 전부예요.

리허설의 핵심은 딱 하나, **틀려도 멈추지 않는** 거예요. 우리는 연습할 때 실수하면 반사적으로 손을 멈추고 그 자리를 다시 치는데, 녹음이나 무대에선 그 멈춤이 곡 전체를 무너뜨려요. 그래서 오늘은 규칙을 바꿔요 — <mark>실수는 그냥 지나가고</mark>, 흐름을 지켜요. 한 음 틀려도 박자만 놓치지 않으면 듣는 사람은 거의 몰라요. **박자를 지키는 게 정확한 음보다 먼저**예요.

방법은 **여러 번 이어 도는 루프**예요. **E→G 2마디**를 한 덩어리로 보고, 끝나면 쉬지 말고 곧바로 다시 1마디 E로 돌아와요. **BPM 80** — 이번 주 목표 속도예요. 4번, 8번 연속으로 돌려 보고, 도는 동안 <mark>어디서 흔들리는지</mark>만 기억해 뒀다가 나중에 그 자리만 따로 손봐요. 리허설 중엔 고치지 말고, 끝까지 흐르는 것만 생각해요. 이 '멈추지 않는 감각'이 내일 녹음의 성패를 가르는 진짜 열쇠예요.

**5현**이라면 흐름도 이동도 4현과 똑같아요. 저음 B는 엄지로 덮어 두고, 익숙해지면 같은 런스루를 더 묵직한 저음으로도 돌려요. 오늘 **멈추지 않는 한 판**을 완성하면, 내일은 그저 녹음 버튼만 누르면 돼요.

## ② 시각 자료

오늘은 **E→G 이동 맵**을 한눈에 익히고, **풀 런스루**를 멈추지 않고 돌려요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **이동 맵**. 아래쪽 파랑 두 개가 **E 자리**(썸 루트·팝 옥타브), 위쪽 파랑 두 개가 **G 자리**예요. 손이 <mark>세 칸을 오가는 길</mark>을 눈에 새겨 둬요.

```json
{
  "id": "m1.w4.d3.move_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E→G move map — thumb roots + pop octaves — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래가 E 자리, 위가 G 자리. 두 옥타브 폼 사이를 세 칸 미끄러져 오가요.

```json
{
  "id": "m1.w4.d3.move_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E→G move map — thumb roots + pop octaves — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 자리와 이동은 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

이제 **풀 런스루**. **BPM 80**에서 E→G 2마디를 <mark>멈추지 말고</mark> 계속 이어 돌려요. 틀려도 그냥 지나가요.

```json
{
  "id": "m1.w4.d3.full_run_4",
  "type": "tab",
  "meta": { "title": "Full run-through (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 2마디를 한 덩어리로, 끝나면 쉬지 말고 다시 1마디 E로 돌아와요.

```json
{
  "id": "m1.w4.d3.full_run_5",
  "type": "tab",
  "meta": { "title": "Full run-through (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 흐름과 이동은 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
E 그루브와 G 그루브를 각각 BPM 60으로 가볍게 돌려 손을 깨워요. 오늘은 <mark>둘을 끊김 없이 잇는 것</mark>이 주제예요.

**10~20분 · 두뇌 훈련**
이동 맵을 보며 E↔G를 아주 느리게 왕복해요. <mark>흔들리는 자리</mark>가 어디인지만 기억해 둬요.

**20~40분 · 실전**
풀 런스루를 **BPM 80**에서 4번, 8번 연속으로 돌려요. 틀려도 멈추지 말고 흐름을 지켜요. 4현으로 익힌 뒤 5현으로도 같은 흐름을 확인해요.

**40~50분 · 녹음/피드백**
멈추지 않은 한 판을 30초 녹음해 <mark>흐름이 처음부터 끝까지 이어졌는지</mark> 들어봐요. 흔들린 자리만 따로 적어둬요.

**오늘의 완료 기준:** E→G 2마디 그루브를 BPM 80에서 멈추지 않고 여러 번 연속으로 이어 돌릴 수 있다.

## ④ 팁 / 흔한 실수

- **틀리면 멈춰요.** 반사적으로 손이 서요. 오늘만은 틀린 음을 버리고 다음 박으로 그냥 넘어가요.
- **루프 사이가 벌어져요.** 2마디 끝에서 숨을 돌리다 박자가 새요. 끝과 시작을 한 박도 벌리지 말고 붙여요.
- **80에서 급해져요.** 목표 속도에 손이 앞서가요. 흔들리면 D2의 78로 잠깐 내려와요.
- **저음 B 방심(5현).** 반복이 길어질수록 B가 새기 쉬워요. 엄지로 늘 B를 덮어 두세요.
