---
title: "二つの音にスミア — 3度・6度ダブルストップをにじませる"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 二つの音にスミア（ダブルストップ）

## ① 理論・説明

昨日は一音でスミアを鳴らしました。今日は二音を一緒に押さえる **ダブルストップ（double-stop）** にスミアを乗せます。<mark>一音はじっと押さえたまま、もう一音だけを **b3→3** に押し上げると、二音が一緒ににじみます。</mark>

まず **3度ダブルストップ** です。**4弦** の **b3（F）** と **3弦** の **5度（A）** を一緒に押さえます。二音は **3度** の間隔です。**5度** はそのままに、**4弦** だけを **ハンマリング** でF#へ上げます。<mark>低い音がにじむ間、上の音は錨のように位置を守ります。</mark>

今日の目標は **ダブルストップスミア** 一つです。**BPM 72** でゆっくり、二音が一緒に鳴りながら一音だけ半音上がる音を聞きます。<mark>二音のバランスが生きると、ネオソウル特有の分厚い色が出ます。</mark>まず手の形を覚えます。

```json
{
  "id": "m2.w5.d2.third_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "3rd double-stop with smear", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **3度ダブルストップ。** 4弦3フレット（b3）と3弦2フレット（5）を一緒に、4弦だけを緑の4フレット（3度）へハンマリングします。

## ② ビジュアル資料

今度は **6度ダブルストップ** です。**4弦** の **b3（F）** と **2弦** の **ルート（D）** を一緒に押さえ、真ん中の **3弦** は飛ばします。<mark>弦を一つ飛ばした6度は音が一気に広がり、ネオソウルで特に愛されます。</mark>

```json
{
  "id": "m2.w5.d2.sixth_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "6th double-stop with smear", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 3, "label": "R", "role": "chord_tone" }
  ]}
}
```
▶ **6度ダブルストップ。** 4弦3フレット（b3）と2弦3フレット（ルート）を一緒に、3弦はミュート、4弦だけを緑の4フレット（3度）へハンマリングします。

では二つの手の形を音でつなぎます。**3度** で一回、**6度** で一回スミアします。<mark>どちらの小節も下の二音は一緒に鳴り、一音だけが緑の3度へにじみます。</mark>

```json
{
  "id": "m2.w5.d2.doublestop_smear",
  "type": "tab",
  "meta": { "title": "Double-stop smear (3rd & 6th)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 2, "fret": 3, "duration": "half", "label": "R", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 72.** 1小節は **3度** ダブルストップ、2小節は **6度** ダブルストップ。上の音は置いて、下の音だけ半音にじませます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** で二つの手の形を音を出さず押さえます。**3度** は4・3弦、**6度** は4・2弦（3弦ミュート）です。<mark>まず二音がきれいに同時に鳴るかから確認します。</mark>

**10〜20分 · 頭のトレーニング（ハンマースミアをゆっくり）**
下の音は押さえたまま、**一本の指** だけを **ハンマリング** で半音上げます。上の音が引っ張られて揺れたら力が漏れています。各指の力を別々に感じます。

**20〜40分 · 実践ダブルストップスミア（BPM 72）**
下の二小節を繰り返し、**3度** と **6度** のスミアを交互にします。<mark>各小節で上の音が揺れないかだけを見ます。</mark>

```json
{
  "id": "m2.w5.d2.doublestop_loop",
  "type": "tab",
  "meta": { "title": "Double-stop smear loop x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 2, "fret": 3, "duration": "half", "label": "R", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 72.** 3度 → 6度のダブルストップスミアを二周まわします。上の音は錨、下の音だけにじませます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
二つのダブルストップスミアを録音して聞きます。二音が一緒に鳴るか、上の音が揺れないか確認します。

**今日の完了基準：** BPM 72で3度・6度のダブルストップスミアをそれぞれ一回、上の音が揺れずに鳴らせる。

## ④ ヒント / よくあるミス

ダブルストップスミアでよく出るミスだけを挙げます。

```json
{
  "id": "m2.w5.d2.doublestop_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Double-stop landing map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "R", "role": "chord_tone" }
  ]}
}
```
▶ 緑の点（4弦の3度）が二つのダブルストップが一緒に着地する場所です。3弦5度と2弦ルートが一緒に鳴る錨です。

- **上の音が引っ張られて上がる。** 下の音を押さえる指は位置を守り、ハンマリングの指だけ動かします。
- **6度で3弦が鳴る。** 飛ばす3弦は軽く触れてミュートします。
- **二音が別々に鳴る。** 二音をまったく同じ瞬間にピッキングすればダブルストップが一つに聞こえます。
- **速さから上げる。** BPM 60に下げて二音のバランスからつくります。
