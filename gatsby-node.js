/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { update: { ne: null }, published: { eq: true } }
        }
        sort: [{ frontmatter: { update: ASC } }, { frontmatter: { date: ASC } }]
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = res.data.allMarkdownRemark.edges

  posts.forEach((edge, index) => {
    const previous = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        next,
        previous,
      },
    })
  })
}
