---
title: "コード追いかけ完成 — A7→D7、家を移しながら歌う（9週目完成）"
dayKey: "m3.w9.d4"
estMinutes: 50
i18nKey: "lesson.m3.w9.d4"
---

# Day 4 — コードに沿って家を移しながら着地を完成させる

## ① 理論・説明

9週目の最後の日です。三日間で私たちはA7の家**A**、D7の家**D**、そして二つを行き来する方法まで身につけました。今日はこのすべてを一つに合わせ、<mark>コードが変わるたびに家を移して着地する「コード追いかけ」を完成させます。</mark>派手な速弾きも、難しいスケールも要りません。コードが変わるとき着地音を一つ移すだけで、ソロはもうコードに沿って歌っています。

今日の完成物は**二小節**です。1小節目は**A7**の上でルートAに着地し、2小節目は**D7**の上でルートDに着地します。二小節の前半（リードイン）は同じです — 同じb3、同じ5度を通ります。<mark>変わるのは最後の着地音一つだけなのに、コードが変わったのがくっきり聞こえます。</mark>これが「コード追いかけ」の核心です。手はほぼその場、狙う家だけが変わるのです。

この二小節が今日の、そして今週のゴールです。BPM 75でゆっくり、1小節目の終わりで**A**に座り、2小節目の終わりで**D**に座ります。<mark>コードが変われば家も変わる — この一文が手に刻まれれば9週目は完成です。</mark>指板全体を回る五つのボックスやモードといった「システム」は今は学びません。それは次の旅solo_scaleで出会います。今はちょうど二つのコード、ちょうど二つの家で十分です。この小さな完成が、これから出会うすべてのコード進行の頼もしい出発点になります。今日は私たちはボックス1の中で、コードに反応する耳と手を完成させるのです。

```json
{
  "id": "m3.w9.d4.two_homes_recap",
  "type": "tab",
  "meta": { "title": "Recap: A over A7, D over D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 75。** 1小節目は5度Eを通ってルートAに、2小節目は5度Eを通ってルートDに着地します。リードインは同じで着地音だけがA→Dに変わります。

## ② ビジュアル資料

コードに沿って移っていく**二つの家**を一緒に見ます。緑のA（4弦7フレット）と緑のD（3弦7フレット）が隣の弦に並んでいます。

```json
{
  "id": "m3.w9.d4.follow_map",
  "type": "scale_shape",
  "meta": { "title": "Following the chords: A then D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **A7ならA、D7ならD。** リードイン（b3・5度）は二小節共通で、終わりで狙う緑の家だけを乗り換えます。

<mark>この二つの緑の場所をコードに合わせて行き来すること、それが9週目で完成した「コード追いかけ」です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 75。AからDへ、二つの家を隣の弦の同じフレットで乗り換える移動を繰り返します。

```json
{
  "id": "m3.w9.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: move home from A to D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 75。** A（4弦7フレット）を半拍、D（3弦7フレット）を半拍 — コードが変わるとき家を移す感覚を温めます。

**10〜20分・頭のトレーニング（今日のターゲット＝コードに沿って家を移す）**
実戦の前に、A7→D7の順で着地音がAからDへ引っ越す絵を頭の中に描きます。<mark>コードが変わる前に次の家を先に呼べば、着地が自然につながります。</mark>

**20〜40分・実戦：コード追いかけ着地（A7→D7、BPM 75）**
ついに9週目の完成物です。1小節目のA7ではルートAに、2小節目のD7ではルートDに着地します。同じボックスの中で着地音を変えるだけで「チェンジを追う」音になります。

```json
{
  "id": "m3.w9.d4.chord_targeting",
  "type": "tab",
  "meta": { "title": "Targeting chord roots (A7 to D7)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 75。** 1小節目の終わりを**A（4弦7フレット）**に着地 — A7の家。2小節目は**D（3弦7フレット）**に着地 — D7の家。同じボックスの中で着地音を変えるだけで「チェンジを追う」音になります。

<mark>コードが変われば家も変わる — 二小節の中でこの感覚が完成すれば、もうどんなブルースの上でもコードを追えます。</mark>

**40〜50分・録音（9週目卒業ミッション！）**
A7→D7のバッキングの上でコード追いかけ着地を録音します。コードが変わるとき着地音がAからDへ正確に引っ越すかを一つのファイルに収めます。

**今日の完了基準：** A7→D7が変わる二小節で、1小節目はルートAに2小節目はルートDに着地してコード追いかけを完成させ、録音した。 — 今週の成果物：A7→D7 コード追いかけ着地 弾き切り・録音（9週目完成！）

## ④ ヒント / よくあるミス

コード追いかけを完成させるときによく出るミスです。ほとんどは「家を移す瞬間」から来ます。

```json
{
  "id": "m3.w9.d4.home_moves",
  "type": "scale_shape",
  "meta": { "title": "When the chord changes, home moves", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```
▶ **コードが変われば家が移る。** A7の緑のAからD7の緑のDへ、着地の家がコードに沿って引っ越します。

- **二小節ともAに着地する。** 2小節目はD7です。終わり音をDへ移してこそコードが変わったのが聞こえます。
- **リードインまで変えようとする。** 前半は二小節が同じです。変わるのは最後の着地音一つだけです。
- **着地を弱拍に置く。** 強拍にAとDが座ってこそ二つのコードがはっきり区別されます。
- **システムを今から欲張る。** 指板全体の5ボックス・モードは次の旅solo_scaleの役目です。今日はボックス1の着地で十分です。
