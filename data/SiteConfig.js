const config = {
  siteTitle: "Kushal J", // Site title.
  siteTitleShort: "KU", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Kushal J - A Frontend Developer's Log", // Alternative site title for SEO.
  siteLogo: "https://en.gravatar.com/userimage/11516795/a2b65eab1a444284c8c88a3f97838eb9.jpg?size=64", // Logo used for SEO and manifest.
  siteUrl: "https://kutec.netlify.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "An online space to log everything I learn in my day-to-day work and personal life.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Kushal J - A Frontend Developer's Log", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "kushjays", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD-MM-YYYY", // Date format for display.
  postsPerPage: 2, // Amount of posts displayed per listing page.
  userName: "Kushal J", // Username to display in the author segment.
  userEmail: "ku@Kutec.co.in", // Email used for RSS feed's author segment
  userTwitter: "kutec", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "India", // User location to display in the author segment.
  userAvatar: "https://en.gravatar.com/userimage/11516795/11ac931d3c162cd15226e161772bca08.jpg?size=200", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/kutec",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "mailto:ku@kutec.co.in",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2021. Kushal J", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  navigation: [
    // {
    //   id: 1,
    //   label: "About",
    //   url: "/about",
    //   target: ""
    // },
    // {
    //   id: 2,
    //   label: "Work",
    //   url: "/work",
    //   target: ""
    // },
    {
      id: 3,
      label: "Blog",
      url: "/blog",
      target: ""
    }
  ],
  homeIcons: [
    {
      id: 1,
      label: "React",
      url: "categories/reactjs",
      iconClasses: "fab fa-react",
      badgeClasses: "badge badge-pill btn btn-primary btn-lg mr-2"
    },
    {
      id: 2,
      label: "Angular",
      url: "categories/angular",
      iconClasses: "fab fa-angular",
      badgeClasses: "badge badge-pill btn btn-danger btn-lg mr-2"
    },
    {
      id: 3,
      label: "JavaScript",
      url: "categories/javascript",
      iconClasses: "fab fa-js text-warning",
      badgeClasses: "badge btn disabled btn-dark btn-lg mr-2"
    },
    {
      id: 4,
      label: "Sass",
      url: "categories/sass",
      iconClasses: "fab fa-sass",
      badgeClasses: "badge btn disabled btn-danger btn-lg mr-2"
    },
    {
      id: 5,
      label: "CSS",
      url: "categories/css",
      iconClasses: "fab fa-css3-alt",
      badgeClasses: "badge btn disabled btn-primary btn-lg mr-2"
    },
    {
      id: 6,
      label: "HTML",
      url: "categories/html",
      iconClasses: "fab fa-html5 text-danger",
      badgeClasses: "badge btn disabled btn-light btn-lg"
    }
  ]
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
