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
            <img height="64px" className="img-fluid" src={logo} />
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
    </header>
  );
}

export default Header;
