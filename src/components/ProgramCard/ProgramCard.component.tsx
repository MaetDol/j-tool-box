import {
  ProgramCardUIType,
  TagData,
} from "pages/ProgramCardGenerator/ProgramCardGenerator.model";
import { EventE001, EventE002 } from "./components/Event";
import { Circle, Expert, ExpertWhite, Wide } from "./components/Program";

type Props = {
  uiType: ProgramCardUIType;
  description: string;
  tags: TagData[];
  thumbnail: string;
  title: string;
};

const cardMap = {
  [ProgramCardUIType.Wide]: Wide,
  [ProgramCardUIType.CircleMask]: Circle,
  [ProgramCardUIType.전문쌤검정]: Expert,
  [ProgramCardUIType.전문쌤하양]: ExpertWhite,
  [ProgramCardUIType.기획전기본]: EventE001,
  [ProgramCardUIType.기획전기본2]: EventE002,
  [ProgramCardUIType.배너기본]: undefined,
} as const;

export function ProgramCard({
  uiType,
  description,
  tags,
  thumbnail,
  title,
}: Props) {
  const CardComponent:
    | React.FunctionComponent<Omit<Props, "uiType">>
    | undefined = cardMap[uiType];

  if (!CardComponent) return null;

  return (
    <CardComponent
      description={description}
      tags={tags}
      thumbnail={thumbnail}
      title={title}
    />
  );
}
