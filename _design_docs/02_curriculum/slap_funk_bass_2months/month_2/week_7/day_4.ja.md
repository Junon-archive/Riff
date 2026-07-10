---
title: "ポッピング・メロディ・ライン — 7週目完成"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — ポッピング・メロディ・ライン、7週目完成

## ① 理論・解説

ついに**7週目の最終日**！ 今週覚えた**プル・メロディ**と**ダブルストップ**を、<mark>一つのライン</mark>としてつなげて完成する日です。高音弦で歌っていたプルが、いまや**一つの文**として締めくくられます。短いけれど歌い、最後に和音でドアを閉じるラインです。二か月の旅もいよいよ終盤に近づきました。

今日の完成ラインはこうです。高音弦で**b3-4-5-4-b3**をプルで上がって下りたあと、短く休み、最後に**D+Gダブルストップ**を「タッ」と弾いて<mark>和音で締めくくり</mark>ます。メロディが歌い、最後の瞬間に二つの音がいっしょにドアを閉じる感じです。今週学んだことを全部一行に詰め込んだわけです。**プル**で歌い、**ダブルストップ**できれいに句点を打つのです。

**BPM 75**で始め、五つのプルが**均一に**流れるかからまず見ます。ラインが潰れたらテンポを落として<mark>メロディとダブルストップを別々に</mark>整えてからつなぎ直します。最後のダブルストップは急がず、一拍休んだ場所に**はっきり**乗せます。この短い一小節が今週の実りです。派手な技巧より、**はっきりした一つのライン**の方がずっと長く残ります。

**5弦**でも高音弦のラインは4弦と同じです。低音**B**は親指で覆っておき、プル・メロディだけに集中します。この数日積んだプル・ダブルストップ・ダブル・サム味見が<mark>この一つのライン</mark>に詰まります。今日4弦・5弦で残せば**7週目完成**です。この6週間のスラップが今日この一つのラインに集まります。まずラインが通る四つの音を指板に押さえます。

```json
{
  "id": "m2.w7.d4.line_form_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Popping melody line form — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** G弦の**b3・4・5**がメロディ、D弦開放の**b7**は最後のダブルストップの相棒です。

```json
{
  "id": "m2.w7.d4.line_form_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Popping melody line form — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 手の場所は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は**完成ライン**を残します！ まずプル・アーチで手を温めてから、<mark>ポッピング・メロディ + ダブルストップ</mark>を反復して録音します。各例は**4弦・5弦の二つのバージョン**です。

まずは**プル・アーチなぞり**。**b3-4-5-4-b3**をプルで上がって下り、完成ラインの前半を手に温めます。

```json
{
  "id": "m2.w7.d4.pop_recall_4",
  "type": "tab",
  "meta": { "title": "Pop arch recall — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
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

▶ **BPM 70、4弦。** b3-4-5-4-b3のプル・アーチ。完成ラインが始まる場所を温めます。

```json
{
  "id": "m2.w7.d4.pop_recall_5",
  "type": "tab",
  "meta": { "title": "Pop arch recall — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
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

**今週の完成物 — ポッピング・メロディ + ダブルストップ。** 五音のプル・メロディのあと、**D+Gダブルストップ**で<mark>和音のように</mark>締めくくります。

```json
{
  "id": "m2.w7.d4.popping_melody_4",
  "type": "tab",
  "meta": { "title": "Popping melody + double-stop — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** 高音弦でb3-4-5-4-b3をプルし、最後にD+Gダブルストップを同時に弾きます。

```json
{
  "id": "m2.w7.d4.popping_melody_5",
  "type": "tab",
  "meta": { "title": "Popping melody + double-stop — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音B（5弦）は親指で覆い、高音弦のメロディだけに集中します。ダブル・サムは昨日のように散文だけの味見です。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のダブル・サム味見を**BPM 50**で軽く振ったあと、プル・アーチで手を目覚めさせます。今日はこの流れを<mark>そのまま録音に収め</mark>ます。

**10〜20分 · 頭のトレーニング**
完成ラインを下のように**とてもゆっくり**回しながら、メロディの最後の**ダブルストップ**の場所を手に刻みます。

```json
{
  "id": "m2.w7.d4.popping_line_slow_4",
  "type": "tab",
  "meta": { "title": "Popping melody line, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** とてもゆっくり。五つの音のあとD+Gダブルストップが定位置に来るか確認します。

```json
{
  "id": "m2.w7.d4.popping_line_slow_5",
  "type": "tab",
  "meta": { "title": "Popping melody line, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
完成ラインを**BPM 75**で反復します。ラインが<mark>潰れたら</mark>テンポを落としてメロディとダブルストップを別々に生かします。4弦で覚えたあと5弦でも同じラインを確認します。

**40〜50分 · 録音・フィードバック**
いよいよ録音です。**BPM 75**で二、三周を止まらずに録音し、一番よい一回を<mark>今週のラインとして残し</mark>ます。4弦・5弦のどちらも残せば7週目完成です。

**今日の完了基準：** プル・メロディ（b3-4-5-4-b3）にD+Gダブルストップをつなげた完成ラインをBPM 75で4弦・5弦で滑らかに録音できる。 — 週間成果物：私の初めてのポッピング・メロディ・ラインの録音。（7週目完成！）

## ④ ヒント・よくあるミス

完成ラインを**BPM 85**で少し押して、速くなってもメロディとダブルストップが生きているか確認します。

```json
{
  "id": "m2.w7.d4.popping_line_check_4",
  "type": "tab",
  "meta": { "title": "Popping melody line check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 85、4弦。** 少し速くなっても**プル・メロディとダブルストップ**がはっきり生きているか確認します。

```json
{
  "id": "m2.w7.d4.popping_line_check_5",
  "type": "tab",
  "meta": { "title": "Popping melody line check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは常に親指で覆っておきます。

- **ダブルストップが遅れる。** メロディで手が忙しいと最後の二音が遅れます。**一拍休んで**先に手を移しておきます。
- **プルがでこぼこ。** 5の音（B）が強くなりやすいです。**五つの音を同じ大きさ**に整えます。
- **和音が割れる。** ダブルストップの二本の指がずれると割れます。**同時に**弾いて一つの塊にします。
- **低音Bの油断（5弦）。** ラインに没頭してBが鳴りやすいです。親指の側面で常にBを覆っておきます。
