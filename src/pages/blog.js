import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Metatags from "../components/metatags";
import TopPagine from "../components/topPagine";
import immagineUno from "../../content/assets/images/blog-1.jpg";

const Blog = ({ data, location }) => {
  // Ottieni il tag dall'URL se presente
  const urlParams = new URLSearchParams(location.search);
  const tagFromUrl = urlParams.get('tag');

  const [selectedTag, setSelectedTag] = useState(tagFromUrl);
  const meta = data?.site?.siteMetadata;

  // Aggiorna selectedTag quando cambia l'URL
  useEffect(() => {
    setSelectedTag(tagFromUrl);
  }, [tagFromUrl]);

  const tags = [...new Set(data.allMarkdownRemark.edges.flatMap(edge => edge.node.frontmatter.tags))];

  const filteredPosts = selectedTag
    ? data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.tags.includes(selectedTag))
    : data.allMarkdownRemark.edges;

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    // Aggiorna l'URL
    const newUrl = tag
      ? `${location.pathname}?tag=${encodeURIComponent(tag)}`
      : location.pathname;
    window.history.pushState({}, '', newUrl);
  };

  console.log("Tags:", tags);

  return (
    <Layout>
      <Metatags
        titolo={ `${meta.blogTitolo}` }
        description={ `${meta.blogDescription}` }
      />
      <TopPagine
        alt={ meta.blogTitolo }
        slogan={ meta.blogAcronimo }
        immagineTop={ immagineUno }
      />
      <div className="container-fluid pt-5">
        <div className="row">
          <h1 className="titolo">Blog</h1>
          <div className="tag-buttons">
            { tags.map(tag => (
              <button
                key={ tag }
                onClick={ () => handleTagClick(tag) }
                className={ `btn-tag link-underlined normal maxc d-block ${selectedTag === tag ? 'active' : ''}` }
              >
                { tag }
              </button>
            )) }
            { tags.length > 1 && (
              <button
                onClick={ () => handleTagClick(null) }
                className={ `btn-tag link-underlined normal maxc d-block ${selectedTag === null ? 'active' : ''}` }
              >
                Mostra Tutti
              </button>
            ) }
          </div>
        </div>
      </div>
      <div className="container-fluid pt-3 pb-5">
        <div className="row">
          { filteredPosts.length ? (
            filteredPosts.map(edge => {
              const post = edge.node.frontmatter;

              if (post.published) {
                return (
                  <div
                    className="cont-post col-lg-4 col-md-6 col-12"
                    key={ `${post.published}+${post.update}+${post.date}` }
                  >
                    <div className="image">
                      <Link to={ `/blog/${edge.node.fields.slug}` }>
                        <img src={ post.sideImage } alt={ `${post.titolo}` } />
                      </Link>
                    </div>
                    <div className="post">
                      <Link
                        className="link-post link-underlined"
                        to={ `/blog/${edge.node.fields.slug}` }
                      >
                        <h2 className="tito">{ post.titolo }</h2>
                      </Link>
                      <div className="stito">{ post.sottotitolo }</div>
                      <div className="data">{ post.date }</div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })
          ) : (
            <div>Spiacenti, non ci sono post da mostrare</div>
          ) }
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            titolo
            sottotitolo
            seo_description
            seo_title
            slogan
            date
            update
            author
            published
            featuredImage
            sideImage
            tags
          }
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        blogTitolo
        blogDescription
        blogAcronimo
      }
    }
  }
`;

export default Blog;
