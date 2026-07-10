---
title: "2つの手を1つに — E·Aルートパルス完成"
dayKey: "m1.w1.d4"
estMinutes: 30
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 2つの手を1つに、E·Aルートパルス

## ① 理論・説明

ついに1週目の最終日です。今日はこれまで断片的に身につけたものを1つにつなぎます — 右手のツーフィンガー、E↔Aの弦移動、そして左手のミュートまで。この3つを1つのリフに詰め込めば、それが今週の完成物<mark>E·Aルートパルス</mark>です。派手ではありませんが、ドラムのとなりで曲の土台をしっかりつかむ、本物のベースの最初の音です。

ベースの最初の任務は派手さではなく、<mark>ドラムと一体になること</mark>です。だから今日の目標は速さではなく、2小節をメトロノームにぴたっと合わせてはっきり繰り返すこと。1小節目は開放E（4弦）を8回、2小節目は開放A（3弦）を8回 — 昨日まで習った弦移動がここでそのまま使われます。2本の指の音量が同じで、小節が変わっても拍が押さなければ成功です。

このパルスは全部開放弦ですが、左手は遊んでいません。左手は<mark>弾かない弦を眠らせる門番</mark>の役割をします — D・G弦に指を軽く寝かせて乗せ、うっかり触れても鳴らないよう覆っておくんです。昨日身につけた「フレットのすぐ後ろをまっすぐ押さえる」は今日すぐには使いませんが、これからラインに音を足すとき取り出せる頼もしい道具として手に残っています。

5弦なら眠らせる弦がもう1本あります — 低音Bは右手の親指で、D・Gは左手で覆います。それでも<mark>使う弦は同じ</mark>です。EとAは4弦でも5弦でも同じ開放弦（4弦・3弦）なので、右手が弾く場所はまったく同じ。今日この2小節を60〜65で揺れずに回せれば、今週作った手が確かに育った証拠です。

## ② ビジュアル資料

今日は今週の完成物、E·Aルートパルスを仕上げます。まず<mark>ゆっくりの4分音符で2小節を描いてみて</mark>、それから8分音符のパルスへ移ります。各例を4弦・5弦の2バージョンで載せました。

**準備 — 4分音符のルートパルス。** 1小節目は開放E、2小節目は開放Aを1拍に1つずつ。弦が変わる小節の境目だけなめらかに越えます。

```json
{
  "id": "m1.w1.d4.pulse_prep_quarter_4",
  "type": "tab",
  "meta": { "title": "E·A root pulse prep — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 開放Eを1小節、開放Aを1小節。小節が変わる瞬間もツーフィンガーの交互を止めないで。

```json
{
  "id": "m1.w1.d4.pulse_prep_quarter_5",
  "type": "tab",
  "meta": { "title": "E·A root pulse prep — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦とまったく同じ。低音Bは親指で覆い、Aの小節では親指をE側へ移して弾かない弦を眠らせます。

**今週の完成物 — E·Aルートパルス。** いよいよ8分音符で。1小節目は開放Eを8回、2小節目は開放Aを8回。繰り返すと自然につながる循環リフです。

```json
{
  "id": "m1.w1.d4.root_pulse_4",
  "type": "tab",
  "meta": { "title": "E·A root pulse — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65、ツーフィンガー（人差し指・中指の交互）で均一に。** 1小節目は開放E（4弦）、2小節目は開放A（3弦）。2本の指の音量を同じに。

```json
{
  "id": "m1.w1.d4.root_pulse_5",
  "type": "tab",
  "meta": { "title": "E·A root pulse — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ 音と位置は4弦とまったく同じ。**5弦なら**低音B（5弦）は使わないので、親指か左手でそっと覆って鳴らないように（ミュート）してください — 4弦にはない唯一の違いです。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日の開放↔フレットの対比とE↔Aの弦移動をBPM 60でまたほぐします。2つの手が出会う感覚を呼び戻します。

**7〜17分・今日の技術**
準備の例（4分音符のルートパルス）をBPM 60で繰り返します。開放Eの小節から開放Aの小節へ渡る<mark>小節の境目</mark>だけなめらかにみがきます。

**17〜27分・応用（今週の完成物）**
E·AルートパルスをBPM 60で4回繰り返す → ビリつき・雑音なくなったらBPM 65へ1段上げて4回。4弦で身につけたら、5弦でも同じ感覚を確かめます。

**27〜30分・チェック**
今週届いたBPMを記録し、30秒録音して2小節がひと息のようにつながるか、雑音が混じっていないか聴いてみましょう。

**今日の完了基準：** E·Aルートパルスをツーフィンガーで、60〜65で4弦・5弦の両方をビリつき・雑音なくはっきり繰り返せる。（1週目完成！）

## ④ ヒント / よくあるミス

- **小節の境目で止まる。** EからAへ移るとき手を止めると拍が押します。ツーフィンガーの交互を保ったままとなりへ座り直して。
- **左手を離してしまう。** 開放弦だからと左手を完全に離すと、弾かない弦が一緒に鳴って音が濁ります。左手は門番として乗せておいて。
- **速度を先に上げる。** 60で雑音があるのに65へ行くと全部崩れます。今週ずっとそうだったように、クリーンが先です。
- **全部できなくても大丈夫。** 今日5弦まで完璧でなくてもOK。このパルスは来週もウォームアップで会い続けるので、焦らないで。
