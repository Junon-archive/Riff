---
title: "パームミュート＋ダウンピッキング — チャクチャクのグルーヴ"
dayKey: "m1.w3.d3"
estMinutes: 30
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — チャクチャクのグルーヴ

## ① 理論・説明

いよいよパワーコードにリズムを着せます。今日、右手が覚えるのは<mark>パームミュート</mark> — 右手の手刀をブリッジにそっと乗せ、音を半分ふさぐ技術です。開いて鳴っていたパワーコードが、急に低く「チャクチャク」とうなる音に変わります。これがロック・メタルのリフの、心臓の鼓動みたいなグルーヴです。手刀ひとつで音の表情がまるごと変わるのに驚くはずです。右手は腕ではなく手首で軽く振るように動かします — そうすれば長く刻んでも疲れません。

パームミュートのリフの相棒は<mark>ダウンピッキング</mark>です。上から下だけに刻むと、音が重く均一になります。手刀をブリッジのすぐ手前に乗せる位置が肝心で、深く覆いすぎると音程が消え、浅すぎるとふさがりません。「音程は残り、後ろが短く切れる」その一点を手が覚えるまで、あちこち転がして探します。ブリッジに乗せた手刀は弦から離さずくっつけたまま、右手のピッキングだけを繰り返すと、位置がすぐ体に馴染みます。

今日の目標は速さではなく<mark>拍にぴたっと張りつく均一さ</mark>です。8つの「チャク」がすべて同じ強さ・同じ長さで出れば、それが完成です。強弱をつけたい欲はいったん置いておいて。均一さが先、表情はそのあと。このパームミュートのチャクチャクさえ手につけば、〈Iron Man〉の重いイントロがそのままあなたの手から出ます。

## ② ビジュアル資料

まず開放E5をパームミュートだけで刻んでみます。8回の<mark>「チャク」</mark>が、すべて同じ強さ・長さで出るように。

```json
{
  "id": "m1.w3.d3.e5_pm_riff",
  "type": "tab",
  "meta": { "title": "Palm-muted E5 chug", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ BPM 90、すべてダウンピッキング。手刀をブリッジに乗せ「音程は残り、後ろが短く切れる」音を探して。8つのチャクを均一に。

つぎはグルーヴをつくります。パームミュートでチャクチャク刻んだあと、最後の1コードだけ手刀を離して開いて鳴らします（緑の強調）。

```json
{
  "id": "m1.w3.d3.chug_accent",
  "type": "tab",
  "meta": { "title": "E5 chug into an open ring", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
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
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 90、ダウンピッキング。前半はパームミュートで低くチャクチャク、最後の緑のE5だけ手刀を離して開いて鳴らして — その一発がグルーヴの句点です。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
BPM 70で昨日のG5↔A5往復を軽く繰り返して左手を温め、右手の手刀をブリッジ手前に乗せる位置から決めます。

**7〜17分・今日の技術**
例1（パームミュートのE5チャクチャク）をゆっくり。手刀の深さを細かく調整して<mark>音程は残り、後ろが短く切れる</mark>音を探します。8つのチャクが均一か耳で確認します。

**17〜27分・応用**
例2（チャクチャク＋開いたE5）をBPM 80で4回繰り返す → 均一にできたら90へ上げます。最後の緑のE5だけ手刀を離して開いて鳴らすのを忘れずに。

**27〜30分・チェック**
届いたBPMを書き留め、30秒録音してチャクがすべて均一な強さ・長さか聴いてみましょう。

**今日の完了基準：** パームミュートのパワーコード・リフ（定拍の8分音符）を、目標BPM 90で強さ・長さそろえてチャクチャク弾ける。

## ④ ヒント / よくあるミス

- **手刀が深すぎ。** 深く覆うと音程が消え「ドスッ」という音だけに。音程が少し残る位置まで手刀を後ろへ引いて。
- **アップを混ぜる。** パームミュートのリフはダウンピッキングが基本。上から下だけで刻むと音が重く均一に。
- **強弱を欲張る。** まずは8つのチャクを同じに出すのが先。アクセントは均一さが決まってから。
- **手首に力み。** 手刀は乗せるだけ、右手は手首で軽く振ります。腕に力が入るとすぐこわばります。
