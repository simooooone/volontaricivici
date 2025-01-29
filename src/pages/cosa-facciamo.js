import React from "react"
import { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import FsLightbox from "fslightbox-react"
import immagineTop from "../../content/assets/images/img-top-cosa.jpg"
import immagineUno from "../../content/assets/images/cosa-1.jpg"
import immagineDue from "../../content/assets/images/cosa-2.jpg"
import TopPagine from "../components/topPagine"

const CosaFacciamo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          cosaFacciamoTitolo
          cosaFacciamoDescription
          cosaFacciamoAcronimo
        }
      }
    }
  `)

  const [toggler, setToggler] = useState(false)
  const metadata = data?.site?.siteMetadata

  return (
    <Layout>
      <Metatags
        titolo={metadata.cosaFacciamoTitolo || ``}
        description={metadata.cosaFacciamoDescription || ``}
      />
      <TopPagine
        alt=""
        immagineTop={immagineTop}
        slogan={metadata.cosaFacciamoAcronimo || ``}
      />
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
            <Link to="/chi-siamo" className="btn-testo">
              Chi Siamo
            </Link>
          </div>
          <div className="cont-img order-lg-first setLeft col-lg-6 px-0">
            <button onClick={() => setToggler(!toggler)} className="btn-img">
              <img
                alt="Immagine Cosa Facciamo 1"
                src={immagineUno}
                className="img"
              />
            </button>
            <FsLightbox toggler={toggler} sources={[{ immagineUno }]} />
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

          <div className="cont-img col-lg-6 px-0 setRight">
            <button onClick={() => setToggler(!toggler)} className="btn-img">
              <img
                alt="Immagine Cosa Facciamo 2"
                src={immagineDue}
                className="img"
              />
            </button>
            <FsLightbox toggler={toggler} sources={[{ immagineDue }]} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CosaFacciamo
