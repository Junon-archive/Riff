---
title: "손목 스냅 — 팔이 아니라 손목으로 흔든다"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — 힘을 뺄수록 빨라진다

## ① 이론/설명

어제 오른손이 멈추면 안 된다는 걸 배웠죠. 오늘은 그 흔들림을 **어디서 만드느냐**예요. 답은 팔이 아니라 **손목**이에요.

초보자는 팔뚝 전체를 휘둘러서 16비트를 치려다 금세 지치고 박이 흔들려요. 프로는 팔은 거의 고정한 채 **손목만 톡톡 스냅**해요. 문을 노크하듯, 부채를 살랑이듯 — 손목이 축이 되어 작게 빠르게 흔들리는 거죠. 신기하게도, **힘이 들어가면 오히려 느려지고, 힘을 뺄수록 빨라지고 오래 갑니다.**

오늘의 훈련 도구는 **뮤트 스크래치**예요. 왼손 손가락을 줄 위에 눕히듯 살짝 얹어 음정을 죽이면, 피크가 줄을 스칠 때 '치키치키' 하는 퍼커션 소리가 나요. 정확한 음을 신경 쓸 필요가 없으니, 오직 손목 스냅과 흔들림의 균일함에만 집중할 수 있죠.

어색하고 소리가 지저분해도 괜찮아요. 지금은 '예쁜 소리'가 목표가 아니라 '지치지 않는 손목'이 목표예요. 이 스크래치가 편해지면, 나중에 진짜 코드를 잡아도 손목은 이미 흔드는 법을 알고 있을 거예요. 나일 로저스의 그 유명한 '착착착' 소리도 결국 이 손목 하나에서 나온답니다. 아직 그 '착착'까진 멀게 느껴져도 괜찮아요. 오늘은 손목이 지치지 않고 30초만 균일하게 버텨줘도 큰 진전이고, 그 30초가 1분이 되고 곧 한 곡이 되는 거예요.

## ② 시각 자료

손목 스냅을 눈으로 확인해요. 두 예제 모두 뮤트 '치키치키' 스크래치 — 음정이 아니라 손목의 균일한 흔들림을 보는 자료예요.

**예제 1 — 치키치키 스크래치(1마디).** 왼손을 줄 위에 눕혀 음을 죽이고, 손목만 톡톡 흔들어요.

```json
{
  "id": "m1.w1.d2.scratch_1bar",
  "type": "tab",
  "meta": { "title": "Chika-chika scratch (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66.** 팔은 고정, 손목만. 4번 반복. '힘을 뺄수록 빨라진다'를 몸으로 느껴보세요.

**예제 2 — 숨 쉬는 스크래치(2마디).** 각 마디 끝에 아주 짧은 빈자리(쉼표)를 둬요. 손은 계속 흔들리되 딱 그 두 조각만 줄을 안 스쳐요.

```json
{
  "id": "m1.w1.d2.scratch_breath",
  "type": "tab",
  "meta": { "title": "Scratch with a breath (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 66.** 마디 끝 빈자리에서도 손목은 멈추지 않아요. '치키'와 '쉼'이 번갈아 나오는 걸 느껴보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 손목만 쓰는 뮤트 스크래치를 반복. 팔뚝에 힘이 들어가면 일부러 빼면서, '노크하듯' 손목만 톡톡.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 손목 스냅)**
거울을 보거나 팔을 책상에 살짝 고정하고, 팔은 안 움직이고 손목만 흔들리는지 확인해요. 힘을 뺄수록 빨라지는 감각을 찾습니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 66)**
**예제 1**(치키치키 스크래치)을 BPM 66에서 4번 → **예제 2**(숨 쉬는 스크래치)로. 마디 끝 빈자리에서도 손목이 멈추지 않는지 확인.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: '치키치키'가 균일한가 / 팔이 아니라 손목으로 치고 있는가 / 30초를 지치지 않고 유지했는가.

**오늘의 완료 기준:** 팔을 거의 고정한 채 손목 스냅만으로 뮤트 스크래치를 30초 이상 균일하게 유지할 수 있다.

## ④ 팁 / 흔한 실수

- **팔로 흔들기.** 팔뚝을 휘두르면 빨라지지 않고 지치기만 해요. 축은 손목이에요.
- **꽉 쥔 피크.** 피크를 세게 쥐면 손목이 굳어요. 떨어지지 않을 만큼만 가볍게.
- **왼손 뮤트가 약함.** 줄이 살짝이라도 울리면 스크래치가 지저분해져요. 손가락을 눕혀 여러 줄을 덮으세요.
- **속도부터 올리기.** 스냅이 익기 전에 빠르게 치면 팔로 도망가요. 느리게, 손목만.
