---
title: "슬랩 첫날 — 엄지로 치는 썸(둥!)"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — 엄지로 치는 썸, 둥!

## ① 이론/설명

드디어 슬랩의 문을 여는 날이에요. 슬랩이 어렵게 들렸다면 딱 한 문장만 기억해요 — **슬랩은 손가락이 아니라 드럼이에요.** 엄지로 치는 **썸(Thumb)**은 **킥드럼**, 손가락으로 튕기는 팝은 스네어예요. 오늘은 그 둘 중 **킥, 즉 <mark>썸 소리(둥!)</mark>** 하나만 냅니다. 화려한 라인은 잠시 미뤄두고, 굵고 균일한 한 방에만 집중해요.

썸의 핵심은 손이 아니라 **팔뚝의 회전**이에요. 문고리를 돌리듯 팔뚝을 살짝 비틀면, 엄지가 자연스럽게 줄을 향해 떨어져요. 이때 줄에 닿는 건 엄지 끝이 아니라 **<mark>엄지의 옆면</mark>**이에요. 치는 위치는 넥 끝, **브리지에서 조금 떨어진 마지막 프렛 근처**가 좋아요. 여기가 줄이 단단해서 '둥!' 하는 타격음이 잘 나요.

가장 중요한 감각은 **튕겨 나오기(bounce)**예요. 엄지로 줄을 누르고 멈추면 소리가 죽어요. 트램펄린을 튕기듯, 줄을 **<mark>치자마자 곧바로 튀어 나와야</mark>** 줄이 프렛에 부딪히며 그 특유의 금속성 '둥'이 살아나요. 오늘 목표는 딱 하나 — **개방 E(4번현)**를 썸으로 쳐서 **네 번 다 같은 크기·같은 톤**으로 울리는 거예요.

처음엔 '퍽' 하고 둔한 소리만 나도 정상이에요. 튕기는 각도와 세기가 손에 익으면 며칠 안에 '둥!'으로 바뀌어요. **5현**을 쓴다면 저음 B가 밑에 하나 더 있으니, 엄지가 지나가다 B를 건드리지 않게만 신경 쓰면 돼요. E·A·D·G 위치는 **4현과 완전히 똑같으니** 자기 악기만 보고 그대로 따라오면 됩니다.

## ② 시각 자료

오늘은 왼손을 거의 쓰지 않아요 — **개방 E** 한 음을 썸으로만 칩니다. 먼저 엄지가 겨눌 **타점**을 지판에서 확인하고, 그다음 4분음표·8분음표로 <mark>같은 톤을 촘촘히</mark> 이어가요. 각 예제는 **4현·5현 두 버전**으로 나란히 실었어요.

먼저 **썸 타점 지도**예요. 파랑 점이 근음 E(4번현) — 엄지 옆면으로 이 줄을 브리지 근처에서 튕겨요.

```json
{
  "id": "m1.w1.d1.thumb_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb slap spot on open E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 파랑 점이 근음 E(4번현)예요. 엄지 옆면으로 이 줄을 브리지 근처에서 튕겨요.

```json
{
  "id": "m1.w1.d1.thumb_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb slap spot on open E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** E 자리는 4현과 똑같아요. 저음 B는 엄지가 지나가다 건드리지 않게 살짝 덮어 둬요.

**예제 1 — 썸 4분음표.** 한 박에 한 번씩 개방 E를 썸으로 쳐요. 악보의 **T**는 엄지로 치라는 뜻이에요.

```json
{
  "id": "m1.w1.d1.thumb_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 메트로놈 한 박에 썸 한 번(T). 네 번 다 '둥' 크기가 같은지 귀로 확인해요.

```json
{
  "id": "m1.w1.d1.thumb_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 덮어 안 울리게 두세요.

**예제 2 — 썸 8분음표.** 한 박을 둘로 쪼개 여덟 번. 빨라져도 <mark>'둥' 톤이 무너지지 않는 선</mark>까지만 올려요.

```json
{
  "id": "m1.w1.d1.thumb_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 한 박에 두 번씩. 빨라져도 '둥' 톤이 '퍽'으로 뭉개지지 않게.

```json
{
  "id": "m1.w1.d1.thumb_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 4현과 음이 똑같아요. 여기서도 저음 B는 엄지로 재워 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어깨와 팔의 힘을 툭 빼고, **팔뚝을 문고리 돌리듯** 가볍게 비트는 동작만 반복해요. 아직 소리보다 **편한 회전**이 먼저예요.

**10~20분 · 두뇌 훈련**
개방 E를 아주 느리게 썸으로 쳐요. <mark>엄지 옆면이 줄을 치고 곧바로 튀어 나오는지</mark>, 그 **튕겨 나오기**에만 집중합니다.

**20~40분 · 실전**
예제 1(4분음표)을 **BPM 60**에서 반복 → '둥' 톤이 고르면 예제 2(8분음표)로 넘어가 **BPM 65**. 소리가 '퍽'으로 둔해지면 다시 4분음표로 내려와요.

**40~50분 · 녹음/피드백**
30초 녹음해 **네 번의 썸이 같은 크기·같은 톤**인지 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 개방 E를 썸으로 쳐서 60~65에서 네 번 다 같은 크기·같은 '둥' 톤으로 균일하게 울릴 수 있다.

## ④ 팁 / 흔한 실수

- **줄을 누르고 멈춰요.** 엄지가 줄에 붙어 있으면 소리가 죽어요. 치자마자 트램펄린처럼 튀어 나오게 하세요.
- **엄지 끝으로 치기.** 끝이 아니라 옆면으로 쳐야 넓고 단단한 '둥'이 나요. 엄지를 살짝 눕혀요.
- **너무 세게.** 힘으로 때리면 손만 아프고 톤은 더 나빠져요. 세기보다 튕기는 각도가 소리를 만들어요.
- **저음 B 방심(5현).** 썸에 집중하다 B를 스치면 저음이 웅웅 새요. 엄지는 늘 B 위를 덮고 지나가세요.
