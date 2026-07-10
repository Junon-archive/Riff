---
title: "プルオフ — 弾き下ろして二つの音"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — プルオフ、弾き下ろして二つの音

## ① 理論・解説

昨日は**ハンマリングオン**で上へ上がりましたね（E→G）。今日はその**逆**です。押さえていた指を**弾き下ろせば**低い音がひとりでに鳴ります — これが<mark>プルオフ</mark>です。やはり**一度弾いて二つの音**、ただし方向は下へです。

今日の二つの音は**G**（4弦3フレット、b3）と**開放E**（4弦、R）です。左手の**薬指**で3フレットの**G**を押さえ**サム**で弾いたあと、その指を<mark>少し下へ弾くように</mark>離します。ただ上へ持ち上げるのではなく、**弦を少し引っかけて引いてから放す**感覚です。そうしてこそ開放**E**がひとりでに鳴ります。

コツは**指先で弦を引っかけて取る**ことです。ただ上へ持ち上げると音が<mark>出ません</mark>。**BPM 75**でゆっくり始め、弾き下ろした**E**が最初の音**G**と同じくらいはっきりしているかに集中します。開放弦なので響きが長く、次の拍で**少し寝かせて**リズムを守ります。この弾き一つでスラップに**下へ流れる旋律**が生まれます。昨日のハンマリングオンが**上がるメロディ**なら、今日のプルオフは**下りるメロディ**です。

**5弦**なら音も手の形も4弦と同じです。低音**B**は親指で覆って寝かせておき、**プルオフ**の感覚だけを手に刻みます。今日**クリーンなプルオフ**がつかめれば、明日はハンマリングオンとプルオフを**ペンタトニックの上で**一つに編みます。二つの技法が手に馴染めば、スラップはもうリズム伴奏だけにとどまりません — フレット手が作る小さな旋律が**グルーヴの上に歌を乗せる**からです。まず二つの音の居場所を指板に押さえます — **b3のGとルートE**です。

```json
{
  "id": "m2.w6.d2.pull_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off home (G-E) — R and b3 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **4弦。** 3フレット**G**（押さえて弾く）、下が**開放E**（プルオフ）。指を弾いて上から下へ下ります。

```json
{
  "id": "m2.w6.d2.pull_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off home (G-E) — R and b3 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は**プルオフ**を一つ体に刻みます。まず**Gパルス**で押さえる手を温めてから、<mark>サム+プルオフ、二つの音</mark>を反復します。各例は**4弦・5弦の二つのバージョン**です。

まずは**Gパルス**。薬指で3フレット**G**を押さえ4分音符でしっかり弾き、プルオフの**出発音**を手に馴染ませます。

```json
{
  "id": "m2.w6.d2.g_pulse_4",
  "type": "tab",
  "meta": { "title": "Fretted G quarter-note pulse — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** 四つのGがプルオフの出発する柱です。

```json
{
  "id": "m2.w6.d2.g_pulse_5",
  "type": "tab",
  "meta": { "title": "Fretted G quarter-note pulse — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5弦。** 音は4弦と同じです。低音Bは親指で寝かせておきます。

さあ弾いた**G**ごとに**プルオフ**をつけます。<mark>**サム+プルオフ**</mark>です。3フレットを弾いたあと指を弾き下ろして開放**E**を鳴らし、一拍で**二つの音**を出します。

```json
{
  "id": "m2.w6.d2.pull_pairs_4",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off pairs (G-E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** 弾いた**G**から指を弾いて**E**へ下ろして一度に二つの音。二つの音の大きさが揃っていなければなりません。

```json
{
  "id": "m2.w6.d2.pull_pairs_5",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off pairs (G-E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bが漏れないよう親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のハンマリングオンを**BPM 60**で軽く流して手を目覚めさせます。今日は左手を<mark>プルオフの構え</mark>で先に準備しておきます。

**10〜20分 · 頭のトレーニング**
下のように**とてもゆっくり**、弾いた**G**から指を弾いて**E**へ下ろします。**1小節はGのみ、2小節はプルオフ**です。

```json
{
  "id": "m2.w6.d2.pull_slow_4",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off, slow (G-E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 1小節Gパルス、2小節プルオフ。弾き下ろした**E**がはっきりしているか耳で確認します。

```json
{
  "id": "m2.w6.d2.pull_slow_5",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off, slow (G-E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
**サム+プルオフ、二つの音**を**BPM 75**で反復します。二つ目の音が<mark>鳴らなければ</mark>テンポを落として弦を引っかけて取る感覚から生かします。4弦で覚えたあと5弦でも同じ二つの音を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>プルオフの音が最初の音と同じくらいはっきりしているか</mark>聴いてみます。今日の安定したBPMも書いておきます。

**今日の完了基準：** 3フレットGをサムで弾いたあとプルオフで開放Eを鳴らし、一度弾いて二つの音をBPM 75ではっきり出せる。

## ④ ヒント・よくあるミス

今日学んだプルオフを**BPM 85**で少し押して、速くなっても二つ目の音が生きているか確認します。

```json
{
  "id": "m2.w6.d2.pull_check_4",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off speed check (G-E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 85、4弦。** 少し速くなっても**プルオフE**がはっきり生きているか確認します。

```json
{
  "id": "m2.w6.d2.pull_check_5",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off speed check (G-E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは常に親指で覆っておきます。

- **プルオフが弱い。** ただ指を持ち上げると音が出ません。**弦を少し引っかけて引いてから**放します。力ではなく**引っかける角度**です。
- **最初の音が死ぬ。** プルオフを気にしてサムが弱くなりやすいです。**弾いたGもはっきり**出して二つの音の大きさを揃えます。
- **響きが潰れる。** 開放Eが長く残り次の拍と混ざりやすいです。次の拍で**少し寝かせて**リズムを守ります。
- **低音Bの油断（5弦）。** プルオフに没頭してBが鳴りやすいです。親指の側面で常にBを覆っておきます。
