---
title: "シェルボイシングとは — 5度を捨てて3度・7度だけ残す"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 太ったコードから脂肪を落とすと何が残る

## ① 理論・説明

今までコードは6本の弦を埋めて押さえました。今日は発想を逆転します。**コードから何を捨ててよいか？**

コードの色（明るさ・暗さ・緊張）を決めるのは**3度と7度**。ルートはコードの名前であり柱。では**5度**は？ 5度は実はコードの性格にほとんど貢献しません。バンドではベースがルートを、別の楽器が5度を埋めるので、ギターが5度まで押さえると音がむしろ濁ります。

だからプロは5度（と重複ルート）を思い切って抜き、**ルート・3度・7度だけ**を残します。この3弦のコードを**シェルボイシング**（shell voicing、殻のボイシング）と呼びます。利点は明確：

- **切替が速い** — 指3本しか動かさないから。
- **音が澄む** — バンド内で他の楽器とぶつからない。
- **正体が明確** — 3度・7度だけ残るのでコードの性格がくっきり鳴る。

今日は先週のG7を例に、**6弦フルコード → 3弦シェル**へダイエットします。何かを捨てるなんて損な気がしますよね？　でも不思議なことに、プロほど少なく押さえるんです。指3本しか使わないので、切替はむしろ今までより楽になります — 「少なく押さえるほどプロっぽく聞こえる」を、今日は自分の手で感じてみましょう。

## ② ビジュアル

まず馴染みの**G7フルコード（6弦）**。緑が3度・7度（色を握る音）、青がルート・5度。

```json
{
  "id": "m1.w4.d1.g7_full",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 — full voicing (6 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "role": "root" }
  ]}
}
```

次に5度と重複ルートを捨てた**G7シェル（3弦）**。残るのはR・b7・3だけ。✕が捨てた弦です。音は薄いけれど「G7らしさ」はそのまま。

```json
{
  "id": "m1.w4.d1.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 — shell voicing (R·b7·3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — シェル3音確認ライン。** 残した3音 R → b7 → 3 を1つずつ押さえて音で確認。5度がなくても「緊張感のあるG7」が聞こえるか耳で。

```json
{
  "id": "m1.w4.d1.shell_tones_line",
  "type": "tab",
  "meta": { "title": "Shell tones (R·b7·3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70。** 「ルート → 短7度 → 3度 → ルート」。3音だけでG7の性格が全部出るのを確認。4回反復。

**例2 — G7シェル・コンピング。** 3本の弦（6・4・3）だけストロークし、残りは殺します。薄くくっきりしたコンピングを覚えます。

```json
{
  "id": "m1.w4.d1.g7_shell_comp",
  "type": "tab",
  "meta": { "title": "G7 shell comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** 6・4・3の3本だけきれいに。5弦・2弦・1弦が漏れないようミュートに注意。慣れるとコンピングがずっと軽く速くなります。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
G7フルコード → G7シェルを交互に押さえます。シェルへ行くとき5・2・1弦が確実に死ぬか、3本（6・4・3）だけくっきり鳴るかチェック。

**10〜20分 · 脳トレ（今日のターゲット＝残した音の正体）**
**例1**を押さえて「ルート・短7度・3度」を声に出します。シェルでどれが3度でどれが7度か、目を閉じて指せれば合格。5度がどこにあったかも一緒に思い出して。

**20〜40分 · 実戦伴奏（例2コンピング / 74〜84 BPM）**
**例2のG7シェル・コンピングをBPM 78で4回反復。** 3本だけの薄い音に慣れる。ブルースのバッキングがあれば上に重ね、フルコードと交互に弾いて音の違いを感じて。

**40〜50分 · 録音・セルフフィードバック（推奨）**
フル vs シェルをそれぞれ15秒録音して比較。チェック：シェルで捨てた弦が漏れて鳴らないか、それでも「G7らしさ」が聞こえるか。

**今日の完了基準：** G7をシェル（R・b7・3）で押さえて3本だけくっきり鳴らし、残した音の正体（3度・7度）を指して言える。

## ④ ヒント / よくあるミス

- **捨てた弦が漏れて鳴る。** シェル最大の敵。ルートを押さえる指先を寝かせて5弦を、3度を押さえる指で2・1弦を軽く覆って。
- **5度を恋しがる。** 5度がなくてもコードは崩れません。むしろバンドで澄みます。怖がらず捨てて。
- **シェルを「小さい形」で覚える。** R・3・7という正体で覚えて。そうすればMaj7・m7へ3度・7度だけ変えて応用できます（明日）。
- **ストロークが広い。** シェルは3本だけ。ピックが5・2・1弦を擦らないよう狭く弾いて。
