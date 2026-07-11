---
title: "컴핑에서 솔로로 — 질문과 대답 사이를 넘나들기"
dayKey: "m3.w12.d1"
estMinutes: 50
i18nKey: "lesson.m3.w12.d1"
---

# Day 1 — 컴핑의 그루브를 지닌 채 솔로로 넘어가기

## ① 이론/설명

드디어 마지막 주, 12주차예요. 이번 주 목표는 딱 하나예요 — **혼자서 블루스 한 곡을 완성하기.** 그동안 컴핑도 배우고 솔로도 배웠는데, 이제 그 둘을 한 사람이 오가며 12마디를 채워요. <mark>컴핑은 질문이고, 솔로는 대답이에요 — 리듬으로 묻고 리드로 답하는 대화죠.</mark> 오늘은 그 첫걸음, **컴핑에서 솔로로 넘어가는 전환**을 손에 익혀요.

전환에는 두 개의 '집'이 있어요. 하나는 **컴핑의 집** — 개방 5번줄 근음 A 위에 4번줄로 **5도·6도·b7**을 얹는 A7 부기예요. 다른 하나는 **솔로의 집** — 5프렛 언저리의 익숙한 **박스1**이죠. <mark>두 집은 서로 가까이 붙어 있어서, 손을 크게 옮기지 않고도 오갈 수 있어요.</mark> 컴핑을 칠 땐 손이 개방현 쪽에 머물고, 솔로로 넘어갈 땐 손이 지판 위쪽 박스1으로 살짝 올라가요. 익숙해지면 이 두 집은 한 걸음 거리처럼 느껴져요.

중요한 건 **전환의 순간에도 그루브가 끊기지 않는 것**이에요. 컴핑을 멈추고 '자, 이제 솔로!' 하고 머뭇거리면 대화가 뚝 끊겨요. <mark>컴핑의 마지막 박과 솔로의 첫 음이 같은 흐름 위에 있어야 대화가 자연스러워요.</mark> 처음엔 전환할 때 박자가 조금 흔들려도 괜찮아요. 발로 세는 셔플 그루브만 멈추지 않으면, 솔로 음은 그 위에 얹히기만 하면 돼요. 오늘은 **BPM 80, 셔플**로 천천히, 컴핑 한 마디 치고 솔로로 넘어가는 그 이음새만 매끄럽게 다듬어요.

```json
{
  "id": "m3.w12.d1.comp_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Comping home: A7 boogie shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **개방 5번줄 근음 A** 위에 4번줄 **5도→6도→b7**을 오가면 A7 부기 컴핑이 돼요.

## ② 시각 자료

이제 대답이 사는 솔로의 집을 지판에서 다시 봐요. 컴핑은 개방현 근처에서 울렸지만, 솔로는 **5프렛 언저리 박스1**에서 나와요. <mark>두 집은 몇 프렛 차이일 뿐, 오른손 그루브는 그대로 두고 왼손만 옮기면 돼요.</mark>

```json
{
  "id": "m3.w12.d1.solo_home",
  "type": "scale_shape",
  "meta": { "title": "Solo home: box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 대답이 사는 **박스1**이에요. 컴핑의 집에서 왼손만 5프렛 언저리로 올리면 여기예요.

<mark>컴핑에서 이 박스1로 손이 자연스럽게 오르내리면, 질문과 대답이 하나로 이어져요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 먼저 컴핑만 떼어 연습해요. 근음 A 위에서 5→6→b7 부기를 셔플 그루브로 천천히 굴려요.

```json
{
  "id": "m3.w12.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: A7 boogie comp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60, 셔플.** 근음 A 위에서 5→6→b7→6을 오가는 A7 부기. 오른손 그루브를 몸에 먼저 익혀요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 컴핑↔솔로 전환)**
실전 전에, 컴핑의 마지막 박에서 왼손이 박스1으로 올라가는 그림을 머릿속으로 그려요. <mark>손이 움직일 자리를 미리 그려두면, 전환의 순간에 박자가 흔들리지 않아요.</mark>

**20~40분 · 실전: 컴핑→솔로 전환 (BPM 80)**
오늘의 목표, **컴핑→솔로 전환**이에요. 1마디는 A7 부기로 질문을 던지고, 2마디는 박스1 릭으로 대답해요. **컴핑의 마지막 박**에서 왼손을 박스1으로 올려 첫 솔로 음으로 매끄럽게 이어요.

```json
{
  "id": "m3.w12.d1.comp_to_solo",
  "type": "tab",
  "meta": { "title": "Comp to solo switch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1마디는 컴핑(질문), 2마디는 솔로(대답). 컴핑의 마지막 박에서 왼손을 박스1으로 올려 첫 솔로 음으로 이어요.

<mark>컴핑과 솔로가 한 흐름 위에서 이어지면, 벌써 혼자 하는 블루스의 절반이 완성된 거예요.</mark>

**40~50분 · 녹음**
A7 백킹이 없어도 좋아요. 컴핑 한 마디 치고 솔로 한 마디로 넘어가는 전환을 녹음해, 이음새가 매끄러운지 들어봐요.

**오늘의 완료 기준:** 컴핑 한 마디에서 솔로 한 마디로 박자를 잃지 않고 매끄럽게 전환해, 컴핑→솔로 스위치를 녹음했다.

## ④ 팁 / 흔한 실수

전환에서 흔한 실수예요. 대부분 **솔로로 넘어가며 그루브를 멈추는** 데서 와요.

```json
{
  "id": "m3.w12.d1.keep_groove",
  "type": "scale_shape",
  "meta": { "title": "Keep the groove into the answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **그루브를 멈추지 마세요.** 컴핑과 솔로 사이에 정적이 생기면 대화가 끊겨요.

- **솔로로 넘어가며 박자를 세지 않아요.** 발은 계속 셔플을 밟아야 해요. 그루브가 멈추면 전환이 티 나요.
- **왼손을 너무 크게 움직여요.** 컴핑의 집과 박스1은 몇 프렛 차이예요. 최소한으로 이동해요.
- **솔로 첫 음을 세게 짚느라 늦어요.** 첫 음은 힘이 아니라 타이밍이에요. 정박에 딱 올려요.
- **속도부터 올려요.** BPM 80에서 전환이 매끄러운 게 먼저예요. 빠르기는 나중 일이에요.
