---
title: "펜타토닉 맛보기 — 다음 여정의 예고편"
dayKey: "m1.w4.d3"
estMinutes: 30
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 다음 트랙의 문을 여는 첫 스케일

## ① 이론/설명

이번 주 내내 코드를 다뤘죠. 오늘은 잠깐 방향을 틀어 <mark>멜로디</mark>를 맛봐요. 솔로, 그러니까 기타가 노래하는 그 소리는 대부분 '펜타토닉'이라는 스케일에서 나와요. 다섯 음으로 된 스케일인데, 이상하게 들리는 음이 하나도 없어서 초보가 아무렇게나 짚어도 그럴듯하게 들려요. 오늘은 이걸 <mark>맛보기</mark>로만 열어볼 거예요 — 본격 마스터는 다음 여정의 몫이니까요.

폼은 '박스 1'이라고 불러요. 5프렛 근처에서 한 줄에 두 음씩, 여섯 줄을 사다리처럼 오르내리는 모양이에요. 파란 음이 근음(A)이고, 초록으로 강조된 음이 b3 — 이 스케일의 색을 결정하는 특별한 음이에요. 손가락은 검지(1)와 약지·새끼(3·4)만 쓰니 어렵지 않아요. 다섯 음이 한 손 안에 다 들어오니, 지판을 헤맬 일도 없어요. 오늘은 이 폼을 위아래로 훑으며 손에 익히기만 하면 돼요.

여기에 마법을 하나 더해요. <mark>해머온과 풀오프</mark>예요. 한 음을 친 뒤 피킹 없이 손가락으로 다음 음을 '때려' 소리 내는 게 해머온, 반대로 손가락을 '튕겨' 아래 음을 내는 게 풀오프예요. 이 둘이 있어야 솔로가 뚝뚝 끊기지 않고 노래하듯 이어져요. 피킹을 아끼는 만큼 소리는 더 부드럽게 흘러요. 오늘 짧은 3음 릭 하나로 그 느낌을 처음 맛보면, 다음 트랙의 문이 이미 열린 거예요.

## ② 시각 자료

먼저 오늘의 지도, 마이너 펜타토닉 박스 1이에요. 파란 근음(A)에서 시작해 여섯 줄을 오르내려요.

```json
{
  "id": "m1.w4.d3.pentatonic_box1",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic — Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```

▶ **BPM 70, 한 음씩.** 6번줄 근음(A)부터 1번줄까지 오르내리며 손에 익히세요. 이 폼은 다음 트랙에서 여러분의 첫 솔로가 됩니다.

이제 해머온·풀오프를 6번 줄에서 연습해요. 근음(A)과 b3를 피킹 한 번으로 오가요.

```json
{
  "id": "m1.w4.d3.legato_drill",
  "type": "tab",
  "meta": { "title": "Legato drill — hammer-on and pull-off (R to b3)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ BPM 70. 근음(A·5프렛)을 한 번만 피킹하고, 새끼로 초록 b3(8프렛)를 때려요(해머온) → 손가락을 튕겨 근음으로 돌아와요(풀오프).

마지막으로 <mark>3음짜리 릭</mark>이에요. 근음에서 b3로 해머온, 다시 근음으로 풀오프 — 박스 안 세 음만으로 노래해요.

```json
{
  "id": "m1.w4.d3.first_lick",
  "type": "tab",
  "meta": { "title": "First lick — R hammer b3 pull R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "duration": "quarter", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 1, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ BPM 70. 1번 줄 근음(5프렛)을 치고 초록 b3(8프렛)로 해머온, 다시 근음으로 풀오프. 세 음이 한 호흡으로 이어지면 성공이에요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
BPM 70에서 박스 1을 6번 줄 근음부터 1번 줄까지 한 음씩 아주 느리게 훑어 폼을 손에 얹어요.

**7~17분 · 오늘의 기술**
6번 줄 레가토 드릴을 반복해요. 피킹은 처음 한 번, 나머지는 <mark>때리고 튕기는</mark> 왼손 힘으로 소리를 내요. 두 음이 또렷이 나는지 확인해요.

**17~27분 · 적용**
3음 릭을 BPM 70에서 반복 → 세 음이 매끄럽게 이어지면 그대로 유지해요. 릭을 두세 번 이어 붙여 작은 프레이즈처럼 쳐 봐도 좋아요.

**27~30분 · 체크**
도달한 BPM을 적고, 30초 녹음해 해머온·풀오프가 피킹 없이도 또렷이 울리는지 들어봐요.

**오늘의 완료 기준:** 마이너 펜타토닉 박스 1을 오르내리고, 해머온·풀오프로 3음 릭 하나를 매끄럽게 칠 수 있다.

## ④ 팁 / 흔한 실수

- **해머온이 약하기.** 손가락을 살살 얹으면 소리가 안 나요. 프렛 바로 뒤를 딱 소리 나게 때려요.
- **풀오프가 그냥 떼기.** 손가락을 위로 떼기만 하면 소리가 죽어요. 줄을 아래로 살짝 튕기듯 빼야 아래 음이 울려요.
- **박스 밖으로 나가기.** 오늘은 5프렛 박스 안 음만 써요. 손이 익을 때까진 이 자리를 벗어나지 않아도 충분해요.
- **맛보기인데 완벽 욕심.** 오늘은 딱 문을 여는 날이에요. 펜타토닉을 완전히 마스터하는 건 다음 트랙에서 천천히 해요.
