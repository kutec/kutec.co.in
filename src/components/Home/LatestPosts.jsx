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
            <section className="linkedin-follow">
              {/* <h4>Follow me on LinkedIn</h4> */}
              <div className="mb-4">
                
                {/* <a className="twitter-follow-button"
                  href="https://twitter.com/kutec"
                  data-size="large">
                  Follow @kutec on Twitter
                </a> */}



                
                <a className="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kushal-jayswal" target="_blank" rel="noreferrer">Follow on LinkedIn</a>



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
