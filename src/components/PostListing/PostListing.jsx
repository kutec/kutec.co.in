import React from "react";
import { Link } from "gatsby";
import PostCategories from "../PostCategories/PostCategories";
import PostTags from "../PostTags/PostTags";

function PostListing({ postEdges, showCategory, showTags }) {
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
    <ul className="list-unstyled posts">
      {
        /* Your post list here. */
        postList.map((post) => (
          <li
            className={`c-${post.category} media my-4`}
            key={post.path}
          >
            <div className="media-body">
              <h5 className="m-0">
                {/* <strong className="mt-0" key={post.title}> */}
                <Link to={`/${post.category}${post.path.startsWith('/') ? post.path : `/${post.path}`}`}>
                  {post.title}
                </Link>
                {/* </strong> */}
              </h5>

              {showCategory ? <PostCategories category={post.category} /> : ""}
              {showTags ? <PostTags tags={post.tags} /> : ""}
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default PostListing;
