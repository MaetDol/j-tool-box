import { RadioChangeEvent } from "antd";
import { Antd } from "components";
import { ProgramCardType, ProgramCardUIType } from "../ProgramCard.model";

type Props = {
  cardType: ProgramCardType;
  setCardType: (e: RadioChangeEvent) => void;
  uiType: ProgramCardUIType;
  setUiType: (type: ProgramCardUIType) => void;
};

export function CardTypeRadio({
  cardType,
  setCardType,
  setUiType,
  uiType,
}: Props) {
  return (
    <Antd.Input.Group>
      <Antd.Radio.Group
        buttonStyle="solid"
        optionType="button"
        value={cardType}
        onChange={setCardType}
        style={{ marginRight: "24px" }}
        options={[
          { label: "배너", value: ProgramCardType.배너 },
          { label: "기획전", value: ProgramCardType.기획전 },
          { label: "프로그램", value: ProgramCardType.프로그램 },
        ]}
      />
      카드 UI 유형
      <Antd.Select
        style={{ width: "240px", marginLeft: "8px" }}
        value={uiType}
        onChange={setUiType}
      >
        <Antd.Select.Option value={ProgramCardUIType.Wide}>
          Wide
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardUIType.CircleMask}>
          Circle Mask
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardUIType.전문쌤검정}>
          전문쌤 검정
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardUIType.전문쌤하양}>
          전문쌤 하양
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardUIType.배너기본}>
          배너 기본
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardUIType.기획전기본}>
          기획전 기본
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardUIType.기획전기본2}>
          기획전 기본2
        </Antd.Select.Option>
      </Antd.Select>
    </Antd.Input.Group>
  );
}
