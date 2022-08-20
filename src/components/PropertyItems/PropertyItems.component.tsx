import { PropertyItem } from "components";
import { useEventHandlers } from "./PropertyItems.hooks";
import { Properties } from "./PropertyItems.models";

interface Props {
  properties: Properties;
  updateProperties: () => void;
}

export default function PropertyItems({ properties, updateProperties }: Props) {
  const {
    deleteProperty,
    getChangePropertyKeyHandler,
    getChangePropertyValueHandler,
  } = useEventHandlers(properties, updateProperties);

  return (
    <>
      {Object.entries(properties).map(([id, [name, value]]) => (
        <PropertyItem
          key={id}
          name={name}
          value={value}
          changeNameHandler={getChangePropertyKeyHandler(id)}
          changeValueHandler={getChangePropertyValueHandler(id)}
          deleteHandler={deleteProperty(id)}
        />
      ))}
    </>
  );
}
