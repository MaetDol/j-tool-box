import "antd/dist/antd.css";
import { Antd, Breadcrumb, Menu } from "components";
import Routings from "routing";

const { Sider } = Antd.Layout;

function App() {
  return (
    <Antd.Layout style={{ minHeight: "100vh" }}>
      <Antd.Layout>
        <Sider width={256} style={{ position: "fixed", height: "100vh" }}>
          <Menu />
        </Sider>
        <Antd.Layout style={{ padding: "16px", marginLeft: "256px" }}>
          <Breadcrumb style={{ margin: "16px" }} />

          <Antd.Layout style={{ backgroundColor: "white", padding: "16px" }}>
            <Routings />
          </Antd.Layout>
        </Antd.Layout>
      </Antd.Layout>
    </Antd.Layout>
  );
}

export default App;
