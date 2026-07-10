---
title: "ルートからルートへ — E·A·Gを途切れず移動"
dayKey: "m1.w2.d3"
estMinutes: 30
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — ルートからルートへ、E·A·G移動

## ① 理論・説明

昨日はミュートで音を切る方法を学んだので、今日はその技術を移動に乗せます。本物のベースラインは1つのルートに留まらず、**ずっと動きます**。今日の目標は**<mark>ルートからルートへ途切れず座り替えること</mark>** — E、A、Gの3つのルートをなめらかに行き来することです。

今日の3つのルートはこうです。**Eは4弦開放、Aは3弦開放、Gは4弦3フレット（薬指）。**開放2つと押弦音1つが混ざっています。移動のカギは昨日学んだミュートです — **<mark>次の音を押さえる直前に前の音を眠らせて</mark>**、2つの音が重なってにじまないようにするんです。そうすればルートが変わるたびに音がくっきり分かれます。ルートがはっきり分かれてこそドラムと拍がぴたっと合い、バンド全体の土台が揺れません。

移動するとき手を大きく振らないで。**<mark>手全体ではなく指先だけ</mark>**をとなりの弦へそっと渡し、右手の親指も低い弦に沿って一緒に動かして、弾かない弦を覆います。特にG（4弦3フレット）からA（3弦開放）へ行くときは、左手を眠らせながら同時に右手の親指がE弦を覆うとクリーンになります。手を省くほど速くなっても拍が押さないので、今から**小さく動かす習慣**をつけましょう。

この3つのルートは**<mark>4弦でも5弦でも押さえる場所がまったく同じ</mark>**です。E・Gは4弦、Aは3弦なので、**手の形は完全に同じ**。5弦なら低音Bを親指で覆ったまま動かすので、移動中もBが漏れないよう気をつければOKです。今日この3つのルートをきちんとつなげられれば、明日仕上げるリフの半分はもう手の中にあります。

## ② ビジュアル資料

今日は**E・A・Gの3つのルート**を行き来します。まず<mark>1拍に1つずつゆっくり</mark>移動し、それから2音ずつまとめてつなげてみます。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — ルート移動（4分音符）。** E（4弦開放）→ A（3弦開放）→ G（4弦3フレット）→ E。1拍に1つずつ、ルートが変わるたびに前の音を眠らせます。

```json
{
  "id": "m1.w2.d3.root_move_4",
  "type": "tab",
  "meta": { "title": "Root move E-A-G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 青で示した3つのルートをきちんとつなげます。G（4弦3フレット）は薬指で押さえ、次の音へ移るとき前の音を眠らせてにじみをなくします。

```json
{
  "id": "m1.w2.d3.root_move_5",
  "type": "tab",
  "meta": { "title": "Root move E-A-G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 押さえる場所は4弦とまったく同じ。移動の間ずっと低音Bは親指で覆い、弦を移してもBが漏れて鳴らないように。

**例2 — 2音ずつまとめて移動（8分音符）。** Eを2回、Aを2回、Gを2回、Eを2回。同じルートを2回ずつ押さえて、移動を少し余裕を持って身につけます。

```json
{
  "id": "m1.w2.d3.root_move_eighth_4",
  "type": "tab",
  "meta": { "title": "Root move E-A-G eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 各ルートを2回ずつ。2つ目の音が終わったらすぐ眠らせ、次のルートへ移る継ぎ目をきれいに。

```json
{
  "id": "m1.w2.d3.root_move_eighth_5",
  "type": "tab",
  "meta": { "title": "Root move E-A-G eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 音と位置は4弦とまったく同じ。5弦なら低音Bを親指で覆い続けたまま、ルートを移すたびに親指も一緒に動かします。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日の弾いて眠らせる（ミュート）をBPM 60でまたほぐします。**音を切る感覚**を呼び戻してから移動を乗せます。

**7〜17分・今日の技術**
例1（ルート移動）をごくゆっくり繰り返します。<mark>ルートが変わる継ぎ目</mark>で前の音がきれいに眠るかだけに集中します。**特にG→Aの移動を何度も。**

**17〜27分・応用**
例2（2音ずつまとめて移動）をBPM 60で4回 → **継ぎ目がなめらかなら**BPM 65へ1段上げて4回。にじんだら例1に戻ります。

**27〜30分・チェック**
今日届いたBPMを書き留め、30秒録音して、ルートが変わるたびに音が重ならずくっきり分かれるか聴いてみましょう。

**今日の完了基準：** E·A·Gの3つのルートをツーフィンガーで、前の音を眠らせてにじみなく、60〜70でくっきりつなげられる。

## ④ ヒント / よくあるミス

- **前の音を眠らせない。** 次のルートを押さえても前の音が鳴り続けると、2つが重なって濁ります。移動の直前に必ず前の音を切って。
- **手を大きく振る。** 腕を大きく動かすと拍が押します。指先だけとなりの弦へ渡れば十分です。
- **親指を置いていく。** 弦を移すのに親指がそのままだと、弾かない弦が一緒に鳴ります。親指も低い弦に沿って動かして。
- **Gで急ぐ。** 押弦音Gが開放より難しいからと急いで越えるとビリつきます。Gだけ何度か押さえて身につけてからつなげて。
