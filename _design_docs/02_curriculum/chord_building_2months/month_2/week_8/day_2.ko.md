---
title: "리듬 챌린지 — 같은 코드, 다른 그루브"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 어디를 치고 어디를 비우느냐가 그루브다

## ① 이론/설명

지금까지 '어떤 음을 잡을까'(보이싱)를 배웠죠. 오늘은 '**어떤 리듬으로 칠까**'예요. 같은 코드라도 **치는 자리와 비우는 자리(쉼표)**, 그리고 **뮤트 커팅(팜뮤트)**을 바꾸면 완전히 다른 그루브가 나와요. R&B·펑크·소울의 생명은 사실 보이싱보다 **리듬**이에요.

핵심 세 가지:
- **쉼표가 리듬이다.** 소리를 비운 자리가 그루브의 숨이에요.
- **팜뮤트 커팅(P.M.).** 짧게 죽여서 "칙" 하는 타격감.
- **싱코페이션(당김).** 박자 앞이나 뒤로 살짝 밀어 몸이 흔들리게.

오늘은 Cmaj7 쉘 하나를 두 가지 그루브로 쳐보며, 리듬만 바꿔도 곡이 달라지는 걸 몸으로 익혀요. 여기서 진짜 재미가 시작돼요 — 같은 코드 하나로도 리듬만 바꾸면 발라드가 되기도, 펑크가 되기도 하니까요. 잘 못 쳐도 괜찮아요. 오늘은 '틀리게' 치는 게 아니라 '다르게' 치는 걸 즐기는 날이에요.

## ② 시각 자료

오늘 그루브를 얹을 **Cmaj7 쉘**(R·3·7). 파랑 근음, 초록 가이드톤(7·3도).

```json
{
  "id": "m2.w8.d2.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 그루브 A(스타카토 + 쉼표).** 짧게 치고 쉼표로 비우는 R&B 컴핑. P.M.는 커팅이에요.

```json
{
  "id": "m2.w8.d2.groove_a",
  "type": "tab",
  "meta": { "title": "Groove A (staccato + rests) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 84, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 84, 4번 반복.** "쿵 — (쉼) 칙 — 짠 — (쉼)." 쉼표를 확실히 비우고, P.M.는 짧게 죽여요. Cmaj7 쉘을 이 리듬으로.

**예제 2 — 그루브 B(당김/싱코페이션).** 같은 코드, 다른 리듬. 박을 살짝 밀어 몸이 흔들리게.

```json
{
  "id": "m2.w8.d2.groove_b",
  "type": "tab",
  "meta": { "title": "Groove B (syncopation) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 84, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 84, 4번 반복.** 그루브 A와 완전히 다른 느낌이죠? 같은 Cmaj7인데 리듬만 바꿨어요. 어느 쪽이 곡에 맞는지 골라 보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Cmaj7 쉘을 잡고 예제 A의 리듬을 손으로 익혀요. 쉼표에서 확실히 소리를 비우고, P.M. 커팅이 짧은지 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 쉼표·커팅)**
메트로놈에 맞춰 그루브 A와 B를 번갈아. "지금 치는 자리 / 비우는 자리 / 죽이는 자리"를 입으로 세며 몸에 각인.

**20~40분 · 실전 반주 (예제 1·2 그루브 / 80~90 BPM)**
**예제 1·2를 BPM 84에서** 백킹 위에 얹어요. 어제의 II-V-I 진행 전체에 그루브 A(또는 B)를 입혀 4마디 루프를 돌려요. 같은 진행이 리듬으로 얼마나 달라지는지.

**40~50분 · 녹음/셀프 피드백 (권장)**
그루브 A·B를 각각 15초 녹음해 비교. 체크: 쉼표가 그루브를 만드는가 / P.M. 커팅이 또렷한가 / 몸이 흔들리는가.

**오늘의 완료 기준:** 같은 Cmaj7 쉘을 두 가지 그루브(스타카토+쉼표 / 싱코페이션)로 치고, 리듬이 곡의 느낌을 바꿈을 이해한다.

## ④ 팁 / 흔한 실수

- **쿵쿵쿵쿵 균일하게.** 쉼표 없이 꽉 채우면 그루브가 죽어요. 비우는 자리가 핵심.
- **P.M. 없이 길게.** 커팅을 안 하면 R&B/펑크 느낌이 안 나요. 짧게 죽이는 연습.
- **리듬 바꾸며 코드 흔들기.** 리듬에 집중하다 보이싱이 무너지면 안 돼요. 왼손은 고정, 오른손이 리듬.
- **한 그루브만.** 같은 진행도 여러 리듬으로. 그게 '컴핑을 작곡'하는 첫걸음.
