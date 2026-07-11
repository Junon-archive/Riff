---
title: "コードが変われば家も変わる — D7の上でルートDに着地する"
dayKey: "m3.w9.d2"
estMinutes: 50
i18nKey: "lesson.m3.w9.d2"
---

# Day 2 — D7の上でルートDに着地する

## ① 理論・説明

昨日はA7の上でルートAに着地する感覚を身につけました。今日はコードが一つ変わります — **D7**です。12小節ブルースの5・6小節目に登場するこのコードは、A7とは違う「家」を持っています。<mark>コードが変わったら着地する家も一緒に変わってこそ、ソロがチェンジを追います。</mark>昨日の家がAだったなら、今日の家は**D**です。同じボックスの中にそのまま留まりながら、終わり音だけをDへ移すのが今日のすべてです。

幸い、**ボックス1**の中でDは手になじむ場所にあります。**3弦7フレット**がまさにDです — 昨日着地していたA（4弦7フレット）のすぐ隣の弦、同じフレットです。手を動かす必要もなく、一弦だけ渡ればいいのです。<mark>昨日のAから一つ上の弦へ指を移せば、それが今日の家Dです。</mark>D7のコードトーンもこのボックスの中にあります — **A（5度）**と**C（b7）**です。これらの音に下りてもD7の上で安定して響きます。

今日の核心は「引っ越し」です。コードがA7からD7へ変わる瞬間、着地点もAからDへ引っ越します。<mark>手は同じボックスに留まり、狙う家だけを変えるのです。</mark>この「家だけ変える」に慣れると、12小節のどこでコードが変わっても手が自分で次の家を見つけます。最初はDの位置を目で確かめながらゆっくり、慣れてきたらコードが変わる音を聞いた瞬間に自然と手がDへ向かうように練習します。今日はD7という一つのコードの上で、ルート**D**にはっきり着地すること、それで十分です。

```json
{
  "id": "m3.w9.d2.land_on_d7",
  "type": "tab",
  "meta": { "title": "Landing on the D7 home (root D)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70。** ペンタを転がし、小節の終わりでルートD（3弦7フレット）に着地します。緑の音が今日の新しい家 — D7の家です。

## ② ビジュアル資料

ボックス1の中で**D7の家**がどこかを見ます。緑に輝く**3弦7フレットのD**が今日の着地点です。

```json
{
  "id": "m3.w9.d2.d7_home_map",
  "type": "scale_shape",
  "meta": { "title": "Where D7 lives in Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "D", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "C", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **緑のDが今日の家。** 青い音（A・C）はD7のコードトーンなので、一緒に下りるのに良いです。昨日の家Aは、いまやD7の5度として聞こえます。

<mark>同じボックスなのに狙う家だけをAからDに変えただけで、コードが変わったのがはっきり聞こえます。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。いちばん短い着地を繰り返します — b3から始めてルートDに下ります。

```json
{
  "id": "m3.w9.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: roll and land on D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70。** b3（3弦5フレット）を半拍鳴らし、ルートD（3弦7フレット）に半拍下ります。同じ弦で二フレット上がれば家です。

**10〜20分・頭のトレーニング（今日のターゲット＝ルートDに着地）**
実戦の前に、ボックス1の中でDがどこにあるかを目で確かめます。<mark>昨日のAと今日のDを並べて思い浮かべれば、コードが変わるとき手がどこへ行くかを先に分かります。</mark>

**20〜40分・実戦：D7の上の着地フレーズ（BPM 70）**
ペンタを二小節転がし、最後の音をルートDに着地します。D7が鳴っているあいだ終わりをDに置けば、ソロがコードにぴたりと合います。

```json
{
  "id": "m3.w9.d2.d7_phrase",
  "type": "tab",
  "meta": { "title": "A short phrase that lands on D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "A", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "C", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70。** 1小節目はD7のコードトーン（A・C）を通りながら転がし、2小節目の終わりでルートDに着地します。着地直前の音からDへ移る半拍をはっきりと。

<mark>昨日はAへ、今日はDへ — 終わり音だけを変えたのに、ソロがコードに沿って歩き始めます。</mark>

**40〜50分・録音**
D7のバッキング（またはメトロノーム）の上で着地フレーズを録音します。終わりがルートDに正確に座るかを耳で確かめます。

**今日の完了基準：** D7の上でペンタのフレーズを転がしたあと、フレーズの終わりをルートDにはっきりと着地させた。

## ④ ヒント / よくあるミス

D7の着地でよく出るミスです。ほとんどは「昨日の家Aに留まる」癖から来ます。

```json
{
  "id": "m3.w9.d2.land_home_d",
  "type": "scale_shape",
  "meta": { "title": "End your phrase on the D7 home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```
▶ **D7の上ではDへ。** 緑のDが今日戻る家です。コードが変わったら着地音も必ずDへ移します。

- **コードが変わってもAに着地する。** D7の上でAに座ると5度なので悪くはありませんが、ルートDのほうがコードをずっとはっきり描きます。
- **Dを3弦7フレット以外の場所で探し回る。** Aのすぐ隣の弦、同じフレットです。一弦だけ渡ればいいのです。
- **着地を弱拍に置く。** 強拍にDが座ってこそコードが変わったのが聞こえます。
- **Dを急いで通り過ぎる。** 着地音は半拍以上たっぷり響かせてこそ「新しい家」に感じられます。
