---
title: "b3→3スミアの第一歩 — 半音一つでにじませる"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — b3→3スミアの第一歩

## ① 理論・説明

今日から **2か月目** です。先月はコードを押さえる方法を身につけましたが、今週からはコードを撫でる方法を学びます。その最初の道具が **スミア（smear）** です。<mark>スミアは **b3** から **3** へ半音を押し上げ、音を絵の具のようににじませる装飾です。</mark>

Dマイナーで **b3** は **F**（4弦 **3フレット**）、**3** は **F#**（4弦 **4フレット**）です。Fを弾いた後、隣の指でF#を叩いて鳴らすのが **ハンマリング（hammer-on）** です。<mark>ピックで二度弾かず **一度のピッキング** で半音がすっと上がるのがスミアの核心です。</mark>

今日はたった一つだけを目標にします — **スミア一回** をはっきり鳴らすことです。**BPM 72** でゆっくり、**b3→3** がなめらかににじむか耳で確かめます。<mark>速さはまったく重要ではありません。半音一つがきれいにつながれば今日は成功です。</mark>まず手が置かれる場所を目で覚えます。

```json
{
  "id": "m2.w5.d1.smear_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "b3-to-3 smear position", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **4弦3フレット（b3=F）** と **4フレット（3=F#）**、そして隣の3弦2フレット（5=A）です。緑の点がスミアの着地する **3度** です。

## ② ビジュアル資料

では実際の音で聞いてみます。**b3（F）** をピックで一度弾き、すぐに **ハンマリング** で **3（F#）** を鳴らし、**5度（A）** へ流れて休みます。<mark>ピッキングは最初の一度だけ、残りは左手が作ります。</mark>

```json
{
  "id": "m2.w5.d1.smear_single",
  "type": "tab",
  "meta": { "title": "b3-to-3 single smear", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 72.** b3を弾いて **3度** へ **ハンマリング** — 半音がにじみます。その後 **5度** へ流れて小節を締めます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** で4弦 **3フレット→4フレット** だけを繰り返します。左手の指二本で **F→F#** をゆっくり押さえます。<mark>ハンマリングなしで二音を一つずつ押さえ、まず音を確かめます。</mark>

**10〜20分 · 頭のトレーニング（ハンマースミアをゆっくり）**
今度は **一度のピッキング** で **b3→3** のハンマリングを作ります。音が途切れたら左手の力が足りません。指先でフレット **すぐ後ろ** を叩きます。

**20〜40分 · 実践スミア（BPM 72）**
下の二小節を繰り返します。各小節は **スミア一回** と **5度** の着地、そして一拍の休みです。<mark>休む一拍の間に次のスミアを準備すれば流れが途切れません。</mark>

```json
{
  "id": "m2.w5.d1.smear_single_loop",
  "type": "tab",
  "meta": { "title": "Single smear loop x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** スミア一回 → **5度** → 一拍の休みを二周まわします。休符で息を整えて再びにじませます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
スミアを10回録音して聞き返します。**F#** がはっきり生きるスミアが何回かを数えます。

**今日の完了基準：** BPM 72でb3→3ハンマリングのスミアを一回、音が途切れずはっきり鳴らせる。

## ④ ヒント / よくあるミス

スミアを初めて作るときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w5.d1.smear_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Smear landing map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 4弦3フレット（b3）から4フレット（緑の3度）へ。この半音一つが今日のすべてです。

- **ハンマリングの音が小さい。** 指をフレットのすぐ後ろに正確に、そして少し強めに叩きます。
- **二度ピッキングする。** スミアはピッキング一回です。右手は最初の音だけ弾いて止めます。
- **F#がぼやける。** 最初の指（F）を離さず押さえたまま二本目の指で叩くと音が生きます。
- **速さから上げる。** BPM 60に下げて半音がきれいにつながる音からつくります。
