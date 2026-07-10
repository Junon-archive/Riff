---
title: "팜뮤트 + 다운피킹 — 척척 그루브"
dayKey: "m1.w3.d3"
estMinutes: 30
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 척척 그루브

## ① 이론/설명

이제 파워코드에 리듬을 입혀요. 오늘 오른손이 배울 건 <mark>팜뮤트</mark> — **오른손 손날**을 브리지에 살짝 얹어 소리를 반쯤 막는 기술이에요. 활짝 울리던 파워코드가 갑자기 낮게 '척척' 으르렁대는 소리로 바뀌어요. 이게 **록·메탈 리프의 심장 박동** 같은 그루브예요. 손날 하나로 소리의 표정이 완전히 달라지는 게 신기할 거예요. 오른손은 팔이 아니라 손목으로 가볍게 털듯 움직여요 — 그래야 오래 갈아도 지치지 않아요.

팜뮤트 리프의 짝꿍은 <mark>다운피킹</mark>이에요. **위에서 아래로만** 갈면 소리가 묵직하고 균일해져요. 손날을 브리지 바로 앞에 얹는 위치가 관건인데, 너무 깊이 덮으면 음정이 사라지고 너무 얕으면 안 막혀요. '**음정은 남고 뒤가 짧게 끊기는**' 그 지점을 손이 기억할 때까지 이리저리 굴려 찾아요. 브리지에 얹은 손날은 줄에서 떼지 말고 계속 붙여 둔 채, 오른손 피킹만 반복하면 위치가 금세 몸에 배요.

오늘 목표는 빠르기가 아니라 <mark>정박에 딱 붙는 균일함</mark>이에요. 여덟 개의 '척'이 전부 **같은 세기, 같은 길이**로 나오면 그게 완성이에요. 강약을 넣고 싶은 욕심은 잠시 접어두세요. **균일함이 먼저**, 표정은 그다음이에요. 이 팜뮤트 척척만 손에 붙으면 〈Iron Man〉의 묵직한 도입부가 바로 당신 손에서 나와요.

## ② 시각 자료

먼저 개방 E5를 팜뮤트로만 갈아봐요. 여덟 번의 <mark>'척'</mark>이 전부 **똑같은 세기·길이**로 나오게.

```json
{
  "id": "m1.w3.d3.e5_pm_riff",
  "type": "tab",
  "meta": { "title": "Palm-muted E5 chug", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 90, 전부 다운피킹. 손날을 브리지에 얹어 '음정은 남고 뒤가 짧게 끊기는' 소리를 찾아요. 여덟 척이 균일하게.

이제 그루브를 만들어요. 팜뮤트로 척척 깔다가, **마지막 한 코드만 손날을 떼서** 활짝 울려요(초록 강조).

```json
{
  "id": "m1.w3.d3.chug_accent",
  "type": "tab",
  "meta": { "title": "E5 chug into an open ring", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 90, 다운피킹. 앞은 팜뮤트로 낮게 척척, 마지막 초록 E5만 손날을 떼서 활짝 울려요 — 이 한 방이 그루브의 마침표예요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
BPM 70에서 어제 G5↔A5 왕복을 가볍게 반복해 왼손을 데우고, 오른손 손날을 브리지 앞에 얹는 위치부터 잡아요.

**7~17분 · 오늘의 기술**
예제 1(팜뮤트 E5 척척)을 느리게. **손날 깊이**를 미세하게 조절해 <mark>음정은 남고 뒤가 짧게 끊기는</mark> 소리를 찾아요. 여덟 척이 균일한지 귀로 확인해요.

**17~27분 · 적용**
예제 2(chug + 열린 E5)를 BPM 80에서 4번 반복 → **균일하게** 되면 90으로 올려요. 마지막 초록 E5만 손날을 떼서 활짝 울리는 걸 잊지 마세요.

**27~30분 · 체크**
도달한 BPM을 적고, 30초 녹음해 척척이 전부 고른 세기·길이인지 들어봐요.

**오늘의 완료 기준:** 팜뮤트 파워코드 리프(정박 8분음표)를 목표 BPM 90에서 세기·길이가 고르게 척척 칠 수 있다.

## ④ 팁 / 흔한 실수

- **손날이 너무 깊이.** 깊이 덮으면 음정이 사라져 '툭툭' 소리만 나요. 음정이 살짝 남는 지점까지 손날을 뒤로 빼요.
- **업피킹 섞기.** 팜뮤트 리프는 다운피킹이 기본이에요. 위에서 아래로만 갈아야 소리가 묵직하고 고르게 나와요.
- **강약 욕심.** 아직은 여덟 척을 똑같이 내는 게 먼저예요. 악센트는 균일함이 잡힌 다음에.
- **손목 힘주기.** 손날은 얹기만, 오른손은 손목으로 가볍게 털어요. 팔에 힘이 들어가면 금방 뻣뻣해져요.
