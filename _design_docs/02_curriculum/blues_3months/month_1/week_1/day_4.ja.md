---
title: "A7シャッフル・ブギー完成 — 1週目の決勝線"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — シャッフル・フィールの上にブギーを乗せて完成させる

## ① 理論・説明

いよいよ1週目の決勝線です。今日は昨日のブギー・リフに**シャッフル・フィール**を乗せて、二小節の**A7シャッフル・ブギー**を完成させ、録音します。リズム（シャッフル）と手の形（ダブルストップ・ブギー）が出会った瞬間、<mark>本物のブルース・グルーヴ</mark>が初めて生き生きと動き出します。難しく感じても心配いりません。新しいことを学ぶのではなく、すでに手に馴染んだ三つのかけらを一つに重ねるだけです。

一週間を振り返りましょう。**D1**ではロング・ショートのシャッフル・フィールを、**D2**ではルート+5度・6度のダブルストップを、**D3**ではR-5-6-b7のブギー・リフを覚えました。今日はこの三つを一つに重ねます。手の形はそのまま、8分音符だけ**ロング・ショート**で転がせばいいのです。

今日使う手の形全体の地図を、もう一度目に入れておきましょう。

```json
{
  "id": "m1.w1.d4.shape_map",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 boogie shape — full map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **R + 5・6・b7。** 5弦開放Aの上、4弦で人差し指・薬指・小指が歩きます。

このフォームは12小節ブルースの**A7の場所**にそのまま使われます。来週は同じ手の形を**D7・E7**へ移すだけで12小節が完成します。だから今日の二小節は、<mark>ブルース一曲まるごとの種</mark>なのです。12小節ブルースは結局このブギーの塊をコードだけ替えて移動させる構造なので、今日の二小節が固ければ、その先は驚くほど楽になります。

二小節を完璧に貼り合わせようと頑張らなくても大丈夫です。**シャッフルが生きていて二音が両方鳴れば**、今日は成功です。このグルーヴを必ず録音しておきましょう。一週間の証拠であり、来週の12小節の<mark>出発点</mark>になります。

## ② ビジュアル資料

今週の完成物です。昨日のブギー・リフを**シャッフル・フィール**で二小節転がした、A7シャッフル・ブギーです。

```json
{
  "id": "m1.w1.d4.a7_boogie",
  "type": "tab",
  "meta": { "title": "A7 shuffle boogie", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフルで（ロング・ショート）。** 5弦開放Aを押さえ続け、4弦で5度（2フレット）→6度（4フレット）→b7（5フレット）→6度と指を開いて閉じます。<mark>弾む感じ</mark>が出れば成功。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。開放Aシャッフルと昨日のブギー一小節で手をほぐします。<mark>足が正拍を掴んでいるか</mark>を確認。

一小節のウォームアップ版でシャッフルを取り戻します。

```json
{
  "id": "m1.w1.d4.warmup",
  "type": "tab",
  "meta": { "title": "A7 boogie — 1-bar warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 65、シャッフルで。** ブギー一小節を軽く。手の形がまだ生きているか点検します。

**10〜20分 · 頭のトレーニング（今日のターゲット＝シャッフル＋ブギーの結合）**
手はブギーの順番（5-6-b7-6）を、足はロング・ショートのシャッフルを同時に思い浮かべます。**まず頭の中で合わせて**みます。

**20〜40分 · 実践A7シャッフル・ブギー（二小節 / BPM 80）**
上の完成物二小節を**途切れず**繰り返します。<mark>シャッフルが生きているか</mark> ／ <mark>二音が両方鳴るか</mark>の二つだけを見ます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒〜1分録音してチェック：<mark>ロング・ショートのグルーヴがb7まで滑らかに聞こえるか</mark>。

**今日の完了基準：** A7シャッフル・ブギー二小節を、BPM 80でシャッフル・フィールを生かして繰り返し、録音できる。 — 今週の成果物：A7シャッフル・ブギー（1週目完成！）

## ④ ヒント / よくあるミス

完成の二小節でよく出るミスだけを挙げます。

```json
{
  "id": "m1.w1.d4.mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep the low E muted", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **6弦はミュート。** 低音Eが鳴ると音が濁ります。親指か人差し指の側面で軽く止めます。

- **シャッフルが伸びる。** 二小節を繰り返すうちに8分音符が均等になります。足でロング・ショートを踏み続けます。
- **二小節目で崩れる。** 一小節目だけに気を取られると後ろが崩れます。二小節を一塊で練習します。
- **ルートが途切れる。** 指の移動中に開放Aを逃します。5弦は常に鳴らしておきます。
- **録音の省略。** 一週間の結果は録音が証明します。短くても必ず残し、来週と比べます。
