import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default function CategoryTemplate({ pageContext, data }) {
  const { category } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const totalPosts = data.allMarkdownRemark.totalCount;

  return (
    <Layout>
      <div className="category-page">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <section className={category + " section fh"}>
          <div className="container">
            <h1 className="title">
              <strong>{category.substring(0, 1).toUpperCase()}</strong>
              {category.substring(1)}
            </h1>
            <p>
              <strong>{totalPosts}</strong> article(s) found.
            </p>

            <PostListing postEdges={postEdges} showTags={true} />
          </div>
        </section>
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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
`;
