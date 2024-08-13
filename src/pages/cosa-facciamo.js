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
      <div className="blocco">
        <h1>Cosa Facciamo</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          neque obcaecati cupiditate?
        </p>
      </div>
      <div className="blocco">
        <div className="cont-testo">
          <h1 className="titolo">Proponi iniziativa</h1>
          <h2 className="sottotitolo">
            Proporre soluzioni come cuore della nostra associazione
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptates, quia, quos nemo quae quibusdam quas quidem officia
            voluptatibus autem. Quisquam quod, voluptates, quia, quos nemo quae
            quibusdam quas quidem officia voluptatibus autem. Quisquam quod,
            voluptates, quia, quos nemo quae quibusdam quas quidem officia
            voluptatibus autem.
          </p>
          <Link to="/" className="btn-testo">
            Proponi la tua iniziativa
          </Link>
        </div>
        <div className="cont-img">
          <img alt="Immagine Chi Siamo" src={immagineUno} className="img" />
        </div>
      </div>
    </Layout>
  )
}

export default CosaFacciamo
