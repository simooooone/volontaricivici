import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import TopPagine from "../components/topPagine"
import GatsbyImage from 'gatsby-plugin-image'

const PrivacyPolicy = () => {

  const data = useStaticQuery(graphql`
      query SitePrivacyQuery {
          site {
              siteMetadata {
                  privacyTitolo
                  privacyDescription
                  privacyAcronimo
                  azienda
                  indirizzo
                  email
                  siteUrl
              }
          }
          immagineQuery: file(relativePath: { eq: "img-top-privacy.jpg" }) {
              # Path relative to 'content/assets/images/'
              childImageSharp {
                  gatsbyImageData(
                      formats: [AUTO, WEBP] # Request WebP (and AUTO for fallback)
                      placeholder: BLURRED # Or DOMINANT_COLOR, TRACED_SVG
                      width: 1920 # Optional: specify a base width
                      # Add other gatsby-plugin-image options as needed:
                      quality: 60
                      layout: CONSTRAINED
                  )
              }
          }
      }
  `)

  const immagineTopData = data?.immagineQuery?.childImageSharp?.gatsbyImageData;
  const metadata = data?.site?.siteMetadata

  return (
      <>
          <Layout>
              <Metatags
                  location={'/privacy/'}
                  titolo={`${metadata.privacyTitolo}`}
                  description={`${metadata.privacyDescription}`}
                  immagineGatsbyData={immagineTopData}
              />
              <TopPagine
                  alt={metadata.privacyTitolo}
                  slogan={`${metadata.privacyAcronimo}`}
                  immagineGatsbyData={immagineTopData}
              />
              <div className="container" id="content">
                  <div className="row blocco">
                      <div className="cont-testo col-12">
                          <h1 className="titolo">Privacy policy</h1>
                          <p>
                              Ultimo aggiornamento: 14/09/2024
                              <br />
                              <br />
                              <ul className="lista-sito">
                                  <li>
                                      <b>
                                          1. Titolare del trattamento dei dati
                                      </b>
                                      <br />
                                      Il titolare del trattamento dei dati è
                                      {metadata.azienda}, con sede legale in
                                      {metadata.indirizzo}, contattabile
                                      all'indirizzo email:
                                      <a
                                          href={`mailto:${metadata.email}`}
                                          rel="noopener noreferrer"
                                          className="link"
                                      >
                                          {metadata.email}
                                      </a>
                                      .<li></li>
                                      <b>2. Tipi di dati raccolti Il sito</b>
                                      <br />
                                      {metadata.siteUrl} non raccoglie
                                      direttamente alcun tipo di dato personale
                                      tramite cookie o altri sistemi di
                                      tracciamento. Tuttavia, gli utenti che
                                      desiderano contattarci o inviare richieste
                                      possono farlo attraverso un modulo di
                                      contatto esterno fornito da Google Forms.
                                      <li></li>
                                      Attraverso questo modulo, vengono raccolti
                                      i seguenti dati personali forniti
                                      dall'utente:
                                      <br />
                                      <br />
                                      • Nome e cognome
                                      <br />
                                      • Indirizzo email
                                      <br />• Messaggio o richiesta specifica
                                      <li></li>
                                      <b>
                                          3. Finalità del trattamento dei dati
                                      </b>
                                      <br />I dati personali raccolti tramite il
                                      modulo di Google Forms sono utilizzati
                                      esclusivamente per rispondere alle
                                      richieste e fornire informazioni relative
                                      ai servizi offerti. Nessun dato personale
                                      viene utilizzato per finalità di marketing
                                      o trasferito a terze parti senza il
                                      consenso esplicito dall'utente.
                                      <li></li>
                                      <b>4. Modalità di trattamento dei dati</b>
                                      <br />I dati raccolti tramite Google Forms
                                      vengono trattati elettronicamente e in
                                      conformità con le normative sulla
                                      protezione dei dati (GDPR). Google Forms è
                                      un servizio fornito da Google LLC, che
                                      funge da responsabile esterno del
                                      trattamento dei dati. Puoi consultare la
                                      privacy policy di Google a questo link:{' '}
                                      <a
                                          href="https://policies.google.com/privacy"
                                          rel="noopener noreferrer"
                                          target="_blank"
                                          className="link"
                                      >
                                          link alla privacy policy di Google.
                                      </a>
                                      <br />
                                      <br />I dati verranno conservati per il
                                      tempo strettamente necessario a soddisfare
                                      le richieste degli utenti o secondo gli
                                      obblighi di legge.
                                      <li></li>
                                      <b>5. Luogo del trattamento dei dati</b>
                                      <br />I dati raccolti tramite Google Forms
                                      vengono trattati e conservati sui server
                                      di Google, che possono essere situati in
                                      paesi esterni all’Unione Europea. Google
                                      aderisce al Privacy Shield e garantisce un
                                      livello adeguato di protezione dei dati
                                      personali in conformità alle normative
                                      europee.
                                      <li></li>
                                      <b>6. Diritti degli interessati</b>
                                      <br />
                                      Gli utenti hanno il diritto di:
                                      <br />
                                      <br />
                                      • Accedere ai propri dati personali.
                                      <br />
                                      • Richiedere la rettifica o la
                                      cancellazione dei dati.
                                      <br />
                                      • Opporsi al trattamento dei dati o
                                      limitarne l’uso.
                                      <br />
                                      • Richiedere la portabilità dei propri
                                      dati. <br />
                                      <br />
                                      Per esercitare i propri diritti, l’utente
                                      può contattare il titolare del trattamento
                                      all’indirizzo email{' '}
                                      <a
                                          href={`mailto:${metadata.email}`}
                                          rel="noopener noreferrer"
                                          className="link"
                                      >
                                          {metadata.email}
                                      </a>
                                      . <br />
                                      <li></li>
                                      <b>7. Modifiche alla Privacy Policy</b>
                                      <br />
                                      Il titolare del trattamento si riserva il
                                      diritto di modificare questa Privacy
                                      Policy in qualsiasi momento, dandone
                                      informazione agli utenti su questa pagina.
                                      Si consiglia di consultare periodicamente
                                      questa pagina per rimanere aggiornati
                                      sulle eventuali modifiche. Questa Privacy
                                      Policy è generica e andrebbe
                                      personalizzata con le informazioni
                                      specifiche della tua attività. Assicurati
                                      di includere il link alla Privacy Policy
                                      di Google e di adattare le sezioni secondo
                                      le tue esigenze specifiche.
                                  </li>
                              </ul>
                          </p>
                      </div>
                  </div>
              </div>
          </Layout>
      </>
  )
}

export default PrivacyPolicy
