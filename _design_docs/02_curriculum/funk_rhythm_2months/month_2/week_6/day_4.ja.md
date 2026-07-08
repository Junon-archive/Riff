---
title: "シングルノート・リフ完成 — ベースと噛み合う"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — 単音ラインがベースと一体になる

## ① 理論・説明

今週の決勝線です。今日は1〜2弦のシングルノート・リフをバッキングトラックの上で完成させ、**ベースと噛み合うライン**を作ります。

シングルノート・ファンクの本当の力は、ベースとの関係から生まれます。方法は大きく2つ。1つは**ユニゾン** — ベースと同じラインを重ねて弾き、そのラインを2倍に厚く硬くする。もう1つは**コール&レスポンス** — ベースが1小節弾いたら、自分のギターがその間や後ろを埋めて、会話のように受け答えする。今日はバッキングのベースをよく聴いて、自分のラインがその上にぴたっと乗る場所を探します。

ここに昨日のゴーストを混ぜると、数音でもぎっしりしたリフになります。ラインのはっきりした音＋間を埋めるゴースト＋ベースとの噛み合い — この3つが重なると、ギター1台がリズムセクションの一角を堂々と担います。

今週を振り返ると、あなたはコードなしでグルーヴを作る方法を学びました。コードが色なら、シングルノートは線。もう色と線の両方が使えるんです。来週はここに**音の長さ（スタッカート）とシャッフル**を足して表現をさらに広げます。今日作ったリフがバッキングのベースと「カチッ」と噛み合ったら、今週は大成功です。そのライン、必ず録音しておいてください。コードなしでライン1つで曲を引っ張れるようになったあなた、本当に遠くまで来ました。あとはそのラインに表情をつけるだけです。

## ② ビジュアル資料

1〜2弦のシングルノート・リフにゴーストを混ぜた完成形です。バッキングのベースと噛み合う場所を探して。

**Eノートボックス（復習）。** この音でリフを組みます。ベースとユニゾンするか、間を埋めてコール&レスポンス。

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**例1 — シングルノート・リフA（2小節）。** E-G-A-Bを上下するラインにゴーストを混ぜた基本リフ。ベースラインのようにはっきり。

```json
{
  "id": "m2.w6.d4.riff_a",
  "type": "tab",
  "meta": { "title": "Single-note funk riff A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 76。** バッキングの上で4回以上。自分のラインがベースと重なるか会話するか感じて。

**例2 — シングルノート・リフB（2小節）。** 音の配置を変えた応用形。慣れたら音を変えて自分のリフに。

```json
{
  "id": "m2.w6.d4.riff_b",
  "type": "tab",
  "meta": { "title": "Single-note funk riff B (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 76。** ベースをよく聴いてその上・間を埋め、自分のラインを完成させて録音して。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。今週のライン（5・4弦）とゴーストを軽く復習。ミュートが維持されるか点検。

**10〜20分 · 頭のトレーニング（今日のターゲット＝ベースと噛み合い）**
バッキングのベースラインを先によく聴きます。自分のリフをベースと重ねるか（ユニゾン）、間を埋めるか（コール&レスポンス）決めます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 76）**
**例1・2**をバッキングの上で弾いたあと、音を変えて自分のリフに応用。ベースと噛み合う場所を探すのが核心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
自分のリフを録音してチェック：1弦だけはっきりか／ゴーストが間を埋めるか／ベースと噛み合うか／雑音はないか。

**今日の完了基準：** 1〜2弦のシングルノート・リフにゴーストを混ぜ、バッキングのベースと噛み合う自分のラインを完成させて録音できる。（6週目完成！）

## ④ ヒント / よくあるミス

- **ベースと別々に動く。** ベースを聴かないとラインが浮きます。まずベースを聴いてその上に乗せて。
- **音が多すぎ。** シングルノートも節約するほど洗練されます。ベースと重ねるか会話するように余白を。
- **弦の雑音。** リフが速くなるほどミュートが緩みます。使わない弦を最後まで覆って。
- **録音を省く。** ベースと噛み合うかは録音がいちばん正直。必ず聴き返して。
