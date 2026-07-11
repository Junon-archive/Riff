---
title: "16ビートコンピンググリッド + ミュートカッティング"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 16ビートコンピンググリッド + ミュートカッティング

## ① 理論・説明

7週目の初日です。今週ずっと作るのは **後ろに寝る16ビートコンピング** です。今日はその土台となる **16ビートグリッド** と **ミュートカッティング（「チッ」）** を身につけます。<mark>コードを「弾いて休む」ではなく、スタブの間を **音程のないカッティング** でびっしり埋めるのが核心です。</mark>

シグネチャーは **Dm9** 一つのコードです。5弦 **5フレット（R=D）** をルートに **b3（F）・b7（C）・9（E）** を重ねます。<mark>この四音が **Dm9** の染まった色です。</mark>スタブは短く切り、その隙間では左手の力を少し抜いて **ミュートカッティング** で「チッ」を入れます。

**ミュートカッティング** は音程がありません。弦を押さえず **軽く覆うだけ** にして、ピックがかすめると「チッ」という **ゴースト** 的な打音が出ます。<mark>スタブ（コード）とカッティング（チッ）が交互に出ると16ビートグリッドが埋まりグルーヴが生まれます。</mark>まず **Dm9** の手の形を目で覚えます。

```json
{
  "id": "m2.w7.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 comping grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ 5弦5フレット（R）にb3・b7・9を重ねたDm9コンピンググリップです。

## ② ビジュアル資料

では **16ビートコンピンググリッド** を見ます。**Dm9スタブ** と **ミュートカッティング（「チッ」）** がびっしり交互に入ります。<mark>スタブははっきり、カッティングは「チッ」と短く — この対比がグルーヴの心臓です。</mark>

```json
{
  "id": "m2.w7.d1.cutting_grid",
  "type": "tab",
  "meta": { "title": "16th comping grid with muted cutting", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** Dm9スタブとミュートカッティング（「チッ」）が16ビートでびっしり交互に。スタブは短く切り、カッティングは力を抜いてかすめます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** で **Dm9** スタブだけをきっちり弾きます。まだカッティングは入れず、まずコードの音をきれいに確かめます。<mark>四音が一度に鳴るか先に耳で聞きます。</mark>

**10〜20分 · 頭のトレーニング（カッティングをゆっくり）**
今度はスタブの間に **ミュートカッティング** を一つずつ挟みます。左手の力を少しだけ抜いて「チッ」を作ります。下の遅いグリッドで手を慣らします。

```json
{
  "id": "m2.w7.d1.cutting_slow",
  "type": "tab",
  "meta": { "title": "Slow cutting grid", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** スタブ → カッティング → カッティング → スタブの順にゆっくり。カッティングで左手の力を抜く感覚を身につけます。

**20〜40分 · 実践カッティンググリッド（BPM 72）**
上の16ビートグリッドを繰り返します。<mark>スタブとカッティングが途切れず転がればカッティンググルーヴが生きます。</mark>急がず、手首で16ビートを回し続けます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
録音して聞きます。カッティングが「チッ」と生きているか、スタブがつぶれていないか確かめます。

**今日の完了基準：** BPM 72でDm9スタブとミュートカッティングを16ビートで交互にし、カッティンググルーヴを途切れず転がせる。

## ④ ヒント / よくあるミス

カッティンググリッドでよく出るミスだけを挙げます。

```json
{
  "id": "m2.w7.d1.cut_check",
  "type": "tab",
  "meta": { "title": "Stab and cut check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```
▶ スタブ（コード）とカッティング（チッ）を一拍ずつ交互に大きく感じてみます。

- **カッティングが聞こえない。** 左手を完全に離さず、弦に軽く乗せたままピックでかすめます。
- **スタブがつぶれる。** 四音を同時に短く切り、すぐ力を抜いて次のカッティングに備えます。
- **16ビートがもたつく。** 手首の振りを止めず、カッティングの場所でもストロークを回し続けます。
- **速さから上げる。** BPM 60に下げてスタブ・カッティングの対比からはっきりさせます。
