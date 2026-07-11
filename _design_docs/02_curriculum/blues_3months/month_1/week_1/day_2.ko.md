---
title: "더블스탑 손모양 — 두 음을 하나처럼"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — 루트+5도, 루트+6도로 두툼한 소리를

## ① 이론/설명

어제 만든 셔플 필 위에, 오늘은 드디어 '음'을 얹어요. 그런데 한 음이 아니라 **두 음을 동시에** 눌러 소리 내는 게 오늘의 주인공, **더블스탑(double stop)**이에요. 두 손가락이 하나의 소리처럼 딱 붙어 울리면, 얇던 개방 A가 갑자기 <mark>두툼하고 꽉 찬 블루스 톤</mark>으로 변해요. 한 음일 때보다 소리의 무게가 확 실려, 밴드 속에서도 내 리듬이 또렷하게 들리는 게 큰 매력이에요.

오늘 쓸 두 짝은 딱 정해져 있어요. **루트(R)**는 항상 **5번 줄 개방 A**로 깔고, 그 위에 **4번 줄 2프렛의 5도(E)**를 검지로 얹으면 '루트+5도' 더블스탑이 완성돼요. 이게 부기 리프의 <mark>가장 안정적인 뼈대</mark>가 됩니다.

루트+5도 손모양부터 눈으로 익혀볼게요.

```json
{
  "id": "m1.w1.d2.dstop_5th",
  "type": "fretboard_diagram",
  "meta": { "title": "A double stop — root + 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **개방 A + 4번 줄 2프렛.** 6·3·2·1번 줄은 뮤트, 두 음만 또렷하게.

여기서 4번 줄 손가락만 **2프렛(5도)에서 4프렛(6도)**으로 살짝 벌리면, 통통 튀는 '루트+6도' 더블스탑이 돼요. 5도는 검지, 6도는 **약지**로 짚으면 나중에 b7까지 뻗기 편해요. 두 모양을 손이 기억하도록 **손모양 다이어그램**을 눈에 새겨두세요.

처음엔 두 줄이 함께 안 울리거나 옆줄이 딸려 울 수 있어요. 아주 정상이에요. 손가락 끝을 세워 **또렷한 두 음**만 남기면, <mark>딱 하나로 뭉친 소리</mark>가 나요. 이 손모양 하나면 내일 배울 부기 리프가 절반은 완성된 셈이에요. 그리고 이 두 손모양은 앞으로 배울 모든 부기와 리프의 출발점이라, 오늘 익혀두면 두고두고 든든해요.

## ② 시각 자료

두 손모양을 나란히 볼게요. 먼저 '루트+6도' — 4번 줄만 **4프렛**으로 옮긴, <mark>통통 튀는 밝은 음</mark>이에요.

```json
{
  "id": "m1.w1.d2.dstop_6th",
  "type": "fretboard_diagram",
  "meta": { "title": "A double stop — root + 6th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **개방 A + 4번 줄 4프렛(약지).** 5도보다 한 칸 더 벌어져요. 6번 줄은 엄지로 살짝 뮤트.

이제 두 더블스탑을 번갈아 쳐볼게요. **루트+5도 → 루트+6도** 순서로, 매 음을 또렷하게.

```json
{
  "id": "m1.w1.d2.dstop_play",
  "type": "tab",
  "meta": { "title": "Root+5 and Root+6 double stops", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 70, 정박으로.** 두 음이 동시에 나는지 귀로 확인하며 또박또박.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 어제의 개방 A 셔플로 손을 풀며, 오른손이 5번·4번 두 줄만 정확히 긁는지 확인해요. <mark>필요 없는 줄은 건드리지 않기</mark>.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 두 손모양 전환)**
5도(2프렛)와 6도(4프렛) 사이를 **약지 하나만** 폈다 접으며, 소리 없이 손모양만 왕복해요.

아래 느린 버전으로 두 음이 함께 울리는지 확인해요.

```json
{
  "id": "m1.w1.d2.dstop_slow",
  "type": "tab",
  "meta": { "title": "Double stops — slow (half notes)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60, 반음표로.** 루트+5도, 루트+6도를 각각 길게. 두 음의 밸런스를 들어요.

**20~40분 · 실전 더블스탑 (BPM 70)**
루트+5도와 루트+6도를 번갈아 **끊김 없이** 굴려요. <mark>두 음이 하나처럼 딱 붙는지</mark> 살펴요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 체크: <mark>두 음이 다 울리는가</mark> / <mark>옆줄 잡음이 없는가</mark>.

**오늘의 완료 기준:** 루트+5도, 루트+6도 더블스탑을 BPM 70에서 옆줄 잡음 없이 또렷하게 번갈아 짚을 수 있다.

## ④ 팁 / 흔한 실수

더블스탑에서 자주 걸리는 지점만 콕 집었어요.

```json
{
  "id": "m1.w1.d2.dstop_reach",
  "type": "fretboard_diagram",
  "meta": { "title": "4th string reach — 5th (fret 2) to 6th (fret 4)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" }
  ]}
}
```
▶ **4번 줄만 이동.** 5도(2프렛)↔6도(4프렛), 5번 줄 개방 A는 그대로 유지해요.

- **한 음만 울림.** 손가락 끝이 눕거나 힘이 부족한 거예요. 끝을 세워 두 줄에 고르게 힘을 줘요.
- **옆줄이 딸려 움.** 6·3번 줄이 열려 우웅거려요. 짚는 손가락 옆면과 오른손으로 살짝 뮤트해요.
- **루트가 흔들림.** 5번 줄 개방을 놓치면 뿌리가 사라져요. 개방 A는 항상 울리게 둬요.
- **손목이 굳음.** 5도↔6도 전환이 뻣뻣하면 약지만 부드럽게 폈다 접어요.
