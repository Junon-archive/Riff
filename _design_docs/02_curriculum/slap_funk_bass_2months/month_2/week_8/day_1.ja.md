---
title: "要素の総合 — オクターブ・ゴースト・プルを一小節に"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 要素の総合、オクターブ・ゴースト・プルを一小節に

## ① 理論・解説

ついに**8週目**、最後の週です！ 8週間前はスラップの音を一つ出すのも大変だったのに、いまや<mark>オクターブ・ゴースト・プル</mark>を一つの手に握っています。今週はこれまで学んだ断片を**一つのグルーブ**に溶かし、クラシック・ファンクの匂いがする卒業曲を完成させます。今日のDay 1はその最初のボタン — **オクターブ+ゴースト・グルーブ**に**プル・フィル**を乗せ、ちょうど一小節を作ります。

グルーブの骨格はもう馴染んでいます。4弦開放の**E**を親指で叩き（**R**）、間を**ゴースト**で埋めてから、2弦2フレットのオクターブ**E**を指で弾きます（**8**）。この<mark>サム-ゴースト-プル</mark>がドラムのキック-スネアのように転がります。今日はこのグルーブのあとに、1弦で**b3-4-5**プル・フィルを少し乗せて一小節を埋めます。

プル・フィルは派手である必要はありません。**G弦**でb3（開放）・4（2フレット）・5（4フレット）を<mark>はっきり一つずつ</mark>引っかけて弾けば、グルーブが歌のように少し頭をもたげます。**BPM 85**が目標ですが、今日はゆっくり始めてグルーブとフィルの**つなぎ**からなめらかにします。フィルへ移るとき急ぐと拍が遅れるので、**一拍ずつ**はっきり押さえます。

**5弦**でも手の形は同じです。低音**B**は親指の側面で覆っておき、グルーブとプル・フィルだけに集中します。5弦なら低音Bルートで<mark>もっと重い</mark>バージョンも可能ですが、今日は同じEの場所で感覚をつかみます。まずグルーブとフィルが通る場所を指板に押さえます — 今日の一小節は全部ここから出ます。

```json
{
  "id": "m2.w8.d1.groove_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave groove + pop fill map — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 4弦の**R**（E）と2弦オクターブの**8**（E）がグルーブ、G弦の**b3・4・5**がプル・フィルです。

```json
{
  "id": "m2.w8.d1.groove_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave groove + pop fill map — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の場所は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は**一小節**を完成させます！ まず**オクターブ+ゴースト・グルーブ**で手を温めてから、そこに<mark>b3-4-5プル・フィル</mark>を乗せます。各例は**4弦・5弦の二つのバージョン**です。

まずは**オクターブ+ゴースト・グルーブ**。4弦の**E**を親指で叩き、間をゴーストで埋め、2弦オクターブの**E**をプルします。

```json
{
  "id": "m2.w8.d1.octave_groove_4",
  "type": "tab",
  "meta": { "title": "Octave + ghost groove — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** サム-ゴースト-プルが転がるグルーブの骨格です。

```json
{
  "id": "m2.w8.d1.octave_groove_5",
  "type": "tab",
  "meta": { "title": "Octave + ghost groove — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指で覆っておきます。

いまグルーブのあとに**プル・フィル**を乗せます。前半はオクターブ・グルーブ、後半は**b3-4-5**プルで<mark>歌うように</mark>締めくくります。

```json
{
  "id": "m2.w8.d1.groove_fill_4",
  "type": "tab",
  "meta": { "title": "Groove + pop fill (one measure) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 85、4弦。** 前はオクターブ・グルーブ、後ろはb3-4-5プル・フィル。今日の完成一小節です。

```json
{
  "id": "m2.w8.d1.groove_fill_5",
  "type": "tab",
  "meta": { "title": "Groove + pop fill (one measure) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
7週目のプル・アーチを**BPM 50**で軽く振って手を目覚めさせます。今日は<mark>グルーブとプル</mark>を一小節につなげてみます。

**10〜20分 · 頭のトレーニング**
完成一小節を下のように**とてもゆっくり**回しながら、グルーブからプル・フィルへ渡る**つなぎ**を手に刻みます。

```json
{
  "id": "m2.w8.d1.combo_slow_4",
  "type": "tab",
  "meta": { "title": "Groove + fill, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** とてもゆっくり。オクターブ・グルーブのあとb3-4-5フィルが定位置に来るか確認します。

```json
{
  "id": "m2.w8.d1.combo_slow_5",
  "type": "tab",
  "meta": { "title": "Groove + fill, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
完成一小節を**BPM 85**で反復します。フィルが<mark>潰れたら</mark>テンポを落としてグルーブとプルを別々に生かします。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>グルーブとフィルがなめらかにつながるか</mark>聴いてみます。今日ラクだったBPMも書いておきます。

**今日の完了基準：** オクターブ+ゴースト・グルーブにb3-4-5プル・フィルを乗せた完成一小節をBPM 85でなめらかに演奏できる。

## ④ ヒント・よくあるミス

完成一小節を**BPM 90**で少し押して、速くなってもグルーブとフィルが生きているか確認します。

```json
{
  "id": "m2.w8.d1.groove_fill_check_4",
  "type": "tab",
  "meta": { "title": "Groove + fill check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 90、4弦。** 少し速くなっても**オクターブ・グルーブとプル・フィル**がはっきり生きているか確認します。

```json
{
  "id": "m2.w8.d1.groove_fill_check_5",
  "type": "tab",
  "meta": { "title": "Groove + fill check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは常に親指で覆っておきます。

- **フィルが遅れる。** グルーブからフィルへ移るとき急ぐと遅れます。**一拍ずつ**はっきり押さえます。
- **オクターブが弱い。** 2弦オクターブのプルが弱くなりやすいです。サムと**同じ大きさ**で弾きます。
- **ゴーストが鳴る。** 間を埋めるゴーストに音が残ると汚くなります。**音なしで**タッと音だけ出します。
- **低音Bの油断（5弦）。** グルーブに没頭してBが鳴りやすいです。親指の側面で常にBを覆っておきます。
</content>
