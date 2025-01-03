import React from "react";
import { Link } from "gatsby";
import PostListing from "../PostListing/PostListing";
// import PostTags from "../PostTags/PostTags";
// import PostCategories from "../PostCategories/PostCategories";
// import Icons from "./Icons/Icons";

const LatestPosts = ({ postEdges }) => {
  return (
    <section className="section latest-posts">
      <div className="container">

        <div className="row">
          <div className="col-lg-3">
            <section className="twitter-follow">
              <h4>Follow me on Twitter</h4>
              <div className="my-4">
                <a className="twitter-follow-button"
                  href="https://twitter.com/kutec"
                  data-size="large"></a>
              </div>
            </section>
          </div>

          <div className="col-lg-9">
            <h4>
              <span>Latest Posts</span>
            </h4>

            <PostListing
              postEdges={postEdges}
              showCategory
              showTags
            />

            <p>
              Take me to the <Link to="blog">blog</Link> page.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default LatestPosts;
