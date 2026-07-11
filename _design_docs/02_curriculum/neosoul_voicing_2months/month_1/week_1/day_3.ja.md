---
title: "二つのグリップをつなぐ — Dm9 ↔ G13 の切り替え"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — Dm9 ↔ G13、なめらかな切り替え

## ① 理論・説明

1週目の折り返しを過ぎました。いよいよ二つのグリップを一つの流れにつなぎます。<mark>ネオソウル・ヴァンプの本当の味は、コードが変わるその「継ぎ目」から生まれます。</mark>**Dm9 → G13**、二つのグリップをぶつ切りに押さえるとヴァンプはぎこちなくなりますが、なめらかにつなぐと水が流れるように広がります。今日は手の形を変えるその短い瞬間を**なめらかに**磨く日です。昨日まで二つのコードを別々に覚えたので、今日はその間に橋をかけるだけです。

二つのグリップの間で**何が動いて何がそのままか**を先に知ると切り替えが楽になります。<mark>2弦5フレット(E)は両方のコードで押さえます — 小指はその場所に固定しておいてください。</mark>残りの指だけを移せばいいのです。ルートは5弦(**Dm9**)から6弦(**G13**)へ下がり、4弦は3フレットのまま、3弦は5フレットから4フレットへ半コマ引き寄せます。

今日は速さを上げないでください。<mark>小指のアンカーを軸に、残り三本の指が一つの塊として動く感覚</mark>だけ身につければ大丈夫です。ではまず **Dm9** のグリップをもう一度確認しましょう。

```json
{
  "id": "m1.w1.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — x5355x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Dm9はルートが5弦です。** 2弦5フレット（9）に乗せた小指を覚えておいてください。

## ② ビジュアル資料

続いて **G13** のグリップです。下の二つの図を並べて見ると、**2弦5フレット**だけを除いて指がどう移るか一目で分かります。<mark>ルートが5弦から6弦へ、斜めに滑ります。</mark>

```json
{
  "id": "m1.w1.d3.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 3x345x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13はルートが6弦です。** 2弦5フレット（13）の小指はそのままです。

では二つのコードを交互に押さえてみましょう。一小節に一コードずつ、**小指は離さず**残りだけを移します。<mark>コードが変わる直前に、次の手の形を先に思い浮かべます。</mark>

```json
{
  "id": "m1.w1.d3.change_drill",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 change drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 65。** Dm9 → G13を一小節ずつ交互に。小指のアンカーを軸に残りだけをすっと移します。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。二つのグリップをそれぞれ一回ずつ押さえて手をほぐします。<mark>小指（2弦5フレット）が二つのコードで離れないか</mark>を確認します。

**10〜20分 · 頭のトレーニング（切り替えの動線をゆっくり）**
コードを変える前に**何が動くか**を声に出して言います。「ルート5弦→6弦、3弦5フレット→4フレット、小指そのまま。」

**20〜40分 · 実践切り替え（BPM 65）**
今度は一小節に二回ずつ鳴らして切り替えを細かく練習します。<mark>変わるとき音が途切れないか</mark>だけを見ます。

```json
{
  "id": "m1.w1.d3.change_half",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 twice-per-bar drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 65。** 一小節に同じコードを二回ずつ。二打目で手が先に次のコードへ行く準備をします。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音してチェックします。<mark>Dm9とG13の間が途切れずつながっているか</mark>。

**今日の完了基準：** Dm9 ↔ G13の二つのグリップを、小指のアンカーを保ったまま途切れず替えられる。

## ④ ヒント / よくあるミス

**切り替え**でよく出るミスだけを挙げます。

```json
{
  "id": "m1.w1.d3.anchor",
  "type": "fretboard_diagram",
  "meta": { "title": "Shared note anchor — string 2 fret 5 (E)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 4, "label": "E", "role": "color" }
  ]}
}
```
▶ **この一音（2弦5フレットE）が切り替えの軸です。** 二つのコードの間、小指を離さないでください。

- **替えるとき音が途切れる。** 小指を離さなければ空白がぐっと縮まります。
- **手全体がぐらつく。** アンカーを軸に、残り三本の指だけを一つの塊として移します。
- **3弦がずれる。** 5フレット↔4フレットの半コマ移動を指先だけで細かく行います。
- **タイミングがもたつく。** 次のコードは一拍早く頭の中で押さえておきます。
