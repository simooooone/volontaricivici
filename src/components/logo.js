import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import logo from "../assets/images/logo.png"

const Logo = ({ width, height }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titolo
        }
      }
    }
  `)

  const imgProps = {
    ...(width && { width }),
    ...(height && { height }),
  }
  return (
    <Link to="/">
      <img
        {...imgProps}
        alt={`Logo ${data?.site?.siteMetadata?.titolo || ""}`}
        src={logo}
        className="logo"
      />
    </Link>
  )
}

export default Logo
