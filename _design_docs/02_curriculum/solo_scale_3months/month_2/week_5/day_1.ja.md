---
title: "Amペンタ第1ボックス復習 — 上行下行じゃなく「3度インターバル」で噛み直す"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
lang: ja
---

# Day 1 — 慣れた5音を「3度インターバル」でもう一度新鮮にする

## ① 理論・説明

今日なぜこれをやるかというと、今週の目標はAマイナーペンタトニックに2度（B）と6度（F）を加えて**Aナチュラルマイナー**に広げることなんです。でも新しい音を足す前に、まず**土台がしっかりしているか**を確認しておきたいんですね。ここでの土台とはペンタトニック第1ボックスのこと。この第1ボックス、もう「知っている」と感じやすいところなんです。でも上行–下行でラララと転がすのは「知っている」んじゃなくて、手が惰性で滑っているだけだって、先月ずっとお伝えしてきましたよね。

そこで今日は、同じ5音（**A・C・D・E・G**）を**3度インターバルだけ**でなぞっていきます。3度インターバルって何かというと、一音弾いたら**すぐ隣の音じゃなく、一つ飛ばした音**を弾くこと。AのあとはCじゃなくD、CのあとはDじゃなくE——こうやって「飛ばしペア」で組みながら上がっていきます。なぜこれが大事かというと、隣の音へ順番に進むと、脳は位置を覚えなくても指の順番だけで転がっていけてしまうから。でも一つ飛ばすと指の順番が崩れるので、脳は嫌でも**それぞれの音の座標を個別に記憶**し始めるんです。これこそが即興の本当の材料になります。

そして今日も着地点は変わらず**C（♭3）**。Amコードの3度、3か月間ずっとホームベースにしてきた音ですね。3度ペアを踏んで上がりながら止まりたくなったら、必ずCで止まってください。明日はB、明後日はFを加えていきますが、その追加音たちも結局このCに流れ込むように作っていきます。だから今日は「追加音がたどり着く目的地」を手と耳にしっかり刻み込む日だと思ってください。

## ② 視覚資料

Aマイナーペンタトニック第1ボックス（5フレット根音）です。赤いハイライトは今日も目的地の**C（♭3）**3か所です。

```json
{
  "id": "m2.w5.d1.aminor_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (review)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今日のメイン武器、**3度インターバルシーケンス**です。一つ飛ばしたペア（A–D、C–E、D–G…）で上がっていき、各フレーズの最後は必ず**C（♭3）**に着地します。

```json
{
  "id": "m2.w5.d1.pentatonic_thirds_sequence",
  "type": "tab",
  "meta": {
    "title": "Pentatonic 3rd-interval (skip-one) sequence landing on b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 80）**
メトロノーム80に合わせて、上の3度インターバルシーケンスを6弦から1弦まで往復します。1拍に8分音符2つ、「タッタ」のペアがクリックにぴったり合うように。オルタネイトピッキング（ダウン–アップ）は崩さずに。ペアが混乱して手が一瞬止まっても大丈夫——それは惰性が壊れている音です。

**10〜20分・頭のトレーニング（今日のターゲット＝C／♭3）**
メトロノームを止めて、第1ボックスの中で**Cだけ**を探して押さえます。6弦8フレット、3弦5フレット、1弦8フレット、3か所。押さえるたびに声に出して「シー！」と呼んでみましょう。次に、各Cの直前から3度ペアで上がってきて**ぴったりCで止まる**動作までつなげて練習。目を閉じて3秒以内に3か所を押さえられたら合格です。

**20〜40分・実戦即興（Amワンコードバッキング／75〜80 BPM）**
「Am backing track」で適当に一つ流します。ルールは一つだけ：**3度ペアだけで動き、止まるときは必ずCかA。**隣の音を順番になぞる癖が出てきたら、すぐ止めてペアに戻ってください。「かっこいいフレーズ」はまだ気にしなくて大丈夫、飛ばす感覚を体に馴染ませることだけに集中しましょう。

**40〜50分・録音・フィードバック（推奨）**
手元の録音アプリ（スマホのボイスメモでOK）で、最後のジャムを30秒だけ録音します。聴き直して、チェックするのは一つだけ：**本当に3度で飛ばして弾けていたか、それともいつの間にか順次進行に戻っていたか。**順次進行に戻っていたら、明日はBPM 75に落としてもう一度。

**今日の完了基準：**BPM 80で3度インターバルシーケンスを途切れずに往復できる、C3か所を目を閉じて押さえられる、ジャムでのすべての止まりをCかAでできる。

## ④ ヒント・よくある間違い

- **順次進行への逆戻り。**3度ペアがもどかしくて、気づけば隣の音をラララとなぞっていたら、それは脳が楽な道に逃げているサインです。もどかしさ＝新しい回路が開いている証拠。ペアを守り続けましょう。
- **速さから先に上げようとする。**80がゆったりに感じても我慢してください。今日の目標は「正確な座標を刻み込む」ことで、スピードではありません。崩れて速いより、はっきり遅い方が今週ずっと得をします。
- **Cをただ通り過ぎてしまう。**Cは明日からB・Fが流れ込んでくる集合点です。押さえるたびに少し強め、少し長めに——耳に「ここが到着地」と刻み込みましょう。
- **ピッキング側の手の緊張。**腕ではなく手首で浅く。8分ペアで余裕があるように見えても、腕で弾く癖は明日の16分4連音でつまずく原因になります。
