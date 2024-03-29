module.exports = {
  siteMetadata: {
    title: `Amit Patel – Product Designer & Creative Director`,
    description: `Amit Patel is a Product Designer and Creative director based in Chicago. He's focused on designing products, shaping brands and creating meaningful digital experiences.`,
    author: `Amit Patel`,
    siteUrl: `https://www.mramitpatel.com`,
    //siteUrl: `https://mramitpatelgithubiogatsby24735.gatsbyjs.io/`,
    image: '/src/images/SiteThumbnail.jpg'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
    resolve: "gatsby-plugin-react-svg",
    options: {
        rule: {
          include: "/src/svg" // See below to configure properly
      }
    }
    },
    {
    resolve: `gatsby-plugin-advanced-sitemap`,
    options: {
            // The filepath and name to Index Sitemap. Defaults to '/sitemap.xml'.
            output: "/sitemap.xml",
            exclude: [
              `/dev-404-page`,
              `/404`,
              `/404.html`,
            ],
      createLinkInHead: true, // optional: create a link in the `<head>` of your site
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
    resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-BW2WM5V5RP", // Google Analytics / GA
        //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
        //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
       gtagConfig: {
        //  optimize_id: "OPT_CONTAINER_ID",
        //  anonymize_ip: true,
          cookie_expires: 7200,
          cookie_flags: "SameSite=None;Secure",
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/data/**", "/components/**"],
          // Defaults to https://www.googletagmanager.com
          origin: "",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
//        name: `Amit Patel`,
//        short_name: `amit`,
//        start_url: `/`,
        icon: 'src/images/favicon.svg', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}