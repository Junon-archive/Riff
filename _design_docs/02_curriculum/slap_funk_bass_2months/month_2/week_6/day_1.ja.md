---
title: "ハンマリングオン — 一度弾いて二つの音"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — ハンマリングオン、一度弾いて二つの音

## ① 理論・解説

**6週目**です！ 先週までスラップは**リズム**でした。今週はそこに<mark>メロディ</mark>を乗せます。その始まりが**ハンマリングオン**です。**サム（親指）**で一音を弾いたあと、左手の指で**次のフレットを強く叩けば** — もう一度弾かなくても二つ目の音が鳴ります。まさに**一度弾いて二つの音**です。

今日の二つの音は**開放E**（4弦）と**G**（4弦3フレット）です。Eはペンタトニックの**ルート（R）**、Gは**b3**ですね。サムで**E**を「ドゥン」と弾き、すぐに左手の**薬指**で3フレットを<mark>ハンマーのように打ち下ろします</mark>。このとき指はフレットの**すぐ後ろ**を正確に、そして**素早く**押さえてこそ二つ目の音がはっきりします。ゆっくり押さえると音が<mark>ぐにゃっと</mark>潰れます。

コツは**指の力**ではなく**打つ決断力**です。指を少し持ち上げてから**フレットの後ろを狙ってトン**と落とします。**BPM 75**でゆっくり始め、二つ目の音**G**が最初の音**E**と<mark>同じくらいはっきり聞こえるか</mark>だけに集中します。音が小さければもっと決然と、潰れればフレットにもっと近くです。この小さな左手の動き一つがスラップに**レガートの滑らかさ**を加えます。硬かった打撃が今や**音と音をつなぐメロディ**になり始めます。

**5弦**なら音も手の形も4弦と同じです。低音**B**は親指で覆って寝かせておき、**ハンマリングオン**の感覚だけを手に刻みます。今日**サム+ハンマー、二つの音**がはっきりすれば、明日はその逆の**プルオフ**を学びます。まず手の居場所を指板に押さえます — **ルートEとb3のG**、今日の二つの音は全部ここから出ます。

```json
{
  "id": "m2.w6.d1.hammer_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on home (E-G) — R and b3 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **4弦。** 下が**開放E**（サム）、3フレットが**G**（ハンマー）。今日の二つの音はこの二か所から出ます。

```json
{
  "id": "m2.w6.d1.hammer_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on home (E-G) — R and b3 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は**ハンマリングオン**を一つ体に刻みます。まず**サムパルス**で手を温めてから、<mark>サム+ハンマー、二つの音</mark>を反復します。各例は**4弦・5弦の二つのバージョン**です。

まずは**サムパルス**。**開放E**を4分音符でしっかり弾き、ハンマリングオンを乗せる**居場所（表拍）**を先に押さえます。

```json
{
  "id": "m2.w6.d1.thumb_pulse_4",
  "type": "tab",
  "meta": { "title": "Thumb quarter-note pulse (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** 四つの表拍がハンマリングオンの乗る柱です。

```json
{
  "id": "m2.w6.d1.thumb_pulse_5",
  "type": "tab",
  "meta": { "title": "Thumb quarter-note pulse (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5弦。** 音は4弦と同じです。低音Bは親指で寝かせておきます。

さあ表拍ごとに**ハンマリングオン**を乗せます。<mark>**サム+ハンマー**</mark>です。サムで**E**を弾いたあとすぐに**G**を叩き、一拍で**二つの音**を出します。

```json
{
  "id": "m2.w6.d1.hammer_pairs_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on pairs (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** サムで弾いた**E**から左手が**G**を叩いて一度に二つの音。二つの音の大きさが揃っていなければなりません。

```json
{
  "id": "m2.w6.d1.hammer_pairs_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on pairs (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bが漏れないよう親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
先週の16分サムを**BPM 60**で軽く流して手を目覚めさせます。今日は左手を<mark>ハンマリングオンの構え</mark>で先に準備しておきます。

**10〜20分 · 頭のトレーニング**
下のように**とてもゆっくり**、サムで弾いた**E**にハンマリングオン**G**を乗せます。**1小節はサムのみ、2小節はハンマリングオン**です。

```json
{
  "id": "m2.w6.d1.hammer_slow_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on, slow (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 1小節サムパルス、2小節ハンマリングオン。二つ目の音**G**がはっきりしているか耳で確認します。

```json
{
  "id": "m2.w6.d1.hammer_slow_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on, slow (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
**サム+ハンマー、二つの音**を**BPM 75**で反復します。二つ目の音が<mark>潰れたら</mark>テンポを落としてハンマーの決断力から生かします。4弦で覚えたあと5弦でも同じ二つの音を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>ハンマリングオンの音が最初の音と同じくらいはっきりしているか</mark>聴いてみます。今日の安定したBPMも書いておきます。

**今日の完了基準：** 開放Eをサムで弾いたあとハンマリングオンでGをつなぎ、一度弾いて二つの音をBPM 75ではっきり出せる。

## ④ ヒント・よくあるミス

今日学んだハンマリングオンを**BPM 85**で少し押して、速くなっても二つ目の音が生きているか確認します。

```json
{
  "id": "m2.w6.d1.hammer_check_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on speed check (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 85、4弦。** 少し速くなっても**ハンマリングオンG**がはっきり生きているか確認します。

```json
{
  "id": "m2.w6.d1.hammer_check_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on speed check (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは常に親指で覆っておきます。

- **ハンマーが弱い。** 指を少し持ち上げてから**フレットの後ろを狙って**トンと落とします。力ではなく**速さ**です。
- **最初の音が死ぬ。** ハンマーを気にしてサムが弱くなりやすいです。**サムもはっきり**弾いて二つの音の大きさを揃えます。
- **フレットから遠い。** フレットから遠くを押さえると音が潰れます。**フレットのすぐ後ろ**を狙います。
- **低音Bの油断（5弦）。** ハンマーに没頭してBが鳴りやすいです。親指の側面で常にBを覆っておきます。
