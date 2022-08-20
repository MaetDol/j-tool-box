import { Antd } from "components";
import {
  getInputChangeHandler,
  getRadioChangeHandler,
  useStringInputState,
} from "hooks";
import {
  toRadioOptions,
  useEventPropertyHandlers,
  useNewEventPropertyInputState,
} from "./ContentsBlock.hooks";
import {
  ContentsBlockData,
  ContentsType,
  LinkType,
} from "./ContentsBlock.model";

interface Props {
  data: ContentsBlockData;
  setData: (data: ContentsBlockData | undefined) => void;
}

export default function ContentsBlock({ data, setData }: Props) {
  const updateData = () => setData({ ...data });
  const tryDeleteContentsBlcok = () => {
    const isDelete = window.confirm("Really want to delete?");
    if (isDelete) setData(undefined);
  };

  const changeContentType = getRadioChangeHandler((value: ContentsType) => {
    data.contentsType = value;
    updateData();
  });
  const changeContentUrl = getInputChangeHandler((url: string) => {
    data.contentsUrl = url;
    updateData();
  });

  const changeEventName = getInputChangeHandler((name: string) => {
    data.eventName = name;
    updateData();
  });

  const {
    deleteProperty,
    getChangePropertyKeyHandler,
    getChangePropertyValueHandler,
  } = useEventPropertyHandlers(data, updateData);

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

  const changeLinkType = getRadioChangeHandler((value: LinkType) => {
    data.linkType = value;
    updateData();
  });
  const changeLinkUrl = getInputChangeHandler((value) => {
    data.linkUrl = value;
    updateData();
  });

  return (
    <Antd.Card hoverable>
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
          onChange={changeContentType}
          optionType="button"
          buttonStyle="solid"
          style={{ minWidth: "fit-content" }}
        />
        <Antd.Input
          value={data.contentsUrl}
          onChange={changeContentUrl}
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
          onChange={changeLinkType}
          optionType="button"
          buttonStyle="solid"
          style={{ minWidth: "fit-content" }}
        />
        <Antd.Input
          placeholder="/program/products/250"
          disabled={data.linkType === LinkType.None}
          value={data.linkUrl}
          onChange={changeLinkUrl}
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
          onChange={changeEventName}
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

        {Object.entries(data.eventProperties).map(([id, [name, value]]) => (
          <Antd.Input.Group
            key={id}
            style={{ display: "flex", marginTop: "16px" }}
          >
            <div style={{ width: "40px" }} />
            <Antd.Input
              prefix={'{ " '}
              suffix={' " '}
              addonAfter=":"
              placeholder="property name"
              style={{ flex: "1", minWidth: "240px" }}
              value={name}
              onChange={getChangePropertyKeyHandler(id)}
            />
            <Antd.Input
              placeholder="property value"
              prefix={' " '}
              suffix={' " }'}
              style={{ flex: "3", borderLeft: 0 }}
              value={value}
              onChange={getChangePropertyValueHandler(id)}
            />
            <Antd.Button type="primary" danger onClick={deleteProperty(id)}>
              Delete
            </Antd.Button>
          </Antd.Input.Group>
        ))}
      </Antd.Input.Group>
    </Antd.Card>
  );
}
