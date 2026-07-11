---
title: "11度と13度 — テンションの屋根"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 11度と13度：テンションの屋根

## ① 理論・説明

昨日は9度で色づけしました。今日はさらに高く登って **11度** と **13度** に出会います。9・11・13はコードの上に積む **テンションの屋根** です。<mark>同じコードでも、屋根にどのテンションを乗せるかで色がまるで変わります。</mark>**11度** は4度を1オクターブ上げた音、**13度** は6度を1オクターブ上げた音です。Dmでは **11度はG**、Gコードでは **13度はE** です。

今日の主役は **13度** です。先週手に馴染ませた **G13** の屋根には、すでに13度（E）が乗っていました。<mark>のっぺりしたG7に13度を一つ乗せるだけで、温かく開けた音へパッと広がります。</mark>だから今日は **G7 → G13** を並べて鳴らし、13度が加わると音がどう広がるかを耳でつかみます。

**11度** はDm側で軽く味見だけします。**Dm11** はDm9の屋根を11度（G）に変えた音で、もう少し広く開放的な色をくれます。今日は欲張らず、<mark>13度の開けた色をはっきり聞き分けること</mark>に集中します。まず **Dm11** のグリップで11度の位置を目に焼きつけましょう。

```json
{
  "id": "m1.w2.d2.dm11_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm11 grip — 11th on top", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 3, "finger": 2, "label": "11", "role": "color" }
  ]}
}
```
▶ **Dm11** — 屋根に **11度（G）** を乗せました。1弦3フレット、4度をオクターブ上げた音です。

## ② ビジュアル資料

さて今日の主役 **G13** をもう一度見ます。屋根に乗った **13度（E）** がこのコードの開けた色を作ります。<mark>2弦5フレット一つが、Gコードを大きく開いてくれます。</mark>

```json
{
  "id": "m1.w2.d2.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 13th on top", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13** — R・b7・3に **13度（E）** を屋根として乗せた音です。

13度の色をしっかり感じるには、13度のない **G7** と並べて聞くのが一番です。<mark>2小節で13度が入る瞬間、音が一回り広がるのが聞こえます。</mark>

```json
{
  "id": "m1.w2.d2.g7_vs_g13",
  "type": "tab",
  "meta": { "title": "G7 - G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G7", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72。** 1小節G7、2小節に **13度（E）** を屋根として乗せてG13。音が開ける瞬間を聞きます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。G7とG13を交互に押さえて手を温めます。<mark>2弦5フレット（13度）を入れたり外したりしてみます。</mark>

**10〜20分 · 頭のトレーニング（13度の色を分ける）**
音を出さず左手だけでG7 → G13を行き来します。**13度（2弦）** が乗るとき、手の形がどう広がるかを目で確認します。

**20〜40分 · 実践ヴァンプ（BPM 72）**
下の四小節を繰り返します。2小節はのっぺりしたG7、4小節はテンションが乗ったG13です。<mark>同じ場所で13度一つで色がパッと開ける瞬間</mark>を耳で追います。

```json
{
  "id": "m1.w2.d2.thirteenth_drill",
  "type": "tab",
  "meta": { "title": "G7 vs G13 in the vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G7", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72。** Dm9 → G7 → Dm9 → G13。最後の小節で **13度** の開けた色が咲きます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。G7とG13が別々の広さに聞こえるか確認します。

**今日の完了基準：** G7とG13を交互に鳴らし、13度が作る開けた色を耳で聞き分けられる。

## ④ ヒント / よくあるミス

**13度** を扱うときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w2.d2.thirteenth_spot",
  "type": "fretboard_diagram",
  "meta": { "title": "The 13th (E) — string 2 fret 5 on G", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" }
  ]}
}
```
▶ **13度（E）** は2弦5フレット。ルートから6度を1オクターブ上げた音です。

- **13度が埋もれる。** 2弦5フレットがはっきり鳴ってこそ開けた色が出ます。
- **11度と13度が混ざる。** 11 = 4度の場所（1弦3フレット）、13 = 6度の場所（2弦5フレット）と位置を分けて覚えます。
- **G7とG13が同じに聞こえる。** BPMを55に下げ、一コードずつ長く鳴らします。
- **手がこわばる。** 2弦の小指に力が集まったら、手首を少し下げます。
