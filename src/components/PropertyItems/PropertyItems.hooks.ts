import { getInputChangeHandler } from "hooks";
import { Properties } from "./PropertyItems.models";

const FALSE = 0;
const TRUE = 1;
export function useEventHandlers(data: Properties, updateData: () => void) {
  const handlerFactory =
    (isPropertyValue: typeof TRUE | typeof FALSE) => (id: string) =>
      getInputChangeHandler((value) => {
        data[id][isPropertyValue] = value;
        updateData();
      });

  const getChangePropertyKeyHandler = handlerFactory(FALSE);
  const getChangePropertyValueHandler = handlerFactory(TRUE);

  const deleteProperty = (id: string) => () => {
    delete data[id];
    updateData();
  };

  return {
    getChangePropertyKeyHandler,
    getChangePropertyValueHandler,
    deleteProperty,
  };
}
