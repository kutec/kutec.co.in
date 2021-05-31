import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import PostCategories from "../components/PostCategories/PostCategories";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
// import "./b16-tomorrow-dark.scss";
// import "./post.scss";
import Sidebar from "../components/Sidebar/Sidebar";

export default function PostTemplate({ data, pageContext }) {
  console.log("222::: ", data, pageContext);
  const { slug, nextslug, nexttitle, prevslug, prevtitle } = pageContext;
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
                    className={"c-" + post.category + " ci-128 d-inline-block"}
                  />
                  <div>
                    <h1>{post.title}</h1>

                    {/* <UserInfo config={config} /> */}
                    <PostCategories category={post.category} />
                    <PostTags tags={post.tags} />
                  </div>
                </div>
              </div>
            </header>

            {/* eslint-disable-next-line react/no-danger */}
            <div className="section bg-white">
              <div className="container am">
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </div>
            </div>

            <div className="section">
              <div className="container">
                <div className="d-md-flex row">
                  <div className="prev-post col-md-6 py-lg-3 py-2">
                    <a href={"/blog" + prevslug}>{prevtitle}</a>
                  </div>
                  <div className="next-post col-md-6 text-right py-lg-3 py-2">
                    <a href={"/blog" + nextslug}>{nexttitle}</a>
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
