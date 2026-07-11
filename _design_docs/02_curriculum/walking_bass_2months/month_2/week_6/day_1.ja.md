---
title: "クロマチック・エンクロージャー — ターゲット音を上下から狭めて着地"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — クロマチック・エンクロージャー、ターゲット音を上下から狭めて着地

## ① 이론/설명

いよいよ6週目、ウォーキングベースの最後の週です。先週ii-V-Iまで歩けたなら、今週はターゲット音に**もっと強く吸い込まれるように**近づく方法を学びます。その技術の名前が**クロマチック・エンクロージャー（enclosure）**です。<mark>ターゲット音を半音上と半音下から狭めて着地</mark>する、ジャズ・ウォーキングの上級の近づき方です。

原理はシンプルです。ターゲット音が**F**なら、まず半音上の**Gb**を押さえ、続いて半音下の**E**を押さえ、最後に**Fに着地**します。上から一度、下から一度 — 二つの隣り合う音がターゲットを両側から包み、狭めてきます。<mark>狭まってくる緊張が着地をより強く</mark>します。

順番を体に刻みましょう — **上 → 下 → 着地**。エンクロージャーはターゲット音が何であれ（ルートでも3度でも）同じように使える万能の道具です。今日はその第一歩として、ターゲット**F**を包んで一度着地してみましょう。上のGbと下のEが、Fという家へ<mark>両側から扉を閉めるように</mark>連れて行ってくれます。

まず、ターゲット**F**を包む三つの音 — 上の**Gb**、下の**E**、そして着地点の**F**を指板で見てみましょう。

```json
{
  "id": "m2.w6.d1.enclosure_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" },
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 上の**Gb**（4弦2フレット）、下の**E**（4弦開放）、着地の**F**（4弦1フレット）です。緑の点が着地ターゲットです。

```json
{
  "id": "m2.w6.d1.enclosure_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" },
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

では、このエンクロージャーを**時間の上に**乗せて歩いてみましょう。上のGb → 下のE → 着地のFを1拍ずつ歩き、最後の4拍目はFの**3度A**へつなげます。<mark>三つの音がターゲットへ狭まっていく流れ</mark>を耳で感じてみましょう。各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w6.d1.enclosure_land_4",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦.** 1拍目**Gb** → 2拍目**E** → 3拍目**F着地** → 4拍目**A（3度）**です。包んで狭めたあと、Fにきっちり降り立ちます。

```json
{
  "id": "m2.w6.d1.enclosure_land_5",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦.** 音と位置は4弦と同じです。低音Bでより重い低域を乗せられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
先週のii-V-IウォーキングをBPM 72で一度歩き、指先にスイング4分音の感覚を呼び戻します。

**10〜20分・ブレイントレーニング**
下の準備例でエンクロージャーを**BPM 60**のゆっくりしたスイング4分音で一音ずつ押さえます。<mark>上・下二つの隣り合う音がFへ正確に狭まるか</mark>を音で確かめます。

```json
{
  "id": "m2.w6.d1.enclosure_land_slow_4",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** エンクロージャーをゆっくり。上のGb・下のEを通り、Fに正確に着地します。

```json
{
  "id": "m2.w6.d1.enclosure_land_slow_5",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**包んで着地**をBPM 80で繰り返します。<mark>着地のFが手前の二つの音よりはっきり強く</mark>聞こえるか観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／フィードバック**
30秒録音して、包んで狭めたあとFに降り立つ瞬間がはっきりしているか聴いてみましょう。着地が弱ければ、上・下の二つの音を少し短く切ってみます。

**今日の完了基準：** ターゲットFを半音上Gb・半音下Eで包んだあと、スイング4分音で4弦・5弦の両方でFにきっちり着地できる。

## ④ 팁 / 흔한 실수

- **着地を急いでしまう。** 上・下を包むうちに嬉しくなって3拍目のFを引っかけて早く押さえがちです。二つの隣り合う音はそれぞれ正確に1拍ずつ、Fは自分の拍に降ろします。
- **下の隣り合う音を抜かしてしまう。** 上のGbだけ押さえてすぐFに行くと、エンクロージャーになりません。上・下を両方通ってこそ、狭まってくる緊張が生まれます。

今日包んだターゲット、F一点を目に刻んでおきましょう。エンクロージャーは結局、この一点へ連れて行く技術です。

```json
{
  "id": "m2.w6.d1.target_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 今日の着地点F（4弦1フレット）です。緑の点一つに、すべてのエンクロージャーが集まります。

```json
{
  "id": "m2.w6.d1.target_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでより低いFも見当をつけられます。

- **初日の自分をほめましょう。** エンクロージャーという上級の近づき方の扉を開けただけで大きな一歩です。明日はこのエンクロージャーでコードの**ルート**を狙い、ウォーキングの出発点をさらに固めます。
