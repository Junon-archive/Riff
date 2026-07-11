---
title: "総仕上げ8小節即興：長6度の色彩＋コード3度着地"
dayKey: "m3.w9.d4"
estMinutes: 50
i18nKey: "lesson.m3.w9.d4"
lang: ja
---

# Day 4 — すべてを合わせる：Am7–D7の上でF#色彩と3度着地を編み込んだ8小節ソロ

## ① 理論・説明

今日なぜこれをやるかというと。この3日間で、部品を全部作ってきましたよね。F#（長6度）の色彩（Day 1）、3度インターバルと色彩ライン（Day 2）、4音シーケンスとコードごとの3度着地（Day 3）。今日はこれらの部品を**<mark>1つのソロ</mark>**として組み立てます。今週の卒業制作です。

舞台は**<mark>Am7–D7ヴァンプ</mark>**、2小節ずつ全部で8小節です。

- 1〜2小節：Am7 → 3〜4小節：D7 → 5〜6小節：Am7 → 7〜8小節：D7

今日のソロが守るべき文法はたった2行です。

- **<mark>Am7区間はC（b3）に着地。</mark>**マイナーの3度、この進行の「家」です。
- **<mark>D7区間はF#（6度）に着地。</mark>**D7の3度であると同時にドリアンの色彩音。ここで音が明るく弾けます。

そして今日新しく加える感覚が1つ。**<mark>余白とビブラート</mark>**です。8小節を音でぎっしり埋め尽くそうとしないでください。着地音にたどり着いたら**少し休み（レスト）**、着地音は**ビブラートで歌わせて**ください。スケールを休みなく並べるのは「練習」であって「ソロ」ではありません。着地→余白→次のフレーズ、この呼吸があってこそ音楽になります。（余白やフレージングは来週W11から本格的に扱いますが、今日は一足先にひとさじ加えます。）

以下の8小節は「正解」ではなく**<mark>お手本</mark>**です。まるごと覚えて弾きながら、「ああ、F#の着地ってこんなに明るいんだ」「余白ってこんなに息をつけるんだ」と体で感じたあと、皆さん自身のラインに変えていってください。それが今週の本当の目標です。

## ② 視覚資料

まず、**<mark>着地マップ</mark>**です。この8小節で狙う2つの目標だけをハイライトしています。**C（Am7の3度）**と**F#（D7の3度＝ドリアンの色彩）**。根音Aは方向の目印として表示。まずはこの2色だけを頭に入れて始めましょう。

```json
{
  "id": "m3.w9.d4.landing_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Landing map - C for Am7, F#(color) for D7",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

次に、**<mark>8小節即興のお手本</mark>**です。Am7区間はCに、D7区間はF#に着地し、着地音にはビブラート、3小節目・7小節目の頭には余白（休符）を置いています。8小節の最後は、ドリアンの正体音である**F#**に長く降りて締めくくります。

```json
{
  "id": "m3.w9.d4.eight_bar_dorian_solo",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "8-bar A Dorian solo over Am7-D7 (F# color + 3rd targeting)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 5, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 6, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 85）— 着地音2つを温める**
メトロノーム85に合わせて、着地マップの2つの目標だけを交互に押さえます。C（3弦5フレット）↔F#（2弦7フレット）、それぞれにビブラートを乗せて4分音符で。「Am7でC、D7でエフシャープ」と口に出しながら。今日、手が最終的に覚えるべきなのは<mark>結局この2音</mark>です。

```json
{
  "id": "m3.w9.d4.landing_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Landing map - C for Am7, F#(color) for D7",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

**10〜20分・頭のトレーニング（8小節のお手本を手に乗せる）**
まだバッキングなしで、8小節のお手本を1小節ずつゆっくりと。つまずいた小節だけ5回ずつ繰り返します。特に2・4・6・8小節目の**着地音（ビブラート）**と、3・7小節目の頭の**余白（休符）**を正確に。余白は「うっかり止まった」ように不自然になってはいけません。**<mark>意図した呼吸</mark>**として堂々と空けてください。

```json
{
  "id": "m3.w9.d4.eight_bar_dorian_solo",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "8-bar A Dorian solo over Am7-D7 (F# color + 3rd targeting)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 5, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 6, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

**20〜40分・実戦即興（Am7-D7ヴァンプ／BPM 80〜85）**
「Am7 D7 vamp backing track」を流します。まずは8小節のお手本をバッキングの上で**そのまま2周**。そこからが本番です。お手本を手放して**自分で8小節を即興**しますが、守るルールは2つだけ — **<mark>①Am7の終わりはC、D7の終わりはF#に着地</mark>／②各フレーズの終わりに1拍以上の余白を入れる。**間は3度でも4音でも自由。周回ごとに少しずつ違う試みをしてみましょう。

**40〜50分・録音・フィードバック（推奨）**
自分で即興した8小節のうち、一番よく弾けたものを録音します。聴き直してチェックするのは3つ。**①コードごとの着地（C/F#）は合っていたか／<mark>②D7のF#で音が明るく弾けたか</mark>／③余白が息をつかせてくれたか（それとも休みなく詰まっていたか）。**再生速度を0.75倍に落として、着地のタイミングとビブラートの周期を確認しましょう。ここで見つけた改善点1つが、来週（W10ミクソリディアン）に向かう前の宿題です。

**今日の完了基準：**8小節のお手本をバッキングの上で最後まで弾ききる。続けて**自分で即興した8小節**で、コードごとの3度着地（C/F#）を守りながら、フレーズごとに最低1回は余白を入れて録音まで完了させる。

## ④ ヒント・よくある間違い

- **D7の着地を逃して、ずっとマイナーのまま弾いてしまう。**8小節を通してAm7のように弾いてしまうと、ドリアンのハイライトであるD7区間が死んでしまいます。D7が来たら**意識的にF#**へ方向を切り替えましょう。この色の転換が、今日のソロの心臓です。
- **余白が怖くて音でぎっしり埋めてしまう。**初心者らしさが一番出るのが「休めないソロ」です。3・7小節目の休符を消さないでください。空いているからこそ、次のフレーズが生きてきます。余白は実力であって、怠けではありません。
- **着地音をぷつっと切ってしまう。**CとF#の着地にビブラートがないと、「到着」ではなく「停止」のように聞こえてしまいます。手首で一定に、広く揺らして着地音を歌わせましょう。この1音が歌えば、8小節全体が生きてきます。
- **お手本を「正解」として握りしめてしまう。**お手本は踏み台です。まるごとだけを繰り返していると、即興力は伸びません。半分はお手本、半分は自分のライン — その比率を周回ごとに自分の方へ寄せていってください。それがこの3か月の方向性です。
- **テンポを欲張ってしまう。**85がきつければ78に落としましょう。着地の正確さと余白の余裕が、速さより先です。遅くてもコードごとに正確に着地するソロの方が、速く弾いて潰れた羅列より百倍音楽的です。
