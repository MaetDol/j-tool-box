export interface ProgramTags {
  name?: string;
  type: ProgramTagType;
}
export enum ProgramTagType {
  /** 온라인 */
  ONLINE = "online",
  /** 전문쌤 */
  EXPERT = "expert",
  /** 현장체험 */
  FIELD_TRIP = "field_trip",
  /** 부모님 특강 */
  TARGET_PARENT = "target_parent",
  /** 키트 수업 */
  IS_KIT = "is_kit",
  /** 기간한정 */
  LIMIT_DATE = "limit_date",
}

export const PROGRAM_TAG_CONSTANT = {
  ONLINE: {
    name: "온라인",
    type: ProgramTagType.ONLINE,
  },
  EXPERT: {
    name: "전문쌤",
    type: ProgramTagType.EXPERT,
  },
  FIELD_TRIP: {
    name: "현장체험",
    type: ProgramTagType.FIELD_TRIP,
  },
  TARGET_PARENT: {
    name: "부모님 특강",
    type: ProgramTagType.TARGET_PARENT,
  },
  IS_KIT: {
    name: "키트 수업",
    type: ProgramTagType.IS_KIT,
  },
  LIMIT_DATE: {
    name: "MM월 dd까지",
    type: ProgramTagType.LIMIT_DATE,
  },
} as const;
