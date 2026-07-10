---
title: "드럼과 락 — 서브디비전 느끼고 킥에 루트 얹기"
dayKey: "m1.w3.d1"
estMinutes: 30
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — 서브디비전 느끼기, 킥에 루트 얹기

## ① 이론/설명

2주차엔 왼손 운지와 뮤팅으로 소리를 깨끗하게 다듬었죠. 이번 주는 그 깨끗한 소리를 **드럼과 하나로** 붙여요. 베이스는 혼자 튀는 악기가 아니에요 — **<mark>드럼의 킥과 한 몸</mark>**이 될 때 곡이 단단해지거든요. 그 첫걸음이 오늘의 주제, **서브디비전(박 쪼개기)**이에요. 한 박을 반으로 **쪼개 세는 감각**이죠.

4/4 한 마디를 **'1 & 2 & 3 & 4 &'**로 세어봐요. 숫자가 **정박**, &(앤)이 그 사이의 **뒷박**이에요. 정박과 뒷박의 간격이 **자로 잰 듯 똑같아야** 그루브가 흔들리지 않아요. 발로 정박을 툭툭 밟으면서 입으로 뒷박을 세면, 몸속에 **<mark>일정한 8분음표 격자</mark>**가 생겨요 — 이 격자가 오늘 모든 연습의 바탕이에요.

이제 그 격자 위에 드럼을 얹어요. 대부분의 락·팝에서 **킥(베이스 드럼)**은 정박, 특히 **1박과 3박**에 묵직하게 떨어져요. 오늘의 진짜 목표는 **<mark>킥이 떨어지는 바로 그 순간에 루트를 똑같이 착지</mark>**시키는 거예요. 비유하면 **드럼 킥이 파놓은 자리에 베이스가 쏙 들어가 앉는** 느낌이죠. 킥과 루트가 **같은 찰나**에 울리면 둘이 겹쳐 **하나의 큰 저음**처럼 들려요 — 그게 곡의 바닥을 단단하게 만드는 비결이에요.

오늘 쓰는 루트는 개방 E(4번현)예요. **4현이든 5현이든 운지가 똑같고**, 5현이라면 저음 B(5번현)를 엄지로 덮어 재워두면 돼요. 속도는 급하지 않아요 — **킥에 손을 정확히 맞추는 것** 하나에만 온 신경을 쏟아요.

## ② 시각 자료

오늘은 **킥에 루트를 얹는 두 예제**를 봐요. 먼저 정박마다 루트를 하나씩 떨어뜨려 <mark>킥과 루트를 동시에 착지</mark>시키고, 그다음 8분음표로 박을 쪼개 **일정한 격자**를 손에 새겨요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

**예제 1 — 4분음표로 킥에 착지.** 개방 E를 정박마다 한 번씩, **1·2·3·4**에 딱 맞춰 짚어요. 킥이 강하게 오는 1박·3박에서 특히 소리가 겹치는지 귀로 확인해요.

```json
{
  "id": "m1.w3.d1.kick_root_quarter_4",
  "type": "tab",
  "meta": { "title": "Kick-root quarters on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 파랑 개방 E를 정박마다 하나씩. 드럼(또는 메트로놈)의 킥과 **같은 순간**에 착지시켜요.

```json
{
  "id": "m1.w3.d1.kick_root_quarter_5",
  "type": "tab",
  "meta": { "title": "Kick-root quarters on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 운지는 4현과 똑같아요. 저음 B는 엄지로 덮어 재워두세요.

**예제 2 — 8분음표로 세기.** 이제 한 박을 둘로 쪼개 개방 E를 여덟 번. **'1 & 2 & 3 & 4 &'**를 입으로 세면서, 여덟 음의 간격이 균일한지 느껴요.

```json
{
  "id": "m1.w3.d1.subdivision_eighths_4",
  "type": "tab",
  "meta": { "title": "Counting eighths on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 8분음표 여덟 개를 자로 잰 듯 균일하게. 정박(숫자)에 킥이 오면 그 음을 살짝 또렷하게.

```json
{
  "id": "m1.w3.d1.subdivision_eighths_5",
  "type": "tab",
  "meta": { "title": "Counting eighths on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요. 빨라져도 저음 B가 새지 않게 엄지로 덮어두세요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제까지 익힌 뮤팅 루트 라인을 BPM 60으로 다시 풀어요. **한 음만 울리고 나머지는 조용한지** 확인하며 손을 데워요.

**7~17분 · 오늘의 기술**
예제 1(4분 루트)을 메트로놈 BPM 70에 맞춰요. <mark>클릭과 내 음이 하나로 겹쳐 들릴 때까지</mark> 타이밍만 다듬어요 — 빠르기보다 **정확히 얹기**가 먼저예요.

**17~27분 · 적용**
예제 2(8분 세기)를 BPM 70에서 반복. 정박에 킥을 상상하며 얹고, **여덟 음의 간격이 균일**한지 느껴요. 흔들리면 다시 예제 1로 돌아가요.

**27~30분 · 체크**
오늘 도달한 BPM을 적고, 30초 녹음해 **킥과 루트가 한 소리처럼 붙는지** 들어봐요.

**오늘의 완료 기준:** 개방 E 루트를 메트로놈 정박(킥)에 정확히 얹어, 4현·5현 둘 다 60~70에서 클릭과 겹치게 착지시킬 수 있다.

## ④ 팁 / 흔한 실수

- **음이 킥보다 빠르거나 느려요.** 미세하게 앞서거나 처지면 소리가 둘로 갈려요. 클릭을 '듣고 반응'하지 말고, 클릭이 올 자리를 미리 예상해 함께 떨어뜨려요.
- **뒷박을 놓쳐요.** 정박만 세다 보면 &가 흐트러져요. 입으로 '앤'을 또박또박 소리 내며 8분 격자를 계속 붙잡으세요.
- **뮤팅을 잊어요.** 타이밍에 집중하다 안 치는 줄이 함께 울면 킥과의 겹침이 흐려져요. 지난주 뮤팅은 이번 주에도 그대로 켜 두세요.
- **저음 B 방심(5현).** 킥에 손 맞추는 데 빠져 B를 놓치면 저음이 웅웅 새요. 엄지는 늘 B 위에 얹어두세요.
