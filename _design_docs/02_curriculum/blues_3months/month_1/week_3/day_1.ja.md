---
title: "9thコード — ブギーに洗練された色を足す"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — A9でブギーに洗練された色を足す

## ① 理論・説明

3週目の初日です。この2週間はブギーで12小節を歩いてきましたね。今週はその上に表情を乗せます。今日の主役は**9thコード**、その中でも**A9**です。<mark>9thコードは、今まで使ってきたA7に音を一つ足しただけのコードです。</mark>A7がA・C#・E・G（1・3・5・b7）なら、A9はそこに**9度のB**を足します。この一音が、ブギーよりずっと粋で都会的な、ジャズとソウルの香りのする色を作ってくれます。

手の形を見ましょう。開放A7が5弦から`x 0 2 0 2 0`だったなら、**A9**は`x 0 2 4 2 3`です。5弦開放が**ルートA**で、新しく足した3弦4フレットがまさに**9度（B）**です。<mark>この9度の一音が音の表情を変える核心なので、譜面では黄色で強調しておきました。</mark>残りの音はもう馴染みのあるコードトーンなので、青色で表示しました。

今日はこの一つのコードをきれいに鳴らすことだけに集中します。**A7**を弾いてすぐ続けて**A9**を弾いてみると、<mark>急に都会的で洗練された感じに変わるのが</mark>耳でわかります。コード一つでこれだけ雰囲気が変わるのが、今週のリズム変奏の最初のボタンです。指同士が押し殺し合わず、五つの音がはっきり鳴れば今日は成功です。最初は四本の指が狭い場所に集まってぎこちなく感じるかもしれません。急がず、一音ずつはっきり鳴るかゆっくり確認すれば、手はすぐにこの形を覚えます。

まず馴染みのあるA7の手の形をもう一度見ましょう。

```json
{
  "id": "m1.w3.d1.a7_recall",
  "type": "fretboard_diagram",
  "meta": { "title": "Open A7 — the chord you know", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **開放A7＝`x 0 2 0 2 0`。** 5弦開放がルート、6弦は弾きません。この手の形を覚えておいてください。

## ② ビジュアル資料

今日の完成目標、**A9**コードです。<mark>指四本がそれぞれの場所に収まり、五弦が一度にはっきり鳴ることを目標にします。</mark>6弦は弾かないので指先で軽く止めておきます。

```json
{
  "id": "m1.w3.d1.a9_form",
  "type": "fretboard_diagram",
  "meta": { "title": "Open A9 — x 0 2 4 2 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "9", "role": "color" },
    { "string": 2, "fret": 2, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **A9＝`x 0 2 4 2 3`。** 5弦開放がルート、3弦4フレットの**黄色い点が9度（B）**です。

ゆっくり一弦ずつ弾いて五つの音が全部生きているか確認し、それから一度に払い下ろします。<mark>9度が鼻声のように少し飛び出せば、ちゃんと押さえられています。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。馴染みのある**A7**を一小節弾いて手をほぐします。シャッフルのロング・ショートが生きているか足で確認します。

今度は**A9**に変えて、四拍をシャッフルで払い下ろします。

```json
{
  "id": "m1.w3.d1.a9_comp",
  "type": "tab",
  "meta": { "title": "A9 comp — four shuffle strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 四拍すべて**A9**のダウンストロークです。9度の色を耳で感じてみてください。

**10〜20分 · 頭のトレーニング（今日のターゲット＝A9の手の形を固める）**
目を閉じて**A9**の手の形を作っては解くを繰り返します。<mark>指が場所を覚えると、コードを押さえる速さが上がります。</mark>

**20〜40分 · 実践A9コンピング（BPM 80）**
上の例を<mark>途切れず</mark>繰り返しながら、A7とA9を交互に弾いて色の違いを感じます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
A9を一小節録音します：<mark>五つの音が全部はっきり鳴っているか</mark>。

**今日の完了基準：** 開放**A9**（`x 0 2 4 2 3`）を五つの音がはっきり鳴るようにきれいに押さえ、シャッフルで一小節弾ける。

## ④ ヒント / よくあるミス

**A9**を初めて押さえるときによく出るミスです。

```json
{
  "id": "m1.w3.d1.a9_finger_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep the 9th ringing, mute string 6", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "finger": 4, "label": "9", "role": "color" }
  ]}
}
```
▶ **6弦は弾きません。** 5弦開放のルートから鳴らし、3弦4フレットの**9度（B）**が死なないようにします。

- **指が寝る。** 3・4の指が寝ると隣の弦に触れます。指先を立てます。
- **9度が死ぬ。** 3弦4フレットを押さえた指が隣の弦に触れると色が消えます。
- **6弦が漏れる。** A9は5弦がルートです。6弦が鳴ると音が濁ります。
- **A7と混同する。** A9は3弦が4フレット、1弦が3フレットです。開放と混同しないように。
