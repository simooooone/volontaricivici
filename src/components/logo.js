import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../assets/images/logo.png"

const Logo = () => {
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
    <Link to="/">
      <img
        alt={`Logo ${data?.site?.siteMetadata?.title || ""}`}
        height={90}
        src={logo}
        className="logo"
      />
    </Link>
  )
}

export default Logo
