---
title: "ダイナミクスとフィル — 表情のあるシャッフル"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — ダイナミクスとフィル、表情のあるシャッフル

## ① 理論・解説

昨日ターンアラウンドで12小節の結び目が手に入りました。<mark>1か月前は一音でも精一杯だったのに、いまは4小節をなめらかに戻します。</mark>今日はその上に**表情**をつけます。同じ音を押さえても、強弱と小さなフィル一つでシャッフルはずっと生き生きします。

一つ目は**ダイナミクス**です。すべての音を同じ強さで弾くとラインが平らになります。<mark>ルートは少し強く、通り過ぎるb7は少し弱く</mark> — この小さな差がロング-ショートの上にもう一つの結を足します。シャッフルの弾みが強弱の波と重なると、のっぺりしたラインが息をし始めます。

二つ目は**フィル**です。12小節の最後のB7小節、その**最後の拍**で小さな変奏を入れます。b7と6度を<mark>八つに刻んで弾ませて転がすと</mark>、曲がもう一度頭へ渡る扉が開きます。音は全部知っているブギーの階段の中にあるので、新しく覚えることはありません。

欲張りは禁物です。ダイナミクスもフィルも<mark>グルーヴを損なわない程度に</mark>ほんの少しです。強さを与えすぎると拍が揺れ、フィルを入れすぎるとシャッフルが散らかります。**5弦**なら低音Bを寝かせたまま同じ表情を入れます。今日の目標は派手さではなく、表情のあるシャッフルです。

## ② ビジュアル資料

今日は二つです。まず**フィルが置かれる位置**を指板で確認し、次にダイナミクスとフィルを乗せた**表情のあるターンアラウンド**を通過します。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まず**フィルが置かれるB7小節**です。最後の拍で<mark>b7と6度を八つに刻んで転がし</mark>、頭へ戻ります。

```json
{
  "id": "m1.w4.d2.fill_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 turnaround bar fill notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** B7ブギー（3弦2フレットルート）の四つの音です。このうち**b7**（2弦7フレット）と**6度**（6フレット）が最後の拍のフィルになります。

```json
{
  "id": "m1.w4.d2.fill_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 turnaround bar fill notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は親指で寝かせておきます。

今度はダイナミクスとフィルを乗せた**表情のあるターンアラウンド**です。ルートを少し強く、最後の小節の終わりで<mark>フィルで弾みながら</mark>渡ります。

```json
{
  "id": "m1.w4.d2.turnaround_fill_4",
  "type": "tab",
  "meta": { "title": "Turnaround with fill B7-A7-E7-B7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70、シャッフル。** B7-A7-E7-B7の上で、ルートは強く、b7は弱く。最後のB7の終わりの拍で**b7-6**を八つに転がして頭へ繋ぎます。

```json
{
  "id": "m1.w4.d2.turnaround_fill_5",
  "type": "tab",
  "meta": { "title": "Turnaround with fill B7-A7-E7-B7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日覚えた**ターンアラウンド**をBPM 60に転がして手をほぐします。4小節がなめらかに繋がるか確認します。

**10〜20分 · 頭のトレーニング**
同じターンアラウンドを**ルートだけ少し強く**弾いてみます。<mark>強さの差が音に結を作るか</mark>耳で聴いて確認します。

**20〜40分 · 実践**
**フィルを乗せたターンアラウンド**を**BPM 70**で反復します。最後の拍の八つのフィルが揺れないのが目標です。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**ダイナミクスとフィルが生きているか**聴いてみます。今日到達したBPMも記録します。

**今日の完了基準：** ターンアラウンドにダイナミクスと最後の拍のフィルを乗せ、BPM 70で4弦・5弦のどちらでも表情豊かに転がせる。

## ④ ヒント・よくあるミス

- **強さを与えすぎる。** ルートを強く弾こうとして拍が揺れやすいです。強さの差はほんの少しで十分です。
- **フィルで拍が遅れる。** 八つに刻むとき後ろへ滑りがちです。フィルの二音もロング-ショートの結の中に置きます。
- **フィルを入れすぎる。** 小節ごとにフィルを入れるとシャッフルが散らかります。フィルは最後のB7一か所だけにそっと置きます。
- **低音Bの油断（5弦）。** 表情に集中して使わない低音弦を見失いやすいです。Bは親指で覆っておきます。
