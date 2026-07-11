---
title: "12마디 전체를 대화로 — 멈추지 않는 풀 런스루"
dayKey: "m3.w12.d3"
estMinutes: 50
i18nKey: "lesson.m3.w12.d3"
---

# Day 3 — 12마디를 처음부터 끝까지 한 번에 대화하기

## ① 이론/설명

이제 4마디 대화를 손에 넣었으니, 오늘은 그 대화를 **12마디 전체**로 펼쳐요. 컴핑으로 묻고 솔로로 답하기를 세 번 주고받으면 12마디 한 곡이 완성돼요. <mark>오늘은 리허설이에요 — 멈추지 않고 처음부터 끝까지 한 번에 흘려보내는 연습이죠.</mark> 부분 연습은 충분히 했으니, 이제 **한 곡을 통째로** 굴려볼 차례예요.

12마디 블루스는 세 코드로 움직여요 — **A7(I)·D7(IV)·E7(V)**. 컴핑의 부기는 코드가 바뀔 때마다 그 코드의 근음으로 옮겨가요. A7은 5번줄 개방 A에서, **D7은 4번줄 개방 D에서, E7은 6번줄 개방 E에서** 같은 5→6→b7 모양을 굴리죠. <mark>근음만 바꿔 짚으면 같은 부기 손 모양이 세 코드에 다 통해요.</mark> 대답하는 솔로는 계속 박스1에 머물러도 좋아요 — 코드가 바뀌어도 박스1은 12마디 내내 어울리거든요.

리허설의 핵심은 **멈추지 않기**예요. 중간에 음을 놓치거나 손이 엉켜도, 발로 세는 셔플만 계속 밟으면 돼요. <mark>실수를 고치려고 멈추는 순간 대화가 끊기지만, 그냥 흘려보내면 곡은 살아 있어요.</mark> 오늘은 **BPM 80, 셔플**로, 12마디를 처음부터 끝까지 한 번에 통과하는 걸 목표로 해요. 완벽하지 않아도 괜찮아요 — 끝까지 흐르는 그 경험 자체가 내일의 졸업 녹음을 준비시켜줘요.

```json
{
  "id": "m3.w12.d3.three_roots",
  "type": "fretboard_diagram",
  "meta": { "title": "Three boogie roots: A7, D7, E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "A", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "D", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **A7·D7·E7**의 세 근음이에요. 각 근음 위에서 같은 5→6→b7 부기를 굴리면 컴핑이 코드를 따라가요.

## ② 시각 자료

이제 대답하는 솔로가 사는 박스1을 다시 봐요. 신기하게도 이 **하나의 박스1**이 A7·D7·E7 세 코드 위에서 다 어울려요. <mark>코드가 바뀌어도 솔로 손은 그대로 — 답할 자리를 새로 찾을 필요가 없어요.</mark>

```json
{
  "id": "m3.w12.d3.answer_box",
  "type": "scale_shape",
  "meta": { "title": "One box 1 answers all twelve bars", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 이 **박스1** 하나로 12마디 내내 답할 수 있어요. 코드를 따라 옮길 필요가 없죠.

<mark>컴핑은 코드를 따라 움직이고, 솔로는 박스1에 머물러요 — 이 분업이 혼자 하는 블루스를 쉽게 만들어요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 코드가 바뀔 때 근음을 옮기는 것만 먼저 연습해요. A7 → D7 → E7, 한 마디씩 부기를 굴려요.

```json
{
  "id": "m3.w12.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: move the boogie root A7-D7-E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60, 셔플.** A7 → D7 → E7. 근음을 5·4·6번줄로 옮기며 같은 부기 손 모양을 굴려요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 멈추지 않는 런스루)**
실전 전에, 12마디 전체 지도를 머릿속에 그려요. 어디서 컴핑하고 어디서 솔로하는지, 코드가 어디서 바뀌는지 미리 떠올려요. <mark>지도가 머릿속에 있으면, 연주 중에 길을 잃지 않고 끝까지 흐를 수 있어요.</mark>

**20~40분 · 실전: 12마디 풀 런스루 (BPM 80)**
오늘의 완성물, **12마디 풀 런스루**예요. 컴핑 두 마디로 묻고 솔로 두 마디로 답하기를, 코드를 따라 세 번 반복해요. **멈추지 말고** 처음부터 끝까지 한 번에 흘려보내요.

```json
{
  "id": "m3.w12.d3.full_twelve",
  "type": "tab",
  "meta": { "title": "Full 12-bar dialogue run-through", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 5, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 6, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 7, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 8, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 9, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 10, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 11, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 12, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1~2 A7 컴핑 → 3~4 솔로 → 5~6 D7 컴핑 → 7~8 솔로 → 9 E7·10 D7 컴핑 → 11~12 솔로. 멈추지 말고 한 번에 통과해요.

<mark>12마디를 한 번도 멈추지 않고 통과하면, 내일의 졸업 녹음은 이미 절반 이상 준비된 거예요.</mark>

**40~50분 · 녹음**
12마디 풀 런스루를 통째로 녹음해요. 완벽하지 않아도 좋아요 — 멈추지 않고 끝까지 흐르는 그 흐름을 담아봐요.

**오늘의 완료 기준:** A7·D7·E7 위에서 컴핑↔솔로 대화를 12마디 전체로 멈추지 않고 한 번에 통과해, 풀 런스루를 녹음했다.

## ④ 팁 / 흔한 실수

풀 런스루에서 흔한 실수예요. 대부분 **실수를 고치려고 멈추는** 데서 와요.

```json
{
  "id": "m3.w12.d3.dont_stop",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep moving: A7 to D7 root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "A", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "D", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **멈추지 말고 다음 코드로.** 실수해도 근음만 제때 옮기면 곡은 계속 흘러요.

- **실수를 고치려고 멈춰요.** 멈추면 곡이 죽어요. 틀려도 그냥 다음 마디로 넘어가요.
- **코드 바뀌는 걸 놓쳐요.** 5·9마디에서 근음이 움직여요. 미리 손을 준비해요.
- **솔로에서 박스를 벗어나요.** 답할 땐 박스1에만 머물러도 충분해요. 멀리 가지 않아요.
- **녹음을 미뤄요.** 완벽할 때 녹음하려다 영영 못 해요. 오늘의 흐름을 그대로 담아요.
