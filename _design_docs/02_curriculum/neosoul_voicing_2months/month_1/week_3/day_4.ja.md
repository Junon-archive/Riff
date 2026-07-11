---
title: "完成！ クロマチック・アプローチ・ヴァンプ — Dm9 → Ab13 → G13"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 完成！ クロマチック・アプローチ・ヴァンプ

## ① 理論・説明

3週目の舞台です。今週ずっと練習した **半音上のアプローチ** と **スライド** を、シグネチャー・ヴァンプに注いで完成させます。<mark>同じDm9 → G13なのに、半音上からすべり込む一手で、すっかりネオソウルらしくなるのを今日は手で確かめます。</mark>1小節はホームコード **Dm9**、2小節は **Ab13 → G13** クロマチック・アプローチです。

鍵は2小節です。目標 **G13** の半音上 **Ab13** を短く押さえてから、半音下へすべって着地します。<mark>このクロマチック一つが、のっぺりした進行をなめらかな流れに変えます。</mark>今週学んだアプローチコード・スライド・挿入が、この二小節にすべて詰まっています。

今日は速さより **すべりと着地** です。**BPM 75** でやさしく転がしつつ、アプローチを短く押さえて目標へ溶かします。<mark>クロマチック・アプローチ・ヴァンプが途切れず丸く転がれば、3週目は完成です。</mark>まず1小節 **Dm9** から手に乗せます。

```json
{
  "id": "m1.w3.d4.dm9_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — bar 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **1小節はDm9。** 5弦5フレットのルート、2弦の9度がふわりとした色を出します。

## ② ビジュアル資料

2小節の主役は **アプローチコードAb13** です。目標G13のちょうど半音上、6弦 **4フレット** に乗せてから、すぐにすべり降ります。<mark>この一つのグリップが、今週のシグネチャーの出発点です。</mark>

```json
{
  "id": "m1.w3.d4.ab13_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — bar 2 start", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **アプローチコードAb13。** 6弦4フレットのルート、半音下へ押す準備をします。

さあ二小節を一つにつないだ **完成したクロマチック・アプローチ・ヴァンプ** です。今週の結果物が下にすべて詰まっています。<mark>1小節の安定、2小節のすべる着地が一つの流れでつながります。</mark>

```json
{
  "id": "m1.w3.d4.chromatic_approach",
  "type": "tab",
  "meta": { "title": "Dm9 - Ab13 to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** 2小節で **Ab13**（6弦4フレット）を短く押さえ、**半音下のG13**（3フレット）へスライドするように押し下げます。すべる着地がネオソウルの味。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 65。** Dm9とAb13 → G13スライドを交互に押さえて手を温めます。<mark>2小節の半音スライドをもう一度呼び戻します。</mark>

**10〜20分 · 頭のトレーニング（アプローチの場所確認）**
音を出さず左手だけでヴァンプを描きます。1小節の **Dm9**、2小節の **Ab13 → G13** アプローチの場所を目で確認します。

**20〜40分 · 実践クロマチック・アプローチ・ヴァンプ（BPM 75）**
下の四小節を **途切れず** 繰り返します。<mark>2小節ごとにすべる着地がはっきり聞こえるか</mark>だけを見ます。

```json
{
  "id": "m1.w3.d4.chromatic_approach_loop",
  "type": "tab",
  "meta": { "title": "Chromatic approach vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** クロマチック・アプローチ・ヴァンプを二周まわします。2小節ごとにスライド着地を逃さないように。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。1週目ののっぺりしたヴァンプと今日のクロマチック・アプローチ・ヴァンプ、流れがどれだけ変わったか比べます。

**今日の完了基準：** クロマチック・アプローチ・ヴァンプ（Dm9 → Ab13 → G13）をBPM 75で途切れず繰り返し、2小節のスライド着地をはっきり聞かせられる。（3週目完成！）

## ④ ヒント / よくあるミス

**クロマチック・アプローチ・ヴァンプ** を転がすときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w3.d4.color_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Approach map — Ab13 to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 6, "label": "Ab 13", "role": "color" },
    { "string": 2, "fret": 5, "label": "G 13", "role": "color" },
    { "string": 3, "fret": 5, "label": "Ab 3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "G 3", "role": "chord_tone" }
  ]}
}
```
▶ 2弦6→5フレットがAb→Gの13度、3弦5→4フレットが各コードの3度です。

- **アプローチが長い。** Ab13は前2拍だけ短く。長く引きずるとすべりでなくコード交換に聞こえます。
- **着地がのっぺりする。** スライドで指を付けたまま押してこそ、二つのコードが一本の線でつながります。
- **1小節で遅れる。** Dm9の終わりにあらかじめ6弦へ手を移せば2小節が遅れません。
- **速くすると汚くなる。** BPMを65に下げてまずすべりを取り戻します。
