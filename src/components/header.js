import PropTypes from "prop-types"
import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Logo from "../icons/llamame-online-logo.svg"
import HeroImage from "../icons/llamame-online-hero.svg"
import PrimaryButton from "./primary-button"
import ArrowDown from "../icons/arrow-down.svg"
import Email from "../icons/email.svg"
import "../styles/_header.sass"

const Header = ({ header }) => (
  <header>
    <div className="main-container header-grid">
      <div className="logo">
        <Logo className="llamame-online-logo" />
      </div>
      <div className="nav hide-on-mobile">
        <a href="#pricing-cards" className="hide-on-tablet">
          {header.button}
        </a>
        <PrimaryButton color="white">
          {header.contact} <Email style={{ marginLeft: 20 }} />
        </PrimaryButton>
      </div>
    </div>
    <div className="main-container grid">
      <div className="inner-text">
        <h1>{header.text}</h1>
        <PrimaryButton color="white" linkTo="#pricing-cards">
          {header.button} <ArrowDown style={{ marginLeft: 20 }} />
        </PrimaryButton>
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
