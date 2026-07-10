---
title: "リズムに表情をつける — 休符とシンコペーション"
dayKey: "m1.w4.d1"
estMinutes: 30
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — リズムに表情をつける方法

## ① 理論・説明

先週はパワーコードのレンガを積みました。でも同じコードを<mark>きっちり4回</mark>刻むだけだと、どこか平板です。今日はそのリフに表情をつけます。コツはもっと弾くことではなく、むしろ<mark>ときどき休むこと</mark>です。**休符がつくる空白**が音に息を吹き込み、**拍を少し食い気味に弾く**と、リフが前へ跳び出す感じが出るんです。4週間前は開放弦ひとつ鳴らすのも大変だったのに、いまはリズムをデザインしています。

まず休符です。楽譜の休符は「弾くな」の合図ではなく、「**ここで息をしろ**」の合図です。音と音のあいだに空白があってこそ、次の一撃が強く聞こえます。右手は休む所で手刀か指を弦に軽くのせて、音をぴたっと切ります。**空白ひとつ**が、むしろ次の音をよりくっきり立たせてくれます。詰め込んだリフより、息をするリフのほうがずっとかっこよく聞こえます。

次はシンコペーションです。ふだんは拍のジャストで弾きますが、ときどき拍と拍のあいだ（アップビート）に前もって弾くと、リズムに<mark>前へ押し出す緊張感</mark>が生まれます。ここに**オクターブ**を少しのせると、同じリフも声が太くなります。今日はこの3つ — **休符、シンコペーション、オクターブ** — を一滴ずつ落として、昨日のリフを生き生きさせます。表情は音の数ではなく、音と沈黙の配置から生まれます。だから急がず、1マスずつ正確に守ってみましょう。

## ② ビジュアル資料

まず休符がつくる<mark>空白</mark>を感じてみましょう。E5を**2拍弾いて1拍休む**を繰り返します。

```json
{
  "id": "m1.w4.d1.rest_drill",
  "type": "tab",
  "meta": { "title": "Rest drill — breathe the E5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 80。2拍弾いて1拍休みます。休む所で手刀で弦を覆い、音をぴたっと切ります。

今度はオクターブです。ルートの上に**1オクターブ高い同じ音（8）**をのせると、リフの声が太くなります。

```json
{
  "id": "m1.w4.d1.octave_voicing",
  "type": "tab",
  "meta": { "title": "Octave voicing — G and A", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "8" } ] },
      { "string": 6, "fret": 5, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "8" } ] }
    ]}
  ]}
}
```

▶ BPM 80。ルートと1オクターブ上の音（8）を同時に。間の5弦は指で軽く覆ってミュートします。

では3つを1つのリフに詰めます。休符で息をつき、アップビートを食い気味に弾き、最後の緑のG5に着地します。

```json
{
  "id": "m1.w4.d1.rhythm_riff",
  "type": "tab",
  "meta": { "title": "Rhythm riff — rests and syncopation (E5 to G5)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 90。休符で息をつき、アップビートを食い気味に弾き、最後の緑のG5（3フレット）に着地します。4回繰り返し。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
BPM 70で先週のパワーコードのフォーム（E5・G5）を握って離し、2音がはっきり鳴るか手をほぐします。

**7〜17分・今日の技術**
休符ドリルとオクターブをとてもゆっくり繰り返します。<mark>休む所</mark>で音がきれいに切れるか、**オクターブの2音**が同時に鳴るか確認します。

**17〜27分・応用**
リズム・リフをBPM 80で4回繰り返す → **揺れなく**できたら目標BPM 90へ1段上げます。休符でしっかり休み、アップビートを少し食い気味に弾くことだけに集中します。

**27〜30分・チェック**
届いたBPMを書き留め、30秒録音して休符がはっきり聞こえるか、リフに表情が出たか聴いてみましょう。

**今日の完了基準：** 休符とシンコペーションを入れたパワーコード・リフを最初から最後まで揺れずに、目標BPM 90で弾ける。

## ④ ヒント / よくあるミス

- **休符を音で埋める。** 休むべき所まで鳴らすと空白が消えて平板になります。休む所で手で弦をしっかり覆って。
- **シンコペーションが拍の遅れに広がる。** アップビートを食い気味に弾くのはいいですが、次のダウンビートまで遅れると困ります。つま先をメトロノームに固定して。
- **オクターブの間の弦が鳴る。** ルートとオクターブの間の5弦が一緒に鳴ると汚くなります。押さえる指の腹で軽く覆ってミュート。
- **速さへの欲。** 90は目標にすぎません。80で休符がはっきりのほうが、90でつぶれるよりずっとかっこいいです。
