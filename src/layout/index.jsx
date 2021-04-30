import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
// import 'bulma/css/bulma.css';
// import "./index.scss";
import Header from "../components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faReact,
  faAngular,
  faJs,
  faCss3Alt,
  faHtml5,
  faSass,
  faTeamspeak,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLaptopCode,
  faBicycle,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../assets/css/main.scss";

library.add(
  fab,
  faReact,
  faAngular,
  faJs,
  faCss3Alt,
  faHtml5,
  faSass,
  faTeamspeak,
  faLaptopCode,
  faBicycle,
  faCode
);

export default function MainLayout({ children }) {
  return (
    <div data-ref="MainLayout - index.jsx">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Header config={config} />
      <div>{children}</div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}
