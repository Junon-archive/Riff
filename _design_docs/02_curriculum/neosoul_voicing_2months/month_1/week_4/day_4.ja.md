---
title: "完成！ トップノートメロディ・ヴァンプ — Dm9 · G13の上に歌を乗せる（M1修了）"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 完成！ トップノートメロディ・ヴァンプ（M1修了）

## ① 理論・説明

ついに4週目の最終日、**M1修了** です。一か月前、初めて **コアグリップ** を手に乗せた日を思い出します。そこから **テンション** でコードを染め、**クロマチック** ですべり、今週は **トップノート** でコードの上にメロディを乗せました。<mark>今日はその四歩を一つのヴァンプに集めて、M1の完成物を作ります。</mark>

完成物はコードメロディです。**Dm9** と **G13** を1拍に敷き、その上の **トップノートメロディ** を歌のように動かします。Dm9の上ではトップラインが **5→b7→ルート**、G13の上では **3→5→3** と歩きます。<mark>コードは最小の背景に、耳と手は緑のトップノートを追います。</mark>

今日は速さではなく **一か月の実り** を確かめる日です。**BPM 72** でゆっくり転がし、コードの上を歌が流れるか聞きます。<mark>トップノートメロディ・ヴァンプが途切れず丸く回れば、ネオソウルのコードメロディの第一歩を踏み出したのです。</mark>まずホームコード **Dm9** から乗せます。

```json
{
  "id": "m1.w4.d4.dm9_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 with top note — bar 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" },
    { "string": 1, "fret": 5, "label": "5", "role": "target", "highlight": true }
  ]}
}
```
▶ **1小節はDm9。** コードを敷いて1弦5フレット（緑の5度）からトップラインが出発します。

## ② ビジュアル資料

2小節は **G13** です。コードを敷いて1弦 **7フレット（3度）** からトップラインが始まります。<mark>Dm9の5度ラインとG13の3度ラインがつながると、二小節が一つの歌になって流れます。</mark>

```json
{
  "id": "m1.w4.d4.g13_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 with top note — bar 2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" },
    { "string": 1, "fret": 7, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **2小節はG13。** コードを敷いて1弦7フレット（緑の3度）からトップラインが始まります。

さあ二小節を一つにつないだ **M1の完成物、トップノートメロディ・ヴァンプ** です。一か月の旅がこの二小節にすべて詰まっています。<mark>コードは最小、緑のトップノートが歌のように歩くのが今日の主役です。</mark>

```json
{
  "id": "m1.w4.d4.top_note_melody",
  "type": "tab",
  "meta": { "title": "Vamp with top-note melody", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 코드를 1박에 깔고, 1번줄에서 **탑노트 멜로디(초록)**를 노래하듯 움직여요. 코드는 최소로만, 귀는 탑 라인을 따라가요.

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 65。** Dm9とG13を押さえ、1弦のトップライン（5・8・10、7・10・7）をゆっくりなぞります。<mark>コードを敷いた手の上でトップノートがはっきりつながるか確認します。</mark>

**10〜20分 · 頭のトレーニング（トップラインを描く）**
音を出さず二つのコードを行き来し、各小節の1弦 **トップノート** がどこへ歩くかを目で描きます。

**20〜40分 · 実践トップノートメロディ・ヴァンプ（BPM 72）**
下の四小節を **途切れず** 繰り返します。<mark>コードの上を緑のトップラインが歌のように歩くか</mark>だけを見ます。

```json
{
  "id": "m1.w4.d4.top_note_melody_loop",
  "type": "tab",
  "meta": { "title": "Top-note melody vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72。** トップノートメロディ・ヴァンプを二周まわします。コードは最小に、緑のトップラインを歌わせます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。一か月前コアグリップだけを押さえた音と今日のトップノートメロディ・ヴァンプ、どれだけ歌のように育ったか比べます。

**今日の完了基準：** トップノートメロディ・ヴァンプ（Dm9・G13 + 緑のトップライン）をBPM 72で途切れず繰り返し、コードの上を歩くメロディを聞かせられる。（M1修了！）

## ④ ヒント / よくあるミス

**トップノートメロディ・ヴァンプ** を転がすときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w4.d4.top_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Top-note melody map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 5, "label": "Dm9 5", "role": "target", "highlight": true },
    { "string": 1, "fret": 8, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 10, "label": "R", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "label": "G13 3", "role": "target", "highlight": true }
  ]}
}
```
▶ 1弦5・10・7フレット（緑）がトップラインの着地、8フレットはその間をつなぐ経過音です。

- **コードに力が全部乗る。** コードは背景です。1弦のトップノートを少しはっきり鳴らして歌を前に出します。
- **トップノートを動かすうちコードが切れる。** コードの指は押さえたまま、1弦を押さえる指だけ歩かせます。
- **拍がもたつく。** コードを1拍に短く敷いてすぐトップノートへ移れば後がもたつきません。
- **速さから上げる。** M1の実りは歌う流れです。BPM 65に下げてまずトップラインをはっきりさせます。
