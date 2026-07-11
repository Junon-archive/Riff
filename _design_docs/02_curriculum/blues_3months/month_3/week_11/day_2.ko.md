---
title: "벤딩과 비브라토를 엮어 '우는 릭' 만들기"
dayKey: "m3.w11.d2"
estMinutes: 50
i18nKey: "lesson.m3.w11.d2"
---

# Day 2 — 벤딩과 비브라토를 하나로 엮다

## ① 이론/설명

어제는 슬라이드로 음에 미끄러져 들어갔어요. 오늘은 블루스의 가장 상징적인 두 도구, **벤딩**과 **비브라토**를 하나로 엮어요. 벤딩은 줄을 밀어 올려 음정을 끌어올리는 기술, 비브라토는 음을 미세하게 흔들어 떨리게 하는 기술이에요. <mark>이 둘이 만나면 기타가 사람처럼 '우는' 소리를 내요 — 블루스에서 가장 감정이 짙은 순간이죠.</mark> 오늘의 목표는 이 우는 소리를 한 릭 안에 담는 거예요.

오늘 벤딩할 음은 **4도(3번줄 7프렛 D)**예요. 이 음을 온음만큼 밀어 올리면 **5도(E)** 음정에 도달해요. 중요한 건 **정확한 음정까지 밀기**예요 — 덜 밀면 어정쩡한 음이 되고, 너무 밀면 음이 날카로워져요. <mark>밀어 올린 음이 5도에 딱 닿았을 때, 그 긴장이 가장 아름답게 울려요.</mark> 손가락 하나가 아니라 두세 손가락을 겹쳐 밀면 힘이 안정되고 음정도 정확해져요.

벤딩으로 5도까지 밀어 긴장을 만들었다면, 이제 근음으로 내려와 **비브라토**로 마무리해요. 착지음을 미세하게 흔들면, 음이 살아 숨 쉬는 것처럼 떨려요. <mark>벤딩이 '끌어올리는 긴장'이라면, 비브라토는 그 긴장을 '풀어주며 노래하는' 마무리예요.</mark> 이 둘이 한 릭 안에서 이어지면, 짧은 프레이즈 하나가 마치 한숨처럼 들려요. 오늘은 **BPM 70**으로, 우는 소리가 자연스럽게 나올 때까지 천천히 반복해봐요. 서두르지 말고, 한 음 한 음에 감정을 실어 다뤄봐요. 이 우는 소리가 여러분의 블루스를 한층 더 깊고 진하게 만들어줘요.

```json
{
  "id": "m3.w11.d2.cry_map",
  "type": "scale_shape",
  "meta": { "title": "Bend the 4 up to the 5 pitch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "target", "highlight": true },
    { "string": 4, "fret": 7, "finger": 2, "label": "R", "role": "root" }
  ]}
}
```
▶ **4도(3번줄 7프렛)**를 온음 밀어 올려 **초록 5도(9프렛) 음정**에 닿게 해요. 이게 오늘 벤딩의 목표예요.

## ② 시각 자료

우는 릭에 쓰이는 음들을 박스1 안에서 봐요. 벤딩할 **4도**를 중심으로, **5도**·b3·근음이 한 손 안에 모여 있어요. <mark>새 음을 배우는 게 아니라, 익숙한 박스1 음 하나를 '밀어 올려' 우는 소리로 바꾸는 거예요.</mark>

```json
{
  "id": "m3.w11.d2.bend_map",
  "type": "scale_shape",
  "meta": { "title": "Crying lick notes in box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "root" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **초록 4도**가 오늘 밀어 올릴 음이에요. 나머지 5도·b3·근음은 밀지 않고 그대로 짚어요.

<mark>익숙한 음 하나에 벤딩과 비브라토를 더하면, 그게 바로 우는 소리예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 먼저 **5도(9프렛)**를 짚어 목표 음정을 귀에 새긴 뒤, **4도**를 그 음정까지 밀어 올려요. 소리로 정답을 확인하는 거예요.

```json
{
  "id": "m3.w11.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: bend to pitch, then vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60.** 5도 음정을 먼저 듣고 → 4도를 온음 벤딩으로 그 음정까지 → 근음 비브라토로 마무리.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 벤딩 음정)**
실전 전에, 4도를 5도까지 밀어 올리는 그 음정을 머릿속으로 먼저 불러봐요. <mark>귀가 목표 음정을 먼저 알고 있으면, 손은 딱 그만큼만 밀면 돼요 — 이게 정확한 벤딩의 비결이에요.</mark>

**20~40분 · 실전: 우는 릭 (BPM 70)**
오늘의 완성물, **우는 릭**이에요. **4도를 5도까지** 온음 벤딩으로 밀어 긴장을 만들고, 5도·b3을 지나 근음에 비브라토로 착지해요. 벤딩의 긴장과 비브라토의 떨림이 한 문장 안에서 만나요.

```json
{
  "id": "m3.w11.d2.crying_lick",
  "type": "tab",
  "meta": { "title": "Crying lick: bend and vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** **4도(3번줄 7프렛)** 온음 벤딩 → 5도 → b3 → 근음 비브라토 착지. 밀어 올린 긴장이 비브라토로 풀려요.

<mark>벤딩으로 끌어올리고 비브라토로 흔드는 그 소리가, 여러분의 기타가 우는 목소리예요.</mark>

**40~50분 · 녹음**
A7 백킹 위에서 우는 릭을 녹음해요. 벤딩이 5도 음정까지 정확히 닿는지, 착지음의 비브라토가 자연스러운지 들어봐요.

**오늘의 완료 기준:** A7 위에서 4도를 5도까지 온음 벤딩으로 밀고 근음에 비브라토로 착지하는 우는 릭을 완성하고 녹음했다.

## ④ 팁 / 흔한 실수

벤딩에서 흔한 실수예요. 대부분 **음정을 끝까지 밀지 않는** 데서 와요.

```json
{
  "id": "m3.w11.d2.bend_pitch",
  "type": "scale_shape",
  "meta": { "title": "Bend all the way to the 5 pitch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "target", "highlight": true }
  ]}
}
```
▶ **5도 음정까지 끝까지 미세요.** 절반만 밀면 어정쩡한 음이 나요 — 목표 음정에 닿아야 벤딩이 완성돼요.

- **음정이 덜 올라가요.** 온음을 다 못 밀면 5도에 못 닿아요. 두세 손가락을 겹쳐 힘을 실으세요.
- **너무 많이 밀어요.** 5도를 넘기면 날카로워져요. 목표 음정에서 딱 멈춰요.
- **벤딩하자마자 비브라토를 넣어요.** 먼저 음정까지 밀어 '도착'한 뒤에 흔들어야 안정돼요.
- **착지음을 흔들지 않아요.** 근음에 비브라토가 없으면 릭이 밋밋해요. 마지막 떨림이 우는 소리를 완성해요.
