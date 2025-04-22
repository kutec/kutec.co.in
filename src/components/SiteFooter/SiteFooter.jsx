import React from "react";
import { Link } from "gatsby";

function SiteFooter({ config }) {
  // const url = config.siteRss;

  return (
    <footer className="py-3 bg-light" data-ref="sitefooter.jsx">
      <div className="container text-monospace">
        <p className="m-0">
          <small>
            <small>
              &copy;&nbsp;
              <a href="mailto:ku@kutec.co.in?subject='Kushal J - Blog Site'">
                <strong>Kushal Jayswal</strong>
              </a>
              &nbsp;{new Date().getFullYear()}.
            </small>
          </small>
        </p>

        {/* <Link to={url}>
          <button type="button">Subscribe</button>
        </Link> */}
      </div>
    </footer>
  );
}

export default SiteFooter;
