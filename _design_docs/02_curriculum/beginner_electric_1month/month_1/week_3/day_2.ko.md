---
title: "폼 이동 — 벽돌을 옆으로 밀기"
dayKey: "m1.w3.d2"
estMinutes: 30
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 벽돌을 옆으로 밀기

## ① 이론/설명

어제 벽돌 한 장을 만들었죠. 오늘의 마법은 이거예요 — 그 벽돌을 <mark>지판 위에서 옆으로 밀기만</mark> 하면 코드가 통째로 바뀌어요. 손가락 모양은 하나도 안 바꾸고, 폼을 통째로 슬라이드하는 거죠. 이게 파워코드가 록에서 그렇게 사랑받는 이유예요. 폼 하나만 외우면 코드 열두 개가 공짜로 딸려와요. 1주차·2주차엔 음을 하나하나 새로 찾았지만, 파워코드부턴 폼의 위치만 기억하면 돼요 — 훨씬 경제적이에요.

오늘부턴 개방현을 떠나 <mark>움직이는 폼</mark>을 써요. 6번 줄 루트 폼을 3프렛에 놓으면 G5, 5프렛에 놓으면 A5예요. 5번 줄 루트 폼을 3프렛에 놓으면 C5, 5프렛이면 D5고요. 루트가 놓인 프렛의 음 이름이 곧 코드 이름이에요. 그러니 프렛 위치만 알면 코드 이름은 저절로 따라와요.

이동의 핵심은 <mark>손 모양을 유지한 채 통째로 미는 것</mark>이에요. 손가락을 하나씩 떼서 새로 짚지 말고, 두 손가락을 한 덩어리로 붙인 채 슬라이드하세요. 옮기는 찰나엔 힘을 살짝 풀어 줄에서 살짝 뜨게 하면 훨씬 부드러워요. 옮기고 나서 두 손가락 사이 간격이 벌어지지 않았는지, 5도가 여전히 또렷한지 한 번씩 확인하면 완벽해요. 오늘 G5↔A5, C5↔D5 두 왕복만 깨끗해지면, 록 곡 절반은 이 두 왕복 위에서 굴러가요.

## ② 시각 자료

먼저 움직이는 폼 두 개를 봐요. 6번 줄 루트 <mark>G5</mark>와 5번 줄 루트 C5 — 어제 폼에서 개방이 프렛으로 바뀐 것뿐이에요.

```json
{
  "id": "m1.w3.d2.g5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "G5 power chord (movable 6th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "G" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ 6번 줄 3프렛 루트(파랑 R)와 5번 줄 5프렛 5도(파랑 5). 이 폼을 5프렛으로 밀면 그대로 A5예요.

```json
{
  "id": "m1.w3.d2.c5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "C5 power chord (movable 5th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "C" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ 루트가 5번 줄 3프렛으로 내려온 C5. 6번 줄은 X니 손날로 꼭 죽여요. 이 폼을 5프렛으로 밀면 D5.

이제 6번 줄 폼을 왕복시켜요. G5에서 A5로 밀었다가 다시 돌아와요.

```json
{
  "id": "m1.w3.d2.g5_a5_move",
  "type": "tab",
  "meta": { "title": "G5 to A5 — slide the 6th-string shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70. 한 코드에 두 박씩. 옮기는 순간 손 모양을 그대로 유지한 채 통째로 미세요.

이번엔 5번 줄 폼으로 C5↔D5 왕복. 내일 리프의 클라이밍이 바로 이 이동이에요.

```json
{
  "id": "m1.w3.d2.c5_d5_move",
  "type": "tab",
  "meta": { "title": "C5 to D5 — slide the 5th-string shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "C", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70. 6번 줄은 손날로 죽인 채. 두 프렛 사이를 미끄러지듯 오가며 두 음만 또렷이.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
BPM 60에서 어제 익힌 E5·A5 폼을 다시 잡았다 떼며 두 음만 울리는 감각을 되살려요.

**7~17분 · 오늘의 기술**
G5·C5 폼을 각각 잡고, 옆 프렛으로 <mark>통째로 밀어</mark> A5·D5를 만들어요. 옮긴 자리에서도 두 음이 또렷한지 확인해요.

**17~27분 · 적용**
예제(G5↔A5·C5↔D5 왕복)를 BPM 70에서 각각 4번 반복 → 멈칫 없이 되면 한 칸 올려요. 코드가 바뀌는 순간에 박이 밀리지 않게.

**27~30분 · 체크**
도달한 BPM을 적고, 원하면 30초 녹음해 이동할 때 잡음이 끼지 않는지 들어봐요.

**오늘의 완료 기준:** 두 파워코드(G5↔A5 또는 C5↔D5)를 폼을 유지한 채 밀며 잡음 없이 왕복할 수 있다.

## ④ 팁 / 흔한 실수

- **손가락 다시 짚기.** 옮길 때 손가락을 떼서 하나씩 새로 짚으면 늦어요. 두 손가락을 붙인 채 통째로 미세요.
- **이동 중 소리 남기기.** 옮기는 찰나에 힘을 살짝 풀어 줄에서 뜨게 하면 긁는 잡음이 줄어요.
- **코드 이름 헷갈림.** 루트가 놓인 프렛 = 코드 이름. 6번 줄 3프렛이면 G, 5프렛이면 A예요.
- **6번 줄 방심.** 5번 줄 루트 폼(C5·D5)에선 6번 줄이 울리기 쉬워요. 손날로 계속 덮어 두세요.
