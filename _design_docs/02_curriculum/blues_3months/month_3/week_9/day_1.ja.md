---
title: "コード追いかけの第一歩 — A7の上でルートAに着地する"
dayKey: "m3.w9.d1"
estMinutes: 50
i18nKey: "lesson.m3.w9.d1"
---

# Day 1 — A7の上でルートAに着地する

## ① 理論・説明

3ヶ月目の扉を開く最初の日です。この二ヶ月、私たちは**ボックス1**の中でペンタトニックを自由に上り下りしてきました。でも、まだ試していないことが一つあります — それは**コードが変わる瞬間**に反応することです。<mark>ペンタをただ上下になぞるソロと、チェンジを追うソロは、まったく違う音がします。</mark>その違いを作るのはたった一つ、**着地音**です。フレーズをどこででも止めるのではなく、いま鳴っているコードの音にそっと下りるのです。

今日のコードは**A7**一つです。A7の「家」はルート**A**です。12小節ブルースでA7が鳴っているあいだ、フレーズの終わりをルートAに置くと、<mark>ソロがコードの上にぴたりと乗る安定感</mark>が感じられます。ボックス1の中にはAがいくつもありますが、その中でいちばん手になじむ**4弦7フレット**を今日の着地点にします。ルートのほかに5度**E**やb7**G**のようなコードトーンに下りても、A7の上で心地よく響きます。

やり方は思うより単純です。いつも通りボックス1でペンタを転がし、小節の終わりで指を**ルートA**へ連れてくればいいのです。大切なのは「いつ下りるか」です。早すぎるとコードがまだ鳴りきる前で、遅すぎるともう次の小節へ移ってしまいます。<mark>拍の強いところ、特に小節の1拍目に着地すると、コードがはっきり聞こえます。</mark>今日はA7という一つのコードの上で、ルートAに着地する感覚だけを手に覚えさせます。コードが変わるのは明日から — 今日は「家に帰る」あの安定感からたっぷり感じてみましょう。

```json
{
  "id": "m3.w9.d1.land_on_a7",
  "type": "tab",
  "meta": { "title": "Landing on the A7 home (root A)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70。** ペンタを転がし、小節の終わりでルートA（4弦7フレット）に着地します。緑で示された音が今日の着地点 — A7の家です。

## ② ビジュアル資料

ボックス1の中で**A7の家**がどこにあるかを地図で見ます。緑に輝く**4弦7フレットのA**が、今日のフレーズが戻る場所です。

```json
{
  "id": "m3.w9.d1.a7_home_map",
  "type": "scale_shape",
  "meta": { "title": "Where A7 lives in Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" }
  ]}
}
```
▶ **緑のAが今日の家。** 青い音（5度E・b7G）はA7のコードトーンなので、一緒に下りても大丈夫です。

<mark>コードが鳴っているあいだフレーズの終わりをこの緑の場所に置くと、ソロがチェンジを追い始めます。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。いちばん短い着地を繰り返します — 5度Eから始めてルートAに下ります。

```json
{
  "id": "m3.w9.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: roll and land on A", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70。** 5度Eを半拍鳴らし、ルートA（4弦7フレット）に半拍下ります。「家に帰る」感覚を手に刻みます。

**10〜20分・頭のトレーニング（今日のターゲット＝ルートAに着地）**
実戦の前に、目を閉じてボックス1の中でルートAがどこにあるかを押さえます。<mark>着地点を先に知っておけば、どんなフレーズを弾いても終わりをAへ連れてこられます。</mark>

**20〜40分・実戦：A7の上の着地フレーズ（BPM 70）**
ペンタを二小節転がし、最後の音をルートAに着地します。A7一つのコードだけでも、終わりをAに置くだけで音がはっきりします。

```json
{
  "id": "m3.w9.d1.a7_phrase",
  "type": "tab",
  "meta": { "title": "A short phrase that lands on A7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70。** 1小節目はペンタを転がし、2小節目の終わりでルートAに着地します。着地直前の音（b3）からAへ移る半拍を特にはっきりと。

<mark>フレーズがどれだけ長くても、終わりがルートAに触れればA7の上にそっと座る音になります。</mark>

**40〜50分・録音**
A7のバッキング（またはメトロノーム）の上で着地フレーズを録音します。終わりがルートAに正確に座るかを耳で確かめます。

**今日の完了基準：** A7の上でペンタのフレーズを転がしたあと、フレーズの終わりをルートAにはっきりと着地させた。

## ④ ヒント / よくあるミス

A7の上の着地でよく出るミスです。ほとんどは「終わりをどこにでも置く」癖から来ます。

```json
{
  "id": "m3.w9.d1.land_home",
  "type": "scale_shape",
  "meta": { "title": "End your phrase on the A7 home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```
▶ **すべてのフレーズはルートAへ。** 緑のAがA7の上で戻る家です。フレーズを開いたら必ずAで閉じます。

- **どの音でも止まる。** 終わりの音がAでなければ、コードを追う感じがぼやけます。最後は必ずルートAへ連れてきます。
- **着地を弱拍に置く。** 強拍、特に1拍目に座ってこそコードがはっきり聞こえます。
- **Aを急いで通り過ぎる。** 着地音は半拍以上たっぷり響かせてこそ「家」に感じられます。
- **速さから上げる。** BPM 70で終わりがAに正確に座るまで、速くするのは後回しです。
