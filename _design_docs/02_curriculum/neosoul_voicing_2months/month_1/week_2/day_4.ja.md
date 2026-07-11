---
title: "完成！ テンション・ヴァンプ — Dm9 → G13sus → G13"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 完成！ テンション版ヴァンプ

## ① 理論・説明

2週目の舞台です。先週ののっぺりした **Dm9 → G13** ヴァンプを、今週ずっと練習した **テンション** と **sus解決** で色づけして完成させます。<mark>同じ二小節なのに、テンション一つで色がガラッと変わるのを今日は手で確かめます。</mark>1小節は **Dm9**（9度のふわりとした色）、2小節は **G13sus4 → G13**（susの緊張が3度へ溶ける解決）です。

鍵は2小節の動きです。前2拍で **G13sus4**（4度=C）の少し浮いた緊張を聞かせ、後2拍で **G13**（3度=B）へ半音降ろします。<mark>3弦の指一本が5フレットから4フレットへすべるその瞬間が、このヴァンプの心臓です。</mark>今週学んだ9度・13度・sus解決が、この二小節にすべて詰まっています。

今日は速さより **色と解決** です。**BPM 75** でやさしく転がしつつ、susの緊張を十分に聞かせてから3度へ溶かします。<mark>テンション・ヴァンプが途切れず丸く転がれば、2週目は完成です。</mark>まず1小節 **Dm9** のグリップを手に乗せましょう。

```json
{
  "id": "m1.w2.d4.dm9_recap",
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
▶ **1小節はDm9。** 5弦5フレットのルート、2弦の **9度（E）** がふわりとした色を出します。

## ② ビジュアル資料

2小節は **G13sus4** で始まります。3弦5フレット（**4度=C**）が緊張を作り、すぐに4フレット（**3度=B**）へ溶けます。<mark>この一つのグリップに、今週の緊張と解決がすべて入っています。</mark>

```json
{
  "id": "m1.w2.d4.g13sus4_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "G13sus4 grip — bar 2 start", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "4", "role": "color" },
    { "string": 2, "fret": 5, "finger": 3, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **2小節の始まりはG13sus4。** 3弦5フレット（4度）からすぐに4フレット（3度）へ降りて落ち着きます。

さあ二小節を一つにつないだ **完成したテンション・ヴァンプ** です。今週の結果物が下にすべて詰まっています。<mark>1小節の9度の色、2小節のsus解決が一つの流れでつながります。</mark>

```json
{
  "id": "m1.w2.d4.tension_vamp",
  "type": "tab",
  "meta": { "title": "Dm9 - G13sus - G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** 2小節で **G13sus4**（3弦5フレット = 4度C）を先に弾き、**3度（3弦4フレット = B）へ半音降りて落ち着くと**、ネオソウル特有の溶ける解決が出ます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。Dm9とG13sus4 → G13を交互に押さえて手を温めます。<mark>3弦の指一本の半音移動をもう一度呼び戻します。</mark>

**10〜20分 · 頭のトレーニング（テンションの色を分ける）**
音を出さず左手だけでヴァンプを描きます。1小節の9度、2小節のsus4 → 3度の場所を目で確認します。

**20〜40分 · 実践テンション・ヴァンプ（BPM 75）**
下の四小節を**途切れず**繰り返します。<mark>susの緊張と3度の解決が毎周はっきり聞こえるか</mark>だけを見ます。

```json
{
  "id": "m1.w2.d4.tension_vamp_loop",
  "type": "tab",
  "meta": { "title": "Tension vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** テンション・ヴァンプを二周まわします。2小節ごとにsus4 → 3度の解決を逃さないように。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。先週ののっぺりしたヴァンプと今日のテンション・ヴァンプ、色がどれだけ変わったか比べます。

**今日の完了基準：** テンション・ヴァンプ（Dm9 → G13sus4 → G13）をBPM 75で途切れず繰り返し、sus4 → 3度の解決をはっきり聞かせられる。（2週目完成！）

## ④ ヒント / よくあるミス

**テンション・ヴァンプ** を転がすときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w2.d4.color_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Tension map — 9 / sus4 / 13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "label": "9 / 13", "role": "color" },
    { "string": 3, "fret": 5, "label": "4 (sus)", "role": "color" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ 2弦5フレットが色（9・13）、3弦5→4フレットがsus4→3度の解決です。

- **解決がのっぺりする。** sus4を前2拍で十分に鳴らしてから3度へ降ろすと甘く聞こえます。
- **1小節と2小節の色が分かれない。** 9度（Dm9）と13度・sus（G13）の場所を別々に覚えます。
- **速くすると汚くなる。** BPMを65に下げてまず清潔さを取り戻します。
- **ヴァンプが途切れる。** コードの間、小指のアンカー（2弦）を保てば自然につながります。
