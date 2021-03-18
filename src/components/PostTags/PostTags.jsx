import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

function PostTags({ tags }) {
  return (
    <>
      {tags &&
        tags.map((tag) => (
          <Link
            key={tag}
            to={`/tags/${_.kebabCase(tag)}`}>
            <small className="ml-3 tag is-link is-light">{tag}</small>
          </Link>
        ))}
    </>
  );
}

export default PostTags;
