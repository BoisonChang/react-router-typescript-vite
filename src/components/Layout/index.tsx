import { Layout, Menu } from 'antd';
import AuthStatus from '../AuthStatus';
import { Path } from '../../const';
import { useNavigate, Outlet } from 'react-router-dom';

interface NavigationItem {
  label: string;
  key: string;
  to: Path;
}

const navigation: NavigationItem[] = [
  { label: 'Dashboard', key: 'dashboard', to: Path.DASHBOARD },
  { label: 'Nothing Here', key: 'noMatch', to: Path.NOMATCH },
  { label: 'Protected Page', key: 'protected', to: Path.PROTECTED },
];

const { Header, Sider, Content, Footer } = Layout;

export default function AppLayout() {
  const navigate = useNavigate();
  const handleMenuClick = ({ key }: { key: string }) => {
    const { to } = navigation.find((item) => item.key === key) || {};
    if (to) navigate(to);
  };

  return (
    <Layout>
      <Header style={{ color: 'white' }}>
        <AuthStatus />
      </Header>
      <Layout>
        <Sider width={180}>
          <Menu
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={['home']}
            items={navigation}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ border: '10px solid black' }} />
    </Layout>
  );
}
