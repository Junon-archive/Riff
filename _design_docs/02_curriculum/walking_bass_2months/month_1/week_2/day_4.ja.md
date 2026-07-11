---
title: "F7→Bb7 アルペジオ・ウォーキング — 2週目の完成物"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — F7→Bb7 アルペジオ・ウォーキング、今週を完成させる

## ① 理論・解説

2週目の最終日です。今週はずっと密度を一段ずつ上げてきました — ルートだけ（全音符） → ルート-5度（2分音符） → コードトーンの4分音符。今日はその最後の段を上り、**二つのコードにまたがって**アルペジオをつないで歩く**F7→Bb7 アルペジオ・ウォーキング**を今週の完成物にします。<mark>一つのコードで終わっていたアルペジオを、今度は次のコードへ渡して</mark>本物のウォーキングのように歩くのです。

完成ラインは二小節です。**1小節F7のR-3-5-b7**、そして**2小節Bb7のR-3-5-b7**を4分音符で踏みます。ルールは今週ずっと守ってきたそのまま — <mark>各小節の1拍目は必ずルートに着地</mark>します。面白いのは1小節の最後のb7（Eb）から2小節の頭拍Bbへ渡る瞬間です。最後の音が次のコードへ架ける**橋**の役目をします。これがウォーキングの核心の感覚です。

二つのコードの手の形は先週すべて覚えたものですが、今日Bb7は**3度Dを2弦開放（0フレット）**で押さえます。開放弦なので左手が楽で音もよく鳴ります。F7は4弦から出発し、Bb7は3弦から出発するので、**出発する弦が変わる地点**だけを先に手に馴染ませておけばいいです。

まずは1小節の主役、**F7コードトーン**をもう一度押さえておきます。

```json
{
  "id": "m1.w2.d4.f_shape_4",
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

▶ **4弦。** 1小節F7のR-3-5-b7。ルートF（4弦1フレット）から出発します。

```json
{
  "id": "m1.w2.d4.f_shape_5",
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

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

**5弦**でも二つのコードとも音と位置は4弦と同じです。低音Bは今日も覆っておき、**二つのコードを滑らかにつなぐこと**だけに集中します。この二小節をはっきり仕上げれば2週目が締めくくられます。

## ② ビジュアル資料

では今週の完成物を作ります。まず2小節の主役**Bb7コードトーン**を確認し、それから<mark>二つのコードをつなぐアルペジオ・ウォーキング</mark>を完成ラインとして回します。すべての例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w2.d4.bb_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 2小節Bb7のR-3-5-b7。3度Dは2弦開放（0フレット）で押さえます。

```json
{
  "id": "m1.w2.d4.bb_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

では今週の完成物、**F7→Bb7 アルペジオ・ウォーキング**です。二小節にまたがってR-3-5-b7を**BPM 80**のスウィング4分音符で踏みます。<mark>各小節の1拍目は必ずルートに着地</mark>します。

```json
{
  "id": "m1.w2.d4.arp_walk_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦。** 1小節F7、2小節Bb7のコードトーンをR-3-5-b7の順で踏みます。各小節の1拍目は必ずルートに着地。

```json
{
  "id": "m1.w2.d4.arp_walk_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦。** 音と位置は4弦と同じです。低音Bへ下りて、同じウォーキングをより重厚な低音域でも試してみます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のF7・Bb7アルペジオをBPM 76で一度ずつ歩きます。**二つのコードの感覚**を指先に呼び戻します。

**10〜20分 · 頭のトレーニング**
F7・Bb7のフレットボードを見ながら、各コードのRからb7まで指先で確認します。次に下の準備例で、**半小節ずつ長く**二つのコードをゆっくりつなぎます。

```json
{
  "id": "m1.w2.d4.arp_prep_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 walk prep (long notes) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、4弦。** 二つのコードのR-3-5-b7を半小節ずつ長くつなぎます。F7からBb7へ渡る橋を余裕をもって覚えます。

```json
{
  "id": "m1.w2.d4.arp_prep_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 walk prep (long notes) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

**20〜40分 · 実践（今週の完成物）**
上の**F7→Bb7 アルペジオ・ウォーキング**を**BPM 80**で反復します。二小節が<mark>一息で切れ目なく</mark>つながり、各小節の1拍目が正確なルートに落ちるのが目標です。4弦で覚えたあと、5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、F7からBb7へ渡る**橋（1小節b7→2小節ルート）**が自然か聴いてみます。今週到達したBPMも記録しておくと来週の出発点になります。

**今日の完了基準：** F7→Bb7 アルペジオ・ウォーキング（R-3-5-b7）をBPM 80のスウィング4分音符で、各小節の1拍目にルートを着地しながら、4弦・5弦どちらも切れ目なく歩ける。（2週目完成！）

## ④ ヒント・よくあるミス

- **コードが変わるとき切れる。** 1小節b7から2小節ルートへ渡るとき手が止まりがちです。最後のb7を鳴らしている間に左手を先にBbルートへ移しておきましょう。

```json
{
  "id": "m1.w2.d4.roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 二小節の着地点 — F（4弦1フレット）とBb（3弦1フレット）です。この二つの家さえ確かなら、残りはついてきます。

```json
{
  "id": "m1.w2.d4.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低いルートも掴めます。

- **Bb7の開放3度を逃す。** 2弦開放Dは左手を押さえないので、かえって忘れやすいです。右手のタイミングではっきり鳴らします。
- **後半ほど速くなる。** 完成なので嬉しくて2小節で急ぎがちです。八拍が定規で測ったようにそろっていることが先です。
- **一週間を自分でほめる。** 全音符から4分音符まで密度を着実に上げたのは大きな前進です。来週はこのアルペジオに経過音を加えて本物のウォーキングラインへ進みます。
</content>
