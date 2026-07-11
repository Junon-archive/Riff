---
title: "2마디로 묻고 2마디로 답하다 — 4마디 대화"
dayKey: "m3.w12.d2"
estMinutes: 50
i18nKey: "lesson.m3.w12.d2"
---

# Day 2 — 컴핑으로 묻고 릭으로 답하는 4마디 대화

## ① 이론/설명

어제는 컴핑에서 솔로로 넘어가는 이음새를 익혔죠. 오늘은 그 전환을 **하나의 완결된 대화**로 키워요 — **2마디 컴핑(질문)**을 던지고, **2마디 솔로(대답)**로 답하는 4마디 대화예요. <mark>이 4마디가 블루스 대화의 기본 단위예요 — 묻고, 답하고, 다시 묻는 흐름의 씨앗이죠.</mark> 어제의 한 마디짜리 전환이 이제 두 마디씩 주고받는 대화로 자라나요.

질문은 **A7 부기 2마디**예요. 개방 근음 A 위에서 5→6→b7→6을 두 마디 동안 굴리며 그루브로 물어요. 대답은 **박스1 릭 2마디**예요. 4도를 **온음 벤딩**으로 밀어 긴장을 만들고, 5도·b3을 지나 근음에 **비브라토**로 착지하죠. <mark>질문이 리듬으로 '어때?' 하고 물으면, 대답은 멜로디로 '이렇게!' 하고 답하는 거예요.</mark> 두 마디씩이니 서두를 필요 없이 각 프레이즈를 충분히 말할 수 있어요.

대화를 자연스럽게 만드는 비결은 **숨 쉬는 공간**이에요. 대답을 음으로 빽빽하게 채우지 말고, 컴핑이 던진 질문을 잠깐 '듣고' 나서 답해요. <mark>말과 말 사이에 쉼이 있어야 대화가 조급하지 않고 여유로워져요.</mark> 오늘도 **BPM 80, 셔플**로, 질문 두 마디와 대답 두 마디를 편안하게 이어봐요. 4마디가 하나의 문장처럼 들리기 시작하면, 12마디 전체 대화도 금방이에요.

```json
{
  "id": "m3.w12.d2.answer_map",
  "type": "scale_shape",
  "meta": { "title": "The answer: box 1 lick notes", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **초록 4도**가 대답의 긴장을 만드는 벤딩 음이에요. 근음에 비브라토로 착지하며 답을 맺어요.

## ② 시각 자료

이제 질문이 사는 컴핑의 집을 다시 확인해요. 4마디 대화의 앞 두 마디가 여기서 울려요 — 개방 근음 A 위에 **5도·6도·b7**을 얹는 A7 부기죠. <mark>질문의 집과 대답의 집이 나란히 있어야, 두 마디씩 오가는 대화가 편해져요.</mark>

```json
{
  "id": "m3.w12.d2.question_home",
  "type": "fretboard_diagram",
  "meta": { "title": "The question: A7 boogie home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **개방 근음 A** 위 A7 부기로 두 마디를 물어요. 그다음 박스1으로 올라가 두 마디를 답하죠.

<mark>질문 두 마디, 대답 두 마디 — 이 왕복이 블루스가 '대화'인 이유예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. A7 부기를 두 마디로 늘려 쳐요. 질문을 두 마디 길이로 굴리며 그루브를 안정시켜요.

```json
{
  "id": "m3.w12.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: two-bar A7 question", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
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
    ]}
  ]}
}
```
▶ **BPM 60, 셔플.** A7 부기 두 마디. 질문을 두 마디 길이로 늘려 그루브를 안정시켜요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 4마디 대화)**
실전 전에, 질문 두 마디가 끝나는 지점에서 손이 박스1으로 올라가는 그림을 그려요. <mark>질문의 끝과 대답의 시작을 미리 이어두면, 4마디가 끊김 없이 흘러요.</mark>

**20~40분 · 실전: 4마디 대화 (BPM 80)**
오늘의 완성물, **4마디 대화**예요. 앞 두 마디는 A7 부기로 묻고, 뒤 두 마디는 박스1 릭으로 답해요. **대답의 4도 벤딩**에서 긴장을 만들고, 근음 비브라토로 문장을 맺어요.

```json
{
  "id": "m3.w12.d2.four_bar_dialogue",
  "type": "tab",
  "meta": { "title": "Four-bar dialogue (2 comp + 2 solo)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1~2마디 컴핑(질문) → 3~4마디 솔로(대답). 대답은 4도 벤딩으로 긴장을 만들고 근음 비브라토로 착지해요.

<mark>4마디가 하나의 문장처럼 들리면, 여러분은 이미 혼자 대화하는 블루스 연주자예요.</mark>

**40~50분 · 녹음**
4마디 대화를 통째로 녹음해요. 질문 두 마디와 대답 두 마디가 하나의 문장처럼 자연스럽게 이어지는지 들어봐요.

**오늘의 완료 기준:** 2마디 A7 컴핑으로 묻고 2마디 박스1 릭으로 답하는 4마디 대화를 멈추지 않고 완주해, 통째로 녹음했다.

## ④ 팁 / 흔한 실수

4마디 대화에서 흔한 실수예요. 대부분 **대답을 음으로 꽉 채우려는** 데서 와요.

```json
{
  "id": "m3.w12.d2.leave_space",
  "type": "scale_shape",
  "meta": { "title": "Leave space in the answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **대답에도 숨을 주세요.** 빈 공간이 있어야 다음 질문이 들어올 자리가 생겨요.

- **대답을 음으로 꽉 채워요.** 쉼이 없으면 대화가 숨차요. 몇 음만으로 또렷하게 답해요.
- **질문 두 마디가 밋밋해요.** 그루브가 흐리면 대답도 힘을 잃어요. 부기를 또렷하게 굴려요.
- **대답이 컴핑보다 빨라져요.** 대답할 때 서두르면 박자가 앞서가요. 같은 셔플 위에 얹어요.
- **매번 똑같이 답해요.** 4도 벤딩은 지키되, 하행 음은 조금씩 바꿔봐도 좋아요.
