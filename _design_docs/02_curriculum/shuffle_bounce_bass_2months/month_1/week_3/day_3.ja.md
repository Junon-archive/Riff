---
title: "12小節を巡回 — なめらかなコードチェンジ"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 12小節を巡回、なめらかなコードチェンジ

## ① 理論・解説

これで三つの位置がすべて手にあります — I(E7)・IV(A7)・V(B7)。今日はこの三つを**順番に**つないで<mark>12小節を一周します。</mark>ブルースは12小節が一周です。順番さえ体に馴染めば曲になります。昨日までは位置を一つずつ別々に覚えたなら、今日はその位置を糸で通して一つのラインにつなぐ日です。

12小節の順番はこうです。**| E7 | A7 | E7 | E7 |** 次に **| A7 | A7 | E7 | E7 |** そして **| B7 | A7 | E7 | B7 |** — 四つの行ではなく、三つのまとまりです。<mark>各小節でそのコードのブギー・フォームをそのまま乗せるだけです。</mark>十二小節をまるごと覚えようとすると大変ですが、四小節ずつ三つのまとまりに分けるとずっと軽くなります。まとまりごとにコードがどう流れるか、まず目に慣らします。

カギは**コードが変わる瞬間**です。今日の本当の練習はブギーではなく、その**継ぎ目**です。次のコードのルートを<mark>1拍前に目で見つけておけば</mark>、手が先に準備できてチェンジがなめらかになります。ブギー自体はもう慣れているので、あとは小節と小節をつなぐ橋だけに神経を集めればいいのです。継ぎ目がなめらかになれば曲全体が生きてきます。

速度は忘れます。今日は12小節を**止まらず**通過するのが目標です。最初は小節ごとに止まっても大丈夫です。<mark>チェンジの直前だけとてもゆっくり、そのあとつなぎます。</mark>切れた場所を一つずつ埋めていくと、ある瞬間に十二小節が一息でつながります。**5弦**なら運指は同じです。

## ② ビジュアル資料

今日は二つです。まず**I・IV・V三つのルートの地図**を指板で見て、次にコードが変わる前半4小節の**チェンジ例**を覚えます。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まず**三つのルートの位置**です。**E**（4弦開放）がI、**A**（3弦開放）がIV、**B**（3弦2フレット）がVです。<mark>三つの位置さえ分かれば12小節のどこへでも行けます。</mark>

```json
{
  "id": "m1.w3.d3.i_iv_v_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "I-IV-V roots E A B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 青三つがそれぞれI(E)・IV(A)・V(B)のルートです。ここにブギーの階段を乗せればそのコードが完成します。

```json
{
  "id": "m1.w3.d3.i_iv_v_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "I-IV-V roots E A B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音B弦は寝かせて三つのルートだけ目に焼き付けます。

今度は**チェンジ例**です。12小節の前半4小節、**E7 → A7 → E7 → E7**をつなぎました。<mark>コードが変わる継ぎ目だけに集中します。</mark>

```json
{
  "id": "m1.w3.d3.change_4bars_4",
  "type": "tab",
  "meta": { "title": "First 4 bars E7-A7-E7-E7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80、シャッフル。** 1小節E7 → 2小節A7でルートが4弦から3弦へ渡ります。この渡りを1拍前に準備します。

```json
{
  "id": "m1.w3.d3.change_4bars_5",
  "type": "tab",
  "meta": { "title": "First 4 bars E7-A7-E7-E7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日までに覚えた**三つのブギー**を一つずつBPM 60に転がして手をほぐします。E・A・Bの三つの位置を順に押さえます。

**10〜20分 · 頭のトレーニング**
コードチェンジだけとてもゆっくり練習します。**E7 → A7**、**A7 → B7**の継ぎ目を<mark>次のルートを1拍前に見ながら</mark>つなぎます。

**20〜40分 · 実践**
前半4小節の**チェンジ例**を**BPM 80**で反復します。コードが変わってもロング-ショートが切れないのが目標です。慣れたら12小節全体へ伸ばします。

**40〜50分 · 録音・フィードバック**
30秒録音して**コードチェンジがなめらかか**聴いてみます。どこで切れたか印をつけておきます。

**今日の完了基準：** I-IV-Vの順にブギー・フォームを移し、コードチェンジでロング-ショートを切らさず前半4小節をBPM 80で通過できる。

## ④ ヒント・よくあるミス

- **チェンジで止まる。** 次のコードを目で見つけるのが遅いです。ルートを1拍前に見る習慣をつけます。
- **位置を間違える。** Eは4弦、Aは3弦開放、Bは3弦2フレット — 三つをはっきり区別します。
- **チェンジでロング-ショートが切れる。** コードが変わる瞬間にシャッフル・フィールを失いやすいです。継ぎ目でも前の音を長く守ります。
- **低音Bの油断（5弦）。** 位置を頻繁に移す日ほど、使わない低音弦を親指で覆っておきます。
