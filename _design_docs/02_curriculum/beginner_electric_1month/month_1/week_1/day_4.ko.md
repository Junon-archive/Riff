---
title: "주간 통합 — 스파이더 크로매틱으로 손 완성"
dayKey: "m1.w1.d4"
estMinutes: 30
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 한 주를 하나로, 스파이더 크로매틱

## ① 이론/설명

드디어 한 주의 마지막 날, 오늘은 그동안 조각조각 익힌 걸 하나로 붙여요. 다운피킹, 크로매틱 1-2-3-4, 얼터네이트 — 이 셋을 한 리프에 담으면 그게 바로 <mark>스파이더 크로매틱</mark>이에요. 손가락이 지판 위를 **거미처럼** 기어 다닌다고 붙은 이름이죠. 이름은 거창하지만, 사실 어제까지 친 **1-2-3-4**를 줄만 바꿔가며 이어붙인 것뿐이에요. 이미 손이 다 아는 동작이니 겁먹지 않아도 돼요.

새로 더해지는 건 딱 하나, <mark>줄 이동</mark>이에요. 6번 줄에서 1-2-3-4를 치고 **5번 줄**로, 다시 4번·3번·2번·1번 줄로 내려가요. 여기서 오른손은 '한 줄 옆으로 살짝 옮겨 앉는' 감각만 익히면 돼요. **얼터네이트를 계속 유지한 채** 줄만 바꾸는 거예요. 오른손 피크가 줄 하나 두께만큼만 위치를 옮기면 되니, 움직임은 생각보다 아주 작아요.

처음엔 줄이 바뀌는 순간 박이 삐끗하는 게 당연해요 — 그 이음매가 바로 오늘 다듬을 지점이에요. 이 리프 하나를 **6번 줄에서 1번 줄까지** <mark>버징 없이 끝까지</mark> 칠 수 있으면, 그건 이번 주에 배운 모든 게 손에 붙었다는 <mark>확실한 증거</mark>예요. 만약 오늘 1번 줄까지 다 못 가도 괜찮아요. **두세 줄**만 매끄러워도 손은 확실히 자라고 있는 거예요. 한 주 동안 만든 손, 오늘 눈으로 확인해요.

## ② 시각 자료

먼저 **줄 이동**만 떼어내 연습해요. 6번 줄 1-2-3-4 다음 5번 줄 1-2-3-4 — 이 <mark>첫 이음매</mark>만 매끄러워지면 나머지는 같은 원리의 반복이에요.

```json
{
  "id": "m1.w1.d4.spider_prep_2string",
  "type": "tab",
  "meta": { "title": "Spider prep — string crossing (6th to 5th)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 5, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 5, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 5, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60.** 5번 줄로 넘어가는 순간에도 얼터네이트를 멈추지 마세요. 줄만 바뀌고 왕복은 그대로.

이제 이번 주의 완성물, **스파이더 크로매틱**이에요. 6번 줄부터 1번 줄까지 상행한 뒤 마지막 마디에서 방향을 틀어 <mark>2번 줄로 되돌아와요</mark>. 반복하면 자연스럽게 이어지는 순환 리프예요.

```json
{
  "id": "m1.w1.d4.spider_chromatic",
  "type": "tab",
  "meta": { "title": "Spider chromatic 1-2-3-4", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 5, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 5, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 5, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 4, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 3, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 3, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 3, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 3, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 2, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 2, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 1, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 1, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 1, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 1, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 1, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 1, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 1, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 1, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 2, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 2, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 2, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60~70, 얼터네이트(다운-업)로.** 각 음을 또박또박, 손끝을 세워 버징 없이. 6→1줄 상행 후 M4에서 방향을 틀어 하행으로 돌아온다(반복 시 자연스럽게 이어짐). 손가락은 항상 **한 손가락 한 프렛**.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제 한 크로매틱 얼터네이트(1-2-3-4)를 6번 줄에서 BPM 60으로. 양손이 만나는 감각을 되살려요.

**7~17분 · 오늘의 기술**
예제 1(줄 이동 연습)을 BPM 60에서 반복. **6번→5번 줄**로 넘어가는 <mark>이음매만 집중</mark>해서 매끄럽게.

**17~27분 · 적용 (이번 주 완성물)**
스파이더 크로매틱을 BPM 60에서 4번 반복 → 버징 없이 되면 한 칸(BPM 65)만 올려 4번, 여유가 있으면 70까지. **6→1줄**이 <mark>한 호흡처럼</mark> 이어지는 게 목표.

**27~30분 · 체크**
이번 주 도달한 최고 BPM을 기록하고, 30초 녹음해 줄이 바뀌는 지점에서 소리가 끊기지 않는지 확인해요.

**오늘의 완료 기준:** 스파이더 크로매틱을 6번 줄에서 1번 줄까지 버징 없이 60~70에서 클린하게 칠 수 있다. (1주차 완성!)

## ④ 팁 / 흔한 실수

- **줄 이동에서 멈추기.** 줄이 바뀔 때 손을 멈추면 그 순간 박이 밀려요. 얼터네이트를 유지한 채 옮겨 앉기.
- **속도 먼저 올리기.** 60에서 6→1줄이 깨끗하지 않은데 65로 가면 이음매가 다 무너져요. 클린이 먼저예요.
- **손가락 미리 떼기.** 다음 줄로 갈 생각에 현재 음을 짧게 끊으면 소리가 뚝뚝 끊겨요. 각 음을 끝까지 울려요.
- **한 주 몰아치기.** 오늘 다 안 돼도 괜찮아요. 이 리프는 다음 주에도 워밍업으로 계속 만나니, 조급해하지 마세요.
