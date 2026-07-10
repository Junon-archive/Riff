---
title: "初めてのスラップグルーヴ — オクターブの下書き"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 初めてのスラップグルーヴ、オクターブの下書き

## ① 理論・解説

2週目の最終日です！ 昨日までにオクターブT-Pを覚え、そこにリズムをまとわせました。今日はそのかけらを一つにつなげて**初めてのスラップグルーヴ**を完成させます。名前は大げさですが、実は<mark>サム（ルート）-休み-ポップ（オクターブ）-休み</mark>が繰り返されるとても単純な**8分グルーヴ**です。

なぜ間に**休み（空いた場所）**を置くのでしょう？ 今は空けておきますが、**3週目にこの場所をゴースト（ミュート）で埋め**ます。その隙間を先に用意しておくわけです。だから今日は<mark>空いた休符を正確に守りながら</mark>サムとポップだけをはっきり刻むのが肝心です。手の形はそのまま**オクターブ**です。

テンポは**BPM 70**。ここ数日より少し速くなりましたが、急がず、<mark>ドン-パチッが均一でグルーヴが揺れない</mark>範囲だけで回します。まず4分音符の準備で手を温めてから、8分グルーヴへ進みます。二小節が滑らかに繰り返せれば、それが今週の完成物です。実は今日弾くこの八音が、今月ずっと磨いていく**最初の本物のグルーヴの骨格**です。派手ではなくても、ここに3週目のゴーストとこの先のバリエーションが乗れば、立派なファンクラインになります。だから今は、骨格をまっすぐ丈夫に立てることだけに集中します。

**5弦**なら音は4弦とまったく同じです — 低音Bを親指で覆っておくか、慣れたら同じグルーヴをB弦のルートへ移してもっと重く試してみます。さあ、今週積み上げたものを一つのグルーヴに完成させましょう。

## ② ビジュアル資料

今日は**今週の完成物**を作ります。オクターブの手の形を一度押さえ、4分音符の準備で手を温めてから、<mark>ピン固定のオクターブグルーヴ</mark>を回します。各例は**4弦・5弦の二つのバージョン**です。

まずは**オクターブの手の形**。下の青がサムで叩くルートE（4弦）、上の青がポップで弾くオクターブE（2弦2フレット）です。

```json
{
  "id": "m1.w2.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下がルートE（サム）、上がオクターブE（ポップ）。今週ずっと鍛えたあの手の形です。

```json
{
  "id": "m1.w2.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音Bは親指で覆っておきます。

**準備 — 4分音符オクターブT-P。** グルーヴの前にルート（サム）-オクターブ（ポップ）を1拍ずつゆっくり温めます。

```json
{
  "id": "m1.w2.d4.groove_prep_4",
  "type": "tab",
  "meta": { "title": "Octave groove prep (quarters) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 急がず、オクターブジャンプをもう一度きれいに合わせておきます。

```json
{
  "id": "m1.w2.d4.groove_prep_5",
  "type": "tab",
  "meta": { "title": "Octave groove prep (quarters) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。低音Bは親指で寝かせておきます。

**今週の完成物 — ラフなオクターブスラップグルーヴ。** いよいよ8分音符で。<mark>サム（ルート）-休み-ポップ（オクターブ）-休み</mark>を二小節繰り返します。空いた場所は3週目にゴーストで埋めます。

```json
{
  "id": "m1.w2.d4.octave_groove_rough_4",
  "type": "tab",
  "meta": { "title": "Octave slap groove (rough) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** サム（ルート）-休み-ポップ（オクターブ）-休みの繰り返し。空いた場所は3週目にゴーストで埋めます。

```json
{
  "id": "m1.w2.d4.octave_groove_rough_5",
  "type": "tab",
  "meta": { "title": "Octave slap groove (rough) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 音と位置は4弦と同じです。同じグルーヴをB弦のルートでもっと重く試してみてもよいです。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の二つのリズム（16分ダブル・裏拍）をBPM 60で軽く解して手を目覚めさせます。

**10〜20分 · 頭のトレーニング**
オクターブの手の形で準備例（4分音符）をとてもゆっくり。<mark>ジャンプがきれいで休符が正確か</mark>確認します。

**20〜40分 · 実践（今週の完成物）**
ピン固定のグルーヴを**BPM 70**で反復します。二小節が滑らかにつながるのが目標 — 揺れたら準備例に戻ります。4弦で覚えたあと5弦でも同じ感覚を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>ドン-パチッが均一で休符がはっきりしているか</mark>を聴いてみます。今週到達したBPMも記録しましょう。

**今日の完了基準：** ラフなオクターブスラップグルーヴ（サムルート＋ポップオクターブ、8分）をBPM 70で休符まで守って二小節滑らかに、4弦・5弦のどちらでも弾ける。（2週目完成！）

## ④ ヒント・よくあるミス

- **休みが我慢できない。** 空いた場所をつい音で埋めると3週目のゴーストが入る余地がなくなります。今は沈黙を正確に守ります。
- **70で焦る。** 少し速くなったテンポにドン-パチッが前へ押されます。揺れたら準備例（4分音符）に下がって均一から作り直します。
- **ポップだけ大きい。** ポップは弾けて大きく聞こえがちです。サムを少し力強く弾いて二つの音の大きさを合わせます。
- **低音Bの油断（5弦）。** グルーヴが繰り返されるほどBが漏れやすいです。親指で常にBを覆っておきます。
