import React from "react"
import { Link } from "gatsby"

const Buttons = () => {
  return (
    <div className="main-container buttons hide-on-mobile">
      <Link activeClassName="bottom-current-page" to="/precios">
        Conoce Nuestros Planes
      </Link>
      <Link activeClassName="bottom-current-page" to="/como-funciona">
        Conoce Cómo Funciona
      </Link>
      <Link activeClassName="bottom-current-page" to="/quienes-somos">
        Conoce Quiénes Somos
      </Link>
      <Link
        activeClassName="bottom-current-page"
        to="/contactanos"
        className="conference-link primary"
      >
        Contáctanos
      </Link>
    </div>
  )
}

export default Buttons
