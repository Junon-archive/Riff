---
title: "블루스의 소리 — 도미넌트7 세 코드 A7·D7·E7"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 도미넌트7이 만드는 블루스 색깔

## ① 이론/설명

2주차의 문이 열렸어요. 이번 주 목표는 딱 두 가지예요. **12마디 블루스 폼**을 익히고, 1주차 부기를 D7·E7로 옮기는 거예요. 오늘은 그 첫걸음으로, 블루스 특유의 소리를 만드는 **도미넌트7 코드** 세 개를 손에 넣어요. <mark>블루스에서는 I도·IV도·V도가 전부 7코드예요.</mark> 보통 음악이라면 으뜸화음이 밝은 메이저인데, 블루스는 여기에 **b7**을 얹어 살짝 긴장된 색을 칠해요. 이 b7이 바로 블루스의 목소리예요.

A 블루스의 세 기둥은 **A7**(I도), **D7**(IV도), **E7**(V도)예요. A7은 집이고, D7은 한 걸음 나간 자리, E7은 가장 팽팽해서 다시 집으로 돌아오고 싶게 만들어요. 세 코드 모두 루트·3도·5도·b7로 이뤄져, 코드 이름만 바뀔 뿐 성격은 똑같아요. <mark>그래서 하나를 잡는 손 감각이 나머지 둘로 그대로 이어져요.</mark>

오늘은 속도도 리듬도 신경 쓰지 마세요. 세 코드를 하나씩 **깨끗하게 울리는 것**만 목표예요. 각 코드에서 **어느 줄이 루트인지**만 기억해 두면, 내일 부기를 옮길 때 큰 도움이 돼요.

집이 되는 I도, **A7**부터 손에 익혀요. 5번 줄 개방 A가 루트예요.

```json
{
  "id": "m1.w2.d1.a7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 open chord — I of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **5번 줄 개방 A**가 루트예요. 4번 줄 2프렛(5도), 3번 줄 개방(b7), 2번 줄 2프렛(3도)을 함께 눌러요. 6번 줄은 뮤트.

## ② 시각 자료

다음은 한 걸음 나간 **D7**과, 가장 팽팽한 **E7**이에요.

```json
{
  "id": "m1.w2.d1.d7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "D7 open chord — IV of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 1, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **4번 줄 개방 D**가 루트예요. 3번 줄 2프렛(5도), 2번 줄 1프렛(b7), 1번 줄 2프렛(3도)을 눌러요. 5·6번 줄은 뮤트.

<mark>세 코드의 루트 줄이 각각 5·4·6번 줄로 달라요.</mark> **E7**은 6번 줄 개방 E가 루트라 저음이 묵직하게 울려요.

```json
{
  "id": "m1.w2.d1.e7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "E7 open chord — V of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 1, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **6번 줄 개방 E**가 루트예요. 5번 줄 2프렛(5도), 4번 줄 개방(b7), 3번 줄 1프렛(3도)을 눌러요. 여섯 줄을 다 울려도 좋아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 세 코드를 짚었다 뗐다 하며 손을 풀어요. <mark>여섯 줄 중 울려야 할 줄만 깨끗이 나는지</mark> 하나씩 확인해요.

이 순서로 천천히 바꿔 보세요. 한 코드에 온음표 한 번씩, 넉넉하게요.

```json
{
  "id": "m1.w2.d1.change_drill",
  "type": "tab",
  "meta": { "title": "A7 - D7 - E7 change drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "D7", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** A7→D7→E7을 한 마디에 하나씩, 아래로 한 번씩 그어요. 코드가 바뀌기 전에 미리 손모양을 준비해요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 코드별 루트 줄)**
코드를 바꾸기 전에 **어느 줄이 루트인지**(A7=5번, D7=4번, E7=6번) 소리 내어 말해요.

**20~40분 · 실전 코드 순회 (BPM 60)**
A7→D7→E7을 <mark>끊김 없이</mark> 오가요. <mark>코드가 바뀔 때 삑사리가 없는지</mark> 두 가지만 봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 체크: <mark>세 코드가 다 깨끗하게 울리는가</mark>.

**오늘의 완료 기준:** A7·D7·E7 세 도미넌트7 코드를 각각 깨끗하게 울리고, 끊김 없이 서로 바꿀 수 있다.

## ④ 팁 / 흔한 실수

세 코드에서 자주 나오는 실수만 짚을게요.

```json
{
  "id": "m1.w2.d1.mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Mute the unused low strings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **D7에서는 6·5번 줄을 뮤트.** 저음이 울리면 코드가 탁해져요. 엄지로 6번 줄을 살짝 막아요.

- **A7의 2번 줄이 안 울려요.** 3도(C#)가 빠지면 밝은 블루스 맛이 사라져요. 손끝을 세워 눌러요.
- **D7에서 저음 두 줄이 새어 나와요.** 6·5번 줄을 확실히 막아 D 루트부터 울리게 해요.
- **E7이 흐릿해요.** 3번 줄 1프렛(3도, G#)을 검지로 정확히 눌러요.
- **코드 전환이 늦어요.** 다음 코드 손모양을 한 박 먼저 떠올려요.
