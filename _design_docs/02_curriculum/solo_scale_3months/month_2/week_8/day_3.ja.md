---
title: "3度着地の即興——コードチェンジの拍に正確に到着する"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
lang: ja
---

# Day 3 —「いつ」着地するか：コードチェンジの拍に3度を到着させる

## ① 理論・説明

今日なぜこれをやるかというと。昨日、F→B→Eのラインが手に馴染みましたよね。ひとつだけお伝えすると、多くの人が**正しい音を押さえているのに間違って聞こえてしまう**んです。なぜかというと、**タイミング**がずれているから。もうCmaj7に変わっているのに半拍遅れてEを押さえると、その半拍の間はまだG7の上で鳴っていた音が響いて、耳には「つまずいた」ように聞こえます。逆に早すぎても不自然です。

だから今日のテーマは音ではなく**「いつ」**です。目標はたった一つ。**コードが変わるまさにその拍（ダウンビート）に3度を鳴らすこと。**Dm7になった瞬間F、G7になった瞬間B、Cmaj7になった瞬間E。これができると、あなたのソロは急に「コードをわかって会話している」サウンドに変わります。バッキングトラックと手足がぴったり合う感覚です。

これを体に刻み込む秘訣は二つあります。

- **事前準備：**コードが変わる一、二拍前に、すでに指を次の3度の上に「置いて」おきます。見てから動かすと、いつも遅れます。手が先に着いていないといけません。
- **余白を恐れない：**3度をきちんと押さえたら、**少し休んでもいいんです。**むしろ着地後に余白があると、その3度がはっきり聞こえますし、次のコードの3度を準備する時間も稼げます。音を詰め込みすぎてタイミングを全部逃すより、正確な着地を三回する方が百倍マシです。

今日は速いii-V（一小節にDm7・G7が二拍ずつ）も扱います。コードが倍速で変わるので、タイミング感覚がさらに研ぎ澄まされます。怖がらないでください。結局押さえるのはF・B・Eの三音だけです。

## ② 視覚資料

一つ目、**速いii-V-I着地タイミング訓練**です。1小節の中でDm7（1・2拍目）・G7（3・4拍目）が二拍ずつ過ぎていきます。それぞれのコードの**1拍目に3度が正確に到着**します。F（1拍目）→B（3拍目）→2小節目1拍目のE。8分音符の間はつなぎの音ですが、赤い着地音は必ずその拍に。

```json
{
  "id": "m2.w8.d3.landing_timing",
  "type": "tab",
  "meta": {
    "title": "Fast ii-V-I landing on the beat (Dm7/G7 two beats each)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "eighth", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 3, "duration": "eighth", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 2, "duration": "quarter", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "quarter", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

二つ目、**余白を活用した着地ドリル**です。今度は逆に音を詰め込みません。各コードの3度を1拍目にきちんと押さえ、短いつなぎのあとに**休符で余白**を置きます。この余白が次の3度を準備する時間を稼いでくれて、着地音をはっきり聞かせてくれます。

```json
{
  "id": "m2.w8.d3.arrival_with_space",
  "type": "tab",
  "meta": {
    "title": "Land the 3rd, then leave space (arrival drill with rests)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "quarter", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "chord_tone" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 2, "duration": "half", "rest": true, "label": "rest" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 76）——3度インターバル＋先読みの感覚**
昨日の3度シーケンスで手をほぐしつつ、今日はルールを一つ追加します。あるフレーズを押さえている間、**視線はもう次の着地音を先に見ておく。**手はまだここにあっても、目線は次のF（またはB、E）に行っている習慣をつけましょう。この「先読み」がタイミングの8割です。

**10〜20分・頭のトレーニング（ダウンビート着地を音で確認しながら押さえる）**
メトロノーム76、4分音符。クリックに合わせてF（1拍目）…B（1拍目）…E（1拍目）を押さえつつ、**押さえた瞬間に足で床を「トン」と踏みます。**手・クリック・足を一点に集めるように。最初は4分音符で、慣れたら二拍ごとにコードが変わるように速く。着地がクリックと正確に重なったら合格です。

**20〜40分・実戦即興（Dm7-G7-Cmaj7バッキング／BPM 70〜76）**
バッキングの上で、上の**余白ドリル**から始めます。「3度を押さえる→休む→次の3度を準備する。」余白が怖く感じるかもしれませんが、その沈黙こそが味方です。慣れてきたら**速い着地ライン（一つ目のJSON）**に進んで音を埋めていきます。ルールは変わりません。**つなぎの音は自由、コードが変わる1拍目には必ず3度。**遅れたなと感じたら、次のコードでは余白を多めにとって準備しましょう。

**40〜50分・録音・フィードバック（推奨）**
30秒録音します。再生しながら耳で追うのは一つだけ。**コードが変わる瞬間と自分の3度が重なっているか。**ずれている箇所を見つけたら、そのコードだけ再生速度を落として「どれくらい遅かったか/早かったか」を確認します。遅れる癖があるなら、そのコードの一拍前に手をあらかじめ置いておく練習で矯正しましょう。

**今日の完了基準：**メトロノーム76でF・B・Eの着地がクリックと正確に重なること。バッキングの上で三つのコード連続の「ダウンビート3度着地」を6回以上成功させること。余白ドリルをぶれずに最後まで通せること。

## ④ ヒント・よくある間違い

- **半拍遅れる着地。**一番よくある病気です。原因は「コードが変わったのを聞いてから動くから」。解決策はただ一つ、**事前準備**——変わる前に指がすでにその3度の上にないといけません。耳で反応していては、必ず遅れます。
- **余白に耐えられず詰め込んでしまう。**沈黙が気まずくてどんな音でも詰め込んでしまうと、タイミングが全部崩れます。余白は実力です。正確な着地3回＞ずれた音30個。
- **速くなると全部手放してしまう。**速いii-Vで焦ると、3度まで諦めてしまいがちです。こういうときはつなぎの音を全部捨てて、**3度三つだけ**をその拍で押さえましょう。骨だけでも音楽は成り立ちます。
- **足やクリックを使わず、手だけで。**体の大きな筋肉（足）で拍を感じると、着地の精度がぐっと上がります。指先だけで拍をつかもうとしないでください。
