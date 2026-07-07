---
title: "アップ／ダウンのバランスと空ピッキング — 手は止まらない"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — 弾かない場所でも手は揺れている

## ① 理論・説明

モーターが回りだしたので、今日はそれを**均一に**します。ポイントは2つ — ダウンとアップのバランス、そして「空ピッキング」です。

多くの人はダウンストロークが強くはっきりしていて、アップストロークが弱くぼやけています。すると16ビートが「ドン・タン・ドン・タン」と足を引きずるようになります。良いファンクはダウンとアップの**音量とタイミングが双子のように均一**です。目を閉じてダウンだけ、アップだけ弾いて、2つの大きさをそろえてみてください。

2つ目は**空ピッキング（ゴーストストローク）** です。16ビートを全部鳴らすのではなく、ある場所は**弦を弾かずに通り過ぎます。** でもここで右手は絶対に止まりません — 宙で揺れ続け、音を出す場所だけ弦をかすめるんです。楽譜で休符になっている場所こそ「手は動くが弦は弾かない」場所です。

なぜ大事かというと、手が止まって再出発すると必ず拍がずれるからです。揺れを保ったまま「弾く場所」だけを選べば、タイミングがピタッと合います。最初は戸惑って当然 — 弾かない場所なのに手は動かすんですから。ゆっくり、手は揺れ続け、口で「弾く場所」だけ数えて身につけましょう。この感覚が来週のゴーストノートの土台です。だから今日つまずいても自分を責めないで。手と頭がバラバラに動くこのぎこちなさは、誰もが必ず通る関門なんです。

## ② ビジュアル資料

「弾く場所」と「空の場所」を目で見分けます。下の楽譜で、音符は実際に弦をかすめる場所、休符は手は動くが弦は弾かない空ピッキングの場所です。

**例1 — 拍だけ弾く（1小節）。** 各拍の最初の16分（ダウン）だけ鳴らし、残り3つは空ピッキング。手は16ビートで揺れ続けます。

```json
{
  "id": "m1.w1.d3.downbeat_pick",
  "type": "tab",
  "meta": { "title": "Play the beat, empty-pick the rest (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 68。** 「弾く・休み・休み・休み」を4回。音は4回だけbut手は16回揺れなければ。

**例2 — 拍と「アンド」（2小節）。** 拍（ダウン）と「アンド」（アップ）の場所を鳴らします。8分音符の感じが16ビットのグリッドに乗ったものです。

```json
{
  "id": "m1.w1.d3.eighth_feel",
  "type": "tab",
  "meta": { "title": "Down and up-beat (eighth feel, 2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 68。** 「弾く・休み・弾く・休み」。ダウンとアップの音量が双子のように同じか、耳で確認して。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。ダウンだけ16回、アップだけ16回、別々に弾いて音量をそろえます。次にダウン・アップ交互。

**10〜20分 · 頭のトレーニング（今日のターゲット＝空ピッキング）**
手は16ビートで揺れ続けたまま、口で「弾く場所」だけ数えます（例：「1…&…」）。手は止めず、音だけ選び取る感覚を身につけます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 68）**
**例1**（拍だけ弾く）をBPM 68で4回 → **例2**（拍とアンド）へ。休符の場所でも手が揺れるかが肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：鳴らした音のタイミングは正確か／空の場所で手が止まらなかったか／ダウン・アップの音量は均一か。

**今日の完了基準：** 右手の揺れを保ったまま、狙った場所だけ選んで鳴らせ（空ピッキング）、ダウンとアップを均一な音量で出せる。

## ④ ヒント / よくあるミス

- **アップストロークが弱い。** ダウンだけ強いと足を引きずります。アップもダウンと同じくらいはっきり。
- **休符で手が止まる。** 空ピッキングは「手を止める」のではなく「弦を弾かない」こと。手は揺れ続ける。
- **弦を強くかすめる。** 空の場所でうっかり弦に触れると汚れます。左手ミュートを保って。
- **口で数えない。** 目だけだと混乱します。「弾く場所」を声に出すとずっと正確になります。
