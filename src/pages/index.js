import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Metatags from '../components/metatags';
import TopPagine from '../components/topPagine';
import { GatsbyImage } from 'gatsby-plugin-image';

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteIndexQuery {
      site {
        siteMetadata {
          homeTitolo
          homeDescription
          slogan
          acronimo
        }
      }
      immagineQuery: file(relativePath: { eq: "blog-41.jpg" }) {
        # Path relative to 'content/assets/images/'
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP] # Request WebP (and AUTO for fallback)
            placeholder: BLURRED # Or DOMINANT_COLOR, TRACED_SVG
            width: 1920 # Optional: specify a base width
            # Add other gatsby-plugin-image options as needed:
            quality: 60
            layout: CONSTRAINED
          )
        }
      }
      immagineLaterale: file(relativePath: { eq: "blog-lateral-41.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP]
            placeholder: BLURRED
            width: 600 # Adjust as needed
            quality: 60
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  const immagineTopData = data?.immagineQuery?.childImageSharp?.gatsbyImageData;
  const immagineLateraleData = data?.immagineLaterale?.childImageSharp?.gatsbyImageData;
  const metadata = data?.site?.siteMetadata;

  return (
    <>
      <Layout>
        <Metatags
          location="/"
          titolo={metadata.homeTitolo || ""}
          description={ metadata.homeDescription || "" }
          immagineGatsbyData={ immagineTopData }
        />
        <TopPagine
          alt={"Vo.Ci. Associazione San Marino"}
          slogan={ metadata.acronimo || '' }
          immagineGatsbyData={ immagineTopData }
          dedica="Un'associazione per San Marino"
          displayExtended="block" 
        
          />
        <div className="container-fluid" id="content">
          <div className="row blocco">
            <div className="contTesto col-lg-6 col-12">
              <h1 className="titolo">
                Associazione Vo.Ci. - Volontari Civici nei Castelli
              </h1>
              <h2 className="sottotitolo">{metadata.slogan || ""}</h2>
              <p>
                Al fine di ricordare che questa associazione è nata dalla
                volontà e il sostegno di tutte le Giunte della Repubblica di San
                Marino, si riporta di seguito un passaggio dal verbale della
                Consulta delle Giunte di Castello svolta mercoledì 24 Aprile
                2024 alla presenza dei 9 Capitani:
                <br />
                <br />
                <b>Aggiornamenti:</b>
                <br />
                <br />
              </p>

              <h3 className="sottotitolo2">
                Creazione Associazione/Cooperativa “Volontari Civici nei
                Castelli”
              </h3>
              <p>
                <i>
                  "il giorno 2 Maggio il neonato Direttivo eletto nell’incontro
                  pubblico del 17 Aprile u.s. incontrerà l’Avvocato/Notaio Lucia
                  Selva per la firma assieme ai nove Capitani di Castello
                  proponenti e fondatori l’associazione."
                </i>
              </p>
            </div>
            <div className="contImg order-lg-first col-lg-6 px-0">
              <GatsbyImage
                image={ immagineLateraleData }
                loading="lazy"
                alt="Immagine Chi Sono"
                className="h-image-detail w-100"
              />
            </div>
          </div>
        </div>
        <div className="container pt-5 mb-3">
          <div className="row">
            <h2 className="contTitDirettivo col-12">Direttivo</h2>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row bloccoDirettivo">
            <div className="contDirettivo offset-md-4 col-md-4 col-12">
              <div className="carica">Presidente</div>
              <div className="nome">Melissa Mussoni</div>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row bloccoDirettivo">
            <div className="contDirettivo col-md-4 col-6">
              <div className="carica">Segretario</div>
              <div className="nome">Paolo Bartolini</div>
            </div>
            <div className="contDirettivo col-md-4 col-6">
              <div className="carica">Vice-presidente</div>
              <div className="nome">Lino Sbraccia</div>
            </div>
            <div className="contDirettivo col-md-4 col-6">
              <div className="carica">Tesoriere</div>
              <div className="nome">Maddalena Muccioli</div>
            </div>
            <div className="contDirettivo col-md-4 col-6">
              <div className="carica">Consigliere</div>
              <div className="nome">Anna Fiorelli</div>
            </div>
            <div className="contDirettivo col-md-4 col-6">
              <div className="carica">Consigliere</div>
              <div className="nome">Roberto Ercolani</div>
            </div>
            <div className="contDirettivo col-md-4 col-6">
              <div className="carica">Consigliere</div>
              <div className="nome">Gabriele Muratori</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
