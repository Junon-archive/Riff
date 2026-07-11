---
title: "スイング4分音のフィール — 均一に前進する歩み"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — スイング4分音、均一に前進する歩み

## ① 이론/설명

いよいよ1か月目の最終週です。1か月前の初日を思い出してみましょう。あの頃は**ルート**を1音押さえるのも神経を使ったのに、今はコードトーンで歩き、アプローチノートで次のコードまで狙えます。今週はそのすべてを集めて<mark>Fブルース12小節を最初から最後まで歩きます</mark>。その第一歩が今日のテーマ、**スイング4分音のフィール**です。

ウォーキングの心臓は**4分音**です。1小節に4回、1拍ごとに1音ずつ、コツコツと歩くわけです。でもジャズ・ブルースの4分音は定規のように同じ長さではなく、少し**スイング**が入ります。前の拍を少し長く、後ろの拍を少し短く — 歩く人が軽く弾むように進む感じです。譜面は定拍で書き、その上に**swing**の指示だけを添えます。3連符のように転がしすぎず、<mark>気持ちよくグルーヴに乗る程度</mark>で十分です。

スイング4分音でいちばん大切なのは**均一さ**と**前進感**の2つです。4つの拍の大きさが揃ってこそウォーキングは揺れず、1拍ごとに次の拍へ押し出す感じがあってこそ歩みが生きます。今日はF7という1つのコードの上で、このフィールだけを手になじませます。**R-3-5-b7**で上がり、また下りて、4拍が一貫して前へ進む歩みを作ります。この感覚が体に入れば、残りの3日で12小節を歩くのは時間の問題です。

まずF7のコードトーン4つを指板で見ましょう — **R・3・5・b7**です。

```json
{
  "id": "m1.w4.d1.f7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** F7のR（4弦1フレット）・3（4弦5フレット）・5（3弦3フレット）・b7（3弦6フレット）です。

```json
{
  "id": "m1.w4.d1.f7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

ではそのスイング4分音を、F7という1つのコードの上で歩いてみましょう。**R-3-5-b7**で上がり、**5-3-R**で下り、最後の4拍にアプローチノート**E**を置いて再びFへつなげます。<mark>4拍が均等に、前へ押し出す感じで</mark>転がっているか耳で確かめましょう。すべての例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m1.w4.d1.swing_walk_f7_4",
  "type": "tab",
  "meta": { "title": "F7 swing quarter-note walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4弦.** 1小節目はF7のコードトーンを上がり、2小節目は下りて4拍目のE（2弦2フレット）でFを狙います。4拍を一貫して均一に。

```json
{
  "id": "m1.w4.d1.swing_walk_f7_5",
  "type": "tab",
  "meta": { "title": "F7 swing quarter-note walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5弦.** 音と位置は4弦と同じです。低音Bは覆っておきましょう。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
3週目のアプローチノート・ウォーキングをBPM 72で一度歩きます。指先にウォーキングの感覚を呼び戻しましょう。

**10〜20分・頭のトレーニング**
下の準備例で、F7のコードトーンを**BPM 60**の遅いスイング4分音でコツコツ押さえます。足で拍を数えながら<mark>4拍の大きさが同じか</mark>を感じましょう。

```json
{
  "id": "m1.w4.d1.swing_prep_4",
  "type": "tab",
  "meta": { "title": "Even swing quarters on F7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4弦.** F7のコードトーンを1拍ずつ。急がず、4拍を定規で測ったように均等に置きましょう。

```json
{
  "id": "m1.w4.d1.swing_prep_5",
  "type": "tab",
  "meta": { "title": "Even swing quarters on F7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**スイング・ウォーキング**を**BPM 80**で2小節の循環として繰り返します。<mark>1拍ごとに前へ押し出す前進感</mark>があるか確かめましょう。4弦でなじませてから5弦でも確認します。

**40〜50分・録音／フィードバック**
30秒録音して、4拍が均等に、歩みのように前進しているか聴いてみましょう。今日ラクだったBPMを書き留めておけば、明日の12小節のスタート地点になります。

**今日の完了基準：** F7という1つのコードの上で、スイング4分音ウォーキング（R-3-5-b7の上り下り）をBPM 80で均一かつ前進感をもって、4弦・5弦の両方で歩ける。

## ④ 팁 / 흔한 실수

- **後ろの拍がもたつきます。** スイングを気にしすぎると後ろの拍が伸びて歩みが遅くなります。メトロノームのクリックに前の拍をぴったり合わせ、後ろの拍は軽く添える程度に保ちましょう。
- **転がしすぎです。** 重い3連符のように弾みすぎると歩みがふらつきます。スイングはほんの少しで十分です。

Fを2オクターブで押さえておくと、歩みの上り下りがラクになります。低いFと1オクターブ上のFを一緒に見ましょう。

```json
{
  "id": "m1.w4.d1.f_octave_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F root, two octaves — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** 低いF（4弦1フレット）と1オクターブ上のF（2弦3フレット）です。

```json
{
  "id": "m1.w4.d1.f_octave_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F root, two octaves — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでさらに低いFも見当をつけられます。

- **1か月の歩みを自分でほめましょう。** ルートだけを押さえていたところから始めて、今はスイング4分音でコードを歩く自分です。このフィールが身につけば、残りの3日で12小節を歩くのは自然についてきます。
