import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <aside className="sidebar" data-ref="sidebar.jsx">
      <div className="bg-white">Anything here...</div>
    </aside>
  );
}

export default Footer;
