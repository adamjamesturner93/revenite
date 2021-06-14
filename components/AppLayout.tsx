import "antd/dist/antd.css";
import React, { useState } from "react";

import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  HeartOutlined,
  LoginOutlined,
  LogoutOutlined,
  CalendarOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout, Menu, Row, PageHeader } from "antd";
// import { useAuth } from "../hooks";

const UNAUTHORISED_ROUTES = [
  { key: "/", label: "Home", icon: <HomeOutlined /> },
];
const AUTHORISED_ROUTES = [
  { key: "/dashboard", label: "Dashboard", icon: <HomeOutlined /> },
  { key: "/workouts", label: "Workouts", icon: <SettingOutlined /> },
  {
    key: "/health-checks",
    label: "Health Checks",
    icon: <HeartOutlined />,
  },
  {
    key: "/calendar",
    label: "Calendar",
    icon: <CalendarOutlined />,
  },
  {
    key: "/tips",
    label: "Tips",
    icon: <BulbOutlined />,
  },
];

const AppLayout: React.FC<{ title?: string }> = ({ title, children }) => {
  const { Sider, Content, Footer } = Layout;
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const { user, signOut } = useAuth();

  const { pathname, back } = useRouter();

  const routes = AUTHORISED_ROUTES;

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={setIsCollapsed}
        breakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "85%",
            justifyContent: "space-between",
          }}
        >
          <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
            {routes.map(({ key, icon, label }) => (
              <Menu.Item key={key} icon={icon}>
                <Link href={key}>
                  <a>{label}</a>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
          <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
            {/* {user ? (
              <React.Fragment>
                <Menu.Item key="/profile" icon={<SettingOutlined />}>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  onClick={signOut}
                  key="/sign-out"
                  icon={<LogoutOutlined />}
                >
                  <Link href="/">
                    <a>Signout</a>
                  </Link>
                </Menu.Item>
              </React.Fragment>
            ) : ( */}
            <React.Fragment>
              <Menu.Item key="/register" icon={<UserOutlined />}>
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/sign-in" icon={<LoginOutlined />}>
                <Link href="/sign-in">
                  <a>Sign In</a>
                </Link>
              </Menu.Item>
            </React.Fragment>
            {/* )} */}
          </Menu>
        </div>
      </Sider>
      <Layout>
        {title ? <PageHeader title={title} onBack={back} /> : null}
        <Content
          style={{
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Row align="middle">
            <section style={{ width: "100%" }}>{children}</section>
          </Row>
          <Footer style={{ textAlign: "center" }}>
            <Link href="/terms">
              <a>Terms and Conditions</a>
            </Link>
            <p>&copy;2021 by Adam Turner, for Imperial College London</p>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
