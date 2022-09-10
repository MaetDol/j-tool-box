import "./Tag.styles.css";

type Props = {
  type: string;
  name: string;
};

export function Tag({ type, name }: Props) {
  return <div className={"program-tag" + type}>{name}</div>;
}
