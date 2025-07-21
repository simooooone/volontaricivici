import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import moduloIscrizione from "../../content/assets/documenti/scheda-iscrizione-voci-nei-castelli.pdf"

const Menu = ({ setIsOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
              published
            }
          }
        }
      }
    }
  `);

  const [isHovered, setIsHovered] = useState(false);

  const getPublishedPosts = () => {
    return data.allMarkdownRemark.edges.filter(
      edge => edge.node.frontmatter.published
    );
  };


  const getAllTags = posts => {
    const allTags = new Set();
    posts.forEach(edge => {
      const tags = edge.node.frontmatter.tags || [];
      tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags);
  };


  const tags = getAllTags(getPublishedPosts());

  const handleLinkClick = () => {
    if (typeof setIsOpen === 'function') {
      setIsOpen(false);
    }
  };

  return (
    <Location>
      {({ location }) => (
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              className="linkUnderlined white"
              aria-label="Home Page"
              activeClassName="active"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item dropdown-container">
            <button
              onClick={ e => e.preventDefault() }
              onMouseEnter={ () => setIsHovered(true) }
              onMouseLeave={ () => setIsHovered(false) }
              className={ `voce-blog linkUnderlined white greyed ${isHovered ? 'opened' : ''} ${location.pathname.startsWith('/blog')
                ? 'active'
                : ''
                }` }
            >
              Blog
            </button>

            <div className="dropdown">
              <ul className="dropdown-list">
                <li key="all-posts" className="nav-subitem">
                  <Link
                    to="/blog"
                    className="linkUnderlined normal"
                    activeClassName="active"
                    aria-label="Tutti i Post"
                    partiallyActive={ true }
                    onClick={ handleLinkClick }
                  >
                    Tutti i Post
                  </Link>
                </li>
                { tags.map(tag => (
                  <li key={ tag } className="nav-subitem">
                    <Link
                      to={ `/blog?tag=${encodeURIComponent(tag.replace(/\s+/g, '_'))}` }
                      className="linkUnderlined normal"
                      activeClassName="active"
                      aria-label={ `Post con tag ${tag}` }
                      state={ { activeTag: tag } }
                      onClick={ handleLinkClick }
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
              className="linkUnderlined white"
              target="_blank"
              alt="Modulo di iscrizione all'associazione Vo.Ci nei Castelli"
              href={ moduloIscrizione }
              rel="noopener noreferrer"
              onClick={ handleLinkClick }
            >
              Modulo di Iscrizione
            </a>
          </li>
        </ul>
      )}
    </Location>
  );
};

export default Menu;
