---
title: "パワーコード入門 — 指2本でつくるレンガ"
dayKey: "m1.w3.d1"
estMinutes: 30
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — 指2本でつくるレンガ

## ① 理論・説明

2週目までに単音リフを終えたので、今週はいよいよ<mark>「ロックの音」</mark>が出ます。パワーコードは名前こそ大げさですが、じつは<mark>指2本でつくるレンガ一枚</mark>です。ルート1音と、そのすぐ上の5度1音、たった2音を重ねて鳴らせばそれがパワーコード。明るくも暗くもなく、どんな曲にも乗る、ロックの心臓みたいな音です。コードだと身構える必要はまったくありません。

今日はフォームを2つ覚えます。1つは**6弦にルート**を置くフォーム、もう1つは5弦に置くフォームです。ルートを押さえ、そのすぐ下の弦の2フレット上にある5度を一緒に押さえれば完成。今日は開放弦から始めるので指もほとんど要りません。6弦開放がE5、5弦開放がA5 — もうパワーコードが2つ手に入りましたね。

パワーコードの本当の技術は、押さえることではなく<mark>使わない弦を消すこと</mark>です。2音だけをはっきり鳴らし、残りの4弦は静かでなければなりません。押さえる指の腹でとなりの弦をそっと覆い、右手の手刀で下の弦を鎮めます。左手は押さえない指を弦の上に軽く寝かせ、右手はパワーコードの2弦だけを狙って弾くと、雑音がぐっと減ります。最初は雑音が混ざっても大丈夫。ゆっくりのテンポで2音だけを残す感覚さえつかめば、〈You Really Got Me〉や〈Iron Man〉のようなリフが、このフォーム1つで手に入ります。レンガが一枚置かれれば、次の一枚はずっと楽に乗ります。

## ② ビジュアル資料

今日覚えるフォームは2つ。まず<mark>6弦ルート</mark>のE5、次に5弦ルートのA5。指の形は同じで、押さえる弦が1本ずれるだけです。

```json
{
  "id": "m1.w3.d1.e5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "E5 power chord (6th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ 青い2点（ルートR・5度）だけ鳴らし、X印の4弦は消します。指先を立ててとなりの弦をそっと覆って。

```json
{
  "id": "m1.w3.d1.a5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "A5 power chord (5th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ 今度はルートが5弦に移りました。6弦もX — 右手の手刀で6弦をしっかり鎮めて。

フォームを見たので実際に弾いてみましょう。E5を1拍に1つ、4回はっきりと。

```json
{
  "id": "m1.w3.d1.e5_quarters",
  "type": "tab",
  "meta": { "title": "E5 — four clean strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70。1拍に1回、2音が同時に鳴るか確認。ダウンピッキングで。

今度はA5で同じように。

```json
{
  "id": "m1.w3.d1.a5_quarters",
  "type": "tab",
  "meta": { "title": "A5 — four clean strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70。ルートが5弦に下りても2音だけはっきり。6弦が鳴っていないか確認。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
メトロノームをBPM 60に合わせ、2週目のパームミュートchugを6弦で軽く繰り返して手をほぐします。右手の手刀の位置からもう一度決めます。

**7〜17分・今日の技術**
E5・A5のフォームをごくゆっくり握っては離し、<mark>2音だけ</mark>がはっきり鳴るか確認します。残りの4弦が静かか、1弦ずつ点検します。

**17〜27分・応用**
例（E5を4回ストラム・A5を4回ストラム）をBPM 70でそれぞれ4回繰り返す → 雑音なくできたら1段上げます。2音が同時に鳴ることだけに集中します。

**27〜30分・チェック**
届いたBPMを書き留め、よければ30秒録音して余計な弦が漏れていないか聴いてみましょう。

**今日の完了基準：** パワーコード1つ（E5またはA5）を、雑音なく2音だけはっきり鳴らせる。

## ④ ヒント / よくあるミス

- **4弦まで鳴る。** 使わない弦が一緒に鳴ると、パワーコードがぼやけてつぶれます。使わない弦は必ず消します。
- **指を寝かせて押さえる。** 指先を立てて押さえると音もはっきりし、指の腹でとなりの弦を覆って消しやすくなります。
- **強く押さえすぎ。** パワーコードも音が出る程度だけ押さえます。強く握ると手が早く疲れるだけです。
- **速さを欲張る。** 今日はBPMの数字より2音のクリーンさがすべてです。速さは次の日々が引き受けます。
