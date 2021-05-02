/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `logikblok.com | Suraj's home on the internet`,
    titleTemplate: `logikblok.com | Suraj's home on the internet`,
    description: `Hello, this is the website of Suraj Rai. I'm interested in learning and making new things for people.`,
    siteUrl: `https://www.logikblok.com`,
    image: `/static/d89107ec631d6303522c31465bc86b1d/ee604/opengoodlist.png`,
    author: `Suraj Rai`,
    authorSite: `https://www.logikblok.com`,
    twitterUsername: `@logikblok`,
    twitterURL: `https://twitter.com/`,
    linkedInURL: `https://www.linkedin.com/in/surajrai`,
    githubURL: `https://github.com/logikblok`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `logikblok.com | Suraj's home on the internet`,
        short_name: `logikblok`,
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
