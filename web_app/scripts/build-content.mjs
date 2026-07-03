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

const CURRICULUM_ID = 'solo_scale_3months';
const SRC_DIR = join(REPO_ROOT, '_design_docs', '02_curriculum', CURRICULUM_ID);
const OUT_ROOT = join(WEB_APP, 'src', 'content');
const OUT_DIR = join(OUT_ROOT, CURRICULUM_ID);

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

/* ---------------------------------------------------------------
   악보 최소 스키마 검증 (fretboard_score_schema.json 핵심 계약)
   외부 검증기 없이 필수 필드/enum 만 확인.
   --------------------------------------------------------------- */
const SCORE_TYPES = new Set(['fretboard_diagram', 'tab', 'scale_shape']);
const DURATIONS = new Set(['whole', 'half', 'quarter', 'eighth', 'sixteenth']);

function validateScore(score, ctx) {
  const at = (m) => fail(`악보 스키마 위반 [${ctx}]: ${m}`);
  if (typeof score !== 'object' || score === null) at('객체가 아님');
  if (typeof score.id !== 'string' || !score.id) at('id 누락');
  if (!SCORE_TYPES.has(score.type)) at(`type 부정확: ${score.type}`);
  if (!score.meta || typeof score.meta !== 'object') at('meta 누락');
  if (typeof score.meta.title !== 'string') at('meta.title 누락');
  if (score.meta.stringCount !== 6) at('meta.stringCount 는 6 고정');

  if (score.type === 'tab') {
    if (!score.tab || !Array.isArray(score.tab.measures)) at('tab.measures 누락');
    for (const meas of score.tab.measures) {
      if (!Array.isArray(meas.notes)) at('tab.measures[].notes 누락');
      for (const n of meas.notes) {
        if (typeof n.string !== 'number' || typeof n.fret !== 'number')
          at('note.string/fret 누락');
        if (!DURATIONS.has(n.duration)) at(`note.duration 부정확: ${n.duration}`);
      }
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
function main() {
  if (!existsSync(SRC_DIR)) fail(`커리큘럼 소스 없음: ${SRC_DIR}`);

  // 출력 디렉터리 초기화(재생성)
  if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(OUT_DIR, { recursive: true });

  console.log(`\n▶ build-content: ${CURRICULUM_ID}`);

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
        const parsed = buildDay(weekPath, dayNum, { monthNum, weekNum });
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
  const curKo = curKoRaw ? parseOverview(curKoRaw) : { title: CURRICULUM_ID, html: '' };
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

  const manifest = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    curricula: [
      {
        id: CURRICULUM_ID,
        titles: curTitles,
        overview: curOverview,
        totalDays: allDayKeys.length,
        dayKeys: allDayKeys,
        months: manifestMonths,
      },
    ],
  };

  writeFileSync(
    join(OUT_ROOT, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8',
  );

  console.log(
    `✔ 완료: day JSON ${dayFileCount}개 + manifest.json (totalDays=${allDayKeys.length})` +
      (warnCount ? `  · 경고 ${warnCount}건` : ''),
  );
  if (allDayKeys.length !== dayFileCount) fail('dayKey 수와 파일 수 불일치');
}

/* ---------------------------------------------------------------
   한 Day 를 3언어에서 조립
   --------------------------------------------------------------- */
function buildDay(weekPath, dayNum, loc) {
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

  // 악보: ko 의 ② 섹션에서 추출 + 검증
  const koVisual = sectionsByLang.ko.visual;
  const koBlocks = extractJsonBlocks(koVisual);
  const scores = koBlocks.map((b, idx) => {
    let obj;
    try {
      obj = JSON.parse(b);
    } catch (e) {
      fail(`악보 JSON 파싱 실패 [${koFm.dayKey} #${idx}]: ${e.message}`);
    }
    return validateScore(obj, `${koFm.dayKey} #${idx}`);
  });

  // en/ja 파리티: 블록 개수만 소프트 검증(내용 동일은 이미 검증됨 — 불일치 시 경고)
  for (const lang of ['en', 'ja']) {
    const n = extractJsonBlocks(sectionsByLang[lang].visual).length;
    if (n !== koBlocks.length) {
      warn(`악보 블록 개수 불일치(${lang}=${n}, ko=${koBlocks.length}): ${koFm.dayKey}`);
    }
  }

  // 산문(언어별) HTML
  const prose = {};
  const titles = {};
  for (const lang of LANGS) {
    const s = sectionsByLang[lang];
    prose[lang] = {
      theory: mdToHtml(s.theory),
      visual: mdToHtml(s.visual),
      practice: mdToHtml(s.practice),
      tips: mdToHtml(s.tips),
    };
    titles[lang] = fmByLang[lang].title || '';
  }

  const day = {
    dayKey: koFm.dayKey,
    curriculumId: CURRICULUM_ID,
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
