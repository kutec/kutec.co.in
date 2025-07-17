import React from 'react'
import { Helmet } from 'react-helmet'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import config from '../../data/SiteConfig'
// import 'bulma/css/bulma.css';
// import "./index.scss";
import Header from '../components/Header/Header'
import SiteFooter from '../components/SiteFooter/SiteFooter'

import '../assets/css/main.scss'

export default function MainLayout ({ children }) {
  deckDeckGoHighlightElement()

  return (
    <div
      data-ref='MainLayout - index.jsx'
      className='d-flex flex-column min-vh-100'
    >
      <Helmet>
        <meta name='description' content={config.siteDescription} />
        <html lang='en' />
      </Helmet>
      <Header config={config} />
      <main className='flex-grow-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}
