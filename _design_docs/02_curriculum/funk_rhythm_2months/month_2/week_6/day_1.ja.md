---
title: "シングルノート・ファンク — コードを捨てて1弦だけ"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — ファンクギターはコードだけじゃない

## ① 理論・説明

ファンクギターはコードを弾くものだと思っていたら、今日は逆転です。ナイル・ロジャースやカーティス・メイフィールドのように、プロは1弦だけをコツコツ拾って**ベースラインのような単音ライン**を描きます。コードを完全に捨て、音1つ1つでグルーヴを作るんです。

原理はこう。残りの5弦を完璧に殺し（左手・右手ミュート）、たった1弦だけをはっきり鳴らします。コードが広く塗る刷毛なら、シングルノートは細い線を描くペン。同じ右手モーターの上に、今回は和音ではなくはっきりした音1つを乗せます。

今日は**5弦1本**で短いEラインを描きます。根音Eは5弦7フレット — 先週のE9コードの根音と同じ場所です。その周りの数音（下のノートマップ）で短いリフを作ります。肝は2つ。1つ、使わない弦を完璧にミュートして雑音ゼロ。2つ、1弦を正確に狙ってはっきり鳴らす。

1弦だけ正確に弾くのは意外と難しい。隣の弦が漏れたり、逆に力が入って音がつぶれたり。正常です。今日はラインが派手でなくてもいいので、「1弦だけはっきり、残りは沈黙」という感覚をつかんでください。このラインがベースと噛み合った瞬間、あなたのファンクは急に厚く硬くなります。コードだけで伴奏していた手が、今度は線を描き始めるんです。最初はぎこちなくても、この単音の世界が開けば、表現できることが2倍に広がります。

## ② ビジュアル資料

今日使う音の地図です。青＝根音E（5弦7フレット）と5度、残りはペンタトニックの音。5弦1本でラインを描きます。

**Eファンク・ノートボックス（5・4弦）。** 青が根音R（5弦7フレット）と5度。今日は5弦の音（b7・R・b3）だけ使います。

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

**例1 — 5弦のライン（1小節）。** E・G・Dを行き来する短いリフ、音の間はゴースト「チャッ」で。1弦だけはっきり。

```json
{
  "id": "m2.w6.d1.line5_1bar",
  "type": "tab",
  "meta": { "title": "Single-note line on the 5th string (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
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

▶ **BPM 70。** ラインの音だけ左手をしっかり、残りはミュート。隣の弦が漏れないか確認して4回。

**例2 — 5弦のリフ（2小節）。** 同じラインを2小節で。繰り返すうちベースラインのように体に入ります。

```json
{
  "id": "m2.w6.d1.line5_2bar",
  "type": "tab",
  "meta": { "title": "5th-string riff (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
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

▶ **BPM 70。** 2小節を途切れず。慣れたら他の音を入れて自分のリフに応用。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。5弦1本だけ弾き、残りの5弦は完璧にミュート。雑音がゼロか集中して点検。

**10〜20分 · 頭のトレーニング（今日のターゲット＝1弦の狙い＋ミュート）**
ノートマップを見て5弦の音（b7・R・b3）の位置を刻む。左手はラインの音だけ押さえ、残りは覆う感覚を身につけます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 70）**
**例1**（5弦のライン）をBPM 70で4回 → **例2**（2小節リフ）へ。1弦だけはっきり、残りは沈黙が核心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：1弦だけはっきり鳴ったか／他の弦の雑音はないか／ラインはベースのようにはっきりか。

**今日の完了基準：** 5弦1本で短いEラインを、他の弦の雑音なくはっきり演奏できる。

## ④ ヒント / よくあるミス

- **隣の弦が漏れる。** 左手・右手ミュートが弱い。使わない弦を指の側面・手のひらで覆って。
- **音がつぶれる。** 力が入りすぎ。ラインの音ははっきり、でも軽く。
- **右手が止まる。** ラインに気を取られてモーターが切れます。音の間も右手は続ける（ゴースト）。
- **速さへの欲。** 1弦の狙いが正確でないとラインが生きません。ゆっくり、雑音ゼロ。
