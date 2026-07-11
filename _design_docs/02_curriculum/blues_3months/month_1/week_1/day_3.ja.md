---
title: "ブギー・リフ — 5度・6度・b7で歩く"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — R-5-6-b7で弾んで歩いて登る

## ① 理論・説明

昨日、二つの手の形（ルート+5度、ルート+6度）を手に馴染ませましたね？今日はここにたった一音、**b7（4弦5フレット）**を足して、本物の**ブギー・リフ**を完成させます。ルートの上を5度→6度→b7と弾んで歩いて登るこの動きが、<mark>ブルースが『歩く』音</mark>です。そのb7が一つ加わった瞬間、のっぺりしたリフにわずかな『緊張の味』が生まれ、ぐっとブルースらしくなります。

動きは4弦一本ですべて起こります。**2フレット＝5度**、**4フレット＝6度**、**5フレット＝b7** — 5弦開放A（ルート）はそのまま敷き、上の指だけを歩いて登らせます。指は5度＝人差し指、6度＝薬指、b7＝**小指**を使うと広げやすいです。

手が歩く地図からまず見ましょう。

```json
{
  "id": "m1.w1.d3.boogie_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie map on the 4th string — 5, 6, b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **4弦で5→6→b7。** 5弦開放Aの上を、人差し指・薬指・小指が順番に歩いて登ります。

ブギーの古典的な順番は**R-5-6-b7-6**です。登ってから6度へ少し降りて小節を締めると、あの有名な『チャッ・カッ・チャッ・カッ』のグルーヴが出ます。今日の目標は、この<mark>一小節を滑らかに</mark>つなぐことです。

小指がb7まで届かなくても大丈夫です。手首を少し前に押すとぐっと楽になります。今日は速さより**一音も抜けないこと**が目標です。この一小節が手に付けば、明日シャッフルまで乗せて<mark>完成形のA7ブギー</mark>になります。今日はスピード勝負ではなく、四音を丁寧につなぐ『連結』がすべてです。ゆっくり行くほど、かえって早く身に付きます。

## ② ビジュアル資料

では地図を音に移してみましょう。正拍の4分音符で、**R+5 → R+6 → R+b7 → R+6**の一小節です。（明日はここにシャッフルを乗せます。）

```json
{
  "id": "m1.w1.d3.boogie_1bar",
  "type": "tab",
  "meta": { "title": "A7 boogie riff — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 70、シャッフルで。** 5弦開放を押さえ続けたまま、4弦で指を開いて閉じます。<mark>弾む感じ</mark>が出れば成功。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 55。昨日の二つのダブルストップ（5度・6度）を交互に押さえて手をほぐします。<mark>ルートが鳴り続けているか</mark>を確認。

**10〜20分 · 頭のトレーニング（今日のターゲット＝b7の追加）**
5度・6度に慣れた手に、**小指のb7**だけを新しく乗せてみます。音を出さず5→6→b7を往復。

下の二分音符版で、四音を一つずつはっきり確認します。

```json
{
  "id": "m1.w1.d3.boogie_slow",
  "type": "tab",
  "meta": { "title": "Boogie connection — slow (half notes)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 55, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 55、シャッフルで。** R+5、R+6、R+b7、R+6を長く。各ダブルストップが全部鳴っているか聴きます。

**20〜40分 · 実践ブギー（一小節 / BPM 70）**
R-5-6-b7-6の一小節を**途切れず**繰り返します。<mark>指が引っかからず歩いているか</mark>を見ます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音してチェック：<mark>四音が全部聞こえるか</mark> ／ <mark>b7で途切れないか</mark>。

**今日の完了基準：** R-5-6-b7-6のブギー・リフ一小節を、BPM 70で音抜けなくつないで弾ける。

## ④ ヒント / よくあるミス

ブギー・リフでよく詰まるところだけを整理しました。

```json
{
  "id": "m1.w1.d3.pinky_reach",
  "type": "fretboard_diagram",
  "meta": { "title": "Pinky reach — b7 at fret 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **6度→b7は小指で。** 薬指（4フレット）のすぐ隣に小指（5フレット）を付けます。

- **b7が押さえられない。** 小指の力が足りません。手首を前に押し、小指の先を立てます。
- **リフがつぶれる。** 指を先に全部開いておくと音が重なります。必要な瞬間だけ押さえます。
- **ルートが消える。** 上の指に気を取られて開放Aが鳴りません。5弦は常に生かして。
- **拍が急ぐ。** b7まで伸ばそうとして急ぎます。遅くていいので五音を均等に。
