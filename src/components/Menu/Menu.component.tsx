import * as Antd from "antd";
import { useNavigate } from "react-router-dom";
import { URLs } from "routing";
import { items } from "./Menu.models";

export default function Menu() {

    const navigate = useNavigate();
    const routing = ({ key }: {key: string}) => {
        navigate(key);
    }

    return (
        <Antd.Menu 
            mode="inline"
            defaultSelectedKeys={[URLs.HOME]}
            items={items}
            onClick={routing}
        />
    );
}