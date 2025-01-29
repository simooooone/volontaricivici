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
    titolo: `Vo.Ci. Nei Castelli`,
    description: `Associazione Dei Volontari Civici Sammarinesi - Vo.Ci. Nei Castelli`,
    acronimo: `Vo.Ci.`,
    slogan: `Associazione Sammarinese di Volontari`,
    author: `Simone Foschi`,
    azienda: "Vo.Ci. Nei Castelli",
    presidente: "Melissa Mussoni",
    indirizzo: "Via Cà dei lunghi, 132  Cailungo",
    telefono: "338 189 31 99",
    cellulare: "338 189 31 99",
    email: "vocineicastelli@giuntedicastello.sm",
    siteUrl: "https://www.vocisanmarino.sm",
    privacy: "Privacy Policy",
    facebook: "https://www.facebook.com/profile.php?id=61559614356602",
    instagram: "https://www.instagram.com/",
    homeTitolo: "Vo.Ci. Nei Castelli, associazione di volontariato sammarinese",
    homeDescription:
      "Vo.Ci. Nei Castelli è un'associazione di volontariato sammarinese",
    homeAcronimo: "Vo.Ci. Nei Castelli",
    direttivoTitolo: "Il direttivo di Vo.Ci. Nei Castelli",
    direttivoDescription:
      "Il direttivo di Vo.Ci. Nei Castelli è composto da un gruppo di persone che si occupano della gestione dell'associazione",
    direttivoAcronimo: "Direttivo",
    chiSiamoTitolo: "Cjhi Siamo Vo.Ci. Nei Castelli",
    chiSiamoDescription:
      "Siamo un'associazione di volontariato sammarinese che si occupa di varie attività ed eventi in Repubblica",
    chiSiamoAcronimo: "Chi Siamo",
    cosaFacciamoTitolo: "Cosa facciamo - Vo.Ci. Nei Castelli",
    cosaFacciamoDescription:
      "Cosa facciamo in Vo.Ci. Nei Castelli - Associazione di volontariato sammarinese",
    cosaFacciamoAcronimo: "Cosa Facciamo",
    blogTitolo: "Il Blog di Vo.Ci. Nei Castelli",
    blogDescription:
      "Il nostro Blog con tutte le novità e gli eventi di Vo.Ci. Nei Castelli",
    blogAcronimo: "Il Blog di Vo.Ci. Nei Castelli",
    notFoundPageTitolo: "404 | Pagina non trovata",
    notFoundPageDescription: "La pagina richiesta non è stata trovata",
    notFoundPageAcronimo: "404 | Pagina non trovata",
    privacyTitolo: "Privacy policy",
    privacyDescription: "Privacy policy Vo.Ci. Nei Castelli",
  },
  plugins: [
    `gatsby-plugin-decap-cms`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                titolo
                description
                acronimo
                slogan
                author
                azienda
                presidente
                indirizzo
                telefono
                cellulare
                email
                siteUrl
                privacy
                facebook
                instagram
                homeTitolo
                homeDescription
                homeAcronimo
                direttivoTitolo
                direttivoDescription
                direttivoAcronimo
                chiSiamoTitolo
                chiSiamoDescription
                chiSiamoAcronimo
                cosaFacciamoTitolo
                cosaFacciamoDescription
                cosaFacciamoAcronimo
                blogTitolo
                blogDescription
                blogAcronimo
                notFoundPageTitolo
                notFoundPageDescription
                notFoundPageAcronimo
                privacyTitolo
                privacyDescription
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
                        titolo
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Associazione Vo.Ci. nei Castelli San Marino`,
        short_name: `Vo.Ci. nei Castelli`,
        lang: `it`,
        display: `standalone`, // Standalone per far sembrare che sia un'app nativa
        start_url: `/`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
        background_color: `#663399`,
        theme_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // display: "minimal-ui",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/blog`,
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
            name: `Font`,
            file: `https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Eczar:wght@400..800&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lexend:wght@100..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-offline",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ],
}
