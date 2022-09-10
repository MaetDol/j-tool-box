import moment from "moment";
import {
  ProgramCardConceptType,
  ProgramCardLocationType,
  ProgramCardTarget,
  TagData,
} from "pages/ProgramCardGenerator/ProgramCardGenerator.model";

type CardData = {
  locationType: ProgramCardLocationType;
  conceptType: ProgramCardConceptType;
  target: ProgramCardTarget;
  hasKit: boolean;
  hasEndDateBadge: boolean;
  endDateString: string;
};

export function getTags({
  locationType,
  endDateString,
  conceptType,
  hasEndDateBadge,
  hasKit,
  target,
}: CardData) {
  const tags: TagData[] = [];

  if (locationType === ProgramCardLocationType.온라인)
    tags.push({ name: "온라인", type: "online" });

  if (locationType === ProgramCardLocationType.현장체험)
    tags.push({ name: "현장체험", type: "field_trip" });

  if (conceptType === ProgramCardConceptType.전문가)
    tags.push({ name: "전문쌤", type: "expert" });

  if (target === ProgramCardTarget.부모님)
    tags.push({ name: "부모님 특강", type: "target_parent" });

  if (hasKit) tags.push({ name: "키트 수업", type: "is_kit" });

  const endDate = moment(endDateString);
  if (hasEndDateBadge && endDate.isValid())
    tags.push({
      name: `${endDate.month() + 1}월 ${endDate.date()}일까지`,
      type: "limit_date",
    });

  return tags;
}
