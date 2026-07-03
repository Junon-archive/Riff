---
title: "Am↔C 전환 백킹 잼 — C 구간은 E 착지, Am 구간은 C 착지"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — 실전 잼, 코드가 바뀔 때마다 색깔을 갈아입기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 이번 주 배운 걸 전부 하나로 합쳐서 **진짜 음악**으로 만드는 날이거든요. Day 1에서 나란한 조를 이해하고, Day 2에서 밝은 E를 손에 붙이고, Day 3에서 C↔E 착지를 왕복했죠? 오늘은 그걸 드릴이 아니라 **잼(즉흥)** 으로 풀어내요. 백킹 트랙 위에서, 코드가 바뀔 때마다 내 솔로의 색깔이 스스로 바뀌게.

규칙은 딱 두 줄이에요. **코드가 C면 밝은 3도 E로 착지. 코드가 Am이면 어두운 b3 C로 착지.** 이게 이번 주 전체의 결론이에요. 재밌는 건, E는 C 코드의 3도이면서 동시에 Am 코드의 5도고, C는 Am 코드의 b3이면서 C 코드의 루트예요. 즉 이 두 음은 두 코드가 **공유하는 안전지대**라서, 어디에 걸어둬도 안 틀려요. 다만 "어느 쪽으로 착지하느냐"가 사운드의 밝기/어둡기를 결정하는 거죠.

오늘부터는 "스케일을 친다"는 생각을 버리고 **"코드를 노래한다"**는 생각으로 바꾸세요. 지판 모양은 여전히 하나예요. 손은 편하게 그 안에서 놀되, 귀는 계속 백킹의 코드를 따라가고, 프레이즈를 끝낼 땐 그 코드의 착지음(E 또는 C)에 딱 걸어요. 이게 되면 여러분은 이제 "지판 위에서 스스로 노래하는" 첫 문을 연 거예요.

## ② 시각 자료

전환 착지 지도예요. 두 코드의 코드톤을 한 그림에 담았어요. **C 코드**(C·E·G)에선 **E**가 밝은 착지, **Am 코드**(A·C·E)에선 **C**가 어두운 착지. E와 C가 두 코드의 공유 지대라는 것도 라벨로 확인하세요.

```json
{
  "id": "m2.w6.d4.transition_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Transition target map — C chord lands on E (3), Am chord lands on C (b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "G — C(5) / Am(b7)", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "G — C(5) / Am(b7)", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true }
    ]
  }
}
```

전환 잼 예시 프레이즈예요. **1~2마디**는 C 코드 위에서 놀다가 밝은 **E**로 착지, **3~4마디**는 Am 코드 위에서 놀다가 어두운 **C**로 착지. 코드가 바뀌는 순간 착지 색깔이 어떻게 갈리는지 느껴보세요.

```json
{
  "id": "m2.w6.d4.transition_jam_phrase",
  "type": "tab",
  "meta": {
    "title": "C -> Am transition jam — land E over C, land C over Am",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "chord_target_jam",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — R (over C)", "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 3", "highlight": true, "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — 6", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C — R", "role": "root" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 7", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C — R (over C)", "role": "root" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — 6", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "F — 4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "half", "technique": "vibrato", "label": "E = 3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 3, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "E — 5 (over Am)", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — b3", "highlight": true, "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D — 4", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "A — R", "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "G — b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — b3", "highlight": true, "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D — 4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — b7 (over Am)", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — R", "role": "root" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 2", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "C = b3(Am)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 88)**
메트로놈 88에 맞춰 3도 인터벌로 지판을 한 바퀴 풀고, 위 전환 잼 프레이즈를 천천히 훑어요. 아직 백킹은 안 켜요. 손이 C 착지(E)와 Am 착지(C)의 위치를 다시 확인하는 예열이에요.

**10~20분 · 두뇌 훈련 (코드톤 지도 각인)**
메트로놈 끄고, 위 전환 착지 지도에서 **C 코드톤(C·E·G)** 만 짚으며 "밝은 착지는 E" 를 3번 반복, 그다음 **Am 코드톤(A·C·E)** 만 짚으며 "어두운 착지는 C" 를 3번 반복. E와 C가 두 코드에 다 걸쳐 있는 공유 지대라는 걸 손으로 확인하세요. 눈 감고 두 착지음을 바로 짚을 수 있으면 통과.

**20~40분 · 실전 즉흥 (Am ↔ C 전환 백킹 / 84~88 BPM)**
"Am C backing track"으로 하나 틀어요. 오늘은 드릴이 아니라 **자유 잼**이에요. 3도든 4연음이든 편한 대로 굴리되, 규칙은 단 하나: **C 구간은 E로, Am 구간은 C로 프레이즈를 끝맺기.** 매번 같은 리크 말고, 착지점만 지키면서 사이를 자유롭게 채워보세요. 두세 마디를 한 호흡으로 이어 "말하듯이" 부는 걸 목표로.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 잼 1분을 녹음. 다시 들으며 세 가지 체크: (1) 코드가 바뀔 때 **착지 색깔도 바뀌었는지**, (2) E 착지가 진짜 밝게, C 착지가 진짜 어둡게 들리는지, (3) 끝음 비브라토가 떨림 없이 예쁘게 걸렸는지. 이번 주 첫날 녹음이랑 비교해 들어보면 성장이 확 느껴질 거예요.

**오늘의 완료 기준:** 백킹 위에서 코드 전환을 놓치지 않고 C 구간 E 착지 / Am 구간 C 착지를 최소 16마디 유지. 같은 리크 복사가 아니라, 착지만 지키며 사이를 매번 다르게 채우기.

## ④ 팁 / 흔한 실수

- **한 리크만 계속 복사.** 착지점을 지키는 데 성공했다고 매번 똑같은 프레이즈를 붙이면 그건 아직 즉흥이 아니에요. 착지음은 고정, 그리로 가는 **길은 매번 다르게.** 그게 오늘의 진짜 목표예요.
- **코드 전환 놓침.** Am인데 계속 밝은 E로 착지하면 살짝 붕 떠요(틀린 건 아니지만 흐릿). 백킹의 코드 진행을 먼저 외우고, 전환을 한 박 미리 준비하세요.
- **밝기/어둡기를 구분 안 함.** E와 C, 둘 다 안전한 음이라 대충 걸어도 안 틀려요. 하지만 오늘은 "밝게 vs 어둡게"를 **의도적으로** 대비시키는 게 핵심이에요. 감정 색깔을 다르게 느끼며 착지하세요.
- **끝음을 급하게 뗌.** 착지한 E나 C는 반음표만큼 충분히 늘이고 비브라토로 마무리. 그 여운이 "연습"과 "음악"을 가르는 마지막 차이예요.
