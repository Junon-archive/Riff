---
title: "루트 라인 — 온음표로 진행 걷기"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 루트만으로, 진행을 온음표로 따라 걷기

## ① 이론/설명

2주차에 온 걸 환영해요. 지난주엔 코드마다 밟아도 되는 **코드톤(R·3·5·b7)**을 손에 담았죠. 이번 주 한 문장은 이거예요 — <mark>워킹은 처음부터 다 채우지 않아요.</mark> **루트만(온음) → 루트-5도(2분음) → 코드톤 4분음**으로 밀도를 한 단계씩 올려가요. 걷기 전에 서고, 서기 전에 앉는 것처럼요. 오늘은 그 첫 단계, **루트 하나만 온음표로** 밟으며 진행을 따라 걸어요.

루트만 밟는다니 심심해 보여도, 이게 워킹의 **뼈대**예요. 매 마디 첫 박에 그 코드의 **집(루트)**에 정확히 착지하는 감각 — 이게 잡히면 나머지 음은 나중에 얼마든지 얹을 수 있어요. 오늘 걸을 진행은 **F7 → Bb7 → F7 → C7**, 한 마디에 루트 하나씩이에요. <mark>매 마디 1박에 루트로 착지</mark>하는 것만 지키면 오늘은 성공이에요.

지판에서 세 집의 위치를 볼게요. 4현 기준 **루트 F는 4번현 1프렛**, **Bb는 3번현 1프렛**, **C는 3번현 3프렛**이에요. 세 자리가 서로 가까이 모여 있죠? 손을 크게 움직이지 않고도 세 코드를 오갈 수 있다는 뜻이에요. 온음표는 한 마디를 꽉 채워 울리니, **왼손은 음을 끝까지 붙잡고** 오른손은 투핑거로 또렷하게 한 번만 뜯어요.

먼저 오늘의 출발점, **루트 F** 한 자리를 확실히 잡아둬요.

```json
{
  "id": "m1.w2.d1.f_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F root — home of F7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 루트 F는 4번현 1프렛. 오늘 진행의 출발점이자 집이에요.

```json
{
  "id": "m1.w2.d1.f_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F root — home of F7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현이 하나 더 있을 뿐이에요.

**5현**을 써도 루트 위치는 4현과 똑같아요. 현 번호도 4번(E)~1번(G) 그대로고, 맨 아래 저음 B가 한 줄 더 있을 뿐이에요. 오늘은 저음 B는 잠시 덮어 두고, **세 집의 위치**를 눈과 손에 익히는 데 집중해요.

## ② 시각 자료

이제 오늘 걸을 **루트 라인**을 눈에 담아요. 먼저 세 코드의 집 — **F·Bb·C 루트**가 지판 어디에 모여 있는지 확인해요. <mark>세 집이 서로 손 닿는 거리에 모여 있어요.</mark> 그다음 온음표로 진행을 따라 걷는 라인을 소리로 들어봐요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w2.d1.roots_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots — F, Bb, C — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 세 파랑이 각 코드의 집 — F(4번현 1프렛)·Bb(3번현 1프렛)·C(3번현 3프렛)이에요.

```json
{
  "id": "m1.w2.d1.roots_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots — F, Bb, C — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 내려가 더 낮은 루트도 잡아볼 수 있어요.

이제 이 세 집을 진행 순서대로 이어요. **F7 → Bb7 → F7 → C7**, 한 마디에 루트 하나씩 온음표로 꽉 채워 울려요. <mark>매 마디 첫 박이 정확한 루트</mark>인지에만 집중하면 돼요.

```json
{
  "id": "m1.w2.d1.root_walk_4",
  "type": "tab",
  "meta": { "title": "Root line — whole notes over F7-Bb7-F7-C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** F(4번현 1프렛)-Bb(3번현 1프렛)-F-C(3번현 3프렛)를 한 마디에 하나씩 온음표로. 다음 마디까지 끊기지 않게 울려요.

```json
{
  "id": "m1.w2.d1.root_walk_5",
  "type": "tab",
  "meta": { "title": "Root line — whole notes over F7-Bb7-F7-C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
F·Bb·C 세 루트를 지판에서 손끝으로 짚어 확인해요. 아직 음정보다 **정확한 착지**가 먼저예요.

**10~20분 · 두뇌 훈련**
진행 **F7 → Bb7 → F7 → C7**을 입으로 코드 이름을 부르며, 각 루트를 손끝으로 미리 짚어봐요. 아래 준비 예제로 F와 Bb 두 집만 느리게 오가요.

```json
{
  "id": "m1.w2.d1.root_prep_4",
  "type": "tab",
  "meta": { "title": "Root prep — F to Bb whole notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 63, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 63, 4현.** F와 Bb 두 루트만 아주 느리게 오가요. 온음표를 마디 끝까지 붙잡는 감각을 익혀요.

```json
{
  "id": "m1.w2.d1.root_prep_5",
  "type": "tab",
  "meta": { "title": "Root prep — F to Bb whole notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 63, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 63, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

**20~40분 · 실전 (오늘의 완성물)**
위 **루트 라인**을 **BPM 70**에서 반복해요. 한 마디에 루트 하나, <mark>온음표가 다음 마디까지 끊기지 않고</mark> 이어지게 울려요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **매 마디 첫 박**이 정확한 루트에 떨어지는지 들어봐요. 흔들리는 마디가 있으면 거기만 따로 반복해요.

**오늘의 완료 기준:** F7 → Bb7 → F7 → C7 진행을 루트 온음표로, BPM 70에서 매 마디 첫 박에 정확히 착지하며 4현·5현 둘 다 걸을 수 있다.

## ④ 팁 / 흔한 실수

- **첫 박이 흔들려요.** 온음표라 여유로워 보여도, 마디 첫 박이 늦으면 진행 전체가 밀려요. 메트로놈 1박에 정확히 루트를 얹어요.

```json
{
  "id": "m1.w2.d1.c_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C root — home of C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** C7의 집(루트 C)은 3번현 3프렛. F와 달리 3번현에서 출발해요.

```json
{
  "id": "m1.w2.d1.c_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C root — home of C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 내려가 더 낮은 C도 찾아볼 수 있어요.

- **음을 일찍 놓아요.** 온음표는 한 마디를 꽉 채워야 해요. 다음 루트로 옮기기 직전까지 왼손을 붙잡아요.
- **루트 위치를 헷갈려요.** F와 C는 현이 달라요 — F는 4번현, C는 3번현이에요. 출발 현을 먼저 확인해요.
- **5현 저음 B 방심.** 루트에 집중하다 B를 건드리면 저음이 새요. 안 쓰는 B는 늘 덮어 두세요.
</content>
</invoke>
