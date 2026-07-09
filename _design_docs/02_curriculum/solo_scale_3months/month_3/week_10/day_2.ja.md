---
title: "ミクソリディアン4連音シーケンス＋長3度ターゲティングを手癖に"
dayKey: "m3.w10.d2"
estMinutes: 50
i18nKey: "lesson.m3.w10.d2"
lang: ja
---

# Day 2 — Position 1を「歌」に変える：4連音シーケンスとC#着地の反射神経

## ① 理論・説明

今日なぜこれをやるかというと、昨日Aミクソリディアンの Position 1を手に乗せて、C#（長3度）・G（♭7）の位置を見つけましたよね。でも、位置を知っていることと、**<mark>演奏中に自動的にC#へ手が伸びること</mark>**はまったく別の話です。その差を埋めるのが今日です。

方法は2つあります。1つ目は**<mark>4連音シーケンス</mark>**。スケールを上下になぞる代わりに、「4音ずつまとめて、1音ずつずらしながら上っていく」パターンです。A-B-C#-D → B-C#-D-E → C#-D-E-F#……という具合ですね。これがなぜ大事かというと、ブロックをまるごと覚えてしまうと、即興のときに「1音ずつ」ではなく「かたまり」でしか出てこなくて、動きが硬くなってしまうんです。4連音に分けておくと、スケールが指の中で**<mark>小さな文章単位</mark>**として生き生きと動くようになります。そしてこのシーケンスを回しているうちに、C#（長3度）が何度も指の下をかすめるので、「C#はいつもここにある」というのが自然と体に刻まれていきます。

2つ目は、**<mark>長3度ターゲティングを手癖にすること</mark>**。昨日は「フレーズの終わりにC#」と意識的にやりましたが、今日はそれを反射神経として固めます。指板の上でC#（3度）とG（♭7）が「考えなくても」押さえられるようになると、即興がぐっと楽になります。だから今日の頭のトレーニングは、C#・Gだけをピンポイントで狙う地図ゲームです。

ブルーノートの復習もひとつまみ。昨日はC（♭3）を**<mark>ベンディング</mark>**でC#にくっつけましたが、今日は**<mark>ハンマリング</mark>**でもやってみましょう。C（3弦5フレット）を弾いて、すぐにC#（3弦6フレット）へハンマー——指で「トン」と叩いて半音上へ滑らせるようにくっつけるんです。ベンディングは粘り気があって、ハンマリングは滑らか。両方の質感を持っていると、同じブルーノートでも表情が変わります。

今日の目標：4連音シーケンスを90 BPMで滑らかに回し、C#・Gを目をつぶって即座に押さえること。そしてブルーノートをベンディングとハンマリングの両方で長3度に付けること。

## ② 視覚資料

まずは今日のウォームアップ、**<mark>Aミクソリディアン4連音シーケンス</mark>**です。Position 1の中で4音ずつまとめて、1音ずつずらしながら上行します。C#（長3度）とG（♭7）に強調がついているので、通るたびに色を意識してください。1小節＝16分音符16個です。

```json
{
  "id": "m3.w10.d2.four_note_sequence_pos1",
  "type": "tab",
  "meta": {
    "title": "A Mixolydian 4-note sequence (Position 1, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 4, "duration": "sixteenth", "label": "6", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 4, "duration": "sixteenth", "label": "6", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

2つ目は、**<mark>C#・Gターゲットマップ</mark>**です。Position 1の中で、長3度C#（緑、解決）と♭7 G（黄、緊張）がそれぞれ2か所ずつ。根音Aとブルーノート Cも薄く重ねてあります。この絵が目を閉じても浮かぶようになるまでが、今日の頭のトレーニングです。

```json
{
  "id": "m3.w10.d2.third_and_b7_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Position 1 target map: major 3rd(C#) & b7(G) locations",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "label": "b7", "role": "color", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "blue_note", "highlight": true }
    ]
  }
}
```

3つ目は、今日のブルージーなリックです。**ハンマリング**でC→C#をくっつけ（1小節目）、**ベンディング**でもう一度C→C#をくっつけてビブラートで締めくくります（2小節目）。同じブルーノートを2つの質感で味わってみましょう。

```json
{
  "id": "m3.w10.d2.blue_note_hammer_vs_bend",
  "type": "tab",
  "meta": {
    "title": "Blue note to major 3rd: hammer-on vs bend (b3 C -> 3 C#)",
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
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "hammer_on", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "2", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "color", "highlight": true },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 90）——4連音シーケンス**
上の4連音シーケンスを90で上行します。最初は80から始めてもOKです。ポイントは**<mark>正確なタイミングと均等な音量。</mark>**16分音符の一つひとつが同じ大きさではっきり出る必要があります。C#・Gを通るときは少し強調して「ここ!」と色を意識しましょう。滑らかになったら、下行バージョンも即興で作って降りてみてください。

**10〜20分・頭のトレーニング（C#・G地図ゲーム）**
2つ目の地図を見ながら、メトロノームなしで**<mark>C#だけ</mark>**を2か所（5弦4フレット、3弦6フレット）→**Gだけ**を2か所（4弦5フレット、2弦8フレット）交互に押さえます。それぞれの音の名前を声に出しながら。次は目を閉じて「C#!」と言ったら3秒以内に1か所押さえる、「G!」と言ったら3秒以内に押さえる。5回連続成功で合格です。

**20〜40分・実戦即興（A7 vamp／85〜90 BPM）——♭7強調ミッション**
「A7 vamp backing track」を流して、今日のミッションは2つ。（1）文はやはりC#に着地させる、（2）文の**<mark>途中で♭7 Gを最低1回、強調して入れる。</mark>**Gで緊張を作って→C#で解決する、この往復を作り続けます。ブルーノートのリック（ハンマー・ベンディング）も自由に混ぜましょう。「緊張（G）→解決（C#）」が耳で聞こえたら成功です。

**40〜50分・録音・フィードバック（推奨）**
どんな録音ツールでもいいので、ジャムを30秒録音。チェックポイントは2つ。（1）4連音ウォームアップのタイミングが均等だったか、（2）<mark>Gを入れたあと本当にC#で解決できていたか</mark>、それともGのまま宙に浮いて終わってしまったか。必要なら再生速度を落として、G→C#の切り替わる瞬間を拡大して聴いてみましょう。

**今日の完了基準：**4連音シーケンス90 BPMを止まらずに通過。C#・Gを目をつぶって即座に押さえること5回連続。ブルーノートをハンマリング・ベンディングそれぞれで長3度にくっつける。

## ④ ヒント・よくある間違い

- **4連音を「速く」だけやろうとすること。**速さより**均等さ**が先です。4音のうち最初の音だけ大きくて残りが潰れてしまうと、シーケンスではなくただのこすれた音になります。遅くても4音すべてをはっきりと。
- **ハンマリングが鳴らない。**C#（6フレット）を叩く指の力とスピードが足りないと、音が死んでしまいます。指先でフレットのすぐ後ろを正確に「パチッ」と叩きましょう。少し強めに、そして速く。
- **Gで終わってしまうこと。**ミッションに気を取られてGを入れすぎると、うっかり文をGで終わらせてしまいます。Gは常に「向かっている途中」の音です。必ずC#（または5度のE、根音のA）で解決して終わらせましょう。
- **ウォームアップと即興が別々になってしまうこと。**4連音で身につけた手の形が即興にそのまま出てこそ意味があります。ジャムの最中にも、時々わざと4連音の断片を差し込んでみてください。「練習がそのまま語彙になる」んです。
