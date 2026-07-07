---
title: "주간 통합 — 4마디, 손이 멈추지 않는 모터"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 멈추지 않는 손, 펑크의 뼈대

## ① 이론/설명

이번 주 결승선이에요. 오늘은 새 걸 배우는 게 아니라, 사흘간 쌓은 오른손 감각을 **하나로 이어 붙이는** 날이에요.

지금까지 배운 걸 정리하면 세 가지예요. 첫째, 오른손은 16비트로 쉬지 않고 흔들리는 **모터**다(Day 1). 둘째, 그 흔들림은 팔이 아니라 **손목 스냅**에서 나온다(Day 2). 셋째, 다운·업을 균일하게 유지한 채 **칠 자리만 골라** 소리를 낸다(Day 3). 오늘은 이 셋을 한 번에 굴려요.

목표는 **4마디를 손이 한 번도 멈추지 않고** 뮤트 16비트로 채우는 거예요. 백킹 트랙(드럼·베이스)이 있으면 그 위에, 없으면 메트로놈에 맞춰서요. 중간에 손이 멈칫하거나, 마디가 바뀔 때 흔들림이 끊기지 않는지가 관건이에요.

아직 진짜 코드도, 화려한 악센트도 없지만 괜찮아요. 이 '멈추지 않는 손'이야말로 펑크의 뼈대거든요. 다음 주엔 여기에 왼손 고스트 노트를 얹어 드럼 같은 리듬을 만들 거예요. 오늘 이 모터가 편안해졌다면, 여러분은 이미 펑크 기타의 가장 중요한 절반을 손에 넣은 거예요. 나머지 절반은 이 흔들림 위에 색을 칠하는 일뿐이니까요. 한 주 동안 소리보다 흔들림에 집중해 온 여러분, 정말 잘 왔어요. 오늘 4마디가 편안해지는 그 순간, 펑크의 문이 여러분에게 처음으로 열립니다.

## ② 시각 자료

3일간의 감각을 한 판에 올려요. 예제 1은 순수 지구력, 예제 2는 이번 주의 결과물인 첫 그루브예요.

**예제 1 — 연속 16비트 모터(2마디).** 쉼표 없이 꽉 찬 16분음표. 손이 멈추지 않는 지구력 테스트예요.

```json
{
  "id": "m1.w1.d4.motor_2bar",
  "type": "tab",
  "meta": { "title": "Continuous 16th motor (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 2마디 연속, 손목만. 편해지면 두 번 이어 4마디로. 마디 경계에서 흔들림이 끊기지 않게.

**예제 2 — Week 1 그루브(2마디).** 박과 앤에 소리, 나머지는 빈 피킹. 이번 주에 배운 모든 걸 담은 첫 그루브예요.

```json
{
  "id": "m1.w1.d4.week1_groove",
  "type": "tab",
  "meta": { "title": "Week 1 groove — eighth feel, 2 bars", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70.** 백킹 트랙 위에서 4번 이상 반복. 드럼과 내 스트로크가 칼같이 맞물리는지 느껴보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. Day 1~3에서 한 뮤트 스크래치·빈 피킹을 가볍게 복습. 손목만 쓰는지 다시 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 끊김 없는 연결)**
4마디를 세면서 마디가 바뀌는 순간에 손이 멈칫하지 않는지 확인. 마디 경계를 '넘어가는' 흔들림에 집중해요.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 70)**
**예제 1**(연속 2마디 모터)로 지구력을 다지고 → **예제 2**(Week 1 그루브)를 백킹 트랙 위에서 4번 이상. 없으면 메트로놈으로.

**40~50분 · 녹음/셀프 피드백 (권장)**
4마디 두 바퀴 녹음 후 체크: 손이 한 번도 멈추지 않았는가 / 마디 경계에서 박이 밀리지 않았는가 / 다운·업이 균일한가.

**오늘의 완료 기준:** 뮤트 16비트 모터를 4마디 연속으로, 손이 멈추지 않고 박이 밀리지 않게 유지할 수 있다. (1주차 완성!)

## ④ 팁 / 흔한 실수

- **마디 경계에서 멈칫.** 마디가 바뀔 때 손이 잠깐 서면 박이 밀려요. 경계를 '넘어가는' 흔들림에 집중.
- **지치면 팔로 도망.** 힘들어지면 손목이 굳고 팔이 나서요. 지치기 전에 힘을 빼세요.
- **완벽주의.** 아직 코드도 악센트도 없어요. 오늘은 '멈추지 않는 손'만 되면 100점이에요.
- **녹음 생략.** 내 손이 정말 안 멈췄는지는 녹음이 제일 정직해요. 꼭 들어보세요.
