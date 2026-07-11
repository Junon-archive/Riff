---
title: "레이백 — 박자 뒤에 눕는 여유와 다이내믹"
dayKey: "m3.w11.d3"
estMinutes: 50
i18nKey: "lesson.m3.w11.d3"
---

# Day 3 — 박자 뒤에 살짝 눕는 여유

## ① 이론/설명

슬라이드도, 벤딩도, 비브라토도 이제 손에 익었어요. 오늘은 도구가 아니라 **여유**를 배워요 — 바로 **레이백**이에요. 레이백은 박자를 정확히 맞추는 대신, 아주 살짝 뒤에 눕듯이 늦게 치는 프레이징이에요. <mark>박자 뒤에 살짝 눕는다고 상상해봐요 — 서두르지 않고 한 박자 여유를 두면, 릭에 어른의 느긋함이 생겨요.</mark> 초조하게 앞서 나가는 대신, 반 박자 뒤에서 편안하게 노래하는 거예요.

레이백은 박자를 '틀리는' 게 아니에요. 백킹의 박자는 정확히 흘러가고, 여러분의 리드만 **살짝 뒤에서** 따라붙는 거예요. 그래서 <mark>속으로는 박자를 또렷하게 세고 있어야, 그 위에서 여유롭게 늦출 수 있어요.</mark> 오늘은 근음 A를 길게 **비브라토**로 늘어뜨리며, 서두르지 않고 뒤에 눕는 감각을 익혀요. **긴 음**을 두려워하지 말고, 그 여백이 릭을 더 크게 들리게 한다는 걸 느껴봐요.

레이백과 짝을 이루는 게 **다이내믹**이에요. 모든 음을 같은 세기로 치면 밋밋하지만, 어떤 음은 여리게, 어떤 음은 세게 치면 릭이 살아나요. <mark>중요한 음은 크게, 지나가는 음은 작게 — 이 강약의 물결이 프레이징에 표정을 더해요.</mark> 오늘은 근음 착지를 특히 세고 여유 있게, 나머지는 부드럽게 흘려요. **BPM 70**으로, 뒤에 눕는 여유와 강약을 함께 느끼며 연습해요. 빠르게 치는 것보다 여유 있게 치는 게 오늘의 진짜 목표예요. 한 음의 여백이 얼마나 크게 들리는지 직접 느껴봐요. 급할수록 오히려 천천히 가봐요.

```json
{
  "id": "m3.w11.d3.laidback_map",
  "type": "scale_shape",
  "meta": { "title": "Box 1 home for laid-back phrasing", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ 익숙한 박스1이에요. 오늘은 새 음이 아니라 **근음 A를 여유 있게 늘어뜨리는 것**이 핵심이에요.

## ② 시각 자료

레이백에서 가장 중요한 음은 **쉬어 가는 음**, 바로 근음 A예요. 이 음을 길게 늘이며 뒤에 눕는 게 오늘의 핵심이에요. **초록 근음 A**를 중심으로 b3·5도가 곁에 있어요. <mark>화려하게 많이 치는 게 아니라, 한 음을 여유 있게 늘이는 게 성숙한 프레이징이에요.</mark>

```json
{
  "id": "m3.w11.d3.rest_note",
  "type": "scale_shape",
  "meta": { "title": "The resting note to lie on", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **초록 근음 A**가 오늘 여유 있게 늘어뜨릴 '쉼표 같은' 음이에요. 여기에 눕듯이 앉아요.

<mark>많이 치는 손보다, 한 음을 여유 있게 늘일 줄 아는 손이 더 어른스러워요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 근음 A를 길게 늘이며 **비브라토**로 흔들어요. 서두르지 않고, 긴 음의 여백을 느끼는 게 오늘 워밍업이에요.

```json
{
  "id": "m3.w11.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: hold the root, feel the space", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60.** 근음 A를 두 박 그대로 → 두 박 비브라토로. 긴 음이 주는 여유를 느껴요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 레이백)**
실전 전에, 백킹 박자를 속으로 또렷하게 세면서 리드를 살짝 뒤에 눕히는 감각을 상상해요. <mark>박자를 정확히 알고 있어야 그 위에서 여유롭게 늦출 수 있어요 — 레이백은 박자를 '아는 사람'의 여유예요.</mark>

**20~40분 · 실전: 여유 있는 프레이징 릭 (BPM 70)**
오늘의 완성물, **레이백 릭**이에요. 근음 A를 길게 **비브라토**로 늘어뜨려 여유를 만들고, b3·5도를 부드럽게 흘려요. 급하게 채우지 말고, 여백과 강약으로 릭을 노래해요.

```json
{
  "id": "m3.w11.d3.laidback_lick",
  "type": "tab",
  "meta": { "title": "Laid-back phrasing lick", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 70.** 근음 A를 두 박 비브라토로 여유 있게 → b3 → 5도. 첫 음의 긴 여백이 릭 전체를 느긋하게 만들어요.

<mark>덜 치고 더 여유를 두는 것 — 이게 프레이징이 '성숙해지는' 순간이에요.</mark>

**40~50분 · 녹음**
A7 백킹 위에서 레이백 릭을 녹음해요. 리드가 박자 뒤에 살짝 누워 여유롭게 들리는지, 강약이 살아 있는지 들어봐요.

**오늘의 완료 기준:** A7 위에서 근음 A를 길게 늘이며 박자 뒤에 살짝 눕는 레이백 릭을 완성해, 여유 있는 프레이징과 강약을 녹음했다.

## ④ 팁 / 흔한 실수

레이백에서 흔한 실수예요. 대부분 **여유를 못 견디고 서두르는** 데서 와요.

```json
{
  "id": "m3.w11.d3.space_note",
  "type": "scale_shape",
  "meta": { "title": "Don't fear the space", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **여백을 두려워하지 마세요.** 긴 음과 쉼이 릭을 더 크게 들리게 해요.

- **음을 너무 많이 채워요.** 여백이 없으면 여유도 없어요. 덜 치고 더 늘여요.
- **박자를 놓치고 진짜 늦어요.** 레이백은 '일부러' 살짝 늦추는 거예요. 속으로 박자는 계속 세요.
- **모든 음을 같은 세기로 쳐요.** 강약이 없으면 밋밋해요. 중요한 음은 크게, 나머지는 작게.
- **긴 음을 그냥 놔둬요.** 늘인 근음에 비브라토가 없으면 죽은 음이 돼요. 여백에도 생명을 불어넣어요.
