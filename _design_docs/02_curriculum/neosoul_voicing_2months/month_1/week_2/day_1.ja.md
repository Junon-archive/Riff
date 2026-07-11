---
title: "9度の色 — add9とm9"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 9度の色：add9とm9

## ① 理論・説明

今週は色づけの始まりです。先週手に入れた **Dm9 → G13** ヴァンプ、その上に今日から **テンション** という絵の具を一滴ずつ落としていきます。最初の色は **9度** です。<mark>9度を一つ乗せるだけで、のっぺりしたコードがふわりとにじみます。</mark>**add9** は三和音に9度だけを足したもの、**m9** は7thコード（**b7** を含む）に9度を足したもの — 同じ9度でも、それを盛る器が違います。

Dマイナーでは **9度はE** です。**Dm(add9)** は R・b3・**9** だけが鳴る澄んだ音、ここに **b7（C）** を足すとすぐに **Dm9** になります。<mark>b7が入る瞬間、音は一段深く、ジャジーになります。</mark>二つのコードの違いはちょうど **b7一つ** だけだと、手と耳で覚えましょう。

今日の目標はシンプルです。<mark>**add9** と **m9** の9度の色を耳で聞き分けること。</mark>速さは要りません。二つのコードをゆっくり交互に鳴らし、9度が作るふわりとした色と、b7が加える深みを分けて聞いてみましょう。ではまず **Dm(add9)** のグリップを手に乗せましょう。

```json
{
  "id": "m1.w2.d1.dm_add9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm(add9) grip — no b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Dm(add9)** — R・b3・**9度** だけが鳴ります。**b7のない** 三和音＋9度です。

## ② ビジュアル資料

次にその上に **b7** を足して **Dm9** へ色づけします。<mark>指を一本（3弦5フレット）足しただけなのに、音の深みがガラッと変わります。</mark>9度（E）はそのまま、b7だけを埋めるのです。

```json
{
  "id": "m1.w2.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — add b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Dm9** = Dm(add9)に **b7**（3弦5フレット）だけを足したコードです。

二つのコードを並べて聞いてみましょう。<mark>1小節はadd9、2小節はm9 — 9度はそのままで、b7だけが行き来する音です。</mark>

```json
{
  "id": "m1.w2.d1.add9_vs_m9",
  "type": "tab",
  "meta": { "title": "Dm(add9) - Dm9", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 70。** 1小節add9、2小節に **b7** を足してm9。**9度（E）** は両小節とも生きています。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。Dm(add9)とDm9を交互に押さえて手を温めます。<mark>3弦の指一本を入れたり外したりする感覚を体に馴染ませます。</mark>

**10〜20分 · 頭のトレーニング（9度の色を分ける）**
音を出さず左手だけで二つのコードを行き来します。**b7（3弦）** 一つがあるかないかの違いをまず目で確認します。

**20〜40分 · 実践カラードリル（BPM 70）**
下の四小節を繰り返し、add9 → m9を二回行き来します。<mark>9度のふわりとした色の上にb7の深みが広がる瞬間</mark>を耳で追います。

```json
{
  "id": "m1.w2.d1.color_drill",
  "type": "tab",
  "meta": { "title": "add9 / m9 color drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 70。** add9 → m9を二回行き来し、**9度の色** がどう濃くなるかを聞きます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。add9とm9が別々の色に聞こえるか確認します。

**今日の完了基準：** Dm(add9)とDm9を交互に鳴らし、9度の色の違いを耳で聞き分けられる。

## ④ ヒント / よくあるミス

**9度** を扱うときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w2.d1.ninth_spot",
  "type": "fretboard_diagram",
  "meta": { "title": "The 9th (E) — string 2 fret 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ **9度（E）** は2弦5フレット。ルートから1オクターブ上の1音です。

- **9度が埋もれる。** 2弦5フレットがはっきり鳴ってこそ色が出ます。他の弦に隠れないよう指を少し立てて押さえます。
- **add9なのにb7が混じる。** 3弦をしっかりミュートすると純粋なadd9の音になります。
- **二つのコードが同じに聞こえる。** BPMを55に下げ、一コードずつ長く鳴らして耳を開きます。
- **手が痛い。** 小指（2弦）に力が集まったら、手首を少し下げて重さを分けます。
