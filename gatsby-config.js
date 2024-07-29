/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Vo.Ci. San Marino`,
    description: `Associazione Dei VOlontari CIvici Sammarinesi - Vo.Ci. San Marino`,
    acronimo: `Vo.Ci.`,
    slogan: `Associazione sammarinese dei Volontari Civici`,
    author: `Vo.Ci. San Marino`,
    azienda: "Vo.Ci. San Marino",
    indirizzo: "Via XXVIII Luglio, 213 - 47891 Dogana",
    telefono: "0549 777777",
    email: "info@vocisanmarino.sm",
    website: "https://www.vocisanmarino.sm",
    privacy: "Privacy Policy",
    facebook: "https://www.facebook.com/vocisanmarino",
    instagram: "https://www.instagram.com/",
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Eczar:wght@400..800&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lexend:wght@100..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`,
          },
        ],
      },
    },
  ],
}
