---
title: "ボイスリーディングとは — トップノートを自分で選ぶ"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 同じコード、どのトップノートをのせる？

## ① 理論・説明

5週目で、同じコードもトップ（一番上の音）に何を置くかで複数の位置があると見ました。今週の核心は、それを**意図的に選ぶ**こと — なぜなら**トップノートを並べるとメロディになる**からです。

アマチュアはコードをただ「かたまり」で、手の向くまま変えます。プロはまず「この進行で一番高い音がどう歌えばいいか」を決め、そのトップノートを作るボイシングを選びます。するとコード伴奏がメロディのある「歌」になります。

今日はウォームアップ。同じ**Gコード**をトップノートだけ変えて（Rまたは3）2つの位置で押さえ、トップノートがメロディの材料だと感覚でつかみます。今日は2つの位置を行き来するだけ — まだメロディを作ろうと頑張る必要はありません。「一番上の音がそのままメロディになる」という一文だけ体に刻めば、明日からあなたの伴奏の上で本物の歌がはじまります。

## ② ビジュアル

**G — トップノート＝R（G）。** 緑がトップノート。

```json
{
  "id": "m2.w7.d1.g_top_root",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note R", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 2, "label": "R", "role": "target", "highlight": true }
  ]}
}
```

**G — トップノート＝3（B）。** 同じGなのに一番上が3度に変わりました。

```json
{
  "id": "m2.w7.d1.g_top_third",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 3", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**例1 — トップノートで作る短いメロディ。** 1弦でGの3音（R·3·5）を選んで小さな旋律を作ります：G → B → D → B。コードではなく**トップノートが歌う**感覚を先取り。

```json
{
  "id": "m2.w7.d1.top_melody_intro",
  "type": "tab",
  "meta": { "title": "Top-note mini melody — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72。** 1弦3 → 7 → 10 → 7フレット。この4音がGのR·3·5で作った短いメロディです。トップノートが歌になり得るのを耳で。4回反復。

**例2 — 同じG、トップノートだけ変えてコンピング。** 1小節トップ＝R、2小節トップ＝3。コードはGのまま、一番上の音が変わるのを比較。

```json
{
  "id": "m2.w7.d1.same_chord_top_comp",
  "type": "tab",
  "meta": { "title": "Same G, different top — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76。** どちらもGですが、トップノートがR（1:3）から3（1:7）へ移ります。「同じコードでもトップを選べばメロディが始まる」を手で。4回反復。

**例3 — コード全体コンピング。** 例2で低音＋トップノートだけ押さえていた同じG（トップ R → 3）を、今度はトライアド全体で鳴らします。トップノートはそのまま和音の一番上で歌います。

```json
{
  "id": "m2.w7.d1.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (same G, different top) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76。** 例2と同じリズムで、今度は和音全体で。コードがぐっと豊かに響くのを感じて。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Gの2つの位置（トップ＝R、トップ＝3）をそれぞれ押さえ、1・2・3弦だけきれいに。ネック上の2か所を行き来する手の移動に慣れる。

**10〜20分 · 脳トレ（今日のターゲット＝トップノート選択）**
各位置で**一番上の音が今何か**を声に出します。目を閉じて「トップ＝3！」で7フレットの位置をすぐ。**例1**でトップノートがメロディになるのを確認。

**20〜40分 · 実戦伴奏（例2コンピング / 72〜82 BPM）**
**例2をBPM 76で4回反復。** 同じGでトップをR↔3に変えて色を比較。慣れたらトップ＝5（1:10）も入れて3か所を行き来し、トップノート・メロディを作って。

**40〜50分 · 録音・セルフフィードバック（推奨）**
トップノート変えを30秒録音。チェック：トップノートがはっきり聞こえるか／位置移動が滑らかか。

**今日の完了基準：** 同じGをトップノートR·3（·5）の複数位置で押さえ、トップノートを選んで短いメロディを作れる。

## ④ ヒント / よくあるミス

- **トップノートを偶然に任せる。** プロはトップを「選ぶ」。どの音が一番上に来ればいいかを先に考えて。
- **トップノートが鳴らない。** 1弦の一番上の音が死ぬとメロディが聞こえません。指先を立ててはっきり。
- **位置移動が大きなジャンプ。** 今日は概念。明日から最小移動でつなぎます。
- **トップばかり見てコードを疎かに。** 下の2音がコードを作り、トップはその上のメロディ。
