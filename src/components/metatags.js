import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metatags = props => {
  // {titolo, description}
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titolo
          description
          author
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet htmlAttributes={{ lang: "it" }}>
      <title>{`${props.titolo} | ${data.site.siteMetadata.titolo}`}</title>
      <meta
        name="description"
        content={`${props.description} | ${data.site.siteMetadata.description}`}
      />
      <meta name="description" content={`${data.site.siteMetadata.author}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="../favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../favicons/favicon-32x32.png"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="../favicons/safari-pinned-tab.svg"
        color="#ffffff"
      />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        itemprop="name"
        content={`${props.titolo} | ${data.site.siteMetadata.titolo}`}
      />
      {/* <meta
        name="google-site-verification"
        content="OWXaxaKJ9W7togjVQe05PEuQCf2gi7ytdB2RW3h9jk8"
      /> */}
      <meta
        itemprop="description"
        content={`${props.description} | ${data.site.siteMetadata.description}`}
      />
      <meta itemprop="image" content="" />
      <meta property="og:url" content={`${data.site.siteMetadata.siteUrl}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${props.titolo} | ${data.site.siteMetadata.titolo}`}
      />
      <meta
        property="og:description"
        content={`${props.description} | ${data.site.siteMetadata.description}`}
      />
      <meta property="og:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:titolo"
        content={`${props.titolo} | ${data.site.siteMetadata.titolo}`}
      />
      <meta
        name="twitter:description"
        content={`${props.description} | ${data.site.siteMetadata.description}`}
      />
      <meta name="twitter:image" content="" />
    </Helmet>
  )
}

export default Metatags
