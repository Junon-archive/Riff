---
title: "시퀀스 속도 상승 (80~90 BPM) + 정확도 유지"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — 속도를 올리되, 알갱이는 잃지 않기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 이틀 동안 4연음과 3도 인터벌로 블록을 씹었으니, 이제 슬슬 **<mark>손에 속도를 넣어줄</mark>** 차례예요. 그런데 여기서 많은 분이 한 번 멈칫해요. 속도를 올리면 소리가 뭉개지기 쉬운데, 뭉개진 걸 "빨라졌다"고 착각하기 쉽거든요. 사실 그건 빨라진 게 아니라 **흐트러진** 거예요.

그래서 오늘의 규칙은 딱 하나예요. **<mark>또렷함이 무너지는 순간이 네 최고 속도다</mark>.** BPM 65에서 시작해서 5씩 올리다가, 16분음표 알갱이가 서로 붙어 뭉개지기 시작하는 그 직전 BPM — 거기가 오늘 너의 진짜 실력이에요. 그걸 존중하세요. 억지로 90을 치는 것보다 78에서 완벽한 게 훨씬 강해요.

그리고 오늘은 **<mark>하행</mark>**을 본격적으로 넣어요. 지금까지 상행만 했죠? 사람 손은 이상하게 상행은 되는데 하행에서 무너져요. 특히 4연음을 위에서 아래로 굴리면 피킹 방향이 헷갈리거든요. 이 하행을 정복해야 블록을 <mark>"양방향 자유"</mark>로 쓸 수 있어요. 그래야 즉흥할 때 위로도 아래로도 도망칠 곳이 생겨요.

속도 훈련의 목표는 손가락 자랑이 아니에요. **<mark>빠른 패시지 속에서도 C(♭3)와 A(근음)를 정확히 조준</mark>**할 수 있는 컨트롤을 만드는 거예요. 속도는 수단, 타겟 착지가 목적. 이거 잊지 마세요.

## ② 시각 자료

블록은 그대로. 오늘은 이 안에서 <mark>위아래로 자유롭게 굴릴</mark> 거예요.

```json
{
  "id": "m1.w1.d3.pentatonic_box1_ref",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (reference)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

오늘의 주인공, <mark>4연음 **하행** 시퀀스</mark>예요. 1번 줄 꼭대기에서 6번 줄로 굴러 내려와요. 피킹 방향에 특히 집중.

```json
{
  "id": "m1.w1.d3.four_note_descending",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "4-note (16th) descending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 1, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 65 → 계단 상승)**
4연음 상행/하행을 BPM 65로 각 1회 몸풀기. 그다음 **<mark>70 → 75 → 80 → 85 → 90</mark>** 순서로 5씩 올리되, 각 속도에서 상행·하행을 1회씩 완벽히 통과해야만 다음 속도로. 통과 못 하면 그 속도가 오늘의 상한선. 억지로 올리지 마세요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C·A, 빠른 조준)**
메트로놈 80. 하행 4연음을 굴리다가, 내가 마음속으로 "지금!" 하면 **<mark>다음 C나 A에서 딱 멈추기</mark>**. 빠른 흐름 속에서 타겟음을 즉석 조준하는 훈련이에요. 10번 중 8번 성공하면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 80~90 BPM)**
어제보다 빠른 백킹. 규칙: **<mark>상행 시퀀스로 올라갔다가 하행 시퀀스로 내려오며</mark> 4마디, 마지막엔 <mark>C(♭3)에 착지</mark>.** 시퀀스와 자유 애드리브를 섞어도 좋지만, 프레이즈 종결은 무조건 코드톤(C 또는 A)으로. 빠르게 치다 뭉개지면 즉시 템포를 5 내려요. 뭉개진 채 20분 채우는 게 최악이에요.

**40~50분 · 녹음/피드백 (권장)**
어제 녹음과 오늘 녹음을 나란히 들어보세요. 이틀 만에 알갱이가 얼마나 또렷해졌는지 체감될 거예요. 체크: <mark>하행에서 피킹이 밀리거나</mark> 특정 현 넘어갈 때 "털컹" 하는 구간이 있는지. 있으면 그 두 현 사이 이동만 따로 10번 반복.

**오늘의 완료 기준:** 자신의 상한 BPM(최소 78 이상 권장)에서 상행·하행 시퀀스를 뭉갬 없이 통과. 빠른 흐름 중 타겟음 즉석 착지 8/10.

## ④ 팁 / 흔한 실수

- **뭉개짐을 속도로 착각.** 녹음해서 들으면 바로 들켜요. 16분 4개가 "다다다다"로 세어지면 OK, "드르륵"으로 뭉치면 아웃. 귀를 심판으로 쓰세요.
- **하행 피킹 붕괴.** 하행에서도 얼터네이트(다운-업) 유지. 하행이라고 다운만 긁으면 특정 박에서 반드시 밀려요. 하행 첫 음의 피킹 방향을 미리 정해두면 안정돼요.
- **속도 올리면서 어깨·팔 힘 들어감.** 빠를수록 오히려 손목은 더 느슨하게. 힘주면 30초 만에 팔이 굳어요.
- **타겟 조준을 잊고 손 자랑만.** 오늘 속도의 목적은 "빠른 C 조준"이에요. 빨라졌는데 아무 데서나 멈추면 3일 헛수고. 속도는 컨트롤을 위한 재료일 뿐이에요.
