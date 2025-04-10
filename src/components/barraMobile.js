import React, { useState } from "react"
import Menu from "./menu"
import Logo from "./logo"

const BarraMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBar = () => {
    // console.log("BarraMobile.js toggleBar isOpen:", !isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <div className={`barra-mobile ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleBar}>
        ☰
      </button>
      <Logo width="40" height="40" />
      <Menu setIsOpen={(value) => {
        setIsOpen(value)
      }} />
    </div>
  )
};

export default BarraMobile;