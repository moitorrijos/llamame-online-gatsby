import React from "react"
import { Link } from "gatsby"
import Logo from "../icons/llamame-online-logo.svg"
import Email from "../icons/email.svg"

const Navigation = () => (
  <div className="main-container header-grid">
    <div className="logo">
      <Link to="/">
        <Logo className="llamame-online-logo" />
      </Link>
    </div>
    <div className="nav hide-on-mobile">
      <Link to="/" activeClassName="current-page">
        Inicio
      </Link>
      <Link to="/como-funciona" activeClassName="current-page">
        Cómo Funciona
      </Link>
      <Link to="/precios" activeClassName="current-page">
        Precios
      </Link>
      <Link to="/quienes-somos" activeClassName="current-page">
        Quiénes Somos
      </Link>
      <Link to="/videollamadas" activeClassName="current-page">
        Videollamadas
      </Link>
      <Link
        to="/contactanos"
        className="contact-button white"
        activeClassName="current-page"
      >
        Contáctanos <Email style={{ marginLeft: 20 }} />
      </Link>
    </div>
  </div>
)

export default Navigation
