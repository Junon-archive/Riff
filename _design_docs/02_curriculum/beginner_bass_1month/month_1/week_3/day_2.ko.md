---
title: "8분음표 루트 라인과 포켓의 쉼"
dayKey: "m1.w3.d2"
estMinutes: 30
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 8분음표 루트 라인, 포켓 만들기

## ① 이론/설명

어제는 킥이 떨어지는 순간에 루트 하나를 딱 얹었죠. 오늘은 그 감각을 **한 마디 통째로** 이어, 이번 주의 진짜 뼈대인 **<mark>8분음표 루트 라인</mark>**을 만들어요. 8분 루트 라인은 **한 코드 위에서 루트를 8분음표로 균일하게** 굴리는 라인이에요 — 수많은 락·팝 명곡의 바닥을 떠받치는, 가장 기본이자 가장 든든한 베이스죠.

핵심은 **여덟 개의 음이 자로 잰 듯 고른 것**이에요. 하나라도 서두르거나 처지면 그루브가 삐걱대요. 그래서 오늘은 개방 E 하나만 쓰고, 대신 **여덟 번의 타점을 완벽히 균일하게** 굴리는 데만 집중해요. 왼손은 짚은 채 그대로, **오른손 투핑거가 검지-중지를 번갈아** 또박또박 굴려요 — 이 교대가 균일함의 열쇠예요.

그런데 8분을 처음부터 끝까지 꽉 채우면 답답해요. 그래서 중간에 **<mark>쉼(공간)</mark>**을 하나 넣어요. 각 마디 **2박 뒤 8분(&)을 비워** 살짝 숨을 주는 거죠. 여기서 중요한 규칙 — **손은 멈추지 않되 그 자리만 소리 없이 비워요**. 오른손은 계속 8분으로 움직이되, 그 한 타점에서만 줄을 살짝 재워 소리를 내지 않는 거예요. 이 작은 빈칸이 라인에 **<mark>그루브(포켓)</mark>**를 만들어줘요.

이 라인도 **4현이든 5현이든 운지가 똑같아요**. 개방 E는 4번현 하나면 되고, 5현이라면 저음 B(5번현)를 엄지로 덮어 재워두면 돼요. 오늘은 속도보다 **8분의 균일함과 쉼의 위치**, 이 둘만 손에 남기면 충분해요.

## ② 시각 자료

오늘은 **8분 루트 라인을 두 단계로** 익혀요. 먼저 쉼 없이 <mark>균일한 8분</mark>을 채워 손을 고르고, 그다음 2박 뒤 8분을 비워 **포켓**을 만들어요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

**예제 1 — 균일한 8분 루트.** 개방 E를 쉼 없이 여덟 번, 간격을 완벽히 고르게. 서두르는 음이 없는지 귀로 살펴요.

```json
{
  "id": "m1.w3.d2.eighth_line_even_4",
  "type": "tab",
  "meta": { "title": "Even eighth root line on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 파랑 개방 E 여덟 개를 자로 잰 듯 균일하게. 투핑거 검지-중지를 또박또박 번갈아요.

```json
{
  "id": "m1.w3.d2.eighth_line_even_5",
  "type": "tab",
  "meta": { "title": "Even eighth root line on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 운지는 4현과 똑같아요. 저음 B는 엄지로 덮어 재워두세요.

**예제 2 — 포켓 8분 루트.** 이번엔 **2박 뒤 8분(&)을 비워요**. 그 자리에서 오른손은 멈추지 말고, 줄만 살짝 재워 소리를 내지 마세요.

```json
{
  "id": "m1.w3.d2.eighth_line_pocket_4",
  "type": "tab",
  "meta": { "title": "Pocket eighth root line on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 빈칸(2박 &)에서 손은 계속 움직이되 소리는 없이. 그 작은 숨이 **포켓**을 만들어요.

```json
{
  "id": "m1.w3.d2.eighth_line_pocket_5",
  "type": "tab",
  "meta": { "title": "Pocket eighth root line on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요. 빨라져도 저음 B가 새지 않게 엄지로 덮어두세요.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
어제 익힌 킥에 루트 얹기를 BPM 70으로 다시 풀어요. **정박에 음이 정확히 떨어지는지** 확인하며 손을 데워요.

**7~17분 · 오늘의 기술**
예제 1(균일 8분)을 BPM 70에서 반복. <mark>여덟 음의 간격이 완벽히 고를 때까지</mark> 투핑거 교대만 다듬어요.

**17~27분 · 적용**
예제 2(포켓 8분)를 BPM 70에서 4번. **빈칸에서 소리가 나지 않고**, 손은 멈추지 않는지 확인해요. 흔들리면 예제 1로 돌아가요.

**27~30분 · 체크**
오늘 도달한 BPM을 적고, 30초 녹음해 **8분이 고르고 쉼이 살아 있는지** 들어봐요.

**오늘의 완료 기준:** 한 코드(E) 위 8분음표 루트 라인을, 2박 뒤 쉼을 살려 4현·5현 둘 다 65~75에서 균일하게 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **빈칸을 진짜로 멈춰요.** 쉼에서 손까지 멈추면 다음 음이 늦게 나와요. 소리만 비우고 오른손은 계속 8분으로 저어요.
- **8분이 울퉁불퉁해요.** 검지·중지의 세기가 다르면 음이 들쭉날쭉해요. 두 손가락의 크기를 똑같이 맞춰 굴려요.
- **속도부터 올려요.** 70에서 고르지 않은데 빠르게 가면 쉼이 사라져요. 균일함이 먼저, 속도는 나중이에요.
- **저음 B 방심(5현).** 8분이 빨라질수록 B가 함께 울기 쉬워요. 엄지로 계속 덮어 저음을 재워두세요.
