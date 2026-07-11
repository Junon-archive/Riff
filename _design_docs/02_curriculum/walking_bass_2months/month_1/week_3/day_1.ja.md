---
title: "クロマチック接近 — 半音上・下から次のルートへ"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — クロマチック接近、次のコードへ橋を架ける

## ① 理論・解説

3週目が始まりました。この2週間、私たちはコードトーンでウォーキングを歩く方法を身につけました — 各1拍目でコードに着地する感覚です。今週はウォーキングの本当の秘密を一つ学びます。それが<mark>最後の拍（4拍目）に置く接近音</mark>です。**接近音**とは、次のコードへ渡る直前に、飛び石のようにそっと置いておく一つの音です。

今日のテーマは最も強力な接近音、**クロマチック接近**です。方法はとてもシンプルです。**次のコードのルートの半音上か半音下**の音を4拍目に置くのです。たとえば次のコードがBbなら、半音上のB（3弦2フレット）か半音下のA（3弦開放）を4拍目に置きます。するとその音が次の小節の1拍目Bbへ<mark>滑るように吸い込まれます</mark>。

なぜこれが効くのでしょう。半音は私たちの耳にとって最も近い距離です。半音隣の音が鳴ると、耳は次に来る目標音を先に期待します。だから接近音は次のコードを**先に狙う矢印**のような役目をします。コードトーンでなくても大丈夫です — 4拍目の接近音は通り過ぎる音なので、次の1拍目にきちんと着地しさえすれば、むしろラインを滑らかにします。

一つだけ覚えておきます。<mark>接近音は4拍目に、着地は次の1拍目に</mark>。この二つの拍の関係が今週ずっと続く**核心**です。今日は**半音上**と**半音下**、二つの方向を手に馴染ませましょう。

まず次のコード**Bb**を狙う三つの音をフレットボードで見ておきます — ルートとその両隣の半音です。

```json
{
  "id": "m1.w3.d1.approach_bb_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to Bb — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" }
  ]}
}
```

▶ **4弦。** 次のルートBb（3弦1フレット）と、半音上のB（2フレット）・半音下のA（開放）です。

```json
{
  "id": "m1.w3.d1.approach_bb_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to Bb — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

## ② ビジュアル資料

では接近音を実際のラインに入れてみます。一つ目の例は**半音上**から、二つ目は**半音下**から次のルートBbへ入ります。<mark>どちらも4拍目に接近音、次の1拍目に着地です。</mark>すべての例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w3.d1.approach_above_4",
  "type": "tab",
  "meta": { "title": "Chromatic approach from above (B to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76、4弦。** 1〜3拍はF7コードトーン、4拍目B（3弦2フレット）がBbを半音上から狙います。次の1拍目にBbへ着地。

```json
{
  "id": "m1.w3.d1.approach_above_5",
  "type": "tab",
  "meta": { "title": "Chromatic approach from above (B to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
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

今度は逆に、**半音下**のAから上がってBbへ入ります。

```json
{
  "id": "m1.w3.d1.approach_below_4",
  "type": "tab",
  "meta": { "title": "Chromatic approach from below (A to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76、4弦。** 4拍目A（3弦開放）がBbを半音下から狙います。下から半音押し上げて着地。

```json
{
  "id": "m1.w3.d1.approach_below_5",
  "type": "tab",
  "meta": { "title": "Chromatic approach from below (A to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76、5弦。** 音と位置は4弦と同じです。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
2週目のF7→Bb7 アルペジオ・ウォーキングをBPM 72で一度歩きます。指先にウォーキングの感覚を呼び戻します。

**10〜20分 · 頭のトレーニング**
下の準備例で、接近音を一つだけ取り出して練習します。1小節4拍目の**B**から2小節の全音符Bbへ<mark>ゆっくり滑って着地する</mark>感覚を感じます。

```json
{
  "id": "m1.w3.d1.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Approach and land, slow (B to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66、4弦。** 4拍目Bが次の小節の全音符Bbへ吸い込まれます。とてもゆっくりその引き込みを感じます。

```json
{
  "id": "m1.w3.d1.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Approach and land, slow (B to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66、5弦。** 音と位置は4弦と同じです。

**20〜40分 · 実践**
上の二つの例（半音上・半音下）を**BPM 76**で交互に歩きます。<mark>4拍目の接近音が次の1拍目へ滑るか</mark>耳で確認します。4弦で覚えたあと、5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、接近音が次のコードを自然に呼ぶか聴いてみます。半音上と半音下のどちらが気に入るかメモしておきます。

**今日の完了基準：** 次のコードのルートの半音上・半音下のクロマチック接近音を4拍目に置き、次の小節の1拍目に正確に着地しながら、4弦・5弦どちらも歩ける。

## ④ ヒント・よくあるミス

- **接近音がコードトーンのように大きい。** 4拍目の接近音は短く軽く、次の1拍目の着地音をより明確に鳴らします。接近音が主役になってはいけません。
- **接近を早く置きすぎる。** 接近音は必ず4拍目です。2〜3拍目に置くとコードトーンがぼやけ、着地が弱くなります。

Fへ戻るときの接近音も先に見ておきます。下はFを狙う半音下の**E**・半音上の**F#**です。

```json
{
  "id": "m1.w3.d1.approach_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4弦。** F（4弦1フレット）と、半音上のF#（2フレット）・半音下のE（2弦2フレット）です。

```json
{
  "id": "m1.w3.d1.approach_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

- **次のコードを先に狙う。** 接近音の目的地は常に次のコードのルートです。ウォーキングが循環するとき、Fへ戻る小節でも同じ原理を使います。今日は半音上・下の二つの方向を手に馴染ませるだけでも大きな一歩です。
