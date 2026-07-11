---
title: "ii-V-Iウォーキングの完成 — Gm7-C7-Fmaj7、家への道"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — ii-V-Iウォーキングの完成、Gm7-C7-Fmaj7という家への道

## ① 이론/설명

いよいよ5週目の最終日、ii-V-Iを1つに完成させる日です。ここ3日で用意した3つのピース — 3つのコードのトーン（D1）、ii→Vのつなぎ目（D2）、V→Iの解決（D3）を<mark>3小節のウォーキング1つにつなぎ</mark>合わせます。**Gm7 → C7 → Fmaj7**、ジャズの家への道を最初から最後まで歩きます。

完成物の構造はシンプルです。**1小節に1コード**、1・2・3拍目はそのコードのトーンで歩き、4拍目は次のコードへの橋です。1小節目Gm7の4拍目はCを狙う**Db**、2小節目C7の4拍目はFを狙う**E**です。そして3小節目で<mark>家Fmaj7に到着</mark>してゆったり休みます。2つの橋が3つのコードを1つの歩みに縫い合わせます。

BPM 85、**スイング4分音**で歩きます。各小節の1拍目はルートにきちんと着地し、4拍目は次のコードへ滑らかに渡ります。<mark>1拍目は着地、4拍目は橋</mark> — この1か月半ずっと身につけてきた原理が、今日ii-V-Iというジャズの核心の進行の上で結実します。ゆっくり始め、体になじんだら少しずつ速度を上げましょう。

まず3小節の歩みの道標 — 3つのルート（**G・C・F**）と2つの橋（**Db・E**）を指板で見ましょう。

```json
{
  "id": "m2.w5.d4.ii_v_i_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I walk landmarks (roots and bridges) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** 3つのルートG（4弦3フレット）・C（3弦3フレット）・F（4弦1フレット）と、2つの橋Db（3弦4フレット）・E（3弦7フレット）です。

```json
{
  "id": "m2.w5.d4.ii_v_i_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I walk landmarks (roots and bridges) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでさらに低いルートも見当をつけられます。

## ② 시각 자료

いよいよ今週の完成物、3小節の**ii-V-Iウォーキング**です。Gm7-C7-Fmaj7を**2つの橋**でつなぎ、<mark>家へ帰るように一気に</mark>歩きます。すべての例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_4",
  "type": "tab",
  "meta": { "title": "ii-V-I walk Gm7-C7-Fmaj7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 85, 4弦.** Gm7（1小節目）→C7（2小節目）→Fmaj7（3小節目）です。1小節目4拍目のDbはC接近、2小節目4拍目のEはF接近です。V→Iで家に到着します。

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_5",
  "type": "tab",
  "meta": { "title": "ii-V-I walk Gm7-C7-Fmaj7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 85, 5弦.** 音と位置は4弦と同じです。低音Bでさらに重たい低域も重ねられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日のC7→Fmaj7の解決をBPM 72で一度歩き、2つの橋（Db・E）の感覚を指先に呼び戻しましょう。

**10〜20分・頭のトレーニング**
下の準備例で3小節のウォーキングを**BPM 65**の遅いスイング4分音で押さえ、コードチェンジをゆっくり合わせます。<mark>2つの橋が次の小節のルートへ自然につながるか</mark>を確かめましょう。

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_slow_4",
  "type": "tab",
  "meta": { "title": "ii-V-I walk, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 65, 4弦.** 3小節をゆっくり。1小節目4拍目のDb→2小節目C、2小節目4拍目のE→3小節目Fの2つのつなぎ目をきちんと合わせましょう。

```json
{
  "id": "m2.w5.d4.ii_v_i_walk_slow_5",
  "type": "tab",
  "meta": { "title": "ii-V-I walk, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 65, 5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**ii-V-Iウォーキング**をBPM 85で3小節の循環として繰り返します。<mark>3つのコードが2つの橋で途切れなくつながるか</mark>を観察しましょう。4弦でなじませてから5弦でも同じ流れを確認します。

**40〜50分・録音／卒業**
いよいよ録音です。ラクな速度でii-V-Iの3小節を2〜3周止まらずに録音し、その中でいちばん良いテイクを自分の最初のii-V-Iウォーキングとして残しましょう。4弦・5弦の両方を残せば5週目の完成です。

**今日の完了基準：** Gm7-C7-Fmaj7のii-V-Iウォーキング3小節を、2つのアプローチノート（Db・E）でつなぎ、スイング4分音で4弦・5弦の両方で家へ帰るように弾き切り・録音できる。 — 週間の成果物：自分の最初のii-V-Iウォーキングベースの録音。（5週目の完成！）

## ④ 팁 / 흔한 실수

- **2小節目のC7で手がもつれます。** C7の5度G（4弦3フレット）でいったん低い弦へ下り、b7 Bb（3弦1フレット）へ戻ります。この手の移動を遅い速度であらかじめ身につけておくと、実践がラクになります。
- **橋のあとの着地が急ぎます。** 4拍目の橋（Db・E）から、うれしくなって次の1拍目を早く取りがちです。どちらの橋も半音1つですから、急がず拍にぴったり着地しましょう。

今週の歩みの主役、2つの橋DbとEを一目で見ておきましょう。この2つのアプローチノートが、3つのコードを1つにつないだ鍵です。

```json
{
  "id": "m2.w5.d4.two_bridges_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The two bridges (Db, E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4弦.** 1小節目Gm7の橋Db（3弦4フレット）と2小節目C7の橋E（3弦7フレット）、2つのアプローチノートです。

```json
{
  "id": "m2.w5.d4.two_bridges_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The two bridges (Db, E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 7, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

- **5週目の自分を大きくほめましょう。** 3つのコードのトーンから始めて、アプローチノートでつなぎ、いまii-V-Iというジャズの核心の進行をスイング4分音で弾き切り、録音まで残しました。本当に大きな一歩です。来週からはこのii-V-Iをもっと多くの調と長い進行の上で歩き、本物のジャズ・ウォーキングへと広げていきます。
