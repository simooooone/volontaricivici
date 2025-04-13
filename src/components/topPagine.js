import React from "react"
import Logo from "./logo"

const TopPagine = props => {
  const displayExtended = props.displayExtended || "none"
  const antiDisplayExtended = displayExtended === "none" ? "block" : "none"

  return (
    <div className="w-full top mx-0">
      <div className="cont-img-top int">
        <img alt={ props.alt }
          src={ props.immagineTop }
          className="img-top"
          width={ props.width } // Set width from props
          height={ props.height } // Set height from props
        />
        <div className="slogan-top">
          <div className="logo-mobi d-lg-none">
            <Logo width="100" height="100" className="mx-auto d-block" />
          </div>
          <div className="home" style={{ display: displayExtended }}>
            <div className="acronimo">{props.slogan}</div>
            {props.dedica}
          </div>
          <div className="acronimo" style={{ display: antiDisplayExtended }}>
            {props.slogan}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPagine
