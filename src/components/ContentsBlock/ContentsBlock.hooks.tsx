import { Antd } from "components";
import { getInputChangeHandler, useStringInputState } from "hooks";
import { ContentsBlockData } from "./ContentsBlock.model";

export function toRadioOptions(obj: Object): Antd.CheckboxOptionType[] {
  return Object.entries(obj).map(([label, value]) => ({ label, value }));
}

const FALSE = 0;
const TRUE = 1;
export function useEventPropertyHandlers(
  data: ContentsBlockData,
  updateData: Function
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

  return {
    getChangePropertyKeyHandler,
    getChangePropertyValueHandler,
    deleteProperty,
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
