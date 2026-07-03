/**
 * 해시 라우터 — 파싱 · 매칭 · 뒤로가기 · 딥링크.
 * SSOT: technical_spec.md §8.
 *
 * 라우트 맵:
 *   #/                                            → home
 *   #/c/{curriculumId}                            → curriculum
 *   #/c/{curriculumId}/m{M}/w{W}/d{D}             → lesson (dayKey = m{M}.w{W}.d{D})
 */
import { parseDayKey } from './content';

export type Route =
  | { name: 'home' }
  | { name: 'curriculum'; curriculumId: string }
  | { name: 'lesson'; curriculumId: string; dayKey: string };

export function parseHash(hash: string): Route {
  const withoutHash = hash.startsWith('#') ? hash.slice(1) : hash;
  const segments = withoutHash.split('/').filter(Boolean);

  if (segments.length === 0 || segments[0] !== 'c') return { name: 'home' };

  const curriculumId = segments[1];
  if (!curriculumId) return { name: 'home' };

  const [, , mSeg, wSeg, dSeg] = segments;
  if (
    mSeg?.startsWith('m') &&
    wSeg?.startsWith('w') &&
    dSeg?.startsWith('d') &&
    mSeg.length > 1 &&
    wSeg.length > 1 &&
    dSeg.length > 1
  ) {
    const dayKey = `m${mSeg.slice(1)}.w${wSeg.slice(1)}.d${dSeg.slice(1)}`;
    return { name: 'lesson', curriculumId, dayKey };
  }

  return { name: 'curriculum', curriculumId };
}

export function routeToHash(route: Route): string {
  if (route.name === 'home') return '#/';
  if (route.name === 'curriculum') return `#/c/${route.curriculumId}`;
  const { month, week, day } = parseDayKey(route.dayKey);
  return `#/c/${route.curriculumId}/m${month}/w${week}/d${day}`;
}

/** 해시를 바꿔 이동한다(브라우저 히스토리에 자동 push). */
export function navigate(route: Route): void {
  location.hash = routeToHash(route);
}

/** hashchange 리슨 + 최초 1회 즉시 디스패치. */
export function initRouter(onRoute: (route: Route) => void): void {
  const dispatch = () => onRoute(parseHash(location.hash));
  window.addEventListener('hashchange', dispatch);
  dispatch();
}
