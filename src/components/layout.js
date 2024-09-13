import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import BarraMobile from "./barraMobile"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteLayoutQuery {
      site {
        siteMetadata {
          titolo
        }
      }
    }
  `)

  const Titolo = data?.site?.siteMetadata?.titolo || ``

  return (
    <>
      <BarraMobile />
      <Header Titolo={Titolo} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
