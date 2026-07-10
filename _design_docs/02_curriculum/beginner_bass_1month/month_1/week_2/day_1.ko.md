---
title: "한 손가락 한 프렛 — 낮은 루트 짚기(E·A현)"
dayKey: "m1.w2.d1"
estMinutes: 30
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 한 손가락 한 프렛, 낮은 루트 짚기

## ① 이론/설명

1주차엔 오른손 투핑거와 줄 이동을 익혔죠. 이번 주는 드디어 왼손이 주인공이에요. 오늘은 **<mark>한 손가락에 한 프렛씩</mark>** 맡겨, 낮은 자리에서 편하게 음을 짚는 법을 익혀요. 프렛을 하나 누를 때마다 **소리가 반음씩 올라가요** — 이 규칙만 알면 지판 위 어디든 길을 찾을 수 있어요.

오늘의 진짜 목표는 **<mark>루트(근음)를 눈 감고도 찾는 것</mark>**이에요. 루트는 그 마디의 이름이 되는 가장 중요한 음이고, 베이스의 밥줄이에요. 가장 굵은 E줄(4번현)부터 외워요. **개방이 E, 1프렛이 F, 3프렛이 G**. 손끝을 프렛 바로 뒤에 곧게 세워 짚고, 1프렛은 검지, 3프렛은 약지로 — 한 손가락이 한 프렛씩 맡는 거예요. 이렇게 손가락마다 자리를 정해두면, 굳이 지판을 안 봐도 손이 알아서 음을 찾아가요.

그다음은 A줄(3번현)이에요. 개방이 A, 2프렛이 B, 3프렛이 C. E줄과 똑같은 방식으로, **프렛 수만큼 음이 올라가요**. **<mark>음 이름과 손 위치를 한 몸으로</mark>** 외워두면, 나중에 어떤 곡을 만나도 루트를 바로 짚을 수 있어요. 오늘은 딱 이 몇 음만, 버징 없이 또렷하게 짚어봐요. E줄과 A줄만 익혀도, 웬만한 곡의 루트는 거의 다 이 두 줄 낮은 자리에서 만나게 돼요.

E줄과 A줄은 **<mark>4현이든 5현이든 같은 줄(4번·3번현)</mark>**이라, **손 모양이 완전히 똑같아요**. 5현은 그 아래 저음 B가 하나 더 있을 뿐이고, 오늘은 안 쓰니 오른손 엄지로 살짝 덮어 재워두세요. 어떤 베이스를 들고 있든, 오늘 손이 외우는 건 'E줄과 A줄의 낮은 루트들'이에요.

## ② 시각 자료

오늘은 **E줄과 A줄의 낮은 루트**를 하나씩 짚어봐요. 아래 예제는 <mark>개방 → 프렛음 → 개방</mark>으로 오르내리며 음 이름을 손에 새기는 코스예요. 각 예제를 **4현·5현 두 버전**으로 나란히 실었어요.

**예제 1 — E줄 루트 이름(E·F·G).** 개방 E, 1프렛 F, 3프렛 G를 한 박에 하나씩. 1프렛은 검지, 3프렛은 약지로 짚어요.

```json
{
  "id": "m1.w2.d1.e_string_names_4",
  "type": "tab",
  "meta": { "title": "Root names on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "finger": 1, "label": "F", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 3, "label": "G", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 개방 E → F(1프렛) → G(3프렛) → 개방 E. 초록으로 표시된 F·G를 손끝으로 짚고, 파랑 개방 E와 소리 크기를 맞춰요.

```json
{
  "id": "m1.w2.d1.e_string_names_5",
  "type": "tab",
  "meta": { "title": "Root names on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "finger": 1, "label": "F", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 3, "label": "G", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 운지는 4현과 똑같아요. 안 쓰는 저음 B는 엄지로 덮어 조용히 두세요.

**예제 2 — A줄 루트 이름(A·B·C).** 개방 A, 2프렛 B, 3프렛 C. A줄에서도 프렛 수만큼 음이 올라가는 걸 손으로 느껴요.

```json
{
  "id": "m1.w2.d1.a_string_names_4",
  "type": "tab",
  "meta": { "title": "Root names on A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "finger": 2, "label": "B", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "finger": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 개방 A → B(2프렛) → C(3프렛) → 개방 A. 초록으로 표시된 B·C를 짚을 때, 안 치는 E줄은 엄지로 덮어 조용히 두세요.

```json
{
  "id": "m1.w2.d1.a_string_names_5",
  "type": "tab",
  "meta": { "title": "Root names on A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "finger": 2, "label": "B", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "finger": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** A줄 운지는 4현과 같아요. 저음 B는 엄지로 계속 덮어 재워두세요 — 4현엔 없는 5현만의 숙제예요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제까지 한 개방 E·A 투핑거를 BPM 60으로 다시 풀어요. **오른손 감각을 되살린 뒤 왼손**을 얹습니다.

**7~17분 · 오늘의 기술**
예제 1(E줄 E·F·G)을 아주 느리게 짚어요. <mark>프렛 바로 뒤를 곧게 누르기</mark>에만 집중해, **지지직 소리가 사라질 때까지** 자리와 각도를 다듬어요.

**17~27분 · 적용**
예제 1(E줄)을 BPM 60에서 4번 → 편해지면 예제 2(A줄)로 넘어가 4번. **버징이 섞이면 손끝을 프렛 쪽으로** 살짝 옮겨요.

**27~30분 · 체크**
오늘 도달한 BPM을 적어두고, 원하면 30초 녹음해 E·F·G 세 음이 모두 또렷한지 들어봐요.

**오늘의 완료 기준:** E줄의 낮은 루트 E·F·G를 한 손가락 한 프렛으로, 60~70에서 버징 없이 또렷하게 짚을 수 있다.

## ④ 팁 / 흔한 실수

- **프렛 한가운데 누르기.** 프렛과 프렛 사이 한복판을 누르면 소리가 죽거나 지지직대요. 손끝을 프렛 바로 뒤에 붙이세요.
- **한 손가락으로 다 짚기.** 검지 하나로 여기저기 옮기면 느리고 부정확해져요. 1프렛은 검지, 2프렛은 중지, 3프렛은 약지로 나눠 맡겨요.
- **음 이름을 건너뛰기.** 손 위치만 외우면 금방 잊어요. 짚을 때마다 'E, F, G' 이름을 소리 내어 함께 외우세요.
- **저음 B 재우기(5현).** 안 쓰는 B가 함께 울리면 소리가 지저분해져요. 엄지로 덮어두는 습관을 오늘부터 들여요.
