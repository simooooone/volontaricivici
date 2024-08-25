import React from "react"

const TopPagine = props => {
  return (
    <div className="w-full top mx-0">
      <div className="cont-img-top int">
        <img alt={props.alt} src={props.immagineTop} className="img-top" />
        <div className="slogan-top">
          <div className="acronimo">{props.slogan}</div>
        </div>
      </div>
    </div>
  )
}

export default TopPagine
