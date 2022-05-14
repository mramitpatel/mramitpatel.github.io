module.exports = {
  siteMetadata: {
    title: `Amit Patel`,
    description: `Amit Patel is a designer, creative director and UX strategist in Chicago.`,
    author: `Amit Patel`,
    siteUrl: `https://www.mramitpatel.com`,
    //siteUrl: `https://mramitpatelgithubiogatsby24735.gatsbyjs.io/`,
    image: '/static/SiteThumbnail.jpg'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
     resolve: `gatsby-plugin-google-analytics`,
       options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
         trackingId: "G-H728MH6PX9",
         // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 325,
        respectDNT: true,
       },
      },
    //{
      //resolve: `gatsby-plugin-manifest`,
      //options: {
        //name: `Amit Patel`,
        //short_name: `amit`,
        //start_url: `/`,
        //icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      //},
    //},
    `gatsby-plugin-sass`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}