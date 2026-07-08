---
title: "고음역 3줄 — 펑크의 그 '찰랑' 소리"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — 왜 펑크는 얇은 3줄에서 나는가

## ① 이론/설명

펑크의 그 '찰랑찰랑'하고 청량한 커팅 소리, 두꺼운 6줄 코드에선 절대 안 나와요. 그건 얇은 고음역 **1·2·3번 줄**에서만 나요.

이유는 간단해요. 고음현은 가볍고 선명해서, 커팅하면 유리구슬을 굴리는 듯한 청량한 소리가 나요. 반대로 저음현은 둔탁하고 무거워서, 펑크 특유의 그 반짝임이 안 나요. 그래서 프로들은 아예 4·5·6번 줄을 다 죽여버리고, 위 3줄만 콕콕 때려요. 넓은 붓으로 벽을 칠하는 게 아니라, 얇은 펜으로 점을 찍는 것과 같아요.

오늘 잡을 첫 폼은 **E 메이저 트라이어드**(3줄)예요. 근음은 3번 줄에 있고, 그 위로 3도·5도가 얹혀요(아래 다이어그램). 딱 세 음, 세 줄이죠. 이번 주의 진짜 승부처는 이 **좁은 타깃(3줄)을 정확히 때리는 컨트롤**이에요. 넓게 6줄을 칠 때보다 훨씬 정교한 조준이 필요해요.

3줄만 정확히 때리고 아랫줄은 안 건드리는 게, 처음엔 당연히 어려워요. 옆줄이 자꾸 새어 울리죠. 정상이에요. 오늘은 소리가 좀 지저분해도 괜찮으니, 위 3줄에 오른손을 '착' 얹는 감각만 잡으세요. 이 소리가 바로 나일 로저스로 대표되는, 커팅 펑크의 그 전설적인 소리예요. 얇은 줄 세 개로 이렇게 세련된 소리가 난다는 게, 오늘 처음 쳐보면 신기할 거예요. 6줄을 꽉 잡던 습관에서 벗어나는 첫날이라고 생각하면 돼요.

## ② 시각 자료

오늘의 폼, E 메이저 트라이어드예요. 1·2·3번 줄만 쓰고 4·5·6번은 확실히 뮤트(✕)해요.

**E 메이저 트라이어드(고음 3줄).** 3번 줄이 근음(R), 그 위로 3도·5도. 4·5·6번 줄은 반드시 죽여요.

```json
{
  "id": "m2.w5.d1.emaj_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad (top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

**예제 1 — 3줄 트라이어드 커팅(1마디).** 각 박 머리에 트라이어드를 '착' 울리고 나머진 뮤트 커팅. 위 3줄만 청량하게.

```json
{
  "id": "m2.w5.d1.cut_motor",
  "type": "tab",
  "meta": { "title": "3-string triad cutting (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** 3줄에만 오른손을 얹어 4번. 아랫줄이 새지 않는지 귀로 확인.

**예제 2 — 엇박 커팅(2마디).** 트라이어드를 박이 아니라 '&'에 울려요. 살짝 밀린 커팅이 펑크답게 당겨져요.

```json
{
  "id": "m2.w5.d1.cut_offbeat",
  "type": "tab",
  "meta": { "title": "Triad cutting on the off-beat (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** 엇박의 '착'을 즐기며 4번. 나머진 뮤트로 흘려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. E 메이저 트라이어드를 잡고 16비트 커팅. 아랫줄(4·5·6)이 새지 않는지 집중 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 3줄 조준)**
눈을 감고 위 3줄만 오른손으로 스치는 연습. 아랫줄을 건드리지 않고 3줄에 '착' 얹히는 감각을 각인합니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 68)**
**예제 1**(3줄 커팅)을 BPM 68에서 4번 → **예제 2**(엇박 커팅)로. 익으면 트라이어드를 다른 자리로 옮겨 응용.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 1·2·3번 줄만 깔끔히 났는가 / 아랫줄 잡음이 없는가 / 커팅이 청량한가.

**오늘의 완료 기준:** E 메이저 트라이어드로 위 3줄만 정확히 때려, 아랫줄 잡음 없이 16비트 커팅을 유지할 수 있다.

## ④ 팁 / 흔한 실수

- **아랫줄이 샘.** 오른손이 너무 넓게 쓸었거나 왼손 뮤트가 약해요. 4·5·6번을 확실히 덮으세요.
- **3줄이 다 안 남.** 오른손이 3줄을 다 못 스쳤어요. 세 줄에 '착' 얹히게 각도 조절.
- **손목 대신 팔.** 커팅도 손목 스냅이에요. 1주차 감각 그대로.
- **속도 욕심.** 3줄 조준이 정확해야 소리가 살아요. 느리게, 깔끔하게.
