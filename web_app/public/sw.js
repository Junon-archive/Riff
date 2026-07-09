/*
 * Riff 서비스워커 (hand-rolled, 의존성 0) — 07_pwa.md 트랙 A.
 *
 * 캐싱 전략(확정: App Shell + 방문분 런타임):
 *  - install: 앱 셸(안정 URL) precache → 오프라인에서도 홈이 즉시 열림.
 *  - HTML(내비게이션): NetworkFirst — 항상 최신 우선(_headers must-revalidate 존중),
 *    오프라인이면 캐시 → 없으면 캐시된 '/'(앱 셸)로 폴백.
 *  - /_astro/*(해시 불변 자산): CacheFirst — 파일명이 곧 버전이라 안전.
 *  - 기타 동일 출처 정적(아이콘·이미지·매니페스트): StaleWhileRevalidate.
 *
 * 캐시 무효화: CACHE_VERSION 을 올리면 activate 에서 옛 캐시를 전부 지운다.
 * 잘못된 배포가 나가도 버전업 + 재배포로 다음 activate 때 자가복구된다.
 * autoUpdate: install 에서 skipWaiting, activate 에서 clients.claim → 새 SW 즉시 인계.
 */
const CACHE_VERSION = 'v1';
const CACHE = `riff-${CACHE_VERSION}`;

// 앱 셸 — 안정(비해시) URL 만. 해시 자산은 런타임에 CacheFirst 로 담긴다.
const SHELL = [
  '/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png',
  '/icons/apple-touch-icon-180.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

/** 응답을 캐시에 저장(200·basic 만). */
function putIfOk(request, response) {
  if (response && response.status === 200 && response.type === 'basic') {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // 동일 출처만

  const isHTML =
    request.mode === 'navigate' ||
    (request.headers.get('accept') || '').includes('text/html');

  // 1) HTML: NetworkFirst (+ 오프라인 앱 셸 폴백)
  if (isHTML) {
    event.respondWith(
      fetch(request)
        .then((res) => putIfOk(request, res))
        .catch(() => caches.match(request).then((c) => c || caches.match('/'))),
    );
    return;
  }

  // 2) 해시 불변 자산: CacheFirst
  if (url.pathname.startsWith('/_astro/')) {
    event.respondWith(
      caches.match(request).then((c) => c || fetch(request).then((res) => putIfOk(request, res))),
    );
    return;
  }

  // 3) 기타 동일 출처 정적: StaleWhileRevalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((res) => putIfOk(request, res))
        .catch(() => cached);
      return cached || network;
    }),
  );
});
