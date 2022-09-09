import { RadioChangeEvent } from "antd";
import { Antd } from "components";
import { ChangeEventHandler } from "react";
import { ProgramCardLinkType } from "../ProgramCard.model";

type Props = {
  linkType: ProgramCardLinkType;
  setLinkType: (e: RadioChangeEvent) => void;
  linkUrl: string;
  setLinkUrl: ChangeEventHandler<HTMLInputElement>;
};

export function UrlAndTypeInputGroup({
  linkType,
  linkUrl,
  setLinkType,
  setLinkUrl,
}: Props) {
  return (
    <Antd.Input.Group>
      연결 url
      <Antd.Radio.Group
        style={{ margin: "8px 8px" }}
        buttonStyle="solid"
        optionType="button"
        options={[
          { label: "없음", value: ProgramCardLinkType.없음 },
          { label: "내부", value: ProgramCardLinkType.내부 },
          { label: "외부", value: ProgramCardLinkType.외부 },
        ]}
        value={linkType}
        onChange={setLinkType}
      />
      <Antd.Input
        placeholder="https://notion.so"
        disabled={linkType === ProgramCardLinkType.없음}
        value={linkUrl}
        onChange={setLinkUrl}
      />
    </Antd.Input.Group>
  );
}
