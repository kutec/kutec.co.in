import React from "react";
import { Link } from "gatsby";
import PostListing from "../PostListing/PostListing";
import PostTags from "../PostTags/PostTags";
import PostCategories from "../PostCategories/PostCategories";
import Icons from './Icons/Icons';

const Home = ({ postEdges }) => {
  return (
    <>
      <div className="section fh home-hero mb-5 text-dark d-flex align-items-center">
        <div className="row d-flex align-items-center">
          <div className="col-md-9 col-sm-12 order-md-0 order-1">
            <h1 className="title has-text-weight-bold">
              <small>Namaste, I am</small> Kushal Jayswal
            </h1>
            <h2 className="subtitle">
              <small>A</small> frontend developer <small>from India.</small>
            </h2>

            <Icons />

            <p className="mt-4">
              I am lover by passion and by profession. Sed eu orci nec tellus
              pretium facilisis. Suspendisse ac scelerisque sem. Aliquam
              pulvinar lorem sit amet nunc suscipit dapibus. Vivamus
              pellentesque iaculis lacus aliquam fringilla. Donec eu diam dui.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Etiam ut rhoncus massa.
            </p>
          </div>

          <div className="col-md-3 col-5 order-0 order-md-1 mx-auto">
            {/* <Col xs={3} sm-order={0}> */}
            <figure className="image ml-0 mr-0">
              {/* <FontAwesomeIcon className="text-danger display-1" icon={['fas', 'laptop-code']} /> */}
              <img
                className="rounded-circle img-fluid"
                src="https://en.gravatar.com/userimage/11516795/11ac931d3c162cd15226e161772bca08.jpg?size=400"
              />
            </figure>
            {/* </Col> */}
          </div>
        </div>
      </div>
      {/* <section className="section hero">
        <div className="hero-body hero-body p-0">
          <div className="columns">
            <div className="column is-8 content is-large">
              <h1 className="title has-text-weight-bold">Kushal J.</h1>
              <h2 className="subtitle">Frontend Developer from India</h2>
            </div>
            <div className="column is-2">
              <figure className="image ml-0 mr-0">
                <img className="is-rounded" src="https://en.gravatar.com/userimage/11516795/11ac931d3c162cd15226e161772bca08.jpg?size=400" />
              </figure>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section">
        <h4>
          <span>Recent Thoughts</span>
        </h4>
        <ul className="list-unstyled">
          <PostListing postEdges={postEdges} showCategory={true} />
        </ul>

        <p>
          Take me to the <Link to="blog">blog</Link> page.
        </p>
      </section>
    </>
  );
};

export default Home;
