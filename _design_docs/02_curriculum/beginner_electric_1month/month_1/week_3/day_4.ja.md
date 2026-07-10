---
title: "3週目完成 — パームミュートのパワーコード・リフ"
dayKey: "m1.w3.d4"
estMinutes: 30
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — レンガで積み上げた最初のロック・リフ

## ① 理論・説明

いよいよ3週目の最終日です。今週つくった3つ — <mark>パワーコードのフォーム</mark>、フォーム移動、パームミュートのダウンピッキング — を、1つのリフにぜんぶ詰め込みます。今日弾くリフは、パームミュートで低くうなったあと、パワーコードを階段のように押し上げて開いてはじけるオリジナルです。うまく弾くのが目標ではなく、最初から最後まで揺れずに弾ききるのが目標です。

リフは4小節です。1・3小節は開放E5を<mark>パームミュートでチャクチャク</mark>刻み、2・4小節は5弦ルートのフォームを押し上げてC5→D5→E5と階段を上ります。低く沈んでいた音がクライミングで手刀を離して開いていく対比、それがこのリフの表情です。手刀を離すタイミングは、6弦から5弦のフォームへ渡るまさにその瞬間 — 前もって練習しておくと、リフがずっと爽快にはじけます。最後の緑のE5（7フレット）に着地してぴたっと止まります。

構造がわかれば難しくありません — <mark>繰り返す根 + 階段を上って着地</mark>、ロック・リフの基本文法です。階段は昨日まで身につけたC5↔D5の移動がそのまま使われます。この感覚は〈You Really Got Me〉や〈Iron Man〉のような曲にそのまま生きています。4小節がまるごと手に余るなら、パームミュートの小節（1・3）とクライミングの小節（2・4）を別々に覚えてから、つなげればOKです。今日このリフを目標BPMで弾ききれば、3週目が手に完全に刻まれます。

## ② ビジュアル資料

まずいちばん厄介な場所、最終小節の<mark>クライミング</mark>（C5→D5→E5）だけ取り出して練習します。この階段さえなめらかなら、リフ全体が楽になります。

```json
{
  "id": "m1.w3.d4.climb_prep",
  "type": "tab",
  "meta": { "title": "Climb prep — C5 · D5 · E5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 7, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 4, "fret": 9, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 80。5弦のフォームを2フレットずつ押し上げ、緑のE5（7フレット）に正確に着地します。フォームを保ったまままるごと。

では今週の完成物です。開放E5はパームミュートで低く沈め、クライミングは手刀を離して開いて鳴らして。

```json
{
  "id": "m1.w3.d4.powerchord_riff",
  "type": "tab",
  "meta": { "title": "Palm-muted power chord riff (E5 · C5–D5–E5 climb)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 4, "fret": 9, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ **BPM 90、すべてダウンピッキングで。** 開放E5は手刀でパームミュートして低くうならせ（M1・M3）、クライミング（C5→D5→E5）は手刀を離して開いて鳴らして。最後の緑のE5（7フレット）に着地して締めます。4回繰り返し。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
BPM 70で昨日のパームミュートのチャクチャク（開放E5）を6弦で軽く繰り返し、右手の手刀の位置を呼び戻します。

**7〜17分・今日の技術**
例1（クライミング・プレップ）をBPM 80で繰り返します。5弦のフォームを押し上げて<mark>階段を上り</mark>、緑のE5（7フレット）に正確に着地することに集中します。

**17〜27分・応用（今週の完成物）**
ピン留めのリフをBPM 80で4回繰り返す → 揺れなくできたら目標BPM 90へ1段上げます。開放E5はパームミュートで低く、クライミングは開いて — この対比を忘れずに。

**27〜30分・チェック**
届いたBPMを書き留め、30秒録音してリフが最初から最後まで途切れないか聴いてみましょう。

**今日の完了基準：** パームミュートのパワーコード・リフを最初から最後まで揺れずに、目標BPM 90で弾ききれる。（3週目完成！）

## ④ ヒント / よくあるミス

- **クライミングまでパームミュート。** 階段（C5→D5→E5）までミュートすると、開く対比が消えます。その区間だけ手刀を離して。
- **階段で拍が遅れる。** 2・4小節で5弦へ移るときにもたつくと拍が遅れます。フォームをくっつけたまままるごとずらして。
- **速さから。** 90は目標にすぎません。80できれいなほうが、90で汚いよりずっといいです。
- **リフが長く感じる。** 4小節が手に余るなら2小節ずつ覚えます。かけらで覚えて、つなげればOK。
