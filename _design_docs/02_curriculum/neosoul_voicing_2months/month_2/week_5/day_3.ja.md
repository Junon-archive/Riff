---
title: "コードの間に装飾リック — ヴァンプにスミアを挟む"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — コードの間に装飾リック

## ① 理論・説明

この二日でスミアを身につけました。今日はそのスミアを **ヴァンプ** の中へ連れてきます。シグネチャーヴァンプは **Dm9→G13** です。<mark>コードを1拍に敷き、残りの拍に **スミア装飾リック** を挟み込むと、コードの間が絵の具のようににじみます。</mark>

方法は簡単です。各小節、**1拍** にコードを短く弾き、**2〜4拍** に昨日まで身につけた **b3→3** スミアリックをつなぎます。<mark>コードは背景、装飾リックがその上を満たす声です。</mark>Dm9の上では **b3→3→5**、G13の上では **b3→3→b7** と流れます。

今日の目標は **ヴァンプに装飾一行** です。**BPM 72** でゆっくり、コードと装飾が一息でつながるか聞きます。<mark>コードから装飾へ手がなめらかに移れば今日は成功です。</mark>まずホームコードDm9をもう一度乗せます。

```json
{
  "id": "m2.w5.d3.dm9_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 vamp home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" },
    { "string": 1, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **1小節ホームコードDm9。** 5弦ルートでコードを敷き、すぐ4弦でスミアリックを始めます。

## ② ビジュアル資料

ではコードと装飾をつなぎます。**1拍** に **Dm9** を弾き、**2拍** から **b3→3** スミアへ移り **5度** へ流れます。次の小節は **G13** を弾き、同じスミアで **b7** まで流れます。<mark>コードは短く、緑の3度へにじむ装飾がその後ろで歌います。</mark>

```json
{
  "id": "m2.w5.d3.vamp_ornament",
  "type": "tab",
  "meta": { "title": "Vamp with smear ornament", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** 1拍コード → 2〜4拍スミア装飾。リックはDm9の上で **5度**、G13の上で **b7** へ流れます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** でコードだけ二つ（**Dm9**・**G13**）を交互に弾きます。1拍で短く弾いて手を離し、次のコードを準備します。<mark>コードが短くはっきり切れる感じから覚えます。</mark>

**10〜20分 · 頭のトレーニング（スミアをつなぐ）**
音を出さずコードを押さえ、その手から **b3→3** スミアへ移る動線を描きます。コードの指とスミアの指が重なる地点を探します。

**20〜40分 · 実践ヴァンプ装飾（BPM 72）**
下の四小節を途切れず繰り返します。コード一回、スミア一回ずつです。<mark>コードから装飾へ移るとき拍がもたつかないかだけを見ます。</mark>

```json
{
  "id": "m2.w5.d3.vamp_ornament_loop",
  "type": "tab",
  "meta": { "title": "Vamp with ornament x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** ヴァンプ二周。コードは1拍短く、残りの拍はスミア装飾が満たします。

**40〜50分 · 録音／セルフフィードバック（推奨）**
ヴァンプ四小節を録音して聞きます。コードと装飾が一つの流れに聞こえるか、拍がもたつかないか確認します。

**今日の完了基準：** BPM 72でDm9・G13ヴァンプにb3→3スミア装飾を挟み、コードと装飾を一つの流れで繰り返せる。

## ④ ヒント / よくあるミス

ヴァンプに装飾を挟むときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w5.d3.ornament_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament insert map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```
▶ コードを弾いた後4弦でスミア（緑の3度）へ移り、Dm9は5度・G13はb7へ流れます。

- **コードが長すぎる。** コードは1拍だけ短く、すぐ装飾へ移ります。
- **装飾で拍がもたつく。** スミアを急がず、拍にきっちり合わせてはっきり置きます。
- **コードの指が全部ほどける。** 装飾へ移るとき必要な指だけ動かし、残りはゆったり置いておきます。
- **速さから上げる。** BPM 60に下げてコード→装飾の動線からなめらかにします。
