---
title: "Am ↔ C 코드톤 연결 — 3도끼리 최소 이동으로 잇기"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 코드가 바뀌는 순간, 3도에서 3도로 살짝만 움직이기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 어제까지는 Am 지도, C 지도를 **따로** 그렸잖아요. 근데 실제 곡은 코드가 계속 바뀌어요. Am 치다가 C로 넘어가고, 또 Am으로 돌아오고. 그 **바뀌는 순간**을 어떻게 넘기느냐가 즉흥의 진짜 실력이에요. 초보는 코드가 바뀌어도 손이 그대로 있어서 어긋난 음이 나고, 고수는 코드가 바뀌는 그 찰나에 **<mark>새 코드의 3도로 슥 갈아탄</mark>** 거예요.

핵심은 이거예요. Am의 3도는 **C**, C의 3도는 **E**. 그러니까 Am→C로 넘어갈 때 우리가 노릴 이동은 딱 하나, **<mark>C → E</mark>**. 이걸 "<mark>가이드톤(guide tone)</mark>"이라고 불러요. 코드 진행을 안내하는 실 같은 거죠. 다음 주(W8) ii-V-I 가이드톤 라인의 예고편이기도 해요.

```json
{
  "id": "m2.w7.d3.am_c_guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am 3rd (C) <-> C 3rd (E) guide-tone landing map across the neck",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "E", "role": "target", "highlight": true }
    ]
  }
}
```

그리고 마법 같은 부분. 지판에서 이 **C → E 이동이 어이없을 만큼 가까워요.** 대표적으로 **<mark>3번 줄 5프렛(C) → 2번 줄 5프렛(E).</mark>** 같은 프렛에서 옆 줄로 손가락 하나만 옮기면 끝이에요. 코드가 바뀌었는데 손은 거의 안 움직이는 거죠. 이 "최소 이동"의 쾌감을 오늘 몸에 새깁니다.

한 번 더. 이건 속주가 아니에요. 코드 바뀔 때 **<mark>정확히 3도에 착지</mark>**하는 타이밍 훈련이라, 오히려 더 느리게 갑니다. 착지가 어긋나면 아무리 빨라도 꽝이에요.

## ② 시각 자료

Am의 3도(**C**)와 C의 3도(**E**)를 넥 전역에 함께 찍은 "가이드톤 지도"예요. 둘 다 착지 타겟(초록)이고, A는 방향 잡는 기준점(근음)이에요. <mark>가까이 붙은 C-E 쌍</mark>을 눈으로 짝지어 보세요.

```json
{
  "id": "m2.w7.d3.am_c_guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am 3rd (C) <-> C 3rd (E) guide-tone landing map across the neck",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "E", "role": "target", "highlight": true }
    ]
  }
}
```

이제 실제 연결이에요. 1마디 Am(3도 C에 착지) → 2마디 C(옆 줄로 살짝, 3도 E에 착지). 마디 1 끝음 **3번 5프렛 C**에서 마디 2 첫음 **2번 5프렛 E**로 넘어가는 게 <mark>오늘의 핵심 손동작</mark>이에요.

```json
{
  "id": "m2.w7.d3.am_to_c_connection",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Am -> C connection: land 3rd C, minimal move to 3rd E",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 68)**
메트로놈 68에 위 연결 프레이즈를 8분음표로 반복. 오직 한 지점에만 집중: 마디 1→2 넘어가는 **<mark>3번 5프렛 C → 2번 5프렛 E.</mark>** 같은 프렛, 옆 줄. 손가락 하나만 슬쩍 옮겨요. 이 이동이 소리 안 끊기고 매끈해질 때까지.

```json
{
  "id": "m2.w7.d3.am_to_c_connection",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Am -> C connection: land 3rd C, minimal move to 3rd E",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (C→E 최소 이동 찾기)**
메트로놈 끄고, 지도에서 가까운 **<mark>C-E 쌍</mark>**을 세 군데 찾아 짝지어요. 예: (3번5·2번5), (5번3·5번7), (2번1·2번5), (1번8·1번12). 각 쌍을 "Am이면 C, 코드 바뀌면 E" 하고 왔다 갔다 짚어요. 눈 감고도 한 쌍을 3초 안에 오갈 수 있으면 통과.

**20~40분 · 실전 즉흥 (Am–C 2코드 백킹 / 68~72 BPM)**
"Am C backing track" 또는 "Am to C vamp"를 틀어요(한 마디씩 번갈아 도는 걸로). 규칙: **<mark>Am일 땐 C에 착지, C일 땐 E에 착지.</mark>** 코드 바뀌는 순간에 딱 맞춰 3도로 갈아타는 게 전부예요. 화려한 프레이즈 필요 없어요. 코드 하나에 음 두세 개, 마지막은 그 코드의 3도.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 잼 30~60초 녹음. 체크: **<mark>코드 바뀌는 지점에서 내가 3도에 제때 앉았나?</mark>** 늦게 갈아탔으면 이전 코드 음이 새 코드 위로 삐져나와 "어긋" 하고 들려요. 재생 속도 늦춰 그 지점만 반복 확인. 갈아타는 타이밍을 반 박 앞당기는 연습을 내일로 메모.

**오늘의 완료 기준:** Am–C 백킹에서 코드가 바뀔 때마다 3도(C↔E)에 어긋남 없이 착지, 최소 이동 C-E 쌍 3군데를 눈 감고 오가기.

## ④ 팁 / 흔한 실수

- **갈아타기 지각.** 코드가 이미 C로 바뀌었는데 손이 아직 Am 음에 남아 있으면 어긋나요. 코드 바뀌기 **반 박 전에** 미리 3도로 손을 옮기는 예측 감각을 길러요.
- **멀리 있는 3도만 찾기.** C→E는 대부분 코앞에 있어요. 넥을 훌쩍 건너뛰지 말고 "지금 손 근처의 E"를 먼저 노려요. 그게 최소 이동의 핵심이에요.
- **근음 안전빵.** 불안하다고 자꾸 근음(A, C)으로만 착지하면 가이드톤 감각이 안 늘어요. 오늘은 일부러 3도에만 앉아보세요.
- **속도로 도망가기.** 갈아타기가 어색해서 빨리 지나가 버리면 귀가 어긋남을 못 잡아요. 느릴수록 착지 정확도가 보여요. 68 고정.
