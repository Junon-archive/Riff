---
title: "グレースノートでコードに表情を — 短い前音が目標音へにじむ"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — グレースノートでコードに表情を

## ① 理論・説明

6週目です。今週のテーマは **グレースノート（前打音）** — 目標音のすぐ前につく、とても短い装飾音です。<mark>話し出す前にそっと漏れる短い息のように、**前音** を素早く流し込み **目標音** へにじませます。</mark>

今日のグレースノートは **b3（F）** を短くかすめ、すぐに **3（F#）** へ **ハンマリング** してにじませる一度の装飾です。ギターにはグレースノート専用の記号がないので、<mark>**短い前音＋ハンマリング** で近似します。</mark>前音は8分音符のように素早く、目標音は長く押さえます。

今日の目標はこのグレースノートを **BPM 72** で一度はっきり入れることです。<mark>速さではなく、短い前音が目標音へきれいににじめば今日の分は果たせたのです。</mark>まず手の置き場所を目で覚えます。

```json
{
  "id": "m2.w6.d1.grace_position",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace note hand position", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ 4弦3フレット（b3）・4フレット（緑の3度）がグレースノートの場所、3弦2フレットが続く5度です。

## ② ビジュアル資料

これが今日のグレースノートです。**b3** を短く弾き **3度** へ **ハンマリング** して、短い前音を目標音へにじませます。<mark>前音はかすめるように短く、目標音は長く響かせて表情を残します。</mark>

```json
{
  "id": "m2.w6.d1.grace_note",
  "type": "tab",
  "meta": { "title": "Grace note into the 3rd", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** **b3（4弦3フレット）** を短く弾き **3度（4フレット）へハンマリング** — グレースノート。その後5度へ流れて一拍休みます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** でグレースノートの二音（**b3・3**）を一つずつ押さえます。ハンマリングなしでまず音を確かめます。<mark>二音が半音差ではっきり聞こえるか先に耳で確かめます。</mark>

**10〜20分 · 頭のトレーニング（グレースノートをゆっくり）**
今度は **一度のピッキング** で **b3→3** のハンマリングを入れます。前音が長くなりすぎないよう、目標音が主役になるよう素早く流します。

**20〜40分 · 実践グレースノート（BPM 72）**
下の二小節を繰り返します。1小節はグレースノート、2小節は **ルート（D）** に着地して休みます。<mark>グレースノートを入れた後ルートへ楽に降りる流れを感じます。</mark>

```json
{
  "id": "m2.w6.d1.grace_note_loop",
  "type": "tab",
  "meta": { "title": "Grace note with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1小節グレースノート → 2小節ルート着地・休み。装飾の後ルートへ降りて一息つきます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
グレースノートを録音して聞きます。前音のないのっぺりした音と今日の装飾がどれだけ違うか比べます。

**今日の完了基準：** BPM 72でb3→3グレースノートを一度はっきり入れ、ルートへ楽に着地できる。

## ④ ヒント / よくあるミス

グレースノートを入れるときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w6.d1.grace_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace note path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 4弦3フレット（b3）から4フレット（緑の3度）へグレースノートがにじみます。

- **前音が長すぎる。** 前音はかすめるように短く流し、目標音を長く押さえます。
- **ハンマリングが弱い。** 左指を目標フレットにしっかり落としてにじませます。
- **音が途切れる。** 前音を弾いた指を離さず、そのままハンマリングします。
- **速さから上げる。** BPM 60に下げてグレースノートがきれいににじむことから完成させます。
