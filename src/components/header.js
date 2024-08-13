import * as React from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import Logo from "./logo"

const Header = () => (
  <header>
    <div className="barraNavigazione w-full">
      <div className="cont-barra px-4">
        <div className="cont-logo">
          <Logo />
        </div>
        <div className="cont-menu">
          <Menu />
        </div>
        <div className="cont-btn">
          <Link className="btn-contatti" to="/contatti">
            Contattaci per partecipare
          </Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header
