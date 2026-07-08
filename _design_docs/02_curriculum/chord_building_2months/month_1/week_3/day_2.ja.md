---
title: "Dm7-G7-Cmaj7を1区域でつなぐ — 指の最小移動"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — ルート弦交差で手を縛り、ガイドトーンでつなぐ

## ① 理論・説明

昨日II-V-Iの概念を見ました。今日は実際に**Dm7（5弦）→ G7（6弦）→ Cmaj7（5弦）**を同じフレット区域（3〜7フレット）で手の移動を最小にしてつなぎます。2つに集中。

**① ルート弦交差。** Dm7は5弦、G7は6弦、Cmaj7はまた5弦にルート。こうして6・5弦コードを交互に選べば、手がネックを走り回りません。

**② ガイドトーンは半音ずつ。** 昨日3弦で7度→3度→7度がほぼ動かなかった（5→4→4）。今日は**別のガイドトーン・ライン**を見ます。2弦でDm7の3度（F）→ G7の7度（F）→ Cmaj7の3度（E）：**6→6→5フレット。** Fはそのまま、最後にEへ半音だけ。2つのガイドトーン・ライン（3弦・2弦）が同時にほぼその場で滑る — これがボイスリーディングの実体です。不思議じゃないですか？　コードは3つも変わるのに、上で歌っている音はほとんど貼りついたまま。この感覚さえ手に入れば、どんな進行も滑らかになります。

## ② ビジュアル

真ん中のコード**G7（V、6弦ルート）** — IIとIをつなぐ橋です。緑＝ガイドトーン（3度・7度）。

```json
{
  "id": "m1.w3.d2.g7_pivot",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 (V) — pivot, 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

**例1 — 2つ目のガイドトーン・ライン（2弦）。** Dm7の3度（F）→ G7の7度（F）→ Cmaj7の3度（E）。2弦6→6→5。Fはそのまま、最後にEへ半音だけ。

```json
{
  "id": "m1.w3.d2.guide_tone_line2",
  "type": "tab",
  "meta": { "title": "Guide-tone line #2 (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 2, "fret": 6, "duration": "whole", "label": "Dm7-b3(F)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 2, "fret": 6, "duration": "whole", "label": "G7-b7(F)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 2, "fret": 5, "duration": "whole", "label": "Cmaj7-3(E)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66。** 2弦6→6→5。共通音FがDm7・G7に残り、IでEへ半音。「ほとんど動かない」をもう一度。4回反復。

**例2 — ルート＋ガイドトーン・コンピング。** 各コードでルート → ガイドトーンを押さえます。ルートは5・6・5を行き来しても、**ガイドトーン（3弦）は5→4→4でほぼその場**だと手で感じて。

```json
{
  "id": "m1.w3.d2.root_guide_comp",
  "type": "tab",
  "meta": { "title": "Root + guide-tone comp (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 74。** ルート（5・6・5）と3弦のガイドトーン（5・4・4）を交互に。ガイドトーンがほぼ動かないのを確認して4回反復。慣れたらコード全体をストローク。

**例3 — コード全体コンピング。** 例2と同じリズムですが、今度はルート1音の代わりに、その小節のコード全体（Dm7 → G7 → Cmaj7）を鳴らします。

```json
{
  "id": "m1.w3.d2.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord comp (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 74。** 例2と同じリズムで、今度はコード全体で。ルートのコンピングが手に馴染んだら、こちらへ。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Dm7 → G7 → Cmaj7 を1区域で順番に。ルート弦が5・6・5なのを毎回声に出して確認。

**10〜20分 · 脳トレ（今日のターゲット＝2つのガイドトーン・ライン）**
**例1**（2弦6→6→5）と昨日の3弦（5→4→4）を両方押さえます。2本のラインが同時にほぼその場で滑るのを目で確認。

**20〜40分 · 実戦伴奏（例2コンピング / 70〜80 BPM）**
**例2をBPM 74で4回反復。** ルートは行き来してもガイドトーンは近くにいるのを手で。慣れたら3コード全体を滑らかにつないでコンピング（例3）。手が区域を離れたら失敗。

**40〜50分 · 録音・セルフフィードバック（推奨）**
II-V-Iを30秒録音。チェック：切替時の手のジャンプが最小か、ガイドトーンが滑らかにつながるか。

**今日の完了基準：** Dm7-G7-Cmaj7をフレット3〜7の1区域で手のジャンプなくつなぎ、2つのガイドトーン・ラインを押さえられる。

## ④ ヒント / よくあるミス

- **ルートだけ追う。** ルートはむしろ大きく動きます（5・6・5）。手を縛るのはガイドトーン。3弦・2弦のほとんど動かない音に目を置いて。
- **区域を離れる。** Dm7がフレット5、G7が3で少し下がりますが、それだけ。大きくジャンプしたらルート弦の選択が間違いです。
- **切替で音が切れる。** 指を1本ずつ最小に動かせば音が切れにくい。手全体を離さないで。
- **6弦ミュート（5弦コード）。** Dm7・Cmaj7で6弦は必ず殺す。
