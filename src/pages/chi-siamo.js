import * as React from "react"
import { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import FsLightbox from "fslightbox-react"
import TopPagine from "../components/topPagine"
import immagineTop from "../assets/images/img-top-chi.jpg"
import immagineUno from "../assets/images/chi-1.jpg"
import immagineDue from "../assets/images/chi-2.jpg"

const ChiSiamo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          chiSiamoTitolo
          chiSiamoDescription
          chiSiamoAcronimo
        }
      }
    }
  `)

  const [toggler, setToggler] = useState(false)
  const metadata = data?.site?.siteMetadata

  return (
    <Layout>
      <Metatags
        titolo={metadata.chiSiamoTitolo || ``}
        description={metadata.chiSiamoDescription || ``}
      />
      <TopPagine
        alt=""
        immagineTop={immagineTop}
        slogan={metadata.chiSiamoAcronimo || ``}
      />
      <div className="container-fluid">
        <div className="row blocco">
          <div className="cont-testo col-lg-6 col-12">
            <h1 className="titolo">Chi siamo</h1>
            <h2 className="sottotitolo">
              I motivi fondsanti di Vo.Ci. Nei Castelli
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptates, quia, quos nemo quae quibusdam quas quidem
              officia voluptatibus autem. Quisquam quod, voluptates, quia, quos
              nemo quae quibusdam quas quidem officia voluptatibus autem.
              Quisquam quod, voluptates, quia, quos nemo quae quibusdam quas
              quidem officia voluptatibus autem.
            </p>
            <Link to="/cosa-facciamo" className="btn-testo">
              Cosa Facciamo
            </Link>
          </div>
          <div className="cont-img order-lg-first col-lg-6 px-0">
            <button onClick={() => setToggler(!toggler)} className="btn-img">
              <img
                alt="Immagine Chi Siamo 1"
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
            <h1 className="titolo">Lorem Ipsum</h1>
            <h2 className="sottotitolo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
            <button onClick={() => setToggler(!toggler)} className="btn-img">
              <img
                alt="Immagine Chi Siamo 2"
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

export default ChiSiamo
