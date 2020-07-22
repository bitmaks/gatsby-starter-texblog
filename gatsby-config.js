module.exports = {
  siteMetadata: {
    // Update these and enjoy :)
    title: `TeXBlog`,
    description: `A simple, LaTeX enabled starter to properly showcase your beautifully typeset articles. Perfectly complements maths blogs.`,
    author: `Akshat Bisht`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-sass`,
  ],
}
