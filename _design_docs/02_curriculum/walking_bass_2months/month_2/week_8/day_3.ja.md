---
title: "装飾を載せる+リハーサル — ゴーストと8分フィルでウォーキングに息を、止まらず循環"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — 装飾を載せる+リハーサル（フルランスルー）

## ① 이론/설명

昨日は進行の上をコードトーンと接近音で歩きました。今日はその4小節のウォーキングに第7週の語彙 — **ゴースト**（「チャッ」）と**8分フィル** — をそっと載せ、まっすぐな歩みに息を入れます。そして今日の本当の目標は**リハーサル**です — 4小節を終わりで止まらず、<mark>何周でも循環</mark>して回ることです。装飾はラインを歌わせ、循環はラインを生かします。

装飾は必要な場所だけに載せます。1小節目Gm7の2拍目（b3、Bb）の後ろに**ゴースト**をそっと入れて小さな一歩を作り、3小節目Fmaj7の2拍目（3度、A）の後ろにも同じ**ゴースト**で息を入れます。残りの拍は昨日のコードトーン・接近音の骨組みそのままです。<mark>4分音符の骨組みは揺るがず、ゴーストだけが小さな一歩のように</mark>その間に染み込みます。2小節に一つずつで十分です — 装飾を毎拍に詰め込むと歩みがおしゃべりになります。

今日の練習の核心は**完走**です。4小節目のC7ターンアラウンドが終わったら止まらず、そのまま1小節目Gm7へつないで<mark>一周が次の一周へ流れる</mark>ようにします。途中でつまずいても止まらず次の小節へ進むのがリハーサルの目的です。明日の卒業録音を前に、今日は<mark>止まらないフルランスルー</mark>を手に馴染ませます。

まず、今日ゴーストを入れる位置を、Gm7の小節を例に指板で見てみましょう。

```json
{
  "id": "m2.w8.d3.ornament_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament spot over Gm7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4弦.** 1小節目Gm7の地図です。骨組み**R(G)・b3(Bb)・5(D)**に、2拍目の後ろのゴーストの位置（3弦開放、x）と接近音**B**を加えました。

```json
{
  "id": "m2.w8.d3.ornament_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament spot over Gm7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えます。

## ② 시각 자료

では、4小節のウォーキングにゴーストを載せた**装飾ウォーキング**を歩きます。ゴーストは1・3小節目の2拍目の後ろにだけ小さな一歩として入り、残りは昨日そのままです。<mark>骨組みはきっちり、その間で小さな一歩が息をします。</mark>各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w8.d3.ornamented_walk_4",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85、4弦、スイング4分音.** 1小節・3小節の2拍目の後ろに**ゴースト（「チャッ」）**が8分音符で入ります。4分音符の骨組みはそのまま、ゴーストだけが小さな一歩のように息を入れます。

```json
{
  "id": "m2.w8.d3.ornamented_walk_5",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **5弦.** 音と位置は4弦と同じです。低音B弦で低域をさらに支えます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日の4小節のウォーキングをBPM 72で一度歩き、コードトーンの骨組みを手に呼び戻します。

**10〜20分・ブレイントレーニング**
装飾ウォーキングを**BPM 60**のゆっくりしたスイングで押さえ、<mark>ゴーストが2拍目の表拍を押しのけないか</mark>を音で確かめます。

```json
{
  "id": "m2.w8.d3.ornamented_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** 装飾ウォーキングをゆっくり。骨組みを守り、1・3小節の2拍目の後ろに「チャッ」を入れる感覚を手に刻みます。

```json
{
  "id": "m2.w8.d3.ornamented_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践（リハーサル）**
装飾ウォーキングをBPM 85で**止まらず**循環で回します。<mark>4小節目が終わったらそのまま1小節目へつなぎ</mark>、2〜3周を一つの流れで歩きます。4弦で覚えたら5弦でも確かめます。

**40〜50分・整理／録音**
今日はフルランスルーを2〜3周止まらずに録音し、循環が滑らかなテイクを残します。4弦・5弦の両方を残せば今日の完成です。

**今日の完了基準：** 装飾（ゴースト・8分フィル）を載せた4小節のウォーキングを、4小節目で止まらず1小節目へつなぎ、4弦・5弦で循環させてフルランスルーできる。 — 今日の成果物：自分の最初の装飾ウォーキングのフルランスルー。

## ④ 팁 / 흔한 실수

今日の循環リハーサル、その骨組みとなる三つのルートを目に刻んでおきましょう。三つの位置**G・C・F**を一周で回す図が手に馴染めば、明日の卒業録音がずっと楽になります。

```json
{
  "id": "m2.w8.d3.loop_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Rehearsal loop anchors — roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** リハーサル循環の三つのアンカーです。Gm7(G)・C7(C)・Fmaj7(F)を通り、4小節目のC7が再び最初の小節へ戻します。

```json
{
  "id": "m2.w8.d3.loop_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Rehearsal loop anchors — roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えます。

- **装飾を入れすぎる。** リハーサルはラインを華やかにする時間ではなく、循環を滑らかにする時間です。ゴーストは2小節に一つずつ、骨組みが先です。
- **つまずくと止まってやり直す。** リハーサルの目的は完璧ではなく完走です。一音外しても止まらず次の小節へ進み、循環を切らない習慣をつけます。

2か月前は一小節をやっと押さえていたのに、今は4小節を止まらずに回します。明日はこの循環を卒業作品として録音します。あと一日だけです。
