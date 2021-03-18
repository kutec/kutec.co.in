import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Badge from 'react-bootstrap/Badge'

function PostCategories({ category }) {
  console.log('category: ', category);
  return (
    <>
      <small><Link
        key={category}
        to={`/categories/${_.kebabCase(category)}`}
      >

        {category}

      </Link></small>
    </>
  );
}

export default PostCategories;
