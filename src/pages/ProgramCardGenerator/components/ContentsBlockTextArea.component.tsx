import { Antd } from "components";
import ProgramContentsBlock from "pages/ProgramContentsBlock";
import { ChangeEventHandler, useState } from "react";

type Props = {
  contentsBlocks: string;
  setContentsBlocks: ChangeEventHandler<HTMLTextAreaElement>;
};

export function ContentsBlockTextArea({
  contentsBlocks,
  setContentsBlocks,
}: Props) {
  const [isShowingModal, setIsShowingModal] = useState(false);

  return (
    <Antd.Input.Group>
      콘텐츠 블럭
      <Antd.Button
        style={{ margin: "8px" }}
        onClick={() => setIsShowingModal(true)}
      >
        수정하기
      </Antd.Button>
      <Antd.Input.TextArea
        autoSize
        value={contentsBlocks}
        onChange={setContentsBlocks}
      />
      <Antd.Modal
        open={isShowingModal}
        width="80vw"
        onCancel={() => setIsShowingModal(false)}
      >
        <ProgramContentsBlock />
      </Antd.Modal>
    </Antd.Input.Group>
  );
}
