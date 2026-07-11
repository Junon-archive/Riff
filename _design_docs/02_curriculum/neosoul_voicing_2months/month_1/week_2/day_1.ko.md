---
title: "9도의 색 — add9와 m9"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 9도의 색: add9와 m9

## ① 이론/설명

이번 주는 물들이기의 시작이에요. 지난주 손에 넣은 **Dm9 → G13** 뱀프, 그 위에 오늘부터 **텐션**이라는 색소를 한 방울씩 떨어뜨려요. 첫 색은 **9도**예요. <mark>9도 하나만 얹어도 밋밋하던 코드가 몽글하게 번져요.</mark> **add9**는 삼화음에 9도만 더한 것, **m9**는 7코드(**b7** 포함)에 9도를 더한 것 — 같은 9도라도 담는 그릇이 달라요.

D 마이너에서 **9도는 E**예요. **Dm(add9)**는 R·b3·**9**만 울리는 맑은 소리, 여기에 **b7(C)**을 더하면 곧바로 **Dm9**가 돼요. <mark>b7이 들어오는 순간 소리가 한층 깊어지고 재지해져요.</mark> 두 코드의 차이는 딱 **b7 하나**뿐이라는 걸 손과 귀로 기억해요.

오늘의 목표는 단순해요. <mark>**add9**와 **m9**의 9도 색을 귀로 구분하는 것.</mark> 속도는 필요 없어요. 두 코드를 천천히 번갈아 울리며, 9도가 만드는 몽글한 색과 b7이 더하는 깊이를 나눠 들어 봐요. 그럼 먼저 **Dm(add9)** 그립부터 손에 얹어 볼게요.

```json
{
  "id": "m1.w2.d1.dm_add9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm(add9) grip — no b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Dm(add9)** — R·b3·**9**만 울려요. **b7이 없는** 삼화음+9도예요.

## ② 시각 자료

이제 그 위에 **b7**을 더해 **Dm9**로 물들여요. <mark>손가락 하나(3번 줄 5프렛)를 더 얹었을 뿐인데 소리의 깊이가 확 달라져요.</mark> 9도(E)는 그대로 두고 b7만 채워 넣는 거예요.

```json
{
  "id": "m1.w2.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — add b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Dm9** = Dm(add9)에 **b7**(3번 줄 5프렛)만 더한 코드예요.

두 코드를 나란히 이어 들어 볼게요. <mark>1마디는 add9, 2마디는 m9 — 9도는 그대로 두고 b7만 오가는 소리예요.</mark>

```json
{
  "id": "m1.w2.d1.add9_vs_m9",
  "type": "tab",
  "meta": { "title": "Dm(add9) - Dm9", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디 add9, 2마디에 **b7**을 더해 m9. **9도(E)**는 두 마디 모두 살아 있어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. Dm(add9)와 Dm9를 번갈아 잡으며 손을 데워요. <mark>3번 줄 손가락 하나를 넣었다 뺐다 하는 감각을 몸에 익혀요.</mark>

**10~20분 · 두뇌 훈련 (9도 색 구분)**
소리를 내지 않고 왼손만으로 두 코드를 오가요. **b7(3번 줄)** 하나가 있고 없고의 차이를 눈으로 먼저 확인해요.

**20~40분 · 실전 색 드릴 (BPM 70)**
아래 네 마디를 반복하며 add9 → m9를 두 번 오가요. <mark>9도의 몽글한 색 위로 b7의 깊이가 번지는 순간</mark>을 귀로 좇아요.

```json
{
  "id": "m1.w2.d1.color_drill",
  "type": "tab",
  "meta": { "title": "add9 / m9 color drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** add9 → m9를 두 번 오가며 **9도 색**이 어떻게 짙어지는지 들어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. add9와 m9가 서로 다른 색으로 들리는지 확인해요.

**오늘의 완료 기준:** Dm(add9)와 Dm9를 번갈아 울리며 9도 색의 차이를 귀로 구분할 수 있다.

## ④ 팁 / 흔한 실수

**9도**를 다룰 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w2.d1.ninth_spot",
  "type": "fretboard_diagram",
  "meta": { "title": "The 9th (E) — string 2 fret 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ **9도(E)**는 2번 줄 5프렛. 루트에서 한 옥타브 위 한 음이에요.

- **9도가 묻혀요.** 2번 줄 5프렛이 또렷이 울려야 색이 나요. 다른 줄에 가려지지 않게 살짝 세워 잡아요.
- **add9인데 b7이 섞여요.** 3번 줄을 확실히 뮤트해야 순수한 add9 소리가 나요.
- **두 코드가 똑같이 들려요.** BPM을 55로 낮추고 한 코드씩 길게 울리며 귀를 열어요.
- **손이 아파요.** 새끼손가락(2번 줄)에 힘이 몰리면 손목을 살짝 낮춰 무게를 나눠요.
