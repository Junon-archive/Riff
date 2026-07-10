---
title: "今週の完成物 — 8ビートのルートライン（2コード）"
dayKey: "m1.w3.d4"
estMinutes: 30
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 8ビートのルートライン、E-Aポケット

## ① 理論・説明

いよいよ3週目の最終日です。今週ずっと少しずつ身につけたものをひとつにくっつけます — **サブディビジョン、キックにルートを乗せる、8分ライン、ポケットの休符、2コードチェンジ**まで。この5つをひとつのリフに詰め込めば、今週の完成物、**<mark>8ビートのルートライン</mark>**です。派手ではありませんが、ドラムとかっちり噛み合って**曲の土台をまるごと支える**本物のロックベースラインです。

このラインは2つのコードの上を流れます。**1小節目は開放E（4弦）、2小節目は開放A（3弦）**を8分音符のルートで転がします。肝心な仕掛けはポケットです — 各小節の**2拍の裏8分（&）をちょうどひとつ空けて**ラインに息を入れます。その場所では**手は止めず、音だけを空ける**というルール、昨日まで身につけたそのままです。この小さな空白ひとつが、平らな8分を**<mark>グルーヴが回るライン</mark>**に変えてくれます。

今日気をつけるのは3つが**同時に**生きていることです。8分ルートを**キックに正確に乗せ**、ポケットの**休符をはっきり空け**、小節が変わる**境目でもたつかず切り替える**こと。3つのうちひとつでもぐらつくとラインがゆるみます。だから**速さから上げず**、この3つがすべて噛み合うまでゆっくり固めます。

このラインも**<mark>4弦でも5弦でも運指は同じ</mark>**です。Eは4弦、Aは3弦なので手の形はまったく同じですね。5弦なら低音B（5弦）を親指で覆い続けて眠らせておけば大丈夫。完璧でなくても大丈夫です — このラインはこの先もウォームアップで出会い続けるので、今日は**ドラムとひとつになる感覚**だけを手に残せば十分です。

## ② ビジュアル資料

今日は**今週の完成物**を完成させます。まず<mark>ゆっくりの準備バージョンで2コードの移動をみがき</mark>、次にピン留めのラインE→Aをポケットと一緒に回します。各例を**4弦・5弦の2バージョン**で載せました。

**準備 — ゆっくりのルートライン。** 各ルートを半小節ずつ長く押さえ、8分を乗せる前に**E→Aの移動**からなめらかに整えます。

```json
{
  "id": "m1.w3.d4.eighth_root_line_prep_4",
  "type": "tab",
  "meta": { "title": "8-beat root line prep E-A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 青のE（4弦）→A（3弦）を半小節ずつ長く。8分を乗せる前に2つのコードの移動からなめらかに。

```json
{
  "id": "m1.w3.d4.eighth_root_line_prep_5",
  "type": "tab",
  "meta": { "title": "8-beat root line prep E-A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 運指は4弦と同じ。低音Bは親指で覆って眠らせておいてください。

**今週の完成物 — 8ビートのルートライン（2コード）。** いよいよ8分音符で。E（1小節目）→A（2小節目）を転がしつつ、各小節の**2拍の裏8分（&）は空けて**ポケットを作ります。

```json
{
  "id": "m1.w3.d4.eighth_root_line_4",
  "type": "tab",
  "meta": { "title": "8-beat root line E-A (pocket) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** ドラム（またはメトロノーム）に正確に。8分ルートをキックに乗せ、各小節の2拍の裏8分は空けてポケットを作ります（手は動かし続けつつその場所は音なしで）。E（1小節目）→A（2小節目）。

```json
{
  "id": "m1.w3.d4.eighth_root_line_5",
  "type": "tab",
  "meta": { "title": "8-beat root line E-A (pocket) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75、5弦。** 音と位置は4弦と同じ。低音Bはずっと眠らせておいてください。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日の2コードチェンジをBPM 70でまたほぐします。**小節が変わるとき拍がもたつかないか**を確かめながら手を温めます。

**7〜17分・今日の技術**
準備の例（ゆっくりのルートライン）をBPM 70で繰り返します。<mark>E→Aの移動がなめらかか</mark>から整えてから8分を乗せます。

**17〜27分・応用（今週の完成物）**
8ビートのルートラインをBPM 70で4回 → **ポケットの休符が生き、チェンジがきれいなら** BPM 75に上げて4回。4弦で身につけてから5弦でも同じ感覚を確かめます。

**27〜30分・チェック**
今週届いたBPMを記録し、30秒録音して**キックにくっつくか、休符が生きるか、チェンジがきれいか**を聴いてみましょう。

**今日の完了基準：** 8ビートのルートライン（E-A、2コード）をツーフィンガーで、キックに乗せ各小節の2拍の裏の休符を生かして4弦・5弦の両方で70〜75でぐらつかず繰り返せる。（3週目完成！）

## ④ ヒント / よくあるミス

- **休符を埋めてしまう。** 2拍の裏8分に音が漏れるとポケットが消えます。そのひとつのアタックだけ音を空け、手は8分で回し続けます。
- **チェンジで拍がもたつく。** Aへ渡るとき最初の音が遅れるとラインがゆるみます。Eの最後の音で先に3弦を準備しておいて。
- **速さから上げる。** 70で3つ（キック・休符・チェンジ）が合っていないのに75へ行くと全部崩れます。今週ずっとそうだったように、きれいさが先です。
- **低音Bの油断（5弦）。** ラインが回る間ずっとBは親指で覆っておいて。完成物に集中してBを逃すと低音が漏れます。
