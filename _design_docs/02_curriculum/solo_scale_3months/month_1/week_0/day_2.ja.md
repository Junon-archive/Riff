---
title: "Week 0 · Day 2 — 毎日のウォームアップの原型：オルタネイトピッキング＆フィンガー独立"
dayKey: m1.w0.d2
estMinutes: 50
i18nKey: lesson.m1.w0.d2
lang: ja
---

# Day 2 — オルタネイトピッキング＆フィンガー独立の予熱ルーティンを作る

## ① 理論・説明

今日なぜこれをやるかというと、これから毎朝スイッチが入る**<mark>「手のエンジンをかけるルーティン」</mark>**を、今日完成させておきたいからです。即興ソロはアイデア勝負ですが、どんなにアイデアが良くても、手がついてこなければ頭の中のメロディは指先で崩れてしまいます。だから私たちは、毎日の最初の10分間を**決まった予熱セット**で始めます。今日、そのセットを体に刻み込みます。

今日押さえるのは二つだけ。**<mark>オルタネイトピッキング</mark>**と**<mark>フィンガー独立</mark>**です。

### 1) オルタネイトピッキング＝ダウンとアップの平等主義

オルタネイトピッキングは単に「ダウン–アップを交互に弾く」ことです。でも、中級者はここでひそかにつまずきます。弦を移動するとき、無意識にダウン–ダウンを2回続けてしまったり、難しい箇所でアップピッキングをこっそり飛ばしてしまったり。これが後々、速いパッセージや16分音符のフレーズでリズムが滑る原因になります。

大事な感覚はこれです。**「アップピッキングもダウンピッキングと同じくらい<mark>大きく、はっきりと</mark>。」**多くの人は、アップがダウンより小さく、遠慮がちになってしまいます。今日はむしろアップを少し大げさに弾いてみてください。

### 2) フィンガー独立＝使っていない指も待機状態に

フィンガー独立とは、「一本の指を動かしたとき、他の指が一緒についてこないこと」です。特に3の指（薬指）と4の指（小指）は神経がほぼつながっているようなもので、薬指を上げると小指もぴょこんとついてきてしまいます。これが、即興のときに「弾きたい音に指が遅れて到着する」<mark>原因の9割</mark>を占めています。

解決策として有名なのが**<mark>スパイダーウォーク（クロマチック1–2–3–4）</mark>**です。1フレットに1本ずつ指を割り当てて、**<mark>押さえている指はそのまま押さえたまま</mark>**、次の指を下ろすのがポイントです。地味ですが、これを2週間毎日続けるだけで、手がまるで別人の手のようになります。

## ② 視覚資料

**(a) スパイダーウォーク — クロマチック1-2-3-4（上行）**

```json
{
  "id": "m1.w0.d2.spider_1234",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Spider walk — chromatic 1-2-3-4 across strings",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "tempoBpm": 60
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "chromatic_1234",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 6, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 6, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 6, "fret": 4, "duration": "eighth", "finger": 4 },
        { "string": 5, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 5, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 5, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 5, "fret": 4, "duration": "eighth", "finger": 4 }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 4, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 4, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 4, "fret": 4, "duration": "eighth", "finger": 4 },
        { "string": 3, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 3, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 3, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 3, "fret": 4, "duration": "eighth", "finger": 4 }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 2, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 2, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 2, "fret": 4, "duration": "eighth", "finger": 4 },
        { "string": 1, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 1, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 1, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 1, "fret": 4, "duration": "eighth", "finger": 4 }
      ]}
    ]
  }
}
```

**(b) フィンガー独立強化 — 1-3-2-4順列（薬指・小指の分離）**

```json
{
  "id": "m1.w0.d2.finger_independence_1324",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Finger independence — 1-3-2-4 permutation",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "tempoBpm": 55
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "chromatic_1324",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 6, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 6, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 6, "fret": 4, "duration": "eighth", "finger": 4 },
        { "string": 5, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 5, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 5, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 5, "fret": 4, "duration": "eighth", "finger": 4 }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

このセットは、これから**<mark>毎日繰り返すウォームアップの原型</mark>**になります。今日、この順番を体に覚えさせましょう。

**0〜10分・ウォームアップ（BPM 60 → 少しずつ上げる）**
- 上の(a)スパイダーウォーク1-2-3-4を6弦→1弦まで、そしてまた1弦→6弦へ戻りながら往復。
- ルール：**<mark>押さえている指は、次の音まで離さない</mark>。**オルタネイトピッキングのダウン–アップも厳守。
- 完了の目安：BPM 60で音のかすれやリズムの乱れなく2往復できたら、4ずつ上げて72まで挑戦。

**10〜20分・頭のトレーニング（BPM 55）— フィンガー独立**
- 上の(b) 1-3-2-4順列を6弦・5弦で。余裕があれば2-4-1-3、4-3-2-1の順列もその場で作ってみましょう。
- **鏡チェック：**薬指を押さえるとき、<mark>小指が指板から浮いていないか</mark>目で確認します。小指は常に指板から1cm以内で待機。
- 完了の目安：小指が跳ね上がらずに1小節を弾き切れる。

**20〜40分・実戦感覚（BPM 75、Amバッキング）— 二音即興**
- 昨日は一音でした。今日は**<mark>二音（A根音＋C、つまり♭3）</mark>**に増やします。1弦5フレット（A）と8フレット（C）だけを行き来しながらリズム遊び。
- ちょっとした先取り：**コードが鳴っているときに<mark>C（8フレット）で止まってみてください</mark>。**「あれ、なんかしっくりくる」というあの感覚——それが3度着地の予告編です。
- 完了の目安：バッキング一周の間、二音だけで固まらずフレーズを作れる。

**40〜50分・録音・フィードバック（推奨）**
- 上の二音即興を30秒録音。聴き直してチェック：**「Cで止まったときのほうが、Aで止まったときより安定して聞こえたか？」**
- 正解を強要するものではありません。耳を開くことが目的です。

## ④ ヒント・よくある間違い

- **速さを欲張らないこと。**スパイダーウォークは速く弾くためではなく、**正確に**弾くためにあります。音がかすれる速さは、もう速すぎるということです。4BPMずつだけ上げましょう。
- **アップピッキングが小さい。**10人中9人がここで引っかかります。今日だけアップピッキングをわざと大げさに弾いてみると、両方の音量が揃ってきます。
- **小指の逃走。**薬指を押さえたときに小指が跳ねるなら、いっそ小指を指板に軽く乗せたまま練習してみてください。「くっついている習慣」から作っていきましょう。
- **手首や腕に痛みが出たら、すぐに中止してください。**予熱は体を目覚めさせるためのものであって、酷使するためのものではありません。肩の力を抜いて、ピックは軽く握るだけで十分です。
