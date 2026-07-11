---
title: "3度インターバルでドリアンを弾く＋F#色彩ライン"
dayKey: "m3.w9.d2"
estMinutes: 50
i18nKey: "lesson.m3.w9.d2"
lang: ja
---

# Day 2 — スケールを「音楽」のように：3度インターバルでAドリアンを弾き、F#で彩る

## ① 理論・説明

今日なぜこれをやるかというと。昨日、Aドリアンのポジションを1つと、F#（長6度）を手に入れましたよね。でもスケールをA-B-C-D-E-F#-Gの順に上下するだけだと、F#があってもただの「練習曲」みたいに聞こえてしまいます。音楽にならないんです。だから今日からは**<mark>3度インターバル</mark>**で弾いていきます。

3度インターバルとは何かというと。スケールを1音ずつ上がる代わりに、**<mark>1音飛ばして</mark>**ペアを作ることです。Aから1つ飛ばしてC、Bから1つ飛ばしてD、Cから1つ飛ばしてE…というように。

- A–C, B–D, C–E, **D–F#**, E–G, **F#–A**, G–B …

こう弾くと、いいことが2つ同時に起こります。1つ目、音が平坦な「ドレミ」ではなく**<mark>旋律らしく</mark>**聞こえること。2つ目、指板の上で音同士がどうペアになっているか手が自然と覚えるので、あとで即興するとき「次の音はどこだっけ」と迷わなくなること。実際、上手い人のソロを分解してみると3度の跳躍が本当に多いんです。階段（順次進行）だけを上っていくと退屈だから。

そして今日のポイント。上のリストの**D–F#**と**F#–A**を見てください。F#が2回もペアの主役として出てきます。3度で弾くと、F#は自然に、でも際立って通り過ぎていきます。昨日はF#を「止まって」聞かせましたが、今日はF#を**<mark>流れの中で</mark>**彩る練習です。

最後に、3度でずっと弾いていって、どこで止まるかも大事です。今日のシーケンスは**<mark>C（b3）</mark>**に着地するように組んであります。CはAm7の3度だからです。華やかにF#で彩りながら流れて、最後はコードの3度にぴたっと降りる — これが今週ずっと繰り返す文法です。

## ② 視覚資料

まず、**<mark>Aドリアン3度インターバルシーケンス</mark>**（2小節、8分音符）です。3・4弦から始まって1弦まで、3度ずつペアになりながら上がっていきます。途中で**F#（6度、色彩音）**が2回通り過ぎ（ハイライト）、最後は**C（b3、Am7の3度）**に着地します（ハイライト）。

```json
{
  "id": "m3.w9.d2.third_interval_dorian",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "3rd-interval sequence in A Dorian (F# color, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 78
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

次に、**<mark>F#色彩ライン</mark>**です。Am7の上で、上から流れ落ちてきます。R(A) → b7(G) → **F#（6度、色彩音）**をビブラートで長く歌わせた後 → 5(E) → 4(D) → 最後に**C（b3、Am7の3度）**に着地。F#を「止まって見せびらかし」、3度で「解決する」という、今日の要約です。

```json
{
  "id": "m3.w9.d2.f_sharp_color_line",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "A Dorian color line - sing the natural 6th (F#), resolve to b3",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 78
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 78）— 3度インターバルシーケンス**
メトロノーム78に合わせて、最初の3度シーケンスを8分音符で往復します。上まで行ったら同じやり方で下りてきます（3度のペアを保ったまま逆方向に）。F#（2弦7フレット）が出てくるたびに、少し力を込めてはっきりと。指ではなく**耳**で<mark>「3度跳躍のうねり」を感じ取ること</mark>が目標です。

**10〜20分・頭のトレーニング（F#ペアのマッピング）**
メトロノームを止めて、ポジションの中から**<mark>F#で終わる3度ペア</mark>**だけを選んで押さえます。D–F#（3弦7フレット→2弦7フレット）、そして**F#–A**（2弦7フレット→2弦10フレット）。この2つのペアを、目をつむっても掴めるまで繰り返します。F#が前後どの音とペアになるか手が覚えれば、即興でF#を「狙い撃ち」できるようになります。

**20〜40分・実戦即興（Am7ヴァンプ／BPM 74〜78）**
Am7ヴァンプのバッキングを流します。ミッションは、**<mark>3度跳躍を最低1回入れた短いフレーズ</mark>**を作り、そのフレーズの中に**F#を必ず1回**通してから**<mark>C（b3）に着地</mark>**すること。2つ目の色彩ラインをそのまま乗せてスタートしてもOKです。順次進行（ドレミ）だけで流れないこと、これが今日のルールです。

**40〜50分・録音・フィードバック（推奨）**
最後のジャム30秒を録音します。聴き直してチェックするのは2つだけ。**①3度跳躍が聞こえるか（平坦な階段ではなくうねっているか）／<mark>②F#が流れの中で「キラッ」と光って通り過ぎたか</mark>。**必要なら再生速度を0.75倍に落として、F#のタイミングを確認しましょう。

**今日の完了基準：**3度シーケンスを78で往復。F#で終わる3度ペア2つを目をつむって押さえる。Am7の上で「3度跳躍＋F#通過＋C着地」のフレーズを3回以上成功させる。

## ④ ヒント・よくある間違い

- **3度シーケンスを指の運動だけにしてしまう。**3度は「音楽的な跳躍」なので、耳に聞こえてこそ意味があります。機械のようにフレットだけ踏んでいると、明日の即興で使えません。ペアごとに「うねり」が聞こえているか、耳を開いておきましょう。
- **F#をかすめるように通り過ぎてしまう。**3度で流れていると、F#が速く通り過ぎてしまいがちです。今日の色彩ラインのように、たまには**F#で止まってビブラート**を乗せ、「ここにいるよ」と聞かせましょう。
- **着地音をどこでもいいと思ってしまう。**3度で華やかに流れても、終わりの音があいまい（4度Dやb7 G）だと、宙に浮いたようになってしまいます。今週は終わりの音を**C（b3、Am7の3度）**か**A（根音）**に。着地が正確であってこそ、前の華やかさが生きてきます。
- **両手のシンクが崩れてしまう。**3度跳躍は弦をまたぐので、ピッキングが空振りしやすいです。78がきつければ70に落として、まずは**正確に**。速さは正確さが固まってからです。
