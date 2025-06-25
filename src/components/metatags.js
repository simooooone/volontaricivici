import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Metatags = props => {
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
  `);

  return (
    <Helmet htmlAttributes={ { lang: 'it' } }>
      <title>{ `${data.site.siteMetadata.titolo}` }</title>
      <meta
        name="description"
        content={ `${data.site.siteMetadata.description}` }
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="canonical" href={ `${"https://www.volontaricivici.sm"}${props.location}` } />
      <meta name="apple-mobile-web-app-title" content="VolontariCivici" />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="../content/assets/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../content/assets/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../content/assets/images/favicon-16x16.png"
      />
     <link
        rel="mask-icon"
        color="#ffffff"
        href="../content/assets/images/safari-pinned-tab.svg"
/>
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        itemprop="name"
        content={ `${props.titolo} | ${data.site.siteMetadata.titolo}` }
      />
      <meta property="og:type" content="website" />
      <meta
        itemprop="description"
        content={ `${props.description} | ${data.site.siteMetadata.description}` }
      />
      <meta itemprop="image" content={ `${props.featuredImage}` }
      />
      <meta property="og:url" content={ `${data.site.siteMetadata.siteUrl}` }
      />
      <meta property="og:title" content={ `${props.titolo} | ${data.site.siteMetadata.titolo}` } />
      <meta
        property="og:description"
        content={ `${props.description} | ${data.site.siteMetadata.description}` }
      />
      <meta property="og:image"
        content={ `${props.featuredImage}` }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={ `${props.titolo} | ${data.site.siteMetadata.titolo}` }
      />
      <meta
        name="twitter:description"
        content={ `${props.description} | ${data.site.siteMetadata.description}` }
      />
      {/* <meta name="twitter:image"
        content={ `${props.immagineGatsbyData.placeholder.fallback}` }
      /> */}
    </Helmet>
  );
};

export default Metatags;
