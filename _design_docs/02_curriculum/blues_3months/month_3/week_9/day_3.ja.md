---
title: "二つの家を行き来して着地 — A7とD7を行き来してチェンジを歩く"
dayKey: "m3.w9.d3"
estMinutes: 50
i18nKey: "lesson.m3.w9.d3"
---

# Day 3 — A7とD7を行き来して着地する

## ① 理論・説明

二日かけて二つの家を建てました。A7の家**A**、そしてD7の家**D**。今日はこの二つを**行き来しながら**着地します。<mark>コードがA7からD7へ変わるたびに、着地する家もAからDへ引っ越すのです。</mark>一つのコードの上ではどの音を押さえてもそこそこ合いますが、コードが変わる瞬間には「正しい家」と「違う家」がはっきり分かれます。これがまさに「チェンジを歩く」です。一つのコードに留まっているときは分からなかった感覚が、二つのコードを行き来するときに初めて生きてきます。

二つの家がどれだけ近いかをもう一度見ます。Aは**4弦7フレット**、Dは**3弦7フレット** — すぐ隣の弦、同じフレットです。<mark>手を動かす必要なく、一弦だけ渡ればAからDへ家が変わります。</mark>だからコードが変わっても慌てる必要はありません。狙う弦を一つ変えるだけだからです。A7の小節では4弦のAへ、D7の小節では3弦のDへ — この「一弦の移動」が今日の鍵です。

最初は、コードが変わる直前に次の家を先に思い浮かべます。A7が終わりに近づくころ「次はD」と心の準備をするのです。<mark>コードが変わる音を聞いてから反応するのではなく、先に分かって迎えに行くのです。</mark>最初は半拍遅れても大丈夫です。遅れても家に着きさえすれば、繰り返すうちにタイミングは自然と前に詰まります。慣れてくると**A→D→A**を行き来するのが息をするように自然になります。今日は二つのコードを行き来しながら、コードが変わるたびに着地音が一緒に引っ越す感覚を手に刻みます。

```json
{
  "id": "m3.w9.d3.switch_landing",
  "type": "tab",
  "meta": { "title": "Switching landings: A7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72。** 1小節目のA7ではルートA（4弦7フレット）に、2小節目のD7ではルートD（3弦7フレット）に着地します。緑の二音が行き来する二つの家です。

## ② ビジュアル資料

一つのボックスの中にある**二つの家**を一緒に見ます。緑のA（4弦）と緑のD（3弦）がすぐ隣に並んでいます。

```json
{
  "id": "m3.w9.d3.two_homes",
  "type": "scale_shape",
  "meta": { "title": "Two homes in one box: A and D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **緑のAはA7の家、緑のDはD7の家。** 一弦渡れば家が変わります。青い5度Eは二つの家どちらへも渡る飛び石です。

<mark>二つの家が隣の弦に並んでいるので、コードが変わっても手はほぼその場で家だけを乗り換えます。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 72。ルートAからルートDへ、二つの家のあいだを一弦ずつ行き来するいちばん短い移動を繰り返します。

```json
{
  "id": "m3.w9.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: land on A, then on D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72。** A（4弦7フレット）を半拍、D（3弦7フレット）を半拍 — 隣の弦の同じフレットで家を乗り換える感覚を身につけます。

**10〜20分・頭のトレーニング（今日のターゲット＝チェンジに沿ってA↔D移動）**
実戦の前に、A7→D7→A7の順で次の家を先に呼ぶ練習をします。<mark>コードが変わる一拍前に次の家を思い浮かべれば、着地が遅れません。</mark>

**20〜40分・実戦：四小節のA7・D7行き来（BPM 72）**
四小節のあいだ、A7・D7・A7・D7が交互に鳴ります。各小節の終わりをそのコードの家に着地します — A、D、A、D。

```json
{
  "id": "m3.w9.d3.switch_four_bars",
  "type": "tab",
  "meta": { "title": "Four bars: A7 D7 A7 D7 landings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72。** 奇数小節はルートA、偶数小節はルートDに着地します。リードインの音は同じでも、終わり音だけ変えればコードがはっきり追ってきます。

<mark>同じリードイン、違う着地 — 終わり音を一つ乗り換えるだけで二つのコードがくっきり区別されて聞こえます。</mark>

**40〜50分・録音**
A7・D7のバッキングの上で四小節の行き来を録音します。コードが変わるたびに着地音が一緒に引っ越すかを耳で確かめます。

**今日の完了基準：** A7・D7が交互に鳴る四小節で、コードが変わるたびに着地音をAとDへ正確に移した。

## ④ ヒント / よくあるミス

二つの家を行き来するときによく出るミスです。ほとんどは「家を乗り換えるタイミング」から来ます。

```json
{
  "id": "m3.w9.d3.aim_two_homes",
  "type": "scale_shape",
  "meta": { "title": "Aim: A for A7, D for D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "role": "target", "highlight": true }
  ]}
}
```
▶ **A7にはA、D7にはD。** 二つの緑の家をコードに合わせて乗り換えます。隣の弦の同じフレットなので手はほぼそのままです。

- **コードが変わったのに前の家にそのまま着地する。** D7が鳴っているのにAに座ると歩みが止まります。変わったらDへ引っ越します。
- **家を乗り換えるのに手全体を動かす。** 隣の弦、同じフレットです。狙う弦だけ変えればいいのです。
- **着地が一拍ずつ遅れる。** コードが変わる前に次の家を思い浮かべれば遅れません。
- **速さから上げる。** BPM 72で二つの家を正確に行き来できるまで、速くするのは後回しです。
