---
title: "シャッフルルートパルス — メトロノームの前で均一に"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — シャッフルルートパルスをメトロノームに

## ① 理論・解説

昨日作った**ロング-ショート（ダ-ガ）**の感覚を、今日は**メトロノームの前**に立たせます。一人で転がすとそれらしくても、クリックに合わせて8分を**シャッフルで**続けると揺れやすいです。今日の目標は<mark>シャッフルルートパルスを最初から最後まで均一に</mark>転がすことです。

**シャッフルルートパルス**とは、**開放E**一つの音を8分音符で打ち続けつつ**ロング-ショートで転がす**反復パターンです。小節ごとに八つの8分が「ダ-ガ ダ-ガ」と続きます。和音も移動もありません — ただ**一つの音のグルーヴ**、その転がりの均一さがすべてです。<mark>単純なほどシャッフルの本当の実力が表れます。</mark>

メトロノームはふつう**4分音符（1・2・3・4）**にクリックを置きます。クリックは各拍の**前の音（長い音）**にぴったり落ち、短い後ろの音はクリックとクリックの間、**三角形の三つ目**にそっと乗ります。<mark>クリックに前の音を正確に合わせれば</mark>、後ろの音は自然に居場所を見つけます。ビジュアル資料には相変わらず**feel: swing8**が付いています。

今日は**BPM 60**で始めて**BPM 70**までだけゆっくり上げてみます。無理に速くする必要はありません — **ロング-ショートが揺れない一番速い速度**が今のあなたの速度です。メトロノームは冷たい審判ではなく**頼れる仲間**です。クリックに前の音を合わせていくうちに、揺れていたロング-ショートが自然に落ち着きます。**続けることがそのまま正確さになる**瞬間を今日はじめて味わってみます。右手ツーフィンガーで開放Eを均等に、クリックがあなたの手の中で跳ねるようにします。

## ② ビジュアル資料

今日は同じシャッフルルートパルスを**二つの速度**で転がします。まず**BPM 60**でロング-ショートを安定させ、次に**BPM 70**へ少し上げてクリックに乗せます。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まずは**準備 — BPM 60**。開放Eを8分で、ロング-ショートでゆっくり転がしてクリックと前の音を合わせます。

```json
{
  "id": "m1.w1.d3.shuffle_pulse_prep_4",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse — prep (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 2, "notes": [
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

▶ **BPM 60、4弦。** 八つの8分を**ロング-ショート**で。各拍の**前の音**をクリックにぴったり合わせ、後ろの音は少し遅れて。

```json
{
  "id": "m1.w1.d3.shuffle_pulse_prep_5",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse — prep (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 2, "notes": [
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

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は寝かせておき、ロング-ショートの転がりだけに集中します。

今度は**BPM 70**へ。同じパターンを少し速く — <mark>ロング-ショートが揺れない線までだけ</mark>上げます。

```json
{
  "id": "m1.w1.d3.shuffle_pulse_metronome_4",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse — metronome (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 2, "notes": [
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

▶ **BPM 70、4弦。** 速度が上がっても**前は長く、後ろは短く**はそのまま。開放**E**の転がりが均一か耳で確認します。

```json
{
  "id": "m1.w1.d3.shuffle_pulse_metronome_5",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse — metronome (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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
    ]},
    { "measure": 2, "notes": [
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

▶ **5弦。** 音と位置は4弦と同じです。**B**はずっと覆い、速くなっても低音が漏れないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の**スイング8分**を開放EでBPM 60に転がします。ロング-ショートが生きているか確認して、クリックを入れます。

**10〜20分 · 頭のトレーニング**
メトロノームBPM 60に合わせて**前の音だけ**クリックに正確に。<mark>クリックと前の音が一つに合わさるか</mark>、その整列だけに集中します。

**20〜40分 · 実践**
シャッフルルートパルスを**BPM 60 → 70**へ上げて反復します。ロング-ショートが揺れたら即座に速度を下げます — **均一さが先**です。4弦で覚えたあと5弦でも同じ感覚を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**シャッフルが最初から最後まで均一か**聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** 開放Eのシャッフルルートパルスをメトロノームに合わせ、ロング-ショートが揺れず均一に、4弦・5弦のどちらでも転がせる。

## ④ ヒント・よくあるミス

- **速くなると均等になる。** 速度が上がるとロング-ショートがストレートに潰れます。揺れた瞬間にBPMを下げます。
- **クリックを外す。** 前の音がクリックから押すと全体が押します。まず前の音だけクリックにぴったり付ける練習をします。
- **手が硬い。** 強く打とうとして転がりが死にます。力を抜いて前の音を少し長く乗せます。
- **低音Bの油断（5弦）。** 転がす間ずっとBは親指で覆っておきます。手が忙しくなるとBが漏れやすいです。
