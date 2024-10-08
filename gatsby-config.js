/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Suraj's space on the internet`,
    titleTemplate: `Suraj's space on the internet`,
    description: `Hello, this is the website of Suraj Rai. I'm interested in learning and making new things for people.`,
    siteUrl: `https://www.surajr.com`,
    image: `/static/d89107ec631d6303522c31465bc86b1d/ee604/opengoodlist.jpg`,
    author: `Suraj Rai`,
    authorSite: `https://www.surajr.com`,
    twitterUsername: `@dogood_benice`,
    twitterURL: `https://twitter.com/`,
    linkedInURL: `https://www.linkedin.com/in/surajrai`,
    githubURL: `https://github.com/dogoodbenice`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Suraj's space on the internet`,
        short_name: `surajr`,
        start_url: `/`,
        background_color: `#0027EC`,
        theme_color: `#0027EC`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "[NOPE NOTHING HERE.¯\_(ツ)_/¯]",
        head: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contentImages`,
        path: `${__dirname}/src/content/images`,
      },
    },
  ],
}
