---
title: "コードに装飾を乗せる — 前音一つで表情あるDm9"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — コードに装飾を乗せる

## ① 理論・説明

三日目です。今日は一音ではなく **Dm9コード全体に装飾を乗せます**。<mark>コードを鳴らす直前、いちばん低い **ベース音** の前に短い **前音** を入れ、コードが「語るように」登場させます。</mark>

ベースで **b7（C）** を短く弾き **ルート（D）** へ **ハンマリング** した瞬間、上に積まれた **b3・b7・9** が一緒に鳴ります。<mark>いちばん低い音が前打音として滑り込むと、同じコードでも表情がぐっと生きます。</mark>前音は短く、コードは長く押さえて余韻を残します。

今日の目標はこの **装飾コード** を **BPM 72** で表情豊かに鳴らすことです。<mark>速さではなく、前音がベースへきれいににじみコードが一緒に鳴れば今日の分は果たせたのです。</mark>まずコードグリップと前音の場所を目で覚えます。

```json
{
  "id": "m2.w6.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip with bass grace note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 3, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ 5弦3フレット（前音b7）→5フレット（ルート）、その上の4・3・2弦がb3・b7・9 — Dm9グリップです。

## ② ビジュアル資料

これが装飾を乗せた **Dm9** コードです。ベース **b7** を短く弾き **ルートへハンマリング** すると、その上の **b3・b7・9** が一度に鳴ります。<mark>いちばん低い声部の前打音一つがコード全体に表情を塗ります。</mark>

```json
{
  "id": "m2.w6.d3.chord_ornament",
  "type": "tab",
  "meta": { "title": "Grace into Dm9 chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "half", "dotted": true, "isRoot": true, "role": "root", "technique": "hammer_on", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 5弦 **3フレット（b7）** を短く弾き **5フレット（ルート）へハンマリング** — その瞬間、上の三音が一緒に鳴り **Dm9** が表情豊かに登場します。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** で **Dm9** コードを前音なしではっきり鳴らします。四音（**R・b3・b7・9**）が均等に鳴るか確かめます。<mark>装飾を乗せる前に、コードの音がきれいに鳴るか耳で聞きます。</mark>

**10〜20分 · 頭のトレーニング（前音をゆっくり）**
今度はベース **b7→ルート** のハンマリングを入れます。**前音** が長くなりすぎないよう、コードがすぐ続いて鳴るよう素早く滑らせます。

**20〜40分 · 実践装飾コード（BPM 72）**
下の二小節を繰り返します。1小節は装飾を乗せたコード、2小節は同じ **Dm9** を素直に鳴らして比べます。<mark>前音のあるコードとないコードの表情の違いを感じます。</mark>

```json
{
  "id": "m2.w6.d3.chord_ornament_loop",
  "type": "tab",
  "meta": { "title": "Ornamented vs plain Dm9", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "half", "dotted": true, "isRoot": true, "role": "root", "technique": "hammer_on", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "isRoot": true, "role": "root", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1小節装飾コード → 2小節素直なDm9。前音一つの表情の違いを感じます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
二つのコードを並べて録音し聞きます。前音一つでコードの表情がどれだけ変わるか比べます。

**今日の完了基準：** BPM 72でベース前音（b7→ルート）を入れてDm9コードを表情豊かに鳴らし、素直なコードと区別して弾ける。

## ④ ヒント / よくあるミス

コードに装飾を乗せるときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w6.d3.dm9_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 ornament map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 3, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ 5弦の前音（b7）からルートへ、その上の三音がDm9の色です。

- **前音だけ大きく鳴る。** 前音は短くかすめ、コードが主役になるよう一緒に鳴らします。
- **コードがばらける。** ハンマリングの瞬間、上の三本の指を先にコードの形で押さえておきます。
- **ベースが埋もれる。** いちばん低い弦をはっきり鳴らして前音を聞こえるようにします。
- **速さから上げる。** BPM 60に下げて前音とコードが一緒にきれいに鳴ることから完成させます。
