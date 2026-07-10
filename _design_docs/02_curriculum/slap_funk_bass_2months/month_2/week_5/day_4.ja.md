---
title: "16シンコグルーヴ — 前へ転がるファンク"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — 16シンコグルーヴ、前へ転がるファンク

## ① 理論・解説

5週目の最終日です！ 今週学んだことを**一つに編む**日です。**16格子**（D1）の上に**T・P・ゴーストを配置**（D2）し、そこに**シンコペーション**（D3）まで乗せると — 今日の完成物、<mark>16ビートシンコスラップグルーヴ</mark>になります。M1の8分グルーヴがついに**ファンクへ進化**しました。

今日のグルーヴの味は**3拍近くの16分プッシュ**です。ポップ（ダッ）の後に**16分が一つ少し前倒しで**入りますが、この小さな押し込み一つがグルーヴを<mark>前へ転がします</mark>。残りは慣れた**サム（ドゥン）-ゴースト（チッ）-ポップ（ダッ）**の組み合わせです。**BPM 80**でゆっくり始め、その**プッシュ一マス**が生きているかに集中します。

やり方はいつも同じです。まず**8分準備グルーヴ**で手を温め、完成グルーヴを**とてもゆっくり**回して**プッシュの場所**を確認してから、**BPM 80**で滑らかにつなぎます。今日はそこに**録音**まで加えます — 今週の成果物を残すのです。完璧でなくても大丈夫です。ゴーストで間を埋めて<mark>止まらずに</mark>二、三周回せば、それがよい録音です。

**5弦**なら音も移動も4弦と同じです。低音**B**は親指で覆っておくか、慣れたら低音Bを根とした重いバージョンでも録音してみます。今日このグルーヴを残せば**5週目完成**です。来週はこのシンコ感覚を**もっと長いグルーヴ**へ育てます。さあ、手の形からまず指板で押さえます — **ルートEとオクターブE**です。

```json
{
  "id": "m2.w5.d4.octave_box_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box (E) — thumb root + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下が**ルートE**（サム）、上が**オクターブE**（ポップ）。今日の完成グルーヴが行き来する二つの場所です。

```json
{
  "id": "m2.w5.d4.octave_box_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box (E) — thumb root + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は**今週の完成物**を録音します。まず**8分準備グルーヴ**で手を温め、<mark>16シンコグルーヴ</mark>を回して残します。各例は**4弦・5弦の二つのバージョン**です。

まずは**8分準備グルーヴ**（サム-チッ-ポップ-チッ）。完成グルーヴに先立って手とミュートを温めます。

```json
{
  "id": "m2.w5.d4.prep_groove_4",
  "type": "tab",
  "meta": { "title": "Eighth-note prep groove (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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

▶ **BPM 70、4弦。** サム-チッ-ポップ-チッ。完成グルーヴの手の場所を先に温めます。

```json
{
  "id": "m2.w5.d4.prep_groove_5",
  "type": "tab",
  "meta": { "title": "Eighth-note prep groove (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指で寝かせておきます。

**今週の完成物 — 16シンコスラップグルーヴ。** Eオクターブに<mark>16分プッシュ</mark>を乗せた、今週の成果物です。

```json
{
  "id": "m2.w5.d4.sixteenth_synco_4",
  "type": "tab",
  "meta": { "title": "16th syncopated slap groove — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80（ゆっくり始める）。** 3拍近くの**16分プッシュ**（サムが少し前倒しで入る）がシンコペーションの味。ゴーストで間を埋めて転がし続けます。

```json
{
  "id": "m2.w5.d4.sixteenth_synco_5",
  "type": "tab",
  "meta": { "title": "16th syncopated slap groove — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bの重い低音でもう一つバージョンを録音してみてもよいです。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
8分準備グルーヴを**BPM 60**で軽く流して手を目覚めさせます。今日はこの流れを<mark>そのまま録音に収め</mark>ます。

**10〜20分 · 頭のトレーニング**
完成グルーヴを下のように**とてもゆっくり**回しながら、**16分プッシュ**一マスの場所を手に刻みます。

```json
{
  "id": "m2.w5.d4.synco_slow_4",
  "type": "tab",
  "meta": { "title": "16th syncopated groove, slow (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** とてもゆっくり。**ポップ後の16分プッシュ**が次のサムを引く場所をはっきり押さえます。

```json
{
  "id": "m2.w5.d4.synco_slow_5",
  "type": "tab",
  "meta": { "title": "16th syncopated groove, slow (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
完成グルーヴを**BPM 80**で反復します。**16分プッシュ**が潰れたらテンポを落としてその一マスから鮮明に生かします。4弦で覚えたあと5弦でも同じグルーヴを確認します。

**40〜50分 · 録音・フィードバック**
いよいよ録音です。**BPM 80**で二、三周を止まらずに録音し、その中で一番よい一回を<mark>今週のグルーヴとして残し</mark>ます。4弦・5弦のどちらも残せば5週目完成です。

**今日の完了基準：** 16ビートシンコスラップグルーヴ（ポップ後の16分プッシュ）をBPM 80で4弦・5弦で止まらずに録音できる。 — 週間成果物：私の初めての16シンコスラップグルーヴの録音。（5週目完成！）

## ④ ヒント・よくあるミス

完成グルーヴを**BPM 90**で少し押して、速くなってもプッシュが生きているか確認します。

```json
{
  "id": "m2.w5.d4.synco_check_4",
  "type": "tab",
  "meta": { "title": "16th syncopated groove check (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 90、4弦。** 少し速くなっても**ポップ後の16分プッシュ**が潰れないか確認します。

```json
{
  "id": "m2.w5.d4.synco_check_5",
  "type": "tab",
  "meta": { "title": "16th syncopated groove check (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と移動は4弦と同じです。低音Bは常に親指で覆っておきます。

- **録音を押した途端に緊張する。** マイクの前で手が固まります。録音中だと忘れて、練習のように気楽に何度も回します。
- **プッシュを急いで引く。** 16分プッシュを急ぐと拍が崩れます。引くのは**その一マス**だけ、残りはそのままです。
- **ゴーストが消える。** 録音に集中して間のマスがぼやけます。**音程のない「チッ」**で転がし続けます。
- **低音Bの油断（5弦）。** 録音に集中してBが漏れやすいです。親指の側面で常にBを覆っておきます。
