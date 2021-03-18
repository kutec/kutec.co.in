import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
// import 'bulma/css/bulma.css';
// import "./index.scss";
import Header from "../components/Header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faReact, faAngular, faJs, faCss3Alt, faHtml5, faSass, faTeamspeak, } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faBicycle, faCode } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/main.scss';

library.add(fab, faReact, faAngular, faJs, faCss3Alt, faHtml5, faSass, faTeamspeak, faLaptopCode, faBicycle, faCode)

export default function MainLayout({ children }) {
  return (
    <div data-ref="MainLayout - index.jsx">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Header config={config} />
      <section className="container">
        <div className="section">
          {children}
        </div>
      </section>
    </div>
  );
}
