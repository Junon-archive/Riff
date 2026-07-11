---
title: "BBの色を統合 — マイナーとメジャーを一つのリックに（10週目完成）"
dayKey: "m3.w10.d4"
estMinutes: 50
i18nKey: "lesson.m3.w10.d4"
---

# Day 4 — b3と3を一つのリックに収め「BBの色」を完成させる

## ① 理論・説明

ついに10週目の最後の日です。初日は**メジャー3度C#**を見つけ、二日目は**b3から3へ**半音を上げ、三日目はA7の上で3を選びました。今日はこのすべてを一つに合わせます — <mark>マイナー3度とメジャー3度を一つのリックの中に並べて収め、成熟した「BBの色」を完成させます。</mark>曇りと澄みが一つのフレーズの中で一緒に息をする音です。この三日間で一つずつ集めた欠片が、今日ようやく一つの文につながるのです。

今日の完成リックはこうです。ルートAから出発して**b3（C）**を通り、半音上の**メジャー3度（C#）**へ明るく上がったあと、またルートAへビブラートで降ります。<mark>このリックの心臓はb3→3、その一つの半音です。</mark>A7の上で鳴らせば、曇ったb3が澄んだC#へ開き、コードにぴったり合って解決します。短いけれど、今週学んだすべてがこの四つの音に収まっています。たった一小節、わずか四つの音ですが、その中にはブルースの物語がぎっしり詰まっています。

この小さなリック一つが10週目全体のゴールです。派手なシステムでも、難しいスケールでもありません。ただ**曇りと澄みが一つのリックの中で一緒に住む**こと — それがB.B. Kingが生涯歌った大人のブルースの声です。<mark>今日このリックを手に収めれば、あなたのブルースにはもう二つの色が一緒に住みます。</mark>ゆっくり、BPM 70でこの色を十分に味わいながら完成させてみましょう。これがまさに10週目の卒業です。

```json
{
  "id": "m3.w10.d4.bb_recap_map",
  "type": "scale_shape",
  "meta": { "title": "BB color recap: b3 and 3 together", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 青いルートAと色のないb3、そして**緑のメジャー3度C#**。この三つの音が今日のリックの材料です。

## ② ビジュアル資料

今日のリックに使う**二つの色**を一緒に見ます。色のない**b3（マイナー）**と緑の**3（メジャー）**が一マス違いで並び、ルートA・5度Eと一緒にあります。

```json
{
  "id": "m3.w10.d4.two_colors",
  "type": "scale_shape",
  "meta": { "title": "Two colors: minor b3 and major 3 together", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ マイナーb3とメジャー3、**二つの色が一つの指板の中に一緒に**あります — 今日は二つを行き来して混ぜます。

<mark>曇りと澄み、二つの色が一マス違いで隣り合って住むこの図が10週目の核心です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。**b3 → 3 → ルートA**の順でゆっくり、今日のリックの骨組みを手に覚えさせます。

```json
{
  "id": "m3.w10.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: b3 to 3 to root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60。** b3から3へ半音上げてルートへ降りる、リックの骨組みを温めます。

**10〜20分・頭のトレーニング（今日のターゲット＝BBの色の統合）**
実戦の前に、b3から3へ開いてルートへ座るその流れを頭の中で歌います。<mark>耳が先に「曇り→澄み→家」の物語を描けば、手はその絵をたどるだけでいいのです。</mark>

**20〜40分・実戦：メジャー/マイナーBBリック（BPM 70）**
ついに10週目の完成物、**BBリック**です。ルートA → b3 → **メジャー3度C#** → ルートA ビブラート。b3から3へ渡るその半音こそ「BBの色」です。

```json
{
  "id": "m3.w10.d4.bb_lick",
  "type": "tab",
  "meta": { "title": "Major/minor BB color lick", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70。** ルートA → **b3（C、3弦5フレット） → メジャー3度（C#、3弦6フレット）**へ半音上げて → ルートA ビブラート。b3から3へ渡るその半音が「BBの色」です。

<mark>曇ったb3と澄んだ3が一つのリックの中で手を取り合います — この音があなたが完成させた大人のブルースです。</mark>

**40〜50分・録音（10週目卒業ミッション！）**
A7のバッキングの上でBBリックを録音します。マイナーb3とメジャー3が一つのリックの中でどう混ざるか、その成熟した色を一つのファイルに収めます。

**今日の完了基準：** A7の上でルートA → b3 → メジャー3度C# → ルートAへ続くBBリックを完成させ、マイナーとメジャー3度が混ざった成熟した色を出して録音した。 — 今週の成果物：メジャー/マイナーBB色リック 弾き切り・録音（10週目完成！）

## ④ ヒント / よくあるミス

BBの色を完成させるときによく出るミスです。ほとんどは**一つの色だけを掴む**ところから来ます。

```json
{
  "id": "m3.w10.d4.mix_dont_avoid",
  "type": "scale_shape",
  "meta": { "title": "Mix both colors, don't avoid one", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **二つの色を両方使って。** b3だけでも、3だけでもなく、二つを行き来するのがBBの色です。

- **b3を抜いて3だけ使う。** すると明るいだけでブルースの味が抜けます。b3から「出発」してこそ色が生きます。
- **3を使わずb3だけにとどまる。** それは先週までの音です。今日は3で開いてこそ完成します。
- **二つの音をぶつぶつ切って押さえる。** b3から3へなめらかにつないでこそ「渡る」色が出ます。
- **速さから上げる。** BPM 70で二つの色がはっきり聞こえるのが先です。速さは後の話です。
