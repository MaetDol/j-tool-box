import { Antd, ContentsBlock } from "components";
import {
  ContentsBlockData,
  ContentsType,
  LinkType,
  stringifyContentsBlocks,
} from "components/ContentsBlock";
import { copy } from "hooks";
import { useEffect, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function ProgramContentsBlock() {
  const [contentsBlocks, setContentsBlocks] = useState<ContentsBlockData[]>([]);
  const addContentsBlock = () => {
    setContentsBlocks([
      ...contentsBlocks,
      {
        contentsType: ContentsType.Image,
        contentsUrl: "",
        eventName: "",
        eventProperties: {},
        linkType: LinkType.None,
        linkUrl: "",
        id: Date.now(),
      },
    ]);
  };
  const setData = (index: number) => (data: ContentsBlockData | undefined) => {
    if (!data) {
      contentsBlocks.splice(index, 1);
    } else {
      contentsBlocks[index] = data;
    }
    setContentsBlocks([...contentsBlocks]);
  };

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

  const tryCopy = () => {
    const { failedMessage, result } = stringifyContentsBlocks(contentsBlocks);

    if (failedMessage) {
      alert(failedMessage);
      return;
    }
    copy(result)
      .then(() => alert("Copied JSON data"))
      .catch(console.error);
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
      <Antd.Row align="middle">
        <Antd.Button
          type="primary"
          size="large"
          onClick={addContentsBlock}
          style={{ marginRight: "16px" }}
        >
          Add Contents Block
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
            setData={setData(index)}
            index={index}
            swapPosition={swapPosition}
            reorderedRef={reordered}
          />
        ))}
      </DndProvider>
    </div>
  );
}
