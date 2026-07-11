---
title: "4拍目に接近音を入れる — 接近音が生きているウォーキングライン"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 4拍目に接近音を入れて、ウォーキングラインを完成させる

## ① 理論・解説

二日間、接近音の三種類を学びました — クロマチック、スケール、ドミナント。今日はいよいよその接近音を<mark>実際のウォーキングラインの中に入れて</mark>みます。これまでは接近音を一つだけ取り出して練習しましたが、今日からはコードトーンで歩きながら、**4拍目で接近音によって橋を架けます**。

規則はシンプルです。一つの小節をこう埋めます — **1拍目ルート、2・3拍目コードトーン、4拍目接近音**。前の三拍は今のコードにしっかり立ち、最後の一拍が次のコードへ手を伸ばします。すると次の小節の1拍目が<mark>待っていたかのように着地</mark>します。これがウォーキング一小節の完成形です。

今日のラインはF7→Bb7の二小節です。1小節はF7のR-3-5を踏み、4拍目に**A**（Bbの半音下）で橋を架けます。2小節はBb7のR-3-5を踏み、4拍目に**E**（Fの半音下）で橋を架けて最初のFへ戻ります。接近音が二つのコードを<mark>切れ目なくつなぐ</mark>輪になります。

接近音を選ぶときはたった一つだけ考えます — **次のコードのルート**。そのルートの半音上・下、全音上、または5度上のどれかを4拍目に置けばよいのです。今日は手に馴染んだ**クロマチック**から始めます。慣れたらスケール・ドミナントに差し替えてもラインは生きています。

まず今日のラインの地図を見ます — 二つの着地点**F・Bb**と、その前の二つの接近音B・Eです。

```json
{
  "id": "m1.w3.d3.approach_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Walk targets & bridges (F, Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4弦。** 二つの着地点F（4弦1フレット）・Bb（3弦1フレット）と、接近音B（3弦2フレット）・E（2弦2フレット）です。

```json
{
  "id": "m1.w3.d3.approach_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Walk targets & bridges (F, Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

## ② ビジュアル資料

では今日のウォーキングラインです。各小節を**1拍目ルート → 2・3拍目コードトーン → 4拍目接近音**の順で歩きます。<mark>4拍目の接近音が次の小節の1拍目を呼ぶか</mark>感じながら踏みます。すべての例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w3.d3.approach_line_4",
  "type": "tab",
  "meta": { "title": "Walking line with approaches (F7-Bb7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 76、4弦。** 1小節4拍目AがBbを、2小節4拍目EがFを半音下から狙います。各1拍目はルートに着地。

```json
{
  "id": "m1.w3.d3.approach_line_5",
  "type": "tab",
  "meta": { "title": "Walking line with approaches (F7-Bb7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 76、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のスケール・ドミナント接近をBPM 72で一度ずつ歩きます。三つの接近音の感覚を指先に呼び戻します。

**10〜20分 · 頭のトレーニング**
下の準備例で**ルート → 接近音**だけを繰り返します。各小節で4拍目の接近音が次のルートを呼ぶその一歩を<mark>とてもゆっくり</mark>覚えます。

```json
{
  "id": "m1.w3.d3.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Root to approach drill, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 66、4弦。** 各小節のルートから接近音（A・E）へ一歩。接近音が次の小節のルートを呼ぶ引き込みを感じます。

```json
{
  "id": "m1.w3.d3.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Root to approach drill, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 66、5弦。** 音と位置は4弦と同じです。

**20〜40分 · 実践**
上のウォーキングラインを**BPM 76**で二小節の循環として歩きます。<mark>4拍目ごとに次のコードへ橋が架かるか</mark>確認します。4弦で覚えたあと、5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、1拍目の着地と4拍目の接近音がはっきり区別できるか聴いてみます。接近音をAの代わりにB（半音上）に差し替えて、感覚の違いもメモしておきます。

**今日の完了基準：** 各小節を1拍目ルート・2・3拍目コードトーン・4拍目接近音の順でF7→Bb7の二小節を循環し、接近音が次のコードを呼ぶ感覚を4弦・5弦どちらでも出せる。

## ④ ヒント・よくあるミス

- **4拍目で手が止まる。** 接近音を置いたあと次のルートへ移るとき切れやすいです。4拍目を鳴らしている間に左手を先に次のルートへ移しておきます。
- **接近音を長く引きずる。** 4拍目の接近音も他の拍と同じ4分音符です。それだけ長くなると拍子が揺れます。

ラインの骨組みは二つの着地点です。下のフレットボードの**F**と**Bb**さえ確かなら、残りはついてきます。

```json
{
  "id": "m1.w3.d3.roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 二小節の着地点 — F（4弦1フレット）とBb（3弦1フレット）です。

```json
{
  "id": "m1.w3.d3.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低いルートも掴めます。

- **接近音を差し替えてみる。** 今日のラインはクロマチック（半音下）ですが、同じ4拍目にスケールやドミナントを入れてもよいです。接近音は差し替えのきく部品です。明日はこのラインを今週の完成物に仕上げます。
