import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import immagineTop from "../assets/images/img-top-cosa.jpg"
import immagineUno from "../assets/images/index-1.jpg"

const CosaFacciamo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          cosaFacciamoTitle
          cosaFacciamoDescription
          cosaFacciamoAcronimo
        }
      }
    }
  `)

  let title = data?.site?.siteMetadata?.cosaFacciamoTitle || ``
  let description = data?.site?.siteMetadata?.cosaFacciamoDescription || ``
  let acronimo = data?.site?.siteMetadata?.cosaFacciamoAcronimo || ``

  return (
    <Layout>
      <Metatags title={title} description={description} />
      <div className="w-full top mx-0">
        <div className="cont-img-top int">
          <img
            alt="Vo.Ci. Nei Castelli Cosa Facciamo"
            src={immagineTop}
            className="img-top"
          />
          <div className="slogan-top">
            <div className="acronimo">{acronimo}</div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row blocco">
          <div className="cont-testo col-lg-6 col-12">
            <h1 className="titolo">Cosa Facciamo</h1>
            <h2 className="sottotitolo">
              Le proposte per il paese della nostra associazione
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptates, quia, quos nemo quae quibusdam quas quidem
              officia voluptatibus autem. Quisquam quod, voluptates, quia, quos
              nemo quae quibusdam quas quidem officia voluptatibus autem.
              Quisquam quod, voluptates, quia, quos nemo quae quibusdam quas
              quidem officia voluptatibus autem.
            </p>
            <Link to="/" className="btn-testo">
              Chi Siamo
            </Link>
          </div>
          <div className="cont-img order-lg-first col-lg-6 px-0">
            <img alt="Immagine Chi Siamo" src={immagineUno} className="img" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row blocco">
          <div className="cont-testo col-lg-6 col-12">
            <h1 className="titolo">Eventi e manifestazioni</h1>
            <h2 className="sottotitolo">
              La nostra associazione all'interno degli eventi per la Repubblica
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptates, quia, quos nemo quae quibusdam quas quidem
              officia voluptatibus autem. Quisquam quod, voluptates, quia, quos
              nemo quae quibusdam quas quidem officia voluptatibus autem.
              Quisquam quod, voluptates, quia, quos nemo quae quibusdam quas
              quidem officia voluptatibus autem.
            </p>
            <Link to="/" className="btn-testo">
              Proponi la tua iniziativa
            </Link>
          </div>

          <div className="cont-img col-lg-6 px-0">
            <img alt="Immagine Chi Siamo" src={immagineUno} className="img" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CosaFacciamo
