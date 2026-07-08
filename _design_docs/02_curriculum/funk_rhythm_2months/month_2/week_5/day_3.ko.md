---
title: "3줄만 울리게 — 아랫줄 죽이는 뮤트가 승부"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — 진짜 어려운 건 소리 내는 게 아니라 안 내는 것

## ① 이론/설명

고음 3줄 커팅의 진짜 난관은 소리를 내는 게 아니라, **소리를 안 나게 하는 것**이에요. 오른손이 16비트로 넓게 쓸어내려도, 4·5·6번 줄은 절대 울리면 안 돼요.

문제는 이거예요. 커팅을 시원하게 하려면 오른손을 크게 휘둘러야 하는데, 그러면 자연히 아랫줄까지 스치게 돼요. 여기서 프로의 비밀은 **왼손 뮤트**예요. 트라이어드를 잡은 손가락의 옆면과 검지 끝으로, 안 쓰는 아랫줄들을 살짝 덮어 미리 죽여두는 거죠. 그러면 오른손이 6줄을 다 쓸어내려도, 실제로 울리는 건 위 3줄뿐이에요. 오른손은 시원하게, 왼손은 든든하게 막고 — 이 분업이 깔끔한 커팅의 핵심이에요.

이렇게 하면 오히려 편해져요. 오른손이 '3줄만 정확히'를 신경 쓸 필요 없이 넓게 휘둘러도 되니까요. 조준의 부담을 왼손 뮤트가 덜어주는 셈이에요. 커팅 펑크가 그렇게 시원시원하게 들리는 비밀이 바로 이 왼손 뮤트에 있어요.

왼손이 코드도 잡고 뮤트도 하려니 처음엔 벅차요. 특히 6번 줄은 검지 끝으로, 4·5번은 트라이어드 손가락 옆면으로 덮는 게 익숙지 않죠. 당연해요. 오늘은 완벽하지 않아도, 넓게 커팅했을 때 아랫줄 잡음이 '확 줄었다'만 느껴도 큰 진전이에요. 이 왼손 뮤트가 손에 붙으면, 오른손은 오히려 마음껏 시원하게 휘두를 수 있어요. 막는 손이 든든할수록 치는 손이 자유로워지는 거죠.

## ② 시각 자료

넓은 커팅 스트로크로 3줄만 울리게 — 왼손 뮤트가 아랫줄을 죽여요. 오른손은 시원하게, 왼손은 든든하게.

**E 메이저 트라이어드(복습).** 이 3줄만 울리고, 4·5·6번은 왼손 손가락 옆면·검지 끝으로 확실히 뮤트.

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

**예제 1 — 뮤트 중심 커팅(1마디).** 트라이어드는 아껴 울리고 대부분 뮤트 커팅. 넓게 쓸어도 3줄만 나는지가 핵심.

```json
{
  "id": "m2.w5.d3.mute_1bar",
  "type": "tab",
  "meta": { "title": "Mute-heavy triad cutting (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** 오른손을 일부러 넓게 휘둘러도 아랫줄이 안 나는지 확인하며 4번.

**예제 2 — 넓은 커팅(2마디).** 실제음을 드문드문, 뮤트 커팅을 촘촘히. 오른손은 크게, 소리는 3줄만.

```json
{
  "id": "m2.w5.d3.mute_2bar",
  "type": "tab",
  "meta": { "title": "Wide cutting, three strings only (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** 왼손 뮤트를 든든히 유지하며 4번. 익으면 트라이어드를 다른 자리로 옮겨 응용.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 트라이어드를 잡은 채 왼손으로 아랫줄을 덮고, 6줄을 다 쓸어도 3줄만 나는지 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 왼손 뮤트)**
오른손을 넓게 휘두르면서 왼손 뮤트만으로 아랫줄을 죽이는 감각을 각인. 검지 끝(6번)·손가락 옆면(4·5번) 위치 확인.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 72)**
**예제 1**(뮤트 커팅)을 BPM 72에서 4번 → **예제 2**(넓은 커팅)로. 넓게 휘둘러도 3줄만 나는 게 관건.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 아랫줄 잡음이 없는가 / 3줄이 청량하게 나는가 / 오른손이 시원하게 넓은가.

**오늘의 완료 기준:** 왼손 뮤트로 아랫줄을 죽인 채, 오른손을 넓게 휘둘러도 위 3줄만 깔끔히 커팅할 수 있다.

## ④ 팁 / 흔한 실수

- **아랫줄이 계속 샘.** 왼손 뮤트가 약해요. 검지 끝을 6번 줄에 살짝 눕혀 덮으세요.
- **뮤트하다 트라이어드가 죽음.** 뮤트에 힘이 너무 들어가 코드음까지 눌렀어요. 위 3줄은 또렷이, 아랫줄만 살짝.
- **오른손이 좁아짐.** 아랫줄 무서워 오른손을 사리면 커팅이 답답해요. 왼손을 믿고 넓게.
- **속도부터.** 뮤트가 확실해야 빠르게도 돼요. 느리게, 아랫줄 0.
