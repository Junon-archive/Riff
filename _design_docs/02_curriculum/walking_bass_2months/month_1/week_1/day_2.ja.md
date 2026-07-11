---
title: "Bb7・C7のコードトーン — 同じ形、違う家"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — Bb7・C7のコードトーン、手の形を移して掴む

## ① 理論・解説

昨日はF7のコードトーンを手に馴染ませましたね。今日は同じ原理を**Bb7**と**C7**へ移します。Fブルースはこの三つのコード — **F7・Bb7・C7** — で回るので、今日この二つを足せば、この週の舞台の石がすべて手に入ります。良い知らせは、<mark>コードトーンの公式は昨日と同じ — R・3・5・b7。</mark>家（ルート）が変わるだけで、踏み方はそのままです。一つのコードで覚えた手の形が他のコードでもそのまま通じるので、実は今日新しく学ぶのは手をどこへ移すかだけです。

**Bb7**は**Bb・D・F・Ab**の四音です。フレットボードで**ルートBbは3弦1フレット**、**3度Dは3弦5フレット**、**5度Fは2弦3フレット**、**b7度Abは2弦6フレット**。昨日のF7の手の形をまるごと一弦上へ移した形なので、<mark>指と指の間隔はそのまま</mark>位置だけ動かせば大丈夫です。

**C7**は**C・E・G・Bb**の四音です。**ルートCは3弦3フレット**、**3度Eは3弦7フレット**、**5度Gは2弦5フレット**、**b7度Bbは2弦8フレット**。Bb7とまったく同じ手の形を二フレット上へ押せば、そのままC7になります。こうして**一つの形**を移して三つのコードをすべて掴む感覚が、この先ウォーキングをずっと楽にしてくれます。

まずは**Bb7の家（ルートBb）**から押さえてみましょう。

```json
{
  "id": "m1.w1.d2.bb7_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root on the A string — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** ルートBbは3弦1フレット。昨日のF7より一弦上、一つ横へ移った家です。

```json
{
  "id": "m1.w1.d2.bb7_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root on the A string — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音B弦が一本増えるだけです。

**5弦**を使うならこれらの位置も4弦とまったく同じです。ただ5弦は低音B弦のおかげで、あとでBb・Cのような低音ルートをより下のオクターブでも掴めます。今日はまず**4弦基準の位置**を目に馴染ませることに集中します。

## ② ビジュアル資料

では**Bb7とC7のコードトーン**をフレットボードと譜面で確認します。まず二つのコードのマップを並べて見て、<mark>同じ手の形が位置だけ変わること</mark>を目で確認し、それからBb7アルペジオで音を出してみます。すべての例は**4弦・5弦の二つのバージョン**です。

まずは**Bb7コードトーンマップ**です。青い点四つがBb・D・F・Abです。

```json
{
  "id": "m1.w1.d2.bb7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** ルートBb（3弦1フレット）から3度D・5度F・b7 Abまで、昨日のF7と同じ形が一弦上へ上がりました。

```json
{
  "id": "m1.w1.d2.bb7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは手で覆っておきます。

次は**C7コードトーンマップ**。青い点四つがC・E・G・Bbです。

```json
{
  "id": "m1.w1.d2.c7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** ルートC（3弦3フレット）から3度E・5度G・b7 Bbまで。Bb7の形を二フレット上へ押した場所です。

```json
{
  "id": "m1.w1.d2.c7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

今度は**Bb7アルペジオ**で音を確認します。R-3-5-b7を1拍ずつはっきり踏んで上がります。

```json
{
  "id": "m1.w1.d2.bb7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** Bb7の四つのコードトーンを下から上へ。F7と同じ歩き方、位置だけ違います。

```json
{
  "id": "m1.w1.d2.bb7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 音と位置は4弦と同じです。低音Bは覆っておき、慣れたらより低い音域へ広げてみます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日覚えたF7アルペジオをBPM 70で一度ほぐします。**昨日の感覚**を指先に呼び戻します。

**10〜20分 · 頭のトレーニング**
Bb7・C7のマップを見ながら、二つのコードの**ルート → 3度 → 5度 → b7**の位置を指先で確認します。<mark>同じ形が移るだけだということ</mark>を手で感じてみます。

**20〜40分 · 実践（今日の完成物）**
下のC7アルペジオを**BPM 70**で反復し、続けてBb7アルペジオと交互に弾いてみます。今日の目標は、**F7・Bb7・C7の三つのコードのコードトーン**をすべて手に入れることです。

```json
{
  "id": "m1.w1.d2.c7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "C7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** C7の四つのコードトーンを下から上へはっきりと。これで三つのコードの石がすべて揃いました。

```json
{
  "id": "m1.w1.d2.c7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "C7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 音と位置は4弦と同じです。低音Bは覆っておき、慣れたらより低く広げてみます。

**40〜50分 · 録音・フィードバック**
30秒録音して、Bb7とC7のアルペジオが**すべてそろった大きさで**鳴るか聴いてみます。迷うコードがあれば、そのマップをもう一度確認します。

**今日の完了基準：** F7・Bb7・C7の三つのコードのコードトーン（R-3-5-b7）をフレットボードで見つけ、BPM 70で各コードのアルペジオをはっきり弾ける。

## ④ ヒント・よくあるミス

- **三つのコードを混同する。** Bb7とC7は手の形が同じなので、位置を勘違いしやすいです。ルートがどこかをまず確認すれば、残りの三音は自然についてきます。

```json
{
  "id": "m1.w1.d2.thirds_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 & C7 thirds (landing targets) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 5, "label": "Bb7-3", "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "label": "C7-3", "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦。** 緑の二音が各コードの3度 — Bb7のD（3弦5フレット）、C7のE（3弦7フレット）です。この着地音から覚えておきます。

```json
{
  "id": "m1.w1.d2.thirds_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 & C7 thirds (landing targets) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 5, "label": "Bb7-3", "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "label": "C7-3", "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低いオクターブも試せます。

- **b7をまた落とす。** 昨日と同じく、b7がドミナントの色の核心です。Bb7のAb、C7のBbを忘れないでください。
- **形だけ信じて音を聴かない。** 形が同じでもコードごとに響きが違います。毎回音を耳に入れましょう。
- **低音Bの油断（5弦）。** 位置を移すときにBに触れると低音が漏れます。使わないBは常に覆っておきましょう。
