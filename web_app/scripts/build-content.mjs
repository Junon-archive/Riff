// @ts-nocheck
/**
 * Riff 콘텐츠 빌드 파이프라인 (무외부의존 · Node ESM)
 * -------------------------------------------------------------
 * 입력  SSOT: _design_docs/02_curriculum/{curriculumId}/**  (day_N.{ko,en,ja}.md, *_overview.{ko,en,ja}.md)
 * 출력      : web_app/src/content/{curriculumId}/{dayKey}.json  +  manifest.json
 *
 * 규칙(technical_spec §4):
 *  - 런타임은 md 를 파싱하지 않는다. 여기서 정적 JSON 으로 이식한다.
 *  - ```json 악보 블록은 3언어 동일 → ko 파일에서만 추출(언어 독립). en/ja 는 개수 파리티 검증만.
 *  - 섹션은 `## ①~④` 마커로 분할 → theory/visual/practice/tips.
 *  - 산문은 미니 마크다운→HTML 변환(악보 fenced 블록 제거).
 *  - 실패(스키마 위반/구조 불일치/프론트매터 불일치)는 파일 명시 후 빌드 중단.
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  existsSync,
  rmSync,
} from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEB_APP = resolve(__dirname, '..');
const REPO_ROOT = resolve(WEB_APP, '..');

const CURRICULA_ROOT = join(REPO_ROOT, '_design_docs', '02_curriculum');
const OUT_ROOT = join(WEB_APP, 'src', 'content');
// 랜딩 노출/정렬 우선순위(먼저 나오는 것이 앞 카드). 여기 없는 커리큘럼은 이름순으로 뒤에 붙는다.
const CURRICULUM_ORDER = ['solo_scale_3months', 'chord_building_2months'];

const LANGS = ['ko', 'en', 'ja'];
const SECTION_MARKERS = ['①', '②', '③', '④'];
const SECTION_KEYS = ['theory', 'visual', 'practice', 'tips'];

/* ---------------------------------------------------------------
   유틸: 로깅 / 실패
   --------------------------------------------------------------- */
let warnCount = 0;
const warn = (msg) => {
  warnCount++;
  console.warn(`  ⚠ ${msg}`);
};
const fail = (msg) => {
  console.error(`\n❌ build-content 실패: ${msg}\n`);
  process.exit(1);
};

/* ---------------------------------------------------------------
   프론트매터 파싱 (간단 YAML: key: value, 한 줄씩)
   --------------------------------------------------------------- */
function parseFrontmatter(raw, file) {
  if (!raw.startsWith('---')) fail(`프론트매터 없음: ${file}`);
  const end = raw.indexOf('\n---', 3);
  if (end === -1) fail(`프론트매터 종료(---) 없음: ${file}`);
  const fmBlock = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\r?\n/, '');
  const fm = {};
  for (const line of fmBlock.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    fm[m[1]] = v;
  }
  return { fm, body };
}

/* ---------------------------------------------------------------
   섹션 분할: `## ① …` ~ `## ④ …` 를 4구간으로.
   반환: { theory, visual, practice, tips } 각 원시 markdown 문자열.
   --------------------------------------------------------------- */
function splitSections(body, file) {
  const lines = body.split('\n');
  // 각 마커의 시작 줄 인덱스 찾기
  const starts = SECTION_MARKERS.map((mk) =>
    lines.findIndex((l) => /^##\s/.test(l) && l.includes(mk)),
  );
  starts.forEach((idx, i) => {
    if (idx === -1) fail(`섹션 마커 ${SECTION_MARKERS[i]} 누락: ${file}`);
  });
  for (let i = 1; i < starts.length; i++) {
    if (starts[i] <= starts[i - 1]) fail(`섹션 순서 오류(${SECTION_MARKERS[i]}): ${file}`);
  }
  const out = {};
  for (let i = 0; i < 4; i++) {
    const from = starts[i] + 1; // 헤딩 줄 제외
    const to = i < 3 ? starts[i + 1] : lines.length;
    out[SECTION_KEYS[i]] = lines.slice(from, to).join('\n').trim();
  }
  return out;
}

/* ---------------------------------------------------------------
   ```json 펜스 블록 추출 (순서 유지)
   --------------------------------------------------------------- */
function extractJsonBlocks(md) {
  const blocks = [];
  const re = /```json\s*\n([\s\S]*?)\n```/g;
  let m;
  while ((m = re.exec(md)) !== null) blocks.push(m[1]);
  return blocks;
}

/* ```json 블록을 `@@SCORE:N@@` 센티넬(문단 단독)로 치환해 순서·위치를 보존한다(백로그 01 Part A).
   반환: { md(센티넬 주입본), blocks(추출 JSON), next(다음 전역 인덱스) }.
   mdToHtml 이 센티넬을 <p>@@SCORE:N@@</p> 문단으로 만들고, 이후 슬롯 div 로 후처리된다. */
function injectScoreSlots(md, startIdx) {
  const blocks = [];
  let idx = startIdx;
  const re = /```json\s*\n([\s\S]*?)\n```/g;
  const out = md.replace(re, (_m, body) => {
    blocks.push(body);
    return `\n\n@@SCORE:${idx++}@@\n\n`;
  });
  return { md: out, blocks, next: idx };
}

/* mdToHtml 산출 HTML 안의 센티넬 문단을 악보 슬롯 div 로 바꾼다. LessonView 가 이 슬롯을 SVG 로 하이드레이트. */
function slotsToDivs(html) {
  return html.replace(
    /<p>@@SCORE:(\d+)@@<\/p>/g,
    (_m, n) => `<div class="lesson-score-slot" data-score-slot="${n}"></div>`,
  );
}

/* ---------------------------------------------------------------
   악보 최소 스키마 검증 (fretboard_score_schema.json 핵심 계약)
   외부 검증기 없이 필수 필드/enum 만 확인.
   --------------------------------------------------------------- */
const SCORE_TYPES = new Set(['fretboard_diagram', 'tab', 'scale_shape']);
const DURATIONS = new Set(['whole', 'half', 'quarter', 'eighth', 'sixteenth']);
const NOTATIONS = new Set(['tab', 'staff', 'staff+tab', 'rhythm']);
// technique enum(오타 조용히 통과 방지). dead_note=음정 없는 뮤트 타격음(타브 X), palm_mute=음정 있는 P.M.
const TECHNIQUES = new Set([
  'none', 'hammer_on', 'pull_off', 'slide', 'bend', 'vibrato', 'palm_mute', 'dead_note', 'harmonic',
  'slap_thumb', 'slap_pop', // ★10-B2 슬랩(썸/팝)
]);
const INSTRUMENTS = new Set(['guitar', 'bass']); // ★10-B1
const ROLES = new Set(['root', 'chord_tone', 'target', 'color', 'blue_note', 'scale', 'passing']);
const STROKES = new Set(['down', 'up', 'arpeggio']); // 스트럼/아르페지오
const FEELS = new Set(['straight', 'swing8', 'swing16']);
// 오선보 조표(meta.keySignature) 화이트리스트 = VexFlow addKeySignature 가 받는 조 이름.
const KEY_SIGNATURES = new Set([
  'C', 'Am', 'G', 'Em', 'D', 'Bm', 'A', 'F#m', 'E', 'C#m', 'B', 'G#m', 'F#', 'D#m', 'C#', 'A#m',
  'F', 'Dm', 'Bb', 'Gm', 'Eb', 'Cm', 'Ab', 'Fm', 'Db', 'Bbm', 'Gb', 'Ebm', 'Cb', 'Abm',
]);
// 렌더러 역량 가드: staff.ts(VexFlow, notation=staff/staff+tab/rhythm)가 실제로 그리는 technique.
// bend/hammer_on/pull_off/slide/vibrato/harmonic 은 staff.ts 미구현 → 오선보 경로에서 쓰면 화면에
// 조용히 사라진다. 이 기법이 필요하면 tab.ts 경로(notation 미지정/"tab")로 내야 한다(tab.ts는 전부 그림).
// ★staff.ts 에 새 기법 렌더를 추가하면 이 Set 한 줄만 넓히면 된다(락이 아니라 능력 계약).
// 오선보(staff.ts) 경로가 렌더 가능한 technique. ★02-A: 밴딩·해머온·풀오프·슬라이드·비브라토·하모닉
// 을 오선보 위 텍스트 마커(Annotation)로 렌더 구현 후 완화. (구현 안 된 기법은 계속 막아 조용한 증발 방지.)
const STAFF_TECHNIQUES = new Set([
  'none', 'palm_mute', 'dead_note',
  'hammer_on', 'pull_off', 'slide', 'bend', 'vibrato', 'harmonic',
  'slap_thumb', 'slap_pop', // ★10-B2 슬랩(오선보 위 T/P 마커)
]);
const STAFF_NOTATIONS = new Set(['staff', 'staff+tab', 'rhythm']);
// duration → 16분음표 단위(마디 박자합 검산용). dotted 는 1.5배.
const DUR_UNITS = { whole: 16, half: 8, quarter: 4, eighth: 2, sixteenth: 1 };

function validateScore(score, ctx) {
  const at = (m) => fail(`악보 스키마 위반 [${ctx}]: ${m}`);
  if (typeof score !== 'object' || score === null) at('객체가 아님');
  if (typeof score.id !== 'string' || !score.id) at('id 누락');
  if (!SCORE_TYPES.has(score.type)) at(`type 부정확: ${score.type}`);
  if (!score.meta || typeof score.meta !== 'object') at('meta 누락');
  if (typeof score.meta.title !== 'string') at('meta.title 누락');
  if (score.meta.instrument !== undefined && !INSTRUMENTS.has(score.meta.instrument))
    at(`meta.instrument 부정확(guitar|bass): ${score.meta.instrument}`);
  if (![4, 5, 6].includes(score.meta.stringCount)) at(`meta.stringCount 는 4·5·6 만 허용: ${score.meta.stringCount}`);
  // 유효 현 수(범위검사 상한). 잘못된 값이면 6으로 폴백해 후속 검사 진행.
  const nStr = [4, 5, 6].includes(score.meta.stringCount) ? score.meta.stringCount : 6;
  // tuning 이 있으면 길이가 stringCount 와 일치해야 함(음정 계산·타브/지판 줄 수의 전제).
  if (score.meta.tuning !== undefined) {
    if (!Array.isArray(score.meta.tuning) || score.meta.tuning.length !== nStr)
      at(`meta.tuning 길이는 stringCount(${nStr})와 일치해야 함: ${JSON.stringify(score.meta.tuning)}`);
  }
  if (score.meta.notation !== undefined && !NOTATIONS.has(score.meta.notation))
    at(`meta.notation 부정확: ${score.meta.notation}`);
  // ★04 rhythm(슬래시 리듬 악보): staff.ts 자체 슬래시 바 path 로 구현 → 허용(구 차단 해제 2026-07-09).
  if (score.meta.keySignature !== undefined && !KEY_SIGNATURES.has(score.meta.keySignature))
    at(`meta.keySignature 부정확(VexFlow 조 이름 아님): ${score.meta.keySignature}`);
  if (score.meta.feel !== undefined && !FEELS.has(score.meta.feel))
    at(`meta.feel 부정확: ${score.meta.feel}`);

  if (score.type === 'tab') {
    if (!score.tab || !Array.isArray(score.tab.measures)) at('tab.measures 누락');
    // 오선보(staff.ts) 경로면 렌더 가능한 technique 만 허용(미구현 기법이 화면에서 조용히 사라지는 것 방지).
    const staffRoute = STAFF_NOTATIONS.has(score.meta.notation);
    // 마디 박자합 = timeSignature (렌더러가 검사 안 하던 것을 게이트로 승격).
    const [tsNum, tsDen] = (score.tab.timeSignature ?? '4/4').split('/').map((x) => parseInt(x, 10));
    const expectUnits = (tsNum || 4) * (16 / (tsDen || 4));
    for (const meas of score.tab.measures) {
      if (!Array.isArray(meas.notes)) at('tab.measures[].notes 누락');
      let units = 0;
      for (const n of meas.notes) {
        if (typeof n.string !== 'number' || typeof n.fret !== 'number')
          at('note.string/fret 누락');
        if (!(n.string >= 1 && n.string <= nStr)) at(`note.string 범위(1~${nStr}) 위반: ${n.string}`);
        if (!(n.fret >= 0 && n.fret <= 24)) at(`note.fret 범위(0~24) 위반: ${n.fret}`);
        if (!DURATIONS.has(n.duration)) at(`note.duration 부정확: ${n.duration}`);
        if (n.technique !== undefined && !TECHNIQUES.has(n.technique))
          at(`note.technique 부정확: ${n.technique}`);
        if (staffRoute && n.technique !== undefined && !STAFF_TECHNIQUES.has(n.technique))
          at(`오선보(notation:"${score.meta.notation}") 경로 미지원 technique: "${n.technique}" — 밴딩/해머링 등은 tab.ts 경로(notation 미지정/"tab")로 내거나 staff.ts에 렌더 추가 후 STAFF_TECHNIQUES 확장`);
        if (n.role !== undefined && !ROLES.has(n.role)) at(`note.role 부정확: ${n.role}`);
        if (n.stroke !== undefined && !STROKES.has(n.stroke)) at(`note.stroke 부정확: ${n.stroke}`);
        if (n.chord !== undefined) {
          if (!Array.isArray(n.chord)) at('note.chord 는 배열');
          // 화음은 실음 타점에만. 쉼표·데드노트(음정 없는 뮤트 타격)에는 스택 금지.
          if (n.rest === true) at('chord[] 는 rest:true 음에 붙을 수 없음');
          if (n.technique === 'dead_note') at('chord[] 는 dead_note 음에 붙을 수 없음');
          // 대표음(n)은 그 화음의 최저음 = string 번호가 가장 큼. 같은 string 중복 금지.
          const seenStr = new Set([n.string]);
          for (const ch of n.chord) {
            if (!(ch.string >= 1 && ch.string <= nStr)) at(`chord.string 범위(1~${nStr}) 위반: ${ch.string}`);
            if (!(ch.fret >= 0 && ch.fret <= 24)) at(`chord.fret 범위(0~24) 위반: ${ch.fret}`);
            if (ch.role !== undefined && !ROLES.has(ch.role)) at(`chord.role 부정확: ${ch.role}`);
            if (seenStr.has(ch.string)) at(`화음 내 string 중복: ${ch.string}`);
            seenStr.add(ch.string);
            if (ch.string > n.string)
              at(`대표음이 최저음 아님: 대표 string ${n.string} < chord string ${ch.string}`);
          }
        }
        let u = DUR_UNITS[n.duration] ?? 0;
        if (n.dotted) u *= 1.5;
        // ★02-C 잇단음: num개를 inSpaceOf개 자리에 → 개별 길이에 inSpaceOf/num 배. (3연8분음 = 2/3배)
        if (n.tuplet) {
          const { num, inSpaceOf } = n.tuplet;
          if (!(Number.isInteger(num) && num >= 2 && Number.isInteger(inSpaceOf) && inSpaceOf >= 1))
            at(`note.tuplet 형식 오류(num≥2·inSpaceOf≥1): ${JSON.stringify(n.tuplet)}`);
          else u *= inSpaceOf / num;
        }
        units += u;
      }
      // 잇단음(분수) 합산의 부동소수 오차 허용(예: 2·2/3·3 = 3.9999997).
      if (Math.abs(units - expectUnits) > 1e-6)
        at(`마디 ${meas.measure ?? '?'} 박자합 ${units} ≠ ${expectUnits}(${tsNum}/${tsDen})`);
    }
  } else {
    if (!score.fretboard || typeof score.fretboard !== 'object')
      at('fretboard 누락(fretboard_diagram|scale_shape)');
    const fb = score.fretboard;
    if (typeof fb.startFret !== 'number') at('fretboard.startFret 누락');
    if (typeof fb.fretSpan !== 'number') at('fretboard.fretSpan 누락');
    if (!Array.isArray(fb.dots)) at('fretboard.dots 누락');
    for (const d of fb.dots) {
      if (typeof d.string !== 'number' || typeof d.fret !== 'number')
        at('dot.string/fret 누락');
      else if (!(d.string >= 1 && d.string <= nStr)) at(`dot.string 범위(1~${nStr}) 위반: ${d.string}`);
    }
    for (const b of Array.isArray(fb.barre) ? fb.barre : []) {
      if (!(b.fromString >= 1 && b.fromString <= nStr) || !(b.toString >= 1 && b.toString <= nStr))
        at(`barre string 범위(1~${nStr}) 위반: ${b.fromString}~${b.toString}`);
    }
  }
  return score;
}

/* ---------------------------------------------------------------
   미니 마크다운 → HTML
   지원: 문단, ### 헤딩, > 인용, - / * / 1. 리스트(체크박스 포함),
        | 표 |, **굵게**, `코드`, [링크](url). ```펜스```는 제거.
   콘텐츠는 신뢰 소스이므로 인라인 HTML(<b> 등)은 그대로 통과.
   --------------------------------------------------------------- */
function inline(s) {
  return s
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function stripCheckbox(text) {
  return text.replace(/^\[[ xX]\]\s*/, '');
}

function mdToHtml(md) {
  if (!md || !md.trim()) return '';
  // 펜스 코드블록(악보 등) 제거
  md = md.replace(/```[\s\S]*?```/g, '');
  const lines = md.split('\n');
  const out = [];
  let para = [];
  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' '))}</p>`);
      para = [];
    }
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const t = line.trim();

    if (t === '') {
      flushPara();
      i++;
      continue;
    }

    // 헤딩 ### ~ ######
    const h = t.match(/^(#{3,6})\s+(.*)$/);
    if (h) {
      flushPara();
      const lvl = Math.min(6, h[1].length + 1); // ### → h4
      out.push(`<h${lvl}>${inline(h[2])}</h${lvl}>`);
      i++;
      continue;
    }

    // 인용 (연속 > 묶음)
    if (/^>\s?/.test(t)) {
      flushPara();
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        buf.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      out.push(`<blockquote>${inline(buf.join(' '))}</blockquote>`);
      continue;
    }

    // 표 (| ... | + 구분행)
    if (
      t.startsWith('|') &&
      i + 1 < lines.length &&
      /^\|?[\s:|-]+\|?$/.test(lines[i + 1].trim()) &&
      lines[i + 1].includes('-')
    ) {
      flushPara();
      const cells = (row) =>
        row
          .trim()
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((c) => c.trim());
      const header = cells(lines[i]);
      i += 2; // 헤더 + 구분행 소비
      const bodyRows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        bodyRows.push(cells(lines[i]));
        i++;
      }
      let tbl = '<table><thead><tr>';
      tbl += header.map((c) => `<th>${inline(c)}</th>`).join('');
      tbl += '</tr></thead><tbody>';
      for (const r of bodyRows) {
        tbl += '<tr>' + r.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>';
      }
      tbl += '</tbody></table>';
      out.push(tbl);
      continue;
    }

    // 순서 없는 리스트 (- / *)
    if (/^[-*]\s+/.test(t)) {
      flushPara();
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        const raw = lines[i].trim().replace(/^[-*]\s+/, '');
        items.push(`<li>${inline(stripCheckbox(raw))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    // 순서 있는 리스트 (1. )
    if (/^\d+\.\s+/.test(t)) {
      flushPara();
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const raw = lines[i].trim().replace(/^\d+\.\s+/, '');
        items.push(`<li>${inline(raw)}</li>`);
        i++;
      }
      out.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    // 일반 문단
    para.push(t);
    i++;
  }
  flushPara();
  return out.join('\n');
}

/* ---------------------------------------------------------------
   개요 md → { title(첫 heading), html(본문) } , 프론트매터/blockquote 헤더 정리
   --------------------------------------------------------------- */
function parseOverview(raw) {
  // 개요 md 는 프론트매터가 없을 수 있음. 첫 # 헤딩을 title 로.
  const lines = raw.split('\n');
  let title = '';
  const bodyLines = [];
  let titleTaken = false;
  for (const l of lines) {
    const m = l.match(/^#\s+(.*)$/);
    if (!titleTaken && m) {
      title = m[1].trim();
      titleTaken = true;
      continue;
    }
    bodyLines.push(l);
  }
  // 첫 줄의 `> 커리큘럼: …` 메타 인용은 렌더에서 유지(정보성)해도 무방.
  return { title, html: mdToHtml(bodyLines.join('\n')) };
}

function readIfExists(path) {
  return existsSync(path) ? readFileSync(path, 'utf8') : null;
}

/* ---------------------------------------------------------------
   메인
   --------------------------------------------------------------- */
function buildCurriculum(curriculumId) {
  const SRC_DIR = join(CURRICULA_ROOT, curriculumId);
  const OUT_DIR = join(OUT_ROOT, curriculumId);
  if (!existsSync(SRC_DIR)) fail(`커리큘럼 소스 없음: ${SRC_DIR}`);

  // 출력 디렉터리 초기화(재생성)
  if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(OUT_DIR, { recursive: true });

  console.log(`\n▶ build-content: ${curriculumId}`);

  // 월 디렉터리 수집(숫자 정렬)
  const monthDirs = readdirSync(SRC_DIR)
    .filter((d) => /^month_\d+$/.test(d))
    .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]));

  const manifestMonths = [];
  const allDayKeys = [];
  let dayFileCount = 0;

  for (const monthDir of monthDirs) {
    const monthNum = Number(monthDir.split('_')[1]);
    const monthPath = join(SRC_DIR, monthDir);

    // 월 개요(언어별)
    const monthTitles = {};
    const monthOverview = {};
    for (const lang of LANGS) {
      const raw = readIfExists(join(monthPath, `month_${monthNum}_overview.${lang}.md`));
      if (raw) {
        const { title, html } = parseOverview(raw);
        monthTitles[lang] = title;
        monthOverview[lang] = html;
      } else {
        monthTitles[lang] = '';
        monthOverview[lang] = '';
      }
    }

    // 주 디렉터리(숫자 정렬)
    const weekDirs = readdirSync(monthPath)
      .filter((d) => /^week_\d+$/.test(d))
      .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]));

    const manifestWeeks = [];
    for (const weekDir of weekDirs) {
      const weekNum = Number(weekDir.split('_')[1]);
      const weekPath = join(monthPath, weekDir);

      // 주 개요(언어별)
      const weekTitles = {};
      const weekOverview = {};
      for (const lang of LANGS) {
        const raw = readIfExists(join(weekPath, `week_${weekNum}_overview.${lang}.md`));
        if (raw) {
          const { title, html } = parseOverview(raw);
          weekTitles[lang] = title;
          weekOverview[lang] = html;
        } else {
          weekTitles[lang] = '';
          weekOverview[lang] = '';
        }
      }

      // Day 파일(day_N.ko.md 기준, 숫자 정렬)
      const dayNums = readdirSync(weekPath)
        .map((f) => f.match(/^day_(\d+)\.ko\.md$/))
        .filter(Boolean)
        .map((m) => Number(m[1]))
        .sort((a, b) => a - b);

      const manifestDays = [];
      for (const dayNum of dayNums) {
        const parsed = buildDay(weekPath, dayNum, { monthNum, weekNum }, curriculumId);
        dayFileCount++;
        allDayKeys.push(parsed.day.dayKey);
        manifestDays.push({
          dayKey: parsed.day.dayKey,
          i18nKey: parsed.day.i18nKey,
          estMinutes: parsed.day.estMinutes,
          titles: parsed.day.titles,
        });
        // per-day JSON 기록
        writeFileSync(
          join(OUT_DIR, `${parsed.day.dayKey}.json`),
          JSON.stringify(parsed.day, null, 2) + '\n',
          'utf8',
        );
      }

      manifestWeeks.push({
        week: weekNum,
        titles: weekTitles,
        overview: weekOverview,
        days: manifestDays,
      });
    }

    manifestMonths.push({
      month: monthNum,
      titles: monthTitles,
      overview: monthOverview,
      weeks: manifestWeeks,
    });
  }

  // 커리큘럼 개요(overview.md, 언어별 폴백→ko)
  const curTitles = {};
  const curOverview = {};
  const curKoRaw = readIfExists(join(SRC_DIR, 'overview.md'));
  const curKo = curKoRaw ? parseOverview(curKoRaw) : { title: curriculumId, html: '' };
  for (const lang of LANGS) {
    const raw = readIfExists(join(SRC_DIR, `overview.${lang}.md`));
    if (raw) {
      const { title, html } = parseOverview(raw);
      curTitles[lang] = title;
      curOverview[lang] = html;
    } else {
      curTitles[lang] = curKo.title;
      curOverview[lang] = curKo.html;
    }
  }

  // 커리큘럼 메타(meta.json): 언어별 제목·태그라인·분류(instrument/level/tags). 있으면 title 을 우선 적용.
  const metaRaw = readIfExists(join(SRC_DIR, 'meta.json'));
  let curMeta = null;
  if (metaRaw) {
    try { curMeta = JSON.parse(metaRaw); }
    catch (e) { fail(`meta.json 파싱 실패: ${e.message}`); }
    if (curMeta.title) {
      for (const lang of LANGS) {
        if (curMeta.title[lang]) curTitles[lang] = curMeta.title[lang];
      }
    }
  }

  if (allDayKeys.length !== dayFileCount) fail('dayKey 수와 파일 수 불일치');
  if (allDayKeys.length === 0) {
    warn(`day 파일이 없어 스킵: ${curriculumId}`);
    return null;
  }
  console.log(`  ✔ ${curriculumId}: day JSON ${dayFileCount}개 (totalDays=${allDayKeys.length})`);

  return {
    id: curriculumId,
    titles: curTitles,
    taglines: curMeta?.tagline ?? null,
    instrument: curMeta?.instrument ?? null,
    // 카드 썸네일 이미지(정적 경로, 언어 무관 단일 문자열). 없으면 null → 카드는 그라디언트 전용 밴드.
    image: curMeta?.image ?? null,
    topic: curMeta?.topic ?? null,
    level: curMeta?.level ?? null,
    tags: curMeta?.tags ?? [],
    // 분류 스킴(등급 라벨 금지, "이런 분께" + 기간 배지 + 악기 필터로 대체):
    // forWho = 카드에 노출되는 3언어 한 줄("이런 분께"). durationMonths = 기간 메타 배지.
    // level(정수)은 정렬용 내부 값으로만 남기고 화면엔 절대 노출하지 않는다.
    forWho: curMeta?.forWho ?? null,
    durationMonths: curMeta?.durationMonths ?? null,
    // 커리큘럼 소개(3언어 문단 배열 또는 문자열). 커리큘럼 첫 페이지 상단에 "이 과정은 이런 걸 배웁니다"로
    // 노출된다(백로그 01 Part C). 내부용 overview.md 와 별개인 사용자용 필드. 없으면 null → 미표시.
    // intro 문단은 inline() 로 변환해 HTML 로 싣는다(**볼드**→<b>, <mark> 통과). CurriculumView 가 set:html.
    // 08 Highlight: 커리큘럼 소개는 볼드+하이라이트 지원. intro 없으면 null(가법 — 기존 커리큘럼 불변).
    intro: curMeta?.intro
      ? Object.fromEntries(
          Object.entries(curMeta.intro).map(([lang, paras]) => [
            lang,
            Array.isArray(paras) ? paras.map((p) => inline(String(p))) : inline(String(paras)),
          ]),
        )
      : null,
    // 주의: 커리큘럼 최상위 overview.md 는 내부 설계 문서(트래킹 표·메타)라 사용자 노출 금지 →
    // manifest 에 html 을 싣지 않는다. 카드 소개는 taglines/forWho 로 대체.
    totalDays: allDayKeys.length,
    dayKeys: allDayKeys,
    months: manifestMonths,
  };
}

/* ---------------------------------------------------------------
   커리큘럼 자동 발견: 02_curriculum 하위에서 meta.json 을 가진 디렉터리.
   CURRICULUM_ORDER 우선, 그 외 이름순.
   --------------------------------------------------------------- */
function discoverCurricula() {
  const dirs = readdirSync(CURRICULA_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(CURRICULA_ROOT, d.name, 'meta.json')))
    .map((d) => d.name);
  const rank = (id) => {
    const i = CURRICULUM_ORDER.indexOf(id);
    return i === -1 ? CURRICULUM_ORDER.length : i;
  };
  return dirs.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
}

/* ---------------------------------------------------------------
   메인: 모든 커리큘럼을 빌드해 manifest.json 하나로 집계.
   --------------------------------------------------------------- */
function main() {
  if (existsSync(OUT_ROOT)) rmSync(OUT_ROOT, { recursive: true, force: true });
  mkdirSync(OUT_ROOT, { recursive: true });

  const ids = discoverCurricula();
  if (ids.length === 0) fail(`커리큘럼(meta.json 보유)이 없음: ${CURRICULA_ROOT}`);
  console.log(`▶ build-content: ${ids.length}개 커리큘럼 발견 — ${ids.join(', ')}`);

  const curricula = [];
  for (const id of ids) {
    const cur = buildCurriculum(id);
    if (cur) curricula.push(cur);
  }
  if (curricula.length === 0) fail('빌드된 커리큘럼이 없음(모두 day 0)');

  const manifest = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    curricula,
  };
  writeFileSync(
    join(OUT_ROOT, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8',
  );
  console.log(
    `\n✔ 완료: 커리큘럼 ${curricula.length}개 · manifest.json` +
      (warnCount ? `  · 경고 ${warnCount}건` : ''),
  );
}

/* ---------------------------------------------------------------
   한 Day 를 3언어에서 조립
   --------------------------------------------------------------- */
function buildDay(weekPath, dayNum, loc, curriculumId) {
  const files = {};
  const fmByLang = {};
  const sectionsByLang = {};

  for (const lang of LANGS) {
    const file = join(weekPath, `day_${dayNum}.${lang}.md`);
    if (!existsSync(file)) fail(`언어 파일 누락: ${file}`);
    files[lang] = file;
    const raw = readFileSync(file, 'utf8');
    const { fm, body } = parseFrontmatter(raw, file);
    fmByLang[lang] = fm;
    sectionsByLang[lang] = splitSections(body, file);
  }

  // 프론트매터 언어 독립 필드(dayKey/estMinutes/i18nKey) 3언어 일치 검증
  const koFm = fmByLang.ko;
  for (const lang of ['en', 'ja']) {
    for (const key of ['dayKey', 'i18nKey']) {
      if (fmByLang[lang][key] !== koFm[key]) {
        fail(
          `프론트매터 ${key} 불일치(${lang}≠ko): ${files[lang]} (${fmByLang[lang][key]} ≠ ${koFm[key]})`,
        );
      }
    }
  }
  if (!koFm.dayKey) fail(`dayKey 누락: ${files.ko}`);
  const estMinutes = Number(koFm.estMinutes || 0);

  // 악보: 네 섹션을 문서 순서(theory→visual→practice→tips)로 훑어 ```json 블록을 전역 인덱스로 추출하고,
  // 각 섹션 md 에 `@@SCORE:N@@` 센티넬을 남긴다(백로그 01 Part A — 어느 섹션이든 글 흐름 속 제자리 렌더).
  const koSlotMd = {};
  const koBlocks = [];
  {
    let idx = 0;
    for (const sec of SECTION_KEYS) {
      const r = injectScoreSlots(sectionsByLang.ko[sec], idx);
      koSlotMd[sec] = r.md;
      koBlocks.push(...r.blocks);
      idx = r.next;
    }
  }
  const scores = koBlocks.map((b, idx) => {
    let obj;
    try {
      obj = JSON.parse(b);
    } catch (e) {
      fail(`악보 JSON 파싱 실패 [${koFm.dayKey} #${idx}]: ${e.message}`);
    }
    return validateScore(obj, `${koFm.dayKey} #${idx}`);
  });

  // en/ja 파리티: 전 섹션 합계 블록 개수 소프트 검증(내용 동일은 이미 검증됨 — 불일치 시 경고)
  for (const lang of ['en', 'ja']) {
    const n = SECTION_KEYS.reduce((s, sec) => s + extractJsonBlocks(sectionsByLang[lang][sec]).length, 0);
    if (n !== koBlocks.length) {
      warn(`악보 블록 개수 불일치(${lang}=${n}, ko=${koBlocks.length}): ${koFm.dayKey}`);
    }
  }

  // 산문(언어별) HTML — 각 섹션에 센티넬 주입 후 mdToHtml → 센티넬을 악보 슬롯 div 로 후처리.
  const prose = {};
  const titles = {};
  for (const lang of LANGS) {
    let idx = 0;
    const secHtml = {};
    for (const sec of SECTION_KEYS) {
      const r = injectScoreSlots(sectionsByLang[lang][sec], idx);
      idx = r.next;
      secHtml[sec] = slotsToDivs(mdToHtml(r.md));
    }
    prose[lang] = secHtml;
    titles[lang] = fmByLang[lang].title || '';
  }

  const day = {
    dayKey: koFm.dayKey,
    curriculumId,
    i18nKey: koFm.i18nKey || `lesson.${koFm.dayKey}`,
    estMinutes,
    month: loc.monthNum,
    week: loc.weekNum,
    day: dayNum,
    titles,
    scores,
    prose,
  };

  return { day };
}

main();
