import * as React from "react"

import Menu from "./menu"
import Logo from "./logo"
// import { Link } from "gatsby"

const BarraNavigazione = ({ siteTitle }) => (
  <div className="barraNavigazione w-full">
    <div className="cont-barra px-4">
      <div className="cont-logo">
        <Logo />
      </div>
      <div className="cont-menu">
        <Menu />
      </div>
      {/* <div className="cont-btn">
        <Link className="btn-contatti" to="/contatti">
          Contattaci
          Partecipare
        </Link>
      </div> */}
    </div>
  </div>
)

export default BarraNavigazione
