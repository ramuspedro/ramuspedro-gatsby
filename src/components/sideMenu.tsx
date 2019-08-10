import { Avatar, Layout, Menu, Row } from 'antd';
import { Link } from "gatsby";
import React from "react";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const SideMenu = () => (
  <Sider width={200} style={{ background: '#004AFF', textAlign: 'center' }}>
    <Row>
      <Avatar size={64} icon="user" style={{marginBottom: '1rem'}} />
      <ul className="side-menu">
        <Link to="/"><li className="active">home</li></Link>
        <li>experience</li>
        <li>skills</li>
        <li>education</li>
        <li>projects</li>
      </ul>
    </Row>
  </Sider>
)


export default SideMenu;
