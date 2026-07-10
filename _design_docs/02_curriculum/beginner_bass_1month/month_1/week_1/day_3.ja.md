---
title: "左手の初運指 — フレットのすぐ後ろを押さえて一音きれいに"
dayKey: "m1.w1.d3"
estMinutes: 30
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — 左手の初運指

## ① 理論・説明

2日間、右手ががんばって歩いたので、今日はいよいよ左手の登場です。今日は**<mark>左手で初めて音を作る日</mark>**です。これまでは開放弦だけを鳴らしましたが、フレットを1つ押さえると音の高さが変わり、**「新しい音」**が生まれます。こわがらないで — 今日の仕事はたった一音、それもごくゆっくりきれいに押さえてみるだけです。

**ビリつき（ジジッというノイズ）**のないきれいな音のコツは「どこを押さえるか」です。フレットの真ん中やフレットの上を押さえると、音が死んだりジジッと鳴ります。指先を**<mark>フレットのすぐ後ろ</mark>**（ブリッジ側に近いほう）にぴたっと当てて押さえるのが正解です。ちょうどその場所を押さえれば、ごく小さな力でも音がくっきり鳴ります。指の腹ではなく<mark>指先をまっすぐ立てて</mark>押さえると、となりの弦に触れません。

今日押さえる音は**E弦（4弦）の3フレット**、音名では**G**です。楽譜で緑に示された音がそれで、今日手が集中する目標です。人差し指でフレットのすぐ後ろを押さえ、右手は昨日のツーフィンガーではじきます。**左手の力は最小限に** — 弦が指板に触れるくらいでも十分に音は出ます。最初はジジッと混じっても大丈夫。押さえる場所と指先の角度を少しずつ直せば、すぐに澄んできます。

この運指は**<mark>4弦でも5弦でも左手のする仕事は同じ</mark>**です。E弦は両方の楽器で同じ弦（4弦）なので、**3フレットのGを押さえる手の形はまったく同じ**。5弦で変わるのは右手だけ — 弾かない低音Bが鳴らないよう親指で覆うことが加わるだけです。今日左手が身につけた「フレットのすぐ後ろをまっすぐ押さえる」は、これから習うすべての音の基本になります。

## ② ビジュアル資料

今日は**E弦3フレット（G）の一音**をきれいに押さえます。下の例は<mark>同じ音を繰り返して手になじませる</mark>ところから、開放とフレット音を交互に対比するところまでです。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — フレット音の繰り返し。** E弦3フレット（G）を人差し指で押さえ、1拍に1つずつはっきり。ビリつきが混じったら押さえる場所をフレット側へ少し寄せます。

```json
{
  "id": "m1.w1.d3.first_fret_quarter_4",
  "type": "tab",
  "meta": { "title": "First fretted note (G) on E — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 1, "label": "G", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 1, "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 1, "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 1, "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 緑に示されたGを4回はっきり。力は最小限に、音がジジッと鳴っていないか耳で確かめて。

```json
{
  "id": "m1.w1.d3.first_fret_quarter_5",
  "type": "tab",
  "meta": { "title": "First fretted note (G) on E — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 1, "label": "G", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 1, "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 1, "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 1, "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 左手の運指は4弦とまったく同じ。右手の親指で低音Bを覆い、弾かない弦が一緒に鳴らないように。

**例2 — 開放とフレット音の対比。** 開放Eを2回、フレット音Gを2回、交互に。開放とフレット音の音量が近くそろうのが目標です。

```json
{
  "id": "m1.w1.d3.open_vs_fret_eighth_4",
  "type": "tab",
  "meta": { "title": "Open E vs fretted G — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 1, "label": "G", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 1, "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 1, "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 1, "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 青の開放Eと緑のフレット音Gを交互に。フレット音で左手が押さえて離すタイミングだけはっきりと。

```json
{
  "id": "m1.w1.d3.open_vs_fret_eighth_5",
  "type": "tab",
  "meta": { "title": "Open E vs fretted G — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 1, "label": "G", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 1, "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 1, "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 1, "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 左手のする仕事は4弦と同じ。ここでも低音Bは親指で覆って静かに。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日のE↔Aの弦移動をBPM 60でまたほぐします。**右手の感覚を呼び戻してから左手**を乗せます。

**7〜17分・今日の技術**
例1（フレット音G）をBPM 60で繰り返します。<mark>フレットのすぐ後ろをまっすぐ押さえる</mark>ことだけに集中し、**ジジッが消えるまで**場所と角度を細かく調整します。

**17〜27分・応用**
例2（開放↔フレットの対比）をBPM 60で4回 → **2つの音が近くそろったら**BPM 65へ1段上げて4回。フレット音がぼやけたら例1に戻ります。

**27〜30分・チェック**
今日届いたBPMを書き留め、よければ30秒録音して、フレット音Gにビリつきが混じっていないか聴いてみましょう。

**今日の完了基準：** E弦3フレットのGを人差し指で押さえてビリつきなく、60〜70で開放Eと交互にはっきり弾ける。

## ④ ヒント / よくあるミス

- **フレットの真ん中を押さえる。** フレットとフレットの間の真ん中を押さえると音が死んだりジジッと鳴ります。指先をフレットのすぐ後ろに当てて。
- **強く押さえすぎる。** 力を込めると音程が少し上がり、手もすぐ疲れます。弦が指板に触れるくらいで。
- **指先を寝かせる。** 指の腹で押さえるととなりの弦まで触れて音が濁ります。指先をまっすぐ立てて。
- **手が痛くてこわがる。** 左の指先がヒリヒリするのはタコができる自然な過程です。痛ければ少し休んでまた押さえればOK。
