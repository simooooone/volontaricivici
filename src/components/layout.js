import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BarraNavigazione from "./barraNavigazione"
import Footer from "./footerBarraNavigazione"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteLayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data?.site?.siteMetadata?.title || ``

  return (
    <>
      <BarraNavigazione siteTitle={siteTitle} />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
