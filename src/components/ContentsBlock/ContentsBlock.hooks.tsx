import { Antd } from "components";
import {
  getInputChangeHandler,
  getRadioChangeHandler,
  useStringInputState,
} from "hooks";
import {
  ContentsBlockData,
  ContentsType,
  LinkType,
} from "./ContentsBlock.model";

export function toRadioOptions(obj: Object): Antd.CheckboxOptionType[] {
  return Object.entries(obj).map(([label, value]) => ({ label, value }));
}

export function useNewEventPropertyInputState() {
  const [newEventPropertyName, handlePropertyNameInput, setNewPropertyName] =
    useStringInputState("");

  const [newEventPropertyValue, handlePropertyValueInput, setPropertyValue] =
    useStringInputState("");

  const getNewEventProperty = (): [string, string] => {
    setNewPropertyName("");
    setPropertyValue("");

    return [newEventPropertyName, newEventPropertyValue];
  };

  return {
    newEventPropertyName,
    newEventPropertyValue,

    handlePropertyNameInput,
    handlePropertyValueInput,

    getNewEventProperty,
  };
}

export function useContentInfoHandler(
  data: ContentsBlockData,
  updateData: () => void
) {
  const changeContentTypeHandler = getRadioChangeHandler(
    (value: ContentsType) => {
      data.contentsType = value;
      updateData();
    }
  );
  const changeContentUrlHandler = getInputChangeHandler((url: string) => {
    data.contentsUrl = url;
    updateData();
  });

  return {
    changeContentTypeHandler,
    changeContentUrlHandler,
  };
}

export function useLinkInfoHandler(
  data: ContentsBlockData,
  updateData: () => void
) {
  const changeLinkTypeHandler = getRadioChangeHandler((value: LinkType) => {
    data.linkType = value;
    updateData();
  });
  const changeLinkUrlHandler = getInputChangeHandler((value) => {
    data.linkUrl = value;
    updateData();
  });

  return {
    changeLinkTypeHandler,
    changeLinkUrlHandler,
  };
}

export function stringifyContentsBlocks(datas: ContentsBlockData[]): {
  result: string;
  failedMessage: string;
  failedAt: number;
} {
  const { failedAt, failedMessage } = validateContentsBlock(datas);

  return {
    result: failedMessage ? "" : JSON.stringify(filterField(datas), null, 4),
    failedAt,
    failedMessage,
  };
}

function filterField(datas: ContentsBlockData[]): Object {
  const stringifyFieldList = {
    contentsType: "contents_type",
    contentsUrl: "contents_url",
    linkType: "link_type",
    linkUrl: "link_url",
    eventName: "event_name",
    eventProperties: "event_properties",
  } as const;
  const keys = Object.keys(
    stringifyFieldList
  ) as (keyof typeof stringifyFieldList)[];

  return datas.map((data) => {
    const newObject: { [k: string]: any } = {};
    keys.forEach((key) => {
      if (data[key]) newObject[stringifyFieldList[key]] = data[key];
    });
    if (!data.eventName) {
      delete newObject[stringifyFieldList.eventProperties];
    } else {
      const properties: { [k: string]: any } = {};
      Object.values(data.eventProperties).forEach(
        ([key, value]) => (properties[key] = value)
      );
      newObject[stringifyFieldList.eventProperties] = properties;
    }
    return newObject;
  });
}

function validateContentsBlock(datas: ContentsBlockData[]): {
  failedAt: number;
  failedMessage: string;
} {
  if (datas.length === 0) {
    return {
      failedAt: -1,
      failedMessage: "컨텐츠 블럭 목록이 비어있어요",
    };
  }

  const missingContentsUrlIndex = datas.findIndex((data) => !data.contentsUrl);
  if (missingContentsUrlIndex !== -1) {
    return {
      failedAt: missingContentsUrlIndex,
      failedMessage: `${
        missingContentsUrlIndex + 1
      } 번째 블록에 contents_url 이 누락된 것 같아요`,
    };
  }

  const missingLinkUrlIndex = datas.findIndex(
    (data) => data.linkType !== LinkType.None && !data.linkUrl
  );
  if (missingLinkUrlIndex !== -1) {
    return {
      failedAt: missingLinkUrlIndex,
      failedMessage: `${
        missingLinkUrlIndex + 1
      } 번째 블록의 Link type이 None이 아니지만, 링크가 제공되지 않았어요`,
    };
  }

  return {
    failedAt: -1,
    failedMessage: "",
  };
}
