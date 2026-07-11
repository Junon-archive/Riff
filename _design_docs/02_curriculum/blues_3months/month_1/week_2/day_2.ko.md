---
title: "부기를 옮긴다 — D7·E7 부기"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 같은 손모양을 D7·E7로 옮긴다

## ① 이론/설명

어제 세 코드를 손에 넣었으니, 오늘은 1주차 **부기 리프**를 그대로 D7·E7로 옮겨요. 놀라운 사실 하나. <mark>부기 손모양은 코드가 바뀌어도 똑같아요.</mark> 루트를 짚고, 바로 옆 줄에서 **5도→6도→b7→6도**로 손가락을 폈다 접는 그 모양, 기억하죠? 이걸 코드마다 루트 줄만 바꿔 그대로 얹으면 돼요. 새 손모양을 처음부터 외우는 게 아니라, 이미 익힌 하나를 위치만 옮기는 거라 훨씬 수월해요. 기타에서는 이렇게 한 모양을 여러 자리로 옮겨 쓰는 일이 아주 많아요. 오늘 그 원리를 처음으로 몸으로 느끼게 돼요. 그러니 손이 헷갈려도 조급해하지 말고, 위치만 천천히 확인해요.

핵심은 루트 줄이에요. A7은 5번 줄, D7은 4번 줄, E7은 6번 줄이 루트예요. <mark>루트가 한 줄 옮겨가면, 걸어 다니는 줄도 나란히 한 줄 옮겨가요.</mark> 그래서 A7 부기는 **5·4번 줄**, D7 부기는 **4·3번 줄**, E7 부기는 **6·5번 줄**에서 똑같이 걸어요. 루트가 어느 줄에 있든, 걸어가는 자리는 늘 그 바로 옆 줄이에요. 이 규칙 하나만 붙잡으면 세 코드가 다 같은 그림처럼 보여요.

오늘은 D7과 E7 부기를 각각 한 마디씩 또박또박 익혀요. 아직 **셔플 필**로 굴려도 좋고, 정박으로 짚어도 좋아요. <mark>중요한 건 손모양이 코드를 넘어 그대로 이어진다는 감각이에요.</mark>

먼저 **D7 부기**의 손모양이에요.

```json
{
  "id": "m1.w2.d2.d7_boogie_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "D7 boogie shape — root on 4th string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **4번 줄 개방 D**가 루트, 3번 줄에서 검지·약지·새끼가 걸어가요.

## ② 시각 자료

이제 소리로 확인해요. **D7 부기** 한 마디예요.

```json
{
  "id": "m1.w2.d2.d7_boogie",
  "type": "tab",
  "meta": { "title": "D7 boogie — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플로.** 4번 줄 개방 D를 누르고 3번 줄에서 5도(2프렛)→6도(4프렛)→b7(5프렛)→6도로 걸어요.

다음은 **E7 부기**예요. 이번엔 6번 줄이 루트라 저음이 더 묵직해요. <mark>손모양은 A7·D7과 똑같고, 걸어가는 줄만 6·5번으로 내려왔어요.</mark>

```json
{
  "id": "m1.w2.d2.e7_boogie",
  "type": "tab",
  "meta": { "title": "E7 boogie — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플로.** 6번 줄 개방 E를 누르고 5번 줄에서 5도(2프렛)→6도(4프렛)→b7(5프렛)→6도로 걸어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. A7 부기 한 마디로 손을 데워요. <mark>롱-숏 셔플이 살아있는지</mark> 발로 확인해요.

어제의 A7 부기에서 D7 부기로 넘어가는 이동을 천천히 이어 봐요.

```json
{
  "id": "m1.w2.d2.warmup",
  "type": "tab",
  "meta": { "title": "Boogie move A7 to D7 — slow warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
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
▶ **BPM 65, 셔플로.** 1마디 A7(5번 줄 루트), 2마디 D7(4번 줄 루트) — 같은 손모양이 한 줄 위로 옮겨간 것뿐이에요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 루트 줄 이동)**
부기 순서(5-6-b7-6)는 그대로, **루트 줄만 5→4→6번**으로 옮긴다고 머릿속에 그려요.

**20~40분 · 실전 D7·E7 부기 (각 한 마디 / BPM 80)**
D7 부기와 E7 부기를 번갈아 반복해요. <mark>루트가 매 박 울리는지</mark> / <mark>걸어가는 줄이 깨끗한지</mark> 봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
각 부기를 30초씩 녹음: <mark>세 코드의 부기가 같은 손모양으로 들리는가</mark>.

**오늘의 완료 기준:** D7 부기(4번 줄 루트)와 E7 부기(6번 줄 루트)를 각각 한 마디씩 셔플로 굴릴 수 있다.

## ④ 팁 / 흔한 실수

부기를 옮길 때 자주 나오는 실수예요.

```json
{
  "id": "m1.w2.d2.e7_mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "E7 boogie — keep it on strings 6 and 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true }
  ]}
}
```
▶ **E7 부기는 6·5번 줄에서만.** 4·3번 줄이 새어 나오면 소리가 지저분해져요. 안 쓰는 줄은 손끝으로 막아요.

- **루트 줄을 헷갈려요.** A7=5번, D7=4번, E7=6번. 옮기기 전에 루트 줄을 먼저 찾아요.
- **손모양이 바뀌어요.** 코드가 바뀌어도 5-6-b7-6 순서는 그대로예요. 프렛 간격을 똑같이 유지해요.
- **D7에서 걸어가는 줄이 흐릿해요.** 3번 줄 4프렛(6도)을 약지로 정확히 눌러요.
- **저음이 새요.** E7 부기에서 4번 줄이 울리면 답답해져요. 오른손으로 살짝 덮어요.
