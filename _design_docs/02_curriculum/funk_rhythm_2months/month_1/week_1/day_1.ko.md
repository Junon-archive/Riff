---
title: "16비트 모터 시동 — 한 박을 넷으로 쪼개기"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — 펑크의 심장은 왼손이 아니라 오른손이다

## ① 이론/설명

펑크가 좀처럼 '꿀렁'거리지 않는다면, 범인은 왼손 코드가 아니라 십중팔구 오른손이에요. 펑크의 8할은 오른손 리듬이거든요. 그 심장이 바로 **16비트 모터**예요.

16비트는 한 박을 네 조각으로 쪼갠 거예요. 입으로 "원-이-앤-아(1-e-&-a)"라고 세어 보세요. 한 박이 네 개, 4박이면 열여섯 개 — 그래서 16비트예요. 오른손은 이 그리드 위에서 **아래로 내려갈 때(다운)와 올라올 때(업)** 를 번갈아 걸치며 흔들려요. 다운-업-다운-업이 저절로 16분음표에 맞아떨어지죠.

가장 중요한 감각은 이거예요. **오른손은 재봉틀이나 시계추처럼 절대 멈추지 않아요.** 음을 실제로 치든 안 치든, 팔뚝이 아니라 손목이 쉬지 않고 아래위로 흔들립니다. 이 흔들림이 곧 그루브의 엔진이에요.

처음엔 손이 뻑뻑하고 박이 뭉개지는 게 당연해요 — 그게 정상이에요. 오늘은 깨끗한 소리를 내려는 게 아니라, 왼손을 줄 위에 살짝 얹어 음정을 죽인 채 '치키치키' 흔들림만 몸에 새깁니다. 이 모터 하나만 자리 잡으면, 앞으로 배울 어떤 펑크 리듬도 이 흔들림 위에 얹기만 하면 되니까요. 오늘 하루는 소리 하나 없이 손만 흔들다 끝나도 성공이에요. 그 '멈추지 않는 손'이야말로 앞으로 두 달을 버티게 해줄 진짜 힘이거든요.

## ② 시각 자료

오늘의 무대는 소리가 아니라 **흔들림**이에요. 아래 두 예제 모두 왼손으로 줄을 살짝 눌러 음을 죽인 뮤트 상태로, 오른손 16비트만 봅니다. (색이 없는 담백한 음표인 건, 지금은 음정이 아니라 리듬이 주인공이라서예요.)

**예제 1 — 16비트 모터(1마디).** 한 박을 넷으로 쪼갠 16분음표 열여섯 개. 다운-업-다운-업으로 쉬지 않고 흔들어요.

```json
{
  "id": "m1.w1.d1.motor_1bar",
  "type": "tab",
  "meta": { "title": "16th-note muted motor (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 65.** 왼손은 살짝 뮤트, 오른손은 손목으로만. 4번 반복하며 입으로 "치키치키"를 같이 세보세요. 소리보다 흔들림의 균일함이 목표.

**예제 2 — 2마디 지구력.** 마디가 바뀌어도 손이 멈추지 않게. 1마디와 2마디 사이에 손을 멈추는 순간이 없어야 해요.

```json
{
  "id": "m1.w1.d1.motor_2bar",
  "type": "tab",
  "meta": { "title": "16th-note muted motor (2 bars, endurance)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 65.** 2마디를 한 호흡처럼. 마디 경계에서 흔들림이 끊기면 실패예요. 편해지면 4마디로 늘려보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
메트로놈 BPM 60~70. 왼손을 줄에 살짝 얹어 뮤트한 채, 아무 자리에서나 16비트 빈 피킹·뮤트 스크래치를 기계적으로 반복해요. 소리 말고 흔들림에만 집중.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 박 쪼개기)**
메트로놈에 맞춰 입으로 "원-이-앤-아"를 소리 내어 세면서 손을 흔들어요. 한 박이 정확히 네 조각으로 나뉘는지 입과 손을 맞춰봅니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 65)**
**예제 1**(1마디 모터)을 BPM 65에서 4번 반복 → 익으면 **예제 2**(2마디 지구력)로 늘려요. 마디가 바뀌어도 손이 멈추지 않는 게 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 체크: 다운·업 음량이 균일한가 / 박이 밀리지 않았는가 / 중간에 손이 멈추지 않았는가.

**오늘의 완료 기준:** 왼손 뮤트 상태로 4박 16비트를 손이 멈추지 않고 흔들 수 있고, 입으로 "1-e-&-a"를 세며 박을 넷으로 쪼갤 수 있다.

## ④ 팁 / 흔한 실수

- **팔뚝으로 치기.** 큰 근육으로 16비트를 치면 금방 지치고 박이 뭉개져요. 내일 배울 손목 스냅의 예고편 — 팔은 최대한 가만히.
- **손이 멈추는 습관.** 소리 낼 때만 손을 움직이면 박이 밀려요. 음이 없어도 손은 계속 흔들려야 해요.
- **속도 욕심.** 60~70에서 균일한 게 100에서 뭉개지는 것보다 훨씬 프로다워요. 빠르기는 나중에 저절로 따라와요.
- **어깨에 힘.** 힘이 들어가면 흔들림이 뻑뻑해져요. 어깨·팔을 툭 떨어뜨리고 시작하세요.
