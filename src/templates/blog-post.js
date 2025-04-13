import React from "react"
import { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import FsLightbox from "fslightbox-react"
import TopPagine from "../components/topPagine"

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        slogan
        titolo
        sottotitolo
        tags
        seo_title
        seo_description
        author
        date
        update
        published
        featuredImage
        sideImage
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const [toggler, setToggler] = useState(false)
  const post = data.markdownRemark
  const front = post.frontmatter
  return (
    <Layout>
      <Metatags
        titolo={front.seo_title || ``}
        description={front.seo_description || ``}
      />
      <TopPagine
        alt={front.seo_title}
        immagineTop={front.featuredImage}
        slogan={ front.slogan } />
      <div className="container-fluid" id="content">
        <div className="row blocco pt-5">
          <div className="cont-img sticky-cont col-md-4 col-12">
            <button onClick={() => setToggler(!toggler)} className="btn-img">
              <img
                src={front.sideImage}
                alt={`${front.titolo}`}
                className="bordo"
              />
            </button>
            <FsLightbox toggler={toggler} sources={[front.sideImage]} />
          </div>
          <div className="cont-testo testo pt-0 col-md-8 col-12">
            <h3 className="tags">{front.tags}</h3>
            <br />
            <h1 className="titolo">{front.titolo}</h1>
            <h2 className="sottotitolo">{front.sottotitolo}</h2>
            <div className="author">Di: {front.author}</div>
            <p className="cont-date">
              <em className="date">Data pubblicazione: {front.date}</em>
              <em className="update">Ultimo aggiornamento: {front.update}</em>
            </p>
            <br />
            <div
              dangerouslySetInnerHTML={{
                __html: post.html,
              }}
            ></div>
            <p>
              <Link to="/blog" className="link-underlined normal maxc d-block"
              aria-label="Torna all'elenco">
                &lsaquo; Torna all'elenco
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
