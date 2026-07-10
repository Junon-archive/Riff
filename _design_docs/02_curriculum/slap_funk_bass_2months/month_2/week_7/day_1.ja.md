---
title: "ポッピング・メロディ — 高音弦で歌う"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — ポッピング・メロディ、高音弦で歌う

## ① 理論・解説

**7週目**です！ これまでスラップの主役は**サム（親指）**でした。低域を**ドラムのように**弾いてグルーヴをしっかり支えました。今週は舞台の照明を**プル（指の弾き）**に移します。<mark>プルは高域で歌います。</mark>高音弦を指で引っかけて弾けば、スラップがリズムを越えて**メロディ**になり始めます。低域を支えてきたサムは少し休み、今日は**人差し指一本**で歌ってみます。

今日のメロディは**G弦（1弦）**の上の三つの音です。開放**G**はEマイナー・ペンタの**b3**、2フレットの**A**は**4**、4フレットの**B**は**5**です。この<mark>**b3-4-5**をプルで</mark>上がって下りれば、それがまさに三音のプル・メロディです。低いサムではなく、高く明るい場所で弾き上げます。

プルのコツは力ではなく**引っかけて弾く**ことです。人差し指の先を弦の**下に軽く引っかけ**、手首を回して<mark>弦を指板から離して放します</mark>。「タッ」と澄んで跳ねれば成功です。**BPM 75**でゆっくり始め、三つの音の**大きさが均一に**出るかだけに集中します。指が痛ければ強く引きすぎです — 引っかけて**放す感じ**でやわらかく力を抜きます。プルは強さより**角度**が大事で、爪より少し上の肉で引っかけると音がより澄みます。

**5弦**でも高音弦は4弦と同じです。プルは**G弦**から出るので、低音**B**はただ親指で覆って寝かせておけばいいです。今日この三つの音がはっきりすれば、明日は二つの音を一度に弾く**ダブルストップ**へ進みます。まずプルが住む三つの場所を指板に押さえます — **b3・4・5**、今日のメロディは全部ここから出ます。

```json
{
  "id": "m2.w7.d1.pop_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Popping melody home (G string, b3-4-5) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 開放**G**（b3）、2フレット**A**（4）、4フレット**B**（5）。今日のメロディはこの三つの場所から出ます。

```json
{
  "id": "m2.w7.d1.pop_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Popping melody home (G string, b3-4-5) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の場所は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は**プル・メロディ**を一つ体に刻みます。まず**プル・パルス**で指を温めてから、<mark>b3-4-5アーチ</mark>を反復します。各例は**4弦・5弦の二つのバージョン**です。

まずは**プル・パルス**。開放**G**（b3）を4分音符できっちり弾いて、プルの**澄んだ打点**を先につかみます。

```json
{
  "id": "m2.w7.d1.pop_pulse_4",
  "type": "tab",
  "meta": { "title": "Pop quarter-note pulse (G, b3) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** 四回のプルがメロディの乗る柱です。

```json
{
  "id": "m2.w7.d1.pop_pulse_5",
  "type": "tab",
  "meta": { "title": "Pop quarter-note pulse (G, b3) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **5弦。** 音は4弦と同じです。低音Bは親指で寝かせておきます。

いよいよ三つの音をつなげて**アーチ**を描きます。**b3-4-5**で上がり**4-b3**で下りる<mark>三音のメロディ</mark>です。

```json
{
  "id": "m2.w7.d1.pop_arch_4",
  "type": "tab",
  "meta": { "title": "Pop melody arch (b3-4-5-4-b3) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** b3-4-5で上がり4-b3で下ります。三つの音の大きさがそろわなければなりません。

```json
{
  "id": "m2.w7.d1.pop_arch_5",
  "type": "tab",
  "meta": { "title": "Pop melody arch (b3-4-5-4-b3) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
先週のペンタ・リックを**BPM 60**で軽く流して手を目覚めさせます。今日は右手の人差し指を<mark>プルの構え</mark>に先に準備しておきます。

**10〜20分 · 頭のトレーニング**
下のように**とてもゆっくり**、1小節目はプル・パルス、2小節目は**b3-4-5アーチ**です。

```json
{
  "id": "m2.w7.d1.pop_slow_4",
  "type": "tab",
  "meta": { "title": "Pop pulse + arch, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 1小節目パルス、2小節目アーチ。三つの音の大きさがそろっているか耳で確認します。

```json
{
  "id": "m2.w7.d1.pop_slow_5",
  "type": "tab",
  "meta": { "title": "Pop pulse + arch, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
アーチ・メロディを**BPM 75**で反復します。音が<mark>潰れたら</mark>テンポを落としてプルの澄んだ打点から生かします。4弦で覚えたあと5弦でも同じメロディを確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>三つの音が均一に跳ねるか</mark>を聴きます。今日楽だったBPMも書いておきます。

**今日の完了基準：** 高音弦でb3-4-5のプル・メロディをBPM 75で三つの音の大きさを均一に弾ける。

## ④ ヒント・よくあるミス

今日覚えたプル・アーチを**BPM 85**で少し押して、速くなっても三つの音が均一に生きているか確認します。

```json
{
  "id": "m2.w7.d1.pop_check_4",
  "type": "tab",
  "meta": { "title": "Pop melody arch check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 85、4弦。** 少し速くなっても**b3-4-5アーチ**が均一に生きているか確認します。

```json
{
  "id": "m2.w7.d1.pop_check_5",
  "type": "tab",
  "meta": { "title": "Pop melody arch check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは常に親指で覆っておきます。

- **プルが痛い。** 弦を強く引きすぎると指先が痛みます。**引っかけて放す感じ**で力を抜きます。
- **5の音が弱い。** 4フレットの**B**へ行くほどプルが細くなりやすいです。遠い音ほど**はっきり**引っかけます。
- **音が潰れる。** 指を弦に長く引っかけると潰れます。**短く速く**弾いて放します。
- **低音Bの油断（5弦）。** メロディに没頭してBが鳴りやすいです。親指の側面で常にBを覆っておきます。
