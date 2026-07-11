---
title: "밀당 3위치 — 앞·정박·뒤"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 밀당 3위치, 앞·정박·뒤

## ① 이론/설명

어제는 루트를 **박자 뒤에** 눕히는 감각을 잡았어요. 오늘은 그 감각을 넓혀, 같은 라인을 **세 위치**로 놓아 봐요 — <mark>앞·정박·뒤</mark>. 세 위치를 오가며 밀당하면, 타이밍이 그루브의 표정을 어떻게 바꾸는지 몸으로 알게 돼요. 음을 바꾸지 않고 타이밍만 옮기는데도, 그루브의 인상이 확 달라진다는 게 오늘의 재미예요.

**앞**(ahead)은 박자보다 살짝 빨리 놓는 거예요. 급하고 들뜬 느낌이라 신나는 록이나 펑크에서 써요. 하지만 <mark>앞으로 당기면 쉽게 초조해 보여요</mark> — 그래서 오늘은 앞을 '맛만' 보고 지나가요. 앞으로 당기는 습관이 배면 나중에 고치기 어려우니, 살짝 스치듯 경험만 하고 넘어가요.

**정박**(on)은 박자 위에 딱 얹는 거예요. 또렷하고 안정적이죠. **뒤**(behind)는 어제 배운 레이백이에요 — 여유롭고 묵직해요. <mark>같은 음, 같은 자리인데 위치만 바꿔도 느낌이 완전히 달라져요.</mark>

오늘의 라인은 루트 E와 5도 B 하나예요. **BPM 72**에서 이 라인을 앞·정박·뒤로 옮겨 가며 녹음해 비교해요. 세 위치를 오가는 동안 메트로놈은 흔들림 없이 정박을 지켜 줘야 해요. <mark>세 위치의 차이가 또렷이 들리면 오늘은 성공이에요.</mark> 4현이든 5현이든 운지는 똑같아요.

## ② 시각 자료

오늘의 시각 자료는 같은 라인 두 가지 버전이에요. 먼저 <mark>정박에 딱 맞춘 라인</mark>으로 기준을 잡고, 그다음 같은 라인을 레이백으로 눕혀 뒤로 미는 여유를 느껴 봐요. 앞 위치는 악보가 아니라 손끝으로 살짝 맛봐요. 각 예제는 4현·5현 두 버전이에요.

먼저 **정박 라인**이에요. 루트 E와 5도 **B**(3번 줄 2프렛)를 박자 위에 또렷이 얹어요.

```json
{
  "id": "m2.w7.d2.pushpull_on_4",
  "type": "tab",
  "meta": { "title": "Push-pull line, on the beat (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
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
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
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

▶ **BPM 72, 스윙16.** 루트 E와 5도 B를 박자 위에 또렷이. 이게 '정박' 기준이에요. **5현이라면** 저음 B는 재워 둬요.

```json
{
  "id": "m2.w7.d2.pushpull_on_5",
  "type": "tab",
  "meta": { "title": "Push-pull line, on the beat (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
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
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
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

이번엔 <mark>같은 라인을 레이백</mark>으로예요. 음표는 똑같고, 각 음을 **박자 뒤에 살짝** 눕혀 놓아요.

```json
{
  "id": "m2.w7.d2.pushpull_back_4",
  "type": "tab",
  "meta": { "title": "Push-pull line, behind the beat (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
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
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
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

▶ **BPM 72, 레이백.** 음은 정박과 똑같아요. 각 음을 **박자 뒤에** 살짝 눕혀 여유를 만들어요. **5현이라면** 저음 B 대안.

```json
{
  "id": "m2.w7.d2.pushpull_back_5",
  "type": "tab",
  "meta": { "title": "Push-pull line, behind the beat (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
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
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
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

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
루트 E와 5도 B를 오가며 손을 풀어요. 두 음을 편안히 잇는 감각부터 찾아요.

**10~20분 · 두뇌 훈련**
같은 라인을 머릿속으로 앞·정박·뒤에 놓아 봐요. <mark>위치만 바뀌고 음은 그대로인지</mark> 천천히 되짚어요.

**20~40분 · 실전**
**밀당 라인**을 **BPM 72**에서 정박으로 세운 뒤, 레이백으로 눕혀 반복해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음**
정박 라인과 레이백 라인을 각각 녹음해 나란히 들어요. 앞 위치도 한 번 맛보며 세 위치를 비교해요.

**오늘의 완료 기준:** 같은 라인을 앞·정박·뒤 세 위치로 옮겨 놓고, 정박과 레이백의 차이를 귀로 구분하며 4현·5현 둘 다에서 확인할 수 있다.

## ④ 팁 / 흔한 실수

- **위치를 바꾸다 음을 바꿔요.** 밀당은 타이밍만 바꾸는 거예요. 음과 자리는 그대로 둬요.
- **앞으로 너무 당겨요.** 앞 위치는 맛만 봐요. 계속 당기면 초조하게 들려요.
- **뒤로 눕다 느려져요.** 레이백은 위치만 뒤로예요. 템포는 메트로놈에 맡겨요.
- **저음 B 방심(5현).** 안 쓰는 저음 B는 엄지로 덮어 둬요.
