/**
 * generate-pwa-icons.mjs — PWA 앱 아이콘 생성(일회성, 빌드 파이프라인 미연결).
 *
 * 소스: 브랜드 픽 로고 path(favicon.svg / Base.astro 와 동일). 브랜드 블루 타일 + 흰 픽.
 * 출력: web_app/public/icons/*.png (커밋 대상).
 * 실행: node scripts/generate-pwa-icons.mjs
 *
 * 07_pwa.md 트랙 A: 192·512·maskable 512·apple-touch 180. maskable 은 안전영역(중앙 80%)
 * 안에 들어오도록 픽을 더 작게(f=0.5). 나머지는 f=0.62.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'icons');
mkdirSync(OUT, { recursive: true });

const PICK = 'M12 2c4.4 0 8 2.6 8 6.4 0 3.1-2 5.2-3.9 7.2-1.4 1.5-2.1 3-2.5 4.9-.2 1-.9 1.5-1.6 1.5-.9 0-1.6-.8-1.9-2.1C9.3 21 9 17 8 14.6 6.9 12 4 11 4 8.4 4 4.6 7.6 2 12 2z';
const BG = '#3182F6';
const FG = '#ffffff';

/** 정사각 아이콘 SVG: 블루 타일 + 중앙 흰 픽(캔버스의 f 비율). */
function iconSvg(size, f) {
  const inner = size * f;
  const off = (size - inner) / 2;
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` +
      `<rect width="${size}" height="${size}" fill="${BG}"/>` +
      `<svg x="${off}" y="${off}" width="${inner}" height="${inner}" viewBox="0 0 24 24"><path d="${PICK}" fill="${FG}"/></svg>` +
      `</svg>`,
  );
}

const JOBS = [
  { out: 'icon-192.png', size: 192, f: 0.62 },
  { out: 'icon-512.png', size: 512, f: 0.62 },
  { out: 'icon-maskable-512.png', size: 512, f: 0.5 },
  { out: 'apple-touch-icon-180.png', size: 180, f: 0.62 },
];

for (const { out, size, f } of JOBS) {
  const info = await sharp(iconSvg(size, f)).png().toFile(join(OUT, out));
  console.log(`${out.padEnd(26)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)}KB`);
}
console.log('done → public/icons/');
