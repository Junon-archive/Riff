---
title: "코드톤 아르페지오 — 4분음 워킹의 감각"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 코드톤 아르페지오, 4분음으로 걷기

## ① 이론/설명

밀도 램프의 세 번째 계단이에요. 어제는 루트-5도(2분음)로 걸었고, 오늘은 드디어 **4분음(quarter)**으로 한 박에 한 음씩, **코드톤 R-3-5-b7 네 음을 모두** 밟아요. <mark>4분음 워킹이야말로 재즈 워킹 베이스의 진짜 걸음</mark>이에요. 뼈대에 살이 붙어 라인이 성큼성큼 걷기 시작하는 순간이죠.

한 마디 안에 네 음이 다 들어가니 리듬이 빨라진 것 같지만, 사실 규칙은 어제와 똑같아요 — **1박은 루트**, 그리고 2·3·4박에 3도·5도·b7을 순서대로 얹어요. 특히 **3도**는 그 코드가 메이저인지 마이너인지 성격을 정하는 음이라, 아르페지오에서 가장 귀에 잘 들리는 색이에요. <mark>1박 루트에 확실히 착지</mark>한 뒤 나머지 세 음을 고르게 이어가면 돼요.

오늘 밟을 자리는 이미 지난주에 다 익힌 곳이에요. F7이면 **R(4번현 1프렛)-3(4번현 5프렛)-5(3번현 3프렛)-b7(3번현 6프렛)**, Bb7이면 같은 손모양을 한 현 위로 옮긴 자리예요. 새 위치를 외우는 게 아니라, **아는 네 자리를 4분음 리듬에 태우는** 연습이에요.

먼저 F7의 코드톤 네 자리를 다시 눈에 담아둬요.

```json
{
  "id": "m1.w2.d3.f_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 파랑 네 개가 F7의 R-3-5-b7. 오늘 이 네 자리를 4분음으로 밟아요.

```json
{
  "id": "m1.w2.d3.f_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

**5현**을 써도 네 자리는 4현과 완전히 똑같아요. 저음 B는 오늘도 잠시 덮어 두고, **네 음을 균일한 4분음으로** 잇는 데만 집중해요. 위치는 이미 손에 있으니, 오늘의 과제는 오직 리듬의 고름이에요.

## ② 시각 자료

이제 코드톤을 4분음으로 걸어봐요. 먼저 **F7 아르페지오**, 그다음 **Bb7 아르페지오**를 소리로 확인해요. <mark>두 코드는 같은 손모양이 위치만 옮긴 것</mark>이라 감각이 그대로 이어져요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w2.d3.f_arp_4",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76, 4현.** F7의 R-3-5-b7을 한 박에 하나씩. 1박 루트에 착지한 뒤 고르게 올라가요.

```json
{
  "id": "m1.w2.d3.f_arp_5",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

다음은 **Bb7 아르페지오**예요. F7 모양을 한 현 위로 옮긴 자리에서 같은 R-3-5-b7을 밟아요.

```json
{
  "id": "m1.w2.d3.bb_arp_4",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76, 4현.** Bb7의 R(3번현 1프렛)-3-5-b7. F7과 손모양이 똑같아요.

```json
{
  "id": "m1.w2.d3.bb_arp_5",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 R-5 라인을 BPM 72로 한 번 걸어요. **1박 루트 착지**를 손끝에 되살립니다.

**10~20분 · 두뇌 훈련**
F7 코드톤 네 자리를 손끝으로 확인하고, 아래 준비 예제로 아르페지오를 **올라갔다 내려오며** 느리게 익혀요. 위치를 손에 다시 새겨요.

```json
{
  "id": "m1.w2.d3.arp_prep_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down prep — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72, 4현.** 1마디는 올라가고, 2마디는 내려와요. 오르내리며 네 자리를 손에 굳혀요.

```json
{
  "id": "m1.w2.d3.arp_prep_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down prep — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

**20~40분 · 실전 (오늘의 완성물)**
위 **F7 아르페지오**와 **Bb7 아르페지오**를 **BPM 76**에서 번갈아 반복해요. <mark>네 개의 4분음이 모두 같은 길이로 고르게</mark> 이어지는 게 목표예요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 네 음의 **간격이 일정한지** 들어봐요. 특정 음만 늦거나 빠르면 그 박만 따로 천천히 반복해요.

**오늘의 완료 기준:** F7·Bb7 코드톤 아르페지오(R-3-5-b7)를 BPM 76 스윙 4분음으로 균일하게, 4현·5현 둘 다 걸을 수 있다.

## ④ 팁 / 흔한 실수

- **뒤로 갈수록 빨라져요.** R-3까지는 또박또박하다 5-b7에서 서두르기 쉬워요. 네 박이 자로 잰 듯 같은 간격이어야 해요.

```json
{
  "id": "m1.w2.d3.c_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** C7도 같은 손모양이에요 — R(3번현 3프렛)-3-5-b7. 여유가 되면 C7 아르페지오도 4분음으로 밟아봐요.

```json
{
  "id": "m1.w2.d3.c_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 내려가 더 낮은 옥타브도 시험해 봐요.

- **b7을 짧게 끊어요.** 마지막 b7도 다음 박까지 충분히 울려야 마디가 꽉 차요. 손가락을 급히 떼지 마세요.
- **3도를 흘려요.** 3도는 코드 색을 정하는 음이에요. 다른 음에 묻히지 않게 또렷이 뜯어요.
- **5현 저음 B 방심.** 네 음에 집중하다 B를 건드리면 저음이 새요. 안 쓰는 B는 늘 덮어 두세요.
</content>
