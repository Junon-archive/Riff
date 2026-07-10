---
title: "ドラムの上で2コードを切り替える"
dayKey: "m1.w3.d3"
estMinutes: 30
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 2コードチェンジ、ルートを追う

## ① 理論・説明

昨日まではひとつのコードの上で8分のルートラインを転がしましたね。でも本物の曲はひとつのコードにとどまりません — **数小節ごとにコードが変わり**、そのたびにベースのルートも一緒に移っていかなければなりません。今日の目標は、**<mark>コードが変わるときにルートを追って新しい席に移ること</mark>**、それもドラムが回っている最中にぐらつかずに、です。

今日使う2つのコードは**EとA**です。**Eのルートは4弦の開放、Aのルートは3弦の開放**ですね。曲がEからAへ移ると、両手が**1弦上へ（4弦→3弦）**そっと渡るだけです。チェンジが起こる場所は**小節と小節の境目**、つまり新しい小節の1拍目です。この1拍目に**<mark>新しいルートがキックと一緒にぴたっと</mark>**落ちるのが肝心です。

チェンジでいちばん多いミスは**拍がもたつくこと**です。コードを変えようと手があたふたすると、新しい小節の最初の音が遅れます。だから今日も2週目のミュートが力を発揮します — **<mark>前のコードの最後の音を眠らせながら同時に指先だけを隣の弦へ</mark>**渡すんです。手を大きく振らず、**右手の親指も一緒に移して**弾かない弦を覆います。ドラムのキックはコードが変わっても休まないので、自分も**拍を一瞬も逃さずに**新しいルートへつなげます。

このチェンジも**4弦でも5弦でも手の形は同じ**です。Eは4弦、Aは3弦なので、どちらのベースでも同じ場所ですね。5弦なら移動の間ずっと低音B（5弦）を親指で覆って、チェンジに気を取られている間にBが漏れないよう守ります。今日は速さより、**チェンジのきれいさ**ひとつだけを手に残せば十分です。

## ② ビジュアル資料

今日は**2コードチェンジを2段階で**身につけます。まず各コードを1小節ずつゆっくり行き来して<mark>継ぎ目をみがき</mark>、次に8分のルートでE→Aをつなげます。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — チェンジの準備（4分）。** 1小節目は開放E4回、2小節目は開放A4回。小節が変わる瞬間にルートがなめらかに分かれるか感じます。

```json
{
  "id": "m1.w3.d3.two_chord_prep_4",
  "type": "tab",
  "meta": { "title": "Two-chord change prep E-A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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

▶ **BPM 70、4弦。** 青のE（4弦）→A（3弦）。2小節目の1拍目で前のEを眠らせ、指先だけ1弦上へ渡ります。

```json
{
  "id": "m1.w3.d3.two_chord_prep_5",
  "type": "tab",
  "meta": { "title": "Two-chord change prep E-A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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

▶ **BPM 70、5弦。** 運指は4弦と同じ。低音Bは親指で覆って眠らせておいてください。

**例2 — 8分で2コード。** 今度は各コードを8分音符8回ずつ。Eの1小節を転がして、**次の小節の1拍目でAへ**もたつかず渡ります。

```json
{
  "id": "m1.w3.d3.two_chord_eighths_4",
  "type": "tab",
  "meta": { "title": "Two-chord eighth line E-A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75、4弦。** E（8分8つ）→A（8分8つ）。チェンジの継ぎ目で**拍がもたつかないよう**、新しいルートをキックにぴたっと乗せます。

```json
{
  "id": "m1.w3.d3.two_chord_eighths_5",
  "type": "tab",
  "meta": { "title": "Two-chord eighth line E-A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75、5弦。** 音と位置は4弦と同じ。速くなっても低音Bが漏れないよう親指で覆っておきます。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日のポケットの8分ルートをBPM 70でまたほぐします。**8分がそろい休符が生きているか**を確かめながら手を温めます。

**7〜17分・今日の技術**
例1（チェンジの準備）をBPM 70で繰り返します。<mark>E→Aの継ぎ目で拍がもたつかないか</mark>だけに集中し、前の音を眠らせて指先だけ渡ります。

**17〜27分・応用**
例2（8分で2コード）をBPM 70で4回 → きれいなら BPM 75に上げて4回。**チェンジで1拍目が遅れないか**を確かめます。

**27〜30分・チェック**
今日届いたBPMを書き留め、30秒録音して**コードが変わるとき拍がもたつかないか**を聴いてみましょう。

**今日の完了基準：** EとAの2つのコードをドラムの上で、小節が変わるとき拍をもたつかせず4弦・5弦の両方で70〜75できれいに切り替えられる。

## ④ ヒント / よくあるミス

- **チェンジで拍がもたつく。** コードを変えようと手があたふたすると新しい小節の最初の音が遅れます。前の小節の最後の音で次の弦を先に準備しておいて。
- **手を大きく振る。** 腕全体を動かすと遅く不正確になります。指先だけを隣の弦へそっと渡します。
- **チェンジの瞬間にミュートを逃す。** 前のコードが鳴り続けると2つのルートが濁ります。移る直前に必ず前の音を眠らせて。
- **低音Bの油断（5弦）。** チェンジに気を取られるとBが漏れやすいです。親指は移動中もいつもBの上に乗せておいて。
