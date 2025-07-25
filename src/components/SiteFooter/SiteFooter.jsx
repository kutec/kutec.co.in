import React from "react";

function SiteFooter() {
  // const url = config.siteRss;

  return (
    <footer className="py-1 bg-white" data-ref="sitefooter.jsx">
      <div className="container text-monospace">
        <p className="m-0">
          <small>
            <small>
              &copy;&nbsp;
              <a href="mailto:ku@kutec.co.in?subject='Kushal Jayswal's - Blog'">
                <strong>Kushal Jayswal</strong>
              </a>
              &nbsp;{new Date().getFullYear()}.
            </small>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
