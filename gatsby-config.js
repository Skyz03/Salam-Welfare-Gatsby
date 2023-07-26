/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `salam-welfare-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`, options: {
        trackingIds: [
          "268730374"
        ],
      },
    },
    "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};