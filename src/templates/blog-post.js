import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import TopPagine from "../components/topPagine"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const BlogPost = (props) => {
  const { data, pageContext } = props
  const post = data.markdownRemark
  const front = post.frontmatter
  const immagineTopData = getImage(front.featuredImage?.childImageSharp?.gatsbyImageData)
  const immagineSideData = getImage(front.sideImage?.childImageSharp?.gatsbyImageData)

  return (
    <Layout>
      <Metatags
        location={ `/blog${post.fields.slug}` }
        titolo={ front.seo_title || `` }
        description={ front.seo_description || `` }
        immagineGatsbyData={ immagineTopData || null }
      />
      <TopPagine
        alt={ front.seo_title || front.titolo || 'Immagine principale del post' }
        slogan={ front.slogan }
        immagineGatsbyData={ immagineTopData || null }
      />
      <div className="container-fluid" id="content">
        <div className="row blocco pt-4 pt-md-5">
          <div className="contImg sticky-cont col-md-4 col-12 d-none d-md-block">
            { immagineSideData ? (
              <GatsbyImage
                image={ immagineSideData }
                loading="lazy"
                alt={ `${front.titolo}` }
                className="bordo h-image-detail w-100"
              />
            ) : null }
          </div>
          <div className="contTesto testo pt-0 col-md-8 col-12">
            <h3 className="tags">{ front.tags }</h3>
            <br />
            <h1 className="titolo">{ front.titolo }</h1>
            <h2 className="sottotitolo">{ `${front.slogan}  ${front.sottotitolo}` }</h2>
            <div className="author">Di: { front.author }</div>
            <p className="cont-date">
              <em>Data: { front.date }</em>
            </p>
            <div
              dangerouslySetInnerHTML={ {
                __html: post.html,
              } }
            ></div>
            <div className="container-fluid" id="content">
              <div className="row blocco mt-5">
                <div className="col-12 footer-post">
                  <Link
                    to={ pageContext.previous ? `/blog${pageContext.previous.fields.slug}` : '#' }

                    className="d-inline-block linkUnderlined normal maxc"
                    aria-disabled={ pageContext.previous ? "false" : "true" }

                  >
                    &lsaquo; Precedente
                  </Link>
                  <Link
                    to="/blog"
                    className="d-inline-block link-to-list linkUnderlined normal maxc"
                    aria-label="Torna all'elenco"
                  >
                    Torna all'elenco
                  </Link>
                  <Link
                    to={ pageContext.next ? `/blog${pageContext.next.fields.slug}` : '#' }

                    className="d-inline-block linkUnderlined normal maxc"
                    aria-disabled={ pageContext.next ? "false" : "true" }
                  >
                    Successivo &rsaquo;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        featuredImage {
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
        sideImage {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              placeholder: BLURRED
              width: 1000
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
`

export default BlogPost
