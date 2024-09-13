import React from "react"
import { useEffect } from "react"
import Menu from "./menu"
import Logo from "./logo"

const Header = () => {
  useEffect(() => {
    if (window.innerWidth > 991) {
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = window.innerHeight
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    )

    if (position > 10) {
      document.querySelector(".barraNavigazione").classList.add("fix")
    } else {
      document.querySelector(".barraNavigazione").classList.remove("fix")
    }
  }

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
