/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Layout } from 'antd';
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import ContentSite from "./content";
import MenuButton from './menuButton';
import SideMenu from "./sideMenu";

const LayoutSite = ({ children }:any) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const LayoutResponsive = styled(Layout)`
    @media (max-width: 1170px) {
      flex-direction: column !important;
    }
  `;
  return (
    <LayoutResponsive style={{minHeight: '100vh', background: '#DFE3EF'}}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div style={{display: 'flex', alignItems: 'center', background: '#004AFF'}}>
        <SideMenu />
        <MenuButton />
      </div>
      <ContentSite>
          <main>{children}</main>
      </ContentSite>
    </LayoutResponsive>
  )
}

LayoutSite.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutSite
