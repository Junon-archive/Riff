---
title: "요소 종합 — 컴핑 + 장식 한 마디"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 요소 종합: 컴핑에 장식을 얹다

## ① 이론/설명

네오소울 **졸업 주간**의 첫날이에요. 이번 주는 두 달간 익힌 조각을 한 곡으로 모아요. 오늘은 그 첫걸음 — **컴핑**과 **장식**을 한 마디에 함께 담아봐요. <mark>Dm9 컴핑에 b3→3 스미어를 얹으면, 코드가 노래하기 시작해요.</mark>

재료는 이미 손에 있어요. **Dm9** 보이싱, 스탭 사이의 **뮤트 커팅**, 그리고 b3에서 3으로 미끄러지는 **스미어**예요. <mark>세 조각을 한 마디 안에서 자연스럽게 이어 붙이는 게 오늘의 전부예요.</mark> 서두르지 않아도 돼요.

먼저 **Dm9** 그립을 눈에 다시 새겨요. 이 손 모양이 이번 주 내내 **홈 베이스**가 돼요. <mark>손가락이 자리를 알 만큼 익으면, 장식을 얹을 여유가 생겨요.</mark>

```json
{
  "id": "m2.w8.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ 5번 줄 5프렛(R)에 b3·b7·9를 얹은 Dm9 컴핑 그립이에요.

## ② 시각 자료

이제 **컴핑**과 **장식**을 하나로 묶은 **1마디 종합**이에요. Dm9 스탭·커팅이 굴러가다가 b3→3 스미어로 살짝 물들어요. <mark>코드를 치는 게 아니라 어루만지는 첫 느낌이에요.</mark>

```json
{
  "id": "m2.w8.d1.combined_bar",
  "type": "tab",
  "meta": { "title": "Combined bar — comping + decoration", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 72, 스윙16.** Dm9 스탭과 커팅 사이 3박째에 b3→3 스미어가 번져요. 컴핑과 장식이 한 마디에 함께 있어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 **Dm9** 스탭을 정박에 또박또박 쳐요. <mark>정박이 단단해야 장식이 흔들리지 않아요.</mark>

**10~20분 · 두뇌 훈련 (장식 얹기)**
스탭 사이에 **뮤트 커팅**을 넣고, 3박째에 b3→3 **스미어**를 하나만 얹어봐요. 천천히, 하나씩.

**20~40분 · 실전 1마디 종합 (BPM 72)**
위 **1마디 종합**을 반복해요. 아래 느린 버전으로 스미어 자리를 크게 느낀 뒤 속도를 붙여요. <mark>컴핑과 장식이 한 흐름으로 이어지면 오늘 목표에 도착한 거예요.</mark>

```json
{
  "id": "m2.w8.d1.slow_combine",
  "type": "tab",
  "meta": { "title": "Combine slowly", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** 스탭 → 커팅 → b3→3 스미어 → 스탭. 스미어 자리를 크게 느껴봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음해 들어요. 스탭만 있던 어제와, 장식이 얹힌 오늘의 한 마디를 비교해요.

**오늘의 완료 기준:** BPM 72, 스윙16에서 Dm9 컴핑에 b3→3 스미어를 얹어 한 마디 종합을 끊김 없이 연주할 수 있다.

## ④ 팁 / 흔한 실수

종합을 시작할 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w8.d1.combine_check",
  "type": "tab",
  "meta": { "title": "Combine check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ Dm9를 반 박 길게 잡아 두고, 스미어만 따로 크게 느껴봐요.

- **스미어가 급해요.** b3→3을 서둘러 채면 미끄러짐이 사라져요. 해머로 천천히 번지게 해요.
- **커팅이 사라져요.** 스탭에만 신경 쓰면 그리드가 비어요. 빈칸마다 "칙"을 넣어요.
- **컴핑이 끊겨요.** 장식을 얹느라 스탭을 놓치지 않게, 손 모양은 그대로 유지해요.
- **속도부터 올려요.** BPM 60에서 세 조각을 편안히 이은 뒤 72로 올려요.
