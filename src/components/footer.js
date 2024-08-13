import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Logo from "./logo"

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query SiteFooterQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <footer className="footer my-10">
        <div className="container px-8">
          <div className="flex-auto">
            <Logo width="90" />
          </div>
          <div className="flex-auto"></div>
          <div className="flex-auto"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
