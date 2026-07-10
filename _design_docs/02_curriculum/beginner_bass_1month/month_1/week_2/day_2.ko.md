---
title: "줄을 재우는 스위치 — 뮤팅과 고스트 음"
dayKey: "m1.w2.d2"
estMinutes: 30
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 줄을 재우는 스위치, 뮤팅

## ① 이론/설명

오늘은 이번 주의 심장, 뮤팅이에요. 베이스 소리의 8할은 잘 치는 게 아니라 **<mark>안 울려야 할 줄을 죽이는 것</mark>**에서 나와요. 한 음만 또렷이 울리고 나머지는 조용한 순간 — 그게 프로의 깨끗함이에요. 오늘은 소리를 '내는' 만큼이나 **소리를 '끄는' 법**을 배워요.

뮤팅엔 두 손이 다 참여해요. 먼저 왼손. 짚고 있던 손가락의 힘만 살짝 빼면, 줄이 지판에서 떨어지며 **<mark>소리가 뚝 끊겨요</mark>**. 완전히 떼는 게 아니라 살에 걸친 채 힘만 빼는 거예요 — 스위치를 끄듯이. 이 **'눌렀다 힘 빼기'**가 음의 길이를 손으로 조절하는 첫 도구예요. 이 힘 조절이 익숙해지면, 음을 짧게 끊을지 길게 울릴지를 손이 알아서 정하게 돼요.

오른손도 문지기예요. 지금 치는 줄보다 낮은 줄들은 **<mark>엄지와 안 친 손가락</mark>**으로 살짝 덮어 재워요. 손가락으로 한 줄을 튕기면, 자연스럽게 다음 손가락이 그 줄에 닿아 여운을 끊어줘요. 두 손이 이렇게 협력하면, 실수로 스친 줄도 울지 않아요. 안 치는 줄을 미리 덮어두는 이 습관이, 무대에서 잡음 없는 **깨끗한 소리를 만드는 진짜 비결**이에요.

가끔은 일부러 **<mark>고스트 음(칙)</mark>**을 넣기도 해요. 음정 없이 '칙' 하고 뮤트된 타격만 내는 건데, 리듬에 그루브를 더해줘요. 악보엔 음표 대신 **X로 표시돼요**. 5현이라면 재울 줄이 하나 더 늘어요 — 저음 B는 엄지로 계속 덮어, 4현보다 뮤팅에 조금 더 신경 써야 해요. 오늘의 목표는 딱 하나, 한 음만 울리고 나머지는 침묵이에요.

## ② 시각 자료

오늘은 **소리를 끊는 두 예제**를 봐요. 먼저 한 음을 치고 <mark>바로 재워 침묵을 만들고</mark>, 그다음 고스트 음을 섞은 펄스로 그루브를 느껴요. 악보에서 X는 음정 없는 뮤트 타격(칙)이에요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

**예제 1 — 치고 재우기.** 개방 E를 치고, 바로 왼손 힘을 빼 소리를 끊어요. 다음 박은 X, 즉 음정 없는 뮤트 타격이에요. '소리 → 침묵'이 또렷이 갈리게.

```json
{
  "id": "m1.w2.d2.mute_choke_4",
  "type": "tab",
  "meta": { "title": "Note and mute-choke on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 파랑 개방 E를 치고 → 곧바로 힘을 빼 X(칙)로 재워요. 소리와 침묵의 길이가 똑같이 반 박씩 갈리게.

```json
{
  "id": "m1.w2.d2.mute_choke_5",
  "type": "tab",
  "meta": { "title": "Note and mute-choke on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 덮어, X를 낼 때도 B가 함께 울리지 않게 하세요.

**예제 2 — 고스트 펄스.** 개방 E와 고스트 음(X)을 번갈아 여덟 번. '둥-칙-둥-칙' 하는 그루브가 손에 붙는 게 목표예요.

```json
{
  "id": "m1.w2.d2.ghost_pulse_4",
  "type": "tab",
  "meta": { "title": "Ghost-note pulse on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 정박은 파랑 개방 E, 뒷박은 X(칙). 두 소리의 크기 차이가 또렷할수록 그루브가 살아나요.

```json
{
  "id": "m1.w2.d2.ghost_pulse_5",
  "type": "tab",
  "meta": { "title": "Ghost-note pulse on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 4현과 음이 똑같아요. 저음 B는 엄지로 계속 덮어, 빨라져도 B가 새어 울리지 않게 재워두세요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제 짚은 E줄 낮은 루트를 BPM 60으로 다시 풀어요. **손끝이 프렛 바로 뒤에 잘 닿는지**부터 확인합니다.

**7~17분 · 오늘의 기술**
예제 1(치고 재우기)을 BPM 60에서 반복. <mark>왼손 힘을 빼는 순간</mark>에 소리가 깔끔히 끊기는지, **여운이 남지 않는지**에만 집중해요.

**17~27분 · 적용**
예제 2(고스트 펄스)를 BPM 60에서 4번 → **'둥-칙'이 또렷이 갈리면** BPM 65로 한 칸 올려 4번. 소리가 뭉개지면 다시 예제 1로 돌아가요.

**27~30분 · 체크**
오늘 도달한 BPM을 적어두고, 30초 녹음해 친 음만 울리고 안 친 줄은 조용한지 들어봐요.

**오늘의 완료 기준:** 한 음만 또렷이 울리고 치지 않은 줄은 조용하게, 왼손 힘 빼기와 오른손 뮤트로 60~70에서 소리를 깔끔히 끊을 수 있다.

## ④ 팁 / 흔한 실수

- **손가락을 완전히 떼기.** 힘을 빼는 것과 떼는 건 달라요. 살에 걸친 채 힘만 빼야 다음 음으로 바로 이어져요.
- **여운이 남아요.** 소리가 끊긴 뒤에도 웅웅거리면, 오른손 엄지나 손가락으로 그 줄을 덮어 잔향을 눌러요.
- **고스트 음을 너무 세게.** 칙 소리를 세게 내면 음정이 살아나 지저분해져요. 아주 살짝, 뮤트된 타격 소리만 나게.
- **저음 B 방심(5현).** 뮤팅에 집중하다 B를 놓치면 저음이 웅웅 새요. 엄지는 늘 B 위에 얹어두세요.
