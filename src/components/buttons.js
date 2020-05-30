import React from "react"
import { Link } from "gatsby"

const Buttons = () => (
  <div className="main-container buttons">
    <Link to="/precios" className="conference-link primary">
      Conoce Nuestros Planes
    </Link>
    <Link to="/quienes-somos">Conoce Quiénes Somos</Link>
  </div>
)

export default Buttons
