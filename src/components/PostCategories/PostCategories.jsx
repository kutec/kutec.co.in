import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

function PostCategories({ category }) {
  console.log("category: ", category);
  return (
    <>
      <Link key={category} to={`/categories/${_.kebabCase(category)}`}>
        <small className="badge badge-pill bg-primary text-light mr-3">
          {category.substring(0, 1).toUpperCase()}
          {category.substring(1)}
        </small>
      </Link>
    </>
  );
}

export default PostCategories;
