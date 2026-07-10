---
title: "이번 주 완성물 — 8비트 루트 라인 (2코드)"
dayKey: "m1.w3.d4"
estMinutes: 30
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 8비트 루트 라인, E-A 포켓

## ① 이론/설명

드디어 3주차 마지막 날이에요. 이번 주 내내 조각조각 익힌 걸 하나로 붙여요 — **서브디비전, 킥에 루트 얹기, 8분 라인, 포켓의 쉼, 2코드 전환**까지. 이 다섯을 한 리프에 담으면 이번 주의 완성물, **<mark>8비트 루트 라인</mark>**이에요. 화려하진 않지만, 드럼과 칼같이 맞물려 **곡의 바닥을 통째로 떠받치는** 진짜 락 베이스 라인이죠.

이 라인은 두 코드 위를 흘러요. **1마디는 개방 E(4번현), 2마디는 개방 A(3번현)**를 8분음표 루트로 굴려요. 핵심 장치는 포켓이에요 — 각 마디 **2박 뒤 8분(&)을 딱 하나 비워** 라인에 숨을 줘요. 그 자리에서 **손은 멈추지 않되 소리만 비운다**는 규칙, 어제까지 익힌 그대로예요. 이 작은 빈칸 하나가 밋밋한 8분을 **<mark>그루브가 도는 라인</mark>**으로 바꿔줘요.

오늘 신경 쓸 건 세 가지가 **동시에** 살아 있는 거예요. 8분 루트를 **킥에 정확히 얹고**, 포켓의 **쉼을 또렷이 비우고**, 마디가 바뀌는 **경계에서 밀림 없이 전환**하기. 셋 중 하나만 흔들려도 라인이 헐거워져요. 그러니 **속도부터 올리지 말고**, 이 셋이 모두 맞물릴 때까지 천천히 다져요.

이 라인도 **<mark>4현이든 5현이든 운지가 똑같아요</mark>**. E는 4번현, A는 3번현이라 손 모양이 완전히 동일하죠. 5현이라면 저음 B(5번현)를 엄지로 계속 덮어 재워두면 돼요. 완벽하지 않아도 괜찮아요 — 이 라인은 앞으로도 워밍업으로 계속 만나니, 오늘은 **드럼과 하나 되는 감각**만 손에 남기면 충분해요.

## ② 시각 자료

오늘은 **이번 주의 완성물**을 완성해요. 먼저 <mark>느린 준비 버전으로 두 코드 이동을 다듬고</mark>, 그다음 핀 고정 라인 E→A를 포켓과 함께 돌려요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

**준비 — 느린 루트 라인.** 각 루트를 반 마디씩 길게 눌러, 8분을 얹기 전에 **E→A 이동**부터 매끄럽게 다듬어요.

```json
{
  "id": "m1.w3.d4.eighth_root_line_prep_4",
  "type": "tab",
  "meta": { "title": "8-beat root line prep E-A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 파랑 E(4번현)→A(3번현)를 반 마디씩 길게. 8분을 얹기 전에 두 코드의 이동부터 매끄럽게.

```json
{
  "id": "m1.w3.d4.eighth_root_line_prep_5",
  "type": "tab",
  "meta": { "title": "8-beat root line prep E-A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 운지는 4현과 똑같아요. 저음 B는 엄지로 덮어 재워두세요.

**이번 주 완성물 — 8비트 루트 라인(2코드).** 이제 8분음표로. E(1마디)→A(2마디)를 굴리되, 각 마디 **2박 뒤 8분(&)은 비워** 포켓을 만들어요.

```json
{
  "id": "m1.w3.d4.eighth_root_line_4",
  "type": "tab",
  "meta": { "title": "8-beat root line E-A (pocket) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 드럼(또는 메트로놈)에 정확히. 8분 루트를 킥에 얹고, 각 마디 2박 뒤 8분은 비워 포켓을 만들어요(손은 계속 움직이되 그 자리는 소리 없이). E(1마디)→A(2마디).

```json
{
  "id": "m1.w3.d4.eighth_root_line_5",
  "type": "tab",
  "meta": { "title": "8-beat root line E-A (pocket) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75, 5현.** 음과 위치는 4현과 똑같아요. 저음 B를 계속 재워 두세요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제 익힌 2코드 전환을 BPM 70으로 다시 풀어요. **마디가 바뀔 때 박이 안 밀리는지** 확인하며 손을 데워요.

**7~17분 · 오늘의 기술**
준비 예제(느린 루트 라인)를 BPM 70에서 반복. <mark>E→A 이동이 매끄러운지</mark>부터 다듬은 뒤 8분을 얹어요.

**17~27분 · 적용 (이번 주 완성물)**
8비트 루트 라인을 BPM 70에서 4번 → **포켓의 쉼이 살고 전환이 깔끔하면** BPM 75로 올려 4번. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**27~30분 · 체크**
이번 주 도달한 BPM을 기록하고, 30초 녹음해 **킥과 붙는지, 쉼이 사는지, 전환이 깨끗한지** 들어봐요.

**오늘의 완료 기준:** 8비트 루트 라인(E-A, 2코드)을 투핑거로, 킥에 얹고 각 마디 2박 뒤 쉼을 살려 4현·5현 둘 다 70~75에서 흔들림 없이 반복할 수 있다. (3주차 완성!)

## ④ 팁 / 흔한 실수

- **쉼을 채워버려요.** 2박 뒤 8분에 소리가 새면 포켓이 사라져요. 그 한 타점만 소리를 비우고, 손은 계속 8분으로 저어요.
- **전환에서 박이 밀려요.** A로 넘어갈 때 첫 음이 늦으면 라인이 헐거워져요. E 마지막 음에서 미리 3번현을 준비하세요.
- **속도부터 올려요.** 70에서 셋(킥·쉼·전환)이 안 맞는데 75로 가면 다 무너져요. 이번 주 내내 그랬듯 깨끗함이 먼저예요.
- **저음 B 방심(5현).** 라인이 도는 내내 B는 엄지로 덮어두세요. 완성물에 집중하다 B를 놓치면 저음이 웅웅 새요.
