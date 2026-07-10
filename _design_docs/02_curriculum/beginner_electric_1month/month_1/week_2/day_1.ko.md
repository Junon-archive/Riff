---
title: "두 손을 하나로 — 싱크와 손가락 독립"
dayKey: "m1.w2.d1"
estMinutes: 30
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 두 손을 하나로

## ① 이론/설명

1주차엔 오른손과 왼손을 따로따로 깨웠죠. 이번 주 첫날 목표는 딱 하나예요 — <mark>두 손을 한 점에 겹치기</mark>. 왼손이 프렛을 짚는 순간과 오른손 피크가 줄을 때리는 순간이, 메트로놈 한 번 위에 정확히 포개지게 하는 거예요. 이 둘이 조금만 어긋나도 소리가 지저분해지고, 딱 붙으면 느려도 프로처럼 또렷하게 들려요.

손가락 독립을 위해 오늘은 크로매틱을 살짝 비틀어요. 어제까지 친 1-2-3-4 대신, 오늘은 <mark>1-3-2-4</mark> 순서로 짚어요. 2번과 3번 손가락이 서로 자리를 바꾸는 이 순간이, 손가락마다 힘을 따로 쓰는 연습이 돼요. 중지·약지가 제일 말을 안 듣는 손가락이라, 여기만 매끄러워지면 나머지는 훨씬 수월해져요. 손가락 하나를 움직일 때 옆 손가락이 딸려 오지 않도록, 각 손가락을 따로 노는 스위치처럼 다뤄요.

방법은 생각보다 단순해요. 아주 느린 메트로놈에 맞춰, 왼손이 프렛을 누르는 그 찰나에 오른손도 같이 떨어뜨려요. '누르고 나서 친다'가 아니라 '누르는 동시에 친다'가 핵심이에요. 처음엔 반 박자씩 밀리는 게 당연하니까, 속도는 잠시 잊고 두 손이 겹치는 감각만 챙기면 돼요. 이 싱크가 한번 잡히면, 내일 배울 줄 넘기도 금요일의 첫 리프도 전부 이 위에 얹혀요. 손이 자라는 게 눈에 보이는 한 주가 될 거예요.

## ② 시각 자료

오늘은 왼손과 오른손을 같은 박에 얹는 연습이에요. 6번 줄에서 1-3-2-4를 먼저 익히고, 익숙해지면 <mark>두 줄까지</mark> 늘려요.

**예제 1 — 6번 줄 1-3-2-4.** 한 박에 두 음씩, 아주 느리게. 짚는 순간과 치는 순간을 겹쳐요.

```json
{
  "id": "m1.w2.d1.sync_1324_low_e",
  "type": "tab",
  "meta": { "title": "Two-hand sync — 1-3-2-4 on the low E", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 6, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 6, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 6, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60.** 짚는 순간과 치는 순간을 한 점에 겹쳐요. 2·3번 손가락이 바뀌는 자리를 특히 천천히.

**예제 2 — 두 줄로 확장.** 6번 줄 1-3-2-4 다음 5번 줄 1-3-2-4. 줄이 바뀌어도 두 손은 계속 붙어 있어요.

```json
{
  "id": "m1.w2.d1.sync_1324_two_string",
  "type": "tab",
  "meta": { "title": "Two-hand sync — 1-3-2-4 across two strings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 6, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 5, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 5, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 5, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60.** 5번 줄로 넘어가도 싱크 유지. 줄만 바뀌고 두 손은 그대로 붙여요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
메트로놈을 BPM 60에 맞추고, 1주차 얼터네이트 1-2-3-4를 6번 줄에서 손 풀듯 반복해요. 두 손이 만나던 감각을 되살리는 시간이에요.

**7~17분 · 오늘의 기술**
예제 1(1-3-2-4)을 아주 느리게. 짚는 순간과 치는 순간을 <mark>한 점에 겹치는</mark> 데만 집중해요. 2·3번 손가락이 바뀌는 자리를 특히 천천히.

**17~27분 · 적용**
예제 2(두 줄 1-3-2-4)를 BPM 60에서 4번 반복 → 어긋남 없이 되면 한 칸 올려요. 소리가 밀리면 다시 내려요.

**27~30분 · 체크**
오늘 도달한 BPM을 적고, 원하면 30초 녹음해 두 손이 딱 붙는지 들어봐요.

**오늘의 완료 기준:** 1-3-2-4 변형 크로매틱을 두 손 어긋남 없이 60에서 또박또박 칠 수 있다.

## ④ 팁 / 흔한 실수

- **누르고 나서 치기.** 짚은 걸 확인한 뒤 치면 항상 반 박자 늦어요. 누르는 동작과 치는 동작을 한 몸처럼.
- **손가락 힘 과다.** 2·3번을 바꿀 때 꽉 누르면 손이 금방 굳어요. 소리 날 만큼만 가볍게.
- **속도 욕심.** 60에서 두 손이 붙는 게 90에서 어긋나는 것보다 훨씬 나아요. 빠르기는 저절로 와요.
- **손 아픔 걱정.** 아직 손끝·손바닥이 뻐근한 건 정상이에요. 아프면 잠깐 쉬었다 다시 잡아요.
