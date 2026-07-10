---
title: "드럼 위에서 2코드 전환하기"
dayKey: "m1.w3.d3"
estMinutes: 30
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 2코드 전환, 루트 따라가기

## ① 이론/설명

어제까지 한 코드 위에서 8분 루트 라인을 굴렸죠. 그런데 진짜 곡은 한 코드에만 머물지 않아요 — **몇 마디마다 코드가 바뀌고**, 그때마다 베이스의 루트도 함께 옮겨가야 해요. 오늘의 목표는 **<mark>코드가 바뀔 때 루트를 따라 옮겨 앉기</mark>**, 그것도 드럼이 도는 와중에 흔들림 없이예요.

오늘 쓰는 두 코드는 **E와 A**예요. **E의 루트는 4번현 개방, A의 루트는 3번현 개방**이죠. 곡이 E에서 A로 넘어가면 왼손·오른손이 **한 줄 위로(4번현→3번현)** 살짝 건너가면 돼요. 전환이 일어나는 자리는 **마디와 마디의 경계**, 즉 새 마디의 첫 박이에요. 이 첫 박에 **<mark>새 루트가 킥과 함께 딱</mark>** 떨어지는 게 핵심이죠.

전환에서 가장 흔한 실수는 **박이 밀리는 것**이에요. 코드를 바꾸느라 손이 허둥대면 새 마디 첫 음이 늦어져요. 그래서 오늘도 2주차 뮤팅이 힘을 발휘해요 — **<mark>앞 코드의 마지막 음을 재우면서 동시에 손끝만 이웃 줄로</mark>** 건너가는 거죠. 손을 크게 휘두르지 말고, **오른손 엄지도 함께 옮겨** 안 치는 줄을 덮어요. 드럼의 킥은 코드가 바뀌어도 쉬지 않으니, 나도 **박을 한 순간도 놓치지 않고** 새 루트로 이어가요.

이 전환도 **4현이든 5현이든 손 모양이 똑같아요**. E는 4번현, A는 3번현이라 두 베이스 모두 같은 자리죠. 5현이라면 이동하는 내내 저음 B(5번현)를 엄지로 덮어, 전환에 정신 팔린 사이 B가 새지 않게 지켜요. 오늘은 속도보다 **전환의 깨끗함** 하나만 손에 남기면 충분해요.

## ② 시각 자료

오늘은 **2코드 전환을 두 단계로** 익혀요. 먼저 각 코드를 한 마디씩 느리게 오가며 <mark>이음매를 다듬고</mark>, 그다음 8분 루트로 E→A를 이어 붙여요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

**예제 1 — 전환 준비(4분).** 1마디는 개방 E 4번, 2마디는 개방 A 4번. 마디가 바뀌는 순간에 루트가 매끄럽게 갈리는지 느껴요.

```json
{
  "id": "m1.w3.d3.two_chord_prep_4",
  "type": "tab",
  "meta": { "title": "Two-chord change prep E-A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 파랑 E(4번현)→A(3번현). 2마디 첫 박에서 앞 E를 재우고 손끝만 한 줄 위로 건너가요.

```json
{
  "id": "m1.w3.d3.two_chord_prep_5",
  "type": "tab",
  "meta": { "title": "Two-chord change prep E-A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 운지는 4현과 똑같아요. 저음 B는 엄지로 덮어 재워두세요.

**예제 2 — 8분으로 2코드.** 이제 각 코드를 8분음표 여덟 번씩. E 한 마디를 굴리다 **다음 마디 첫 박에서 A로** 밀림 없이 넘어가요.

```json
{
  "id": "m1.w3.d3.two_chord_eighths_4",
  "type": "tab",
  "meta": { "title": "Two-chord eighth line E-A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75, 4현.** E(8분 8개)→A(8분 8개). 전환의 이음매에서 **박이 밀리지 않게**, 새 루트를 킥에 딱 얹어요.

```json
{
  "id": "m1.w3.d3.two_chord_eighths_5",
  "type": "tab",
  "meta": { "title": "Two-chord eighth line E-A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75, 5현.** 음과 위치는 4현과 똑같아요. 빨라져도 저음 B가 새지 않게 엄지로 덮어두세요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제 익힌 포켓 8분 루트를 BPM 70으로 다시 풀어요. **8분이 고르고 쉼이 사는지** 확인하며 손을 데워요.

**7~17분 · 오늘의 기술**
예제 1(전환 준비)을 BPM 70에서 반복. <mark>E→A 이음매에서 박이 밀리지 않는지</mark>에만 집중해, 앞 음을 재우며 손끝만 건너가요.

**17~27분 · 적용**
예제 2(8분 2코드)를 BPM 70에서 4번 → 깔끔하면 BPM 75로 올려 4번. **전환에서 첫 박이 늦지 않는지** 확인해요.

**27~30분 · 체크**
오늘 도달한 BPM을 적고, 30초 녹음해 **코드가 바뀔 때 박이 안 밀리는지** 들어봐요.

**오늘의 완료 기준:** E와 A 두 코드를 드럼 위에서, 마디가 바뀔 때 박을 밀지 않고 4현·5현 둘 다 70~75에서 깨끗하게 전환할 수 있다.

## ④ 팁 / 흔한 실수

- **전환에서 박이 밀려요.** 코드를 바꾸느라 손이 허둥대면 새 마디 첫 음이 늦어요. 앞 마디 마지막 음에서 미리 다음 줄을 준비하세요.
- **손을 크게 휘둘러요.** 팔 전체를 움직이면 느리고 부정확해요. 손끝만 이웃 줄로 살짝 건너가요.
- **전환 순간 뮤팅을 놓쳐요.** 앞 코드가 계속 울리면 두 루트가 뭉개져요. 이동 직전에 반드시 앞 음을 재워요.
- **저음 B 방심(5현).** 전환에 정신 팔리면 B가 새기 쉬워요. 엄지는 이동 중에도 늘 B 위에 얹어두세요.
