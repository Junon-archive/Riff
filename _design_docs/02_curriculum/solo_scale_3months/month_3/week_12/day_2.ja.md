---
title: "モチーフとフレーズの作曲 — 一小節を投げて、受け取る"
dayKey: "m3.w12.d2"
estMinutes: 50
i18nKey: "lesson.m3.w12.d2"
lang: ja
---

# Day 2 — スケールの羅列を『音楽』に：モチーフを投げて、変形して受け取る

## ① 理論・説明

今日なぜこれをやるかというと、昨日は着地地図を描きましたよね。でも地図だけだとまだ「音選び」であって「音楽」にはなっていません。初心者の即興の9割はここで崩れます — **休まず弾き続けてしまう**からです。音を出しっぱなしにすると、聴いている人は息が詰まります。11週目に学んだ余白・フレージング、覚えていますか？今日はそれを作曲の中に植え込みます。

今日の武器はふたつ。**モチーフ**と**コール＆レスポンス**です。

- **モチーフ（motif）**は短い動機です。2〜4音くらいのひとかけら。曲全体がこの一粒の種から育ちます。今日のモチーフはとてもシンプルにいきます：**D → E → C（♭3に着地）→（沈黙）。**3音投げて休む。この「沈黙」がポイントです。休むからこそ、さっき弾いたCに重みが生まれます。
- **コール＆レスポンス（call & response）**は会話です。さっき投げたモチーフ（コール）を、**少しだけ変形して受け取る（レスポンス）**んです。まったく同じ繰り返しだと退屈だし、完全に違うと他人になってしまう。「同じセリフをイントネーションだけ変える」——それが変形です。

そして今日、こっそり練習したいことがもうひとつあります。レスポンスを**A7の区間まで引っ張って、C（♭3）をC#（長3度）に変えて受け取る**んです。昨日習ったあの1フレットのスイッチ！同じモチーフがドリアンで投げられ、ミクソリディアンで答えられる瞬間、曲に「物語」が生まれます。これがあなたのソロの骨格になります。

## ② 視覚資料

まず、**コール（モチーフの原型）**です。Am7の上でD-E-Cの3音を投げて、半小節まるごと休みます。最後のCに軽くビブラートを。あの大きな余白（`rest`）がデータとして刻まれているのが見えますよね？あれが今日の主役です。

```json
{
  "id": "m3.w12.d2.motif_call",
  "type": "tab",
  "meta": {
    "title": "Original solo motif - the CALL (Am7, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (over Am7)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]}
    ]
  }
}
```

次に、**レスポンス（変形して受け取る）**です。2小節に伸ばしました。1小節目はD7の上でF#（長6度の色）で答え、2小節目でA7に移りながら**C#（長3度）にスイッチ**して受け取ります。最後に♭7（G）の色彩音もちょこんと乗せました。コールと同じ「形」なのに、着地が変わっているのが感じられますよね？

```json
{
  "id": "m3.w12.d2.motif_response",
  "type": "tab",
  "meta": {
    "title": "Original solo motif - the RESPONSE (D7 F# color -> A7 mode switch to major 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian/Mixolydian",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "technique": "none", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "passing" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 8, "duration": "quarter", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 92）— 3度インターバルで手を温める**
メトロノーム92に合わせて『ひとつの家』の中で3度インターバルのパターンを回します。一音押さえて3度上の音を押さえ、また一つ上がって繰り返す。昨日が4連符だったなら、今日は3度ジャンプで。フレーズの材料を手に乗せ続けるウォームアップです。

**10〜20分・頭のトレーニング（モチーフを手に馴染ませる）**
バッキングなしで、コールのモチーフ（D-E-C＋休み）だけを10回繰り返します。このとき**口でも一緒に歌ってください**——「タ・ダ・ダーン…（休み）」。それからレスポンスを重ねます。コールとレスポンスを交互に弾きながら、その間の「沈黙」が気まずくて埋めたくなる衝動をぐっと我慢する練習です。その我慢する力が今日の実力です。

```json
{
  "id": "m3.w12.d2.motif_response",
  "type": "tab",
  "meta": {
    "title": "Original solo motif - the RESPONSE (D7 F# color -> A7 mode switch to major 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian/Mixolydian",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "technique": "none", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "passing" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 8, "duration": "quarter", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

```json
{
  "id": "m3.w12.d2.motif_call",
  "type": "tab",
  "meta": {
    "title": "Original solo motif - the CALL (Am7, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (over Am7)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]}
    ]
  }
}
```

**20〜40分・実戦作曲（Am7-D7-A7バッキング／88〜92 BPM）**
バッキングを流し、コール→レスポンスを実際のコードの上に乗せます。それから本当の作曲がスタート：**レスポンスを毎回少しずつ違うふうに**受け取ってみてください。あるときはF#を長く、あるときはC#にスイッチ、あるときは余白をもっと大きく。気に入った変形を2〜3個選んで覚えておきましょう。それが明日の完成ソロの材料になります。

**40〜50分・録音・フィードバック（推奨）**
手元の録音ツールで、コール＆レスポンスを一往復録音します。聴き直して、チェックするのはひとつだけ。**余白が本当に余白として聞こえているか、それとも無意識に音で埋めていないか。**埋めていたら、明日は休符を半拍だけ長くしてみましょう。

**今日の完了の目安：**コールのモチーフを覚えて弾けること。レスポンスで少なくとも2種類の変形を作り、そのうちA7でC#にスイッチするバージョンをバッキングの上で成功させること。

### 自己診断チェックリスト（今日の焦点：フレージング）
- [ ] **3度着地の正確さ** — コールはC（♭3）、レスポンスはF#・C#に正確に着地した
- [ ] **色彩音の活用** — F#（長6度）・G（♭7）を「通過音」ではなく色として聞こえるように乗せた
- [ ] **ビブラートの安定感** — 着地音（C・F#・C#）に一定の周期のビブラートをかけた
- [ ] **リズムのタイミング** — 余白（休符）の長さがぶれず、コール／レスポンスの対比が生きていた

## ④ ヒント・よくある間違い

- **余白を我慢できずに埋めてしまう。**いちばんよくあることです。休符のところで手がむずむずして、音を詰め込んでしまう。それだと会話ではなく独り言になります。休むときは本当に休みましょう。沈黙も演奏のうちです。
- **変形を「まったく別のフレーズ」にしてしまう。**レスポンスはコールのいとこであるべきで、他人になってはいけません。音の順番かリズム、どちらかひとつだけ変えて、残りは保ちましょう。そうすれば耳が「あ、さっきのあれだ」とわかります。
- **モチーフを長くしすぎる。**2〜4音でじゅうぶんです。モチーフが長いと、変形したり繰り返したりする余地がなくなります。短いからこそ曲が育ちます。
- **スイッチ（C→C#）を活かせない。**レスポンスでC#に移るその瞬間が、この曲の「反転」です。あっさり通り過ぎず、軽くビブラートで印を押しましょう。
