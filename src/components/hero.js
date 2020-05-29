import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import HeroImage from "../icons/llamame-online-hero.svg"
import PrimaryButton from "./primary-button"
import ArrowDown from "../icons/arrow-down.svg"

const Hero = () => (
  <header>
    <Navigation />
    <div className="main-container hero-grid">
      <div className="inner-text">
        <h1>
          Centrales Telefónicas y Videollamadas en la nube para tu empresa
        </h1>
        <p>
          Atiende llamadas de teléfonos fijos, móviles y videollamadas en un
          solo servicio.
        </p>
        <PrimaryButton color="white" linkTo="#pricing-cards">
          Conoce Nuestros Planes <ArrowDown style={{ marginLeft: 20 }} />
        </PrimaryButton>
      </div>
      <div className="hero-image icon right">
        <HeroImage />
      </div>
    </div>
  </header>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
