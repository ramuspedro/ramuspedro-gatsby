import { Avatar, Layout, Menu, Row } from "antd"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const SiderResponsive = styled(Sider)`
  .ant-avatar {
    margin-bottom: 1rem;
  }
  @media (max-width: 1170px) {
    ul {
      display: none;
    }
    .ant-avatar {
      margin-top: 1rem;
    }
  }
`

const SideMenu = () => (
  <SiderResponsive
    width={200}
    style={{ background: "#004AFF", textAlign: "center" }}
  >
    <Row>
      <Avatar size={64} icon="user" />
      <ul className="side-menu">
        <Link to="/" activeClassName="active">
          <li>home</li>
        </Link>
        <Link to="/experience/" activeClassName="active">
          <li>experience</li>
        </Link>
        <Link to="/skills/" activeClassName="active">
          <li>skills</li>
        </Link>
        <Link to="/education/" activeClassName="active">
          <li>education</li>
        </Link>
        <Link to="/projects/" activeClassName="active">
          <li>projects</li>
        </Link>
      </ul>
    </Row>
  </SiderResponsive>
)

export default SideMenu
