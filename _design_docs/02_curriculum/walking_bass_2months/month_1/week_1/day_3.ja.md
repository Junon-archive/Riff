---
title: "コードトーンの上り下り — アルペジオ・ウォーキング"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — コードトーンの上り下り、三つのコードをつないで歩く

## ① 理論・解説

これまでコードトーンを下から上へ踏んで上るだけでしたね。今日は**上り下り** — 上った道をそのまま**たどって下りてくる**練習を足します。ウォーキングは一方向にだけ歩くものではありません。上ってから<mark>また下りて次のコードへ橋を架ける</mark>のが本当の歩みです。上ることだけ知っていては半分で、下りることまで知ってこそどこへでもつなげられます。

やり方は簡単です。F7なら**R-3-5-b7**で上ったあと、いちばん上の**b7**を頂点にして**b7-5-3-R**の順で下りてきます。上るとき押さえた場所を逆にたどるだけなので、新しく覚えることはありません。このとき<mark>頂点のb7でなめらかに方向を変えること</mark>が鍵です。下りるとき音がぼやけやすいので、上るときと同じくらいはっきり踏みます。

ここでもう一歩進みます。**アルペジオ・ウォーキング** — 一つのコードのコードトーンを4分音符でなぞったあと、次のコードのコードトーンへ自然に移るのです。今日は**F7 → Bb7 → C7**の順で、一小節に一コードずつアルペジオをつないで歩きます。コードが変わったら<mark>そのコードのルートからまた踏み始める</mark>だけです。これがウォーキングベースの最も基本の骨組みです。

下のマップで**F7の上り下りの道**を目に描いてみます。

```json
{
  "id": "m1.w1.d3.f7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (up and down path) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** ルートFから上り、b7 Ebで方向を変えてまたRへ下ります。同じ四つの場所を往復するのです。

```json
{
  "id": "m1.w1.d3.f7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (up and down path) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは手で覆っておきます。

**5弦**ならこの上り下りも4弦と同じです。慣れたら低音B弦を使って、より低いルートから出発する代替ラインも試せます。今日はまず**そろった往復**とコード同士のつなぎに集中します。

## ② ビジュアル資料

では音で覚えます。まず**F7の上り下り**を弾き、続けて**F7からBb7へ**移る二コードのウォーキングを練習します。<mark>コードが変わる瞬間</mark>がウォーキングでいちばんスリリングな場所です。すべての例は**4弦・5弦の二つのバージョン**です。

まずは**F7の上り下り**です。R-3-5-b7で上ってb7-5-3-Rで下ります。

```json
{
  "id": "m1.w1.d3.f7_updown_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72、4弦。** 一小節目は上り、二小節目は下ります。頂点のb7でなめらかに方向を変えます。

```json
{
  "id": "m1.w1.d3.f7_updown_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72、5弦。** 音と位置は4弦と同じです。低音Bは覆っておき、慣れたらより低く広げてみます。

次は**F7 → Bb7の二コード・ウォーキング**です。各コードを一小節ずつアルペジオで歩きます。

```json
{
  "id": "m1.w1.d3.f7_bb7_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、4弦。** 一小節目F7、二小節目Bb7。コードが変わったらそのコードのルートからまた始めます。

```json
{
  "id": "m1.w1.d3.f7_bb7_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、5弦。** 音と位置は4弦と同じです。低音Bは手で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日覚えた三つのコードのアルペジオをBPM 70で上りながら一度ずつほぐします。**三つの家の位置**を指先に呼び戻します。

**10〜20分 · 頭のトレーニング**
F7の上り下りをとてもゆっくり反復しながら、**頂点のb7で方向を変える地点**を手に馴染ませます。<mark>下りるときも上るときと同じくらいはっきり</mark>が目標です。

**20〜40分 · 実践（今日の完成物）**
下のF7 → Bb7 → C7アルペジオ・ウォーキングを**BPM 72**で反復します。一小節に一コードずつ、コードが変わるときルートからまた踏んで自然につなげます。

```json
{
  "id": "m1.w1.d3.three_chord_walk_4",
  "type": "tab",
  "meta": { "title": "F7-Bb7-C7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、4弦。** 三つのコードを一小節ずつアルペジオでつないで歩きます。コードの境目で途切れないよう流れるように。

```json
{
  "id": "m1.w1.d3.three_chord_walk_5",
  "type": "tab",
  "meta": { "title": "F7-Bb7-C7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、5弦。** 音と位置は4弦と同じです。低音Bは覆っておき、慣れたらより低く広げてみます。

**40〜50分 · 録音・フィードバック**
30秒録音して、コードが変わる**継ぎ目がなめらかか**聴いてみます。途切れたり拍がもたつく所があれば、その部分だけゆっくり歩き直します。

**今日の完了基準：** F7・Bb7・C7のコードトーンを4分音符で上り下りし、三つのコードを一小節ずつつないだアルペジオ・ウォーキングをBPM 72で途切れなく歩ける。

## ④ ヒント・よくあるミス

- **下りるときにぼやける。** 上るときははっきりしているのに、下りるとき音がつぶれやすいです。下りだけ切り離してゆっくり練習します。

```json
{
  "id": "m1.w1.d3.f7_down_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio descending only — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **4弦。** b7-5-3-Rの順で下りてくる道です。各音を上るときと同じくらいはっきり踏みます。

```json
{
  "id": "m1.w1.d3.f7_down_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio descending only — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは手で覆っておきます。

- **コードの境目で拍がもたつく。** コードが変わる瞬間に手が遅れるとグルーヴが崩れます。変わる一拍前に次のルートをあらかじめ狙います。
- **速度を急ぐ。** 72で継ぎ目がなめらかでないのに上げると全部ぐらつきます。なめらかさが先です。
- **低音Bの油断（5弦）。** 位置を上り下りするときにBに触れると低音が漏れます。使わないBは常に覆っておきましょう。
