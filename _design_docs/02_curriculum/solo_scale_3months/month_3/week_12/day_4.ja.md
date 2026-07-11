---
title: "セルフフィードバックとリテイク — 録音を耳で手術して、もう一度撮る"
dayKey: "m3.w12.d4"
estMinutes: 50
i18nKey: "lesson.m3.w12.d4"
lang: ja
---

# Day 4 — 3か月の句点：自分の録音を分解して、より良い1テイクを撮り直す

## ① 理論・説明

今日なぜこれをやるかというと、昨日ソロを完成させて初めて通しで録音しましたよね。でも、ここでほとんどの人が止まってしまいます — **<mark>自分の録音をちゃんと聴けない</mark>**からです。演奏している間、脳は手や次のコード、拍を追うのに精一杯で、実は「今の自分の音がどうか」まで聴けていないんです。頭の中では格好よかったのに、録音を再生すると「あれ…これ自分？」となる。今日はそのギャップを埋めて、**<mark>より良い1テイクを撮り直す（リテイク）</mark>**日です。3か月カリキュラムの本当の句点です。

新しい技術はありません。今日の武器は**耳**と**<mark>手元にある何でもいい録音ツール</mark>**です。特定のアプリは必要ありません。スマホのボイスメモでも、ノートパソコンの録音機能でも、ほとんどの再生アプリにあるふたつの機能さえ使えば大丈夫です。

- **<mark>再生速度の調整（0.75倍・0.5倍）：</mark>**リアルタイムでは聞こえなかった「半拍遅れた着地」「バラついたビブラート」が、ゆっくり聴くと拡大されて耳にはっきり届きます。顕微鏡のようなものです。
- **<mark>区間リピート：</mark>**気に入らない一小節、二小節だけ選んで何度も繰り返し聴きます。問題の場所を絞り込んでこそ、正確に直せます。

そして今日から使う**<mark>4大採点基準</mark>**をしっかり刻んでください。今週ずっと少しずつ見てきたあの4つです。

- **①3度着地の正確さ** — コードが変わるとき、3度（C・F#・C#）に正しい拍で到達したか。
- **②色彩音の活用** — F#（長6度）・G（♭7）・ブルーノートが色として聞こえたか、ただ通り過ぎただけか。
- **③ビブラートの安定感** — 着地音の揺れが一定の周期だったか、それとも怯えたように震えていたか。
- **④リズムのタイミング** — 余白が正しい長さだったか、ベンディングや着地が拍からずれていなかったか。

## ② 視覚資料

リテイクは**<mark>毎回曲全体を撮り直すことではありません。</mark>**一番弱い区間だけを集中して撮り直すことです。そしてこの曲でいちばん難しく、いちばん重要な区間はもう決まっています — **<mark>4小節目から5小節目に移るあの継ぎ目</mark>**です。C（♭3、ドリアン）からC#（長3度、ミクソリディアン）にスイッチし、すぐにブルーノートベンディングでクライマックスへ押し上げる場所です。この2小節を今日の「リテイク抜粋」として選びました。ここさえ完璧になれば、曲全体が生きてきます。

```json
{
  "id": "m3.w12.d4.switch_retake_excerpt",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Retake excerpt - the mode-switch seam (D7 -> A7, bars 4-5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 92）— 継ぎ目だけ予熱**
メトロノーム92で上の抜粋（継ぎ目の2小節）だけを繰り返します。特に4小節目終わりのC（3弦5フレット）から5小節目のC#（3弦6フレット）へ移る指の動きと、そのあとに続くブルーノートベンディング（1弦8フレット→C#の音程）を滑らかに。今日のウォームアップは<mark>曲の一番弱い関節をほぐす時間</mark>です。

```json
{
  "id": "m3.w12.d4.switch_retake_excerpt",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Retake excerpt - the mode-switch seam (D7 -> A7, bars 4-5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

**10〜20分・頭のトレーニング（4大基準で昨日の録音を採点）**
昨日の通し録音を取り出して、再生速度を**0.75倍**に落として一回、**0.5倍**でもう一回聴きます。紙に4つの枠（着地・色彩・ビブラート・タイミング）を描いて、それぞれを△／○だけで表示。そのあと、いちばん△が多い**<mark>区間をひとつ</mark>**特定してください。おそらく十中八九、継ぎ目（4→5小節目）のはずです。

**20〜40分・実戦リテイク（Am7-D7-A7バッキング／88〜92 BPM）**
さあ、撮り直します。コツは**<mark>1テイクにつき基準はひとつだけ。</mark>**
1）まず**弱い区間だけ**をバッキングの上で3〜4回録音→再生→いちばん引っかかる基準をひとつ（例：タイミング）選んでそこだけ直して再録音。
2）その区間が良くなったら、**8小節全体を通しで**もう1テイク。昨日のものと並べて聴いてみましょう。
3）「今度はビブラートだけ」「今度は余白だけ」というふうに基準を変えながら3〜4テイク。毎回ひとつだけ良くなれば成功です。

**40〜50分・最終ベストテイクの確定（推奨）**
一番気に入った1テイクを選んで**<mark>今日の完成版</mark>**として保存しましょう（ファイル名に日付だけでも入れて）。最後にもう一度0.75倍で聴いて、残っている改善点をひとつだけメモしておきます。それが3か月後のあなたの次の旅の宿題です。そして — 3か月前の自分と比べてみてください。即興を一度もできなかった人が、今は自分のソロを録音して、自分の耳で直しています。それが<mark>今日の本当のゴール</mark>です。

**今日の完了の目安：**昨日の録音を4大基準で採点→弱い区間を特定→リテイクで少なくともひとつの基準を目に見えて改善した「ベストテイク」を1つ確定すること。

### 自己診断チェックリスト（最終版の採点用）
- [ ] **3度着地の正確さ** — 4つの着地（C・F#・C#・A）がすべて正しい拍で到達した
- [ ] **色彩音の活用** — 長6度・♭7・ブルーノートが曲の色としてはっきり聞こえる
- [ ] **ビブラートの安定感** — 長い着地音のビブラートの周期が一定で、怯えていない
- [ ] **リズムのタイミング** — 余白は正しい長さで、ベンディングのクライマックスと最後の着地が拍にぴったり合っている

## ④ ヒント・よくある間違い

- **録音を「評価」ではなく「自己否定」として聴いてしまう。**再生して「あーだめだ」と切ってしまうと、それは0点です。録音は裁判ではなく地図です。「ここの着地が遅いな→じゃあここだけ撮り直そう」につながってこそ意味があります。
- **毎回最初から通しで撮り直す。**時間の無駄です。弱い2小節だけを選んで集中的にリテイクし、良くなってから通しで一回。区間を絞るからこそ実力が早くつきます。
- **1テイクで4つの基準を全部直そうとする。**脳が過負荷になって全部逃します。テイクごとにひとつずつ。「今回はタイミングだけ。」
- **速度調整や区間リピートを使わない。**リアルタイムだけで聴くと、半拍のズレは絶対に拾えません。ゆっくり聴いて、引っかかる区間だけ繰り返し再生しましょう。どんなツールでもできる基本です。
- **完璧なテイクにこだわって終われない。**今日のゴールは完璧な名演ではなく、**昨日より一歩良くなったベストテイク**です。3か月の句点は「完璧」ではなく「自分で聴いて直せるようになった自分」です。おめでとう、これがゴールです。
