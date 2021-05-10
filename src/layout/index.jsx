import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
// import 'bulma/css/bulma.css';
// import "./index.scss";
import Header from "../components/Header/Header";
import SiteFooter from "../components/SiteFooter/SiteFooter";

import "../assets/css/main.scss";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

export default function MainLayout({ children }) {
  deckDeckGoHighlightElement();

  return (
    <div data-ref="MainLayout - index.jsx">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Header config={config} />
      <div>{children}</div>
      <SiteFooter />
    </div>
  );
}
