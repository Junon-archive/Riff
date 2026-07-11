---
title: "루트 + 고스트 — 둥-칙을 그루브로"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 루트 + 고스트, 둥-칙을 그루브로

## ① 이론/설명

어제 깨끗한 "칙" 하나를 손에 넣었어요. 오늘은 그 고스트를 **루트 음과 번갈아** 놓아 그루브로 만들어요. 베이스의 가장 기본적인 바운스 리듬이 바로 **"둥-칙"**이에요. <mark>둥은 개방 E 루트, 칙은 왼손을 얹은 고스트예요.</mark> 이 둘이 번갈아 오가면 리듬이 살아 움직여요.

오늘의 소재는 **"둥, 칙-칙"** 패턴이에요. 박자 하나에 루트를 '둥' 울리고, 다음 박에 고스트를 '칙-칙' 두 번 채워요. <mark>루트가 그루브의 기둥이라면, 고스트는 그 사이를 채우는 잔가락</mark>이에요. 소리 없는 자리를 고스트가 메우면 리듬이 앞으로 굴러가요.

관건은 **루트와 고스트의 음량 균형**이에요. 둥이 너무 크고 칙이 묻히면 바운스가 죽고, 반대로 칙이 너무 세면 시끄러워져요. <mark>둥은 또렷하게, 칙은 살짝 작게</mark> — 이 대비가 통통 튀는 느낌을 만들어요.

오늘은 **BPM 70**에서 천천히 굴려요. 손이 자동으로 둥-칙을 오갈 때까지 반복해요. <mark>루트와 고스트가 자연스레 번갈아 나면 오늘은 성공이에요.</mark> 개방 E뿐 아니라 개방 A로도 같은 폼이 옮겨가는 걸 느껴 봐요.

## ② 시각 자료

오늘의 시각 자료는 두 가지예요. **개방 E**에서 둥-칙을 익히고, 같은 폼을 **개방 A**로 옮겨 봐요. <mark>둥-칙 하나의 폼</mark>은 자리만 옮기면 어디서든 통해요. 각 예제는 4현·5현 두 버전이에요.

먼저 **개방 E의 둥-칙**이에요. 박마다 루트(4번 줄)를 둥 울리고, 3번 줄 고스트로 칙-칙을 채워요.

```json
{
  "id": "m2.w5.d2.boom_chka_4",
  "type": "tab",
  "meta": { "title": "Boom-chka on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 둥(개방 E)은 4분음표, 칙-칙(고스트)은 8분음표 둘이에요. 둥은 또렷하게, 칙은 살짝 작게.

```json
{
  "id": "m2.w5.d2.boom_chka_5",
  "type": "tab",
  "meta": { "title": "Boom-chka on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 자리와 방법은 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

이번엔 같은 폼을 **개방 A**로 옮겨요. 루트를 3번 줄 개방 A로 바꾸고, 고스트는 2번 줄에서 칙-칙을 내요. <mark>폼은 그대로, 자리만 한 칸 위로</mark> 옮겨간 거예요.

```json
{
  "id": "m2.w5.d2.boom_chka_a_4",
  "type": "tab",
  "meta": { "title": "Boom-chka on A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 둥(개방 A)-칙-칙. E에서 익힌 감각이 그대로 옮겨와요.

```json
{
  "id": "m2.w5.d2.boom_chka_a_5",
  "type": "tab",
  "meta": { "title": "Boom-chka on A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 고스트만 네 번을 BPM 60에 복습하며 왼손 감각을 되살려요. 마른 "칙"이 다시 나오는지 확인해요.

**10~20분 · 두뇌 훈련**
둥과 칙-칙을 손으로 분리해 봐요. <mark>루트를 치는 순간과 고스트를 얹는 순간</mark>을 머릿속으로 또렷이 나눠요.

**20~40분 · 실전**
**개방 E의 둥-칙**과 **개방 A의 둥-칙** 두 예제를 BPM 70에서 굴려요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음**
둥-칙 그루브 한 마디를 녹음해요. 다시 들으며 둥과 칙의 음량 대비가 살아 있는지 점검해요.

**오늘의 완료 기준:** 루트(둥)와 고스트(칙-칙)를 번갈아 BPM 70에서 한 마디 그루브로 굴리고, 4현·5현 둘 다에서 확인할 수 있다.

## ④ 팁 / 흔한 실수

- **칙이 둥보다 커요.** 고스트가 루트를 덮으면 바운스가 죽어요. 칙은 살짝 작게.
- **칙-칙 타이밍이 붙어요.** 두 고스트가 균등한 8분음표가 되게 메트로놈에 정확히 맞춰요.
- **루트에 음정이 흔들려요.** 개방현이라 왼손 힘이 새면 소리가 지저분해져요. 개방은 왼손을 살짝 대 잡음만 눌러요.
- **저음 B 방심(5현).** 5현에선 안 치는 저음 B를 엄지로 덮어 둬요.
