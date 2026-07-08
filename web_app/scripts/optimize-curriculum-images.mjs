/**
 * optimize-curriculum-images.mjs — 커리큘럼 카드 썸네일용 이미지 최적화(일회성).
 *
 * ⚠️ 빌드 파이프라인 아님(package.json 스크립트에 연결하지 않는다). 필요할 때 수동 실행:
 *     node scripts/optimize-curriculum-images.mjs
 *
 * 원본(SSOT): web_app/assets/Curriculum_image/*.jpg (그대로 보존).
 * 출력:       web_app/public/curriculum/{id}.webp (커밋 대상).
 *
 * 변환 스펙:
 *   - 가로 1200px 리사이즈(비율 유지)
 *   - 그레이스케일(듀오톤 SVG 필터의 1단계가 어차피 휘도 추출이라 결과 동일, 용량만 절감)
 *   - WebP, quality 72, 목표 각 120KB 이하(초과 시 quality 를 단계적으로 낮춰 재시도)
 *
 * 매핑(사용자 확정): 나머지 curriculum*.jpg 는 향후 커리큘럼용 풀이라 건드리지 않는다.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, statSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, '../assets/Curriculum_image');
const OUT_DIR = join(__dirname, '../public/curriculum');

/** 원본 파일 → 시맨틱 출력명(커리큘럼 id 기반). */
const MAP = [
  { src: 'curriculum1.jpg', out: 'solo-scale.webp' },
  { src: 'curriculum2.jpg', out: 'chord-building.webp' },
  { src: 'curriculum3.jpg', out: 'funk-rhythm.webp' },
];

const TARGET_BYTES = 120 * 1024;

mkdirSync(OUT_DIR, { recursive: true });

for (const { src, out } of MAP) {
  const srcPath = join(SRC_DIR, src);
  const outPath = join(OUT_DIR, out);

  let quality = 72;
  let meta;
  for (;;) {
    const img = sharp(srcPath).resize({ width: 1200, withoutEnlargement: true }).grayscale();
    meta = await img.webp({ quality }).toFile(outPath);
    const bytes = statSync(outPath).size;
    if (bytes <= TARGET_BYTES || quality <= 40) {
      console.log(
        `  ${out.padEnd(20)} ${meta.width}x${meta.height}  q${quality}  ${(bytes / 1024).toFixed(1)}KB` +
          (bytes > TARGET_BYTES ? '  ⚠ 목표 초과(최저 quality 도달)' : ''),
      );
      break;
    }
    quality -= 6; // 120KB 초과 → quality 낮춰 재시도
  }
}

console.log('done → public/curriculum/');
