---
title: "손가락 하나로 색 바꾸기 — 마이너와 인버전"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 같은 3줄, 손가락만 바꾸면 색이 달라진다

## ① 이론/설명

어제 잡은 E 메이저 3줄 트라이어드, 오늘은 여기서 **손가락 하나만 움직여** 색을 통째로 바꿔봐요.

첫 번째 변화는 **마이너**예요. 2번 줄을 딱 한 칸 내리면(9→8프렛), 밝던 E 메이저가 어두운 E 마이너가 돼요. 3도가 반음 내려가 b3가 된 거예요(아래 다이어그램의 초록). 손가락 하나 차이로 밝음이 슬픔이 되는 이 순간, 지난달 코드 빌딩에서도 봤던 바로 그 원리죠. 좁은 3줄 안에서도 이 스위치는 똑같이 살아 있어요.

두 번째는 **인버전(자리바꿈)**이에요. 같은 E 메이저라도 세 음의 순서를 바꾸면(어떤 음이 맨 위로 오느냐) 느낌이 달라져요. 오늘은 낮은 자리의 2nd 인버전 폼도 맛봐요 — 근음 대신 5도가 아래로 내려간 배치예요. 코드는 같은데 색이 살짝 다르게 반짝이죠. 좁은 3줄 안에서 이렇게 다양한 표정이 나온다는 게 트라이어드 커팅의 진짜 매력이에요.

여러 폼을 오가려니 손이 헷갈릴 수 있어요. 당연해요. 오늘은 다 외우려 하지 말고, '2번 줄 한 칸으로 밝음↔어둠이 바뀐다'는 것 하나만 확실히 잡으세요. 커팅 중에 이 스위치를 슥 넣을 수 있으면, 여러분의 원코드 잼이 갑자기 훨씬 다채로워져요. 코드를 새로 외우는 게 아니라, 아는 폼에서 손가락 하나만 옮기는 거니까 부담도 없어요. 밝게 갈지 어둡게 갈지, 이제 여러분이 고르는 거예요.

## ② 시각 자료

같은 3줄, 손가락만 다른 세 가지 색이에요. 초록=바뀐 음(b3). E 마이너와 2nd 인버전을 대조해요.

**E 마이너 트라이어드.** 어제 메이저에서 2번 줄만 9→8(초록=b3). 밝음이 어둠으로 — 손가락 하나 차이.

```json
{
  "id": "m2.w5.d2.emin_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor triad (top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 8, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

**E 메이저 2nd 인버전.** 같은 E 메이저지만 낮은 자리, 5도가 아래로. 자리를 옮기니 색이 살짝 달라져요.

```json
{
  "id": "m2.w5.d2.emaj_inv",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad — 2nd inversion (5th in bass)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" }
  ]}
}
```

**예제 1 — 색이 바뀌는 커팅(1마디).** 같은 리듬을 메이저로 치다 마이너로. 2번 줄 한 칸만 바꾸면 돼요.

```json
{
  "id": "m2.w5.d2.color_1bar",
  "type": "tab",
  "meta": { "title": "Triad cutting — major/minor color (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 앞 절반은 메이저, 뒤 절반은 마이너로 쳐보며 색 차이를 들어보세요. 4번.

**예제 2 — 메이저→마이너(2마디).** 1마디는 메이저, 2마디는 마이너. 같은 커팅인데 표정이 확 달라져요.

```json
{
  "id": "m2.w5.d2.color_2bar",
  "type": "tab",
  "meta": { "title": "Major then minor (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 익으면 인버전 폼으로도 옮겨 응용. 어떤 색이 좋은지 귀로 골라보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. E 메이저↔마이너를 2번 줄 한 칸으로 번갈아 잡으며 워밍업. 인버전 폼도 가볍게.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 색 스위치)**
커팅을 유지한 채 메이저↔마이너를 슥 바꾸는 연습. 2번 줄 손가락만 움직이는 감각을 각인.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 70)**
**예제 1**(색 바뀌는 커팅)을 BPM 70에서 4번 → **예제 2**(메이저→마이너)로. 익으면 인버전으로도 옮겨 응용.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 메이저↔마이너 색이 또렷이 구분되는가 / 커팅이 계속 3줄만 나는가 / 전환이 매끄러운가.

**오늘의 완료 기준:** 같은 3줄 안에서 메이저↔마이너를 손가락 하나로 바꾸고, 인버전 폼도 맛보며 색을 다르게 낼 수 있다.

## ④ 팁 / 흔한 실수

- **색 바꾸다 아랫줄 샘.** 손가락 옮기느라 뮤트가 풀려요. 아랫줄 죽이는 손가락은 계속 유지.
- **전환에서 커팅 끊김.** 폼 바꿀 때 오른손이 서면 안 돼요. 커팅은 계속, 왼손만 살짝.
- **인버전 완벽 강박.** 오늘은 맛보기예요. 메이저↔마이너 스위치가 핵심.
- **너무 자주 바꿈.** 색은 아껴 쓸수록 효과적. 한 곡에 한두 번이면 충분.
