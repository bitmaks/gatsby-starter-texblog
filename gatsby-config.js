module.exports = {
  siteMetadata: {
    // Update these and enjoy :)
    title: `TeXBlog`,
    description: `A simple, LaTeX enabled starter to properly showcase your beautifully typeset articles. Perfectly complements maths blogs.`,
    author: `Akshat Bisht`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-texblog`,
        short_name: `texblog`,
        start_url: `/`,
        // Color settings can be found in /styles/colors.scss
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // * need to update before push
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
