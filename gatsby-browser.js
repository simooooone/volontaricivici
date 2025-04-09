/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "netlify-identity-widget";

if (typeof window !== "undefined") {
  // Faccio in modo chbe ad ogni build il file css abia un nome univoco in modo che si aggiorni automaticamente senza dover eliminare la cache
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/styles/global.css?v=" + new Date().getTime();
  document.head.appendChild(link);

  window.netlifyIdentity = require("netlify-identity-widget");
  window.netlifyIdentity.init();
}
