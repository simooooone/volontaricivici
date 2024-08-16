import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Metatags from "../components/metatags"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Blog = () => {
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
          id
          html
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, width: 1920, height: 1080)
              }
            }
          }
        }
      }
    }
  `)
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         blogTitle
  //         blogDescription
  //       }
  //     }

  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           title
  //           date
  //           author
  //           update
  //           published
  //           slogan
  //           featuredImage {
  //             childImageSharp {
  //               gatsbyImageData(
  //                 layout: FULL_WIDTH
  //                 placeholder: BLURRED
  //                 formats: [AUTO, WEBP, AVIF]
  //               )
  //             }
  //           }
  //         }
  //         html
  //         fields {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)

  // markdownRemark(fields: { slug: { eq: $slug } }) {
  //   id
  //   html
  //   frontmatter {
  //     title
  //     featuredImage {
  //       childImageSharp {
  //         gatsbyImageData(layout: FULL_WIDTH)
  //       }
  //     }
  //   }
  // }

  let meta = data?.site?.siteMetadata
  let post_content = data?.allMarkdownRemark?.nodes[0]
  let front = post_content.frontmatter
  const immagine = getImage(front.featuredImage.childImageSharp.gatsbyImageData)
  // let prev = props?.pageContext?.previous
  // let next = props?.pageContext?.next
  // console.log("el: ", immagine)
  // console.log("path: ", front.featuredImage.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <Metatags
        title={meta.blogTitle || ``}
        description={meta.blogDescription || ``}
      />
      <div className="w-full top mx-0">
        <div className="cont-img-top int">
          {immagine ? (
            <>
              <GatsbyImage
                className="img-top"
                image={immagine}
                alt={`Immagine top ${meta.blogTitle}`}
              />
              {/* 
              <Img
                fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={data.frontmatter.title + " - Featured image"}
                className="featured-image"
              /> */}
              <div className="slogan-top">
                <div className="acronimo">{front.slogan}</div>
              </div>
            </>
          ) : (
            <div className="slogan-top">
              <div className="acronimo">{front.slogan}</div>
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row blocco">
          <div className="cont-testo col-12">
            <h1 className="titolo">{front.title}</h1>
            <h2 className="sottotitolo">{meta.blogDescription}</h2>
            {/* <p>
              <Link to="/blog">&lsaquo; Back to Blog index</Link>
            </p>
            <p>
              {front.author} <em>{front.date}</em>
            </p>
            <p>
              updated <em>{front.update}</em>
            </p>
            <br />
             */}
            <div dangerouslySetInnerHTML={{ __html: post_content.html }}></div>
            {/* <div>{parse(post.html, { replace: replaceCode })}</div> */}
            {/* <div className="blog-post-nav">
              <Link
                to={`/${prev == null ? "" : prev.fields.slug}`}
                className={prev || "hideme"}
              >
                &lsaquo; prev
              </Link>
              <Link
                to={`/${next == null ? "" : next.fields.slug}`}
                className={next || "hideme"}
              >
                next &rsaquo;
              </Link>
            </div> */}
            <p>
              <Link to="/blog">&lsaquo; Back to Blog index</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
