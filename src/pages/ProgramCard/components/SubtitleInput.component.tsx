import { Antd, RequiredAsterisk } from "components";
import { ChangeEventHandler } from "react";

type Props = {
  subtitle: string;
  setSubtitle: ChangeEventHandler;
};

export function SubtitleInput({ setSubtitle, subtitle }: Props) {
  return (
    <Antd.Input.Group>
      카드 서브타이틀
      <RequiredAsterisk />
      <Antd.Input
        value={subtitle}
        onChange={setSubtitle}
        placeholder="서브 타이틀을 입력해주세요"
      />
    </Antd.Input.Group>
  );
}
