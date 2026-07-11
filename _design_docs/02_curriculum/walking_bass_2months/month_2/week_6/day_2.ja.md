---
title: "ルート・エンクロージャー — ウォーキングの出発点を包んで着地"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — ルート・エンクロージャー、ウォーキングの出発点を包んで着地

## ① 이론/설명

昨日はエンクロージャーの概念を学びました。今日はそのエンクロージャーを**ウォーキングの出発点**、つまりコードの**ルート**に狙います。各小節の1拍目はルートに着地する、とこの1か月半ずっと学んできましたね。<mark>その1拍目のルートを包んで入ると</mark>、小節の第一歩がずっと固くなります。

F調でii コード**Gm7**のルートは**G**です。このGを包んでみましょう — 半音上の**Ab**、半音下の**F#**を通ったあと**Gに着地**します。上のAbと下のF#がGを両側から狭めてくると、1拍目のルートが<mark>避けられず吸い込まれる</mark>感覚になります。

順番は昨日と同じです — **上 → 下 → 着地**。ただ今日は着地点がコードの**ルート**という点が特別です。ルートは各コードの家の住所なので、<mark>ここに包んで入ると次のコードへ移る歩みがはっきりします</mark>。今日はターゲットをルートにして、包んで着地を完成させます。

まず、ルート**G**を包む三つの音 — 上の**Ab**、下の**F#**、そして着地のルート**G**を指板で見てみましょう。

```json
{
  "id": "m2.w6.d2.enclosure_root_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around G (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 上の**Ab**（4弦4フレット）、下の**F#**（4弦2フレット）、着地のルート**G**（4弦3フレット）です。緑の点が着地ターゲットです。

```json
{
  "id": "m2.w6.d2.enclosure_root_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around G (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

では、ルート・エンクロージャーを**時間の上に**乗せて歩きます。上のAb → 下のF# → 着地のGを1拍ずつ歩き、最後の4拍目はGm7の**b3 Bb**へつなげます。<mark>1拍目のルートが包まれて強く落ち着くか</mark>を感じてみましょう。各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w6.d2.enclosure_root_4",
  "type": "tab",
  "meta": { "title": "Root enclosure on G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦.** 1拍目**Ab** → 2拍目**F#** → 3拍目**G着地** → 4拍目**Bb（b3）**です。上・下に狭めたあと、ルートGにきっちり降り立ちます。

```json
{
  "id": "m2.w6.d2.enclosure_root_5",
  "type": "tab",
  "meta": { "title": "Root enclosure on G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦.** 音と位置は4弦と同じです。低音Bでより重い低域を乗せられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日のFエンクロージャーをBPM 72で一度歩き、包んで着地する感覚を呼び戻します。

**10〜20分・ブレイントレーニング**
下の準備例でルート・エンクロージャーを**BPM 60**のゆっくりしたスイング4分音で押さえます。<mark>上のAb・下のF#がルートGへ正確に狭まるか</mark>を音で確かめます。

```json
{
  "id": "m2.w6.d2.enclosure_root_slow_4",
  "type": "tab",
  "meta": { "title": "Root enclosure on G, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** ルート・エンクロージャーをゆっくり。上のAb・下のF#を通り、Gに正確に着地します。

```json
{
  "id": "m2.w6.d2.enclosure_root_slow_5",
  "type": "tab",
  "meta": { "title": "Root enclosure on G, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**ルート・エンクロージャー**をBPM 80で繰り返します。<mark>着地のルートGが小節の柱のように固く</mark>聞こえるか観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／フィードバック**
30秒録音して、ルートGが包まれたあとはっきり着地しているか聴いてみましょう。着地がぼやけたら、上・下の二つの音を少し短く切ってみます。

**今日の完了基準：** ルートGを半音上Ab・半音下F#で包んだあと、スイング4分音で4弦・5弦の両方でルートにきっちり着地できる。

## ④ 팁 / 흔한 실수

- **下の隣り合う音F#を抜かしてしまう。** 上のAbからすぐGへ行きがちです。F#（4弦2フレット）を必ず通ってこそ、下から狭まってくる味が生きます。
- **ルートが他の音に埋もれる。** 包む二つの音（Ab・F#）を強く弾くと、肝心の着地Gが弱まります。包む音は軽く、着地のルートははっきりと、強さを分けます。

今日包んだルート、G一点を目に刻んでおきましょう。ウォーキングの各1拍目は、このように包んで入れる着地点です。

```json
{
  "id": "m2.w6.d2.target_g_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target G (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 今日の着地のルートG（4弦3フレット）です。緑の点一つが小節の出発点です。

```json
{
  "id": "m2.w6.d2.target_g_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target G (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでより低いGも見当をつけられます。

- **2日目もよく歩けています。** ルートを包んで入る感覚を身につけたので、ウォーキングの出発点がずっと固くなりました。明日はこのエンクロージャーをコードの**3度**に狙い、色のより濃い着地を作ります。
