---
title: "ウォーキング初日 — F7の安全な石（コードトーン）"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — F7のコードトーン、踏んでもいい四つの石

## ① 理論・解説

いよいよウォーキングベースの第一歩を踏み出す日です。ウォーキングベースが難しく感じたなら、たった一文だけ覚えてください — **ウォーキングはコードの上を歩くことです。** 歩くときにどこでも踏むと足がはまりますが、**踏んでもいい安全な石**だけを選んで踏めば、どこへでも楽に渡れます。ベースでその安全な石が、まさに**コードトーン（R・3・5・b7）**です。今日はこの週の舞台である**Fブルース**の最初のコード、**F7**のコードトーンを手に馴染ませます。

F7は四つの音でできています — **ルートF、3度A、5度C、b7度Eb**。この四つがF7の上でいつ踏んでもはまらない石です。<mark>ルートはそのコードの名前であり家です。</mark>F7なら**F**が家で、残りの3・5・b7は家の周りに置かれた踏み石だと考えると楽です。特に**3度A**はそのコードがメジャーかマイナーか性格を決める音なので、ウォーキングで最もよく着地する目標になります。

フレットボードで位置を見ましょう。4弦を基準に**ルートFは4弦1フレット**、**3度Aは4弦5フレット**、**5度Cは3弦3フレット**、**b7度Ebは3弦6フレット**です。最初は四つの場所を一度に覚えようとせず、<mark>ルートFから指先で押さえて確認</mark>し、一つずつ増やしていきます。右手は人差し指・中指で交互に弾く**ツーフィンガー**で、一音一音はっきり鳴らします。

まずは家である**ルートF**の一か所からしっかり押さえておきます。

```json
{
  "id": "m1.w1.d1.f7_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root on the E string — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** ルートFは4弦1フレット。すべてのコードトーンの出発点であり家です。

```json
{
  "id": "m1.w1.d1.f7_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root on the E string — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音B弦が一本増えるだけです。

**5弦**を使うなら運指は4弦とまったく同じです。弦番号も4弦(E)〜1弦(G)がそのままで、いちばん下に低音B弦が一本増えるだけです。慣れたらその低音Bでウォーキングをより低い音域まで広げられますが、今日は**F7の四つのコードトーン位置**を目と手に刻むことだけに集中します。この四つの石が、この週ずっと私たちが踏んで歩く道になるからです。

## ② ビジュアル資料

今日は**F7のコードトーン**をフレットボードと譜面の両方で目に焼き付けます。まずフレットボードで<mark>四つの安全な石の位置</mark>を確認し、次にその石を4分音符で一つずつ踏んでいきます。すべての例は**4弦・5弦の二つのバージョン**で並べました。

まずは**F7コードトーンマップ**です。青い点がコードトーン — **ルートF**を出発点に、3度・5度・b7度がどこに置かれるか一目で捉えます。

```json
{
  "id": "m1.w1.d1.f7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** ルートF（4弦1フレット）から出発して3度A・5度C・b7 Ebまで、四つの場所を目でなぞります。

```json
{
  "id": "m1.w1.d1.f7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** コードトーンの位置は4弦と同じです。いちばん下の低音Bは今は使わず手で覆っておきます。

次は**ルートと3度**だけを行き来する例です。<mark>3度（緑の音）はウォーキングが最もよく着地する目標点</mark>なので、まず耳に馴染ませておきます。

```json
{
  "id": "m1.w1.d1.f7_r3_4",
  "type": "tab",
  "meta": { "title": "F7 root and third — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** ルートFと3度Aを交互に踏みながら、二つの音の距離を手に馴染ませます。

```json
{
  "id": "m1.w1.d1.f7_r3_5",
  "type": "tab",
  "meta": { "title": "F7 root and third — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 音と位置は4弦と同じです。低音Bは鳴らないよう覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
右手の人差し指・中指で開放弦を交互に弾いて手をほぐします。まだ音程より**そろったツーフィンガー**が先です。

**10〜20分 · 頭のトレーニング**
F7コードトーンマップを見ながら**ルートF → 3度A → 5度C → b7 Eb**の順に位置を指先で押さえて確認します。<mark>目を閉じても四つの場所を見つけられるまで</mark>ゆっくりと。

**20〜40分 · 実践（今日の完成物）**
下のF7アルペジオを**BPM 70**で反復します。1拍に1音ずつ、R-3-5-b7をはっきり踏んで上がっていきます。

```json
{
  "id": "m1.w1.d1.f7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** F7の四つのコードトーンを下から上へはっきりと。この四音がF7の上の「安全な石」です。

```json
{
  "id": "m1.w1.d1.f7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 音と位置は4弦と同じです。低音Bは覆っておき、慣れたらより低い音域へ広げてみます。

**40〜50分 · 録音・フィードバック**
30秒録音して**四つの音が同じ大きさでそろって**鳴るか聴いてみます。今日押さえた位置が正確だったかも確認します。

**今日の完了基準：** F7のコードトーンR-3-5-b7をフレットボードで見つけ、BPM 70で4分音符のアルペジオとしてはっきり押さえて上がっていける。

## ④ ヒント・よくあるミス

- **b7を落とす。** 慣れたR・3・5だけ押さえてb7 Ebをつい忘れます。b7があってこそ「F7」のドミナントの色が生きるので、四つ目の石を必ず拾いましょう。

```json
{
  "id": "m1.w1.d1.f7_b7_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 flat-7 (Eb) landmark — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** b7 Ebは3弦6フレット。R・3・5にこの一音を足してこそF7が完成します。

```json
{
  "id": "m1.w1.d1.f7_b7_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 flat-7 (Eb) landmark — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りて別のオクターブのb7も探せます。

- **音を短く切る。** 4分音符は次の拍まで十分に鳴らしてこそ歩く感じが出ます。指を急いで離さないでください。
- **位置だけ覚えて音を聴かない。** フレット番号よりその音がどう聞こえるかが大切です。押さえるたびに音を耳に入れましょう。
- **低音Bの油断（5弦）。** コードトーンに集中してBに触れると低音がうなって漏れます。使わないBは常に覆っておきましょう。
