import React from "react";
import { Link } from "gatsby";
import PostCategories from "../PostCategories/PostCategories";

function PostListing({ postEdges, showCategory }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      category: postEdge.node.frontmatter.category,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <>
      {
        /* Your post list here. */
        postList.map((post) => (
          <li className="media my-4" key={Math.random()}>
            <svg
              className="bd-placeholder-img mr-3"
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 64x64"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#6c757d"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                64
              </text>
            </svg>
            <div className="media-body">
              <h5 className="mt-0 mb-2" key={post.title}>
                {/* <strong className="mt-0" key={post.title}> */}
                <Link to={`/blog${post.path}`}>{post.title}</Link>
                {/* </strong> */}
              </h5>

              {showCategory ? <PostCategories category={post.category} /> : ""}
            </div>
          </li>
        ))
      }
    </>
  );
}

export default PostListing;
