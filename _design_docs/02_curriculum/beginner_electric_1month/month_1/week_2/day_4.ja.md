---
title: "2週目完成 — Eマイナー・ペンタトニックのリフ"
dayKey: "m1.w2.d4"
estMinutes: 30
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 両手で完成させる最初のリフ

## ① 理論・説明

ついに2週目の最終日です。今週つくった3つ — <mark>両手のシンク</mark>、弦またぎ、パームミュートのチャグ — を1つのリフに全部詰め込みます。**コードはまだありません。**単音の一つひとつがメトロノームにぴったり乗り、パームミュートで低く敷かれれば、それが本物のリフです。今日は上手に弾くことではなく、**最初から最後まで揺れずに弾ききる**ことが目標です。

今日弾くリフは<mark>Eマイナー・ペンタトニック</mark>から取ったオリジナルです。繰り返す開放E（ルート）をパームミュートで低く敷きつつ、緑で強調された**4度（A、5フレット）**の一音だけミュートを外してひょいと飛び出させます。この一音が**リフの表情**です。最後の小節ではA→b3→Eとするりと降りて締めます。リフ全体は4小節、同じ形が少しずつ変奏されながら繰り返されるので、こわがらなくて大丈夫です。

構造がわかれば難しくありません — <mark>繰り返しのルート＋上行の跳躍からの着地</mark>、ペンタトニック・フレージングの基本文法です。2小節目では**5弦5フレット（b7）**へ少し渡って戻りますが、昨日まで身につけた**弦またぎ**がまさにここで使われます。このリフの感覚は〈Seven Nation Army〉・〈Come As You Are〉のような曲にそのまま生きています。今日、最初から最後まで揺れずに弾ききれば、2週目が手に完全に刻まれたということです。

## ② ビジュアル資料

まずはいちばん厄介な場所、2小節目の**5弦への渡り**だけを取り出して練習します。この<mark>弦またぎ</mark>さえなめらかになれば、リフ全体が楽になります。

```json
{
  "id": "m1.w2.d4.riff_prep_cross",
  "type": "tab",
  "meta": { "title": "Riff prep — crossing to the 5th string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "finger": 3, "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70.** 開放E（パームミュート）→ 5弦5フレット（b7）へ渡って → 開放Eへ着地。渡る瞬間もオルタネイトを保って。

さあ、今週の完成物です。繰り返す開放Eは**パームミュートで低く**敷き、<mark>緑の4度（A）</mark>の一音だけひょいと飛び出させてください。

```json
{
  "id": "m1.w2.d4.em_pentatonic_riff",
  "type": "tab",
  "meta": { "title": "E minor pentatonic riff", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 5, "duration": "eighth", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 5, "duration": "eighth", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 6, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80、オルタネイトで。** 繰り返す開放Eは**パームミュートで低く**うならせ、緑で強調された**4度（A、5フレット）**だけミュートを外してひょいと飛び出させて — この一音がリフの表情です。M4でA→b3→Eと降りて締め。4回繰り返し。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
BPM 60でパームミュート・チャグ（昨日の例）を6弦に軽く繰り返し、右手を温めます。まず側面の位置を取り直して。

**7〜17分・今日の技術**
例1（弦またぎプレップ）をBPM 70で繰り返します。5弦へ渡って**開放E**へ<mark>正確に着地する</mark>ことに集中します。

**17〜27分・応用（今週の完成物）**
ピン留めのリフをBPM 70で4回繰り返す → **揺れなく**なったら目標BPM 80へ1段上げます。4度（A）の一音だけミュートを外して生かすのを忘れずに。

**27〜30分・チェック**
届いたBPMを書き留め、30秒録音してリフが最初から最後まで途切れないか聴いてみましょう。

**今日の完了基準：** Eマイナー・ペンタトニックのリフを最初から最後まで揺れずに、目標BPM 80で弾ききれる。（2週目完成！）

## ④ ヒント / よくあるミス

- **4度までパームミュート。** 強調音（A、5フレット）までミュートするとリフの表情が消えます。その一音だけ側面を軽く離して。
- **弦またぎで遅れる。** 2小節目で5弦へ行くときためらうと拍が押します。オルタネイトを回し続けて。
- **速さが先。** 80は目標にすぎません。70でクリーンなほうが、80で汚いよりずっといいです。
- **手の固さの心配。** リフが長く感じたら2小節ずつに分けて身につけて。かけらで覚えてつなげばOK。
