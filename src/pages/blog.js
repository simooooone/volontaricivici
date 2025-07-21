import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Metatags from '../components/metatags';
import TopPagine from '../components/topPagine';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Blog = ({ location, data }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [publishedPosts, setPublishedPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([]);

  const getTagFromQueryString = () => {
    const params = new URLSearchParams(location.search);
    const tag = params.get('tag');
    return tag ? tag.replace(/_/g, ' ') : null;
  };

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

  const getPostsByTag = (posts, tag) => {
    return posts.filter(edge => edge.node.frontmatter.tags.includes(tag));
  };

  // Effect to handle URL changes and initial tag selection
  useEffect(() => {
    const tag = getTagFromQueryString();
    setSelectedTag(tag);
  }, [location.search]);

  // Effect to handle post filtering and sorting
  useEffect(() => {
    const posts = getPublishedPosts();
    setPublishedPosts(posts);

    const filteredPosts = selectedTag
      ? getPostsByTag(posts, selectedTag)
      : posts;

    const sortedTagIndex = [...filteredPosts].sort((a, b) => {
      return a.node.frontmatter.index < b.node.frontmatter.index ? -1 : 1;
    });

    setSortedPosts(sortedTagIndex);
  }, [selectedTag, data.allMarkdownRemark.edges]);


  const handleTagClick = tag => {
    const newUrl = tag
      ? `${location.pathname}?tag=${encodeURIComponent(tag.replace(/\s+/g, '_'))}`
      : location.pathname;
    window.history.pushState({}, '', newUrl);
    setSelectedTag(tag);
  };

  const tags = getAllTags(publishedPosts);
  const meta = data?.site?.siteMetadata;
  const immagineTopData = getImage(data?.immagineQuery?.childImageSharp?.gatsbyImageData);

  return (
    <Layout location={ location }>
      <Metatags
        location={ location.search ? `/blog/${location.search}` : "/blog/" }
        titolo={ `${meta.blogTitolo}` }
        description={ `${meta.blogDescription}` }
        immagineGatsbyData={ immagineTopData }

      />
      <TopPagine
        alt={ meta.blogTitolo }
        slogan={ meta.blogAcronimo }
        immagineGatsbyData={ immagineTopData }
      />
      <div className="container-fluid pt-5" id="content">
        <div className="row">
          <h1 className="titolo">Blog</h1>
          <div className="tagButtons">
            { tags.map(tag => (
              <button
                key={ tag }
                onClick={ () => handleTagClick(tag) }
                className={ `btnTag linkUnderlined normal maxc d-block ${selectedTag === tag ? 'active' : ''
                  }` }
              >
                { tag }
              </button>
            )) }
            { tags.length > 0 && (
              <button
                onClick={ () => handleTagClick(null) }
                className={ `btnTag linkUnderlined normal maxc d-block ${selectedTag === null ? 'active' : ''
                  }` }
              >
                Mostra Tutti
              </button>
            ) }
          </div>
        </div>
      </div>
      <div className="container-fluid pt-3 pb-5">
        <div className="row">
          { sortedPosts.length > 0 ? (
            sortedPosts.map((edge) => {
              const post = edge.node.frontmatter;
              return (
                <div
                  className="contPost col-lg-4 col-md-6 col-12"
                  key={ `${post.titolo} ${post.date}` }
                >
                  <div className="image">
                    <Link
                      to={ `/blog${edge.node.fields.slug}` }
                      aria-label={ `${post.titolo}` }
                    >
                      { getImage(post.featuredImage?.childImageSharp?.gatsbyImageData) ? (
                        <GatsbyImage
                          image={ getImage(post.featuredImage?.childImageSharp?.gatsbyImageData) }
                          alt={ `${post.titolo}` }
                          loading="lazy"
                          className=""
                        />
                      ) : null }
                    </Link>
                  </div>
                  <div className="post">
                    <Link
                      className="linkPost linkUnderlined"
                      to={ `/blog${edge.node.fields.slug}` }
                      aria-label={ `${post.titolo}` }
                    >
                      <h2 className="tito">
                        { post.titolo }
                      </h2>
                    </Link>
                    <div className="stito">
                      { post.sottotitolo }
                    </div>
                    <div className="data">{ post.date }</div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Spiacenti, non ci sono post da mostrare</div>
          ) }
        </div>
      </div>
    </Layout>
  );
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        blogTitolo
        blogDescription
        blogAcronimo
      }
    }
    immagineQuery: file(relativePath: { eq: "img-top-blog.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP]
          placeholder: BLURRED
          width: 1920
          layout: CONSTRAINED
          quality: 60
        )
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                  width: 500
                  layout: CONSTRAINED
                  quality: 60
                )
              }
            }
            slogan
            titolo
            sottotitolo
            tags
            index
            seo_title
            seo_description
            author
            date
            update
            published
          }
        }
      }
    }
  }
`;


export default Blog;
