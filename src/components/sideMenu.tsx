import { Avatar, Icon, Layout, Menu, Row } from 'antd';
import React from "react";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const SideMenu = () => (
  <Sider width={200} style={{ background: '#004AFF', textAlign: 'center' }}>
    <Row>
      <Avatar size={64} icon="user" style={{marginBottom: '1rem'}} />
      <ul className="side-menu">
        <li>home</li>
        <li>experience</li>
        <li>skills</li>
        <li>education</li>
        <li>projects</li>
      </ul>
    </Row>
  </Sider>
)


export default SideMenu;
