import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

function Landing({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="landing-container" data-ref="landing.jsx">
        <div className="posts-container-1">
          <Helmet title={config.siteTitle} />
          <SEO />
          <ul>
            {posts.map(({ node }) => (
              <li key={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.excerpt}</p>
              </li>
            ))}
          </ul>
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
