---
title: "2코드 위 셔플 루트 — 1주차 완성"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 2코드 위 셔플 루트, 1주차 완성

## ① 이론/설명

1주차 마지막 날이에요. 이번 주 내내 다진 **셔플 루트 펄스(롱-숏)**를 오늘 **이번 주의 완성물**로 굳혀요. 그리고 한 걸음 더 — 같은 굴림을 **두 번째 코드**로 옮겨, 곡에서 실제로 벌어지는 코드 이동을 미리 맛봐요. <mark>한 음의 그루브가, 이제 두 음의 대화로 넓어져요.</mark>

두 번째 코드의 루트는 **A**예요. **E**(4번 현 개방) 옆, **A**(3번 현 개방)로 손을 옮기면 돼요. 두 루트 모두 **개방현**이라 왼손은 여전히 편해요. 한 마디는 **E 셔플**, 다음 마디는 **A 셔플** — 굴림(롱-숏)은 똑같이 유지한 채 <mark>루트만 옆 줄로 바꾸는 거예요.</mark> 부기의 첫 씨앗이에요.

하지만 오늘의 **핵심 완성물**은 여전히 **개방 E 셔플 루트 펄스**예요. 두 코드는 보너스 확장일 뿐, 이번 주 꼭 손에 넣어야 할 건 **BPM 80에서 흔들리지 않는 E 펄스**거든요. <mark>기본이 단단하면 코드 이동은 저절로 따라와요.</mark> 완성물부터 확실히 굳히고, 여유가 되면 A로 넓혀요.

오늘도 **오른손 투핑거**로 롱-숏만 지켜요. **5현**이라면 운지는 4현과 똑같고, 저음 **B**는 엄지로 재워 두면 돼요. 익숙해지면 같은 셔플을 B현 루트로 옮겨 더 묵직한 저음으로도 시험해 봐요. 이번 주 내내 딱 한 음, 개방 E만으로 여기까지 왔어요. **단순한 재료로 그루브를 만드는 힘** — 그게 좋은 베이시스트의 첫 번째 자질이에요. 오늘 그 자질의 씨앗을 손에 심고 **1주차를 웃으며 마무리**해요. 자, 이번 주에 다진 삼각형을 완성물로 마무리해요.

## ② 시각 자료

오늘은 세 가지예요. 먼저 **두 루트(E·A)의 위치**를 지판에서 확인하고, 이번 주의 **완성물(E 셔플 루트 펄스)**을 굳힌 뒤, 같은 굴림을 **두 코드(E-A)**로 넓혀요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **두 루트 지도**. 아래 파랑이 **E**(4번 현 개방), 그 위 파랑이 **A**(3번 현 개방)예요.

```json
{
  "id": "m1.w1.d4.two_chord_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Two-chord roots — E and A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 아래가 루트 **E**(4번 현), 위가 루트 **A**(3번 현)예요. 두 개방현의 위치를 눈에 익혀요.

```json
{
  "id": "m1.w1.d4.two_chord_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Two-chord roots — E and A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 재워 두고 E·A 두 루트에 집중해요.

이제 **이번 주 완성물 — 셔플 루트 펄스**. 개방 E를 8분으로, 롱-숏으로 균일하게 굴려요. <mark>이번 주 꼭 손에 넣을 그 펄스예요.</mark>

```json
{
  "id": "m1.w1.d4.shuffle_root_pulse_4",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 80, 셔플로(롱-숏).** 개방 E를 8분으로 치되 **균등하지 않게** — 앞음 길게, 뒷음 짧게. 트리플렛의 첫·셋째 자리에 얹는 느낌. **5현이라면** 저음 B는 재우거나 B 루트로 더 묵직하게 시험.

```json
{
  "id": "m1.w1.d4.shuffle_root_pulse_5",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 80, 5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어, 셔플을 굴리는 내내 새지 않게 해요.

마지막으로 **두 코드로 확장(E-A)**. 첫 마디는 E 셔플, 둘째 마디는 A 셔플 — <mark>굴림은 그대로, 루트만 옆 줄로.</mark>

```json
{
  "id": "m1.w1.d4.two_chord_shuffle_4",
  "type": "tab",
  "meta": { "title": "Two-chord shuffle root (E-A) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1마디 개방 **E**, 2마디 개방 **A**. 롱-숏은 똑같이 유지하고 루트만 3번 현으로 옮겨요.

```json
{
  "id": "m1.w1.d4.two_chord_shuffle_5",
  "type": "tab",
  "meta": { "title": "Two-chord shuffle root (E-A) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. **B**는 계속 덮어, 코드가 바뀌어도 저음이 새지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 **셔플 루트 펄스**를 개방 E로 BPM 60에 굴려요. 롱-숏이 살아 있는지 확인하고 시작해요.

**10~20분 · 두뇌 훈련**
**두 루트(E·A)**를 번갈아 짚으며 아주 느리게 오가요. <mark>코드가 바뀌어도 롱-숏이 그대로인지</mark>, 그 유지에만 집중해요.

**20~40분 · 실전 (이번 주 완성물)**
핀 고정 셔플 루트 펄스를 **BPM 80**에서 반복해요. 앞음 길게·뒷음 짧게가 흔들리지 않는 게 목표 — **균일함이 먼저**예요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인하고, 여유가 되면 두 코드 확장도 굴려요.

**40~50분 · 녹음/피드백**
30초 녹음해 **셔플이 BPM 80에서 균일한지** 들어봐요. 이번 주 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 개방 E 셔플 루트 펄스를 BPM 80에서 롱-숏이 흔들리지 않고 균일하게, 4현·5현 둘 다 굴릴 수 있다. (1주차 완성!)

## ④ 팁 / 흔한 실수

- **코드 바꿀 때 굴림이 죽어요.** E에서 A로 넘어갈 때 롱-숏이 밋밋해지기 쉬워요. 이동 순간에도 앞음을 길게 지켜요.
- **A가 늦게 나와요.** 손을 3번 현으로 옮기다 박이 밀려요. 두 루트를 아주 느리게 오가며 이동을 먼저 다듬어요.
- **완성물을 건너뛰어요.** 두 코드가 재밌다고 E 펄스를 소홀히 하면 뿌리가 약해져요. 완성물부터 확실히 굳혀요.
- **저음 B 방심(5현).** 코드가 바뀌는 내내 B는 엄지로 덮어 둬요. 손이 바빠지면 B가 새기 쉬워요.
