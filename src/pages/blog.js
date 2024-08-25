import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import TopPagine from "../components/topPagine"
import immagineUno from "../assets/images/blog-1.jpg"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              date
              titolo
              sottotitolo
              description
              published
              update
              featuredImage
              sideImage
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
  `)

  const meta = data?.site?.siteMetadata

  return (
    <Layout>
      <Metatags
        titolo={`${meta.blogTitolo}`}
        description={`${meta.blogDescription}`}
      />
      <TopPagine
        alt={meta.blogTitolo}
        slogan={meta.blogAcronimo}
        immagineTop={immagineUno}
      />
      <div className="container-fluid pt-5">
        <div className="row">
          <h1 className="titolo">Blog</h1>
        </div>
      </div>
      <div className="container-fluid pt-3 pb-5">
        <div className="row">
          {data.allMarkdownRemark.edges.length ? (
            data.allMarkdownRemark.edges.map(edge => {
              const post = edge.node.frontmatter

              if (post.published) {
                return (
                  <div
                    className="cont-post col-lg-4 col-md-6 col-12"
                    key={`${post.published}+${post.update}+${post.date}`}
                  >
                    <div className="image">
                      <Link to={`/${edge.node.fields.slug}`}>
                        <img src={post.sideImage} alt={`${post.titolo}`} />
                      </Link>
                    </div>
                    <div className="post">
                      <Link
                        className="link-post link-underlined"
                        to={`/${edge.node.fields.slug}`}
                      >
                        <h2 className="tito">{post.titolo}</h2>
                      </Link>
                      <div className="stito">{post.sottotiolo}</div>
                      <div className="data">{post.date}</div>
                    </div>
                  </div>
                )
              } else {
                return null
              }
            })
          ) : (
            <div>Spiacenti, non ci sono post da mostrare</div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
