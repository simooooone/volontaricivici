import * as React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <>
    <ul className="menu-top">
      <li className="li">
        <Link to="/" className="link-navbar">
          Home
        </Link>
      </li>
      <li className="li">
        <Link to="/chi-siamo" className="link-navbar">
          Chi Siamo
        </Link>
      </li>
      <li className="li">
        <Link to="/cosa-facciamo" className="link-navbar">
          Cosa Facciamo
        </Link>
      </li>
      <li className="li">
        <Link to="/" className="link-navbar">
          Blog
        </Link>
      </li>
    </ul>
  </>
)

export default Menu
