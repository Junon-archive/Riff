---
title: "12마디 부기 완성 — 2주차 결승선"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 부기를 12마디로 연결해 완성한다

## ① 이론/설명

2주차의 결승선이에요. 오늘은 지금까지의 조각을 모두 합쳐요. **12마디 폼**(D3) 위에, **옮긴 부기**(D2)를 얹어 한 바퀴를 완성해요. <mark>코드가 바뀔 때마다 부기의 루트 줄만 5→4→6번으로 갈아타면 돼요.</mark> 새로 배우는 건 없어요. 이미 손에 있는 것들을 연결할 뿐이에요. 이번 주 내내 하나씩 쌓아 온 조각들이 오늘 드디어 한 곡의 모양으로 맞춰져요. 퍼즐의 마지막 조각을 끼우는 기분으로, 편하게 시작해요. 완벽하지 않아도 괜찮아요. 한 바퀴를 끝까지 도는 것 자체가 오늘의 큰 성취예요.

오늘의 핵심은 **이동**이에요. 부기 손모양은 그대로 두고, 코드가 바뀌는 순간 **루트 줄만 한 줄 위나 아래로** 옮겨요. 예를 들어 1마디 A7에서 2마디 D7으로 갈 때, 5번 줄에서 걷던 손이 4번 줄로 통째로 올라가요. 손 전체가 엘리베이터처럼 옆 줄로 스르륵 옮겨 간다고 생각하면 쉬워요. <mark>손가락 간격은 하나도 안 바뀌어요.</mark>

세 부기의 루트 자리를 한 번 더 볼게요.

```json
{
  "id": "m1.w2.d4.boogie_roots",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie roots — A7 str5, D7 str4, E7 str6", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **A7=5번, D7=4번, E7=6번 줄 루트.** 이 세 개방현 위에서 같은 손모양이 걸어요.

오늘 완성할 대표 이동은 **A7→D7**이에요. 이 두 마디가 매끄러우면 나머지 코드 이동도 똑같은 원리라 금방 이어져요. 그러니 오늘은 이 한 번의 이동만 몸에 확실히 새기면, 12마디 전체가 자연스럽게 따라와요. 코드가 바뀔 때마다 매번 새로 고민하지 않아도, 손이 알아서 옆 줄을 찾아가게 될 거예요.

## ② 시각 자료

이번 주의 완성물, 대표 이동이에요. <mark>블루스 전곡이 결국 이 한 덩어리를 코드만 바꿔 옮겨 다니는 구조예요.</mark> 1마디 **A7 부기**, 2마디 **D7 부기** — 같은 손모양이 한 줄씩 옮겨가요.

```json
{
  "id": "m1.w2.d4.boogie_move",
  "type": "tab",
  "meta": { "title": "Boogie move A7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1마디 A7(5번현 루트), 2마디 D7(4번현 루트) — **같은 손모양이 한 줄씩 위로** 옮겨간 것뿐. E7은 6번현 루트로 같은 폼.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. A7 부기 한 마디로 셔플을 되살려요. <mark>롱-숏이 살아있는지</mark> 발로 확인해요.

이번엔 턴어라운드의 이동, **E7→D7**을 이어 봐요. V도에서 IV도로 내려오는 자리예요.

```json
{
  "id": "m1.w2.d4.boogie_move_e7_d7",
  "type": "tab",
  "meta": { "title": "Boogie move E7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1마디 E7(6번 줄 루트), 2마디 D7(4번 줄 루트). 저음에서 시작해 4번 줄로 내려와요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 코드마다 루트 줄 갈아타기)**
12마디를 머릿속으로 돌리며, 코드가 바뀌는 순간 **루트 줄(5→4→6)**을 미리 준비해요.

**20~40분 · 실전 12마디 부기 (BPM 80)**
D3의 12마디 지도 위에 부기를 얹어 <mark>끊김 없이</mark> 한 바퀴 돌아요. <mark>코드가 바뀔 때 부기가 끊기지 않는지</mark> 봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
12마디 부기 한 바퀴를 꼭 녹음해요: <mark>세 코드의 이동이 매끄럽게 들리는가</mark>.

**오늘의 완료 기준:** 12마디 폼 위에 A7·D7·E7 부기를 얹어 셔플로 끊김 없이 한 바퀴 연주하고 녹음할 수 있다. — 이번 주 결과물: A 블루스 12마디 부기 (2주차 완성!)

## ④ 팁 / 흔한 실수

12마디 부기를 이을 때 자주 나오는 실수예요.

```json
{
  "id": "m1.w2.d4.mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep only the boogie strings ringing", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true }
  ]}
}
```
▶ **부기 줄만 울려요.** A7 부기에서 6번·3번 줄이 새어 나오면 소리가 탁해져요. 안 쓰는 줄은 손끝으로 막아요.

- **이동 순간 리듬이 끊겨요.** 코드가 바뀌어도 셔플은 멈추지 않아요. 발로 롱-숏을 계속 밟아요.
- **루트 줄을 늦게 찾아요.** 다음 코드의 루트 줄을 한 박 먼저 준비해요.
- **E7에서 저음이 무거워요.** 6번 줄 루트는 좋지만, 4·3번 줄이 새면 답답해져요.
- **녹음 생략.** 2주차의 결과는 이 12마디 부기예요. 짧아도 꼭 남겨 다음 주와 비교해요.
