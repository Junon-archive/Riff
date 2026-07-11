---
title: "曲の構造 — Dm9コンピング＋G13＋スミアフィル（2小節）"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 曲の構造：二小節に広げる

## ① 理論・説明

二日目です。昨日の一小節を **曲の構造** に広げます。ネオソウルのシグネチャーヴァンプ **Dm9 → G13** を二小節につなぎます。<mark>1小節はDm9コンピング、2小節はG13にスミアフィルを付けて締めます。</mark>

**G13** は6弦3フレットのルートにb7・3・13を重ねた手の形です。Dm9とは **手の位置が違います** — この移動が今日の関門です。<mark>二つのコードが滑らかにつながると、曲が流れ始めます。</mark>

2小節の終わりは **b3→3スミアフィル** で閉じます。G13の余韻の上を滑る一本の線が、二小節を一つに束ねます。<mark>フィルが次の繰り返しの扉を開けてくれます。</mark>

```json
{
  "id": "m2.w8.d2.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" }
  ]}
}
```
▶ 6弦3フレット（R）にb7・3・13を重ねたG13コンピンググリップです。

## ② ビジュアル資料

**Dm9コンピング＋G13＋スミアフィル**、完成する曲の二小節の構造です。<mark>1小節で寝かせ、2小節で染めて滑ります。</mark>

```json
{
  "id": "m2.w8.d2.two_bar_form",
  "type": "tab",
  "meta": { "title": "Two-bar song form", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
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
▶ **BPM 72, スイング16.** 1小節Dm9レイバックコンピング → 2小節G13の後 **b3→3スミアフィル**。二小節が一つの曲のようにつながります。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** でDm9と **G13** を交互に押さえます。<mark>二つの手の形の移動を体に先に覚えさせます。</mark>

**10〜20分 · 頭のトレーニング（コードチェンジ）**
**Dm9 → G13** の移動だけを離してゆっくり繰り返します。指が次の場所を先に準備するようにします。

**20〜40分 · 実践 二小節（BPM 72）**
上の **二小節の構造** を繰り返します。下の移動ドリルでコードチェンジを固めてからつなぎます。<mark>チェンジで拍がぶれなければ、構造が立ちました。</mark>

```json
{
  "id": "m2.w8.d2.transition_drill",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 transition drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** Dm9 ↔ G13の移動を一拍ずつ大きく。指が次の場所を先に押さえます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
録音して聞きます。二小節が途切れず一つの曲のように流れるか確認します。

**今日の完了基準：** BPM 72, スイング16でDm9 → G13のチェンジとb3→3スミアフィルまで、二小節の曲の構造を途切れずつなげられる。

## ④ ヒント / よくあるミス

二小節をつなぐときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w8.d2.fill_check",
  "type": "tab",
  "meta": { "title": "Smear fill check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ スミアフィルだけを離し、b3→3→5→b7の一本の線をゆっくり描きます。

- **チェンジで崩れる。** コードが変わる場所で拍がぶれやすいです。移動の場所を体に馴染ませます。
- **フィルがつぶれる。** b3→3→5→b7をはっきり引き、小節を開く扉のように開けます。
- **G13の低い弦が漏れる。** 6弦のルートだけをはっきり、使わない弦は軽くミュートします。
- **速さから上げる。** BPM 60でチェンジとフィルを固めてから72に上げます。
