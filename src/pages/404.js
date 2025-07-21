import React from 'react';
import Layout from '../components/layout';
import Metatags from '../components/metatags';
import { useStaticQuery, graphql, Link } from 'gatsby';
import TopPagine from '../components/topPagine';

const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    notFoundPageTitolo
                    notFoundPageDescription
                }
            }
            immagineQuery: file(relativePath: { eq: "imgTop-privacy.jpg" }) { # Path relative to 'content/assets/images/'
                childImageSharp {
                gatsbyImageData(
                    formats: [AUTO, WEBP] # Request WebP (and AUTO for fallback)
                    placeholder: BLURRED  # Or DOMINANT_COLOR, TRACED_SVG
                    width: 1920           # Optional: specify a base width
                    # Add other gatsby-plugin-image options as needed:
                    quality: 60
                    layout: FULL_WIDTH
                )
                }
            }
        }
    `);
    const immagineTopData = data?.immagineQuery?.childImageSharp?.gatsbyImageData;

    return (
        <Layout alt={ `${data.site.siteMetadata.notFoundPageTitolo}` }>
            <Metatags
                location="404"
                titolo={ `${data.site.siteMetadata.notFoundPageTitolo}` }
                description={ `${data.site.siteMetadata.notFoundPageDescription}` }
                immagineGatsbyData={ immagineTopData }
            />
            { immagineTopData ? (
                <TopPagine
                    alt={ data.site.siteMetadata.notFoundPageTitolo }
                    slogan={ '' }
                    immagineGatsbyData={ immagineTopData }
                />
            ) : (
                <p>Immagine non trovata. Controlla la query e il percorso dell'immagine.</p>
            ) }
            <div className="container-fluid pt-5" id="content">
                <div className="row">
                    <h1 className="titolo">404 Pagina non trovata :-(</h1>

                    <p>La pagina richiesta non è stata trovata.</p>
                    <br />
                    <p>
                        <Link aria-label="Torna alla Home Page" to="/">
                            Torna alla Home Page
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
