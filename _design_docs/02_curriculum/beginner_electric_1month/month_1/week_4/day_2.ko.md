---
title: "파트 잇기 — 조용한 벌스에서 활짝 코러스로"
dayKey: "m1.w4.d2"
estMinutes: 30
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 멈추지 않고 파트를 넘어가기

## ① 이론/설명

곡은 처음부터 끝까지 똑같은 세기로 흐르지 않아요. 조용히 속삭이다가 <mark>확 터지는 순간</mark>이 있어야 사람 마음을 흔들죠. 오늘은 두 파트를 만들어요 — **낮게 깔리는 벌스와 활짝 열리는 코러스**. 어려운 새 코드는 없어요. 이미 가진 파워코드를 **세기만 바꿔 두 얼굴로** 쓰는 거예요. 세기의 대비 하나만 넣어도 밋밋하던 리프가 갑자기 곡처럼 들려요. 4주 전엔 한 음 내기도 벅찼는데, 이제 곡의 밀고 당김을 만들어요.

**벌스는 팜뮤트**예요. 오른손 손날로 줄을 살짝 눌러 소리를 답답하게 가두면, 낮게 으르렁대는 <mark>속삭임</mark>이 돼요. **코러스는 그 손날을 떼요.** 갇혀 있던 소리가 한꺼번에 풀리면서 파워코드가 활짝 울려 퍼져요. 같은 코드인데 손날 하나로 '조용함'과 '시끄러움'이 갈려요. 코러스에서 소리가 활짝 열릴 때, 듣는 사람의 마음도 같이 열려요. 이 대비가 곧 곡의 표정이에요.

제일 중요한 건 <mark>멈추지 않고 넘어가기</mark>예요. 벌스 마지막 코드에서 코러스 첫 코드로 건너가는 그 찰나에 **손날을 떼면** 돼요. 초보의 함정은 파트가 바뀔 때 잠깐 멈칫하는 거예요. 손날 떼는 타이밍을 미리 몸에 익혀 두면, 두 파트가 하나의 흐름으로 이어져요. 전환은 어렵지 않아요 — **미리 정한 한 순간**에 손날만 들어 올리면 되거든요. 오늘 이 전환이 매끄러워지면, 여러분은 이미 '곡'을 치고 있는 거예요.

## ② 시각 자료

먼저 벌스예요. 개방 E5를 **팜뮤트로 낮게** 깔아요. 손날을 살짝 얹어 소리를 가둔 채 또박또박.

```json
{
  "id": "m1.w4.d2.verse_mute",
  "type": "tab",
  "meta": { "title": "Verse — palm-muted E5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 100, "notation": "staff+tab" },
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

▶ BPM 100. 손날로 눌러 낮게 으르렁대게. 소리가 답답하게 갇힌 느낌이면 정답이에요.

이번엔 코러스예요. **손날을 떼고 C5→G5를 활짝** 울려요. 같은 손인데 소리가 확 열려요.

```json
{
  "id": "m1.w4.d2.chorus_open",
  "type": "tab",
  "meta": { "title": "Chorus — open C5 to G5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "G", "tempoBpm": 100, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 100. 손날을 떼 두 음이 활짝 울리게. 초록 G5(3프렛)에 착지하며 코러스가 열려요.

이제 둘을 이어요. 벌스 두 마디를 갈다가, <mark>손날을 떼는 순간</mark> 코러스로 건너가요. 절대 멈추지 말고.

```json
{
  "id": "m1.w4.d2.verse_to_chorus",
  "type": "tab",
  "meta": { "title": "Verse to chorus — no stopping (E5 to C5 to G5)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 100, "notation": "staff+tab" },
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
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 100. 벌스 두 마디는 팜뮤트로 낮게, 코러스 두 마디는 손날을 떼 활짝. 넘어가는 순간 멈칫하지 말고, 마지막 초록 G5에 착지해요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
BPM 80에서 개방 E5 팜뮤트 척척을 6번 줄에 가볍게 반복해 오른손 손날 위치를 되살려요.

**7~17분 · 오늘의 기술**
벌스(팜뮤트)와 코러스(활짝)를 따로 쳐 **소리 차이를 크게** 벌려요. <mark>손날 떼는 타이밍</mark>을 벌스 마지막 박에 맞춰 몸에 익혀요.

**17~27분 · 적용**
전환 예제를 BPM 90에서 4번 반복 → **멈칫 없이** 되면 목표 BPM 100으로 한 칸 올려요. 벌스에서 코러스로 넘어갈 때 박이 끊기지 않는지에만 집중해요.

**27~30분 · 체크**
도달한 BPM을 적고, 30초 녹음해 벌스와 코러스의 세기 차이가 들리는지, 전환이 끊기지 않는지 들어봐요.

**오늘의 완료 기준:** 벌스(팜뮤트)에서 코러스(활짝)로 멈추지 않고 넘어가며 처음부터 끝까지 칠 수 있다.

## ④ 팁 / 흔한 실수

- **전환에서 멈칫하기.** 파트가 바뀔 때 손을 확인하려 멈추면 흐름이 끊겨요. 손날 떼는 순간을 미리 정해 두고 통째로 넘어가요.
- **코러스에도 팜뮤트.** 손날을 안 떼면 코러스가 안 열려요. 벌스 마지막 코드에서 확실히 손날을 들어 올려요.
- **세기 차이가 안 남.** 벌스와 코러스가 비슷하면 대비가 죽어요. 벌스는 더 낮게, 코러스는 더 활짝 — 차이를 과장해도 좋아요.
- **속도 욕심.** 100은 목표일 뿐이에요. 90에서 전환이 매끄러운 게 100에서 끊기는 것보다 훨씬 나아요.
