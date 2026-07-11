---
title: "スライド — 音へ滑り込み、滑り出る"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — スライドで音に表情をつける

## ① 理論・説明

ベンドで押し、ビブラートで震わせたので、今日は音と音の間を「滑って」つなげてみます。**スライド（slide）**は、あるフレットを押さえたまま指を離さず別のフレットへ滑らせ、二つの音を**一本の線**でつなぐ技法です。<mark>スライドは、話すとき二つの単語をぶつ切りにせず滑らかにつなぐのと同じです。</mark>音をただコツコツ押さえると硬いですが、滑り込むと音に「表情」がつきます。ブルースがとりわけ語るように聞こえる理由の半分は、このスライドにあります。

スライドは方向によって二つに分かれます。低いフレットから目標音へ押し上げながら**滑り込む**、そして目標音から指を離さず下へ流していく**滑り出る**です。<mark>入るときは目標音でぴたりと止め、出るときは力をすっと抜きます。</mark>核心は、滑る間ずっと指を弦から離さないことです。離すと音が切れて、スライドではなくただの二つの音になります。

今日の舞台はボックス1の**3弦**です。b3（5フレット）から4度（7フレット）へ滑り上がり、また下りてきます。スライドで着地する音は緑で示してあります — <mark>その音でぴたりと止まることがスライドのすべてです。</mark>もう一つ、スライドはベンドやビブラートと自然につながります。滑り込んだ音をそのまま押してベンドしたり、着地した音をビブラートで震わせたりできます。明日この三つの道具を一つに合わせるので、今日はスライドを**きれいに**磨いておきます。

```json
{
  "id": "m2.w6.d3.slide_intro",
  "type": "tab",
  "meta": { "title": "Slide into and out of a note (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "slide", "slideToFret": 5 }
    ]}
  ]}
}
```
▶ **BPM 60。** 3弦のb3（5フレット）から4度（7フレット）へ滑り上がり、また4度からb3へ滑り下ります。二つの音が一本の線でつながるか聴いてみてください。

## ② ビジュアル資料

今日滑る道を指板で見ておきましょう。**3弦5フレットのb3**から始めて、**7フレットの4度**まで滑り上がります。着地点の4度を緑で示してあります。

```json
{
  "id": "m2.w6.d3.slide_route",
  "type": "scale_shape",
  "meta": { "title": "Slide route on the G string (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" }
  ]}
}
```
▶ **同じ指で滑る。** 1の指で5フレットを押さえ、離さないまま7フレットまで押し上げます。

<mark>着地フレットでぴたりと止まってこそ音程が合います。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。スライドなしで**3弦5フレットと7フレット**を交互に押さえ、二つの音の距離を手になじませます。

```json
{
  "id": "m2.w6.d3.warmup",
  "type": "tab",
  "meta": { "title": "G string b3-4 warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60。** b3と4度をはっきり押さえて、滑る二つの地点を先に知っておきます。

**10〜20分・頭のトレーニング（今日のターゲット＝着地フレットでぴたりと止まる）**
滑る前に、着地するフレットを目と耳で決めます。**7フレットでぴたりと止まる**と前もって決めるのです。<mark>着地点を決めないと、スライドは目標を通り越したり届かなかったりします。</mark>

**20〜40分・実戦スライド（BPM 60）**
まずルートへ滑り込みます。b7（5フレット）からルート（7フレット）まで押し上げ、ビブラートで生かします。

```json
{
  "id": "m2.w6.d3.slide_into_root",
  "type": "tab",
  "meta": { "title": "Slide into the root from below", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **ルートへ滑り込む。** 5フレットから7フレットのルートまで押し、そのまま手首で震わせます。

次は滑り込みと滑り出しを一つのフレーズで。滑り込んだ後、最後に滑り出ます。

```json
{
  "id": "m2.w6.d3.slide_lick",
  "type": "tab",
  "meta": { "title": "Slide in, slide out — a talking phrase", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "slide", "slideToFret": 5 }
    ]}
  ]}
}
```
▶ **滑り込み、滑り出し。** b3から4度へ滑り込んで5度を弾き、最後の音は下へ流します。

<mark>滑る間ずっと指を離さないでこそ、音が一本につながります。</mark>

**40〜50分・録音**
スライドで滑り込み、滑り出るフレーズを録音します。滑る音が切れずに一本につながるか聴いてみます。

**今日の完了基準：** 低いフレットから目標音まで滑り込んでぴたりと止まり、指を離さずスライドで滑り出せる。

## ④ ヒント / よくあるミス

スライドでよくあるミスです。滑る「過程」よりも着地する「地点」のほうが大切です。

```json
{
  "id": "m2.w6.d3.dont_lift",
  "type": "scale_shape",
  "meta": { "title": "Keep the finger pressed through the slide", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "target" }
  ]}
}
```
▶ **同じ指で、最後まで押さえて。** 5フレットから7フレット（緑）まで力を保ったまま滑ります。

- **途中で指を離す。** 音が切れてスライドが消えます。着地するまで弦をしっかり押さえます。
- **着地フレットを通り越す。** 滑ることに酔って目標を越えると音程が外れます。目標でぴたりと止めます。
- **強く押しすぎて滑る。** 弦を擦る雑音が大きくなります。滑れるだけ、力を少し抜きます。
- **滑り込みだけ練習する。** 滑り出しも表情です。フレーズの最後を下へ流すことも一緒に身につけます。
