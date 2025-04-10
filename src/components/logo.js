import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import logo from "../../content/assets/images/logo.png"

const Logo = ({ width, height, className }) => {
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
    ...(className && { className }),
  }

  imgProps.className = className ? `${className} logo` : "logo"

  return (
    <Link to="/" aria-label="Vo.Ci. nei castelli" className="logo">
      <img
        {...imgProps}
        alt={`Logo ${data?.site?.siteMetadata?.titolo || ""}`}
        src={logo}
      />
    </Link>
  )
}

export default Logo
