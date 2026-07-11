---
title: "Am↔C 중심음 전환 드릴 — 4연음으로 두 해결음 왕복"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 손은 안 멈추고, 착지만 C와 E를 왕복

## ① 이론/설명

오늘 왜 이걸 하냐면요, 이제 진짜 실전 감각을 붙일 차례거든요. Day 1에서 "같은 모양, 다른 중심"을 이해했고, Day 2에서 "밝은 3도 E 착지"를 손에 붙였죠? 근데 실제 곡에서는 코드가 **Am → C → Am → C** 이렇게 계속 왔다 갔다 해요. 그때마다 손 모양을 바꿀 시간 같은 건 없어요. 필요한 건 딱 하나, **<mark>착지점을 순간적으로 갈아타는 순발력</mark>**이에요.

그래서 오늘은 왕복 드릴을 해요. 무기는 **<mark>4연음 시퀀스</mark>**(16분음표 4개 묶음). 4연음으로 쉬지 않고 지판을 굴리다가, 코드가 Am이면 어두운 **b3(C)** 로 뚝 떨어지고, 코드가 C면 밝은 **3도(E)** 로 사뿐히 내려앉아요. 손가락 운지는 **<mark>1도 안 바꿔요.</mark>** 오직 "지금 어디로 퇴근할지"만 순간 판단하는 거예요.

```json
{
  "id": "m2.w6.d3.two_landing_map",
  "type": "scale_shape",
  "meta": {
    "title": "Two landing notes — C (Am b3 / C R) and E (C 3 / Am 5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "scale": "C major (relative to A natural minor)",
    "tempoBpm": 88
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "D (2/4)", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "F (4/b6)", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "G (5/b7)", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "D (2/4)", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "F (4/b6)", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "G (5/b7)", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true }
    ]
  }
}
```

여기 진짜 중요한 포인트가 있어요. 아래 두 마디를 보면 **음표 위치가 거의 똑같아요.** 손은 완전히 같은 궤도를 돌아요. 그런데 1번 마디는 C에서 멈추고(Am의 어둠), 2번 마디는 E에서 멈춰요(C의 밝음). 이 "<mark>같은 손 · 다른 착지</mark>"를 반복하다 보면, 나중에 백킹에서 코드가 휙 바뀌어도 손이 알아서 착지점을 갈아타게 돼요. 오늘은 그 회로를 뚫는 날이에요.

## ② 시각 자료

<mark>두 해결음 지도</mark>예요. 같은 지판 위에서 **C**(Am 구간의 착지 = b3 / C 구간에선 R)와 **E**(C 구간의 착지 = 밝은 3도 / Am 구간에선 5)를 강조했어요. 이 두 점을 왕복한다고 생각하세요.

```json
{
  "id": "m2.w6.d3.two_landing_map",
  "type": "scale_shape",
  "meta": {
    "title": "Two landing notes — C (Am b3 / C R) and E (C 3 / Am 5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "scale": "C major (relative to A natural minor)",
    "tempoBpm": 88
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "D (2/4)", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "F (4/b6)", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "G (5/b7)", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "D (2/4)", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "F (4/b6)", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "G (5/b7)", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true }
    ]
  }
}
```

왕복 드릴 본체예요. **1번 마디**는 4연음으로 굴리다가 Am의 어두운 **C(b3)** 에 착지, **2번 마디**는 <mark>똑같은 손 궤도</mark>로 굴리다가 C의 밝은 **E(3도)** 에 착지. 두 마디 음 위치가 얼마나 닮았는지 보세요.

```json
{
  "id": "m2.w6.d3.center_shift_4note",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "4-note sequence drill — resolve to C (Am b3) then E (C bright 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (R in Am)", "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (b6)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C = b3(Am)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (6 in C)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "E = 3(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 88)**
메트로놈 88에 맞춰 4연음 시퀀스로 손을 풀어요. 한 박에 16분음표 4개("딴다다다")가 클릭 하나에 정확히 떨어지게. 아직 착지 전환은 신경 쓰지 말고 <mark>알갱이가 뭉치지 않는 것</mark>만. 손가락이 안 따라오면 82로 잠깐 낮췄다 다시.

**10~20분 · 두뇌 훈련 (착지 전환 = C↔E)**
메트로놈은 켜두고, 위 두 마디를 **번갈아** 쳐요. 1마디(C 착지) → 2마디(E 착지) → 다시 1마디… 이렇게 무한 반복. 착지 직전에 머릿속으로 "어둠(C)" / "밝음(E)"을 미리 외치고 손이 그쪽으로 가게. 손 궤도는 똑같은데 <mark>마지막 한 음만 갈아타는 감각</mark>을 3분 안에 자동화시키면 통과.

```json
{
  "id": "m2.w6.d3.center_shift_4note",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "4-note sequence drill — resolve to C (Am b3) then E (C bright 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (R in Am)", "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (b6)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C = b3(Am)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (6 in C)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "E = 3(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20~40분 · 실전 즉흥 (Am ↔ C 전환 백킹 / 84~88 BPM)**
"Am C vamp backing track" 하나 틀어요. 규칙: 4연음으로 쉬지 않고 굴리다가, **<mark>코드 소리를 귀로 듣고</mark>** Am이면 C에, C면 E에 착지. <mark>코드가 바뀌는 그 순간을 놓치지 않는 게 핵심</mark>이에요. 처음엔 늦게 반응해도 괜찮아요. 반응 속도가 오늘 하루 만에 확 빨라져요.

**40~50분 · 녹음/피드백 (권장)**
30초 녹음 후 재생. 체크 포인트: **<mark>코드가 바뀔 때 내 착지음도 같이 바뀌었는지.</mark>** Am 구간인데 E로 착지했거나, C 구간인데 C로만 착지했다면 아직 반 박자 늦은 거예요. 헷갈린 지점만 재생 속도를 늦춰 반복해 들어보고, 다음엔 그 코드 전환을 한 박 미리 준비하세요.

**오늘의 완료 기준:** BPM 88에서 두 마디 왕복 드릴을 끊김 없이. 백킹 위에서 코드 전환에 맞춰 C↔E 착지를 8마디 이상 정확히 갈아타기.

## ④ 팁 / 흔한 실수

- **착지 전환이 반 박 늦음.** 가장 흔한 실수예요. 코드가 바뀐 걸 듣고 나서 착지점을 정하면 이미 늦어요. 백킹의 코드 진행을 미리 외워서 **한 박 먼저** 다음 착지점을 준비하세요.
- **긴장해서 손 궤도까지 바꿈.** 착지만 바꾸면 되는데 당황해서 운지 전체를 흔들면 4연음이 무너져요. "손은 그대로, 마지막 음만" — 이 주문을 계속.
- **C 착지와 E 착지 소리를 구분 못 함.** 둘 다 그냥 "멈춤"으로 처리하면 오늘 연습 효과가 반이에요. C는 쓸쓸하게, E는 화사하게 — 착지할 때 그 감정 색깔을 의식적으로 다르게 느끼세요.
- **속도부터 올림.** 88이 답답해도 참으세요. 전환 정확도가 100%가 되기 전에 속도를 올리면 늦은 반응이 굳어버려요. 정확도 먼저, 속도는 이번 주 잼에서 자연스럽게.
