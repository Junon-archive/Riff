---
title: "進行の上のウォーキングライン — コードトーンに着地し接近音で橋を架ける"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 進行の上のウォーキングライン（コードトーン+接近）

## ① 이론/설명

昨日進行のルートを手に入れたので、今日はその上を本当に歩きます。ウォーキングの哲学はいつも一文です — <mark>すべての1拍目にコードに着地し、最後の拍で次のコードへ橋を架ける</mark>。1拍目は**ルート**でコードをはっきり立て、2・3拍目は**コードトーン**（3度・5度・7度）でコードの色を満たし、4拍目は**接近音**で次の小節のルートへ半音近づきます。この4拍の役割がウォーキング一小節の文法です。

進行に合わせて見てみましょう。1小節目**Gm7**はルートGからb3（Bb）・5度（D）を踏み、4拍目にBでC7のルートCへ近づきます。2小節目**C7**はルートCから3度（E）・5度（G）を通り、4拍目F#でFmaj7のルートFへ半音接近します。3小節目**Fmaj7**はルートFから3度（A）・5度（C）を踏み、再びBで4小節目のC7へ近づきます。そして4小節目のC7ターンアラウンドはb7（Bb）・Aを通り、F#で1小節目Gm7のルートGへ戻ります。<mark>コードトーンは着地、接近音は橋</mark> — この二つが交互に歩みを作ります。

今日いちばん大事なのは**順序**です。まず各小節1拍目の**コードトーン着地**を揺るがずに立て、それから4拍目の接近音で次の小節へ向けて橋を架けます。接近音が華やかに見えても、コードトーンの骨組みがはっきりしなければ歩みは道を失います。今日は4小節のウォーキングラインを手に完全に入れ、<mark>進行の上を滑らかに歩く感覚</mark>を作ります。

まず、各コードの着地音 — ルートと3度 — が指板のどこにあるかを見てみましょう。

```json
{
  "id": "m2.w8.d2.landing_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I landing tones — root & 3rd (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** ii-V-Iの着地音です。Gm7は**G・b3**、C7は**C・3**、Fmaj7は**F・3** — 1拍目のルートと、その色を決める3度です。

```json
{
  "id": "m2.w8.d2.landing_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I landing tones — root & 3rd (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で着地をより重く支えます。

## ② 시각 자료

では、その着地音に接近音をつなぎ、**4小節のウォーキングライン**を歩きます。1拍目コードトーン → 4拍目接近音の流れが4小節を貫きます。<mark>コードが変わっても歩みは途切れず続きます。</mark>各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w8.d2.changes_walk_4",
  "type": "tab",
  "meta": { "title": "Walking the changes (Gm7-C7-Fmaj7-C7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85、4弦、スイング4分音.** 1小節Gm7（**R-b3-5-B**）→ 2小節C7（**R-3-5-F#**）→ 3小節Fmaj7（**R-3-5-B**）→ 4小節C7（**R-b7-A-F#**）です。毎1拍目コードトーンに着地し、4拍目の接近音で橋を架けます。

```json
{
  "id": "m2.w8.d2.changes_walk_5",
  "type": "tab",
  "meta": { "title": "Walking the changes (Gm7-C7-Fmaj7-C7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **5弦.** 音と位置は4弦と同じです。低音B弦で低域をさらに支えます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日の全音符進行をBPM 72で一度歩き、進行の循環を手に呼び戻します。

**10〜20分・ブレイントレーニング**
下の例で4小節のウォーキングを**BPM 60**のゆっくりしたスイングで押さえます。<mark>1拍目のコードトーンがはっきりし、4拍目の接近音が次のルートに正確に触れるか</mark>を音で確かめます。

```json
{
  "id": "m2.w8.d2.changes_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Walking the changes, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** 4小節のウォーキングをゆっくり。コードトーンの着地と接近音の位置を一つずつ手に刻みます。

```json
{
  "id": "m2.w8.d2.changes_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Walking the changes, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**4小節のウォーキング**をBPM 85で循環で繰り返します。<mark>コードトーンの骨組みが揺れないか</mark>を見ながら、4弦で覚えたら5弦でも確かめます。

**40〜50分・整理／録音**
今日の4小節のウォーキングを2〜3周止まらずに録音し、いちばん滑らかなテイクを残します。4弦・5弦の両方を残せば今日の完成です。

**今日の完了基準：** Gm7-C7-Fmaj7-C7進行の上をコードトーンの着地と接近音で4小節ウォーキングし、4弦・5弦で循環できる。 — 今日の成果物：自分の最初の進行ウォーキングライン録音。

## ④ 팁 / 흔한 실수

今日歩いたラインで、次のコードへ渡る**接近音**の位置を別に目に入れておきましょう。B・F#・B・F# — この四つの接近音が小節と小節の間に橋を架けます。

```json
{
  "id": "m2.w8.d2.approach_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approach notes into each chord (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 4, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "A", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" }
  ]}
}
```

▶ **4弦.** 小節をつなぐ接近音です。B（→C）、F#（→F）、A・F#（→G）が各小節の終わりで次のルートへ橋を架けます。

```json
{
  "id": "m2.w8.d2.approach_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approach notes into each chord (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 4, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "A", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えます。

- **接近音をコードトーンのように長く押さえる。** 接近音は通り過ぎて次のルートへ渡す音なので、4拍目に短く踏み、そのまま次の小節の1拍目へ移ります。長く留めるとコードの色が濁ります。
- **コードトーンなしで接近音から入れる。** 順序を守ります — 1拍目のコードトーンが先に立ってこそ、4拍目の接近音が橋の役目をします。着地が揺れれば接近音も行き先を失います。

2か月前はコードが変わるとルート一つで踏ん張っていたのに、今はその間をコードトーンと接近音で歩きます。明日はこのウォーキングの上にゴーストと8分フィルで息を入れ、ラインを歌わせます。
