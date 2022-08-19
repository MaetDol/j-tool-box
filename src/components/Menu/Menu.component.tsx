import { Antd } from "components";
import { useNavigate } from "react-router-dom";
import { URLs } from "routing";
import { useSeletedKeys } from "./Menu.hooks";
import { items } from "./Menu.models";

export default function Menu() {

    const navigate = useNavigate();
    const routing = ({ key }: {key: string}) => {
        navigate(key);
    }

    const selectedKeys = useSeletedKeys();

    return (
        <Antd.Menu 
            mode="inline"
            defaultSelectedKeys={[URLs.HOME]}
            items={items}
            onClick={routing}
            selectedKeys={selectedKeys}
            openKeys={selectedKeys}
        />
    );
}