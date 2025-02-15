import React from "react";
import { Link } from "gatsby";
import moduloIscrizione from "../../content/assets/documenti/scheda-iscrizione-voci-nei-castelli.pdf";
// import statuto from "../../content/assets/documenti/statuto-voci-nei-castelli.pdf"
// import attoCostitutivo from "../../content/assets/documenti/atto-costitutivo-voci-nei-castelli.pdf"

const Menu = () => (
  <>
    <ul className="menu-top">
      <li className="li">
        <Link to="/" className="link-underlined white" activeClassName="active">
          Home
        </Link>
      </li>
      {/* <li className="li">
        <Link
          to="/direttivo"
          className="link-underlined white"
          activeClassName="active"
        >
          Direttivo
        </Link>
      </li>*/}
      {/*  <li className="li">
        <a
          className="link-underlined white"
          target="_blank"
          href={statuto}
          rel="noopener noreferrer"
        >
          Statuto
        </a>
      </li>*/}
      {/*  <li className="li">
        <a
          className="link-underlined white"
          target="_blank"
          href={attoCostitutivo}
          rel="noopener noreferrer"
        >
          Atto Costitutivo
        </a>
      </li> */}
      <li className="li">
        <Link to="/blog" className="link-underlined white" activeClassName="active">
          Progetti Eventi ed Iniziative
        </Link>
      </li>
      <li className="li">
        <a
          className="link-underlined white"
          target="_blank"
          href={ moduloIscrizione }
          rel="noopener noreferrer"
        >
          Modulo di Iscrizione
        </a>
      </li>
    </ul>
  </>
);

export default Menu;
