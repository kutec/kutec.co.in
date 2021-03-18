import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import Blog from "../components/blog/Blog";
import config from "../../data/SiteConfig";

function BlogPage({ pageContext, data }) {
    // function renderPaging() {
    //     const { currentPageNum, pageCount } = pageContext;
    //     const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    //     const nextPage = `/${currentPageNum + 1}/`;
    //     const isFirstPage = currentPageNum === 1;
    //     const isLastPage = currentPageNum === pageCount;

    //     return (
    //         <div className="paging-container" data-ref="listing.js">
    //             {!isFirstPage && <Link to={prevPage}>Previous</Link>}
    //             {[...Array(pageCount)].map((_val, index) => {
    //                 const pageNum = index + 1;
    //                 return (
    //                     <Link
    //                         key={`listing-page-${pageNum}`}
    //                         to={pageNum === 1 ? "/" : `/${pageNum}/`}
    //                     >
    //                         {pageNum}
    //                     </Link>
    //                 );
    //             })}
    //             {!isLastPage && <Link to={nextPage}>Next</Link>}
    //         </div>
    //     );
    // }

    console.log('BlogPage: ', data);
    console.log('BlogPage pageContext: ', pageContext);
    const totalPosts = data.allMarkdownRemark.totalCount;
    const postEdges = data.allMarkdownRemark.edges;
    return (
        <Layout>
            <div className="articles-container">
                <Helmet title={`Articles | ${config.siteTitle}`} />
                <Blog postEdges={postEdges} totalPosts={totalPosts} />
                {/* {renderPaging()} */}
            </div>
        </Layout>
    );
}

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: [frontmatter___date]}) {
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