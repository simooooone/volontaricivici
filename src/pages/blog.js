import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              date
              title
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
          blogTitle
          blogDescription
        }
      }
    }
  `)

  return (
    <Layout>
      <Metatags
        title={`${data.site.siteMetadata.blogTitle}`}
        description={`${data.site.siteMetadata.blogDescription}`}
      />
      <h1>Blog</h1>
      <ol className="posts">
        {data.allMarkdownRemark.edges.length ? (
          data.allMarkdownRemark.edges.map(edge => {
            const post = edge.node.frontmatter

            if (post.published) {
              return (
                <li
                  className="post"
                  key={`${post.published}+${post.update}+${post.date}`}
                >
                  <Link to={`/${edge.node.fields.slug}`}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>
                      <em>{post.date}</em>
                    </p>
                  </Link>
                </li>
              )
            } else {
              return null
            }
          })
        ) : (
          <div>Spiacenti, non ci sono post da mostrare</div>
        )}
      </ol>
    </Layout>
  )
}

export default Blog
