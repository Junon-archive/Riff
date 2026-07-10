---
title: "となりの弦へ渡る — E↔Aの弦移動と親指"
dayKey: "m1.w1.d2"
estMinutes: 30
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — となりの弦へ渡る

## ① 理論・説明

昨日は開放E1つで手をほぐしましたね。今日はとなりの弦へ一歩渡ります。今日の目標はただ1つ — **<mark>EとAの2本をなめらかに行き来すること</mark>**です。ベースラインはほとんど、弦を行き来して作られるので、この**弦移動**が楽になれば、これから習うことがぐっと簡単になります。むずかしくありません、昨日のツーフィンガーを弦だけ変えて続けるだけです。

カギは**<mark>弦が変わっても人差し指・中指の交互を止めないこと</mark>**です。Eで人差し指から始めたなら、Aへ渡ってもその次は中指 — 指はずっと交互に歩き、弦だけがとなりへ座り直します。右手全体を大きく動かさず、2本の指先がとなりの弦へちょこっと渡るくらいで十分です。最初は弦が変わる瞬間に拍がつまずくのが当たり前で、その**継ぎ目**こそ今日みがくポイントです。

さあ、親指に仕事が1つ生まれます。E（4弦）を弾くとき親指はピックアップに乗せますが、A（3弦）を弾くときは親指を<mark>E弦の上へ移して</mark>乗せます。すると弾いていないE弦が**ひとりでにミュートされて**静かになります。こうして親指が低い弦を追いかけて覆うことを**「ムービング・アンカー（追いかける親指）」**と呼びます。今はぎこちなくても、数日で手が勝手に慣れるので心配しないで。

5弦なら低い弦がもう1本あるので、親指の覆う相手が増えます — Aを弾くときは**親指でEと低音Bをまとめて覆い**、2本を眠らせます。位置と運指は4弦とまったく同じで、4弦にはない**B弦のミュート**だけ気をつければ、あとはそのままです。どのベースでも、今日手が学ぶのは「弾く弦は鳴らし、弾かない弦は眠らせる」ことです。

## ② ビジュアル資料

今日は**E（4弦）とA（3弦）の2つの開放弦**を行き来します。下の例は<mark>ゆっくり1つずつ渡る</mark>ところから、8分音符で細かく行き来するところまでです。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — 4分音符の弦移動。** E→A→E→A、1拍に1つずつはっきり渡ります。

```json
{
  "id": "m1.w1.d2.cross_ea_quarter_4",
  "type": "tab",
  "meta": { "title": "E–A string crossing — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** EとAを交互に。弦が変わっても人差し指・中指の交互は止めないで。

```json
{
  "id": "m1.w1.d2.cross_ea_quarter_5",
  "type": "tab",
  "meta": { "title": "E–A string crossing — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 運指は4弦と同じ。Aを弾くときは親指でEと低音Bをまとめて覆い、2本を眠らせます。

**例2 — 8分音符。** Eを4回、Aを4回。弦が変わるたった1か所だけなめらかにすればOKです。

```json
{
  "id": "m1.w1.d2.cross_ea_eighth_4",
  "type": "tab",
  "meta": { "title": "E–A string crossing — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 前の4回はE、後ろの4回はA。4番目から5番目へ渡る継ぎ目だけはっきりと。

```json
{
  "id": "m1.w1.d2.cross_ea_eighth_5",
  "type": "tab",
  "meta": { "title": "E–A string crossing — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 4弦と音は同じ。Aへ渡るとき親指もE・B側へ一緒に移して2本を眠らせます。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日の開放EツーフィンガーをBPM 60でまたほぐします。**人差し指・中指の音量**が同じか、から呼び戻します。

**7〜17分・今日の技術**
例1（弦移動）をBPM 60で繰り返します。<mark>指の交互を保ったまま</mark>**EとAを渡る感覚**だけ身につけます。

**17〜27分・応用**
例2（8分音符）をBPM 60で4回 → **継ぎ目がなめらかになったら**BPM 65へ1段上げて4回。拍が押したらまた60へ下げます。

**27〜30分・チェック**
今日届いたBPMを書き留め、よければ30秒録音して、弦が変わる地点で音が途切れていないか聴いてみましょう。

**今日の完了基準：** E・Aの開放をツーフィンガーで交互に、弦が変わっても音量と拍が揺れずに60〜70で弾ける。

## ④ ヒント / よくあるミス

- **弦移動で手を止める。** 弦が変わるとき手を止めると、その瞬間に拍が押します。交互を保ったままとなりへ座り直して。
- **親指を移さない。** 親指がそのままだと、弾いていない低い弦が一緒に鳴って音が濁ります。低い弦を追って親指も移して。
- **右手を大きく動かす。** 腕を大きく振ると拍がにじみます。2本の指先がとなりの弦へ渡るくらいで十分です。
- **速さを欲張る。** 60で継ぎ目がきれいでないのに65へ行くと、全部崩れます。クリーンが先、速さは後です。
