---
title: "9度とは何か — Maj7に色をのせてMaj9"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — ルートの上にもう1音、それが9度

## ① 理論・説明

「9度」という言葉、難しく聞こえますか？ 実はとてもシンプル。**9度＝ルートの長2度を1オクターブ上げた音。** Cの9度はD（ドからレ、1オクターブ上）。それだけです。

この1音をすでに押さえているコードにのせると、色がぐっと華やかに。今日は**Maj7 → Maj9**をやります。

- **Maj7の骨組み** ＝ R（C）· 3（E）· 7（B）。（ここまでは先月学んだコードトーン。）
- **ここに9度（D）をのせると** ＝ **Maj9**。R·3·7の上にDが1つきらりと振りかけられます。

核心はこれ：R·3·7がコードの**骨組み（青）**なら、9度はその上に振りかける**色（黄色）**。骨組みはそのまま、色だけ足す。シティポップ・ジャズ・R&Bのあの洗練された響きは、まさにこの9度から。怖がらないで — 新しいコードを丸ごと覚えるわけじゃありません。すでに押さえているコードに指を1本足すだけ。知っているコードの上にキラキラを1つ振りかけるだけなので、今日は「9度は難しくない」と手で確かめれば十分です。

## ② ビジュアル

まず**Cmaj7の骨組み**（R·3·7）。青がコードの骨格。

```json
{
  "id": "m2.w6.d1.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 skeleton (R·3·7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

次に**Cmaj9** — 2弦に9度（D）をのせました。黄色が新しく振りかけた**9度テンション**、今日の色です。

```json
{
  "id": "m2.w6.d1.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — R·3·7·9 ライン。** 骨組みの3音を押さえ、最後に9度（D）をのせます。9度がルート（C）の長2度上（オクターブ上）だと音で確認。黄色がその色。

```json
{
  "id": "m2.w6.d1.maj9_line",
  "type": "tab",
  "meta": { "title": "Cmaj9 tones (R·3·7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 72。** 「ルート → 3度 → 7度 → 9度（色）」。最後の9度（D）がのる瞬間、音が華やかになるのを感じて。4回反復。

**例2 — Maj7 → Maj9 コンピング。** 1小節は骨組み（Maj7）、2小節は9度をのせたMaj9。同じコードに色だけ足されるのを耳で比較。

```json
{
  "id": "m2.w6.d1.maj7_maj9_comp",
  "type": "tab",
  "meta": { "title": "Cmaj7 to Cmaj9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** 1小節の素朴なMaj7 → 2小節の華やかなMaj9。9度（黄色）1つ足すだけで色がガラッと変わるのを楽しんで。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Cmaj7の骨組み → Cmaj9（9度追加）を交互に押さえます。2弦にのせた**9度がミュートされず、きれいに**鳴るかが核心チェック。

**10〜20分 · 脳トレ（今日のターゲット＝9度）**
ルート（C）を基準に**9度（D）がどこか**を押さえます（2弦3フレット）。このコードで3度・7度・9度がそれぞれどこか声に出して確認。目を閉じて9度をのせられれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 74〜84 BPM）**
**例2のMaj7↔Maj9をBPM 78で4回反復**し色の違いを感じて。慣れたらルートを別フレット（例：5弦の別位置）へ移して同じ公式を応用。明るいバッキングに重ねればシティポップ感。

**40〜50分 · 録音・セルフフィードバック（推奨）**
Maj7↔Maj9を30秒録音。チェック：9度が死なず聞こえるか／テンション追加で手のフォームが崩れて別の弦がミュートされていないか。

**今日の完了基準：** Cmaj7の骨組みに9度をのせてCmaj9を作り、9度がルート＋長2度（オクターブ上）だと指して言える。

## ④ ヒント / よくあるミス

- **9度が死ぬ。** 新しくのせた指が寝たり力不足だと9度が鳴りません。指先を立てて2弦だけきれいに。
- **9度を「難しいもの」と怖がる。** 9度＝ドからレ、たった1音。公式さえ分かれば12キーどこでものせられます。
- **骨組みを揺らす。** 9度をのせようとしてR·3·7が崩れないように。骨組みはそのまま、色だけ追加。
- **9度と3度を混同。** 9度（D）はルート（C）の長2度上。3度（E）とは別の音です。
