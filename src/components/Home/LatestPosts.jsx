import React from "react";
import { Link } from "gatsby";
import PostListing from "../PostListing/PostListing";
import PostTags from "../PostTags/PostTags";
import PostCategories from "../PostCategories/PostCategories";
import Icons from "./Icons/Icons";

const LatestPosts = ({ postEdges }) => {
  return (
    <section className="section latest-posts">
      <div className="container">
        <h4>
          <span>Latest Posts</span>
        </h4>

        <PostListing
          postEdges={postEdges}
          showCategory={true}
          showTags={true}
        />

        <p>
          Take me to the <Link to="blog">blog</Link> page.
        </p>
      </div>
    </section>
  );
};

export default LatestPosts;
