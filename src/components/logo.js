import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import logo from "../assets/images/logo.png"

const Logo = ({ width, height }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
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
        alt={`Logo ${data?.site?.siteMetadata?.title || ""}`}
        src={logo}
        className="logo"
      />
    </Link>
  )
}

export default Logo
