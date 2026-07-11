---
title: "C7 → Fmaj7 をつなぐ — VからIへ、家に着く解決"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — C7 → Fmaj7 をつなぐ、VからIへ家に着く解決

## ① 이론/설명

昨日はGm7からC7へ渡りました。今日は最後の橋、<mark>C7から家Fmaj7へ帰るV→Iの解決</mark>です。ii-V-Iでもっとも劇的な瞬間が、まさにこのV→Iです。緊張をたっぷり含んだ**C7**が、明るく開いた**Fmaj7**へ解ける、音楽でもっとも強力な「家に着いた」感覚なのです。

C7の小節の4拍目には、Fの半音下**E**を置きます。EはFへ上がりたくてうずうずする音、いわゆる**導音**です。4拍目のEが次の1拍目Fへ<mark>半音上へ吸い上げられる</mark>と、耳は「ついに着いた」と感じます。ここ2日のアプローチノートが半音上（Db→C）からだったのに対し、今日は半音下（E→F）から引き上げる橋です。

家に着いたら、**Fmaj7のコードトーン**（R・3・5・7）でゆったり歩きます。とくに長7度**E**（7）は、Fmaj7をもっとも明るく彩る色です。<mark>同じEがC7では次のコードを狙う橋だったのに、Fmaj7では家を照らす色</mark>に変わるのが面白いところです。今日はこのC7→Fmaj7の解決1つに集中して、VからIへ着く感覚を手に刻みます。

まずFへ向かう導音、半音下の**E**と半音上の**Gb**を指板で見ましょう。

```json
{
  "id": "m2.w5.d3.approach_to_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to F (E below, Gb above) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **4弦.** 真ん中がFmaj7の着地点F（4弦1フレット）、半音下の導音E（4弦開放）と半音上のGb（4弦2フレット）が両側の橋です。

```json
{
  "id": "m2.w5.d3.approach_to_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to F (E below, Gb above) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

では、C7を1小節歩き、4拍目の導音**E**で次の小節の**Fmaj7**の家に着きます。4拍目のEが<mark>Fへ半音上へ解決するか</mark>を耳で確かめましょう。すべての例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_4",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7 resolution — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4弦.** 1小節目はC7（C-G-Bb）を歩き、4拍目の導音E（3弦7フレット）で、2小節目のFmaj7のFへ半音上へ解決します。

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_5",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7 resolution — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
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
昨日のGm7→C7のつなぎ目をBPM 72で一度歩き、アプローチノートの感覚を指先に呼び戻しましょう。

**10〜20分・頭のトレーニング**
下の準備例で、C7→Fmaj7の解決を**BPM 60**の遅いスイング4分音で押さえます。<mark>4拍目のEが半音上がって次の1拍目Fへ解決するか</mark>を音で確かめましょう。

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_slow_4",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4弦.** 4拍目のEから次の1拍目Fまで、半音上へ引き上げる解決を手と耳で合わせましょう。

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_slow_5",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
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
上の**解決**をBPM 80で2小節の循環として繰り返します。<mark>C7の緊張が4拍目のEを経てFmaj7へゆったり解けるか</mark>を観察しましょう。4弦でなじませてから5弦でも確認します。

**40〜50分・録音／フィードバック**
30秒録音して、VからIへ「家に着く」感じが聴こえるか確かめましょう。最後のFが安定して着地すれば成功です。

**今日の完了基準：** C7を1小節コードトーンで歩き、4拍目の導音EでFmaj7のルートへ半音上へ解決するV→Iのつなぎ目を、スイング4分音で4弦・5弦の両方でつなげる。

## ④ 팁 / 흔한 실수

- **家に着いても緊張が抜けません。** Fmaj7の1拍目Fを押さえるとき、少し力を抜いてゆったり着地しましょう。到着コードは休む地点なので、強く弾くより柔らかく落ち着かせます。
- **導音Eをコードトーンと混同します。** EはC7では橋（アプローチノート）、Fmaj7では長7度（コードトーン）と役割が違います。同じ位置でも、どのコードの上かによって心の中の呼び名を変えましょう。

着いた家、Fmaj7のコードトーンを一目で見ておきましょう。この4音が、ii-V-Iの旅がゆったり休む場所です。

```json
{
  "id": "m2.w5.d3.fmaj7_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 home — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** Fmaj7のR（4弦1フレット）・3（4弦5フレット）・5（3弦3フレット）・7（3弦7フレット）、到着の家です。

```json
{
  "id": "m2.w5.d3.fmaj7_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 home — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでさらに低いFも見当をつけられます。

- **もう一歩前へ進んだ自分をほめましょう。** 今日はVからIへ着く、もっとも強力な解決を手に入れました。これで3つのピース（コードトーン・ii→V・V→I）がすべて揃いました。明日はこれを1つにつないで、ii-V-Iのウォーキングを完成させます。
