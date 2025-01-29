import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import TopPagine from "../components/topPagine"
import immagineTop from "../../content/assets/images/img-top-direttivo.jpg"

const ChiSiamo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          direttivoTitolo
          direttivoDescription
          direttivoAcronimo
        }
      }
    }
  `)

  //   const [toggler, setToggler] = useState(false)
  const metadata = data?.site?.siteMetadata

  return (
    <Layout>
      <Metatags
        titolo={metadata.direttivoTitolo || ``}
        description={metadata.direttivoDescription || ``}
      />
      <TopPagine
        alt=""
        immagineTop={immagineTop}
        slogan={metadata.direttivoAcronimo || ``}
      />
      <div className="container pt-5 mb-3">
        <div className="row">
          <h1 className="cont-tit-direttivo col-12">Direttivo</h1>
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
          <div className="cont-direttivo col-md-4 col-12">
            <div className="carica">Segretario</div>
            <div className="nome">Paolo Bartolini</div>
          </div>
          <div className="cont-direttivo col-md-4 col-12">
            <div className="carica">Vice-presidente</div>
            <div className="nome">Ana Balint Carattoni</div>
          </div>
          <div className="cont-direttivo col-md-4 col-12">
            <div className="carica">Tesoriere</div>
            <div className="nome">Maddalena Muccioli</div>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row blocco-direttivo">
          <div className="cont-direttivo col-md-4 col-12">
            <div className="carica">Consigliere</div>
            <div className="nome">Lino Sbraccia</div>
          </div>
          <div className="cont-direttivo col-md-4 col-12">
            <div className="carica">Consigliere</div>
            <div className="nome">Roberto Ercolani</div>
          </div>
          <div className="cont-direttivo col-md-4 col-12">
            <div className="carica">Consigliere</div>
            <div className="nome">Gabriele Muratori</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChiSiamo
