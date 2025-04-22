import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import TimeAgo from 'react-timeago';
import config from "../../data/SiteConfig";
import PostCategories from "../components/PostCategories/PostCategories";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import UserInfo from "../components/UserInfo/UserInfo";
import Layout from "../layout";

export default function PostTemplate({ data, pageContext }) {
  console.log("222::: ", data, pageContext);
  const { slug, nextslug, nexttitle, prevslug, prevtitle, prevcategory, nextcategory } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        <div className="single-page" data-ref="tmpl - post.jsx">
          {/* <div className="container"> */}
          <div>
            <header className="section">
              <div className="container">
                <div className="d-flex">
                  <div>
                    <h1>{post.title}</h1>


                    <PostCategories category={post.category} />
                    <PostTags tags={post.tags} />

                    <div className="mt-2 mt-md-3">
                      <small className="mr-3 d-inline-block">
                        <i className="fas fa-user mr-2" />
                        <span className="mr-1">By</span>
                        <span className="mt-2 d-inline-block">
                          <UserInfo config={config} expanded />
                        </span>
                      </small>

                      <small className="d-inline-block">
                        <i className="fas fa-clock mr-2" />
                        <span>Posted <TimeAgo date={post.date} unit={['year', 'month', 'week']} /></span>
                      </small>


                    </div>
                  </div>
                  <span
                    className={`c-${post.category} ci-128 ml-auto d-none d-md-block`}
                  />
                </div>

              </div>
            </header>

            {/* eslint-disable-next-line react/no-danger */}
            <div className="section bg-white">
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                  </div>

                  <div className="col-md-3">
                    <div className="aside-bar">
                      <h4>Categories</h4>
                      <PostCategories category={post.category} />
                      <h4 className="mt-5">Tags</h4>
                      <PostTags tags={post.tags} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="container">
                  <div className="d-md-flex row">
                    <div className="prev-post col-md-6 py-lg-3 py-2">
                      <a href={`/${prevcategory}${prevslug}`}>{prevtitle}</a>
                    </div>
                    <div className="next-post col-md-6 text-right py-lg-3 py-2">
                      <a href={`/${nextcategory}${nextslug}`}>{nexttitle}</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div> */}

              {/* <Disqus postNode={postNode} /> */}
              {/* <Footer config={config} /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
