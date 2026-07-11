---
title: "リハーサル — 止まらずフルランスルー"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — リハーサル：止まらず最後まで

## ① 理論・説明

三日目、今日は **リハーサル** です。二小節を **止まらず** 最初から最後まで回します。<mark>ミスしても止まらず次の拍へ進むのが今日のルールです。</mark>

リハーサルの核心は **流れ** です。正確さより **途切れない繰り返し** が先です。手がためらってもグルーヴは転がり続けなければなりません。<mark>完璧な一回より、止まらない十回が曲を完成させます。</mark>

一番危ない場所は **Dm9 → G13のつなぎ目** です。ここで手が遅れると流れが切れます。この場所を先に固めておくとランスルーが楽になります。<mark>つなぎ目が滑らかなら、二小節は無限に回ります。</mark>

```json
{
  "id": "m2.w8.d3.g13_lock",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip lock", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" }
  ]}
}
```
▶ ランスルーの前にG13の手の形をもう一度目に固定します。つなぎ目で遅れないように。

## ② ビジュアル資料

**止まらないフルランスルー** です。二小節を繰り返し回し、ミスしても次の拍へ流れます。<mark>ここで曲の胴体が完成します。</mark>

```json
{
  "id": "m2.w8.d3.full_runthrough",
  "type": "tab",
  "meta": { "title": "Full run-through", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72, スイング16.** 二小節を止まらず繰り返します。ミスしても手を止めず次の拍へ。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** で二小節を一度ゆっくりなぞります。<mark>昨日のチェンジとフィルを手にもう一度呼び起こします。</mark>

**10〜20分 · 頭のトレーニング（つなぎ目を固める）**
**つなぎ目** だけを離してDm9 → G13を何度も繰り返します。指が遅れないよう先に準備します。

**20〜40分 · 実践 フルランスルー（BPM 72）**
二小節を **止まらず** 繰り返します。下の定着ループのように、最後はDm9で寝かせて一息休みます。<mark>止まらず十回回れば、今日の目標に到着です。</mark>

```json
{
  "id": "m2.w8.d3.loop_settle",
  "type": "tab",
  "meta": { "title": "Run-through loop with settle", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72, スイング16.** 1小節ランスルー → 2小節Dm9で寝かせた後に休み。止まらない流れを体に刻みます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
録音して聞きます。止まった場所、ぶれたつなぎ目がどこだったか印を付けます。

**今日の完了基準：** BPM 72, スイング16で二小節を止まらず最初から最後までフルランスルーで回せる。

## ④ ヒント / よくあるミス

リハーサルでよく出るミスだけを挙げます。

```json
{
  "id": "m2.w8.d3.seam_check",
  "type": "tab",
  "meta": { "title": "Chord seam check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ Dm9 → G13のつなぎ目だけを半拍ずつ大きく。この場所を楽にします。

- **ミスすると止まる。** リハーサルのルールは一つ — 止まらない。間違えても次の拍へ。
- **つなぎ目で遅れる。** G13の形を先に準備し、チェンジで拍を逃さないようにします。
- **だんだん速くなる。** 乗ってくると急ぎます。足やメトロノームで拍をつかまえます。
- **完璧にこだわる。** 今日は流れが先です。仕上げは明日の録音でします。
