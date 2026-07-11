---
title: "ハンマリングの装飾 — 一度弾いて二音を流す"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — ハンマリングの装飾（流れる二音）

## ① 이론/설명

昨日は4拍目を二つの8分音符に割って次のコードへ橋を架けました。今日の装飾は**ハンマリング**です。一音を弾いたあと、右手を再び使わず、**左手の指で上のフレットを「タッ」と打ち下ろして**二つ目の音を鳴らします。右手で弾いた最初の音の響きがまだ生きているうちに、左手がその振動を受け継いで次の音を出す仕組みです。だから二つ目の音は右手で弾かなくてもはっきり鳴ります。<mark>二つの音が一つの息のようになめらかにつながります。</mark>

今日はコードトーンの**3度A**へ入るハンマリングを覚えます。半音下の**A♭**をまず弾き、すぐに**A**へハンマーして3度に着地します。半音のハンマーは距離が短く手の負担が少なく、クロマチックに染み込んで3度がより歌うように聞こえます。スキーマでは最初の音に `technique: "hammer_on"` と書きます。<mark>弾くのは一度、音は二つです。</mark>

もちろん骨組みが先です。**4分音符のウォーキングはそのまま**、その上にハンマーで二音を流します。ハンマーがぼやけると二つ目の音が死にます。<mark>左手の指をフレットのすぐ後ろに正確に、力強く下ろします。</mark>

まず、今日のハンマー・ペア — **A♭**（4フレット）→ **3度A**（5フレット）— を4弦で見てみましょう。

```json
{
  "id": "m2.w7.d3.hammer_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on pair into the third A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **4弦.** ルート**F**（1フレット）のあと、半音下の**A♭**（4フレット）を弾いて**3度A**（5フレット）へハンマーします。二つの音が同じ4弦で1フレット差でつながります。

```json
{
  "id": "m2.w7.d3.hammer_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on pair into the third A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えられます。

## ② 시각 자료

では、今日の完成物、**ハンマリング・ウォーキング**1小節です。2拍目で半音下のA♭を弾いて3度Aへハンマーし、残りは4分音符で歩きます。<mark>一度弾いて二音を流すので、歩みが滑るようになめらかになります。</mark>各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w7.d3.hammer_walk_4",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦、スイング.** 1拍目**F**（ルート）→ 2拍目前で**A♭**を弾いて**A**（3度）へ**ハンマー** → 3拍目**C**（5度）→ 4拍目**E♭**（♭7）です。ハンマーは左手だけで「タッ」、右手はA♭で一度だけ。

```json
{
  "id": "m2.w7.d3.hammer_walk_5",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦.** 音と位置は4弦と同じです。低音B弦で低域をさらに支えられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日の8分のフィル・ウォーキングをBPM 72で一度歩き、8分音符二音の感覚を呼び戻します。

**10〜20分・ブレイントレーニング**
下の準備例でハンマリング・ウォーキングを**BPM 60**のゆっくりしたスイングで押さえます。<mark>弾いたA♭と同じくらいハンマーしたAもはっきり鳴るか</mark>を音で確かめます。

```json
{
  "id": "m2.w7.d3.hammer_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** ハンマリング・ウォーキングをゆっくり。A♭を弾いたあとAへはっきりハンマーし、二音を両方生かします。

```json
{
  "id": "m2.w7.d3.hammer_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**ハンマリング・ウォーキング**をBPM 80で繰り返します。<mark>二つ目の音Aが弾いた音と同じくらい大きくはっきり</mark>聞こえるか観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／フィードバック**
ハンマリング・ウォーキング1小節を2〜3周止まらずに録音します。聴き返してハンマーした二音がなめらかに流れるか、4分音符の骨組みが揺れないかを確かめます。

**今日の完了基準：** F7の4分音符ウォーキングの2拍目でA♭を弾いて3度Aへハンマーする装飾を、二音とも明瞭に4弦・5弦で歩ける。 — 今日の完成：流れる二音。

## ④ 팁 / 흔한 실수

- **ハンマーした音がぼやけて死ぬ。** ハンマーは左手の指の正確な打撃がすべてです。フレットのすぐ後ろを力強く打ち下ろさないと二つ目の音が消えます。指先を立て、フレットの近くに「タッ」と刺します。
- **右手で二度弾いてしまう。** ハンマリングの魅力は「一度弾いて二音」です。二つ目の音まで右手で弾くと、なめらかな継ぎ目が消えます。二つ目の音は左手のハンマーだけに任せます。

今日のハンマー・ペア、4弦の半音二音を目に刻んでおきましょう。A♭から3度Aへ、1フレット上がるだけで二音が流れるようにつながります。

```json
{
  "id": "m2.w7.d3.hammer_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The hammer-on pair — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **4弦.** ハンマー・ペアです。**A♭**（4フレット）を弾き、**3度A**（5フレット）へ1フレット上がってハンマーします。

```json
{
  "id": "m2.w7.d3.hammer_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The hammer-on pair — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えられます。

- **今日の自分をほめましょう。** これでゴースト・8分のフィル・ハンマリング、三つの装飾が手に入りました。明日はこの三つを1小節に集め、**装飾ウォーキング**で第7週を完成させます。
