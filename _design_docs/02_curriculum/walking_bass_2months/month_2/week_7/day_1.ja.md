---
title: "ゴーストノートを挟む — 歩みの間の小さな一歩でラインに息を"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — ゴーストノート（「チャッ」）を挟む

## ① 이론/설명

7週目の扉を開きます。先週まで私たちはコードの上をきっちり歩く**4分音符のウォーキング**を手に馴染ませました。今週はそのまっすぐな歩みに**命**を吹き込む番です。今日の材料は**ゴーストノート**、よく「チャッ」と呼ばれる小さな一歩です。<mark>音程なく軽く擦るこの一音がラインに息を入れます。</mark>

ゴーストノートは**デッドノート**の技で作ります。左手で弦に触れつつ**押さえ込まず**、フレットに届かないよう軽く覆った状態で、右手でトンと弾きます。すると音程の代わりに「チャッ」という打音だけが出ます。スキーマでは `technique: "dead_note"` と書き、音名ラベルは付けません。この「チャッ」の音は、ドラムのハイハットのように歩みと歩みの間をそっと埋め、リズムに細かな粒を加えます。<mark>ゴーストは表拍ではなく弱拍、とくに拍と拍の間の「アンド」にそっと挟みます。</mark>

いちばん大切なのは順序です。**4分音符の骨組みが先**です。骨組みが揺れるとゴーストも崩れます。だから今日は安定した4分音符の上にゴーストを**一つだけ**載せます。歩みはそのままきっちり、その間に小さな一歩が入ってグルーヴが<mark>息をし始めます。</mark>

まず、今日歩く**F7アルペジオ**の骨組み音 — ルートF・3度A・5度C・♭7 E♭ — を指板で見てみましょう。

```json
{
  "id": "m2.w7.d1.f7_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 arpeggio skeleton — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** ルート**F**（4弦1フレット）・3度**A**（4弦5フレット）・5度**C**（3弦3フレット）・♭7 **E♭**（2弦1フレット）です。ゴーストはこの骨組みの間に挟みます。

```json
{
  "id": "m2.w7.d1.f7_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 arpeggio skeleton — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦でより重いFも支えられます。

## ② 시각 자료

では、今日の完成物、**ゴースト・ウォーキング**1小節です。F7アルペジオを4分音符で歩き、2拍目の後ろ「アンド」にゴーストを一つそっと挟みます。<mark>歩みはそのままなのに、小さな一歩一つでグルーヴが生き返ります。</mark>各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w7.d1.ghost_walk_4",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦、スイング4分音.** 1拍目**F**（ルート）→ 2拍目前**A**（3度）→ 2拍目後**ゴースト（「チャッ」）** → 3拍目**C**（5度）→ 4拍目**E♭**（♭7）です。ゴーストは音程なくトン、残りの4分音符はきっちり。

```json
{
  "id": "m2.w7.d1.ghost_walk_5",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦.** 音と位置は4弦と同じです。低音B弦でより深い低域を支えられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
第6週のエンクロージャー・ウォーキングをBPM 72で一度歩き、きっちりした4分音符の感覚を呼び戻します。

**10〜20分・ブレイントレーニング**
下の準備例でゴースト・ウォーキングを**BPM 60**のゆっくりしたスイングで押さえます。<mark>ゴーストが表拍を押しのけず「アンド」だけにそっと入るか</mark>を音で確かめます。

```json
{
  "id": "m2.w7.d1.ghost_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** ゴースト・ウォーキングをゆっくり。4分音符の骨組みを守り、2拍目の後ろに「チャッ」をそっと入れます。

```json
{
  "id": "m2.w7.d1.ghost_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**ゴースト・ウォーキング**をBPM 80で繰り返します。<mark>4分音符は微動だにせず、ゴーストだけが小さな一歩のように入るか</mark>を観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／フィードバック**
ゴースト・ウォーキング1小節を2〜3周止まらずに録音します。聴き返してラインが息をするか、4分音符の骨組みが揺れないかを確かめます。

**今日の完了基準：** まっすぐな4分音符のF7ウォーキングにゴースト（「チャッ」）を弱拍に一つ入れ、4分音符の骨組みを揺るがさずに4弦・5弦で歩ける。 — 今日の完成：ゴースト・ウォーキング。

## ④ 팁 / 흔한 실수

- **ゴーストを強く弾きすぎる。** 「チャッ」は音程のない小さな一歩です。表拍の音より目立つと、かえって歩みがうるさくなります。右手の力を半分抜いて、表拍の音より小さく出します。
- **ゴーストが表拍を押しのける。** 小さな一歩が大きくなると4分音符の骨組みが揺れます。骨組みが先、ゴーストはその間にそっと。迷ったらゴーストを抜いて4分音符だけを先にきっちり歩きます。

今日入れた小さな一歩、その一点を目に刻んでおきましょう。ルートFの隣、3弦の開放の位置で「チャッ」一つがグルーヴに息を入れます。

```json
{
  "id": "m2.w7.d1.ghost_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ghost spot next to root F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" }
  ]}
}
```

▶ **4弦.** ルート**F**（4弦1フレット）とゴーストの位置（3弦、x）です。表拍のFの隣に「チャッ」一つを載せる図です。

```json
{
  "id": "m2.w7.d1.ghost_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ghost spot next to root F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦は覆っておきましょう。

- **今日の自分をほめましょう。** まっすぐな4分音符に小さな一歩を一つ足しただけで、ラインが一気に生き返りました。明日はこの小さな一歩を8分音符二音の「フィル」に育てます。
