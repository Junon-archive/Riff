---
title: "卒業録音 — 私の初めてのスラップグルーヴ"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 卒業録音、私の初めてのスラップグルーヴ

## ① 理論・解説

ついに4週目の最終日、**1か月目の卒業式**です！ 今日やることはたった一つ — この3週間で磨いてきたグルーヴを<mark>完成曲として録音する</mark>ことです。3週間前の初日を思い出してください。親指で弦を一度叩くのもぎこちなかったのに、今日は**E→Gオクターブグルーヴ**を録音するあなたです。これこそが**成長**です。

録音は難しくありません。スマホ一つで十分です。大事なのは完璧さではなく**残すこと**です。昨日覚えた<mark>止まらない感覚</mark>そのままに、メトロノームを**BPM 80**にして二、三周回します。1音間違えても流れが生きていれば、それがよい録音です。完璧な一回を待つより、**何度も録音してその中で一番よいものを**選べばよいのです。

今日の完成物は**E→Gオクターブ+ゴーストグルーヴ**です。**1小節はE**（サム4弦開放・ポップ2弦2フレット）、**2小節はG**（サム4弦3フレット・ポップ2弦5フレット）、その間を**ゴースト（「チッ」）**が埋めます。サム-チッ-ポップ-チッが8分音符で転がる、この3週間まるごとが詰まった二小節です。まず4分音符の準備で手を温め、**BPM 80**で二小節を滑らかにつないでから録音ボタンを押します。

**5弦**なら音も移動も4弦と同じです。低音Bを親指で覆っておくか、慣れたら低音Bを根とした重いバージョンでも録音してみます。来月はこのグルーヴを足がかりに**ファンク応用**（シンコペーション・レガート・ポッピング）へ進みます。今日の録音がそのスタートラインです — さあ、<mark>私の初めてのスラップグルーヴ</mark>を残しましょう。

## ② ビジュアル資料

今日は**今月の完成物**を録音します。**移動マップ**で手の運びを一度なぞり、4分音符の準備で手を温めてから、<mark>ピン固定のグルーヴ</mark>を回して録音します。各例は**4弦・5弦の二つのバージョン**です。

まずは**移動マップ**。下が**Eの場所**、上が**Gの場所**です。二つのオクターブフォームの間を三つ行き来します。

```json
{
  "id": "m1.w4.d4.move_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E→G move map — thumb roots + pop octaves — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下がEの場所、上がGの場所。二つのオクターブフォームの間を三つ滑って行き来します。

```json
{
  "id": "m1.w4.d4.move_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E→G move map — thumb roots + pop octaves — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 場所と移動は4弦と同じです。低音Bは親指で覆っておきます。

**準備 — サム-チッ-ポップ-チッ 4分音符。** 録音前にEとGを1拍ずつゆっくり温めます。

```json
{
  "id": "m1.w4.d4.octave_ghost_prep_4",
  "type": "tab",
  "meta": { "title": "Octave+ghost groove prep (quarters, E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 1小節E、2小節G。急がず、移動とミュートをもう一度合わせておきます。

```json
{
  "id": "m1.w4.d4.octave_ghost_prep_5",
  "type": "tab",
  "meta": { "title": "Octave+ghost groove prep (quarters, E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と移動は4弦と同じです。低音Bは親指で寝かせておきます。

**今月の完成物 — オクターブ+ゴーストグルーヴ（E→G）。** いよいよ8分音符で。<mark>サム-チッ-ポップ-チッ</mark>をE一小節、G一小節繰り返して録音します。

```json
{
  "id": "m1.w4.d4.octave_ghost_song_4",
  "type": "tab",
  "meta": { "title": "Octave+ghost slap groove (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80。** 1小節E、2小節G（サムルート4弦3フレット、ポップオクターブ2弦5フレット）。サム-チッ-ポップ-チッを保つ。この二小節が今日の録音対象です。

```json
{
  "id": "m1.w4.d4.octave_ghost_song_5",
  "type": "tab",
  "meta": { "title": "Octave+ghost slap groove (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦。** 音と移動は4弦と同じです。低音Bの重い低音でもう一つバージョンを録音してみてもよいです。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のフルランをBPM 60で軽く流して手を目覚めさせます。今日はその流れを<mark>そのまま録音に収め</mark>ます。

**10〜20分 · 頭のトレーニング**
準備例（4分音符）でEとGの移動とミュートを点検します。<mark>継ぎ目が揺れないか</mark>確認します。

**20〜40分 · 実践**
ピン固定のグルーヴを**BPM 80**で反復します。二小節が滑らかにつながれば録音の準備完了です。4弦で覚えたあと5弦でも同じ流れを確認します。

**40〜50分 · 録音・卒業**
いよいよ録音です。**BPM 80**で二、三周を止まらずに録音し、その中で一番よい一回を<mark>私の初めてのグルーヴとして残し</mark>ます。4弦・5弦のどちらも残せば1か月目完成です。

**今日の完了基準：** オクターブ+ゴーストのスラップグルーヴ（E→G）を、BPM 80で4弦・5弦で止まらずに録音できる。 — 月間成果物：私の初めてのオクターブスラップグルーヴの録音。（1か月目卒業！）

## ④ ヒント・よくあるミス

- **録音を押した途端に緊張する。** マイクの前で手が固まります。録音中だと忘れて、練習のように気楽に何度も回します。
- **一度で完璧にしようとする。** 最初のテイクに執着しないでください。何度か録音してその中で一番よいものを選べばよいのです。
- **移動で速度が揺れる。** E→Gで焦りやすいです。準備例で継ぎ目から温め直してから録音します。
- **低音Bの油断（5弦）。** 録音に集中してBが漏れやすいです。親指で常にBを覆っておきます。
