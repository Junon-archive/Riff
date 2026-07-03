---
title: "ミクソリディアン Position 2＋フォームの接続（ポジションシフト）でネックを広げる"
dayKey: "m3.w10.d3"
estMinutes: 50
i18nKey: "lesson.m3.w10.d3"
lang: ja
---

# Day 3 — 一か所に閉じこもらない：Position 2とスライドで2つのフォームをつなぐ

## ① 理論・説明

今日なぜこれをやるかというと、2日間、Position 1（5フレット付近）でC#・Gをうまく扱えるようになりましたよね。でも、ソロをその1つの箱の中だけでやっていると、どんなにきれいでも結局「狭いところで行ったり来たり」に聞こえてしまいます。本物のソロイストはネック全体を自分の家のように使います。だから今日は**2つ目のフォーム（Position 2）**を開いて、2つのフォームを**スライドでつなぐ**方法を学びます。

Position 2は根音Aを**4弦7フレット**に置く形です。だいたい7〜11フレットをカバーします。ここでもスケールの音名は同じ——**A B C# D E F# G**です。ただ、手の形が違うので、同じC#（長3度）・G（♭7）が違う場所に現れます。混乱しそうですよね。でもコツがあります。**音名で覚えておけば、フォームが変わっても揺らぎません。**「5弦4フレット」ではなく「これはC#（長3度）」と覚えておけば、Position 2でもC#がどこにあるか感覚で見つかります。昨日の頭のトレーニングは、まさにこのためのものだったんです。

そして今日の核となる技術、**ポジションシフト（スライド）**。2つのフォームを滑らかにつなぐ一番いい方法は、1本の弦の上で指を**スーッと滑らせる**ことです。急に切って瞬間移動すると不自然に聞こえますが、スライドでつなぐと「いつの間にかあそこに上がっている」という自然さが生まれます。今日使う接続はきれいにハマります。**1弦5フレット（根音A）から9フレット（C#）へのスライド**——つまりPosition 1の根音から滑り上がると、そのままPosition 2の**長3度C#**に着地するんです。シフトすると同時にターゲット音に到着する。一石二鳥ですね。

ブルーノートも忘れずに。Position 2にもブルーノートC（♭3）があります。例えば**4弦10フレット（C）**を半音押し上げると**4弦11フレットのC#（長3度）**。フォームが上がっても、「ブルーノート→長3度への半音解決」という公式はそのままついてきます。

今日の目標：Position 2を手に乗せて、1弦のスライドで2つのフォームを行き来しながら、シフトの最後にC#へ着地すること。

## ② 視覚資料

まずは**Aミクソリディアン Position 2**です。根音Aは4弦7フレット。ここでも長3度C#（緑）と♭7 G（黄）の位置を目に馴染ませてください。Position 1と音名は同じで、形だけが違います。

```json
{
  "id": "m3.w10.d3.a_mixolydian_pos2",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 2 (root on 4th string, frets 7-11)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 6, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 3, "label": "6", "role": "scale" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 9, "finger": 3, "label": "2", "role": "scale" },
      { "string": 4, "fret": 11, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 11, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

2つ目は、2つのフォームをつなぐ**接続マップ**です。Position 1とPosition 2の根音（A）、長3度C#（緑）、♭7 G（黄）をネック上にまとめて並べました。4弦7フレットの根音は、2つのフォームが共有する「つなぎ目」です。そして1弦5フレット（A）→9フレット（C#）のスライドが、今日の移動ルートです。

```json
{
  "id": "m3.w10.d3.position_connection_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Connecting Position 1 & 2: shared root and slide path (1st string 5->9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 10, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

3つ目は、今日の**ポジションシフトリック**です。1小節目はPosition 1で遊びながら♭7 Gで緊張を作り、2小節目で**1弦5フレット（A）→9フレット（C#）のスライド**でPosition 2に乗り上がります。最後はPosition 2のブルーノートC（4弦10フレット）を半音ベンドしてC#（11フレット）に解決、ビブラートで締めくくります。

```json
{
  "id": "m3.w10.d3.position_shift_lick",
  "type": "tab",
  "meta": {
    "title": "Position shift lick: Pos1 -> slide -> Pos2, land on major 3rd",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 9, "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 9, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 10, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 4, "fret": 11, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 90）——Position 2の4連音シーケンス**
昨日Position 1で回した4連音を、今日は**Position 2**で。7〜11フレットの位置で4音ずつまとめて上行します。手がまだ不慣れなら80から始めてもOKです。C#（6弦9フレット、4弦11フレット、1弦9フレット）を通るたびに色を意識しましょう。

**10〜20分・頭のトレーニング（フォーム間のC#接続）**
接続マップを見ながら、**Position 1のC#（3弦6フレット）**を押さえて→**Position 2のC#（1弦9フレット）**へ手を移動する練習。名前は同じで場所だけ違う2つのC#を行き来します。次はGも同じように（4弦5フレット↔5弦10フレット）。最後に1弦5→9のスライドだけを10回繰り返して、スライドが正確に9フレット（C#）で止まるようにしましょう。

**20〜40分・実戦即興（A7 vamp／80〜90 BPM）——フォーム移動ミッション**
「A7 vamp backing track」を流して、今日のミッションは**1つのフレーズの中で、Position 1→（スライド）→Position 2へ最低1回移動すること。**下で遊んでからスライドで上に上がり、上でC#に着地、またスライドで降りてくる。最初は移動がぎこちなくても大丈夫です。スライドする場所を決めて繰り返すと、だんだん滑らかになっていきます。

**40〜50分・録音・フィードバック（推奨）**
どんな録音ツールでもいいので30秒録音。チェック：（1）スライドが目標フレット（9）に正確に止まったか——届かなかったり、行き過ぎたりしていないか、（2）フォームを移動したあともC#にちゃんと着地できていたか。再生速度を落として、スライドの到着する瞬間を耳で拡大して確認しましょう。

**今日の完了基準：**Position 2の4連音シーケンスを通過。2つのフォームのC#・Gをそれぞれ行き来して押さえられる。1弦5→9のスライドでシフトしたあとC#に着地すること5回以上。

## ④ ヒント・よくある間違い

- **スライドが目標で止まらない。**シフトスライドの命は**その正確なフレットで止まること。**最初は目で到着フレット（9）を確認しながらゆっくり、慣れてきたら手の感覚で。行き過ぎて10フレットまで行ってしまうと、C#ではなくDになってしまいます。
- **フォームが変わると音名を忘れてしまう。**Position 2に上がると「ここは何の音だっけ?」と固まりやすいです。位置ではなく**音名（C#・G・A）**で覚えましょう。昨日の頭のトレーニングがここで力を発揮します。
- **1つのフォームだけに落ち着いてしまう。**楽なPosition 1へついつい逃げてしまいます。今日はわざと上から始めてみたり、フレーズの半分を強制的にPosition 2で作ってみましょう。不便さがネックを広げてくれます。
- **スライドの圧力。**滑っている間に弦を押さえる力が弱いと、音が途中で途切れてしまいます。到着するまでしっかり押さえた状態を保ちましょう。ただし強く押さえすぎて指が固くなると速度が落ちるので、バランスが大事です。
