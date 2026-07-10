---
title: "卒業 — R-5-8の完成曲を録音する日"
dayKey: "m1.w4.d4"
estMinutes: 30
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 4週間の成長をひとつの曲に込める

## ① 理論・説明

おめでとうございます。今日は<mark>卒業する日</mark>です。**4週間前の初日**を思い出してみてください — 開放弦ひと音をきれいに出すのも大変でしたね。それが今では、あなたは**ツーフィンガー**で音を出し、**ミュート**でノイズを眠らせ、**ドラムのキック**にルートを乗せ、そこに**5度とオクターブ**まで足します。これ全部がたった4週間で手に入ったなんて、すごくないですか？上手に弾くことが目標ではなく、止まらず最後まで行くことが目標です。

今日の完成曲は<mark>R–5–8ベースライン</mark>です。進行は**E–C–G–D**、ひと小節にひとコードずつ回り、パターンは小節ごとに**ルート→5度→オクターブ→5度**でオクターブ・ボックスをぽんぽん弾ませます。この進行は**入門エレキの卒業曲と同じ**なので、ギターを弾く友だちとそのまま合奏できます。コードが回る順番さえ覚えれば、あとはもうあなたの手が全部知っています。

最後のミッションは**録音**です。完成曲を<mark>最初から最後まで一度</mark>録音して、今日の自分を**4週間前の自分**に聴かせてあげてください。完璧でなくて大丈夫 — 止まらず最後まで行けたなら、それはもう**立派な卒業作品**です。数か月後にまた聴けば、今日のこの録音がどれほど大切か分かるはずです。

急がず、**BPM 80**で4小節をひとつの流れとしてつなぎます。**4弦でも5弦でも運指は同じ**で、5弦なら低音Bを親指で眠らせておけばOK。きっと4小節が短く感じるほど、手はもうぐんと育っているはずです。さあ、4週間の成長をひとつの曲に込めてみましょうか？

## ② ビジュアル資料

完成曲に入る前に、**オクターブ・ボックス**を4つのコードの場所でゆっくり予行演習します。<mark>ひとコードにつきルートとオクターブを半小節ずつ</mark>押さえて、いちばん難しい弦飛ばしを先に手に入れます。各例を**4弦・5弦の2バージョン**で載せました。

**予行演習 — オクターブ・ボックス4つの場所。** E→C→G→Dのルートとオクターブをひとコードにつき半小節ずつ。フォームが変わる場所をゆっくり、最後の**緑のDオクターブ**に着地します。

```json
{
  "id": "m1.w4.d4.octave_box_prep_4",
  "type": "tab",
  "meta": { "title": "Octave box prep E-C-G-D — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 4つのコードのルート→オクターブを半小節ずつ。弦飛ばしがなめらかになるまでゆっくり、最後の緑のDオクターブに着地。

```json
{
  "id": "m1.w4.d4.octave_box_prep_5",
  "type": "tab",
  "meta": { "title": "Octave box prep E-C-G-D — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 運指は4弦と同じ。低音Bは親指で覆って眠らせておいてください。

さあ<mark>今月の完成曲</mark>です。小節ごとに**ルート→5度→オクターブ→5度**で、E–C–G–Dを最初から最後までぽんぽん転がします。

```json
{
  "id": "m1.w4.d4.rootfifth_octave_line_4",
  "type": "tab",
  "meta": { "title": "R-5-8 bassline E-C-G-D — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦。** 小節ごとにルート→5度→オクターブ→5度（オクターブ・ボックス・バウンス）。E→C→G→D。弦を飛ばすとき弾かない弦は眠らせて濁り0。

```json
{
  "id": "m1.w4.d4.rootfifth_octave_line_5",
  "type": "tab",
  "meta": { "title": "R-5-8 bassline E-C-G-D — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦。** 音と位置は4弦と同じ。低音B（5弦）でDのルートを1オクターブ下（5弦3フレット）でより重く鳴らす選択肢もあります（任意）。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
この3週間のルート・ミュート・キック合わせと、昨日の4コード航海をBPM 60〜70でほぐします。**手が4つの場所を覚えているか**を確かめます。

**7〜17分・今日の技術**
予行演習（オクターブ・ボックス4つの場所）をBPM 70で繰り返します。<mark>4つのコードで弦飛ばしがなめらかか</mark>、**オクターブがくっきりか**を見ます。

**17〜27分・応用（今月の完成曲）**
R–5–8の完成曲をBPM 70で最初から最後まで → **4小節が途切れなく**つながったら目標BPM 80に上げて丸ごと回します。4弦・5弦の両方をひとつの流れで。

**27〜30分・チェック**
目標BPMで完成曲を丸ごと一度録音します。**4週間前の初日の自分**に聴かせるつもりで。

**今日の完了基準：** R–5–8ベースラインの曲（E–C–G–D）をツーフィンガーで最初から最後まで止まらずに、4弦・5弦の両方でBPM 80で録音できる。（1か月卒業作品！）

## ④ ヒント / よくあるミス

- **転換で拍が遅れる。** 小節が変わるときにもたつくと曲が切れます。予行演習で変わる場所を前もって手に入れておいてください。
- **完璧から欲張る。** 今日は傷のない演奏が目標ではありません。止まらずに最後まで行くだけで、もう卒業作品です。
- **録音を飛ばす。** 録音は恥ずかしいものではなく、成長の証拠です。1回だけ残しておくと、あとで大きな贈り物になります。
- **低音Bの油断（5弦）。** 完成曲のあいだずっとBは親指で覆っておいてください。曲に集中してBを逃すと低音が漏れます。

## 卒業 — 4週間の成長、そして次の旅

振り返ると、4週間で本当にたくさんのものを手に入れました。下の表にこのトラックの目標BPMをまとめました。となりの欄にあなたが実際に届いたBPMを書いておくと、次のトラックが終わるときにもう一度成長を確かめられます。

| 週 | 完成物 | 目標BPM | 私のBPM |
|---|---|---|---|
| 1週目 | 最初の音 — 両手のE·Aルートパルス | 65 | |
| 2週目 | ミュートの2音ルートライン（E-G-A-E） | 70 | |
| 3週目 | 8ビートのルートライン（2コード） | 75 | |
| 4週目 | R-5-8の完成曲（E-C-G-D） | 80 | |

**さあ、次はどこへ？** 今日の完成曲は終わりではなく始まりです。3つの道があなたを待っています。

- **もっと弾むリズムが良かったなら → シャッフル & バウンス・トラック。** スウィングの跳ねるリズムでラインに弾力を足します。
- **指先のグルーヴがしびれたなら → スラップ/ファンク・トラック。** 親指のスラップとポップで、体が自然に揺れるグルーヴをつくります。
- **もっと音をつなぎたいなら → ウォーキング・ベース・トラック。** ルートとルートのあいだを音でつないで歩く、ジャズのラインを学びます。

どの道も、今日のこの手から始まります。4週間、本当におつかれさまでした — あなたはもうベースを弾く人です。
