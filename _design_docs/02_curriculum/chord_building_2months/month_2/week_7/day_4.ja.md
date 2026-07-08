---
title: "ボイスリーディング統合 — トップノートを歌わせて、プロのように"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — メロディを保ちながら進行を歌に

## ① 理論・説明

今週のゴール。C-Am-F-G進行を**トップノート・メロディ（G-A-A-G）を保ちながら**3音ボイシングでプロのようにコンピングします。ここに5週目（トップノート）＋6週目（テンション）の感覚をのせます。

- **トップは歌。** 進行の間ずっと、一番上の音がG-A-A-Gで流れます。
- **下は支え。** 共通音は付けたまま最小移動。
- **欲しければ色（9度）。** 例えばCに9度（D）を足せばきらめきます。骨組み（メロディ＋コード）はそのまま、色だけ追加 — まさに6週目。

1か月のまとめ：ルートを4弦へ上げて高音域を開き（5週）、9度で色を足し（6週）、今トップノートをメロディでつなぎました（7週）。来週（8週目）はこれを全部混ぜて**自分だけのコンピングを録音**します。ここまで来たということは、コードを「暗記した形」ではなく「メロディを支える道具」として使えるようになったということ。2か月前、コードを1つ変えるだけで手がネックを駆け回っていた自分と比べれば — もう、まったく別の演奏者です。

## ② ビジュアル

**F — トップ＝3（A）。** トップ（A）がAmと同じなのでつながりやすい。緑がトップ。

```json
{
  "id": "m2.w7.d4.f_top_a",
  "type": "fretboard_diagram",
  "meta": { "title": "F triad — top note A (3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "F" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 5, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**G — トップ＝R（G）。** トップがAからGへ1音下りて進行を閉じます。

```json
{
  "id": "m2.w7.d4.g_top_r",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note G (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**例1 — トップノート・メロディ（G-A-A-G）。** 進行の歌のラインだけ。今日保つ旋律です。

```json
{
  "id": "m2.w7.d4.top_line",
  "type": "tab",
  "meta": { "title": "Top-note line (G-A-A-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72。** 1弦3-5-5-3。まずこのメロディを手と耳に。4回反復。

**例2 — C-Am-F-G 3音コンピング（トップ保持）。** 各コードを低音→中→トップと転がして弾き、一番上のG-A-A-Gが歌うように。

```json
{
  "id": "m2.w7.d4.full_triad_comp",
  "type": "tab",
  "meta": { "title": "C-Am-F-G triad comp (top line) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80、4回反復。** 3音を下から転がして弾きつつ、トップ（G-A-A-G）が最後まで歌うように。手はフレット3〜6の1区域。慣れたらCに9度（D）を足して色をのせて。

**例3 — コード全体コンピング。** 例2で低音→中→トップと転がして弾いていたC - Am - F - Gを、今度は3音まとめて一度に鳴らします。トップノート・メロディ（G-A-A-G）は変わらず和音の一番上で歌います。

```json
{
  "id": "m2.w7.d4.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (C-Am-F-G stacked) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "eighth", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "b3", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 5, "duration": "eighth", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "eighth", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "eighth", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80。** 例2と同じリズムで、今度は転がさずコード全体を一度に。進行がより力強く聞こえます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**例1**のトップメロディ（G-A-A-G）を1弦で。次にC-Am-F-Gの4か所を順番に、トップがその旋律につながるか。

**10〜20分 · 脳トレ（今日のターゲット＝メロディ保持）**
各コードでトップがG·A·A·Gだと確認し、共通音がどこでそのまま付くか把握。目を閉じて進行を回し、トップを歌わせて。

**20〜40分 · 実戦伴奏（例2コンピング / 76〜86 BPM）**
**例2をBPM 80で4回反復。** バッキングに重ねて実際の曲のように。トップノート・メロディがはっきり歌うことに集中。余裕があれば1コードに9度を足して色を。

**40〜50分 · 録音・セルフフィードバック＋今週の振り返り（推奨）**
進行を2周録音。チェック：トップメロディが滑らかにつながったか／切替でトップが切れなかったか／手が1区域にとどまったか。

**今日の完了基準：** C-Am-F-Gをトップノート・メロディ（G-A-A-G）を保ちながら3音ボイシングでプロのようにコンピングする。（7週目完成！）

## ④ ヒント / よくあるミス

- **トップが途中で切れる。** コードが変わるときトップノートを失うとメロディが消えます。トップはできるだけつなげて。
- **かたまりで変える。** 依然アマチュアの罠。トップを「選んで」つなぐ感覚を保って。
- **色ばかり追ってメロディを見失う。** 9度はオプション。今日の主役はトップノート・メロディ。
- **振り返りを飛ばす。** 5·6·7週目がどう1つに合わさったか10分でまとめて。来週の録音チャレンジの材料です。
