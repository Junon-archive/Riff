---
title: "졸업 — ii-V-I + 턴어라운드 워킹을 녹음"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — 졸업, ii-V-I + 턴어라운드 워킹을 녹음

## ① 이론/설명

드디어 8주차 마지막 날, **졸업**이에요! 오늘은 두 달간 쌓은 모든 어휘를 <mark>졸업 작품</mark> 하나로 녹음해요. 두 달 전을 떠올려 봐요 — 그때는 코드가 바뀌어도 **루트** 하나만 겨우 짚었죠. 그런데 지금은 **Gm7-C7-Fmaj7 + 턴어라운드** 위를, 코드톤·접근음·감싸기·장식을 총동원해 매끄럽게 걸어요. 이 트랙은 여러분의 <mark>베이스 재즈·하모니 캡스톤</mark>이었어요.

오늘의 졸업곡은 이래요. 1~3마디는 **ii-V-I**(Gm7→C7→Fmaj7) 워킹, 4마디는 **턴어라운드** C7이에요. 4마디 끝의 F#이 첫 마디 Gm7의 루트 G에 반음으로 다가가, 4마디 끝이 1마디 처음으로 <mark>자연스럽게 순환</mark>해요. 이 네 마디에 두 달의 어휘 — 코드톤 착지, 접근음 다리, 감싸기, 고스트 — 가 다 들어 있어요. **BPM 90**에서 두세 바퀴를 멈추지 말고 녹음해, 제일 좋은 한 판을 골라요.

완벽하지 않아도 괜찮아요 — <mark>끝까지 흐른</mark> 한 판이 가장 좋은 졸업 작품이에요. 이 녹음은 두 달 전 루트만 짚던 나에게 지금의 소리를 들려주는 선물이에요. 4현으로 남긴 뒤 **5현**으로도 남기면, 워킹 베이스 트랙 졸업이에요. 여기서 끝이 아니에요 — 이제 여러분은 어떤 진행을 만나도 그 위를 걸을 수 있는 베이시스트예요. 먼저 졸업곡이 지나는 자리를 지판으로 마지막으로 짚어요.

```json
{
  "id": "m2.w8.d4.graduation_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Graduation loop map — roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 졸업곡의 세 루트예요. Gm7(**G**)·C7(**C**)·Fmaj7(**F**)을 지나 4마디째 C7이 다시 첫 마디로 돌려요.

```json
{
  "id": "m2.w8.d4.graduation_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Graduation loop map — roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B현으로 졸업곡을 더 묵직하게 남겨도 좋아요.

## ② 시각 자료

드디어 **졸업 녹음**이에요! 두 달의 어휘가 다 들어간 ii-V-I + 턴어라운드 워킹, 4마디 순환이에요. <mark>매 1박 코드에 착지하고, 4마디 끝이 1마디로 되돌아 순환해요.</mark> 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w8.d4.walking_graduation_4",
  "type": "tab",
  "meta": { "title": "Walking graduation ii-V-I-turnaround — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 90, 4현, 스윙 4분음.** Gm7-C7-Fmaj7(1~3마디) + 4마디 턴어라운드(C7 → **F#**로 Gm7 루트 G에 접근). 4마디 끝이 1마디 처음으로 자연스럽게 순환해요.

```json
{
  "id": "m2.w8.d4.walking_graduation_5",
  "type": "tab",
  "meta": { "title": "Walking graduation ii-V-I-turnaround — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B현으로 졸업곡의 저역을 더 받쳐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 풀 런스루를 BPM 60으로 가볍게 돌려 손을 깨워요. 오늘은 이 워킹을 <mark>졸업 녹음</mark>으로 남길 거예요.

**10~20분 · 두뇌 훈련**
졸업곡을 아래처럼 아주 느리게 한 번 더 돌리며, 네 마디의 자리를 손에 마지막으로 새겨요.

```json
{
  "id": "m2.w8.d4.graduation_slow_4",
  "type": "tab",
  "meta": { "title": "Walking graduation, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 아주 느리게. 매 1박 코드톤 착지와 4마디 끝 F#의 순환을 마지막으로 확인해요.

```json
{
  "id": "m2.w8.d4.graduation_slow_5",
  "type": "tab",
  "meta": { "title": "Walking graduation, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 자리는 4현과 똑같아요.

**20~40분 · 실전**
졸업곡을 **BPM 90**에서 순환으로 반복해요. <mark>4마디 끝이 흔들리면</mark> 속도를 낮춰 순환을 매끄럽게 살려요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/졸업**
드디어 졸업 녹음이에요. **BPM 90**에서 두세 바퀴를 멈추지 말고 녹음해, 제일 좋은 한 판을 남겨요. 4현·5현 둘 다 남기면 워킹 베이스 트랙 졸업이에요.

**오늘의 완료 기준:** ii-V-I + 턴어라운드 워킹(4마디 순환)을 BPM 90에서 4현·5현으로 멈추지 않고 녹음할 수 있다. — 졸업 결과물: 나의 첫 워킹 베이스 졸업 녹음. **(워킹 베이스 졸업!)**

## ④ 팁 / 흔한 실수

두 달의 어휘가 이 네 마디에 다 들어 있어요. 마지막으로, 졸업곡이 지나는 **루트와 코드톤**을 한 장의 지도로 눈에 새겨 둬요.

```json
{
  "id": "m2.w8.d4.graduation_summary_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Two-month vocabulary — roots & chord tones (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 두 달의 어휘 지도예요. 루트 **G·C·F**와 코드톤 **b3·3·7**이 네 마디에 골고루 담겨 있어요.

```json
{
  "id": "m2.w8.d4.graduation_summary_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Two-month vocabulary — roots & chord tones (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

- **완벽하려다 멈춰요.** 졸업 녹음은 완벽보다 완주예요. 삐끗해도 멈추지 말고, 한 판을 끝까지 흘려 순환을 남겨요.
- **4마디 끝 F#을 성급히 당겨요.** 마지막 접근음 F#은 제 박에 또박또박 딛어야 첫 마디 G로 자연스럽게 되돌아가요. 신나서 당기지 말고, 순환의 이음매를 차분히 마무리해요.
- **저음 B를 방심해요(5현).** 녹음에 몰두하다 B가 울리기 쉬워요. 왼손 옆면으로 늘 B를 살짝 덮어 두세요.

두 달 전엔 코드가 바뀌면 루트 하나로 겨우 버텼는데, 이제 여러분은 진행을 걷는 베이시스트예요. Gm7-C7-Fmaj7 + 턴어라운드 위를 코드톤과 접근음으로 매끄럽게 걸어, 두 달의 어휘를 한 곡으로 완성했어요. 워킹 베이스 트랙 졸업, 정말 축하해요. 이제 어떤 진행을 만나도, 여러분의 걸음은 그 위를 노래하며 걸어갈 거예요.
