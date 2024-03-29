import 'antd/dist/antd.css';
import { Link } from "gatsby";
import React from "react";
import Image from "../components/image";
import LayoutSite from "../components/layout";
import SEO from "../components/seo";
import '../styles/index.scss';

const IndexPage = () => (
  <LayoutSite>
    <SEO title="Pedro Ramos" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </LayoutSite>
)

export default IndexPage
