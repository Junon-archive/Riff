---
title: "인트로와 엔딩 태그 — 곡의 문을 열고 닫는다"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 시작을 알리고, 끝을 확실히 닫는다

## ① 이론/설명

어제는 턴어라운드로 12마디를 <mark>다음 바퀴로 되돌리는 매듭</mark>을 익혔어요. 오늘은 곡의 처음과 끝을 꾸며요. 시작을 알리는 **인트로**와, 끝을 확실히 닫는 **엔딩 태그**예요. 둘 다 새 기술이 아니라, 지금까지의 부기를 살짝 배치만 바꾼 거라 금세 손에 붙어요.

인트로는 '이제 시작합니다' 하는 신호예요. 블루스에서 가장 흔한 인트로는 <mark>턴어라운드처럼 I에서 V로 걸어 곡 앞에 붙이는 것</mark>이에요. A 블루스라면 **A7 한 마디 → E7 한 마디**를 먼저 치고, 그 **E7**의 팽팽함이 곡의 첫 마디 A7으로 자연스럽게 손을 넘겨줘요. 인트로 두 마디만 있으면, 혼자 쳐도 밴드가 카운트해 주는 것처럼 곡이 시작돼요. 그래서 인트로는 짧지만, 곡의 첫인상을 결정하는 아주 중요한 두 마디예요.

엔딩 태그는 반대예요. 계속 돌던 12마디를 <mark>여기서 끝이라고 분명히 닫는 장식</mark>이에요. 마지막에 V(E7)로 한 번 긴장을 준 뒤, 집인 **A7**을 큼직하게 한 번 '쾅' 울리면 곡이 깔끔하게 닫혀요. 4주 전엔 코드 하나도 버벅였는데, 이제 곡을 열고 닫는 문까지 손에 넣는 거예요. 속도는 조금도 급하지 않아도 괜찮아요. 오늘은 인트로 한 번만 매끄럽게 붙여도 충분해요.

먼저 인트로부터 볼게요. A7 한 마디, E7 한 마디로 곡의 문을 여는 두 마디예요.

```json
{
  "id": "m1.w4.d2.intro",
  "type": "tab",
  "meta": { "title": "Intro — A7 to E7 into the tune", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1마디 **A7**, 2마디 **E7**. 이 두 마디가 곡의 문을 열어요. 마지막 E7이 첫 마디 A7으로 손을 넘겨줘요.

## ② 시각 자료

이번엔 곡을 닫는 **엔딩 태그**예요. <mark>V(E7)로 긴장을 준 뒤, 집(A7)을 크게 울려 '끝!' 하고 매듭지어요.</mark>

```json
{
  "id": "m1.w4.d2.ending_tag",
  "type": "tab",
  "meta": { "title": "Ending tag — E7 to a big A7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1마디 **E7** 부기, 2마디 **A7**을 온음표로 '쾅'. 이 마지막 A7이 곡의 마침표예요.

인트로가 V로 열고, 엔딩이 I로 닫아요. <mark>같은 두 코드가 시작과 끝에서 정반대의 역할</mark>을 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. **A7 부기** 한 마디로 손을 풀어요. <mark>루트가 매 박 또렷한지</mark> 확인해요.

```json
{
  "id": "m1.w4.d2.warmup",
  "type": "tab",
  "meta": { "title": "A7 boogie warmup — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 65, 셔플.** A7 부기 한 마디. 5번 줄 루트 위에서 5도→6도→b7→6도로 걸어요.

이제 인트로의 E7이 곡의 첫 마디 A7으로 넘어가는 이음새를 연습해요.

```json
{
  "id": "m1.w4.d2.intro_to_top",
  "type": "tab",
  "meta": { "title": "Intro E7 into the top (A7)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1마디 **E7**(인트로 끝), 2마디 **A7**(곡 시작). V의 팽팽함이 집으로 풀리는 순간이에요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 여는 문·닫는 문)**
인트로는 **V로 열고**, 엔딩은 **I로 닫는다**를 머릿속에 그려요. <mark>같은 코드가 위치에 따라 역할이 달라져요.</mark>

**20~40분 · 실전 인트로+본문 앞부분 (BPM 80)**
인트로 두 마디를 붙이고 <mark>곡의 첫 마디까지 끊김 없이</mark> 이어 봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
인트로 두 마디를 녹음해요: <mark>시작 신호가 또렷하게 들리는가</mark>.

**오늘의 완료 기준:** 인트로 두 마디(A7-E7)를 붙여 곡의 첫 마디로 매끄럽게 넘어갈 수 있다.

## ④ 팁 / 흔한 실수

인트로와 엔딩에서 자주 나오는 실수예요. 마지막 **A7**을 흐리게 닫으면 곡이 끝난 느낌이 안 나요.

```json
{
  "id": "m1.w4.d2.final_chord",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 — the home chord to end big", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
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
▶ **엔딩은 집(A7)에서 크게.** 마지막 한 방을 확실히 울려야 곡이 닫혀요. 5번 줄 개방 A가 루트예요.

- **인트로가 너무 길어요.** 두 마디면 충분해요. 길어지면 곡이 늘어져요.
- **엔딩 A7이 약해요.** 마지막은 자신 있게 크게 울려요.
- **인트로와 본문 사이가 끊겨요.** E7에서 A7으로 쉼 없이 바로 이어요.
- **셔플이 무너져요.** 장식에 신경 쓰다 롱-숏이 펴져요. 발로 정박을 지켜요.
