---
title: "逆方向 — メロディを先に、コードを下に"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 歌いたい旋律にコードを着せる

## ① 理論・説明

昨日は進行が与えられ、トップノートを最小移動でつなぎました。今日は**逆**です。**トップノート・メロディを先に決め**、その旋律を支えるコードを下に付けます。作曲・編曲の実際の順番 — 歌（旋律）が先、コードは服。

今日のメロディは下行 **C → B → A → G**（1弦8 → 7 → 5 → 3フレット）。1音ずつ下りるとても自然な旋律です。この4音をトップに置いて下にコードを付けると：

- **C（トップ）← Cコード**（CはCのR）
- **B（トップ）← Gコード**（BはGの3度）
- **A（トップ）← Fコード**（AはFの3度）
- **G（トップ）← Cコード**（GはCの5度）

つまり進行は **C - G - F - C**。同じメロディも下にどのコードを敷くかで色が変わります。今日は「メロディが先、コードはそれを支える」感覚を身につけます。昨日と方向が逆なだけで、使う材料は同じなので気負わないで。今日これを一度やってみると、好きな曲のコードがなぜあんなに近くに寄り添っているのか、頭より先に耳が気づきはじめます。作曲家の視点で曲を聴く、その第一歩です。

## ② ビジュアル

**C — トップ＝R（C）。** メロディ最初の音Cをトップに置き、下に3（E）·5（G）。緑がトップ（メロディ）。

```json
{
  "id": "m2.w7.d3.c_top_c",
  "type": "fretboard_diagram",
  "meta": { "title": "C triad — top note C (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 7, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 8, "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**G — トップ＝3（B）。** メロディ2番目の音Bをトップに置くと、下はGコードが自然。

```json
{
  "id": "m2.w7.d3.g_top_b",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note B (3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**例1 — 先に決めたトップノート・メロディ（C-B-A-G）。** 1弦で下行旋律だけを先に歌ってみます。これが今日コードを着せる「歌」。

```json
{
  "id": "m2.w7.d3.melody_first",
  "type": "tab",
  "meta": { "title": "Top melody first (C-B-A-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 8, "duration": "quarter", "label": "R(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3(B)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70。** 1弦8 → 7 → 5 → 3。C-B-A-G下行。まずこの旋律を歌うように覚えて（括弧はこの音が各コードで持つ度数）。4回反復。

**例2 — メロディにコードを着せる（C-G-F-C）。** 各トップノートの下にコードを敷きます。上は旋律、下は支え。

```json
{
  "id": "m2.w7.d3.harmonize_comp",
  "type": "tab",
  "meta": { "title": "Harmonize the melody (C-G-F-C) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 8, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 6, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76、4回反復。** トップのC-B-A-Gはそのまま歌い、下のC-G-F-Cが支えます。メロディを先に歌い、コードをのせる順番を体で。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**例1**のメロディ（C-B-A-G）を1弦で何度も。下行旋律を手と耳に刻む。

**10〜20分 · 脳トレ（今日のターゲット＝メロディ→コード）**
各トップノートがどのコードの何度か確認（C＝CのR、B＝Gの3、A＝Fの3、G＝Cの5）。「この音をトップに置くにはどのコードが合うか」を自問。

**20〜40分 · 実戦伴奏（例2コンピング / 72〜82 BPM）**
**例2をBPM 76で4回反復。** 上のメロディは保ち、下のコードで支える。慣れたらメロディを少し変えて（例：C-B-A-A）合うコードを自分で選んで。

**40〜50分 · 録音・セルフフィードバック（推奨）**
メロディ＋コードを30秒録音。チェック：トップメロディがはっきり歌うか／下のコードがメロディをよく支えるか。

**今日の完了基準：** トップノート・メロディ（C-B-A-G）を先に決め、その下にコード（C-G-F-C）を付けてコンピングする。

## ④ ヒント / よくあるミス

- **コードから考える。** 今日はメロディが先。歌いたい旋律を決めてコードは後。
- **トップメロディが埋もれる。** 上の音を少し強めに、下は柔らかく。メロディが聞こえてこそ意味があります。
- **1つのメロディ音にコードは1つと思う。** C（トップ）にはC以外にAm・Fなど複数のコードが合います。今日は一例。
- **ネック移動が急。** 8フレット（C）から3フレット（G）へ下ります。先に次の位置を見て滑らかに。
