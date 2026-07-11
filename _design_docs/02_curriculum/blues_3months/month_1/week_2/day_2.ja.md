---
title: "ブギーを移す — D7・E7ブギー"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 同じ手の形をD7・E7へ移す

## ① 理論・説明

昨日三つのコードを手に入れたので、今日は1週目の**ブギー・リフ**をそのままD7・E7へ移します。驚きの事実が一つ。<mark>ブギーの手の形はコードが変わっても同じです。</mark>ルートを押さえ、すぐ隣の弦で**5度→6度→b7→6度**と指を開いて閉じる、あの形を覚えていますか。これをコードごとにルート弦だけ替えてそのまま乗せればいいのです。新しい手の形を一から覚えるのではなく、すでに覚えた一つを場所だけ移すので、ずっと楽です。ギターでは、こうして一つの形を色々な場所に移して使うことがとても多いです。今日その原理を初めて体で感じます。ですから手が混乱しても焦らず、場所だけをゆっくり確認しましょう。

肝心なのはルート弦です。A7は5弦、D7は4弦、E7は6弦がルートです。<mark>ルートが一弦移れば、歩く弦も並んで一弦移ります。</mark>だからA7ブギーは**5・4弦**、D7ブギーは**4・3弦**、E7ブギーは**6・5弦**で同じように歩きます。ルートがどの弦にあっても、歩く場所はいつもそのすぐ隣の弦です。この一つのルールをつかめば、三つのコードが全部同じ絵のように見えてきます。

今日はD7とE7のブギーをそれぞれ一小節ずつはっきり覚えます。もう**シャッフル・フィール**で転がしても、正拍で押さえても構いません。<mark>大切なのは、手の形がコードを越えてそのままつながるという感覚です。</mark>

まず**D7ブギー**の手の形です。

```json
{
  "id": "m1.w2.d2.d7_boogie_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "D7 boogie shape — root on 4th string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **4弦開放のD**がルート、3弦で人差し指・薬指・小指が歩きます。

## ② ビジュアル資料

では音で確認します。**D7ブギー**一小節です。

```json
{
  "id": "m1.w2.d2.d7_boogie",
  "type": "tab",
  "meta": { "title": "D7 boogie — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフルで。** 4弦開放Dを押さえ、3弦で5度（2フレット）→6度（4フレット）→b7（5フレット）→6度と歩きます。

次は**E7ブギー**です。今度は6弦がルートなので低音がより重くなります。<mark>手の形はA7・D7と同じで、歩く弦だけが6・5弦へ下りました。</mark>

```json
{
  "id": "m1.w2.d2.e7_boogie",
  "type": "tab",
  "meta": { "title": "E7 boogie — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフルで。** 6弦開放Eを押さえ、5弦で5度（2フレット）→6度（4フレット）→b7（5フレット）→6度と歩きます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。A7ブギー一小節で手を温めます。<mark>ロング・ショートのシャッフルが生きているか</mark>を足で確認します。

昨日のA7ブギーからD7ブギーへ移る動きを、ゆっくりつないでみます。

```json
{
  "id": "m1.w2.d2.warmup",
  "type": "tab",
  "meta": { "title": "Boogie move A7 to D7 — slow warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
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
▶ **BPM 65、シャッフルで。** 1小節A7（5弦ルート）、2小節D7（4弦ルート） — 同じ手の形が一弦上へ移っただけです。

**10〜20分 · 頭のトレーニング（今日のターゲット＝ルート弦の移動）**
ブギーの順番（5-6-b7-6）はそのまま、**ルート弦だけ5→4→6**へ移すと頭に描きます。

**20〜40分 · 実践D7・E7ブギー（各一小節 / BPM 80）**
D7ブギーとE7ブギーを交互に繰り返します。<mark>ルートが毎拍鳴るか</mark> ／ <mark>歩く弦がきれいか</mark>を見ます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
各ブギーを30秒ずつ録音：<mark>三つのコードのブギーが同じ手の形に聞こえるか</mark>。

**今日の完了基準：** D7ブギー（4弦ルート）とE7ブギー（6弦ルート）をそれぞれ一小節ずつシャッフルで転がせる。

## ④ ヒント / よくあるミス

ブギーを移すときによく出るミスです。

```json
{
  "id": "m1.w2.d2.e7_mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "E7 boogie — keep it on strings 6 and 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true }
  ]}
}
```
▶ **E7ブギーは6・5弦だけで。** 4・3弦が漏れると音が汚くなります。使わない弦は指先で止めます。

- **ルート弦を混同する。** A7＝5弦、D7＝4弦、E7＝6弦。移す前にルート弦をまず見つけます。
- **手の形が変わる。** コードが変わっても5-6-b7-6の順番はそのままです。フレット間隔を同じに保ちます。
- **D7で歩く弦がぼやける。** 3弦4フレット（6度）を薬指で正確に押さえます。
- **低音が漏れる。** E7ブギーで4弦が鳴るとこもります。右手で軽く覆います。
