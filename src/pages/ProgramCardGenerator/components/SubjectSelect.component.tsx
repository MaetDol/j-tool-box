import { Antd } from "components";
import { ProgramCardSubjectType } from "../ProgramCardGenerator.model";

type Props = {
  subjects: ProgramCardSubjectType[];
  setSubjects: (selects: ProgramCardSubjectType[]) => void;
};

export function SubjectSelect({ setSubjects, subjects }: Props) {
  return (
    <Antd.Input.Group>
      과목 유형
      <Antd.Select
        mode="multiple"
        style={{ width: "100%" }}
        value={subjects}
        onChange={(selection) => setSubjects(selection)}
      >
        <Antd.Select.Option value={ProgramCardSubjectType.외국어}>
          외국어
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardSubjectType.수학과학}>
          수학/과학
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardSubjectType.한글국어}>
          한글/국어
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardSubjectType.예체능}>
          예체능
        </Antd.Select.Option>
      </Antd.Select>
    </Antd.Input.Group>
  );
}
