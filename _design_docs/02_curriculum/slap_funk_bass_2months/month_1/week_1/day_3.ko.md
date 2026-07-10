---
title: "손가락으로 튕기는 팝 — 개방 G의 '딱!'"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — 손가락으로 튕기는 팝, 딱!

## ① 이론/설명

이번 주의 두 번째 소리, 팝(Pop)이에요. 썸이 **킥드럼**이라면, 팝은 **<mark>스네어</mark>** — 손가락으로 줄을 튕겨 '딱!' 하는 날카로운 소리를 내요. 방향이 썸과는 정반대예요. 썸이 줄을 '치는' 거라면, 팝은 줄을 **위로 잡아당겼다 놓아** 줄이 지판을 때리게 하는 거예요. 그래서 팝은 썸보다 훨씬 **밝고 튀는 소리**로, 펑크 특유의 찰랑거리는 액센트를 만들어요.

동작은 이래요. **검지 또는 중지 첫마디**를 고음현 **밑에 살짝 걸어요.** 그 상태로 손가락을 **위로 잡아당겼다 탁 놓으면**, 줄이 튕겨 올라갔다 지판에 부딪히며 '딱!' 소리가 나요. 오늘의 타깃은 가장 얇은 **<mark>개방 G(1번현)</mark>**예요. 얇은 줄이라 팝이 가장 잘 걸리고, 소리도 제일 경쾌해요.

핵심은 **힘이 아니라 방향**이에요. 옆으로 잡아당기면 손가락만 아프고 소리는 둔해요. 손가락을 **줄 아래에서 위로**, 딱 튕겨 올리는 궤도가 중요해요. 처음엔 손끝이 얼얼하고 소리도 약할 수 있어요 — 굳은살이 잡히면 금세 시원한 '딱'이 나니 걱정 마세요. <mark>세게가 아니라 정확히</mark>가 오늘의 구호예요. 팝은 **검지·중지 둘 다** 쓸 수 있어요 — 지금은 편한 손가락 하나로 시작하고, 소리가 안정되면 두 손가락을 번갈아 써도 좋아요.

팝은 고음현이라 **5현이어도 손 위치는 4현과 완전히 똑같아요.** 저음 B와는 직접 상관없지만, 어제 익힌 뮤팅 습관은 계속 유지해요 — 엄지로 낮은 줄들을 덮어두면, 팝을 튕기다 다른 줄이 딸려 울리는 걸 막아줘요.

## ② 시각 자료

오늘은 **세 예제**를 봐요. 먼저 팝을 거는 **위치**를 지판에서 확인하고, 개방 G를 4분음표·8분음표로 튕겨요. 각 예제는 **4현·5현 두 버전**이에요. 악보에서 <mark>**P**는 팝(손가락으로 튕기기)</mark>을 뜻해요.

먼저 **팝 위치 지도**. 파랑 점이 개방 G(1번현) — 이 줄 밑에 손가락을 걸어 위로 튕겨요.

```json
{
  "id": "m1.w1.d3.pop_g_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Pop spot on open G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 파랑 점이 개방 G(1번현)예요. 검지나 중지를 이 줄 밑에 걸어 위로 튕겨 올려요.

```json
{
  "id": "m1.w1.d3.pop_g_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Pop spot on open G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** G(1번현) 자리는 4현과 똑같아요. 팝은 고음현이라 저음 B와는 상관없지만, 엄지는 습관대로 낮은 줄을 덮어 둬요.

**예제 1 — 팝 4분음표.** 개방 G를 한 박에 한 번씩 팝으로 튕겨요. <mark>'딱' 소리가 또렷한지</mark>에만 집중해요.

```json
{
  "id": "m1.w1.d3.pop_g_quarter_4",
  "type": "tab",
  "meta": { "title": "Pop on open G — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 한 박에 팝 한 번(P). 네 번 다 '딱' 소리가 또렷하고 크기가 같은지 확인해요.

```json
{
  "id": "m1.w1.d3.pop_g_quarter_5",
  "type": "tab",
  "meta": { "title": "Pop on open G — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 엄지로 낮은 줄을 덮어, 팝에 다른 줄이 딸려 울리지 않게 해요.

**예제 2 — 팝 8분음표.** 한 박을 둘로 쪼개 여덟 번. 빨라져도 <mark>손가락이 아프지 않는 선</mark>에서만 올려요.

```json
{
  "id": "m1.w1.d3.pop_g_eighth_4",
  "type": "tab",
  "meta": { "title": "Pop on open G — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 한 박에 두 번씩. 빨라져도 '딱' 톤이 뭉개지지 않고, 손가락에 무리가 없는지 살펴요.

```json
{
  "id": "m1.w1.d3.pop_g_eighth_5",
  "type": "tab",
  "meta": { "title": "Pop on open G — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 4현과 음이 똑같아요. 여기서도 엄지로 낮은 줄을 덮어 딸림 울림을 막아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 한 썸/고스트로 오른손을 가볍게 풀어요. 아직 팝보다 **손과 팔의 긴장을 빼는 것**이 먼저예요.

**10~20분 · 두뇌 훈련**
개방 G에 손가락을 걸고 아주 느리게 팝을 해봐요. <mark>줄을 위로 튕겨 올리는 궤도</mark>가 나오는지, 그 **방향**에만 집중해요.

**20~40분 · 실전**
예제 1(팝 4분음표)을 **BPM 60**에서 반복 → '딱'이 또렷하면 예제 2(팝 8분음표)로 넘어가 **BPM 65**. 손가락이 아프면 멈추고 잠깐 쉬어요.

**40~50분 · 녹음/피드백**
30초 녹음해 **'딱' 소리가 또렷하고 크기가 고른지** 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 개방 G를 팝으로 쳐서 60~65에서 또렷한 '딱' 소리를 손 아프지 않게 균일하게 낼 수 있다.

## ④ 팁 / 흔한 실수

- **옆으로 잡아당기기.** 줄을 옆으로 끌면 손만 아프고 소리는 둔해요. 아래에서 위로 튕겨 올리세요.
- **손가락을 너무 깊게 걸기.** 첫마디만 살짝 걸어야 부드럽게 빠져요. 깊게 걸면 줄이 안 놓이고 걸려요.
- **너무 세게.** 힘으로 잡아채면 손끝이 금방 헐어요. 세기보다 튕기는 궤도가 '딱'을 만들어요.
- **다른 줄 딸림 울림.** 팝할 때 아래 줄이 함께 울리면, 엄지로 낮은 줄들을 덮어 재워요.
