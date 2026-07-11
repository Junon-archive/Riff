---
title: "12小節の前半 — F7・Bb7の8小節を歩く"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 12小節の前半、F7・Bb7の8小節を歩く

## ① 이론/설명

昨日はスイング4分音のフィールを手になじませましたね。今日からは本物の**12小節Fブルース**を歩きます。1か月前は1つのコードにルートを押さえるのがやっとだったのに、今は12小節の曲の半分を歩くのです。まず全体の地図を広げてみましょう — **| F7 | Bb7 | F7 | F7 |**（1〜4小節）、**| Bb7 | Bb7 | F7 | F7 |**（5〜8小節）、**| C7 | Bb7 | F7 | C7 |**（9〜12小節）です。

12個のマスがブルースの長さです。でも怖がらなくて大丈夫です — よく見るとコードはたった3つ（F7・Bb7・C7）だけで、今日歩く**前半8小節**にはC7がまったくありません。<mark>F7とBb7、2つの家を行き来するだけです</mark>。この3週間ずっとこの2つのコードで歩いてきたので、実は今日の道はもう知っている道です。

歩みのルールはそのままです。**1拍はコードに着地、4拍は次のコードへ橋。** 各小節の4拍にアプローチノートを置いて、次の小節の1拍へ滑り込みます。今日使う橋は3つ — Bbへ向かう**B**（半音上）、Fへ向かう**E**（半音下）、そして同じコードが続くときはコードトーン**b7**や下のアプローチ**A**で自然につなぎます。<mark>4拍ごとに次の1拍を呼んでいるか</mark>だけ確かめれば、8小節が1つにつながります。

まず今日の2つの家、**FとBbのルート**を指板で並べて見ましょう。

```json
{
  "id": "m1.w4.d2.two_homes_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F and Bb — the two homes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** 前半の2つの着地点 — F（4弦1フレット）とBb（3弦1フレット）です。

```json
{
  "id": "m1.w4.d2.two_homes_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F and Bb — the two homes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでさらに低いルートもつかめます。

## ② 시각 자료

では**前半8小節**をまるごと歩きます。1〜4小節はF7-Bb7-F7-F7、5〜8小節はBb7-Bb7-F7-F7です。各小節をR-3-5で歩き、4拍に橋を置きます。<mark>8小節が途切れずに1つの流れとして</mark>つながるか聴いてみましょう。すべての例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m1.w4.d2.first_half_4",
  "type": "tab",
  "meta": { "title": "F blues first half (bars 1-8) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 6, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 7, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4弦.** 1・4小節の4拍B、2・6小節の4拍E、5小節の4拍Aが橋です。3・7小節は同じF7が続くので、コードトーンb7で歩きます。

```json
{
  "id": "m1.w4.d2.first_half_5",
  "type": "tab",
  "meta": { "title": "F blues first half (bars 1-8) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 6, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 7, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5弦.** 音と位置は4弦と同じです。低音Bは覆っておきましょう。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日のF7スイング・ウォーキングをBPM 72で一度歩きます。指先にスイング4分音の感覚を呼び戻しましょう。

**10〜20分・頭のトレーニング**
前半を一気に歩く前に、下の準備例で**1〜4小節**だけを**BPM 70**の遅い速さで取り出して練習します。<mark>小節と小節のつなぎ目</mark>が滑らかか確かめましょう。

```json
{
  "id": "m1.w4.d2.first_half_prep_4",
  "type": "tab",
  "meta": { "title": "First half chunk (bars 1-4), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 70, 4弦.** 1〜4小節だけをゆっくり。4拍の橋（B・E・B）が次の1拍へ滑り込むか確かめましょう。

```json
{
  "id": "m1.w4.d2.first_half_prep_5",
  "type": "tab",
  "meta": { "title": "First half chunk (bars 1-4), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 70, 5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**前半8小節**を**BPM 80**で最初から最後までつなげて歩きます。途中で止まらず、詰まったらその小節だけをゆっくり直してから、また戻してつなぎます。4弦でなじませてから5弦でも確認します。

**40〜50分・録音／フィードバック**
前半8小節を30秒録音して、コードが変わる箇所（1→2小節、4→5小節）が自然か聴いてみましょう。今日到達したBPMを書き留めておけば、明日の後半のスタート地点になります。

**今日の完了基準：** Fブルースの前半8小節（F7・Bb7）をBPM 80のスイング4分音で、1拍ごとに着地・4拍ごとに橋をかけて途切れずに、4弦・5弦の両方で歩ける。

## ④ 팁 / 흔한 실수

- **F7が続くと単調になります。** 3・7小節のように同じコードが続くときは、コードトーンb7（3弦6フレット）で少し色をつけましょう。毎回同じに歩かなくていいのです。
- **コードが変わるとき手が遅れます。** 4→5小節や8小節のように位置が変わるときは、4拍の橋を置く瞬間にもう次の手の形を準備します。橋は手を早めに動かす合図です。

Bb7のコードトーンも整理しておきましょう。BbルートからR-3-5-b7がどこにあるか見ておくと、5・6小節がラクになります。

```json
{
  "id": "m1.w4.d2.bb7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** Bb7のR（3弦1フレット）・3（2弦開放）・5（2弦3フレット）・b7（1弦1フレット）です。

```json
{
  "id": "m1.w4.d2.bb7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

- **半分歩けたのは大きいことです。** 8小節をつなげて歩ければ、残りの4小節は同じ原理にコードを1つ（C7）足すだけです。今日ここまで来ただけで、12小節の大部分を手に入れたことになります。
