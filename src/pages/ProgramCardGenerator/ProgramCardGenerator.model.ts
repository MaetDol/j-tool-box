export enum ProgramCardType {
  배너 = 1,
  기획전 = 2,
  프로그램 = 3,
}

export enum ProgramCardUIType {
  Wide = "P001",
  CircleMask = "P002",
  전문쌤검정 = "P003",
  전문쌤하양 = "P004",
  배너기본 = "B001",
  기획전기본 = "E001",
  기획전기본2 = "E002",
}

export enum ProgramCardConceptType {
  전문가 = 1,
  일반 = 2,
}

export enum ProgramCardLinkType {
  없음 = 0,
  내부 = 1,
  외부 = 2,
}

export enum ProgramCardSubjectType {
  외국어 = 1,
  수학과학 = 2,
  한글국어 = 3,
  예체능 = 4,
}

export enum ProgramCardLocationType {
  가정방문 = 0,
  온라인 = 1,
  현장체험 = 2,
}

export enum ProgramCardTarget {
  부모님 = 2,
  아이 = 4,
}

export type RawProgramCardData = {
  sid: string;
  title: string;
  desc: string;
  type: ProgramCardType;
  ui_type: ProgramCardUIType;
  intro_img_url: string;
  open_status: 0 | 1;
  target_ages: string;
  program_concept: ProgramCardConceptType;
  display_start_datetime: string;
  display_end_datetime: string;
  share_thumbnail_url?: string;
  display_short_sale_badge: 0 | 1;
  order: number;
  subject_type?: ProgramCardSubjectType[];
  package_id?: string;
  link_url?: string;
  link_type?: ProgramCardLinkType;
  contents_block?: string;
  class_location_type: ProgramCardLocationType;
  is_kit: 0 | 1;
  target_role: ProgramCardTarget;
};

export type TagData = {
  type: string;
  name: string;
};
