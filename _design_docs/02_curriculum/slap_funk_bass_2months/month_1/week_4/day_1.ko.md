---
title: "그루브 다듬기 — 세 소리의 균형"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 그루브 다듬기, 세 소리의 균형

## ① 이론/설명

4주차예요 — **1개월차의 마지막 주**! 3주 전엔 슬랩 소리조차 내기 어려웠는데, 지금은 <mark>고스트가 튀는 그루브</mark>를 손에 쥐고 있어요. 지난 3주가 **러프 그루브 → 고스트 → 다듬기**로 이어진 여정이었다면, 이번 주는 그 결실을 **완성곡으로 녹음**해 남기는 주예요. 오늘은 그 첫걸음으로, 지난주 그루브를 **더 단단하게 다듬어요.**

다듬기의 핵심은 **세 소리의 균형**이에요. 슬랩 그루브는 **썸(둥)·팝(딱)·고스트(칙)** 세 타격으로 굴러가는데, 셋의 **크기와 톤이 들쭉날쭉**하면 아무리 박자가 정확해도 어설프게 들려요. 목표는 <mark>썸과 팝은 또렷하게, 고스트는 살짝 작게</mark> — 이 대비가 그루브에 입체감을 줘요. 드럼으로 치면 **킥·스네어는 선명하게, 하이햇은 은은하게** 까는 것과 같아요.

오늘은 **1마디 E 그루브**(썸-칙-팝-칙) 하나만 붙잡고 **톤을 고르게** 다듬어요. **썸**은 엄지 옆면으로 줄을 때리고 튕겨 나오듯 쳐서 '둥'에 심지를 넣고, **팝**은 검지로 줄을 살짝 걸어 위로 뜯어 '딱'을 또렷하게, **고스트**는 왼손을 얹어 **음정 없이 가볍게** 쳐요. **BPM 75**에서 한 마디를 반복하며 <mark>세 소리의 크기 차이</mark>가 매번 똑같이 재현되는지 귀로 확인해요. 처음엔 한 마디만, 그 한 마디가 완벽히 균일해질 때까지 반복하는 게 오늘의 지름길이에요. 속도보다 **일관성**이 오늘의 목표예요.

**5현**이라면 음도 손모양도 4현과 똑같아요. 저음 B는 엄지로 덮어 재워 두고, **세 소리의 균형** 감각만 손에 새겨요. 오늘 이 1마디가 안정되면, 내일은 **루트를 옮겨** 그루브를 곡처럼 키워요.

## ② 시각 자료

오늘은 **1마디 E 그루브**를 <mark>세 소리가 고르게</mark> 다듬어요. 먼저 **옥타브 손모양**을 지판으로 다시 확인하고, 그 위에서 **썸-칙-팝-칙**을 반복해요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **옥타브 손모양**. 아래 파랑이 썸으로 칠 **루트 E**, 위 파랑이 팝으로 튕길 **옥타브 E**예요. 둘 사이 '칙'은 3번현에서 내요.

```json
{
  "id": "m1.w4.d1.octave_shape_e_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (E) — thumb root + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래 루트 E(썸), 위 옥타브 E(팝). '칙'은 3번현에서 내요.

```json
{
  "id": "m1.w4.d1.octave_shape_e_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (E) — thumb root + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

이제 그 손모양으로 **1마디 그루브**를 돌려요. **BPM 75**에서 <mark>세 소리의 크기 대비</mark>가 매번 똑같이 나오는지 확인해요.

```json
{
  "id": "m1.w4.d1.refine_groove_e_4",
  "type": "tab",
  "meta": { "title": "Refined octave slap groove (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 썸-칙-팝-칙 반복. 썸·팝은 또렷하게, 고스트는 살짝 작게.

```json
{
  "id": "m1.w4.d1.refine_groove_e_5",
  "type": "tab",
  "meta": { "title": "Refined octave slap groove (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
지난주 고스트 그루브(썸-칙-팝-칙)를 BPM 60으로 가볍게 흘려 손을 깨워요. 오늘은 소리의 <mark>크기 대비</mark>에 귀를 기울여요.

**10~20분 · 두뇌 훈련**
한 마디를 아주 느리게 돌리며 <mark>썸·팝은 크게, 고스트는 작게</mark> 나는지 하나씩 확인해요.

**20~40분 · 실전**
1마디 E 그루브를 **BPM 75**에서 반복해요. 세 소리의 균형이 흔들리면 속도를 낮춰 톤부터 맞춰요. 4현으로 익힌 뒤 5현으로도 같은 균형을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>세 소리가 고르게 굴러가는지</mark> 들어봐요. 오늘 안정된 BPM도 적어둬요.

**오늘의 완료 기준:** 썸·팝·고스트의 크기와 톤이 고르게 균형 잡힌 1마디 E 그루브를 BPM 75에서 안정적으로 반복할 수 있다.

## ④ 팁 / 흔한 실수

- **썸과 팝이 묻혀요.** 고스트가 너무 크면 둥·딱이 가려져요. 고스트만 살짝 힘을 빼세요.
- **톤이 매번 달라요.** 엄지 때리는 위치가 흔들려서예요. 지판 끝 같은 자리를 반복해 때려요.
- **팝이 약해요.** 검지를 줄 밑에 충분히 걸지 않았어요. 살짝 더 걸어 위로 뜯어요.
- **저음 B 방심(5현).** 균형에 집중하다 B가 새기 쉬워요. 엄지로 늘 B를 덮어 두세요.
