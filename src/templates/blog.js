import React from "react"
import { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import FsLightbox from "fslightbox-react"
import TopPagine from "../components/topPagine"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          blogTitolo
          blogDescription
        }
      }
      allMarkdownRemark {
        nodes {
          id
          html
          frontmatter {
            title
            sottotitolo
            description
            slogan
            date
            update
            author
            published
            featuredImage
            sideImage
          }
        }
      }
    }
  `)

  const meta = data?.site?.siteMetadata
  const content = data?.allMarkdownRemark?.nodes[0]
  const front = content.frontmatter
  const [toggler, setToggler] = useState(false)

  return (
    <Layout>
      <Metatags
        titolo={meta.blogTitolo || ``}
        description={meta.blogDescription || ``}
      />
      <TopPagine
        alt={meta.blogTitolo}
        immagineTop={front.featuredImage}
        slogan={front.slogan}
      />
      <div className="container-fluid">
        <div className="row blocco pt-5">
          <div className="cont-img sticky-cont col-md-4 col-12">
            <button onClick={() => setToggler(!toggler)} className="btn-img">
              <img
                src={front.sideImage}
                alt={`${meta.blogTitolo}`}
                className="bordo"
              />
            </button>
            <FsLightbox toggler={toggler} sources={[front.sideImage]} />
          </div>
          <div className="cont-testo testo pt-0 col-md-8 col-12">
            <h1 className="titolo">{front.title}</h1>
            <h2 className="sottotitolo">{meta.blogDescription}</h2>
            <p>
              <em>{front.date}</em>
            </p>
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: content.html,
              }}
            ></div>
            <p>
              <Link to="/blog">&lsaquo; Torna all'elenco</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
