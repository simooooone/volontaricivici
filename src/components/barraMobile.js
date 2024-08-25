import React, { useState } from "react"
import Menu from "./menu"

const BarraMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`barra-mobile ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleBar}>
        ☰
      </button>
      <Menu />
    </div>
  )
}

export default BarraMobile
