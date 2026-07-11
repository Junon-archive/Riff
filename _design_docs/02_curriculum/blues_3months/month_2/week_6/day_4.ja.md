---
title: "表現リックの統合 — ベンド・ビブラート・スライドで一小節を歌う"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — 三つの表現の道具を全音ベンドリックに合わせる

## ① 理論・説明

6週目の最終日です。今週の間に、音を押し上げる**ベンド**、音を震わせて歌わせる**ビブラート**、音の間をつなぐ**スライド**を一つずつ身につけました。今日はこの三つを一つのフレーズの中に合わせます。<mark>三つの道具が集まると、同じボックス1の音も、まったく違う「声」で語り始めます。</mark>技法を別々に使うときと、一つの流れの中で自然につないで使うときとでは、音の密度が違います。今日はその「つなぎ」を練習します。

今日仕上げるリックは、ボックス1の中の**全音ベンドリック**です。3弦7フレットの**4度（D）**を全音押し上げて5度（E）の音を出し、5度-b3へ下りて、ルートAに**ビブラート**で着地します。<mark>ベンドで「問い」、下行で「解き」、ビブラートで「結ぶ」 — ちょうど一小節の物語です。</mark>短いですが、この中に今週の表現がすべて詰まっています。一音一音を正確に弾くことよりも、ベンドが目標音まで届き、ビブラートが安定する、その「表情」がこのリックのすべてです。

このリックがなぜ特別かというと、この4週間リズムで「質問」を学び、5週目にスケールという「語彙」を得たあと、いよいよその語彙を「自分の声で」語る**最初の一文**だからです。<mark>正確な音より表情が先 — これがブルースのリードの核心です。</mark>完璧でなくても大丈夫です。ベンドが5度まで届き、最後のルートがビブラートで生きていれば、それで**十分です**。さあ、今週を締めくくる一小節を手に入れましょう。

```json
{
  "id": "m2.w6.d4.three_voices",
  "type": "tab",
  "meta": { "title": "Three expressive tools in two beats", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **三つの道具を二拍に。** b3から4度へ滑り込み、その4度を全音押して5度を出し、ルートにビブラートで着地します。スライド・ベンド・ビブラートが一つの流れでつながります。

## ② ビジュアル資料

まず今日のリックが指板のどこを通るか**全体像**で見ておきましょう。緑で示した**3弦7フレットの4度**が全音ベンドの出発点です。

```json
{
  "id": "m2.w6.d4.lick_map",
  "type": "scale_shape",
  "meta": { "title": "The bend lick on the Box 1 map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **ベンドの出発点が緑。** 4度を全音押して5度を出し、5度-b3を通ってルートへ下ります。

<mark>この四つの音が今日のリックの骨格です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。今日のリックの二人の主役、**全音ベンドとビブラート**を別々に温めます。

```json
{
  "id": "m2.w6.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the bend and vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70。** 4度を全音押して5度を出し、ルートをビブラートで震わせます。リックの材料二つです。

**10〜20分・頭のトレーニング（今日のターゲット＝ベンドの音程を合わせ直す）**
リックに入る前に、全音ベンドが5度まで正確に届くか確かめ直します。**2弦5フレットの5度**を先に弾いて耳に入れ、比べます。<mark>ベンドが目標音に届いてこそリック全体が生きることを覚えておきます。</mark>

**20〜40分・実戦：全音ベンドリック（BPM 70）**
今週の完成物です。ベンドで開き、下行で解き、ビブラートで結びます。

```json
{
  "id": "m2.w6.d4.bend_lick",
  "type": "tab",
  "meta": { "title": "Whole-step bend lick (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70。** 3弦7フレット（4度D）を**全音押し上げて**5度（E）の音を出します — 目標音まで正確に。そのあと5度-b3へ下りてルートAに**ビブラート**で着地。これがブルースの「一小節の物語」です。

<mark>ベンドが5度まで届き、最後のルートがビブラートで歌えば、今週の声が完成します。</mark>

**40〜50分・録音（6週目卒業ミッション！）**
全音ベンドリックを最初から最後まで録音します。ベンドが目標音まで届くか、ビブラートが安定しているか — この二つだけを聴いてみます。

**今日の完了基準：** 全音ベンドが5度の目標音まで正確に届き、ルートAにビブラートで着地してリックを一つの流れで完成させた。 — 今週の成果物：全音ベンドリック（ベンド・ビブラート統合）完成（6週目完成！）

## ④ ヒント / よくあるミス

統合リックでよくあるミスです。技法を全部入れようとして、かえって流れが切れがちです。

```json
{
  "id": "m2.w6.d4.aim_and_land",
  "type": "scale_shape",
  "meta": { "title": "Bend to the 5th, land home on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **5度へ押し、ルートへ帰る。** ベンドは緑の5度まで、最後はルートにビブラートで着地します。

- **ベンドが5度に届かない。** リックの最初の音がぼやけると全体がぼやけます。目標音まで最後まで押します。
- **着地のルートをそのままにする。** 最後の音にビブラートがないと、物語が急に切れた感じになります。必ず震わせて結びます。
- **速く弾こうとしすぎる。** BPM 70で十分です。速さよりベンドの音程とビブラートが先です。
- **一度外したら止まる。** 表現は繰り返しから育ちます。ベンドが少し外れても最後までつないで一小節を完成させます。
