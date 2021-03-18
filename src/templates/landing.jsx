import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

function Landing({ data }) {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="landing-container" data-ref="landing.jsx">
        <div className="posts-container-1">
          <Helmet title={config.siteTitle} />
          <SEO />
        </div>
      </div>
    </Layout>
  );
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
