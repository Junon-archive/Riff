---
title: "ミクソリディアン入門＋アイデンティティを決める2音：♭7（G）の緊張とメジャー3度（C#）の解決"
dayKey: "m3.w10.d1"
estMinutes: 50
i18nKey: "lesson.m3.w10.d1"
lang: ja
---

# Day 1 — ドミナントを「歌わせる」2つの音：♭7のGとメジャー3度のC#

## ① 理論・説明

今日なぜこれをやるかというと、先週はドリアン（♮6）でマイナーコードに色を付けましたよね。今週はその逆側、**ドミナント7thコード**の番です。A7のバッキングを流して、Aマイナーペンタトニックだけをなぞってみると……間違ってはいないけど、ちょっと物足りないですよね。「ブルースっぽいけど、なんだか単調」なあの感じ。それをガラッと変えてくれるのが、今日のスケール、**Aミクソリディアン**です。

Aミクソリディアン＝**A B C# D E F# G**。メジャースケールから音を1つだけ、7度を半音下げたものです（長7度G#→短7度G）。だから、このスケールのアイデンティティは、たった2つの音で決まります。

- **長3度＝C#**——「これはメジャーだ」と宣言する音。明るくて、たどり着くと耳が「あ、着いた」と安心する**解決音**です。
- **短7度（♭7）＝G**——ミクソリディアンの署名です。この音がコードに「ただのメジャーじゃなくて**ドミナント**だよ、どこかに行きたいんだ」というムズムズした**緊張**を与えてくれます。

大事なのはこの2音の**関係性**です。G（♭7）で緊張を作り、C#（長3度）でそれを解決する。マイナーペンタだけに住んでいる人は、この**C#（長3度）をそもそも押さえません。**だから音がマイナーみたいに暗くしか聞こえないんです。今日から一つルールを決めましょう。**A7の上ではC#を必ず着地音として使う。**C#に着地した瞬間、あなたのソロは「ブルースのものまね」から「本物のドミナント」に変わります。

そしてブルースの隠し味をひとつまみ。マイナー3度の**C（♭3）**を**ブルーノート**としてちょっと混ぜてみましょう。Cはスケールの正式メンバーではありません。C#（長3度）のすぐ半音下にいる、ひねくれた音です。これをサッと通り過ぎたり、半音押し上げて**C→C#**と解決したりすると、あの有名な「こってり」したブルージーなミクソリディアンサウンドが生まれます。ルールはW4のときと同じ。**ブルーノートは目的地ではなく、長3度への通り道。**居座れば間違った音、通り過ぎれば名フレーズです。

今日は**Position 1（第1ポジション）**を手に馴染ませて、その中でG（♭7）とC#（長3度）を目をつぶってでも見つけられるようにするのがゴールです。

## ② 視覚資料

まずはAミクソリディアンの**Position 1**です。根音Aは6弦5フレット。赤い強調が2種類あるので、よく見てください——**長3度C#（解決）**と**♭7 G（緊張）**。この2色が今日の主役です。

```json
{
  "id": "m3.w10.d1.a_mixolydian_pos1",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 1 (major 3rd C# & b7 G)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 4, "label": "2", "role": "scale" },
      { "string": 5, "fret": 4, "finger": 1, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 2, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 4, "finger": 1, "label": "6", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 1, "label": "2", "role": "scale" },
      { "string": 3, "fret": 6, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 4, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 4, "label": "2", "role": "scale" }
    ]
  }
}
```

2つ目は、アイデンティティを決める2音の**緊張-解決マップ**です。G（♭7、緊張）とC#（長3度、解決）を1つのハンドポジションの中に並べて、その間にブルーノートC（♭3）も重ねました。C（3弦5フレット）→C#（3弦6フレット）、たった1フレット分だけ上がって解決するのが見えますよね。これが今日、耳に刻む図です。

```json
{
  "id": "m3.w10.d1.identity_tension_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Identity notes: b7(G) tension -> major 3rd(C#) resolution, with b3(C) blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

3つ目は、今日のブルージーなリックです。1小節目は根音から出発して**ブルーノートCを半音ベンドしてC#（長3度）に解決**、2小節目は**♭7 Gで緊張を作ってからC#に着地**し、ビブラートで締めくくります。このリック1つが、今日学んだ理論のまとめです。

```json
{
  "id": "m3.w10.d1.bluesy_mixolydian_lick",
  "type": "tab",
  "meta": {
    "title": "Bluesy Mixolydian lick (b3 blue note -> major 3rd, b7 tension -> 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_line",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 90）——4連音シーケンスでフォームを目覚めさせる**
メトロノーム90に合わせて、Position 1を4連音（16分音符）で1周上行します。ブロックを上下になぞるだけなのは禁止です。「4音ずつまとめて」A-B-C#-D／B-C#-D-E……という具合に押し上げていきます。C#（長3度）を通るたびに、心の中で「ここが明るい音!」とハンコを押しましょう。手が固まったらBPM 80に落として大丈夫です。

**10〜20分・頭のトレーニング（ターゲット＝GとC#）**
メトロノームを止めて、Position 1の中で**♭7 Gだけ**を2か所（4弦5フレット、2弦8フレット）見つけて押さえます。押さえるたびに「これは緊張」と声に出して。次は**長3度C#だけ**を2か所（5弦4フレット、3弦6フレット）押さえながら「これは解決」。最後にGを1つ押さえて→一番近いC#へ手を移動する動きを5回。目を閉じてG・C#をそれぞれ3秒以内に押さえられたら合格です。

**20〜40分・実戦即興（A7ワンコードバッキング／80〜90 BPM）**
「A7 vamp backing track」または「A7 groove jam」を流します。ミッションはひとつだけ。**フレーズを終わらせるときは必ずC#（長3度）に着地すること。**途中はペンタトニックのように自由に遊んでOKです。ただし文の句点はいつもC#。余裕があれば、今日のブルージーなリック（C→C#半音ベンド）を2、3回混ぜてみましょう。C#に着地した瞬間、バッキングと「カチッ」とかみ合う感覚があれば成功です。

**40〜50分・録音・フィードバック（推奨）**
どんな録音ツール（スマホのボイスメモでもOK）でも構わないので、最後のジャムを30秒録音します。聴き直して、チェックするのはひとつだけ。**フレーズの終わりが本当にC#で止まっていたか、それとも癖で根音Aや♭3のCに流れてしまっていたか。**C#で止まっていなければ、その癖を明日から直していきましょう。

**今日の完了基準：**Position 1でG・C#をそれぞれ目をつぶって押さえられる。A7バッキングの上でフレーズをC#に着地させること8回以上。ブルーノートC→C#の半音ベンド成功。

## ④ ヒント・よくある間違い

- **C#（長3度）を飛ばしてしまう病。**一番よくあるパターンです。マイナーペンタの手癖のせいで、無意識にC#を飛ばしてC（♭3）にばかり留まってしまう。それだとドミナントではなく、ただのマイナーに聞こえます。今日は意識的にC#を文の終わりに置きましょう。
- **ブルーノートCに居座ってしまう。**Cは長3度への通り道であって、終着駅ではありません。半音押し上げてC#に解決するか、サッと通り過ぎましょう。長く留まった瞬間、「間違った音」になってしまいます。
- **♭7 Gをあちこちに撒いてしまう。**Gは強い緊張音なので、着地音として長く引っ張ると、宙ぶらりんで解決しない感じになります。Gはちょっと緊張をかけるスパイスとして使い、すぐにC#や5度のEに解決させましょう。
- **テンポを欲張ってしまう。**90が物足りなく感じても、今日は位置と色を焼き付けることが全てです。速く雑になぞるより、ゆっくりC#・Gと名前を呼びながら押さえるほうが、今週まるごとを生かしてくれます。
