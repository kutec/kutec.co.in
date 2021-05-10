import React from "react";
import { Link } from "gatsby";

function SiteFooter({ config }) {
  // const url = config.siteRss;

  return (
    <footer className="py-3 bg-light" data-ref="sitefooter.jsx">
      <div className="container text-monospace">
        <p className="m-0">
          <small className="m-0">
            Developed and maintained by&nbsp;
            <a href="mailto:ku@kutec.co.in?subject='Kushal J - Site'">
              Kushal J
            </a>.
          </small>
        </p>

        {/* <Link to={url}>
          <button type="button">Subscribe</button>
        </Link> */}
        <p>
          <small>
            Based on{" "}
            <a
              href="https://github.com/Vagr9K/gatsby-advanced-starter"
              target="_blank"
            >
              Gatsby Advanced Starter
            </a>
            .
          </small>
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
