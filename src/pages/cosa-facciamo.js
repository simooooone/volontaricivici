import * as React from "react"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import FsLightbox from "fslightbox-react"
// import { observeElements } from "../utils/utils"
import immagineTop from "../assets/images/img-top-cosa.jpg"
import immagineUno from "../assets/images/cosa-1.jpg"
import immagineDue from "../assets/images/cosa-2.jpg"
import TopPagine from "../components/topPagine"

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
  const [toggler, setToggler] = useState(false)
  let title = data?.site?.siteMetadata?.cosaFacciamoTitle || ``
  let description = data?.site?.siteMetadata?.cosaFacciamoDescription || ``
  let acronimo = data?.site?.siteMetadata?.cosaFacciamoAcronimo || ``

  // useEffect(() => {
  //   observeElements(".setLeft, .setRight", {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0,
  //   })
  // }, [])

  return (
    <Layout>
      <Metatags title={title} description={description} />
      <TopPagine alt="" immagineTop={immagineTop} slogan={acronimo} />
      {/* <div className="w-full top mx-0">
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
      </div> */}
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
          <div className="cont-img order-lg-first setLeft col-lg-6 px-0">
            <button onClick={() => setToggler(!toggler)} className="btn-img">
              <img
                alt="Immagine Cosa Facciamo Uno"
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
                alt="Immagine Cosa Facciamo Due"
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
