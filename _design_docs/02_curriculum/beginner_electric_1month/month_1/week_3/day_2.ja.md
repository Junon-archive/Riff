---
title: "フォーム移動 — レンガを横にずらす"
dayKey: "m1.w3.d2"
estMinutes: 30
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — レンガを横にずらす

## ① 理論・説明

昨日はレンガを一枚つくりましたね。今日の魔法はこれ — そのレンガを<mark>指板の上で横にずらすだけ</mark>で、コードがまるごと変わります。指の形はまったく変えず、フォームごとスライドさせるのです。これこそパワーコードがロックで愛される理由。フォームを1つ覚えれば、コードが12個タダで付いてきます。1週目・2週目は音を1つずつ探し直しましたが、パワーコードからはフォームの位置だけ覚えればOK — ずっと経済的です。

今日からは開放弦を離れて<mark>動くフォーム</mark>を使います。6弦ルートのフォームを3フレットに置けばG5、5フレットに置けばA5。5弦ルートのフォームを3フレットに置けばC5、5フレットならD5です。ルートが乗ったフレットの音名が、そのままコード名になります。だからフレットの位置さえわかれば、コード名はひとりでに付いてきます。

移動のコツは<mark>手の形を保ったまままるごと押すこと</mark>です。指を1本ずつ離して押さえ直さず、2本の指をひとかたまりにくっつけたままスライドしてください。移す一瞬だけ力を少しゆるめ、弦からわずかに浮かせるとずっとなめらかです。移したあと、2本の指の間隔が広がっていないか、5度がまだはっきり鳴るか一度ずつ確認すれば完璧です。今日のG5↔A5、C5↔D5の2往復がきれいになれば、ロックの曲の半分はこの2往復の上で回ります。

## ② ビジュアル資料

まず動くフォームを2つ見ます。6弦ルートの<mark>G5</mark>と5弦ルートのC5 — 昨日のフォームの開放が、フレットに変わっただけです。

```json
{
  "id": "m1.w3.d2.g5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "G5 power chord (movable 6th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "G" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ 6弦3フレットのルート（青R）と5弦5フレットの5度（青5）。このフォームを5フレットへずらせば、そのままA5です。

```json
{
  "id": "m1.w3.d2.c5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "C5 power chord (movable 5th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "C" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ ルートが5弦3フレットに下りたC5。6弦はXなので手刀でしっかり消します。このフォームを5フレットへずらせばD5。

では6弦フォームを往復させます。G5からA5へずらし、また戻ります。

```json
{
  "id": "m1.w3.d2.g5_a5_move",
  "type": "tab",
  "meta": { "title": "G5 to A5 — slide the 6th-string shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70。1コードに2拍ずつ。移す瞬間、手の形をそのまま保ったまままるごとずらして。

今度は5弦フォームでC5↔D5往復。明日のリフのクライミングが、まさにこの移動です。

```json
{
  "id": "m1.w3.d2.c5_d5_move",
  "type": "tab",
  "meta": { "title": "C5 to D5 — slide the 5th-string shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "C", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70。6弦は手刀で消したまま。2つのフレットの間を滑るように行き来し、2音だけはっきり。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
BPM 60で昨日のE5・A5フォームをもう一度握っては離し、2音だけ鳴らす感覚を呼び戻します。

**7〜17分・今日の技術**
G5・C5フォームをそれぞれ握り、となりのフレットへ<mark>まるごとずらして</mark>A5・D5をつくります。移した先でも2音がはっきりか確認します。

**17〜27分・応用**
例（G5↔A5・C5↔D5往復）をBPM 70でそれぞれ4回繰り返す → もたつかずできたら1段上げます。コードが変わる瞬間に拍が遅れないように。

**27〜30分・チェック**
届いたBPMを書き留め、よければ30秒録音して移動時に雑音が入らないか聴いてみましょう。

**今日の完了基準：** 2つのパワーコード（G5↔A5またはC5↔D5）を、フォームを保ったままずらして雑音なく往復できる。

## ④ ヒント / よくあるミス

- **押さえ直し。** 移すとき指を離して1本ずつ押さえ直すと遅れます。2本の指をくっつけたまままるごとずらして。
- **移動中に音を残す。** 移す一瞬だけ力を少しゆるめ、弦から浮かせると、こすれる雑音が減ります。
- **コード名の混同。** ルートが乗ったフレット＝コード名。6弦3フレットならG、5フレットならA。
- **6弦の油断。** 5弦ルートのフォーム（C5・D5）では6弦が鳴りやすいです。手刀でずっと覆っておいて。
