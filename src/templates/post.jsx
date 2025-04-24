import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import TimeAgo from 'react-timeago';
import config from "../../data/SiteConfig";
import PostCategories from "../components/PostCategories/PostCategories";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import Layout from "../layout";
import Disqus from "../components/Disqus/Disqus";

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
                  <span
                    className={`c-${post.category} ci-128 d-none d-md-block`}
                  />
                  <div className="text-left">
                    <h1>{post.title}</h1>


                    <PostCategories category={post.category} />
                    <PostTags tags={post.tags} />

                    <div className="mt-2 mt-md-3">
                      <small className="mr-3 d-inline-block">
                        <i className="fas fa-user mr-2" />
                        <span className="mr-1">{post.author ? post.author : 'Kushal'}</span>
                      </small>

                      <small className="d-inline-block">
                        <i className="fas fa-clock mr-2" />
                        <span>Posted <TimeAgo date={post.date} unit={['year', 'month', 'week']} /></span>
                      </small>
                    </div>
                  </div>
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
                  <div className="d-md-flex justify-content-between align-items-center mb-5">

                    <div className="prev-post py-lg-3 py-2">
                      <a className={`c-${prevcategory} d-table-cell align-top pr-3`} href={`/categories/${prevcategory}`}>{prevcategory.toUpperCase()}</a>
                      <a className="d-table-cell w-100 align-top" href={`/${prevcategory}${prevslug}`}>{prevtitle}</a>
                    </div>
                    <div className="next-post text-right py-lg-3 py-2">
                      <a className="d-table-cell w-100 align-top" href={`/${nextcategory}${nextslug}`}>{nexttitle}</a>
                      <a className={`c-${nextcategory} d-table-cell align-top pl-3`} href={`/categories/${nextcategory}`}>{nextcategory.toUpperCase()}</a>
                    </div>
                  </div>

                  <Disqus postNode={postNode} />

                </div>
              </div>
              {/* <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div> */}

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
        author
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
