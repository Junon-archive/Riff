---
title: "ソロ全体の完成と初録音 — 8小節をひとつにつなぐ"
dayKey: "m3.w12.d3"
estMinutes: 50
i18nKey: "lesson.m3.w12.d3"
lang: ja
---

# Day 3 — 断片を1曲に：8小節オリジナルソロの完成＆初録音

## ① 理論・説明

今日なぜこれをやるかというと、もう材料は全部揃いました。着地地図（Day1）、モチーフと余白（Day2）。今日はこれをつなぎ合わせて、**最初から最後まで流れる8小節のソロを1曲完成**させます。そして初めて**通しで録音**します。

曲をつなぐときに覚えておきたい原則は3つだけです。

1. **弧（アーク）を描く。**8小節を平坦にずっと行くのはNGです。始まりは静かに（モチーフ＋大きな余白）、5小節目のA7スイッチで**頂点（クライマックス）**、そして最後はルートに着地しながら下りていく。山をひとつ描くイメージです。
2. **5小節目が反転ポイント。**1〜4小節はドリアン（C、F#）。5小節目のA7でC#にスイッチし、そこにブルーノートベンディング（C→C#）まで乗せて曲を一気に押し上げます。この1小節があなたのソロの「サビ」です。
3. **最後は必ず着地する。**8小節の終わりはルートAを長く、ビブラートで歌いながら締めくくります。着地なしで終わると「え、これで終わり？」となってしまいます。しっかり句点を打ちましょう。

下のタブが**完成形**です。そのまま覚えてもいいし、あなたのDay2の変形に差し替えてもOKです。大事なのは構造です：**モチーフ→ドリアン応答→展開→A7クライマックス（ベンディング）→解決→ルート着地。**これが3か月の結晶です。

## ② 視覚資料

まず、**完成した8小節オリジナルソロ**です。各小節の終わりにそのコードの3度が着地し、5小節目にブルーノートベンディングのクライマックス、8小節目にルートのビブラートによる締めくくりが刻まれています。あちこちに余白（`rest`）が息づいているのも見てください。

```json
{
  "id": "m3.w12.d3.original_solo_full",
  "type": "tab",
  "meta": {
    "title": "Original solo - full 8 bars (Am7 D7 Am7 D7 | A7 D7 Am7 Am7)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 7, "duration": "eighth", "technique": "none", "label": "2", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 4, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 5, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]},
      { "measure": 6, "notes": [
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

次に、**着地の柱ロードマップ**です。8小節を貫く4つの着地の柱だけを抜き出しました。C（ドリアン♭3）→F#（長6度の色）→C#（ミクソリディアン長3度、クライマックス）→A（ルート、締めくくり）。ソロがこの4本の柱の間を行き来していると考えれば、道に迷いません。

```json
{
  "id": "m3.w12.d3.solo_landing_roadmap",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Solo landing pillars roadmap (b3 -> 6 -> 3 -> R)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "scale": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "blue_note", "highlight": true },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 92）— 4連符シーケンス＋ベンディング予熱**
メトロノーム92で4連符シーケンスを一周させたあと、5小節目のベンディング（1弦8フレットのCを半音押し上げてC#の音程まで）を5回予熱します。ベンディングはちゃんとC#の音程まで上がっているか耳で確認しながら。クライマックスが揺れると曲全体が揺れます。

**10〜20分・頭のトレーニング（小節ごとの組み立て）**
完成タブを**2小節ずつ**区切って覚えます。1-2小節→3-4小節→5-6小節→7-8小節。各かたまりを滑らかにしてからつなぎます。特に4小節目の終わりのCから5小節目のC#へ移る継ぎ目（1フレットのスイッチ）を5回繰り返して手に刻んでください。

**20〜40分・実戦での完成（Am7-D7-A7バッキング／88〜92 BPM）**
バッキングの上で8小節を**途切れなく**一周することを目標に。最初は88で、スムーズになったら92で。弧（アーク）を意識してください：前半は静かに・余白多めに、5小節目で一気に押し上げ、8小節目でルートに着地しながら息を落ち着ける。最低5周は回して、体に流れを刻みましょう。

**40〜50分・初録音（推奨→今日は特に強くおすすめ）**
手元にある録音ツール（スマホのボイスメモ、ノートパソコンの録音機能、何でもOK）で、完成ソロをバッキングの上で**ワンテイク通しで**録音します。今日は完璧ではなく「完走」がゴールです。この最初の録音が、明日の自己フィードバックの原本になります。聴き直して、第一印象だけメモしましょう。「どこが一番気に入って、どこで揺れたか。」

**今日の完了の目安：**8小節のソロをバッキングの上で途切れずに1周完走し、そのテイクを通しで1つ録音完了すること。

### 自己診断チェックリスト（今日の焦点：完走と流れ）
- [ ] **3度着地の正確さ** — 4つの着地の柱（C・F#・C#・A）に各小節の正しい拍で到達した
- [ ] **色彩音の活用** — F#（長6度）・G（♭7）・ブルーノートのCが曲の色として聞こえた
- [ ] **ビブラートの安定感** — 2・6・8小節の長い着地音のビブラートが一定だった
- [ ] **リズムのタイミング** — ベンディングのクライマックス（5小節目）と最後の着地（8小節目）が拍からずれなかった

## ④ ヒント・よくある間違い

- **弧なしで平坦に完走する。**ただ8小節を弾き切るのが目標ではありません。ダイナミクスの山を描いてください。前半をあえて弱めに弾くからこそ、5小節目のクライマックスが生きます。
- **ベンディングの音程が合わない。**5小節目のベンディングがC#まで届かないと、クライマックスが中途半端になります。あらかじめ目標音（1弦9フレットのC#）を押さえて耳に入れておき、その音程まで正確に押し上げましょう。
- **最後を曖昧に終わらせる。**8小節目のルートAは、ビブラートで堂々と歌いながら締めくくりましょう。終わりの音が生きてこそ「この人、1曲仕上げたな」と聞こえます。
- **最初のテイクに完璧を期待する。**今日の録音は完走の記録です。多少つまずいても最後まで行って残しましょう。不格好でも完走した1本が、明日の手術台に乗せる大切な材料になります。
