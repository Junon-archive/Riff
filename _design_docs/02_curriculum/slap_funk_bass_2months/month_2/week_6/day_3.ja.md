---
title: "スラップ + レガート — Eマイナーペンタで"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — スラップ + レガート、Eマイナーペンタで

## ① 理論・解説

二日間**ハンマリングオン**（上がる）と**プルオフ**（下がる）を別々に覚えました。今日は二つを**一つに編み**、スラップに<mark>メロディ</mark>をつけます。舞台は**Eマイナーペンタトニック** — ファンクリックが住む五つの音です。

Eマイナーペンタは**E・G・A・B・D**の五つの音です。度数では**R・b3・4・5・b7**ですね。ベースでは**開放E**（4弦）、**G**（4弦3フレット）、**開放A**（3弦）、**B**（3弦2フレット）、**開放D**（2弦）に並んで置かれます。<mark>開放弦と3・2フレット</mark>だけを行き来する、スラップにぴったりの場所です。

今日の短いリックはこの五つの音の上で**サムで弾き、ハンマリングオンで上がり、ポップで色を足し、プルオフで下ります**。一小節の中に<mark>ハンマリングオンとプルオフが一回ずつ</mark>入ります。**BPM 75**でゆっくり、つけた音（ハンマー・プルオフ）が弾いた音と同じくらいはっきりしているかに集中します。ペンタトニックはリックの**地図**です。この五つの音の中だけで遊んでも<mark>ファンクらしい響き</mark>がひとりでに出ます。外れる心配なく思いきり**ハンマー・プルオフ**を乗せて自由に歌ってみます。

**5弦**なら音も手の形も4弦と同じです。低音**B**は親指で覆っておき、慣れたら低音Bから始まる拡張も想像してみます。今日この**短いリック**が滑らかになれば、明日はこれを磨いて<mark>ペンタトニックスラップリック</mark>を完成します。今日は完成へ向かう最後のウォームアップというわけです。難しくないので気楽に楽しみながら手に馴染ませます。まず五つの音の場所を指板に押さえます。

```json
{
  "id": "m2.w6.d3.penta_form_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor pentatonic slap form — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 0, "label": "4", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** 五つの音は開放弦（E・A・D）と3・2フレット（G・B）に並んで置かれます。今日のリックは全部このフォームの中です。

```json
{
  "id": "m2.w6.d3.penta_form_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor pentatonic slap form — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 0, "label": "4", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は昨日までの**ハンマリングオン・プルオフ**を**Eマイナーペンタトニック**の上に乗せます。まず五つの音を**なぞって**手に馴染ませてから、<mark>短いリック</mark>を反復します。各例は**4弦・5弦の二つのバージョン**です。

まずは**ペンタなぞり**。五つの音を**サム**で上り下りしながら（Dだけ**ポップ**）、手が次の音の場所を先に知るようにします。

```json
{
  "id": "m2.w6.d3.penta_walk_4",
  "type": "tab",
  "meta": { "title": "E minor pentatonic walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** R-b3-4-5-b7で上がり、たどって下ります。手に五つの音の場所を覚えさせます。

```json
{
  "id": "m2.w6.d3.penta_walk_5",
  "type": "tab",
  "meta": { "title": "E minor pentatonic walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指で寝かせておきます。

さあ**短いリック**です。サムで弾いたあと**ハンマリングオン**で上がり、**ポップ**で色を足したあと**プルオフ**でルートに<mark>着地します</mark>。一小節に学んだことを全部詰めました。

```json
{
  "id": "m2.w6.d3.penta_lick_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** E→Gハンマリングオン、A→Bハンマリングオン、Dポップ、ゴーストで間を埋めたあとG→Eプルオフで着地します。

```json
{
  "id": "m2.w6.d3.penta_lick_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。慣れたら低音Bから始まる拡張も想像してみます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のプルオフを**BPM 60**で軽く流して手を目覚めさせます。今日は耳を<mark>ペンタトニックの五つの音</mark>に合わせておきます。

**10〜20分 · 頭のトレーニング**
下のように**とてもゆっくり**短いリックを回しながら、ハンマリングオン二か所とプルオフ一か所の場所を手に刻みます。

```json
{
  "id": "m2.w6.d3.penta_lick_slow_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** とてもゆっくり。ハンマリングオン（E→G、A→B）とプルオフ（G→E）が弾いた音と同じくらいはっきりしているか確認します。

```json
{
  "id": "m2.w6.d3.penta_lick_slow_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
**短いリック**を**BPM 75**で反復します。つけた音が<mark>潰れたら</mark>テンポを落としてハンマー・プルオフからはっきり生かします。4弦で覚えたあと5弦でも同じリックを確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>ハンマーとプルオフが弾いた音と同じくらいはっきりしているか</mark>聴いてみます。今日の安定したBPMも書いておきます。

**今日の完了基準：** Eマイナーペンタの上でハンマリングオン・ポップ・プルオフを編んだ短いリックをBPM 75で滑らかに出せる。

## ④ ヒント・よくあるミス

今日学んだ短いリックを**BPM 85**で少し押して、速くなってもつけた音が生きているか確認します。

```json
{
  "id": "m2.w6.d3.penta_lick_check_4",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 85、4弦。** 少し速くなっても**ハンマー・プルオフ**がはっきり生きているか確認します。

```json
{
  "id": "m2.w6.d3.penta_lick_check_5",
  "type": "tab",
  "meta": { "title": "Pentatonic slap + legato lick check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_thumb" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "hammer_on" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは常に親指で覆っておきます。

- **音の間が切れる。** スラップとレガートが別々に動くとリックがぶつぶつ切れます。**一つの流れ**でつなぎ滑らかに転がします。
- **ハンマー・プルオフだけ小さくなる。** 弾いた音（サム・ポップ）に力が集まりやすいです。**つけた音も揃った大きさ**で出します。
- **ポップが跳ねる。** Dのポップだけ強すぎるとリックがでこぼこになります。**ポップを他の音と同じ大きさ**に整えます。
- **低音Bの油断（5弦）。** リックに没頭してBが鳴りやすいです。親指の側面で常にBを覆っておきます。
