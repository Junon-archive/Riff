---
title: "6弦ルートの解剖 — コードは暗記じゃなく組み立て"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — Gコードを分解して「ルート上の組み立て」を学ぶ

## ① 理論・説明

今日これをやる理由はこうです。私たちがコードを弾けないのは、暗記できないからじゃありません。**形だけで覚える**から応用が効かないんです。「Gはこの形、Cはあの形」と20個覚えても、21個目でまた止まります。その壁、一度はもどかしく感じたことありますよね？ だから今日からルールをまるごと変えます。コードを形ではなく、**ルートの上に積んだ音**として見るんです。

基準点はたった1つ、**ルート（R）**。今日はルートが**6弦**にあるコード（いわゆる「Eフォーム」）を解剖します。例は3フレットの**Gメジャー**。怖がらないで — この大きなコードの中にも、実は3種類の音しかありません。

```json
{
  "id": "m1.w1.d1.g_major_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G major — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

- **R（ルート）** — 6弦・4弦・1弦にあるG。コードの名前であり、家。
- **3（3度）** — 3弦のB。コードの**表情**を決める音。明るいか暗いかは全部この3度が決めます。
- **5（5度）** — 5弦・2弦のD。コードを厚く支える柱。性格は変えません。

つまりGメジャーは「複雑な6本指の形」ではなく、**R・3・5の3つの材料を6弦ルートの上に乗せたもの**にすぎません。6つの不慣れな点ではなく、3つの慣れた材料 — そう見ればコードが急に軽くなります。今日はこの3つの音が指板のどこにあるかを目で完全に分解しておきます。特に**3度（B）**を目に焼き付けて。今週はずっと「ここを半音下げればマイナー、ここに足せば7」というふうに、**すべての変化が3度と7度、たった2か所だけ**で起きます。この地図を頭に入れておけば、残り3日は楽勝です。

## ② ビジュアル

まず今日の主役、6弦ルートのGメジャー（Eフォーム）。青がルート・コードトーン、その中でも3弦の**3度（B）**が表情を握る音です（緑で強調）。

```json
{
  "id": "m1.w1.d1.g_major_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G major — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**例1 — コードトーン確認ライン（R・3・5・R）。** 3つの材料を1音ずつ音で確認します。**五線譜とタブが一緒に**出るので、音が実際どれだけ高くなるか（五線譜）と、どの弦の何フレットか（タブ）を同時に見てください。

```json
{
  "id": "m1.w1.d1.g_chordtones_line",
  "type": "tab",
  "meta": {
    "title": "G chord tones (R·3·5) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 70で1音ずつはっきりと**押さえ、名前を声に出して（「ルート・サード・フィフス・ルート」）。緑で強調された**3度（B）**の響きをコードの表情として耳に刻みます。4回反復。

**例2 — Gコンピング・リズムの骨組み。** 今度は実際に伴奏するリズムです。示された音ごとに**Gコード全体をストローク**し、8分休符のあとのパームミュート（P.M.）ゴーストでグルーヴを作ります。拍は五線譜の音価で確認してください。

```json
{
  "id": "m1.w1.d1.g_comp_rhythm",
  "type": "tab",
  "meta": {
    "title": "G comping rhythm skeleton — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 75で4回反復。** 「チャッ —（休）— トッ — チャッ —（休）」の感覚で、3つ目のパームミュートは少し殺してグルーヴの呼吸を作ります。慣れたらルートだけを5弦（Cなど）に移して、同じリズムで応用してみましょう。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
3フレットのGメジャー（Eフォーム）を押さえ、6本の弦を1本ずつゆっくり鳴らします。すべての弦が潰れずはっきり鳴るか、特に人差し指のバレが押さえられているか確認。鳴らない弦があれば指の角度を少し立てて。

**10〜20分 · 脳トレ（今日のターゲット＝3度B）**
**例1**をメトロノームなしで押さえ、「ルート・サード・フィフス・ルート」と声に出します。次に3弦の**3度（B）だけ**をピンポイントで何度も押さえて。この音が今週のスイッチです。目を閉じて3度に着地できれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 70〜80 BPM）**
「G major backing track」を流し、**上の例2のコンピング・リズムをBPM 75で4回反復**します。心の中で「ルート・サード・フィフス」と唱え、今鳴っている音の正体を意識し続けて。リズムに慣れたらルートだけ5弦に移して同じパターンで応用。まだコードは変えません — 今日は「この響きがR・3・5でできている」感覚とグルーヴだけ。

**40〜50分 · 録音・セルフフィードバック（推奨）**
最後のコンピングを30秒だけ録音して聴き返します。チェックはひとつだけ：**6本の弦がすべて生きているか**、どれかが死んで潰れていないか。死んだ弦があれば、その指の角度だけ明日直せばOK。

**今日の完了基準：** Gメジャー（Eフォーム）を6弦きれいに鳴らし、その中のR・3・5を目を閉じて押さえて名前を言え、例2のコンピング・リズムをBPM 75でぶれずに反復できる。

## ④ ヒント / よくあるミス

- **「形」に逆戻り。** 「とりあえずGの形」で覚えようとする慣性が出たら、あえてR・3・5を声に出しながら押さえて。名前を付けた瞬間から応用が始まります。
- **3度を聞き流す。** 3度（B）は今週の主役。押さえるたびに少し意識しておくと、明日の「3 → b3」マイナーがタダで手に入ります。
- **人差し指バレが甘い。** Eフォームは人差し指1本で複数弦を押さえます。1弦・2弦が死ぬなら、指先ではなく側面を少し寝かせて押さえて。
- **コンピングが平坦。** 例2でパームミュートのゴーストと休符を活かさないと「チャチャチャチャ」に潰れます。休符は音を空けるのではなく、グルーヴの呼吸だと覚えて。
