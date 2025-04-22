import React from "react";
import Icons from "./Icons/Icons";
import LatestPosts from "./LatestPosts";
import { userAvatar } from "../../../data/SiteConfig";

const Home = ({ postEdges }) => {
  return (
    <>
      <div className="is-home section home-hero text-dark d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-9 col-sm-12 order-md-0 order-1">
              <h1 className="title has-text-weight-bold">
                <small>Namaste, I am</small> Kushal J.
              </h1>
              <h2 className="subtitle">
                <small>A</small> frontend developer <small>from India.</small>
              </h2>

              <Icons />

              <p className="mt-4">
                Above icons are my main skillsets. You can click on them and see
                what I&apos;ve learned so far in the particular topic.{" "}
                <a href="/about">Click here</a> to know more <i>about me</i>.
              </p>
            </div>

            <div className="col-md-3 col-5 order-0 order-md-1 mx-auto">
              {/* <Col xs={3} sm-order={0}> */}
              <figure className="image ml-0 mr-0">
                {/* <FontAwesomeIcon className="text-danger display-1" icon={['fas', 'laptop-code']} /> */}
                <img
                  className="rounded-circle img-fluid user-avtar"
                  src={userAvatar}
                  alt=""
                />
              </figure>
              {/* </Col> */}
            </div>
          </div>
        </div>
      </div>

      <LatestPosts postEdges={postEdges} />
    </>
  );
};

export default Home;
