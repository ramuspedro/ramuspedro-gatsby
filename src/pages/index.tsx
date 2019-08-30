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
    <p>Hi there! I'm Pedro Ramos,</p>
    <p>I'm a software developer with 4 years of experience.</p>
    <p>I don't focus in the language, but in the solution.<br/>However if you ask me what I join, for sure I will answer Javascript and Python.</p>
    <p>Make ideas come to life is my big passion.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </LayoutSite>
)

export default IndexPage
