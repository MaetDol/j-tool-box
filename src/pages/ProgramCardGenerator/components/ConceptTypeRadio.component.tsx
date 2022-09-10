import { RadioChangeEvent } from "antd";
import { Antd } from "components";
import { ProgramCardConceptType } from "../ProgramCardGenerator.model";

type Props = {
  conceptType: ProgramCardConceptType;
  setConceptType: (e: RadioChangeEvent) => void;
};

export function ConceptTypeRadio({ conceptType, setConceptType }: Props) {
  return (
    <Antd.Input.Group style={{ marginBottom: "16px" }}>
      프로그램 컨셉
      <Antd.Radio.Group
        style={{ marginLeft: "16px" }}
        optionType="button"
        buttonStyle="solid"
        value={conceptType}
        onChange={setConceptType}
        options={[
          { label: "전문가", value: ProgramCardConceptType.전문가 },
          { label: "일반", value: ProgramCardConceptType.일반 },
        ]}
      />
    </Antd.Input.Group>
  );
}
