import PropTypes from "prop-types"
import React from "react"
import Logo from "../icons/llamame-online-logo.svg"
import HeroImage from "../icons/llamame-online-banner.svg"
import ConferenceLink from "../components/video-conference"
import "../styles/_header.sass"

const Header = () => (
  <header>
    <div className="main-container grid">
      <div className="logo">
        <Logo className="llamame-online-logo" />
      </div>
      <ConferenceLink color="white" mobileView="not-for-mobile" />
    </div>
    <div className="main-container grid">
      <div className="inner-text">
        <h1>Llama con Confianza</h1>
        <p>
          Llámame online es una plataforma rápida, segura y completamente gratis
          para crear conferencias online.
        </p>
        <ConferenceLink color="white" />
      </div>
      <div className="hero-image icon right">
        <HeroImage />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
