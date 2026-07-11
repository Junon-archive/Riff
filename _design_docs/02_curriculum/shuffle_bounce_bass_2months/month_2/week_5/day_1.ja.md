---
title: "デッドノート「チャッ」 — 音程のないゴースト一つ"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — デッドノート「チャッ」、音程のないゴースト一つ

## ① 理論・解説

先月のシャッフル・ブルースを無事卒業しました。今日からは**バウンス**の世界です。バウンスが跳ねる秘訣は新しい音ではなく、**ゴースト（「チャッ」）**にあります。<mark>左手を弦の上に軽く乗せるだけで（フレットまで押さえません）、その状態で右手でトンと弾くと、音程なく「チャッ」という打撃音だけが残ります。</mark>この音がまさに**デッドノート**です。

スキーマではこれを `dead_note` と書きます。普通の音とはまったく違う音なので、タブにはフレット数字の代わりに位置だけが取られます。たとえるなら<mark>ドラムのハイハットの隙間</mark>のような存在です — メロディではなくリズムの隙間を埋める音です。だから今日はたった一つ、**きれいな「チャッ」**を出す感覚だけに集中します。

クリーンなゴーストのカギは二つです。一つ目、左手を**強く押さえすぎない** — フレットに触れる直前まで軽く乗せます。二つ目、<mark>弾かない弦が一緒に鳴らないよう静かに寝かせておく</mark>ことです。この二つが噛み合えば、「ウン〜」という雑音なく、カラッと乾いた「チャッ」がきれいに出ます。

今日は速さのプレッシャーはまったくありません。**BPM 60**でとてもゆっくり、一回の「チャッ」がきれいに出るまで繰り返せば十分です。<mark>ゴースト一つがクリーンに鳴った瞬間、今日は成功です。</mark>4弦でも5弦でも手のすることは同じなので、弾きやすい楽器で始めましょう。

## ② ビジュアル資料

今日のビジュアル資料は二つです。まず<mark>ゴーストだけを四回</mark>出してみて、次に普通の音とゴーストを交互に弾いて音の違いを感じます。各例は4弦・5弦の二つのバージョンです。

まず**ゴーストだけを四回**です。3弦（A）に左手を軽く乗せ、右手で四回「チャッ」を出します。

```json
{
  "id": "m2.w5.d1.ghost_only_4",
  "type": "tab",
  "meta": { "title": "Clean ghost chka — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60。** フレットは押さえず、左手を軽く乗せるだけ。音程ではなく乾いた打撃音「チャッ」だけ出れば正解です。

```json
{
  "id": "m2.w5.d1.ghost_only_5",
  "type": "tab",
  "meta": { "title": "Clean ghost chka — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 位置と方法は4弦と同じです。低音**B**は親指で覆っておきます。

今度は**普通の音とゴースト**を交互に出してみます。開放E（4弦）を「ドン」と鳴らし、3弦のゴーストを「チャッ」で受けます。<mark>ドンとチャッの音の違い</mark>がはっきり聞こえます。

```json
{
  "id": "m2.w5.d1.note_and_ghost_4",
  "type": "tab",
  "meta": { "title": "Note vs ghost — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60。** ドン（開放E）とチャッ（ゴースト）を交互に。音のある響きとない響きの対比を耳に刻みます。

```json
{
  "id": "m2.w5.d1.note_and_ghost_5",
  "type": "tab",
  "meta": { "title": "Note vs ghost — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
右手のツーフィンガーを開放Eにトントン乗せて手をほぐします。力を抜いて軽く弾く感覚をまず見つけます。

**10〜20分 · 頭のトレーニング**
左手を弦に軽く乗せたまま、右手だけで「チャッ」を出してみます。<mark>フレットを押さえていないのに音が乾いているか</mark>耳で確認します。

**20〜40分 · 実践**
**ゴーストだけを四回**と**普通の音とゴースト**の二つの例をBPM 60で交互に練習します。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音**
きれいな「チャッ」一つを録音します。聴き返して雑音なく乾いた音が出たか点検します。

**今日の完了基準：** 左手を軽く乗せて音程のないゴースト（「チャッ」）一つを雑音なくクリーンに出し、4弦・5弦のどちらでも確認できる。

## ④ ヒント・よくあるミス

- **強く押さえすぎる。** フレットまで押さえると音程が出ます。軽く乗せるだけにします。
- **弱く乗せすぎる。** 逆に軽すぎると「ウン〜」というハーモニクスが出ます。弦を確実に止められるだけ乗せます。
- **弾かない弦が鳴る。** ゴーストが濁る一番大きな原因です。隣の弦を右手・左手で一緒に寝かせておきます。
- **低音Bの油断（5弦）。** 5弦では低音Bが漏れやすいです。親指で覆っておきます。
