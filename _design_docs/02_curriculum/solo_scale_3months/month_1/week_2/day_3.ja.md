---
title: "第1〜3ボックスをつなぐ3度インターバル・シーケンス（接続の精度）"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
lang: ja
---

# Day 3 — 三軒の家を一本の糸で貫く：ネックの高速道路完成

## ① 理論・説明

今日なぜこれをやるかというと、この二日間で橋を二本架けましたよね。第1↔第2、第2↔第3。でも、橋を「架けること」と、その上を「走ること」は別物です。今日は三つのボックスを**一本の流れるライン**として貫きます。それも平坦な上行下行の階段ではなく、先週習った**3度インターバル（一つ飛ばし）**でつなぎます。

なぜあえて3度インターバルでつなぐのか。スライドでボックスをただ繋げるだけだと、音が「位置移動の練習」みたいに機械的に聞こえてしまいます。でもその旅路に3度のジャンプを乗せると、途端に**歌うライン**になるんです。ピョンピョン跳ねながらネックを登っていく感覚。B.B.キングがネック全体をゆったり散歩するあの感じの種が、まさにこれです。ボックス移動＋3度スキップ＝ネックを歌いながら旅すること。

今日の本当の試験台は**接続ポイントの精度**です。3度で跳ねながら、ボックスの境界でスライドに乗り換えるあの継ぎ目。ここで音程が揺れたり拍がズレたりすると、旅路全体がつまずいてしまいます。だから今日は、速さより**継ぎ目のなめらかさ**が採点基準です。そしてこのカリキュラムの心臓は、今日も変わらず脈打っています。どれだけボックスを渡り歩いても、それぞれのボックスの境界では**C（♭3）に着地**します。三回の着地、三つのC。それが今日の旅路を一つにまとめる釘です。

## ② 視覚資料

まずはネック全体の地図です。5フレットから13フレットまで、三つのボックスに散らばった**根音AとターゲットC（♭3）だけ**を抜き出して表示しました。これがあなたの「高速道路の標識」です。青い旅の途中にこの赤いCが現れたら、そこが着地ポイントです。

```json
{
  "id": "m1.w2.d3.neck_targets_box1_3",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Root & b3 targets across Box 1-2-3 (the connection highway)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 9,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今日の本題、三ボックスを貫く3度インターバル・ラインです。第1ボックスで3度に跳ねながらスタート→4弦スライドで第2ボックスへ→2弦スライドで第3ボックスへ→高いCに着地。小節ごとの継ぎ目でCを踏んでいるか確認してください。

```json
{
  "id": "m1.w2.d3.three_box_3rd_sequence",
  "type": "tab",
  "meta": {
    "title": "3rd-interval sequence linking Box 1 -> 2 -> 3 (land b3 at each seam)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 10, "duration": "eighth", "technique": "slide", "slideToFret": 13, "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 70→段階的に上昇）**
まず昨日までの二本の橋（4弦A→C、2弦A→Cスライド）をBPM 70で各5回、軽くほぐします。手が継ぎ目を覚えているか確認。そのあと上の3ボックス・ラインを**とてもゆっくり**、特にスライド部分だけはっきりと弾きます。継ぎ目がなめらかになったら**75→80**と5ずつ上げていきます。継ぎ目でつまずくテンポが、今日の上限です。

**10〜20分・頭のトレーニング（今日のターゲット＝三つのC、継ぎ目の照準）**
メトロノーム80。3ボックス・ラインを弾きながら、各小節末の**C（♭3）着地音でだけ**0.5秒止まって進みます。1小節末（第2ボックスに入るC）、2小節の流れの中のC、3小節末（高いC）。三つのCを旅の「停車駅」として、流れるラインの中でも正確に踏む訓練です。三つの停車駅すべてを正確に踏めれば合格です。

**20〜40分・実戦即興（Amワンコードバッキング／BPM 75〜80）**
バッキングを流して、ルール：**第1ボックスから出発し、スライド二回で第3ボックスまで登ったあと、また降りながらどのボックスでもいいのでCに着地して締めくくる。**上の例のラインをそのまま弾いてもいいし、3度ジャンプの順番を変えて即興してもかまいません。ただ一つだけ、**ボックスの境界を越えるときは必ずスライドで**越えてください。手を宙で跳ねさせず、弦の上を滑って越える感覚を体に刻み込むのが今日の核心です。

**40〜50分・録音・フィードバック（推奨）**
3ボックスの旅を一回録音。再生してチェック：①二つのスライドの継ぎ目で拍が乱れたり「ガクッ」と途切れたりしていないか。②三つのCがすべてくっきり聞こえるか。途切れる継ぎ目があれば、そのボックス間のスライドだけを切り出して10回繰り返します。継ぎ目がなめらかになって初めて、ネック全体が一つにつながります。

**今日の完了の目安：** 上限BPM（最低75以上推奨）で第1→2→3ボックスの3度インターバル・ラインを継ぎ目の途切れなく通過。三つのC着地点すべてが正確。上行・下行の往復1回に成功。

## ④ ヒント・よくある間違い

- **継ぎ目で手が宙をジャンプする。** ボックスの境界をスライドの代わりに手を持ち上げて移動すると、その瞬間に拍が乱れて音が途切れます。今日のルール：**境界は必ずスライドで。**指を弦から浮かせないこと。
- **3度ジャンプしながら間の音を紛れ込ませる。** 3度の魅力は間の音を**空けること**から生まれます。詰めて弾くと、ただの上行下行に逆戻り。ピョン、ピョン。間を空けてください。
- **速度から上げて継ぎ目を潰してしまう。** 今日の採点は速さではなく**継ぎ目のなめらかさ**です。80で継ぎ目がガタつくなら、75があなたの本当の実力。潰れた80より、くっきりした75のほうがずっと強いんです。
- **旅に浮かれて着地を忘れる。** ネックを楽しく登ったのに、どこでも適当に止まってしまうと、3日間が水の泡です。三つのボックスを渡っても、ゴールはいつもC。旅の華やかさより着地の正確さです。
