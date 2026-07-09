---
title: "ペンタ第2ボックスを体に入れる＋第1↔第2ボックスのスライド接続"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
lang: ja
---

# Day 1 — 指板でひと部屋お引っ越し：第2ボックスと、橋を架ける

## ① 理論・説明

今日なぜこれをやるかというと、先週は第1ボックス（5フレット）を手だけじゃなく耳にも刻み込みましたよね。実はここがポイントで、第1ボックスだけを掘り続けると、5〜8フレットという狭い檻に閉じ込められやすいんです。即興が窮屈に感じる本当の理由がこれなんです。「音を自由に選べる」ためには、指板が広くなければいけません。だから今週はネックの上のほうへお引っ越しします。今日はその最初の新居、**<mark>第2ボックス（7〜10フレット）</mark>**です。

```json
{
  "id": "m1.w2.d1.pentatonic_box2",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 2 (connects up from Box 1)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

でも、ここでほとんどの人がつまずきます。第2ボックスもまた「上行–下行でラララ…」と丸暗記しようとするんです。それだと檻が一つ増えるだけ。私たちが欲しいのは檻じゃなく**<mark>高速道路</mark>**です。第1ボックスから第2ボックスへ、車線変更するみたいにスーッと移る道。その道を作る道具が**<mark>スライド</mark>**なんです。

ポイントはこれです。第1ボックスと第2ボックスは**<mark>ぴったり隣り合って音を共有</mark>**しています。例えば4弦を見ると、第1ボックスのA（7フレット、根音）と第2ボックスのC（10フレット、♭3）が同じ弦の上にあります。つまりAを押さえた指を**<mark>10フレットまで滑らせるだけ</mark>**で、気づけば第2ボックスに着地していて、しかもその着地音が私たちの永遠のターゲット、**C（♭3）**なんです。スライド一回で「ボックス移動＋ターゲット着地」が同時に完成するわけです。今日はこの橋を一本、しっかり架けます。

## ② 視覚資料

まずは第2ボックスの地図です。見慣れない場所ですよね？根音Aは4弦7フレットにあって、緑のC（♭3）があちこちに散らばっています。このCたちが、これからの<mark>あなたの着陸地点</mark>です。

```json
{
  "id": "m1.w2.d1.pentatonic_box2",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 2 (connects up from Box 1)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

ここからが今日の本題です。第1ボックスから出発して、4弦のA（7フレット）を**<mark>10フレットまでスライド</mark>**させて第2ボックスへ渡ります。着地音がC（♭3）になっているのが見えますか？最後は第2ボックスの中で高いCに着地して、ビブラートで締めくくります。

```json
{
  "id": "m1.w2.d1.box1_to_box2_slide",
  "type": "tab",
  "meta": {
    "title": "Box 1 -> Box 2 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "slide", "slideToFret": 10, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 70）**
メトロノーム70に合わせて、第2ボックスだけを8分音符で上行・下行それぞれ1回、体になじませます。上行・下行を覚えることが目的ではなく、**<mark>新しい場所の地形をつかむこと</mark>**が目的です。根音A（4弦7フレット）を毎回声に出して「エー！」と呼びながら、このボックスの中心がどこかを手に刻み込みます。今日、上行・下行が許されるのはこのウォームアップだけです。

**10〜20分・頭のトレーニング（今日のターゲット＝C／♭3、そしてスライドの橋）**
メトロノームを止めて、上の接続ラインの**<mark>核心となる一つの動作だけ</mark>**を繰り返します。4弦7フレット（A）を人差し指で押さえ→10フレット（C）まで滑らせる。このスライドを20回。ポイントは二つ。①到着フレット（10）で**きっちり止まって**、C音が生きていること。②滑っている間、指の圧を弦から離さないこと（離すと音が途切れます）。目を閉じても10フレットにピタッと止まれれば合格です。

```json
{
  "id": "m1.w2.d1.box1_to_box2_slide",
  "type": "tab",
  "meta": {
    "title": "Box 1 -> Box 2 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "slide", "slideToFret": 10, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20〜40分・実戦即興（Amワンコードバッキング／BPM 70）**
「Am backing track slow」あたりを一つ流します。ルールは一つだけ。**第1ボックスから始めて、<mark>今日習った4弦スライドで第2ボックスに渡り</mark>、第2ボックスの中で<mark>C（♭3）に着地して止まる</mark>。**まだ派手なフレーズは気にしなくて大丈夫です。「第1ボックス→橋→第2ボックス→C着地」というこの一連の旅が途切れずに転がれば、今日は大成功です。慣れてきたら逆に、第2ボックスから始めて第1ボックスへスライドで降りてみましょう（10フレットC→7フレットAへの逆スライド）。

**40〜50分・録音・フィードバック（推奨）**
手元の録音アプリ（スマホのボイスメモでもOK）で、接続ラインを含む30秒のジャムを録音します。聴き直して、チェックするのは一つだけ。**<mark>スライドの着地音（C）がくっきり「決まって」いるか</mark>、それともスルッと崩れてしまっているか。**崩れていたら、スライドの速度が速すぎるサインです。明日は着地の直前で少しだけ減速する感覚を試してみてください。

**今日の完了の目安：** 第2ボックスの根音A（4弦7フレット）を目を閉じて押さえられる。4弦のA→Cスライドで第1↔第2ボックスを行き来しながら、Cに3回以上正確に着地できる。

## ④ ヒント・よくある間違い

- **新しいボックスをまた「上下行の檻」にしてしまう。** 第2ボックスも上下行だけで回すと、檻が一つ増えるだけです。今日の本当の目標はボックスそのものではなく、**ボックス同士の橋**です。位置はざっくり覚えて、スライド接続によりたくさん時間を使いましょう。
- **スライド中に圧を抜いてしまう。** 滑っている間に指が弦から浮くと、「ピキッ」と音が途切れます。アイロンをかけるように、弦をずっと軽く押さえたまま移動してください。これがスライドと、ただの「手の移動」との決定的な違いです。
- **到着フレットを行き過ぎたり、届かなかったりする。** 10フレットにきっちり止まって初めてCが生きます。最初は目でフレットを確認してもいいですが、目指すのは**耳で**着地を確認することです。音程が合っていれば、手はちゃんと止まっています。
- **着地音をあわてて離してしまう。** 先週もお伝えしましたよね？Cに着地したら、最低1拍はとどまってビブラートで歌ってください。新しいボックスだからといって、着地の原則が変わるわけではありません。ネックのどこへ行っても、**終わりはいつもコードトーン**です。
