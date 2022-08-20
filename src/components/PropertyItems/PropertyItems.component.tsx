import { Antd } from "components";
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
    </>
  );
}
