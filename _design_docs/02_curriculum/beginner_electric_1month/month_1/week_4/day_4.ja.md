---
title: "卒業 — 完成曲を録音する日"
dayKey: "m1.w4.d4"
estMinutes: 30
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 4週間の成長を手で確かめる

## ① 理論・説明

おめでとうございます。今日は<mark>卒業する日</mark>です。4週間前の初日を思い出してください — 開放弦ひとつきれいに鳴らすのも大変でした。でもいまのあなたは、パワーコードを積み、リズムに表情をつけ、ヴァースとコーラスをつなぎ、ペンタトニックまで味見しました。今日はそのすべてを集めて<mark>1曲を最初から最後まで</mark>完成させます。これ全部がたった4週間で手に入ったなんて、驚きじゃないですか？うまく弾くのが目標ではなく、止まらずに最後まで行くのが目標です。

今日の完成曲は4つのコードが回るコーラスです — E5→C5→G5→D5。1小節に1コードずつ、ダウンストロークで開いて鳴らします。この4コードのループは、じつは数えきれない名曲の骨格です。〈Smells Like Teen Spirit〉や〈Song 2〉のような曲が、まさにこういう進行の上で転がっています。コードが回る順番さえ覚えれば、あとはもうあなたの手が全部知っています。タブはそれぞれ好きな曲でつないでいけばOK — 今日この手が、その曲たちの扉を開いてくれます。

最後のミッションは<mark>録音</mark>です。完成曲を最初から最後まで一度録音して、今日の自分を4週間前の自分に聴かせてあげてください。完璧でなくて大丈夫。最後まで止まらずに行けたなら、それはもう立派な卒業作品です。数か月後に聴き返せば、今日のこの録音がどれほど大切か分かるはずです。さあ、最後の1曲を残してみましょうか。

## ② ビジュアル資料

完成曲に入る前に、4つのコードの転換をゆっくり予行練習します。1コードにつき2拍ずつ、フォームが変わる場所を手に入れます。

```json
{
  "id": "m1.w4.d4.change_prep",
  "type": "tab",
  "meta": { "title": "Change prep — E5 C5 G5 D5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 80。4つのコード（E5→C5→G5→D5）を1コードにつき2拍ずつ。フォームが変わる場所をゆっくり手に入れ、最後の緑のD5に着地します。

では<mark>今月の完成曲</mark>です。1小節に1コードずつ、ダウンストロークで開いて鳴らすコーラスを最初から最後まで。

```json
{
  "id": "m1.w4.d4.chorus_loop",
  "type": "tab",
  "meta": { "title": "Power chord chorus loop (E5–C5–G5–D5)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E minor", "tempoBpm": 100, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ **BPM 100、ダウンストロークで開いて。** 1小節に1コード（E5→C5→G5→D5）を4回ずつ鳴らします。ヴァースをパームミュートで刻んだあと、このコーラスで手刀を離して開いて鳴らすと、曲が「はじける」感じが出ます。無限に繰り返しても飽きない進行です。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
BPM 80でこの3週間のパワーコードのフォーム（E5・C5・G5・D5）を1つずつ握って離し、手をほぐします。

**7〜17分・今日の技術**
転換プレップをBPM 80で繰り返します。4つのコードが変わる場所で<mark>止まらずに</mark>フォームがなめらかにつながるか確認します。

**17〜27分・応用（今月の完成曲）**
コーラス・ループをBPM 90で最初から最後まで回します → 途切れなくできたら目標BPM 100へ1段上げます。4小節を1つの流れで、ダウンストロークで開いて。

**27〜30分・チェック**
目標BPMで完成曲をまるごと一度録音します。4週間前の初日の自分に聴かせるつもりで。

**今日の完了基準：** パワーコードの曲（E5–C5–G5–D5のコーラス）を最初から最後まで止まらずに弾いて録音できる。（1か月卒業作品！）

## ④ ヒント / よくあるミス

- **コード転換で拍が遅れる。** 小節が変わるときにもたつくと曲が切れます。転換プレップで変わる場所を前もって手に入れて。
- **完璧から欲張る。** 今日は傷のない演奏が目標ではありません。止まらずに最後まで行くだけで、もう卒業作品です。
- **録音を飛ばす。** 録音は恥ずかしいものではなく、成長の証拠です。1回だけ残しておくと、あとで大きな贈り物になります。
- **ダウンストロークの揺れ。** コーラスは全部ダウンで押すと音が固くなります。腕が疲れたらBPMを少し下げてもOK。

## 卒業 — 4週間の成長、そして次の旅

振り返ると、4週間で本当にたくさんのものを手に入れました。下の表にこのトラックの目標BPMをまとめました。となりの欄にあなたが実際に届いたBPMを書いておくと、次のトラックが終わるときにもう一度成長を確かめられます。

| 週 | 完成物 | 目標BPM | 私のBPM |
|---|---|---|---|
| 1週目 | 最初の音 — 開放弦・オルタネイトピッキング | 60 | |
| 2週目 | 最初のリフ — 単音リフ | 80 | |
| 3週目 | 最初のロック・リフ — パームミュートのパワーコード・リフ | 90 | |
| 4週目 | 最初の曲 — パワーコードのコーラス曲 | 100 | |

**さあ、次はどこへ？** 今日の完成曲は終わりではなく始まりです。3つの道があなたを待っています。

- **ソロが良かったなら → スケール/ソロ・トラック。** 今日味見したペンタトニックのボックス1を本格的にマスターし、あなたの最初のソロを完成させます。
- **リズムがしびれたなら → ファンク・リズム・トラック。** 右手のグルーヴを磨いて、体が自然に揺れるリズムをつくります。
- **もっとコードを積みたいなら → コード・ビルディング・トラック。** パワーコードの先の本物のコードで曲を伴奏し、コンピングします。

どの道も、今日のこの手から始まります。4週間、本当におつかれさまでした — あなたはもうギターを弾く人です。
