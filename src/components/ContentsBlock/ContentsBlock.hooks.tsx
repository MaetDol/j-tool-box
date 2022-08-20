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

const FALSE = 0;
const TRUE = 1;
export function useEventHandlers(
  data: ContentsBlockData,
  updateData: () => void
) {
  const handlerFactory =
    (isPropertyValue: typeof TRUE | typeof FALSE) => (id: string) =>
      getInputChangeHandler((value) => {
        data.eventProperties[id][isPropertyValue] = value;
        updateData();
      });

  const getChangePropertyKeyHandler = handlerFactory(FALSE);
  const getChangePropertyValueHandler = handlerFactory(TRUE);

  const deleteProperty = (id: string) => () => {
    delete data.eventProperties[id];
    updateData();
  };

  const changeEventNameHandler = getInputChangeHandler((name: string) => {
    data.eventName = name;
    updateData();
  });

  return {
    getChangePropertyKeyHandler,
    getChangePropertyValueHandler,
    deleteProperty,
    changeEventNameHandler,
  };
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
