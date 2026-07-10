---
title: "파워코드 입문 — 손가락 두 개로 만드는 벽돌"
dayKey: "m1.w3.d1"
estMinutes: 30
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — 손가락 두 개로 만드는 벽돌

## ① 이론/설명

2주차까지 단음 리프를 뗐으니, 이번 주엔 드디어 <mark>'록 소리'</mark>가 나요. 파워코드는 이름만 거창하지, 사실 <mark>손가락 두 개로 만드는 벽돌 한 장</mark>이에요. 루트 한 음과 그 위 5도 한 음, 딱 두 음만 겹쳐 울리면 그게 파워코드예요. 밝지도 어둡지도 않아서 어떤 곡에나 얹히는, 록의 심장 같은 소리죠. 코드라고 겁먹을 필요는 전혀 없어요.

오늘은 폼 두 가지를 익혀요. 하나는 **6번 줄에 루트**를 두는 폼, 하나는 5번 줄에 루트를 두는 폼이에요. 루트를 짚고, 한 줄 아래에서 두 프렛 위에 있는 5도를 같이 누르면 끝이에요. 오늘은 개방현으로 시작하니 손가락도 얼마 안 들어가요. 6번 줄 개방이 E5, 5번 줄 개방이 A5 — 벌써 파워코드 두 개가 손에 들어왔네요.

파워코드의 진짜 기술은 누르는 게 아니라 <mark>안 쓰는 줄을 죽이는 것</mark>이에요. 두 음만 또렷이 울리고 나머지 네 줄은 조용해야 하거든요. 짚는 손가락 살로 옆 줄을 슬쩍 덮고, 오른손 손날로 아래쪽 줄을 잠재우면 돼요. 왼손은 짚지 않는 손가락을 줄 위에 가볍게 눕혀 두고, 오른손은 파워코드 두 줄만 노려 치면 잡음이 확 줄어요. 처음엔 잡음이 섞여도 괜찮아요. 느린 템포에서 두 음만 남기는 감각만 챙기면, 〈You Really Got Me〉·〈Iron Man〉 같은 리프가 이 폼 하나로 손에 들어와요. 벽돌 하나가 놓이면 그다음 벽돌은 훨씬 쉽게 얹혀요.

## ② 시각 자료

오늘 익힐 폼 두 개예요. 먼저 <mark>6번 줄 루트</mark>의 E5, 그다음 5번 줄 루트의 A5. 손가락 모양은 똑같고, 짚는 줄만 한 칸 옮겨가요.

```json
{
  "id": "m1.w3.d1.e5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "E5 power chord (6th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ 파란 두 점(루트 R·5도 5)만 울리고, X 표시된 네 줄은 죽여요. 손끝을 세워 옆 줄을 살짝 덮어요.

```json
{
  "id": "m1.w3.d1.a5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "A5 power chord (5th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ 이번엔 루트가 5번 줄로 옮겨왔어요. 6번 줄까지 X — 오른손 손날로 6번 줄을 꼭 잠재워요.

폼을 봤으니 실제로 쳐볼게요. E5를 한 박에 하나씩, 네 번 또박또박.

```json
{
  "id": "m1.w3.d1.e5_quarters",
  "type": "tab",
  "meta": { "title": "E5 — four clean strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70. 한 박에 한 번씩, 두 음이 동시에 나는지 확인해요. 다운피킹으로.

이번엔 A5로 똑같이.

```json
{
  "id": "m1.w3.d1.a5_quarters",
  "type": "tab",
  "meta": { "title": "A5 — four clean strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70. 루트가 5번 줄로 내려왔어도 두 음만 또렷이. 6번 줄이 울리지 않는지 확인해요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
메트로놈 BPM 60에 맞춰 2주차 팜뮤트 chug를 6번 줄에 가볍게 반복해 손을 풀어요. 오른손 손날 위치부터 다시 잡아요.

**7~17분 · 오늘의 기술**
E5·A5 폼을 아주 느리게 잡았다 떼며, <mark>두 음만</mark> 또렷이 울리는지 확인해요. 나머지 네 줄이 조용한지 한 줄씩 점검해요.

**17~27분 · 적용**
예제(E5 4번 스트럼·A5 4번 스트럼)를 BPM 70에서 각각 4번 반복 → 잡음 없이 되면 한 칸 올려요. 두 음이 동시에 나는지에만 집중해요.

**27~30분 · 체크**
도달한 BPM을 적고, 원하면 30초 녹음해 잡음 줄이 없는지 들어봐요.

**오늘의 완료 기준:** 파워코드 하나(E5 또는 A5)를 잡음 없이 두 음만 또렷하게 울릴 수 있다.

## ④ 팁 / 흔한 실수

- **네 줄까지 소리 나기.** 안 쓰는 줄이 같이 울리면 파워코드가 부옇게 뭉개져요. 안 쓰는 줄은 반드시 죽여요.
- **손가락 눕혀 짚기.** 손끝을 세워 짚어야 소리도 또렷하고, 손가락 살로 옆 줄을 덮어 죽이기도 쉬워요.
- **너무 세게 누르기.** 파워코드도 소리 날 만큼만 눌러요. 꽉 쥐면 손만 빨리 지쳐요.
- **속도 욕심.** 오늘은 BPM 숫자보다 두 음의 깨끗함이 전부예요. 빠르기는 다음 날들이 챙겨줘요.
