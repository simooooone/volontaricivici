import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import immagineTop from "../assets/images/img-top-home.jpg"
import immagineUno from "../assets/images/index-1.jpg"
import immagineDue from "../assets/images/index-2.jpg"
import TopPagine from "../components/topPagine"

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
          alt=""
          immagineTop={immagineTop}
          slogan={metadata.acronimo || ""}
          dedica="Un'associazione per San Marino"
          displayExtended="block"
        />
        <div className="container-fluid">
          <div className="row blocco">
            <div className="cont-testo col-lg-6 col-12">
              <h1 className="titolo">Chi siamo e cosa facciamo</h1>
              <h2 className="sottotitolo">{metadata.slogan || ""}</h2>
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
              <img alt="Immagine Chi Siamo" src={immagineDue} className="img" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
