[![Netlify Status](https://api.netlify.com/api/v1/badges/4605786d-0f56-4206-9259-05270237175f/deploy-status)](https://app.netlify.com/sites/kutec/deploys)

## Changelogs 

### Sep 02 2019
1. Updated Index page
2. Update Gatsby CLI verssion
3. Added React component for Github follow button

### Aug 30 2019
1. First commit
2. Removed unwanted branding
3. Fixed issue with feed-plugin by changeing version to fix one
4. Fix JS heap memory issue on server. Still in local facing same issue

# kutec.co.in 
A [Gatsby v2](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered generic business website.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Demo
[Kushal Jayswal](https://kutec.co.in)

## Features
* Complete Business Website Suite - Home Page, About Page, Pricing Page, Contact Page and Blog
* Netlify CMS for Content Management
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc)
* Bulma and Sass Support for styling
* Progressive Web App & Offline Support
* Tags and RSS Feed for Blog
* Disqus and Share Support
* Elastic-Lunr Search (NEW)
* Pagination (NEW)
* Contact Form (Netlify Forms)
* Easy Configuration using `config.js` file

## Prerequisite
* Node
* Gatsby CLI (globally installed)

## Getting Started
Create your own project with Gatsby CLI:
```shell
gatsby new yourbusinessname https://github.com/kutec/kutec.co.in .git 
```

## Available Scripts

### Develop
Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

### Lint
Lint the code according to eslintrc file, for consistency.
```shell
yarn lint
```

### Clean
Remove the .cache and public for a scratch compile.
```shell
yarn clean
```

## Configuration
To personalize and configure this Starter open `config.js` file and replace the default values.

```javascript
module.exports = {
  siteTitle: 'Kushal Jayswal', // Site title.
  siteTitleAlt: 'Business', // Alternative site title for SEO.
  siteLogo: '/icons/icon-512x512.png', // Logo used for SEO and manifest.
  siteUrl: 'https://kutec..co.in', // Domain of your website without pathPrefix.
  // Do not use trailing slash!
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/kutec.co.in /.
  siteDescription: 'Leverage Gatsby Business Starter for your Business.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml',
  siteFBAppID: '', // FB Application ID for using app insights
  googleTagManagerID: '', // GTM tracking ID.
  disqusShortname: '', // Disqus shortname.
  userName: 'Kushal Jayswal',
  userTwitter: '',
  userLocation: '',
  userDescription: '',
  copyright: 'Copyright © Kushal Jayswal 2018. All Rights Reserved.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#00d1b2', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff', // Used for setting manifest background color.
}

```

## Deployment
Clicking the button will ask for authentication via Github, which will create a repo in your github account with this starter. Then, it will build and deploy the site to Netlify.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/kutec/kutec.co.in &amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

You can read up on how to set up Identity(Authentication for CMS User) here [How To Set Up Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/)

