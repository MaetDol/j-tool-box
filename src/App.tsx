import { Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import { Menu } from 'components';
import { Home } from 'pages';
import { Route, Routes } from 'react-router-dom';
import Routings from 'routing';

const { Sider } = Layout;


function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Sider width={256}>
          <Menu />
        </Sider>
        <Layout style={{ padding: '16px' }}>
          <Breadcrumb style={{ margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>

          <Layout style={{ backgroundColor: 'white', padding: '16px' }}>
            <Routings />
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
