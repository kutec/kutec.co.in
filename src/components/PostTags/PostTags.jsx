import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

function PostTags({ tags }) {
  return (
    <span>
      {tags &&
        tags.map((tag) => (
          <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
            <span className="badge badge-pill bg-light text-dark mr-1">
              #{tag}
            </span>
          </Link>
        ))}
    </span>
  );
}

export default PostTags;
