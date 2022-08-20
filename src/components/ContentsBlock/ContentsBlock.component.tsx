import { Antd, PropertyItems } from "components";
import { getInputChangeHandler } from "hooks";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  toRadioOptions,
  useContentInfoHandler,
  useLinkInfoHandler,
  useNewEventPropertyInputState,
} from "./ContentsBlock.hooks";
import {
  ContentsBlockData,
  ContentsType,
  LinkType,
} from "./ContentsBlock.model";

interface Props {
  index: number;
  swapPosition: (aIndex: number, bIndex: number) => void;
  reorderedRef: React.MutableRefObject<boolean>;
  data: ContentsBlockData;
  setData: (data: ContentsBlockData | undefined) => void;
}

const ContentsBlockCardType = "contentsBlockCardType";

export default function ContentsBlock({
  index,
  swapPosition,
  reorderedRef,
  data,
  setData,
}: Props) {
  const updateData = () => setData({ ...data });

  const tryDeleteContentsBlcok = () => {
    const isDelete = window.confirm("Really want to delete?");
    if (isDelete) setData(undefined);
  };

  const { changeContentTypeHandler, changeContentUrlHandler } =
    useContentInfoHandler(data, updateData);

  const changeEventNameHandler = getInputChangeHandler((name: string) => {
    data.eventName = name;
    updateData();
  });

  const {
    handlePropertyNameInput,
    handlePropertyValueInput,

    newEventPropertyName,
    newEventPropertyValue,

    getNewEventProperty,
  } = useNewEventPropertyInputState();

  const isNewPropertyInputEmpty =
    !newEventPropertyName || !newEventPropertyValue;
  const setNewEventProperty = () => {
    data.eventProperties[Date.now()] = getNewEventProperty();
    updateData();
  };

  const { changeLinkTypeHandler, changeLinkUrlHandler } = useLinkInfoHandler(
    data,
    updateData
  );

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop<{
    index: number;
    ref: React.MutableRefObject<HTMLDivElement>;
  }>({
    accept: ContentsBlockCardType,
    collect(monitor) {
      return { handlerId: monitor.getHandlerId() };
    },
    hover(movingItem, monitor) {
      if (!ref.current) return;
      if (movingItem.index === index) return;
      if (reorderedRef.current) return;

      const draggingOffset = monitor.getClientOffset();
      if (!draggingOffset) return;

      const { top, height, bottom } = ref.current.getBoundingClientRect();

      // index 는 호버링 당하는 요소의 순서
      const isDownward = movingItem.index < index;
      const crossLimit = 0.2;
      const isCrossByDownward = draggingOffset.y > top + height * crossLimit;
      if (isDownward && !isCrossByDownward) return;

      const isCrossByUpward = draggingOffset.y < bottom - height * crossLimit;
      if (!isDownward && !isCrossByUpward) return;

      reorderedRef.current = true;
      swapPosition(index, movingItem.index);
      movingItem.index = index; // 성능상의 이유로 리렌더링을 기다리기 보단 바로 값을 수정
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ContentsBlockCardType,
    item() {
      return { index, ref };
    },
    collect(monitor) {
      return { isDragging: monitor.isDragging() };
    },
  });
  drag(drop(ref));
  const draggingStyle: React.CSSProperties = {};
  if (isDragging) {
    draggingStyle.opacity = "0.3";
    draggingStyle.backgroundColor = "#e6f7ff";
  }

  return (
    <div ref={ref}>
      <Antd.Card hoverable style={draggingStyle}>
        <Antd.Button
          type="primary"
          danger
          style={{ float: "right" }}
          onClick={tryDeleteContentsBlcok}
        >
          Delete Contents block
        </Antd.Button>
        <Antd.Divider orientationMargin={0} orientation="left">
          Contents url
        </Antd.Divider>
        <Antd.Input.Group compact style={{ display: "flex" }}>
          <Antd.Radio.Group
            options={toRadioOptions(ContentsType)}
            defaultValue={ContentsType.Image}
            value={data.contentsType}
            onChange={changeContentTypeHandler}
            optionType="button"
            buttonStyle="solid"
            style={{ minWidth: "fit-content" }}
          />
          <Antd.Input
            value={data.contentsUrl}
            onChange={changeContentUrlHandler}
            placeholder="https://url-to-contents"
          />
        </Antd.Input.Group>

        <Antd.Divider orientationMargin={0} orientation="left">
          Link to navigate by click
        </Antd.Divider>
        <Antd.Input.Group compact style={{ display: "flex" }}>
          <Antd.Radio.Group
            options={toRadioOptions(LinkType)}
            defaultValue={LinkType.None}
            value={data.linkType}
            onChange={changeLinkTypeHandler}
            optionType="button"
            buttonStyle="solid"
            style={{ minWidth: "fit-content" }}
          />
          <Antd.Input
            placeholder="/program/products/250"
            disabled={data.linkType === LinkType.None}
            value={data.linkUrl}
            onChange={changeLinkUrlHandler}
          />
        </Antd.Input.Group>

        <Antd.Input.Group>
          <Antd.Divider orientationMargin={0} orientation="left">
            Events
          </Antd.Divider>
          <Antd.Input
            addonBefore="Name"
            placeholder="컨텐츠_이미지 Clicked"
            value={data.eventName}
            onChange={changeEventNameHandler}
          />

          <Antd.Input.Group style={{ display: "flex", marginTop: "16px" }}>
            <div style={{ width: "40px" }} />
            <Antd.Input
              prefix={'{ " '}
              suffix={'"'}
              addonAfter=":"
              placeholder="property name"
              style={{ flex: "1", minWidth: "240px" }}
              value={newEventPropertyName}
              onChange={handlePropertyNameInput}
            />
            <Antd.Input
              placeholder="property value"
              prefix={'" '}
              suffix={' " }'}
              style={{ flex: "3", borderLeft: 0 }}
              value={newEventPropertyValue}
              onChange={handlePropertyValueInput}
            />
            <Antd.Button
              type="primary"
              disabled={isNewPropertyInputEmpty}
              onClick={setNewEventProperty}
            >
              Add
            </Antd.Button>
          </Antd.Input.Group>

          <PropertyItems
            properties={data.eventProperties}
            updateProperties={updateData}
          />
        </Antd.Input.Group>
      </Antd.Card>
    </div>
  );
}
