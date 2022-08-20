import { Antd } from "components";

interface Props {
  name: string;
  value: any;
  changeNameHandler: React.ChangeEventHandler<HTMLInputElement>;
  changeValueHandler: React.ChangeEventHandler<HTMLInputElement>;
  deleteHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PropertyItem({
  changeNameHandler,
  changeValueHandler,
  deleteHandler,
  name,
  value,
}: Props) {
  return (
    <Antd.Input.Group style={{ display: "flex", marginTop: "16px" }}>
      <div style={{ width: "40px" }} />
      <Antd.Input
        prefix={'{ " '}
        suffix={' " '}
        addonAfter=":"
        placeholder="property name"
        style={{ flex: "1", minWidth: "240px" }}
        value={name}
        onChange={changeNameHandler}
      />
      <Antd.Input
        placeholder="property value"
        prefix={' " '}
        suffix={' " }'}
        style={{ flex: "3", borderLeft: 0 }}
        value={value}
        onChange={changeValueHandler}
      />
      <Antd.Button type="primary" danger onClick={deleteHandler}>
        Delete
      </Antd.Button>
    </Antd.Input.Group>
  );
}
