import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Metatags from "./metatags"
import Header from "./header"
import Footer from "./footer"
import BarraMobile from "./barraMobile"

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

  const Title = data?.site?.siteMetadata?.title || ``

  return (
    <>
      <BarraMobile />
      <Header Title={Title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
