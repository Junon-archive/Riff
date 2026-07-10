---
title: "리듬에 표정 넣기 — 쉼표와 당김음"
dayKey: "m1.w4.d1"
estMinutes: 30
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 리듬에 표정을 넣는 법

## ① 이론/설명

지난주에 파워코드 벽돌을 쌓았죠. 그런데 같은 코드를 <mark>또박또박 네 번</mark>만 치면 어딘가 밋밋해요. 오늘은 그 리프에 표정을 넣어요. 비결은 더 많이 치는 게 아니라, 오히려 <mark>가끔 쉬는 것</mark>이에요. 쉼표가 만든 빈칸이 소리에 숨을 불어넣고, 박을 살짝 당겨 치면 리프가 앞으로 튀어 나가는 느낌이 나거든요. 4주 전엔 개방현 하나 울리기도 벅찼는데, 이제 리듬을 디자인하고 있어요.

먼저 쉼표예요. 악보의 쉼표는 '치지 말라'는 신호가 아니라 '여기서 숨 쉬라'는 신호예요. 소리와 소리 사이에 빈칸이 있어야 다음 타격이 더 세게 들려요. 오른손은 쉬는 자리에서 손날이나 손가락으로 줄을 살짝 덮어 소리를 딱 끊어 주면 돼요. 빈칸 하나가 오히려 다음 소리를 더 또렷하게 세워 줘요. 꽉 찬 리프보다 숨 쉬는 리프가 훨씬 멋있게 들려요.

다음은 당김음이에요. 보통은 박의 정박에 치지만, 한 번씩 박과 박 사이(업비트)에 미리 쳐 두면 리듬이 <mark>앞으로 밀리는 긴장감</mark>이 생겨요. 여기에 옥타브를 살짝 얹으면 같은 리프도 목소리가 두툼해져요. 오늘은 이 세 가지 — 쉼표, 당김음, 옥타브 — 를 한 방울씩 떨어뜨려 어제의 리프를 살아 있게 만들어요. 표정은 음의 개수가 아니라 소리와 침묵의 배치에서 나와요. 그러니 서두르지 말고, 한 칸씩 자리를 정확히 지켜 봐요.

## ② 시각 자료

먼저 쉼표가 만드는 <mark>빈칸</mark>을 느껴봐요. E5를 두 박 치고 한 박 쉬기를 반복해요.

```json
{
  "id": "m1.w4.d1.rest_drill",
  "type": "tab",
  "meta": { "title": "Rest drill — breathe the E5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 80. 두 박 치고 한 박 쉬어요. 쉬는 칸에서 손날로 줄을 덮어 소리를 딱 끊어요.

이번엔 옥타브예요. 루트 위에 한 옥타브 높은 같은 음(8)을 얹으면 리프 목소리가 두툼해져요.

```json
{
  "id": "m1.w4.d1.octave_voicing",
  "type": "tab",
  "meta": { "title": "Octave voicing — G and A", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 5, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "8" } ] }
    ]}
  ]}
}
```

▶ BPM 80. 루트와 한 옥타브 위 음(8)이 동시에. 사이의 5번 줄은 손가락으로 살짝 덮어 죽여요.

이제 셋을 한 리프에 담아요. 쉼표로 숨 쉬고, 업비트를 당겨 치며, 마지막 초록 G5에 착지해요.

```json
{
  "id": "m1.w4.d1.rhythm_riff",
  "type": "tab",
  "meta": { "title": "Rhythm riff — rests and syncopation (E5 to G5)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 90. 쉼표로 숨 쉬고 업비트를 당겨 치며, 마지막 초록 G5(3프렛)에 착지해요. 4번 반복.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
BPM 70에서 지난주 파워코드 폼(E5·G5)을 잡았다 떼며 두 음이 또렷한지 손을 풀어요.

**7~17분 · 오늘의 기술**
쉼표 드릴과 옥타브를 아주 느리게 반복해요. <mark>쉬는 자리</mark>에서 소리가 깔끔하게 끊기는지, 옥타브 두 음이 동시에 나는지 확인해요.

**17~27분 · 적용**
리듬 리프를 BPM 80에서 4번 반복 → 흔들림 없이 되면 목표 BPM 90으로 한 칸 올려요. 쉼표에서 확실히 쉬고, 업비트를 살짝 당겨 치는 데만 집중해요.

**27~30분 · 체크**
도달한 BPM을 적고, 30초 녹음해 쉼표가 또렷이 들리는지, 리프에 표정이 생겼는지 들어봐요.

**오늘의 완료 기준:** 쉼표와 당김음을 넣은 파워코드 리프를 처음부터 끝까지 흔들림 없이, 목표 BPM 90에서 칠 수 있다.

## ④ 팁 / 흔한 실수

- **쉼표를 소리로 채우기.** 쉬어야 할 칸까지 울리면 빈칸이 사라져 밋밋해져요. 쉬는 칸에서 손으로 줄을 확실히 덮어요.
- **당김음이 박 밀림으로 번짐.** 업비트를 당겨 치는 건 좋지만, 그다음 정박까지 밀리면 곤란해요. 메트로놈에 발끝을 붙여 두세요.
- **옥타브 사이 줄 울림.** 루트와 옥타브 사이 5번 줄이 같이 울리면 지저분해요. 짚는 손가락 살로 살짝 덮어 죽여요.
- **속도 욕심.** 90은 목표일 뿐이에요. 80에서 쉼표가 또렷한 게 90에서 뭉개지는 것보다 훨씬 멋져요.
