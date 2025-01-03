import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Home from "../components/Home/Home";
import config from "../../data/SiteConfig";

function HomePage({ data }) {
  console.log('HomePage: ', data);
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <>
        <Helmet title={`${config.siteTitle}`} />
        <Home postEdges={postEdges} />
      </>
    </Layout>
  );
}

export default HomePage;

export const query = graphql`
  {
    allMarkdownRemark(limit: 3, sort: {fields: [fields___date], order: DESC}) {
      totalCount
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
`