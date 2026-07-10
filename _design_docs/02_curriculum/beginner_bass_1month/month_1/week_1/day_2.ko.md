---
title: "이웃 줄로 건너가기 — E↔A 줄 이동과 엄지"
dayKey: "m1.w1.d2"
estMinutes: 30
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — 이웃 줄로 건너가기

## ① 이론/설명

어제는 개방 E 하나로 손을 풀었죠. 오늘은 이웃 줄로 한 발 넘어가요. 오늘의 목표는 딱 하나 — **<mark>E와 A 두 줄을 매끄럽게 오가기</mark>**예요. 베이스 라인은 대부분 줄을 넘나들며 만들어지니, 이 **줄 이동**이 편해지면 앞으로 배울 게 훨씬 쉬워져요. 어렵지 않아요, 어제 하던 투핑거를 줄만 바꿔 이어가는 거예요.

핵심은 **<mark>줄이 바뀌어도 검지-중지 교대를 멈추지 않는 것</mark>**이에요. E에서 검지로 시작했다면 A로 넘어가서도 그다음은 중지 — 손가락은 계속 번갈아 걷고, 줄만 옆으로 옮겨 앉아요. 오른손 전체를 크게 움직이지 말고, 두 손가락 끝이 이웃 줄로 살짝 건너가는 정도면 충분해요. 처음엔 줄이 바뀌는 순간 박이 삐끗하는 게 당연한데, 그 **이음매**가 바로 오늘 다듬을 지점이에요.

이제 엄지가 할 일이 하나 생겨요. E(4번현)를 칠 땐 엄지를 픽업에 얹지만, A(3번현)를 칠 땐 엄지를 <mark>E 줄 위로 옮겨</mark> 얹어요. 그러면 안 치는 E 줄이 저절로 **뮤팅**돼서 조용해져요. 이렇게 엄지가 낮은 줄을 따라다니며 덮는 걸 **'무빙 앵커(따라다니는 엄지)'**라고 불러요. 지금은 어색해도, 며칠이면 손이 알아서 따라오니 걱정 마세요.

5현이라면 낮은 줄이 하나 더 있으니 엄지가 덮을 게 늘어나요 — A를 칠 땐 **엄지로 E와 저음 B를 함께 덮어** 두 줄을 재워요. 위치와 운지는 4현과 완전히 똑같고, 4현엔 없는 **B 줄 뮤팅**만 더 신경 쓰면 나머지는 그대로예요. 어떤 베이스든, 오늘 손이 배우는 건 '치는 줄은 울리고, 안 치는 줄은 재우기'예요.

## ② 시각 자료

오늘은 **E(4번현)와 A(3번현) 두 개방현**을 오가요. 아래 예제는 <mark>천천히 한 번씩 건너가기</mark>부터 8분음표로 촘촘히 오가기까지예요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

**예제 1 — 4분음표 줄 이동.** E→A→E→A, 한 박에 하나씩 또박또박 건너가요.

```json
{
  "id": "m1.w1.d2.cross_ea_quarter_4",
  "type": "tab",
  "meta": { "title": "E–A string crossing — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** E와 A를 번갈아. 줄이 바뀌어도 검지-중지 교대는 멈추지 마세요.

```json
{
  "id": "m1.w1.d2.cross_ea_quarter_5",
  "type": "tab",
  "meta": { "title": "E–A string crossing — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 운지는 4현과 같아요. A를 칠 땐 엄지로 E와 저음 B를 함께 덮어 두 줄을 재워요.

**예제 2 — 8분음표.** E를 네 번, A를 네 번. 줄이 바뀌는 딱 한 지점만 매끄럽게 하면 돼요.

```json
{
  "id": "m1.w1.d2.cross_ea_eighth_4",
  "type": "tab",
  "meta": { "title": "E–A string crossing — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 앞 네 번 E, 뒤 네 번 A. 4번째에서 5번째로 넘어가는 이음매만 또렷하게.

```json
{
  "id": "m1.w1.d2.cross_ea_eighth_5",
  "type": "tab",
  "meta": { "title": "E–A string crossing — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 4현과 음이 똑같아요. A로 넘어갈 때 엄지도 함께 E·B 쪽으로 옮겨 두 줄을 재워요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제 한 개방 E 투핑거를 BPM 60으로 다시 풀어요. **검지-중지 음량**이 같은지부터 되살립니다.

**7~17분 · 오늘의 기술**
예제 1(줄 이동)을 BPM 60에서 반복. <mark>손가락 교대를 유지한 채</mark> **E와 A를 건너가는 감각**만 익혀요.

**17~27분 · 적용**
예제 2(8분음표)를 BPM 60에서 4번 → **이음매가 매끄러우면** BPM 65로 한 칸 올려 4번. 박이 밀리면 다시 60으로 내려와요.

**27~30분 · 체크**
오늘 도달한 BPM을 적어두고, 원하면 30초 녹음해 줄이 바뀌는 지점에서 소리가 끊기지 않는지 들어봐요.

**오늘의 완료 기준:** E·A 개방을 투핑거로 번갈아, 줄이 바뀌어도 음량과 박이 흔들리지 않게 60~70에서 칠 수 있다.

## ④ 팁 / 흔한 실수

- **줄 넘어갈 때 손 멈추기.** 줄이 바뀔 때 손을 멈추면 그 순간 박이 밀려요. 교대를 유지한 채 옆으로 옮겨 앉기.
- **엄지를 안 옮기기.** 엄지가 그대로면 안 치는 낮은 줄이 같이 울려 소리가 지저분해져요. 낮은 줄을 따라 엄지도 옮겨요.
- **오른손 크게 움직이기.** 팔을 크게 흔들면 박이 뭉개져요. 두 손가락 끝만 이웃 줄로 건너가면 충분해요.
- **속도 욕심.** 60에서 이음매가 깨끗하지 않은데 65로 가면 다 무너져요. 클린이 먼저, 빠르기는 나중이에요.
