---
title: "指1本で色を変える — マイナーと転回形"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 同じ3弦、指1本で色が変わる

## ① 理論・説明

昨日押さえたEメジャーの3弦トライアド、今日はここから**指を1本動かすだけ**で色をまるごと変えてみます。

最初の変化は**マイナー**です。2弦をちょうど1フレット下げると（9→8）、明るいEメジャーが暗いEマイナーになります。3度が半音下がってb3になったんです（下の図の緑）。指1本の差で明るさが哀しみに変わるこの瞬間、先月のコードビルディングでも見た、まさにあの原理です。狭い3弦の中でも、このスイッチは同じように生きています。

```json
{
  "id": "m2.w5.d2.emin_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor triad (top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 8, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

2つ目は**転回形（インバージョン）**です。同じEメジャーでも3音の順番を変えると（どの音が一番上に来るか）感じが変わります。今日は低い位置の第2転回形も味見します — 根音の代わりに5度が下に来た配置です。コードは同じなのに、少し違う色できらめきます。狭い3弦の中でこれだけ多彩な表情が出るのが、トライアド・カッティングの本当の魅力です。

```json
{
  "id": "m2.w5.d2.emaj_inv",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad — 2nd inversion (5th in bass)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" }
  ]}
}
```

いくつものフォームを行き来すると手が混乱するかもしれません。当然です。今日は全部覚えようとせず、「2弦1フレットで明暗が変わる」その1つだけ確実につかんでください。カッティング中にこのスイッチをスッと入れられれば、あなたのワンコード・ジャムは急にずっと多彩になります。コードを新しく覚えるのではなく、知っているフォームから指1本を移すだけなので負担もありません。明るくいくか暗くいくか、もうあなたが選ぶんです。

## ② ビジュアル資料

同じ3弦、指だけ違う3つの色です。緑＝変わった音（b3）。Eマイナーと第2転回形を対照します。

**Eマイナー・トライアド。** 昨日のメジャーから2弦だけ9→8（緑＝b3）。明るさが暗さへ — 指1本の差。

```json
{
  "id": "m2.w5.d2.emin_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor triad (top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 8, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

**Eメジャー第2転回形。** 同じEメジャーだが低い位置、5度が下へ。位置を移すと色が少し変わります。

```json
{
  "id": "m2.w5.d2.emaj_inv",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad — 2nd inversion (5th in bass)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" }
  ]}
}
```

**例1 — 色が変わるカッティング（1小節）。** 同じリズムをメジャーで弾き、マイナーへ。2弦1フレット変えるだけ。

```json
{
  "id": "m2.w5.d2.color_1bar",
  "type": "tab",
  "meta": { "title": "Triad cutting — major/minor color (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** 前半はメジャー、後半はマイナーで弾いて色の違いを聴いて。4回。

**例2 — メジャー→マイナー（2小節）。** 1小節はメジャー、2小節はマイナー。同じカッティングなのに表情ががらっと。

```json
{
  "id": "m2.w5.d2.color_2bar",
  "type": "tab",
  "meta": { "title": "Major then minor (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 8, "role": "target", "label": "b3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** 慣れたら転回形にも移して応用。どの色が好きか耳で選んで。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。Eメジャー↔マイナーを2弦1フレットで交互に押さえてウォームアップ。転回形も軽く。

**10〜20分 · 頭のトレーニング（今日のターゲット＝色スイッチ）**
カッティングを保ったままメジャー↔マイナーをスッと変える練習。2弦の指だけ動かす感覚を刻みます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 70）**
**例1**（色が変わるカッティング）をBPM 70で4回 → **例2**（メジャー→マイナー）へ。慣れたら転回形にも移して応用。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：メジャー↔マイナーの色がはっきり区別できるか／カッティングは3弦だけ鳴り続けるか／切替はなめらかか。

**今日の完了基準：** 同じ3弦の中でメジャー↔マイナーを指1本で変え、転回形も味見して色を変えられる。

## ④ ヒント / よくあるミス

- **色を変えると下の弦が漏れる。** 指を移してミュートが緩みます。下の弦を殺す指は保ったまま。
- **切替でカッティングが切れる。** フォームを変えるとき右手が止まらないように。カッティングは続け、左手だけ。
- **転回形の完璧強迫。** 今日は味見です。メジャー↔マイナーのスイッチが核心。
- **変えすぎ。** 色は節約するほど効果的。1曲に1〜2回で十分。
