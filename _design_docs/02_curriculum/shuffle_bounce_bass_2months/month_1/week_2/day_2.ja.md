---
title: "ブギー上行 — R-5-6-b7の階段を上る"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — ブギー・ウォーク上行、R-5-6-b7

## ① 理論・解説

昨日はルートと**5度**で最初の二段を置きました。今日はその上に二段を足して、<mark>R-5-6-b7で階段を跳ねて上ります。</mark>この上行の動きこそシャッフル・ブルースの骨格、**ブギー・ウォーク**です。ルートから一段ずつ上へ歩いて上る手の形を、今日まるごと覚えます。

新しく足す二つの音は**6度**と**b7度**です。**6度**は**C#**（3弦4フレット）、**b7度**は**D**（3弦5フレット）です。昨日覚えた**5度B**（3弦2フレット）のすぐ上へ指が一段ずつ上ります。<mark>3弦で2・4・5フレットを順に踏めば5-6-b7が完成します。</mark>

右手は昨日と同じ**ツーフィンガー**で人差し指・中指を交互にします。一音が一拍ずつ、**R（開放E）→ 5（B）→ 6（C#）→ b7（D）**の順にきちんと上ります。まだシャッフルを強く転がすより、<mark>四つの音が階段のように均等につながることに先に集中します。</mark>指が順番を覚えれば転がりは自然に付いてきます。

この**R-5-6-b7**の手の形の一番の長所は<mark>どのコードへ移しても同じだということです。</mark>今日はキー**E**で覚えますが、ルートをAへ移せばその場で同じフォームがそのまま通じます。だから一度覚えれば一生使えます。**5弦**なら運指は同じで、低音**B**だけ寝かせておけばいいです。**速度は忘れて**、階段をきちんと踏むことから体に刻みます。

## ② ビジュアル資料

今日は二つです。まず**ブギー・ウォークの手の形（R-5-6-b7）**を指板でまるごと見て、次にその四つの音を一拍ずつ**上行**で上ります。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まず**ブギーの手の形マップ**です。青三つがルート・5度・6度、無色一つが**b7度（D）**です。<mark>4弦開放から3弦の2・4・5フレットへ続く階段です。</mark>

```json
{
  "id": "m1.w2.d2.boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** ルート**E**（4弦開放）→ **5度B**（2フレット）→ **6度C#**（4フレット）→ **b7 D**（5フレット）。指が踏む場所を目に焼き付けます。

```json
{
  "id": "m1.w2.d2.boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は寝かせておき、四つの階段だけに集中します。

今度は**ブギー上行**です。一音が一拍ずつ、Rからb7まで階段を歩いて上ります。<mark>四つの音が途切れずつながる流れを感じます。</mark>

```json
{
  "id": "m1.w2.d2.boogie_ascent_4",
  "type": "tab",
  "meta": { "title": "Boogie ascent R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70、シャッフル。** **R（E）→ 5（B）→ 6（C#）→ b7（D）**を一拍ずつきちんと。ロング-ショートのフィールをほんの少し乗せて階段を上ります。

```json
{
  "id": "m1.w2.d2.boogie_ascent_5",
  "type": "tab",
  "meta": { "title": "Boogie ascent R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆い、上行の間ずっと漏れないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の**R-5シャッフル**を開放EでBPM 60に転がして手をほぐします。ロング-ショートが生きているか確認して始めます。

**10〜20分 · 頭のトレーニング**
音を出さず**R-5-6-b7**の手の形だけとてもゆっくり押さえて上ります。<mark>指が2・4・5フレットの順番を覚えているか</mark>目を閉じても確認します。

**20〜40分 · 実践**
**ブギー上行**を**BPM 70**で反復します。四つの音が階段のように均等につながるのが目標 — 速くしようとしません。4弦で覚えたあと5弦でも同じ手の形を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**四つの音がはっきり階段のように**上るか聴いてみます。今日到達したBPMも記録します。

**今日の完了基準：** R-5-6-b7のブギー上行をBPM 70で四つの音が均等につながるように、4弦・5弦のどちらでも上れる。

## ④ ヒント・よくあるミス

- **6度とb7が紛らわしい。** 4フレットと5フレットが隣り合うので位置を外しやすいです。とてもゆっくり2・4・5フレットを押さえて順番を固めます。
- **上るほど速くなる。** 階段の上の方で急ぎがちです。四つの音の間隔を同じに保ちます。
- **音が途切れる。** 指の到着が遅れて階段の間が空きます。次の音を先に準備してつなげて踏みます。
- **低音Bの油断（5弦）。** 手が3弦の上の方まで忙しくなってもBは親指で覆っておきます。
