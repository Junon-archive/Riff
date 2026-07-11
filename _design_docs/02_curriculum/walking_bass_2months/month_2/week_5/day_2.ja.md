---
title: "Gm7 → C7 をつなぐ — アプローチノートでiiからVへ"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — Gm7 → C7 をつなぐ、アプローチノートでiiからVへ

## ① 이론/설명

昨日は3つのコードのトーンを手になじませました。今日はそのうち<mark>最初の2つ、Gm7とC7を1つにつなぎます</mark>。コードトーンを並べるだけだと、音がぶつぶつ途切れて聞こえます。コードとコードの間に**橋**を架けてこそ歩みは自然につながり、その橋こそが**アプローチノート**です。

アプローチノートは、次のコードの**ルートのすぐ隣の音**です。C7へ渡るには、Gm7の小節の最後の4拍目に、Cの半音上**Db**（または半音下のB）を置きます。すると4拍目のDbが、次の小節の1拍目Cへ<mark>半音すべり込むように</mark>吸い込まれます。この半音の引力が「Vへ渡る橋」です。

ルールは先月と同じ — **1拍目は着地、4拍目は橋。** Gm7の小節の1・2・3拍目はコードトーン（R・b3・5）で埋め、最後の4拍目にだけアプローチノートを置いてCを狙います。アプローチノートはコードトーンでなくてかまいません。<mark>たった1拍、次のコードへの足場</mark>だからです。今日はこのGm7→C7のつなぎ目1つに集中して、iiからVへ渡る感覚を手になじませます。

まずCへ向かう2つの橋、半音上の**Db**と半音下の**B**を指板で見ましょう。

```json
{
  "id": "m2.w5.d2.approach_to_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to C (B below, Db above) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" }
  ]}
}
```

▶ **4弦.** 真ん中がC7の着地点C（3弦3フレット）、半音下のB（3弦2フレット）と半音上のDb（3弦4フレット）が両側の橋です。

```json
{
  "id": "m2.w5.d2.approach_to_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to C (B below, Db above) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

では、Gm7を1小節歩き、4拍目のアプローチノート**Db**で次の小節の**C7**へ渡ります。4拍目のDbが<mark>Cへ半音すべり込むか</mark>を耳で確かめましょう。すべての例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w5.d2.gm7_to_c7_4",
  "type": "tab",
  "meta": { "title": "Gm7 to C7 with approach — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4弦.** 1小節目はGm7（G-Bb-D）を歩き、4拍目のDb（3弦4フレット）で橋を架け、2小節目のC7のCへ半音で着地します。

```json
{
  "id": "m2.w5.d2.gm7_to_c7_5",
  "type": "tab",
  "meta": { "title": "Gm7 to C7 with approach — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5弦.** 音と位置は4弦と同じです。低音Bは覆っておきましょう。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日のGm7・C7のアルペジオをBPM 72で一度歩き、2つのコードのトーンを指先に呼び戻しましょう。

**10〜20分・頭のトレーニング**
下の準備例で、Gm7→C7のつなぎ目を**BPM 60**の遅いスイング4分音で押さえます。<mark>4拍目のDbが次の1拍目Cへ半音でくっつくか</mark>を音で確かめましょう。

```json
{
  "id": "m2.w5.d2.gm7_to_c7_slow_4",
  "type": "tab",
  "meta": { "title": "Gm7 to C7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4弦.** 4拍目のDbから次の1拍目Cまで、半音1つがつながるかを手と耳で合わせましょう。

```json
{
  "id": "m2.w5.d2.gm7_to_c7_slow_5",
  "type": "tab",
  "meta": { "title": "Gm7 to C7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**つなぎ目**をBPM 80で2小節の循環として繰り返します。<mark>Gm7の歩みが4拍目のDbから自然にCへ渡るか</mark>を観察しましょう。4弦でなじませてから5弦でも確認します。

**40〜50分・録音／フィードバック**
30秒録音して、2小節のつなぎ目が滑らかか聴いてみましょう。4拍目のアプローチノートが次のコードを予告する感じになれば成功です。

**今日の完了基準：** Gm7を1小節コードトーンで歩き、4拍目のアプローチノートDbでC7のルートへ半音で着地するii→Vのつなぎ目を、スイング4分音で4弦・5弦の両方でつなげる。

## ④ 팁 / 흔한 실수

- **アプローチノートを早く置きすぎます。** アプローチノートは4拍目だけ、最後の1拍です。2・3拍目までアプローチノートを使うとコードの響きがぼやけます。1・2・3拍目はコードトーン、4拍目だけを橋として守りましょう。
- **橋からの着地が遅れます。** 4拍目のDbを押さえて次のCへ渡るとき、手がためらうと拍が押します。半音1つですから、次のCの位置をあらかじめ目で押さえておきましょう。

Gm7の5度DからアプローチノートDbを経てCへ下りる、最後の3歩を一目で見ておきましょう。半音ずつすべり込む道です。

```json
{
  "id": "m2.w5.d2.bridge_d_db_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "D to Db to C, the last three steps — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 5, "label": "D", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** Gm7の5度D（3弦5フレット）→アプローチノートDb（3弦4フレット）→C7のC（3弦3フレット）、半音ずつ下りる橋です。

```json
{
  "id": "m2.w5.d2.bridge_d_db_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "D to Db to C, the last three steps — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 5, "label": "D", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

- **一歩前へ進んだ自分をほめましょう。** 今日は2つのコードを1つにつなぎました。あとはC7から家Fmaj7へ渡る最後の橋だけです。明日はそのV→Iの解決をつないで、ii-V-Iを完成へ導きます。
