---
title: "3度インターバル（スキップ）パターン集中トレーニング"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
lang: ja
---

# Day 2 — 一つ飛ばし、3度インターバルの味わい

## ① 理論・説明

今日なぜこれをやるかというと。昨日、4連音で少し惰性を崩しましたよね？でも4連音も結局は「隣の音、隣の音、隣の音」とくっついて動くものなので、音はまだ階段のようにのっぺりしています。本物のソロらしさ、つまり「歌っている」感覚は、音と音の間を**ぴょんと跳ぶとき**に生まれます。それがまさに3度インターバルです。

3度インターバルは、たいしたことではありません。スケールの中で**すぐ隣の音を飛ばして、その次の音へジャンプする**だけです。Aの次にCではなく、その次のDへ。Cの次はEへ。「一つ飛ばし」のゲームだと思ってください。こうするだけで、同じ5音のペンタトニックなのに、音が急に洗練されます。B.B.キングでもスラッシュでも、耳に残るリックの多くは、この3度ジャンプが種になっています。

そしてここに隠れたボーナスがあります。3度で跳んでいくと、自然と**A→C、D→F#（はないので）**……いえ、私たちのスケールの中ではAから跳べばD、Cから跳べばEなんですが、これらのジャンプの着地点にずっと**C（♭3）とA（根音）**が現れます。つまり3度トレーニングは、それ自体が「ターゲット音に着地する」感覚をこっそり植え付けてくれるんです。昨日目に焼き付けたCを、今日は指先で体に覚えさせていきましょう。

## ② 視覚資料

まずは昨日と同じボックス、位置もそのままです。3度ジャンプの「足場」として、もう一度確認しましょう。

```json
{
  "id": "m1.w1.d2.pentatonic_box1_ref",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (reference)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 65
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今日の本体、3度インターバルの上行シーケンスです。2音ずつ（8分音符）ぴょんぴょん跳びながら上がっていきます。着地点のC・Aにハイライトが付いているのがわかりますか？

```json
{
  "id": "m1.w1.d2.third_interval_seq",
  "type": "tab",
  "meta": {
    "title": "3rd-interval ascending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 65
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
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 65）**
まず昨日の4連音シーケンスで2分だけ手をほぐし、そのまま3度インターバルの上行へ移ります。8分音符2つで「ぴょん」の1セット。最初は指がもつれるはずです。それで正常です。クリックにぴったり合わせることより、まず**ジャンプそのものが途切れないこと**を優先してください。

**10〜20分・頭のトレーニング（今日のターゲット＝C・A／♭3・根音）**
3度で跳ぶたびに、着地音の名前を声に出して呼びます。「エー・ディー、シー・イー、ディー・ジー……」というふうに。特にCやAに着地するときは、声のトーンを一段上げて強調してください。手と口と耳を同期させるのが今日の本当の目的です。

**20〜40分・実戦感覚 — ワンコード即興（Amバッキング／BPM 65〜70）**
バッキングを流して、ルールは：**今日は隣り合う音を2つ以上続けて弾かず、必ず3度だけで跳び回ること。**もどかしいですよね？その制約が、手を新しい道へ押し込んでくれます。そしてフレーズを終えるときは、必ずC（♭3）に着地して止まってみてください。あの「カチッとはまる」感覚を覚えておきましょう——それがコードトーン着地の最初の体験です。

**40〜50分・録音・フィードバック（推奨）**
30秒録音して聴き直します。チェックポイント：ジャンプの着地音が**音程がブレずにきちんと押さえられているか**。スキップの際に中間の弦にわずかに触れて「シャッ」というノイズが出るなら、弾かない弦を右手のひらの側面で軽くミュートする習慣をつけましょう。

**今日の完了の目安：**BPM 65で3度の上行シーケンスを1弦まで途切れずに。バッキングの上で3度ジャンプだけで8小節埋め、Cで締めくくること。

## ④ ヒント・よくある間違い

- **「飛ばすはずの音」をうっかり一緒に弾いてしまう。**3度の核心は、間の音を**空けておく**ことです。そこが空いているからこそ、ジャンプの味わいが生きてきます。続けて弾いてしまうと、ただの昨日の4連音に戻ってしまいます。
- **ジャンプのたびに手全体がぐらつく。**人差し指の位置（5フレット）をアンカーとして固定し、他の指だけを動かしましょう。手全体があちこち動くと、着地の正確さが崩れてしまいます。
- **着地音をすぐに離してしまう。**CやAに着地したら、ほんの少しだけ長く留まりましょう。その0.2秒が「歌」と「練習」を分ける違いです。
- **上行だけで終わらせてしまう。**余裕があれば、同じパターンを下行でも試してみましょう。ただし今日は上行の正確さが最優先です。下行はDay 3で、スピードと一緒に取り組みます。
