import React from "react";
import Navigation from "../Navigation/Navigation";

function Header({ config }) {
  const logo = config.siteLogo;
  const title = config.siteTitle;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <header className="header">
      <nav className="navbar fixed-top navbar-light navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <figure className="image d-inline-block align-middle mb-0">
            <img className="img-fluid" src={logo} />
          </figure>
          <strong> {title}</strong>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <Navigation config={config} labeled />
          </ul>
        </div>
      </nav>
      <script
        src="//cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"
      ></script>
    </header>
  );
}

export default Header;
