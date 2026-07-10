---
title: "ベースと初めまして — 姿勢・4弦と5弦・ツーフィンガー"
dayKey: "m1.w1.d1"
estMinutes: 30
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — ベースと初めましての日

## ① 理論・説明

今日はいよいよ、初めてベースを手に取る日です。派手なスラップや速いラインは少しお預け。今日の主役はたった1つ — **<mark>くっきりした低音一発</mark>**です。ベースはバンドの中でドラムと手をつなぎ、**曲の土台を敷く楽器**です。だから初日からうまく弾こうとせず、まずはベースと気楽にあいさつしてみましょう。

まず座って、ベース本体のくびれた腰を右の太ももに乗せ、**ネックが床とほぼ水平**になるよう少しだけ立てます。立って弾くなら、ストラップを座ったときと<mark>同じ高さ</mark>に合わせると手首が楽です。肩はストンと落として。音を出す前に、クリップ式チューナーかチューナーアプリで4本の弦（5弦なら5本）を合わせておきましょう。**チューニングが合ってこそ**、今日出した音がようやく「自分の音」に聞こえます。

ベースには**4弦と5弦**があります。4弦は低いほうからE・A・D・Gの4本、5弦はその下に<mark>低音のB弦がもう1本</mark>加わったものです。こわがらないで — **E・A・D・Gの4本**の位置と手の形は、4弦でも5弦でもまったく同じです。5弦はただ、より低い音を出す弦が1本おまけで付いているだけ。だからこのカリキュラムの楽譜はすべて、4弦と5弦を並べて見せます。どのベースを持っていても、自分の楽器のブロックだけ見てそのまま付いてくればOKです。

右手はピックなしで、**<mark>人差し指と中指の2本</mark>**で弦をはじきます。2本の指が交互に歩く足取りだと思えば簡単です — 人差し指の次は中指、中指の次は人差し指。親指はピックアップや4弦の上にそっと乗せて手を支えます。今日は左手はお休み、**いちばん太いE弦（4弦）を開放で**均一に鳴らしてみます。指先がヒリヒリするのは正常なので心配しないで — 数日で硬いタコができます。この均一な一音が、これから習うすべてのラインの土台になります。

## ② ビジュアル資料

今日は左手はお休み。**4弦の開放E**だけを右手で弾きます。下の例は、同じ音を<mark>4分音符から8分音符へ</mark>細かく詰めていくコースです。各例を**4弦・5弦の2バージョン**で並べて載せました。

**例1 — 4分音符。** 1拍に1回、開放Eをはじきます。人差し指と中指を交互に使うことだけ覚えて。

```json
{
  "id": "m1.w1.d1.open_e_quarter_4",
  "type": "tab",
  "meta": { "title": "Open E root pulse — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** メトロノームのカチッに1回ずつ。4回とも音量が同じか、耳で確かめて。

```json
{
  "id": "m1.w1.d1.open_e_quarter_5",
  "type": "tab",
  "meta": { "title": "Open E root pulse — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦とまったく同じ。低音のB（5弦）は今日使わないので、親指でそっと覆って鳴らないように。

**例2 — 8分音符。** 1拍を2つに割って8回。速くなっても2本の指の音量を同じに、音がにじまない範囲まで。

```json
{
  "id": "m1.w1.d1.open_e_eighth_4",
  "type": "tab",
  "meta": { "title": "Open E root pulse — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
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

▶ **BPM 65、4弦。** 1拍に2回ずつ、はっきりと。人差し指・中指の音がひと組のようにそろうように。

```json
{
  "id": "m1.w1.d1.open_e_eighth_5",
  "type": "tab",
  "meta": { "title": "Open E root pulse — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
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

▶ **BPM 65、5弦。** 4弦と音は同じ。ここでも低音のBは親指で覆って静かに — 4弦にはない、5弦だけの唯一の宿題です。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
メトロノームをBPM 60に合わせ、肩と腕の力を抜きながら手をほぐします。まだ音より、**楽な姿勢**が先です。

**7〜17分・今日の技術**
4弦の開放Eを**人差し指・中指の交互で**ごくゆっくりはじきます。2本の指が出す<mark>音量が揺れないか</mark>が今日の目標です。

**17〜27分・応用**
例1（4分音符）をBPM 60で4回繰り返す → 楽になったら例2（8分音符）に進み、BPM 65で4回。**音がにじんだら**、また4分音符に下げます。

**27〜30分・チェック**
今日届いたBPMを書き留め、よければ30秒だけ録音して、8つの音の大きさがそろっているか聴いてみましょう。

**今日の完了基準：** 4弦の開放Eをツーフィンガーの8分音符で60〜70、音量が揺れずに弾ける。

## ④ ヒント / よくあるミス

- **指先の痛みは正常。** 最初の数日は指先がヒリヒリするのが当たり前です。痛ければ少し休んでまた握ればOK。
- **親指の置き場所が見つからない。** 4弦かピックアップの上に乗せて手を支えます。定位置ができると右手がずっと安定します。
- **1本の指だけ使う。** 人差し指だけ使い続けると音が団子になり、すぐ疲れます。必ず人差し指・中指を交互に歩かせて。
- **速さを欲張る。** 60でそろった音のほうが、100でかすれるよりずっとプロっぽいです。速さは後から勝手についてきます。
