---
title: "押し引き3位置 — 前・ジャスト・後ろ"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 押し引き3位置、前・ジャスト・後ろ

## ① 理論・解説

昨日はルートを**拍の後ろに**寝かせる感覚をつかみました。今日はその感覚を広げ、同じラインを**三つの位置**に置いてみます — <mark>前・ジャスト・後ろ</mark>。三つの位置を行き来して押し引きすると、タイミングがグルーヴの表情をどう変えるかを体で知ります。音を一つも変えず、タイミングだけ移すのにグルーヴの印象がガラッと変わるのが今日の面白さです。

**前**（ahead）は拍より少し早く置くことです。焦って浮ついた感じで、ノリのよいロックやファンクで使います。ただし<mark>前へ引くと簡単に焦って見えます</mark> — なので今日は前を「味見」だけして通り過ぎます。前へ引く癖がつくと後で直しにくいので、そっとかすめるように経験だけして進みます。

**ジャスト**（on）は拍の上にぴったり乗せることです。くっきりして安定します。**後ろ**（behind）は昨日学んだレイバックです — 余裕があって重いです。<mark>同じ音、同じ位置なのに、位置だけ変えても感じが完全に変わります。</mark>

今日のラインはルートEと5度Bの一つです。**BPM 72**でこのラインを前・ジャスト・後ろへ移しながら録音して比べます。三つの位置を行き来する間、メトロノームは揺れなく正拍を守ってくれる必要があります。<mark>三つの位置の差がはっきり聞こえれば今日は成功です。</mark>4弦でも5弦でも運指は同じです。

## ② ビジュアル資料

今日のビジュアル資料は同じライン二つのバージョンです。まず<mark>拍にぴったり合わせたライン</mark>で基準を取り、次に同じラインをレイバックで寝かせて後ろへ押す余裕を感じます。前の位置は楽譜ではなく指先で少し味見します。各例は4弦・5弦の二つのバージョンです。

まず**ジャスト・ライン**です。ルートEと5度**B**（3弦2フレット）を拍の上にくっきり乗せます。

```json
{
  "id": "m2.w7.d2.pushpull_on_4",
  "type": "tab",
  "meta": { "title": "Push-pull line, on the beat (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72、スウィング16。** ルートEと5度Bを拍の上にくっきり。これが「ジャスト」の基準です。**5弦なら**低音Bは寝かせておきます。

```json
{
  "id": "m2.w7.d2.pushpull_on_5",
  "type": "tab",
  "meta": { "title": "Push-pull line, on the beat (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

今度は<mark>同じラインをレイバック</mark>で。音符は同じで、各音を**拍の後ろに少し**寝かせて置きます。

```json
{
  "id": "m2.w7.d2.pushpull_back_4",
  "type": "tab",
  "meta": { "title": "Push-pull line, behind the beat (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72、レイバック。** 音はジャストと同じです。各音を**拍の後ろに**少し寝かせて余裕を作ります。**5弦なら**低音Bの代案。

```json
{
  "id": "m2.w7.d2.pushpull_back_5",
  "type": "tab",
  "meta": { "title": "Push-pull line, behind the beat (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
ルートEと5度Bを行き来して手をほぐします。二つの音を楽につなぐ感覚からまず見つけます。

**10〜20分 · 頭のトレーニング**
同じラインを頭の中で前・ジャスト・後ろに置いてみます。<mark>位置だけ変わって音はそのままか</mark>ゆっくり辿り直します。

**20〜40分 · 実践**
**押し引きライン**を**BPM 72**でジャストに立てたあと、レイバックで寝かせて反復します。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音**
ジャスト・ラインとレイバック・ラインをそれぞれ録音して並べて聴きます。前の位置も一度味見して三つの位置を比べます。

**今日の完了基準：** 同じラインを前・ジャスト・後ろの三位置へ移して置き、ジャストとレイバックの差を耳で聞き分け、4弦・5弦のどちらでも確認できる。

## ④ ヒント・よくあるミス

- **位置を変えながら音を変える。** 押し引きはタイミングだけを変えることです。音と位置はそのまま置きます。
- **前へ引きすぎる。** 前の位置は味見だけします。引き続けると焦って聞こえます。
- **後ろに寝ながら遅くなる。** レイバックは位置だけ後ろへです。テンポはメトロノームに任せます。
- **低音Bの油断（5弦）。** 使わない低音Bは親指で覆っておきます。
