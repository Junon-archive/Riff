---
title: "Amペンタ第1ボックスを刻み込む＋4連音シーケンス（低速）"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
lang: ja
---

# Day 1 — 第1ボックスを、手ではなく「耳」に刻む

## ① 理論・説明

今日なぜこれをやるかというと、ひとつだけお伝えすると、ペンタトニック第1ボックスは、もう100回くらい弾いてきたはずです。でも、手に馴染んでいるのと指板をきちんと覚えているのは、実は少し違います。上行–下行でラーラーラーラーと行ったり来たりするだけのもの。それは指板を覚えたのではなく、**指の筋肉が惰性で回っている**だけなんです。即興ができない理由はまさにここにあります。曲の上で「さあ、好きに弾いてみて」と言われると、手はその惰性のトラックを往復するだけになってしまうんですね。

そこで今日からルールを一つ決めましょう。**上行・下行の単純な繰り返しは禁止。**代わりに、4連音（16分音符4個ひとまとまり）のシーケンスでボックスを噛みしめていきます。なぜ4連音かというと、ボックスを「上から下へ一方向」ではなく「4つ進んで1つ戻ってまた進む」というやり方で捉えると、脳が各音の位置を**個別の座標として**覚え始めるからです。これで惰性が壊れていきます。

覚えるべき座標は、Aマイナーペンタトニックの5音だけです。**A（根音）・C（♭3）・D（4）・E（5）・G（♭7）。**この中でも今日とくに目に焼き付けてほしいのが**C（♭3）**。これがAmコードの3度、つまりこれから3か月間ずっと「着地点」になる音です。今は「あ、Cはここ・ここ・ここに緑の印があるんだな」くらい、目に馴染ませておくだけで十分です。

## ② 視覚資料

Amペンタトニック第1ボックス（5フレット根音）。緑にハイライトされた音（♭3＝C）が、これから狙っていくターゲット音です。

```json
{
  "id": "m1.w1.d1.pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 60
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今日の核となる武器、4連音（16分音符）の上行シーケンスです。1-2-3-4／2-3-4-5／3-4-5-6…というふうに、1つずつずらしながら上がっていきます。

```json
{
  "id": "m1.w1.d1.four_note_sequence",
  "type": "tab",
  "meta": {
    "title": "4-note (16th) ascending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 60
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 60）**
メトロノーム60に合わせて、4連音シーケンスを6弦から1弦の終わりまで上行のみ。下行はまだやりません。1拍に16分音符4個、つまり「タカタカ」ひとまとまりがクリック1回にぴったり収まるように。オルタネイトピッキング（ダウン–アップ–ダウン–アップ）を固定します。

**10〜20分・頭のトレーニング（今日のターゲット＝C／♭3）**
メトロノームを止めて、指板の上で**Cの音（♭3）だけ**を探して押さえます。6弦8フレット、3弦5フレット、1弦8フレット——この3か所。押さえるたびに声に出して「シー！」と呼びます。位置を手ではなく名前で覚えさせるプロセスです。3分以内に目を閉じて3か所を押さえられたら合格。

**20〜40分・実戦感覚 — ワンコード即興（Amバッキング／BPM 60〜65）**
「Am backing track slow」あたりで検索して、Amのワンコードバッキングを流します。ルールは一つだけ。**4連音シーケンスで上がっていき、どこかで止まりたくなったら必ずCかAで止まる。**まだ「かっこいいフレーズ」は気にしなくて大丈夫。惰性のトラックではなく、シーケンスで動いている感覚だけを味わってください。

**40〜50分・録音・フィードバック（推奨）**
手元の録音アプリ（スマホのボイスメモでもOK）で、最後のジャムを30秒だけ録音。聴き直して、チェックするのは一つだけ。16分音符4個が**団子にならずに粒立っているか**。団子になっていたら、明日はBPMを55に下げても大丈夫です。

**今日の完了の目安：**BPM 60で4連音の上行シーケンスを途切れずに1弦まで、そしてCの3か所を目を閉じて押さえられること。

## ④ ヒント・よくある間違い

- **惰性の往復が再発する。**気づいたら「ラーラーラーラー」の単純な上下行に戻っていたら、それは脳が楽な道に逃げただけ。シーケンスがこんがらがって、もどかしく感じるのは正常です。そのもどかしさこそ、新しい回路が開通しかけているサインです。
- **速さへの欲張り。**60が遅く感じても、絶対に上げないでください。速さは今週のDay 3で上げます。今日速く弾いて崩れるより、遅くてもクリアに弾けるほうが100倍得です。
- **♭3を「ただの一音」として流してしまう。**Cはこれから3か月間の主人公です。押さえるたびに、少しだけ強く、少しだけ長く。今から耳に刻み込んでおけば、後のコードトーン・ターゲティングが驚くほど楽になります。
- **ピッキングする手の力み。**腕ではなく手首で浅く弾きます。16分音符を腕で弾いていると、20分で疲れ切ってしまいます。
