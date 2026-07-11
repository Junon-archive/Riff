---
title: "ルート＋5度 — R-5シャッフル"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — ルートに5度を乗せる、R-5シャッフル

## ① 理論・解説

先週は開放**E**一つでシャッフル・ルートを転がしました。今週はそのルートに音を一つずつ重ねて<mark>跳ねるブギー・ベース</mark>へ育てていきます。今日新しく足す音は**5度**一つです。ルートの上に5度をそっと乗せるだけで、一音のパルスが急に「動く」ベースラインのように聞こえます。

**5度**はルート**E**から五番目の音、まさに**B**です。位置は**3弦2フレット** — 4弦開放Eのすぐ隣なので手が大きく動きません。今日はこの**B**一つだけ新しく覚えればいいです。<mark>ルートは下の弦、5度はその上の弦 — 二つの音がペアになります。</mark>

転がし方はこうです。拍をロング-ショートに分け、**前（長い音）にルートE**、**後ろ（短い音、「ア」）に5度B**を乗せます。すると拍ごとに**R-5**が交互に出ます。シャッフル・フィールは先週のまま — <mark>ロング-ショートが生きていれば5度は自然に跳ねます。</mark>

**速度は完全に忘れてください。** 今日の目標は速さではなく、ルートと5度がロング-ショートの上ではっきりペアで転がることです。<mark>4弦と3弦を行き来する弦移動だけ、とてもゆっくり整えれば十分です。</mark>運指は**5弦**でも同じで、低音**B**だけ親指で寝かせておけばいいです。この**R-5**のペアが今週のブギー・ウォークの最初の二段です。

## ② ビジュアル資料

今日は二つです。まず**ルート（E）と5度（B）の位置**を指板で並べて確認し、次にその二つをロング-ショートで転がす**R-5シャッフル**を覚えます。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まず**二つの音のマップ**です。下の青がルート**E**（4弦開放）、その上の青が**5度B**（3弦2フレット）です。<mark>5度はルートのすぐ隣・上にあります。</mark>

```json
{
  "id": "m1.w2.d1.root_fifth_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Root and 5th — E and B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下がルート**E**、上が**5度B**（3弦2フレット）です。二つの音がどれだけ近いか目に焼き付けます。

```json
{
  "id": "m1.w2.d1.root_fifth_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Root and 5th — E and B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は寝かせておき、ルートと5度だけに集中します。

今度は**R-5シャッフル**です。拍の前にルート**E**、後ろに5度**B** — ロング-ショートで転がすと二つの音が跳ねてペアで出ます。<mark>一音だったシャッフルが二音の動きへ広がります。</mark>

```json
{
  "id": "m1.w2.d1.r5_shuffle_4",
  "type": "tab",
  "meta": { "title": "R-5 shuffle (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70、シャッフル（ロング-ショート）。** 拍の前の音に開放**E**、後ろの音に**5度B**（3弦2フレット）。前を長く・後ろを短く転がします。

```json
{
  "id": "m1.w2.d1.r5_shuffle_5",
  "type": "tab",
  "meta": { "title": "R-5 shuffle (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆い、シャッフルの間ずっと漏れないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の**シャッフル・ルート**を開放EでBPM 60に転がしてロング-ショートを起こします。前の音が長く後ろが短いか確認して始めます。

**10〜20分 · 頭のトレーニング**
ルート**E**（4弦）と**5度B**（3弦2フレット）をとてもゆっくり交互に押さえます。<mark>弦を移してもロング-ショートがそのままか</mark>、その維持だけに集中します。

**20〜40分 · 実践**
**R-5シャッフル**を**BPM 70**で反復します。前にルート、後ろに5度 — 二つの音が均等にペアで転がるのが目標です。4弦で覚えたあと5弦でも同じ感覚を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**ルートと5度がはっきり交互に**聞こえるか聴いてみます。今日到達したBPMも記録します。

**今日の完了基準：** 拍の前にルートE、後ろに5度Bを乗せてR-5シャッフルをBPM 70でロング-ショートで、4弦・5弦のどちらでも転がせる。

## ④ ヒント・よくあるミス

- **5度が遅れて出る。** 3弦へ手を移す間に後ろの音が押しがちです。二つの弦をとてもゆっくり行き来して移動を先に整えます。
- **二つの音の大きさが違う。** ルートだけ大きく5度が小さくなりがちです。前後の強さを揃えます。
- **ロング-ショートがのっぺりする。** 音が一つ増えるとシャッフル・フィールを失いやすいです。前の音をしっかり長く守ります。
- **低音Bの油断（5弦）。** 弦を行き来する間ずっとBは親指で覆っておきます。手が忙しくなるとBが漏れやすいです。
