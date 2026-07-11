---
title: "셔플 루트 펄스 — 메트로놈 앞에서 균일하게"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — 셔플 루트 펄스를 메트로놈에

## ① 이론/설명

어제 만든 **롱-숏(따-그닥)** 감각을, 오늘은 **메트로놈 앞**에 세워요. 혼자 굴릴 땐 그럴듯해도, 클릭에 맞춰 8분을 **셔플로** 계속 이으면 흔들리기 쉬워요. 오늘 목표는 <mark>셔플 루트 펄스를 처음부터 끝까지 균일하게</mark> 굴리는 거예요.

**셔플 루트 펄스**란, **개방 E** 한 음을 8분음표로 계속 치되 **롱-숏으로 굴리는** 반복 패턴이에요. 마디마다 여덟 개의 8분이 "따-그닥 따-그닥"으로 이어져요. 화음도, 이동도 없어요 — 오직 **한 음의 그루브**, 그 굴림의 균일함이 전부예요. <mark>단순할수록 셔플의 진짜 실력이 드러나요.</mark>

메트로놈은 보통 **4분음표(1·2·3·4)**에 클릭을 둬요. 클릭은 각 박의 **앞음(긴 음)**에 딱 떨어지고, 짧은 뒷음은 클릭과 클릭 사이 **삼각형의 셋째 자리**에 살포시 얹혀요. <mark>클릭에 앞음을 정확히 맞추면</mark>, 뒷음은 자연스럽게 제자리를 찾아요. 시각 자료엔 여전히 **feel: swing8**이 붙어 있어요.

오늘은 **BPM 60**으로 시작해 **BPM 70**까지만 천천히 올려 봐요. 무리해서 빨리 갈 필요 없어요 — **롱-숏이 흔들리지 않는 가장 빠른 속도**가 지금 당신의 속도예요. 메트로놈은 냉정한 심판이 아니라 **든든한 동료**예요. 클릭에 앞음을 맞추다 보면, 흔들리던 롱-숏이 저절로 자리를 잡아요. **꾸준함이 곧 정확함**이 되는 순간을 오늘 처음 만나 봐요. 오른손 투핑거로 개방 E를 고르게, 클릭이 당신 손 안에서 튀게 만들어요.

## ② 시각 자료

오늘은 같은 셔플 루트 펄스를 **두 속도**로 굴려요. 먼저 **BPM 60**으로 롱-숏을 안정시키고, 그다음 **BPM 70**으로 살짝 올려 클릭에 얹어요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **준비 — BPM 60**. 개방 E를 8분으로, 롱-숏으로 천천히 굴려 클릭과 앞음을 맞춰요.

```json
{
  "id": "m1.w1.d3.shuffle_pulse_prep_4",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse — prep (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 여덟 개의 8분을 **롱-숏**으로. 각 박의 **앞음**을 클릭에 딱 맞추고 뒷음은 살짝 늦게.

```json
{
  "id": "m1.w1.d3.shuffle_pulse_prep_5",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse — prep (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 재워 두고 롱-숏의 굴림에만 집중해요.

이제 **BPM 70**으로. 같은 패턴을 조금 더 빠르게 — <mark>롱-숏이 흔들리지 않는 선까지만</mark> 올려요.

```json
{
  "id": "m1.w1.d3.shuffle_pulse_metronome_4",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse — metronome (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 속도가 올라도 **앞 길게, 뒤 짧게**는 그대로. 개방 **E**의 굴림이 균일한지 귀로 확인해요.

```json
{
  "id": "m1.w1.d3.shuffle_pulse_metronome_5",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse — metronome (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. **B**는 계속 덮어, 빨라져도 저음이 새지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 **스윙 8분**을 개방 E로 BPM 60에 굴려요. 롱-숏이 살아 있는지 확인하고 클릭을 켜요.

**10~20분 · 두뇌 훈련**
메트로놈 BPM 60에 맞춰 **앞음만** 클릭에 정확히. <mark>클릭과 앞음이 하나로 붙는지</mark>, 그 정렬에만 집중해요.

**20~40분 · 실전**
셔플 루트 펄스를 **BPM 60 → 70**으로 올려 반복해요. 롱-숏이 흔들리면 즉시 속도를 내려요 — **균일함이 먼저**예요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **셔플이 처음부터 끝까지 균일한지** 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 개방 E 셔플 루트 펄스를 메트로놈에 맞춰, 롱-숏이 흔들리지 않고 균일하게, 4현·5현 둘 다 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **빨라지면 균등해져요.** 속도가 오르면 롱-숏이 정박으로 뭉개져요. 흔들리는 순간 BPM을 내려요.
- **클릭을 놓쳐요.** 앞음이 클릭에서 밀리면 전체가 밀려요. 앞음만 클릭에 딱 붙이는 연습을 먼저 해요.
- **손이 뻣뻣해요.** 세게 치려다 굴림이 죽어요. 힘을 빼고 앞음을 살짝 더 길게 얹어요.
- **저음 B 방심(5현).** 굴리는 내내 B는 엄지로 덮어 둬요. 손이 바빠지면 B가 새기 쉬워요.
