import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../assets/images/logo.png"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <footer className="footer">
        <Link to="/">
          <img
            alt={`Logo ${data?.site?.siteMetadata?.title || ""}`}
            height={90}
            src={logo}
          />
        </Link>
      </footer>
    </>
  )
}

export default Footer
