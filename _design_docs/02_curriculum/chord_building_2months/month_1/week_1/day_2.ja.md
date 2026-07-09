---
title: "メジャー → マイナー — 3度を半音下げると表情が変わる"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — 指1本で明るさを悲しみに

## ① 理論・説明

今日これをやる理由はこうです — コード1つをちゃんと掘っておけば、マイナーコードが何十個も無料で付いてきます。昨日、Gメジャーの中で**3度（B）**を目に焼き付けましたね？ 今日はその3度だけを触ります。<mark>指1本、1フレットだけ</mark>。ルールはたった1行です。

> **<mark>3度を半音下げれば</mark>（3 → b3）メジャーがマイナーになる。**

指板では、3弦の**4フレット（B、3度）**を1つ下の**3フレット（B♭、b3）**へ下げるだけ。指1本、1フレット。それだけでコードの表情が<mark>「明るさ」から「悲しみ」へ</mark>ガラッと変わります。R・5は一切触りません。

最初は「これで本当に全部？」と物足りなく感じるかもしれませんが、**<mark>その物足りなさが正常です</mark>。** いい原理はこんなに単純なんです。明暗を分けるのはいつも3度1つ — 今日はそれを手で一度、しっかり感じる日です。

```json
{
  "id": "m1.w1.d2.gm_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm — 6th-string root (E-form minor)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

なぜ重要か。これから先どんなコードに出会っても「このコードの3度はどこ？ 長3度か短3度か？」を問うだけで、明るいか暗いか一瞬で分かります。60個の形を覚える代わりに、**<mark>3度という1か所</mark>**だけ追えばいい。Am・Cm・Fm、どれも「あ、3度を半音下げればいい」と自分で作れるようになります。

## ② ビジュアル

まず、昨日のGメジャーから3度だけ半音下げた**Gマイナー（Eフォーム）**。3弦が4フレット→3フレットに下りたのが見えますね。緑がその**b3（B♭）**、<mark>今日の主役</mark>です。

```json
{
  "id": "m1.w1.d2.gm_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm — 6th-string root (E-form minor)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**例1 — 3 → b3 対比ライン。** 同じ3弦で4フレット（長3度B）と3フレット（短3度B♭）を並べて弾き、その半音差が生む感情の違いを耳でつかみます。

```json
{
  "id": "m1.w1.d2.third_compare_line",
  "type": "tab",
  "meta": {
    "title": "3 vs b3 compare — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 70。** 「ルート → 長3度 → 短3度 → ルート」。3度からb3へ下がる瞬間、表情がぐっと暗くなるのを感じて。4回反復。

**例2 — メジャー ↔ マイナー切替コンピング。** 同じリズムで1小節目はG、2小節目はGm。示された音ごとに**コード全体をストローク**しますが、実際に動くのは**3弦の指1本（4↔3フレット）だけ**だと確認して。

```json
{
  "id": "m1.w1.d2.maj_min_comp",
  "type": "tab",
  "meta": {
    "title": "G to Gm switch comp — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 75、4回反復。** 1小節目は明るいG、2小節目は暗いGm。リズムは同じで、動くのは3弦の指1本だけ。その1フレットが曲の雰囲気を変えることを手で覚えて。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
G ↔ Gm を4拍ごとに交互に押さえます。3弦の指だけを4フレット↔3フレットに動かし、他の指はできるだけ離さないのがポイント。<mark>切替がぶつ切れにならないように</mark>。

**10〜20分 · 脳トレ（今日のターゲット＝b3）**
**例1**を押さえながら「サード／フラットサード」と声に出します。目を閉じて3弦の4フレットと3フレットを正確に交互に押さえられれば合格。この1フレットが今週ずっと使う「<mark>マイナースイッチ</mark>」です。

**20〜40分 · 実戦伴奏（例2コンピング / 70〜80 BPM）**
バッキングなしでもOK。**例2をBPM 75で4回反復** — 1小節G、2小節Gm。慣れたらルートだけ5弦に移して（例：C ↔ Cm）同じ切替を応用。手ではなく「<mark>3度を下げた</mark>」という考えで切り替えるのがカギ。

**40〜50分 · 録音・セルフフィードバック（推奨）**
G ↔ Gm の切替を30秒録音。チェック：切替の瞬間に**<mark>別の弦が巻き込まれて死なないか</mark>**、b3がはっきり鳴るか。潰れたら3弦の指先を立てて。

**今日の完了基準：** 3弦の4↔3フレットだけでG ↔ Gmを途切れず切り替え、目を閉じてb3を押さえられる。

## ④ ヒント / よくあるミス

- **手全体を握り直す。** マイナーへ行くとき手の形を丸ごと変えようとすると遅くなります。<mark>3弦の指1本だけ、1フレット</mark>。他は付けたまま。
- **b3が鳴らない。** 3弦3フレットが死ぬなら、隣の指が軽く覆っています。<mark>指先を立てて3弦だけきれいに</mark>。
- **「悲しいコードの形」で覚える。** Gmを形で覚えないで。「<mark>Gの3度を半音下げたもの</mark>」と覚えれば、A・C・Dどこでも同じように通用します。
- **5度まで触る。** <mark>5度（D）は今日動きません</mark>。指が5度まで追って動くとコードがぐらつきます。
