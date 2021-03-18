import React from "react"
import { Link } from "gatsby"
import PostListing from "../PostListing/PostListing";
import PostTags from "../PostTags/PostTags";
import PostCategories from "../PostCategories/PostCategories";
import "./Home.scss";
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = ({ postEdges }) => {
  // console.log('postEdges HomeComp. ', postEdges);
  console.log('ku::: HomeComp', postEdges);


  return (
    <>
      <div className="mb-5 text-dark">
        <Row>
          <Col sm={9}>
            <h1 className="title has-text-weight-bold"><small>Namaste, I am</small> Kushal Jayswal</h1>
            <h2 className="subtitle"><small>A</small> frontend developer <small>from India.</small></h2>
            <div className="display-4">
              <Badge pill variant="info">
                <FontAwesomeIcon icon={['fab', 'react']} />
              </Badge>{' '}
              <Badge pill variant="danger">
                <FontAwesomeIcon icon={['fab', 'angular']} />
              </Badge>{' '}
              <Badge variant="dark">
                <FontAwesomeIcon className="text-warning" icon={['fab', 'js']} />
              </Badge>{' '}
              <Badge variant="danger">
                <FontAwesomeIcon icon={['fab', 'sass']} />
              </Badge>{' '}
              <Badge variant="primary">
                <FontAwesomeIcon icon={['fab', 'css3-alt']} />
              </Badge>{' '}
              <Badge variant="light">
                <FontAwesomeIcon className="text-danger" icon={['fab', 'html5']} />
              </Badge>{' '}
            </div>

            <p className="mt-4">I am <FontAwesomeIcon className="text-danger" icon={['fas', 'bicycle']} /> lover by passion and <FontAwesomeIcon className="text-danger" icon={['fas', 'code']} /> by profession. Sed eu orci nec tellus pretium facilisis. Suspendisse ac scelerisque sem. Aliquam pulvinar lorem sit amet nunc suscipit dapibus. Vivamus pellentesque iaculis lacus aliquam fringilla. Donec eu diam dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ut rhoncus massa.</p>
          </Col>
          <Col sm={3}>

            <figure className="image ml-0 mr-0">
              {/* <FontAwesomeIcon className="text-danger display-1" icon={['fas', 'laptop-code']} /> */}
              <img className="rounded-circle img-fluid" src="https://en.gravatar.com/userimage/11516795/11ac931d3c162cd15226e161772bca08.jpg?size=400" />
            </figure>
          </Col>
        </Row>
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

      <section className="section content is-small pl-0 pr-0">
        <Row>
          <Col md={6} lg={4}>
            <h4>
              <span>Recent Articles</span>
            </h4>
            <ul className="list-unstyled">
              <PostListing postEdges={postEdges} showCategory={true} />
            </ul>

            <p>Take me to the <Link to="blog">articles</Link> page.</p>
          </Col>



        </Row>

      </section>
    </>
  );
}

export default Home