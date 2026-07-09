---
title: "m7 완성 + 통합 — 한 근음 위에서 네 가지 성격 순환"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 두 스위치(3도·7도)로 Maj·m·7·m7 자유자재

## ① 이론/설명

드디어 이번 주의 결승선이에요. 오늘은 새로운 걸 배우는 게 아니라, 지금까지의 두 스위치를 **<mark>하나로 합치는</mark>** 날이에요. 여기까지 온 것만으로 이미 큰 산 하나를 넘은 거예요.

- **3번 줄 = 3도 스위치.** 4프렛(3, 밝음) ↔ 3프렛(b3, 어둠).
- **4번 줄 = 7도 스위치.** 5프렛(R) ↔ 3프렛(b7, 긴장).

오늘의 새 코드 **m7**은 이 두 스위치를 **<mark>둘 다 내린</mark>** 상태일 뿐이에요. 즉 마이너(b3)에 도미넌트의 b7까지 얹은 것. G에서 3번 줄 3프렛(b3) + 4번 줄 3프렛(b7) = **Gm7**. 어둡지만 긴장이 부드럽게 풀린, 재즈·소울·시티팝의 그 <mark>세련된 색</mark>이에요.

두 스위치를 표로 그려 보면 이렇게 딱 4칸이 나와요:

```json
{
  "id": "m1.w1.d4.gm7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm7 — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

- **Maj** = 3도 그대로 · 7도 그대로 (3번 줄 4, 4번 줄 5)
- **m** = 3도 내림 · 7도 그대로 (3번 줄 3, 4번 줄 5)
- **7** = 3도 그대로 · 7도 내림 (3번 줄 4, 4번 줄 3)
- **m7** = 3도 내림 · 7도 내림 (3번 줄 3, 4번 줄 3)

놀랍지 않아요? 네 가지 코드가 결국 **<mark>손가락 두 개의 상하 조합</mark>**일 뿐이에요. 외울 모양이 네 개가 아니라, 스위치가 딱 두 개인 거죠. 오늘은 이걸 한 근음 위에서 자유롭게 순환하면서, "<mark>코드는 외우는 게 아니라 조립하는 것</mark>"이라는 이번 주의 결론을 손에 완전히 새깁니다.

## ② 시각 자료

두 스위치를 다 내린 **Gm7(E 폼)**. 초록 두 개가 각각 **b3(어둠)**과 **b7(긴장 해소)** — <mark>m7의 정체를 만드는 두 음</mark>이에요.

```json
{
  "id": "m1.w1.d4.gm7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm7 — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**예제 1 — 성격 결정음 투어.** 한 근음 위에서 3(장3도) → b3(단3도) → b7(단7도)을 차례로 짚어요. 이 세 음의 조합이 코드 이름을 만든다는 걸 귀로 정리합니다.

```json
{
  "id": "m1.w1.d4.character_tones_line",
  "type": "tab",
  "meta": {
    "title": "Character tones tour (3 / b3 / b7) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 72,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

▶ **BPM 72.** "루트 → 장3도 → 단3도 → 단7도." 앞의 두 음이 밝음↔어둠을, 마지막 b7이 긴장을 담당해요. 4번 반복.

**예제 2 — Gm7 컴핑 그루브 + 통합 순환.** 근음 → b7 고스트 → b3 순으로 m7의 색을 리듬에 담았어요.

```json
{
  "id": "m1.w1.d4.gm7_comp",
  "type": "tab",
  "meta": {
    "title": "Gm7 comp groove — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 80,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "technique": "palm_mute", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80, 4번 반복.** 근음-b7-b3의 그루브를 익혔으면, **통합 순환**으로: 같은 자리에서 3번 줄(3↔b3)·4번 줄(R↔b7) 손가락만 바꿔 **G → Gm → G7 → Gm7** 을 한 마디씩 순환해요.

**예제 3 — 코드 전체 컴핑.** 예제 2와 같은 리듬으로, 근음·b7·b3 자리마다 낱음 대신 Gm7 코드 전체를 울려요.

```json
{
  "id": "m1.w1.d4.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord comp (Gm7) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80.** 예제 2와 같은 그루브, 이번엔 코드 전체로. 근음-b7-b3 컴핑이 익으면 이걸로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
G → Gm → G7 → Gm7 을 4박씩 순서대로. 3번·4번 줄 손가락만 위아래로 움직이고, 근음(6번 줄 3프렛)은 절대 안 떼요. <mark>네 코드 모두 여섯 줄이 깨끗한지</mark> 확인.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 두 스위치)**
<mark>"3도 내렸나? 7도 내렸나?"</mark> 두 질문만으로 네 코드를 구분해요. 누가 "Gm7!" 하면 3도·7도 둘 다 내린 자리를 눈 감고 바로 잡기. **예제 1**로 세 결정음을 소리 내어 확인.

**20~40분 · 실전 반주 (예제 2 + 통합 순환 / 75~85 BPM)**
**예제 2 Gm7 그루브를 BPM 80에서 4번 반복** → 익으면 **통합 순환**(G→Gm→G7→Gm7, 한 마디씩)으로 확장. 나아가 근음만 5번 줄로 옮겨(C 계열) 똑같이 순환해 보세요. 오늘은 "<mark>네 성격이 손가락 두 개의 조합</mark>"이라는 감각을 완성하는 날.

**40~50분 · 녹음/셀프 피드백 (권장)**
통합 순환 한 바퀴를 30초 녹음. 체크: 코드가 바뀔 때 **<mark>엉뚱한 줄이 딸려 죽지 않는지</mark>**, 네 성격이 각각 또렷이 구분되는지.

**오늘의 완료 기준:** 한 근음 위에서 G → Gm → G7 → Gm7 을 3번·4번 줄 손가락만으로 끊김 없이 순환한다. (이번 주 완성!)

## ④ 팁 / 흔한 실수

- **네 코드를 각각 '다른 모양'으로 외우기.** 그러면 8개, 16개 코드에서 또 무너져요. 항상 "3도·7도 두 스위치의 조합"으로 기억하세요.
- **순환할 때 근음 놓기.** 6번 줄 근음은 닻이에요. 이게 흔들리면 전부 흔들려요. 순환 내내 근음은 눌린 채로.
- **m7을 '마이너'로만 듣기.** m7은 마이너보다 부드럽고 열려 있어요. b7이 긴장을 살짝 풀어주기 때문. 그 '세련된 이완'을 즐기세요.
- **속도 욕심.** 순환이 뭉개지면 BPM을 70으로 낮춰도 좋아요. 이번 주는 정확한 조합이 속도보다 100배 중요해요.
