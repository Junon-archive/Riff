---
title: "スラップ初日 — 親指で叩くサム（ドン！）"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — 親指で叩くサム、ドン！

## ① 理論・解説

いよいよスラップの扉を開く日です。スラップが難しく聞こえたなら、たった一文だけ覚えてください — **スラップは指ではなくドラムです。** 親指で叩く**サム（Thumb）**は**キックドラム**、指で弾くポップはスネアです。今日はその二つのうち**キック、つまり<mark>サムの音（ドン！）</mark>**だけを出します。派手なラインはひとまず置いて、太く均一な一発だけに集中しましょう。

サムの核心は手ではなく**前腕の回転**です。ドアノブを回すように前腕を少しひねると、親指が自然に弦へ落ちていきます。このとき弦に触れるのは親指の先ではなく**<mark>親指の側面</mark>**です。叩く位置はネックの端、**ブリッジから少し離れた最終フレット付近**が良いです。ここは弦が硬いので「ドン！」という打撃音がよく出ます。

いちばん大切な感覚は**跳ね返り（バウンス）**です。親指で弦を押さえて止めると音は死にます。トランポリンで跳ねるように、**<mark>叩いた瞬間すぐに跳ね返る</mark>**ことで弦がフレットに当たり、あの独特の金属的な「ドン」が生きてきます。今日の目標はただ一つ — **開放E（4弦）**をサムで叩き、**4回とも同じ大きさ・同じトーン**で鳴らすことです。

最初は「ボッ」と鈍い音しか出なくても普通です。跳ねる角度と強さが手に馴染めば、数日で「ドン！」に変わります。**5弦**を使うなら低音Bが下にもう一本あるので、親指が通り過ぎるときにBに触れないよう気をつけるだけです。E・A・D・Gの位置は**4弦とまったく同じ**なので、自分の楽器だけを見てそのままついてきてください。

## ② ビジュアル資料

今日は左手をほとんど使いません — **開放E**の一音をサムだけで叩きます。まず親指が狙う**打点**をフレットボードで確認し、次に4分音符・8分音符で<mark>同じトーンを細かく</mark>つないでいきます。各例は**4弦・5弦の二つのバージョン**で並べました。

まずは**サム打点マップ**です。青い点がルートE（4弦） — 親指の側面でこの弦をブリッジ付近で弾きます。

```json
{
  "id": "m1.w1.d1.thumb_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb slap spot on open E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 青い点がルートE（4弦）です。親指の側面でこの弦をブリッジ付近で弾きます。

```json
{
  "id": "m1.w1.d1.thumb_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb slap spot on open E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** Eの位置は4弦と同じです。低音Bは親指が通り過ぎるとき触れないよう軽く覆っておきます。

**例1 — サム4分音符。** 1拍に1回、開放Eをサムで叩きます。譜面の**T**は親指で叩けという意味です。

```json
{
  "id": "m1.w1.d1.thumb_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** メトロノーム1拍にサム1回（T）。4回とも「ドン」の大きさが同じか耳で確認します。

```json
{
  "id": "m1.w1.d1.thumb_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。低音Bは親指で覆って鳴らないようにしておきます。

**例2 — サム8分音符。** 1拍を二つに割って8回。速くなっても<mark>「ドン」のトーンが崩れない</mark>ところまでだけ上げます。

```json
{
  "id": "m1.w1.d1.thumb_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 1拍に2回ずつ。速くなっても「ドン」のトーンが「ボッ」につぶれないように。

```json
{
  "id": "m1.w1.d1.thumb_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb slap on open E — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 4弦と音は同じです。ここでも低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
肩と腕の力をふっと抜き、**前腕をドアノブのように**軽くひねる動きだけを繰り返します。まだ音より**楽な回転**が先です。

**10〜20分 · 頭のトレーニング**
開放Eをとてもゆっくりサムで叩きます。<mark>親指の側面が弦を叩いてすぐ跳ね返るか</mark>、その**跳ね返り**にだけ集中します。

**20〜40分 · 実践**
例1（4分音符）を**BPM 60**で反復 → 「ドン」が揃ったら例2（8分音符）へ進み**BPM 65**。音が「ボッ」と鈍くなったら4分音符に戻します。

**40〜50分 · 録音・フィードバック**
30秒録音して**4回のサムが同じ大きさ・同じトーン**か聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** 開放Eをサムで叩き、60〜65で4回とも同じ大きさ・同じ「ドン」トーンで均一に鳴らせる。

## ④ ヒント・よくあるミス

- **弦を押さえて止めてしまう。** 親指が弦に付いたままだと音が死にます。叩いた瞬間トランポリンのように跳ね返らせましょう。
- **親指の先で叩く。** 先ではなく側面で叩くと、広く硬い「ドン」が出ます。親指を少し寝かせます。
- **強すぎる。** 力で叩くと手が痛いだけでトーンはむしろ悪化します。強さより跳ねる角度が音を作ります。
- **低音Bの油断（5弦）。** サムに集中してBをかすめると低音がうなって漏れます。親指は常にBを覆って通り過ぎましょう。
