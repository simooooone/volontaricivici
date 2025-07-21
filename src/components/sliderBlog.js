// import React from "react"
// import { graphql, Link } from "gatsby"

const SliderBlog = ({ data }) => {
  // const filteredPosts = selectedTag
  //   ? data.allMarkdownRemark.edges
  //       .filter(edge => edge.node.frontmatter.tags.includes(selectedTag))
  //       .sort(
  //         (a, b) =>
  //           new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  //       )
  //   : data.allMarkdownRemark.edges.sort(
  //       (a, b) =>
  //         new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
  //     )

  return (
    <>
      {/* {filteredPosts.length ? (
        <div className="container-fluid pt-3 pb-5">
          <div className="row">
            {filteredPosts.map(edge => {
              const post = edge.node.frontmatter
              if (post.published) {
                return (
                  <div
                    className="contPost col-lg-4 col-md-6 col-12"
                    key={`${post.published}+${post.update}+${post.date}`}
                  >
                    <div className="image">
                      <Link
                        to={`/blog/${edge.node.fields.slug}`}
                        aria-label={`${post.titolo}`}
                      >
                        <img src={post.sideImage} alt={`${post.titolo}`} />
                      </Link>
                    </div>
                    <div className="post">
                      <Link
                        className="link-post linkUnderlined"
                        to={`/blog/${edge.node.fields.slug}`}
                        aria-label={`${post.titolo}`}
                      >
                        <h2 className="tito">{post.titolo}</h2>
                      </Link>
                      <div className="stito">{post.sottotitolo}</div>
                      <div className="data">{post.date}</div>
                    </div>
                  </div>
                )
              } else {
                return null
              }
            })}
          </div>
        </div>
      ) : null} */}
    </>
  )
}

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             titolo
//             sottotitolo
//             seo_description
//             seo_title
//             slogan
//             date
//             update
//             author
//             published
//             featuredImage
//             sideImage
//             tags
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }

//     site {
//       siteMetadata {
//         blogTitolo
//         blogDescription
//         blogAcronimo
//       }
//     }
//   }
// `

export default SliderBlog