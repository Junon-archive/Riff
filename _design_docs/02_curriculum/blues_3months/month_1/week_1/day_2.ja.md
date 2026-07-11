---
title: "ダブルストップの手の形 — 二音を一つのように"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — ルート+5度、ルート+6度で厚い音を

## ① 理論・説明

昨日作ったシャッフル・フィールの上に、今日はいよいよ『音』を乗せます。でも一音ではなく、**二音を同時に**押さえて鳴らすのが今日の主役、**ダブルストップ**です。二本の指が一つの音のようにぴたりと鳴ると、薄かった開放Aが急に<mark>厚くて詰まったブルーストーン</mark>に変わります。一音のときより音の重みがぐっと乗り、バンドの中でも自分のリズムがはっきり聞こえるのが大きな魅力です。

今日使う二組はきっちり決まっています。**ルート（R）**は必ず**5弦開放A**で敷き、その上に**4弦2フレットの5度（E）**を人差し指で乗せれば『ルート+5度』ダブルストップの完成です。これがブギー・リフの<mark>最も安定した骨格</mark>になります。

ルート+5度の手の形から目で覚えていきましょう。

```json
{
  "id": "m1.w1.d2.dstop_5th",
  "type": "fretboard_diagram",
  "meta": { "title": "A double stop — root + 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **開放A + 4弦2フレット。** 6・3・2・1弦はミュート、二音だけをはっきりと。

ここから4弦の指だけを**2フレット（5度）から4フレット（6度）**へ少し広げれば、弾む『ルート+6度』ダブルストップになります。5度は人差し指、6度は**薬指**で押さえると、あとでb7まで伸ばすのが楽です。二つの形を手が覚えるよう、**手の形ダイアグラム**を目に焼き付けておきましょう。

最初は二本の弦が一緒に鳴らなかったり、隣の弦が連れて鳴ったりします。まったく普通です。指先を立てて**はっきりした二音**だけを残せば、<mark>一つに溶け合った音</mark>が出ます。この手の形一つで、明日習うブギー・リフは半分完成したようなものです。しかもこの二つの手の形は、これから習うすべてのブギーとリフの出発点なので、今日覚えておけば長く心強いです。

## ② ビジュアル資料

二つの手の形を並べて見ましょう。まず『ルート+6度』 — 4弦だけを**4フレット**へ移した、<mark>弾んで明るい音</mark>です。

```json
{
  "id": "m1.w1.d2.dstop_6th",
  "type": "fretboard_diagram",
  "meta": { "title": "A double stop — root + 6th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **開放A + 4弦4フレット（薬指）。** 5度より一つ広がります。6弦は親指で軽くミュート。

では二つのダブルストップを交互に弾いてみましょう。**ルート+5度 → ルート+6度**の順で、一音ずつはっきりと。

```json
{
  "id": "m1.w1.d2.dstop_play",
  "type": "tab",
  "meta": { "title": "Root+5 and Root+6 double stops", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 70、正拍で。** 二音が同時に鳴るか耳で確かめながら一音ずつ。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。昨日の開放Aシャッフルで手をほぐしつつ、右手が5弦・4弦の二本だけを正確に弾いているか確認します。<mark>要らない弦には触れない</mark>。

**10〜20分 · 頭のトレーニング（今日のターゲット＝二つの手の形の切り替え）**
5度（2フレット）と6度（4フレット）の間を、**薬指だけ**開いて閉じ、音を出さず手の形だけ往復します。

下のゆっくり版で、二音が一緒に鳴るか確認します。

```json
{
  "id": "m1.w1.d2.dstop_slow",
  "type": "tab",
  "meta": { "title": "Double stops — slow (half notes)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60、二分音符で。** ルート+5度、ルート+6度をそれぞれ長く。二音のバランスを聴きます。

**20〜40分 · 実践ダブルストップ（BPM 70）**
ルート+5度とルート+6度を交互に**途切れず**転がします。<mark>二音が一つのようにぴたりと合うか</mark>を見ます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音してチェック：<mark>二音が両方鳴っているか</mark> ／ <mark>隣の弦のノイズがないか</mark>。

**今日の完了基準：** ルート+5度、ルート+6度のダブルストップを、BPM 70で隣弦のノイズなくはっきり交互に押さえられる。

## ④ ヒント / よくあるミス

ダブルストップでよくつまずくところだけをピンポイントで拾いました。

```json
{
  "id": "m1.w1.d2.dstop_reach",
  "type": "fretboard_diagram",
  "meta": { "title": "4th string reach — 5th (fret 2) to 6th (fret 4)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" }
  ]}
}
```
▶ **4弦だけ移動。** 5度（2フレット）↔6度（4フレット）、5弦開放Aはそのまま保ちます。

- **一音しか鳴らない。** 指先が寝ているか力不足です。先を立てて二本の弦に均等に力を入れます。
- **隣の弦が連れて鳴る。** 6・3弦が開いて唸ります。押さえる指の側面と右手で軽くミュートします。
- **ルートが揺れる。** 5弦開放を逃すと根が消えます。開放Aは常に鳴らしておきます。
- **手首が固まる。** 5度↔6度の切り替えが硬いなら、薬指だけ柔らかく開いて閉じます。
