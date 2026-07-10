---
title: "T-Pの均一 — ドン-パチッを定規で測ったように"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — ドン-パチッを定規で測ったように、T-Pの均一

## ① 理論・解説

2週目の扉を開きます。先週**サム（ドン）**と**ポップ（パチッ）**を初めて交互に出したなら、今週はその二つを<mark>グルーヴ</mark>へと編みます。その最初の一歩が今日の**T-Pの均一**です。派手なラインはひとまず置いて、**ドン-パチッを定規で測ったように同じ大きさ・同じ間隔**で交互に出すこと一つだけに集中します。

今日はオクターブの手の形をしばらく置いて、いちばん楽な**二つの開放音**で練習します。サムは**開放E（4弦）**、ポップは**開放G（1弦）** — 左手はほとんど休みます。だから<mark>右手の二つの動作のバランス</mark>だけに丸ごと集中できます。親指で下を「ドン」、指で上を「パチッ」、まさにその往復です。

今日の本当の先生は**メトロノーム**です。ドンは**拍の上にぴったり**、パチッも**次の拍の上にぴったり**落ちなければなりません。どちらかでも走ったり遅れたりすればグルーヴは片足を引きます。<mark>ドン-パチッがメトロノームと一心同体</mark>になる感覚、それが今日のすべてです。**BPM 60**でゆっくり、二つの音が同じ大きさできっちり行き来するようにします。今週を貫く考えを思い出します — **スラップはドラム**です。サムはキック、ポップはスネア。ドラマーが拍を落とさないように、今日のドン-パチッもまず拍を外さないことが何より先です。

**5弦**なら開放音の位置は4弦とまったく同じです。低音Bは親指で覆っておけばよく、慣れたら同じ往復をもっと重い低音でも試せます。今日は速さへの欲を下ろして、**均一**一つだけを手に刻みます。

## ② ビジュアル資料

今日は左手をほとんど使いません — **開放E**をサムで、**開放G**をポップで交互に出します。まず二つの打点をフレットボードで確認し、4分音符で<mark>ドン-パチッをきっちり</mark>往復したあと8分音符で細かくつなぎます。各例は**4弦・5弦の二つのバージョン**です。

まずは**T-P打点マップ**です。青い点の下がサムで叩くE（4弦）、上がポップで弾くG（1弦）です。

```json
{
  "id": "m1.w2.d1.tp_open_spots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb E + pop G open spots — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 青い点の下がルートE（4弦、サム）、上がG（1弦、ポップ）です。二つの打点を目に焼き付けます。

```json
{
  "id": "m1.w2.d1.tp_open_spots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb E + pop G open spots — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは親指で覆って鳴らないようにしておきます。

**例1 — T-P 4分音符。** 1拍に1回ずつ交互に。譜面の**T**はサム、**P**はポップです。

```json
{
  "id": "m1.w2.d1.tp_quarter_4",
  "type": "tab",
  "meta": { "title": "T-P alternation quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** メトロノーム1拍にドン（T）1回、次の拍にパチッ（P）1回。二つの音の大きさが同じか耳で確認します。

```json
{
  "id": "m1.w2.d1.tp_quarter_5",
  "type": "tab",
  "meta": { "title": "T-P alternation quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。低音Bは親指で寝かせておきます。

**例2 — T-P 8分音符。** 1拍を二つに割って8回往復します。速くなっても<mark>ドン-パチッの大きさが崩れない</mark>ところまでだけ上げます。

```json
{
  "id": "m1.w2.d1.tp_eighth_4",
  "type": "tab",
  "meta": { "title": "T-P alternation eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 1拍にドン-パチッ一組。速くなっても二つの音がつぶれないように。

```json
{
  "id": "m1.w2.d1.tp_eighth_5",
  "type": "tab",
  "meta": { "title": "T-P alternation eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 4弦と音は同じです。ここでも低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
これまで覚えた**サム（開放E）**と**ポップ（開放G）**をBPM 60でそれぞれ数回解します。二つの音の手がどちらも目覚めているか確認します。

**10〜20分 · 頭のトレーニング**
T-Pをとてもゆっくり交互に。<mark>ドンとパチッがメトロノームの上にぴったり乗るか</mark>、そのタイミングにだけ集中します。

**20〜40分 · 実践**
例1（4分音符）を**BPM 60**で反復 → ドン-パチッが揃ったら例2（8分音符）へ進み**BPM 65**。大きさがずれたら4分音符に戻します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>ドンとパチッが同じ大きさで交互に鳴るか</mark>を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** 開放E（サム）と開放G（ポップ）のT-PをBPM 60〜65で同じ大きさで、メトロノームにきっちり乗せて交互に弾ける。

## ④ ヒント・よくあるミス

- **ポップだけ大きい。** ポップは弾ける音なので大きく聞こえがちです。サムを少し力強く、二つの音の大きさを合わせます。
- **パチッが遅れて来る。** ドンのあとパチッが押すとグルーヴが片足を引きます。遅い4分音符に戻って往復を整えます。
- **速さへの欲。** 60で大きさがずれるのに上げると全部崩れます。今週もバランスが先です。
- **低音Bの油断（5弦）。** 手が忙しくなるとBが漏れやすいです。親指は常にBを覆って通り過ぎましょう。
