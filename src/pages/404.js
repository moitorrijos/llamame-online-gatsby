import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Buttons from "../components/buttons"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Error 404" />
    <h1>Oh, no! Error 404</h1>
    <p>Disculpa, la página que estás buscando no existe.</p>
    <Buttons />
  </Layout>
)

export default NotFoundPage
