---
title: "総合：A7–D7ブルースでコードごとの3度ターゲティング＋3度インターバルでネックをつなぐ"
dayKey: "m3.w10.d4"
estMinutes: 50
i18nKey: "lesson.m3.w10.d4"
lang: ja
---

# Day 4 — コードが変われば3度も変わる：A7のC#、D7のF#

## ① 理論・説明

今日なぜこれをやるかというと、今週はずっとA7という1つのコードの上でC#（長3度）に着地する練習をしてきましたよね。でも本物のブルースはコードが**動きます。**一番基本的なのが**A7→D7**の往復です。ここで停滞期のプレイヤーがぴたっと止まってしまうんです。コードがD7に変わっているのに、Aミクソリディアンの手癖のままC#だけを狙ってしまう。でもC#はD7の上では**長7度**になってしまい、宙に浮いてしまいます。M2で学んだあの原理、覚えていますか。**コードが変われば、ターゲット（3度）も変わる。**

計算してみましょう。
- **A7の長3度＝C#**（A・**C#**・E・G）
- **D7の長3度＝F#**（D・**F#**・A・C）

つまりA7の区間ではC#に、D7の区間に移った瞬間は**F#に**着地点を切り替える必要があります。これ1つできるだけで、「コードに合わせて歌う」ソロになります。いいニュースがあります。**Aミクソリディアンスケールの中には、C#もF#もすでに全部入っています**（A B C# D E F# G）。スケールを変える必要はなく、**着地音だけ**をコードに合わせて変えればいいんです。A7ならC#、D7ならF#。手の形はそのままで、狙いだけを動かします。

ここに隠れたボーナスもあります。私たちのブルーノート**C（♭3）**は、A7の上ではひねくれたブルーノートですが、**D7の上ではD7の♭7（C）**になります。つまり、A7の区間で「ブルーノートとしてサッと通り過ぎていたそのC」が、D7に移った瞬間に**正式な色彩音（♭7）**へと身分が変わるんです。同じ音、違う役割。これを知って弾くと、ソロがぐっと賢く聞こえます。

最後に**3度インターバル**の練習も加えます。4連音が「4音のかたまり」だったとすれば、3度インターバルは「1音飛ばしてペアで上っていく」パターンです（A-C#, B-D, C#-E……）。これが手に馴染むと、スケールが平坦な階段ではなく**ハーモニー（和音）の響き**として聞こえるようになり、即興が一気に洗練されます。今日はこの3度インターバルでネックを掃きながら、2つのフォームをつなぎます。

今日の目標：A7↔D7のバッキングの上で、コードごとに3度（C#/F#）に着地すること。そして3度インターバルのパターンで、スケールを和音のように歌わせること。今週の総まとめです。

## ② 視覚資料

まずは**ドミナント3度ターゲットマップ**です。A7の3度C#（緑）とD7の3度F#（緑）を、2つのフォームにまたがって撒きました。コードが変わるとき「一番近いC#、またはF#」がどこにあるか、目で先に確認しておきましょう。

```json
{
  "id": "m3.w10.d4.dominant_thirds_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Dominant 3rd targets: A7-3(C#) & D7-3(F#) across positions",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 4, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 3, "fret": 11, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true }
    ]
  }
}
```

2つ目は、今日のメイン、**A7→D7ターゲットリック**です。1小節目はA7の上で♭7 Gの緊張→ブルーノートCの半音ベンド→**C#（A7の3度）**に着地。2小節目はD7に移り、その**Cが今度はD7の♭7**として色を出しながら→**F#（D7の3度）**に着地します。同じスケールで、着地だけをC#からF#へ動かすのがポイントです。

```json
{
  "id": "m3.w10.d4.a7_d7_target_lick",
  "type": "tab",
  "meta": {
    "title": "A7->D7 change: target A7-3(C#) then D7-3(F#), b7 & blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "role": "target", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D7-R(D)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "D7-b7(C)", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "9(E)", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true },
        { "string": 4, "fret": 4, "duration": "half", "technique": "vibrato", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

3つ目は、**3度インターバルラン**です。Aミクソリディアンを3度ずつペアにして上行しながらPosition 1を掃き、最後は長3度C#に着地します。スケールが和音のように聞こえるのが3度インターバルの醍醐味です。2小節、すべて8分音符です。

```json
{
  "id": "m3.w10.d4.thirds_interval_run",
  "type": "tab",
  "meta": {
    "title": "A Mixolydian diatonic 3rds (ascending, land on major 3rd C#)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 90）——3度インターバルラン**
上の3度インターバルランを90で上行します。最初は80で。2音ずつペアにして「まとまり」として聞こえるようにするのがポイントです。慣れたらPosition 2（7〜11フレット）でも同じ3度パターンを即興で作ってみましょう。C#・Gを通るときの色の意識は続けてください。

**10〜20分・頭のトレーニング（C#↔F#の切り替え）**
メトロノームを止めて、1つ目の地図でゲームをします。「A7!」と言ったら一番近い**C#**（3弦6フレットまたは1弦9フレット）を押さえる、「D7!」と言ったら一番近い**F#**（4弦4フレット、2弦7フレット、3弦11フレット）を押さえる。自分で「A7-D7-A7-D7」と唱えながら手を交互に動かしましょう。2秒以内に正しい3度へ手が動けば合格です。コード転換の反射神経を作る時間です。

**20〜40分・実戦即興（A7–D7ブルースバッキング／80〜90 BPM）**
「A7 D7 blues backing track slow」を流します（ゆっくりした12小節ブルースでもOK）。ミッション：**コードが変わるたびに、そのコードの3度に着地する——A7ならC#、D7ならF#。**残りはAミクソリディアンで自由に。余裕があれば、今日のA7→D7リックをまるごと入れてみて、2つのフォームをスライドで行き来しながら上下をどちらも使いましょう。ブルーノートCがD7で♭7に変身する瞬間も、耳で楽しんでください。

**40〜50分・録音・フィードバック（推奨・今週の総まとめ）**
どんな録音ツールでもいいので、1コーラス（12小節または30〜40秒）録音します。チェックは3つ。（1）コードが変わったときに3度（C#→F#）をタイミングよく押さえられたか、（2）2つのフォームを両方使えたか、それとも1つの箱に閉じこもってしまったか、（3）文の終わりが中途半端に宙に浮かず、ターゲット音にきちんと着地できていたか。今週初日の録音と聴き比べると、成長が聞こえるはずです。

**今日の完了基準：**3度インターバルラン90 BPMを通過。C#↔F#の切り替えに2秒以内で反応。A7–D7バッキングでコードごとに3度着地を8回以上、両方のフォームを使用すること。

## ④ ヒント・よくある間違い

- **D7でもC#だけを狙ってしまう。**今週最大の落とし穴です。コードがD7に変わると、C#は緊張の解けない長7度になってしまいます。必ず**F#へ**狙いを移しましょう。「コードが変わる＝3度も変わる」を体に刻み込みます。
- **着地のタイミングが遅い。**コードがすでにD7に変わっているのに、1拍遅れてF#を押さえると、少しズレて聞こえます。コード転換のタイミングをあらかじめ予想して、変わる**その拍で**3度が鳴るように。難しければBPM 70に落として、まずタイミングから合わせましょう。
- **1つのフォームに閉じこもってしまうこと。**緊張すると楽なPosition 1にばかり逃げてしまいます。今日は総まとめなので、あえて2つのフォームを両方使いましょう。上から始めてスライドで降りてくるフレーズを1回以上作ってみてください。
- **音を全部埋めたくなる欲。**3度の着地が生きるには、その手前に**少しの余白**が必要です。休みなく音を詰め込み続けると、3度が埋もれてしまいます。来週（W11）に学ぶ「余白・フレージング」の予告編だと思って、今日もターゲット音の前にちょっと息をつきましょう。
