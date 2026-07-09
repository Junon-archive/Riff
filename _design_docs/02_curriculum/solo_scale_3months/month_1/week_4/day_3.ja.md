---
title: "ブルースフレージング——3度インターバル＋♭5経過音＋ベンド/ヴィブラート"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
lang: ja
---

# Day 3 — スケールを「フレーズ」に：♭5を溶け込ませる

## ① 理論・説明

今日なぜこれをやるかというと。この2日間で材料はすべて揃いました。♭5の場所（Day 1）、ベンド（Day 1）、ヴィブラート（Day 2）。でも、どんなにいい材料でも、料理しなければただの冷蔵庫の中身にすぎません。今日はこれらの材料を一つの**<mark>フレーズ（音楽的な一文）</mark>**として料理します。これこそが即興の本当のスタートです。

ブルースフレージングの骨格は、この3週間ずっと訓練してきた**3度インターバル**です。隣の音へ平坦にくっついて動くのではなく、ぴょんぴょん跳ねるように、と言ってきましたよね。そこに今日、♭5を**経過音**として挟み込みます。定番の公式があります。下行するとき、**<mark>5度（E）→♭5（E♭）→4度（D）</mark>**と半音ずつ滑り降りるんです。この3音が連なって降りてくると、その瞬間サウンドがぐっと濃厚になります。ブルースリックの8割はこの断片から生まれています。ポイントはやはり、♭5に**<mark>留まらないこと</mark>**。サッと通り過ぎてこそ経過音です。

```json
{
  "id": "m1.w4.d3.blues_phrasing_map",
  "type": "scale_shape",
  "meta": {
    "title": "A blues Box 1 — phrasing material (3rds + b5 passing)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

そしてフレーズには**<mark>句読点</mark>**が必要です。ベンドは文の途中の**感嘆符（！）**、ヴィブラートは文末の**句点（。）**だと考えてください。3度でストーリーを展開しながら、途中でベンドを使って一度感情をぐっと押し上げ（！）、♭3か根音に着地してヴィブラートで文を締めくくる（。）。この「展開→感嘆符→句点」という流れがあれば、たとえ同じ5〜6音でもそれは**音楽**になります。

今日の目標はただ一つ。下の3小節のフレーズを、**<mark>口で口ずさめるくらいまで</mark>**体に刻み込むことです。指の運動としてではなく、「歌」として覚えるのがポイント。手が覚えたものは即興では出てきません。**耳が覚えたものだけ**が出てきます。

## ② 視覚資料

フレーズの材料マップです。3度で跳ぶための足場（スケール音）と、<mark>経過音の♭5（紫）</mark>、着地点の♭3（緑）を1枚にまとめました。

```json
{
  "id": "m1.w4.d3.blues_phrasing_map",
  "type": "scale_shape",
  "meta": {
    "title": "A blues Box 1 — phrasing material (3rds + b5 passing)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

今日の本体、ブルースフレーズ3小節です。1小節目＝**<mark>5→♭5→4の半音下行経過音</mark>**＋♭3着地。2小節目＝**3度インターバルの上行**で展開。3小節目＝**半音ベンドで♭5の感嘆符**を打ち、♭3に着地、ヴィブラートで句点。

```json
{
  "id": "m1.w4.d3.blues_phrase_full",
  "type": "tab",
  "meta": {
    "title": "Blues phrase — 3rd intervals + b5 passing + bend/vibrato punctuation",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "highlight": true, "role": "target" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 80）**
Aブルーススケール第1ボックスを3度インターバルで上行・下行それぞれ1周。先週より一段階速い80です。♭5は3度ジャンプの合間に、<mark>経過音として軽く触れるだけ</mark>。もたつくならBPM 75に落としましょう。

**10〜20分・頭のトレーニング（フレーズを「歌」として覚える）**
メトロノームを止めて、上の3小節のフレーズをとてもゆっくり手に馴染ませます。特に1小節目の「5-♭5-4」の半音下行が滑らかか、3小節目の半音ベンド（4→♭5）が正確な高さに届いているかに集中してください。そしてここからが本当に大事なところ——**<mark>ギターを置いて、口でそのフレーズを口ずさんでみましょう</mark>。** 口ずさめたら、それは耳が覚えたということです。それが今日の合格基準です。

```json
{
  "id": "m1.w4.d3.blues_phrase_full",
  "type": "tab",
  "meta": {
    "title": "Blues phrase — 3rd intervals + b5 passing + bend/vibrato punctuation",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "highlight": true, "role": "target" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20〜40分・実戦即興（Am7ワンコードバッキング／75〜80 BPM）**
バッキングを流して、最初は上のフレーズをそのまま繰り返します。慣れてきたら、**<mark>3小節のうち1小節だけ</mark>**変えてみましょう。1小節目の下行経過音は保ったまま、2小節目の3度展開を別の弦で、あるいは3小節目の着地を♭3の代わりに根音にしてみる、というように。ルールはたった2つ：**①♭5は経過音として（スッと通り過ぎる）②<mark>フレーズの終わりはベンドの感嘆符かヴィブラートの句点で必ず閉じる</mark>。**

**40〜50分・録音・フィードバック（推奨）**
バッキングの上でフレーズを30秒だけ録音します。チェック項目：①「5-♭5-4」の下行がにじまず、3粒の音として聞こえるか。②半音ベンドが♭5の高さに正確に届いているか（昨日学んだ耳での照合）。③<mark>フレーズが「文章」のように始まり-展開-終わりを持っているか</mark>、それともただの音の羅列か。一つでも引っかかったら、その部分だけ切り出して10回練習しましょう。

**今日の完了ライン：** 3小節のフレーズをBPM 80で途切れなく弾ける。そのフレーズを口ずさめる。バッキングの上で1小節以上変形させたフレーズを作れる。

## ④ ヒント・よくある間違い

- **♭5で一瞬止まってしまう。**「5-♭5-4」の下行で、無意識に♭5を少し長く押さえてしまうと、経過音ではなく着地音のように聞こえて不自然になります。3音は**同じ長さでコロコロと**流れるようにしましょう。
- **手だけで覚えて、耳で覚えていない。** 指の筋肉記憶だけで覚えたフレーズは、即興では絶対に出てきません。必ず口ずさめるようになるまで練習してください。口ずさめないなら、それはまだ自分のものになっていません。
- **感嘆符も句点もなく、平坦に音を並べてしまう。** ベンド（！）もヴィブラート（。）もなくただ音を並べるだけだと、3週間前とまったく同じです。フレーズごとに**最低1つの表現（ベンドかヴィブラート）**を必ず入れましょう。
- **変形を欲張りすぎる。** 20〜40分のあいだに最初からすべて変えようとすると、フレーズが崩れてしまいます。**一度に1小節ずつ**にとどめましょう。骨格はそのままに、肉の部分だけを変えるのがフレージング訓練の王道です。
