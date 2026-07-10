---
title: "リハーサル — 止まらないフルラン"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — リハーサル、止まらないフルラン

## ① 理論・解説

昨日は**E→Gの2小節グルーヴ**であなたのグルーヴが曲の形を持ちました。今日はその曲を<mark>止まらずに繰り返す</mark>**リハーサル**です。明日の録音のための最後の仕上げ — 目標は新しい技術ではなく**途切れない流れ**です。完璧な演奏より、最初から最後まで止まらずにつながる一回を作ることが今日のすべてです。

リハーサルの核心は一つ、**間違えても止まらない**ことです。私たちは練習でミスをすると反射的に手を止めてその場所を弾き直しますが、録音や本番ではその停止が曲全体を崩します。だから今日はルールを変えます — <mark>ミスはそのまま通り過ぎ</mark>、流れを守ります。1音間違えても拍さえ外さなければ、聴く人はほとんど気づきません。**拍を守ることが正確な音より先**です。

方法は**何度も続けて回すループ**です。**E→Gの2小節**を一つの塊と見て、終わったら休まずすぐに1小節目のEへ戻ります。**BPM 80** — 今週の目標速度です。4回、8回と続けて回し、回している間は<mark>どこで揺れるか</mark>だけ覚えておいて、あとでその場所だけ別に直します。リハーサル中は直さず、最後まで流れることだけを考えます。この「止まらない感覚」が明日の録音の成否を分ける本当の鍵です。

**5弦**なら流れも移動も4弦と同じです。低音Bは親指で覆っておき、慣れたら同じ通しをもっと重い低音でも回します。今日**止まらない一回**を完成させれば、明日はただ録音ボタンを押すだけです。

## ② ビジュアル資料

今日は**E→G移動マップ**を一目で覚え、**フルラン**を止まらずに回します。各例は**4弦・5弦の二つのバージョン**です。

まずは**移動マップ**。下の青二つが**Eの場所**（サムのルート・ポップのオクターブ）、上の青二つが**Gの場所**です。手が<mark>三つを行き来する道</mark>を目に刻んでおきます。

```json
{
  "id": "m1.w4.d3.move_map_4",
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
  "id": "m1.w4.d3.move_map_5",
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

いよいよ**フルラン**。**BPM 80**でE→Gの2小節を<mark>止まらずに</mark>回し続けます。間違えてもそのまま通り過ぎます。

```json
{
  "id": "m1.w4.d3.full_run_4",
  "type": "tab",
  "meta": { "title": "Full run-through (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
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

▶ **BPM 80、4弦。** 2小節を一つの塊で、終わったら休まずまた1小節目のEへ戻ります。

```json
{
  "id": "m1.w4.d3.full_run_5",
  "type": "tab",
  "meta": { "title": "Full run-through (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
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

▶ **BPM 80、5弦。** 流れと移動は4弦と同じです。低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
E グルーヴとG グルーヴをそれぞれBPM 60で軽く回して手を目覚めさせます。今日は<mark>二つを途切れなくつなぐこと</mark>がテーマです。

**10〜20分 · 頭のトレーニング**
移動マップを見ながらE↔Gをとてもゆっくり往復します。<mark>揺れる場所</mark>がどこか だけ覚えておきます。

**20〜40分 · 実践**
フルランを**BPM 80**で4回、8回と続けて回します。間違えても止まらず流れを守ります。4弦で覚えたあと5弦でも同じ流れを確認します。

**40〜50分 · 録音・フィードバック**
止まらない一回を30秒録音して<mark>流れが最初から最後までつながったか</mark>を聴いてみます。揺れた場所だけ別に書いておきます。

**今日の完了基準：** E→Gの2小節グルーヴを、BPM 80で止まらずに何度も続けて回せる。

## ④ ヒント・よくあるミス

- **間違えると止まる。** 反射的に手が止まります。今日だけは間違えた音を捨てて次の拍へそのまま進みます。
- **ループの間が空く。** 2小節の終わりで一息つくと拍が抜けます。終わりと始まりを一拍も空けずにつなげます。
- **80で焦る。** 目標速度に手が先走ります。揺れたらDay 2の78へ少し下がります。
- **低音Bの油断（5弦）。** 反復が長くなるほどBが漏れやすいです。親指で常にBを覆っておきます。
