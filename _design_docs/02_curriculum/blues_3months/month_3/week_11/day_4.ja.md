---
title: "表現統合リック — スライド・ベンディング・ビブラートを一つに（11週目完成）"
dayKey: "m3.w11.d4"
estMinutes: 50
i18nKey: "lesson.m3.w11.d4"
---

# Day 4 — 三つの道具を一つの文に編んで「自分の声」を作る

## ① 理論・説明

ついに11週目の最後の日です。初日は**スライド**で滑り込み、二日目は**ベンディングとビブラート**で泣き、三日目はレイバックで余裕を学びました。今日はこれらの道具を一つのリックの中にすべて編みます。<mark>スライドで進入し、ベンディングで緊張を作り、ビブラートで着地する — 成熟した表現が一つの文につながります。</mark>道具を別々に知ることと一つに編むことは、まったく違う話です。

今日の完成リックは二小節です。1小節目でルートAから出発し、**b3からスライド**で滑って5度・b7まで上がります。2小節目では**4度を全音ベンディング**で押して緊張を作り、5度・b3を通ってルートに**ビブラート**で着地します。<mark>スライド → ベンディング → ビブラート、三つの道具が順番に一つのリックの中で手を取り合います。</mark>各道具はすでに今週一つずつ覚えたので、今日はただなめらかにつなぐだけです。

このリックが11週目全体のゴールです。派手な速弾きではなく、**表現の道具を一つに編んで「自分の声」を作る**こと — それが今日の目標です。<mark>もうリックが「練習」ではなく「言葉」のように聞こえ始めます — スライドで問い、ベンディングで緊張し、ビブラートで答える会話です。</mark>**BPM 70**で、レイバックで拍の後ろに少し寝ながらゆっくり完成させてみましょう。焦らず、三つの道具が一つの文として流れるその余裕を楽しんでください。このリック一つが、この十一週間であなたが積み上げてきた表現をすべて含んでいます。

```json
{
  "id": "m3.w11.d4.tools_map",
  "type": "scale_shape",
  "meta": { "title": "All three tools in box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 慣れたボックス1の上に、今日使う音がすべて集まっています。**ルート・b3・4度・5度・b7** — 新しい位置はありません。

## ② ビジュアル資料

今日のリックが通る音を指板であらかじめ見ます。スライドは**b3（3弦5フレット）**で、ベンディングは**緑の4度（3弦7フレット）**で起こります。<mark>同じボックス1の中で、二本の指の動きだけで三つの道具がすべて出ます — 手を大きく移す必要がありません。</mark>

```json
{
  "id": "m3.w11.d4.lick_map",
  "type": "scale_shape",
  "meta": { "title": "Notes the expressive lick passes through", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **緑の4度**がベンディングする音、**b3**がスライドの出発点です。残りのルート・5度・b7はそのまま押さえます。

<mark>三つの道具がすべて一つの手の中にあるので、あとは順番につなぐだけでリックが完成します。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。まず1小節目の**スライド部分**だけ取り出して練習します。ルートからb3スライドで滑って5度まで、ゆっくりと。

```json
{
  "id": "m3.w11.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: the slide intro", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 60。** ルートA → b3からスライドで進入 → 5度。今日のリックの導入部だけ先に温めます。

**10〜20分・頭のトレーニング（今日のターゲット＝表現の統合）**
実戦の前に、スライド → ベンディング → ビブラートが順番につながる絵を頭の中で描きます。<mark>三つの道具を別々に思い浮かべず、一つの文のようにつなげて想像すれば、手も自然につながります。</mark>

**20〜40分・実戦：表現統合リック（BPM 70）**
ついに11週目の完成物、**表現拡張リック**です。スライドで進入し、ベンディングで緊張を作り、ビブラートで着地する二小節のリックです。**レイバック**で拍の後ろに少し寝ながら、三つの道具を一つの文に編みます。

```json
{
  "id": "m3.w11.d4.expressive_lick",
  "type": "tab",
  "meta": { "title": "Expressive lick (slide/bend/vibrato)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70、レイバックで（拍の後ろに少し）。** 1小節目：ルート → **スライド**（b3→4）で滑って5度・b7。2小節目：**全音ベンディング**（4→5） → 下行 → ルート**ビブラート**着地。道具たちが一つの文に編まれます。

<mark>スライドで問い、ベンディングで緊張し、ビブラートで答える — これがあなたが完成させた「自分の声」です。</mark>

**40〜50分・録音（11週目卒業ミッション！）**
A7のバッキングの上で表現拡張リックを録音します。スライド・ベンディング・ビブラートが一つの文のようになめらかにつながるか、リックが「言葉」のように聞こえるか収めてみます。

**今日の完了基準：** A7の上でスライドで進入し、ベンディングで緊張を作り、ビブラートで着地する表現拡張リックを完成させ、三つの道具が一つの文に編まれた「自分の声」を録音した。 — 今週の成果物：スライド→ベンディング→ビブラート表現統合リック 弾き切り・録音（11週目完成！）

## ④ ヒント / よくあるミス

表現の統合でよくあるミスです。ほとんどは**道具を別々にぶつぶつ切って弾く**ところから来ます。

```json
{
  "id": "m3.w11.d4.connect",
  "type": "scale_shape",
  "meta": { "title": "Connect the three tools as one sentence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **三つの道具を一つの文のようにつないでください。** スライド・ベンディング・ビブラートの間が切れると、リックが「練習」のように聞こえます。

- **スライドを雑に滑らせる。** 導入がぼやけると文の始まりが弱くなります。到着音まではっきりと。
- **ベンディングが5度に届かない。** 緊張の頂点が崩れます。全音を最後まで押します。
- **ビブラートなしでルートにぽんと座る。** 最後の震えがないと文が未完成です。
- **速さから上げる。** BPM 70で三つの道具がなめらかにつながるのが先です。速さは後の話です。
