import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"

const Blog = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          blogTitle
          blogDescription
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
            author
            update
            published
          }
          html
          fields {
            slug
          }
        }
      }
    }
  `)

  let metas = data?.site?.siteMetadata
  let post_content = data?.allMarkdownRemark?.nodes[0]
  let page_context = props?.pageContext

  return (
    <Layout myimg="3" alt="Il mio blog">
      <Metatags
        title={metas.blogTitle || ``}
        description={metas.blogDescription || ``}
      />
      <p>
        <Link to="/blog">&lsaquo; Back to Blog index</Link>
      </p>
      <br />
      <h1>{metas.blogTitle}</h1>
      <p>
        {post_content.frontmatter.author}{" "}
        <em>{post_content.frontmatter.date}</em>
      </p>
      <p>
        updated <em>{post_content.frontmatter.update}</em>
      </p>
      <br />
      <div dangerouslySetInnerHTML={{ __html: post_content.html }}></div>
      {/* <div>{parse(post.html, { replace: replaceCode })}</div> */}
      <div className="blog-post-nav">
        <Link
          to={`/${
            page_context.previous == null
              ? ""
              : page_context.previous.fields.slug
          }`}
          className={page_context.previous || "hideme"}
        >
          &lsaquo; prev
        </Link>
        <Link
          to={`/${
            page_context.next == null ? "" : page_context.next.fields.slug
          }`}
          className={page_context.next || "hideme"}
        >
          next &rsaquo;
        </Link>
      </div>
      <p>
        <Link to="/blog">&lsaquo; Back to Blog index</Link>
      </p>
    </Layout>
  )
}

export default Blog
