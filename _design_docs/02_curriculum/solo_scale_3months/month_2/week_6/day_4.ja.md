---
title: "Am↔C切り替えバッキングジャム — C区間はE着地、Am区間はC着地"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
lang: ja
---

# Day 4 — 実戦ジャム、コードが変わるたびに色を着替える

## ① 理論・説明

今日なぜこれをやるかというと、今週学んだことを全部一つにまとめて**<mark>本物の音楽</mark>**にする日だからです。Day 1で平行調を理解し、Day 2で明るいEを手に馴染ませ、Day 3でC↔E着地を往復しましたよね。今日はそれをドリルではなく**<mark>ジャム（即興）</mark>**として解き放ちます。バッキングトラックの上で、コードが変わるたびに自分のソロの色が自然と変わるように。

ルールはたった二行です。**<mark>コードがCなら明るい3度Eに着地。</mark><mark>コードがAmなら暗いb3のCに着地。</mark>**これが今週全体の結論です。面白いのは、EはCコードの3度であると同時にAmコードの5度でもあり、CはAmコードのb3であると同時にCコードのルートでもあること。つまりこの二つの音は、両方のコードが共有する**安全地帯**なので、どちらに乗せてもハズレはありません。ただ「どちら側に着地するか」がサウンドの明るさ・暗さを決めるんです。

今日からは「スケールを弾く」という発想を手放して、<mark>「コードを歌う」</mark>という発想に切り替えましょう。指板の形は相変わらず一つです。手はその中で気楽に遊びながら、耳はずっとバッキングのコードを追い続け、フレーズを終えるときはそのコードの着地音（EまたはC）にぴたりと合わせます。これができれば、あなたは「指板の上で自分から歌う」最初の扉を開いたことになります。

## ② 視覚資料

<mark>切り替え着地の地図</mark>です。二つのコードのコードトーンを一枚の絵にまとめました。**Cコード**（C・E・G）では**E**が明るい着地、**Amコード**（A・C・E）では**C**が暗い着地です。EとCが二つのコードの共有地帯であることも、ラベルで確認してください。

```json
{
  "id": "m2.w6.d4.transition_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Transition target map — C chord lands on E (3), Am chord lands on C (b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "G — C(5) / Am(b7)", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "G — C(5) / Am(b7)", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A — Am(R) / C(6)", "isRoot": true, "role": "chord_tone" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true }
    ]
  }
}
```

切り替えジャムのサンプルフレーズです。**1〜2小節目**はCコードの上で遊んでから明るい**E**に着地、**3〜4小節目**はAmコードの上で遊んでから暗い**C**に着地します。コードが変わる瞬間、<mark>着地の色合いがどう分かれるか</mark>感じてみてください。

```json
{
  "id": "m2.w6.d4.transition_jam_phrase",
  "type": "tab",
  "meta": {
    "title": "C -> Am transition jam — land E over C, land C over Am",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "chord_target_jam",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — R (over C)", "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 3", "highlight": true, "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — 6", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C — R", "role": "root" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 7", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C — R (over C)", "role": "root" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — 6", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — 5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "F — 4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "half", "technique": "vibrato", "label": "E = 3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 3, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "E — 5 (over Am)", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — b3", "highlight": true, "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D — 4", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "A — R", "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "G — b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C — b3", "highlight": true, "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D — 4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G — b7 (over Am)", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E — 5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A — R", "role": "root" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B — 2", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "C = b3(Am)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 88）**
メトロノーム88に合わせて3度インターバルで指板を一周ほぐし、上の切り替えジャムフレーズをゆっくりさらいます。バッキングはまだ流しません。手が<mark>C着地（E）とAm着地（C）の位置</mark>を再確認する準備運動です。

**10〜20分・頭のトレーニング（コードトーン地図の刻み込み）**
メトロノームを止めて、上の切り替え着地地図から**<mark>Cコードトーン（C・E・G）</mark>**だけを押さえながら「明るい着地はE」と3回繰り返し、次に**<mark>Amコードトーン（A・C・E）</mark>**だけを押さえながら「暗い着地はC」と3回繰り返します。EとCが両方のコードにまたがる共有地帯であることを手で確認しましょう。目を閉じて二つの着地音をすぐ押さえられれば合格です。

**20〜40分・実戦即興（Am↔C切り替えバッキング／BPM 84〜88）**
「Am C backing track」を一つ流します。今日はドリルではなく**自由なジャム**です。3度でも4連符でも好きなように転がしつつ、ルールはただ一つ：**<mark>C区間はEで、Am区間はCでフレーズを締めくくる</mark>**こと。毎回同じフレーズを繰り返すのではなく、着地点だけを守りながら間を自由に埋めてみましょう。2〜3小節をひと息でつなげて「話すように」奏でることを目標に。

**40〜50分・録音・フィードバック（推奨）**
どんな録音アプリでもいいので、ジャムを1分間録音します。聴き直して、三つチェックしましょう。（1）コードが変わったとき<mark>着地の色合いも変わっていたか</mark>、（2）E着地が本当に明るく、C着地が本当に暗く聞こえるか、（3）終わりの音のビブラートが震えずきれいにかかっているか。今週の初日の録音と聴き比べると、成長がぐっと感じられるはずです。

**今日の完了基準:** バッキングの上でコード転換を逃さず、C区間E着地／Am区間C着地を最低16小節維持すること。同じフレーズのコピーではなく、着地だけを守りながら間を毎回違う形で埋めること。

## ④ ヒント・よくある間違い

- **同じリックばかりコピーしてしまう。**着地点を守れたからといって毎回まったく同じフレーズをくっつけるのは、まだ即興とは言えません。着地音は固定、そこへ至る**道は毎回変える**。それが今日の本当の目標です。
- **コード転換を逃してしまう。**Amなのにずっと明るいEに着地していると、少しふわふわして聞こえます（間違いではないけれど、ぼやけます）。バッキングのコード進行を先に覚えて、転換を1拍前もって準備しましょう。
- **明るさ・暗さを区別しない。**EもCもどちらも安全な音なので、適当に着地しても間違いにはなりません。でも今日は「明るい vs 暗い」を**意図的に**対比させることが核心です。感情の色合いを違う形で感じながら着地しましょう。
- **終わりの音を急いで止めてしまう。**着地したEやCは、二分音符分しっかり伸ばしてビブラートで締めくくりましょう。その余韻こそが「練習」と「音楽」を分ける最後の違いです。
