import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "./logo"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          acronimo
          slogan
          author
          azienda
          indirizzo
          telefono
          cellulare
          email
          siteUrl
          privacy
          facebook
          instagram
        }
      }
    }
  `)

  const dati = data.site.siteMetadata

  return (
    <>
      <footer className="footer py-5 mt-5 container-fluid">
        <div className="row px-5 align-items-stretch">
          <div className="col-lg-4 col-12 border-blocco-logo">
            <div className="mb-4">
              <Logo width="90" alt={dati.acronimo} />
            </div>
            {/* <h3 className="titolo2">{dati.acronimo}</h3>
      <h3 className="sottotitolo">{dati.slogan}</h3> */}
            <b className="sottotitolo">
              <strong>{dati.acronimo}</strong>
            </b>
            <br />
            <b className="sottotitolo">{dati.slogan}</b>
          </div>
          <div className="col-lg-4 col-md-6 col-12 bordo-contatti-footer">
            <h3 className="titolo2">Contatti</h3>
            {dati.azienda}
            <br />
            {dati.indirizzo}
            <br />
            {dati.telefono}
            <br />
            {dati.cellulare}
            <br />
            {dati.email}
          </div>
          <div className="col-lg-4 col-md-6 py-5 col-12 px-0 ps-md-5">
            <h3 className="titolo2">Social</h3>
            <div className="cont-social">
              <a href={dati.facebook} alt="facebook">
                <span className="ico-facebook"></span>
              </a>
              <a href={dati.instagram} alt="instagram">
                <span className="ico-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
