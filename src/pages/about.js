import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO title="About us" description="estb 2007" />
    <h1>About Us</h1>
    <p>Welcome to Company</p>
    <Link to="/">&larr;Go back to the homepage</Link>
  </Layout>
);

export default About;
