---
title: "統合メドレー：ジャンル転換のたびにモード・フレージングのムードまでリアルタイムでスイッチング"
dayKey: "m3.w11.d4"
estMinutes: 50
i18nKey: "lesson.m3.w11.d4"
lang: ja
---

# Day 4 — メドレー：バッキングが変わったら、スケールも歌い方もまるごと乗り換える

## ① 理論・説明

今日なぜこれをやるかというと。3日間、ブルース（ミクソリディアン・レイバック）、ファンク（ドリアン・タイト）、ロック（ミクソリディアン・ロングトーン＆ベンド）を別々に学んできましたよね。今日はこれを**<mark>一曲の中でつなげます。</mark>**バッキングがブルース→ファンク→ロックと流れていくメドレーの上で、**<mark>コードの性格が変わった瞬間にモードもフレージングのムードもリアルタイムでスイッチングする</mark>**のが、今週の最終試験です。

判断の核となる基準をもう一度整理しますね。これが今日、頭に装備する「スイッチング判断表」です。

- **ブルース区間（A7系）** → ドミナント／ブルースだから**ミクソリディアン＋ブルーノート。**3度C#に着地しつつ**<mark>レイバック・長い余韻</mark>**でねっとりと。
- **ファンク区間（Am7–D9）** → マイナー・モーダルなヴァンプだから**ドリアン。**Am7ではC（♭3）、D9ではF#（♮6＝3度）に着地しつつ**<mark>パームミュートのスタッカート・スパッと切れた休符</mark>**でタイトに。
- **ロック区間（A5–G5）** → ♭VIIのパワーコードだから**ミクソリディアン。**A5ではC#、G5ではBに着地しつつ**<mark>大胆なベンド・ロングトーン・大きなビブラート</mark>**でパワフルに。

ここで今日の気づきを一つ。3つのジャンルの3度ターゲットが、**<mark>3弦4・5・6フレット（B・C・C#）</mark>**に並んで集まっています。手はほぼ同じ場所にあるのに、**どのフレットを選んでどう歌うか**でジャンルが分かれるということ。つまりモード・スイッチングは手の大移動ではなく、**<mark>判断と表現のスイッチング</mark>**なんです。

### 🎙️ 間・フレージング ミニレッスン — メドレー編：ムードの切り替え自体が表現になる

今日の表現ミッションはたった一つ。**<mark>ジャンルが変わるその継ぎ目で、フレージングのムードを丸ごと変えること。</mark>**

- **休符の性格を変える：** ブルースの「間延びする間」→ファンクの「スパッと切った間」→ロックの「ドラマチックに空けた間」。同じ`rest`でも、ジャンルごとに息の仕方が違います。
- **モチーフにジャンルの服を着せる：**「3度に着地する」という同じモチーフを、ブルースではビブラートで伸ばし、ファンクではポンと刻み、ロックでは大きくベンドします。一つのアイデアを三通りの服で。
- **コール＆レスポンスで継ぎ目をつなぐ：** 前のジャンルで投げた短いフレーズを、次のジャンルの最初の一節でそのジャンルの語法で返すと、転換が滑らかになります。
- **ダイナミクスでジャンルを示す：** ブルースは中くらい、ファンクは鋭く切って、ロックは大きく — 強弱の対比だけでも「ジャンルが変わった」ことが伝わるように。

まとめると今日は、**一つのメドレーの中で3度着地は保ちつつ、継ぎ目ごとにモード・休符・ダイナミクスを丸ごと着替えて歌う**日です。

## ② 視覚資料

一つ目は、3つのジャンルを1枚にまとめた**<mark>スイッチング判断マップ</mark>**です。**3弦4・5・6フレット（B・C・C#）**が並んでいるのが見えますよね？ロックG5→B（4フレット）、ファンクAm7→C（5フレット）、ブルース・ロックA→C#（6フレット）。手はそのまま、判断だけが変わります。D9→F#（2弦7フレット）はファンクのスイッチング・ターゲットです。

```json
{
  "id": "m3.w11.d4.medley_switch_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Genre switching map (blues A7 / funk Am7-D9 / rock A5-G5) - 3rds on one string",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (blues Mixolydian / funk Dorian / rock Mixolydian)",
    "scale": "Genre switching map",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "A R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "Blues/Rock A-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 5, "finger": 2, "label": "Funk Am7-b3(C)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "finger": 1, "label": "Rock G5-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 7, "finger": 4, "label": "Funk D9-3(F#)", "highlight": true, "role": "target" }
    ]
  }
}
```

二つ目は、今日の**<mark>メドレー転換フレーズ</mark>**です。小節ごとにジャンルが変わり、そのたびにフレージングが丸ごと変わります。**1小節目はブルース**（レイバック・ビブラート・間）、**2小節目はファンク**（16分パームミュート・スタッカート・詰まった休符）、**3小節目はロック**（ドラマチックな間→全音ベンド・ロングトーン）。同じ3度着地がジャンルごとにどれだけ違って聞こえるかを、`rest`と`technique`がデータで見せてくれます。

```json
{
  "id": "m3.w11.d4.medley_transition_phrase",
  "type": "tab",
  "meta": {
    "title": "Medley transition phrase (blues -> funk -> rock) with mood switching",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Mixolydian / Dorian / Mixolydian)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "blues breath" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "eighth", "rest": true, "label": "breath" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3>3(C>C#)", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "D9 R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "quarter", "rest": true, "label": "rest" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true, "label": "rock breath" },
        { "string": 3, "fret": 4, "duration": "quarter", "dotted": true, "technique": "bend", "bendTarget": "full", "label": "B>C#(A5-3)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A5-3(C#)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 92）— 3ジャンルの3度往復**
中間テンポ92に合わせて、スイッチング判断マップの**3弦4・5・6フレット（B・C・C#）**を往復します。ただしフレットごとに語法を変えて — 6フレットはビブラートで伸ばし（ブルース）、5フレットはパームミュートでポンと切り（ファンク）、4フレットはベンドで6フレットまで押し上げる（ロック）。**<mark>同じ手の位置で3つのムード</mark>**を行き来するのが今日の予熱です。

**10〜20分・頭のトレーニング — スイッチング判断表の暗唱マッピング**
メトロノームを止めて、「ブルースならミクソリディアン・C#、ファンクならドリアン・C↔F#、ロックならミクソリディアン・C#↔B」と**声に出して唱えながら**該当する音を押さえます。ジャンル名を呼ばれて0.5秒以内にその3度へ手が動けば合格です。これが実戦スイッチングの反射神経になります。

```json
{
  "id": "m3.w11.d4.medley_switch_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Genre switching map (blues A7 / funk Am7-D9 / rock A5-G5) - 3rds on one string",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (blues Mixolydian / funk Dorian / rock Mixolydian)",
    "scale": "Genre switching map",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "A R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "Blues/Rock A-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 5, "finger": 2, "label": "Funk Am7-b3(C)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "finger": 1, "label": "Rock G5-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 7, "finger": 4, "label": "Funk D9-3(F#)", "highlight": true, "role": "target" }
    ]
  }
}
```

**20〜40分・実戦即興（ブルース→ファンク→ロックメドレーバッキング／88〜92 BPM）— ムード転換ミッション**
ジャンルが変わるバッキングを2つつなげて流すか（ブルースジャム→ファンクジャム→ロックジャム）、メドレートラックを一つ流します。ミッションは三つ。①区間ごとにモードを乗り換える。②その区間の3度に着地する。③**<mark>継ぎ目でフレージングのムード（休符の性格・ダイナミクス・奏法）を丸ごと変える。</mark>**転換後の最初の一節では、前のジャンルのモチーフを新しいジャンルの語法で返して滑らかにつなぎましょう。

**40〜50分・録音・フィードバック（推奨）**
録音ツールでメドレージャムを40秒録音。聴き直してチェックするのは三つだけ — ①ジャンルの転換点で実際にモードが変わっていたか。②各区間の3度に着地できていたか。③**<mark>目を閉じて聞いても「ここでブルース→ファンク→ロックに変わった」とわかるか</mark>**（休符・ダイナミクスの対比で）。必要なら再生速度を落として、転換区間のピッキングのタイミングと間の置き方を拡大して確認してください。

**今日の完了基準：** ジャンル転換3回すべてでモード・3度・フレージングのムードをすべてスイッチングできる。録音を聴いたときに転換点が**耳で区別できれば**、今週は合格です。

## ④ ヒント・よくある間違い

- **モードだけ変えて、ムードはそのまま。** 今日いちばんの落とし穴です。スケールを乗り換えても、レイバック・スタッカート・ロングトーンといった表現が変わらなければ、ジャンルは聞こえてきません。音の選び方より、**歌い方**がジャンルのアイデンティティです。
- **転換の継ぎ目でつまずいてしまう。** コードが変わることを前もって予測し、最後の音を次の3度に向けて**あらかじめ狙って**おきましょう。判断が遅れると、継ぎ目で拍が崩れます。
- **手を大きく動かそうとする勘違い。** 3つのジャンルの3度は全部3弦4・5・6フレットにあります。手はほとんど動きません。**変わるのは判断と表現**だということを覚えておいてください。
- **一つのジャンルに閉じこもってしまう。** 自分の手に馴染んだムード（たいていブルース）で全部を塗りつぶさないでください。ファンク区間では本当に短く、ロック区間では本当に大きく。対比が大きいほど、メドレーが生きてきます。
