---
title: "m7 → m9 — マイナーに9度をのせてネオソウルの色"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — すでに知っているm7に指をもう1本

## ① 理論・説明

昨日Maj7に9度をのせてMaj9を作りました。今日は同じ9度（D）を**マイナーコード（m7）**の上にのせます。結果は**m9** — R&B・ネオソウル・シティポップのあの柔らかく洗練された色です。

- **Cm7の骨組み** ＝ R（C）· b3（E♭）· b7（B♭）。（マイナーの暗い色。）
- **ここに9度（D）をのせると** ＝ **Cm9**。暗いのに華やか、不思議と開いた音。

ポイントは9度が**同じ場所（2弦）**に来ること。昨日のMaj9の9度もD、今日のm9の9度もD — ルートがCなら9度は常にD。骨組み（3度・7度）だけマイナーに変わり、**色（9度）はそのまま上に**。公式が一度手に入れば、maj9でもm9でも9度をのせる動作は同じです。だから今日学ぶのは新しいコードではなく、昨日の動作をそのままマイナーへ移すだけ。手がすでに覚えている場所で、骨組みだけ暗くして色は上にそのままのせる感じです。昨日Maj9ができたなら、今日のm9も必ずできます。

## ② ビジュアル

まず**Cm7の骨組み**（R·b3·b7）。青がマイナーの骨格。

```json
{
  "id": "m2.w6.d2.cm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 skeleton (R·b3·b7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

次に**Cm9** — 2弦に9度（D）をのせました。黄色が9度テンション。暗さの上に振りかけた色です。

```json
{
  "id": "m2.w6.d2.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — R·b3·b7·9 ライン。** マイナー骨組みの3音に9度（D）をのせます。昨日のMaj9と9度（D）が同じ音だと確認 — 骨組みが暗くなっただけ。

```json
{
  "id": "m2.w6.d2.m9_line",
  "type": "tab",
  "meta": { "title": "Cm9 tones (R·b3·b7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 72。** 「ルート → 短3度 → 短7度 → 9度（色）」。暗い骨組みの上に9度がのって柔らかく開く音を感じて。4回反復。

**例2 — m7 → m9 コンピング。** 1小節Cm7、2小節9度をのせたCm9。暗さに色が足されるのを比較。

```json
{
  "id": "m2.w6.d2.m7_m9_comp",
  "type": "tab",
  "meta": { "title": "Cm7 to Cm9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** 1小節の素朴なCm7 → 2小節の洗練されたCm9。マイナーの暗さの上に9度（黄色）1つでネオソウルの色が出ます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Cm7 → Cm9（9度追加）を交互に。2弦の9度がきれいに鳴るか、b3（4弦）が潰れないかチェック。

**10〜20分 · 脳トレ（今日のターゲット＝m9の9度）**
Cm9でb3·b7·9がそれぞれどこか押さえて言います。昨日のMaj9と**9度（2弦3フレット）が同じ場所**だと確認。目を閉じて9度をのせられれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 74〜84 BPM）**
**例2のCm7↔Cm9をBPM 78で4回反復。** 慣れたらルートを別フレットへ移して応用。遅いソウル/シティポップのバッキングに重ねると真価が出ます。

**40〜50分 · 録音・セルフフィードバック（推奨）**
Cm7↔Cm9を30秒録音。チェック：9度が死なないか／テンション追加でb3·b7がミュートされていないか。

**今日の完了基準：** Cm7に9度をのせてCm9を作り、m9の9度がMaj9と同じ音（D）だと理解する。

## ④ ヒント / よくあるミス

- **maj9とm9を別の公式で覚える。** 9度をのせる動作は同じ。骨組み（3度・7度）だけマイナーに変わるだけ。
- **9度が死ぬ。** マイナー骨組みはフレットが密集し、指が互いを覆いがち。指先を立てて各弦をクリアに。
- **b3と9を混同。** b3（E♭、4弦）と9（D、2弦）は別の弦、別の音。
- **暗いからと強く弾く。** m9は柔らかく開いた音。軽く鳴らしてこそ色が生きます。
