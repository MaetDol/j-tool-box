import { Antd } from "components";
import { Link } from "react-router-dom";

export function useItems(paths: string[]) {
  return paths.map((_, index) => getItem(paths, index));
}

export function getItem(paths: string[], index: number) {
  const href = paths.slice(0, index).join('/');
  return (
    <Antd.Breadcrumb.Item key={href}>
      <Link to={href}>
        {paths[index]}
      </Link>
    </Antd.Breadcrumb.Item>
  );
}