---
title: "別キーへ移す — II-V-Iは丸ごと動くパターン"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 同じ手の形を2フレット上へ：DキーII-V-I

## ① 理論・説明

昨日までCキーのII-V-I（Dm7-G7-Cmaj7）を1区域でつなぎました。今日のポイントはワクワクします：**その手の形を丸ごと数フレット動かせば、別キーのII-V-Iになる。**

Cを全音（2フレット）上へ押すと**Dキー**になります：

- **Em7 (ii)** — 5弦ルート、7フレット。（CのDm7を2フレット上へ）
- **A7 (V)** — 6弦ルート、5フレット。（CのG7を2フレット上へ）
- **Dmaj7 (I)** — 5弦ルート、5フレット。（CのCmaj7を2フレット上へ）

指の形は1つも変わりません。ルート弦交差（5・6・5）も、ガイドトーンが半音ずつ動くのも同じ。**形を暗記したのではなく「パターン」を学んだから**、12キーどこへでも動かせるんです。これがインターバルでコードを学んだ人の特権です。

## ② ビジュアル

DキーII-V-Iの3コード。Cから2フレット上へずれただけで、配置と緑（ガイドトーン）の位置関係は完全に同じです。

```json
{
  "id": "m1.w3.d3.em7",
  "type": "fretboard_diagram",
  "meta": { "title": "Em7 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w3.d3.a7",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

```json
{
  "id": "m1.w3.d3.dmaj7",
  "type": "fretboard_diagram",
  "meta": { "title": "Dmaj7 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 7, "finger": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — Dキー・ガイドトーン・ライン。** 3弦でEm7の7度（D）→ A7の3度（C#）→ Dmaj7の7度（C#）。**7→6→6フレット。** Cの5→4→4と全く同じ形が2フレット上へずれただけ。

```json
{
  "id": "m1.w3.d3.guide_tone_line_d",
  "type": "tab",
  "meta": { "title": "Guide-tone line (D key ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 7, "duration": "whole", "label": "Em7-b7(D)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 6, "duration": "whole", "label": "A7-3(C#)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 6, "duration": "whole", "label": "Dmaj7-7(C#)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66。** 3弦7→6→6。Cと全く同じ動き、2フレット上。「パターンは動く」を手で。4回反復。

**例2 — DキーII-V-Iコンピング。** ルートが5・6・5（7・5・5フレット）を行き来。3コードをストローク。手の形はCと同じ。

```json
{
  "id": "m1.w3.d3.ii_v_i_comp_d",
  "type": "tab",
  "meta": { "title": "ii-V-I comp (D key) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 74。** Dキーでも手は1区域（5〜9フレット）に縛られています。Cで学んだ感覚そのまま。4回反復。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Em7 → A7 → Dmaj7 を順番に。Cと手の形が同じだと感じながら音チェック。

**10〜20分 · 脳トレ（今日のターゲット＝パターン移動）**
CキーII-V-I（3フレット区域）とDキー（5フレット区域）を交互に押さえます。**手の形は1つ、位置が2フレット差。** 目を閉じて2キーを行き来できれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 70〜80 BPM）**
**例2（Dキー）をBPM 74で4回反復。** 続けてCキーとDキーを交互に循環し「同じパターン別の場所」を体に刻みます。よければFキー（1フレット）やGキー（3フレット上）へも。

**40〜50分 · 録音・セルフフィードバック（推奨）**
Cキー・DキーのII-V-Iをそれぞれ15秒録音。チェック：2キーで手の移動感覚が同じか、切替が滑らかか。

**今日の完了基準：** Cキーの手の形を2フレット上へ動かしてDキーII-V-Iを循環し、「パターンは移動可能」を理解する。

## ④ ヒント / よくあるミス

- **キーごとに覚え直そうとする。** II-V-Iは1つの手の形。ルートを望むフレットに置けばそのキーのII-V-I。12キーを別々に覚える必要はありません。
- **高フレットのミュートが甘い。** 5〜9フレットは間隔が狭く指が密集。6弦ミュート（5弦コード）をより意識。
- **ルート位置の勘違い。** V（A7）は6弦ルート、ii・Iは5弦ルート。ルート弦を混同すると場所がずれます。
- **速度への欲。** 新しい区域が不慣れでも66〜74で正確に。慣れれば自然に速くなります。
