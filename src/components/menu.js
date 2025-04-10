import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import moduloIscrizione from "../../content/assets/documenti/scheda-iscrizione-voci-nei-castelli.pdf"

const Menu = ({ setIsOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  const tags = [
    ...new Set(
      data.allMarkdownRemark.edges.flatMap(edge => edge.node.frontmatter.tags)
    ),
  ];

  const handleLinkClick = () => {
    if (typeof setIsOpen === "function") {
      setIsOpen(false)
    } else {
      console.log("setIsOpen is not a function")
    }
  }

  return (
    <Location>
      {({ location }) => (
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              className="link-underlined white"
              aria-label="Home Page"
              activeClassName="active"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item dropdown-container">
            <a
              href="#" 
              className={`voce-blog link-underlined white greyed ${
                location.pathname.startsWith("/blog") ? "active" : ""
              }`}
            >
              Blog
            </a>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li key="all-posts" className="nav-subitem">
                  <Link
                    to="/blog#content"
                    className="link-underlined normal"
                    activeClassName="active"
                    aria-label="Tutti i Post"
                    partiallyActive={true}
                    onClick={handleLinkClick}
                  >
                    Tutti i Post
                  </Link>
                </li>
                {tags.map(tag => (
                  <li key={tag} className="nav-subitem">
                    <Link
                      to={`/blog#content?tag=${encodeURIComponent(tag)}`}
                      className="link-underlined normal"
                      activeClassName="active"
                      aria-label={`Post con tag ${tag}`}
                      state={{ activeTag: tag }}
                      onClick={handleLinkClick}
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="link-underlined white"
              target="_blank"
              alt="Modulo di iscrizione all'associazione Vo.Ci nei Castelli"
              href={moduloIscrizione}
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Modulo di Iscrizione
            </a>
          </li>
        </ul>
      )}
    </Location>
  )
}

export default Menu
