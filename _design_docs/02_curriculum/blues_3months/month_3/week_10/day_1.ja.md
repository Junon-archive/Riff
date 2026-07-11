---
title: "メジャー3度（C#）を見つける — b3の隣に隠れた明るい色"
dayKey: "m3.w10.d1"
estMinutes: 50
i18nKey: "lesson.m3.w10.d1"
---

# Day 1 — b3のすぐ隣でメジャー3度（C#）を見つける

## ① 理論・説明

10週目が始まります。この九週間、私たちが頼ってきたブルースの色は<mark>マイナー3度（b3=C）</mark>でした。少し曇った、悲しげで格好いいあの音です。でも今日からは、そのすぐ隣に隠れていた**明るい隣人**に新しく出会います。**メジャー3度（3=C#）**です。同じ3度なのに半音違いで色がまるっきり変わります — 一つは曇り、一つは澄んでいます。この九週間がマイナーの世界だったなら、今日からの二週間はその上に明るい一枚をもう一つ重ねる時間です。

このメジャー3度C#はどこにあるでしょう？ ボックス1で**b3（C）**は**3弦5フレット**にあります。そこからちょうど一フレット上、つまり**3弦6フレット**を押さえれば、それがC#、メジャー3度です。<mark>b3と3はこうして半音、一マス違いで並んで隣り合っています。</mark>指を一マス横へ移すだけで、曇った色から澄んだ色へそっと渡るのです。位置さえ分かれば、あとは手が勝手に覚えます。5フレットと6フレット、ちょうどこの二マスだけ今日目に入れておけば十分です。

なぜこれを学ぶのでしょう？ **B.B. King**のような巨匠はこの二つの色を自由に混ぜます。マイナーのb3で切なく泣いたあと、すっと3度へ上げて明るく笑うのです。その混ざりこそ今週私たちが作る<mark>成熟した「BB」の色</mark>です。今日はまだ混ぜません。ちょうど二つだけします — **b3**と**3**がどこにあるかを目で覚え、二つの音を並べて押さえてみるのです。この小さな発見一つが今週全体の種になります。焦る必要はまったくありません。今日のこの一歩が、今週の終わりの成熟した音へそのままつながります。

```json
{
  "id": "m3.w10.d1.b3_and_3",
  "type": "scale_shape",
  "meta": { "title": "b3 and major 3rd side by side", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **b3（C）は3弦5フレット**、すぐ隣の**緑の6フレットがメジャー3度C#**です。一マス違いで並んでいます。

## ② ビジュアル資料

では今日の新しい音を、**ボックス1**全体の図の上に乗せてみます。慣れたAブルースのボックスの中に、**緑に光るメジャー3度C#**が二つ新しく入りました — 3弦6フレットと1弦9フレットです。

```json
{
  "id": "m3.w10.d1.box1_with_major3",
  "type": "scale_shape",
  "meta": { "title": "A blues box 1 with the major 3rd added", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "label": "4", "role": "scale" },
    { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 9, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 青い音はルート、色のない音はスケール音、**緑の二つが今日新しく覚えるメジャー3度**です。位置だけを目に収めましょう。

<mark>b3のちょうど一マス上、その場所がメジャー3度です — 今日はこの位置さえしっかり覚えれば十分です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。**b3（3弦5フレット）**から**3（3弦6フレット）**へ、指一本だけを横へ移して二つの音を交互に押さえます。

```json
{
  "id": "m3.w10.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: press b3 then the major 3rd", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 60。** b3を半拍、メジャー3度を半拍 — 二つの音が一マス違いだと指先で覚えます。

**10〜20分・頭のトレーニング（今日のターゲット＝b3・3の位置を覚える）**
実戦の前に、ボックス1の中で**b3**と**メジャー3度**がどこで隣り合っているかを目を閉じて思い浮かべます。<mark>二つの音が一マス違いで並んでいるという絵が手に刻まれれば、あとは自然とついてきます。</mark>

**20〜40分・実戦：b3・3を並べて押さえる（BPM 60）**
今日の完成です。ルートAから出発して**b3**、**メジャー3度**を順に並べて押さえ、またルートへ戻ります。まだ速く混ぜません — 二つの音の場所を正確に押さえるのが目標です。

```json
{
  "id": "m3.w10.d1.b3_3_sidebyside",
  "type": "tab",
  "meta": { "title": "b3 and 3 side by side", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60。** ルートA → b3（3弦5フレット） → **メジャー3度C#（3弦6フレット）** → ルートA。一マス違いを一つずつはっきり押さえます。

<mark>曇ったb3の隣に澄んだ3度が並んでいる — この一マスを今日手に覚えれば、10週目の扉が開きます。</mark>

**40〜50分・録音**
b3とメジャー3度を並べて押さえるのをゆっくり録音します。二つの音の場所を正確に押さえたかを一つのファイルに残します。

**今日の完了基準：** ボックス1の中でb3（3弦5フレット）とメジャー3度C#（3弦6フレット）の位置を見つけ、二つの音を並べてはっきり押さえてみて録音した。

## ④ ヒント / よくあるミス

位置を覚えるときによく出るミスです。ほとんどは**一マス違い**を取りこぼすところから来ます。

```json
{
  "id": "m3.w10.d1.one_fret_apart",
  "type": "scale_shape",
  "meta": { "title": "b3 and 3 are one fret apart", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **b3と3はちょうど一マス（半音）違い。** 5フレットの隣の6フレット、それがメジャー3度です。

- **メジャー3度を全音上と勘違いする。** b3から一マス（半音）だけ上です。二マス（全音）行くと4度になってしまいます。
- **b3と3を同じ指で押さえる。** 1の指でb3、2の指で3と分ければ次の移動が楽になります。
- **まだ速く混ぜようとする。** 今日は位置だけ覚えます。混ぜるのは明日からゆっくりで大丈夫です。
- **メジャー3度ばかり押さえる。** b3も相変わらずブルースの中心です。今日は二つの場所を並べて覚える日です。
