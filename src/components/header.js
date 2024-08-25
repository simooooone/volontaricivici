import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import Logo from "./logo"

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = window.innerHeight
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    )
    setScrollPosition(position)

    if (position > 10) {
      document.querySelector(".barraNavigazione").classList.add("fix")
    } else {
      document.querySelector(".barraNavigazione").classList.remove("fix")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header>
      <div className="barraNavigazione w-full">
        <div className="cont-barra px-4">
          <div className="cont-logo">
            <Logo />
          </div>
          <div className="cont-menu">
            <Menu />
          </div>
          {/* <div className="cont-btn">
            <Link className="btn-contatti" to="/contatti">
              Contattaci per partecipare
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
