---
title: "루트 이동 — E에서 G로, 곡이 되는 그루브"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 루트 이동, E에서 G로

## ① 이론/설명

어제 **1마디 E 그루브**를 톤까지 고르게 다듬었어요. 오늘은 그 안정된 그루브를 <mark>곡처럼 움직이게</mark> 만들어요. 방법은 하나 — **루트를 옮기는** 거예요. 한 자리에만 머물던 그루브에 **E→G** 이동을 더하면, 반복이 갑자기 '진행'이 돼요.

슬랩 그루브에서 **루트를 옮긴다**는 건, 손모양 전체를 통째로 미끄러뜨리는 거예요. **E**는 4번현 개방을 썸으로, 옥타브는 2번현 2프렛을 팝했죠. **G**로 가면 그 손모양 그대로 **썸은 4번현 3프렛**, **팝은 2번현 5프렛**으로 올라가요. 도수 관계(**루트-옥타브**)는 똑같고 <mark>위치만 세 칸</mark> 미끄러진 거예요. 그래서 새 손모양을 외울 필요 없이, 익숙한 옥타브 폼을 그대로 옮기기만 하면 돼요.

오늘의 그루브는 **2마디**예요. **1마디는 E**, **2마디는 G** — 같은 썸-칙-팝-칙을 각 자리에서 한 마디씩 굴려요. 관건은 **이동의 타이밍**이에요. 1마디의 마지막 '칙'이 끝나는 순간, 왼손이 **미리 G 자리로** 미끄러져 있어야 2마디 첫 썸이 안 밀려요. **BPM 78**에서, 이동하는 순간 그루브가 <mark>끊기지 않는지</mark>에 집중해요. 여유가 생기면 2마디 G를 살짝 세게 쳐 **다이내믹**을 줘도 좋아요 — 곡에 기승전결이 생겨요.

**5현**이라면 음도 이동도 4현과 똑같아요. 저음 B는 엄지로 덮어 두고, 익숙해지면 G 마디를 더 묵직한 저음으로 시험해요. 오늘 이 **2마디**가 이어지면, 내 그루브가 드디어 곡의 꼴을 갖춰요.

## ② 시각 자료

오늘은 **G 손모양**을 새로 확인하고, **E→G 2마디 그루브**를 이어요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **G 손모양**. E 옥타브 폼을 <mark>그대로 옮긴</mark> 자리예요 — 아래 파랑이 **썸 루트 G**(4번현 3프렛), 위 파랑이 **팝 옥타브 G**(2번현 5프렛). '칙'은 그대로 3번현에서 내요.

```json
{
  "id": "m1.w4.d2.octave_shape_g_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (G) — thumb root + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "G" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 썸 루트 G(4번현 3프렛), 팝 옥타브 G(2번현 5프렛). E 폼을 세 칸 위로 옮긴 자리예요.

```json
{
  "id": "m1.w4.d2.octave_shape_g_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (G) — thumb root + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "G" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

이제 **E→G 2마디 그루브**를 이어요. **BPM 78**에서 <mark>1마디에서 2마디로 넘어가는 이음새</mark>가 매끄러운지 확인해요.

```json
{
  "id": "m1.w4.d2.root_move_groove_4",
  "type": "tab",
  "meta": { "title": "Root-move slap groove (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
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

▶ **BPM 78, 4현.** 1마디 E, 2마디 G. 1마디 끝에서 왼손을 미리 G 자리로 미끄러뜨려요.

```json
{
  "id": "m1.w4.d2.root_move_groove_5",
  "type": "tab",
  "meta": { "title": "Root-move slap groove (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
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

▶ **BPM 78, 5현.** 음과 이동은 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 E 그루브를 BPM 60으로 가볍게 돌려 손을 깨워요. 오늘은 그 뒤에 <mark>G로 미끄러질 준비</mark>를 손에 익혀요.

**10~20분 · 두뇌 훈련**
음 없이 E 자리와 G 자리를 아주 느리게 왕복하며 <mark>손모양이 그대로 옮겨지는지</mark> 확인해요.

**20~40분 · 실전**
E→G 2마디 그루브를 **BPM 78**에서 반복해요. 이동에서 밀리면 속도를 낮춰 이음새부터 맞춰요. 4현으로 익힌 뒤 5현으로도 같은 이동을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>E에서 G로 넘어갈 때 그루브가 끊기지 않는지</mark> 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** E→G 2마디 옥타브 그루브를 BPM 78에서 이동이 끊기지 않게 매끄럽게 반복할 수 있다.

## ④ 팁 / 흔한 실수

- **이동에서 밀려요.** 왼손이 늦게 움직여서예요. 1마디 마지막 '칙'에 손을 미리 G로 옮겨 두세요.
- **G 팝이 빗나가요.** 새 위치(2번현 5프렛)에 검지가 아직 익숙하지 않아요. G 손모양만 따로 반복해요.
- **E와 G 크기가 달라요.** 이동에 신경 쓰다 G가 약해져요. 두 마디의 세기를 같게 맞춰요.
- **저음 B 방심(5현).** 손이 위로 이동하면 B가 열리기 쉬워요. 엄지로 늘 B를 덮어 두세요.
