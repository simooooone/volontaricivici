import * as React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <>
    <ul className="menu-top">
      <li className="li">
        <Link to="/" className="link-navbar" activeClassName="active">
          Home
        </Link>
      </li>
      <li className="li">
        <Link to="/chi-siamo" className="link-navbar" activeClassName="active">
          Chi Siamo
        </Link>
      </li>
      <li className="li">
        <Link
          to="/cosa-facciamo"
          className="link-navbar"
          activeClassName="active"
        >
          Cosa Facciamo
        </Link>
      </li>
      <li className="li">
        <Link to="/blog" className="link-navbar" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </>
)

export default Menu
