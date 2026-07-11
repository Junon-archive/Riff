---
title: "2コードの上のシャッフルルート — 1週目完成"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 2コードの上のシャッフルルート、1週目完成

## ① 理論・解説

1週目の最終日です。今週ずっと固めた**シャッフルルートパルス（ロング-ショート）**を、今日**今週の完成物**として固めます。そしてもう一歩 — 同じ転がりを**二つ目のコード**へ移して、曲で実際に起こるコード移動を先取りして味わいます。<mark>一つの音のグルーヴが、いよいよ二つの音の会話へ広がります。</mark>

二つ目のコードのルートは**A**です。**E**（4弦開放）の隣、**A**（3弦開放）へ手を移せばいいです。二つのルートはどちらも**開放弦**なので左手は相変わらず楽です。一小節は**Eシャッフル**、次の小節は**Aシャッフル** — 転がり（ロング-ショート）はそのまま保ったまま、<mark>ルートだけ隣の弦に変えるのです。</mark>ブギの最初の種です。

でも今日の**核心の完成物**は依然として**開放Eのシャッフルルートパルス**です。二つのコードはボーナスの拡張にすぎず、今週ぜひ手に入れるべきは**BPM 80で揺れないEパルス**なのです。<mark>基本が固ければコード移動は自然に付いてきます。</mark>完成物からしっかり固めて、余裕があればAへ広げます。

今日も**右手ツーフィンガー**でロング-ショートだけを守ります。**5弦**なら運指は4弦と同じで、低音**B**は親指で寝かせておけばいいです。慣れたら同じシャッフルをB弦のルートへ移してもっと重い低音でも試してみます。今週ずっとたった一つの音、開放Eだけでここまで来ました。**シンプルな素材でグルーヴを作る力** — それが良いベーシストの最初の資質です。今日その資質の種を手に植えて、**1週目を笑顔で締めくくり**ます。さあ、今週固めた三角形を完成物として仕上げます。

## ② ビジュアル資料

今日は三つです。まず**二つのルート（E・A）の位置**をフレットボードで確認し、今週の**完成物（Eシャッフルルートパルス）**を固めたあと、同じ転がりを**二つのコード（E-A）**へ広げます。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まずは**二つのルートマップ**。下の青が**E**（4弦開放）、その上の青が**A**（3弦開放）です。

```json
{
  "id": "m1.w1.d4.two_chord_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Two-chord roots — E and A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 下がルート**E**（4弦）、上がルート**A**（3弦）です。二つの開放弦の位置を目に焼き付けます。

```json
{
  "id": "m1.w1.d4.two_chord_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Two-chord roots — E and A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は寝かせておき、E・Aの二つのルートに集中します。

今度は**今週の完成物 — シャッフルルートパルス**。開放Eを8分で、ロング-ショートで均一に転がします。<mark>今週ぜひ手に入れるそのパルスです。</mark>

```json
{
  "id": "m1.w1.d4.shuffle_root_pulse_4",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80、シャッフルで（ロング-ショート）。** 開放Eを8分で打ちつつ**均等でなく** — 前の音を長く、後ろの音を短く。トリプレットの一つ目・三つ目に乗せる感じ。**5弦なら**低音Bは寝かせるかBルートでもっと重く試します。

```json
{
  "id": "m1.w1.d4.shuffle_root_pulse_5",
  "type": "tab",
  "meta": { "title": "Shuffle root pulse (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆い、シャッフルを転がす間ずっと漏れないようにします。

最後に**二つのコードへ拡張（E-A）**。最初の小節はEシャッフル、二つ目の小節はAシャッフル — <mark>転がりはそのまま、ルートだけ隣の弦へ。</mark>

```json
{
  "id": "m1.w1.d4.two_chord_shuffle_4",
  "type": "tab",
  "meta": { "title": "Two-chord shuffle root (E-A) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦。** 1小節目は開放**E**、2小節目は開放**A**。ロング-ショートはそのまま保ち、ルートだけ3弦へ移します。

```json
{
  "id": "m1.w1.d4.two_chord_shuffle_5",
  "type": "tab",
  "meta": { "title": "Two-chord shuffle root (E-A) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。**B**はずっと覆い、コードが変わっても低音が漏れないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の**シャッフルルートパルス**を開放EでBPM 60に転がします。ロング-ショートが生きているか確認して始めます。

**10〜20分 · 頭のトレーニング**
**二つのルート（E・A）**を交互に押さえ、とてもゆっくり行き来します。<mark>コードが変わってもロング-ショートがそのままか</mark>、その維持だけに集中します。

**20〜40分 · 実践（今週の完成物）**
ピン固定のシャッフルルートパルスを**BPM 80**で反復します。前の音を長く・後ろの音を短くが揺れないのが目標 — **均一さが先**です。4弦で覚えたあと5弦でも同じ感覚を確認し、余裕があれば二つのコード拡張も転がします。

**40〜50分 · 録音・フィードバック**
30秒録音して**シャッフルがBPM 80で均一か**聴いてみます。今週到達したBPMも記録しましょう。

**今日の完了基準：** 開放EのシャッフルルートパルスをBPM 80でロング-ショートが揺れず均一に、4弦・5弦のどちらでも転がせる。（1週目完成！）

## ④ ヒント・よくあるミス

- **コードを変えると転がりが死ぬ。** EからAへ移るときロング-ショートがのっぺりしがちです。移動の瞬間も前の音を長く守ります。
- **Aが遅れて出る。** 手を3弦へ移す間に拍が押します。二つのルートをとてもゆっくり行き来して移動を先に整えます。
- **完成物を飛ばす。** 二つのコードが面白いからとEパルスをおろそかにすると根が弱くなります。完成物からしっかり固めます。
- **低音Bの油断（5弦）。** コードが変わる間ずっとBは親指で覆っておきます。手が忙しくなるとBが漏れやすいです。
