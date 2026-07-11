---
title: "12小節ブギー完成 — 2週目の決勝線"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — ブギーを12小節へつないで完成させる

## ① 理論・説明

2週目の決勝線です。今日はこれまでのかけらをすべて合わせます。**12小節フォーム**（D3）の上に、**移したブギー**（D2）を乗せて一周を完成させます。<mark>コードが変わるたびに、ブギーのルート弦だけ5→4→6へ乗り換えればいいのです。</mark>新しく学ぶことはありません。すでに手にあるものをつなぐだけです。今週ずっと一つずつ積んできたかけらが、今日ついに一曲の形にまとまります。パズルの最後の一片をはめる気持ちで、気楽に始めましょう。完璧でなくても大丈夫です。一周を最後まで回りきること自体が、今日の大きな達成です。

今日の核心は**移動**です。ブギーの手の形はそのまま、コードが変わる瞬間に**ルート弦だけを一弦上か下へ**移します。例えば1小節A7から2小節D7へ行くとき、5弦で歩いていた手が4弦へまるごと上がります。手全体がエレベーターのように隣の弦へすっと移ると考えれば簡単です。<mark>指の間隔は一つも変わりません。</mark>

三つのブギーのルートの場所をもう一度見ておきます。

```json
{
  "id": "m1.w2.d4.boogie_roots",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie roots — A7 str5, D7 str4, E7 str6", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **A7＝5弦、D7＝4弦、E7＝6弦ルート。** この三つの開放弦の上を同じ手の形が歩きます。

今日完成させる代表的な移動は**A7→D7**です。この二小節が滑らかなら、ほかのコード移動も同じ原理なのですぐつながります。ですから今日はこの一回の移動さえ体にしっかり刻めば、12小節全体が自然についてきます。コードが変わるたびに毎回新しく悩まなくても、手が自分で隣の弦を見つけていくようになります。

## ② ビジュアル資料

今週の完成物、代表的な移動です。<mark>ブルース一曲は結局、この一つの塊をコードだけ替えて移動させる構造です。</mark>1小節**A7ブギー**、2小節**D7ブギー** — 同じ手の形が一弦ずつ移ります。

```json
{
  "id": "m1.w2.d4.boogie_move",
  "type": "tab",
  "meta": { "title": "Boogie move A7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1小節A7（5弦ルート）、2小節D7（4弦ルート） — **同じ手の形が一弦ずつ上へ**移っただけ。E7は6弦ルートで同じフォーム。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。A7ブギー一小節でシャッフルを取り戻します。<mark>ロング・ショートが生きているか</mark>を足で確認します。

今度はターンアラウンドの移動、**E7→D7**をつないでみます。V度からIV度へ下りる場所です。

```json
{
  "id": "m1.w2.d4.boogie_move_e7_d7",
  "type": "tab",
  "meta": { "title": "Boogie move E7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1小節E7（6弦ルート）、2小節D7（4弦ルート）。低音から始めて4弦へ下ります。

**10〜20分 · 頭のトレーニング（今日のターゲット＝コードごとのルート弦の乗り換え）**
12小節を頭の中で回しながら、コードが変わる瞬間に**ルート弦（5→4→6）**を先に準備します。

**20〜40分 · 実践12小節ブギー（BPM 80）**
D3の12小節地図の上にブギーを乗せて<mark>途切れず</mark>一周します。<mark>コードが変わるときブギーが途切れないか</mark>を見ます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
12小節ブギー一周を必ず録音します：<mark>三つのコードの移動が滑らかに聞こえるか</mark>。

**今日の完了基準：** 12小節フォームの上にA7・D7・E7ブギーを乗せ、シャッフルで途切れず一周演奏して録音できる。 — 今週の成果物：Aブルース12小節ブギー（2週目完成！）

## ④ ヒント / よくあるミス

12小節ブギーをつなぐときによく出るミスです。

```json
{
  "id": "m1.w2.d4.mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep only the boogie strings ringing", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true }
  ]}
}
```
▶ **ブギーの弦だけ鳴らします。** A7ブギーで6弦・3弦が漏れると音が濁ります。使わない弦は指先で止めます。

- **移動の瞬間にリズムが途切れる。** コードが変わってもシャッフルは止まりません。足でロング・ショートを踏み続けます。
- **ルート弦を見つけるのが遅い。** 次のコードのルート弦を一拍早く準備します。
- **E7で低音が重い。** 6弦ルートは良いですが、4・3弦が漏れるとこもります。
- **録音の省略。** 2週目の結果はこの12小節ブギーです。短くても必ず残し、来週と比べます。
