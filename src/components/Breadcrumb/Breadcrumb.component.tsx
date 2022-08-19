import { Antd } from 'components';
import { useLocation } from 'react-router-dom';
import { useItems } from './Breadcrumb.hooks';

interface Props {
    style: Object;
}

export default function Breadcrumb(props: Props) {
    const location = useLocation();
    const paths = location.pathname.split('/').slice(1);

    const items = useItems(paths);

    return (
        <Antd.Breadcrumb {...props}>
            {items}
        </Antd.Breadcrumb>
    )
}