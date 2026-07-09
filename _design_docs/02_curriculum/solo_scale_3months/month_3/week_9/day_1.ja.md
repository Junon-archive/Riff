---
title: "ドリアンの正体はたった1音：長6度F#との出会い"
dayKey: "m3.w9.d1"
estMinutes: 50
i18nKey: "lesson.m3.w9.d1"
lang: ja
---

# Day 1 — 暗いマイナーを洗練させる「1音」：Aドリアンの長6度F#

## ① 理論・説明

今日なぜこれをやるかというと。この8週間で、マイナー、コードトーン、ガイドトーンをしっかり身につけてきましたよね。でもソロがずっと「暗いマイナー」の中をぐるぐる回ってしまっていませんか？悲しくて、重くて、いつも同じ色。今日からその色を変えていきます。たった**1音**だけ変えて。

私たちが知っているナチュラルマイナー（エオリアン）は、Aを基準にするとこうなります。

- **Aエオリアン**：A B C D E **F** G → 6番目の音は**F（短6度、b6）**

ここでその6番目の音を半音だけ上げます。FをF#に。

- **Aドリアン**：A B C D E **F#** G → 6番目の音は**F#（長6度、♮6）**

これだけです。スケールの中でたった1音、**b6 → ♮6**。でもこの1音が、サウンドをまるごと変えてしまいます。エオリアンのFは根音Aの上で押さえつけられたように暗く響きますが、ドリアンのF#はもっと開けて**明るく洗練された**響きになります。サンタナがマイナーの中で「ジャジーでラテンっぽい」あの雰囲気を出すとき使っているのが、まさにこのF#なんです。

```json
{
  "id": "m3.w9.d1.aeolian_vs_dorian_6th",
  "type": "tab",
  "meta": {
    "title": "Aeolian b6(F) vs Dorian natural 6(F#) - hear the difference",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "quarter", "label": "b6", "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

なぜこの音がそんなに特別なのか。F#はドリアンをドリアンたらしめる**特性音（キャラクターノート）**だからです。残りの音（A B C D E G）はエオリアンとまったく同じ。だからドリアンの色を出すには、F#を**積極的に聞かせる**必要があります。F#を避けて通ると、ただの暗いマイナーに戻ってしまいます。今週はずっと、このF#を「色を塗る筆」として使っていきます。

今日の目標は2つだけです。1つ、Aドリアンのポジションを1つ手に入れること。2つ、その中で**F#（長6度）がどこにあるか、目をつむっても見つけられる**こと。バッキングはAm7一発を無限ループさせるものを使います。マイナーの上にF#を乗せるとなぜ明るくなるのか、今日は耳で確かめましょう。

## ② 視覚資料

まず、Aドリアン**ポジション1**（5フレット開始、1弦につき3音）です。ハイライトは2種類。**F#（6度、色彩音）**は今日の主役なので黄色、**C（b3）**はAm7の3度、つまり着地目標として緑で示しています。根音Aは3か所（6弦5フレット、4弦7フレット、2弦10フレット）にあります。

```json
{
  "id": "m3.w9.d1.a_dorian_pos1",
  "type": "scale_shape",
  "meta": {
    "title": "A Dorian - Position 1 (natural 6th F# color)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "scale": "A Dorian",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6", "role": "color", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 9, "finger": 4, "label": "2", "role": "scale" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 1, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

次に、**エオリアンとドリアンを耳で比較する**短いラインです。どちらの小節も5度（E）→6番目の音→5度（E）→根音（A）で同じですが、6番目の音だけが違います。1小節目は**F（b6、暗い）**、2小節目は**F#（♮6、明るい）**。フレット1つ分の差（8フレットと9フレット）が色をまるごと変えることを、実際に聴いて確かめてください。

```json
{
  "id": "m3.w9.d1.aeolian_vs_dorian_6th",
  "type": "tab",
  "meta": {
    "title": "Aeolian b6(F) vs Dorian natural 6(F#) - hear the difference",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "quarter", "label": "b6", "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 70）— 4音グループで手を開く**
メトロノーム70に合わせて、ポジション1を4音グループで温めます。A-B-C-D／B-C-D-E／C-D-E-F#…というように、4音ずつまとめて1段ずつ上がっていきます。上行下行を丸暗記するのではなく、**4音のまとまり**で捉えるのがポイントです。F#（5弦9フレット、2弦7フレット）が出てくるたびに、声に出して「エフシャープ！」と呼んでみましょう。今日のウォームアップの核心は、F#に名札をつけることです。

**10〜20分・頭のトレーニング（F#の位置を刻み込む）**
メトロノームを止めて、ポジション1の中の**F#だけ**2か所（5弦9フレット、2弦7フレット）を目で確認しながら押さえます。続けて根音Aの3か所（6弦5フレット・4弦7フレット・2弦10フレット）も同様に。最後は目をつむって「Aを1つ→一番近いF#を1つ」を3秒以内に押さえられれば合格です。F#が根音からどの方向にあるか、手に覚えさせましょう。

**20〜40分・実戦即興（Am7ヴァンプ／BPM 70）**
「Am7 vamp backing track slow」で検索して流します（Am7一発の無限ループ）。ルールは1つ、他は全部忘れて**エオリアンのライン（Fで終わる感じ）**を何回か弾いてから→同じ場所ですぐに**F#をそっと差し込んで**みてください。2つ目の比較ライン（5-6-5-R）をそのままバッキングに乗せてもOKです。目標はただ1つ、「FをF#に変えると明るくなる」ということを、自分の耳で確かめることです。

**40〜50分・録音・フィードバック（推奨）**
最後のジャム30秒を、手元の録音ツール（スマホのボイスメモでOK）で録音します。聴き直してチェックするのは1つだけ。**F#を入れた部分が実際に「開けて明るく」聞こえたか？**聞こえなければ、F#をもっと長く、もっとはっきり出して録り直してみましょう。今日はF#の色を耳に刻むことがすべてです。

**今日の完了基準：** ポジション1を4音グループで1周。目をつむってF#の2か所を3秒以内に押さえる。Am7の上で、Fラインから F#ラインへの切り替えを自分の耳で聴いて「明るくなった」と確認する。

## ④ ヒント・よくある間違い

- **F#を避けて通ってしまう。**一番よくある間違いです。ドリアンスケールを弾いていても、肝心のF#をさらっと通り過ぎてしまうと、耳にはただの暗いマイナーとして聞こえてしまいます。F#は隠す音ではなく**見せびらかす音**です。長く、はっきりと、ビブラートまで乗せて聞かせましょう。
- **FとF#を手で混同してしまう。**5弦ではFが8フレット、F#が9フレット。たった1フレットの違いなので、焦ると混ざりやすいです。「ドリアン＝1フレット上（F#）」と体に刻み込みましょう。1フレット下に滑ったら、それはドリアンではありません。
- **音名なしで位置だけ覚えてしまう。**「5弦9フレット」とだけ覚えると、他の場所のF#が見つけられません。必ず「これはF#（長6度）」と名前で呼びましょう。名前がネック全体をつないでくれます。
- **テンポを欲張ってしまう。**70は遅く感じるかもしれませんが、今日はF#の色を耳に刻むことがすべてです。速く流してしまうと、その1音の明るさを感じ取れません。ゆっくり、その1音を味わいながら。
