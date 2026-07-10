---
title: "8分音符のルートラインとポケットの休符"
dayKey: "m1.w3.d2"
estMinutes: 30
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 8分音符のルートライン、ポケットを作る

## ① 理論・説明

昨日はキックが落ちる瞬間にルートをひとつだけぴたっと乗せましたね。今日はその感覚を**1小節まるごと**つなげて、今週の本当の背骨、**<mark>8分音符のルートライン</mark>**を作ります。8分のルートラインは**ひとつのコードの上でルートを8分音符で均一に**転がすラインです — たくさんのロック・ポップ名曲の土台を支える、いちばん基本でいちばん頼れるベースです。

肝心なのは**8つの音が定規で測ったように均一なこと**です。ひとつでも急いだり遅れたりするとグルーヴがきしみます。だから今日は開放Eひとつだけを使い、代わりに**8回のアタックを完璧に均一に**転がすことだけに集中します。左手は押さえたままそのまま、**右手のツーフィンガーが人差し指-中指を交互に**きっちり転がします — この交互が均一さのカギです。

でも8分を最初から最後までぎっしり詰めると窮屈です。だから途中に**<mark>休符（空間）</mark>**をひとつ入れます。各小節の**2拍の裏8分（&）を空けて**少し息を入れるんです。ここで大事なルール — **手は止めず、その場所だけを音なしで空けます**。右手はずっと8分で動かしつつ、そのひとつのアタックだけ弦を軽く眠らせて音を出さないんです。この小さな空白がラインに**<mark>グルーヴ（ポケット）</mark>**を作ってくれます。

このラインも**4弦でも5弦でも運指は同じ**です。開放Eは4弦ひとつでよく、5弦なら低音B（5弦）を親指で覆って眠らせておけば大丈夫。今日は速さより、**8分の均一さと休符の位置**、このふたつだけを手に残せば十分です。

## ② ビジュアル資料

今日は**8分ルートラインを2段階で**身につけます。まず休符なしで<mark>均一な8分</mark>を埋めて手をそろえ、次に2拍の裏8分を空けて**ポケット**を作ります。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — 均一な8分ルート。** 開放Eを休符なしで8回、間隔を完璧にそろえて。急ぐ音がないか耳で見張ります。

```json
{
  "id": "m1.w3.d2.eighth_line_even_4",
  "type": "tab",
  "meta": { "title": "Even eighth root line on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 青の開放E8つを定規で測ったように均一に。ツーフィンガーの人差し指-中指をきっちり交互に。

```json
{
  "id": "m1.w3.d2.eighth_line_even_5",
  "type": "tab",
  "meta": { "title": "Even eighth root line on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 運指は4弦と同じ。低音Bは親指で覆って眠らせておいてください。

**例2 — ポケットの8分ルート。** 今度は**2拍の裏8分（&）を空けます**。その場所で右手は止めず、弦だけ軽く眠らせて音を出さないでください。

```json
{
  "id": "m1.w3.d2.eighth_line_pocket_4",
  "type": "tab",
  "meta": { "title": "Pocket eighth root line on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 空白（2拍の&）で手は動かし続けつつ音は出さずに。その小さな息が**ポケット**を作ります。

```json
{
  "id": "m1.w3.d2.eighth_line_pocket_5",
  "type": "tab",
  "meta": { "title": "Pocket eighth root line on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 音と位置は4弦と同じ。速くなっても低音Bが漏れないよう親指で覆っておきます。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日のキックにルートを乗せる練習をBPM 70でまたほぐします。**表拍に音が正確に落ちるか**を確かめながら手を温めます。

**7〜17分・今日の技術**
例1（均一な8分）をBPM 70で繰り返します。<mark>8つの音の間隔が完璧にそろうまで</mark>ツーフィンガーの交互だけをみがきます。

**17〜27分・応用**
例2（ポケットの8分）をBPM 70で4回。**空白で音が出ず**、手は止まらないか確かめます。ぐらついたら例1に戻ります。

**27〜30分・チェック**
今日届いたBPMを書き留め、30秒録音して**8分がそろい休符が生きているか**を聴いてみましょう。

**今日の完了基準：** ひとつのコード（E）の上の8分音符ルートラインを、2拍の裏の休符を生かして4弦・5弦の両方で65〜75で均一に転がせる。

## ④ ヒント / よくあるミス

- **空白で本当に止まる。** 休符で手まで止めると次の音が遅れます。音だけ空けて右手は8分で回し続けます。
- **8分がでこぼこ。** 人差し指・中指の強さが違うと音がばらつきます。2本の指の大きさをそろえて転がします。
- **速さから上げる。** 70でそろっていないのに速く行くと休符が消えます。均一さが先、速さは後です。
- **低音Bの油断（5弦）。** 8分が速くなるほどBが一緒に鳴りやすいです。親指で覆い続けて低音を眠らせておきます。
