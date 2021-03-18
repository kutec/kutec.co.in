import React from "react";
import "./Navigation.scss";
import Nav from 'react-bootstrap/Nav';

function Navigation({ config, labeled }) {
  function getLinkElements() {
    const { navigation } = config;

    return navigation.map((link) => (
      <Nav.Link href={link.url} key={link.id} target={link.target}>
        {labeled ? link.label : ""}
      </Nav.Link>
    ));
  }

  const { navigation } = config;
  if (!navigation) {
    return null;
  }
  return <>{getLinkElements()}</>;
}

export default Navigation;
