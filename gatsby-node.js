/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(
    `
        {
          allMarkdownRemark(
            sort: [
              { frontmatter: { date: ASC } },
              { frontmatter: { update: ASC } }
            ]
            limit: 1000
          ) {
            nodes {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                index
                published
              }
            }
          }
        }
      `
  );

  // Define a template for blog post
  // const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);


  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes.filter(node => node.frontmatter.published);

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post) => {
      // console.log('previousPost: ', previousPost);
      // console.log('nextPost: ', nextPost);
      // console.log('post: ', post);
      // console.log('page: ', page);
      // console.log('page.context: ', page.context);
      // console.log('actions: ', actions);
      // console.log('index: ', index);

      const currentTags = post.frontmatter.tags;
      const currentIndex = post.frontmatter.index;

      const nextPost = posts.find(
        (p) =>
          p.frontmatter.tags.some((tag) => currentTags.includes(tag)) &&
          p.frontmatter.index === currentIndex + 1
      );

      const previousPost = posts.find(
        (p) =>
          p.frontmatter.tags.some((tag) => currentTags.includes(tag)) &&
          p.frontmatter.index === currentIndex - 1
      );

      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPostTemplate,
        context: {
          id: post.id,
          slug: post.fields.slug,
          tags: post.frontmatter.tags,
          index: post.frontmatter.index,
          previous: previousPost ? previousPost : null,
          next: nextPost ? nextPost : null,
        },
      });
    });
  }
};

module.exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
      type MarkdownRemarkFrontmatter {
        featuredImage: File @fileByRelativePath
        sideImage: File @fileByRelativePath
        slogan: String
        titolo: String
        sottotitolo: String
        tags: [String]
        index: Int
        seo_title: String
        seo_description: String
        author: String
        date: Date @dateformat
        update: Date @dateformat
        published: Boolean
      }

      type MarkdownRemark implements Node {
        frontmatter: MarkdownRemarkFrontmatter!
        fields: MarkdownRemarkFields
      }

      type MarkdownRemarkFields {
        slug: String!
      }
    `;

  createTypes(typeDefs);
};

