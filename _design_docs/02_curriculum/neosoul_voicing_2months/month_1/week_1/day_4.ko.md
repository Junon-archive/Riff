---
title: "시그니처 뱀프 — Dm9 → G13"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 완성! Dm9 → G13 뱀프

## ① 이론/설명

드디어 1주차의 무대예요. 오늘은 두 그립을 하나의 **뱀프**로 이어 연주해요. <mark>이 Dm9 → G13 뱀프는 앞으로 두 달 내내 우리가 서게 될 무대예요.</mark> 뱀프란 짧은 코드 진행을 **계속 반복**하며 그 위에서 노래하고 솔로하는, 네오소울의 **심장** 같은 틀이에요. 오늘 이 **두 마디**를 손에 넣으면, 다음 주부터 그 위에 리듬과 장식을 얹어 갈 수 있어요. 어제 전환까지 다졌으니, 오늘은 그저 편하게 굴러가게만 하면 돼요.

연주는 아주 단순해요. **1마디 = Dm9, 2마디 = G13**, 한 마디에 한 코드씩이에요. **BPM 75**로 부드럽게, 온음표 하나처럼 길게 울려요. <mark>루트는 가볍게 두고, 9도와 13도가 만드는 색의 변화를 귀로 느껴 보세요.</mark> Dm9의 몽글한 9도에서 G13의 따뜻한 13도로, 색이 스르륵 바뀌는 그 순간이 이 뱀프의 하이라이트예요.

오늘은 속도 욕심을 내려놓으세요. <mark>완벽한 빠르기보다, 두 마디가 끊김 없이 동그랗게 굴러가는 그 느낌이 백 배 중요해요.</mark> 그럼 먼저 **Dm9** 그립부터 손에 얹고, 이어서 **G13**으로 넘어가 볼게요.

```json
{
  "id": "m1.w1.d4.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — x5355x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **1마디는 Dm9.** 5번 줄 5프렛 루트에 그립을 얹어요.

## ② 시각 자료

그리고 2마디는 **G13**이에요. 두 그립을 다시 한번 나란히 눈에 새겨 둘게요. <mark>두 손모양이 한 몸처럼 이어질 때 뱀프가 살아나요.</mark>

```json
{
  "id": "m1.w1.d4.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 3x345x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **2마디는 G13.** 6번 줄 3프렛 루트로 내려가되, 2번 줄 새끼손가락은 그대로예요.

이제 두 마디를 하나로 이은 **완성된 뱀프**예요. 이번 주 내내 손에 익혀 온 그 흐름이, 아래 두 마디에 다 담겨 있어요. <mark>이 두 마디가 이번 주의 결과물이에요.</mark>

```json
{
  "id": "m1.w1.d4.vamp_grips",
  "type": "tab",
  "meta": { "title": "Dm9 - G13 vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75, 부드럽게.** 1마디 **Dm9**(5번 줄 5프렛 루트), 2마디 **G13**(6번 줄 3프렛 루트). 루트는 가볍게, **9도·13도(노랑)**의 색을 귀로 느껴요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. 두 그립을 번갈아 잡으며 손을 데워요. <mark>어제의 전환 감각을 다시 불러와요.</mark>

**10~20분 · 두뇌 훈련 (뱀프 그림 그리기)**
소리 내지 않고 왼손만으로 Dm9 → G13을 천천히 오가요. **새끼손가락 앵커**를 유지하는지 눈으로 확인해요.

**20~40분 · 실전 뱀프 (BPM 75)**
아래 네 마디 뱀프를 **끊김 없이** 반복해요. <mark>두 마디가 동그랗게 이어지는지</mark>만 봐요.

```json
{
  "id": "m1.w1.d4.vamp_4bars",
  "type": "tab",
  "meta": { "title": "Dm9 - G13 vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Dm9 → G13을 두 번 돌아요. 처음부터 끝까지 한 호흡으로 굴러가게 해요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 체크해요. <mark>Dm9 → G13 뱀프가 처음부터 끝까지 매끄럽게 굴러가는가</mark>.

**오늘의 완료 기준:** 핀 고정 Dm9 → G13 뱀프를 BPM 75로 끊김 없이 반복 연주할 수 있다. (1주차 완성!)

## ④ 팁 / 흔한 실수

**뱀프**를 굴릴 때 자주 나오는 실수만 짚을게요.

```json
{
  "id": "m1.w1.d4.root_move",
  "type": "fretboard_diagram",
  "meta": { "title": "Root move — string 5 to string 6", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "label": "Dm9 R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 3, "label": "G13 R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **루트만 5번 줄 → 6번 줄로 옮겨요.** 두 코드의 뿌리가 어디 있는지 기억하면 뱀프가 흔들리지 않아요.

- **뱀프가 자꾸 끊겨요.** 코드 사이 새끼손가락 앵커를 유지하면 자연스럽게 이어져요.
- **속도가 오르면 지저분해져요.** BPM을 60으로 낮춰 깨끗함부터 되찾아요.
- **두 마디 길이가 안 맞아요.** 발로 4박을 세며 마디의 크기를 몸에 새겨요.
- **색이 안 들려요.** 9도·13도(2번 줄)가 또렷이 울려야 네오소울 색이 나요.
