import { Antd, ContentsBlock } from "components";
import { stringifyContentsBlocks } from "components/ContentsBlock";
import { copy } from "hooks";
import { useEffect, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useAlert, useContentsBlock } from "./ProgramContentsBlock.hooks";
import { contentsBlocksFromJson } from "./ProgramContentsBlock.utils";

export default function ProgramContentsBlock() {
  const {
    contentsBlocks,
    addNewContentsBlock,
    updateContentsBlock,
    setContentsBlocks,
  } = useContentsBlock();

  // TODO: 드래그앤드롭 관련 로직 분리
  const reordered = useRef(false);
  useEffect(() => {
    reordered.current = false;
  }, [contentsBlocks]);

  const swapPosition = (a: number, b: number) => {
    [contentsBlocks[a], contentsBlocks[b]] = [
      contentsBlocks[b],
      contentsBlocks[a],
    ];
    setContentsBlocks(contentsBlocks.slice(0));
  };

  const [focusingIndex, setFocus] = useState(-1);
  const { alertMessage, showAlert, alertStyle } = useAlert();

  const tryCopy = () => {
    const { failedMessage, failedAt, result } =
      stringifyContentsBlocks(contentsBlocks);

    if (failedMessage) {
      setFocus(failedAt);
      showAlert(failedMessage, () => setFocus(-1));
      return;
    }
    copy(result)
      .then(() => showAlert("Contents Block JSON 복사 완료 했어요"))
      .catch(console.error);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showInputModal = () => setIsModalOpen(true);
  const closeInputModal = () => setIsModalOpen(false);
  const [jsonInput, setJsonInput] = useState("");
  const confirmInputModal = () => {
    const parsedContentsBlocks = contentsBlocksFromJson(jsonInput);
    if (typeof parsedContentsBlocks === "string") {
      return showAlert(parsedContentsBlocks);
    }

    setContentsBlocks(parsedContentsBlocks);

    showAlert("성공적으로 JSON 을 불러왔어요");
    closeInputModal();
  };

  return (
    <div
      style={{
        padding: "32px",
        display: "flex",
        flexFlow: "column",
        gap: "16px",
      }}
    >
      <Antd.Alert message={alertMessage} type="error" style={alertStyle} />
      <Antd.Row align="middle">
        <Antd.Button
          type="primary"
          size="large"
          onClick={() => addNewContentsBlock()}
          style={{ marginRight: "16px" }}
        >
          Add Contents Block
        </Antd.Button>
        <Antd.Button
          size="large"
          onClick={showInputModal}
          style={{ marginRight: "16px" }}
        >
          Edit from JSON
        </Antd.Button>
        <Antd.Button
          size="large"
          style={{ marginRight: "16px" }}
          onClick={tryCopy}
        >
          Copy
        </Antd.Button>
        <Antd.Typography.Paragraph style={{ margin: 0 }}>
          - You can reordering by Drag and Drop
        </Antd.Typography.Paragraph>
      </Antd.Row>

      <DndProvider backend={HTML5Backend}>
        {contentsBlocks.map((data, index) => (
          <ContentsBlock
            key={data.id}
            data={data}
            setData={(data) => updateContentsBlock(index, data)}
            index={index}
            swapPosition={swapPosition}
            reorderedRef={reordered}
            focus={focusingIndex === index}
          />
        ))}
      </DndProvider>

      <Antd.Modal
        title="불러올 콘텐츠 블럭 JSON을 입력해주세요"
        visible={isModalOpen}
        onOk={confirmInputModal}
        onCancel={closeInputModal}
        afterClose={() => setJsonInput("")}
      >
        <Antd.Input.TextArea
          autoSize
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
        />
      </Antd.Modal>
    </div>
  );
}
