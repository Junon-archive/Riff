---
title: "トップノート最小移動 — C-Am-F-Gを歌に"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 共通音はそのまま、トップノートは1音ずつ

## ① 理論・説明

今日は実際の進行 **C - Am - F - G**（ポップスで最も多い進行の1つ）をボイスリーディングで編みます。目標はトップノートが**階段のように滑らか**に動くこと。

トップノート・メロディをこう選びます：**G → A → A → G。**（1弦3フレット → 5フレット → 5フレット → 3フレット。）1音（長2度）上がってそのまま、また下がる。大きなジャンプがありません。

```json
{
  "id": "m2.w7.d2.top_line_camfg",
  "type": "tab",
  "meta": { "title": "Top-note line (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

秘密は**共通音**。CとAmをこの位置で押さえると、下の2音（C·E）が**同じ**です。だからC→Amは1弦だけG→Aに動かせば終わり（残りは付けたまま）。Am→FもトップはAのまま。プロはこの「最も動かない道」を見つけてコードをつなぎ、結果トップノートが歌います。不思議じゃないですか？　コードは変わるのに手はほとんど動かない、それでも一番上ではメロディが流れている。あなたが好きだったあの洗練された伴奏の正体はこれです — 魔法ではなく、共通音を付けたままにした結果なんです。

## ② ビジュアル

**C — トップ＝5（G）。** 下の2音はC（R）·E（3）。緑がトップノート。

```json
{
  "id": "m2.w7.d2.c_top_g",
  "type": "fretboard_diagram",
  "meta": { "title": "C triad — top note G (5)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "5", "role": "target", "highlight": true }
  ]}
}
```

**Am — トップ＝R（A）。** 下の2音C·EはCコードと**同じ**（共通音）。トップだけG→Aへ。

```json
{
  "id": "m2.w7.d2.am_top_a",
  "type": "fretboard_diagram",
  "meta": { "title": "Am triad — top note A (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Am" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 2, "label": "b3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**例1 — トップノート・メロディ（G-A-A-G）。** 進行の4つのトップノートだけを1弦で弾きます。これがコードの上で歌う旋律です。

```json
{
  "id": "m2.w7.d2.top_line_camfg",
  "type": "tab",
  "meta": { "title": "Top-note line (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72。** 1弦3 → 5 → 5 → 3。G-A-A-G。コードはC-Am-F-Gと変わるのに、トップノートはたった1音だけ動きます。この滑らかさがボイスリーディング。4回反復。

**例2 — C-Am-F-G コンピング（トップ保持）。** 各コードを低音＋トップノートで。一番上の旋律（G-A-A-G）が続くように。

```json
{
  "id": "m2.w7.d2.camfg_comp",
  "type": "tab",
  "meta": { "title": "C-Am-F-G comp (top line) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 6, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** C-Am-F-Gを循環し、一番上のG-A-A-Gが歌うように。手がネックを大きく跳ばず1区域（3〜6フレット）にとどまるか確認。

**例3 — コード全体コンピング。** 低音＋トップノートだけ押さえていたC - Am - F - Gを、今度はトライアド全体で鳴らします。トップノート・メロディ（G-A-A-G）は和音の一番上でそのまま続きます。

```json
{
  "id": "m2.w7.d2.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (C-Am-F-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78。** 例2と同じリズムで、今度はコード全体で。進行がぐっと厚みを増して聞こえます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
C-Am-F-Gの4か所を順番に。特にC↔Amで下の2音（C·E）がそのまま付いているか、トップだけG↔Aに動くか確認。

**10〜20分 · 脳トレ（今日のターゲット＝トップノート接続）**
**例1**のトップノート・メロディ（G-A-A-G）を1弦で目を閉じて。各コードでトップがR·3·5のどれかも一緒に確認。

**20〜40分 · 実戦伴奏（例2コンピング / 74〜84 BPM）**
**例2のC-Am-F-GをBPM 78で4回反復。** トップノートがG-A-A-Gで歌うことに集中。慣れたらバッキングに重ねて実際の曲のように。

**40〜50分 · 録音・セルフフィードバック（推奨）**
進行を2周録音。チェック：トップノート・メロディが滑らかにつながったか／切替で手が大きくジャンプしなかったか。

**今日の完了基準：** C-Am-F-GをトップノートG-A-A-Gが歌うように、共通音を付けたまま最小移動で循環する。

## ④ ヒント / よくあるミス

- **共通音を毎回押さえ直す。** C→Amは下の2音がそのまま。離さずトップだけ動かして。
- **トップノートが跳ねる大きなジャンプ。** トップが階段（1音）で動く位置を選んで。大きく跳ぶとメロディが聞こえません。
- **トップノートが埋もれる。** 一番上の音を少し強めに。下は支える役。
- **進行をかたまりで変える。** 各コードで「このコードのトップをどこに置くか」を問うて。
