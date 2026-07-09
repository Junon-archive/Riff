---
title: "ゴースト・グルーヴ完成 — ギターがドラムのように聞こえる"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 実音はスネア、ゴーストはハイハット

## ① 理論・説明

今週のゴールです。今日は実音とゴーストを交互に配置したグルーヴをバッキングトラックの上で完成させ、**<mark>ギター1台がドラムのように聞こえる</mark>**ようにします。

想像してみてください。均一に敷かれるゴースト（チッ）は<mark>ドラムのハイハット</mark>、時々はっきり跳ねる実音（タ）は<mark>スネア</mark>です。この2つが噛み合うと、コードを派手に変えなくても、ギター1本でリズムセクションを組んだように聞こえます。実際にバッキングのドラムと重ねると、自分の「タ」がスネアと、「チッ」がハイハットと重なる瞬間、鳥肌もののグルーヴが生まれます。

今週学んだことを整理すると：ゴーストノートは<mark>力を抜いた「チャッ」の音</mark>（D1）。そのゴーストを均一に敷けば<mark>ハイハットの絨毯</mark>になる（D2）。その上に実音を節約して置けば<mark>グルーヴ</mark>になる（D3）。今日はこの3つを一度に回してバッキングと合わせます。

まだコードは小さなスタブ1つだけですが、もう「ファンクらしく」聞こえ始めるはずです。来週はここに**<mark>アクセント</mark>**を足し、特定の「タ」をより強く刺してグルーヴをさらに生かします。今日バッキングの上で初めて「自分のギターがドラムみたいだ」と感じたら、今週は大成功です。わずか2週間で右手モーターに左手のドラムまで乗せたあなた、本当に速いペースで来ています。まだコードは1つだけですが、もう「ファンクに聞こえる」演奏をしているんです。

## ② ビジュアル資料

<mark>実音（スネア）とゴースト（ハイハット）</mark>を交互に配置した完成形グルーヴです。下のスタブの位置で、圧力オン・オフで2つのグルーヴを弾きます。

**高音Eスタブ（復習）。** 同じ2・3弦の位置。押さえれば実音（タ＝スネア）、抜けばゴースト（チッ＝ハイハット）。

```json
{
  "id": "m1.w2.d3.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — ゴースト・グルーヴA（2小節）。** 拍の頭と裏拍に「タ」、残りは「チッ」。もっとも基本的なファンク・グルーヴの骨格です。

```json
{
  "id": "m1.w2.d4.groove_a",
  "type": "tab",
  "meta": { "title": "Ghost-note groove A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** バッキングトラックの上で4回以上。自分の「タ」がスネアと重なるか感じて。

**例2 — ゴースト・グルーヴB（2小節）。** 実音をもっと密に混ぜたドラムのようなバージョン。「タ」と「チッ」が速く交互に。

```json
{
  "id": "m1.w2.d4.groove_b",
  "type": "tab",
  "meta": { "title": "Ghost-note groove B — drum-like (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** 慣れたら「タ」の位置を変えて自分のバージョンに。ギターがドラムのように聞こえるか確認。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。D1〜D3の<mark>ゴースト・実音の対比</mark>を軽く復習。圧力オン・オフが手になじんだか点検。

**10〜20分 · 頭のトレーニング（今日のターゲット＝ドラムとして聴く）**
「タ」はスネア、「チッ」はハイハットと想像しながら口でパターンを歌います。実音が<mark>スネアの場所（普通は2・4拍）</mark>に来るか描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 70）**
**例1**（グルーヴA）をバッキングの上で4回 → **例2**（グルーヴB）へ。自分の<mark>「タ」がスネアと、「チッ」がハイハットと噛み合うか</mark>が肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
バッキングと一緒に2小節を2周録音してチェック：<mark>ゴーストは「チャッ」ときれいか</mark>／<mark>実音はスネアと噛み合うか</mark>／<mark>ギターがドラムのように聞こえるか</mark>。

**今日の完了基準：** 実音とゴーストを交互に配置したグルーヴを、バッキングトラックの上でギターがドラムのように聞こえるよう保てる。（2週目完成！）

## ④ ヒント / よくあるミス

- **実音がスネアからずれる。** 「タ」がバッキングのスネア（普通は2・4拍）とずれるとグルーヴが揺れます。スネアに「タ」を重ねて。
- **ゴーストが埋もれる。** 背景の「チッ」が弱いと対比が死にます。ハイハットのようにはっきり保って。
- **詰め込みすぎ。** ドラムのように聞こえるには余白が必要。全部埋めず、息をする場所を。
- **バッキングなしの練習だけ。** ドラムと重ねてこそグルーヴが生きます。必ずトラックの上で合わせて。
