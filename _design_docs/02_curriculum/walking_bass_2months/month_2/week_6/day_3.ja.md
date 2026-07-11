---
title: "3度エンクロージャー — コードの色を包んで着地"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 3度エンクロージャー、コードの色を包んで着地

## ① 이론/설명

昨日はルートを包みました。今日はエンクロージャーのターゲットをコードの**3度**に移します。3度は、そのコードが明るいか（長）暗いか（短）を決める**色の音**です。<mark>ルートが家の住所なら、3度はその家の顔</mark>です。顔を包んで入ると、コードの色がいちばん濃くよみがえります。

F調の家コード**Fmaj7**の3度は**A**です。このAを包んでみましょう — 半音上の**Bb**、半音下の**G#**を通ったあと**Aに着地**します。3度に包んで落ち着くと、ルートに着地するときとは違う<mark>明るくはっきりした色</mark>が耳に届きます。

順番はいつも同じです — **上 → 下 → 着地**。3度はジャズ・ウォーキングでいちばん好んで包むターゲットです。ルートだけを狙うと歩みが単調になりますが、<mark>3度を包んで着地するとラインに表情が生まれます</mark>。今日はターゲットを3度にして、包んで着地を完成させます。

まず、3度**A**を包む三つの音 — 上の**Bb**、下の**G#**、そして着地の3度**A**を指板で見てみましょう。

```json
{
  "id": "m2.w6.d3.enclosure_third_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around A (3rd) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 6, "label": "Bb", "role": "passing" },
    { "string": 4, "fret": 4, "label": "G#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 上の**Bb**（4弦6フレット）、下の**G#**（4弦4フレット）、着地の3度**A**（4弦5フレット）です。緑の点が着地ターゲットです。

```json
{
  "id": "m2.w6.d3.enclosure_third_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around A (3rd) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 6, "label": "Bb", "role": "passing" },
    { "string": 4, "fret": 4, "label": "G#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

では、3度エンクロージャーを**時間の上に**乗せて歩きます。上のBb → 下のG# → 着地のAを1拍ずつ歩き、最後の4拍目はFmaj7の**5度C**へつなげます。<mark>包んだ3度に落ち着く色が濃く聞こえるか</mark>を感じてみましょう。各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w6.d3.enclosure_third_4",
  "type": "tab",
  "meta": { "title": "Third enclosure on A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 6, "duration": "quarter", "label": "Bb", "role": "passing" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "G#", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦.** 1拍目**Bb** → 2拍目**G#** → 3拍目**A着地** → 4拍目**C（5度）**です。上・下に狭めたあと、3度Aにきっちり降り立ちます。

```json
{
  "id": "m2.w6.d3.enclosure_third_5",
  "type": "tab",
  "meta": { "title": "Third enclosure on A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 6, "duration": "quarter", "label": "Bb", "role": "passing" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "G#", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦.** 音と位置は4弦と同じです。低音Bでより重い低域を乗せられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日のルート・エンクロージャーをBPM 72で一度歩き、包んで着地する感覚を呼び戻します。

**10〜20分・ブレイントレーニング**
下の準備例で3度エンクロージャーを**BPM 60**のゆっくりしたスイング4分音で押さえます。<mark>上のBb・下のG#が3度Aへ正確に狭まるか</mark>を音で確かめます。

```json
{
  "id": "m2.w6.d3.enclosure_third_slow_4",
  "type": "tab",
  "meta": { "title": "Third enclosure on A, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 6, "duration": "quarter", "label": "Bb", "role": "passing" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "G#", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** 3度エンクロージャーをゆっくり。上のBb・下のG#を通り、Aに正確に着地します。

```json
{
  "id": "m2.w6.d3.enclosure_third_slow_5",
  "type": "tab",
  "meta": { "title": "Third enclosure on A, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 6, "duration": "quarter", "label": "Bb", "role": "passing" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "G#", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**3度エンクロージャー**をBPM 80で繰り返します。<mark>着地のAがコードの色を明るく照らすか</mark>を観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／フィードバック**
30秒録音して、3度Aに包んで落ち着く色がはっきりしているか聴いてみましょう。色がぼやけたら、上・下の二つの音を少し短く切ってみます。

**今日の完了基準：** 3度Aを半音上Bb・半音下G#で包んだあと、スイング4分音で4弦・5弦の両方で3度にきっちり着地できる。

## ④ 팁 / 흔한 실수

- **3度をルートのように重く押さえてしまう。** 3度は色を出す音なので、強く弾きすぎるとルートのように聞こえます。着地ははっきりと、でもルートより少し軽く、歌うように押さえます。
- **下の隣り合う音G#をあいまいに押さえてしまう。** G#（4弦4フレット）はAへ半音上がって寄り添う導音です。正確に押さえてこそ、上へ吸い込まれる味が生きます。

今日包んだ3度、A一点を目に刻んでおきましょう。ルートが家の住所なら、この3度はコードの表情です。

```json
{
  "id": "m2.w6.d3.target_a_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target A (3rd) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 5, "label": "A", "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 今日の着地の3度A（4弦5フレット）です。緑の点一つがコードの色を決めます。

```json
{
  "id": "m2.w6.d3.target_a_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target A (3rd) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 5, "label": "A", "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでより低い位置も見当をつけられます。

- **3日目、色を扱い始めました。** ルートに続いて3度まで包めるようになったので、ウォーキングに表情が生まれます。明日はこのエンクロージャーを実際のウォーキング1小節に織り込み、6週目の完成物を作ります。
