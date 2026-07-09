---
title: "9度統合 — 色は上にそのまま、骨組みだけ循環"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — Maj9 → 9 → m9、9度は常に一番上

## ① 理論・説明

今週のゴール。Maj9·9·m9を1つのルート上で循環します。驚きは、**<mark>9度（D）が2弦・一番上にずっとそのまま</mark>**だということ。変わるのは下の骨組みだけ：

- **<mark>3弦＝7度スイッチ</mark>。** 4フレット（7、Maj9）↔ 3フレット（b7、9·m9）。
- **<mark>4弦＝3度スイッチ</mark>。** 2フレット（3、Maj9·9）↔ 1フレット（b3、m9）。

まとめると：
- **Cmaj9** ＝ 3弦4（7）· 4弦2（3）
- **C9** ＝ 3弦3（b7）· 4弦2（3）
- **Cm9** ＝ 3弦3（b7）· 4弦1（b3）

```json
{
  "id": "m2.w6.d4.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

```json
{
  "id": "m2.w6.d4.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m2.w6.d4.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
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

<mark>色（9度）は上に固定、骨組み（3度・7度）だけ指でスイッチ</mark> — 1か月目に学んだ2つのスイッチが9コードでも生きています。ここに5週目のトップノート感覚を足せば、来週（7週目）はこの上の音を**メロディ**でつなぎます。たった1週間で、maj9・9・m9の3つを指2本のスイッチで行き来できるようになったんです。<mark>シティポップの伴奏がなぜあんなに洗練されて聞こえたのか — その秘密はもう、あなたの手の中にあります</mark>。

## ② ビジュアル

**Cmaj9** — <mark>3弦7（4フレット）、4弦3（2フレット）、2弦9（黄色）</mark>。

```json
{
  "id": "m2.w6.d4.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**C9** — <mark>3弦だけb7（3フレット）へ</mark>。9度は上にそのまま。

```json
{
  "id": "m2.w6.d4.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Cm9** — <mark>4弦もb3（1フレット）へ</mark>。9度は依然として上に。

```json
{
  "id": "m2.w6.d4.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
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

**例1 — 固定した9度の下で7度スイッチ。** 3弦で7（4）↔ b7（3）を行き来し、2弦の9度（D）はそのまま。色は上に固定、骨組みだけ動くのを手で。

```json
{
  "id": "m2.w6.d4.switch_over_9",
  "type": "tab",
  "meta": { "title": "7-switch under constant 9 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 74。** 3弦7 → 9（色）→ b7 → 9（色）。9度は同じ場所にずっといて、下の7度だけ半音動きます。4回反復。

**例2 — Maj9 → 9 → m9 循環コンピング。** 9度は常に上、3弦・4弦だけスイッチ。

```json
{
  "id": "m2.w6.d4.nine_cycle_comp",
  "type": "tab",
  "meta": { "title": "Maj9-9-m9 cycle comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 80、4回反復。** Cmaj9 → C9 → Cm9。9度（黄色）は上に固定、3弦・4弦の骨組みだけ変わります。3コードとも華やかなのに性格が違うのを耳で。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Cmaj9 → C9 → Cm9 を4拍ずつ順番に。<mark>ルート・9度（2弦）は固定、3弦・4弦だけ移動</mark>。9度がずっときれいに鳴るかチェック。

**10〜20分 · 脳トレ（今日のターゲット＝固定9度＋骨組みスイッチ）**
<mark>「9度はそのまま、7度は4↔3、3度は2↔1」</mark>。「m9！」で3弦・4弦を即つかみつつ9度を保持。**例1**で確認。

**20〜40分 · 実戦伴奏（例2循環 / 76〜86 BPM）**
**例2の3つの9コード循環をBPM 80で4回反復。** 続けてルートを移して別キーでも。<mark>ソウル/シティポップのバッキングに重ねて華やかな色の進行を楽しんで</mark>。

**40〜50分 · 録音・セルフフィードバック＋今週の振り返り（推奨）**
3つの9コード循環を30秒録音。チェック：9度がずっと生きているか／骨組みスイッチで別の弦が死なないか。そして<mark>「9度1つで音がどれだけ変わったか」</mark>をまとめて。

**今日の完了基準：** 1つのルート上でMaj9 → 9 → m9を、9度を保持したまま3弦・4弦だけで循環する。（6週目完成！）

## ④ ヒント / よくあるミス

- **9度を毎回探し直す。** 9度は動きません。骨組み（3度・7度）だけスイッチ。9度の指は付けたまま。
- **スイッチ時に9度が死ぬ。** 下の指を動かすうちに上の9度が浮くと色が消えます。9度は押さえたまま。
- **3つの9コードを別々に覚える。** 2つのスイッチの組み合わせ。1か月目の原理そのまま。
- **9度ばかり強調して骨組みを疎かに。** 3度・7度が性格を決めます。骨組みがぼやけるとmaj/dom/mの区別が消えます。
