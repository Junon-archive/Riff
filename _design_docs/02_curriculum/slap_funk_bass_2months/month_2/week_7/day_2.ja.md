---
title: "ダブルストップ — 二つの音を一度に"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — ダブルストップ、二つの音を一度に

## ① 理論・解説

昨日は高音弦で三つの音を**一つずつ**弾きましたね。今日は二つの音を<mark>一度に</mark>弾きます。これを**ダブルストップ**と呼びます。二本の弦を同時にプルすると、一台のベースから<mark>和音のような響き</mark>が出ます。メロディが急に厚く、いっぱいに聞こえます。一つの音が歌なら、ダブルストップは**二つの音がいっしょに歌う和音**です。難しくありません — すでに知っているプルを二本の弦に同時に使うだけです。

今日の二つの音は**D弦（2弦）の開放D**と**G弦（1弦）の開放G**です。**D**はEマイナーの**b7**、**G**は**b3**です。どちらも開放弦なので左手は楽です — 今日の主役は**右手**です。二本の弦を正確に同じ瞬間に弾いて、二つの音が<mark>一つの塊</mark>として響くようにします。

コツは指を**二本**使うことです。**人差し指**を低いD弦の下に、**中指**を高いG弦の下に軽く引っかけ、二本の指を<mark>同時に上へ弾きます</mark>。片方だけ大きくもう片方が小さければまだ合っていません。**BPM 75**でゆっくり、二つの音が**同じ大きさ**で「タッ」といっしょに跳ねるかに集中します。二本の指がぎこちなければ、人差し指一本で二本の弦をまとめて引っかけて引いてもいいです。どちらでも、二本の弦を**同じ深さ**で引っかけるのが肝心です。

**5弦**でも二つの音は4弦と同じです。プルは高音弦二本から出るので、低音**B**は親指で覆っておけばいいです。今日**D+Gダブルストップ**が一つはっきり響けば、明後日この音をプル・メロディ・ラインの最後に乗せます。まず二つの音が住む場所を指板に押さえます — **b7とb3**、二つの開放弦です。

```json
{
  "id": "m2.w7.d2.dstop_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Double-stop shape (D+G, b7+b3) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **4弦。** 下の**D**（b7）は人差し指、上の**G**（b3）は中指でいっしょに引っかけます。二つの開放弦です。

```json
{
  "id": "m2.w7.d2.dstop_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Double-stop shape (D+G, b7+b3) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **5弦。** 手の場所は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は**ダブルストップ**を一つ作ります。まず二つの音を分けて**一つずつ**弾いて場所を覚えたあと、<mark>二つの音を一度に</mark>重ねます。各例は**4弦・5弦の二つのバージョン**です。

まずは**単発プル**。**D**（b7）と**G**（b3）を交互に弾いて、二本の弦のプル感覚をそれぞれ覚えます。

```json
{
  "id": "m2.w7.d2.dstop_singles_4",
  "type": "tab",
  "meta": { "title": "Single pops (D, G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** DとGを交互にプルします。二本の弦がそれぞれはっきり跳ねなければなりません。

```json
{
  "id": "m2.w7.d2.dstop_singles_5",
  "type": "tab",
  "meta": { "title": "Single pops (D, G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指で覆っておきます。

いよいよ二つの音を重ねて**いっしょに**弾きます。**D+G**を同時にプルする<mark>ダブルストップ</mark>です。

```json
{
  "id": "m2.w7.d2.double_stop_4",
  "type": "tab",
  "meta": { "title": "Double-stop D+G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** 二本の指でDとGを同時に。二つの音が一つの塊として響かなければなりません。

```json
{
  "id": "m2.w7.d2.double_stop_5",
  "type": "tab",
  "meta": { "title": "Double-stop D+G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のプル・アーチを**BPM 60**で軽く流して手を目覚めさせます。今日は人差し指・中指の<mark>二本の指</mark>を先に開いておきます。

**10〜20分 · 頭のトレーニング**
下のように**とてもゆっくり**、1小節目は単発プル、2小節目は**ダブルストップ**です。

```json
{
  "id": "m2.w7.d2.dstop_slow_4",
  "type": "tab",
  "meta": { "title": "Singles + double-stop, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 1小節目単発、2小節目ダブルストップ。二つの音が同じ大きさか耳で確認します。

```json
{
  "id": "m2.w7.d2.dstop_slow_5",
  "type": "tab",
  "meta": { "title": "Singles + double-stop, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
ダブルストップを**BPM 75**で反復します。片方の音が<mark>小さくなったら</mark>テンポを落として二本の指の力を合わせます。4弦で覚えたあと5弦でも同じ音を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>二つの音がいっしょに響くか</mark>を聴きます。今日楽だったBPMも書いておきます。

**今日の完了基準：** D+GダブルストップをBPM 75で二つの音が同じ大きさでいっしょに響くように弾ける。

## ④ ヒント・よくあるミス

今日覚えたダブルストップを**BPM 85**で少し押して、速くなっても二つの音がいっしょに生きているか確認します。

```json
{
  "id": "m2.w7.d2.dstop_check_4",
  "type": "tab",
  "meta": { "title": "Double-stop check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 85、4弦。** 少し速くなっても**二つの音**がいっしょにはっきり生きているか確認します。

```json
{
  "id": "m2.w7.d2.dstop_check_5",
  "type": "tab",
  "meta": { "title": "Double-stop check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは常に親指で覆っておきます。

- **片方だけ大きい。** 人差し指と中指の力が違うと片方が跳ねます。**二本の指を同じ強さ**にそろえます。
- **片方が遅れる。** 二本の指がずれると「ダ-ダッ」と割れます。**同時に**弾いて一つの塊にします。
- **音が潰れる。** 弦を長く引っかけすぎると潰れます。**短く引っかけて放します**。
- **低音Bの油断（5弦）。** ダブルストップに没頭してBが鳴りやすいです。親指の側面で常にBを覆っておきます。
