import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import immagineTop from "../../content/assets/images/img-top-home.jpg"
import immagineUno from "../../content/assets/images/index-1.jpg"
import TopPagine from "../components/topPagine"
// import SliderBlog from "../components/sliderBlog"

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
    }
  `)

  const metadata = data?.site?.siteMetadata

  return (
    <>
      <Layout>
        <Metatags
          titolo={metadata.homeTitolo || ""}
          description={metadata.homeDescription || ""}
        />
        <TopPagine
          alt="Vo.Ci. Asspociazione San Marino"
          immagineTop={immagineTop}
          slogan={metadata.acronimo || ""}
          dedica="Un'associazione per San Marino"
          displayExtended="block" />
        <div className="container-fluid" id="content">
          <div className="row blocco">
            <div className="cont-testo col-lg-6 col-12">
              <h1 className="titolo">
                Associazione Vo.Ci. - Volontari Civici dei Castelli
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
                Creazione Associazione/Cooperativa “Volontari Civici dei
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
            <div className="cont-img order-lg-first col-lg-6 px-0">
              <img alt="Immagine Chi Siamo" src={immagineUno} className="img" />
            </div>
          </div>
        </div>
        <div className="container pt-5 mb-3">
          <div className="row">
            <h2 className="cont-tit-direttivo col-12">Direttivo</h2>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row blocco-direttivo">
            <div className="cont-direttivo offset-md-4 col-md-4 col-12">
              <div className="carica">Presidente</div>
              <div className="nome">Melissa Mussoni</div>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row blocco-direttivo">
            <div className="cont-direttivo col-md-4 col-6">
              <div className="carica">Segretario</div>
              <div className="nome">Paolo Bartolini</div>
            </div>
            <div className="cont-direttivo col-md-4 col-6">
              <div className="carica">Vice-presidente</div>
              <div className="nome">Ana Balint Carattoni</div>
            </div>
            <div className="cont-direttivo col-md-4 col-6">
              <div className="carica">Tesoriere</div>
              <div className="nome">Maddalena Muccioli</div>
            </div>
            <div className="cont-direttivo col-md-4 col-6">
              <div className="carica">Consigliere</div>
              <div className="nome">Lino Sbraccia</div>
            </div>
            <div className="cont-direttivo col-md-4 col-6">
              <div className="carica">Consigliere</div>
              <div className="nome">Roberto Ercolani</div>
            </div>
            <div className="cont-direttivo col-md-4 col-6">
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
