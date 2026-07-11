---
title: "ii-V-Iのコードトーン — Gm7・C7・Fmaj7、3つのコードの骨格"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — ii-V-Iのコードトーン、Gm7・C7・Fmaj7という3つのコードの骨格

## ① 이론/설명

いよいよ2か月目、チェンジを航海する最初の週です。先月は1つのコードの中を歩く方法を身につけましたが、今週はコードが変わる道の上を歩きます。その道の名前が**ii-V-I**、ジャズでもっとも多く、もっとも大切な進行です。Fのキーでは<mark>Gm7 → C7 → Fmaj7</mark>がその道です。ii（Gm7）から出発し、V（C7）を通って、I（Fmaj7）という家へ帰る旅なのです。

今日はこの3つのコードの**コードトーン**から手になじませます。コードトーンとは、そのコードを組み立てる骨格の音です。Gm7はR・b3・5・b7（G・Bb・D・F）、C7はR・3・5・b7（C・E・G・Bb）、Fmaj7はR・3・5・7（F・A・C・E）です。ひとつだけ覚えましょう — <mark>どのコードも最初の音はルート（R）に着地</mark>する、ということ。**ルート**が歩みの出発点であり、各コードの住所です。

3つのコードを見分ける鍵は**3度と7度**です。Gm7は短3度（b3）なので暗く、C7は長3度（3）に短7度（b7）で緊張を秘め、Fmaj7は長3度に長7度（7）で明るく解けます。この<mark>b3から3、そして7へ広がる色</mark>が、家へ向かうii-V-Iの地図です。今日は3つのコードのコードトーンを1つずつ押さえ、各コードの響きと位置を耳と手に刻みます。

まず今週の3つのコードの出発点、Gm7のコードトーンを指板で見ましょう — **R・b3・5・b7**です。

```json
{
  "id": "m2.w5.d1.gm7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** Gm7のR（4弦3フレット）・b3（3弦1フレット）・5（3弦5フレット）・b7（2弦3フレット）です。

```json
{
  "id": "m2.w5.d1.gm7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

Gm7の響きを手に入れたら、次は**C7**と**Fmaj7**のコードトーンも並べて見ましょう。そのうえで3つのコードのトーンを、<mark>低い音から高い音へ1音ずつ上がりながら</mark>つないで歩きます。すべての例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w5.d1.c7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** C7のR（3弦3フレット）・3（2弦2フレット）・5（2弦5フレット）・b7（1弦3フレット）です。

```json
{
  "id": "m2.w5.d1.c7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

```json
{
  "id": "m2.w5.d1.fmaj7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** Fmaj7のR（4弦1フレット）・3（4弦5フレット）・5（3弦3フレット）・7（3弦7フレット）です。

```json
{
  "id": "m2.w5.d1.fmaj7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

では3つのコードのトーンを1小節ずつつないで上がるアルペジオです。各小節の1拍目は、そのコードのルートです。

```json
{
  "id": "m2.w5.d1.three_chord_arp_4",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4弦.** 1小節目Gm7（G-Bb-D-F）、2小節目C7（C-E-G-Bb）、3小節目Fmaj7（F-A-C-E）です。各小節の1拍目はルートに着地します。

```json
{
  "id": "m2.w5.d1.three_chord_arp_5",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5弦.** 音と位置は4弦と同じです。低音Bは覆っておきましょう。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
先週のFブルース・ウォーキングをBPM 72で一度歩き、指先にスイング4分音の感覚を呼び戻しましょう。

**10〜20分・頭のトレーニング**
下の準備例で3つのコードのトーンを**BPM 60**の遅いスイング4分音でコツコツ押さえます。<mark>各小節の1拍目がルートか</mark>を音で確かめましょう。

```json
{
  "id": "m2.w5.d1.three_chord_arp_slow_4",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 arpeggio, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4弦.** 3つのコードのトーンを1拍ずつゆっくり。コードが変わるときはルートから先に取りましょう。

```json
{
  "id": "m2.w5.d1.three_chord_arp_slow_5",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 arpeggio, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**アルペジオ**をBPM 80で3小節の循環として繰り返します。<mark>Gm7・C7・Fmaj7の響きの違い</mark>が耳に届くか観察しましょう。4弦でなじませてから5弦でも確認します。

**40〜50分・録音／フィードバック**
30秒録音して、3つのコードのルートがはっきり着地しているか聴いてみましょう。どのコードがいちばん不慣れかを書き留めておけば、明日のつなぎ練習のスタート地点になります。

**今日の完了基準：** Gm7・C7・Fmaj7という3つのコードのコードトーンを、各小節1拍目のルートに着地させながら、スイング4分音で4弦・5弦の両方で押さえられる。

## ④ 팁 / 흔한 실수

- **コードが変わる瞬間を逃します。** 小節が切り替わるときにルートを先に確保しないと、歩みが崩れます。新しい小節の1拍目は必ずルートに着地する、と決めておきましょう。
- **b3と3を混同します。** Gm7のb3（Bb）と、C7・Fmaj7の長3度は響きの色がまったく違います。ゆっくり押さえて、暗い3度と明るい3度を耳で区別しましょう。

3つのコードの住所、つまり3つのルートを一目で見ておきましょう。この3つの着地点が、今週の歩みの柱です。

```json
{
  "id": "m2.w5.d1.three_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7-C7-Fmaj7 three roots — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** Gm7のG（4弦3フレット）・C7のC（3弦3フレット）・Fmaj7のF（4弦1フレット）です。

```json
{
  "id": "m2.w5.d1.three_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7-C7-Fmaj7 three roots — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでさらに低いルートも見当をつけられます。

- **初日の自分をほめましょう。** 3つのコードのトーンを手に入れただけで、ii-V-Iの航海の半分はもう始まっています。明日はこれらのコードをアプローチノートでつなぎ、本当に「歩く」感じを作ります。
