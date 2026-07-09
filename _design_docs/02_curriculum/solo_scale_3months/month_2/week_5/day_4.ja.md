---
title: "Aナチュラルマイナー統合ジャム — B・Fを彩りに、Cへ着地"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
lang: ja
---

# Day 4 — 全部合体：ペンタ5音＋2音を、一つの歌うスケールに

## ① 理論・説明

今日なぜこれをやるかというと、今週ずっとやってきたことを一言でまとめるとこうなります——**ペンタトニック（5音）にB（2度）とF（6度）という橋を2本架けて、Aナチュラルマイナー（A・B・C・D・E・F・G）7音を完成させた。**今日はその7音をバラバラにではなく**一つの歌うスケール**として合体させ、Amバッキングの上で本物のソロのように転がしてみる日です。

核心は変わらず**役割分担**です。骨格はペンタトニック5音（A・C・D・E・G）、BとFはその骨格をつなぐ彩り用の経過音です。Bは上へ（A→B→C）、Fは下へ（F→E）と流れながら骨格を滑らかにつないでいきます。そしてこの流れはすべて最終的に一か所に集まります——**C（♭3）、Amの3度着地点**。3か月間ずっとお伝えしてきたあのホームベースですね。今日確認してほしいことはたった一つ。「追加した2音がスケールを複雑にしたのではなく、むしろ着地をより滑らかで歌うようなものにしてくれた」という感覚です。

だから今日はドリルではなく**音楽**を作ります。上行下行の羅列は今日も禁止。代わりに3度インターバルと4連音、そしてB・F経過音を自由に混ぜながら、**フレーズの終わりは必ずCに着地し、ビブラートで締めくくって**ください。着地音をビブラートで揺らすと、その瞬間スケール練習が「歌」に変わります。これが来週の平行調（Am↔C）に進む前の、今月最初の関門です。

## ② 視覚資料

今週の成果物、**Aナチュラルマイナー第1ボックス全体**です。ペンタトニックの骨格（白）＋経過音B・F（緑）＋着地C（緑）。7音が一つのボックスに全部集まりました。

```json
{
  "id": "m2.w5.d4.a_natural_minor_box1_full",
  "type": "scale_shape",
  "meta": {
    "title": "A natural minor — Box 1 (pentatonic + added 2nd B & 6th F)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 8, "finger": 4, "label": "6", "role": "passing", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "finger": 2, "label": "6", "role": "passing", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今日の統合リックです。1小節目で**A-B-C**（上へ向かう橋）と**F-E**（下へ向かう橋）を両方使い、2小節目でFをもう一度流したあと、**C（♭3）にビブラートで着地**します。

```json
{
  "id": "m2.w5.d4.natural_minor_jam_lick",
  "type": "tab",
  "meta": {
    "title": "A natural minor jam lick — B & F as color, resolving to b3 (C) with vibrato",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 90）**
メトロノーム90に合わせて、Aナチュラルマイナー第1ボックス全体を3度インターバルで一周します。ただし、BとFを通るときは居座らず流してください——Bは上のCへ、Fは下のEへ。今週学んだ2つの方向を体で確認するための予熱です。団子になったらBPM 80に落としましょう。

**10〜20分・頭のトレーニング（今日のターゲット＝着地C＋B・Fの4か所）**
メトロノームを止めて、上の統合リックを手に馴染ませます。特に最後の**C（3弦5フレット）ビブラート着地**を繰り返し。ビブラートは手首を左右に軽く揺らして音を「震わせる」ものです。大きく揺らす必要はありません、一定に。そして、B（6/7、1/7）とF（5/8、2/6）の4か所を目を閉じて押さえながら、それぞれの解決方向（B↑C、F↓E）をもう一度確認しましょう。

```json
{
  "id": "m2.w5.d4.natural_minor_jam_lick",
  "type": "tab",
  "meta": {
    "title": "A natural minor jam lick — B & F as color, resolving to b3 (C) with vibrato",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20〜40分・実戦即興（Amワンコードバッキング／85〜90 BPM）**
「Am backing track」を流して、今日は**完成した7音全部**を自由に使いましょう。ルールは2つ：①B・Fは経過音としてのみ（居座り禁止）、②**すべてのフレーズの終わりはCにビブラートで着地。**今週学んだパーツ（3度ペア、A-B-C、F-E）をレゴのようにつなぎ合わせて、4小節の短いソロを即興で作ってみてください。同じものを繰り返してもOKです——今日は「完成したスケールが自分の手で歌になる」という最初の体験を目指しましょう。

**40〜50分・録音・フィードバック（推奨）**
手元の録音アプリで4小節のソロを録音します。聴き直して、チェックするのは2つ：①**BやFがふわっと浮いたまま終わったところはないか**、②**最後のCのビブラートが一定に震えているか（バラバラになっていないか）。**ビブラートが揺れているなら、手首ではなく指の力で押さえて震わせている可能性が高いです。必要なら再生速度を落として、着地の瞬間を耳で拡大して確認してください。

**今日の完了基準：**統合リックをBPM 90でCビブラート着地まで通しで弾ける、ジャムで4小節のソロを即興で作りながらすべてのフレーズをCで着地できる、B・Fを一度もふわっと浮いたまま終わらせない。

## ④ ヒント・よくある間違い

- **7音になって、また上行下行に逆戻り。**音が増えると「全部なぞりたい」誘惑が強くなります。でも羅列は今週ずっと禁止でしたよね。B・Fは骨格をつなぐ橋にすぎず、骨格は今も変わらずペンタトニック5音だということを忘れないでください。
- **着地なしにうやむやに終わる。**即興が怖くて適当な音で止まってしまうと、ソロが「語尾を濁す」ような印象になります。終わりは必ずC。着地がはっきりしていれば、短くても完結したフレーズに聞こえます。
- **ビブラートを指の力でかける。**ビブラートは手首の回転です。指でぐいぐい押さえると音程がぶれて、すぐに疲れてしまいます。ネックの裏に親指を軽く添えて、手首をドアノブを回すように一定に動かしましょう。
- **BとFを同時に乱発する。**2つの経過音を一度にたくさん使いすぎると骨格がぼやけて、「何調なのか」があいまいになります。橋は必要なときだけ。骨格（ペンタ）が7割、彩り（B・F）が3割くらいの比率がちょうどいいです。
