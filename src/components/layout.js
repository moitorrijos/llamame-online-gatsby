import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer"
import "../styles/main.sass"

const Layout = ({ children }) => (
  <>
    <div className="main-container">{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
