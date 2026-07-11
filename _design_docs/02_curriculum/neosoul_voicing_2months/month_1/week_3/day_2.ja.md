---
title: "Ab13 → G13 半音スライド・アプローチ"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 半音スライドですべり込む

## ① 理論・説明

昨日作った **Ab13** を今度は **動かして** みましょう。アプローチコードの核心は、じっとしていないことです。<mark>Ab13を短く押さえてから、半音下のG13へ手全体をすべらせる、それが今日のすべてです。</mark>このすべりをギターでは **スライド** と呼びます。

スライドは **弦から指を離さず** フレットだけを移す奏法です。だから二つの音がぷつっと切れず、**一本の線でつながります。** <mark>目標にストンと着地するのではなく、スケートのようにすべり込む感覚です。</mark>6弦のルートが **4フレット（Ab）** から **3フレット（G）** へつながるその一つが、今日の主役です。

まずは6弦一本だけでスライドを練習します。**4フレット** を押さえて音を出したら、指を **離さず** **3フレット** までスッと押します。<mark>一度のピッキングで二つのフレットがなめらかにつながれば成功です。</mark>

```json
{
  "id": "m1.w3.d2.root_slide",
  "type": "tab",
  "meta": { "title": "Root slide — Ab to G (6th string)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "Ab", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 3, "duration": "half", "label": "G", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70。** 6弦4フレットを弾き、指を付けたまま3フレットまで押します。スライド一回の感覚をつかみます。

## ② ビジュアル資料

では6弦一本ではなく **コード全体** をスライドします。**Ab13** グリップを丸ごと押さえたまま、手全体を半音下へ押せば、そのまま **G13** になります。<mark>四本の指が同時に一つずつすべるのです。</mark>まずアプローチコードのグリップをもう一度目に入れます。

```json
{
  "id": "m1.w3.d2.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — before the slide", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Ab13グリップ。** この手の形のまま、半音下へ押す準備をします。

さあ実際のコードスライドです。前2拍で **Ab13** を押さえ、**半音下のG13** へすべらせると <mark>すべらかに着地</mark>します。スライド記号（弦の上の斜線）に沿って手全体が一つ降ります。

```json
{
  "id": "m1.w3.d2.chord_slide",
  "type": "tab",
  "meta": { "title": "Ab13 slide to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** Ab13（6弦4フレット）を押さえ、半音下のG13（3フレット）へ手全体をすべらせます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 65。** 6弦一本だけで **4→3フレット** スライドを繰り返します。<mark>指が弦から浮かないように</mark>付けたまま押します。

**10〜20分 · 頭のトレーニング（すべりを描く）**
音を出さず **Ab13 → G13** スライドを左手だけで描きます。四本の指が同時に一つすべる軌跡を目で追います。

**20〜40分 · 実践スライド・アプローチ（BPM 75）**
下の **スライド・アプローチ** を繰り返します。<mark>Ab13からG13へ途切れずつながるか</mark>だけを見ます。

```json
{
  "id": "m1.w3.d2.chord_slide_loop",
  "type": "tab",
  "meta": { "title": "Ab13 slide to G13 x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** スライド・アプローチを二回続けてまわします。毎回すべる着地を逃さないように。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。二つのコードがぷつっと切れたか、一本の線ですべったか比べます。

**今日の完了基準：** **Ab13** から **G13** へ手全体を半音スライドし、二つのコードを途切れず一本の線でつなげられる。

## ④ ヒント / よくあるミス

コード **スライド** でよく出るミスだけを挙げます。

```json
{
  "id": "m1.w3.d2.slide_path",
  "type": "fretboard_diagram",
  "meta": { "title": "Slide path — fret 4 to 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab b7", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "G b7", "role": "chord_tone" }
  ]}
}
```
▶ 6弦4→3フレット、4弦4→3フレットが一緒にすべるスライドの道です。

- **指が弦から浮く。** スライドの途中で圧を抜くと音が切れます。最後まで軽く押して付けておきます。
- **押さえが強すぎる。** 力が過ぎると硬くてすべりません。押すのに必要な分だけ押さえます。
- **着地が行きすぎる。** 3フレットで正確に止めます。2フレットまですべるとコードが変わります。
- **テンポが急ぐ。** 半音の距離なので急ぐ必要はありません。**BPM 65** でゆっくりすべりから覚えます。
