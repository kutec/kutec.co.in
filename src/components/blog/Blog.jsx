import React from "react"
import PostListing from "../PostListing/PostListing";

const Articles = ({ postEdges, totalPosts }) => {
  console.log('ku::: Articles', postEdges);

  return (
    <>
      <section className="section p-0 content is-small">
        <div className="container">
          <h1 className="title">Articles <small>{totalPosts}</small></h1>
          <PostListing postEdges={postEdges} showCategory={true} />
        </div>
      </section>
    </>
  );
}

export default Articles