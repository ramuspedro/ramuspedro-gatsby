import { Avatar, Icon, Layout, Menu, Row } from 'antd';
import React from "react";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const SideMenu = () => (
  <Sider width={200} style={{ background: '#004AFF' }}>
    <Row type="flex" style={{display: 'flex', alignContent: 'center'}} justify="center">
      <Avatar size={64} icon="user" style={{marginBottom: '1rem'}} />
      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <span>HOME</span>
        </Menu.Item>
        <Menu.Item key="2">
          <span>EXPERIENCE</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span>SKILLS</span>
        </Menu.Item>
        <Menu.Item key="4">
          <span>EDUCATION</span>
        </Menu.Item>
        <Menu.Item key="5">
          <span>PROJECTS</span>
        </Menu.Item>
      </Menu>
    </Row>
  </Sider>
)


export default SideMenu;
