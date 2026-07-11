---
title: "최종 졸업 녹음 — 혼자 완성하는 12마디 블루스 (블루스 졸업)"
dayKey: "m3.w12.d4"
estMinutes: 50
i18nKey: "lesson.m3.w12.d4"
---

# Day 4 — 리듬으로 묻고 리드로 답하는 한 곡을 녹음하다

## ① 이론/설명

드디어 마지막 날이에요. 잠깐 3달 전을 떠올려볼까요? 그땐 **셔플 리듬**조차 낯설었고, 박스1 하나 외우는 것도 벅찼어요. 그런데 지금 여러분은 혼자서 12마디를 **컴핑으로 묻고 솔로로 답하며** 한 곡을 완성해요. <mark>3달 사이에 여러분은 '기타를 쥔 사람'에서 '블루스를 말하는 사람'이 됐어요.</mark> 오늘은 그 여정의 마침표, **최종 졸업 녹음**이에요.

오늘 녹음할 곡은 지금까지 쌓은 대화의 완성본이에요. **2마디 A7 부기(질문)**로 그루브를 던지고, **2마디 박스1 릭(대답)**으로 답하죠 — 4도 벤딩으로 긴장을 만들고 근음 비브라토로 착지해요. <mark>이 대화를 12마디 전체에 펼치면, 혼자 완성하는 한 곡의 블루스가 돼요.</mark> 어제 리허설했던 그 흐름 그대로, 오늘은 마음 편히 녹음 버튼을 눌러요. 완벽하지 않아도 좋아요 — 이건 심사가 아니라 **여러분의 첫 블루스 기록**이니까요.

그리고 이건 끝이 아니라 새로운 문의 시작이에요. 블루스로 '말하는 법'을 익혔으니, 다음 여정은 **solo_scale** — 박스1을 넘어 **전 지판**으로 스케일을 잇고, 도리안·믹솔리디안 같은 **모드**로 색을 넓히는 코스예요. <mark>블루스가 여러분의 모국어라면, solo_scale은 그 위에 새 단어와 억양을 더해줘요.</mark> 오늘 이 한 곡을 녹음하고 나면, 언제든 그다음 문을 열 준비가 된 거예요. 3달 동안 정말 고생 많았어요 — 이제 자랑스럽게 녹음하고, 블루스 졸업을 축하해요.

```json
{
  "id": "m3.w12.d4.voice_map",
  "type": "scale_shape",
  "meta": { "title": "Your blues voice: box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 3달 전엔 낯설던 이 박스1이, 이제 여러분이 **대답**을 말하는 목소리예요.

## ② 시각 자료

여러분은 이제 혼자서 밴드예요. 컴핑의 집에서 **질문**을 던지고, 박스1으로 올라가 **대답**을 하죠. <mark>한 사람 안에 리듬 기타와 리드 기타가 함께 사는 거예요.</mark>

```json
{
  "id": "m3.w12.d4.band_of_one",
  "type": "fretboard_diagram",
  "meta": { "title": "One-person band: A7 comp home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **개방 근음 A**의 A7 부기가 질문의 집이에요. 오늘은 이 두 역할을 오가며 한 곡을 완성해요.

<mark>질문과 대답이 한 사람의 손에서 흐르는 순간, 그게 바로 블루스 졸업이에요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 긴장을 풀 겸, A7 부기 컴핑을 한 마디 가볍게 굴려요. 오늘은 잘 치는 것보다 편하게 즐기는 게 목표예요.

```json
{
  "id": "m3.w12.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: relax with the A7 boogie", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
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
▶ **BPM 60, 셔플.** 익숙한 A7 부기 한 마디. 손을 데우고 마음도 편하게 풀어요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 졸업 녹음)**
녹음 전에, 12마디 전체를 머릿속으로 한 번 흘려봐요. 어디서 묻고 어디서 답하는지 그림이 그려지면, 실제 녹음이 훨씬 편해져요. <mark>머릿속에서 한 번 완주하면, 손은 이미 길을 알고 있어요.</mark>

**20~40분 · 실전: 리듬↔리드 대화 (BPM 80)**
드디어 최종 완성물, **리듬↔리드 대화**예요. 2마디 A7 부기로 묻고, 2마디 박스1 릭으로 답하죠. 이 4마디 대화가 오늘 녹음할 곡의 심장이에요.

```json
{
  "id": "m3.w12.d4.rhythm_lead_dialogue",
  "type": "tab",
  "meta": { "title": "Rhythm-lead dialogue (comp to solo)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1~2마디는 **컴핑(질문)** — A7 부기로 그루브를 던지고, 3~4마디는 **솔로(대답)** — 박스1 릭으로 답해요. 이 대화를 12마디 전체에 펼치면 혼자 완성하는 블루스가 돼요.

<mark>이 대화가 손에서 자연스럽게 흐르면, 여러분은 이미 블루스를 '말하는' 연주자예요.</mark>

**40~50분 · 최종 졸업 녹음!**
이제 이 대화를 12마디 전체에 펼쳐, 처음부터 끝까지 한 곡을 녹음해요. 완벽하지 않아도 좋아요 — 3달의 여정을 담은 여러분의 첫 블루스 기록이니까요.

```json
{
  "id": "m3.w12.d4.graduation_twelve",
  "type": "tab",
  "meta": { "title": "Graduation take: full 12-bar dialogue", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 5, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 6, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 7, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 8, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 9, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 10, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 11, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 12, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 어제의 풀 런스루 그대로, 오늘은 녹음 버튼을 누르고 완주해요. 이게 여러분의 졸업 곡이에요.

**오늘의 완료 기준:** 2마디 컴핑(질문)과 2마디 솔로(대답)의 대화를 12마디 전체에 펼쳐, 혼자 완성하는 블루스 한 곡을 처음부터 끝까지 녹음했다. — 이번 주 결과물: 혼자 하는 12마디 컴핑↔솔로 블루스 완주·녹음 (블루스 졸업!)

## ④ 팁 / 흔한 실수

졸업 녹음에서 흔한 실수예요. 대부분 **완벽하게 치려다 긴장하는** 데서 와요.

```json
{
  "id": "m3.w12.d4.just_finish",
  "type": "scale_shape",
  "meta": { "title": "Finish over perfect", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **완벽보다 완주예요.** 한 번 끝까지 흐른 녹음이 열 번 멈춘 연습보다 값져요.

- **완벽하게 치려다 긴장해요.** 실수는 블루스의 일부예요. 흐름을 지키며 끝까지 가요.
- **한 번 틀렸다고 다시 시작해요.** 그러면 영영 완주 못 해요. 틀려도 그대로 이어가요.
- **녹음을 남기지 않고 넘어가요.** 오늘의 나를 꼭 기록해요. 몇 달 뒤 들으면 성장이 보여요.
- **여기서 멈춰버려요.** 블루스는 끝이지만 여정은 계속돼요. 다음은 solo_scale이 기다려요.
