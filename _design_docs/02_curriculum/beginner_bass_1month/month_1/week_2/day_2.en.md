---
title: "The switch that puts strings to sleep — muting and ghost notes"
dayKey: "m1.w2.d2"
estMinutes: 30
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — The switch that puts strings to sleep: muting

## ① Theory

Today is the heart of this week — muting. Eighty percent of a bass's sound comes not from playing well but from **<mark>killing the strings that shouldn't ring</mark>**. One note rings clearly while the rest stay quiet — that's a pro's cleanliness. Today you learn to **switch sound off** just as much as to make it.

Both hands take part in muting. First the left. Ease off the pressure of the fretting finger just a touch, and the string lifts from the fingerboard so **<mark>the sound cuts off cleanly</mark>**. You don't lift it all the way — you keep the flesh resting on it and just release the force, like flipping a switch off. This **"press, then release the force"** is your first tool for shaping note length with your hand. Once you're used to this control of force, your hand decides on its own whether to cut a note short or let it ring long.

The right hand is a gatekeeper too. Cover the strings lower than the one you're playing lightly with your **<mark>thumb and the fingers you didn't pluck</mark>**, putting them to sleep. When you pluck a string with one finger, the next finger naturally lands on it and cuts off the ring. When both hands cooperate like this, even a string you brush by accident won't sound. This habit of covering the strings you don't play in advance is **the real secret to a clean, noise-free sound** on stage.

Sometimes you add a **<mark>ghost note ("chk")</mark>** on purpose. It's a muted strike with no pitch, just a "chk," and it adds groove to the rhythm. In the score it's **marked with an X** instead of a note. On a 5-string there's one more string to put to sleep — keep the low B covered with your thumb, so you need to mind muting a little more than on a 4-string. Today's goal is just one thing: one note rings, the rest fall silent.

## ② Visuals

Today you look at **two examples for cutting sound off**. First play a note and <mark>put it right to sleep to make silence</mark>, then feel the groove with a pulse that mixes in ghost notes. In the score, an X is a muted strike with no pitch (a "chk"). Each example is laid out in **a 4-string and a 5-string version**.

**Example 1 — play and put to sleep.** Play the open E, then immediately ease off your left hand to cut the sound. The next beat is an X — a muted strike with no pitch. Make "sound → silence" split clearly.

```json
{
  "id": "m1.w2.d2.mute_choke_4",
  "type": "tab",
  "meta": { "title": "Note and mute-choke on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Play the blue open E → then immediately release the force to put it to sleep as an X (chk). Let sound and silence split into equal half-beats.

```json
{
  "id": "m1.w2.d2.mute_choke_5",
  "type": "tab",
  "meta": { "title": "Note and mute-choke on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** The note and position are identical to the 4-string. Cover the low B with your thumb so it doesn't ring along even when you play the X.

**Example 2 — ghost pulse.** Alternate the open E and a ghost note (X) eight times. The goal is to get a "dum-chk-dum-chk" groove into your hand.

```json
{
  "id": "m1.w2.d2.ghost_pulse_4",
  "type": "tab",
  "meta": { "title": "Ghost-note pulse on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** On-beats are the blue open E, off-beats are the X (chk). The clearer the volume difference between the two, the more the groove comes alive.

```json
{
  "id": "m1.w2.d2.ghost_pulse_5",
  "type": "tab",
  "meta": { "title": "Ghost-note pulse on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65, 5-string.** The notes are identical to the 4-string. Keep the low B covered with your thumb so it doesn't leak through even as you speed up.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
Loosen up again with yesterday's low roots on the E string at BPM 60. First check that **your fingertip lands right behind the fret**.

**7–17 min · Today's skill**
Repeat Example 1 (play and put to sleep) at BPM 60. Focus only on whether the sound cuts off cleanly <mark>the moment you release the left hand</mark>, **leaving no ring**.

**17–27 min · Applying it**
Repeat Example 2 (ghost pulse) four times at BPM 60 → **once "dum-chk" splits clearly**, raise it one step to BPM 65 for four more. If the sound smears, go back to Example 1.

**27–30 min · Check**
Write down the BPM you reached, and record 30 seconds to hear whether only the played note rings and the unplayed strings stay quiet.

**Done when:** with left-hand release and right-hand muting, you can cut the sound off cleanly at 60–70 so that one note rings clearly and the unplayed strings stay quiet.

## ④ Tips / common mistakes

- **Lifting the finger all the way.** Releasing the force and lifting off are different. Keep the flesh resting and only release the force so you flow right into the next note.
- **A ring lingers.** If it hums even after the sound cuts off, cover that string with your right thumb or a finger to press down the resonance.
- **Ghost note too hard.** Hit the "chk" hard and a pitch comes back, muddying it. Very light — just the sound of a muted strike.
- **Neglecting the low B (5-string).** Focus on muting and drop the B, and the low end hums and leaks. Always keep your thumb resting on the B.
