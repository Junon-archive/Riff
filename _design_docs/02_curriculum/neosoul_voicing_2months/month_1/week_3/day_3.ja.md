---
title: "ヴァンプにアプローチを挿入 — Dm9 → Ab13 → G13"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — ヴァンプにスライド・アプローチを入れる

## ① 理論・説明

今週学んだ **スライド・アプローチ** をいよいよヴァンプに入れます。シグネチャー進行 **Dm9 → G13** で、G13にそのまま到着するのではなく、<mark>半音上のAb13からすべり込んで</mark>色を加えます。今日は二小節のヴァンプの中で、アプローチが自然に流れるようにします。

流れはこうです。**1小節** はホームコード **Dm9** を全音符でゆったり鳴らし、**2小節** の前2拍で **Ab13** を押さえてから、後2拍で **G13** へスライドします。<mark>1小節の安定と2小節のすべりが対比し、ヴァンプに生気が回ります。</mark>アプローチはいつも目標コードの **すぐ前** に置かれます。

まずホームコード **Dm9** をもう一度手に乗せます。5弦 **5フレット** がルート、2弦の **9度** がふわりとした色を出します。<mark>この楽な場所から出発してこそ、次のすべりがより際立ちます。</mark>

```json
{
  "id": "m1.w3.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — home chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **ホームコードDm9。** 5弦5フレットのルート、2弦の9度がやわらかな色を出します。

## ② ビジュアル資料

2小節へ移る前に、すべり込む **アプローチコードAb13** をもう一度確認します。<mark>このグリップを押さえて半音下へ押せば、すぐにG13です。</mark>

```json
{
  "id": "m1.w3.d3.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — the approach chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Ab13グリップ。** 2小節の前2拍で押さえてから、すぐ半音下へ押す場所です。

さあ二小節を一つにつなぎます。1小節 **Dm9**、2小節 **Ab13 → G13** スライドが一つの流れで流れる **完成したアプローチ・ヴァンプ** です。<mark>家でゆったり休んでから、半音上からすべって戻る往復が感じられます。</mark>

```json
{
  "id": "m1.w3.d3.approach_vamp",
  "type": "tab",
  "meta": { "title": "Dm9 - Ab13 to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** 1小節Dm9、2小節でAb13を押さえ、半音下のG13へすべらせます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 65。** Dm9とAb13 → G13スライドを交互に押さえて手を温めます。<mark>ホームコードとアプローチを行き来する手の移動を先にほぐします。</mark>

**10〜20分 · 頭のトレーニング（場所の確認）**
音を出さず **Dm9 → Ab13 → G13** の順を左手だけで描きます。5弦のルートから6弦のルートへ移る動きを目で確認します。

**20〜40分 · 実践アプローチ・ヴァンプ（BPM 75）**
下の四小節を **途切れず** 繰り返します。<mark>2小節ごとにスライド・アプローチがはっきり聞こえるか</mark>だけを見ます。

```json
{
  "id": "m1.w3.d3.approach_vamp_loop",
  "type": "tab",
  "meta": { "title": "Approach vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** アプローチ・ヴァンプを二周まわします。2小節ごとにすべる着地を逃さないように。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。のっぺりG13へジャンプした先週と、今日すべり込んだヴァンプを比べます。

**今日の完了基準：** **Dm9 → Ab13 → G13** ヴァンプをBPM 75で途切れず繰り返し、2小節のスライド・アプローチをなめらかにつなげられる。

## ④ ヒント / よくあるミス

**アプローチ・ヴァンプ** を転がすときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w3.d3.transition_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Transition zone — Dm9 to Ab-G", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "label": "Dm9 R", "role": "root" },
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 3, "fret": 5, "label": "Ab 3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "G 3", "role": "chord_tone" }
  ]}
}
```
▶ 5弦5フレット（Dm9）から6弦4→3フレット（Ab→G）へ移る転換点です。

- **1小節から2小節へ遅れる。** Dm9の4拍目にあらかじめ手を6弦側へ移しておけば遅れません。
- **アプローチがのっぺりする。** Ab13を長く引きずると、アプローチでなく別のコードに聞こえます。前2拍だけ短く押さえます。
- **スライドが切れる。** 2小節で指を離さず半音下へ押します。
- **速くすると汚くなる。** BPMを65に下げてまず移動をきれいにします。
