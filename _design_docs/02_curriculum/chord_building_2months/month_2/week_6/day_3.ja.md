---
title: "7 → 9 — ドミナントに9度をのせて華やかに"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — テンションが一番上に来ると音がきらめく

## ① 理論・説明

今度はドミナント7（C7）に9度をのせて**C9**を作ります。ドミナントの緊張（b7）の上に9度（D）の色が足されると、ファンク・ソウル・モータウンのあのきらめくコンピングの音が出ます。

- **C7の骨組み** ＝ R（C）· 3（E）· b7（B♭）。（緊張を秘めたドミナント。）
- **9度（D）をのせると** ＝ **C9**。緊張はそのまま、色だけ華やかに。

今日のポイントは**9度が一番上（トップノート）に来る**こと。基本のC7では一番上がb7でしたが、C9ではその上に9度（D）がのって、コードの印象がぐっと明るくなります。テンションがトップに来ると特に華やかに聞こえます — これが来週（7週目）のトップノート・リーディングの種です。今すぐ完璧に消化できなくても大丈夫。「9度を一番上にのせると明るくなる」と耳で確かめておけば、来週この音をメロディにつなぐときがぐっと楽になります。今日はmaj9・m9・9の三兄弟が全員そろった日だと思ってください。

## ② ビジュアル

まず**C7の骨組み**（R·3·b7）。青の骨格、一番上はb7。

```json
{
  "id": "m2.w6.d3.c7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 skeleton (R·3·b7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

次に**C9** — 2弦に9度（D）をトップにのせました。黄色がその華やかな9度。

```json
{
  "id": "m2.w6.d3.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — 7 vs 9 対比ライン。** R·3·b7まではC7、最後に9度をのせてC9。一番上の音がb7から9度へ上がって華やかになるのを耳で。

```json
{
  "id": "m2.w6.d3.c9_line",
  "type": "tab",
  "meta": { "title": "C9 tones (R·3·b7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 74。** 「ルート → 3度 → b7（緊張）→ 9度（色、トップ）」。一番上に9度がのる瞬間のきらめきを感じて。4回反復。

**例2 — C7 → C9 コンピング。** 1小節C7、2小節9度をトップにのせたC9。テンションが一番上に来るときの華やかさを比較。

```json
{
  "id": "m2.w6.d3.c7_c9_comp",
  "type": "tab",
  "meta": { "title": "C7 to C9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 82, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 82、4回反復。** 1小節の素朴なC7 → 2小節のきらめくC9。9度（黄色）がトップにのって、ファンク/ソウル・コンピングの華やかさが出ます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
C7 → C9（9度をトップに追加）を交互に。2弦の9度が一番上ではっきり鳴るか、骨組みが崩れないかチェック。

**10〜20分 · 脳トレ（今日のターゲット＝トップの9度）**
C9で3度·b7·9の位置を押さえ、特に**一番上の音が9度（トップノート）**だと確認。基本C7のトップ（b7）とC9のトップ（9）を交互に聞いて明るさの違いを耳で。

**20〜40分 · 実戦伴奏（例2コンピング / 78〜88 BPM）**
**例2のC7↔C9をBPM 82で4回反復。** 慣れたらルートを移して（例：G・F）他の9コードで応用。ファンク/モータウンのバッキングに重ねるときらめきが生きます。

**40〜50分 · 録音・セルフフィードバック（推奨）**
C7↔C9を30秒録音。チェック：トップの9度が死なないか／切替のタイミングが濁らないか。

**今日の完了基準：** C7に9度をトップにのせてC9を作り、テンションがトップに来ると華やかになるのを耳で区別する。

## ④ ヒント / よくあるミス

- **トップの9度が死ぬ。** 一番上の音が死ぬと華やかさが聞こえません。2弦の指先を立ててはっきり。
- **C9を「まったく新しいコード」と怖がる。** C7の骨組み＋9度1音。maj9·m9と同じ公式、骨組みだけドミナント。
- **3度を揺らす。** 9度をのせようとして3度（4弦）がミュートされるとドミナント感がぼやけます。
- **トップノートを聞かない。** 来週のトップノート・リーディングの準備。一番上の音の華やかさを必ず感じて。
