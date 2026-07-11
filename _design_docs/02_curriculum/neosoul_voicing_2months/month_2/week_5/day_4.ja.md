---
title: "完成！ b3→3スミアリック — 半音がにじむ装飾（5週目完成）"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — 完成！ b3→3スミアリック（5週目完成）

## ① 理論・説明

5週目の最終日です。今週ずっと身につけた **スミア** を一つの **装飾リック** に完成させます。<mark>**b3（F）** から **3（F#）** へハンマリングしてにじませた後、**5度** と **b7** へ上行する短いリックです。</mark>

このリックは四音です。**b3→3** スミアで始まり、**5度（A）** を経て **b7（C）** へ流れ上がります。<mark>半音一つがリック全体にネオソウルの色を染めます。</mark>最初の二日のスミア、三日目のヴァンプ挿入がこの一行にすべて詰まっています。

今日の目標はこの **スミアリック** を **BPM 72** ではっきり完成させることです。<mark>速さではなく、半音がきれいににじみリックがなめらかに上行すれば5週目を終えたのです。</mark>まずリックが通る場所を目で覚えます。

```json
{
  "id": "m2.w5.d4.smear_review",
  "type": "fretboard_diagram",
  "meta": { "title": "Smear lick review", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 4弦3フレット（b3）→4フレット（緑の3度）のスミアの後、3弦2フレット（5）・5フレット（b7）へ上行します。

## ② ビジュアル資料

これが今週の完成物、**b3→3スミアリック** です。**b3** を弾き **3度** へ **ハンマリング** した後、**5度** と **b7** へにじむように上行します。<mark>緑の3度がリックの心臓で、その後ろに二音が流れて締めます。</mark>

```json
{
  "id": "m2.w5.d4.smear_lick",
  "type": "tab",
  "meta": { "title": "b3-to-3 smear lick", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** **b3（4弦3フレット=F）** を弾き **3度（4フレット=F#）へハンマリング** — 半音がにじむスミア。その後5度・b7へ流れます。この半音一つがネオソウルの色です。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** でリックの四音（**b3・3・5・b7**）を一つずつ押さえます。ハンマリングなしでまず音を確かめます。<mark>四音がはっきりつながるか先に耳で聞きます。</mark>

**10〜20分 · 頭のトレーニング（スミアリックをゆっくり）**
今度は **一度のピッキング** で **b3→3** のハンマリングを入れ、残りの二音で上行します。半音がぼやけたら左手の力を少し足します。

**20〜40分 · 実践スミアリック（BPM 72）**
下の二小節を繰り返します。1小節はスミアリック、2小節は **ルート（D）** に着地して休みます。<mark>リックが上行した後ルートへ楽に降りる流れを感じます。</mark>

```json
{
  "id": "m2.w5.d4.smear_lick_loop",
  "type": "tab",
  "meta": { "title": "Smear lick with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1小節スミアリック → 2小節ルート着地・休み。上行の後ルートへ降りて一息つきます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
スミアリックを録音して聞きます。一週間前、半音一つなかった音と今日のリックがどれだけにじむよう育ったか比べます。

**今日の完了基準：** BPM 72でb3→3スミアリック（スミア → 5度 → b7）を音が途切れず完成させ、ルートへ楽に着地できる。（5週目完成！）

## ④ ヒント / よくあるミス

スミアリックを完成させるときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w5.d4.smear_lick_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Smear lick path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 緑の3度がスミアの着地、3弦の5度・b7がリックの上行の道です。

- **スミアがぼやける。** 最初の指を離さず押さえたままハンマリングをしっかり入れます。
- **上行が急ぐ。** スミアの後の二音を急がず拍にはっきり置きます。
- **ルート着地が浮く。** 最後のルートは短く押さえ、余韻を残して楽に降ります。
- **速さから上げる。** BPM 60に下げて半音がきれいににじむリックから完成させます。
