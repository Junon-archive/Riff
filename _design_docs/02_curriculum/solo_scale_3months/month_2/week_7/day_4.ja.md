---
title: "コードトーン限定バッキングジャム＋録音分析 — 3度着地の正確さをチェック"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
lang: ja
---

# Day 4 — 今週の総決算：コードトーンだけで歌い、録音で採点する

## ① 理論・説明

今日なぜこれをやるかというと、今週ずっと地図（Day 1〜2）を描き、連結（Day 3）まで学んできたので、いよいよそれを**実際の演奏で証明する**番だからです。今日はほとんど新しい概念を学びません。代わりに、Am–Cバッキングの上で**コードトーンだけ**を使って本当のソロっぽいものを作り、それを録音して**自分で採点**します。有料レッスンのように講師が隣にいるわけではないので、今日は録音があなたの講師です。

採点基準はたった一つ。**コードが変わるたびに、そのコードの3度にちゃんと着地できたか。**Amの区間ではC、Cの区間ではE。今週の全てが、この一行に集約されます。派手さ、スピード、音の数——全部必要ありません。コードトーン3音（と3度着地）だけで、驚くほど「音楽らしく」聴こえることを、今日は自分の耳で確認することになります。

一つコツを先にお伝えしますね。良いソロは音をたくさん弾くことではなく、**うまく座る**ことです。コード一つに音は2〜3個、最後は3度でビブラートを軽く効かせて響かせる。この節制がむしろプロっぽく聴こえます。来月（モード・フレージング）への橋渡しでもあります。

## ② 視覚資料

今日の「ジャムのホームベース」——5〜8フレットの一つのボックスの中に、AmとCのコードトーンが全部集まっています。赤いハイライトは両コードの3度の着地ターゲット（**C**と**E**）。この狭いエリアだけで曲全体をカバーできます。

```json
{
  "id": "m2.w7.d4.jam_home_base_box",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am/C jam home base (5th-position box), 3rd targets C & E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 72
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "C:5(G)", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "label": "C:5(G)", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true }
    ]
  }
}
```

今週の総まとめサンプルリフです。Am | C | Am | C の4小節、各コードごとにそのコードの3度（CまたはE）に着地します。ホームベースボックスの中だけで動くので、手が楽です。

```json
{
  "id": "m2.w7.d4.chord_tone_jam_lick",
  "type": "tab",
  "meta": {
    "title": "Am|C|Am|C chord-tone jam - land the 3rd every change",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 72
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 3, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 72）**
メトロノーム72で、上の4小節サンプルリフを繰り返します。各小節の最後の音（3度）を少し長く、はっきりと。コードが変わる1→2小節目、3→4小節目で3度へ乗り換えるタイミングを、もう一度体に染み込ませましょう。

**10〜20分・頭のトレーニング（ホームベースボックスで3度を即座に押さえる）**
メトロノームを止めて、ホームベースボックス（5〜8フレット）の中で「Amの3度！」と言ったらC（3弦5・6弦8・1弦8）、「Cの3度！」と言ったらE（5弦7・2弦5）を即座に押さえます。目を閉じてランダムに交互に唱えながらテストします。3秒以内に正しい3度へ手が動けば合格です。

**20〜40分・実戦感覚 — Am–Cバッキング（BPM 72）**
「Am C vamp backing track」を流し、**コードトーン（A・C・E／C・E・G）だけ**を使って自由にソロを取ります。スケールの経過音は最小限に。ルール：コード一つにつき音は2〜4個、最後は**必ずそのコードの3度。**ホームベースボックスから始めて、余裕があればDay 3で見つけた他のポジションの3度にも着地してみましょう。

**40〜50分・録音・自己採点（今日は強くおすすめ）**
手元の録音ツール（スマホのボイスメモでもOK）でジャムを1〜2分録音し、以下の3項目で自分を採点します。
1. **3度着地率** — コードが変わるたびに3度（C/E）に座れたか？何回中何回成功？
2. **タイミング** — 乗り換えがコードの変化にぴったり合っていたか、遅れていたか？
3. **終わりの音の処理** — 3度の着地音をビブラートで生かして響かせたか、ぶつっと切ったか？
迷ったら再生速度を落として、着地音を指板でもう一度確認しましょう。できなかった項目を一つ、来週へのメモにしておきます。

**今日の完了目安：**Am–Cバッキングでコードトーンだけを使い、1分以上途切れずにソロを取れること。録音を聴き返したとき、コード変化のほとんどで3度着地が耳で確認できること。

## ④ ヒント・よくある間違い

- **音を弾きすぎる。**今日の美徳は節制です。コードごとに2〜3音、最後は3度。空白を恐れないでください。それが来月のフレージングの種になります。
- **録音を聴かずに済ませてしまう。**演奏している最中は全部うまくいったように感じても、録音は正直です。ズレた着地、遅れた乗り換え、全部聴こえてきます。聴き返すことが今日の練習の半分です。
- **3度を平坦に切ってしまう。**着地音（C/E）は今週のゴールラインです。ビブラートで軽く揺らして響かせると、同じ音でもぐっと「歌う」ように聴こえます。
- **ボックスの外に出て迷子になる。**ホームベース（5〜8フレット）を拠点にしつつ、外に出るときは必ず次の3度をあらかじめ目で確認してから動きましょう。地図なしでネックを彷徨うと、着地が乱れてしまいます。
