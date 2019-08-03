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
import ContentSite from "./content";
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

  return (
    <Layout>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <SideMenu />
      <ContentSite>
          <main>{children}</main>
      </ContentSite>
    </Layout>
  )
}

LayoutSite.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutSite
