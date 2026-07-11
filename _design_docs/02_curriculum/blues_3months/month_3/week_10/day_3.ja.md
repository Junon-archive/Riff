---
title: "コードに合わせて3度を選ぶ — A7の上でC#はコードトーン"
dayKey: "m3.w10.d3"
estMinutes: 50
i18nKey: "lesson.m3.w10.d3"
---

# Day 3 — A7の上でメジャー3度（C#）を選びコードトーンで着地する

## ① 理論・説明

昨日あの**メジャー3度C#**がなぜあんなによく合ったのか、今日その理由を探ります。私たちが弾いている**A7コード**はA・C#・E・Gの四つの音でできています。その中に**C#**がどっかり入っているのです — まさにA7の3度です。<mark>C#に着地すれば、実はコードそのものの上に座っているのです。</mark>だから昨日あんなに心地よく「合う」音がしたのです。コードの中に元から住んでいた音だったからです。

ここで二つの音の性格が分かれます。**b3（C）**はコードの外の色彩音、少し緊張を与える「泣く」音です。反対に**3（C#）**はコードの中のコードトーン、楽に「座る」音です。<mark>A7の上で3を選べば解決し、b3を選べば切なくなります — どちらも見事な道具です。</mark>今日はそのうち**3をわざと選んで**A7にぴったり合うコードトーンの色を手に覚えます。どちらも間違いではなく、望むときに選んで使うのが目標です。耳が二つの色を両方知れば、表現の幅がぐっと広がります。

これまではルートAを家として着地してきました。今日はA7の上で**二つ目の家**をもう一つ手に入れます — メジャー3度**C#**です。C#にビブラートで降りると、ルートに座るときとはまた違う<mark>より成熟して安定した音</mark>が出ます。ルートだけを狙っていた耳が、これで3度まで狙えるようになるのです。コードを知り、その中の音を選んで座ること、それが今日の一歩です。この感覚が、これから出会うコード進行の扉を開きます。

```json
{
  "id": "m3.w10.d3.a7_chord_tones",
  "type": "scale_shape",
  "meta": { "title": "A7 chord tones and C# as the major 3rd", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **A7 = A・C#・E・G。** そのうち**緑のC#が3度**、コードの中に元から入っている音です。

## ② ビジュアル資料

指板の上で**A7のコードトーン**を一緒に見ます。青いルートA、そして**緑の3度C#**を中心に、5度Eとb7 Gが一緒にコードを作ります。

```json
{
  "id": "m3.w10.d3.cs_over_a7",
  "type": "fretboard_diagram",
  "meta": { "title": "C# is the 3rd of A7 — a chord tone", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ ルート（青）・5度・b7はコードトーン、そして**緑のC#が今日狙う3度**です。

<mark>C#はA7の外からの客ではなく、コードの中に元から住んでいた家族です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。**A7のコードトーン**をルートA → 3度C# → 5度E → b7 Gの順で一つずつ押さえてみます。

```json
{
  "id": "m3.w10.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: A7 chord tones with C#", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 60。** 四つのコードトーンをゆっくり押さえながら、**C#がその中に自然に混ざって**いるのを感じます。

**10〜20分・頭のトレーニング（今日のターゲット＝A7の上のC#コードトーン）**
実戦の前に、A7が鳴るとき**C#がコードの中の音**だと思い浮かべます。<mark>着地音をあらかじめC#に決めておけば、手はずっと楽にその場所を見つけます。</mark>

**20〜40分・実戦：A7の上でC#に着地（BPM 65）**
今日の完成です。ルートAから出発して**b3をかすめ**、**メジャー3度C#にビブラートで着地**します。A7が鳴っている間にC#に座れば、コードにぴったり合う成熟した色が出ます。

```json
{
  "id": "m3.w10.d3.land_on_cs",
  "type": "tab",
  "meta": { "title": "Over A7, land on C# (the major 3rd)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 65。** ルートA → b3（3弦5フレット） → **メジャー3度C#（3弦6フレット）ビブラート**。A7の上で3度に座るコードトーンの色です。

<mark>ルートではなく3度に座っても心地よい — A7がその音を支えてくれるからです。</mark>

**40〜50分・録音**
A7のバッキングの上でC#に着地するのを録音します。3度に座るそのコードトーンの色が心地よく聞こえるかを一つのファイルで確認します。

**今日の完了基準：** A7が鳴っている間にメジャー3度C#（3弦6フレット）を選んでビブラートで着地し、コードにぴったり合うコードトーンの色を出して録音した。

## ④ ヒント / よくあるミス

コードに合わせて3度を選ぶときによく出るミスです。ほとんどは**コードと音を別々に**考えるところから来ます。

```json
{
  "id": "m3.w10.d3.choose_the_3rd",
  "type": "scale_shape",
  "meta": { "title": "On A7, choose the major 3rd C#", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **A7ならC#がコードトーン。** 3度に座るのを恐れないでください。

- **いつもルートだけに着地する。** ルートも良いですが、A7の上では3度C#も同じくらい心地よい家です。
- **C#を緊張音と誤解する。** A7の中にはC#が元から入っています。緊張ではなく解決です。
- **弱拍にC#を置く。** 強拍に座ってこそ「コードに合わせた」感覚がはっきりします。
- **すべてのコードでC#を使う。** 今日はA7のときです。コードが変われば3度も変わることは次の旅の役目です。
