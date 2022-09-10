import { Antd, RequiredAsterisk } from "components";
import React, { ChangeEventHandler } from "react";

type Props = {
  title: string;
  setTitle: ChangeEventHandler;
};

export function TitleInput({ title, setTitle }: Props) {
  return (
    <Antd.Input.Group>
      카드 타이틀
      <RequiredAsterisk />
      <Antd.Input.TextArea
        value={title}
        onChange={setTitle}
        placeholder={`카드 타이틀을
입력해주세용`}
      />
    </Antd.Input.Group>
  );
}
