---
title: "ペンタ第3ボックスを体に入れる＋第2↔第3ボックスのスライド接続"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
lang: ja
---

# Day 2 — 三軒目の家、第3ボックスと二本目の橋

## ① 理論・説明

今日なぜこれをやるかというと、昨日、第1↔第2の橋を架けながら、こう感じたはずです。「あ、指板ってひと部屋ずつつながっていくんだな」って。でも、まだ二つのボックスだけではネックの半分も使えていません。今日はもう一段上、**第3ボックス（9〜13フレット）**へ登ります。このボックスに慣れると、ネックの中央（12フレット付近）まであなたの遊び場になります。

第3ボックスには、うれしい顔なじみが一人います。根音Aが**5弦12フレット**にちょこんと座っているんです。12フレットは指板のちょうど真ん中、ドット（インレイ）が二つ並んでいる場所。目で見つけるのがとても簡単です。だから第3ボックスは、位置を覚えるのが意外と楽なんです。「12フレット＝A」これさえ押さえれば、あとは自然についてきます。

```json
{
  "id": "m1.w2.d2.pentatonic_box3",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 3 (connects up from Box 2)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 72
  },
  "fretboard": {
    "startFret": 9,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

そして今日の橋。昨日は4弦でA→Cにスライドしましたよね？今日の第2↔第3接続は**2弦（B弦）**を使います。第2ボックスのA（2弦10フレット）を押さえて**13フレットまでスライド**すると、着地音がまさにC（♭3）になります。またターゲット着地です。面白いのは、ボックスが変わっても私たちが狙う音はいつも同じCだということ。ネック上の位置が変わるだけで、**「コードの3度に着地する」という原則は、3か月間ただの一度も変わりません。**今日はその原則を、第3ボックスでもう一度確かめる日です。

## ② 視覚資料

第3ボックスの地図です。根音Aが5弦12フレット（指板のど真ん中）にあることを、まず目に焼き付けてください。緑のC（♭3）は4弦10フレットと2弦13フレットにあります。

```json
{
  "id": "m1.w2.d2.pentatonic_box3",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 3 (connects up from Box 2)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 72
  },
  "fretboard": {
    "startFret": 9,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

今日の接続ラインです。第2ボックスをなぞって上がっていき、**2弦のA（10フレット）を13フレットまでスライド**させて第3ボックスに入ります。着地音がC（♭3）！最後は第3ボックスの中でそのCにもう一度着地して、ビブラートで歌います。

```json
{
  "id": "m1.w2.d2.box2_to_box3_slide",
  "type": "tab",
  "meta": {
    "title": "Box 2 -> Box 3 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 72
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 10, "duration": "quarter", "technique": "slide", "slideToFret": 13, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 72）**
メトロノーム72で第3ボックスだけを8分音符で上行・下行それぞれ1回。始める前に**5弦12フレットのA**を人差し指で押さえ、「ここが中心」と3回声に出します。12フレットのインレイ二つを目で確認する習慣をつけると、第3ボックスでは絶対に迷いません。今日も上行・下行はこのウォームアップだけです。

**10〜20分・頭のトレーニング（今日のターゲット＝C／♭3、2弦の橋）**
メトロノームを止めて、**2弦A（10フレット）→C（13フレット）のスライド**だけを20回繰り返します。昨日4弦でやったことを、今日は細い2弦でやるわけです。細い弦はスライドが滑りやすく、行き過ぎやすいので注意。13フレットに**ピタリ**と止まることに集中しましょう。そのあと、第3ボックス内のC二か所（4弦10フレット、2弦13フレット）を交互に押さえながら「シー！シー！」と声に出します。第3ボックスのどこにCがいるか、目を閉じても押さえられれば合格です。

**20〜40分・実戦即興（Amワンコードバッキング／BPM 70〜72）**
バッキングを流して、ルール：**第2ボックスで遊びながら、2弦のスライドで第3ボックスに上がり、C（♭3）に着地する。**余裕があれば、昨日架けた第1↔第2の橋と今日の第2↔第3の橋をつなげて、**第1ボックス→第2ボックス→第3ボックス**まで一気に登ってみましょう。ネックの半分を旅したことになります。終わりはいつもC着地です。

```json
{
  "id": "m1.w2.d2.box2_to_box3_slide",
  "type": "tab",
  "meta": {
    "title": "Box 2 -> Box 3 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 72
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 10, "duration": "quarter", "technique": "slide", "slideToFret": 13, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**40〜50分・録音・フィードバック（推奨）**
30秒録音して再生。チェック：2弦スライドの着地音が13フレットで正確に決まっているか、それとも12や14にズレているか。細い弦のスライドは音程が揺れやすいので、着地音がバッキングのAmと「かみ合って」響いているかを耳で確認しましょう。

**今日の完了の目安：** 第3ボックスの根音A（5弦12フレット）を目を閉じて押さえられる。2弦のA→Cスライドで第2↔第3ボックスを行き来しながら、Cに3回以上正確に着地できる。（余裕があれば）第1→第2→第3ボックスの連続上行に成功。

## ④ ヒント・よくある間違い

- **12フレットの目印を使わない。** 第3ボックスで迷う人の多くは、12フレットのインレイを見ていません。指板の真ん中の二点＝A。このアンカー一つでボックス全体がついてきます。目を積極的に使いましょう。
- **細い弦でスライドを飛ばしすぎる。** 2弦は張力が低いので、手がスーッと滑って13フレットを行き過ぎがちです。到着直前に軽くブレーキを。昨日の4弦よりさらに慎重に。
- **ボックスが変わるとターゲットも変わると勘違いする。** それは違います。第1・第2・第3、どのボックスにいてもAmの3度はいつも**C**です。位置が違うだけで、狙う音は同じ。この一貫性こそが即興の羅針盤です。
- **接続を急いで位置をおろそかにする。** 第3ボックスの根音の位置がまだあいまいなのに、接続を急いでつなげると、あとで崩れます。今日は「第3ボックスの根音を体に入れる」ことが最低合格ライン、接続はボーナスだと考えましょう。
