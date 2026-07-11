---
title: "부기 리프 — 5도·6도·b7로 걷기"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — R-5-6-b7로 통통 걸어 올라가기

## ① 이론/설명

어제 두 손모양(루트+5도, 루트+6도)을 손에 익혔죠? 오늘은 여기에 딱 한 음, **b7(4번 줄 5프렛)**을 더해 진짜 **부기 리프(boogie riff)**를 완성해요. 루트 위에서 5도→6도→b7으로 통통 걸어 올라가는 이 움직임이, <mark>블루스가 '걷는' 소리</mark>예요. b7 하나가 더해지는 순간, 밋밋하던 리프에 살짝 '긴장의 맛'이 생겨서 훨씬 블루스다워져요.

움직임은 4번 줄 하나에서 다 일어나요. **2프렛=5도**, **4프렛=6도**, **5프렛=b7** — 5번 줄 개방 A(루트)는 그대로 깔고, 위 손가락만 걸어 올라가는 거예요. 손가락은 5도=검지, 6도=약지, b7=**새끼손가락**을 쓰면 벌리기 편해요.

손이 걸어갈 지도부터 볼게요.

```json
{
  "id": "m1.w1.d3.boogie_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie map on the 4th string — 5, 6, b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **4번 줄에서 5→6→b7.** 5번 줄 개방 A 위로 검지·약지·새끼가 순서대로 걸어가요.

부기의 고전 순서는 **R-5-6-b7-6**이에요. 올라갔다가 6도로 살짝 내려오며 마디를 마무리하면, 그 유명한 '척-치기-척-치기' 그루브가 나와요. 오늘 목표는 이 <mark>한 마디를 매끄럽게</mark> 연결하는 거예요.

새끼손가락이 b7까지 안 닿아도 괜찮아요. 손목을 살짝 앞으로 밀면 훨씬 편해져요. 오늘은 빠르기보다 **한 음도 빠지지 않는 것**이 목표예요. 이 한 마디만 손에 붙으면, 내일 셔플까지 얹어 <mark>완성형 A7 부기</mark>가 됩니다. 오늘은 스피드 경쟁이 아니라, 네 음을 또박또박 이어 붙이는 '연결'이 전부예요. 천천히 갈수록 오히려 빨리 붙어요.

## ② 시각 자료

이제 지도를 소리로 옮겨볼게요. 정박 4분음표로 **R+5 → R+6 → R+b7 → R+6** 한 마디예요. (내일은 여기에 셔플을 얹어요.)

```json
{
  "id": "m1.w1.d3.boogie_1bar",
  "type": "tab",
  "meta": { "title": "A7 boogie riff — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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
▶ **BPM 70, 셔플로.** 5번 줄 개방을 계속 누른 채, 4번 줄에서 손가락을 폈다 접어요. <mark>통통 튀는 느낌</mark>이 나면 성공.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 55. 어제의 두 더블스탑(5도·6도)을 번갈아 짚으며 손을 풀어요. <mark>루트가 계속 울리는지</mark> 확인.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = b7 추가)**
5도·6도에 익숙한 손에 **새끼손가락 b7**만 새로 얹어봐요. 소리 없이 5→6→b7 왕복.

아래 반음표 버전으로 네 음을 하나씩 또렷하게 확인해요.

```json
{
  "id": "m1.w1.d3.boogie_slow",
  "type": "tab",
  "meta": { "title": "Boogie connection — slow (half notes)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 55, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 55, 셔플로.** R+5, R+6, R+b7, R+6을 길게. 각 더블스탑이 다 울리는지 들어요.

**20~40분 · 실전 부기 (한 마디 / BPM 70)**
R-5-6-b7-6 한 마디를 **끊김 없이** 반복해요. <mark>손가락이 걸리지 않고 걸어가는지</mark> 살펴요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 체크: <mark>네 음이 다 들리는가</mark> / <mark>b7에서 끊기지 않는가</mark>.

**오늘의 완료 기준:** R-5-6-b7-6 부기 리프 한 마디를 BPM 70에서 음 빠짐 없이 연결해 칠 수 있다.

## ④ 팁 / 흔한 실수

부기 리프에서 자주 막히는 지점만 정리했어요.

```json
{
  "id": "m1.w1.d3.pinky_reach",
  "type": "fretboard_diagram",
  "meta": { "title": "Pinky reach — b7 at fret 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **6도→b7은 새끼로.** 약지(4프렛) 옆에 새끼(5프렛)를 바로 붙여요.

- **b7이 안 눌림.** 새끼손가락 힘이 부족해요. 손목을 앞으로 밀고 새끼 끝을 세워요.
- **리프가 뭉개짐.** 손가락을 미리 다 펴두면 음이 겹쳐요. 필요한 순간에만 짚어요.
- **루트가 사라짐.** 위 손가락에 신경 쓰다 개방 A를 못 울려요. 5번 줄은 늘 살아있게.
- **박이 서두름.** b7까지 뻗느라 급해져요. 느려도 좋으니 다섯 음을 고르게.
