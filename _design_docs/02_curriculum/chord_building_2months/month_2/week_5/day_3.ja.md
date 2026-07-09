---
title: "高音域の転回 — トップにR·3·5のどれを置く？"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — 同じコード、違うトップノート＝違う色

## ① 理論・説明

同じGコードでも、**<mark>一番高い音（トップノート）にR·3·5のどれを置くか</mark>**で印象がまるで変わります。これを<mark>「転回（インバージョン）」</mark>と呼びます。今日は1・2・3の細い弦にのせたGトライアドを、ネックを上がりながら3か所で見ます：

- **<mark>トップ＝R（G）</mark>** — 安定、きっちり終わった感じ。（3フレット付近）
- **<mark>トップ＝3（B）</mark>** — 明るく歌う感じ。（7フレット付近）
- **<mark>トップ＝5（D）</mark>** — 開いて浮いた感じ。（10フレット付近）

```json
{
  "id": "m2.w5.d3.g_top_root",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note R", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 2, "label": "R", "role": "target", "highlight": true }
  ]}
}
```

```json
{
  "id": "m2.w5.d3.g_top_third",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 3", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

```json
{
  "id": "m2.w5.d3.g_top_fifth",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 5", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 9, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 12, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 12, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 10, "finger": 1, "label": "5", "role": "target", "highlight": true }
  ]}
}
```

3つとも同じG（G-B-D）なのに、一番上の音1つで色が変わります。プロは進行の中で**<mark>トップノートを選んで</mark>**コードを配置します（7週目でこれをメロディにつなぎます）。今日は<mark>「トップノートを変えると色が変わる」</mark>感覚だけ確実に持ち帰りましょう。3つの位置を今すぐ全部覚える必要はまったくありません。同じコードが位置1つでこんなに違って聞こえるって、不思議じゃないですか？　この感覚が7週目でトップノートをつないだ瞬間、あなたのコンピングの上をメロディが流れはじめます。

## ② ビジュアル

**ボイシング① トップ＝R（G）。** <mark>緑がトップノート（ルート）</mark>。

```json
{
  "id": "m2.w5.d3.g_top_root",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note R", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 2, "label": "R", "role": "target", "highlight": true }
  ]}
}
```

**ボイシング② トップ＝3（B）。** <mark>明るく歌う</mark>。

```json
{
  "id": "m2.w5.d3.g_top_third",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 3", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**ボイシング③ トップ＝5（D）。** <mark>開いて浮いた</mark>。

```json
{
  "id": "m2.w5.d3.g_top_fifth",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 5", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 9, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 12, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 12, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 10, "finger": 1, "label": "5", "role": "target", "highlight": true }
  ]}
}
```

**例1 — トップノート・メロディ（R → 3 → 5）。** 1弦で3か所のトップノートだけを弾きます：3フレット（R,G）→ 7フレット（3,B）→ 10フレット（5,D）。トップノートがメロディになる予感を先取り。

```json
{
  "id": "m2.w5.d3.top_note_melody",
  "type": "tab",
  "meta": { "title": "Top-note melody (R-3-5) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70。** 1弦3 → 7 → 10フレット。Gの3音（R·3·5）がトップノート・メロディとして上がります。各音の色（安定・明るい・浮遊）を感じて。4回反復。

**例2 — 3ボイシング・コンピング。** 各ボイシングを低音 → トップノートで押さえて色を比較。

```json
{
  "id": "m2.w5.d3.inversion_comp",
  "type": "tab",
  "meta": { "title": "Three inversions comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 12, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 10, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 12, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76。** 3か所（トップ R → 3 → 5）を順に。低音を押さえてトップノートをのせ、同じGが場所ごとにどれだけ違って聞こえるか比較して。4回反復。

**例3 — コード全体コンピング。** 例2で低音＋トップノートだけ押さえていた3か所（トップ R → 3 → 5）を、今度はトライアド全体で鳴らします。トップノートはそのまま和音の一番上で歌います。

```json
{
  "id": "m2.w5.d3.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (3 inversions) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 12, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 12, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 10, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 12, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 12, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 10, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 12, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76。** 例2と同じリズムで、今度はどの位置も和音全体で。音がぐっと厚くなるのを感じて。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
3つのボイシング（トップR·3·5）をそれぞれ押さえ、1・2・3弦だけきれいに鳴るかチェック。<mark>ネックを上下する手の移動に慣れる</mark>。

**10〜20分 · 脳トレ（今日のターゲット＝トップノートの正体）**
各ボイシングで**<mark>今トップノートがR·3·5のどれか</mark>**を声に出して押さえます。目を閉じて「トップ＝3！」で7フレットのボイシングをすぐつかめれば合格。

**20〜40分 · 実戦伴奏（例1・2 / 70〜80 BPM）**
**例2の3ボイシング・コンピングをBPM 76で**反復し色を比較。続けて**例1のトップノート・メロディ**で3音をつないで。慣れたら<mark>他のコード（C・D）でも3か所を探して</mark>。

**40〜50分 · 録音・セルフフィードバック（推奨）**
3ボイシングを30秒録音。チェック：<mark>場所ごとにトップノートがはっきり違うか</mark>、手の移動が濁らないか。

**今日の完了基準：** 同じGをトップノートR·3·5の3か所で押さえ、各場所の色の違いを耳で区別する。

## ④ ヒント / よくあるミス

- **転回を「別のコード」と誤解。** 3つとも同じG。音の順番（誰がトップか）だけ違う。
- **ネック上のボイシングが見つからない。** トップノートを基準に探して。「5をトップに置きたい → 1弦でDを探す」。
- **高フレットのミュート/音程。** 10〜12フレットは間隔が狭い。指先を立てて3本だけきれいに。
- **トップノートを聞かない。** 今日の核心は耳。同じコードが場所ごとに違って聞こえるのを必ず感じて。
