---
title: "옥타브 추가 — 옥타브 박스로 R-5-8 완성"
dayKey: "m1.w4.d2"
estMinutes: 30
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 옥타브 추가, 옥타브 박스로 라인 열기

## ① 이론/설명

어제 루트에 **5도**를 더해 라인이 한 뼘 넓어졌죠. 오늘은 마지막 재료, **옥타브**를 얹어 **<mark>R–5–8</mark>**을 완성해요. **옥타브**는 같은 이름의 음을 **한 옥타브 위**에서 내는 거예요 — 개방 E의 옥타브도 **똑같은 E**, 소리만 더 높죠. 이 한 음이 라인을 위아래로 넓게 열어줘요. 루트가 바닥, 5도가 기둥이라면, 옥타브는 그 위에 얹는 **밝은 지붕**인 셈이에요.

옥타브를 찾는 손모양이 오늘의 핵심이에요. **루트에서 2현 위, 2프렛 위**가 옥타브예요 — 5도처럼 한 줄만 건너는 게 아니라, **한 줄을 건너뛰어** 두 칸 위 줄로 가요. 개방 E(**4번현**)라면, 3번현을 지나쳐 **2번현 2프렛**이 옥타브 E죠. 이걸 <mark>옥타브 박스</mark>라고 불러요 — 근음과 옥타브가 네모 상자처럼 손 안에 잡히거든요.

줄을 건너뛰는 만큼 **뮤팅이 더 중요해요**. 건너뛴 3번현이 딸려 울리면 소리가 뭉개지니까, 안 치는 줄은 손가락으로 살짝 덮어 재워요. 대신 옥타브가 들어오면 <mark>라인이 위아래로 통통 튀어</mark> 훨씬 신나요. 루트·5도·옥타브 셋이면 이제 어엿한 베이스라인이에요. 세 음이 한 손 안에서 오르내리니, 라인이 훨씬 입체적으로 들려요.

오늘도 **4현이든 5현이든 운지가 똑같아요**. 5현이라면 저음 B(5번현)를 엄지로 재워두고요. **4주 전엔 한 음도 벅찼는데**, 오늘은 세 음을 오가는 손이라니 — 서두르지 말고 옥타브 자리만 정확히 익혀요.

## ② 시각 자료

오늘은 **옥타브를 손에 익히는 두 예제**를 봐요. 먼저 **옥타브 박스**를 반 마디씩 짚어 <mark>줄을 건너뛰는 손모양</mark>을 익히고, 그다음 **R–5–8–5**로 굴려 오늘의 완성물을 만들어요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

예제로 들어가기 전에, **옥타브 박스 손모양**을 지판으로 먼저 눈에 새겨요. 아래 그림에서 파랑 근음 E(4번현)부터 **2현 위·2프렛 위**로 올라가면 옥타브 E(2번현 2프렛)예요 — 근음·5도·옥타브가 네모 상자처럼 한 손에 잡혀요.

```json
{
  "id": "m1.w4.d2.octave_box_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box hand shape on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 근음 E → 5도 B → 옥타브 E. 사이의 3번현은 비워 두는(재우는) 자리예요.

```json
{
  "id": "m1.w4.d2.octave_box_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box hand shape on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손 모양은 4현과 똑같아요. 맨 아래 저음 B(5번현)는 ×, 엄지로 재워 두세요.

**예제 1 — 옥타브 박스.** 개방 E(**4번현**) 루트를 반 마디, **2번현 2프렛**의 옥타브를 반 마디 짚어요. 사이의 **3번현은 건드리지 않고 재운 채** 손을 옮겨요.

```json
{
  "id": "m1.w4.d2.octave_shape_4",
  "type": "tab",
  "meta": { "title": "Octave box on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 파랑 루트 E → 초록 옥타브. **2현 위·2프렛 위** 상자 모양을 눈에 익혀요.

```json
{
  "id": "m1.w4.d2.octave_shape_5",
  "type": "tab",
  "meta": { "title": "Octave box on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 운지는 4현과 똑같아요. 저음 B는 엄지로 덮어 재워두세요.

**예제 2 — R–5–8–5 바운스(오늘의 완성물).** 루트→5도→옥타브→5도로 통통 굴려요. 4분음표로, 옥타브에서 <mark>라인이 튀어 오르는 느낌</mark>을 느껴요.

```json
{
  "id": "m1.w4.d2.root_fifth_octave_4",
  "type": "tab",
  "meta": { "title": "R-5-8 bounce on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 루트·5도·옥타브(모두 파랑)를 한 마디에. 줄을 건너뛰는 순간 **안 치는 줄이 새지 않게**.

```json
{
  "id": "m1.w4.d2.root_fifth_octave_5",
  "type": "tab",
  "meta": { "title": "R-5-8 bounce on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 75, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 계속 재워 두세요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제 익힌 R–5 번갈아를 BPM 60으로 다시 풀어요. **두 음이 고르게 갈리는지** 확인하며 손을 데워요.

**7~17분 · 오늘의 기술**
예제 1(옥타브 박스)을 BPM 70에서 반복해요. <mark>3번현을 건너뛰어 옥타브로 가는 손</mark>이 매끄러운지, **건너뛴 줄이 조용한지** 봐요.

**17~27분 · 적용 (오늘의 완성물)**
예제 2(R–5–8–5)를 BPM 70에서 4번 → **줄 건너뛰기가 깨끗하면** BPM 75로 올려 4번. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**27~30분 · 체크**
오늘 도달한 BPM을 적고, 30초 녹음해 **옥타브에서 라인이 튀는지** 들어봐요.

**오늘의 완료 기준:** R–5–8(루트·5도·옥타브) 한 코드(E)를 투핑거로, 옥타브 박스에서 건너뛴 줄을 재워 4현·5현 둘 다 70~75에서 또렷하게 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **옥타브만 약해요.** 줄을 건너뛰느라 옥타브가 작아지기 쉬워요. 오른손이 2번현을 확실히 뜯어 세 음이 같은 세기로 나오게 하세요.
- **건너뛴 3번현이 울려요.** 옥타브로 갈 때 3번현이 딸려 울리면 뭉개져요. 왼손 검지 끝이나 오른손으로 3번현을 살짝 덮어 재우세요.
- **옥타브 자리를 손이 못 찾아요.** '2현 위, 2프렛 위' 상자 모양을 눈 감고도 잡히게 반복하세요. 근음이 어디든 옥타브는 늘 그 상자 안이에요.
- **저음 B 방심(5현).** 옥타브에 집중하다 B를 놓치면 저음이 웅웅 새요. 엄지는 늘 B 위에 얹어두세요.
