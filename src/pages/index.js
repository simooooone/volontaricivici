import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import immagineTop from "../assets/images/img-top-home.jpg"
import immagineUno from "../assets/images/index-1.jpg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteIndexQuery {
      site {
        siteMetadata {
          homeTitle
          homeDescription
          slogan
          acronimo
        }
      }
    }
  `)

  let title = data?.site?.siteMetadata?.homeTitle || ``
  let description = data?.site?.siteMetadata?.homeDescription || ``
  let slogan = data?.site?.siteMetadata?.slogan || ``
  let acronimo = data?.site?.siteMetadata?.acronimo || ``

  return (
    <>
      <Layout>
        <Metatags homeTitle={title} homeDescription={description} />
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
        <div className="container-fluid">
          <div className="row blocco">
            <div className="cont-testo col-lg-6 col-12">
              <h1 className="titolo">Chi siamo e cosa facciamo</h1>
              <h2 className="sottotitolo">{slogan}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptates, quia, quos nemo quae quibusdam quas
                quidem officia voluptatibus autem. Quisquam quod, voluptates,
                quia, quos nemo quae quibusdam quas quidem officia voluptatibus
                autem. Quisquam quod, voluptates, quia, quos nemo quae quibusdam
                quas quidem officia voluptatibus autem.
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
              <h1 className="titolo">Proponi iniziativa</h1>
              <h2 className="sottotitolo">
                Proporre soluzioni come cuore della nostra associazione
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, voluptates, quia, quos nemo quae quibusdam quas
                quidem officia voluptatibus autem. Quisquam quod, voluptates,
                quia, quos nemo quae quibusdam quas quidem officia voluptatibus
                autem. Quisquam quod, voluptates, quia, quos nemo quae quibusdam
                quas quidem officia voluptatibus autem.
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
    </>
  )
}

export default IndexPage
