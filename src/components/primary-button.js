import React from "react"

const PrimaryButton = ({ color, linkTo, children }) => (
  <a href={linkTo ? linkTo : "#0"} className={`conference-link ${color}`}>
    {children}
  </a>
)

export default PrimaryButton
