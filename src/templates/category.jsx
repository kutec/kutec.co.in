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
  const categoryName = category.substring(0, 1).toUpperCase() + category.substring(1);

  return (
    <Layout>
      <div className="category-page">
        <Helmet
          title={`${categoryName} | ${config.siteTitle}`}
        />
        <section className={category + " section fh"}>
          <div className="container">

            <div className="row">
              <div className="col-lg-8">
                <h1 className="title">
                  {categoryName}
                </h1>
                <p>
                  <strong>{totalPosts}</strong> article(s) found.
                </p>

                <PostListing postEdges={postEdges} showTags={true} />
              </div>

              <div className="col-lg-4">
                {
                  config.skills.map((val) => (

                    val.skill.toLowerCase() === categoryName.toLowerCase() ?

                      <div className={`${val.skill.toLowerCase()}-${val.level.toLowerCase()}`}>
                        {val.level}
                      </div>

                      : ''

                  ))
                }
              </div>
            </div>
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
