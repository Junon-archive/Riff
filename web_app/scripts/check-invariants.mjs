#!/usr/bin/env node
/**
 * 커리큘럼 "의미 불변식" 회귀 체크 (픽셀 락 아님).
 *
 * 목적: 렌더러(staff.ts/tab.ts)를 자유롭게 개선(간격·높이·조판)해도 기존 커리큘럼의 **내용**은
 *       안 바뀌었음을 보증한다. 픽셀 SVG 전체가 아니라 블록별 의미 지문만 비교하므로,
 *       "코스메틱 개선은 통과, 내용 회귀는 차단"이 된다.
 *
 * 지문(각 tab 블록): notation / 마디수 / 마디별[박자합, 온셋수, 쉼표수, dead_note수,
 *                    노트헤드수(=1+chord.length), technique집합].
 * 지판(fretboard/scale_shape): dot 수 / (string,fret,role,label) 정렬 목록.
 *
 * 사용:
 *   node scripts/check-invariants.mjs            # baseline 과 대조, 회귀 있으면 exit 1
 *   node scripts/check-invariants.mjs --update   # 현재 상태를 baseline 으로 저장(정당한 변경 후)
 *
 * baseline: scripts/curriculum-invariants.json (커밋 대상).
 * ★락이 아니다: 블록을 정당하게 추가/수정했으면 --update 로 갱신하고 그 diff 를 커밋 리뷰에서 본다.
 * ★렌더러 픽셀을 바꿔도 이 지문이 그대로면 통과 → 미래 렌더 개선이 자유롭다.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(HERE, '..', 'src', 'content');
const BASELINE = join(HERE, 'curriculum-invariants.json');
const DUR = { whole: 16, half: 8, quarter: 4, eighth: 2, sixteenth: 1 };

function fingerprint() {
  const out = {};
  for (const cur of readdirSync(CONTENT).sort()) {
    const dir = join(CONTENT, cur);
    let stat;
    try { stat = readdirSync(dir); } catch { continue; } // manifest.json 등 파일은 스킵
    for (const f of stat.sort()) {
      if (!f.endsWith('.json')) continue;
      const d = JSON.parse(readFileSync(join(dir, f), 'utf8'));
      for (const sc of d.scores || []) {
        const key = `${cur}#${sc.id}`;
        if (sc.type === 'tab') {
          const measures = (sc.tab?.measures || []).map((m) => {
            const techs = new Set();
            let beat = 0, onsets = 0, rests = 0, deads = 0, heads = 0;
            for (const n of m.notes) {
              let u = DUR[n.duration] ?? 0; if (n.dotted) u *= 1.5; beat += u;
              techs.add(n.technique || 'none');
              if (n.rest) rests++;
              else if (n.technique === 'dead_note') { deads++; heads += 1; }
              else { onsets++; heads += 1 + (n.chord?.length || 0); }
            }
            return { beat, onsets, rests, deads, heads, techs: [...techs].sort() };
          });
          out[key] = { type: 'tab', notation: sc.meta?.notation ?? null, measures };
        } else {
          const dots = (sc.fretboard?.dots || [])
            .map((x) => `${x.string}:${x.fret}:${x.role ?? ''}:${x.label ?? ''}`)
            .sort();
          out[key] = { type: sc.type, dots };
        }
      }
    }
  }
  return out;
}

const cur = fingerprint();

if (process.argv.includes('--update')) {
  writeFileSync(BASELINE, JSON.stringify(cur, null, 2) + '\n');
  console.log(`✔ baseline 갱신: ${Object.keys(cur).length} 블록 → ${BASELINE}`);
  process.exit(0);
}

if (!existsSync(BASELINE)) {
  console.error('✗ baseline 없음. 먼저 `node scripts/check-invariants.mjs --update` 로 생성하라.');
  process.exit(1);
}

const base = JSON.parse(readFileSync(BASELINE, 'utf8'));
const bk = new Set(Object.keys(base)), ck = new Set(Object.keys(cur));
const added = [...ck].filter((k) => !bk.has(k));
const removed = [...bk].filter((k) => !ck.has(k));
const changed = [...ck].filter((k) => bk.has(k) && JSON.stringify(base[k]) !== JSON.stringify(cur[k]));

if (!added.length && !removed.length && !changed.length) {
  console.log(`✔ 의미 불변식 회귀 없음 (${ck.size} 블록 일치)`);
  process.exit(0);
}
console.error('✗ 의미 불변식 변화 감지 (렌더 코스메틱이 아니라 내용 변화):');
for (const k of removed) console.error(`  - 삭제됨: ${k}`);
for (const k of added) console.error(`  + 추가됨: ${k}`);
for (const k of changed) {
  console.error(`  ~ 변경됨: ${k}`);
  console.error(`      base: ${JSON.stringify(base[k])}`);
  console.error(`      now : ${JSON.stringify(cur[k])}`);
}
console.error('\n정당한 변경이면 `node scripts/check-invariants.mjs --update` 로 baseline 갱신 후 그 diff 를 커밋하라.');
process.exit(1);
