---
title: "Amバッキングの上でボックスを行き来する3度ターゲット着地の即興"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
lang: ja
---

# Day 4 — 今週のゴールライン：ネック全体を舞台にする即興

## ① 理論・説明

今日なぜこれをやるかというと、今週の三日間で私たちは指板を広げてきました。第1ボックスの檻から抜け出し、第2・第3ボックスまで橋を架け、その上を3度で旅する方法を学びましたよね。でもこの三日間は全部**決められたライン**を弾いたものでした。今日はそれをいったん置いて、バッキングの上で**自分の思うまま**にボックスを行き来します。これが今週の本当の試験です。

ここで大事な心構えが一つ。ネックが広くなったからといって、「たくさん動き回るほど上手い」というわけでは決してありません。一番初心者っぽく見える瞬間はまさに、**不安でネックを慌ただしく上下に撫で回してしまう**ことです。逆にプロは必要なときだけボックスを越えて、越えた先で**そのボックスのC（♭3）にきちんと着地**して歌います。つまり、移動は手段で、**着地こそが目的**なんです。ネックが3倍広くなったということは、着地できるCも3倍に増えたということ。先週は第1ボックスのCだけを狙っていたなら、今日は三つのボックスのCを全部武器にします。

今日のゲームはこうです。バッキングの上でフレーズを開いて、**どのボックスへでもスライドで移動したあと、着いたボックスのCかAに着地してビブラートで閉じる。**開いて、動いて、閉じる。この一サイクルが自然にできるようになれば、あなたはもう「一つのボックスに閉じ込められた人」ではありません。ネック全体を舞台に使う即興演奏者として、今週を卒業するということです。

## ② 視覚資料

AmのコードトーンR・♭3・5のネック地図です。5〜13フレット、三つのボックスにまたがる着陸地点をすべて表示しました。緑のC（♭3）があなたの最優先の着地点、根音Aは安全な第二候補。青いE（5度）は通り過ぎるコードトーンです。この地図が今日の即興の羅針盤です。

```json
{
  "id": "m1.w2.d4.am_chord_tone_map_box1_3",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) across Box 1-2-3",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 82
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 9,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

ボックスを行き来する即興の例リックです。1小節目は第2ボックスから登ってスライドで第3ボックスのCに着地、2小節目は再び降りながらスライドで第2ボックスのCに着地。「登って閉じ、降りて閉じる」の見本です。

```json
{
  "id": "m1.w2.d4.cross_box_target_lick",
  "type": "tab",
  "meta": {
    "title": "Cross-box improv lick (slide between boxes, resolve on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 82
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 10, "duration": "eighth", "technique": "slide", "slideToFret": 13, "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 10, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 82）**
今週の二つのスライド（4弦、2弦）と3ボックスの3度ラインを82で一回ずつ手早くほぐします。手がネック全体を覚えているか最終チェック。上の例リックも1〜2回ゆっくりなぞって、「登って閉じ、降りて閉じる」感覚をつかみます。

**10〜20分・頭のトレーニング（今日のターゲット＝三つのボックスのC、即座の照準）**
メトロノーム80。ルール：どのボックスでも自由に何音か弾いたあと、心の中で「今！」と思った瞬間に**一番近いC（♭3）を見つけて即座に着地**します。第1ボックス（3弦5フレット・1弦8フレット）、第2ボックス（4弦10フレット・1弦8フレット）、第3ボックス（4弦10フレット・2弦13フレット）——どのボックスにいても、一番近いCへ着地する瞬発力を鍛えるわけです。10回中8回成功すれば合格です。

**20〜40分・実戦即興（Amワンコードバッキング／BPM 78〜82）**
今日のメイン、そして今週の卒業試験です。バッキングを流して、ルール：**一つのフレーズは今いるボックスで開き（質問）、次のフレーズで別のボックスへスライドで移動したあと、そのボックスのCかAに着地して閉じる（答え）。**コール＆レスポンスのようなイメージです。最低三回はボックスを変えながら着地してみましょう——できれば三つのボックスそれぞれで一回ずつ。移動が目的ではなく、**移動した先で歌うこと**が目的だということを忘れないでください。ネックを慌ただしく撫で回したい衝動が湧いたら、むしろ一つのボックスにとどまってCを一つ長くビブラートすることで、自制心を見せてあげましょう。

**40〜50分・録音・フィードバック（推奨）**
今日は必ず録音してください。今週の成果物ですから。再生してチェック：①ボックスを移るとき、スライドでなめらかに越えられたか、それともブツッと途切れたか。②移った先のボックスで**きちんとCに着地**できたか、それとも慣れない場所で迷って音を逃したか。③先週の録音（第1ボックスだけ使っていたもの）と比べて、音の「空間の広がり」が増したか。広がっていたら、おめでとうございます。もうネックは檻ではなく、舞台です。

**今日の完了の目安（＝2週目の卒業基準）：** Amバッキングの上でボックスを最低3回変えながら（スライド移動）、それぞれ着いたボックスのC（♭3）またはA（根音）に意図的に着地できる。着地音ごとにビブラートで締めくくる。慌ただしい撫で回しなしで「開く－動く－閉じる」を最低3サイクル。

## ④ ヒント・よくある間違い

- **不安でネックを慌ただしく撫で回してしまう。** 今日最大の落とし穴です。広くなった指板を全部使わなければという強迫観念で上下に撫で回すと、まさに初心者っぽく見えます。移動は「必要なときに一回」、そして必ず着地で締めくくる。動きは少なく、確実に歌う——それがプロです。
- **移った先のボックスで道に迷う。** 新しいボックスに着いたのにCがどこだったか忘れると、着地が崩れます。だからこそ、上のコードトーン地図を頭に入れておくんです。移動する前に「あのボックスのCはあそこ」とあらかじめ照準を合わせてから渡りましょう。
- **スライドなしで手が瞬間移動する。** ボックスを移るときに手を宙へパッと持ち上げると、音が途切れて拍がズレます。今週ずっと強調してきましたよね。**移動は弦の上を滑って。**そうして初めて、フレーズが一つにつながります。
- **着地音をかすめて通り過ぎる。** Cに到着したら、最低1拍はとどまってビブラートで歌ってください。ネックをどれだけ広く使っても、着地にとどまらなければ、それはただの「素通り」であって音楽ではありません。今週広がった舞台も、結局は**とどまる着地**の一つで完成するのです。
