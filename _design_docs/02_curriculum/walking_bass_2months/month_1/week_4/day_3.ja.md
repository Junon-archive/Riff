---
title: "12小節の後半 — C7ターンアラウンドとフル・ランスルー"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 12小節の後半、C7ターンアラウンドとフル・ランスルー

## ① 이론/설명

昨日は前半8小節を歩きました。今日は残りの4小節、**後半9〜12小節**を歩いて12小節を完成させます — **| C7 | Bb7 | F7 | C7 |**です。ここで新しい顔が1つ登場します。**C7**です。1か月前は1つのコードでも手いっぱいだったのに、今は3つ目のコードまで歩きます。

C7はブルースで**いちばん緊張の大きいコード**です。Fへ戻りたくてうずうずしている響きですね。だから後半にはもう1つ特別な役割があります。11〜12小節の**F7→C7**こそが<mark>ターンアラウンド</mark>です。曲の終わりから最初（1小節目のF7）へ送り返す回転扉のような場所ですね。この4小節が滑らかなら、12小節は果てしなく循環します。

歩みのルールは相変わらず同じです。**1拍は着地、4拍は橋。** 9小節目のC7は4拍**B**で次のBbを狙い、10小節目のBb7は4拍**E**でFを狙います。11小節目のF7は4拍**B**で次のCを狙い、最後の12小節目のC7は4拍**Gb**で<mark>いちばん最初のFへ橋をかけて</mark>曲をまた始めます。今日はこの後半をなじませてから、昨日の前半とつなげて**12小節フル・ランスルー**まで挑戦します。

まず今日の新しいコード**C7**のコードトーンを指板で見ましょう。

```json
{
  "id": "m1.w4.d3.c7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** C7のR（3弦3フレット）・3（2弦2フレット）・5（2弦5フレット）・b7（1弦3フレット）です。

```json
{
  "id": "m1.w4.d3.c7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

では**後半9〜12小節**を歩きます。C7-Bb7-F7-C7です。各小節をR-3-5で歩き、4拍に橋を置き、最後の小節はまたFへ戻る準備をします。<mark>ターンアラウンドが最初へつながるか</mark>を耳で確かめましょう。すべての例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m1.w4.d3.turnaround_4",
  "type": "tab",
  "meta": { "title": "F blues second half (bars 9-12) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 9, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "Gb", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4弦.** 9小節目の4拍BはBbへ、10小節目の4拍EはFへ、11小節目の4拍BはCへ橋をかけます。12小節目の4拍Gb（2弦4フレット）はいちばん最初のFへ戻る橋です。

```json
{
  "id": "m1.w4.d3.turnaround_5",
  "type": "tab",
  "meta": { "title": "F blues second half (bars 9-12) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 9, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "Gb", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5弦.** 音と位置は4弦と同じです。低音Bは覆っておきましょう。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日の前半8小節をBPM 72で一度歩きます。指先に12小節の流れを呼び戻しましょう。

**10〜20分・頭のトレーニング**
下の準備例で**後半9〜12小節**だけを**BPM 70**の遅い速さで取り出して練習します。<mark>C7の場所とターンアラウンド</mark>が滑らかか確かめましょう。

```json
{
  "id": "m1.w4.d3.turnaround_prep_4",
  "type": "tab",
  "meta": { "title": "Second half chunk (bars 9-12), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 9, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "Gb", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 70, 4弦.** 9〜12小節だけをゆっくり。11→12小節（F7→C7）のターンアラウンドが1小節目へ戻る引きを感じましょう。

```json
{
  "id": "m1.w4.d3.turnaround_prep_5",
  "type": "tab",
  "meta": { "title": "Second half chunk (bars 9-12), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 9, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "Gb", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 70, 5弦.** 音と位置は4弦と同じです。

**20〜40分・実践（フル・ランスルー）**
では昨日の前半（1〜8小節）と今日の後半（9〜12小節）をつなげて、**12小節を最初から最後まで**BPM 80で歩きます。<mark>ターンアラウンドが自然に1小節目へ戻るか</mark>確かめましょう。詰まる小節だけをゆっくり直してから、また戻してつなぎます。4弦でなじませてから5弦でも確認します。

**40〜50分・録音／フィードバック**
12小節のランスルーを1周録音して、後半のC7の場所とターンアラウンドが自然か聴いてみましょう。明日はこの12小節を完奏・録音します。今日到達したBPMを書き留めておきましょう。

**今日の完了基準：** Fブルース12小節を前半と後半をつなげて最初から最後まで、C7ターンアラウンドを含めてBPM 80のスイング4分音で、4弦・5弦の両方で1周歩ける。

## ④ 팁 / 흔한 실수

- **C7の場所が見つかりません。** C7のルートはBbのルート（3弦1フレット）のちょうど2フレット上（3弦3フレット）です。Bbの隣にくっついていると思えば手が迷いません。
- **ターンアラウンドで急ぎます。** 12小節の終わりが見えると、うれしくて速くなりがちです。最後の2小節（11・12）ほど4拍を均等に、橋（B・Gb）をコツコツ置きましょう。

3つのコードの着地点F・Bb・Cさえ確かなら、12小節全体が揺れません。3つのルートを一目で見ておきましょう。

```json
{
  "id": "m1.w4.d3.three_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F, Bb, C — the three landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** 12小節の3つの着地点 — F（4弦1フレット）・Bb（3弦1フレット）・C（3弦3フレット）です。

```json
{
  "id": "m1.w4.d3.three_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F, Bb, C — the three landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでさらに低いルートもつかめます。

- **これで12小節がすべてつながりました。** 昨日まで半分だった道が、今日は1つの曲になりました。あとは明日、この12小節をラクな速さで完奏し、録音として残すだけです。1か月の歩みがまもなく実を結びます。
