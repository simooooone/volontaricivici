import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import BarraMobile from "./barraMobile"

const Layout = ({ children, location }) => {
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

  useEffect(() => {
    // Check if the URL contains a hash (e.g., #main)
    if (location && location.hash) {
      const hash = location.hash.split("?")[0]; // Remove query string
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" }) // Smooth scrolling
      }
    }
  }, [location])

  return (
    <>
      <BarraMobile />
      <Header Titolo={Titolo} />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
