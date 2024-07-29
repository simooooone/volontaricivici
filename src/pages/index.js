import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import immagineTop from "../assets/images/img-top-home.jpg"

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
        <div className="w-full top">
          <div className="cont-img-top">
            <img alt="Immagine Principale" src={immagineTop} className="logo" />
            <div className="slogan-top">
              <div className="acronimo">{acronimo}</div>

              {slogan}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
