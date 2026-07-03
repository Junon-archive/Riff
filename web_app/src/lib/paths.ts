/**
 * getStaticPaths 소스 — manifest 를 평탄화해 정적 라우트 파라미터를 열거한다(빌드 타임·순수).
 * SSOT: technical_spec.md §8-Astro.
 *
 * 산출:
 *   curriculumRoutes()  커리큘럼당 1개
 *   lessonRoutes()      Day 당 1개 (현재 52개)
 *
 * [lang] 라우트는 이 목록에 PREFIXED_LANGS 를 곱해 사용한다(en/ja).
 */
import { getManifest, parseDayKey } from './content';

export interface CurriculumRoute {
  curriculum: string;
}

export interface LessonRouteParams {
  curriculum: string;
  /** URL 세그먼트: "m1" */
  month: string;
  /** URL 세그먼트: "w0" */
  week: string;
  /** URL 세그먼트: "d1" */
  day: string;
}

export interface LessonRoute {
  params: LessonRouteParams;
  /** 파싱 편의를 위해 canonical dayKey 를 함께 전달. */
  dayKey: string;
  monthNum: number;
  weekNum: number;
  dayNum: number;
}

/** 커리큘럼 라우트 목록. */
export function curriculumRoutes(): CurriculumRoute[] {
  return getManifest().curricula.map((c) => ({ curriculum: c.id }));
}

/** 레슨 라우트 목록(평탄화, 진행 순서). */
export function lessonRoutes(): LessonRoute[] {
  const routes: LessonRoute[] = [];
  for (const curriculum of getManifest().curricula) {
    for (const month of curriculum.months) {
      for (const week of month.weeks) {
        for (const d of week.days) {
          const { month: m, week: w, day } = parseDayKey(d.dayKey);
          routes.push({
            params: {
              curriculum: curriculum.id,
              month: `m${m}`,
              week: `w${w}`,
              day: `d${day}`,
            },
            dayKey: d.dayKey,
            monthNum: m,
            weekNum: w,
            dayNum: day,
          });
        }
      }
    }
  }
  return routes;
}

/** URL 세그먼트(m1/w0/d1) → canonical dayKey(m1.w0.d1). */
export function segmentsToDayKey(month: string, week: string, day: string): string {
  return `${month}.${week}.${day}`;
}
