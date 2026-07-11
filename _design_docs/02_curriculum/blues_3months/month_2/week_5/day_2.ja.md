---
title: "ブルーノート一滴 — マイナーペンタに涙を加える"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — ブルーノート（b5）の位置と響きを身につける

## ① 理論・説明

昨日身につけたボックス1に、今日は音を一つ加えます。それが**ブルーノート**です。Aブルースでブルーノートは**b5、つまりEb**の音です。マイナーペンタには元々ない音ですが、この一音が加わった瞬間、スケールの色ががらりと変わります。<mark>ブルーノートは、ブルースが流す涙の一滴です。</mark>悲しいような緊張したような、言葉では説明しにくいあの独特の「泣き」の響きが、まさにここから出てきます。昔のブルースギタリストたちは、この一音を絶妙に引っかけて、言葉では言い尽くせない感情を音で代わりに伝えました。

位置は覚えるのがとても簡単です。ボックス1の**5弦で、4（5フレット）と5（7フレット）の間**、ちょうど真ん中の**6フレット**がブルーノートです。**中指（2番）**でそっと乗せればいいだけです。<mark>4から5へ上がる道の途中に置かれた飛び石だと思えば簡単です。</mark>もともとあった二つの音の間にこっそり挟まった音なので、手が覚えるのも楽です。5弦だけ見ても4・b5・5が5・6・7フレットに並んで付いているので、一本の弦の上で三つの音を順に押さえれば、位置はすぐ手に入ります。

ブルーノートには一つコツがあります。<mark>この音は長くとどまる音ではなく、かすめて通り過ぎる音です。</mark>4や5、ルートのような安定した音へつなげてあげると、その緊張がきれいにほどけます。逆にブルーノートでぴたりと止まると、ぎこちなく聞こえることがあります。ブルーノートが与える緊張は間違いではなく、続く安定した音をもっと待ち遠しくさせてくれる仕掛けです。だから今日は、**押さえる位置と響き**だけに集中します。フレーズに編み込むのは明日にします。まずはこの涙の一滴がどこに住んでいるか、耳で確かめてみましょう。

```json
{
  "id": "m2.w5.d2.blue_spot",
  "type": "scale_shape",
  "meta": { "title": "The blue note b5 between 4 and 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **ブルーノートb5=Ebはここに住んでいます。** 5弦の4（5フレット）と5（7フレット）の間、6フレットです。2番の指で軽く押さえます。

## ② ビジュアル資料

では、ボックス1全体にブルーノートを乗せた地図を見ていきます。<mark>紫の点一つが、今日新しく加えたブルーノート（b5）です。</mark>青いルートと残りのスケール音の間で、この紫の点一つがどこにあるか目になじませます。

```json
{
  "id": "m2.w5.d2.box1_blue",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1 with the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **ボックス1 + ブルーノート。** 5弦6フレットの紫の点が新しい家族です。残りは昨日のあの箱そのままです。

紫の点はたった一つです。<mark>この一つが、マイナーペンタをブルースの響きに変えてくれます。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。昨日の**ボックス1**を一度上り下りして手をほぐします。<mark>5弦6フレットの位置を前もって目に留めて</mark>おきます。

**10〜20分・頭のトレーニング（今日のターゲット＝ブルーノートを押さえる）**
5弦で4→b5→5をゆっくり押さえながら、<mark>ブルーノートの「泣き」の色を耳で</mark>感じてみます。

**20〜40分・実戦：ブルーノートを通り過ぎる（BPM 70）**
ブルーノートをかすめて通り、安定した音へつなげる練習です。

```json
{
  "id": "m2.w5.d2.blue_slide",
  "type": "tab",
  "meta": { "title": "Passing through the blue note — 4 b5 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70、シャッフルフィール。** 4からb5を経て5へ、最後はルートAへ下りて締めます。

<mark>ブルーノートで止まらずに</mark>、水が流れるように通り過ぎます。最後のルートで気持ちよく着地します。

**40〜50分・録音（今日のミッション）**
4→b5→5→ルートを一度録音します：<mark>ブルーノートが涙のように少し緊張を与えてほどけるか</mark>聴いてみます。

**今日の完了基準：** 5弦6フレットのブルーノートを2番の指で正確に押さえ、4→b5→5→ルートへかすめて通り、安定した音に着地した。

## ④ ヒント / よくあるミス

ブルーノートを使うときによくあるミスです。この音は薬味であって主材料ではありません。

```json
{
  "id": "m2.w5.d2.blue_tip",
  "type": "scale_shape",
  "meta": { "title": "Resolve off the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **ブルーノートはかすめて通ります。** 6フレットからすぐ隣の5（7フレット）やルートへつなげれば、緊張がきれいにほどけます。

- **ブルーノートに長くとどまる。** 短くかすめて安定した音へ移ってこそ「泣き」の味が生きます。
- **b5を3フレットで探す。** Aブルースのb5は5弦6フレットです。位置を混同しないように。
- **2番の指を使わない。** 4は人差し指、b5は中指 — 指を決めておけば、いつも同じ場所を速く押さえられます。
- **緊張が怖くて避ける。** その緊張こそがブルースです。軽く引っかけてほどけば、むしろ格好いいです。
