import React from "react"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import { useStaticQuery, graphql, Link } from "gatsby"
import TopPagine from "../components/topPagine"
import immagineTop from "../../content/assets/images/img-top-privacy.jpg"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          notFoundPageTitolo
          notFoundPageDescription
        }
      }
    }
  `)

  return (
    <Layout alt="404 Pagina non trovata!">
      <Metatags
        titolo={`${data.site.siteMetadata.notFoundPageTitolo}`}
        description={`${data.site.siteMetadata.notFoundPageDescription}`}
      />
      <TopPagine alt=""
        immagineTop={ immagineTop }
        width="1920"
        height="768" />
      <div className="container" id="content">
        <h1>404 Pagina non trovata :-(</h1>
        <p>La pagina richiesta non è stata trovata.</p>
        <br />
        <p>
          <Link aria-label="Torna alla Home Page" to="/">Torna alla Home Page</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
