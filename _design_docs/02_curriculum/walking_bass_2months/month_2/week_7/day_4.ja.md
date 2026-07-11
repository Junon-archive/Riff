---
title: "装飾ウォーキング — ゴーストと8分フィルでF7に息を（第7週 完成）"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — 装飾ウォーキング（F7、ゴースト+8分フィル）

## ① 이론/설명

第7週の最終日です。今週身につけた三つの装飾 — **ゴースト**、**8分音符のフィル**、ハンマリング — の感覚を集め、今日は**装飾ウォーキング**1小節に織り込みます。F7の4分音符の骨組みの上にゴースト（「チャッ」）と8分フィルを載せた、今週の完成物です。1小節の中で骨組みと装飾がどう溶け合うか、ゴーストやフィル、接近音まで今週学んだことがこの一小節に集まります。<mark>まっすぐな歩みが一つ一つの装飾で息をします。</mark>

小節の流れはこうです。1拍目**F**（ルート）→ 2拍目前A（3度）に続いて後ろの「アンド」に**ゴースト（「チャッ」）** → 3拍目C（5度）→ 4拍目**B**（次のコードへ渡る接近音）です。2拍目の8分音符二音（A+ゴースト）がフィルのように歩みへ息を入れ、4拍目のBが次の小節へ橋を架けます。<mark>4分音符の骨組みはそのまま、装飾だけがその間に染み込みます。</mark>

この小節はF7一つのコードの上で回る練習なので、繰り返すと自然にループになります。大事なのは相変わらず順序です。**骨組みが先**、ゴーストとフィルはその上にそっと。今日はこの1小節を手に完全に馴染ませ、録音で第7週を締めくくります。<mark>2か月の旅のウォーキングが、いま息をし始めます。</mark>

まず、今日歩く骨組み音とゴーストの位置を**指板**で見てみましょう。

```json
{
  "id": "m2.w7.d4.ornament_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornamented walk map (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4弦.** 今日の地図です。骨組み — ルート**F**・3度**A**・5度**C** — に、ゴーストの位置（3弦開放、x）と接近音**B**（3弦2フレット）を加えたものです。

```json
{
  "id": "m2.w7.d4.ornament_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornamented walk map (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えられます。

## ② 시각 자료

では、今週の完成物、**装飾ウォーキング**1小節です。F7の4分音符の上に、2拍目のゴーストと8分フィル、4拍目の接近音を載せました。<mark>三歩はきっちり、その間で小さな一歩が息をします。</mark>各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w7.d4.ornament_walk_4",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦、スイング4分音.** 1拍目**F**（ルート）→ 2拍目**A**（3度）+**ゴースト（「チャッ」）** → 3拍目**C**（5度）→ 4拍目**B**（接近音）です。2拍目の後ろにゴーストをそっと入れて小さな一歩を作り、4分音符の骨組みはそのまま保ちます。

```json
{
  "id": "m2.w7.d4.ornament_walk_5",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦.** 音と位置は4弦と同じです。低音B弦で低域をさらに支えられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日のハンマリング・ウォーキングをBPM 72で一度歩き、4分音符の骨組みの上に装飾を載せる感覚を呼び戻します。

**10〜20分・ブレイントレーニング**
下の準備例で装飾ウォーキングを**BPM 60**のゆっくりしたスイングで押さえます。<mark>2拍目のゴーストが表拍を押しのけず、4拍目のBがはっきり接近するか</mark>を音で確かめます。

```json
{
  "id": "m2.w7.d4.ornament_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** 装飾ウォーキングをゆっくり。4分音符の骨組みを守り、2拍目の後ろに「チャッ」を入れ、4拍目のBで橋を架けます。

```json
{
  "id": "m2.w7.d4.ornament_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**装飾ウォーキング**をBPM 80で繰り返します。<mark>4分音符の骨組みは微動だにせず、ゴーストだけが小さな一歩のように</mark>息を入れるか観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／卒業**
いよいよ録音です。装飾ウォーキング1小節を2〜3周止まらずに録音し、その中でいちばん良いテイクを自分の最初の装飾ウォーキングとして残しましょう。4弦・5弦の両方を残せば第7週の完成です。

**今日の完了基準：** F7の4分音符ウォーキングにゴースト（「チャッ」）と8分フィルを載せた装飾ウォーキングを、4分音符の骨組みを揺るがさずに4弦・5弦で録音できる。 — 週間の成果物：自分の最初の装飾ウォーキングベースの録音。（第7週の完成！）

## ④ 팁 / 흔한 실수

- **装飾を一度に全部入れようとする。** 今日の1小節には、2拍目のゴースト一つと8分フィルで十分です。三つの装飾を毎拍に詰め込むと歩みがおしゃべりになります。4分音符の骨組みが先、装飾は必要な分だけ。
- **4拍目のBを急いで引く。** 4拍目のBは次のコードへ渡る接近音なので、自分の拍にきっちり踏んでこそ次の小節へ自然につながります。嬉しくてBを引っかけて早めず、小節の終わりを落ち着いて締めます。

今日の装飾ウォーキング、その1小節の地図を目に刻んでおきましょう。骨組みF・A・Cの上にゴーストと接近音が染み込み、まっすぐな歩みが息をする図です。

```json
{
  "id": "m2.w7.d4.ornament_summary_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Week 7 ornamented walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4弦.** 第7週の完成地図です。骨組み音**F・A・C**に、ゴースト（「チャッ」）と接近音**B**が溶け合い、ラインが息をします。

```json
{
  "id": "m2.w7.d4.ornament_summary_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Week 7 ornamented walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えられます。

- **第7週の自分を大きくほめましょう。** まっすぐなだけだった4分音符のウォーキングに、ゴースト（「チャッ」）・8分フィル・ハンマリングを加え、ラインが息をするようにしました。今やあなたのウォーキングは、一歩ごとに小さな一歩が生きる、歌うベースになりました。2か月の旅、本当に見事に歩いてきました。
