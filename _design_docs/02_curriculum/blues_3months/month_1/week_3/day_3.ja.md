---
title: "ダイナミクス — 強弱でグルーヴを生かす"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 強く弱く、強弱でグルーヴを生かす

## ① 理論・説明

三日目です。昨日ストップタイムで余白を作りましたね。今日は**ダイナミクス**、つまり**強くと弱く**を学びます。<mark>全部強く弾くだけだと、どんなに良いリズムものっぺり聞こえます。</mark>強弱があってこそグルーヴが息づきます。同じA7のコンピングも、どこを強く弾きどこを弱く弾くかで、まったく違う感じになります。人の声を思い浮かべてみてください。いつも同じ大きさだけで話す人はいません。大事な言葉には力を込め、流していい言葉は柔らかく — ギターの強弱も、この話し方の抑揚とまったく同じです。強弱がつく瞬間、演奏が語りかけ始めます。

ブルースの核心の強弱は**バックビート**です。4/4で**2拍と4拍**を少し強めに弾きます。<mark>足で1・2・3・4を踏むとき、2と4に重みを乗せてみてください。</mark>これが体が勝手に揺れるグルーヴの秘密です。残りの拍は力を抜いて弱く流します。

方法は簡単です。強く弾くときは手首を大きく、弱く弾くときは手首を小さく動かせばいいのです。<mark>ピックが弦をこする深さを少し変えるだけです。</mark>昨日学んだ**ストップタイム**に強弱まで乗せれば、のっぺりしたブギーが生きたグルーヴに変わります。今日は強くと弱くの**違い**を耳に聞こえるようにするのが目標です。最初はその差を少し大げさにしても大丈夫です。大きく開いておけば、あとで自然に狭められますから。

まず強弱なしで、A7を四拍均等に弾いてみます。

```json
{
  "id": "m1.w3.d3.dyn_flat",
  "type": "tab",
  "meta": { "title": "Flat dynamics — even A7 strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 四拍を全部同じ強さで弾きます。この「のっぺり」をまず感じて、すぐ強弱を乗せます。

## ② ビジュアル資料

今度は**2・4拍**に重みを乗せてみます。<mark>八回払い下ろすうち、2拍と4拍だけ手首を大きく使います。</mark>残りは弱く流します。

```json
{
  "id": "m1.w3.d3.backbeat_comp",
  "type": "tab",
  "meta": { "title": "Backbeat comp — accent beats 2 and 4", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "up", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "up", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "up", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "up", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** **2拍・4拍は強く（ダウン）、残りは弱く。** ダウン・アップを交互に払いながら、バックビートに重みを乗せます。

強弱が入ると、同じコードでも<mark>体が勝手に揺れる感じ</mark>が出ます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。**A7**を強く一回、弱く一回と交互に弾きます。二つの音の大きさの違いを耳で確認します。

今度は昨日の色を足して、**A9**で強弱コンピングをしてみます。

```json
{
  "id": "m1.w3.d3.dynamic_a9",
  "type": "tab",
  "meta": { "title": "A9 comp with dynamics", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** **A9**を2・4拍で強く、残りは弱く。9度の色と強弱が一緒に生きてきます。

**10〜20分 · 頭のトレーニング（今日のターゲット＝バックビートに重みを乗せる）**
音を出さず手首だけ動かして、強・弱・強・弱を<mark>大げさに練習します。</mark>

**20〜40分 · 実践強弱コンピング（BPM 80）**
上の例を<mark>途切れず</mark>繰り返しながら、2・4拍がしっかり際立つか聞きます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
強弱コンピング一小節を録音します：<mark>強くと弱くが区別されて聞こえるか</mark>。

**今日の完了基準：** **A7**またはA9のコンピングで、2・4拍を強く、残りを弱く弾いて、強弱がはっきり聞こえる一小節を弾ける。

## ④ ヒント / よくあるミス

強弱を入れるときによく出るミスです。弱くは**「弾かないこと」ではありません。**

```json
{
  "id": "m1.w3.d3.dyn_soft_voicing",
  "type": "fretboard_diagram",
  "meta": { "title": "Soft touch — brush the lower three strings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **弱くてもはっきり。** 弱いときは下の三弦だけ軽く払ってもいいです。音が小さくても、音は生きていなければなりません。

- **弱くが消える。** 力を抜きすぎると音がまったく出ません。小さくても聞こえるように弾きます。
- **強くが荒い。** 強く弾こうと振り下ろすとピッチが揺れます。手首を大きく、なめらかに使います。
- **強弱が逆になる。** 1・3拍を強く弾くとグルーヴがぎこちなくなります。2・4拍に重みを乗せます。
- **テンポが揺れる。** 強く弾くとき速くなりがちです。強弱が変わっても足は一定に踏みます。
