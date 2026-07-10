---
title: "4コードの航海 — E-C-G-Dのルートを止まらずに"
dayKey: "m1.w4.d3"
estMinutes: 30
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 4コードのルート航海、止まらないこと

## ① 理論・説明

昨日は**R–5–8**でひとつのコードをぽんぽん転がしましたね。でも曲はひとつのコードにとどまりません — **コードが変わるたびにルートを新しい場所へ移して**航海してこそ、本物の曲になります。今日の進行は<mark>E–C–G–D</mark>、ひと小節にひとコードずつ回る4つのコードです。4つのコードがそれぞれ違って聞こえても、あなたのやることはいつも同じ — **各コードのルートを正確に押さえること**です。

4つのルートの場所を覚えておきましょう。**Eは開放4弦**、**Cは3弦3フレット**、**Gは4弦3フレット**、**Dは3弦5フレット**です。この進行は実は<mark>入門エレキの卒業曲と同じ進行</mark>です — ギターを弾く友だちがコードを押さえれば、あなたはルートで支えて**すぐに合奏になります**。

今日の本当の目標は**止まらないこと**です。小節が変わる境目で手がもたつくと、曲がぷつっと切れます。コツは**1拍先に次のルートを準備する**こと — 今の小節の最後の音を弾きながら、目と手はもう次の場所へ向かいます。<mark>間違えても止まらず</mark>次の小節へ流れていくのが今日のすべてです。ひと小節でつまずいても、次の小節の最初の拍はいつも新しく始めるチャンスです。

今日も**4弦でも5弦でも運指は同じ**です。5弦なら低音B（5弦）を親指で眠らせておきます。**4週間前は開放弦ひと音**がすべてだったのに、今日は4つの場所を航海する手です — ゆっくり、途切れない流れからつくりましょう。4つの場所さえ手に入れば、この手でどんな曲でもルートで追えます。

## ② ビジュアル資料

今日は**4つのコードをルートで航海する2つの例**を見ます。まずひとコードずつ全音符で<mark>4つの場所をゆっくり覚え</mark>、次に4分音符で転がして**途切れない流れ**を手に刻みます。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — ルート航海（ゆっくり）。** E→C→G→Dをひと小節にひとつずつ、全音符で長く。音を鳴らしているあいだに手は**次の場所を前もって**探しておきます。最後の**緑のD**に着地します。

```json
{
  "id": "m1.w4.d3.root_navigation_4",
  "type": "tab",
  "meta": { "title": "Root navigation E-C-G-D — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 75、4弦。** 青のルート4つをひと小節にひとつずつ。E（4弦）→C（3弦）→G（4弦）→D（3弦）、最後の緑のDに着地。

```json
{
  "id": "m1.w4.d3.root_navigation_5",
  "type": "tab",
  "meta": { "title": "Root navigation E-C-G-D — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 75、5弦。** 運指は4弦と同じ。低音Bは親指で覆って眠らせておいてください。

**例2 — 4分音符で航海（今日の完成物）。** 今度は各ルートを4回ずつ4分音符で。小節が変わる境目で<mark>拍を押し込まず</mark>次のルートへ渡ります。

```json
{
  "id": "m1.w4.d3.root_quarters_4",
  "type": "tab",
  "meta": { "title": "Root walk E-C-G-D in quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦。** 各コードのルートを4回ずつ。小節の最後の音で**次の弦を前もって準備**して途切れなく。

```json
{
  "id": "m1.w4.d3.root_quarters_5",
  "type": "tab",
  "meta": { "title": "Root walk E-C-G-D in quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦。** 音と位置は4弦と同じ。低音Bはずっと眠らせておいてください。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日のR–5–8をBPM 60でまた転がします。**オクターブ・ボックスがきれいか**を確かめながら手を温めます。

**7〜17分・今日の技術**
例1（ルート航海）をBPM 75で繰り返します。<mark>手が4つの場所へ正確に移るか</mark>、**1拍先の準備**ができるかを見ます。

**17〜27分・応用（今日の完成物）**
例2（4分の航海）をBPM 75で4回 → **境目で途切れなければ**BPM 80に上げて4回。4弦で覚えたら、5弦でも同じ感覚を確認します。

**27〜30分・チェック**
今日届いたBPMを書き留め、30秒録音して**4つのコードを止まらず通過できたか**を聴いてみましょう。

**今日の完了基準：** 4コード進行E–C–G–Dをルートで、小節の境目で止まらずに4弦・5弦の両方で75〜80で途切れなく通過できる。

## ④ ヒント / よくあるミス

- **転換で拍が遅れる。** 次のコードの最初の音が遅いと流れが切れます。今の小節の最後の音で次の弦・フレットを前もって押さえておいてください。
- **間違えると止まってしまう。** ひと音間違えたくらいで止まると曲が死にます。間違えた音は流して、次のルートへ進み続けてください。
- **GとCを混同する。** どちらも3フレットで弦だけが違います — Gは4弦、Cは3弦。弦番号で見分ける習慣をつけましょう。
- **低音Bの油断（5弦）。** 場所を移すあいだずっとBは親指で覆っておいてください。航海に集中してBを逃すと低音が漏れます。
