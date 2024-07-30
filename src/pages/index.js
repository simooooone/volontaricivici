import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import immagineTop from "../assets/images/img-top-home.jpg"
import immagineUno from "../assets/images/index-1.jpg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteIndexQuery {
      site {
        siteMetadata {
          title
          description
          slogan
          acronimo
        }
      }
    }
  `)

  let title = data?.site?.siteMetadata?.title || ``
  let description = data?.site?.siteMetadata?.description || ``
  let slogan = data?.site?.siteMetadata?.slogan || ``
  let acronimo = data?.site?.siteMetadata?.acronimo || ``

  return (
    <>
      <Layout>
        <Seo title={title} description={description} />
        <div className="w-full top mx-0">
          <div className="cont-img-top">
            <img
              alt="Immagine Principale"
              src={immagineTop}
              className="img-top"
            />
            <div className="slogan-top">
              <div className="acronimo">{acronimo}</div>
              Un'associazione per San Marino.
            </div>
          </div>
        </div>
        <div className="blocco">
          <div className="cont-img">
            <img alt="Immagine Chi Siamo" src={immagineUno} className="img" />
          </div>
          <div className="cont-testo">
            <h1 className="titolo">Chi siamo e cosa facciamo</h1>
            <h2 className="sottotitolo">{slogan}</h2>
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
        </div>

        <div className="blocco">
          <div className="cont-testo">
            <h1 className="titolo">Proponi iniziativa</h1>
            <h2 className="sottotitolo">
              Proporrre soluzioni come cuore della nostra associazione
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

          <div className="cont-img">
            <img alt="Immagine Chi Siamo" src={immagineUno} className="img" />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
