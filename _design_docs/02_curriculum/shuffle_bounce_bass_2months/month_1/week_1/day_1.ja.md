---
title: "三角形を感じる — 1拍を三つに割る"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — トリプレットグリッド、1拍を三つに

## ① 理論・解説

シャッフル＆バウンストラックの初日です。今週はまだブギも、派手なコード移動もありません。代わりに**拍を三角形で感じること**から始めます。これまで8分音符を**均等な半分**に割ってきたなら、今日は1拍を**三つ**に分けてみます。<mark>1拍を三つで感じるこの感覚が、今週すべてのグルーヴの根です。</mark>

1拍（**4分音符**）を三つに均等に割ったものを**三連符**、つまり**トリプレット**と呼びます。口では**「1-ト-プ-リッ」**のように1拍に三つの音を乗せて数えます。馬が駆ける蹄の音**「ダ-ガ-ダッ」**を思い浮かべると簡単です。こうして三つずつ転がる格子がまさに<mark>今週ずっと使うトリプレットグリッド</mark>です。

その上に乗せる音はたった一つ、**Eルート**です。今週の舞台は**キーE**、4弦の**開放（0フレット）E**が基準音になります。左手は押さえるものもなく開放弦一つなので、今日はひたすら**右手ツーフィンガーのタイミング**だけに集中すればいいです。<mark>人差し指・中指を交互に</mark>同じ大きさで三つずつ転がします。

まだスイングではありません。今日は三つの音を**同じ大きさ・同じ間隔**できっちり転がすのがすべてです。**速さは完全に忘れてください。**三つが均等に転がれば、明日はこの三つのうち真ん中を抜いて、あの有名な**ロング-ショートのシャッフル**に変えます。焦る必要はありません — **今日この三角形一つだけしっかり感じておけば**、今週の残り三日はその上に自然に積み上がります。トリプレットはシャッフル・ブギ・バウンス、この二か月全体を支える**いちばん土台のリズム感覚**なのです。今日はその三角形を体に刻む日です。

## ② ビジュアル資料

まず今日の基準音**Eルート**をフレットボードで確認し、1拍を**きっちり四回**打つ基本のパルスを感じてから、その1拍を**三つに割ったトリプレットグリッド**を転がします。各例は<mark>4弦・5弦の二つのバージョン</mark>なので、どんなベースでもそのまま付いてこられます。

まずは**Eルートの位置**から。4弦の開放（0フレット）が今週ずっと私たちの家です。

```json
{
  "id": "m1.w1.d1.e_root_position_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E root position — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 青い点がルート**E**（4弦開放）です。左手は押さえません — この位置を目に焼き付けます。

```json
{
  "id": "m1.w1.d1.e_root_position_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E root position — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。いちばん下の低音**B**は今は寝かせておき、Eルートだけに集中します。

今度は**基本のパルス**。1拍を4分音符できっちり四回、メトロノームのように均一に打ちます。

```json
{
  "id": "m1.w1.d1.quarter_pulse_4",
  "type": "tab",
  "meta": { "title": "Quarter-note beat (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 開放**E**を4分音符で「1・2・3・4」ときっちり。これが三つに割る**1拍**です。

```json
{
  "id": "m1.w1.d1.quarter_pulse_5",
  "type": "tab",
  "meta": { "title": "Quarter-note beat (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**が漏れないよう右手の側面で軽く覆っておきます。

いよいよ**トリプレットグリッド**。さっきのその1拍を**三つ**に割って、<mark>三つの音を全部同じ大きさで</mark>開放Eを三回ずつ乗せます。

```json
{
  "id": "m1.w1.d1.triplet_grid_4",
  "type": "tab",
  "meta": { "title": "Triplet grid (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** **「1-ト-プ-リッ」**と数えて1拍に三回ずつ。まだ転がさず均等にだけ乗せます。

```json
{
  "id": "m1.w1.d1.triplet_grid_5",
  "type": "tab",
  "meta": { "title": "Triplet grid (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。三つずつ数える感覚を低音が揺らさないよう**B**はずっと覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
開放**E**を4分音符でBPM 60に合わせてきっちり。右手の人差し指・中指が**同じ大きさ**で交互に出るか確認します。

**10〜20分 · 頭のトレーニング**
口で**「1-ト-プ-リッ」**と声に出して数え、トリプレットグリッドをとてもゆっくり反復。<mark>三つの音の大きさが全部同じか</mark>、その均等さだけに集中します。

**20〜40分 · 実践**
トリプレットグリッドを**BPM 60**で反復します。1拍に開放E三回 — 速くしようとせず、**均等に**転がすことだけに気を配ります。4弦で覚えたあと5弦でも同じ感覚を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**三つの音が均等に**聞こえるか聴いてみます。1拍が三つにくっきり割れれば今日の目標達成です。

**今日の完了基準：** 「1-ト-プ-リッ」と数えながら開放Eを1拍に三回ずつ、三つの音が均等に、4弦・5弦のどちらでも転がせる。

## ④ ヒント・よくあるミス

- **四つで数えてしまう。** 16分音符のように四つで数えるとトリプレットではありません。「1-ト-プ-リッ」の三つだけで数えます。
- **真ん中が弱い。** 三つの音のうち真ん中が小さくなりがちです。三つの音を同じ大きさに合わせます。
- **もう転がしている。** 今日はスイングではなく均等な三つです。ロング-ショートは明日学びます。
- **速さへの欲。** 60で三つが均等でないのに上げると全部崩れます。今週ずっと、バランスが先です。
