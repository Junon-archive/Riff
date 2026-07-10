---
title: "ペンタトニックの味見 — 次の旅の予告編"
dayKey: "m1.w4.d3"
estMinutes: 30
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 次のトラックの扉を開く最初のスケール

## ① 理論・説明

今週はずっとコードを扱いました。今日は少し向きを変えて<mark>メロディ</mark>を味見します。ソロ、つまりギターが歌うあの音は、たいてい「**ペンタトニック**」というスケールから出ます。**5つの音でできたスケール**で、変に聞こえる音が1つもないので、初心者が適当に押さえてもそれっぽく聞こえます。今日はこれを<mark>味見</mark>としてだけ開いてみます — 本格的なマスターは次の旅の役目ですから。

フォームは「**ボックス1**」と呼びます。5フレット付近で1弦に2音ずつ、6本の弦をはしごのように上り下りする形です。青い音がルート（A）で、緑で強調された音が**b3** — このスケールの色を決める特別な音です。指は人差し指（1）と薬指・小指（3・4）しか使わないので難しくありません。5つの音が1つの手の形に収まるので、指板で迷うこともありません。今日はこのフォームを上下になぞって手に入れるだけでOKです。

ここに魔法を1つ加えます。<mark>ハンマリングとプリング</mark>です。1音を弾いたあと、ピッキングせずに指で次の音を「叩いて」鳴らすのが**ハンマリング**、逆に指を「弾いて」下の音を出すのが**プリング**です。この2つがあってこそ、ソロがぶつ切りにならず歌うようにつながります。ピッキングを省くほど、音はよりなめらかに流れます。今日は短い3音リック1つでその感覚を初めて味見すれば、次のトラックの扉はもう開いています。

## ② ビジュアル資料

まず今日の地図、**Aマイナー・ペンタトニックのボックス1**です。青いルート（A）から始めて6本の弦を上り下りします。

```json
{
  "id": "m1.w4.d3.pentatonic_box1",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic — Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```

▶ **BPM 70、1音ずつ。** 6弦のルート（A）から1弦まで上り下りして手に入れましょう。このフォームは次のトラックであなたの最初のソロになります。

では6弦でハンマリング・プリングを練習します。ルート（A）とb3をピッキング1回で行き来します。

```json
{
  "id": "m1.w4.d3.legato_drill",
  "type": "tab",
  "meta": { "title": "Legato drill — hammer-on and pull-off (R to b3)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ BPM 70。ルート（A・5フレット）を1回だけピッキングし、小指で緑のb3（8フレット）を叩きます（ハンマリング）→ 指を弾いてルートへ戻ります（プリング）。

最後に<mark>3音のリック</mark>です。ルートからb3へハンマリング、またルートへプリング — **ボックス内の3音だけ**で歌います。

```json
{
  "id": "m1.w4.d3.first_lick",
  "type": "tab",
  "meta": { "title": "First lick — R hammer b3 pull R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "duration": "quarter", "finger": 4, "label": "b3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 1, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ BPM 70。1弦のルート（5フレット）を弾いて緑のb3（8フレット）へハンマリング、またルートへプリング。3音がひと息でつながれば成功です。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
BPM 70でボックス1を6弦のルートから1弦まで1音ずつとてもゆっくりなぞり、フォームを手にのせます。

**7〜17分・今日の技術**
6弦のレガート・ドリルを繰り返します。ピッキングは最初の1回、残りは<mark>叩いて弾く</mark>**左手の力**で音を出します。2音がはっきり鳴るか確認します。

**17〜27分・応用**
3音リックをBPM 70で繰り返す → **3音がなめらかにつながったら**そのまま保ちます。リックを2〜3回つなげて小さなフレーズのように弾いてみてもいいです。

**27〜30分・チェック**
届いたBPMを書き留め、30秒録音してハンマリング・プリングがピッキングなしでもはっきり鳴るか聴いてみましょう。

**今日の完了基準：** Aマイナー・ペンタトニックのボックス1を上り下りし、ハンマリング・プリングで3音リック1つをなめらかに弾ける。

## ④ ヒント / よくあるミス

- **ハンマリングが弱い。** 指をそっとのせると音が出ません。フレットのすぐ後ろをぱちっと鳴るように叩きます。
- **プリングがただ離すだけ。** 指を上に離すだけだと音が死にます。弦を下に軽く弾くように抜くと下の音が鳴ります。
- **ボックスの外に出る。** 今日は5フレットのボックス内の音だけ使います。手になじむまでは、この場所を離れなくても十分です。
- **味見なのに完璧を欲張る。** 今日はちょうど扉を開く日です。ペンタトニックを完全にマスターするのは次のトラックでゆっくり。
