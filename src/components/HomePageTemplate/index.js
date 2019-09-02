import React from "react";
import Helmet from "react-helmet";
import Offerings from "../Offerings";
import Testimonials from "../Testimonials";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import GitHubButton from 'react-github-btn'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
      <script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>
    </Helmet>

    <section id="home" className="hero is-fullheight">
      <div className="branding">
        <div className="container">
          <div className="level">
            <div className="brand--logo">
              <img
                src="https://en.gravatar.com/userimage/11516795/a2b65eab1a444284c8c88a3f97838eb9.jpg?size=48"
                alt="Kushal Jayswal (logo)"
              />
            </div>
            <div className="brand--name">
              <h1>
                <strong>Kushal Jayswal</strong>
              </h1>
              <small>Frontend Developer and Thinker</small>
            </div>
          </div>

          <div className="level social--follow">
            <div>
              <a className="twitter-follow-button" href="https://twitter.com/kutec" data-size="large" data-show-count="true" data-show-screen-name="false">Follow</a>
            </div>
            <div>
              <GitHubButton href="https://github.com/kutec" data-size="large" data-show-count="true" aria-label="Follow @kutec on GitHub">Follow</GitHubButton>
            </div>
          </div>
        </div>
      </div>

      <div className="section intro content">
        <div className="container">
          <p>
            I code and write about the frontend. I litterally in love with{" "}
            <em>Angular</em>, <em>WordPress</em> and <em>Blogging</em>.
          </p>
          <p>
            While not coding, I spend time with my loving wife and 3 year old
            son.
          </p>
          <p>
            You may switch over to a dedicated page{" "}
            <Link to="/about">about me</Link>.
          </p>
        </div>
      </div>
    </section>

    {/* <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
  // heading: PropTypes.string,
  // description: PropTypes.string,
  // offerings: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // testimonials: PropTypes.array,
};

export default HomePageTemplate;
