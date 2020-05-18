import React from "react"
import "../styles/_primary-button.sass"

const PrimaryButton = ({ color, linkTo, children }) => (
  <a href={linkTo ? linkTo : "#0"} className={`conference-link ${color}`}>
    {children}
  </a>
)

export default PrimaryButton
