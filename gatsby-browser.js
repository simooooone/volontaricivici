/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./src/styles/global.scss"
import "netlify-identity-widget"
if (typeof window !== "undefined") {
  window.netlifyIdentity = require("netlify-identity-widget")
  window.netlifyIdentity.init()
}
