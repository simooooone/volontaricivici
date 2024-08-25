import * as React from "react"
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
            titolo
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

  let meta = data?.site?.siteMetadata
  let post_content = data?.allMarkdownRemark?.nodes[0]
  let front = post_content.frontmatter
  const immagineTop = front.featuredImage
  const immagineSide = front.sideImage
  const [toggler, setToggler] = useState(false)

  return (
    <Layout>
      <Metatags
        titolo={meta.blogTitolo || ``}
        description={meta.blogDescription || ``}
      />
      {/* <div className="w-full top mx-0">
        <div className="cont-img-top int">
          <img
            src={immagineTop}
            alt={`image top ${meta.blogTitolo}`}
            className="img-top"
          />
          <div className="slogan-top">
            <div className="acronimo">{front.slogan}</div>
          </div>
        </div>
      </div> */}

      <TopPagine
        alt={meta.blogTitolo}
        immagineTop={immagineTop}
        slogan={front.slogan}
      />
      <div className="container-fluid">
        <div className="row blocco pt-5">
          <div className="cont-img sticky-cont col-md-4 col-12">
            <button onClick={() => setToggler(!toggler)} className="btn-img">
              <img
                src={immagineSide}
                alt={`${meta.blogTitolo}`}
                className="bordo"
              />
            </button>
            <FsLightbox toggler={toggler} sources={[{ immagineSide }]} />
          </div>
          <div className="cont-testo testo sticky-cont pt-0 col-md-8 col-12">
            <h1 className="titolo">{front.titolo}</h1>
            <h2 className="sottotitolo">{meta.blogDescription}</h2>
            <p>
              <em>{front.date}</em>
            </p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: post_content.html }}></div>
            {/* <div>{parse(post.html, { replace: replaceCode })}</div> */}
            {/* <div className="blog-post-nav">
              <Link
                to={`/${prev == null ? "" : prev.fields.slug}`}
                className={prev || "hideme"}
              >
                &lsaquo; Precedente
              </Link>
              <Link
                to={`/${next == null ? "" : next.fields.slug}`}
                className={next || "hideme"}
              >
                Seguente &rsaquo;
              </Link>
            </div> */}
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
