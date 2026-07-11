---
title: "ボックス1の代表リック1 — 全音ベンドで最初の一文を開く"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — ベンドで開く代表リック

## ① 理論・説明

ついに8週目です。2ヶ月目の最後の週、そして最初のソロを完成させる週です。ほんの数週間前まで**ペンタトニック・スケール**の音の位置をやっと覚えていた手が、いまや12小節の上で歌う準備を終えました。<mark>ペンタしか知らなかった手が、いま12小節の上で歌います — 今週がまさにその瞬間です。</mark>今週の目標はたった一つです。これまで学んだスケールとベンドとフレージングを一つの**ブルースリック**に編み、12小節の上に乗せて最初のソロを完成させることです。その第一歩が今日の**代表リック1**です。

今日のリックは**全音ベンド**で扉を開くリックです。ボックス1の3弦7フレット、つまり**4度（D）**を押さえて音を丸ごと一つ押し上げると、**5度（E）**の音が出ます。<mark>4度を全音分押し上げた瞬間、指一本でブルース特有の「泣く」音が生まれます。</mark>ベンドで扉を開いたら、b3（C）を通ってルートAへやさしく下りてきます。押し上げる緊張と、ルートへほどける弛緩 — この二つの対比が短いリック一つに表情を与えてくれます。

ベンドは最初、音程が少しずれても大丈夫です。**全音（2フレット）**分ちょうど上がったかを耳で確認するのがすべてです。<mark>正しい音まで押し上げてからルートに着地すれば、リック一つがまるごと完成します。</mark>速さは**BPM 75**、ゆったりしたシャッフルの感じで十分です。今日このリック一つを手に入れれば、明日学ぶ**下行リック**と合わさって今週の最初のソロの半分が埋まります。さあ、ベンドで最初の一文を開きましょう。

```json
{
  "id": "m2.w8.d1.bend_lick",
  "type": "tab",
  "meta": { "title": "Box 1 lick 1: the whole-step bend", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75、シャッフルの感じ。** 1小節目は4度（D）を全音ベンドで5度まで押し上げて開き、b3で息を整えます。2小節目は再びベンドしてルートAにビブラートで着地します。

## ② ビジュアル資料

このリックが指板のどこを通るかを**ボックス1の地図**の上で見ます。緑で示された**4度（D）**がベンドで押し上げる場所、青のルートAが着地する家です。

```json
{
  "id": "m2.w8.d1.bend_map",
  "type": "scale_shape",
  "meta": { "title": "The bend note on the Box 1 map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **ベンドは緑で。** 4度（緑）を押し上げて5度の音を作り、b3を通ってルートへ下ります。

<mark>この地図の上でベンドで開き、ルートで閉じる流れが、今日のリックのすべてです。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 75。今日のリックの心臓である**全音ベンド**だけを別に温めます。4度を5度までちょうど押し上げる感覚を手に刻みます。

```json
{
  "id": "m2.w8.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the whole-step bend", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 75。** 4度を半拍のあいだ全音ベンドし、5度を半拍押さえて確認します。押し上げた先の音が5度と同じ高さかを耳で合わせます。

**10〜20分・頭のトレーニング（今日のターゲット＝ベンドの音程）**
実戦に入る前に、ベンドした4度が**5度（E）**とまったく同じ高さに届いたかを頭の中で描きます。押す前に到着する音を先に想像すると、音程がぐっと正確になります。<mark>到着する音をあらかじめ聴いておくと、手がその音を探して押し上げます。</mark>

**20〜40分・実戦：代表リック1（BPM 75）**
今日の完成物です。ベンドで開き、b3を通ってルートに着地する二小節をまるごと弾きます。

```json
{
  "id": "m2.w8.d1.lick1_take",
  "type": "tab",
  "meta": { "title": "Box 1 lick 1, full take", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75。** 1小節目はベンドで開き、b3で息を整えます。2小節目は再びベンドしてルートAにビブラートで結びます。急がず、ベンドの音程に集中します。

<mark>ベンドが正しい音まで届き、ルートで震えながら結ばれれば、今日のリックが完成します。</mark>

**40〜50分・録音**
代表リック1を最初から最後まで録音します。ベンドが5度までちょうど届いたか、ルートのビブラートが生きているかを聴いてみます。

**今日の完了基準：** ベンドで4度を5度まで押し上げて開き、b3を通ってルートAにビブラートで着地する代表リック1を二小節で弾いて録音した。 — 今日の成果物：代表リック1（ベンド）完成

## ④ ヒント / よくあるミス

ベンドリックでよく出るミスです。ほとんどは音程と力加減の問題です。

```json
{
  "id": "m2.w8.d1.bend_target",
  "type": "scale_shape",
  "meta": { "title": "Bend the 4th up to the 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **押して5度、ゆるめてルート。** 4度（緑）を押して5度の音を作り、ルートAへ下りてビブラートで結びます。

- **押しが足りない、または押しすぎる。** 全音はちょうど2フレット分の高さです。押し上げた先の音が5度と合うかを耳で確認します。
- **指一本だけで押す。** ベンドは二、三本の指をそろえて押すと力が出ます。薬指と中指を一緒に使います。
- **ベンドのあとルートを逃す。** リックはルートに着地してこそ文が閉じます。最後のAを必ずビブラートで結びます。
- **速く弾こうとしすぎる。** BPM 75で十分です。速さよりベンドの音程が先です。
