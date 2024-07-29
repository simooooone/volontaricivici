import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"

const DatiAnagraficiMenu = () => {
  const data = useStaticQuery(graphql`
    query SiteDatiQuery {
      site {
        siteMetadata {
          azienda
          indirizzo
          telefono
          email
          website
          privacy
          facebook
        }
      }
    }
  `)

  const azienda = data?.site?.siteMetadata?.azienda || ``
  const indirizzo = data?.site?.siteMetadata?.indirizzo || ``
  const telefono = data?.site?.siteMetadata?.telefono || ``
  const email = data?.site?.siteMetadata?.email || ``
  const website = data?.site?.siteMetadata?.website || ``
  const privacy = data?.site?.siteMetadata?.privacy || ``
  const facebook = data?.site?.siteMetadata?.facebook || ``

  return (
    <div className="my-4">
      {azienda}
      <br />
      {indirizzo}
      <br />
      <span className="flex">
        Telefono:&nbsp;{" "}
        <a className="link-navbar" href={`tel:${telefono}`}>
          {telefono}
        </a>
      </span>
      <span className="flex">
        Email:&nbsp;{" "}
        <a className="link-navbar" href={`mailto:${email}`}>
          {`mailto:${email}`}
        </a>
      </span>
      <span className="flex">
        <a className="link-navbar" href={website}>
          {website}
        </a>
      </span>
      <span className="flex">
        <a className="link-navbar" href={facebook}>
          Facebook
        </a>
      </span>
      {privacy}
    </div>
  )
}

export default DatiAnagraficiMenu
