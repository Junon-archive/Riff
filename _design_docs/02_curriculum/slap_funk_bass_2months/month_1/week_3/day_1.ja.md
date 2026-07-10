---
title: "デッドノート「チッ」— 初めてのクリーンゴースト"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — デッドノート「チッ」、初めてのクリーンゴースト

## ① 理論・解説

3週目が開きました。スラップが<mark>ファンキーに跳ねる</mark>本当の秘訣は派手な音ではなく、**ゴースト（「チッ」）**です。サムとポップの間に**音程のないミュート打撃**を一つ挟むと、平板だったグルーヴに急に息が通りバウンスが生まれます。今週はずっとこの「チッ」一つを手に植えます。

ゴーストはスキーマでは**デッドノート（dead_note）**です。方法は簡単です — **左手を弦の上に軽く乗せるだけ**にして（フレットまでぐっと押さえません）、その状態で右手でトンと叩きます。すると音程は出ず、**「チッ」という打撃音**だけが残ります。たとえるなら<mark>ドラムのハイハットの合いの手</mark>です — メロディではなくリズムを埋める音ですね。

今日の目標はたった一つ、**きれいなゴースト一つ**です。**3弦（A）**の上に左手を乗せ、右手の親指で叩いて「チッ」を出します。音程が漏れたら左手を**もっと広く覆って**完全に殺し、逆に音が全く出ないなら少し強めに叩きます。**BPM 60**で4分音符にきっちり一回ずつ、慣れたら8分音符で細かくつなぎます。手首の力を抜いて**軽く落とすように**叩くと、「チッ」が詰まらず爽やかに出ます。最初は欲張らず一度に一つだけ、その一つが完璧になるまで繰り返すのが今日の近道です。

**5弦**なら位置も方法も4弦とまったく同じです。低音Bは親指で覆って寝かせ、「チッ」の感覚だけを手に刻みます。今日は速さへの欲なく、**音程のないきれいな打撃**一つだけに集中します。

## ② ビジュアル資料

今日は左手をほとんど押さえません — **3弦（A）**に軽く乗せて**音程のない「チッ」**だけを出します。まず4分音符で1拍に一つずつ<mark>きっちりゴースト</mark>を刻んだあと、8分音符で細かく埋めます。各例は**4弦・5弦の二つのバージョン**です。

**例1 — ゴースト4分音符。** 1拍に「チッ」一つです。譜面の**X**がデッドノート（ゴースト）です。

```json
{
  "id": "m1.w3.d1.ghost_quarter_4",
  "type": "tab",
  "meta": { "title": "Ghost note quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 左手を3弦に乗せて親指でトン — 音程なく「チッ」だけ。1拍に一つずつきっちり。

```json
{
  "id": "m1.w3.d1.ghost_quarter_5",
  "type": "tab",
  "meta": { "title": "Ghost note quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 位置・方法とも4弦と同じです。低音Bは親指で覆っておきます。

**例2 — ゴースト8分音符。** 1拍を二つに割って「チッ」を細かくつなぎます。速くなっても<mark>音程が漏れない</mark>ように左手をしっかり覆います。

```json
{
  "id": "m1.w3.d1.ghost_eighth_4",
  "type": "tab",
  "meta": { "title": "Ghost note eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 8分音符で「チッ-チッ」とつなぎます。音ごとに音程がないか耳で確認します。

```json
{
  "id": "m1.w3.d1.ghost_eighth_5",
  "type": "tab",
  "meta": { "title": "Ghost note eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 4弦と同じです。ここでも低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
先週のオクターブグルーヴ（サム-休み-ポップ-休み）をBPM 60で軽く回して手を目覚めさせます。今日はその休みの場所に「チッ」が入ります。

**10〜20分 · 頭のトレーニング**
左手を3弦に乗せてとてもゆっくり「チッ」だけを繰り返します。<mark>音程が完全に死んでいるか</mark>、その一つだけを耳で確認します。

**20〜40分 · 実践**
例1（4分音符）を**BPM 60**で反復 → ゴーストがきれいなら例2（8分音符）へ進み**BPM 65**。音程が漏れたら4分音符に戻します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>「チッ」に音程が混ざっていないか</mark>を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** 3弦に左手を乗せて音程のないきれいなゴースト（「チッ」）を、BPM 60〜65で4分・8分音符にきっちり出せる。

## ④ ヒント・よくあるミス

- **音程が漏れる。** 左手がフレットを少し押さえると音が出ます。押さえずに弦の上に**乗せるだけ**にします。
- **音が全く出ない。** 左手が強く押さえて弦を完全にふさいでいます。力を抜いて右手はいつも通り叩きます。
- **一本しか覆えない。** 左手を狭く乗せると隣の弦が鳴ります。指を数本の弦に広くかけて覆います。
- **低音Bの油断（5弦）。** 左手が上へ行くとBが開きやすいです。親指で常にBを覆っておきます。
