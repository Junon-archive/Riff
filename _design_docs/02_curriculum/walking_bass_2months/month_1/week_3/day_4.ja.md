---
title: "接近音ウォーキング F7↔Bb7 — 3週目の完成物"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 接近音ウォーキング F7↔Bb7、今週を完成させる

## ① 理論・解説

3週目の最終日です。今週、私たちは接近音一つでウォーキングをすっかり変えました — 三つの橋（クロマチック、スケール、ドミナント）を学び、昨日はそれをラインに入れました。今日はそのすべてを集めて<mark>今週の完成物</mark>を作ります。それが**接近音ウォーキング F7↔Bb7**です。

完成ラインは二小節です。二小節とも規則は同じです — **1拍目ルート、2・3拍目コードトーン、4拍目クロマチック接近音**。1小節はF7を踏み、4拍目に**B**（Bbの半音上）で橋を架け、2小節はBb7を踏み、4拍目に**E**（Fの半音下）で橋を架けてFへ戻ります。

面白いのは方向が違うことです。1小節は半音**上**から下りてBbに座り、2小節は半音**下**から上がってFに座ります。上でも下でも、<mark>次のコードのルートを半音の距離から狙う</mark>という原理は同じです。この二小節が回り続けると、接近音が二つのコードを果てしなくつなぐウォーキングになります。

このラインは今週ずっと積み上げたものの結晶です。コードトーンで歩く力（2週目）と、次のコードへ橋を架ける感覚（3週目）が一つのラインに詰まっています。<mark>BPM 80で二小節が切れ目なく回れば</mark>、あなたはもう**本物のウォーキング**を歩いています。

まず1小節のF7の音を見ます — R-3-5と4拍目の接近音**B**です。

```json
{
  "id": "m1.w3.d4.bar1_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 1 — F7 with approach B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4弦。** 1小節F7のR-3-5（4弦1・5フレット、3弦3フレット）と、4拍目の接近音B（3弦2フレット）です。

```json
{
  "id": "m1.w3.d4.bar1_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 1 — F7 with approach B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

## ② ビジュアル資料

では今週の完成物です。まず2小節のBb7の音 — R-3-5と4拍目の接近音**E** — を見て、それから<mark>二小節をつなぐ接近音ウォーキング</mark>を完成ラインとして回します。すべての例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w3.d4.bar2_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 2 — Bb7 with approach E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4弦。** 2小節Bb7のR-3-5（3弦1フレット、2弦開放・3フレット）と、4拍目の接近音E（2弦2フレット）です。

```json
{
  "id": "m1.w3.d4.bar2_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 2 — Bb7 with approach E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

では今週の完成物、**接近音ウォーキング F7↔Bb7**です。二小節を**BPM 80**のスウィング4分音符で歩きます。<mark>各小節の4拍目が次のコードへ橋を架けます。</mark>

```json
{
  "id": "m1.w3.d4.approach_walk_4",
  "type": "tab",
  "meta": { "title": "Approach-note walk F7-Bb7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
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

▶ **BPM 80、4弦。** 1小節4拍目B（3弦2フレット）はBbの半音上の接近音 → 2小節Bbへ着地。2小節4拍目E（2弦2フレット）はFの半音下の接近音 → Fへ。

```json
{
  "id": "m1.w3.d4.approach_walk_5",
  "type": "tab",
  "meta": { "title": "Approach-note walk F7-Bb7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
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

▶ **BPM 80、5弦。** 音と位置は4弦と同じです。低音Bへ下りて、同じウォーキングをより重厚に試してみます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のウォーキングラインをBPM 76で一度歩きます。二小節の循環の感覚を指先に呼び戻します。

**10〜20分 · 頭のトレーニング**
下の準備例で**二つの接近音**（B・E）だけを取り出してゆっくりつなぎます。各小節の4拍目が次のルートを呼ぶのを<mark>ゆっくり</mark>感じます。

```json
{
  "id": "m1.w3.d4.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Two bridges drill, slow (B, E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "half", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 72、4弦。** 1小節はFからBへ、2小節はBbからEへ。二つの接近音が次のルートを呼ぶ引き込みを余裕をもって覚えます。

```json
{
  "id": "m1.w3.d4.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Two bridges drill, slow (B, E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "half", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 72、5弦。** 音と位置は4弦と同じです。

**20〜40分 · 実践（今週の完成物）**
上の**接近音ウォーキング**を**BPM 80**で二小節の循環として反復します。<mark>各4拍目が次の1拍目へ滑るか</mark>確認します。4弦で覚えたあと、5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、二つの橋（B→Bb、E→F）が自然につながるか聴いてみます。今週到達したBPMを記録しておくと来週の出発点になります。

**今日の完了基準：** 接近音ウォーキング F7↔Bb7をBPM 80のスウィング4分音符で、各1拍目にルート着地・各4拍目にクロマチック接近音で二小節を切れ目なく循環し、4弦・5弦どちらも歩ける。（3週目完成！）

## ④ ヒント・よくあるミス

- **上・下の方向を取り違える。** 1小節は上から（B）下り、2小節は下から（E）上がります。方向が逆だとだけ覚えれば手が道を見失いません。
- **4拍目が急ぐ。** 完成なので嬉しくて4拍目で急ぎがちです。四拍が定規で測ったようにそろっていることが接近音より先です。

二つの着地点**F・Bb**さえ確かなら、ライン全体が揺れません。

```json
{
  "id": "m1.w3.d4.roots_4",
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
  "id": "m1.w3.d4.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低いルートも掴めます。

- **一か月を自分でほめる。** ルートだけを踏むところから始めて、コードトーンで歩き、いまや接近音で次のコードまで狙えるようになりました。大きな一歩です。来週からはこのウォーキングにより長いコード進行と多彩な接近を重ねて、本物のジャズラインへ広げていきます。
