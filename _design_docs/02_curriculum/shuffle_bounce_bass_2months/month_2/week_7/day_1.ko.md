---
title: "뒷박에 눕기 — behind the beat 레이백 루트"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 뒷박에 눕기, behind the beat 레이백 루트

## ① 이론/설명

지난주엔 스윙16 바운스를 손에 익혔죠. 이번 주는 그 위에 **타이밍의 미묘한 층**을 얹어요. 포켓의 고수는 박자를 칼같이 맞추는 대신 <mark>박자 뒤에 살짝 눕어요</mark> — 이걸 **레이백**(behind the beat)이라고 해요. 마치 박자 뒤 소파에 살며시 기대앉는 여유예요.

오늘은 **루트 하나**로 그 감각을 잡아요. 메트로놈이 '똑' 하고 울릴 때, 소리를 그 위에 정확히 얹는 대신 **아주 조금 늦게** 놓아요. <mark>템포가 느려지는 게 아니라, 위치만 뒤로 미루는 거예요.</mark> 급하지 않게 뒤로 기대면 그루브에 여유와 무게가 생겨요. 마치 드러머 뒤에서 한 발짝 물러나 느긋하게 기다리는 느낌이에요.

관건은 **눕되 느려지지 않기**예요. 뒤로 눕는 것과 박자를 놓치는 건 완전히 달라요. 메트로놈은 계속 정박에 있고, 내 루트만 그 뒤에 살며시 앉아요. <mark>쉼(공간)을 두려워하지 않는 것도 오늘의 핵심이에요</mark> — 빈칸이 많을수록 뒤로 눕는 여유가 잘 느껴져요.

**BPM 72**면 충분해요. 정박에 딱 맞춘 루트와, 살짝 뒤로 눕힌 루트를 번갈아 녹음해 나란히 들어 봐요. <mark>이 둘의 차이가 귀에 들리면 오늘은 성공이에요.</mark> 4현이든 5현이든 손이 하는 일은 똑같으니 편한 악기로 시작해요.

## ② 시각 자료

오늘의 시각 자료는 두 가지예요. 먼저 <mark>루트를 촘촘히 채운 펄스</mark>로 박자를 몸에 새기고, 그다음 공간을 많이 둔 레이백 루트로 뒤에 눕는 여유를 느껴 봐요. 각 예제는 4현·5현 두 버전이에요.

먼저 **스테디 루트 펄스**예요. 개방 E 루트를 네 박에 또박또박 얹고, 사이는 고스트로 메워 박자의 뼈대를 세워요.

```json
{
  "id": "m2.w7.d1.steady_root_4",
  "type": "tab",
  "meta": { "title": "Steady root pulse (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72, 스윙16 · 레이백.** 루트를 네 박에 얹고 사이를 고스트로 메워 박자를 세워요. 정박에 딱 맞춘 뒤, 살짝 뒤로 눕히는 연습을 해요. **5현이라면** 저음 B는 재워 둬요.

```json
{
  "id": "m2.w7.d1.steady_root_5",
  "type": "tab",
  "meta": { "title": "Steady root pulse (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

이번엔 <mark>공간을 많이 둔 레이백 루트</mark>예요. 음표는 몇 개 안 되지만, 그 몇 개를 **박자 뒤에 살짝** 놓는 게 전부예요.

```json
{
  "id": "m2.w7.d1.laidback_root_4",
  "type": "tab",
  "meta": { "title": "Laid-back root (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 72, 레이백.** 빈칸이 많아요. 그 여백이 뒤로 눕는 여유예요. 루트를 급하게 채우지 말고 **박자 뒤에** 살포시 놓아요. **5현이라면** 저음 B 대안.

```json
{
  "id": "m2.w7.d1.laidback_root_5",
  "type": "tab",
  "meta": { "title": "Laid-back root (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
오른손 투핑거로 개방 E를 가볍게 얹으며 손을 풀어요. 힘을 빼고 루트 하나를 편안하게 튕기는 감각부터 찾아요.

**10~20분 · 두뇌 훈련**
메트로놈을 켜고, 루트를 정박에 딱 맞췄다가 아주 조금 뒤로 미뤄 봐요. <mark>템포는 그대로, 위치만 뒤로 가는지</mark> 귀로 확인해요.

**20~40분 · 실전**
**레이백 루트**를 **BPM 72**에서 반복해요. 정박 펄스로 박자를 세운 뒤, 공간을 두고 뒤에 눕는 루트를 연습해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음**
정박 루트와 레이백 루트를 각각 녹음해 나란히 들어요. 뒤로 눕었는지, 급하지 않은지 귀로 점검해요.

**오늘의 완료 기준:** 메트로놈 72에서 루트를 박자 뒤에 살짝 눕혀, 정박 루트와 레이백 루트의 차이를 귀로 구분하고 4현·5현 둘 다에서 확인할 수 있다.

## ④ 팁 / 흔한 실수

- **뒤로 눕다가 느려져요.** 레이백은 위치만 뒤로 가는 거예요. 템포까지 늦추면 그냥 느린 연주가 돼요. 메트로놈은 계속 정박에 둬요.
- **너무 많이 눕어요.** 살짝이면 충분해요. 지나치게 뒤로 가면 박자를 놓친 것처럼 들려요.
- **빈칸을 급하게 채워요.** 공간이 레이백의 여유예요. 음을 더 넣고 싶은 마음을 참아요.
- **저음 B 방심(5현).** 안 쓰는 저음 B는 엄지로 덮어 둬요.
