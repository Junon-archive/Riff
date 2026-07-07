---
title: "II-V-I 통합 — 점프 없이 부드럽게 순환하기"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 한 구역에서 노래하듯 도는 II-V-I

## ① 이론/설명

이번 주 결승선. 지금까지 배운 걸 하나로 묶어요.

- **근음 줄 교차(5·6·5)** 로 손을 한 구역에 묶고,
- **가이드톤(3도·7도)** 이 반음씩만 움직이는 걸 느끼며,
- 세 코드를 **점프 없이** 부드럽게 순환한다.

오늘은 II-V-I을 4마디 루프로 돌려요(Dm7 → G7 → Cmaj7 → 다시 Dm7). 곡은 대부분 이 뭉치가 반복되니까, 이걸 몸에 새기면 진짜 반주가 시작돼요. 목표는 속도가 아니라 **연결의 매끄러움** — 코드가 바뀌는 순간에 소리가 툭 끊기지 않고, 가이드톤이 노래처럼 이어지는 것.

## ② 시각 자료

이번 주의 집, **Cmaj7(I)**. II-V가 만든 긴장이 여기서 풀려요. 초록은 가이드톤(7도·3도).

```json
{
  "id": "m1.w3.d4.cmaj7_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 (I) — home", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 가이드톤 루프(4마디).** 3번 줄에서 5→4→4→5. Cmaj7까지 갔다가 다시 Dm7로 돌아오는 순환이에요. 한 음이 계속 붙어 도는 걸 느끼세요.

```json
{
  "id": "m1.w3.d4.guide_tone_loop",
  "type": "tab",
  "meta": { "title": "Guide-tone loop (ii-V-I-ii) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 68.** 3번 줄 5→4→4→5. 루프가 돌 때 이 가이드톤이 노래처럼 이어지는 걸 귀로. 4번 반복.

**예제 2 — II-V-I 컴핑 루프.** 근음 + 가이드톤으로 4마디를 순환(Dm7-G7-Cmaj7, 마지막 마디는 Cmaj7 유지). 근음은 5·6·5·5, 가이드톤(3번 줄)은 5·4·4·4로 거의 제자리.

```json
{
  "id": "m1.w3.d4.ii_v_i_loop",
  "type": "tab",
  "meta": { "title": "ii-V-I comp loop — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4번 반복.** 근음 줄이 오가도 가이드톤은 붙어 있음을 손으로 느끼며 루프를 돌려요. 마지막 마디 Cmaj7에서 "집에 도착한" 안정을 즐기세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Dm7-G7-Cmaj7 루프를 아주 느리게(BPM 64) 한 바퀴씩. 손이 구역을 벗어나지 않는지만 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 매끄러운 연결)**
**예제 1** 가이드톤 루프를 눈 감고 3번 줄 5→4→4→5로. 각 코드 전환에서 이 음이 어디로 가는지 미리 알고 짚기.

**20~40분 · 실전 반주 (예제 2 루프 / 72~82 BPM)**
백킹 트랙(있으면)에 맞춰 **예제 2 루프를 BPM 76에서 여러 번.** 전환 순간 소리가 끊기지 않게, 손가락은 최소로. 익으면 D키(지난 시간)로도 루프를 돌려보세요.

**40~50분 · 녹음/셀프 피드백 (권장)**
II-V-I 루프 두 바퀴 녹음. 체크: 코드 전환 시 손이 크게 점프하지 않았는가 / 전환 타이밍이 흐려지지 않았는가 / 가이드톤이 노래처럼 이어졌는가.

**오늘의 완료 기준:** II-V-I을 한 구역에서 점프 없이 매끄럽게 순환하고, 가이드톤의 흐름을 의식하며 컴핑한다. (3주차 완성!)

## ④ 팁 / 흔한 실수

- **전환에서 손을 통째로 떼기.** 공통음·가까운 음은 붙여 두고 필요한 손가락만 옮기세요. 소리가 훨씬 덜 끊겨요.
- **루프의 마지막을 대충.** 마지막 Cmaj7(집)이 흐리면 순환이 안 닫혀요. I에 도착하는 안정을 또렷이.
- **속도 집착.** 루프는 매끄러움이 전부. 76에서 노래하듯 도는 게 100에서 뚝뚝보다 프로에 가까워요.
- **한 키에만 머물기.** 여유되면 C·D 두 키로 루프를 돌려 '이동 가능한 패턴'을 굳히세요.
