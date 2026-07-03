/**
 * 콘텐츠 로딩 — manifest(초기 로드) + Day 지연 로드(방문 시점 동적 import).
 * SSOT: technical_spec.md §10(성능: Day 단위 지연 로드) · §4(빌드 산출물 포맷).
 *
 * fetch('/src/...') 금지 — 프로덕션 번들 호환을 위해 import.meta.glob 동적 import 를 쓴다.
 */
import manifestJson from '../content/manifest.json';
import type {
  ContentManifest,
  ManifestCurriculum,
  ManifestDay,
  ManifestMonth,
  ManifestWeek,
  DayContent,
} from '../types/content';

/** src/content/{curriculumId}/{dayKey}.json 전량을 지연 로더로 등록(매니페스트 자신은 매칭 안 됨). */
const dayLoaders = import.meta.glob<{ default: DayContent }>('../content/*/*.json');

export function getManifest(): ContentManifest {
  return manifestJson as unknown as ContentManifest;
}

export function findCurriculum(
  manifest: ContentManifest,
  curriculumId: string,
): ManifestCurriculum | undefined {
  return manifest.curricula.find((c) => c.id === curriculumId);
}

export interface DayLocation {
  month: ManifestMonth;
  week: ManifestWeek;
  day: ManifestDay;
  dayIndex: number;
}

/** curriculum 안에서 dayKey 의 월/주/일 노드 + 평탄화 인덱스를 찾는다. */
export function findDayLocation(
  curriculum: ManifestCurriculum,
  dayKey: string,
): DayLocation | undefined {
  const dayIndex = curriculum.dayKeys.indexOf(dayKey);
  if (dayIndex === -1) return undefined;
  for (const month of curriculum.months) {
    for (const week of month.weeks) {
      const day = week.days.find((d) => d.dayKey === dayKey);
      if (day) return { month, week, day, dayIndex };
    }
  }
  return undefined;
}

/** 이전/다음 Day 키(커리큘럼 평탄 순서 기준, 경계에서 undefined). */
export function getAdjacentDayKeys(
  curriculum: ManifestCurriculum,
  dayKey: string,
): { prev?: string; next?: string } {
  const idx = curriculum.dayKeys.indexOf(dayKey);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? curriculum.dayKeys[idx - 1] : undefined,
    next: idx < curriculum.dayKeys.length - 1 ? curriculum.dayKeys[idx + 1] : undefined,
  };
}

/** per-day 콘텐츠(prose+scores) 지연 로드. */
export async function loadDayContent(curriculumId: string, dayKey: string): Promise<DayContent> {
  const path = `../content/${curriculumId}/${dayKey}.json`;
  const loader = dayLoaders[path];
  if (!loader) {
    throw new Error(`[content] day content not found: ${curriculumId}/${dayKey}`);
  }
  const mod = await loader();
  return mod.default;
}

/** dayKey ("m1.w2.d3") → {month, week, day} 숫자 파싱. */
export function parseDayKey(dayKey: string): { month: number; week: number; day: number } {
  const match = /^m(\d+)\.w(\d+)\.d(\d+)$/.exec(dayKey);
  if (!match) throw new Error(`[content] invalid dayKey: ${dayKey}`);
  return { month: Number(match[1]), week: Number(match[2]), day: Number(match[3]) };
}
