import {
  ContentsBlockData,
  ContentsType,
  LinkType,
} from "components/ContentsBlock";
import React, { useRef, useState } from "react";

export function useContentsBlock() {
  const contentsBlockIdRef = useRef(0);
  const [contentsBlocks, setContentsBlocks] = useState<ContentsBlockData[]>([]);

  const addNewContentsBlock = (initialData?: ContentsBlockData) => {
    const {
      contentsType = ContentsType.Image,
      contentsUrl = "",
      eventName = "",
      eventProperties = {},
      linkType = LinkType.None,
      linkUrl = "",
    } = initialData || {};

    setContentsBlocks((previousBlocks) => [
      ...previousBlocks,
      {
        contentsType,
        contentsUrl,
        eventName,
        eventProperties,
        linkType,
        linkUrl,
        id: contentsBlockIdRef.current++,
      },
    ]);
  };

  const updateContentsBlock = (
    index: number,
    data: ContentsBlockData | undefined
  ) => {
    if (!data) {
      contentsBlocks.splice(index, 1);
    } else {
      contentsBlocks[index] = data;
    }
    setContentsBlocks([...contentsBlocks]);
  };

  return {
    contentsBlocks,
    addNewContentsBlock,
    updateContentsBlock,
    setContentsBlocks,
  };
}
