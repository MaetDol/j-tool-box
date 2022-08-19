import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Breadcrumb, Menu } from 'components';
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
          <Breadcrumb style={{ margin: '16px'}}/>

          <Layout style={{ backgroundColor: 'white', padding: '16px' }}>
            <Routings />
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
