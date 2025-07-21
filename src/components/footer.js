import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Logo from './logo';
import coordinateBancarie from "../../content/assets/documenti/coordinate-bancarie-voci-nei-castelli.pdf"
import statuto from "../../content/assets/documenti/statuto-voci-nei-castelli.pdf"
import attoCostitutivo from "../../content/assets/documenti/atto-costitutivo-voci-nei-castelli.pdf"

const Footer = () => {
  const getYear = () => {
    const date = new Date().getFullYear();
    const blogPubYear = 2025;
    if (date === blogPubYear) {
        return blogPubYear;
    } else {
        return blogPubYear + ' - ' + date;
    }
  };

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
  `);

  const dati = data.site.siteMetadata;

  return (
    <>
      <footer className="footer py-5 mt-5 container-fluid">
        <div className="row px-5">
          <div className="col-lg-4 col-12 borderBloccoLogo">
            <div className="mb-4">
              <Logo width="90" alt={dati.acronimo} />
            </div>
            <b className="sottotitolo">
              <strong>{dati.acronimo}</strong>
            </b>
            <br />
            <b className="sottotitolo">{dati.slogan}</b>
          </div>
          <div className="col-lg-4 col-md-6 col-12 bordoContattiFooter">
            <h3 className="titolo2">Contatti</h3>
            {dati.azienda}
            <br />
            {dati.indirizzo}
            <br />
            {dati.cellulare}
            <br />
            <a
              href={ `mailto:${dati.email}` }
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="linkUnderlined normal maxc d-block longWord"
            >
              {dati.email}
            </a>
          </div>
          <div className="col-lg-4 col-md-6 py-5 col-12 px-0 ps-md-5">
            <h3 className="titolo2">Links</h3>
            <div className="cont-copyright">
              <a
                className="linkUnderlined normal maxc d-block"
                aria-label="Coordinate Bancarie"
                target="_blank"
                href={coordinateBancarie}
                rel="noopener noreferrer"
              >
                Coordinate Bancarie
              </a>
              <a
                className="linkUnderlined normal maxc d-block my-2"
                aria-label="Atto Costitutivo"
                target="_blank"
                href={attoCostitutivo}
                rel="noopener noreferrer"
              >
                Atto Costitutivo
              </a>
              <a
                className="linkUnderlined normal maxc d-block mb-2"
                aria-label="Statuto"
                target="_blank"
                href={statuto}
                rel="noopener noreferrer"
              >
                Statuto
              </a>
              <Link
                aria-label="Privacy"
                to="/privacy"
                className="linkUnderlined normal maxc d-block"
              >
                Privacy
              </Link>
              <div className="cont-social">
                <a href={dati.facebook} aria-label="facebook">
                  <span className="ico-facebook"></span>
                </a>
                <a href={dati.instagram} aria-label="instagram">
                  <span className="ico-instagram"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="row px-5 pt-5">
            <div className="col-12 text-md-center">
              &copy; 2024 - {getYear()} {dati.azienda}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
