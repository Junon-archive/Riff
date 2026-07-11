---
title: "卒業進行の把握 — ii-V-I+ターンアラウンドで回るオリジナル進行"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 卒業進行の把握（ii-V-I+ターンアラウンド）

## ① 이론/설명

いよいよ第8週、ウォーキングベース最後の週です。2か月前を思い出してみましょう — あの頃はコードが変わっても**ルート**一つをやっと押さえて拍を保つのが精一杯でした。ところが今は、コードが変わるたびにコードトーンを踏み、接近音で橋を架けて<mark>チェンジを歩きます</mark>。このトラックはあなたの**ベースジャズ・ハーモニーの集大成**です。今週はこれまで集めた語彙を一つに集め、オリジナル進行の上をウォーキングで完成させ、最終日に録音する**卒業**です。

今週の進行はこうです。**Gm7 → C7 → Fmaj7**、キーFの**ii-V-I**です。Gm7（ii）が物語を開き、C7（V）が緊張を作り、Fmaj7（I）でふっと解けます。ジャズで最もよく使われる流れなので、この1サイクルを手に入れれば無数の曲の骨組みを歩くことになります。そして4小節目に**C7**がもう一度鳴り、1小節目のGm7へ戻す<mark>ターンアラウンド</mark>が付きます。おかげで4小節は終わりが始まりへつながり、<mark>止まらずに循環</mark>します。

今日はラインを華やかに歩く前に、まず**進行そのもの**を手と耳に馴染ませます。各コードの**ルート**が指板のどこにあるか、4小節がどう一周で回るかを感じるのが今日のすべてです。コードトーンや装飾は明日から少しずつ載せます。今日は<mark>ルートだけをきちんと</mark>押さえ、進行の地図を頭の中に描きます。この地図がはっきりすれば、その上にコードトーンと接近音を載せるのは自然についてきます。

まず、各コードのルートが指板のどこにあるかを見てみましょう。

```json
{
  "id": "m2.w8.d1.progression_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** Gm7のルート**G**（4弦3フレット）、C7のルート**C**（3弦3フレット）、Fmaj7のルート**F**（4弦1フレット）です。進行はこの三つの位置を行き来して回ります。

```json
{
  "id": "m2.w8.d1.progression_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で進行の根をより重く支えます。

## ② 시각 자료

では、そのルートを1小節に一つずつ、**全音符**で置いて進行一周を目で見ます。**4小節**がそのままii-V-I+ターンアラウンド1サイクルです。<mark>最後の小節が最初の小節へつながって回ります。</mark>各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w8.d1.progression_walk_4",
  "type": "tab",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]}
  ]}
}
```

▶ **BPM 90、4弦、スイング4分音.** 1小節**Gm7(G)** → 2小節**C7(C)** → 3小節**Fmaj7(F)** → 4小節**C7(C)** ターンアラウンドです。小節ごとにルート一つで進行の骨組みを感じます。

```json
{
  "id": "m2.w8.d1.progression_walk_5",
  "type": "tab",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]}
  ]}
}
```

▶ **5弦.** 音と位置は4弦と同じです。低音B弦で低域をさらに支えます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
第7週の装飾ウォーキングをBPM 72で一度歩き、手と耳を目覚めさせます。

**10〜20分・ブレイントレーニング**
下の例で各コードのルートを**4分音符**できっちり押さえて進行を覚えます。<mark>コードが変わる瞬間、手が先に次のルートを探しているか</mark>を確かめます。

```json
{
  "id": "m2.w8.d1.progression_pulse_4",
  "type": "tab",
  "meta": { "title": "ii-V-I roots, quarter pulse (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** 各小節のルートを4拍に分けて押さえます。進行が変わる位置を体で覚える練習です。

```json
{
  "id": "m2.w8.d1.progression_pulse_5",
  "type": "tab",
  "meta": { "title": "ii-V-I roots, quarter pulse (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**全音符進行**をBPM 90で繰り返し、小節が変わるとき<mark>ルートが揺れないか</mark>を観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・整理／録音**
今日は進行を覚える日なので、ルートだけで4小節を2〜3周止まらずに録音します。循環が自然か耳で確かめれば今日の完成です。

**今日の完了基準：** Gm7-C7-Fmaj7-C7進行のルートを4弦・5弦で滞りなく循環させて押さえられ、4小節が一周で回るのを耳でわかる。 — 今日の成果物：自分の最初の進行循環ルート録音。

## ④ 팁 / 흔한 실수

今日の進行の地図を目に刻んでおきましょう。三つのルート**G・C・F**がどこにあるか一目で入れば、明日その上にコードトーンを載せるのがずっと楽になります。

```json
{
  "id": "m2.w8.d1.progression_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround loop map (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** ii-V-I+ターンアラウンドの三つのルートです。Gm7(G)・C7(C)・Fmaj7(F)、そして4小節目のC7が再びGm7へ戻します。

```json
{
  "id": "m2.w8.d1.progression_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround loop map (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えます。

- **ルートを急いで変える。** コードが変わる直前に焦ると拍が押されます。小節の4拍目を最後まで踏み、次の小節の1拍目で新しいルートにきっちり着地します。
- **循環を忘れて止まる。** 4小節目のC7は終わりではなく、1小節目へ戻る橋です。最後の小節で止まらず、そのまま1小節目のGm7へつないで一周を完成させます。

2か月前はコードが変わるとどこを押さえるか途方に暮れていたのに、今は進行一周が目にはっきり見えます。明日はこの上にコードトーンと接近音を載せ、本物のウォーキングとして歩きます。
