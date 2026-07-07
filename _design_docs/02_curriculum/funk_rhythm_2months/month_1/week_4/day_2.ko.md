---
title: "E9 위에서 퍽 — 코드와 고스트의 대비"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 진짜 코드가 울리다 퍽 하고 죽는다

## ① 이론/설명

어제 E9를 오른손 모터 위에 얹었죠. 오늘은 2주차에 배운 **고스트 노트**를 이 진짜 코드에 적용해요. 이제 대비가 훨씬 풍성해져요.

지난주엔 실제음이 작은 스탭 하나였지만, 오늘의 실제음은 E9라는 온전한 코드예요. 왼손을 꾹 눌러 E9가 또렷이 울리는 '따'와, 힘을 살짝 빼서 퍽 하고 죽는 고스트 '치'. 같은 E9 자리에서 압력만 온·오프 하는 거예요. 코드가 화사하게 울리다가 순간 툭 죽고, 다시 울리는 그 대비 — 이게 펑크 기타의 진짜 질감이에요.

여기서 왼손의 역할이 두 개로 늘어나요. 하나는 '코드를 정확히 잡는 손', 또 하나는 '압력을 조절하는 손'. 이 둘을 동시에 하려니 처음엔 헷갈려요. 특히 힘을 뺄 때 코드 폼까지 흐트러지면 다음 실제음이 지저분해져요. 그래서 요령은, **폼은 유지한 채 압력만 살짝 푸는** 거예요. 손가락을 줄에서 떼지 말고, 누르는 힘만 뺐다 줬다 하세요.

처음엔 코드도 챙기고 고스트도 챙기느라 벅찰 거예요. 당연해요. 오늘은 E9 한 번 울리고 고스트 한 번, 딱 그 대비만 또렷해도 충분해요. 이 대비가 손에 붙으면, 여러분의 E9는 더 이상 그냥 코드가 아니라 '숨 쉬는' 그루브가 돼요. 코드가 울렸다 죽었다 하는 이 호흡이야말로, 밋밋한 반주와 '펑크다운' 반주를 가르는 결정적 한 끗이에요.

## ② 시각 자료

E9의 실제음(파랑)과 고스트(무색)의 대비예요. 같은 자리에서 압력만 온·오프 — 폼은 유지한 채.

**예제 1 — E9+고스트 섞기(1마디).** 1·3박 머리에 E9 실제음, 2·4박 '&'에 E9, 나머진 고스트. 코드가 울리다 퍽 하고 죽어요.

```json
{
  "id": "m1.w4.d2.e9_ghost1",
  "type": "tab",
  "meta": { "title": "E9 + ghost mix (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** 실제음 자리에서만 왼손을 꾹, 나머진 살짝 풀어 '퍽'. 코드/고스트 대비를 들으며 4번.

**예제 2 — E9 고스트 그루브(2마디).** 실제음을 더 촘촘히 섞은 드럼 같은 버전. 코드와 퍽이 빠르게 교대해요.

```json
{
  "id": "m1.w4.d2.e9_ghost2",
  "type": "tab",
  "meta": { "title": "E9 ghost groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** 익으면 실제음 위치를 바꿔 응용. 폼이 흐트러지지 않는지가 관건.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. E9를 잡은 채 '따(꾹)-치(풀기)'를 번갈아 내보며 압력 온·오프 워밍업. 폼은 유지.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 폼 유지 + 압력)**
E9 폼을 잡은 채, 손가락을 떼지 않고 누르는 힘만 뺐다 줬다 반복. 코드가 살았다 죽었다 하는지 확인합니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 68)**
**예제 1**(E9+고스트)을 BPM 68에서 4번 → **예제 2**(고스트 그루브)로. 코드와 퍽의 대비, 그리고 폼 유지가 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: E9가 또렷이 울리는가 / 고스트가 음정 없이 '퍽'인가 / 코드 폼이 안 흐트러졌는가.

**오늘의 완료 기준:** E9 폼을 유지한 채 압력 온·오프만으로 코드(따)와 고스트(치)의 대비를 만들 수 있다.

## ④ 팁 / 흔한 실수

- **힘 빼다 폼 무너짐.** 압력만 풀어야지 손가락을 떼면 다음 코드가 지저분해요. 줄에 손끝을 붙인 채.
- **고스트가 코드로 울림.** 힘이 덜 빠졌어요. '퍽'은 음정이 없어야 해요.
- **실제음이 흐림.** 힘을 다시 줄 때 확실히. 애매하게 누르면 코드가 안 살아요.
- **오른손 멈춤.** 왼손이 바빠도 오른손 모터는 계속.
