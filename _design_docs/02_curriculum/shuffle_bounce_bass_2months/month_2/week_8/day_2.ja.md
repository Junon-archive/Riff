---
title: "曲の構造 — メイン・バウンス＋メロディック変奏の2小節"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 曲の構造、メイン・バウンス＋メロディック変奏の2小節

## ① 理論・解説

昨日作った一小節の草案は手に馴染みましたか。<mark>今日はその一小節を**2小節の曲構造**に育てます。</mark>実際の曲は同じ一小節だけを無限に繰り返しません。骨格になる**メイン**を置き、その次の小節で少し変奏を与えて耳を掴みます。その押し引きの二小節が曲の最小単位です。一小節が「レンガ」なら、二小節はそのレンガで積んだ小さな「部屋」です。

1小節は**メイン・バウンス**です。昨日のグルーヴそのまま、ルート＋ゴーストに5度・b7を一度ずつ乗せた馴染みの形です。2小節は**メロディック変奏**です。<mark>同じルートの上で5度とb7をより頻繁に乗せ、ラインが歌うように動きます。</mark>メインが「場を定める」小節なら、変奏は「少し前へ進む」小節です。

カギは二小節が**一つの流れ**としてつながることです。メインから変奏へ、変奏からまたメインへ滑らかに戻ってこそ、繰り返しが退屈になりません。<mark>変奏小節で音を増やしても、バウンスの後ろに寝る感じとゴーストの小さなチャッはそのまま守ります。</mark>色を足すことでグルーヴの性格が変わってはいけません。二小節が自然にかみ合ってこそ、繰り返しても退屈しない本物の曲になります。

**BPM 73**で二小節を一かたまりで回します。2か月前は一拍も精一杯だったのに、今は自分で小さな曲を組んでいます。この2小節が今週の卒業曲の骨格です。次のトラック**スラップ・ウォーキング・ベース**では、この構造の上にもっと広いラインを乗せることになります。

## ② ビジュアル資料

今日のビジュアル資料は**メイン・バウンス＋メロディック変奏**の2小節です。4弦・5弦で並べて見ます。<mark>1小節は場を定め、2小節は歌うように動きます。</mark>

1小節は昨日のメインそのまま、2小節は5度・b7をさらに乗せた変奏です。<mark>二小節が一つの曲としてつながります。</mark>

```json
{
  "id": "m2.w8.d2.two_bar_song_4",
  "type": "tab",
  "meta": { "title": "Two-bar bounce tune (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 73, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 73、スウィング16・レイバック。** 1小節のメインは昨日そのまま、2小節の変奏は**5度**・**b7**をより頻繁に乗せてラインが歌います。

```json
{
  "id": "m2.w8.d2.two_bar_song_5",
  "type": "tab",
  "meta": { "title": "Two-bar bounce tune (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 73, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。使わない低音**B**は親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のメイン一小節をBPM 65で軽く復習します。ルートとゴースト、5度・b7の位置を手が覚えているか短く確認します。

**10〜20分 · 頭のトレーニング**
二小節をとてもゆっくりつなげます。<mark>メインから変奏へ移るときバウンスの性格が途切れていないか</mark>耳で確認します。

**20〜40分 · 実践（2小節の曲）**
**メイン・バウンス＋メロディック変奏**の2小節を**BPM 73**で反復します。変奏からまたメインへ滑らかに戻る継ぎ目が今日の目標です。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音（2小節グルーヴ）**
2小節の曲を数テイク録音します。昨日の一小節の草案と並べて聴き、曲が育つのを確認します。

**今日の完了基準：** メイン・バウンスとメロディック変奏を一つの流れでつないで2小節の曲をBPM 73で回せて、4弦・5弦のどちらも録音として残せる。

## ④ ヒント・よくあるミス

- **変奏が別の曲のように聞こえる。** 変奏はメインの兄弟です。音だけ増やしてバウンスの性格はそのまま守ります。
- **継ぎ目で拍が跳ねる。** 変奏の終わりとメインの始まりがかみ合うかとてもゆっくり合わせます。
- **変奏でゴーストを捨てる。** 色を乗せてもゴーストの小さなチャッは残してこそグルーヴが生きます。
- **2小節を別々に練習する。** 常に二小節をつないで一かたまりで回します。
- **低音Bの油断（5弦）。** 使わない低音Bは親指で覆っておきます。
