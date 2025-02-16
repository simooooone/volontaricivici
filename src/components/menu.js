import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Location } from '@reach/router';
import moduloIscrizione from "../../content/assets/documenti/scheda-iscrizione-voci-nei-castelli.pdf";

const Menu = () => {
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
  `);

  const tags = [...new Set(data.allMarkdownRemark.edges.flatMap(edge => edge.node.frontmatter.tags))];

  return (
    <Location>
      { ({ location }) => (
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="link-underlined white" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown-container">
            <a
              href="#"
              className={ `voce-blog link-underlined white ${location.pathname.startsWith('/blog') ? 'active' : ''}` }
            >
              Blog
            </a>
            <div className="dropdown">
              <ul className="dropdown-list">
                <li key="all-posts" className="nav-subitem">
                  <Link
                    to="/blog"
                    className="link-underlined normal"
                    activeClassName="active"
                    partiallyActive={ true }
                  >
                    Tutti i Post
                  </Link>
                </li>
                { tags.map(tag => (
                  <li key={ tag } className="nav-subitem">
                    <Link
                      to={ `/blog?tag=${encodeURIComponent(tag)}` }
                      className="link-underlined normal"
                      activeClassName="active"
                      state={ { activeTag: tag } }
                    >
                      { tag }
                    </Link>
                  </li>
                )) }
              </ul>
            </div>
          </li>
          <li className="nav-item">
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
      ) }
    </Location>
  );
};

export default Menu;
