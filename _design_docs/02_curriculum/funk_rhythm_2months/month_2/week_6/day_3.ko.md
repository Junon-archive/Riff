---
title: "음 사이 빈 곳을 고스트로 — 라인이 그루브가 된다"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 띄엄띄엄한 라인을 촘촘한 그루브로

## ① 이론/설명

어제까지 그린 싱글 노트 라인, 그대로 두면 음과 음 사이가 뻥 뚫려 조금 심심해요. 오늘은 그 **빈 곳을 1개월차의 고스트 노트로 채워** 촘촘한 그루브로 만들어요.

원리는 지난달 그대로예요. 라인의 실제음('따')은 왼손을 눌러 또렷이 울리고, 음과 음 사이의 빈 16비트 자리는 왼손 힘을 뺀 고스트('퍽')로 채워요. 그러면 듬성듬성하던 라인이 '따-퍽-퍽-따-퍽'처럼 쉴 틈 없이 굴러가는 그루브가 돼요. 오른손 모터는 처음부터 끝까지 안 멈추고, 왼손이 '누를지 뺄지'만 오가는 거죠.

이게 왜 강력하냐면, 라인의 음이 몇 개 안 되어도 그루브가 꽉 차게 들리거든요. 나일 로저스식 커팅이 코드로 그루브를 채웠다면, 오늘은 단음 라인 + 고스트로 똑같이 꽉 찬 느낌을 내는 거예요. 음은 적게, 그루브는 진하게.

라인 음과 고스트를 번갈아 내는 게 처음엔 헷갈려요. 특히 실제음 자리에서만 정확히 왼손을 누르고 곧바로 빼는 타이밍이 어렵죠. 당연해요. 오늘은 라인이 단순해도 좋으니, '음은 또렷, 사이는 퍽'이라는 대비만 살리세요. 이 대비가 살면 단 몇 개의 음으로도 방을 그루브로 채울 수 있어요. 이게 펑크의 마법이에요 — 많이 치는 게 아니라, 적게 치되 사이를 그루브로 메우는 것. 오늘 이 감각을 잡으면 '음을 아끼는 즐거움'을 처음 알게 돼요.

## ② 시각 자료

라인 실제음(파랑)과 고스트(무색)를 번갈아. 음은 적어도 고스트가 사이를 메워 그루브가 꽉 차요.

**예제 1 — 라인+고스트(1마디).** 실제음은 드문드문(E·A·G), 사이는 전부 고스트 '퍽'. 음 몇 개로도 그루브가 꽉 차요.

```json
{
  "id": "m2.w6.d3.ghost_1bar",
  "type": "tab",
  "meta": { "title": "Single note + ghost fill (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 74.** 실제음 자리만 왼손을 꾹, 나머진 퍽. '따'와 '퍽'의 대비를 들으며 4번.

**예제 2 — 고스트 그루브 라인(2마디).** 라인에 고스트를 촘촘히 섞은 완성형. 단음인데 드럼처럼 꽉 차요.

```json
{
  "id": "m2.w6.d3.ghost_2bar",
  "type": "tab",
  "meta": { "title": "Line with ghost groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 74.** 오른손 모터는 계속, 왼손만 누를지 뺄지. 익으면 라인 음을 바꿔 응용.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 한 음을 정하고 '따(꾹)-퍽(빼기)'를 번갈아 내며 압력 온·오프 워밍업. 오른손 모터는 계속.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 라인 + 고스트)**
입으로 "따-퍽-퍽-따"처럼 라인 음과 고스트를 구분해 노래해요. 어디가 실제음인지 미리 그립니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 74)**
**예제 1**(라인+고스트)을 BPM 74에서 4번 → **예제 2**(고스트 그루브 라인)로. 음 사이가 고스트로 꽉 차는 게 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 실제음이 또렷한가 / 고스트가 사이를 메우는가 / 오른손이 안 멈췄는가.

**오늘의 완료 기준:** 싱글 노트 라인의 빈 곳을 고스트로 채워, 음은 적어도 꽉 찬 그루브를 만들 수 있다.

## ④ 팁 / 흔한 실수

- **사이가 비어 심심함.** 음 사이를 고스트로 채우세요. 오른손을 멈추지 말고 계속 스쳐요.
- **고스트가 음정으로 울림.** 라인 음 뺀 자리는 힘을 완전히 빼서 '퍽'. 음정이 새면 지저분.
- **실제음이 흐림.** 누를 때 확실히, 뺄 때 확실히. 애매하면 라인이 안 살아요.
- **오른손 멈춤.** 라인·고스트 신경 쓰다 모터가 끊겨요. 흔들림은 계속.
