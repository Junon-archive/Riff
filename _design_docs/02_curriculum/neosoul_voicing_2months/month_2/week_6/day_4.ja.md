---
title: "完成！ プルオフ下行グレースリック（6週目完成）"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — 完成！ プルオフ下行グレースリック（6週目完成）

## ① 理論・説明

6週目の最終日です。今週ずっと身につけた **グレースノート** と **プルオフ下行** を一つの **装飾リック** に完成させます。<mark>Dmの上を **プルオフ** で流れ下る下行装飾リックです。</mark>

このリックは四音です。3弦 **7フレット（R=D）** から **プルオフ** で **b7・5** を通り流れ下り、**b3（F）** へ着地します。<mark>ピッキングは最初の一音、残りは左手がするすると流します。</mark>今週の前音・下行がこの一行にすべて詰まっています。

今日の目標はこの **装飾リック** を **BPM 72** でなめらかに完成させることです。<mark>速さではなく、プルオフが途切れず続きリックが水のように流れ下れば6週目を終えたのです。</mark>まずリックが通る場所を目で覚えます。

```json
{
  "id": "m2.w6.d4.grace_lick_review",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace lick review", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ 3弦7フレット（R）から5・2フレットを通り、4弦3フレット（緑のb3）へ下行します。

## ② ビジュアル資料

これが今週の完成物、**プルオフ下行グレースリック** です。**R** から **プルオフ** で流れ下り **5度**・**b3** へ着地します。<mark>急がず、にじむように流せばネオソウルの「語る」感じが出ます。</mark>

```json
{
  "id": "m2.w6.d4.grace_lick",
  "type": "tab",
  "meta": { "title": "Pull-off descending ornament", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** 3弦7フレット（D）から **プルオフ** で流れ下り、5度・b3へ着地します。急がず、にじむように流します。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** でリックの四音（**R・b7・5・b3**）を一つずつピッキングします。プルオフなしでまず音を確かめます。<mark>四音が下行ではっきりつながるか先に耳で聞きます。</mark>

**10〜20分 · 頭のトレーニング（プルオフをゆっくり）**
今度は **最初の一音だけ** ピッキングし **プルオフ** で残りを流します。音が途切れたら左指を下へ引っかける感じを少し足します。

**20〜40分 · 実践装飾リック（BPM 72）**
下の二小節を繰り返します。1小節は装飾リック、2小節は **ルート（D）** に着地して休みます。<mark>リックが流れ下りた後ルートへ楽に降りる流れを感じます。</mark>

```json
{
  "id": "m2.w6.d4.grace_lick_loop",
  "type": "tab",
  "meta": { "title": "Grace lick with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1小節装飾リック → 2小節ルート着地・休み。流れ下りた後ルートへ降りて一息つきます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
装飾リックを録音して聞きます。6週間前、装飾一つなかった音と今日のリックがどれだけ表情豊かに育ったか比べます。

**今日の完了基準：** BPM 72でプルオフ下行グレースリック（R→b7→5→b3）を音が途切れず流し、ルートへ楽に着地できる。（6週目完成！）

## ④ ヒント / よくあるミス

装飾リックを完成させるときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w6.d4.grace_lick_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace lick path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ 3弦のb7・5度が下行の道、4弦の緑のb3がリックの着地です。

- **プルオフが弱い。** 指をただ離さず、弦を下へ軽く引っかけて次の音を鳴らします。
- **下行が急ぐ。** 四音を急がず拍に均等に流し下ろします。
- **b3の着地が浮く。** 最後のb3ははっきり押さえ、余韻を残して楽に降ります。
- **速さから上げる。** BPM 60に下げてプルオフが途切れずつながるリックから完成させます。
