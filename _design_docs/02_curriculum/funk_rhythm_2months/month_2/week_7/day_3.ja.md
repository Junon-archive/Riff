---
title: "シャッフル — 定拍を揺らしてスイングへ"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 格子を少し揺らすとリズムが弾む

## ① 理論・説明

これまで私たちは**<mark>定拍（ストレート）</mark>**で弾いてきました。音を16ビットの格子にきっちり合わせて正確に置いた。今日はその格子を少し揺らす**<mark>シャッフル（スイング）</mark>**を味見します。

シャッフルは8分音符の一組を「均等に」ではなく**<mark>「長く-短く」</mark>**で転がすこと。口で「ダー・ドゥ、ダー・ドゥ」と転がしてみて — 前は長く、後ろは短く。こうすると硬く機械的だったリズムが、弾んで揺れるグルーヴになります。ブルース・ソウル・ファンクのあの<mark>「粘って揺れる」感じ</mark>は、まさにシャッフルから生まれます。定拍が正方形の格子なら、シャッフルはその格子が少し傾いて波打つ感じです。

1つ知っておくこと。シャッフルは楽譜に正確に書きにくい（正確には三連符の感じだから）。だから楽譜はそのまま定拍にして、タイトルと説明に**<mark>「スイングして弾く（long-short）」</mark>**と示すのが慣例です。今日の例も同じ — 楽譜は8分音符ですが、実際は「ダー・ドゥ ダー・ドゥ」で転がして弾いてください。

```json
{
  "id": "m2.w7.d3.straight",
  "type": "tab",
  "meta": { "title": "Straight 8ths (play even)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" }
    ]}
  ]}
}
```

```json
{
  "id": "m2.w7.d3.shuffle",
  "type": "tab",
  "meta": { "title": "16th shuffle feel — SWING the 8ths (long-short)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]}
  ]}
}
```

肝心なのは目ではなく**<mark>耳と体</mark>**です。口で「ダー・ドゥ」を転がし続けながら、その揺れを手に移すんです。定拍とシャッフルを交互に弾くと違いがはっきり感じられます。最初はぎこちなく、すぐ定拍に戻りますが、当然です。今日は<mark>「揺れる」という感じ</mark>自体を体に刻めば十分です。

## ② ビジュアル資料

定拍（ストレート）とシャッフル（スイング）を比較します。楽譜は8分音符ですが、シャッフルは<mark>「長く-短く（ダー・ドゥ）」で転がして</mark>弾いて。

**例1 — ストレート8分音符（1小節）。** 8分音符を「均等に」。硬く正確な感じ。

```json
{
  "id": "m2.w7.d3.straight",
  "type": "tab",
  "meta": { "title": "Straight 8ths (play even)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" }
    ]}
  ]}
}
```

▶ **BPM 74。** 格子にきっちり合わせて4回。均一な「ダ・ダ・ダ・ダ」を覚えて。

**例2 — シャッフル感（2小節）。** 同じ8分音符を「長く-短く」で転がす（スイング）。弾む揺れが出ます。

```json
{
  "id": "m2.w7.d3.shuffle",
  "type": "tab",
  "meta": { "title": "16th shuffle feel — SWING the 8ths (long-short)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]}
  ]}
}
```

▶ **BPM 74。** 楽譜は定拍ですが「ダー・ドゥ ダー・ドゥ」でスイングして4回。定拍と交互に弾いて違いを感じて。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。口で「ダー・ドゥ ダー・ドゥ」を転がして<mark>手に移すウォームアップ</mark>。定拍と交互に。

**10〜20分 · 頭のトレーニング（今日のターゲット＝スイング感）**
定拍「ダ・ダ・ダ・ダ」とシャッフル「ダー・ドゥ ダー・ドゥ」を交互に声に出して、<mark>体に揺れを刻みます</mark>。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 74）**
**例1**（定拍）をBPM 74で4回 → **例2**（シャッフル）へ。同じ音を<mark>「長く-短く」で転がす</mark>のが核心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：<mark>シャッフルは「長く-短く」で揺れるか</mark>／定拍と違うか／<mark>途中で定拍に戻らなかったか</mark>。

**今日の完了基準：** 定拍とシャッフルの揺れの違いを体で感じ、8分音符を「長く-短く」で転がしてシャッフル感を出せる。

## ④ ヒント / よくあるミス

- **すぐ定拍に戻る。** シャッフルがぎこちなく格子に戻りやすい。口で「ダー・ドゥ」を転がし続けて。
- **揺らしすぎ。** シャッフルが過ぎるとリズムが崩れます。少し長く-短くで十分。
- **目だけで数える。** シャッフルは楽譜ではなく体。耳と口で転がしてこそ出ます。
- **速さから。** 揺れが定着する前に速いと定拍に逃げます。ゆっくり、スイングを。
