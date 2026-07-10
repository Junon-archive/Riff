---
title: "루트에서 루트로 — E·A·G 끊김 없이 이동"
dayKey: "m1.w2.d3"
estMinutes: 30
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 루트에서 루트로, E·A·G 이동

## ① 이론/설명

어제 뮤팅으로 소리를 끊는 법을 배웠으니, 오늘은 그 기술을 이동에 얹어요. 실제 베이스 라인은 한 루트에 머물지 않고 **계속 움직여요**. 오늘의 목표는 **<mark>루트에서 루트로 끊김 없이 옮겨 앉기</mark>** — E, A, G 세 루트를 매끄럽게 오가는 거예요.

오늘의 세 루트는 이래요. **E는 4번현 개방, A는 3번현 개방, G는 4번현 3프렛(약지).** 개방 두 개와 프렛음 하나가 섞여 있죠. 이동의 핵심은 어제 배운 뮤팅이에요 — **<mark>다음 음을 짚기 직전 앞 음을 재워</mark>**, 두 음이 겹쳐 뭉개지지 않게 하는 거예요. 그래야 루트가 바뀔 때마다 소리가 또렷하게 갈려요. 루트가 또렷이 갈려야 드럼과 박이 딱 맞아, 밴드 전체의 바닥이 흔들리지 않아요.

이동할 때 손을 크게 휘두르지 마세요. **<mark>손 전체가 아니라 손끝만</mark>** 이웃 줄로 살짝 건너가고, 오른손 엄지도 낮은 줄을 따라 함께 옮겨 안 치는 줄을 덮어요. 특히 G(4번현 3프렛)에서 A(3번현 개방)로 갈 땐, 왼손을 재우면서 동시에 오른손 엄지가 E줄을 덮어야 깨끗해요. 손을 아낄수록 빨라졌을 때도 박이 밀리지 않으니, 지금부터 **작게 움직이는 습관**을 들여요.

이 세 루트는 **<mark>4현이든 5현이든 짚는 자리가 똑같아요</mark>**. E·G는 4번현, A는 3번현이니 **손 모양이 완전히 동일**하죠. 5현이라면 저음 B를 엄지로 덮은 채 움직여야 하니, 이동 중에도 B가 새지 않게 신경 쓰면 돼요. 오늘 이 세 루트를 또박또박 이을 수 있으면, 내일 완성할 리프의 절반은 이미 손에 있는 거예요.

## ② 시각 자료

오늘은 **E·A·G 세 루트**를 오가요. 먼저 <mark>한 박에 하나씩 천천히</mark> 이동하고, 그다음 두 음씩 묶어 이어 봐요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

**예제 1 — 루트 이동(4분음표).** E(4번현 개방) → A(3번현 개방) → G(4번현 3프렛) → E. 한 박에 하나씩, 루트가 바뀔 때마다 앞 음을 재워요.

```json
{
  "id": "m1.w2.d3.root_move_4",
  "type": "tab",
  "meta": { "title": "Root move E-A-G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 파랑으로 표시된 세 루트를 또박또박 이어요. G(4번현 3프렛)는 약지로 짚고, 다음 음으로 갈 때 앞 음을 재워 뭉개짐이 없게.

```json
{
  "id": "m1.w2.d3.root_move_5",
  "type": "tab",
  "meta": { "title": "Root move E-A-G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 짚는 자리는 4현과 똑같아요. 이동하는 내내 저음 B는 엄지로 덮어, 줄을 옮겨도 B가 새어 울리지 않게 하세요.

**예제 2 — 두 음씩 묶어 이동(8분음표).** E 두 번, A 두 번, G 두 번, E 두 번. 같은 루트를 두 번씩 눌러 이동을 조금 더 여유 있게 익혀요.

```json
{
  "id": "m1.w2.d3.root_move_eighth_4",
  "type": "tab",
  "meta": { "title": "Root move E-A-G eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 각 루트를 두 번씩. 두 번째 음이 끝나면 바로 재워, 다음 루트로 넘어가는 이음매를 깔끔하게.

```json
{
  "id": "m1.w2.d3.root_move_eighth_5",
  "type": "tab",
  "meta": { "title": "Root move E-A-G eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 음과 위치는 4현과 똑같아요. 5현이라면 저음 B를 엄지로 계속 덮은 채, 루트를 옮길 때마다 엄지도 함께 따라 움직여요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제 한 치고 재우기(뮤팅)를 BPM 60으로 다시 풀어요. **소리를 끊는 감각**을 되살린 뒤 이동을 얹습니다.

**7~17분 · 오늘의 기술**
예제 1(루트 이동)을 아주 느리게 반복. <mark>루트가 바뀌는 이음매</mark>에서 앞 음이 깨끗이 재워지는지에만 집중해요. **특히 G→A 이동을 여러 번.**

**17~27분 · 적용**
예제 2(두 음씩 묶어 이동)를 BPM 60에서 4번 → **이음매가 매끄러우면** BPM 65로 한 칸 올려 4번. 뭉개지면 다시 예제 1로 돌아가요.

**27~30분 · 체크**
오늘 도달한 BPM을 적어두고, 30초 녹음해 루트가 바뀔 때마다 음이 겹치지 않고 또렷이 갈리는지 들어봐요.

**오늘의 완료 기준:** E·A·G 세 루트를 투핑거로, 앞 음을 재워 뭉개짐 없이 60~70에서 또렷하게 이을 수 있다.

## ④ 팁 / 흔한 실수

- **앞 음을 안 재우기.** 다음 루트를 짚어도 앞 음이 계속 울리면 두 음이 겹쳐 지저분해져요. 이동 직전에 반드시 앞 음을 끊어요.
- **손을 크게 휘두르기.** 팔을 크게 움직이면 박이 밀려요. 손끝만 이웃 줄로 건너가면 충분해요.
- **엄지를 두고 가기.** 줄을 옮기는데 엄지가 그대로면 안 치는 줄이 함께 울려요. 엄지도 낮은 줄을 따라 옮겨요.
- **G에서 서두르기.** 프렛음 G가 개방보다 어렵다고 급하게 넘기면 버징이 나요. G만 따로 여러 번 짚어 익힌 뒤 이어요.
