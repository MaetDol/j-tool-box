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

export function useAlert() {
  const [alertMessage, setAlertMessage] = useState("");
  const [isShowingAlert, setAlert] = useState(false);

  // TODO 알림이 이미 떠있을때 핸들링
  const showAlert = (msg: string, callbackAfterAlert?: () => void) => {
    setAlertMessage(msg);
    setAlert(true);
    setTimeout(() => {
      callbackAfterAlert?.();
      setAlert(false);
    }, 2500);
  };

  const alertStyle: React.CSSProperties = {
    transition: "0.2s transform, 0.2s opacity",
    overflow: "hidden",
    position: "fixed",
    top: "4%",
    right: "4%",
    zIndex: 1001, // 모달의 z-index 가 1000 인듯 함
    boxShadow: "2px 2px 16px 0 rgba(0, 0, 0, 0.1)",
    transform: "scale(0.8)",
    opacity: 0,
  };
  if (isShowingAlert) {
    alertStyle.opacity = 1;
    alertStyle.transform = "scale(1)";
  }

  return {
    alertMessage,
    isShowingAlert,
    showAlert,
    alertStyle,
  };
}
