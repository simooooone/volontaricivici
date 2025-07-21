/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import("netlify-identity-widget").then((netlifyIdentity) => {
  window.netlifyIdentity = netlifyIdentity;
  window.netlifyIdentity.init();
});
