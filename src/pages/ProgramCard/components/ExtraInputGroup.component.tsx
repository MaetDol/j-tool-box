import { RadioChangeEvent } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { Antd } from "components";
import {
  ProgramCardLocationType,
  ProgramCardTarget,
} from "../ProgramCard.model";

type Props = {
  location: ProgramCardLocationType;
  setLocation: (e: RadioChangeEvent) => void;
  hasKit: boolean;
  setHasKit: (e: CheckboxChangeEvent) => void;
  target: ProgramCardTarget;
  setTarget: (select: ProgramCardTarget) => void;
};

export function ExtraInputGroup({
  hasKit,
  location,
  setHasKit,
  setLocation,
  setTarget,
  target,
}: Props) {
  return (
    <Antd.Input.Group>
      <Antd.Radio.Group
        buttonStyle="solid"
        optionType="button"
        style={{ marginRight: "16px" }}
        value={location}
        onChange={setLocation}
        options={[
          { label: "가정방문", value: ProgramCardLocationType.가정방문 },
          { label: "온라인", value: ProgramCardLocationType.온라인 },
          { label: "현장체험", value: ProgramCardLocationType.현장체험 },
        ]}
      />
      <Antd.Checkbox
        style={{ marginRight: "16px" }}
        checked={hasKit}
        onChange={setHasKit}
      >
        키트가 있나요?
      </Antd.Checkbox>
      대상
      <Antd.Select
        style={{ marginLeft: "8px", width: "88px" }}
        value={target}
        onChange={setTarget}
      >
        <Antd.Select.Option value={ProgramCardTarget.부모님}>
          부모님
        </Antd.Select.Option>
        <Antd.Select.Option value={ProgramCardTarget.아이}>
          아이
        </Antd.Select.Option>
      </Antd.Select>
    </Antd.Input.Group>
  );
}
