---
title: "줄을 넘어도 안 끊기게 — 스트링 크로싱"
dayKey: "m1.w2.d2"
estMinutes: 30
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 줄을 넘어도 피킹은 계속

## ① 이론/설명

어제 두 손이 한 점에 붙는 감각을 잡았다면, 오늘은 그 손을 <mark>옆 줄로 데려가요</mark>. 리프는 한 줄에만 머물지 않거든요. 줄과 줄 사이를 오갈 때도 얼터네이트(다운-업)가 끊기지 않는 것, 그게 오늘의 전부예요. 어제 배운 싱크가 살아 있으면 오늘은 생각보다 쉽게 넘어가요. 오른손이 옆 줄로 옮겨 앉는 건 아주 작은 움직임이라, 겁먹을 필요가 하나도 없어요.

줄을 넘는 방식은 두 가지예요. 두 줄 사이를 파고들 듯 넘는 <mark>인사이드 피킹</mark>과, 바깥으로 감싸며 넘는 아웃사이드 피킹이죠. 이름은 어렵지만 몸으로는 금방 익어요. 다운으로 친 다음 업으로 옆 줄을 집는지, 업으로 친 다음 다운으로 넘는지의 차이일 뿐이에요. 오늘은 둘 다 느리게 맛만 봐요. 지금은 어느 쪽이 인사이드고 아웃사이드인지 외울 필요도 없어요 — 그냥 손이 끊기지 않게만 굴리면 돼요.

핵심은 피크가 줄 하나 두께만큼만 움직인다는 거예요. 크게 휘두르면 박이 밀리고 옆 줄까지 긁혀요. 손목은 거의 제자리에 두고, 피크 끝만 살짝 이웃 줄로 옮겨 앉혀요. 줄이 바뀌는 그 이음매에서 잠깐 멈칫하는 건 당연하니까, 멈추지 않고 얼터네이트를 계속 굴리는 데만 신경 써요. 이 감각이 붙으면 진짜 리프가 손에 들어오기 시작해요. 금요일에 칠 리프도 결국 이 줄 넘기의 연속이거든요. 어깨와 팔꿈치는 가만히 두고 오직 손목과 피크 끝만 일한다고 생각하면 훨씬 편해져요.

## ② 시각 자료

먼저 두 줄만 오가며 피킹이 끊기지 않게 만들어요. 익으면 <mark>세 줄로</mark> 넓혀요.

**예제 1 — 두 줄 왕복.** 6번 줄(2프렛)과 5번 줄(개방)을 번갈아. 6번은 다운, 5번은 업으로 방향을 고정해요.

```json
{
  "id": "m1.w2.d2.string_cross_two",
  "type": "tab",
  "meta": { "title": "String crossing — two strings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 얼터네이트.** 6번은 다운, 5번은 업으로 규칙을 고정해요. 이음매에서 멈추지 않기.

**예제 2 — 세 줄 지그재그.** 6번-5번-4번 줄을 개방으로 오가요. 왼손은 쉬고 오른손만 이사 다니는 느낌이에요.

```json
{
  "id": "m1.w2.d2.string_cross_three",
  "type": "tab",
  "meta": { "title": "String crossing — three strings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "scale" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60.** 6-5-4를 지그재그로. 오른손만 이사 다니는 느낌, 팔은 고정해요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
BPM 60에서 어제의 1-3-2-4를 6번 줄에서 반복해 두 손을 깨워요. 싱크 감각을 먼저 되살려요.

**7~17분 · 오늘의 기술**
예제 1(두 줄 왕복)을 아주 느리게. 6번은 다운, 5번은 업 — <mark>피킹 방향을 고정</mark>한 채 이음매만 매끄럽게.

**17~27분 · 적용**
예제 2(세 줄 지그재그)를 BPM 60에서 4번 반복 → 끊김 없이 되면 한 칸 올려요. 옆 줄을 긁으면 다시 천천히.

**27~30분 · 체크**
도달한 BPM을 적고, 30초 녹음해 줄이 바뀌는 지점에서 소리가 끊기지 않는지 들어봐요.

**오늘의 완료 기준:** 두세 줄을 넘나드는 패턴을 얼터네이트가 끊기지 않게 60에서 칠 수 있다.

## ④ 팁 / 흔한 실수

- **팔로 넘기기.** 팔을 크게 휘두르면 옆 줄을 긁고 박이 밀려요. 손목은 제자리, 피크 끝만 옮겨요.
- **이음매에서 멈추기.** 줄 바뀔 때 손을 멈추면 그 순간 박이 밀려요. 얼터네이트를 계속 굴려요.
- **피킹 방향 뒤섞기.** 6번 다운·5번 업처럼 규칙을 정해두지 않으면 매번 헷갈려요. 방향을 몸에 새겨요.
- **속도 먼저.** 60에서 안 끊기는 게 먼저예요. 빠르기는 그다음에 붙여요.
