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
    title: `Vo.Ci. Nei Castelli`,
    description: `Associazione Dei Volontari Civici Sammarinesi - Vo.Ci. Nei Castelli`,
    acronimo: `Vo.Ci.`,
    slogan: `Associazione sammarinese dei Volontari Civici`,
    author: `Simone Foschi`,
    azienda: "Vo.Ci. Nei Castelli",
    indirizzo: "Via XXVIII Luglio, 213 - 47891 Dogana",
    telefono: "0549 777777",
    cellulare: "335 1234567",
    email: "info@vocisanmarino.sm",
    siteUrl: "https://www.vocisanmarino.sm",
    privacy: "Privacy Policy",
    facebook: "https://www.facebook.com/vocisanmarino",
    instagram: "https://www.instagram.com/",
    homeTitle: "Il Blog di Vo.Ci. Nei Castelli",
    homeDescription: "",
    chiSiamoTitle: "Il Blog di Vo.Ci. Nei Castelli",
    chiSiamoDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque obcaecati cupiditate?",
    chiSiamoAcronimo: "Chi Siamo",
    cosaFacciamoTitle: "Il Blog di Vo.Ci. Nei Castelli",
    cosaFacciamoDescription: "",
    cosaFacciamoAcronimo: "Cosa Facciamo",
    blogTitle: "Il Blog di Vo.Ci. Nei Castelli",
    blogDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque obcaecati cupiditate?",
    notFoundPageTitle: "404 | Pagina non trovata",
    notFoundPageDescription: "La pagina richiesta non è stata trovata",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                acronimo
                slogan
                author
                azienda
                siteUrl
                indirizzo
                telefono
                cellulare
                email
                privacy
                facebook
                instagram
                title
                description
                blogTitle
                blogDescription
                chiSiamoTitle
                chiSiamoDescription
                cosaFacciamoTitle
                cosaFacciamoDescription
                notFoundPageTitle
                notFoundPageDescription
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  update: [edge.node.frontmatter.update],
                  url: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { date: { ne: null }, update: { ne: null } } }
                  sort: [{frontmatter: {update: ASC}}, {frontmatter: {date: ASC}}]
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        update
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Vo.Ci. Nei Castelli RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
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
        display: "minimal-ui",
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-source-google-calendar`,
    //   options: {
    //     calendarIds: [
    //       "ccaf3eee58135b88ab599006919ac953d699e42e575017eaacbdc04ffb2a5a4e@group.calendar.google.com",
    //     ],
    //     // options to retrieve the next 10 upcoming events
    //     timeMin: new Date().toISOString(),
    //     maxResults: 10,
    //     singleEvents: true,
    //     orderBy: "startTime",
    //   },
    // },

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
            name: `Font`,
            file: `https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Eczar:wght@400..800&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lexend:wght@100..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`,
          },
        ],
      },
    },
  ],
}
