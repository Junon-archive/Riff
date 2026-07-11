---
title: "スケール接近・ドミナント接近 — 接近音の三つの顔"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — スケール接近とドミナント接近、橋の架け方を広げる

## ① 理論・解説

昨日は半音で次のルートを狙う**クロマチック接近**を身につけました。今日は接近音の種類をさらに二つ増やします。<mark>接近音はクロマチックだけではありません。</mark>スケールから一歩、そしてコードから大きく一回 — 二つの新しい橋を学びます。

一つ目は**スケール接近**です。次のルートへ向かうスケールのすぐ隣の音（全音）を4拍目に置きます。次のコードがBbなら、Fスケールの中の**C**（Bbの全音上）から一歩下りてBbへ入ります。クロマチックよりゆったりで、調の中にあるので<mark>耳にとても自然に聞こえます</mark>。

二つ目は**ドミナント接近**です。次のルートの5度上の音、つまりそのコードのドミナントを4拍目に置き、4度上（または5度下）へひょいと飛び越えます。Bbのドミナントは**F**です。4拍目にFを置くとBbへ強く解決する感覚が生まれます。半音のようにそっと寄り添うのではなく、<mark>跳躍で次のコードを宣言する</mark>やり方です。

まとめると接近音は三種類です — **クロマチック**（半音）、**スケール**（全音）、**ドミナント**（5度跳躍）。今日は後ろの二つを手に馴染ませます。三つとも規則は同じです — <mark>接近音は4拍目、着地は次の1拍目</mark>。

まず次のコード**Bb**へ向かう二つの接近音、スケールCとドミナントFをフレットボードで見ます。

```json
{
  "id": "m1.w3.d2.approach_types_bb_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to Bb — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" },
    { "string": 2, "fret": 3, "label": "F", "role": "passing" }
  ]}
}
```

▶ **4弦。** ルートBb（3弦1フレット）と、スケール接近C（3弦3フレット）・ドミナント接近F（2弦3フレット）です。

```json
{
  "id": "m1.w3.d2.approach_types_bb_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to Bb — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" },
    { "string": 2, "fret": 3, "label": "F", "role": "passing" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

## ② ビジュアル資料

では二つの接近音をラインに入れます。一つ目の例は**スケール接近**（C→Bb）、二つ目は**ドミナント接近**（F→Bb）です。<mark>どちらも4拍目に接近音、次の1拍目にBb着地です。</mark>すべての例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w3.d2.approach_scale_4",
  "type": "tab",
  "meta": { "title": "Scale approach (C to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76、4弦。** 4拍目C（3弦3フレット）がBbの全音上から一歩下ります。次の1拍目にBbへ着地。

```json
{
  "id": "m1.w3.d2.approach_scale_5",
  "type": "tab",
  "meta": { "title": "Scale approach (C to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

今度は**ドミナント接近**です。4拍目Fから5度をひょいと飛び越えてBbへ入ります。

```json
{
  "id": "m1.w3.d2.approach_dom_4",
  "type": "tab",
  "meta": { "title": "Dominant approach (F to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "F", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76、4弦。** 4拍目F（2弦3フレット）はBbのドミナントです。5度上からBbへ強く解決します。

```json
{
  "id": "m1.w3.d2.approach_dom_5",
  "type": "tab",
  "meta": { "title": "Dominant approach (F to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "F", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76、5弦。** 音と位置は4弦と同じです。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のクロマチック接近（半音上・下）をBPM 72で一度歩きます。三つ目の接近音を学ぶ前に手をほぐします。

**10〜20分 · 頭のトレーニング**
下の準備例で**スケール接近**を一つ取り出してゆっくり覚えます。4拍目Cから全音のBbへ<mark>やわらかく降りて着地する</mark>感覚です。

```json
{
  "id": "m1.w3.d2.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Scale approach and land, slow (C to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66、4弦。** 4拍目を急がなくてよいです — Fルートから、Cを経て、全音符Bbへとてもゆっくり降りて着地します。

```json
{
  "id": "m1.w3.d2.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Scale approach and land, slow (C to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66、5弦。** 音と位置は4弦と同じです。

**20〜40分 · 実践**
上の二つの例（スケール・ドミナント）を**BPM 76**で交互に歩きます。<mark>どちらの接近がより強く次のコードを呼ぶか</mark>比べます。4弦で覚えたあと、5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、三つの接近音（クロマチック・スケール・ドミナント）を並べて聴いてみます。曲の雰囲気に応じてどの接近が合うか想像しておくとよいです。

**今日の完了基準：** スケール接近（全音）とドミナント接近（5度跳躍）を4拍目に置き、次の小節の1拍目に着地しながら、クロマチックまで三つの接近音の違いを4弦・5弦どちらでも説明できる。

## ④ ヒント・よくあるミス

- **スケール接近が平板になる。** 全音接近はなめらかさが長所ですが、着地音をはっきり鳴らしてこそ方向が生きます。接近音より次の1拍目が大きくなければなりません。
- **ドミナント跳躍がずれる。** FからBbへ跳ぶとき手が急ぐと音がぼやけます。跳躍の前に着地位置を目で先に押さえておきます。

Fへ戻るときも同じです。下はFへ向かうスケール接近**G**・ドミナント接近**C**です。

```json
{
  "id": "m1.w3.d2.approach_types_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "G", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" }
  ]}
}
```

▶ **4弦。** ルートF（4弦1フレット）と、スケール接近G（2弦5フレット）・ドミナント接近C（3弦3フレット）です。

```json
{
  "id": "m1.w3.d2.approach_types_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "G", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

- **三つの接近を選んで使う。** クロマチックはそっと、スケールはなめらかに、ドミナントは力強く — 同じ着地でも色が違います。今日は三つの顔を見分けておくだけで十分です。明日はこの接近音を実際のウォーキングラインに入れます。
