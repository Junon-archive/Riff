---
title: "섞기 — 어디에 '따', 어디에 '치'를 둘까"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 실제음은 아껴 쓸수록 세련된다

## ① 이론/설명

균일한 고스트 카펫이 깔렸으니, 오늘은 그 위에 **실제음을 콕콕 얹어** 진짜 그루브를 만들어요. 어제까지의 '치치치치' 위에, 어느 자리에만 또렷한 '따'를 넣을지 정하는 게 오늘의 전부예요.

손 위치는 하나예요. 오늘 쓰는 소리는 2·3번 줄 고음역의 작은 스탭(아래 다이어그램). 여기서 **왼손을 꾹 누르면 실제음('따'), 힘을 빼면 고스트('치')** 예요. 같은 자리, 압력만 다른 거죠. 그래서 손이 옮겨 다닐 필요 없이, 압력의 온·오프만으로 그루브가 만들어져요.

핵심 원칙은 이거예요. **실제음은 아껴 쓸수록 세련돼져요.** 초보는 자꾸 여기저기 '따'를 넣어 시끄럽게 만들어요. 프로는 한두 자리에만 '따'를 꽂고 나머진 전부 '치'로 흘려요. 그 절제가 곧 그루브의 여백이에요. 그리고 그 '따'의 위치를 한 칸만 옮겨도 완전히 다른 곡처럼 들려요 — 오늘 그 마법을 직접 실험해봅니다.

처음엔 압력을 켰다 껐다 하는 게 손에 안 붙어요. 당연해요. 천천히, '따' 자리에서만 살짝 힘을 주고 곧바로 다시 빼는 연습을 반복하면, 어느 순간 손가락이 알아서 스위치처럼 움직여요. 그러니 오늘 잘 안 돼도 괜찮아요. 압력을 켜고 끄는 이 감각은 펑크 기타 평생의 무기가 되니까, 시간을 들일 값어치가 충분해요.

## ② 시각 자료

오늘의 소리 재료 — 2·3번 줄 고음 스탭이에요. 이 한 자리에서 왼손 압력만으로 '따'(실제음)와 '치'(고스트)를 오갑니다.

**고음 E 스탭(2줄).** 3번 줄이 근음(R), 2번 줄이 3도. 나머지 줄은 확실히 뮤트해요. 이 자리를 꾹 누르면 '따', 힘 빼면 '치'.

```json
{
  "id": "m1.w2.d3.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 실제음+고스트 섞기(1마디).** 1·3박 머리에 '따', 2박 '앤'에 '따', 나머진 전부 '치'. 실제음 세 방이 박을 짚어줘요.

```json
{
  "id": "m1.w2.d3.mix_1bar",
  "type": "tab",
  "meta": { "title": "Real + ghost mix (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** '따'가 오는 자리를 미리 알고 그 순간만 왼손을 꾹. 4번 반복하며 대비를 들어보세요.

**예제 2 — 당겨진 그루브(2마디).** '따'를 박 머리와 박 끝에 번갈아 둬서 살짝 밀리는 느낌. 이게 펑크의 '꿀렁'이에요.

```json
{
  "id": "m1.w2.d3.mix_2bar",
  "type": "tab",
  "meta": { "title": "Real + ghost, syncopated (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** 익으면 '따' 위치를 한 칸씩 옮겨 나만의 그루브로 응용해보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 고스트 카펫(어제) 위에 아무 자리나 '따'를 하나씩 얹어보며 압력 온·오프를 워밍업.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 따 배치)**
입으로 "따-치-치-따"처럼 오늘 패턴의 '따' 자리를 정확히 세요. 어느 16비트에 실제음이 오는지 머리에 그립니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 68)**
**예제 1**(섞기)을 BPM 68에서 4번 → **예제 2**(당겨진 그루브)로. 익으면 '따' 위치를 바꿔 응용. 실제음은 아껴서.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: '따'와 '치'의 대비가 또렷한가 / 실제음 자리의 타이밍이 정확한가 / 고스트가 배경으로 깔끔한가.

**오늘의 완료 기준:** 한 손 위치에서 왼손 압력 온·오프만으로 실제음을 원하는 16비트 자리에 배치해 그루브를 만들 수 있다.

## ④ 팁 / 흔한 실수

- **'따'를 너무 많이.** 실제음이 흔해지면 그루브가 시끄러워요. 한두 자리만, 나머진 '치'.
- **'따'에서 손이 이동.** 자리를 옮길 필요 없어요. 같은 자리에서 압력만 온·오프.
- **고스트가 사라짐.** '따'에 집중하다 배경 '치'가 끊기면 카펫이 사라져요. 고스트를 계속 유지.
- **타이밍 밀림.** 압력 주는 타이밍이 늦으면 '따'가 밀려요. 그 자리에 오기 직전 미리 준비.
