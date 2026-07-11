---
title: "8分音符のフィル — 弱拍の二音で次のコードへ橋を架ける"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 8分音符のフィル（弱拍に二音）

## ① 이론/설명

昨日は4分音符の間にゴースト一音をそっと入れました。今日はその小さな一歩を**8分音符のフィル**に育てます。フィルとは、**弱拍の4分音符一つを二つの8分音符に割って**、次の目標音へつなぐ小さな継ぎ目です。4分音符一つが二つの8分音符に分かれると、その短い区間だけ音が詰まり、リズムが一瞬前へ転がるような生気が出ます。この詰まりとまっすぐな4分音符の対比が、歩みに表情を作ります。<mark>一歩が二歩に分かれ、次のコードへなめらかに渡ります。</mark>

いちばん自然な場所は**4拍目**です。小節の最後の拍で4分音符一つを二つの8分音符に割り、次の小節のルートへ**半音ずつ這い上がる**ようにつなぎます。今日の例は♭7 E♭から半音上のEへ上がり、次の小節のルートFに着地します。二つの8分音符が階段のように**次の音を予告します**。<mark>フィルは「次が来る」という合図です。</mark>

もちろん順序はそのままです。**4分音符の骨組みが先**、フィルは最後の拍だけにそっと。フィルが多くなると歩みがおしゃべりになります。フィルを控えめに使うほど、いざフィルが出たとき、その二歩がはっきり爽やかに聞こえます。<mark>1小節にフィルは一つで十分です。</mark>

まず、今日のフィルが這い上がる道 — ♭7 E♭ → E → オクターブF — を**2弦**で見てみましょう。

```json
{
  "id": "m2.w7.d2.fill_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic fill climbing to octave F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** ♭7 **E♭**（2弦1フレット）→ **E**（2弦2フレット）→ オクターブ**F**（2弦3フレット）へ、4拍目の二つの8分音符が半音ずつ這い上がって次のFに届きます。

```json
{
  "id": "m2.w7.d2.fill_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic fill climbing to octave F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦でより低いFも見当をつけられます。

## ② 시각 자료

では、今日の完成物、**8分音符のフィル・ウォーキング**1小節です。F7を4分音符で歩き、最後の4拍目を二つの8分音符に割って次のルートへつなぎます。<mark>4拍目の二歩が次の小節へ橋を架けます。</mark>各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w7.d2.fill_walk_4",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦、スイング.** 1拍目**F**（ルート）→ 2拍目**A**（3度）→ 3拍目**C**（5度）→ 4拍目は二つの8分音符**E♭**（♭7）+**E**（半音）です。最後の二歩が次の小節のFへ階段を架けます。

```json
{
  "id": "m2.w7.d2.fill_walk_5",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦.** 音と位置は4弦と同じです。低音B弦で低域をさらに支えられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日のゴースト・ウォーキングをBPM 72で一度歩き、4分音符の骨組みの感覚を呼び戻します。

**10〜20分・ブレイントレーニング**
下の準備例で8分音符のフィル・ウォーキングを**BPM 60**のゆっくりしたスイングで押さえます。<mark>4拍目の二つの8分音符が半音ずつはっきり上がるか</mark>を音で確かめます。

```json
{
  "id": "m2.w7.d2.fill_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** 8分音符のフィル・ウォーキングをゆっくり。3拍目まで4分音符で歩き、4拍目だけ二つの8分音符にそっと割ります。

```json
{
  "id": "m2.w7.d2.fill_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**8分音符のフィル・ウォーキング**をBPM 80で繰り返します。<mark>1〜3拍は揺れない4分音符、4拍目だけが二歩に分かれるか</mark>を観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／フィードバック**
8分音符のフィル・ウォーキング1小節を2〜3周止まらずに録音します。聴き返してフィルが次の小節へ自然につながるか、4分音符の骨組みが揺れないかを確かめます。

**今日の完了基準：** F7の4分音符ウォーキングの4拍目を二つの8分音符に割り、半音ずつ次のルートへつなぐフィルを4弦・5弦で歩ける。 — 今日の完成：8分のフィル。

## ④ 팁 / 흔한 실수

- **フィルをどの拍にも入れてしまう。** フィルは次へ渡る橋なので、4拍目に置くのがいちばん自然です。1〜2拍に入れると歩みが急いで見えます。最初は4拍目だけに置く習慣をつけます。
- **二つの8分音符が急いでくっつく。** スイングでは前の8分が少し長く、後ろの8分が少し短めです。二音を同じ長さでぴったりくっつけると硬くなります。前の音に軽くもたれてから後ろの音へ移ります。

今日のフィル、4拍目で半音ずつ上がる二歩を目に刻んでおきましょう。E♭からオクターブFまで、短い階段一つが次の小節を呼び込みます。

```json
{
  "id": "m2.w7.d2.fill_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The two-note fill on beat 4 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing", "highlight": true },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 4拍目の二つの8分音符フィルです。♭7 **E♭**（1フレット）→ **E**（2フレット）へ上がり、オクターブ**F**（3フレット）を呼び込みます。

```json
{
  "id": "m2.w7.d2.fill_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The two-note fill on beat 4 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing", "highlight": true },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えられます。

- **今日の自分をほめましょう。** ゴーストに続いて、今度は8分音符二音で次のコードへ橋を架けられます。明日はこの二音を**ハンマリング**でなめらかに流します。
