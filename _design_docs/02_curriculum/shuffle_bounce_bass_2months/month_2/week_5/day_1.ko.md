---
title: "데드노트 \"칙\" — 음정 없는 고스트 하나"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — 데드노트 "칙", 음정 없는 고스트 하나

## ① 이론/설명

지난달 셔플 블루스를 무사히 졸업했어요. 오늘부터는 **바운스**의 세계예요. 바운스가 통통 튀는 비결은 새로운 음이 아니라 **고스트("칙")**에 있어요. <mark>왼손을 줄 위에 살짝 얹기만 하고(프렛까지 꾹 누르지 않아요), 그 상태로 오른손으로 툭 치면 음정 없이 "칙" 하는 타격음만 남아요.</mark> 바로 이 소리가 **데드노트**예요.

스키마에서는 이걸 `dead_note`로 적어요. 일반 음과는 완전히 다른 소리라, 타브에는 프렛 숫자 대신 자리만 잡혀요. 비유하자면 <mark>드럼의 하이햇 잔가락</mark> 같은 존재예요 — 멜로디가 아니라 리듬의 빈틈을 채우는 소리죠. 그래서 오늘은 딱 하나, **깨끗한 "칙"**을 내는 감각에만 집중해요.

클린한 고스트의 핵심은 두 가지예요. 첫째, 왼손을 **너무 세게 누르지 않기** — 프렛에 닿기 직전까지만 살짝 얹어요. 둘째, <mark>치지 않는 줄이 함께 울리지 않도록 조용히 재워 두기</mark>예요. 이 둘이 맞아떨어지면 "웅~" 하는 잡음 없이, 바짝 마른 "칙"이 깔끔하게 나와요.

오늘은 속도 압박이 전혀 없어요. **BPM 60**에서 아주 천천히, 한 번의 "칙"이 깨끗하게 날 때까지만 반복하면 돼요. <mark>고스트 하나가 클린하게 나는 순간, 오늘은 성공이에요.</mark> 4현이든 5현이든 손이 하는 일은 똑같으니 편한 악기로 시작해요.

## ② 시각 자료

오늘의 시각 자료는 두 가지예요. 먼저 <mark>고스트만 네 번</mark> 내보고, 그다음 일반 음과 고스트를 번갈아 소리의 차이를 느껴 봐요. 각 예제는 4현·5현 두 버전이에요.

먼저 **고스트만 네 번**이에요. 3번 줄(A)에 왼손을 살짝 얹고, 오른손으로 네 번 "칙"을 내요.

```json
{
  "id": "m2.w5.d1.ghost_only_4",
  "type": "tab",
  "meta": { "title": "Clean ghost chka — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60.** 프렛은 누르지 않고 왼손을 살짝만 얹어요. 음정이 아니라 마른 타격음 "칙"만 나면 정답이에요.

```json
{
  "id": "m2.w5.d1.ghost_only_5",
  "type": "tab",
  "meta": { "title": "Clean ghost chka — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 자리와 방법은 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

이번엔 **일반 음과 고스트**를 번갈아 내봐요. 개방 E(4번 줄)를 '둥' 울리고, 3번 줄 고스트를 '칙'으로 받아요. <mark>둥과 칙의 소리 차이</mark>가 또렷이 들려요.

```json
{
  "id": "m2.w5.d1.note_and_ghost_4",
  "type": "tab",
  "meta": { "title": "Note vs ghost — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60.** 둥(개방 E)과 칙(고스트)을 번갈아. 음이 있는 소리와 없는 소리의 대비를 귀에 새겨요.

```json
{
  "id": "m2.w5.d1.note_and_ghost_5",
  "type": "tab",
  "meta": { "title": "Note vs ghost — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
오른손 투핑거를 개방 E에 툭툭 얹으며 손을 풀어요. 힘을 빼고 가볍게 튕기는 감각을 먼저 찾아요.

**10~20분 · 두뇌 훈련**
왼손을 줄에 살짝 얹은 채 오른손으로만 "칙"을 내봐요. <mark>프렛을 누르지 않았는데도 소리가 마른가</mark> 귀로 확인해요.

**20~40분 · 실전**
**고스트만 네 번**과 **일반 음과 고스트** 두 예제를 BPM 60에서 번갈아 연습해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음**
깨끗한 "칙" 하나를 녹음해요. 다시 들으며 잡음 없이 마른 소리가 났는지 점검해요.

**오늘의 완료 기준:** 왼손을 살짝 얹어 음정 없는 고스트("칙") 하나를 잡음 없이 클린하게 내고, 4현·5현 둘 다에서 확인할 수 있다.

## ④ 팁 / 흔한 실수

- **너무 세게 눌러요.** 프렛까지 누르면 음정이 나요. 살짝 얹기만 해요.
- **너무 약하게 얹어요.** 반대로 너무 살살이면 "웅~" 하는 하모닉스가 나요. 줄을 확실히 죽일 만큼만 얹어요.
- **안 친 줄이 울려요.** 고스트가 지저분해지는 가장 큰 원인이에요. 옆 줄을 오른손·왼손으로 함께 재워 둬요.
- **저음 B 방심(5현).** 5현에선 저음 B가 새기 쉬워요. 엄지로 덮어 둬요.
