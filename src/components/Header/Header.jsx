import React from "react";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';



function Header({ config }) {
  const logo = config.siteLogo;
  const title = config.siteTitle;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <header className="header mt-4 mb-5">
      <div className="container">
        <Navbar bg="" variant="light" className="p-0">
          <Navbar.Brand href="/" id="1" className="is-gray">
            {/* <img src={logo} className="d-inline-block align-middle" /> */}
            <figure className="image d-inline-block align-middle mb-0">
              <img className="rounded-circle img-fluid" src={logo} />
            </figure>
            <strong> {title}</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Navigation config={config} labeled />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
