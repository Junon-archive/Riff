---
title: "블루노트 한 방울 — 마이너 펜타에 눈물을 더한다"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 블루노트(b5)의 위치와 소리를 익힌다

## ① 이론/설명

어제 익힌 박스1에 오늘은 음 하나를 더해요. 바로 **블루노트**예요. A 블루스에서 블루노트는 **b5, 즉 Eb** 음이에요. 마이너 펜타에는 원래 없던 음인데, 이 한 음이 더해지는 순간 스케일의 색이 확 바뀌어요. <mark>블루노트는 블루스가 흘리는 눈물 한 방울이에요.</mark> 슬픈 듯 긴장된 듯, 뭐라 설명하기 어려운 그 특유의 '우는' 소리가 바로 여기서 나와요. 옛 블루스 기타리스트들은 이 한 음을 절묘하게 걸쳐서, 말로 다 못 하는 감정을 소리로 대신 전했어요.

위치는 외우기 아주 쉬워요. 박스1의 **5번 줄에서 4(5프렛)와 5(7프렛) 사이**, 딱 가운데인 **6프렛**이 블루노트예요. **가운데 손가락(2번)**으로 살짝 얹으면 돼요. <mark>4에서 5로 올라가는 길목에 놓인 징검다리라고 생각하면 쉬워요.</mark> 원래 있던 두 음 사이에 몰래 낀 음이라, 손이 기억하기도 편해요. 5번 줄만 봐도 4·b5·5가 5·6·7프렛에 나란히 붙어 있으니, 한 줄 위에서 세 음을 차례로 짚어 보면 위치가 금방 손에 들어와요.

블루노트에는 한 가지 요령이 있어요. <mark>이 음은 오래 머무는 음이 아니라, 스쳐 지나가는 음이에요.</mark> 4나 5, 근음 같은 안정된 음으로 이어 주면 그 긴장이 예쁘게 풀려요. 반대로 블루노트에 딱 멈춰 서면 어색하게 들릴 수 있어요. 블루노트가 주는 긴장은 잘못이 아니라, 뒤따르는 안정된 음을 더 반갑게 만들어 주는 장치예요. 그래서 오늘은 **짚는 위치와 소리**에만 집중해요. 프레이즈로 엮는 건 내일 해요. 먼저 이 눈물 한 방울이 어디에 사는지, 귀로 확인해 봐요.

```json
{
  "id": "m2.w5.d2.blue_spot",
  "type": "scale_shape",
  "meta": { "title": "The blue note b5 between 4 and 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **블루노트 b5=Eb는 여기 살아요.** 5번 줄 4(5프렛)와 5(7프렛) 사이, 6프렛이에요. 2번 손가락으로 가볍게 짚어요.

## ② 시각 자료

이제 박스1 전체에 블루노트를 얹은 지도를 볼게요. <mark>보라색 점 하나가 오늘 새로 더한 블루노트(b5)예요.</mark> 파란 근음과 나머지 스케일 음 사이에서 이 보라 점 하나가 어디 있는지 눈에 익혀요.

```json
{
  "id": "m2.w5.d2.box1_blue",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1 with the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **박스1 + 블루노트.** 5번 줄 6프렛의 보라 점이 새 식구예요. 나머지는 어제 그 박스 그대로예요.

보라 점은 딱 하나예요. <mark>이 하나가 마이너 펜타를 블루스의 소리로 바꿔 줘요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. 어제의 **박스1**을 한 번 오르내리며 손을 풀어요. <mark>5번 줄 6프렛 자리를 미리 눈여겨</mark> 둬요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 블루노트 짚기)**
5번 줄에서 4→b5→5를 천천히 짚으며 <mark>블루노트의 '우는' 색을 귀로</mark> 느껴 봐요.

**20~40분 · 실전 블루노트 지나가기 (BPM 70)**
블루노트를 스치듯 지나 안정된 음으로 이어 주는 연습이에요.

```json
{
  "id": "m2.w5.d2.blue_slide",
  "type": "tab",
  "meta": { "title": "Passing through the blue note — 4 b5 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70, 셔플 느낌.** 4에서 b5를 거쳐 5로, 마지막엔 근음 A로 내려와 마무리해요.

<mark>블루노트에 멈추지 말고</mark> 물 흐르듯 지나가요. 마지막 근음에서 편안하게 착지해요.

**40~50분 · 녹음 (오늘의 미션)**
4→b5→5→근음을 한 번 녹음해요: <mark>블루노트가 눈물처럼 살짝 긴장을 주고 풀리는지</mark> 들어 봐요.

**오늘의 완료 기준:** 5번 줄 6프렛의 블루노트를 2번 손가락으로 정확히 짚었고, 4→b5→5→근음으로 스치듯 지나 안정된 음에 착지했다.

## ④ 팁 / 흔한 실수

블루노트를 쓸 때 흔한 실수예요. 이 음은 양념이지 주재료가 아니에요.

```json
{
  "id": "m2.w5.d2.blue_tip",
  "type": "scale_shape",
  "meta": { "title": "Resolve off the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **블루노트는 스쳐 지나가요.** 6프렛에서 바로 옆 5(7프렛)나 근음으로 이어 주면 긴장이 예쁘게 풀려요.

- **블루노트에 오래 머물러요.** 짧게 스치고 안정된 음으로 넘어가야 '우는' 맛이 살아요.
- **b5를 3프렛에서 찾아요.** A 블루스의 b5는 5번 줄 6프렛이에요. 위치를 헷갈리지 마요.
- **2번 손가락을 안 써요.** 4는 검지, b5는 중지 — 손가락을 정해 두면 늘 같은 자리를 빠르게 짚어요.
- **긴장이 무섭다고 피해요.** 그 긴장이 바로 블루스예요. 살짝 걸치고 풀면 오히려 멋져요.
